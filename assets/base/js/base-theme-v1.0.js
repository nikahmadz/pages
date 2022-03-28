"use strict";
;
((Export) => { window.base = Export(window.base); })((B = {}) => {
    const W = window, D = document, U = void 0, F = () => { }, Doc = D.documentElement || D.body, TRUE = !0, FALSE = !1, typeOf = (value) => typeof value, objectOf = (value) => Object.prototype.toString.call(value), F_TYPE = typeOf(F), A_TYPE = objectOf([]), S_TYPE = typeOf(''), isArray = (Array.isArray
        ? ((v) => Array.isArray(v))
        : ((v) => objectOf(v) === A_TYPE)), fail = (string) => { throw string; }, invalidArgs = (forWhat, expecting) => fail(`Invalid argument ${forWhat}` + (expecting ? `. Expecting (${expecting})` : '')), JsonParse = (v, reviver) => {
        try {
            const o = JSON.parse(v, reviver);
            if (o && typeof o === "object") {
                return o;
            }
        }
        catch (err) { }
    }, JsonStringify = (v, replacer, space) => {
        try {
            return JSON.stringify(v, replacer, space);
        }
        catch (err) { }
    }, nodeId = (id) => D.getElementById(id || ''), newNode = (tag, op, childs) => {
        const elem = D.createElement(tag);
        if (op) {
            for (const k in op) {
                elem.setAttribute(k, op[k]);
            }
        }
        if (childs) {
            appendNodes(elem, childs);
        }
        return elem;
    }, appendNode = (ref, node) => {
        if (node) {
            if (typeOf(node) === S_TYPE) {
                return ref.appendChild(D.createTextNode(node));
            }
            return ref.appendChild(node);
        }
    }, appendNodes = (ref, childs) => {
        if (isArray(childs)) {
            for (let i = 0; i < childs.length; i++) {
                appendNode(ref, childs[i]);
            }
        }
        else {
            appendNode(ref, childs);
        }
    }, MatchClass = (r) => new RegExp('(^|\\s+)(' + r + ')\\s*(?=(\\s|$))', 'g'), MatchSeperator = new RegExp(`[\\.\\|\\s]+`, 'g'), changeClass = (node, old, add) => {
        const c = (s, r = '|') => s.replace(MatchSeperator, r).trim(), a = add ? c(add, ' ') : '', r = c(a + '|' + old);
        node.className = (node.className.replace(MatchClass(r), '')
            + (a.length ? ' ' + a : '')).trim();
        return node;
    }, hasEventListener = (e) => 'addEventListener' in e && 'removeEventListener' in e, hasEventAttacher = (e) => 'attachEvent' in e && 'detachEvent' in e, listenTo = (e, t, h, o) => {
        if (hasEventListener(e)) {
            e.addEventListener(t, h, o);
            return { h: h, stop: () => stopListenTo(e, t, h, o) };
        }
        else if (hasEventAttacher(e)) {
            const _h = (event) => {
                h.apply(e, event);
                if (o && o.once) {
                    e.detachEvent('on' + t, _h);
                }
            };
            e.attachEvent('on' + t, _h);
            return { h: _h, stop: () => e.detachEvent('on' + t, _h) };
        }
        else {
            fail('Fail to add event listener.');
        }
    }, stopListenTo = (e, t, h, o) => {
        if (hasEventListener(e)) {
            e.removeEventListener(t, h, o);
        }
        else if (hasEventAttacher(e)) {
            e.detachEvent('on' + t, h);
        }
        else {
            fail('Fail to remove event listener.');
        }
    }, keypress = (f, isComposing) => (ev) => {
        if (isComposing && ev.isComposing) {
            return;
        }
        f(ev);
    }, cleanList = (list, item) => {
        const i = list.indexOf(item);
        if (i >= 0) {
            delete list[i];
            cleanList(list, item);
        }
    }, timeout = setTimeout, storage = (() => {
        const I = (storage) => {
            if (storage) {
                const onChangeCalls = [], cleanOnChange = (f) => { cleanList(onChangeCalls, f); }, onChange = (f) => { if (typeOf(f) === F_TYPE) {
                    onChangeCalls.push(f);
                } }, changed = () => {
                    for (let i = 0; i < onChangeCalls.length; i++) {
                        if (onChangeCalls[i] && typeOf(onChangeCalls[i]) === F_TYPE) {
                            onChangeCalls[i]();
                        }
                    }
                }, getString = (k) => (storage.getItem(k) || ''), setString = (k, v) => { storage.setItem(k, v); changed(); }, remove = (k) => { storage.removeItem(k); changed(); }, getNumber = (k) => parseInt('' + (storage.getItem(k) || 0)), setNumber = (k, v) => setString(k, '' + v), getJson = (k, d = '{}') => JsonParse(storage.getItem(k) || d) || JsonParse(d) || {}, setJson = (k, v, d = '{}') => setString(k, JsonStringify(v) || d), validateJson = (k) => {
                    const item = storage.getItem(k), json = JsonParse(item), isCorrupted = (item && !json);
                    if (isCorrupted) {
                        const m = `Base found corrupted data on [${k}].`;
                        console.log('%c' + m, 'color:tomato');
                        timeout(() => {
                            if (confirm(`${m} Recover bad data?`)) {
                                const x = `${k}.${Date.now().toString(36)}.x`, n = `Data has been recovered as [${x}].`;
                                local.setString(x, item);
                                timeout(() => { console.log('%c' + n, 'color:orange'); alert(n); });
                            }
                        });
                    }
                    return !isCorrupted;
                }, size = () => {
                    let space = 0;
                    for (let i = 0; i < storage.length; i++) {
                        const k = storage.key(i);
                        if (k) {
                            space += getString(k).length;
                        }
                    }
                    return space;
                };
                listenTo(W, 'storage', changed);
                return {
                    storage: storage,
                    getString: getString,
                    setString: setString,
                    getNumber: getNumber,
                    setNumber: setNumber,
                    getJson: getJson,
                    setJson: setJson,
                    validateJson: validateJson,
                    onChange: onChange,
                    cleanOnChange: cleanOnChange,
                    remove: remove,
                    size: size,
                };
            }
        };
        return I;
    })(), local = storage(W.localStorage), localData = (() => {
        const storage = local, key = 'base', data = (() => {
            if (storage) {
                storage.validateJson(key);
                return storage.getJson(key);
            }
            else {
                return {};
            }
        })(), get = (k) => data[k], set = (k, v) => {
            data[k] = v;
            if (storage) {
                storage.setJson(key, data);
                return TRUE;
            }
            else {
                return FALSE;
            }
        };
        storage.onChange(() => { if (!storage.validateJson(key)) {
            storage.setJson(key, data);
        } });
        return { get: get, set: set, remove: (k) => { set(k, U); } };
    })(), theme = (() => {
        const id = '_color-scheme', key = 'theme';
        let current = '', LIST = ['_dark'], e = nodeId(id);
        if (!e) {
            e = newNode('meta', { name: "color-scheme", content: "normal", id: id });
            D.head.appendChild(e);
        }
        const meta = e, media = W.matchMedia, list = (names) => {
            if (!isArray(names)) {
                return invalidArgs('to change theme');
            }
            LIST = names;
        }, set = (name = '') => {
            changeClass(Doc, current, name);
            let scheme = 'normal';
            if (name.slice(1, 5) === 'dark') {
                scheme = 'dark';
            }
            meta.setAttribute('content', scheme);
            localData.set(key, name);
            return current = name;
        }, change = (c = LIST) => {
            if (typeOf(c) === S_TYPE) {
                return set(c);
            }
            else if (isArray(c)) {
                list(c);
                return set(c[c.indexOf(current) + 1] || '');
            }
            return invalidArgs('to change theme');
        };
        if (media) {
            const prefers_dark = media('(prefers-color-scheme: dark)');
            if (localData.get(key) !== U) {
                set(localData.get(key));
            }
            else if (prefers_dark.matches) {
                set('_dark');
            }
            else {
                set();
            }
            listenTo(prefers_dark, 'change', (e) => {
                if (e.matches) {
                    set('_dark');
                }
                else {
                    set();
                }
            });
        }
        else {
            set(localData.get(key));
        }
        return { list: list, set: set, change: change, current: () => current };
    })();
    if (!B.ignore_keyboard) {
        listenTo(W, "keyup", keypress((e) => {
            if (e.altKey && e.code === 'KeyT') {
                theme.change();
            }
        }));
    }
    B.theme = theme;
    return B;
});
