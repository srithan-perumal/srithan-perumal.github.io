(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [598], {
        48879: function(e, t, n) {
            "use strict";
            async function r(e, t) {
                let n = e.getReader(),
                    r;
                for (; !(r = await n.read()).done;) t(r.value)
            }

            function i() {
                return {
                    data: "",
                    event: "",
                    id: "",
                    retry: void 0
                }
            }
            n.d(t, {
                L: function() {
                    return s
                }
            });
            var o = function(e, t) {
                var n = {};
                for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && 0 > t.indexOf(r) && (n[r] = e[r]);
                if (null != e && "function" == typeof Object.getOwnPropertySymbols)
                    for (var i = 0, r = Object.getOwnPropertySymbols(e); i < r.length; i++) 0 > t.indexOf(r[i]) && Object.prototype.propertyIsEnumerable.call(e, r[i]) && (n[r[i]] = e[r[i]]);
                return n
            };
            let a = "text/event-stream",
                l = "last-event-id";

            function s(e, t) {
                var {
                    signal: n,
                    headers: s,
                    onopen: u,
                    onmessage: d,
                    onclose: f,
                    onerror: p,
                    openWhenHidden: g,
                    fetch: m
                } = t, h = o(t, ["signal", "headers", "onopen", "onmessage", "onclose", "onerror", "openWhenHidden", "fetch"]);
                return new Promise((t, o) => {
                    let b = Object.assign({}, s);
                    b.accept || (b.accept = a);
                    let y;

                    function v() {
                        y.abort(), document.hidden || S()
                    }
                    g || document.addEventListener("visibilitychange", v);
                    let k = 1e3,
                        x = 0;

                    function _() {
                        document.removeEventListener("visibilitychange", v), window.clearTimeout(x), y.abort()
                    }
                    null == n || n.addEventListener("abort", () => {
                        _(), t()
                    });
                    let w = null != m ? m : window.fetch,
                        E = null != u ? u : c;
                    async function S() {
                        var n, a;
                        y = new AbortController;
                        try {
                            let s = await w(e, Object.assign(Object.assign({}, h), {
                                headers: b,
                                signal: y.signal
                            }));
                            await E(s);
                            let c, u, g, m;
                            await r(s.body, (a = function(e, t, n) {
                                let r = i(),
                                    o = new TextDecoder;
                                return function(a, l) {
                                    if (0 === a.length) null == n || n(r), r = i();
                                    else if (l > 0) {
                                        let s = o.decode(a.subarray(0, l)),
                                            c = l + (32 === a[l + 1] ? 2 : 1),
                                            u = o.decode(a.subarray(c));
                                        switch (s) {
                                            case "data":
                                                r.data = r.data ? r.data + "\n" + u : u;
                                                break;
                                            case "event":
                                                r.event = u;
                                                break;
                                            case "id":
                                                e(r.id = u);
                                                break;
                                            case "retry":
                                                let d = parseInt(u, 10);
                                                isNaN(d) || t(r.retry = d)
                                        }
                                    }
                                }
                            }(e => {
                                e ? b[l] = e : delete b[l]
                            }, e => {
                                k = e
                            }, d), m = !1, function(e) {
                                void 0 === c ? (c = e, u = 0, g = -1) : c = function(e, t) {
                                    let n = new Uint8Array(e.length + t.length);
                                    return n.set(e), n.set(t, e.length), n
                                }(c, e);
                                let t = c.length,
                                    n = 0;
                                for (; u < t;) {
                                    m && (10 === c[u] && (n = ++u), m = !1);
                                    let r = -1;
                                    for (; u < t && -1 === r; ++u) switch (c[u]) {
                                        case 58:
                                            -1 === g && (g = u - n);
                                            break;
                                        case 13:
                                            m = !0;
                                        case 10:
                                            r = u
                                    }
                                    if (-1 === r) break;
                                    a(c.subarray(n, r), g), n = u, g = -1
                                }
                                n === t ? c = void 0 : 0 !== n && (c = c.subarray(n), u -= n)
                            })), null == f || f(), _(), t()
                        } catch (C) {
                            if (!y.signal.aborted) try {
                                let v = null !== (n = null == p ? void 0 : p(C)) && void 0 !== n ? n : k;
                                window.clearTimeout(x), x = window.setTimeout(S, v)
                            } catch (N) {
                                _(), o(N)
                            }
                        }
                    }
                    S()
                })
            }

            function c(e) {
                let t = e.headers.get("content-type");
                if (!(null == t ? void 0 : t.startsWith(a))) throw Error(`Expected content-type to be ${a}, Actual: ${t}`)
            }
        },
        25766: function(e, t, n) {
            var r = n(53140),
                i = n(50694);

            function o(e) {
                return null == e
            }

            function a(e) {
                (e = function(e) {
                    var t = {};
                    for (var n in e) t[n] = e[n];
                    return t
                }(e || {})).whiteList = e.whiteList || r.whiteList, e.onAttr = e.onAttr || r.onAttr, e.onIgnoreAttr = e.onIgnoreAttr || r.onIgnoreAttr, e.safeAttrValue = e.safeAttrValue || r.safeAttrValue, this.options = e
            }
            n(66380), a.prototype.process = function(e) {
                if (!(e = (e = e || "").toString())) return "";
                var t = this.options,
                    n = t.whiteList,
                    r = t.onAttr,
                    a = t.onIgnoreAttr,
                    l = t.safeAttrValue;
                return i(e, function(e, t, i, s, c) {
                    var u = n[i],
                        d = !1;
                    if (!0 === u ? d = u : "function" == typeof u ? d = u(s) : u instanceof RegExp && (d = u.test(s)), !0 !== d && (d = !1), s = l(i, s)) {
                        var f = {
                            position: t,
                            sourcePosition: e,
                            source: c,
                            isWhite: d
                        };
                        if (d) {
                            var p = r(i, s, f);
                            return o(p) ? i + ":" + s : p
                        }
                        var p = a(i, s, f);
                        if (!o(p)) return p
                    }
                })
            }, e.exports = a
        },
        53140: function(e, t) {
            function n() {
                var e = {};
                return e["align-content"] = !1, e["align-items"] = !1, e["align-self"] = !1, e["alignment-adjust"] = !1, e["alignment-baseline"] = !1, e.all = !1, e["anchor-point"] = !1, e.animation = !1, e["animation-delay"] = !1, e["animation-direction"] = !1, e["animation-duration"] = !1, e["animation-fill-mode"] = !1, e["animation-iteration-count"] = !1, e["animation-name"] = !1, e["animation-play-state"] = !1, e["animation-timing-function"] = !1, e.azimuth = !1, e["backface-visibility"] = !1, e.background = !0, e["background-attachment"] = !0, e["background-clip"] = !0, e["background-color"] = !0, e["background-image"] = !0, e["background-origin"] = !0, e["background-position"] = !0, e["background-repeat"] = !0, e["background-size"] = !0, e["baseline-shift"] = !1, e.binding = !1, e.bleed = !1, e["bookmark-label"] = !1, e["bookmark-level"] = !1, e["bookmark-state"] = !1, e.border = !0, e["border-bottom"] = !0, e["border-bottom-color"] = !0, e["border-bottom-left-radius"] = !0, e["border-bottom-right-radius"] = !0, e["border-bottom-style"] = !0, e["border-bottom-width"] = !0, e["border-collapse"] = !0, e["border-color"] = !0, e["border-image"] = !0, e["border-image-outset"] = !0, e["border-image-repeat"] = !0, e["border-image-slice"] = !0, e["border-image-source"] = !0, e["border-image-width"] = !0, e["border-left"] = !0, e["border-left-color"] = !0, e["border-left-style"] = !0, e["border-left-width"] = !0, e["border-radius"] = !0, e["border-right"] = !0, e["border-right-color"] = !0, e["border-right-style"] = !0, e["border-right-width"] = !0, e["border-spacing"] = !0, e["border-style"] = !0, e["border-top"] = !0, e["border-top-color"] = !0, e["border-top-left-radius"] = !0, e["border-top-right-radius"] = !0, e["border-top-style"] = !0, e["border-top-width"] = !0, e["border-width"] = !0, e.bottom = !1, e["box-decoration-break"] = !0, e["box-shadow"] = !0, e["box-sizing"] = !0, e["box-snap"] = !0, e["box-suppress"] = !0, e["break-after"] = !0, e["break-before"] = !0, e["break-inside"] = !0, e["caption-side"] = !1, e.chains = !1, e.clear = !0, e.clip = !1, e["clip-path"] = !1, e["clip-rule"] = !1, e.color = !0, e["color-interpolation-filters"] = !0, e["column-count"] = !1, e["column-fill"] = !1, e["column-gap"] = !1, e["column-rule"] = !1, e["column-rule-color"] = !1, e["column-rule-style"] = !1, e["column-rule-width"] = !1, e["column-span"] = !1, e["column-width"] = !1, e.columns = !1, e.contain = !1, e.content = !1, e["counter-increment"] = !1, e["counter-reset"] = !1, e["counter-set"] = !1, e.crop = !1, e.cue = !1, e["cue-after"] = !1, e["cue-before"] = !1, e.cursor = !1, e.direction = !1, e.display = !0, e["display-inside"] = !0, e["display-list"] = !0, e["display-outside"] = !0, e["dominant-baseline"] = !1, e.elevation = !1, e["empty-cells"] = !1, e.filter = !1, e.flex = !1, e["flex-basis"] = !1, e["flex-direction"] = !1, e["flex-flow"] = !1, e["flex-grow"] = !1, e["flex-shrink"] = !1, e["flex-wrap"] = !1, e.float = !1, e["float-offset"] = !1, e["flood-color"] = !1, e["flood-opacity"] = !1, e["flow-from"] = !1, e["flow-into"] = !1, e.font = !0, e["font-family"] = !0, e["font-feature-settings"] = !0, e["font-kerning"] = !0, e["font-language-override"] = !0, e["font-size"] = !0, e["font-size-adjust"] = !0, e["font-stretch"] = !0, e["font-style"] = !0, e["font-synthesis"] = !0, e["font-variant"] = !0, e["font-variant-alternates"] = !0, e["font-variant-caps"] = !0, e["font-variant-east-asian"] = !0, e["font-variant-ligatures"] = !0, e["font-variant-numeric"] = !0, e["font-variant-position"] = !0, e["font-weight"] = !0, e.grid = !1, e["grid-area"] = !1, e["grid-auto-columns"] = !1, e["grid-auto-flow"] = !1, e["grid-auto-rows"] = !1, e["grid-column"] = !1, e["grid-column-end"] = !1, e["grid-column-start"] = !1, e["grid-row"] = !1, e["grid-row-end"] = !1, e["grid-row-start"] = !1, e["grid-template"] = !1, e["grid-template-areas"] = !1, e["grid-template-columns"] = !1, e["grid-template-rows"] = !1, e["hanging-punctuation"] = !1, e.height = !0, e.hyphens = !1, e.icon = !1, e["image-orientation"] = !1, e["image-resolution"] = !1, e["ime-mode"] = !1, e["initial-letters"] = !1, e["inline-box-align"] = !1, e["justify-content"] = !1, e["justify-items"] = !1, e["justify-self"] = !1, e.left = !1, e["letter-spacing"] = !0, e["lighting-color"] = !0, e["line-box-contain"] = !1, e["line-break"] = !1, e["line-grid"] = !1, e["line-height"] = !1, e["line-snap"] = !1, e["line-stacking"] = !1, e["line-stacking-ruby"] = !1, e["line-stacking-shift"] = !1, e["line-stacking-strategy"] = !1, e["list-style"] = !0, e["list-style-image"] = !0, e["list-style-position"] = !0, e["list-style-type"] = !0, e.margin = !0, e["margin-bottom"] = !0, e["margin-left"] = !0, e["margin-right"] = !0, e["margin-top"] = !0, e["marker-offset"] = !1, e["marker-side"] = !1, e.marks = !1, e.mask = !1, e["mask-box"] = !1, e["mask-box-outset"] = !1, e["mask-box-repeat"] = !1, e["mask-box-slice"] = !1, e["mask-box-source"] = !1, e["mask-box-width"] = !1, e["mask-clip"] = !1, e["mask-image"] = !1, e["mask-origin"] = !1, e["mask-position"] = !1, e["mask-repeat"] = !1, e["mask-size"] = !1, e["mask-source-type"] = !1, e["mask-type"] = !1, e["max-height"] = !0, e["max-lines"] = !1, e["max-width"] = !0, e["min-height"] = !0, e["min-width"] = !0, e["move-to"] = !1, e["nav-down"] = !1, e["nav-index"] = !1, e["nav-left"] = !1, e["nav-right"] = !1, e["nav-up"] = !1, e["object-fit"] = !1, e["object-position"] = !1, e.opacity = !1, e.order = !1, e.orphans = !1, e.outline = !1, e["outline-color"] = !1, e["outline-offset"] = !1, e["outline-style"] = !1, e["outline-width"] = !1, e.overflow = !1, e["overflow-wrap"] = !1, e["overflow-x"] = !1, e["overflow-y"] = !1, e.padding = !0, e["padding-bottom"] = !0, e["padding-left"] = !0, e["padding-right"] = !0, e["padding-top"] = !0, e.page = !1, e["page-break-after"] = !1, e["page-break-before"] = !1, e["page-break-inside"] = !1, e["page-policy"] = !1, e.pause = !1, e["pause-after"] = !1, e["pause-before"] = !1, e.perspective = !1, e["perspective-origin"] = !1, e.pitch = !1, e["pitch-range"] = !1, e["play-during"] = !1, e.position = !1, e["presentation-level"] = !1, e.quotes = !1, e["region-fragment"] = !1, e.resize = !1, e.rest = !1, e["rest-after"] = !1, e["rest-before"] = !1, e.richness = !1, e.right = !1, e.rotation = !1, e["rotation-point"] = !1, e["ruby-align"] = !1, e["ruby-merge"] = !1, e["ruby-position"] = !1, e["shape-image-threshold"] = !1, e["shape-outside"] = !1, e["shape-margin"] = !1, e.size = !1, e.speak = !1, e["speak-as"] = !1, e["speak-header"] = !1, e["speak-numeral"] = !1, e["speak-punctuation"] = !1, e["speech-rate"] = !1, e.stress = !1, e["string-set"] = !1, e["tab-size"] = !1, e["table-layout"] = !1, e["text-align"] = !0, e["text-align-last"] = !0, e["text-combine-upright"] = !0, e["text-decoration"] = !0, e["text-decoration-color"] = !0, e["text-decoration-line"] = !0, e["text-decoration-skip"] = !0, e["text-decoration-style"] = !0, e["text-emphasis"] = !0, e["text-emphasis-color"] = !0, e["text-emphasis-position"] = !0, e["text-emphasis-style"] = !0, e["text-height"] = !0, e["text-indent"] = !0, e["text-justify"] = !0, e["text-orientation"] = !0, e["text-overflow"] = !0, e["text-shadow"] = !0, e["text-space-collapse"] = !0, e["text-transform"] = !0, e["text-underline-position"] = !0, e["text-wrap"] = !0, e.top = !1, e.transform = !1, e["transform-origin"] = !1, e["transform-style"] = !1, e.transition = !1, e["transition-delay"] = !1, e["transition-duration"] = !1, e["transition-property"] = !1, e["transition-timing-function"] = !1, e["unicode-bidi"] = !1, e["vertical-align"] = !1, e.visibility = !1, e["voice-balance"] = !1, e["voice-duration"] = !1, e["voice-family"] = !1, e["voice-pitch"] = !1, e["voice-range"] = !1, e["voice-rate"] = !1, e["voice-stress"] = !1, e["voice-volume"] = !1, e.volume = !1, e["white-space"] = !1, e.widows = !1, e.width = !0, e["will-change"] = !1, e["word-break"] = !0, e["word-spacing"] = !0, e["word-wrap"] = !0, e["wrap-flow"] = !1, e["wrap-through"] = !1, e["writing-mode"] = !1, e["z-index"] = !1, e
            }
            var r = /javascript\s*\:/img;
            t.whiteList = n(), t.getDefaultWhiteList = n, t.onAttr = function(e, t, n) {}, t.onIgnoreAttr = function(e, t, n) {}, t.safeAttrValue = function(e, t) {
                return r.test(t) ? "" : t
            }
        },
        40101: function(e, t, n) {
            var r = n(53140),
                i = n(25766);
            for (var o in (t = e.exports = function(e, t) {
                    return new i(t).process(e)
                }).FilterCSS = i, r) t[o] = r[o];
            "undefined" != typeof window && (window.filterCSS = e.exports)
        },
        50694: function(e, t, n) {
            var r = n(66380);
            e.exports = function(e, t) {
                ";" !== (e = r.trimRight(e))[e.length - 1] && (e += ";");
                var n = e.length,
                    i = !1,
                    o = 0,
                    a = 0,
                    l = "";

                function s() {
                    if (!i) {
                        var n = r.trim(e.slice(o, a)),
                            s = n.indexOf(":");
                        if (-1 !== s) {
                            var c = r.trim(n.slice(0, s)),
                                u = r.trim(n.slice(s + 1));
                            if (c) {
                                var d = t(o, l.length, c, u, n);
                                d && (l += d + "; ")
                            }
                        }
                    }
                    o = a + 1
                }
                for (; a < n; a++) {
                    var c = e[a];
                    if ("/" === c && "*" === e[a + 1]) {
                        var u = e.indexOf("*/", a + 2);
                        if (-1 === u) break;
                        o = (a = u + 1) + 1, i = !1
                    } else "(" === c ? i = !0 : ")" === c ? i = !1 : ";" === c ? i || s() : "\n" === c && s()
                }
                return r.trim(l)
            }
        },
        66380: function(e) {
            e.exports = {
                indexOf: function(e, t) {
                    var n, r;
                    if (Array.prototype.indexOf) return e.indexOf(t);
                    for (n = 0, r = e.length; n < r; n++)
                        if (e[n] === t) return n;
                    return -1
                },
                forEach: function(e, t, n) {
                    var r, i;
                    if (Array.prototype.forEach) return e.forEach(t, n);
                    for (r = 0, i = e.length; r < i; r++) t.call(n, e[r], r, e)
                },
                trim: function(e) {
                    return String.prototype.trim ? e.trim() : e.replace(/(^\s*)|(\s*$)/g, "")
                },
                trimRight: function(e) {
                    return String.prototype.trimRight ? e.trimRight() : e.replace(/(\s*$)/g, "")
                }
            }
        },
        24740: function(e) {
            "use strict";
            var t = Object.prototype.hasOwnProperty,
                n = Object.prototype.toString,
                r = Object.defineProperty,
                i = Object.getOwnPropertyDescriptor,
                o = function(e) {
                    return "function" == typeof Array.isArray ? Array.isArray(e) : "[object Array]" === n.call(e)
                },
                a = function(e) {
                    if (!e || "[object Object]" !== n.call(e)) return !1;
                    var r, i = t.call(e, "constructor"),
                        o = e.constructor && e.constructor.prototype && t.call(e.constructor.prototype, "isPrototypeOf");
                    if (e.constructor && !i && !o) return !1;
                    for (r in e);
                    return void 0 === r || t.call(e, r)
                },
                l = function(e, t) {
                    r && "__proto__" === t.name ? r(e, t.name, {
                        enumerable: !0,
                        configurable: !0,
                        value: t.newValue,
                        writable: !0
                    }) : e[t.name] = t.newValue
                },
                s = function(e, n) {
                    if ("__proto__" === n) {
                        if (!t.call(e, n)) return;
                        if (i) return i(e, n).value
                    }
                    return e[n]
                };
            e.exports = function e() {
                var t, n, r, i, c, u, d = arguments[0],
                    f = 1,
                    p = arguments.length,
                    g = !1;
                for ("boolean" == typeof d && (g = d, d = arguments[1] || {}, f = 2), (null == d || "object" != typeof d && "function" != typeof d) && (d = {}); f < p; ++f)
                    if (t = arguments[f], null != t)
                        for (n in t) r = s(d, n), d !== (i = s(t, n)) && (g && i && (a(i) || (c = o(i))) ? (c ? (c = !1, u = r && o(r) ? r : []) : u = r && a(r) ? r : {}, l(d, {
                            name: n,
                            newValue: e(g, u, i)
                        })) : void 0 !== i && l(d, {
                            name: n,
                            newValue: i
                        }));
                return d
            }
        },
        98544: function(e) {
            ! function() {
                var t;

                function n(e) {
                    for (var t, n, r, i, o = 1, a = [].slice.call(arguments), l = 0, s = e.length, c = "", u = !1, d = !1, f = function() {
                            return a[o++]
                        }; l < s; ++l)
                        if (t = e[l], u) switch (u = !1, "." == t ? (d = !1, t = e[++l]) : "0" == t && "." == e[l + 1] ? (d = !0, l += 2, t = e[l]) : d = !0, i = function() {
                            for (var n = "";
                                /\d/.test(e[l]);) n += e[l++], t = e[l];
                            return n.length > 0 ? parseInt(n) : null
                        }(), t) {
                            case "b":
                                c += parseInt(f(), 10).toString(2);
                                break;
                            case "c":
                                "string" == typeof(n = f()) || n instanceof String ? c += n : c += String.fromCharCode(parseInt(n, 10));
                                break;
                            case "d":
                                c += parseInt(f(), 10);
                                break;
                            case "f":
                                r = String(parseFloat(f()).toFixed(i || 6)), c += d ? r : r.replace(/^0/, "");
                                break;
                            case "j":
                                c += JSON.stringify(f());
                                break;
                            case "o":
                                c += "0" + parseInt(f(), 10).toString(8);
                                break;
                            case "s":
                                c += f();
                                break;
                            case "x":
                                c += "0x" + parseInt(f(), 10).toString(16);
                                break;
                            case "X":
                                c += "0x" + parseInt(f(), 10).toString(16).toUpperCase();
                                break;
                            default:
                                c += t
                        } else "%" === t ? u = !0 : c += t;
                    return c
                }(t = e.exports = n).format = n, t.vsprintf = function(e, t) {
                    return n.apply(null, [e].concat(t))
                }, "undefined" != typeof console && "function" == typeof console.log && (t.printf = function() {
                    console.log(n.apply(null, arguments))
                })
            }()
        },
        29058: function(e) {
            var t = /\/\*[^*]*\*+([^/*][^*]*\*+)*\//g,
                n = /\n/g,
                r = /^\s*/,
                i = /^(\*?[-#/*\\\w]+(\[[0-9a-z_-]+\])?)\s*/,
                o = /^:\s*/,
                a = /^((?:'(?:\\'|.)*?'|"(?:\\"|.)*?"|\([^)]*?\)|[^};])+)/,
                l = /^[;\s]*/,
                s = /^\s+|\s+$/g;

            function c(e) {
                return e ? e.replace(s, "") : ""
            }
            e.exports = function(e, s) {
                if ("string" != typeof e) throw TypeError("First argument must be a string");
                if (!e) return [];
                s = s || {};
                var u = 1,
                    d = 1;

                function f(e) {
                    var t = e.match(n);
                    t && (u += t.length);
                    var r = e.lastIndexOf("\n");
                    d = ~r ? e.length - r : d + e.length
                }

                function p() {
                    var e = {
                        line: u,
                        column: d
                    };
                    return function(t) {
                        return t.position = new g(e), y(), t
                    }
                }

                function g(e) {
                    this.start = e, this.end = {
                        line: u,
                        column: d
                    }, this.source = s.source
                }
                g.prototype.content = e;
                var m = [];

                function h(t) {
                    var n = Error(s.source + ":" + u + ":" + d + ": " + t);
                    if (n.reason = t, n.filename = s.source, n.line = u, n.column = d, n.source = e, s.silent) m.push(n);
                    else throw n
                }

                function b(t) {
                    var n = t.exec(e);
                    if (n) {
                        var r = n[0];
                        return f(r), e = e.slice(r.length), n
                    }
                }

                function y() {
                    b(r)
                }

                function v(e) {
                    var t;
                    for (e = e || []; t = k();) !1 !== t && e.push(t);
                    return e
                }

                function k() {
                    var t = p();
                    if ("/" == e.charAt(0) && "*" == e.charAt(1)) {
                        for (var n = 2;
                            "" != e.charAt(n) && ("*" != e.charAt(n) || "/" != e.charAt(n + 1));) ++n;
                        if (n += 2, "" === e.charAt(n - 1)) return h("End of comment missing");
                        var r = e.slice(2, n - 2);
                        return d += 2, f(r), e = e.slice(n), d += 2, t({
                            type: "comment",
                            comment: r
                        })
                    }
                }

                function x() {
                    var e = p(),
                        n = b(i);
                    if (n) {
                        if (k(), !b(o)) return h("property missing ':'");
                        var r = b(a),
                            s = e({
                                type: "declaration",
                                property: c(n[0].replace(t, "")),
                                value: r ? c(r[0].replace(t, "")) : ""
                            });
                        return b(l), s
                    }
                }
                return y(),
                    function() {
                        var e, t = [];
                        for (v(t); e = x();) !1 !== e && (t.push(e), v(t));
                        return t
                    }()
            }
        },
        38165: function(e) {
            /*!
             * Determine if an object is a Buffer
             *
             * @author   Feross Aboukhadijeh <https://feross.org>
             * @license  MIT
             */
            e.exports = function(e) {
                return null != e && null != e.constructor && "function" == typeof e.constructor.isBuffer && e.constructor.isBuffer(e)
            }
        },
        84835: function(e, t, n) {
            "use strict";
            var r = n(11596);

            function i() {}

            function o() {}
            o.resetWarningCache = i, e.exports = function() {
                function e(e, t, n, i, o, a) {
                    if (a !== r) {
                        var l = Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");
                        throw l.name = "Invariant Violation", l
                    }
                }

                function t() {
                    return e
                }
                e.isRequired = e;
                var n = {
                    array: e,
                    bigint: e,
                    bool: e,
                    func: e,
                    number: e,
                    object: e,
                    string: e,
                    symbol: e,
                    any: e,
                    arrayOf: t,
                    element: e,
                    elementType: e,
                    instanceOf: t,
                    node: e,
                    objectOf: t,
                    oneOf: t,
                    oneOfType: t,
                    shape: t,
                    exact: t,
                    checkPropTypes: o,
                    resetWarningCache: i
                };
                return n.PropTypes = n, n
            }
        },
        39519: function(e, t, n) {
            e.exports = n(84835)()
        },
        11596: function(e) {
            "use strict";
            e.exports = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"
        },
        82330: function(e) {
            var t = "undefined" != typeof Element,
                n = "function" == typeof Map,
                r = "function" == typeof Set,
                i = "function" == typeof ArrayBuffer && !!ArrayBuffer.isView;
            e.exports = function(e, o) {
                try {
                    return function e(o, a) {
                        if (o === a) return !0;
                        if (o && a && "object" == typeof o && "object" == typeof a) {
                            var l, s, c, u;
                            if (o.constructor !== a.constructor) return !1;
                            if (Array.isArray(o)) {
                                if ((l = o.length) != a.length) return !1;
                                for (s = l; 0 != s--;)
                                    if (!e(o[s], a[s])) return !1;
                                return !0
                            }
                            if (n && o instanceof Map && a instanceof Map) {
                                if (o.size !== a.size) return !1;
                                for (u = o.entries(); !(s = u.next()).done;)
                                    if (!a.has(s.value[0])) return !1;
                                for (u = o.entries(); !(s = u.next()).done;)
                                    if (!e(s.value[1], a.get(s.value[0]))) return !1;
                                return !0
                            }
                            if (r && o instanceof Set && a instanceof Set) {
                                if (o.size !== a.size) return !1;
                                for (u = o.entries(); !(s = u.next()).done;)
                                    if (!a.has(s.value[0])) return !1;
                                return !0
                            }
                            if (i && ArrayBuffer.isView(o) && ArrayBuffer.isView(a)) {
                                if ((l = o.length) != a.length) return !1;
                                for (s = l; 0 != s--;)
                                    if (o[s] !== a[s]) return !1;
                                return !0
                            }
                            if (o.constructor === RegExp) return o.source === a.source && o.flags === a.flags;
                            if (o.valueOf !== Object.prototype.valueOf) return o.valueOf() === a.valueOf();
                            if (o.toString !== Object.prototype.toString) return o.toString() === a.toString();
                            if ((l = (c = Object.keys(o)).length) !== Object.keys(a).length) return !1;
                            for (s = l; 0 != s--;)
                                if (!Object.prototype.hasOwnProperty.call(a, c[s])) return !1;
                            if (t && o instanceof Element) return !1;
                            for (s = l; 0 != s--;)
                                if (("_owner" !== c[s] && "__v" !== c[s] && "__o" !== c[s] || !o.$$typeof) && !e(o[c[s]], a[c[s]])) return !1;
                            return !0
                        }
                        return o != o && a != a
                    }(e, o)
                } catch (a) {
                    if ((a.message || "").match(/stack|recursion/i)) return console.warn("react-fast-compare cannot handle circular refs"), !1;
                    throw a
                }
            }
        },
        92810: function(e, t) {
            "use strict";
            /**
             * @license React
             * react-is.production.min.js
             *
             * Copyright (c) Facebook, Inc. and its affiliates.
             *
             * This source code is licensed under the MIT license found in the
             * LICENSE file in the root directory of this source tree.
             */
            var n, r = Symbol.for("react.element"),
                i = Symbol.for("react.portal"),
                o = Symbol.for("react.fragment"),
                a = Symbol.for("react.strict_mode"),
                l = Symbol.for("react.profiler"),
                s = Symbol.for("react.provider"),
                c = Symbol.for("react.context"),
                u = Symbol.for("react.server_context"),
                d = Symbol.for("react.forward_ref"),
                f = Symbol.for("react.suspense"),
                p = Symbol.for("react.suspense_list"),
                g = Symbol.for("react.memo"),
                m = Symbol.for("react.lazy"),
                h = Symbol.for("react.offscreen");

            function b(e) {
                if ("object" == typeof e && null !== e) {
                    var t = e.$$typeof;
                    switch (t) {
                        case r:
                            switch (e = e.type) {
                                case o:
                                case l:
                                case a:
                                case f:
                                case p:
                                    return e;
                                default:
                                    switch (e = e && e.$$typeof) {
                                        case u:
                                        case c:
                                        case d:
                                        case m:
                                        case g:
                                        case s:
                                            return e;
                                        default:
                                            return t
                                    }
                            }
                        case i:
                            return t
                    }
                }
            }
            n = Symbol.for("react.module.reference"), t.ContextConsumer = c, t.ContextProvider = s, t.Element = r, t.ForwardRef = d, t.Fragment = o, t.Lazy = m, t.Memo = g, t.Portal = i, t.Profiler = l, t.StrictMode = a, t.Suspense = f, t.SuspenseList = p, t.isAsyncMode = function() {
                return !1
            }, t.isConcurrentMode = function() {
                return !1
            }, t.isContextConsumer = function(e) {
                return b(e) === c
            }, t.isContextProvider = function(e) {
                return b(e) === s
            }, t.isElement = function(e) {
                return "object" == typeof e && null !== e && e.$$typeof === r
            }, t.isForwardRef = function(e) {
                return b(e) === d
            }, t.isFragment = function(e) {
                return b(e) === o
            }, t.isLazy = function(e) {
                return b(e) === m
            }, t.isMemo = function(e) {
                return b(e) === g
            }, t.isPortal = function(e) {
                return b(e) === i
            }, t.isProfiler = function(e) {
                return b(e) === l
            }, t.isStrictMode = function(e) {
                return b(e) === a
            }, t.isSuspense = function(e) {
                return b(e) === f
            }, t.isSuspenseList = function(e) {
                return b(e) === p
            }, t.isValidElementType = function(e) {
                return "string" == typeof e || "function" == typeof e || e === o || e === l || e === a || e === f || e === p || e === h || "object" == typeof e && null !== e && (e.$$typeof === m || e.$$typeof === g || e.$$typeof === s || e.$$typeof === c || e.$$typeof === d || e.$$typeof === n || void 0 !== e.getModuleId)
            }, t.typeOf = b
        },
        72037: function(e, t, n) {
            "use strict";
            e.exports = n(92810)
        },
        65921: function(e, t, n) {
            "use strict";
            n.d(t, {
                D: function() {
                    return ev
                }
            });
            var r = n(70079),
                i = n(99581);

            function o(e) {
                if (null == e) return window;
                if ("[object Window]" !== e.toString()) {
                    var t = e.ownerDocument;
                    return t && t.defaultView || window
                }
                return e
            }

            function a(e) {
                var t = o(e).Element;
                return e instanceof t || e instanceof Element
            }

            function l(e) {
                var t = o(e).HTMLElement;
                return e instanceof t || e instanceof HTMLElement
            }

            function s(e) {
                if ("undefined" == typeof ShadowRoot) return !1;
                var t = o(e).ShadowRoot;
                return e instanceof t || e instanceof ShadowRoot
            }
            var c = Math.max,
                u = Math.min,
                d = Math.round;

            function f() {
                var e = navigator.userAgentData;
                return null != e && e.brands ? e.brands.map(function(e) {
                    return e.brand + "/" + e.version
                }).join(" ") : navigator.userAgent
            }

            function p() {
                return !/^((?!chrome|android).)*safari/i.test(f())
            }

            function g(e, t, n) {
                void 0 === t && (t = !1), void 0 === n && (n = !1);
                var r = e.getBoundingClientRect(),
                    i = 1,
                    s = 1;
                t && l(e) && (i = e.offsetWidth > 0 && d(r.width) / e.offsetWidth || 1, s = e.offsetHeight > 0 && d(r.height) / e.offsetHeight || 1);
                var c = (a(e) ? o(e) : window).visualViewport,
                    u = !p() && n,
                    f = (r.left + (u && c ? c.offsetLeft : 0)) / i,
                    g = (r.top + (u && c ? c.offsetTop : 0)) / s,
                    m = r.width / i,
                    h = r.height / s;
                return {
                    width: m,
                    height: h,
                    top: g,
                    right: f + m,
                    bottom: g + h,
                    left: f,
                    x: f,
                    y: g
                }
            }

            function m(e) {
                var t, n = o(e);
                return {
                    scrollLeft: n.pageXOffset,
                    scrollTop: n.pageYOffset
                }
            }

            function h(e) {
                return e ? (e.nodeName || "").toLowerCase() : null
            }

            function b(e) {
                return ((a(e) ? e.ownerDocument : e.document) || window.document).documentElement
            }

            function y(e) {
                return g(b(e)).left + m(e).scrollLeft
            }

            function v(e) {
                return o(e).getComputedStyle(e)
            }

            function k(e) {
                var t = v(e),
                    n = t.overflow,
                    r = t.overflowX,
                    i = t.overflowY;
                return /auto|scroll|overlay|hidden/.test(n + i + r)
            }

            function x(e) {
                var t = g(e),
                    n = e.offsetWidth,
                    r = e.offsetHeight;
                return 1 >= Math.abs(t.width - n) && (n = t.width), 1 >= Math.abs(t.height - r) && (r = t.height), {
                    x: e.offsetLeft,
                    y: e.offsetTop,
                    width: n,
                    height: r
                }
            }

            function _(e) {
                return "html" === h(e) ? e : e.assignedSlot || e.parentNode || (s(e) ? e.host : null) || b(e)
            }

            function w(e, t) {
                void 0 === t && (t = []);
                var n, r = function e(t) {
                        return ["html", "body", "#document"].indexOf(h(t)) >= 0 ? t.ownerDocument.body : l(t) && k(t) ? t : e(_(t))
                    }(e),
                    i = r === (null == (n = e.ownerDocument) ? void 0 : n.body),
                    a = o(r),
                    s = i ? [a].concat(a.visualViewport || [], k(r) ? r : []) : r,
                    c = t.concat(s);
                return i ? c : c.concat(w(_(s)))
            }

            function E(e) {
                return ["table", "td", "th"].indexOf(h(e)) >= 0
            }

            function S(e) {
                return l(e) && "fixed" !== v(e).position ? e.offsetParent : null
            }

            function N(e) {
                for (var t = o(e), n = S(e); n && E(n) && "static" === v(n).position;) n = S(n);
                return n && ("html" === h(n) || "body" === h(n) && "static" === v(n).position) ? t : n || function(e) {
                    var t = /firefox/i.test(f());
                    if (/Trident/i.test(f()) && l(e) && "fixed" === v(e).position) return null;
                    var n = _(e);
                    for (s(n) && (n = n.host); l(n) && 0 > ["html", "body"].indexOf(h(n));) {
                        var r = v(n);
                        if ("none" !== r.transform || "none" !== r.perspective || "paint" === r.contain || -1 !== ["transform", "perspective"].indexOf(r.willChange) || t && "filter" === r.willChange || t && r.filter && "none" !== r.filter) return n;
                        n = n.parentNode
                    }
                    return null
                }(e) || t
            }
            var C = "bottom",
                O = "right",
                A = "left",
                T = "auto",
                M = ["top", C, O, A],
                I = "start",
                D = "viewport",
                L = "popper",
                R = M.reduce(function(e, t) {
                    return e.concat([t + "-" + I, t + "-end"])
                }, []),
                F = [].concat(M, [T]).reduce(function(e, t) {
                    return e.concat([t, t + "-" + I, t + "-end"])
                }, []),
                P = ["beforeRead", "read", "afterRead", "beforeMain", "main", "afterMain", "beforeWrite", "write", "afterWrite"],
                B = {
                    placement: "bottom",
                    modifiers: [],
                    strategy: "absolute"
                };

            function z() {
                for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                return !t.some(function(e) {
                    return !(e && "function" == typeof e.getBoundingClientRect)
                })
            }
            var j = {
                passive: !0
            };

            function $(e) {
                return e.split("-")[0]
            }

            function U(e) {
                return e.split("-")[1]
            }

            function H(e) {
                return ["top", "bottom"].indexOf(e) >= 0 ? "x" : "y"
            }

            function q(e) {
                var t, n = e.reference,
                    r = e.element,
                    i = e.placement,
                    o = i ? $(i) : null,
                    a = i ? U(i) : null,
                    l = n.x + n.width / 2 - r.width / 2,
                    s = n.y + n.height / 2 - r.height / 2;
                switch (o) {
                    case "top":
                        t = {
                            x: l,
                            y: n.y - r.height
                        };
                        break;
                    case C:
                        t = {
                            x: l,
                            y: n.y + n.height
                        };
                        break;
                    case O:
                        t = {
                            x: n.x + n.width,
                            y: s
                        };
                        break;
                    case A:
                        t = {
                            x: n.x - r.width,
                            y: s
                        };
                        break;
                    default:
                        t = {
                            x: n.x,
                            y: n.y
                        }
                }
                var c = o ? H(o) : null;
                if (null != c) {
                    var u = "y" === c ? "height" : "width";
                    switch (a) {
                        case I:
                            t[c] = t[c] - (n[u] / 2 - r[u] / 2);
                            break;
                        case "end":
                            t[c] = t[c] + (n[u] / 2 - r[u] / 2)
                    }
                }
                return t
            }
            var K = {
                top: "auto",
                right: "auto",
                bottom: "auto",
                left: "auto"
            };

            function V(e) {
                var t, n, r = e.popper,
                    i = e.popperRect,
                    a = e.placement,
                    l = e.variation,
                    s = e.offsets,
                    c = e.position,
                    u = e.gpuAcceleration,
                    f = e.adaptive,
                    p = e.roundOffsets,
                    g = e.isFixed,
                    m = s.x,
                    h = void 0 === m ? 0 : m,
                    y = s.y,
                    k = void 0 === y ? 0 : y,
                    x = "function" == typeof p ? p({
                        x: h,
                        y: k
                    }) : {
                        x: h,
                        y: k
                    };
                h = x.x, k = x.y;
                var _ = s.hasOwnProperty("x"),
                    w = s.hasOwnProperty("y"),
                    E = A,
                    S = "top",
                    T = window;
                if (f) {
                    var M = N(r),
                        I = "clientHeight",
                        D = "clientWidth";
                    M === o(r) && (M = b(r), "static" !== v(M).position && "absolute" === c && (I = "scrollHeight", D = "scrollWidth")), ("top" === a || (a === A || a === O) && "end" === l) && (S = C, k -= (g && M === T && T.visualViewport ? T.visualViewport.height : M[I]) - i.height, k *= u ? 1 : -1), (a === A || ("top" === a || a === C) && "end" === l) && (E = O, h -= (g && M === T && T.visualViewport ? T.visualViewport.width : M[D]) - i.width, h *= u ? 1 : -1)
                }
                var L, R, F, P, B = Object.assign({
                        position: c
                    }, f && K),
                    z = !0 === p ? (R = (L = {
                        x: h,
                        y: k
                    }).x, F = L.y, {
                        x: d(R * (P = window.devicePixelRatio || 1)) / P || 0,
                        y: d(F * P) / P || 0
                    }) : {
                        x: h,
                        y: k
                    };
                return (h = z.x, k = z.y, u) ? Object.assign({}, B, ((n = {})[S] = w ? "0" : "", n[E] = _ ? "0" : "", n.transform = 1 >= (T.devicePixelRatio || 1) ? "translate(" + h + "px, " + k + "px)" : "translate3d(" + h + "px, " + k + "px, 0)", n)) : Object.assign({}, B, ((t = {})[S] = w ? k + "px" : "", t[E] = _ ? h + "px" : "", t.transform = "", t))
            }
            var Z = {
                left: "right",
                right: "left",
                bottom: "top",
                top: "bottom"
            };

            function W(e) {
                return e.replace(/left|right|bottom|top/g, function(e) {
                    return Z[e]
                })
            }
            var G = {
                start: "end",
                end: "start"
            };

            function X(e) {
                return e.replace(/start|end/g, function(e) {
                    return G[e]
                })
            }

            function Q(e, t) {
                var n = t.getRootNode && t.getRootNode();
                if (e.contains(t)) return !0;
                if (n && s(n)) {
                    var r = t;
                    do {
                        if (r && e.isSameNode(r)) return !0;
                        r = r.parentNode || r.host
                    } while (r)
                }
                return !1
            }

            function Y(e) {
                return Object.assign({}, e, {
                    left: e.x,
                    top: e.y,
                    right: e.x + e.width,
                    bottom: e.y + e.height
                })
            }

            function J(e, t, n) {
                var r, i, l, s, u, d, f, h, k, x, _, w;
                return t === D ? Y(function(e, t) {
                    var n = o(e),
                        r = b(e),
                        i = n.visualViewport,
                        a = r.clientWidth,
                        l = r.clientHeight,
                        s = 0,
                        c = 0;
                    if (i) {
                        a = i.width, l = i.height;
                        var u = p();
                        (u || !u && "fixed" === t) && (s = i.offsetLeft, c = i.offsetTop)
                    }
                    return {
                        width: a,
                        height: l,
                        x: s + y(e),
                        y: c
                    }
                }(e, n)) : a(t) ? ((l = g(t, !1, "fixed" === n)).top = l.top + t.clientTop, l.left = l.left + t.clientLeft, l.bottom = l.top + t.clientHeight, l.right = l.left + t.clientWidth, l.width = t.clientWidth, l.height = t.clientHeight, l.x = l.left, l.y = l.top, l) : Y((s = b(e), d = b(s), f = m(s), h = null == (u = s.ownerDocument) ? void 0 : u.body, k = c(d.scrollWidth, d.clientWidth, h ? h.scrollWidth : 0, h ? h.clientWidth : 0), x = c(d.scrollHeight, d.clientHeight, h ? h.scrollHeight : 0, h ? h.clientHeight : 0), _ = -f.scrollLeft + y(s), w = -f.scrollTop, "rtl" === v(h || d).direction && (_ += c(d.clientWidth, h ? h.clientWidth : 0) - k), {
                    width: k,
                    height: x,
                    x: _,
                    y: w
                }))
            }

            function ee() {
                return {
                    top: 0,
                    right: 0,
                    bottom: 0,
                    left: 0
                }
            }

            function et(e) {
                return Object.assign({}, ee(), e)
            }

            function en(e, t) {
                return t.reduce(function(t, n) {
                    return t[n] = e, t
                }, {})
            }

            function er(e, t) {
                void 0 === t && (t = {});
                var n, r, i, o, s, d, f, p, m, y, k = t,
                    x = k.placement,
                    E = void 0 === x ? e.placement : x,
                    S = k.strategy,
                    A = void 0 === S ? e.strategy : S,
                    T = k.boundary,
                    I = k.rootBoundary,
                    R = k.elementContext,
                    F = void 0 === R ? L : R,
                    P = k.altBoundary,
                    B = k.padding,
                    z = void 0 === B ? 0 : B,
                    j = et("number" != typeof z ? z : en(z, M)),
                    $ = e.rects.popper,
                    U = e.elements[void 0 !== P && P ? F === L ? "reference" : L : F],
                    H = (n = a(U) ? U : U.contextElement || b(e.elements.popper), m = (p = [].concat("clippingParents" === (r = void 0 === T ? "clippingParents" : T) ? (d = w(_(n)), f = ["absolute", "fixed"].indexOf(v(n).position) >= 0 && l(n) ? N(n) : n, a(f) ? d.filter(function(e) {
                        return a(e) && Q(e, f) && "body" !== h(e)
                    }) : []) : [].concat(r), [void 0 === I ? D : I]))[0], (y = p.reduce(function(e, t) {
                        var r = J(n, t, A);
                        return e.top = c(r.top, e.top), e.right = u(r.right, e.right), e.bottom = u(r.bottom, e.bottom), e.left = c(r.left, e.left), e
                    }, J(n, m, A))).width = y.right - y.left, y.height = y.bottom - y.top, y.x = y.left, y.y = y.top, y),
                    K = g(e.elements.reference),
                    V = q({
                        reference: K,
                        element: $,
                        strategy: "absolute",
                        placement: E
                    }),
                    Z = Y(Object.assign({}, $, V)),
                    W = F === L ? Z : K,
                    G = {
                        top: H.top - W.top + j.top,
                        bottom: W.bottom - H.bottom + j.bottom,
                        left: H.left - W.left + j.left,
                        right: W.right - H.right + j.right
                    },
                    X = e.modifiersData.offset;
                if (F === L && X) {
                    var ee = X[E];
                    Object.keys(G).forEach(function(e) {
                        var t = [O, C].indexOf(e) >= 0 ? 1 : -1,
                            n = ["top", C].indexOf(e) >= 0 ? "y" : "x";
                        G[e] += ee[n] * t
                    })
                }
                return G
            }

            function ei(e, t, n) {
                return c(e, u(t, n))
            }

            function eo(e, t, n) {
                return void 0 === n && (n = {
                    x: 0,
                    y: 0
                }), {
                    top: e.top - t.height - n.y,
                    right: e.right - t.width + n.x,
                    bottom: e.bottom - t.height + n.y,
                    left: e.left - t.width - n.x
                }
            }

            function ea(e) {
                return ["top", O, C, A].some(function(t) {
                    return e[t] >= 0
                })
            }
            var el, es, ec, eu, ed, ef, ep = (el = {
                    defaultModifiers: [{
                        name: "eventListeners",
                        enabled: !0,
                        phase: "write",
                        fn: function() {},
                        effect: function(e) {
                            var t = e.state,
                                n = e.instance,
                                r = e.options,
                                i = r.scroll,
                                a = void 0 === i || i,
                                l = r.resize,
                                s = void 0 === l || l,
                                c = o(t.elements.popper),
                                u = [].concat(t.scrollParents.reference, t.scrollParents.popper);
                            return a && u.forEach(function(e) {
                                    e.addEventListener("scroll", n.update, j)
                                }), s && c.addEventListener("resize", n.update, j),
                                function() {
                                    a && u.forEach(function(e) {
                                        e.removeEventListener("scroll", n.update, j)
                                    }), s && c.removeEventListener("resize", n.update, j)
                                }
                        },
                        data: {}
                    }, {
                        name: "popperOffsets",
                        enabled: !0,
                        phase: "read",
                        fn: function(e) {
                            var t = e.state,
                                n = e.name;
                            t.modifiersData[n] = q({
                                reference: t.rects.reference,
                                element: t.rects.popper,
                                strategy: "absolute",
                                placement: t.placement
                            })
                        },
                        data: {}
                    }, {
                        name: "computeStyles",
                        enabled: !0,
                        phase: "beforeWrite",
                        fn: function(e) {
                            var t = e.state,
                                n = e.options,
                                r = n.gpuAcceleration,
                                i = n.adaptive,
                                o = n.roundOffsets,
                                a = void 0 === o || o,
                                l = {
                                    placement: $(t.placement),
                                    variation: U(t.placement),
                                    popper: t.elements.popper,
                                    popperRect: t.rects.popper,
                                    gpuAcceleration: void 0 === r || r,
                                    isFixed: "fixed" === t.options.strategy
                                };
                            null != t.modifiersData.popperOffsets && (t.styles.popper = Object.assign({}, t.styles.popper, V(Object.assign({}, l, {
                                offsets: t.modifiersData.popperOffsets,
                                position: t.options.strategy,
                                adaptive: void 0 === i || i,
                                roundOffsets: a
                            })))), null != t.modifiersData.arrow && (t.styles.arrow = Object.assign({}, t.styles.arrow, V(Object.assign({}, l, {
                                offsets: t.modifiersData.arrow,
                                position: "absolute",
                                adaptive: !1,
                                roundOffsets: a
                            })))), t.attributes.popper = Object.assign({}, t.attributes.popper, {
                                "data-popper-placement": t.placement
                            })
                        },
                        data: {}
                    }, {
                        name: "applyStyles",
                        enabled: !0,
                        phase: "write",
                        fn: function(e) {
                            var t = e.state;
                            Object.keys(t.elements).forEach(function(e) {
                                var n = t.styles[e] || {},
                                    r = t.attributes[e] || {},
                                    i = t.elements[e];
                                l(i) && h(i) && (Object.assign(i.style, n), Object.keys(r).forEach(function(e) {
                                    var t = r[e];
                                    !1 === t ? i.removeAttribute(e) : i.setAttribute(e, !0 === t ? "" : t)
                                }))
                            })
                        },
                        effect: function(e) {
                            var t = e.state,
                                n = {
                                    popper: {
                                        position: t.options.strategy,
                                        left: "0",
                                        top: "0",
                                        margin: "0"
                                    },
                                    arrow: {
                                        position: "absolute"
                                    },
                                    reference: {}
                                };
                            return Object.assign(t.elements.popper.style, n.popper), t.styles = n, t.elements.arrow && Object.assign(t.elements.arrow.style, n.arrow),
                                function() {
                                    Object.keys(t.elements).forEach(function(e) {
                                        var r = t.elements[e],
                                            i = t.attributes[e] || {},
                                            o = Object.keys(t.styles.hasOwnProperty(e) ? t.styles[e] : n[e]).reduce(function(e, t) {
                                                return e[t] = "", e
                                            }, {});
                                        l(r) && h(r) && (Object.assign(r.style, o), Object.keys(i).forEach(function(e) {
                                            r.removeAttribute(e)
                                        }))
                                    })
                                }
                        },
                        requires: ["computeStyles"]
                    }, {
                        name: "offset",
                        enabled: !0,
                        phase: "main",
                        requires: ["popperOffsets"],
                        fn: function(e) {
                            var t = e.state,
                                n = e.options,
                                r = e.name,
                                i = n.offset,
                                o = void 0 === i ? [0, 0] : i,
                                a = F.reduce(function(e, n) {
                                    var r, i, a, l, s, c, u, d;
                                    return e[n] = (i = t.rects, s = [A, "top"].indexOf(l = $(n)) >= 0 ? -1 : 1, u = (c = "function" == typeof o ? o(Object.assign({}, i, {
                                        placement: n
                                    })) : o)[0], d = c[1], u = u || 0, d = (d || 0) * s, [A, O].indexOf(l) >= 0 ? {
                                        x: d,
                                        y: u
                                    } : {
                                        x: u,
                                        y: d
                                    }), e
                                }, {}),
                                l = a[t.placement],
                                s = l.x,
                                c = l.y;
                            null != t.modifiersData.popperOffsets && (t.modifiersData.popperOffsets.x += s, t.modifiersData.popperOffsets.y += c), t.modifiersData[r] = a
                        }
                    }, {
                        name: "flip",
                        enabled: !0,
                        phase: "main",
                        fn: function(e) {
                            var t = e.state,
                                n = e.options,
                                r = e.name;
                            if (!t.modifiersData[r]._skip) {
                                for (var i = n.mainAxis, o = void 0 === i || i, a = n.altAxis, l = void 0 === a || a, s = n.fallbackPlacements, c = n.padding, u = n.boundary, d = n.rootBoundary, f = n.altBoundary, p = n.flipVariations, g = void 0 === p || p, m = n.allowedAutoPlacements, h = t.options.placement, b = $(h), y = [h].concat(s || (b !== h && g ? function(e) {
                                        if ($(e) === T) return [];
                                        var t = W(e);
                                        return [X(e), t, X(t)]
                                    }(h) : [W(h)])).reduce(function(e, n) {
                                        var r, i, o, a, l, s, f, p, h, b, y, v, k, x;
                                        return e.concat($(n) === T ? (i = {
                                            placement: n,
                                            boundary: u,
                                            rootBoundary: d,
                                            padding: c,
                                            flipVariations: g,
                                            allowedAutoPlacements: m
                                        }, a = (o = i).placement, l = o.boundary, s = o.rootBoundary, f = o.padding, p = o.flipVariations, b = void 0 === (h = o.allowedAutoPlacements) ? F : h, 0 === (k = (v = (y = U(a)) ? p ? R : R.filter(function(e) {
                                            return U(e) === y
                                        }) : M).filter(function(e) {
                                            return b.indexOf(e) >= 0
                                        })).length && (k = v), Object.keys(x = k.reduce(function(e, n) {
                                            return e[n] = er(t, {
                                                placement: n,
                                                boundary: l,
                                                rootBoundary: s,
                                                padding: f
                                            })[$(n)], e
                                        }, {})).sort(function(e, t) {
                                            return x[e] - x[t]
                                        })) : n)
                                    }, []), v = t.rects.reference, k = t.rects.popper, x = new Map, _ = !0, w = y[0], E = 0; E < y.length; E++) {
                                    var S = y[E],
                                        N = $(S),
                                        D = U(S) === I,
                                        L = ["top", C].indexOf(N) >= 0,
                                        P = L ? "width" : "height",
                                        B = er(t, {
                                            placement: S,
                                            boundary: u,
                                            rootBoundary: d,
                                            altBoundary: f,
                                            padding: c
                                        }),
                                        z = L ? D ? O : A : D ? C : "top";
                                    v[P] > k[P] && (z = W(z));
                                    var j = W(z),
                                        H = [];
                                    if (o && H.push(B[N] <= 0), l && H.push(B[z] <= 0, B[j] <= 0), H.every(function(e) {
                                            return e
                                        })) {
                                        w = S, _ = !1;
                                        break
                                    }
                                    x.set(S, H)
                                }
                                if (_)
                                    for (var q = g ? 3 : 1, K = function(e) {
                                            var t = y.find(function(t) {
                                                var n = x.get(t);
                                                if (n) return n.slice(0, e).every(function(e) {
                                                    return e
                                                })
                                            });
                                            if (t) return w = t, "break"
                                        }, V = q; V > 0 && "break" !== K(V); V--);
                                t.placement !== w && (t.modifiersData[r]._skip = !0, t.placement = w, t.reset = !0)
                            }
                        },
                        requiresIfExists: ["offset"],
                        data: {
                            _skip: !1
                        }
                    }, {
                        name: "preventOverflow",
                        enabled: !0,
                        phase: "main",
                        fn: function(e) {
                            var t, n = e.state,
                                r = e.options,
                                i = e.name,
                                o = r.mainAxis,
                                a = r.altAxis,
                                l = r.boundary,
                                s = r.rootBoundary,
                                d = r.altBoundary,
                                f = r.padding,
                                p = r.tether,
                                g = void 0 === p || p,
                                m = r.tetherOffset,
                                h = void 0 === m ? 0 : m,
                                b = er(n, {
                                    boundary: l,
                                    rootBoundary: s,
                                    padding: f,
                                    altBoundary: d
                                }),
                                y = $(n.placement),
                                v = U(n.placement),
                                k = !v,
                                _ = H(y),
                                w = "x" === _ ? "y" : "x",
                                E = n.modifiersData.popperOffsets,
                                S = n.rects.reference,
                                T = n.rects.popper,
                                M = "function" == typeof h ? h(Object.assign({}, n.rects, {
                                    placement: n.placement
                                })) : h,
                                D = "number" == typeof M ? {
                                    mainAxis: M,
                                    altAxis: M
                                } : Object.assign({
                                    mainAxis: 0,
                                    altAxis: 0
                                }, M),
                                L = n.modifiersData.offset ? n.modifiersData.offset[n.placement] : null,
                                R = {
                                    x: 0,
                                    y: 0
                                };
                            if (E) {
                                if (void 0 === o || o) {
                                    var F, P = "y" === _ ? "top" : A,
                                        B = "y" === _ ? C : O,
                                        z = "y" === _ ? "height" : "width",
                                        j = E[_],
                                        q = j + b[P],
                                        K = j - b[B],
                                        V = g ? -T[z] / 2 : 0,
                                        Z = v === I ? S[z] : T[z],
                                        W = v === I ? -T[z] : -S[z],
                                        G = n.elements.arrow,
                                        X = g && G ? x(G) : {
                                            width: 0,
                                            height: 0
                                        },
                                        Q = n.modifiersData["arrow#persistent"] ? n.modifiersData["arrow#persistent"].padding : ee(),
                                        Y = Q[P],
                                        J = Q[B],
                                        et = ei(0, S[z], X[z]),
                                        en = k ? S[z] / 2 - V - et - Y - D.mainAxis : Z - et - Y - D.mainAxis,
                                        eo = k ? -S[z] / 2 + V + et + J + D.mainAxis : W + et + J + D.mainAxis,
                                        ea = n.elements.arrow && N(n.elements.arrow),
                                        el = ea ? "y" === _ ? ea.clientTop || 0 : ea.clientLeft || 0 : 0,
                                        es = null != (F = null == L ? void 0 : L[_]) ? F : 0,
                                        ec = ei(g ? u(q, j + en - es - el) : q, j, g ? c(K, j + eo - es) : K);
                                    E[_] = ec, R[_] = ec - j
                                }
                                if (void 0 !== a && a) {
                                    var eu, ed, ef, ep, eg, em = E[w],
                                        eh = "y" === w ? "height" : "width",
                                        eb = em + b["x" === _ ? "top" : A],
                                        ey = em - b["x" === _ ? C : O],
                                        ev = -1 !== ["top", A].indexOf(y),
                                        ek = null != (eu = null == L ? void 0 : L[w]) ? eu : 0,
                                        ex = ev ? eb : em - S[eh] - T[eh] - ek + D.altAxis,
                                        e_ = ev ? em + S[eh] + T[eh] - ek - D.altAxis : ey,
                                        ew = g && ev ? (eg = ei(ex, em, e_)) > e_ ? e_ : eg : ei(g ? ex : eb, em, g ? e_ : ey);
                                    E[w] = ew, R[w] = ew - em
                                }
                                n.modifiersData[i] = R
                            }
                        },
                        requiresIfExists: ["offset"]
                    }, {
                        name: "arrow",
                        enabled: !0,
                        phase: "main",
                        fn: function(e) {
                            var t, n = e.state,
                                r = e.name,
                                i = e.options,
                                o = n.elements.arrow,
                                a = n.modifiersData.popperOffsets,
                                l = $(n.placement),
                                s = H(l),
                                c = [A, O].indexOf(l) >= 0 ? "height" : "width";
                            if (o && a) {
                                var u, d, f = et("number" != typeof(u = "function" == typeof(u = i.padding) ? u(Object.assign({}, n.rects, {
                                        placement: n.placement
                                    })) : u) ? u : en(u, M)),
                                    p = x(o),
                                    g = n.rects.reference[c] + n.rects.reference[s] - a[s] - n.rects.popper[c],
                                    m = a[s] - n.rects.reference[s],
                                    h = N(o),
                                    b = h ? "y" === s ? h.clientHeight || 0 : h.clientWidth || 0 : 0,
                                    y = f["y" === s ? "top" : A],
                                    v = b - p[c] - f["y" === s ? C : O],
                                    k = b / 2 - p[c] / 2 + (g / 2 - m / 2),
                                    _ = ei(y, k, v);
                                n.modifiersData[r] = ((t = {})[s] = _, t.centerOffset = _ - k, t)
                            }
                        },
                        effect: function(e) {
                            var t = e.state,
                                n = e.options.element,
                                r = void 0 === n ? "[data-popper-arrow]" : n;
                            if (null != r && ("string" != typeof r || (r = t.elements.popper.querySelector(r)))) Q(t.elements.popper, r) && (t.elements.arrow = r)
                        },
                        requires: ["popperOffsets"],
                        requiresIfExists: ["preventOverflow"]
                    }, {
                        name: "hide",
                        enabled: !0,
                        phase: "main",
                        requiresIfExists: ["preventOverflow"],
                        fn: function(e) {
                            var t = e.state,
                                n = e.name,
                                r = t.rects.reference,
                                i = t.rects.popper,
                                o = t.modifiersData.preventOverflow,
                                a = er(t, {
                                    elementContext: "reference"
                                }),
                                l = er(t, {
                                    altBoundary: !0
                                }),
                                s = eo(a, r),
                                c = eo(l, i, o),
                                u = ea(s),
                                d = ea(c);
                            t.modifiersData[n] = {
                                referenceClippingOffsets: s,
                                popperEscapeOffsets: c,
                                isReferenceHidden: u,
                                hasPopperEscaped: d
                            }, t.attributes.popper = Object.assign({}, t.attributes.popper, {
                                "data-popper-reference-hidden": u,
                                "data-popper-escaped": d
                            })
                        }
                    }]
                }, eu = void 0 === (ec = (es = el).defaultModifiers) ? [] : ec, ef = void 0 === (ed = es.defaultOptions) ? B : ed, function(e, t, n) {
                    void 0 === n && (n = ef);
                    var r, i, s = {
                            placement: "bottom",
                            orderedModifiers: [],
                            options: Object.assign({}, B, ef),
                            modifiersData: {},
                            elements: {
                                reference: e,
                                popper: t
                            },
                            attributes: {},
                            styles: {}
                        },
                        c = [],
                        u = !1,
                        f = {
                            state: s,
                            setOptions: function(n) {
                                var r, i, o, l, u, d, g, m, h = "function" == typeof n ? n(s.options) : n;
                                p(), s.options = Object.assign({}, ef, s.options, h), s.scrollParents = {
                                    reference: a(e) ? w(e) : e.contextElement ? w(e.contextElement) : [],
                                    popper: w(t)
                                };
                                var b = (o = Object.keys(i = (r = [].concat(eu, s.options.modifiers)).reduce(function(e, t) {
                                    var n = e[t.name];
                                    return e[t.name] = n ? Object.assign({}, n, t, {
                                        options: Object.assign({}, n.options, t.options),
                                        data: Object.assign({}, n.data, t.data)
                                    }) : t, e
                                }, {})).map(function(e) {
                                    return i[e]
                                }), u = new Map, d = new Set, g = [], o.forEach(function(e) {
                                    u.set(e.name, e)
                                }), o.forEach(function(e) {
                                    d.has(e.name) || function e(t) {
                                        d.add(t.name), [].concat(t.requires || [], t.requiresIfExists || []).forEach(function(t) {
                                            if (!d.has(t)) {
                                                var n = u.get(t);
                                                n && e(n)
                                            }
                                        }), g.push(t)
                                    }(e)
                                }), P.reduce(function(e, t) {
                                    return e.concat(g.filter(function(e) {
                                        return e.phase === t
                                    }))
                                }, []));
                                return s.orderedModifiers = b.filter(function(e) {
                                    return e.enabled
                                }), s.orderedModifiers.forEach(function(e) {
                                    var t = e.name,
                                        n = e.options,
                                        r = e.effect;
                                    if ("function" == typeof r) {
                                        var i = r({
                                                state: s,
                                                name: t,
                                                instance: f,
                                                options: void 0 === n ? {} : n
                                            }),
                                            o = function() {};
                                        c.push(i || o)
                                    }
                                }), f.update()
                            },
                            forceUpdate: function() {
                                if (!u) {
                                    var e, t, n, r, i, a, c, p, v, _, w, E, S, C = s.elements,
                                        O = C.reference,
                                        A = C.popper;
                                    if (z(O, A)) {
                                        s.rects = {
                                            reference: (e = O, t = N(A), n = "fixed" === s.options.strategy, r = l(t), v = l(t) && (c = d((a = (i = t).getBoundingClientRect()).width) / i.offsetWidth || 1, p = d(a.height) / i.offsetHeight || 1, 1 !== c || 1 !== p), _ = b(t), w = g(e, v, n), E = {
                                                scrollLeft: 0,
                                                scrollTop: 0
                                            }, S = {
                                                x: 0,
                                                y: 0
                                            }, (r || !r && !n) && (("body" !== h(t) || k(_)) && (E = function(e) {
                                                var t;
                                                return e !== o(e) && l(e) ? {
                                                    scrollLeft: e.scrollLeft,
                                                    scrollTop: e.scrollTop
                                                } : m(e)
                                            }(t)), l(t) ? (S = g(t, !0), S.x += t.clientLeft, S.y += t.clientTop) : _ && (S.x = y(_))), {
                                                x: w.left + E.scrollLeft - S.x,
                                                y: w.top + E.scrollTop - S.y,
                                                width: w.width,
                                                height: w.height
                                            }),
                                            popper: x(A)
                                        }, s.reset = !1, s.placement = s.options.placement, s.orderedModifiers.forEach(function(e) {
                                            return s.modifiersData[e.name] = Object.assign({}, e.data)
                                        });
                                        for (var T = 0; T < s.orderedModifiers.length; T++) {
                                            if (!0 === s.reset) {
                                                s.reset = !1, T = -1;
                                                continue
                                            }
                                            var M = s.orderedModifiers[T],
                                                I = M.fn,
                                                D = M.options,
                                                L = void 0 === D ? {} : D,
                                                R = M.name;
                                            "function" == typeof I && (s = I({
                                                state: s,
                                                options: L,
                                                name: R,
                                                instance: f
                                            }) || s)
                                        }
                                    }
                                }
                            },
                            update: function() {
                                return i || (i = new Promise(function(e) {
                                    Promise.resolve().then(function() {
                                        i = void 0, e(new Promise(function(e) {
                                            f.forceUpdate(), e(s)
                                        }))
                                    })
                                })), i
                            },
                            destroy: function() {
                                p(), u = !0
                            }
                        };
                    if (!z(e, t)) return f;

                    function p() {
                        c.forEach(function(e) {
                            return e()
                        }), c = []
                    }
                    return f.setOptions(n).then(function(e) {
                        !u && n.onFirstUpdate && n.onFirstUpdate(e)
                    }), f
                }),
                eg = n(82330),
                em = n.n(eg),
                eh = function(e) {
                    return e.reduce(function(e, t) {
                        var n = t[0],
                            r = t[1];
                        return e[n] = r, e
                    }, {})
                },
                eb = "undefined" != typeof window && window.document && window.document.createElement ? r.useLayoutEffect : r.useEffect,
                ey = [],
                ev = function(e, t, n) {
                    void 0 === n && (n = {});
                    var o = r.useRef(null),
                        a = {
                            onFirstUpdate: n.onFirstUpdate,
                            placement: n.placement || "bottom",
                            strategy: n.strategy || "absolute",
                            modifiers: n.modifiers || ey
                        },
                        l = r.useState({
                            styles: {
                                popper: {
                                    position: a.strategy,
                                    left: "0",
                                    top: "0"
                                },
                                arrow: {
                                    position: "absolute"
                                }
                            },
                            attributes: {}
                        }),
                        s = l[0],
                        c = l[1],
                        u = r.useMemo(function() {
                            return {
                                name: "updateState",
                                enabled: !0,
                                phase: "write",
                                fn: function(e) {
                                    var t = e.state,
                                        n = Object.keys(t.elements);
                                    i.flushSync(function() {
                                        c({
                                            styles: eh(n.map(function(e) {
                                                return [e, t.styles[e] || {}]
                                            })),
                                            attributes: eh(n.map(function(e) {
                                                return [e, t.attributes[e]]
                                            }))
                                        })
                                    })
                                },
                                requires: ["computeStyles"]
                            }
                        }, []),
                        d = r.useMemo(function() {
                            var e = {
                                onFirstUpdate: a.onFirstUpdate,
                                placement: a.placement,
                                strategy: a.strategy,
                                modifiers: [].concat(a.modifiers, [u, {
                                    name: "applyStyles",
                                    enabled: !1
                                }])
                            };
                            return em()(o.current, e) ? o.current || e : (o.current = e, e)
                        }, [a.onFirstUpdate, a.placement, a.strategy, a.modifiers, u]),
                        f = r.useRef();
                    return eb(function() {
                        f.current && f.current.setOptions(d)
                    }, [d]), eb(function() {
                        if (null != e && null != t) {
                            var r = (n.createPopper || ep)(e, t, d);
                            return f.current = r,
                                function() {
                                    r.destroy(), f.current = null
                                }
                        }
                    }, [e, t, n.createPopper]), {
                        state: f.current ? f.current.state : null,
                        styles: s.styles,
                        attributes: s.attributes,
                        update: f.current ? f.current.update : null,
                        forceUpdate: f.current ? f.current.forceUpdate : null
                    }
                }
        },
        78791: function(e, t, n) {
            var r = n(29058);
            e.exports = function(e, t) {
                var n, i, o, a = null;
                if (!e || "string" != typeof e) return a;
                for (var l = r(e), s = "function" == typeof t, c = 0, u = l.length; c < u; c++) i = (n = l[c]).property, o = n.value, s ? t(i, o, n) : o && (a || (a = {}), a[i] = o);
                return a
            }
        },
        56855: function(e, t, n) {
            var r = n(40101).FilterCSS,
                i = n(40101).getDefaultWhiteList,
                o = n(12665);

            function a() {
                return {
                    a: ["target", "href", "title"],
                    abbr: ["title"],
                    address: [],
                    area: ["shape", "coords", "href", "alt"],
                    article: [],
                    aside: [],
                    audio: ["autoplay", "controls", "crossorigin", "loop", "muted", "preload", "src", ],
                    b: [],
                    bdi: ["dir"],
                    bdo: ["dir"],
                    big: [],
                    blockquote: ["cite"],
                    br: [],
                    caption: [],
                    center: [],
                    cite: [],
                    code: [],
                    col: ["align", "valign", "span", "width"],
                    colgroup: ["align", "valign", "span", "width"],
                    dd: [],
                    del: ["datetime"],
                    details: ["open"],
                    div: [],
                    dl: [],
                    dt: [],
                    em: [],
                    figcaption: [],
                    figure: [],
                    font: ["color", "size", "face"],
                    footer: [],
                    h1: [],
                    h2: [],
                    h3: [],
                    h4: [],
                    h5: [],
                    h6: [],
                    header: [],
                    hr: [],
                    i: [],
                    img: ["src", "alt", "title", "width", "height"],
                    ins: ["datetime"],
                    li: [],
                    mark: [],
                    nav: [],
                    ol: [],
                    p: [],
                    pre: [],
                    s: [],
                    section: [],
                    small: [],
                    span: [],
                    sub: [],
                    summary: [],
                    sup: [],
                    strong: [],
                    strike: [],
                    table: ["width", "border", "align", "valign"],
                    tbody: ["align", "valign"],
                    td: ["width", "rowspan", "colspan", "align", "valign"],
                    tfoot: ["align", "valign"],
                    th: ["width", "rowspan", "colspan", "align", "valign"],
                    thead: ["align", "valign"],
                    tr: ["rowspan", "align", "valign"],
                    tt: [],
                    u: [],
                    ul: [],
                    video: ["autoplay", "controls", "crossorigin", "loop", "muted", "playsinline", "poster", "preload", "src", "height", "width", ]
                }
            }
            var l = new r;

            function s(e) {
                return e.replace(c, "&lt;").replace(u, "&gt;")
            }
            var c = /</g,
                u = />/g,
                d = /"/g,
                f = /&quot;/g,
                p = /&#([a-zA-Z0-9]*);?/gim,
                g = /&colon;?/gim,
                m = /&newline;?/gim,
                h = /((j\s*a\s*v\s*a|v\s*b|l\s*i\s*v\s*e)\s*s\s*c\s*r\s*i\s*p\s*t\s*|m\s*o\s*c\s*h\s*a):/gi,
                b = /e\s*x\s*p\s*r\s*e\s*s\s*s\s*i\s*o\s*n\s*\(.*/gi,
                y = /u\s*r\s*l\s*\(.*/gi;

            function v(e) {
                return e.replace(d, "&quot;")
            }

            function k(e) {
                return e.replace(f, '"')
            }

            function x(e) {
                return e.replace(p, function(e, t) {
                    return "x" === t[0] || "X" === t[0] ? String.fromCharCode(parseInt(t.substr(1), 16)) : String.fromCharCode(parseInt(t, 10))
                })
            }

            function _(e) {
                return e.replace(g, ":").replace(m, " ")
            }

            function w(e) {
                for (var t = "", n = 0, r = e.length; n < r; n++) t += 32 > e.charCodeAt(n) ? " " : e.charAt(n);
                return o.trim(t)
            }

            function E(e) {
                return e = w(e = _(e = x(e = k(e))))
            }

            function S(e) {
                return e = s(e = v(e))
            }

            function N() {
                return ""
            }
            t.whiteList = a(), t.getDefaultWhiteList = a, t.onTag = function(e, t, n) {}, t.onIgnoreTag = function(e, t, n) {}, t.onTagAttr = function(e, t, n) {}, t.onIgnoreTagAttr = function(e, t, n) {}, t.safeAttrValue = function(e, t, n, r) {
                if (n = E(n), "href" === t || "src" === t) {
                    if ("#" === (n = o.trim(n))) return "#";
                    if (!("http://" === n.substr(0, 7) || "https://" === n.substr(0, 8) || "mailto:" === n.substr(0, 7) || "tel:" === n.substr(0, 4) || "data:image/" === n.substr(0, 11) || "ftp://" === n.substr(0, 6) || "./" === n.substr(0, 2) || "../" === n.substr(0, 3) || "#" === n[0] || "/" === n[0])) return ""
                } else if ("background" === t) {
                    if (h.lastIndex = 0, h.test(n)) return ""
                } else if ("style" === t) {
                    if (b.lastIndex = 0, b.test(n) || (y.lastIndex = 0, y.test(n) && (h.lastIndex = 0, h.test(n)))) return "";
                    !1 !== r && (n = (r = r || l).process(n))
                }
                return n = S(n)
            }, t.escapeHtml = s, t.escapeQuote = v, t.unescapeQuote = k, t.escapeHtmlEntities = x, t.escapeDangerHtml5Entities = _, t.clearNonPrintableCharacter = w, t.friendlyAttrValue = E, t.escapeAttrValue = S, t.onIgnoreTagStripAll = N, t.StripTagBody = function(e, t) {
                "function" != typeof t && (t = function() {});
                var n = !Array.isArray(e),
                    r = [],
                    i = !1;
                return {
                    onIgnoreTag: function(a, l, s) {
                        if (c = a, n ? 0 : -1 === o.indexOf(e, c)) return t(a, l, s);
                        if (!s.isClosing) return i || (i = s.position), "[removed]";
                        var c, u = "[/removed]",
                            d = s.position + u.length;
                        return r.push([!1 !== i ? i : s.position, d, ]), i = !1, u
                    },
                    remove: function(e) {
                        var t = "",
                            n = 0;
                        return o.forEach(r, function(r) {
                            t += e.slice(n, r[0]), n = r[1]
                        }), t += e.slice(n)
                    }
                }
            }, t.stripCommentTag = function(e) {
                for (var t = "", n = 0; n < e.length;) {
                    var r = e.indexOf("<!--", n);
                    if (-1 === r) {
                        t += e.slice(n);
                        break
                    }
                    t += e.slice(n, r);
                    var i = e.indexOf("-->", r);
                    if (-1 === i) break;
                    n = i + 3
                }
                return t
            }, t.stripBlankChar = function(e) {
                var t = e.split("");
                return (t = t.filter(function(e) {
                    var t = e.charCodeAt(0);
                    return 127 !== t && (!(t <= 31) || 10 === t || 13 === t)
                })).join("")
            }, t.cssFilter = l, t.getDefaultCSSWhiteList = i
        },
        138: function(e, t, n) {
            var r = n(56855),
                i = n(43310),
                o = n(91611);

            function a(e, t) {
                return new o(t).process(e)
            }(t = e.exports = a).filterXSS = a, t.FilterXSS = o,
                function() {
                    for (var e in r) t[e] = r[e];
                    for (var n in i) t[n] = i[n]
                }(), "undefined" != typeof window && (window.filterXSS = e.exports), "undefined" != typeof self && "undefined" != typeof DedicatedWorkerGlobalScope && self instanceof DedicatedWorkerGlobalScope && (self.filterXSS = e.exports)
        },
        43310: function(e, t, n) {
            var r = n(12665);

            function i(e) {
                var t, n = r.spaceIndex(e);
                return t = -1 === n ? e.slice(1, -1) : e.slice(1, n + 1), "/" === (t = r.trim(t).toLowerCase()).slice(0, 1) && (t = t.slice(1)), "/" === t.slice(-1) && (t = t.slice(0, -1)), t
            }

            function o(e) {
                return "</" === e.slice(0, 2)
            }
            var a = /[^a-zA-Z0-9\\_:.-]/gim;

            function l(e, t) {
                for (; t < e.length; t++) {
                    var n = e[t];
                    if (" " !== n) {
                        if ("=" === n) return t;
                        return -1
                    }
                }
            }

            function s(e, t) {
                for (; t < e.length; t++) {
                    var n = e[t];
                    if (" " !== n) {
                        if ("'" === n || '"' === n) return t;
                        return -1
                    }
                }
            }

            function c(e, t) {
                for (; t > 0; t--) {
                    var n = e[t];
                    if (" " !== n) {
                        if ("=" === n) return t;
                        return -1
                    }
                }
            }

            function u(e) {
                var t;
                return '"' === e[0] && '"' === e[e.length - 1] || "'" === e[0] && "'" === e[e.length - 1] ? e.substr(1, e.length - 2) : e
            }
            t.parseTag = function(e, t, n) {
                "use strict";
                var r = "",
                    a = 0,
                    l = !1,
                    s = !1,
                    c = 0,
                    u = e.length,
                    d = "",
                    f = "";
                chariterator: for (c = 0; c < u; c++) {
                    var p = e.charAt(c);
                    if (!1 === l) {
                        if ("<" === p) {
                            l = c;
                            continue
                        }
                    } else if (!1 === s) {
                        if ("<" === p) {
                            r += n(e.slice(a, c)), l = c, a = c;
                            continue
                        }
                        if (">" === p || c === u - 1) {
                            r += n(e.slice(a, l)), d = i(f = e.slice(l, c + 1)), r += t(l, r.length, d, f, o(f)), a = c + 1, l = !1;
                            continue
                        }
                        if ('"' === p || "'" === p)
                            for (var g = 1, m = e.charAt(c - g);
                                "" === m.trim() || "=" === m;) {
                                if ("=" === m) {
                                    s = p;
                                    continue chariterator
                                }
                                m = e.charAt(c - ++g)
                            }
                    } else if (p === s) {
                        s = !1;
                        continue
                    }
                }
                return a < u && (r += n(e.substr(a))), r
            }, t.parseAttr = function(e, t) {
                "use strict";
                var n = 0,
                    i = 0,
                    o = [],
                    d = !1,
                    f = e.length;

                function p(e, n) {
                    if (!((e = (e = r.trim(e)).replace(a, "").toLowerCase()).length < 1)) {
                        var i = t(e, n || "");
                        i && o.push(i)
                    }
                }
                for (var g = 0; g < f; g++) {
                    var m, h, b = e.charAt(g);
                    if (!1 === d && "=" === b) {
                        d = e.slice(n, g), n = g + 1, i = '"' === e.charAt(n) || "'" === e.charAt(n) ? n : s(e, g + 1);
                        continue
                    }
                    if (!1 !== d && g === i) {
                        if (-1 === (h = e.indexOf(b, g + 1))) break;
                        p(d, r.trim(e.slice(i + 1, h))), d = !1, n = (g = h) + 1;
                        continue
                    }
                    if (/\s|\n|\t/.test(b)) {
                        if (e = e.replace(/\s|\n|\t/g, " "), !1 === d) {
                            if (-1 === (h = l(e, g))) {
                                p(r.trim(e.slice(n, g))), d = !1, n = g + 1;
                                continue
                            }
                            g = h - 1;
                            continue
                        }
                        if (-1 !== (h = c(e, g - 1))) continue;
                        p(d, u(r.trim(e.slice(n, g)))), d = !1, n = g + 1;
                        continue
                    }
                }
                return n < e.length && (!1 === d ? p(e.slice(n)) : p(d, u(r.trim(e.slice(n))))), r.trim(o.join(" "))
            }
        },
        12665: function(e) {
            e.exports = {
                indexOf: function(e, t) {
                    var n, r;
                    if (Array.prototype.indexOf) return e.indexOf(t);
                    for (n = 0, r = e.length; n < r; n++)
                        if (e[n] === t) return n;
                    return -1
                },
                forEach: function(e, t, n) {
                    var r, i;
                    if (Array.prototype.forEach) return e.forEach(t, n);
                    for (r = 0, i = e.length; r < i; r++) t.call(n, e[r], r, e)
                },
                trim: function(e) {
                    return String.prototype.trim ? e.trim() : e.replace(/(^\s*)|(\s*$)/g, "")
                },
                spaceIndex: function(e) {
                    var t = /\s|\n|\t/.exec(e);
                    return t ? t.index : -1
                }
            }
        },
        91611: function(e, t, n) {
            var r = n(40101).FilterCSS,
                i = n(56855),
                o = n(43310),
                a = o.parseTag,
                l = o.parseAttr,
                s = n(12665);

            function c(e) {
                return null == e
            }

            function u(e) {
                (e = function(e) {
                    var t = {};
                    for (var n in e) t[n] = e[n];
                    return t
                }(e || {})).stripIgnoreTag && (e.onIgnoreTag && console.error('Notes: cannot use these two options "stripIgnoreTag" and "onIgnoreTag" at the same time'), e.onIgnoreTag = i.onIgnoreTagStripAll), e.whiteList || e.allowList ? e.whiteList = function(e) {
                    var t = {};
                    for (var n in e) Array.isArray(e[n]) ? t[n.toLowerCase()] = e[n].map(function(e) {
                        return e.toLowerCase()
                    }) : t[n.toLowerCase()] = e[n];
                    return t
                }(e.whiteList || e.allowList) : e.whiteList = i.whiteList, e.onTag = e.onTag || i.onTag, e.onTagAttr = e.onTagAttr || i.onTagAttr, e.onIgnoreTag = e.onIgnoreTag || i.onIgnoreTag, e.onIgnoreTagAttr = e.onIgnoreTagAttr || i.onIgnoreTagAttr, e.safeAttrValue = e.safeAttrValue || i.safeAttrValue, e.escapeHtml = e.escapeHtml || i.escapeHtml, this.options = e, !1 === e.css ? this.cssFilter = !1 : (e.css = e.css || {}, this.cssFilter = new r(e.css))
            }
            u.prototype.process = function(e) {
                if (!(e = (e = e || "").toString())) return "";
                var t = this.options,
                    n = t.whiteList,
                    r = t.onTag,
                    o = t.onIgnoreTag,
                    u = t.onTagAttr,
                    d = t.onIgnoreTagAttr,
                    f = t.safeAttrValue,
                    p = t.escapeHtml,
                    g = this.cssFilter;
                t.stripBlankChar && (e = i.stripBlankChar(e)), t.allowCommentTag || (e = i.stripCommentTag(e));
                var m = !1;
                t.stripIgnoreTagBody && (o = (m = i.StripTagBody(t.stripIgnoreTagBody, o)).onIgnoreTag);
                var h = a(e, function(e, t, i, a, m) {
                    var h = {
                            sourcePosition: e,
                            position: t,
                            isClosing: m,
                            isWhite: Object.prototype.hasOwnProperty.call(n, i)
                        },
                        b = r(i, a, h);
                    if (!c(b)) return b;
                    if (h.isWhite) {
                        if (h.isClosing) return "</" + i + ">";
                        var y = function e(t) {
                                var n = s.spaceIndex(t);
                                if (-1 === n) return {
                                    html: "",
                                    closing: "/" === t[t.length - 2]
                                };
                                var r = "/" === (t = s.trim(t.slice(n + 1, -1)))[t.length - 1];
                                return r && (t = s.trim(t.slice(0, -1))), {
                                    html: t,
                                    closing: r
                                }
                            }(a),
                            v = n[i],
                            k = l(y.html, function(e, t) {
                                var n = -1 !== s.indexOf(v, e),
                                    r = u(i, e, t, n);
                                return c(r) ? n ? (t = f(i, e, t, g)) ? e + '="' + t + '"' : e : (r = d(i, e, t, n), c(r)) ? void 0 : r : r
                            });
                        return a = "<" + i, k && (a += " " + k), y.closing && (a += " /"), a += ">"
                    }
                    return (b = o(i, a, h), c(b)) ? p(a) : b
                }, p);
                return m && (h = m.remove(h)), h
            }, e.exports = u
        },
        76966: function(e) {
            var t = {
                exports: {}
            };

            function n(e) {
                return e instanceof Map ? e.clear = e.delete = e.set = function() {
                    throw Error("map is read-only")
                } : e instanceof Set && (e.add = e.clear = e.delete = function() {
                    throw Error("set is read-only")
                }), Object.freeze(e), Object.getOwnPropertyNames(e).forEach(function(t) {
                    var r = e[t];
                    "object" != typeof r || Object.isFrozen(r) || n(r)
                }), e
            }
            t.exports = n, t.exports.default = n;
            class r {
                constructor(e) {
                    void 0 === e.data && (e.data = {}), this.data = e.data, this.isMatchIgnored = !1
                }
                ignoreMatch() {
                    this.isMatchIgnored = !0
                }
            }

            function i(e) {
                return e.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#x27;")
            }

            function o(e, ...t) {
                let n = Object.create(null);
                for (let r in e) n[r] = e[r];
                return t.forEach(function(e) {
                    for (let t in e) n[t] = e[t]
                }), n
            }
            let a = e => !!e.scope || e.sublanguage && e.language,
                l = (e, {
                    prefix: t
                }) => {
                    if (e.includes(".")) {
                        let n = e.split(".");
                        return [`${t}${n.shift()}`, ...n.map((e, t) => `${e}${"_".repeat(t+1)}`)].join(" ")
                    }
                    return `${t}${e}`
                };
            class s {
                constructor(e, t) {
                    this.buffer = "", this.classPrefix = t.classPrefix, e.walk(this)
                }
                addText(e) {
                    this.buffer += i(e)
                }
                openNode(e) {
                    if (!a(e)) return;
                    let t = "";
                    t = e.sublanguage ? `language-${e.language}` : l(e.scope, {
                        prefix: this.classPrefix
                    }), this.span(t)
                }
                closeNode(e) {
                    a(e) && (this.buffer += "</span>")
                }
                value() {
                    return this.buffer
                }
                span(e) {
                    this.buffer += `<span class="${e}">`
                }
            }
            let c = (e = {}) => {
                let t = {
                    children: []
                };
                return Object.assign(t, e), t
            };
            class u {
                constructor() {
                    this.rootNode = c(), this.stack = [this.rootNode]
                }
                get top() {
                    return this.stack[this.stack.length - 1]
                }
                get root() {
                    return this.rootNode
                }
                add(e) {
                    this.top.children.push(e)
                }
                openNode(e) {
                    let t = c({
                        scope: e
                    });
                    this.add(t), this.stack.push(t)
                }
                closeNode() {
                    if (this.stack.length > 1) return this.stack.pop()
                }
                closeAllNodes() {
                    for (; this.closeNode(););
                }
                toJSON() {
                    return JSON.stringify(this.rootNode, null, 4)
                }
                walk(e) {
                    return this.constructor._walk(e, this.rootNode)
                }
                static _walk(e, t) {
                    return "string" == typeof t ? e.addText(t) : t.children && (e.openNode(t), t.children.forEach(t => this._walk(e, t)), e.closeNode(t)), e
                }
                static _collapse(e) {
                    "string" != typeof e && e.children && (e.children.every(e => "string" == typeof e) ? e.children = [e.children.join("")] : e.children.forEach(e => {
                        u._collapse(e)
                    }))
                }
            }
            class d extends u {
                constructor(e) {
                    super(), this.options = e
                }
                addKeyword(e, t) {
                    "" !== e && (this.openNode(t), this.addText(e), this.closeNode())
                }
                addText(e) {
                    "" !== e && this.add(e)
                }
                addSublanguage(e, t) {
                    let n = e.root;
                    n.sublanguage = !0, n.language = t, this.add(n)
                }
                toHTML() {
                    let e = new s(this, this.options);
                    return e.value()
                }
                finalize() {
                    return !0
                }
            }

            function f(e) {
                return e ? "string" == typeof e ? e : e.source : null
            }

            function p(e) {
                return h("(?=", e, ")")
            }

            function g(e) {
                return h("(?:", e, ")*")
            }

            function m(e) {
                return h("(?:", e, ")?")
            }

            function h(...e) {
                let t = e.map(e => f(e)).join("");
                return t
            }

            function b(...e) {
                let t = function(e) {
                        let t = e[e.length - 1];
                        return "object" == typeof t && t.constructor === Object ? (e.splice(e.length - 1, 1), t) : {}
                    }(e),
                    n = "(" + (t.capture ? "" : "?:") + e.map(e => f(e)).join("|") + ")";
                return n
            }

            function y(e) {
                return RegExp(e.toString() + "|").exec("").length - 1
            }
            let v = /\[(?:[^\\\]]|\\.)*\]|\(\??|\\([1-9][0-9]*)|\\./;

            function k(e, {
                joinWith: t
            }) {
                let n = 0;
                return e.map(e => {
                    n += 1;
                    let t = n,
                        r = f(e),
                        i = "";
                    for (; r.length > 0;) {
                        let o = v.exec(r);
                        if (!o) {
                            i += r;
                            break
                        }
                        i += r.substring(0, o.index), r = r.substring(o.index + o[0].length), "\\" === o[0][0] && o[1] ? i += "\\" + String(Number(o[1]) + t) : (i += o[0], "(" === o[0] && n++)
                    }
                    return i
                }).map(e => `(${e})`).join(t)
            }
            let x = "[a-zA-Z]\\w*",
                _ = "[a-zA-Z_]\\w*",
                w = "\\b\\d+(\\.\\d+)?",
                E = "(-?)(\\b0[xX][a-fA-F0-9]+|(\\b\\d+(\\.\\d*)?|\\.\\d+)([eE][-+]?\\d+)?)",
                S = "\\b(0b[01]+)",
                N = (e = {}) => {
                    let t = /^#![ ]*\//;
                    return e.binary && (e.begin = h(t, /.*\b/, e.binary, /\b.*/)), o({
                        scope: "meta",
                        begin: t,
                        end: /$/,
                        relevance: 0,
                        "on:begin" (e, t) {
                            0 !== e.index && t.ignoreMatch()
                        }
                    }, e)
                },
                C = {
                    begin: "\\\\[\\s\\S]",
                    relevance: 0
                },
                O = function(e, t, n = {}) {
                    let r = o({
                        scope: "comment",
                        begin: e,
                        end: t,
                        contains: []
                    }, n);
                    r.contains.push({
                        scope: "doctag",
                        begin: "[ ]*(?=(TODO|FIXME|NOTE|BUG|OPTIMIZE|HACK|XXX):)",
                        end: /(TODO|FIXME|NOTE|BUG|OPTIMIZE|HACK|XXX):/,
                        excludeBegin: !0,
                        relevance: 0
                    });
                    let i = b("I", "a", "is", "so", "us", "to", "at", "if", "in", "it", "on", /[A-Za-z]+['](d|ve|re|ll|t|s|n)/, /[A-Za-z]+[-][a-z]+/, /[A-Za-z][a-z]{2,}/);
                    return r.contains.push({
                        begin: h(/[ ]+/, "(", i, /[.]?[:]?([.][ ]|[ ])/, "){3}")
                    }), r
                },
                A = O("//", "$"),
                T = O("/\\*", "\\*/"),
                M = O("#", "$"),
                I = function(e) {
                    return Object.assign(e, {
                        "on:begin" (e, t) {
                            t.data._beginMatch = e[1]
                        },
                        "on:end" (e, t) {
                            t.data._beginMatch !== e[1] && t.ignoreMatch()
                        }
                    })
                };
            var D = Object.freeze({
                __proto__: null,
                MATCH_NOTHING_RE: /\b\B/,
                IDENT_RE: x,
                UNDERSCORE_IDENT_RE: _,
                NUMBER_RE: w,
                C_NUMBER_RE: E,
                BINARY_NUMBER_RE: S,
                RE_STARTERS_RE: "!|!=|!==|%|%=|&|&&|&=|\\*|\\*=|\\+|\\+=|,|-|-=|/=|/|:|;|<<|<<=|<=|<|===|==|=|>>>=|>>=|>=|>>>|>>|>|\\?|\\[|\\{|\\(|\\^|\\^=|\\||\\|=|\\|\\||~",
                SHEBANG: N,
                BACKSLASH_ESCAPE: C,
                APOS_STRING_MODE: {
                    scope: "string",
                    begin: "'",
                    end: "'",
                    illegal: "\\n",
                    contains: [C]
                },
                QUOTE_STRING_MODE: {
                    scope: "string",
                    begin: '"',
                    end: '"',
                    illegal: "\\n",
                    contains: [C]
                },
                PHRASAL_WORDS_MODE: {
                    begin: /\b(a|an|the|are|I'm|isn't|don't|doesn't|won't|but|just|should|pretty|simply|enough|gonna|going|wtf|so|such|will|you|your|they|like|more)\b/
                },
                COMMENT: O,
                C_LINE_COMMENT_MODE: A,
                C_BLOCK_COMMENT_MODE: T,
                HASH_COMMENT_MODE: M,
                NUMBER_MODE: {
                    scope: "number",
                    begin: w,
                    relevance: 0
                },
                C_NUMBER_MODE: {
                    scope: "number",
                    begin: E,
                    relevance: 0
                },
                BINARY_NUMBER_MODE: {
                    scope: "number",
                    begin: S,
                    relevance: 0
                },
                REGEXP_MODE: {
                    begin: /(?=\/[^/\n]*\/)/,
                    contains: [{
                        scope: "regexp",
                        begin: /\//,
                        end: /\/[gimuy]*/,
                        illegal: /\n/,
                        contains: [C, {
                            begin: /\[/,
                            end: /\]/,
                            relevance: 0,
                            contains: [C]
                        }]
                    }]
                },
                TITLE_MODE: {
                    scope: "title",
                    begin: x,
                    relevance: 0
                },
                UNDERSCORE_TITLE_MODE: {
                    scope: "title",
                    begin: _,
                    relevance: 0
                },
                METHOD_GUARD: {
                    begin: "\\.\\s*" + _,
                    relevance: 0
                },
                END_SAME_AS_BEGIN: I
            });

            function L(e, t) {
                let n = e.input[e.index - 1];
                "." === n && t.ignoreMatch()
            }

            function R(e, t) {
                void 0 !== e.className && (e.scope = e.className, delete e.className)
            }

            function F(e, t) {
                t && e.beginKeywords && (e.begin = "\\b(" + e.beginKeywords.split(" ").join("|") + ")(?!\\.)(?=\\b|\\s)", e.__beforeBegin = L, e.keywords = e.keywords || e.beginKeywords, delete e.beginKeywords, void 0 === e.relevance && (e.relevance = 0))
            }

            function P(e, t) {
                Array.isArray(e.illegal) && (e.illegal = b(...e.illegal))
            }

            function B(e, t) {
                if (e.match) {
                    if (e.begin || e.end) throw Error("begin & end are not supported with match");
                    e.begin = e.match, delete e.match
                }
            }

            function z(e, t) {
                void 0 === e.relevance && (e.relevance = 1)
            }
            let j = (e, t) => {
                    if (!e.beforeMatch) return;
                    if (e.starts) throw Error("beforeMatch cannot be used with starts");
                    let n = Object.assign({}, e);
                    Object.keys(e).forEach(t => {
                        delete e[t]
                    }), e.keywords = n.keywords, e.begin = h(n.beforeMatch, p(n.begin)), e.starts = {
                        relevance: 0,
                        contains: [Object.assign(n, {
                            endsParent: !0
                        })]
                    }, e.relevance = 0, delete n.beforeMatch
                },
                $ = ["of", "and", "for", "in", "not", "or", "if", "then", "parent", "list", "value"],
                U = {},
                H = e => {
                    console.error(e)
                },
                q = (e, ...t) => {
                    console.log(`WARN: ${e}`, ...t)
                },
                K = (e, t) => {
                    U[`${e}/${t}`] || (console.log(`Deprecated as of ${e}. ${t}`), U[`${e}/${t}`] = !0)
                },
                V = Error();

            function Z(e, t, {
                key: n
            }) {
                let r = 0,
                    i = e[n],
                    o = {},
                    a = {};
                for (let l = 1; l <= t.length; l++) a[l + r] = i[l], o[l + r] = !0, r += y(t[l - 1]);
                e[n] = a, e[n]._emit = o, e[n]._multi = !0
            }

            function W(e) {
                var t;
                (t = e).scope && "object" == typeof t.scope && null !== t.scope && (t.beginScope = t.scope, delete t.scope), "string" == typeof e.beginScope && (e.beginScope = {
                        _wrap: e.beginScope
                    }), "string" == typeof e.endScope && (e.endScope = {
                        _wrap: e.endScope
                    }),
                    function(e) {
                        if (Array.isArray(e.begin)) {
                            if (e.skip || e.excludeBegin || e.returnBegin) throw H("skip, excludeBegin, returnBegin not compatible with beginScope: {}"), V;
                            if ("object" != typeof e.beginScope || null === e.beginScope) throw H("beginScope must be object"), V;
                            Z(e, e.begin, {
                                key: "beginScope"
                            }), e.begin = k(e.begin, {
                                joinWith: ""
                            })
                        }
                    }(e),
                    function(e) {
                        if (Array.isArray(e.end)) {
                            if (e.skip || e.excludeEnd || e.returnEnd) throw H("skip, excludeEnd, returnEnd not compatible with endScope: {}"), V;
                            if ("object" != typeof e.endScope || null === e.endScope) throw H("endScope must be object"), V;
                            Z(e, e.end, {
                                key: "endScope"
                            }), e.end = k(e.end, {
                                joinWith: ""
                            })
                        }
                    }(e)
            }
            class G extends Error {
                constructor(e, t) {
                    super(e), this.name = "HTMLInjectionError", this.html = t
                }
            }
            let X = Symbol("nomatch");
            var Q = function(e) {
                let n = Object.create(null),
                    a = Object.create(null),
                    l = [],
                    s = !0,
                    c = "Could not find the language '{}', did you forget to load/include a language module?",
                    u = {
                        disableAutodetect: !0,
                        name: "Plain text",
                        contains: []
                    },
                    v = {
                        ignoreUnescapedHTML: !1,
                        throwUnescapedHTML: !1,
                        noHighlightRe: /^(no-?highlight)$/i,
                        languageDetectRe: /\blang(?:uage)?-([\w-]+)\b/i,
                        classPrefix: "hljs-",
                        cssSelector: "pre code",
                        languages: null,
                        __emitter: d
                    };

                function x(e) {
                    return v.noHighlightRe.test(e)
                }

                function _(e, t, n) {
                    let r = "",
                        i = "";
                    "object" == typeof t ? (r = e, n = t.ignoreIllegals, i = t.language) : (K("10.7.0", "highlight(lang, code, ...args) has been deprecated."), K("10.7.0", "Please use highlight(code, options) instead.\nhttps://github.com/highlightjs/highlight.js/issues/2277"), i = e, r = t), void 0 === n && (n = !0);
                    let o = {
                        code: r,
                        language: i
                    };
                    I("before:highlight", o);
                    let a = o.result ? o.result : w(o.language, o.code, n);
                    return a.code = o.code, I("after:highlight", a), a
                }

                function w(e, t, a, l) {
                    let u = Object.create(null);

                    function d(e, t) {
                        return e.keywords[t]
                    }

                    function p() {
                        if (!O.keywords) {
                            M.addText(I);
                            return
                        }
                        let e = 0;
                        O.keywordPatternRe.lastIndex = 0;
                        let t = O.keywordPatternRe.exec(I),
                            n = "";
                        for (; t;) {
                            n += I.substring(e, t.index);
                            let r = S.case_insensitive ? t[0].toLowerCase() : t[0],
                                i = d(O, r);
                            if (i) {
                                let [o, a] = i;
                                if (M.addText(n), n = "", u[r] = (u[r] || 0) + 1, u[r] <= 7 && (D += a), o.startsWith("_")) n += t[0];
                                else {
                                    let l = S.classNameAliases[o] || o;
                                    M.addKeyword(t[0], l)
                                }
                            } else n += t[0];
                            e = O.keywordPatternRe.lastIndex, t = O.keywordPatternRe.exec(I)
                        }
                        n += I.substring(e), M.addText(n)
                    }

                    function g() {
                        null != O.subLanguage ? function() {
                            if ("" === I) return;
                            let e = null;
                            if ("string" == typeof O.subLanguage) {
                                if (!n[O.subLanguage]) {
                                    M.addText(I);
                                    return
                                }
                                e = w(O.subLanguage, I, !0, T[O.subLanguage]), T[O.subLanguage] = e._top
                            } else e = E(I, O.subLanguage.length ? O.subLanguage : null);
                            O.relevance > 0 && (D += e.relevance), M.addSublanguage(e._emitter, e.language)
                        }() : p(), I = ""
                    }

                    function m(e, t) {
                        let n = 1,
                            r = t.length - 1;
                        for (; n <= r;) {
                            if (!e._emit[n]) {
                                n++;
                                continue
                            }
                            let i = S.classNameAliases[e[n]] || e[n],
                                o = t[n];
                            i ? M.addKeyword(o, i) : (I = o, p(), I = ""), n++
                        }
                    }

                    function h(e, t) {
                        return e.scope && "string" == typeof e.scope && M.openNode(S.classNameAliases[e.scope] || e.scope), e.beginScope && (e.beginScope._wrap ? (M.addKeyword(I, S.classNameAliases[e.beginScope._wrap] || e.beginScope._wrap), I = "") : e.beginScope._multi && (m(e.beginScope, t), I = "")), O = Object.create(e, {
                            parent: {
                                value: O
                            }
                        })
                    }

                    function b(e) {
                        return 0 === O.matcher.regexIndex ? (I += e[0], 1) : (q = !0, 0)
                    }
                    let x = {};

                    function _(n, i) {
                        let o = i && i[0];
                        if (I += n, null == o) return g(), 0;
                        if ("begin" === x.type && "end" === i.type && x.index === i.index && "" === o) {
                            if (I += t.slice(i.index, i.index + 1), !s) {
                                let l = Error(`0 width match regex (${e})`);
                                throw l.languageName = e, l.badRule = x.rule, l
                            }
                            return 1
                        }
                        if (x = i, "begin" === i.type) return function(e) {
                            let t = e[0],
                                n = e.rule,
                                i = new r(n),
                                o = [n.__beforeBegin, n["on:begin"]];
                            for (let a of o)
                                if (a && (a(e, i), i.isMatchIgnored)) return b(t);
                            return n.skip ? I += t : (n.excludeBegin && (I += t), g(), n.returnBegin || n.excludeBegin || (I = t)), h(n, e), n.returnBegin ? 0 : t.length
                        }(i);
                        if ("illegal" !== i.type || a) {
                            if ("end" === i.type) {
                                let c = function e(n) {
                                    let i = n[0],
                                        o = t.substring(n.index),
                                        a = function e(t, n, i) {
                                            let o = function e(t, n) {
                                                let r = t && t.exec(n);
                                                return r && 0 === r.index
                                            }(t.endRe, i);
                                            if (o) {
                                                if (t["on:end"]) {
                                                    let a = new r(t);
                                                    t["on:end"](n, a), a.isMatchIgnored && (o = !1)
                                                }
                                                if (o) {
                                                    for (; t.endsParent && t.parent;) t = t.parent;
                                                    return t
                                                }
                                            }
                                            if (t.endsWithParent) return e(t.parent, n, i)
                                        }(O, n, o);
                                    if (!a) return X;
                                    let l = O;
                                    O.endScope && O.endScope._wrap ? (g(), M.addKeyword(i, O.endScope._wrap)) : O.endScope && O.endScope._multi ? (g(), m(O.endScope, n)) : l.skip ? I += i : (l.returnEnd || l.excludeEnd || (I += i), g(), l.excludeEnd && (I = i));
                                    do O.scope && M.closeNode(), O.skip || O.subLanguage || (D += O.relevance), O = O.parent; while (O !== a.parent);
                                    return a.starts && h(a.starts, n), l.returnEnd ? 0 : i.length
                                }(i);
                                if (c !== X) return c
                            }
                        } else {
                            let u = Error('Illegal lexeme "' + o + '" for mode "' + (O.scope || "<unnamed>") + '"');
                            throw u.mode = O, u
                        }
                        if ("illegal" === i.type && "" === o) return 1;
                        if (U > 1e5 && U > 3 * i.index) {
                            let d = Error("potential infinite loop, way more iterations than matches");
                            throw d
                        }
                        return I += o, o.length
                    }
                    let S = A(e);
                    if (!S) throw H(c.replace("{}", e)), Error('Unknown language: "' + e + '"');
                    let N = function(e) {
                            function t(t, n) {
                                return RegExp(f(t), "m" + (e.case_insensitive ? "i" : "") + (e.unicodeRegex ? "u" : "") + (n ? "g" : ""))
                            }
                            class n {
                                constructor() {
                                    this.matchIndexes = {}, this.regexes = [], this.matchAt = 1, this.position = 0
                                }
                                addRule(e, t) {
                                    t.position = this.position++, this.matchIndexes[this.matchAt] = t, this.regexes.push([t, e]), this.matchAt += y(e) + 1
                                }
                                compile() {
                                    0 === this.regexes.length && (this.exec = () => null);
                                    let e = this.regexes.map(e => e[1]);
                                    this.matcherRe = t(k(e, {
                                        joinWith: "|"
                                    }), !0), this.lastIndex = 0
                                }
                                exec(e) {
                                    this.matcherRe.lastIndex = this.lastIndex;
                                    let t = this.matcherRe.exec(e);
                                    if (!t) return null;
                                    let n = t.findIndex((e, t) => t > 0 && void 0 !== e),
                                        r = this.matchIndexes[n];
                                    return t.splice(0, n), Object.assign(t, r)
                                }
                            }
                            class r {
                                constructor() {
                                    this.rules = [], this.multiRegexes = [], this.count = 0, this.lastIndex = 0, this.regexIndex = 0
                                }
                                getMatcher(e) {
                                    if (this.multiRegexes[e]) return this.multiRegexes[e];
                                    let t = new n;
                                    return this.rules.slice(e).forEach(([e, n]) => t.addRule(e, n)), t.compile(), this.multiRegexes[e] = t, t
                                }
                                resumingScanAtSamePosition() {
                                    return 0 !== this.regexIndex
                                }
                                considerAll() {
                                    this.regexIndex = 0
                                }
                                addRule(e, t) {
                                    this.rules.push([e, t]), "begin" === t.type && this.count++
                                }
                                exec(e) {
                                    let t = this.getMatcher(this.regexIndex);
                                    t.lastIndex = this.lastIndex;
                                    let n = t.exec(e);
                                    if (this.resumingScanAtSamePosition()) {
                                        if (n && n.index === this.lastIndex);
                                        else {
                                            let r = this.getMatcher(0);
                                            r.lastIndex = this.lastIndex + 1, n = r.exec(e)
                                        }
                                    }
                                    return n && (this.regexIndex += n.position + 1, this.regexIndex === this.count && this.considerAll()), n
                                }
                            }
                            if (e.compilerExtensions || (e.compilerExtensions = []), e.contains && e.contains.includes("self")) throw Error("ERR: contains `self` is not supported at the top-level of a language.  See documentation.");
                            return e.classNameAliases = o(e.classNameAliases || {}),
                                function n(i, a) {
                                    let l = i;
                                    if (i.isCompiled) return l;
                                    [R, B, W, j].forEach(e => e(i, a)), e.compilerExtensions.forEach(e => e(i, a)), i.__beforeBegin = null, [F, P, z].forEach(e => e(i, a)), i.isCompiled = !0;
                                    let s = null;
                                    return "object" == typeof i.keywords && i.keywords.$pattern && (i.keywords = Object.assign({}, i.keywords), s = i.keywords.$pattern, delete i.keywords.$pattern), s = s || /\w+/, i.keywords && (i.keywords = function e(t, n, r = "keyword") {
                                        let i = Object.create(null);
                                        return "string" == typeof t ? o(r, t.split(" ")) : Array.isArray(t) ? o(r, t) : Object.keys(t).forEach(function(r) {
                                            Object.assign(i, e(t[r], n, r))
                                        }), i;

                                        function o(e, t) {
                                            n && (t = t.map(e => e.toLowerCase())), t.forEach(function(t) {
                                                var n, r, o;
                                                let a = t.split("|");
                                                i[a[0]] = [e, (n = a[0], r = a[1], r ? Number(r) : (o = n, $.includes(o.toLowerCase())) ? 0 : 1)]
                                            })
                                        }
                                    }(i.keywords, e.case_insensitive)), l.keywordPatternRe = t(s, !0), a && (i.begin || (i.begin = /\B|\b/), l.beginRe = t(l.begin), i.end || i.endsWithParent || (i.end = /\B|\b/), i.end && (l.endRe = t(l.end)), l.terminatorEnd = f(l.end) || "", i.endsWithParent && a.terminatorEnd && (l.terminatorEnd += (i.end ? "|" : "") + a.terminatorEnd)), i.illegal && (l.illegalRe = t(i.illegal)), i.contains || (i.contains = []), i.contains = [].concat(...i.contains.map(function(e) {
                                        var t;
                                        return t = "self" === e ? i : e, (t.variants && !t.cachedVariants && (t.cachedVariants = t.variants.map(function(e) {
                                            return o(t, {
                                                variants: null
                                            }, e)
                                        })), t.cachedVariants) ? t.cachedVariants : ! function e(t) {
                                            return !!t && (t.endsWithParent || e(t.starts))
                                        }(t) ? Object.isFrozen(t) ? o(t) : t : o(t, {
                                            starts: t.starts ? o(t.starts) : null
                                        })
                                    })), i.contains.forEach(function(e) {
                                        n(e, l)
                                    }), i.starts && n(i.starts, a), l.matcher = function(e) {
                                        let t = new r;
                                        return e.contains.forEach(e => t.addRule(e.begin, {
                                            rule: e,
                                            type: "begin"
                                        })), e.terminatorEnd && t.addRule(e.terminatorEnd, {
                                            type: "end"
                                        }), e.illegal && t.addRule(e.illegal, {
                                            type: "illegal"
                                        }), t
                                    }(l), l
                                }(e)
                        }(S),
                        C = "",
                        O = l || N,
                        T = {},
                        M = new v.__emitter(v);
                    ! function() {
                        let e = [];
                        for (let t = O; t !== S; t = t.parent) t.scope && e.unshift(t.scope);
                        e.forEach(e => M.openNode(e))
                    }();
                    let I = "",
                        D = 0,
                        L = 0,
                        U = 0,
                        q = !1;
                    try {
                        for (O.matcher.considerAll();;) {
                            U++, q ? q = !1 : O.matcher.considerAll(), O.matcher.lastIndex = L;
                            let K = O.matcher.exec(t);
                            if (!K) break;
                            let V = t.substring(L, K.index),
                                Z = _(V, K);
                            L = K.index + Z
                        }
                        return _(t.substring(L)), M.closeAllNodes(), M.finalize(), C = M.toHTML(), {
                            language: e,
                            value: C,
                            relevance: D,
                            illegal: !1,
                            _emitter: M,
                            _top: O
                        }
                    } catch (G) {
                        if (G.message && G.message.includes("Illegal")) return {
                            language: e,
                            value: i(t),
                            illegal: !0,
                            relevance: 0,
                            _illegalBy: {
                                message: G.message,
                                index: L,
                                context: t.slice(L - 100, L + 100),
                                mode: G.mode,
                                resultSoFar: C
                            },
                            _emitter: M
                        };
                        if (s) return {
                            language: e,
                            value: i(t),
                            illegal: !1,
                            relevance: 0,
                            errorRaised: G,
                            _emitter: M,
                            _top: O
                        };
                        throw G
                    }
                }

                function E(e, t) {
                    t = t || v.languages || Object.keys(n);
                    let r = function(e) {
                            let t = {
                                value: i(e),
                                illegal: !1,
                                relevance: 0,
                                _top: u,
                                _emitter: new v.__emitter(v)
                            };
                            return t._emitter.addText(e), t
                        }(e),
                        o = t.filter(A).filter(M).map(t => w(t, e, !1));
                    o.unshift(r);
                    let a = o.sort((e, t) => {
                            if (e.relevance !== t.relevance) return t.relevance - e.relevance;
                            if (e.language && t.language) {
                                if (A(e.language).supersetOf === t.language) return 1;
                                if (A(t.language).supersetOf === e.language) return -1
                            }
                            return 0
                        }),
                        [l, s] = a,
                        c = l;
                    return c.secondBest = s, c
                }

                function S(e) {
                    let t = null,
                        n = function(e) {
                            let t = e.className + " ";
                            t += e.parentNode ? e.parentNode.className : "";
                            let n = v.languageDetectRe.exec(t);
                            if (n) {
                                let r = A(n[1]);
                                return r || (q(c.replace("{}", n[1])), q("Falling back to no-highlight mode for this block.", e)), r ? n[1] : "no-highlight"
                            }
                            return t.split(/\s+/).find(e => x(e) || A(e))
                        }(e);
                    if (x(n)) return;
                    if (I("before:highlightElement", {
                            el: e,
                            language: n
                        }), e.children.length > 0 && (v.ignoreUnescapedHTML || (console.warn("One of your code blocks includes unescaped HTML. This is a potentially serious security risk."), console.warn("https://github.com/highlightjs/highlight.js/wiki/security"), console.warn("The element with unescaped HTML:"), console.warn(e)), v.throwUnescapedHTML)) {
                        let r = new G("One of your code blocks includes unescaped HTML.", e.innerHTML);
                        throw r
                    }
                    t = e;
                    let i = t.textContent,
                        o = n ? _(i, {
                            language: n,
                            ignoreIllegals: !0
                        }) : E(i);
                    e.innerHTML = o.value,
                        function(e, t, n) {
                            let r = t && a[t] || n;
                            e.classList.add("hljs"), e.classList.add(`language-${r}`)
                        }(e, n, o.language), e.result = {
                            language: o.language,
                            re: o.relevance,
                            relevance: o.relevance
                        }, o.secondBest && (e.secondBest = {
                            language: o.secondBest.language,
                            relevance: o.secondBest.relevance
                        }), I("after:highlightElement", {
                            el: e,
                            result: o,
                            text: i
                        })
                }
                let N = () => {
                        O(), K("10.6.0", "initHighlighting() deprecated.  Use highlightAll() now.")
                    },
                    C = !1;

                function O() {
                    if ("loading" === document.readyState) {
                        C = !0;
                        return
                    }
                    let e = document.querySelectorAll(v.cssSelector);
                    e.forEach(S)
                }

                function A(e) {
                    return n[e = (e || "").toLowerCase()] || n[a[e]]
                }

                function T(e, {
                    languageName: t
                }) {
                    "string" == typeof e && (e = [e]), e.forEach(e => {
                        a[e.toLowerCase()] = t
                    })
                }

                function M(e) {
                    let t = A(e);
                    return t && !t.disableAutodetect
                }

                function I(e, t) {
                    l.forEach(function(n) {
                        n[e] && n[e](t)
                    })
                }
                for (let L in "undefined" != typeof window && window.addEventListener && window.addEventListener("DOMContentLoaded", function() {
                        C && O()
                    }, !1), Object.assign(e, {
                        highlight: _,
                        highlightAuto: E,
                        highlightAll: O,
                        highlightElement: S,
                        highlightBlock: function(e) {
                            return K("10.7.0", "highlightBlock will be removed entirely in v12.0"), K("10.7.0", "Please use highlightElement now."), S(e)
                        },
                        configure: function(e) {
                            v = o(v, e)
                        },
                        initHighlighting: N,
                        initHighlightingOnLoad: function() {
                            O(), K("10.6.0", "initHighlightingOnLoad() deprecated.  Use highlightAll() now.")
                        },
                        registerLanguage: function(t, r) {
                            let i = null;
                            try {
                                i = r(e)
                            } catch (o) {
                                if (H("Language definition for '{}' could not be registered.".replace("{}", t)), s) H(o);
                                else throw o;
                                i = u
                            }
                            i.name || (i.name = t), n[t] = i, i.rawDefinition = r.bind(null, e), i.aliases && T(i.aliases, {
                                languageName: t
                            })
                        },
                        unregisterLanguage: function(e) {
                            for (let t of (delete n[e], Object.keys(a))) a[t] === e && delete a[t]
                        },
                        listLanguages: function() {
                            return Object.keys(n)
                        },
                        getLanguage: A,
                        registerAliases: T,
                        autoDetection: M,
                        inherit: o,
                        addPlugin: function(e) {
                            var t;
                            (t = e)["before:highlightBlock"] && !t["before:highlightElement"] && (t["before:highlightElement"] = e => {
                                t["before:highlightBlock"](Object.assign({
                                    block: e.el
                                }, e))
                            }), t["after:highlightBlock"] && !t["after:highlightElement"] && (t["after:highlightElement"] = e => {
                                t["after:highlightBlock"](Object.assign({
                                    block: e.el
                                }, e))
                            }), l.push(e)
                        }
                    }), e.debugMode = function() {
                        s = !1
                    }, e.safeMode = function() {
                        s = !0
                    }, e.versionString = "11.7.0", e.regex = {
                        concat: h,
                        lookahead: p,
                        either: b,
                        optional: m,
                        anyNumberOfTimes: g
                    }, D) "object" == typeof D[L] && t.exports(D[L]);
                return Object.assign(e, D), e
            }({});
            e.exports = Q, Q.HighlightJS = Q, Q.default = Q
        },
        57976: function(e, t, n) {
            "use strict";
            n.d(t, {
                J: function() {
                    return j
                }
            });
            var r = n(70079),
                i = n(71690),
                o = n(34741),
                a = n(84325),
                l = n(19430),
                s = n(52076),
                c = n(46428),
                u = n(90723),
                d = n(77095),
                f = n(9335);

            function p(e) {
                var t;
                if (e.type) return e.type;
                let n = null != (t = e.as) ? t : "button";
                if ("string" == typeof n && "button" === n.toLowerCase()) return "button"
            }
            var g, m, h = n(43562),
                b = n(90385),
                y = n(61566),
                v = n(69990),
                k = n(82756),
                x = n(27721),
                _ = n(43412),
                w = ((g = w || {})[g.Open = 0] = "Open", g[g.Closed = 1] = "Closed", g),
                E = ((m = E || {})[m.TogglePopover = 0] = "TogglePopover", m[m.ClosePopover = 1] = "ClosePopover", m[m.SetButton = 2] = "SetButton", m[m.SetButtonId = 3] = "SetButtonId", m[m.SetPanel = 4] = "SetPanel", m[m.SetPanelId = 5] = "SetPanelId", m);
            let S = {
                    0: e => ({ ...e,
                        popoverState: (0, i.E)(e.popoverState, {
                            0: 1,
                            1: 0
                        })
                    }),
                    1: e => 1 === e.popoverState ? e : { ...e,
                        popoverState: 1
                    },
                    2: (e, t) => e.button === t.button ? e : { ...e,
                        button: t.button
                    },
                    3: (e, t) => e.buttonId === t.buttonId ? e : { ...e,
                        buttonId: t.buttonId
                    },
                    4: (e, t) => e.panel === t.panel ? e : { ...e,
                        panel: t.panel
                    },
                    5: (e, t) => e.panelId === t.panelId ? e : { ...e,
                        panelId: t.panelId
                    }
                },
                N = (0, r.createContext)(null);

            function C(e) {
                let t = (0, r.useContext)(N);
                if (null === t) {
                    let n = Error(`<${e} /> is missing a parent <Popover /> component.`);
                    throw Error.captureStackTrace && Error.captureStackTrace(n, C), n
                }
                return t
            }
            N.displayName = "PopoverContext";
            let O = (0, r.createContext)(null);

            function A(e) {
                let t = (0, r.useContext)(O);
                if (null === t) {
                    let n = Error(`<${e} /> is missing a parent <Popover /> component.`);
                    throw Error.captureStackTrace && Error.captureStackTrace(n, A), n
                }
                return t
            }
            O.displayName = "PopoverAPIContext";
            let T = (0, r.createContext)(null);

            function M() {
                return (0, r.useContext)(T)
            }
            T.displayName = "PopoverGroupContext";
            let I = (0, r.createContext)(null);

            function D(e, t) {
                return (0, i.E)(t.type, S, e, t)
            }
            I.displayName = "PopoverPanelContext";
            let L = (0, o.yV)(function(e, t) {
                    var n;
                    let s = `headlessui-popover-button-${(0,l.M)()}`,
                        c = `headlessui-popover-panel-${(0,l.M)()}`,
                        f = (0, r.useRef)(null),
                        p = (0, a.T)(t, (0, a.h)(e => {
                            f.current = e
                        })),
                        g = (0, r.useReducer)(D, {
                            popoverState: 1,
                            button: null,
                            buttonId: s,
                            panel: null,
                            panelId: c,
                            beforePanelSentinel: (0, r.createRef)(),
                            afterPanelSentinel: (0, r.createRef)()
                        }),
                        [{
                            popoverState: m,
                            button: b,
                            panel: k,
                            beforePanelSentinel: _,
                            afterPanelSentinel: w
                        }, E] = g,
                        S = (0, y.i)(null != (n = f.current) ? n : b);
                    (0, r.useEffect)(() => E({
                        type: 3,
                        buttonId: s
                    }), [s, E]), (0, r.useEffect)(() => E({
                        type: 5,
                        panelId: c
                    }), [c, E]);
                    let C = (0, r.useMemo)(() => {
                            if (!b || !k) return !1;
                            for (let e of document.querySelectorAll("body > *"))
                                if (Number(null == e ? void 0 : e.contains(b)) ^ Number(null == e ? void 0 : e.contains(k))) return !0;
                            return !1
                        }, [b, k]),
                        A = (0, r.useMemo)(() => ({
                            buttonId: s,
                            panelId: c,
                            close: () => E({
                                type: 1
                            })
                        }), [s, c, E]),
                        T = M(),
                        I = null == T ? void 0 : T.registerPopover,
                        L = (0, x.z)(() => {
                            var e;
                            return null != (e = null == T ? void 0 : T.isFocusWithinPopoverGroup()) ? e : (null == S ? void 0 : S.activeElement) && ((null == b ? void 0 : b.contains(S.activeElement)) || (null == k ? void 0 : k.contains(S.activeElement)))
                        });
                    (0, r.useEffect)(() => null == I ? void 0 : I(A), [I, A]), (0, v.O)(null == S ? void 0 : S.defaultView, "focus", e => {
                        var t, n, r, i;
                        0 === m && (L() || !b || !k || null != (n = null == (t = _.current) ? void 0 : t.contains) && n.call(t, e.target) || null != (i = null == (r = w.current) ? void 0 : r.contains) && i.call(r, e.target) || E({
                            type: 1
                        }))
                    }, !0), (0, h.O)([b, k], (e, t) => {
                        E({
                            type: 1
                        }), (0, u.sP)(t, u.tJ.Loose) || (e.preventDefault(), null == b || b.focus())
                    }, 0 === m);
                    let R = (0, x.z)(e => {
                            E({
                                type: 1
                            });
                            let t = e ? e instanceof HTMLElement ? e : "current" in e && e.current instanceof HTMLElement ? e.current : b : b;
                            null == t || t.focus()
                        }),
                        F = (0, r.useMemo)(() => ({
                            close: R,
                            isPortalled: C
                        }), [R, C]),
                        P = (0, r.useMemo)(() => ({
                            open: 0 === m,
                            close: R
                        }), [m, R]);
                    return r.createElement(N.Provider, {
                        value: g
                    }, r.createElement(O.Provider, {
                        value: F
                    }, r.createElement(d.up, {
                        value: (0, i.E)(m, {
                            0: d.ZM.Open,
                            1: d.ZM.Closed
                        })
                    }, (0, o.sY)({
                        ourProps: {
                            ref: p
                        },
                        theirProps: e,
                        slot: P,
                        defaultTag: "div",
                        name: "Popover"
                    }))))
                }),
                R = (0, o.yV)(function(e, t) {
                    let [n, d] = C("Popover.Button"), {
                        isPortalled: g
                    } = A("Popover.Button"), m = (0, r.useRef)(null), h = `headlessui-focus-sentinel-${(0,l.M)()}`, b = M(), v = null == b ? void 0 : b.closeOthers, w = (0, r.useContext)(I), E = null !== w && w === n.panelId, S = (0, a.T)(m, t, E ? null : e => d({
                        type: 2,
                        button: e
                    })), N = (0, a.T)(m, t), O = (0, y.i)(m), T = (0, x.z)(e => {
                        var t, r, i;
                        if (E) {
                            if (1 === n.popoverState) return;
                            switch (e.key) {
                                case s.R.Space:
                                case s.R.Enter:
                                    e.preventDefault(), null == (r = (t = e.target).click) || r.call(t), d({
                                        type: 1
                                    }), null == (i = n.button) || i.focus()
                            }
                        } else switch (e.key) {
                            case s.R.Space:
                            case s.R.Enter:
                                e.preventDefault(), e.stopPropagation(), 1 === n.popoverState && (null == v || v(n.buttonId)), d({
                                    type: 0
                                });
                                break;
                            case s.R.Escape:
                                if (0 !== n.popoverState) return null == v ? void 0 : v(n.buttonId);
                                if (!m.current || (null == O ? void 0 : O.activeElement) && !m.current.contains(O.activeElement)) return;
                                e.preventDefault(), e.stopPropagation(), d({
                                    type: 1
                                })
                        }
                    }), D = (0, x.z)(e => {
                        E || e.key === s.R.Space && e.preventDefault()
                    }), L = (0, x.z)(t => {
                        var r, i;
                        (0, c.P)(t.currentTarget) || e.disabled || (E ? (d({
                            type: 1
                        }), null == (r = n.button) || r.focus()) : (t.preventDefault(), t.stopPropagation(), 1 === n.popoverState && (null == v || v(n.buttonId)), d({
                            type: 0
                        }), null == (i = n.button) || i.focus()))
                    }), R = (0, x.z)(e => {
                        e.preventDefault(), e.stopPropagation()
                    }), F = 0 === n.popoverState, P = (0, r.useMemo)(() => ({
                        open: F
                    }), [F]), B = function(e, t) {
                        let [n, i] = (0, r.useState)(() => p(e));
                        return (0, f.e)(() => {
                            i(p(e))
                        }, [e.type, e.as]), (0, f.e)(() => {
                            n || !t.current || t.current instanceof HTMLButtonElement && !t.current.hasAttribute("type") && i("button")
                        }, [n, t]), n
                    }(e, m), z = E ? {
                        ref: N,
                        type: B,
                        onKeyDown: T,
                        onClick: L
                    } : {
                        ref: S,
                        id: n.buttonId,
                        type: B,
                        "aria-expanded": e.disabled ? void 0 : 0 === n.popoverState,
                        "aria-controls": n.panel ? n.panelId : void 0,
                        onKeyDown: T,
                        onKeyUp: D,
                        onClick: L,
                        onMouseDown: R
                    }, j = (0, _.l)(), $ = (0, x.z)(() => {
                        let e = n.panel;
                        e && (0, i.E)(j.current, {
                            [_.N.Forwards]: () => (0, u.jA)(e, u.TO.First),
                            [_.N.Backwards]: () => (0, u.jA)(e, u.TO.Last)
                        })
                    });
                    return r.createElement(r.Fragment, null, (0, o.sY)({
                        ourProps: z,
                        theirProps: e,
                        slot: P,
                        defaultTag: "button",
                        name: "Popover.Button"
                    }), F && !E && g && r.createElement(k._, {
                        id: h,
                        features: k.A.Focusable,
                        as: "button",
                        type: "button",
                        onFocus: $
                    }))
                }),
                F = o.AN.RenderStrategy | o.AN.Static,
                P = (0, o.yV)(function(e, t) {
                    let [{
                        popoverState: n
                    }, i] = C("Popover.Overlay"), s = (0, a.T)(t), u = `headlessui-popover-overlay-${(0,l.M)()}`, f = (0, d.oJ)(), p = null !== f ? f === d.ZM.Open : 0 === n, g = (0, x.z)(e => {
                        if ((0, c.P)(e.currentTarget)) return e.preventDefault();
                        i({
                            type: 1
                        })
                    }), m = (0, r.useMemo)(() => ({
                        open: 0 === n
                    }), [n]);
                    return (0, o.sY)({
                        ourProps: {
                            ref: s,
                            id: u,
                            "aria-hidden": !0,
                            onClick: g
                        },
                        theirProps: e,
                        slot: m,
                        defaultTag: "div",
                        features: F,
                        visible: p,
                        name: "Popover.Overlay"
                    })
                }),
                B = o.AN.RenderStrategy | o.AN.Static,
                z = (0, o.yV)(function(e, t) {
                    let {
                        focus: n = !1,
                        ...c
                    } = e, [f, p] = C("Popover.Panel"), {
                        close: g,
                        isPortalled: m
                    } = A("Popover.Panel"), h = `headlessui-focus-sentinel-before-${(0,l.M)()}`, b = `headlessui-focus-sentinel-after-${(0,l.M)()}`, v = (0, r.useRef)(null), w = (0, a.T)(v, t, e => {
                        p({
                            type: 4,
                            panel: e
                        })
                    }), E = (0, y.i)(v), S = (0, d.oJ)(), N = null !== S ? S === d.ZM.Open : 0 === f.popoverState, O = (0, x.z)(e => {
                        var t;
                        if (e.key === s.R.Escape) {
                            if (0 !== f.popoverState || !v.current || (null == E ? void 0 : E.activeElement) && !v.current.contains(E.activeElement)) return;
                            e.preventDefault(), e.stopPropagation(), p({
                                type: 1
                            }), null == (t = f.button) || t.focus()
                        }
                    });
                    (0, r.useEffect)(() => {
                        var t;
                        e.static || 1 === f.popoverState && (null == (t = e.unmount) || t) && p({
                            type: 4,
                            panel: null
                        })
                    }, [f.popoverState, e.unmount, e.static, p]), (0, r.useEffect)(() => {
                        if (!n || 0 !== f.popoverState || !v.current) return;
                        let e = null == E ? void 0 : E.activeElement;
                        v.current.contains(e) || (0, u.jA)(v.current, u.TO.First)
                    }, [n, v, f.popoverState]);
                    let T = (0, r.useMemo)(() => ({
                            open: 0 === f.popoverState,
                            close: g
                        }), [f, g]),
                        M = {
                            ref: w,
                            id: f.panelId,
                            onKeyDown: O,
                            onBlur: n && 0 === f.popoverState ? e => {
                                var t, n, r, i, o;
                                let a = e.relatedTarget;
                                !a || !v.current || null != (t = v.current) && t.contains(a) || (p({
                                    type: 1
                                }), ((null == (r = null == (n = f.beforePanelSentinel.current) ? void 0 : n.contains) ? void 0 : r.call(n, a)) || (null == (o = null == (i = f.afterPanelSentinel.current) ? void 0 : i.contains) ? void 0 : o.call(i, a))) && a.focus({
                                    preventScroll: !0
                                }))
                            } : void 0,
                            tabIndex: -1
                        },
                        D = (0, _.l)(),
                        L = (0, x.z)(() => {
                            let e = v.current;
                            e && (0, i.E)(D.current, {
                                [_.N.Forwards]() {
                                    (0, u.jA)(e, u.TO.First)
                                },
                                [_.N.Backwards]() {
                                    var e;
                                    null == (e = f.button) || e.focus({
                                        preventScroll: !0
                                    })
                                }
                            })
                        }),
                        R = (0, x.z)(() => {
                            let e = v.current;
                            e && (0, i.E)(D.current, {
                                [_.N.Forwards]() {
                                    var e, t, n;
                                    if (!f.button) return;
                                    let r = (0, u.GO)(),
                                        i = r.indexOf(f.button),
                                        o = r.slice(0, i + 1),
                                        a = [...r.slice(i + 1), ...o];
                                    for (let l of a.slice())
                                        if ((null == (t = null == (e = null == l ? void 0 : l.id) ? void 0 : e.startsWith) ? void 0 : t.call(e, "headlessui-focus-sentinel-")) || (null == (n = f.panel) ? void 0 : n.contains(l))) {
                                            let s = a.indexOf(l); - 1 !== s && a.splice(s, 1)
                                        }(0, u.jA)(a, u.TO.First, !1)
                                },
                                [_.N.Backwards]: () => (0, u.jA)(e, u.TO.Last)
                            })
                        });
                    return r.createElement(I.Provider, {
                        value: f.panelId
                    }, N && m && r.createElement(k._, {
                        id: h,
                        ref: f.beforePanelSentinel,
                        features: k.A.Focusable,
                        as: "button",
                        type: "button",
                        onFocus: L
                    }), (0, o.sY)({
                        ourProps: M,
                        theirProps: c,
                        slot: T,
                        defaultTag: "div",
                        features: B,
                        visible: N,
                        name: "Popover.Panel"
                    }), N && m && r.createElement(k._, {
                        id: b,
                        ref: f.afterPanelSentinel,
                        features: k.A.Focusable,
                        as: "button",
                        type: "button",
                        onFocus: R
                    }))
                }),
                j = Object.assign(L, {
                    Button: R,
                    Overlay: P,
                    Panel: z,
                    Group: (0, o.yV)(function(e, t) {
                        let n = (0, r.useRef)(null),
                            i = (0, a.T)(n, t),
                            [l, s] = (0, r.useState)([]),
                            c = (0, x.z)(e => {
                                s(t => {
                                    let n = t.indexOf(e);
                                    if (-1 !== n) {
                                        let r = t.slice();
                                        return r.splice(n, 1), r
                                    }
                                    return t
                                })
                            }),
                            u = (0, x.z)(e => (s(t => [...t, e]), () => c(e))),
                            d = (0, x.z)(() => {
                                var e;
                                let t = (0, b.r)(n);
                                if (!t) return !1;
                                let r = t.activeElement;
                                return !!(null != (e = n.current) && e.contains(r)) || l.some(e => {
                                    var n, i;
                                    return (null == (n = t.getElementById(e.buttonId)) ? void 0 : n.contains(r)) || (null == (i = t.getElementById(e.panelId)) ? void 0 : i.contains(r))
                                })
                            }),
                            f = (0, x.z)(e => {
                                for (let t of l) t.buttonId !== e && t.close()
                            }),
                            p = (0, r.useMemo)(() => ({
                                registerPopover: u,
                                unregisterPopover: c,
                                isFocusWithinPopoverGroup: d,
                                closeOthers: f
                            }), [u, c, d, f]),
                            g = (0, r.useMemo)(() => ({}), []);
                        return r.createElement(T.Provider, {
                            value: p
                        }, (0, o.sY)({
                            ourProps: {
                                ref: i
                            },
                            theirProps: e,
                            slot: g,
                            defaultTag: "div",
                            name: "Popover.Group"
                        }))
                    })
                })
        },
        35025: function(e, t, n) {
            "use strict";

            function r(e, t) {
                if (!(e instanceof t)) throw TypeError("Cannot call a class as a function")
            }
            n.d(t, {
                Z: function() {
                    return r
                }
            })
        },
        19818: function(e, t, n) {
            "use strict";
            n.d(t, {
                Z: function() {
                    return o
                }
            });
            var r = n(26308),
                i = n(99502);

            function o(e) {
                var t = function() {
                    if ("undefined" == typeof Reflect || !Reflect.construct || Reflect.construct.sham) return !1;
                    if ("function" == typeof Proxy) return !0;
                    try {
                        return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {})), !0
                    } catch (e) {
                        return !1
                    }
                }();
                return function() {
                    var n, o, a, l = (0, r.Z)(e);
                    if (t) {
                        var s = (0, r.Z)(this).constructor;
                        a = Reflect.construct(l, arguments, s)
                    } else a = l.apply(this, arguments);
                    return (o = a) && ("object" === (0, i.Z)(o) || "function" == typeof o) ? o : function(e) {
                        if (void 0 === e) throw ReferenceError("this hasn't been initialised - super() hasn't been called");
                        return e
                    }(this)
                }
            }
        },
        26308: function(e, t, n) {
            "use strict";

            function r(e) {
                return (r = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                })(e)
            }

            function i(e) {
                return r(e)
            }
            n.d(t, {
                Z: function() {
                    return i
                }
            })
        },
        22832: function(e, t, n) {
            "use strict";
            n.d(t, {
                Z: function() {
                    return i
                }
            });
            var r = n(11256);

            function i(e, t) {
                if ("function" != typeof t && null !== t) throw TypeError("Super expression must either be null or a function");
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        writable: !0,
                        configurable: !0
                    }
                }), t && (0, r.Z)(e, t)
            }
        },
        9135: function(e, t, n) {
            "use strict";

            function r(e, t) {
                return null != t && "undefined" != typeof Symbol && t[Symbol.hasInstance] ? !!t[Symbol.hasInstance](e) : e instanceof t
            }
            n.d(t, {
                Z: function() {
                    return r
                }
            })
        },
        11256: function(e, t, n) {
            "use strict";

            function r(e, t) {
                return (r = Object.setPrototypeOf || function(e, t) {
                    return e.__proto__ = t, e
                })(e, t)
            }

            function i(e, t) {
                return r(e, t)
            }
            n.d(t, {
                Z: function() {
                    return i
                }
            })
        },
        99502: function(e, t, n) {
            "use strict";

            function r(e) {
                return e && e.constructor === Symbol ? "symbol" : typeof e
            }
            n.d(t, {
                Z: function() {
                    return r
                }
            })
        },
        25829: function(e, t, n) {
            "use strict";
            n.d(t, {
                Z: function() {
                    return l
                }
            });
            var r = n(11256);

            function i(e, t, n) {
                return (i = ! function() {
                    if ("undefined" == typeof Reflect || !Reflect.construct || Reflect.construct.sham) return !1;
                    if ("function" == typeof Proxy) return !0;
                    try {
                        return Date.prototype.toString.call(Reflect.construct(Date, [], function() {})), !0
                    } catch (e) {
                        return !1
                    }
                }() ? function(e, t, n) {
                    var i = [null];
                    i.push.apply(i, t);
                    var o = new(Function.bind.apply(e, i));
                    return n && (0, r.Z)(o, n.prototype), o
                } : Reflect.construct).apply(null, arguments)
            }
            var o = n(26308);

            function a(e) {
                var t = "function" == typeof Map ? new Map : void 0;
                return (a = function(e) {
                    var n;
                    if (null === e || -1 === Function.toString.call(e).indexOf("[native code]")) return e;
                    if ("function" != typeof e) throw TypeError("Super expression must either be null or a function");
                    if (void 0 !== t) {
                        if (t.has(e)) return t.get(e);
                        t.set(e, a)
                    }

                    function a() {
                        return function(e, t, n) {
                            return i.apply(null, arguments)
                        }(e, arguments, (0, o.Z)(this).constructor)
                    }
                    return a.prototype = Object.create(e.prototype, {
                        constructor: {
                            value: a,
                            enumerable: !1,
                            writable: !0,
                            configurable: !0
                        }
                    }), (0, r.Z)(a, e)
                })(e)
            }

            function l(e) {
                return a(e)
            }
        },
        36365: function(e, t, n) {
            "use strict";
            n.d(t, {
                T: function() {
                    return i
                }
            });
            let r = document.createElement("i");

            function i(e) {
                let t = "&" + e + ";";
                r.innerHTML = t;
                let n = r.textContent;
                return (59 !== n.charCodeAt(n.length - 1) || "semi" === e) && n !== t && n
            }
        },
        1849: function(e, t, n) {
            "use strict";
            n.d(t, {
                Y: function() {
                    return i
                },
                k: function() {
                    return r
                }
            });
            let r = function(e, t, n, r, o) {
                    let a = i(t);
                    if (null != n && ("number" != typeof n || n < 0 || n === Number.POSITIVE_INFINITY)) throw Error("Expected positive finite index for child node");
                    if (null != r && (!r.type || !r.children)) throw Error("Expected parent node");
                    if (!e || !e.type || "string" != typeof e.type) return !1;
                    if (null == r != (null == n)) throw Error("Expected both parent and index");
                    return a.call(o, e, n, r)
                },
                i = function(e) {
                    if (null == e) return a;
                    if ("string" == typeof e) {
                        var t;
                        return t = e,
                            function(e) {
                                return a(e) && e.tagName === t
                            }
                    }
                    if ("object" == typeof e) return function(e) {
                        let t = [],
                            n = -1;
                        for (; ++n < e.length;) t[n] = i(e[n]);
                        return o(function(...e) {
                            let n = -1;
                            for (; ++n < t.length;)
                                if (t[n].call(this, ...e)) return !0;
                            return !1
                        })
                    }(e);
                    if ("function" == typeof e) return o(e);
                    throw Error("Expected function, string, or array as test")
                };

            function o(e) {
                return function(t, ...n) {
                    return a(t) && Boolean(e.call(this, t, ...n))
                }
            }

            function a(e) {
                return Boolean(e && "object" == typeof e && "element" === e.type && "string" == typeof e.tagName)
            }
        },
        88366: function(e, t, n) {
            "use strict";

            function r(e) {
                return "children" in e ? o(e) : "value" in e ? e.value : ""
            }

            function i(e) {
                return "text" === e.type ? e.value : "children" in e ? o(e) : ""
            }

            function o(e) {
                let t = -1,
                    n = [];
                for (; ++t < e.children.length;) n[t] = i(e.children[t]);
                return n.join("")
            }
            n.d(t, {
                B: function() {
                    return r
                }
            })
        },
        48733: function(e, t, n) {
            "use strict";

            function r(e) {
                var t = e && "object" == typeof e && "text" === e.type ? e.value || "" : e;
                return "string" == typeof t && "" === t.replace(/[ \t\n\f\r]/g, "")
            }
            n.d(t, {
                Q: function() {
                    return r
                }
            })
        },
        58775: function(e, t, n) {
            "use strict";
            n.d(t, {
                w: function() {
                    return o
                }
            });
            var r = n(46050),
                i = n(29874);
            let o = {
                tokenize: function(e, t, n) {
                    return (0, r.f)(e, function(e) {
                        return null === e || (0, i.Ch)(e) ? t(e) : n(e)
                    }, "linePrefix")
                },
                partial: !0
            }
        },
        46050: function(e, t, n) {
            "use strict";
            n.d(t, {
                f: function() {
                    return i
                }
            });
            var r = n(29874);

            function i(e, t, n, i) {
                let o = i ? i - 1 : Number.POSITIVE_INFINITY,
                    a = 0;
                return function(i) {
                    return (0, r.xz)(i) ? (e.enter(n), function i(l) {
                        return (0, r.xz)(l) && a++ < o ? (e.consume(l), i) : (e.exit(n), t(l))
                    }(i)) : t(i)
                }
            }
        },
        29874: function(e, t, n) {
            "use strict";
            n.d(t, {
                jv: function() {
                    return r
                },
                H$: function() {
                    return a
                },
                n9: function() {
                    return s
                },
                Av: function() {
                    return c
                },
                pY: function() {
                    return i
                },
                AF: function() {
                    return o
                },
                sR: function() {
                    return l
                },
                Ch: function() {
                    return d
                },
                z3: function() {
                    return u
                },
                xz: function() {
                    return f
                },
                Xh: function() {
                    return g
                },
                B8: function() {
                    return p
                }
            });
            let r = m(/[A-Za-z]/),
                i = m(/\d/),
                o = m(/[\dA-Fa-f]/),
                a = m(/[\dA-Za-z]/),
                l = m(/[!-/:-@[-`{-~]/),
                s = m(/[#-'*+\--9=?A-Z^-~]/);

            function c(e) {
                return null !== e && (e < 32 || 127 === e)
            }

            function u(e) {
                return null !== e && (e < 0 || 32 === e)
            }

            function d(e) {
                return null !== e && e < -2
            }

            function f(e) {
                return -2 === e || -1 === e || 32 === e
            }
            let p = m(/\s/),
                g = m(/[!-/:-@[-`{-~\u00A1\u00A7\u00AB\u00B6\u00B7\u00BB\u00BF\u037E\u0387\u055A-\u055F\u0589\u058A\u05BE\u05C0\u05C3\u05C6\u05F3\u05F4\u0609\u060A\u060C\u060D\u061B\u061E\u061F\u066A-\u066D\u06D4\u0700-\u070D\u07F7-\u07F9\u0830-\u083E\u085E\u0964\u0965\u0970\u09FD\u0A76\u0AF0\u0C77\u0C84\u0DF4\u0E4F\u0E5A\u0E5B\u0F04-\u0F12\u0F14\u0F3A-\u0F3D\u0F85\u0FD0-\u0FD4\u0FD9\u0FDA\u104A-\u104F\u10FB\u1360-\u1368\u1400\u166E\u169B\u169C\u16EB-\u16ED\u1735\u1736\u17D4-\u17D6\u17D8-\u17DA\u1800-\u180A\u1944\u1945\u1A1E\u1A1F\u1AA0-\u1AA6\u1AA8-\u1AAD\u1B5A-\u1B60\u1BFC-\u1BFF\u1C3B-\u1C3F\u1C7E\u1C7F\u1CC0-\u1CC7\u1CD3\u2010-\u2027\u2030-\u2043\u2045-\u2051\u2053-\u205E\u207D\u207E\u208D\u208E\u2308-\u230B\u2329\u232A\u2768-\u2775\u27C5\u27C6\u27E6-\u27EF\u2983-\u2998\u29D8-\u29DB\u29FC\u29FD\u2CF9-\u2CFC\u2CFE\u2CFF\u2D70\u2E00-\u2E2E\u2E30-\u2E4F\u2E52\u3001-\u3003\u3008-\u3011\u3014-\u301F\u3030\u303D\u30A0\u30FB\uA4FE\uA4FF\uA60D-\uA60F\uA673\uA67E\uA6F2-\uA6F7\uA874-\uA877\uA8CE\uA8CF\uA8F8-\uA8FA\uA8FC\uA92E\uA92F\uA95F\uA9C1-\uA9CD\uA9DE\uA9DF\uAA5C-\uAA5F\uAADE\uAADF\uAAF0\uAAF1\uABEB\uFD3E\uFD3F\uFE10-\uFE19\uFE30-\uFE52\uFE54-\uFE61\uFE63\uFE68\uFE6A\uFE6B\uFF01-\uFF03\uFF05-\uFF0A\uFF0C-\uFF0F\uFF1A\uFF1B\uFF1F\uFF20\uFF3B-\uFF3D\uFF3F\uFF5B\uFF5D\uFF5F-\uFF65]/);

            function m(e) {
                return function(t) {
                    return null !== t && e.test(String.fromCharCode(t))
                }
            }
        },
        11707: function(e, t, n) {
            "use strict";

            function r(e, t, n, r) {
                let i = e.length,
                    o = 0,
                    a;
                if (t = t < 0 ? -t > i ? 0 : i + t : t > i ? i : t, n = n > 0 ? n : 0, r.length < 1e4)(a = Array.from(r)).unshift(t, n), [].splice.apply(e, a);
                else
                    for (n && [].splice.apply(e, [t, n]); o < r.length;)(a = r.slice(o, o + 1e4)).unshift(t, 0), [].splice.apply(e, a), o += 1e4, t += 1e4
            }

            function i(e, t) {
                return e.length > 0 ? (r(e, e.length, 0, t), e) : t
            }
            n.d(t, {
                V: function() {
                    return i
                },
                d: function() {
                    return r
                }
            })
        },
        85618: function(e, t, n) {
            "use strict";
            n.d(t, {
                r: function() {
                    return i
                }
            });
            var r = n(29874);

            function i(e) {
                return null === e || (0, r.z3)(e) || (0, r.B8)(e) ? 1 : (0, r.Xh)(e) ? 2 : void 0
            }
        },
        89063: function(e, t, n) {
            "use strict";
            n.d(t, {
                W: function() {
                    return o
                }
            });
            var r = n(11707);
            let i = {}.hasOwnProperty;

            function o(e) {
                let t = {},
                    n = -1;
                for (; ++n < e.length;) a(t, e[n]);
                return t
            }

            function a(e, t) {
                let n;
                for (n in t) {
                    let r = i.call(e, n) ? e[n] : void 0,
                        o = r || (e[n] = {}),
                        a = t[n],
                        s;
                    for (s in a) {
                        i.call(o, s) || (o[s] = []);
                        let c = a[s];
                        l(o[s], Array.isArray(c) ? c : c ? [c] : [])
                    }
                }
            }

            function l(e, t) {
                let n = -1,
                    i = [];
                for (; ++n < t.length;)("after" === t[n].add ? e : i).push(t[n]);
                (0, r.d)(e, 0, 0, i)
            }
        },
        92791: function(e, t, n) {
            "use strict";

            function r(e, t) {
                let n = Number.parseInt(e, t);
                return n < 9 || 11 === n || n > 13 && n < 32 || n > 126 && n < 160 || n > 55295 && n < 57344 || n > 64975 && n < 65008 || (65535 & n) == 65535 || (65535 & n) == 65534 || n > 1114111 ? "�" : String.fromCharCode(n)
            }
            n.d(t, {
                o: function() {
                    return r
                }
            })
        },
        12006: function(e, t, n) {
            "use strict";
            n.d(t, {
                v: function() {
                    return a
                }
            });
            var r = n(36365),
                i = n(92791);
            let o = /\\([!-/:-@[-`{-~])|&(#(?:\d{1,7}|x[\da-f]{1,6})|[\da-z]{1,31});/gi;

            function a(e) {
                return e.replace(o, l)
            }

            function l(e, t, n) {
                if (t) return t;
                let o = n.charCodeAt(0);
                if (35 === o) {
                    let a = n.charCodeAt(1),
                        l = 120 === a || 88 === a;
                    return (0, i.o)(n.slice(l ? 2 : 1), l ? 16 : 10)
                }
                return (0, r.T)(n) || e
            }
        },
        37618: function(e, t, n) {
            "use strict";

            function r(e) {
                return e.replace(/[\t\n\r ]+/g, " ").replace(/^ | $/g, "").toLowerCase().toUpperCase()
            }
            n.d(t, {
                d: function() {
                    return r
                }
            })
        },
        79142: function(e, t, n) {
            "use strict";

            function r(e, t, n) {
                let r = [],
                    i = -1;
                for (; ++i < e.length;) {
                    let o = e[i].resolveAll;
                    o && !r.includes(o) && (t = o(t, n), r.push(o))
                }
                return t
            }
            n.d(t, {
                C: function() {
                    return r
                }
            })
        },
        66280: function(e, t, n) {
            "use strict";
            n.d(t, {
                D: function() {
                    return t3
                }
            });
            var r = {};
            n.r(r), n.d(r, {
                attentionMarkers: function() {
                    return ez
                },
                contentInitial: function() {
                    return eD
                },
                disable: function() {
                    return ej
                },
                document: function() {
                    return eI
                },
                flow: function() {
                    return eR
                },
                flowInitial: function() {
                    return eL
                },
                insideSpan: function() {
                    return eB
                },
                string: function() {
                    return eF
                },
                text: function() {
                    return eP
                }
            });
            var i = {};
            n.r(i), n.d(i, {
                boolean: function() {
                    return tg
                },
                booleanish: function() {
                    return tm
                },
                commaOrSpaceSeparated: function() {
                    return tk
                },
                commaSeparated: function() {
                    return tv
                },
                number: function() {
                    return tb
                },
                overloadedBoolean: function() {
                    return th
                },
                spaceSeparated: function() {
                    return ty
                }
            });
            var o = n(70079),
                a = n(38165);

            function l(e) {
                return e && "object" == typeof e ? "position" in e || "type" in e ? c(e.position) : "start" in e || "end" in e ? c(e) : "line" in e || "column" in e ? s(e) : "" : ""
            }

            function s(e) {
                return u(e && e.line) + ":" + u(e && e.column)
            }

            function c(e) {
                return s(e && e.start) + "-" + s(e && e.end)
            }

            function u(e) {
                return e && "number" == typeof e ? e : 1
            }
            class d extends Error {
                constructor(e, t, n) {
                    let r = [null, null],
                        i = {
                            start: {
                                line: null,
                                column: null
                            },
                            end: {
                                line: null,
                                column: null
                            }
                        };
                    if (super(), "string" == typeof t && (n = t, t = void 0), "string" == typeof n) {
                        let o = n.indexOf(":"); - 1 === o ? r[1] = n : (r[0] = n.slice(0, o), r[1] = n.slice(o + 1))
                    }
                    t && ("type" in t || "position" in t ? t.position && (i = t.position) : "start" in t || "end" in t ? i = t : ("line" in t || "column" in t) && (i.start = t)), this.name = l(t) || "1:1", this.message = "object" == typeof e ? e.message : e, this.stack = "object" == typeof e ? e.stack : "", this.reason = this.message, this.fatal, this.line = i.start.line, this.column = i.start.column, this.source = r[0], this.ruleId = r[1], this.position = i, this.actual, this.expected, this.file, this.url, this.note
                }
            }
            d.prototype.file = "", d.prototype.name = "", d.prototype.reason = "", d.prototype.message = "", d.prototype.stack = "", d.prototype.fatal = null, d.prototype.column = null, d.prototype.line = null, d.prototype.source = null, d.prototype.ruleId = null, d.prototype.position = null;
            let f = {
                basename: function(e, t) {
                    if (void 0 !== t && "string" != typeof t) throw TypeError('"ext" argument must be a string');
                    p(e);
                    let n = 0,
                        r = -1,
                        i = e.length,
                        o;
                    if (void 0 === t || 0 === t.length || t.length > e.length) {
                        for (; i--;)
                            if (47 === e.charCodeAt(i)) {
                                if (o) {
                                    n = i + 1;
                                    break
                                }
                            } else r < 0 && (o = !0, r = i + 1);
                        return r < 0 ? "" : e.slice(n, r)
                    }
                    if (t === e) return "";
                    let a = -1,
                        l = t.length - 1;
                    for (; i--;)
                        if (47 === e.charCodeAt(i)) {
                            if (o) {
                                n = i + 1;
                                break
                            }
                        } else a < 0 && (o = !0, a = i + 1), l > -1 && (e.charCodeAt(i) === t.charCodeAt(l--) ? l < 0 && (r = i) : (l = -1, r = a));
                    return n === r ? r = a : r < 0 && (r = e.length), e.slice(n, r)
                },
                dirname: function(e) {
                    if (p(e), 0 === e.length) return ".";
                    let t = -1,
                        n = e.length,
                        r;
                    for (; --n;)
                        if (47 === e.charCodeAt(n)) {
                            if (r) {
                                t = n;
                                break
                            }
                        } else r || (r = !0);
                    return t < 0 ? 47 === e.charCodeAt(0) ? "/" : "." : 1 === t && 47 === e.charCodeAt(0) ? "//" : e.slice(0, t)
                },
                extname: function(e) {
                    p(e);
                    let t = e.length,
                        n = -1,
                        r = 0,
                        i = -1,
                        o = 0,
                        a;
                    for (; t--;) {
                        let l = e.charCodeAt(t);
                        if (47 === l) {
                            if (a) {
                                r = t + 1;
                                break
                            }
                            continue
                        }
                        n < 0 && (a = !0, n = t + 1), 46 === l ? i < 0 ? i = t : 1 !== o && (o = 1) : i > -1 && (o = -1)
                    }
                    return i < 0 || n < 0 || 0 === o || 1 === o && i === n - 1 && i === r + 1 ? "" : e.slice(i, n)
                },
                join: function(...e) {
                    let t = -1,
                        n;
                    for (; ++t < e.length;) p(e[t]), e[t] && (n = void 0 === n ? e[t] : n + "/" + e[t]);
                    return void 0 === n ? "." : function(e) {
                        p(e);
                        let t = 47 === e.charCodeAt(0),
                            n = function e(t, n) {
                                let r = "",
                                    i = 0,
                                    o = -1,
                                    a = 0,
                                    l = -1,
                                    s, c;
                                for (; ++l <= t.length;) {
                                    if (l < t.length) s = t.charCodeAt(l);
                                    else if (47 === s) break;
                                    else s = 47;
                                    if (47 === s) {
                                        if (o === l - 1 || 1 === a);
                                        else if (o !== l - 1 && 2 === a) {
                                            if (r.length < 2 || 2 !== i || 46 !== r.charCodeAt(r.length - 1) || 46 !== r.charCodeAt(r.length - 2)) {
                                                if (r.length > 2) {
                                                    if ((c = r.lastIndexOf("/")) !== r.length - 1) {
                                                        c < 0 ? (r = "", i = 0) : i = (r = r.slice(0, c)).length - 1 - r.lastIndexOf("/"), o = l, a = 0;
                                                        continue
                                                    }
                                                } else if (r.length > 0) {
                                                    r = "", i = 0, o = l, a = 0;
                                                    continue
                                                }
                                            }
                                            n && (r = r.length > 0 ? r + "/.." : "..", i = 2)
                                        } else r.length > 0 ? r += "/" + t.slice(o + 1, l) : r = t.slice(o + 1, l), i = l - o - 1;
                                        o = l, a = 0
                                    } else 46 === s && a > -1 ? a++ : a = -1
                                }
                                return r
                            }(e, !t);
                        return 0 !== n.length || t || (n = "."), n.length > 0 && 47 === e.charCodeAt(e.length - 1) && (n += "/"), t ? "/" + n : n
                    }(n)
                },
                sep: "/"
            };

            function p(e) {
                if ("string" != typeof e) throw TypeError("Path must be a string. Received " + JSON.stringify(e))
            }
            let g = {
                cwd: function() {
                    return "/"
                }
            };

            function m(e) {
                return null !== e && "object" == typeof e && e.href && e.origin
            }
            let h = ["history", "path", "basename", "stem", "extname", "dirname"];
            class b {
                constructor(e) {
                    let t;
                    t = e ? "string" == typeof e || a(e) ? {
                        value: e
                    } : m(e) ? {
                        path: e
                    } : e : {}, this.data = {}, this.messages = [], this.history = [], this.cwd = g.cwd(), this.value, this.stored, this.result, this.map;
                    let n = -1;
                    for (; ++n < h.length;) {
                        let r = h[n];
                        r in t && void 0 !== t[r] && (this[r] = "history" === r ? [...t[r]] : t[r])
                    }
                    let i;
                    for (i in t) h.includes(i) || (this[i] = t[i])
                }
                get path() {
                    return this.history[this.history.length - 1]
                }
                set path(e) {
                    m(e) && (e = function(e) {
                        if ("string" == typeof e) e = new URL(e);
                        else if (!m(e)) {
                            let t = TypeError('The "path" argument must be of type string or an instance of URL. Received `' + e + "`");
                            throw t.code = "ERR_INVALID_ARG_TYPE", t
                        }
                        if ("file:" !== e.protocol) {
                            let n = TypeError("The URL must be of scheme file");
                            throw n.code = "ERR_INVALID_URL_SCHEME", n
                        }
                        return function(e) {
                            if ("" !== e.hostname) {
                                let t = TypeError('File URL host must be "localhost" or empty on darwin');
                                throw t.code = "ERR_INVALID_FILE_URL_HOST", t
                            }
                            let n = e.pathname,
                                r = -1;
                            for (; ++r < n.length;)
                                if (37 === n.charCodeAt(r) && 50 === n.charCodeAt(r + 1)) {
                                    let i = n.charCodeAt(r + 2);
                                    if (70 === i || 102 === i) {
                                        let o = TypeError("File URL path must not include encoded / characters");
                                        throw o.code = "ERR_INVALID_FILE_URL_PATH", o
                                    }
                                }
                            return decodeURIComponent(n)
                        }(e)
                    }(e)), v(e, "path"), this.path !== e && this.history.push(e)
                }
                get dirname() {
                    return "string" == typeof this.path ? f.dirname(this.path) : void 0
                }
                set dirname(e) {
                    k(this.basename, "dirname"), this.path = f.join(e || "", this.basename)
                }
                get basename() {
                    return "string" == typeof this.path ? f.basename(this.path) : void 0
                }
                set basename(e) {
                    v(e, "basename"), y(e, "basename"), this.path = f.join(this.dirname || "", e)
                }
                get extname() {
                    return "string" == typeof this.path ? f.extname(this.path) : void 0
                }
                set extname(e) {
                    if (y(e, "extname"), k(this.dirname, "extname"), e) {
                        if (46 !== e.charCodeAt(0)) throw Error("`extname` must start with `.`");
                        if (e.includes(".", 1)) throw Error("`extname` cannot contain multiple dots")
                    }
                    this.path = f.join(this.dirname, this.stem + (e || ""))
                }
                get stem() {
                    return "string" == typeof this.path ? f.basename(this.path, this.extname) : void 0
                }
                set stem(e) {
                    v(e, "stem"), y(e, "stem"), this.path = f.join(this.dirname || "", e + (this.extname || ""))
                }
                toString(e) {
                    return (this.value || "").toString(e)
                }
                message(e, t, n) {
                    let r = new d(e, t, n);
                    return this.path && (r.name = this.path + ":" + r.name, r.file = this.path), r.fatal = !1, this.messages.push(r), r
                }
                info(e, t, n) {
                    let r = this.message(e, t, n);
                    return r.fatal = null, r
                }
                fail(e, t, n) {
                    let r = this.message(e, t, n);
                    throw r.fatal = !0, r
                }
            }

            function y(e, t) {
                if (e && e.includes(f.sep)) throw Error("`" + t + "` cannot be a path: did not expect `" + f.sep + "`")
            }

            function v(e, t) {
                if (!e) throw Error("`" + t + "` cannot be empty")
            }

            function k(e, t) {
                if (!e) throw Error("Setting `" + t + "` requires `path` to be set too")
            }

            function x(e) {
                if (e) throw e
            }
            var _ = n(24740);

            function w(e) {
                if ("object" != typeof e || null === e) return !1;
                let t = Object.getPrototypeOf(e);
                return (null === t || t === Object.prototype || null === Object.getPrototypeOf(t)) && !(Symbol.toStringTag in e) && !(Symbol.iterator in e)
            }
            let E = (function e() {
                    let t = function() {
                            let e = [],
                                t = {
                                    run: function(...t) {
                                        let n = -1,
                                            r = t.pop();
                                        if ("function" != typeof r) throw TypeError("Expected function as last argument, not " + r);
                                        ! function i(o, ...a) {
                                            let l = e[++n],
                                                s = -1;
                                            if (o) {
                                                r(o);
                                                return
                                            }
                                            for (; ++s < t.length;)(null === a[s] || void 0 === a[s]) && (a[s] = t[s]);
                                            t = a, l ? (function(e, t) {
                                                let n;
                                                return function(...t) {
                                                    let o = e.length > t.length,
                                                        a;
                                                    o && t.push(r);
                                                    try {
                                                        a = e.apply(this, t)
                                                    } catch (l) {
                                                        if (o && n) throw l;
                                                        return r(l)
                                                    }
                                                    o || (a instanceof Promise ? a.then(i, r) : a instanceof Error ? r(a) : i(a))
                                                };

                                                function r(e, ...r) {
                                                    n || (n = !0, t(e, ...r))
                                                }

                                                function i(e) {
                                                    r(null, e)
                                                }
                                            })(l, i)(...a) : r(null, ...a)
                                        }(null, ...t)
                                    },
                                    use: function(n) {
                                        if ("function" != typeof n) throw TypeError("Expected `middelware` to be a function, not " + n);
                                        return e.push(n), t
                                    }
                                };
                            return t
                        }(),
                        n = [],
                        r = {},
                        i, o = -1;
                    return l.data = function(e, t) {
                        return "string" == typeof e ? 2 === arguments.length ? (A("data", i), r[e] = t, l) : S.call(r, e) && r[e] || null : e ? (A("data", i), r = e, l) : r
                    }, l.Parser = void 0, l.Compiler = void 0, l.freeze = function() {
                        if (i) return l;
                        for (; ++o < n.length;) {
                            let [e, ...r] = n[o];
                            if (!1 === r[0]) continue;
                            !0 === r[0] && (r[0] = void 0);
                            let a = e.call(l, ...r);
                            "function" == typeof a && t.use(a)
                        }
                        return i = !0, o = Number.POSITIVE_INFINITY, l
                    }, l.attachers = n, l.use = function(e, ...t) {
                        let o;
                        if (A("use", i), null == e);
                        else if ("function" == typeof e) u(e, ...t);
                        else if ("object" == typeof e) Array.isArray(e) ? c(e) : s(e);
                        else throw TypeError("Expected usable value, not `" + e + "`");
                        return o && (r.settings = Object.assign(r.settings || {}, o)), l;

                        function a(e) {
                            if ("function" == typeof e) u(e);
                            else if ("object" == typeof e) {
                                if (Array.isArray(e)) {
                                    let [t, ...n] = e;
                                    u(t, ...n)
                                } else s(e)
                            } else throw TypeError("Expected usable value, not `" + e + "`")
                        }

                        function s(e) {
                            c(e.plugins), e.settings && (o = Object.assign(o || {}, e.settings))
                        }

                        function c(e) {
                            let t = -1;
                            if (null == e);
                            else if (Array.isArray(e))
                                for (; ++t < e.length;) {
                                    let n = e[t];
                                    a(n)
                                } else throw TypeError("Expected a list of plugins, not `" + e + "`")
                        }

                        function u(e, t) {
                            let r = -1,
                                i;
                            for (; ++r < n.length;)
                                if (n[r][0] === e) {
                                    i = n[r];
                                    break
                                }
                            i ? (w(i[1]) && w(t) && (t = _(!0, i[1], t)), i[1] = t) : n.push([...arguments])
                        }
                    }, l.parse = function(e) {
                        l.freeze();
                        let t = I(e),
                            n = l.Parser;
                        return (C("parse", n), N(n, "parse")) ? new n(String(t), t).parse() : n(String(t), t)
                    }, l.stringify = function(e, t) {
                        l.freeze();
                        let n = I(t),
                            r = l.Compiler;
                        return (O("stringify", r), T(e), N(r, "compile")) ? new r(e, n).compile() : r(e, n)
                    }, l.run = function(e, n, r) {
                        if (T(e), l.freeze(), r || "function" != typeof n || (r = n, n = void 0), !r) return new Promise(i);

                        function i(i, o) {
                            t.run(e, I(n), function(t, n, a) {
                                n = n || e, t ? o(t) : i ? i(n) : r(null, n, a)
                            })
                        }
                        i(null, r)
                    }, l.runSync = function(e, t) {
                        let n, r;
                        return l.run(e, t, function(e, t) {
                            x(e), n = t, r = !0
                        }), M("runSync", "run", r), n
                    }, l.process = function(e, t) {
                        if (l.freeze(), C("process", l.Parser), O("process", l.Compiler), !t) return new Promise(n);

                        function n(n, r) {
                            let i = I(e);

                            function o(e, i) {
                                e || !i ? r(e) : n ? n(i) : t(null, i)
                            }
                            l.run(l.parse(i), i, (e, t, n) => {
                                if (!e && t && n) {
                                    var r;
                                    let i = l.stringify(t, n);
                                    null == i || ((r = i, "string" == typeof r || a(r)) ? n.value = i : n.result = i), o(e, n)
                                } else o(e)
                            })
                        }
                        n(null, t)
                    }, l.processSync = function(e) {
                        let t;
                        l.freeze(), C("processSync", l.Parser), O("processSync", l.Compiler);
                        let n = I(e);
                        return l.process(n, function(e) {
                            t = !0, x(e)
                        }), M("processSync", "process", t), n
                    }, l;

                    function l() {
                        let t = e(),
                            i = -1;
                        for (; ++i < n.length;) t.use(...n[i]);
                        return t.data(_(!0, {}, r)), t
                    }
                })().freeze(),
                S = {}.hasOwnProperty;

            function N(e, t) {
                return "function" == typeof e && e.prototype && (function(e) {
                    let t;
                    for (t in e)
                        if (S.call(e, t)) return !0;
                    return !1
                }(e.prototype) || t in e.prototype)
            }

            function C(e, t) {
                if ("function" != typeof t) throw TypeError("Cannot `" + e + "` without `Parser`")
            }

            function O(e, t) {
                if ("function" != typeof t) throw TypeError("Cannot `" + e + "` without `Compiler`")
            }

            function A(e, t) {
                if (t) throw Error("Cannot call `" + e + "` on a frozen processor.\nCreate a new processor first, by calling it: use `processor()` instead of `processor`.")
            }

            function T(e) {
                if (!w(e) || "string" != typeof e.type) throw TypeError("Expected node, got `" + e + "`")
            }

            function M(e, t, n) {
                if (!n) throw Error("`" + e + "` finished async. Use `" + t + "` instead")
            }

            function I(e) {
                var t;
                return (t = e, Boolean(t && "object" == typeof t && "message" in t && "messages" in t)) ? e : new b(e)
            }

            function D(e, t) {
                return e && "object" == typeof e && (e.value || (t ? e.alt : "") || "children" in e && L(e.children, t) || Array.isArray(e) && L(e, t)) || ""
            }

            function L(e, t) {
                for (var n = [], r = -1; ++r < e.length;) n[r] = D(e[r], t);
                return n.join("")
            }
            var R = n(89063),
                F = n(46050),
                P = n(29874);
            let B = {
                tokenize: function(e) {
                    let t = e.attempt(this.parser.constructs.contentInitial, function(n) {
                            if (null === n) {
                                e.consume(n);
                                return
                            }
                            return e.enter("lineEnding"), e.consume(n), e.exit("lineEnding"), (0, F.f)(e, t, "linePrefix")
                        }, function(t) {
                            return e.enter("paragraph"),
                                function t(r) {
                                    let i = e.enter("chunkText", {
                                        contentType: "text",
                                        previous: n
                                    });
                                    return n && (n.next = i), n = i,
                                        function n(r) {
                                            if (null === r) {
                                                e.exit("chunkText"), e.exit("paragraph"), e.consume(r);
                                                return
                                            }
                                            return (0, P.Ch)(r) ? (e.consume(r), e.exit("chunkText"), t) : (e.consume(r), n)
                                        }(r)
                                }(t)
                        }),
                        n;
                    return t
                }
            };
            var z = n(11707);
            let j = {
                    tokenize: function(e) {
                        let t = this,
                            n = [],
                            r = 0,
                            i, o, a;
                        return l;

                        function l(i) {
                            if (r < n.length) {
                                let o = n[r];
                                return t.containerState = o[1], e.attempt(o[0].continuation, s, c)(i)
                            }
                            return c(i)
                        }

                        function s(e) {
                            if (r++, t.containerState._closeFlow) {
                                t.containerState._closeFlow = void 0, i && b();
                                let n = t.events.length,
                                    o = n,
                                    a;
                                for (; o--;)
                                    if ("exit" === t.events[o][0] && "chunkFlow" === t.events[o][1].type) {
                                        a = t.events[o][1].end;
                                        break
                                    }
                                h(r);
                                let s = n;
                                for (; s < t.events.length;) t.events[s][1].end = Object.assign({}, a), s++;
                                return (0, z.d)(t.events, o + 1, 0, t.events.slice(n)), t.events.length = s, c(e)
                            }
                            return l(e)
                        }

                        function c(o) {
                            if (r === n.length) {
                                if (!i) return f(o);
                                if (i.currentConstruct && i.currentConstruct.concrete) return g(o);
                                t.interrupt = Boolean(i.currentConstruct && !i._gfmTableDynamicInterruptHack)
                            }
                            return t.containerState = {}, e.check($, u, d)(o)
                        }

                        function u(e) {
                            return i && b(), h(r), f(e)
                        }

                        function d(e) {
                            return t.parser.lazy[t.now().line] = r !== n.length, a = t.now().offset, g(e)
                        }

                        function f(n) {
                            return t.containerState = {}, e.attempt($, p, g)(n)
                        }

                        function p(e) {
                            return r++, n.push([t.currentConstruct, t.containerState]), f(e)
                        }

                        function g(n) {
                            if (null === n) {
                                i && b(), h(0), e.consume(n);
                                return
                            }
                            return i = i || t.parser.flow(t.now()), e.enter("chunkFlow", {
                                    contentType: "flow",
                                    previous: o,
                                    _tokenizer: i
                                }),
                                function n(i) {
                                    if (null === i) {
                                        m(e.exit("chunkFlow"), !0), h(0), e.consume(i);
                                        return
                                    }
                                    return (0, P.Ch)(i) ? (e.consume(i), m(e.exit("chunkFlow")), r = 0, t.interrupt = void 0, l) : (e.consume(i), n)
                                }(n)
                        }

                        function m(e, n) {
                            let l = t.sliceStream(e);
                            if (n && l.push(null), e.previous = o, o && (o.next = e), o = e, i.defineSkip(e.start), i.write(l), t.parser.lazy[e.start.line]) {
                                let s = i.events.length;
                                for (; s--;)
                                    if (i.events[s][1].start.offset < a && (!i.events[s][1].end || i.events[s][1].end.offset > a)) return;
                                let c = t.events.length,
                                    u = c,
                                    d, f;
                                for (; u--;)
                                    if ("exit" === t.events[u][0] && "chunkFlow" === t.events[u][1].type) {
                                        if (d) {
                                            f = t.events[u][1].end;
                                            break
                                        }
                                        d = !0
                                    }
                                for (h(r), s = c; s < t.events.length;) t.events[s][1].end = Object.assign({}, f), s++;
                                (0, z.d)(t.events, u + 1, 0, t.events.slice(c)), t.events.length = s
                            }
                        }

                        function h(r) {
                            let i = n.length;
                            for (; i-- > r;) {
                                let o = n[i];
                                t.containerState = o[1], o[0].exit.call(t, e)
                            }
                            n.length = r
                        }

                        function b() {
                            i.write([null]), o = void 0, i = void 0, t.containerState._closeFlow = void 0
                        }
                    }
                },
                $ = {
                    tokenize: function(e, t, n) {
                        return (0, F.f)(e, e.attempt(this.parser.constructs.document, t, n), "linePrefix", this.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4)
                    }
                };
            var U = n(58775);

            function H(e) {
                let t = {},
                    n = -1,
                    r, i, o, a, l, s, c;
                for (; ++n < e.length;) {
                    for (;
                        (n in t);) n = t[n];
                    if (r = e[n], n && "chunkFlow" === r[1].type && "listItemPrefix" === e[n - 1][1].type && ((o = 0) < (s = r[1]._tokenizer.events).length && "lineEndingBlank" === s[o][1].type && (o += 2), o < s.length && "content" === s[o][1].type))
                        for (; ++o < s.length && "content" !== s[o][1].type;) "chunkText" === s[o][1].type && (s[o][1]._isInFirstContentOfListItem = !0, o++);
                    if ("enter" === r[0]) r[1].contentType && (Object.assign(t, q(e, n)), n = t[n], c = !0);
                    else if (r[1]._container) {
                        for (o = n, i = void 0; o--;)
                            if ("lineEnding" === (a = e[o])[1].type || "lineEndingBlank" === a[1].type) "enter" === a[0] && (i && (e[i][1].type = "lineEndingBlank"), a[1].type = "lineEnding", i = o);
                            else break;
                        i && (r[1].end = Object.assign({}, e[i][1].start), (l = e.slice(i, n)).unshift(r), (0, z.d)(e, i, n - i + 1, l))
                    }
                }
                return !c
            }

            function q(e, t) {
                let n = e[t][1],
                    r = e[t][2],
                    i = t - 1,
                    o = [],
                    a = n._tokenizer || r.parser[n.contentType](n.start),
                    l = a.events,
                    s = [],
                    c = {},
                    u, d, f = -1,
                    p = n,
                    g = 0,
                    m = 0,
                    h = [m];
                for (; p;) {
                    for (; e[++i][1] !== p;);
                    o.push(i), !p._tokenizer && (u = r.sliceStream(p), p.next || u.push(null), d && a.defineSkip(p.start), p._isInFirstContentOfListItem && (a._gfmTasklistFirstContentOfListItem = !0), a.write(u), p._isInFirstContentOfListItem && (a._gfmTasklistFirstContentOfListItem = void 0)), d = p, p = p.next
                }
                for (p = n; ++f < l.length;) "exit" === l[f][0] && "enter" === l[f - 1][0] && l[f][1].type === l[f - 1][1].type && l[f][1].start.line !== l[f][1].end.line && (m = f + 1, h.push(m), p._tokenizer = void 0, p.previous = void 0, p = p.next);
                for (a.events = [], p ? (p._tokenizer = void 0, p.previous = void 0) : h.pop(), f = h.length; f--;) {
                    let b = l.slice(h[f], h[f + 1]),
                        y = o.pop();
                    s.unshift([y, y + b.length - 1]), (0, z.d)(e, y, 2, b)
                }
                for (f = -1; ++f < s.length;) c[g + s[f][0]] = g + s[f][1], g += s[f][1] - s[f][0] - 1;
                return c
            }
            let K = {
                    tokenize: function(e, t) {
                        let n;
                        return function(t) {
                            return e.enter("content"), n = e.enter("chunkContent", {
                                contentType: "content"
                            }), r(t)
                        };

                        function r(t) {
                            return null === t ? i(t) : (0, P.Ch)(t) ? e.check(V, o, i)(t) : (e.consume(t), r)
                        }

                        function i(n) {
                            return e.exit("chunkContent"), e.exit("content"), t(n)
                        }

                        function o(t) {
                            return e.consume(t), e.exit("chunkContent"), n.next = e.enter("chunkContent", {
                                contentType: "content",
                                previous: n
                            }), n = n.next, r
                        }
                    },
                    resolve: function(e) {
                        return H(e), e
                    }
                },
                V = {
                    tokenize: function(e, t, n) {
                        let r = this;
                        return function(t) {
                            return e.exit("chunkContent"), e.enter("lineEnding"), e.consume(t), e.exit("lineEnding"), (0, F.f)(e, i, "linePrefix")
                        };

                        function i(i) {
                            if (null === i || (0, P.Ch)(i)) return n(i);
                            let o = r.events[r.events.length - 1];
                            return !r.parser.constructs.disable.null.includes("codeIndented") && o && "linePrefix" === o[1].type && o[2].sliceSerialize(o[1], !0).length >= 4 ? t(i) : e.interrupt(r.parser.constructs.flow, n, t)(i)
                        }
                    },
                    partial: !0
                },
                Z = {
                    tokenize: function(e) {
                        let t = this,
                            n = e.attempt(U.w, function(r) {
                                if (null === r) {
                                    e.consume(r);
                                    return
                                }
                                return e.enter("lineEndingBlank"), e.consume(r), e.exit("lineEndingBlank"), t.currentConstruct = void 0, n
                            }, e.attempt(this.parser.constructs.flowInitial, r, (0, F.f)(e, e.attempt(this.parser.constructs.flow, r, e.attempt(K, r)), "linePrefix")));
                        return n;

                        function r(r) {
                            if (null === r) {
                                e.consume(r);
                                return
                            }
                            return e.enter("lineEnding"), e.consume(r), e.exit("lineEnding"), t.currentConstruct = void 0, n
                        }
                    }
                },
                W = {
                    resolveAll: Y()
                },
                G = Q("string"),
                X = Q("text");

            function Q(e) {
                return {
                    tokenize: function(t) {
                        let n = this,
                            r = this.parser.constructs[e],
                            i = t.attempt(r, o, a);
                        return o;

                        function o(e) {
                            return s(e) ? i(e) : a(e)
                        }

                        function a(e) {
                            if (null === e) {
                                t.consume(e);
                                return
                            }
                            return t.enter("data"), t.consume(e), l
                        }

                        function l(e) {
                            return s(e) ? (t.exit("data"), i(e)) : (t.consume(e), l)
                        }

                        function s(e) {
                            if (null === e) return !0;
                            let t = r[e],
                                i = -1;
                            if (t)
                                for (; ++i < t.length;) {
                                    let o = t[i];
                                    if (!o.previous || o.previous.call(n, n.previous)) return !0
                                }
                            return !1
                        }
                    },
                    resolveAll: Y("text" === e ? J : void 0)
                }
            }

            function Y(e) {
                return function(t, n) {
                    let r = -1,
                        i;
                    for (; ++r <= t.length;) void 0 === i ? t[r] && "data" === t[r][1].type && (i = r, r++) : t[r] && "data" === t[r][1].type || (r !== i + 2 && (t[i][1].end = t[r - 1][1].end, t.splice(i + 2, r - i - 2), r = i + 2), i = void 0);
                    return e ? e(t, n) : t
                }
            }

            function J(e, t) {
                let n = 0;
                for (; ++n <= e.length;)
                    if ((n === e.length || "lineEnding" === e[n][1].type) && "data" === e[n - 1][1].type) {
                        let r = e[n - 1][1],
                            i = t.sliceStream(r),
                            o = i.length,
                            a = -1,
                            l = 0,
                            s;
                        for (; o--;) {
                            let c = i[o];
                            if ("string" == typeof c) {
                                for (a = c.length; 32 === c.charCodeAt(a - 1);) l++, a--;
                                if (a) break;
                                a = -1
                            } else if (-2 === c) s = !0, l++;
                            else if (-1 === c);
                            else {
                                o++;
                                break
                            }
                        }
                        if (l) {
                            let u = {
                                type: n === e.length || s || l < 2 ? "lineSuffix" : "hardBreakTrailing",
                                start: {
                                    line: r.end.line,
                                    column: r.end.column - l,
                                    offset: r.end.offset - l,
                                    _index: r.start._index + o,
                                    _bufferIndex: o ? a : r.start._bufferIndex + a
                                },
                                end: Object.assign({}, r.end)
                            };
                            r.end = Object.assign({}, u.start), r.start.offset === r.end.offset ? Object.assign(r, u) : (e.splice(n, 0, ["enter", u, t], ["exit", u, t]), n += 2)
                        }
                        n++
                    }
                return e
            }
            var ee = n(79142);
            let et = {
                    name: "thematicBreak",
                    tokenize: function(e, t, n) {
                        let r = 0,
                            i;
                        return function(o) {
                            return e.enter("thematicBreak"), i = o,
                                function o(a) {
                                    return a === i ? (e.enter("thematicBreakSequence"), function t(n) {
                                        return n === i ? (e.consume(n), r++, t) : (e.exit("thematicBreakSequence"), o(n))
                                    }(a)) : (0, P.xz)(a) ? (0, F.f)(e, o, "whitespace")(a) : r < 3 || null !== a && !(0, P.Ch)(a) ? n(a) : (e.exit("thematicBreak"), t(a))
                                }(o)
                        }
                    }
                },
                en = {
                    name: "list",
                    tokenize: function(e, t, n) {
                        let r = this,
                            i = r.events[r.events.length - 1],
                            o = i && "linePrefix" === i[1].type ? i[2].sliceSerialize(i[1], !0).length : 0,
                            a = 0;
                        return function(t) {
                            let i = r.containerState.type || (42 === t || 43 === t || 45 === t ? "listUnordered" : "listOrdered");
                            if ("listUnordered" === i ? !r.containerState.marker || t === r.containerState.marker : (0, P.pY)(t)) {
                                if (r.containerState.type || (r.containerState.type = i, e.enter(i, {
                                        _container: !0
                                    })), "listUnordered" === i) return e.enter("listItemPrefix"), 42 === t || 45 === t ? e.check(et, n, l)(t) : l(t);
                                if (!r.interrupt || 49 === t) return e.enter("listItemPrefix"), e.enter("listItemValue"),
                                    function t(i) {
                                        return (0, P.pY)(i) && ++a < 10 ? (e.consume(i), t) : (!r.interrupt || a < 2) && (r.containerState.marker ? i === r.containerState.marker : 41 === i || 46 === i) ? (e.exit("listItemValue"), l(i)) : n(i)
                                    }(t)
                            }
                            return n(t)
                        };

                        function l(t) {
                            return e.enter("listItemMarker"), e.consume(t), e.exit("listItemMarker"), r.containerState.marker = r.containerState.marker || t, e.check(U.w, r.interrupt ? n : s, e.attempt(er, u, c))
                        }

                        function s(e) {
                            return r.containerState.initialBlankLine = !0, o++, u(e)
                        }

                        function c(t) {
                            return (0, P.xz)(t) ? (e.enter("listItemPrefixWhitespace"), e.consume(t), e.exit("listItemPrefixWhitespace"), u) : n(t)
                        }

                        function u(n) {
                            return r.containerState.size = o + r.sliceSerialize(e.exit("listItemPrefix"), !0).length, t(n)
                        }
                    },
                    continuation: {
                        tokenize: function(e, t, n) {
                            let r = this;
                            return r.containerState._closeFlow = void 0, e.check(U.w, function(n) {
                                return r.containerState.furtherBlankLines = r.containerState.furtherBlankLines || r.containerState.initialBlankLine, (0, F.f)(e, t, "listItemIndent", r.containerState.size + 1)(n)
                            }, function(n) {
                                return r.containerState.furtherBlankLines || !(0, P.xz)(n) ? (r.containerState.furtherBlankLines = void 0, r.containerState.initialBlankLine = void 0, i(n)) : (r.containerState.furtherBlankLines = void 0, r.containerState.initialBlankLine = void 0, e.attempt(ei, t, i)(n))
                            });

                            function i(i) {
                                return r.containerState._closeFlow = !0, r.interrupt = void 0, (0, F.f)(e, e.attempt(en, t, n), "linePrefix", r.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4)(i)
                            }
                        }
                    },
                    exit: function(e) {
                        e.exit(this.containerState.type)
                    }
                },
                er = {
                    tokenize: function(e, t, n) {
                        let r = this;
                        return (0, F.f)(e, function(e) {
                            let i = r.events[r.events.length - 1];
                            return !(0, P.xz)(e) && i && "listItemPrefixWhitespace" === i[1].type ? t(e) : n(e)
                        }, "listItemPrefixWhitespace", r.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 5)
                    },
                    partial: !0
                },
                ei = {
                    tokenize: function(e, t, n) {
                        let r = this;
                        return (0, F.f)(e, function(e) {
                            let i = r.events[r.events.length - 1];
                            return i && "listItemIndent" === i[1].type && i[2].sliceSerialize(i[1], !0).length === r.containerState.size ? t(e) : n(e)
                        }, "listItemIndent", r.containerState.size + 1)
                    },
                    partial: !0
                },
                eo = {
                    name: "blockQuote",
                    tokenize: function(e, t, n) {
                        let r = this;
                        return function(t) {
                            if (62 === t) {
                                let o = r.containerState;
                                return o.open || (e.enter("blockQuote", {
                                    _container: !0
                                }), o.open = !0), e.enter("blockQuotePrefix"), e.enter("blockQuoteMarker"), e.consume(t), e.exit("blockQuoteMarker"), i
                            }
                            return n(t)
                        };

                        function i(n) {
                            return (0, P.xz)(n) ? (e.enter("blockQuotePrefixWhitespace"), e.consume(n), e.exit("blockQuotePrefixWhitespace"), e.exit("blockQuotePrefix"), t) : (e.exit("blockQuotePrefix"), t(n))
                        }
                    },
                    continuation: {
                        tokenize: function(e, t, n) {
                            return (0, F.f)(e, e.attempt(eo, t, n), "linePrefix", this.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4)
                        }
                    },
                    exit: function(e) {
                        e.exit("blockQuote")
                    }
                };

            function ea(e, t, n, r, i, o, a, l, s) {
                let c = s || Number.POSITIVE_INFINITY,
                    u = 0;
                return function(t) {
                    return 60 === t ? (e.enter(r), e.enter(i), e.enter(o), e.consume(t), e.exit(o), d) : null === t || 41 === t || (0, P.Av)(t) ? n(t) : (e.enter(r), e.enter(a), e.enter(l), e.enter("chunkString", {
                        contentType: "string"
                    }), g(t))
                };

                function d(n) {
                    return 62 === n ? (e.enter(o), e.consume(n), e.exit(o), e.exit(i), e.exit(r), t) : (e.enter(l), e.enter("chunkString", {
                        contentType: "string"
                    }), f(n))
                }

                function f(t) {
                    return 62 === t ? (e.exit("chunkString"), e.exit(l), d(t)) : null === t || 60 === t || (0, P.Ch)(t) ? n(t) : (e.consume(t), 92 === t ? p : f)
                }

                function p(t) {
                    return 60 === t || 62 === t || 92 === t ? (e.consume(t), f) : f(t)
                }

                function g(i) {
                    return 40 === i ? ++u > c ? n(i) : (e.consume(i), g) : 41 === i ? u-- ? (e.consume(i), g) : (e.exit("chunkString"), e.exit(l), e.exit(a), e.exit(r), t(i)) : null === i || (0, P.z3)(i) ? u ? n(i) : (e.exit("chunkString"), e.exit(l), e.exit(a), e.exit(r), t(i)) : (0, P.Av)(i) ? n(i) : (e.consume(i), 92 === i ? m : g)
                }

                function m(t) {
                    return 40 === t || 41 === t || 92 === t ? (e.consume(t), g) : g(t)
                }
            }

            function el(e, t, n, r, i, o) {
                let a = this,
                    l = 0,
                    s;
                return function(t) {
                    return e.enter(r), e.enter(i), e.consume(t), e.exit(i), e.enter(o), c
                };

                function c(d) {
                    return null === d || 91 === d || 93 === d && !s || 94 === d && !l && "_hiddenFootnoteSupport" in a.parser.constructs || l > 999 ? n(d) : 93 === d ? (e.exit(o), e.enter(i), e.consume(d), e.exit(i), e.exit(r), t) : (0, P.Ch)(d) ? (e.enter("lineEnding"), e.consume(d), e.exit("lineEnding"), c) : (e.enter("chunkString", {
                        contentType: "string"
                    }), u(d))
                }

                function u(t) {
                    return null === t || 91 === t || 93 === t || (0, P.Ch)(t) || l++ > 999 ? (e.exit("chunkString"), c(t)) : (e.consume(t), s = s || !(0, P.xz)(t), 92 === t ? d : u)
                }

                function d(t) {
                    return 91 === t || 92 === t || 93 === t ? (e.consume(t), l++, u) : u(t)
                }
            }

            function es(e, t, n, r, i, o) {
                let a;
                return function(t) {
                    return e.enter(r), e.enter(i), e.consume(t), e.exit(i), a = 40 === t ? 41 : t, l
                };

                function l(n) {
                    return n === a ? (e.enter(i), e.consume(n), e.exit(i), e.exit(r), t) : (e.enter(o), s(n))
                }

                function s(t) {
                    return t === a ? (e.exit(o), l(a)) : null === t ? n(t) : (0, P.Ch)(t) ? (e.enter("lineEnding"), e.consume(t), e.exit("lineEnding"), (0, F.f)(e, s, "linePrefix")) : (e.enter("chunkString", {
                        contentType: "string"
                    }), c(t))
                }

                function c(t) {
                    return t === a || null === t || (0, P.Ch)(t) ? (e.exit("chunkString"), s(t)) : (e.consume(t), 92 === t ? u : c)
                }

                function u(t) {
                    return t === a || 92 === t ? (e.consume(t), c) : c(t)
                }
            }

            function ec(e, t) {
                let n;
                return r;

                function r(i) {
                    return (0, P.Ch)(i) ? (e.enter("lineEnding"), e.consume(i), e.exit("lineEnding"), n = !0, r) : (0, P.xz)(i) ? (0, F.f)(e, r, n ? "linePrefix" : "lineSuffix")(i) : t(i)
                }
            }
            var eu = n(37618);
            let ed = {
                    tokenize: function(e, t, n) {
                        return function(t) {
                            return (0, P.z3)(t) ? ec(e, r)(t) : n(t)
                        };

                        function r(t) {
                            return 34 === t || 39 === t || 40 === t ? es(e, (0, F.f)(e, i, "whitespace"), n, "definitionTitle", "definitionTitleMarker", "definitionTitleString")(t) : n(t)
                        }

                        function i(e) {
                            return null === e || (0, P.Ch)(e) ? t(e) : n(e)
                        }
                    },
                    partial: !0
                },
                ef = {
                    name: "codeIndented",
                    tokenize: function(e, t, n) {
                        let r = this;
                        return function(t) {
                            return e.enter("codeIndented"), (0, F.f)(e, i, "linePrefix", 5)(t)
                        };

                        function i(t) {
                            let i = r.events[r.events.length - 1];
                            return i && "linePrefix" === i[1].type && i[2].sliceSerialize(i[1], !0).length >= 4 ? function t(n) {
                                return null === n ? o(n) : (0, P.Ch)(n) ? e.attempt(ep, t, o)(n) : (e.enter("codeFlowValue"), function n(r) {
                                    return null === r || (0, P.Ch)(r) ? (e.exit("codeFlowValue"), t(r)) : (e.consume(r), n)
                                }(n))
                            }(t) : n(t)
                        }

                        function o(n) {
                            return e.exit("codeIndented"), t(n)
                        }
                    }
                },
                ep = {
                    tokenize: function(e, t, n) {
                        let r = this;
                        return i;

                        function i(t) {
                            return r.parser.lazy[r.now().line] ? n(t) : (0, P.Ch)(t) ? (e.enter("lineEnding"), e.consume(t), e.exit("lineEnding"), i) : (0, F.f)(e, o, "linePrefix", 5)(t)
                        }

                        function o(e) {
                            let o = r.events[r.events.length - 1];
                            return o && "linePrefix" === o[1].type && o[2].sliceSerialize(o[1], !0).length >= 4 ? t(e) : (0, P.Ch)(e) ? i(e) : n(e)
                        }
                    },
                    partial: !0
                },
                eg = {
                    name: "setextUnderline",
                    tokenize: function(e, t, n) {
                        let r = this,
                            i = r.events.length,
                            o, a;
                        for (; i--;)
                            if ("lineEnding" !== r.events[i][1].type && "linePrefix" !== r.events[i][1].type && "content" !== r.events[i][1].type) {
                                a = "paragraph" === r.events[i][1].type;
                                break
                            }
                        return function(t) {
                            return !r.parser.lazy[r.now().line] && (r.interrupt || a) ? (e.enter("setextHeadingLine"), e.enter("setextHeadingLineSequence"), o = t, function t(n) {
                                return n === o ? (e.consume(n), t) : (e.exit("setextHeadingLineSequence"), (0, F.f)(e, l, "lineSuffix")(n))
                            }(t)) : n(t)
                        };

                        function l(r) {
                            return null === r || (0, P.Ch)(r) ? (e.exit("setextHeadingLine"), t(r)) : n(r)
                        }
                    },
                    resolveTo: function(e, t) {
                        let n = e.length,
                            r, i, o;
                        for (; n--;)
                            if ("enter" === e[n][0]) {
                                if ("content" === e[n][1].type) {
                                    r = n;
                                    break
                                }
                                "paragraph" === e[n][1].type && (i = n)
                            } else "content" === e[n][1].type && e.splice(n, 1), o || "definition" !== e[n][1].type || (o = n);
                        let a = {
                            type: "setextHeading",
                            start: Object.assign({}, e[i][1].start),
                            end: Object.assign({}, e[e.length - 1][1].end)
                        };
                        return e[i][1].type = "setextHeadingText", o ? (e.splice(i, 0, ["enter", a, t]), e.splice(o + 1, 0, ["exit", e[r][1], t]), e[r][1].end = Object.assign({}, e[o][1].end)) : e[r][1] = a, e.push(["exit", a, t]), e
                    }
                },
                em = ["address", "article", "aside", "base", "basefont", "blockquote", "body", "caption", "center", "col", "colgroup", "dd", "details", "dialog", "dir", "div", "dl", "dt", "fieldset", "figcaption", "figure", "footer", "form", "frame", "frameset", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hr", "html", "iframe", "legend", "li", "link", "main", "menu", "menuitem", "nav", "noframes", "ol", "optgroup", "option", "p", "param", "section", "summary", "table", "tbody", "td", "tfoot", "th", "thead", "title", "tr", "track", "ul"],
                eh = ["pre", "script", "style", "textarea"],
                eb = {
                    tokenize: function(e, t, n) {
                        return function(r) {
                            return e.exit("htmlFlowData"), e.enter("lineEndingBlank"), e.consume(r), e.exit("lineEndingBlank"), e.attempt(U.w, t, n)
                        }
                    },
                    partial: !0
                },
                ey = {
                    name: "codeFenced",
                    tokenize: function(e, t, n) {
                        let r = this,
                            i = {
                                tokenize: function(e, t, n) {
                                    let r = 0;
                                    return (0, F.f)(e, function(t) {
                                        return e.enter("codeFencedFence"), e.enter("codeFencedFenceSequence"),
                                            function t(o) {
                                                return o === c ? (e.consume(o), r++, t) : r < s ? n(o) : (e.exit("codeFencedFenceSequence"), (0, F.f)(e, i, "whitespace")(o))
                                            }(t)
                                    }, "linePrefix", this.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4);

                                    function i(r) {
                                        return null === r || (0, P.Ch)(r) ? (e.exit("codeFencedFence"), t(r)) : n(r)
                                    }
                                },
                                partial: !0
                            },
                            o = {
                                tokenize: function(e, t, n) {
                                    let r = this;
                                    return function(t) {
                                        return e.enter("lineEnding"), e.consume(t), e.exit("lineEnding"), i
                                    };

                                    function i(e) {
                                        return r.parser.lazy[r.now().line] ? n(e) : t(e)
                                    }
                                },
                                partial: !0
                            },
                            a = this.events[this.events.length - 1],
                            l = a && "linePrefix" === a[1].type ? a[2].sliceSerialize(a[1], !0).length : 0,
                            s = 0,
                            c;
                        return function(t) {
                            return e.enter("codeFenced"), e.enter("codeFencedFence"), e.enter("codeFencedFenceSequence"), c = t,
                                function t(r) {
                                    return r === c ? (e.consume(r), s++, t) : (e.exit("codeFencedFenceSequence"), s < 3 ? n(r) : (0, F.f)(e, u, "whitespace")(r))
                                }(t)
                        };

                        function u(t) {
                            return null === t || (0, P.Ch)(t) ? f(t) : (e.enter("codeFencedFenceInfo"), e.enter("chunkString", {
                                contentType: "string"
                            }), function t(r) {
                                return null === r || (0, P.z3)(r) ? (e.exit("chunkString"), e.exit("codeFencedFenceInfo"), (0, F.f)(e, d, "whitespace")(r)) : 96 === r && r === c ? n(r) : (e.consume(r), t)
                            }(t))
                        }

                        function d(t) {
                            return null === t || (0, P.Ch)(t) ? f(t) : (e.enter("codeFencedFenceMeta"), e.enter("chunkString", {
                                contentType: "string"
                            }), function t(r) {
                                return null === r || (0, P.Ch)(r) ? (e.exit("chunkString"), e.exit("codeFencedFenceMeta"), f(r)) : 96 === r && r === c ? n(r) : (e.consume(r), t)
                            }(t))
                        }

                        function f(n) {
                            return e.exit("codeFencedFence"), r.interrupt ? t(n) : function t(n) {
                                return null === n ? p(n) : (0, P.Ch)(n) ? e.attempt(o, e.attempt(i, p, l ? (0, F.f)(e, t, "linePrefix", l + 1) : t), p)(n) : (e.enter("codeFlowValue"), function n(r) {
                                    return null === r || (0, P.Ch)(r) ? (e.exit("codeFlowValue"), t(r)) : (e.consume(r), n)
                                }(n))
                            }(n)
                        }

                        function p(n) {
                            return e.exit("codeFenced"), t(n)
                        }
                    },
                    concrete: !0
                };
            var ev = n(36365);
            let ek = {
                    name: "characterReference",
                    tokenize: function(e, t, n) {
                        let r = this,
                            i = 0,
                            o, a;
                        return function(t) {
                            return e.enter("characterReference"), e.enter("characterReferenceMarker"), e.consume(t), e.exit("characterReferenceMarker"), l
                        };

                        function l(t) {
                            return 35 === t ? (e.enter("characterReferenceMarkerNumeric"), e.consume(t), e.exit("characterReferenceMarkerNumeric"), s) : (e.enter("characterReferenceValue"), o = 31, a = P.H$, c(t))
                        }

                        function s(t) {
                            return 88 === t || 120 === t ? (e.enter("characterReferenceMarkerHexadecimal"), e.consume(t), e.exit("characterReferenceMarkerHexadecimal"), e.enter("characterReferenceValue"), o = 6, a = P.AF, c) : (e.enter("characterReferenceValue"), o = 7, a = P.pY, c(t))
                        }

                        function c(l) {
                            let s;
                            return 59 === l && i ? (s = e.exit("characterReferenceValue"), a !== P.H$ || (0, ev.T)(r.sliceSerialize(s))) ? (e.enter("characterReferenceMarker"), e.consume(l), e.exit("characterReferenceMarker"), e.exit("characterReference"), t) : n(l) : a(l) && i++ < o ? (e.consume(l), c) : n(l)
                        }
                    }
                },
                ex = {
                    name: "characterEscape",
                    tokenize: function(e, t, n) {
                        return function(t) {
                            return e.enter("characterEscape"), e.enter("escapeMarker"), e.consume(t), e.exit("escapeMarker"), r
                        };

                        function r(r) {
                            return (0, P.sR)(r) ? (e.enter("characterEscapeValue"), e.consume(r), e.exit("characterEscapeValue"), e.exit("characterEscape"), t) : n(r)
                        }
                    }
                },
                e_ = {
                    name: "lineEnding",
                    tokenize: function(e, t) {
                        return function(n) {
                            return e.enter("lineEnding"), e.consume(n), e.exit("lineEnding"), (0, F.f)(e, t, "linePrefix")
                        }
                    }
                },
                ew = {
                    name: "labelEnd",
                    tokenize: function(e, t, n) {
                        let r = this,
                            i = r.events.length,
                            o, a;
                        for (; i--;)
                            if (("labelImage" === r.events[i][1].type || "labelLink" === r.events[i][1].type) && !r.events[i][1]._balanced) {
                                o = r.events[i][1];
                                break
                            }
                        return function(t) {
                            return o ? o._inactive ? s(t) : (a = r.parser.defined.includes((0, eu.d)(r.sliceSerialize({
                                start: o.end,
                                end: r.now()
                            }))), e.enter("labelEnd"), e.enter("labelMarker"), e.consume(t), e.exit("labelMarker"), e.exit("labelEnd"), l) : n(t)
                        };

                        function l(n) {
                            return 40 === n ? e.attempt(eE, t, a ? t : s)(n) : 91 === n ? e.attempt(eS, t, a ? e.attempt(eN, t, s) : s)(n) : a ? t(n) : s(n)
                        }

                        function s(e) {
                            return o._balanced = !0, n(e)
                        }
                    },
                    resolveTo: function(e, t) {
                        let n = e.length,
                            r = 0,
                            i, o, a, l;
                        for (; n--;)
                            if (i = e[n][1], o) {
                                if ("link" === i.type || "labelLink" === i.type && i._inactive) break;
                                "enter" === e[n][0] && "labelLink" === i.type && (i._inactive = !0)
                            } else if (a) {
                            if ("enter" === e[n][0] && ("labelImage" === i.type || "labelLink" === i.type) && !i._balanced && (o = n, "labelLink" !== i.type)) {
                                r = 2;
                                break
                            }
                        } else "labelEnd" === i.type && (a = n);
                        let s = {
                                type: "labelLink" === e[o][1].type ? "link" : "image",
                                start: Object.assign({}, e[o][1].start),
                                end: Object.assign({}, e[e.length - 1][1].end)
                            },
                            c = {
                                type: "label",
                                start: Object.assign({}, e[o][1].start),
                                end: Object.assign({}, e[a][1].end)
                            },
                            u = {
                                type: "labelText",
                                start: Object.assign({}, e[o + r + 2][1].end),
                                end: Object.assign({}, e[a - 2][1].start)
                            };
                        return l = [
                            ["enter", s, t],
                            ["enter", c, t]
                        ], l = (0, z.V)(l, e.slice(o + 1, o + r + 3)), l = (0, z.V)(l, [
                            ["enter", u, t]
                        ]), l = (0, z.V)(l, (0, ee.C)(t.parser.constructs.insideSpan.null, e.slice(o + r + 4, a - 3), t)), l = (0, z.V)(l, [
                            ["exit", u, t], e[a - 2], e[a - 1],
                            ["exit", c, t]
                        ]), l = (0, z.V)(l, e.slice(a + 1)), l = (0, z.V)(l, [
                            ["exit", s, t]
                        ]), (0, z.d)(e, o, e.length, l), e
                    },
                    resolveAll: function(e) {
                        let t = -1,
                            n;
                        for (; ++t < e.length;)("labelImage" === (n = e[t][1]).type || "labelLink" === n.type || "labelEnd" === n.type) && (e.splice(t + 1, "labelImage" === n.type ? 4 : 2), n.type = "data", t++);
                        return e
                    }
                },
                eE = {
                    tokenize: function(e, t, n) {
                        return function(t) {
                            return e.enter("resource"), e.enter("resourceMarker"), e.consume(t), e.exit("resourceMarker"), ec(e, r)
                        };

                        function r(t) {
                            return 41 === t ? a(t) : ea(e, i, n, "resourceDestination", "resourceDestinationLiteral", "resourceDestinationLiteralMarker", "resourceDestinationRaw", "resourceDestinationString", 32)(t)
                        }

                        function i(t) {
                            return (0, P.z3)(t) ? ec(e, o)(t) : a(t)
                        }

                        function o(t) {
                            return 34 === t || 39 === t || 40 === t ? es(e, ec(e, a), n, "resourceTitle", "resourceTitleMarker", "resourceTitleString")(t) : a(t)
                        }

                        function a(r) {
                            return 41 === r ? (e.enter("resourceMarker"), e.consume(r), e.exit("resourceMarker"), e.exit("resource"), t) : n(r)
                        }
                    }
                },
                eS = {
                    tokenize: function(e, t, n) {
                        let r = this;
                        return function(t) {
                            return el.call(r, e, i, n, "reference", "referenceMarker", "referenceString")(t)
                        };

                        function i(e) {
                            return r.parser.defined.includes((0, eu.d)(r.sliceSerialize(r.events[r.events.length - 1][1]).slice(1, -1))) ? t(e) : n(e)
                        }
                    }
                },
                eN = {
                    tokenize: function(e, t, n) {
                        return function(t) {
                            return e.enter("reference"), e.enter("referenceMarker"), e.consume(t), e.exit("referenceMarker"), r
                        };

                        function r(r) {
                            return 93 === r ? (e.enter("referenceMarker"), e.consume(r), e.exit("referenceMarker"), e.exit("reference"), t) : n(r)
                        }
                    }
                },
                eC = {
                    name: "labelStartImage",
                    tokenize: function(e, t, n) {
                        let r = this;
                        return function(t) {
                            return e.enter("labelImage"), e.enter("labelImageMarker"), e.consume(t), e.exit("labelImageMarker"), i
                        };

                        function i(t) {
                            return 91 === t ? (e.enter("labelMarker"), e.consume(t), e.exit("labelMarker"), e.exit("labelImage"), o) : n(t)
                        }

                        function o(e) {
                            return 94 === e && "_hiddenFootnoteSupport" in r.parser.constructs ? n(e) : t(e)
                        }
                    },
                    resolveAll: ew.resolveAll
                };
            var eO = n(85618);
            let eA = {
                name: "attention",
                tokenize: function(e, t) {
                    let n = this.parser.constructs.attentionMarkers.null,
                        r = this.previous,
                        i = (0, eO.r)(r),
                        o;
                    return function(a) {
                        return e.enter("attentionSequence"), o = a,
                            function a(l) {
                                if (l === o) return e.consume(l), a;
                                let s = e.exit("attentionSequence"),
                                    c = (0, eO.r)(l),
                                    u = !c || 2 === c && i || n.includes(l),
                                    d = !i || 2 === i && c || n.includes(r);
                                return s._open = Boolean(42 === o ? u : u && (i || !d)), s._close = Boolean(42 === o ? d : d && (c || !u)), t(l)
                            }(a)
                    }
                },
                resolveAll: function(e, t) {
                    let n = -1,
                        r, i, o, a, l, s, c, u;
                    for (; ++n < e.length;)
                        if ("enter" === e[n][0] && "attentionSequence" === e[n][1].type && e[n][1]._close) {
                            for (r = n; r--;)
                                if ("exit" === e[r][0] && "attentionSequence" === e[r][1].type && e[r][1]._open && t.sliceSerialize(e[r][1]).charCodeAt(0) === t.sliceSerialize(e[n][1]).charCodeAt(0)) {
                                    if ((e[r][1]._close || e[n][1]._open) && (e[n][1].end.offset - e[n][1].start.offset) % 3 && !((e[r][1].end.offset - e[r][1].start.offset + e[n][1].end.offset - e[n][1].start.offset) % 3)) continue;
                                    s = e[r][1].end.offset - e[r][1].start.offset > 1 && e[n][1].end.offset - e[n][1].start.offset > 1 ? 2 : 1;
                                    let d = Object.assign({}, e[r][1].end),
                                        f = Object.assign({}, e[n][1].start);
                                    eT(d, -s), eT(f, s), a = {
                                        type: s > 1 ? "strongSequence" : "emphasisSequence",
                                        start: d,
                                        end: Object.assign({}, e[r][1].end)
                                    }, l = {
                                        type: s > 1 ? "strongSequence" : "emphasisSequence",
                                        start: Object.assign({}, e[n][1].start),
                                        end: f
                                    }, o = {
                                        type: s > 1 ? "strongText" : "emphasisText",
                                        start: Object.assign({}, e[r][1].end),
                                        end: Object.assign({}, e[n][1].start)
                                    }, i = {
                                        type: s > 1 ? "strong" : "emphasis",
                                        start: Object.assign({}, a.start),
                                        end: Object.assign({}, l.end)
                                    }, e[r][1].end = Object.assign({}, a.start), e[n][1].start = Object.assign({}, l.end), c = [], e[r][1].end.offset - e[r][1].start.offset && (c = (0, z.V)(c, [
                                        ["enter", e[r][1], t],
                                        ["exit", e[r][1], t]
                                    ])), c = (0, z.V)(c, [
                                        ["enter", i, t],
                                        ["enter", a, t],
                                        ["exit", a, t],
                                        ["enter", o, t]
                                    ]), c = (0, z.V)(c, (0, ee.C)(t.parser.constructs.insideSpan.null, e.slice(r + 1, n), t)), c = (0, z.V)(c, [
                                        ["exit", o, t],
                                        ["enter", l, t],
                                        ["exit", l, t],
                                        ["exit", i, t]
                                    ]), e[n][1].end.offset - e[n][1].start.offset ? (u = 2, c = (0, z.V)(c, [
                                        ["enter", e[n][1], t],
                                        ["exit", e[n][1], t]
                                    ])) : u = 0, (0, z.d)(e, r - 1, n - r + 3, c), n = r + c.length - u - 2;
                                    break
                                }
                        }
                    for (n = -1; ++n < e.length;) "attentionSequence" === e[n][1].type && (e[n][1].type = "data");
                    return e
                }
            };

            function eT(e, t) {
                e.column += t, e.offset += t, e._bufferIndex += t
            }
            let eM = {
                    name: "labelStartLink",
                    tokenize: function(e, t, n) {
                        let r = this;
                        return function(t) {
                            return e.enter("labelLink"), e.enter("labelMarker"), e.consume(t), e.exit("labelMarker"), e.exit("labelLink"), i
                        };

                        function i(e) {
                            return 94 === e && "_hiddenFootnoteSupport" in r.parser.constructs ? n(e) : t(e)
                        }
                    },
                    resolveAll: ew.resolveAll
                },
                eI = {
                    42: en,
                    43: en,
                    45: en,
                    48: en,
                    49: en,
                    50: en,
                    51: en,
                    52: en,
                    53: en,
                    54: en,
                    55: en,
                    56: en,
                    57: en,
                    62: eo
                },
                eD = {
                    91: {
                        name: "definition",
                        tokenize: function(e, t, n) {
                            let r = this,
                                i;
                            return function(t) {
                                return e.enter("definition"), el.call(r, e, o, n, "definitionLabel", "definitionLabelMarker", "definitionLabelString")(t)
                            };

                            function o(t) {
                                return (i = (0, eu.d)(r.sliceSerialize(r.events[r.events.length - 1][1]).slice(1, -1)), 58 === t) ? (e.enter("definitionMarker"), e.consume(t), e.exit("definitionMarker"), ec(e, ea(e, e.attempt(ed, (0, F.f)(e, a, "whitespace"), (0, F.f)(e, a, "whitespace")), n, "definitionDestination", "definitionDestinationLiteral", "definitionDestinationLiteralMarker", "definitionDestinationRaw", "definitionDestinationString"))) : n(t)
                            }

                            function a(o) {
                                return null === o || (0, P.Ch)(o) ? (e.exit("definition"), r.parser.defined.includes(i) || r.parser.defined.push(i), t(o)) : n(o)
                            }
                        }
                    }
                },
                eL = {
                    [-2]: ef,
                    [-1]: ef,
                    32: ef
                },
                eR = {
                    35: {
                        name: "headingAtx",
                        tokenize: function(e, t, n) {
                            let r = this,
                                i = 0;
                            return function(o) {
                                return e.enter("atxHeading"), e.enter("atxHeadingSequence"),
                                    function o(a) {
                                        return 35 === a && i++ < 6 ? (e.consume(a), o) : null === a || (0, P.z3)(a) ? (e.exit("atxHeadingSequence"), r.interrupt ? t(a) : function n(r) {
                                            return 35 === r ? (e.enter("atxHeadingSequence"), function t(r) {
                                                return 35 === r ? (e.consume(r), t) : (e.exit("atxHeadingSequence"), n(r))
                                            }(r)) : null === r || (0, P.Ch)(r) ? (e.exit("atxHeading"), t(r)) : (0, P.xz)(r) ? (0, F.f)(e, n, "whitespace")(r) : (e.enter("atxHeadingText"), function t(r) {
                                                return null === r || 35 === r || (0, P.z3)(r) ? (e.exit("atxHeadingText"), n(r)) : (e.consume(r), t)
                                            }(r))
                                        }(a)) : n(a)
                                    }(o)
                            }
                        },
                        resolve: function(e, t) {
                            let n = e.length - 2,
                                r = 3,
                                i, o;
                            return "whitespace" === e[r][1].type && (r += 2), n - 2 > r && "whitespace" === e[n][1].type && (n -= 2), "atxHeadingSequence" === e[n][1].type && (r === n - 1 || n - 4 > r && "whitespace" === e[n - 2][1].type) && (n -= r + 1 === n ? 2 : 4), n > r && (i = {
                                type: "atxHeadingText",
                                start: e[r][1].start,
                                end: e[n][1].end
                            }, o = {
                                type: "chunkText",
                                start: e[r][1].start,
                                end: e[n][1].end,
                                contentType: "text"
                            }, (0, z.d)(e, r, n - r + 1, [
                                ["enter", i, t],
                                ["enter", o, t],
                                ["exit", o, t],
                                ["exit", i, t]
                            ])), e
                        }
                    },
                    42: et,
                    45: [eg, et],
                    60: {
                        name: "htmlFlow",
                        tokenize: function(e, t, n) {
                            let r = this,
                                i, o, a, l, s;
                            return function(t) {
                                return e.enter("htmlFlow"), e.enter("htmlFlowData"), e.consume(t), c
                            };

                            function c(l) {
                                return 33 === l ? (e.consume(l), u) : 47 === l ? (e.consume(l), p) : 63 === l ? (e.consume(l), i = 3, r.interrupt ? t : M) : (0, P.jv)(l) ? (e.consume(l), a = String.fromCharCode(l), o = !0, g) : n(l)
                            }

                            function u(o) {
                                return 45 === o ? (e.consume(o), i = 2, d) : 91 === o ? (e.consume(o), i = 5, a = "CDATA[", l = 0, f) : (0, P.jv)(o) ? (e.consume(o), i = 4, r.interrupt ? t : M) : n(o)
                            }

                            function d(i) {
                                return 45 === i ? (e.consume(i), r.interrupt ? t : M) : n(i)
                            }

                            function f(i) {
                                return i === a.charCodeAt(l++) ? (e.consume(i), l === a.length ? r.interrupt ? t : E : f) : n(i)
                            }

                            function p(t) {
                                return (0, P.jv)(t) ? (e.consume(t), a = String.fromCharCode(t), g) : n(t)
                            }

                            function g(l) {
                                if (null === l || 47 === l || 62 === l || (0, P.z3)(l)) return 47 !== l && o && eh.includes(a.toLowerCase()) ? (i = 1, r.interrupt ? t(l) : E(l)) : em.includes(a.toLowerCase()) ? (i = 6, 47 === l) ? (e.consume(l), m) : r.interrupt ? t(l) : E(l) : (i = 7, r.interrupt && !r.parser.lazy[r.now().line] ? n(l) : o ? h(l) : function t(n) {
                                    return (0, P.xz)(n) ? (e.consume(n), t) : _(n)
                                }(l));
                                return 45 === l || (0, P.H$)(l) ? (e.consume(l), a += String.fromCharCode(l), g) : n(l)
                            }

                            function m(i) {
                                return 62 === i ? (e.consume(i), r.interrupt ? t : E) : n(i)
                            }

                            function h(t) {
                                return 47 === t ? (e.consume(t), _) : 58 === t || 95 === t || (0, P.jv)(t) ? (e.consume(t), b) : (0, P.xz)(t) ? (e.consume(t), h) : _(t)
                            }

                            function b(t) {
                                return 45 === t || 46 === t || 58 === t || 95 === t || (0, P.H$)(t) ? (e.consume(t), b) : y(t)
                            }

                            function y(t) {
                                return 61 === t ? (e.consume(t), v) : (0, P.xz)(t) ? (e.consume(t), y) : h(t)
                            }

                            function v(t) {
                                return null === t || 60 === t || 61 === t || 62 === t || 96 === t ? n(t) : 34 === t || 39 === t ? (e.consume(t), s = t, k) : (0, P.xz)(t) ? (e.consume(t), v) : (s = null, function t(n) {
                                    return null === n || 34 === n || 39 === n || 60 === n || 61 === n || 62 === n || 96 === n || (0, P.z3)(n) ? y(n) : (e.consume(n), t)
                                }(t))
                            }

                            function k(t) {
                                return null === t || (0, P.Ch)(t) ? n(t) : t === s ? (e.consume(t), x) : (e.consume(t), k)
                            }

                            function x(e) {
                                return 47 === e || 62 === e || (0, P.xz)(e) ? h(e) : n(e)
                            }

                            function _(t) {
                                return 62 === t ? (e.consume(t), w) : n(t)
                            }

                            function w(t) {
                                return (0, P.xz)(t) ? (e.consume(t), w) : null === t || (0, P.Ch)(t) ? E(t) : n(t)
                            }

                            function E(t) {
                                return 45 === t && 2 === i ? (e.consume(t), C) : 60 === t && 1 === i ? (e.consume(t), O) : 62 === t && 4 === i ? (e.consume(t), I) : 63 === t && 3 === i ? (e.consume(t), M) : 93 === t && 5 === i ? (e.consume(t), T) : (0, P.Ch)(t) && (6 === i || 7 === i) ? e.check(eb, I, S)(t) : null === t || (0, P.Ch)(t) ? S(t) : (e.consume(t), E)
                            }

                            function S(t) {
                                return e.exit("htmlFlowData"),
                                    function t(n) {
                                        return null === n ? D(n) : (0, P.Ch)(n) ? e.attempt({
                                            tokenize: N,
                                            partial: !0
                                        }, t, D)(n) : (e.enter("htmlFlowData"), E(n))
                                    }(t)
                            }

                            function N(e, t, n) {
                                return function(t) {
                                    return e.enter("lineEnding"), e.consume(t), e.exit("lineEnding"), i
                                };

                                function i(e) {
                                    return r.parser.lazy[r.now().line] ? n(e) : t(e)
                                }
                            }

                            function C(t) {
                                return 45 === t ? (e.consume(t), M) : E(t)
                            }

                            function O(t) {
                                return 47 === t ? (e.consume(t), a = "", A) : E(t)
                            }

                            function A(t) {
                                return 62 === t && eh.includes(a.toLowerCase()) ? (e.consume(t), I) : (0, P.jv)(t) && a.length < 8 ? (e.consume(t), a += String.fromCharCode(t), A) : E(t)
                            }

                            function T(t) {
                                return 93 === t ? (e.consume(t), M) : E(t)
                            }

                            function M(t) {
                                return 62 === t ? (e.consume(t), I) : 45 === t && 2 === i ? (e.consume(t), M) : E(t)
                            }

                            function I(t) {
                                return null === t || (0, P.Ch)(t) ? (e.exit("htmlFlowData"), D(t)) : (e.consume(t), I)
                            }

                            function D(n) {
                                return e.exit("htmlFlow"), t(n)
                            }
                        },
                        resolveTo: function(e) {
                            let t = e.length;
                            for (; t-- && ("enter" !== e[t][0] || "htmlFlow" !== e[t][1].type););
                            return t > 1 && "linePrefix" === e[t - 2][1].type && (e[t][1].start = e[t - 2][1].start, e[t + 1][1].start = e[t - 2][1].start, e.splice(t - 2, 2)), e
                        },
                        concrete: !0
                    },
                    61: eg,
                    95: et,
                    96: ey,
                    126: ey
                },
                eF = {
                    38: ek,
                    92: ex
                },
                eP = {
                    [-5]: e_,
                    [-4]: e_,
                    [-3]: e_,
                    33: eC,
                    38: ek,
                    42: eA,
                    60: [{
                        name: "autolink",
                        tokenize: function(e, t, n) {
                            let r = 1;
                            return function(t) {
                                return e.enter("autolink"), e.enter("autolinkMarker"), e.consume(t), e.exit("autolinkMarker"), e.enter("autolinkProtocol"), i
                            };

                            function i(t) {
                                return (0, P.jv)(t) ? (e.consume(t), o) : (0, P.n9)(t) ? l(t) : n(t)
                            }

                            function o(t) {
                                return 43 === t || 45 === t || 46 === t || (0, P.H$)(t) ? function t(n) {
                                    return 58 === n ? (e.consume(n), a) : (43 === n || 45 === n || 46 === n || (0, P.H$)(n)) && r++ < 32 ? (e.consume(n), t) : l(n)
                                }(t) : l(t)
                            }

                            function a(t) {
                                return 62 === t ? (e.exit("autolinkProtocol"), c(t)) : null === t || 32 === t || 60 === t || (0, P.Av)(t) ? n(t) : (e.consume(t), a)
                            }

                            function l(t) {
                                return 64 === t ? (e.consume(t), r = 0, s) : (0, P.n9)(t) ? (e.consume(t), l) : n(t)
                            }

                            function s(t) {
                                return (0, P.H$)(t) ? function t(i) {
                                    return 46 === i ? (e.consume(i), r = 0, s) : 62 === i ? (e.exit("autolinkProtocol").type = "autolinkEmail", c(i)) : function i(o) {
                                        return (45 === o || (0, P.H$)(o)) && r++ < 63 ? (e.consume(o), 45 === o ? i : t) : n(o)
                                    }(i)
                                }(t) : n(t)
                            }

                            function c(n) {
                                return e.enter("autolinkMarker"), e.consume(n), e.exit("autolinkMarker"), e.exit("autolink"), t
                            }
                        }
                    }, {
                        name: "htmlText",
                        tokenize: function(e, t, n) {
                            let r = this,
                                i, o, a, l;
                            return function(t) {
                                return e.enter("htmlText"), e.enter("htmlTextData"), e.consume(t), s
                            };

                            function s(t) {
                                return 33 === t ? (e.consume(t), c) : 47 === t ? (e.consume(t), _) : 63 === t ? (e.consume(t), k) : (0, P.jv)(t) ? (e.consume(t), E) : n(t)
                            }

                            function c(t) {
                                return 45 === t ? (e.consume(t), u) : 91 === t ? (e.consume(t), o = "CDATA[", a = 0, m) : (0, P.jv)(t) ? (e.consume(t), v) : n(t)
                            }

                            function u(t) {
                                return 45 === t ? (e.consume(t), d) : n(t)
                            }

                            function d(t) {
                                return null === t || 62 === t ? n(t) : 45 === t ? (e.consume(t), f) : p(t)
                            }

                            function f(e) {
                                return null === e || 62 === e ? n(e) : p(e)
                            }

                            function p(t) {
                                return null === t ? n(t) : 45 === t ? (e.consume(t), g) : (0, P.Ch)(t) ? (l = p, M(t)) : (e.consume(t), p)
                            }

                            function g(t) {
                                return 45 === t ? (e.consume(t), D) : p(t)
                            }

                            function m(t) {
                                return t === o.charCodeAt(a++) ? (e.consume(t), a === o.length ? h : m) : n(t)
                            }

                            function h(t) {
                                return null === t ? n(t) : 93 === t ? (e.consume(t), b) : (0, P.Ch)(t) ? (l = h, M(t)) : (e.consume(t), h)
                            }

                            function b(t) {
                                return 93 === t ? (e.consume(t), y) : h(t)
                            }

                            function y(t) {
                                return 62 === t ? D(t) : 93 === t ? (e.consume(t), y) : h(t)
                            }

                            function v(t) {
                                return null === t || 62 === t ? D(t) : (0, P.Ch)(t) ? (l = v, M(t)) : (e.consume(t), v)
                            }

                            function k(t) {
                                return null === t ? n(t) : 63 === t ? (e.consume(t), x) : (0, P.Ch)(t) ? (l = k, M(t)) : (e.consume(t), k)
                            }

                            function x(e) {
                                return 62 === e ? D(e) : k(e)
                            }

                            function _(t) {
                                return (0, P.jv)(t) ? (e.consume(t), w) : n(t)
                            }

                            function w(t) {
                                return 45 === t || (0, P.H$)(t) ? (e.consume(t), w) : function t(n) {
                                    return (0, P.Ch)(n) ? (l = t, M(n)) : (0, P.xz)(n) ? (e.consume(n), t) : D(n)
                                }(t)
                            }

                            function E(t) {
                                return 45 === t || (0, P.H$)(t) ? (e.consume(t), E) : 47 === t || 62 === t || (0, P.z3)(t) ? S(t) : n(t)
                            }

                            function S(t) {
                                return 47 === t ? (e.consume(t), D) : 58 === t || 95 === t || (0, P.jv)(t) ? (e.consume(t), N) : (0, P.Ch)(t) ? (l = S, M(t)) : (0, P.xz)(t) ? (e.consume(t), S) : D(t)
                            }

                            function N(t) {
                                return 45 === t || 46 === t || 58 === t || 95 === t || (0, P.H$)(t) ? (e.consume(t), N) : function t(n) {
                                    return 61 === n ? (e.consume(n), C) : (0, P.Ch)(n) ? (l = t, M(n)) : (0, P.xz)(n) ? (e.consume(n), t) : S(n)
                                }(t)
                            }

                            function C(t) {
                                return null === t || 60 === t || 61 === t || 62 === t || 96 === t ? n(t) : 34 === t || 39 === t ? (e.consume(t), i = t, O) : (0, P.Ch)(t) ? (l = C, M(t)) : (0, P.xz)(t) ? (e.consume(t), C) : (e.consume(t), i = void 0, T)
                            }

                            function O(t) {
                                return t === i ? (e.consume(t), A) : null === t ? n(t) : (0, P.Ch)(t) ? (l = O, M(t)) : (e.consume(t), O)
                            }

                            function A(e) {
                                return 62 === e || 47 === e || (0, P.z3)(e) ? S(e) : n(e)
                            }

                            function T(t) {
                                return null === t || 34 === t || 39 === t || 60 === t || 61 === t || 96 === t ? n(t) : 62 === t || (0, P.z3)(t) ? S(t) : (e.consume(t), T)
                            }

                            function M(t) {
                                return e.exit("htmlTextData"), e.enter("lineEnding"), e.consume(t), e.exit("lineEnding"), (0, F.f)(e, I, "linePrefix", r.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4)
                            }

                            function I(t) {
                                return e.enter("htmlTextData"), l(t)
                            }

                            function D(r) {
                                return 62 === r ? (e.consume(r), e.exit("htmlTextData"), e.exit("htmlText"), t) : n(r)
                            }
                        }
                    }],
                    91: eM,
                    92: [{
                        name: "hardBreakEscape",
                        tokenize: function(e, t, n) {
                            return function(t) {
                                return e.enter("hardBreakEscape"), e.enter("escapeMarker"), e.consume(t), r
                            };

                            function r(r) {
                                return (0, P.Ch)(r) ? (e.exit("escapeMarker"), e.exit("hardBreakEscape"), t(r)) : n(r)
                            }
                        }
                    }, ex],
                    93: ew,
                    95: eA,
                    96: {
                        name: "codeText",
                        tokenize: function(e, t, n) {
                            let r = 0,
                                i, o;
                            return function(t) {
                                return e.enter("codeText"), e.enter("codeTextSequence"),
                                    function t(n) {
                                        return 96 === n ? (e.consume(n), r++, t) : (e.exit("codeTextSequence"), a(n))
                                    }(t)
                            };

                            function a(s) {
                                return null === s ? n(s) : 96 === s ? (o = e.enter("codeTextSequence"), i = 0, function n(a) {
                                    return 96 === a ? (e.consume(a), i++, n) : i === r ? (e.exit("codeTextSequence"), e.exit("codeText"), t(a)) : (o.type = "codeTextData", l(a))
                                }(s)) : 32 === s ? (e.enter("space"), e.consume(s), e.exit("space"), a) : (0, P.Ch)(s) ? (e.enter("lineEnding"), e.consume(s), e.exit("lineEnding"), a) : (e.enter("codeTextData"), l(s))
                            }

                            function l(t) {
                                return null === t || 32 === t || 96 === t || (0, P.Ch)(t) ? (e.exit("codeTextData"), a(t)) : (e.consume(t), l)
                            }
                        },
                        resolve: function(e) {
                            let t = e.length - 4,
                                n = 3,
                                r, i;
                            if (("lineEnding" === e[n][1].type || "space" === e[n][1].type) && ("lineEnding" === e[t][1].type || "space" === e[t][1].type)) {
                                for (r = n; ++r < t;)
                                    if ("codeTextData" === e[r][1].type) {
                                        e[n][1].type = "codeTextPadding", e[t][1].type = "codeTextPadding", n += 2, t -= 2;
                                        break
                                    }
                            }
                            for (r = n - 1, t++; ++r <= t;) void 0 === i ? r !== t && "lineEnding" !== e[r][1].type && (i = r) : (r === t || "lineEnding" === e[r][1].type) && (e[i][1].type = "codeTextData", r !== i + 2 && (e[i][1].end = e[r - 1][1].end, e.splice(i + 2, r - i - 2), t -= r - i - 2, r = i + 2), i = void 0);
                            return e
                        },
                        previous: function(e) {
                            return 96 !== e || "characterEscape" === this.events[this.events.length - 1][1].type
                        }
                    }
                },
                eB = {
                    null: [eA, W]
                },
                ez = {
                    null: [42, 95]
                },
                ej = {
                    null: []
                },
                e$ = /[\0\t\n\r]/g;
            var eU = n(92791),
                eH = n(12006);
            let eq = {}.hasOwnProperty,
                eK = function(e, t, n) {
                    "string" != typeof t && (n = t, t = void 0);
                    let i, o, a, s;
                    return (function(e = {}) {
                        let t = function e(t, n) {
                                let r = -1;
                                for (; ++r < n.length;) {
                                    let i = n[r];
                                    Array.isArray(i) ? e(t, i) : eV(t, i)
                                }
                                return t
                            }({
                                transforms: [],
                                canContainEols: ["emphasis", "fragment", "heading", "paragraph", "strong"],
                                enter: {
                                    autolink: s(_),
                                    autolinkProtocol: g,
                                    autolinkEmail: g,
                                    atxHeading: s(v),
                                    blockQuote: s(function() {
                                        return {
                                            type: "blockquote",
                                            children: []
                                        }
                                    }),
                                    characterEscape: g,
                                    characterReference: g,
                                    codeFenced: s(y),
                                    codeFencedFenceInfo: c,
                                    codeFencedFenceMeta: c,
                                    codeIndented: s(y, c),
                                    codeText: s(function() {
                                        return {
                                            type: "inlineCode",
                                            value: ""
                                        }
                                    }, c),
                                    codeTextData: g,
                                    data: g,
                                    codeFlowValue: g,
                                    definition: s(function() {
                                        return {
                                            type: "definition",
                                            identifier: "",
                                            label: null,
                                            title: null,
                                            url: ""
                                        }
                                    }),
                                    definitionDestinationString: c,
                                    definitionLabelString: c,
                                    definitionTitleString: c,
                                    emphasis: s(function() {
                                        return {
                                            type: "emphasis",
                                            children: []
                                        }
                                    }),
                                    hardBreakEscape: s(k),
                                    hardBreakTrailing: s(k),
                                    htmlFlow: s(x, c),
                                    htmlFlowData: g,
                                    htmlText: s(x, c),
                                    htmlTextData: g,
                                    image: s(function() {
                                        return {
                                            type: "image",
                                            title: null,
                                            url: "",
                                            alt: null
                                        }
                                    }),
                                    label: c,
                                    link: s(_),
                                    listItem: s(function(e) {
                                        return {
                                            type: "listItem",
                                            spread: e._spread,
                                            checked: null,
                                            children: []
                                        }
                                    }),
                                    listItemValue: function(e) {
                                        var t, r;
                                        if (n.expectingFirstListItemValue) {
                                            let i = this.stack[this.stack.length - 2];
                                            i.start = Number.parseInt(this.sliceSerialize(e), 10), n[r = "expectingFirstListItemValue"] = void 0
                                        }
                                    },
                                    listOrdered: s(w, function() {
                                        var e, t;
                                        n.expectingFirstListItemValue = !0
                                    }),
                                    listUnordered: s(w),
                                    paragraph: s(function() {
                                        return {
                                            type: "paragraph",
                                            children: []
                                        }
                                    }),
                                    reference: function() {
                                        var e, t;
                                        n.referenceType = "collapsed"
                                    },
                                    referenceString: c,
                                    resourceDestinationString: c,
                                    resourceTitleString: c,
                                    setextHeading: s(v),
                                    strong: s(function() {
                                        return {
                                            type: "strong",
                                            children: []
                                        }
                                    }),
                                    thematicBreak: s(function() {
                                        return {
                                            type: "thematicBreak"
                                        }
                                    })
                                },
                                exit: {
                                    atxHeading: d(),
                                    atxHeadingSequence: function(e) {
                                        let t = this.stack[this.stack.length - 1];
                                        if (!t.depth) {
                                            let n = this.sliceSerialize(e).length;
                                            t.depth = n
                                        }
                                    },
                                    autolink: d(),
                                    autolinkEmail: function(e) {
                                        m.call(this, e);
                                        let t = this.stack[this.stack.length - 1];
                                        t.url = "mailto:" + this.sliceSerialize(e)
                                    },
                                    autolinkProtocol: function(e) {
                                        m.call(this, e);
                                        let t = this.stack[this.stack.length - 1];
                                        t.url = this.sliceSerialize(e)
                                    },
                                    blockQuote: d(),
                                    characterEscapeValue: m,
                                    characterReferenceMarkerHexadecimal: b,
                                    characterReferenceMarkerNumeric: b,
                                    characterReferenceValue: function(e) {
                                        var t, r;
                                        let i = this.sliceSerialize(e),
                                            o = n.characterReferenceType,
                                            l;
                                        o ? (l = (0, eU.o)(i, "characterReferenceMarkerNumeric" === o ? 10 : 16), n[r = "characterReferenceType"] = void 0) : l = (0, ev.T)(i);
                                        let s = this.stack.pop();
                                        s.value += l, s.position.end = a(e.end)
                                    },
                                    codeFenced: d(function() {
                                        var e;
                                        let t = this.resume(),
                                            r = this.stack[this.stack.length - 1];
                                        r.value = t.replace(/^(\r?\n|\r)|(\r?\n|\r)$/g, ""), n.flowCodeInside = void 0
                                    }),
                                    codeFencedFence: function() {
                                        var e, t, r;
                                        !n.flowCodeInside && (this.buffer(), r = !0, n[t = "flowCodeInside"] = r)
                                    },
                                    codeFencedFenceInfo: function() {
                                        let e = this.resume(),
                                            t = this.stack[this.stack.length - 1];
                                        t.lang = e
                                    },
                                    codeFencedFenceMeta: function() {
                                        let e = this.resume(),
                                            t = this.stack[this.stack.length - 1];
                                        t.meta = e
                                    },
                                    codeFlowValue: m,
                                    codeIndented: d(function() {
                                        let e = this.resume(),
                                            t = this.stack[this.stack.length - 1];
                                        t.value = e.replace(/(\r?\n|\r)$/g, "")
                                    }),
                                    codeText: d(function() {
                                        let e = this.resume(),
                                            t = this.stack[this.stack.length - 1];
                                        t.value = e
                                    }),
                                    codeTextData: m,
                                    data: m,
                                    definition: d(),
                                    definitionDestinationString: function() {
                                        let e = this.resume(),
                                            t = this.stack[this.stack.length - 1];
                                        t.url = e
                                    },
                                    definitionLabelString: function(e) {
                                        let t = this.resume(),
                                            n = this.stack[this.stack.length - 1];
                                        n.label = t, n.identifier = (0, eu.d)(this.sliceSerialize(e)).toLowerCase()
                                    },
                                    definitionTitleString: function() {
                                        let e = this.resume(),
                                            t = this.stack[this.stack.length - 1];
                                        t.title = e
                                    },
                                    emphasis: d(),
                                    hardBreakEscape: d(h),
                                    hardBreakTrailing: d(h),
                                    htmlFlow: d(function() {
                                        let e = this.resume(),
                                            t = this.stack[this.stack.length - 1];
                                        t.value = e
                                    }),
                                    htmlFlowData: m,
                                    htmlText: d(function() {
                                        let e = this.resume(),
                                            t = this.stack[this.stack.length - 1];
                                        t.value = e
                                    }),
                                    htmlTextData: m,
                                    image: d(function() {
                                        var e, t, r;
                                        let i = this.stack[this.stack.length - 1];
                                        n.inReference ? (i.type += "Reference", i.referenceType = n[t = "referenceType"] || "shortcut", delete i.url, delete i.title) : (delete i.identifier, delete i.label), n.referenceType = void 0
                                    }),
                                    label: function() {
                                        var e, t;
                                        let r = this.stack[this.stack.length - 1],
                                            i = this.resume(),
                                            o = this.stack[this.stack.length - 1];
                                        n.inReference = !0, "link" === o.type ? o.children = r.children : o.alt = i
                                    },
                                    labelText: function(e) {
                                        let t = this.stack[this.stack.length - 2],
                                            n = this.sliceSerialize(e);
                                        t.label = (0, eH.v)(n), t.identifier = (0, eu.d)(n).toLowerCase()
                                    },
                                    lineEnding: function(e) {
                                        var r, i, o;
                                        let l = this.stack[this.stack.length - 1];
                                        if (n.atHardBreak) {
                                            let s = l.children[l.children.length - 1];
                                            s.position.end = a(e.end), n[i = "atHardBreak"] = void 0;
                                            return
                                        }!n.setextHeadingSlurpLineEnding && t.canContainEols.includes(l.type) && (g.call(this, e), m.call(this, e))
                                    },
                                    link: d(function() {
                                        var e, t, r;
                                        let i = this.stack[this.stack.length - 1];
                                        n.inReference ? (i.type += "Reference", i.referenceType = n[t = "referenceType"] || "shortcut", delete i.url, delete i.title) : (delete i.identifier, delete i.label), n.referenceType = void 0
                                    }),
                                    listItem: d(),
                                    listOrdered: d(),
                                    listUnordered: d(),
                                    paragraph: d(),
                                    referenceString: function(e) {
                                        var t, r;
                                        let i = this.resume(),
                                            o = this.stack[this.stack.length - 1];
                                        o.label = i, o.identifier = (0, eu.d)(this.sliceSerialize(e)).toLowerCase(), n.referenceType = "full"
                                    },
                                    resourceDestinationString: function() {
                                        let e = this.resume(),
                                            t = this.stack[this.stack.length - 1];
                                        t.url = e
                                    },
                                    resourceTitleString: function() {
                                        let e = this.resume(),
                                            t = this.stack[this.stack.length - 1];
                                        t.title = e
                                    },
                                    resource: function() {
                                        var e;
                                        n.inReference = void 0
                                    },
                                    setextHeading: d(function() {
                                        var e;
                                        n.setextHeadingSlurpLineEnding = void 0
                                    }),
                                    setextHeadingLineSequence: function(e) {
                                        let t = this.stack[this.stack.length - 1];
                                        t.depth = 61 === this.sliceSerialize(e).charCodeAt(0) ? 1 : 2
                                    },
                                    setextHeadingText: function() {
                                        var e, t;
                                        n.setextHeadingSlurpLineEnding = !0
                                    },
                                    strong: d(),
                                    thematicBreak: d()
                                }
                            }, e.mdastExtensions || []),
                            n = {};
                        return function(e) {
                            let n = {
                                    type: "root",
                                    children: []
                                },
                                l = [n],
                                s = [],
                                d = [],
                                g = {
                                    stack: l,
                                    tokenStack: s,
                                    config: t,
                                    enter: u,
                                    exit: f,
                                    buffer: c,
                                    resume: p,
                                    setData: i,
                                    getData: o
                                },
                                m = -1;
                            for (; ++m < e.length;)
                                if ("listOrdered" === e[m][1].type || "listUnordered" === e[m][1].type) {
                                    if ("enter" === e[m][0]) d.push(m);
                                    else {
                                        let h = d.pop();
                                        m = r(e, h, m)
                                    }
                                }
                            for (m = -1; ++m < e.length;) {
                                let b = t[e[m][0]];
                                eq.call(b, e[m][1].type) && b[e[m][1].type].call(Object.assign({
                                    sliceSerialize: e[m][2].sliceSerialize
                                }, g), e[m][1])
                            }
                            if (s.length > 0) {
                                let y = s[s.length - 1],
                                    v = y[1] || eZ;
                                v.call(g, void 0, y[0])
                            }
                            for (n.position = {
                                    start: a(e.length > 0 ? e[0][1].start : {
                                        line: 1,
                                        column: 1,
                                        offset: 0
                                    }),
                                    end: a(e.length > 0 ? e[e.length - 2][1].end : {
                                        line: 1,
                                        column: 1,
                                        offset: 0
                                    })
                                }, m = -1; ++m < t.transforms.length;) n = t.transforms[m](n) || n;
                            return n
                        };

                        function r(e, t, n) {
                            let r = t - 1,
                                i = -1,
                                o = !1,
                                a, l, s, c;
                            for (; ++r <= n;) {
                                let u = e[r];
                                if ("listUnordered" === u[1].type || "listOrdered" === u[1].type || "blockQuote" === u[1].type ? ("enter" === u[0] ? i++ : i--, c = void 0) : "lineEndingBlank" === u[1].type ? "enter" === u[0] && (!a || c || i || s || (s = r), c = void 0) : "linePrefix" === u[1].type || "listItemValue" === u[1].type || "listItemMarker" === u[1].type || "listItemPrefix" === u[1].type || "listItemPrefixWhitespace" === u[1].type || (c = void 0), !i && "enter" === u[0] && "listItemPrefix" === u[1].type || -1 === i && "exit" === u[0] && ("listUnordered" === u[1].type || "listOrdered" === u[1].type)) {
                                    if (a) {
                                        let d = r;
                                        for (l = void 0; d--;) {
                                            let f = e[d];
                                            if ("lineEnding" === f[1].type || "lineEndingBlank" === f[1].type) {
                                                if ("exit" === f[0]) continue;
                                                l && (e[l][1].type = "lineEndingBlank", o = !0), f[1].type = "lineEnding", l = d
                                            } else if ("linePrefix" === f[1].type || "blockQuotePrefix" === f[1].type || "blockQuotePrefixWhitespace" === f[1].type || "blockQuoteMarker" === f[1].type || "listItemIndent" === f[1].type);
                                            else break
                                        }
                                        s && (!l || s < l) && (a._spread = !0), a.end = Object.assign({}, l ? e[l][1].start : u[1].end), e.splice(l || r, 0, ["exit", a, u[2]]), r++, n++
                                    }
                                    "listItemPrefix" === u[1].type && (a = {
                                        type: "listItem",
                                        _spread: !1,
                                        start: Object.assign({}, u[1].start)
                                    }, e.splice(r, 0, ["enter", a, u[2]]), r++, n++, s = void 0, c = !0)
                                }
                            }
                            return e[t][1]._spread = o, n
                        }

                        function i(e, t) {
                            n[e] = t
                        }

                        function o(e) {
                            return n[e]
                        }

                        function a(e) {
                            return {
                                line: e.line,
                                column: e.column,
                                offset: e.offset
                            }
                        }

                        function s(e, t) {
                            return function(n) {
                                u.call(this, e(n), n), t && t.call(this, n)
                            }
                        }

                        function c() {
                            this.stack.push({
                                type: "fragment",
                                children: []
                            })
                        }

                        function u(e, t, n) {
                            let r = this.stack[this.stack.length - 1];
                            return r.children.push(e), this.stack.push(e), this.tokenStack.push([t, n]), e.position = {
                                start: a(t.start)
                            }, e
                        }

                        function d(e) {
                            return function(t) {
                                e && e.call(this, t), f.call(this, t)
                            }
                        }

                        function f(e, t) {
                            let n = this.stack.pop(),
                                r = this.tokenStack.pop();
                            if (r) {
                                if (r[0].type !== e.type) {
                                    if (t) t.call(this, e, r[0]);
                                    else {
                                        let i = r[1] || eZ;
                                        i.call(this, e, r[0])
                                    }
                                }
                            } else throw Error("Cannot close `" + e.type + "` (" + l({
                                start: e.start,
                                end: e.end
                            }) + "): it’s not open");
                            return n.position.end = a(e.end), n
                        }

                        function p() {
                            return function(e, t) {
                                var {
                                    includeImageAlt: n = !0
                                } = {};
                                return D(e, n)
                            }(this.stack.pop())
                        }

                        function g(e) {
                            let t = this.stack[this.stack.length - 1],
                                n = t.children[t.children.length - 1];
                            n && "text" === n.type || ((n = {
                                type: "text",
                                value: ""
                            }).position = {
                                start: a(e.start)
                            }, t.children.push(n)), this.stack.push(n)
                        }

                        function m(e) {
                            let t = this.stack.pop();
                            t.value += this.sliceSerialize(e), t.position.end = a(e.end)
                        }

                        function h() {
                            var e, t;
                            n.atHardBreak = !0
                        }

                        function b(e) {
                            var t, r;
                            r = e.type, n.characterReferenceType = r
                        }

                        function y() {
                            return {
                                type: "code",
                                lang: null,
                                meta: null,
                                value: ""
                            }
                        }

                        function v() {
                            return {
                                type: "heading",
                                depth: void 0,
                                children: []
                            }
                        }

                        function k() {
                            return {
                                type: "break"
                            }
                        }

                        function x() {
                            return {
                                type: "html",
                                value: ""
                            }
                        }

                        function _() {
                            return {
                                type: "link",
                                title: null,
                                url: "",
                                children: []
                            }
                        }

                        function w(e) {
                            return {
                                type: "list",
                                ordered: "listOrdered" === e.type,
                                start: null,
                                spread: e._spread,
                                children: []
                            }
                        }
                    })(n)(function(e) {
                        for (; !H(e););
                        return e
                    }((function(e = {}) {
                        let t = (0, R.W)([r].concat(e.extensions || [])),
                            n = {
                                defined: [],
                                lazy: {},
                                constructs: t,
                                content: i(B),
                                document: i(j),
                                flow: i(Z),
                                string: i(G),
                                text: i(X)
                            };
                        return n;

                        function i(e) {
                            return function(t) {
                                return function(e, t, n) {
                                    let r = Object.assign(n ? Object.assign({}, n) : {
                                            line: 1,
                                            column: 1,
                                            offset: 0
                                        }, {
                                            _index: 0,
                                            _bufferIndex: -1
                                        }),
                                        i = {},
                                        o = [],
                                        a = [],
                                        l = [],
                                        s = {
                                            consume: function(e) {
                                                (0, P.Ch)(e) ? (r.line++, r.column = 1, r.offset += -3 === e ? 2 : 1, b()) : -1 !== e && (r.column++, r.offset++), r._bufferIndex < 0 ? r._index++ : (r._bufferIndex++, r._bufferIndex === a[r._index].length && (r._bufferIndex = -1, r._index++)), c.previous = e
                                            },
                                            enter: function(e, t) {
                                                let n = t || {};
                                                return n.type = e, n.start = f(), c.events.push(["enter", n, c]), l.push(n), n
                                            },
                                            exit: function(e) {
                                                let t = l.pop();
                                                return t.end = f(), c.events.push(["exit", t, c]), t
                                            },
                                            attempt: m(function(e, t) {
                                                h(e, t.from)
                                            }),
                                            check: m(g),
                                            interrupt: m(g, {
                                                interrupt: !0
                                            })
                                        },
                                        c = {
                                            previous: null,
                                            code: null,
                                            containerState: {},
                                            events: [],
                                            parser: e,
                                            sliceStream: d,
                                            sliceSerialize: function(e, t) {
                                                return function(e, t) {
                                                    let n = -1,
                                                        r = [],
                                                        i;
                                                    for (; ++n < e.length;) {
                                                        let o = e[n],
                                                            a;
                                                        if ("string" == typeof o) a = o;
                                                        else switch (o) {
                                                            case -5:
                                                                a = "\r";
                                                                break;
                                                            case -4:
                                                                a = "\n";
                                                                break;
                                                            case -3:
                                                                a = "\r\n";
                                                                break;
                                                            case -2:
                                                                a = t ? " " : "	";
                                                                break;
                                                            case -1:
                                                                if (!t && i) continue;
                                                                a = " ";
                                                                break;
                                                            default:
                                                                a = String.fromCharCode(o)
                                                        }
                                                        i = -2 === o, r.push(a)
                                                    }
                                                    return r.join("")
                                                }(d(e), t)
                                            },
                                            now: f,
                                            defineSkip: function(e) {
                                                i[e.line] = e.column, b()
                                            },
                                            write: function(e) {
                                                return (a = (0, z.V)(a, e), function() {
                                                    let e;
                                                    for (; r._index < a.length;) {
                                                        let t = a[r._index];
                                                        if ("string" == typeof t)
                                                            for (e = r._index, r._bufferIndex < 0 && (r._bufferIndex = 0); r._index === e && r._bufferIndex < t.length;) p(t.charCodeAt(r._bufferIndex));
                                                        else p(t)
                                                    }
                                                }(), null !== a[a.length - 1]) ? [] : (h(t, 0), c.events = (0, ee.C)(o, c.events, c), c.events)
                                            }
                                        },
                                        u = t.tokenize.call(c, s);
                                    return t.resolveAll && o.push(t), c;

                                    function d(e) {
                                        return function(e, t) {
                                            let n = t.start._index,
                                                r = t.start._bufferIndex,
                                                i = t.end._index,
                                                o = t.end._bufferIndex,
                                                a;
                                            return n === i ? a = [e[n].slice(r, o)] : (a = e.slice(n, i), r > -1 && (a[0] = a[0].slice(r)), o > 0 && a.push(e[i].slice(0, o))), a
                                        }(a, e)
                                    }

                                    function f() {
                                        return Object.assign({}, r)
                                    }

                                    function p(e) {
                                        u = u(e)
                                    }

                                    function g(e, t) {
                                        t.restore()
                                    }

                                    function m(e, t) {
                                        return function(n, i, o) {
                                            var a;
                                            let u, d, p, g;
                                            return Array.isArray(n) ? m(n) : "tokenize" in n ? m([n]) : (a = n, function(e) {
                                                let t = null !== e && a[e],
                                                    n = null !== e && a.null,
                                                    r = [...Array.isArray(t) ? t : t ? [t] : [], ...Array.isArray(n) ? n : n ? [n] : []];
                                                return m(r)(e)
                                            });

                                            function m(e) {
                                                return (u = e, d = 0, 0 === e.length) ? o : h(e[d])
                                            }

                                            function h(e) {
                                                return function(n) {
                                                    return (g = function() {
                                                        let e = f(),
                                                            t = c.previous,
                                                            n = c.currentConstruct,
                                                            i = c.events.length,
                                                            o = Array.from(l);
                                                        return {
                                                            restore: function() {
                                                                r = e, c.previous = t, c.currentConstruct = n, c.events.length = i, l = o, b()
                                                            },
                                                            from: i
                                                        }
                                                    }(), p = e, e.partial || (c.currentConstruct = e), e.name && c.parser.constructs.disable.null.includes(e.name)) ? v(n) : e.tokenize.call(t ? Object.assign(Object.create(c), t) : c, s, y, v)(n)
                                                }
                                            }

                                            function y(t) {
                                                return e(p, g), i
                                            }

                                            function v(e) {
                                                return (g.restore(), ++d < u.length) ? h(u[d]) : o
                                            }
                                        }
                                    }

                                    function h(e, t) {
                                        e.resolveAll && !o.includes(e) && o.push(e), e.resolve && (0, z.d)(c.events, t, c.events.length - t, e.resolve(c.events.slice(t), c)), e.resolveTo && (c.events = e.resolveTo(c.events, c))
                                    }

                                    function b() {
                                        r.line in i && r.column < 2 && (r.column = i[r.line], r.offset += i[r.line] - 1)
                                    }
                                }(n, e, t)
                            }
                        }
                    })(n).document().write((i = 1, o = "", a = !0, function(e, t, n) {
                        let r = [],
                            l, c, u, d, f;
                        for (e = o + e.toString(t), u = 0, o = "", a && (65279 === e.charCodeAt(0) && u++, a = void 0); u < e.length;) {
                            if (e$.lastIndex = u, d = (l = e$.exec(e)) && void 0 !== l.index ? l.index : e.length, f = e.charCodeAt(d), !l) {
                                o = e.slice(u);
                                break
                            }
                            if (10 === f && u === d && s) r.push(-3), s = void 0;
                            else switch (s && (r.push(-5), s = void 0), u < d && (r.push(e.slice(u, d)), i += d - u), f) {
                                case 0:
                                    r.push(65533), i++;
                                    break;
                                case 9:
                                    for (c = 4 * Math.ceil(i / 4), r.push(-2); i++ < c;) r.push(-1);
                                    break;
                                case 10:
                                    r.push(-4), i = 1;
                                    break;
                                default:
                                    s = !0, i = 1
                            }
                            u = d + 1
                        }
                        return n && (s && r.push(-5), o && r.push(o), r.push(null)), r
                    })(e, t, !0))))
                };

            function eV(e, t) {
                let n;
                for (n in t)
                    if (eq.call(t, n)) {
                        let r = "canContainEols" === n || "transforms" === n,
                            i = eq.call(e, n) ? e[n] : void 0,
                            o = i || (e[n] = r ? [] : {}),
                            a = t[n];
                        a && (r ? e[n] = [...o, ...a] : Object.assign(o, a))
                    }
            }

            function eZ(e, t) {
                if (e) throw Error("Cannot close `" + e.type + "` (" + l({
                    start: e.start,
                    end: e.end
                }) + "): a different token (`" + t.type + "`, " + l({
                    start: t.start,
                    end: t.end
                }) + ") is open");
                throw Error("Cannot close document, a token (`" + t.type + "`, " + l({
                    start: t.start,
                    end: t.end
                }) + ") is still open")
            }
            var eW = function(e) {
                    let t = t => {
                        let n = this.data("settings");
                        return eK(t, Object.assign({}, n, e, {
                            extensions: this.data("micromarkExtensions") || [],
                            mdastExtensions: this.data("fromMarkdownExtensions") || []
                        }))
                    };
                    Object.assign(this, {
                        Parser: t
                    })
                },
                eG = function(e, t, n) {
                    var r = {
                        type: String(e)
                    };
                    return null == n && ("string" == typeof t || Array.isArray(t)) ? n = t : Object.assign(r, t), Array.isArray(n) ? r.children = n : null != n && (r.value = String(n)), r
                },
                eX = n(20539);
            let eQ = eJ("start"),
                eY = eJ("end");

            function eJ(e) {
                return function(t) {
                    let n = t && t.position && t.position[e] || {};
                    return {
                        line: n.line || null,
                        column: n.column || null,
                        offset: n.offset > -1 ? n.offset : null
                    }
                }
            }
            let e0 = {}.hasOwnProperty;

            function e1(e) {
                return String(e || "").toUpperCase()
            }
            let e2 = {}.hasOwnProperty;

            function e3(e, t) {
                let n = t.data || {};
                return "value" in t && !(e2.call(n, "hName") || e2.call(n, "hProperties") || e2.call(n, "hChildren")) ? e.augment(t, eG("text", t.value)) : e(t, "div", e6(e, t))
            }

            function e9(e, t, n) {
                let r = t && t.type,
                    i;
                if (!r) throw Error("Expected node, got `" + t + "`");
                return ("function" == typeof(i = e2.call(e.handlers, r) ? e.handlers[r] : e.passThrough && e.passThrough.includes(r) ? e4 : e.unknownHandler) ? i : e3)(e, t, n)
            }

            function e4(e, t) {
                return "children" in t ? { ...t,
                    children: e6(e, t)
                } : t
            }

            function e6(e, t) {
                let n = [];
                if ("children" in t) {
                    let r = t.children,
                        i = -1;
                    for (; ++i < r.length;) {
                        let o = e9(e, r[i], t);
                        if (o) {
                            if (i && "break" === r[i - 1].type && (Array.isArray(o) || "text" !== o.type || (o.value = o.value.replace(/^\s+/, "")), !Array.isArray(o) && "element" === o.type)) {
                                let a = o.children[0];
                                a && "text" === a.type && (a.value = a.value.replace(/^\s+/, ""))
                            }
                            Array.isArray(o) ? n.push(...o) : n.push(o)
                        }
                    }
                }
                return n
            }

            function e5(e) {
                let t = [],
                    n = -1,
                    r = 0,
                    i = 0;
                for (; ++n < e.length;) {
                    let o = e.charCodeAt(n),
                        a = "";
                    if (37 === o && (0, P.H$)(e.charCodeAt(n + 1)) && (0, P.H$)(e.charCodeAt(n + 2))) i = 2;
                    else if (o < 128) /[!#$&-;=?-Z_a-z~]/.test(String.fromCharCode(o)) || (a = String.fromCharCode(o));
                    else if (o > 55295 && o < 57344) {
                        let l = e.charCodeAt(n + 1);
                        o < 56320 && l > 56319 && l < 57344 ? (a = String.fromCharCode(o, l), i = 1) : a = "�"
                    } else a = String.fromCharCode(o);
                    a && (t.push(e.slice(r, n), encodeURIComponent(a)), r = n + i + 1, a = ""), i && (n += i, i = 0)
                }
                return t.join("") + e.slice(r)
            }

            function e7(e, t) {
                let n = [],
                    r = -1;
                for (t && n.push(eG("text", "\n")); ++r < e.length;) r && n.push(eG("text", "\n")), n.push(e[r]);
                return t && e.length > 0 && n.push(eG("text", "\n")), n
            }

            function e8(e, t) {
                let n = String(t.identifier),
                    r = e5(n.toLowerCase()),
                    i = e.footnoteOrder.indexOf(n),
                    o; - 1 === i ? (e.footnoteOrder.push(n), e.footnoteCounts[n] = 1, o = e.footnoteOrder.length) : (e.footnoteCounts[n]++, o = i + 1);
                let a = e.footnoteCounts[n];
                return e(t, "sup", [e(t.position, "a", {
                    href: "#" + e.clobberPrefix + "fn-" + r,
                    id: e.clobberPrefix + "fnref-" + r + (a > 1 ? "-" + a : ""),
                    dataFootnoteRef: !0,
                    ariaDescribedBy: "footnote-label"
                }, [eG("text", String(o))])])
            }

            function te(e, t) {
                let n = t.referenceType,
                    r = "]";
                if ("collapsed" === n ? r += "[]" : "full" === n && (r += "[" + (t.label || t.identifier) + "]"), "imageReference" === t.type) return eG("text", "![" + t.alt + r);
                let i = e6(e, t),
                    o = i[0];
                o && "text" === o.type ? o.value = "[" + o.value : i.unshift(eG("text", "["));
                let a = i[i.length - 1];
                return a && "text" === a.type ? a.value += r : i.push(eG("text", r)), i
            }

            function tt(e) {
                let t = e.spread;
                return null == t ? e.children.length > 1 : t
            }

            function tn(e, t, n) {
                let r = 0,
                    i = e.length;
                if (t) {
                    let o = e.codePointAt(r);
                    for (; 9 === o || 32 === o;) r++, o = e.codePointAt(r)
                }
                if (n) {
                    let a = e.codePointAt(i - 1);
                    for (; 9 === a || 32 === a;) i--, a = e.codePointAt(i - 1)
                }
                return i > r ? e.slice(r, i) : ""
            }
            let tr = {
                blockquote: function(e, t) {
                    return e(t, "blockquote", e7(e6(e, t), !0))
                },
                break: function(e, t) {
                    return [e(t, "br"), eG("text", "\n")]
                },
                code: function(e, t) {
                    let n = t.value ? t.value + "\n" : "",
                        r = t.lang && t.lang.match(/^[^ \t]+(?=[ \t]|$)/),
                        i = {};
                    r && (i.className = ["language-" + r]);
                    let o = e(t, "code", i, [eG("text", n)]);
                    return t.meta && (o.data = {
                        meta: t.meta
                    }), e(t.position, "pre", [o])
                },
                delete: function(e, t) {
                    return e(t, "del", e6(e, t))
                },
                emphasis: function(e, t) {
                    return e(t, "em", e6(e, t))
                },
                footnoteReference: e8,
                footnote: function(e, t) {
                    let n = e.footnoteById,
                        r = 1;
                    for (;
                        (r in n);) r++;
                    let i = String(r);
                    return n[i] = {
                        type: "footnoteDefinition",
                        identifier: i,
                        children: [{
                            type: "paragraph",
                            children: t.children
                        }],
                        position: t.position
                    }, e8(e, {
                        type: "footnoteReference",
                        identifier: i,
                        position: t.position
                    })
                },
                heading: function(e, t) {
                    return e(t, "h" + t.depth, e6(e, t))
                },
                html: function(e, t) {
                    return e.dangerous ? e.augment(t, eG("raw", t.value)) : null
                },
                imageReference: function(e, t) {
                    let n = e.definition(t.identifier);
                    if (!n) return te(e, t);
                    let r = {
                        src: e5(n.url || ""),
                        alt: t.alt
                    };
                    return null !== n.title && void 0 !== n.title && (r.title = n.title), e(t, "img", r)
                },
                image: function(e, t) {
                    let n = {
                        src: e5(t.url),
                        alt: t.alt
                    };
                    return null !== t.title && void 0 !== t.title && (n.title = t.title), e(t, "img", n)
                },
                inlineCode: function(e, t) {
                    return e(t, "code", [eG("text", t.value.replace(/\r?\n|\r/g, " "))])
                },
                linkReference: function(e, t) {
                    let n = e.definition(t.identifier);
                    if (!n) return te(e, t);
                    let r = {
                        href: e5(n.url || "")
                    };
                    return null !== n.title && void 0 !== n.title && (r.title = n.title), e(t, "a", r, e6(e, t))
                },
                link: function(e, t) {
                    let n = {
                        href: e5(t.url)
                    };
                    return null !== t.title && void 0 !== t.title && (n.title = t.title), e(t, "a", n, e6(e, t))
                },
                listItem: function(e, t, n) {
                    let r = e6(e, t),
                        i = n ? function(e) {
                            let t = e.spread,
                                n = e.children,
                                r = -1;
                            for (; !t && ++r < n.length;) t = tt(n[r]);
                            return Boolean(t)
                        }(n) : tt(t),
                        o = {},
                        a = [];
                    if ("boolean" == typeof t.checked) {
                        let l;
                        r[0] && "element" === r[0].type && "p" === r[0].tagName ? l = r[0] : (l = e(null, "p", []), r.unshift(l)), l.children.length > 0 && l.children.unshift(eG("text", " ")), l.children.unshift(e(null, "input", {
                            type: "checkbox",
                            checked: t.checked,
                            disabled: !0
                        })), o.className = ["task-list-item"]
                    }
                    let s = -1;
                    for (; ++s < r.length;) {
                        let c = r[s];
                        (i || 0 !== s || "element" !== c.type || "p" !== c.tagName) && a.push(eG("text", "\n")), "element" !== c.type || "p" !== c.tagName || i ? a.push(c) : a.push(...c.children)
                    }
                    let u = r[r.length - 1];
                    return !u || !i && "tagName" in u && "p" === u.tagName || a.push(eG("text", "\n")), e(t, "li", o, a)
                },
                list: function(e, t) {
                    let n = {},
                        r = t.ordered ? "ol" : "ul",
                        i = e6(e, t),
                        o = -1;
                    for ("number" == typeof t.start && 1 !== t.start && (n.start = t.start); ++o < i.length;) {
                        let a = i[o];
                        if ("element" === a.type && "li" === a.tagName && a.properties && Array.isArray(a.properties.className) && a.properties.className.includes("task-list-item")) {
                            n.className = ["contains-task-list"];
                            break
                        }
                    }
                    return e(t, r, n, e7(i, !0))
                },
                paragraph: function(e, t) {
                    return e(t, "p", e6(e, t))
                },
                root: function(e, t) {
                    return e.augment(t, eG("root", e7(e6(e, t))))
                },
                strong: function(e, t) {
                    return e(t, "strong", e6(e, t))
                },
                table: function(e, t) {
                    let n = t.children,
                        r = -1,
                        i = t.align || [],
                        o = [];
                    for (; ++r < n.length;) {
                        let a = n[r].children,
                            l = 0 === r ? "th" : "td",
                            s = [],
                            c = -1,
                            u = t.align ? i.length : a.length;
                        for (; ++c < u;) {
                            let d = a[c];
                            s.push(e(d, l, {
                                align: i[c]
                            }, d ? e6(e, d) : []))
                        }
                        o[r] = e(n[r], "tr", e7(s, !0))
                    }
                    return e(t, "table", e7([e(o[0].position, "thead", e7([o[0]], !0))].concat(o[1] ? e({
                        start: eQ(o[1]),
                        end: eY(o[o.length - 1])
                    }, "tbody", e7(o.slice(1), !0)) : []), !0))
                },
                text: function(e, t) {
                    return e.augment(t, eG("text", function(e) {
                        let t = String(e),
                            n = /\r?\n|\r/g,
                            r = n.exec(t),
                            i = 0,
                            o = [];
                        for (; r;) o.push(tn(t.slice(i, r.index), i > 0, !0), r[0]), i = r.index + r[0].length, r = n.exec(t);
                        return o.push(tn(t.slice(i), i > 0, !1)), o.join("")
                    }(String(t.value))))
                },
                thematicBreak: function(e, t) {
                    return e(t, "hr")
                },
                toml: ti,
                yaml: ti,
                definition: ti,
                footnoteDefinition: ti
            };

            function ti() {
                return null
            }
            let to = {}.hasOwnProperty;

            function ta(e, t) {
                let n = function(e, t) {
                        let n = t || {},
                            r = n.allowDangerousHtml || !1,
                            i = {};
                        return a.dangerous = r, a.clobberPrefix = void 0 === n.clobberPrefix || null === n.clobberPrefix ? "user-content-" : n.clobberPrefix, a.footnoteLabel = n.footnoteLabel || "Footnotes", a.footnoteLabelTagName = n.footnoteLabelTagName || "h2", a.footnoteLabelProperties = n.footnoteLabelProperties || {
                            className: ["sr-only"]
                        }, a.footnoteBackLabel = n.footnoteBackLabel || "Back to content", a.definition = function(e) {
                            let t = Object.create(null);
                            if (!e || !e.type) throw Error("mdast-util-definitions expected node");
                            return (0, eX.Vn)(e, "definition", e => {
                                    let n = e1(e.identifier);
                                    n && !e0.call(t, n) && (t[n] = e)
                                }),
                                function(e) {
                                    let n = e1(e);
                                    return n && e0.call(t, n) ? t[n] : null
                                }
                        }(e), a.footnoteById = i, a.footnoteOrder = [], a.footnoteCounts = {}, a.augment = o, a.handlers = { ...tr,
                            ...n.handlers
                        }, a.unknownHandler = n.unknownHandler, a.passThrough = n.passThrough, (0, eX.Vn)(e, "footnoteDefinition", e => {
                            let t = String(e.identifier).toUpperCase();
                            to.call(i, t) || (i[t] = e)
                        }), a;

                        function o(e, t) {
                            if (e && "data" in e && e.data) {
                                let n = e.data;
                                n.hName && ("element" !== t.type && (t = {
                                    type: "element",
                                    tagName: "",
                                    properties: {},
                                    children: []
                                }), t.tagName = n.hName), "element" === t.type && n.hProperties && (t.properties = { ...t.properties,
                                    ...n.hProperties
                                }), "children" in t && t.children && n.hChildren && (t.children = n.hChildren)
                            }
                            if (e) {
                                var r;
                                let i = "type" in e ? e : {
                                    position: e
                                };
                                i && i.position && i.position.start && i.position.start.line && i.position.start.column && i.position.end && i.position.end.line && i.position.end.column && (t.position = {
                                    start: eQ(i),
                                    end: eY(i)
                                })
                            }
                            return t
                        }

                        function a(e, t, n, r) {
                            return Array.isArray(n) && (r = n, n = {}), o(e, {
                                type: "element",
                                tagName: t,
                                properties: n || {},
                                children: r || []
                            })
                        }
                    }(e, t),
                    r = e9(n, e, null),
                    i = function(e) {
                        let t = -1,
                            n = [];
                        for (; ++t < e.footnoteOrder.length;) {
                            let r = e.footnoteById[e.footnoteOrder[t].toUpperCase()];
                            if (!r) continue;
                            let i = e6(e, r),
                                o = String(r.identifier),
                                a = e5(o.toLowerCase()),
                                l = 0,
                                s = [];
                            for (; ++l <= e.footnoteCounts[o];) {
                                let c = {
                                    type: "element",
                                    tagName: "a",
                                    properties: {
                                        href: "#" + e.clobberPrefix + "fnref-" + a + (l > 1 ? "-" + l : ""),
                                        dataFootnoteBackref: !0,
                                        className: ["data-footnote-backref"],
                                        ariaLabel: e.footnoteBackLabel
                                    },
                                    children: [{
                                        type: "text",
                                        value: "↩"
                                    }]
                                };
                                l > 1 && c.children.push({
                                    type: "element",
                                    tagName: "sup",
                                    children: [{
                                        type: "text",
                                        value: String(l)
                                    }]
                                }), s.length > 0 && s.push({
                                    type: "text",
                                    value: " "
                                }), s.push(c)
                            }
                            let u = i[i.length - 1];
                            if (u && "element" === u.type && "p" === u.tagName) {
                                let d = u.children[u.children.length - 1];
                                d && "text" === d.type ? d.value += " " : u.children.push({
                                    type: "text",
                                    value: " "
                                }), u.children.push(...s)
                            } else i.push(...s);
                            let f = {
                                type: "element",
                                tagName: "li",
                                properties: {
                                    id: e.clobberPrefix + "fn-" + a
                                },
                                children: e7(i, !0)
                            };
                            r.position && (f.position = r.position), n.push(f)
                        }
                        return 0 === n.length ? null : {
                            type: "element",
                            tagName: "section",
                            properties: {
                                dataFootnotes: !0,
                                className: ["footnotes"]
                            },
                            children: [{
                                type: "element",
                                tagName: e.footnoteLabelTagName,
                                properties: { ...JSON.parse(JSON.stringify(e.footnoteLabelProperties)),
                                    id: "footnote-label"
                                },
                                children: [eG("text", e.footnoteLabel)]
                            }, {
                                type: "text",
                                value: "\n"
                            }, {
                                type: "element",
                                tagName: "ol",
                                properties: {},
                                children: e7(n, !0)
                            }, {
                                type: "text",
                                value: "\n"
                            }]
                        }
                    }(n);
                return i && r.children.push(eG("text", "\n"), i), Array.isArray(r) ? {
                    type: "root",
                    children: r
                } : r
            }
            let tl = function(e, t) {
                var n, r, i;
                return e && "run" in e ? (n = e, r = t, (e, t, i) => {
                    n.run(ta(e, r), t, e => {
                        i(e)
                    })
                }) : (i = e || t, e => ta(e, i))
            };
            var ts = n(39519);
            class tc {
                constructor(e, t, n) {
                    this.property = e, this.normal = t, n && (this.space = n)
                }
            }

            function tu(e, t) {
                let n = {},
                    r = {},
                    i = -1;
                for (; ++i < e.length;) Object.assign(n, e[i].property), Object.assign(r, e[i].normal);
                return new tc(n, r, t)
            }

            function td(e) {
                return e.toLowerCase()
            }
            tc.prototype.property = {}, tc.prototype.normal = {}, tc.prototype.space = null;
            class tf {
                constructor(e, t) {
                    this.property = e, this.attribute = t
                }
            }
            tf.prototype.space = null, tf.prototype.boolean = !1, tf.prototype.booleanish = !1, tf.prototype.overloadedBoolean = !1, tf.prototype.number = !1, tf.prototype.commaSeparated = !1, tf.prototype.spaceSeparated = !1, tf.prototype.commaOrSpaceSeparated = !1, tf.prototype.mustUseProperty = !1, tf.prototype.defined = !1;
            let tp = 0,
                tg = tx(),
                tm = tx(),
                th = tx(),
                tb = tx(),
                ty = tx(),
                tv = tx(),
                tk = tx();

            function tx() {
                return 2 ** ++tp
            }
            let t_ = Object.keys(i);
            class tw extends tf {
                constructor(e, t, n, r) {
                    let o = -1;
                    if (super(e, t), tE(this, "space", r), "number" == typeof n)
                        for (; ++o < t_.length;) {
                            let a = t_[o];
                            tE(this, t_[o], (n & i[a]) === i[a])
                        }
                }
            }

            function tE(e, t, n) {
                n && (e[t] = n)
            }
            tw.prototype.defined = !0;
            let tS = {}.hasOwnProperty;

            function tN(e) {
                let t = {},
                    n = {},
                    r;
                for (r in e.properties)
                    if (tS.call(e.properties, r)) {
                        let i = e.properties[r],
                            o = new tw(r, e.transform(e.attributes || {}, r), i, e.space);
                        e.mustUseProperty && e.mustUseProperty.includes(r) && (o.mustUseProperty = !0), t[r] = o, n[td(r)] = r, n[td(o.attribute)] = r
                    }
                return new tc(t, n, e.space)
            }
            let tC = tN({
                    space: "xlink",
                    transform: (e, t) => "xlink:" + t.slice(5).toLowerCase(),
                    properties: {
                        xLinkActuate: null,
                        xLinkArcRole: null,
                        xLinkHref: null,
                        xLinkRole: null,
                        xLinkShow: null,
                        xLinkTitle: null,
                        xLinkType: null
                    }
                }),
                tO = tN({
                    space: "xml",
                    transform: (e, t) => "xml:" + t.slice(3).toLowerCase(),
                    properties: {
                        xmlLang: null,
                        xmlBase: null,
                        xmlSpace: null
                    }
                });

            function tA(e, t) {
                return t in e ? e[t] : t
            }

            function tT(e, t) {
                return tA(e, t.toLowerCase())
            }
            let tM = tN({
                    space: "xmlns",
                    attributes: {
                        xmlnsxlink: "xmlns:xlink"
                    },
                    transform: tT,
                    properties: {
                        xmlns: null,
                        xmlnsXLink: null
                    }
                }),
                tI = tN({
                    transform: (e, t) => "role" === t ? t : "aria-" + t.slice(4).toLowerCase(),
                    properties: {
                        ariaActiveDescendant: null,
                        ariaAtomic: tm,
                        ariaAutoComplete: null,
                        ariaBusy: tm,
                        ariaChecked: tm,
                        ariaColCount: tb,
                        ariaColIndex: tb,
                        ariaColSpan: tb,
                        ariaControls: ty,
                        ariaCurrent: null,
                        ariaDescribedBy: ty,
                        ariaDetails: null,
                        ariaDisabled: tm,
                        ariaDropEffect: ty,
                        ariaErrorMessage: null,
                        ariaExpanded: tm,
                        ariaFlowTo: ty,
                        ariaGrabbed: tm,
                        ariaHasPopup: null,
                        ariaHidden: tm,
                        ariaInvalid: null,
                        ariaKeyShortcuts: null,
                        ariaLabel: null,
                        ariaLabelledBy: ty,
                        ariaLevel: tb,
                        ariaLive: null,
                        ariaModal: tm,
                        ariaMultiLine: tm,
                        ariaMultiSelectable: tm,
                        ariaOrientation: null,
                        ariaOwns: ty,
                        ariaPlaceholder: null,
                        ariaPosInSet: tb,
                        ariaPressed: tm,
                        ariaReadOnly: tm,
                        ariaRelevant: null,
                        ariaRequired: tm,
                        ariaRoleDescription: ty,
                        ariaRowCount: tb,
                        ariaRowIndex: tb,
                        ariaRowSpan: tb,
                        ariaSelected: tm,
                        ariaSetSize: tb,
                        ariaSort: null,
                        ariaValueMax: tb,
                        ariaValueMin: tb,
                        ariaValueNow: tb,
                        ariaValueText: null,
                        role: null
                    }
                }),
                tD = tN({
                    space: "html",
                    attributes: {
                        acceptcharset: "accept-charset",
                        classname: "class",
                        htmlfor: "for",
                        httpequiv: "http-equiv"
                    },
                    transform: tT,
                    mustUseProperty: ["checked", "multiple", "muted", "selected"],
                    properties: {
                        abbr: null,
                        accept: tv,
                        acceptCharset: ty,
                        accessKey: ty,
                        action: null,
                        allow: null,
                        allowFullScreen: tg,
                        allowPaymentRequest: tg,
                        allowUserMedia: tg,
                        alt: null,
                        as: null,
                        async: tg,
                        autoCapitalize: null,
                        autoComplete: ty,
                        autoFocus: tg,
                        autoPlay: tg,
                        capture: tg,
                        charSet: null,
                        checked: tg,
                        cite: null,
                        className: ty,
                        cols: tb,
                        colSpan: null,
                        content: null,
                        contentEditable: tm,
                        controls: tg,
                        controlsList: ty,
                        coords: tb | tv,
                        crossOrigin: null,
                        data: null,
                        dateTime: null,
                        decoding: null,
                        default: tg,
                        defer: tg,
                        dir: null,
                        dirName: null,
                        disabled: tg,
                        download: th,
                        draggable: tm,
                        encType: null,
                        enterKeyHint: null,
                        form: null,
                        formAction: null,
                        formEncType: null,
                        formMethod: null,
                        formNoValidate: tg,
                        formTarget: null,
                        headers: ty,
                        height: tb,
                        hidden: tg,
                        high: tb,
                        href: null,
                        hrefLang: null,
                        htmlFor: ty,
                        httpEquiv: ty,
                        id: null,
                        imageSizes: null,
                        imageSrcSet: null,
                        inputMode: null,
                        integrity: null,
                        is: null,
                        isMap: tg,
                        itemId: null,
                        itemProp: ty,
                        itemRef: ty,
                        itemScope: tg,
                        itemType: ty,
                        kind: null,
                        label: null,
                        lang: null,
                        language: null,
                        list: null,
                        loading: null,
                        loop: tg,
                        low: tb,
                        manifest: null,
                        max: null,
                        maxLength: tb,
                        media: null,
                        method: null,
                        min: null,
                        minLength: tb,
                        multiple: tg,
                        muted: tg,
                        name: null,
                        nonce: null,
                        noModule: tg,
                        noValidate: tg,
                        onAbort: null,
                        onAfterPrint: null,
                        onAuxClick: null,
                        onBeforePrint: null,
                        onBeforeUnload: null,
                        onBlur: null,
                        onCancel: null,
                        onCanPlay: null,
                        onCanPlayThrough: null,
                        onChange: null,
                        onClick: null,
                        onClose: null,
                        onContextLost: null,
                        onContextMenu: null,
                        onContextRestored: null,
                        onCopy: null,
                        onCueChange: null,
                        onCut: null,
                        onDblClick: null,
                        onDrag: null,
                        onDragEnd: null,
                        onDragEnter: null,
                        onDragExit: null,
                        onDragLeave: null,
                        onDragOver: null,
                        onDragStart: null,
                        onDrop: null,
                        onDurationChange: null,
                        onEmptied: null,
                        onEnded: null,
                        onError: null,
                        onFocus: null,
                        onFormData: null,
                        onHashChange: null,
                        onInput: null,
                        onInvalid: null,
                        onKeyDown: null,
                        onKeyPress: null,
                        onKeyUp: null,
                        onLanguageChange: null,
                        onLoad: null,
                        onLoadedData: null,
                        onLoadedMetadata: null,
                        onLoadEnd: null,
                        onLoadStart: null,
                        onMessage: null,
                        onMessageError: null,
                        onMouseDown: null,
                        onMouseEnter: null,
                        onMouseLeave: null,
                        onMouseMove: null,
                        onMouseOut: null,
                        onMouseOver: null,
                        onMouseUp: null,
                        onOffline: null,
                        onOnline: null,
                        onPageHide: null,
                        onPageShow: null,
                        onPaste: null,
                        onPause: null,
                        onPlay: null,
                        onPlaying: null,
                        onPopState: null,
                        onProgress: null,
                        onRateChange: null,
                        onRejectionHandled: null,
                        onReset: null,
                        onResize: null,
                        onScroll: null,
                        onSecurityPolicyViolation: null,
                        onSeeked: null,
                        onSeeking: null,
                        onSelect: null,
                        onSlotChange: null,
                        onStalled: null,
                        onStorage: null,
                        onSubmit: null,
                        onSuspend: null,
                        onTimeUpdate: null,
                        onToggle: null,
                        onUnhandledRejection: null,
                        onUnload: null,
                        onVolumeChange: null,
                        onWaiting: null,
                        onWheel: null,
                        open: tg,
                        optimum: tb,
                        pattern: null,
                        ping: ty,
                        placeholder: null,
                        playsInline: tg,
                        poster: null,
                        preload: null,
                        readOnly: tg,
                        referrerPolicy: null,
                        rel: ty,
                        required: tg,
                        reversed: tg,
                        rows: tb,
                        rowSpan: tb,
                        sandbox: ty,
                        scope: null,
                        scoped: tg,
                        seamless: tg,
                        selected: tg,
                        shape: null,
                        size: tb,
                        sizes: null,
                        slot: null,
                        span: tb,
                        spellCheck: tm,
                        src: null,
                        srcDoc: null,
                        srcLang: null,
                        srcSet: null,
                        start: tb,
                        step: null,
                        style: null,
                        tabIndex: tb,
                        target: null,
                        title: null,
                        translate: null,
                        type: null,
                        typeMustMatch: tg,
                        useMap: null,
                        value: tm,
                        width: tb,
                        wrap: null,
                        align: null,
                        aLink: null,
                        archive: ty,
                        axis: null,
                        background: null,
                        bgColor: null,
                        border: tb,
                        borderColor: null,
                        bottomMargin: tb,
                        cellPadding: null,
                        cellSpacing: null,
                        char: null,
                        charOff: null,
                        classId: null,
                        clear: null,
                        code: null,
                        codeBase: null,
                        codeType: null,
                        color: null,
                        compact: tg,
                        declare: tg,
                        event: null,
                        face: null,
                        frame: null,
                        frameBorder: null,
                        hSpace: tb,
                        leftMargin: tb,
                        link: null,
                        longDesc: null,
                        lowSrc: null,
                        marginHeight: tb,
                        marginWidth: tb,
                        noResize: tg,
                        noHref: tg,
                        noShade: tg,
                        noWrap: tg,
                        object: null,
                        profile: null,
                        prompt: null,
                        rev: null,
                        rightMargin: tb,
                        rules: null,
                        scheme: null,
                        scrolling: tm,
                        standby: null,
                        summary: null,
                        text: null,
                        topMargin: tb,
                        valueType: null,
                        version: null,
                        vAlign: null,
                        vLink: null,
                        vSpace: tb,
                        allowTransparency: null,
                        autoCorrect: null,
                        autoSave: null,
                        disablePictureInPicture: tg,
                        disableRemotePlayback: tg,
                        prefix: null,
                        property: null,
                        results: tb,
                        security: null,
                        unselectable: null
                    }
                }),
                tL = tN({
                    space: "svg",
                    attributes: {
                        accentHeight: "accent-height",
                        alignmentBaseline: "alignment-baseline",
                        arabicForm: "arabic-form",
                        baselineShift: "baseline-shift",
                        capHeight: "cap-height",
                        className: "class",
                        clipPath: "clip-path",
                        clipRule: "clip-rule",
                        colorInterpolation: "color-interpolation",
                        colorInterpolationFilters: "color-interpolation-filters",
                        colorProfile: "color-profile",
                        colorRendering: "color-rendering",
                        crossOrigin: "crossorigin",
                        dataType: "datatype",
                        dominantBaseline: "dominant-baseline",
                        enableBackground: "enable-background",
                        fillOpacity: "fill-opacity",
                        fillRule: "fill-rule",
                        floodColor: "flood-color",
                        floodOpacity: "flood-opacity",
                        fontFamily: "font-family",
                        fontSize: "font-size",
                        fontSizeAdjust: "font-size-adjust",
                        fontStretch: "font-stretch",
                        fontStyle: "font-style",
                        fontVariant: "font-variant",
                        fontWeight: "font-weight",
                        glyphName: "glyph-name",
                        glyphOrientationHorizontal: "glyph-orientation-horizontal",
                        glyphOrientationVertical: "glyph-orientation-vertical",
                        hrefLang: "hreflang",
                        horizAdvX: "horiz-adv-x",
                        horizOriginX: "horiz-origin-x",
                        horizOriginY: "horiz-origin-y",
                        imageRendering: "image-rendering",
                        letterSpacing: "letter-spacing",
                        lightingColor: "lighting-color",
                        markerEnd: "marker-end",
                        markerMid: "marker-mid",
                        markerStart: "marker-start",
                        navDown: "nav-down",
                        navDownLeft: "nav-down-left",
                        navDownRight: "nav-down-right",
                        navLeft: "nav-left",
                        navNext: "nav-next",
                        navPrev: "nav-prev",
                        navRight: "nav-right",
                        navUp: "nav-up",
                        navUpLeft: "nav-up-left",
                        navUpRight: "nav-up-right",
                        onAbort: "onabort",
                        onActivate: "onactivate",
                        onAfterPrint: "onafterprint",
                        onBeforePrint: "onbeforeprint",
                        onBegin: "onbegin",
                        onCancel: "oncancel",
                        onCanPlay: "oncanplay",
                        onCanPlayThrough: "oncanplaythrough",
                        onChange: "onchange",
                        onClick: "onclick",
                        onClose: "onclose",
                        onCopy: "oncopy",
                        onCueChange: "oncuechange",
                        onCut: "oncut",
                        onDblClick: "ondblclick",
                        onDrag: "ondrag",
                        onDragEnd: "ondragend",
                        onDragEnter: "ondragenter",
                        onDragExit: "ondragexit",
                        onDragLeave: "ondragleave",
                        onDragOver: "ondragover",
                        onDragStart: "ondragstart",
                        onDrop: "ondrop",
                        onDurationChange: "ondurationchange",
                        onEmptied: "onemptied",
                        onEnd: "onend",
                        onEnded: "onended",
                        onError: "onerror",
                        onFocus: "onfocus",
                        onFocusIn: "onfocusin",
                        onFocusOut: "onfocusout",
                        onHashChange: "onhashchange",
                        onInput: "oninput",
                        onInvalid: "oninvalid",
                        onKeyDown: "onkeydown",
                        onKeyPress: "onkeypress",
                        onKeyUp: "onkeyup",
                        onLoad: "onload",
                        onLoadedData: "onloadeddata",
                        onLoadedMetadata: "onloadedmetadata",
                        onLoadStart: "onloadstart",
                        onMessage: "onmessage",
                        onMouseDown: "onmousedown",
                        onMouseEnter: "onmouseenter",
                        onMouseLeave: "onmouseleave",
                        onMouseMove: "onmousemove",
                        onMouseOut: "onmouseout",
                        onMouseOver: "onmouseover",
                        onMouseUp: "onmouseup",
                        onMouseWheel: "onmousewheel",
                        onOffline: "onoffline",
                        onOnline: "ononline",
                        onPageHide: "onpagehide",
                        onPageShow: "onpageshow",
                        onPaste: "onpaste",
                        onPause: "onpause",
                        onPlay: "onplay",
                        onPlaying: "onplaying",
                        onPopState: "onpopstate",
                        onProgress: "onprogress",
                        onRateChange: "onratechange",
                        onRepeat: "onrepeat",
                        onReset: "onreset",
                        onResize: "onresize",
                        onScroll: "onscroll",
                        onSeeked: "onseeked",
                        onSeeking: "onseeking",
                        onSelect: "onselect",
                        onShow: "onshow",
                        onStalled: "onstalled",
                        onStorage: "onstorage",
                        onSubmit: "onsubmit",
                        onSuspend: "onsuspend",
                        onTimeUpdate: "ontimeupdate",
                        onToggle: "ontoggle",
                        onUnload: "onunload",
                        onVolumeChange: "onvolumechange",
                        onWaiting: "onwaiting",
                        onZoom: "onzoom",
                        overlinePosition: "overline-position",
                        overlineThickness: "overline-thickness",
                        paintOrder: "paint-order",
                        panose1: "panose-1",
                        pointerEvents: "pointer-events",
                        referrerPolicy: "referrerpolicy",
                        renderingIntent: "rendering-intent",
                        shapeRendering: "shape-rendering",
                        stopColor: "stop-color",
                        stopOpacity: "stop-opacity",
                        strikethroughPosition: "strikethrough-position",
                        strikethroughThickness: "strikethrough-thickness",
                        strokeDashArray: "stroke-dasharray",
                        strokeDashOffset: "stroke-dashoffset",
                        strokeLineCap: "stroke-linecap",
                        strokeLineJoin: "stroke-linejoin",
                        strokeMiterLimit: "stroke-miterlimit",
                        strokeOpacity: "stroke-opacity",
                        strokeWidth: "stroke-width",
                        tabIndex: "tabindex",
                        textAnchor: "text-anchor",
                        textDecoration: "text-decoration",
                        textRendering: "text-rendering",
                        typeOf: "typeof",
                        underlinePosition: "underline-position",
                        underlineThickness: "underline-thickness",
                        unicodeBidi: "unicode-bidi",
                        unicodeRange: "unicode-range",
                        unitsPerEm: "units-per-em",
                        vAlphabetic: "v-alphabetic",
                        vHanging: "v-hanging",
                        vIdeographic: "v-ideographic",
                        vMathematical: "v-mathematical",
                        vectorEffect: "vector-effect",
                        vertAdvY: "vert-adv-y",
                        vertOriginX: "vert-origin-x",
                        vertOriginY: "vert-origin-y",
                        wordSpacing: "word-spacing",
                        writingMode: "writing-mode",
                        xHeight: "x-height",
                        playbackOrder: "playbackorder",
                        timelineBegin: "timelinebegin"
                    },
                    transform: tA,
                    properties: {
                        about: tk,
                        accentHeight: tb,
                        accumulate: null,
                        additive: null,
                        alignmentBaseline: null,
                        alphabetic: tb,
                        amplitude: tb,
                        arabicForm: null,
                        ascent: tb,
                        attributeName: null,
                        attributeType: null,
                        azimuth: tb,
                        bandwidth: null,
                        baselineShift: null,
                        baseFrequency: null,
                        baseProfile: null,
                        bbox: null,
                        begin: null,
                        bias: tb,
                        by: null,
                        calcMode: null,
                        capHeight: tb,
                        className: ty,
                        clip: null,
                        clipPath: null,
                        clipPathUnits: null,
                        clipRule: null,
                        color: null,
                        colorInterpolation: null,
                        colorInterpolationFilters: null,
                        colorProfile: null,
                        colorRendering: null,
                        content: null,
                        contentScriptType: null,
                        contentStyleType: null,
                        crossOrigin: null,
                        cursor: null,
                        cx: null,
                        cy: null,
                        d: null,
                        dataType: null,
                        defaultAction: null,
                        descent: tb,
                        diffuseConstant: tb,
                        direction: null,
                        display: null,
                        dur: null,
                        divisor: tb,
                        dominantBaseline: null,
                        download: tg,
                        dx: null,
                        dy: null,
                        edgeMode: null,
                        editable: null,
                        elevation: tb,
                        enableBackground: null,
                        end: null,
                        event: null,
                        exponent: tb,
                        externalResourcesRequired: null,
                        fill: null,
                        fillOpacity: tb,
                        fillRule: null,
                        filter: null,
                        filterRes: null,
                        filterUnits: null,
                        floodColor: null,
                        floodOpacity: null,
                        focusable: null,
                        focusHighlight: null,
                        fontFamily: null,
                        fontSize: null,
                        fontSizeAdjust: null,
                        fontStretch: null,
                        fontStyle: null,
                        fontVariant: null,
                        fontWeight: null,
                        format: null,
                        fr: null,
                        from: null,
                        fx: null,
                        fy: null,
                        g1: tv,
                        g2: tv,
                        glyphName: tv,
                        glyphOrientationHorizontal: null,
                        glyphOrientationVertical: null,
                        glyphRef: null,
                        gradientTransform: null,
                        gradientUnits: null,
                        handler: null,
                        hanging: tb,
                        hatchContentUnits: null,
                        hatchUnits: null,
                        height: null,
                        href: null,
                        hrefLang: null,
                        horizAdvX: tb,
                        horizOriginX: tb,
                        horizOriginY: tb,
                        id: null,
                        ideographic: tb,
                        imageRendering: null,
                        initialVisibility: null,
                        in: null,
                        in2: null,
                        intercept: tb,
                        k: tb,
                        k1: tb,
                        k2: tb,
                        k3: tb,
                        k4: tb,
                        kernelMatrix: tk,
                        kernelUnitLength: null,
                        keyPoints: null,
                        keySplines: null,
                        keyTimes: null,
                        kerning: null,
                        lang: null,
                        lengthAdjust: null,
                        letterSpacing: null,
                        lightingColor: null,
                        limitingConeAngle: tb,
                        local: null,
                        markerEnd: null,
                        markerMid: null,
                        markerStart: null,
                        markerHeight: null,
                        markerUnits: null,
                        markerWidth: null,
                        mask: null,
                        maskContentUnits: null,
                        maskUnits: null,
                        mathematical: null,
                        max: null,
                        media: null,
                        mediaCharacterEncoding: null,
                        mediaContentEncodings: null,
                        mediaSize: tb,
                        mediaTime: null,
                        method: null,
                        min: null,
                        mode: null,
                        name: null,
                        navDown: null,
                        navDownLeft: null,
                        navDownRight: null,
                        navLeft: null,
                        navNext: null,
                        navPrev: null,
                        navRight: null,
                        navUp: null,
                        navUpLeft: null,
                        navUpRight: null,
                        numOctaves: null,
                        observer: null,
                        offset: null,
                        onAbort: null,
                        onActivate: null,
                        onAfterPrint: null,
                        onBeforePrint: null,
                        onBegin: null,
                        onCancel: null,
                        onCanPlay: null,
                        onCanPlayThrough: null,
                        onChange: null,
                        onClick: null,
                        onClose: null,
                        onCopy: null,
                        onCueChange: null,
                        onCut: null,
                        onDblClick: null,
                        onDrag: null,
                        onDragEnd: null,
                        onDragEnter: null,
                        onDragExit: null,
                        onDragLeave: null,
                        onDragOver: null,
                        onDragStart: null,
                        onDrop: null,
                        onDurationChange: null,
                        onEmptied: null,
                        onEnd: null,
                        onEnded: null,
                        onError: null,
                        onFocus: null,
                        onFocusIn: null,
                        onFocusOut: null,
                        onHashChange: null,
                        onInput: null,
                        onInvalid: null,
                        onKeyDown: null,
                        onKeyPress: null,
                        onKeyUp: null,
                        onLoad: null,
                        onLoadedData: null,
                        onLoadedMetadata: null,
                        onLoadStart: null,
                        onMessage: null,
                        onMouseDown: null,
                        onMouseEnter: null,
                        onMouseLeave: null,
                        onMouseMove: null,
                        onMouseOut: null,
                        onMouseOver: null,
                        onMouseUp: null,
                        onMouseWheel: null,
                        onOffline: null,
                        onOnline: null,
                        onPageHide: null,
                        onPageShow: null,
                        onPaste: null,
                        onPause: null,
                        onPlay: null,
                        onPlaying: null,
                        onPopState: null,
                        onProgress: null,
                        onRateChange: null,
                        onRepeat: null,
                        onReset: null,
                        onResize: null,
                        onScroll: null,
                        onSeeked: null,
                        onSeeking: null,
                        onSelect: null,
                        onShow: null,
                        onStalled: null,
                        onStorage: null,
                        onSubmit: null,
                        onSuspend: null,
                        onTimeUpdate: null,
                        onToggle: null,
                        onUnload: null,
                        onVolumeChange: null,
                        onWaiting: null,
                        onZoom: null,
                        opacity: null,
                        operator: null,
                        order: null,
                        orient: null,
                        orientation: null,
                        origin: null,
                        overflow: null,
                        overlay: null,
                        overlinePosition: tb,
                        overlineThickness: tb,
                        paintOrder: null,
                        panose1: null,
                        path: null,
                        pathLength: tb,
                        patternContentUnits: null,
                        patternTransform: null,
                        patternUnits: null,
                        phase: null,
                        ping: ty,
                        pitch: null,
                        playbackOrder: null,
                        pointerEvents: null,
                        points: null,
                        pointsAtX: tb,
                        pointsAtY: tb,
                        pointsAtZ: tb,
                        preserveAlpha: null,
                        preserveAspectRatio: null,
                        primitiveUnits: null,
                        propagate: null,
                        property: tk,
                        r: null,
                        radius: null,
                        referrerPolicy: null,
                        refX: null,
                        refY: null,
                        rel: tk,
                        rev: tk,
                        renderingIntent: null,
                        repeatCount: null,
                        repeatDur: null,
                        requiredExtensions: tk,
                        requiredFeatures: tk,
                        requiredFonts: tk,
                        requiredFormats: tk,
                        resource: null,
                        restart: null,
                        result: null,
                        rotate: null,
                        rx: null,
                        ry: null,
                        scale: null,
                        seed: null,
                        shapeRendering: null,
                        side: null,
                        slope: null,
                        snapshotTime: null,
                        specularConstant: tb,
                        specularExponent: tb,
                        spreadMethod: null,
                        spacing: null,
                        startOffset: null,
                        stdDeviation: null,
                        stemh: null,
                        stemv: null,
                        stitchTiles: null,
                        stopColor: null,
                        stopOpacity: null,
                        strikethroughPosition: tb,
                        strikethroughThickness: tb,
                        string: null,
                        stroke: null,
                        strokeDashArray: tk,
                        strokeDashOffset: null,
                        strokeLineCap: null,
                        strokeLineJoin: null,
                        strokeMiterLimit: tb,
                        strokeOpacity: tb,
                        strokeWidth: null,
                        style: null,
                        surfaceScale: tb,
                        syncBehavior: null,
                        syncBehaviorDefault: null,
                        syncMaster: null,
                        syncTolerance: null,
                        syncToleranceDefault: null,
                        systemLanguage: tk,
                        tabIndex: tb,
                        tableValues: null,
                        target: null,
                        targetX: tb,
                        targetY: tb,
                        textAnchor: null,
                        textDecoration: null,
                        textRendering: null,
                        textLength: null,
                        timelineBegin: null,
                        title: null,
                        transformBehavior: null,
                        type: null,
                        typeOf: tk,
                        to: null,
                        transform: null,
                        u1: null,
                        u2: null,
                        underlinePosition: tb,
                        underlineThickness: tb,
                        unicode: null,
                        unicodeBidi: null,
                        unicodeRange: null,
                        unitsPerEm: tb,
                        values: null,
                        vAlphabetic: tb,
                        vMathematical: tb,
                        vectorEffect: null,
                        vHanging: tb,
                        vIdeographic: tb,
                        version: null,
                        vertAdvY: tb,
                        vertOriginX: tb,
                        vertOriginY: tb,
                        viewBox: null,
                        viewTarget: null,
                        visibility: null,
                        width: null,
                        widths: null,
                        wordSpacing: null,
                        writingMode: null,
                        x: null,
                        x1: null,
                        x2: null,
                        xChannelSelector: null,
                        xHeight: tb,
                        y: null,
                        y1: null,
                        y2: null,
                        yChannelSelector: null,
                        z: null,
                        zoomAndPan: null
                    }
                }),
                tR = tu([tO, tC, tM, tI, tD], "html"),
                tF = tu([tO, tC, tM, tI, tL], "svg");

            function tP(e) {
                if (e.allowedElements && e.disallowedElements) throw TypeError("Only one of `allowedElements` and `disallowedElements` should be defined");
                if (e.allowedElements || e.disallowedElements || e.allowElement) return t => {
                    (0, eX.Vn)(t, "element", (t, n, r) => {
                        let i;
                        if (e.allowedElements ? i = !e.allowedElements.includes(t.tagName) : e.disallowedElements && (i = e.disallowedElements.includes(t.tagName)), !i && e.allowElement && "number" == typeof n && (i = !e.allowElement(t, n, r)), i && "number" == typeof n) return e.unwrapDisallowed && t.children ? r.children.splice(n, 1, ...t.children) : r.children.splice(n, 1), n
                    })
                }
            }
            let tB = ["http", "https", "mailto", "tel"];
            var tz = n(72037),
                tj = n(48733);
            let t$ = /^data[-\w.:]+$/i,
                tU = /-[a-z]/g,
                tH = /[A-Z]/g;

            function tq(e) {
                return "-" + e.toLowerCase()
            }

            function tK(e) {
                return e.charAt(1).toUpperCase()
            }
            let tV = {
                classId: "classID",
                dataType: "datatype",
                itemId: "itemID",
                strokeDashArray: "strokeDasharray",
                strokeDashOffset: "strokeDashoffset",
                strokeLineCap: "strokeLinecap",
                strokeLineJoin: "strokeLinejoin",
                strokeMiterLimit: "strokeMiterlimit",
                typeOf: "typeof",
                xLinkActuate: "xlinkActuate",
                xLinkArcRole: "xlinkArcrole",
                xLinkHref: "xlinkHref",
                xLinkRole: "xlinkRole",
                xLinkShow: "xlinkShow",
                xLinkTitle: "xlinkTitle",
                xLinkType: "xlinkType",
                xmlnsXLink: "xmlnsXlink"
            };
            var tZ = n(78791);
            let tW = {}.hasOwnProperty,
                tG = new Set(["table", "thead", "tbody", "tfoot", "tr"]);

            function tX(e, t) {
                let n = [],
                    r = -1,
                    i;
                for (; ++r < t.children.length;) "element" === (i = t.children[r]).type ? n.push(tQ(e, i, r, t)) : "text" === i.type ? "element" === t.type && tG.has(t.tagName) && (0, tj.Q)(i) || n.push(i.value) : "raw" !== i.type || e.options.skipHtml || n.push(i.value);
                return n
            }

            function tQ(e, t, n, r) {
                var i;
                let a = e.options,
                    l = e.schema,
                    s = t.tagName,
                    c = {},
                    u = l,
                    d;
                if ("html" === l.space && "svg" === s && (u = tF, e.schema = u), t.properties)
                    for (d in t.properties) tW.call(t.properties, d) && tJ(c, d, t.properties[d], e);
                ("ol" === s || "ul" === s) && e.listDepth++;
                let f = tX(e, t);
                ("ol" === s || "ul" === s) && e.listDepth--, e.schema = l;
                let p = t.position || {
                        start: {
                            line: null,
                            column: null,
                            offset: null
                        },
                        end: {
                            line: null,
                            column: null,
                            offset: null
                        }
                    },
                    g = a.components && tW.call(a.components, s) ? a.components[s] : s,
                    m = "string" == typeof g || g === o.Fragment;
                if (!tz.isValidElementType(g)) throw TypeError(`Component for name \`${s}\` not defined or is not renderable`);
                if (c.key = [s, p.start.line, p.start.column, n].join("-"), "a" === s && a.linkTarget && (c.target = "function" == typeof a.linkTarget ? a.linkTarget(String(c.href || ""), t.children, "string" == typeof c.title ? c.title : null) : a.linkTarget), "a" === s && a.transformLinkUri && (c.href = a.transformLinkUri(String(c.href || ""), t.children, "string" == typeof c.title ? c.title : null)), m || "code" !== s || "element" !== r.type || "pre" === r.tagName || (c.inline = !0), m || "h1" !== s && "h2" !== s && "h3" !== s && "h4" !== s && "h5" !== s && "h6" !== s || (c.level = Number.parseInt(s.charAt(1), 10)), "img" === s && a.transformImageUri && (c.src = a.transformImageUri(String(c.src || ""), String(c.alt || ""), "string" == typeof c.title ? c.title : null)), !m && "li" === s && "element" === r.type) {
                    let h = function(e) {
                        let t = -1;
                        for (; ++t < e.children.length;) {
                            let n = e.children[t];
                            if ("element" === n.type && "input" === n.tagName) return n
                        }
                        return null
                    }(t);
                    c.checked = h && h.properties ? Boolean(h.properties.checked) : null, c.index = tY(r, t), c.ordered = "ol" === r.tagName
                }
                return m || "ol" !== s && "ul" !== s || (c.ordered = "ol" === s, c.depth = e.listDepth), "td" !== s && "th" !== s || (c.align && (c.style || (c.style = {}), c.style.textAlign = c.align, delete c.align), m || (c.isHeader = "th" === s)), m || "tr" !== s || "element" !== r.type || (c.isHeader = Boolean("thead" === r.tagName)), a.sourcePos && (c["data-sourcepos"] = (i = p, [i.start.line, ":", i.start.column, "-", i.end.line, ":", i.end.column].map(e => String(e)).join(""))), !m && a.rawSourcePos && (c.sourcePosition = t.position), !m && a.includeElementIndex && (c.index = tY(r, t), c.siblingCount = tY(r)), m || (c.node = t), f.length > 0 ? o.createElement(g, c, f) : o.createElement(g, c)
            }

            function tY(e, t) {
                let n = -1,
                    r = 0;
                for (; ++n < e.children.length && e.children[n] !== t;) "element" === e.children[n].type && r++;
                return r
            }

            function tJ(e, t, n, r) {
                let i = function(e, t) {
                        let n = td(t),
                            r = t,
                            i = tf;
                        if (n in e.normal) return e.property[e.normal[n]];
                        if (n.length > 4 && "data" === n.slice(0, 4) && t$.test(t)) {
                            if ("-" === t.charAt(4)) {
                                let o = t.slice(5).replace(tU, tK);
                                r = "data" + o.charAt(0).toUpperCase() + o.slice(1)
                            } else {
                                let a = t.slice(4);
                                if (!tU.test(a)) {
                                    let l = a.replace(tH, tq);
                                    "-" !== l.charAt(0) && (l = "-" + l), t = "data" + l
                                }
                            }
                            i = tw
                        }
                        return new i(r, t)
                    }(r.schema, t),
                    o = n;
                if (null != o && o == o) {
                    if (Array.isArray(o)) {
                        var a, l, s;
                        o = i.commaSeparated ? (l = {}, "" === (a = o)[a.length - 1] && (a = a.concat("")), a.join((l.padRight ? " " : "") + "," + (!1 === l.padLeft ? "" : " ")).trim()) : (s = o).join(" ").trim()
                    }
                    "style" === i.property && "string" == typeof o && (o = function(e) {
                        let t = {};
                        try {
                            tZ(e, function(e, n) {
                                let r = "-ms-" === e.slice(0, 4) ? `ms-${e.slice(4)}` : e;
                                t[r.replace(/-([a-z])/g, t0)] = n
                            })
                        } catch {}
                        return t
                    }(o)), i.space && i.property ? e[tW.call(tV, i.property) ? tV[i.property] : i.property] = o : i.attribute && (e[i.attribute] = o)
                }
            }

            function t0(e, t) {
                return t.toUpperCase()
            }
            let t1 = {}.hasOwnProperty,
                t2 = {
                    plugins: {
                        to: "plugins",
                        id: "change-plugins-to-remarkplugins"
                    },
                    renderers: {
                        to: "components",
                        id: "change-renderers-to-components"
                    },
                    astPlugins: {
                        id: "remove-buggy-html-in-markdown-parser"
                    },
                    allowDangerousHtml: {
                        id: "remove-buggy-html-in-markdown-parser"
                    },
                    escapeHtml: {
                        id: "remove-buggy-html-in-markdown-parser"
                    },
                    source: {
                        to: "children",
                        id: "change-source-to-children"
                    },
                    allowNode: {
                        to: "allowElement",
                        id: "replace-allownode-allowedtypes-and-disallowedtypes"
                    },
                    allowedTypes: {
                        to: "allowedElements",
                        id: "replace-allownode-allowedtypes-and-disallowedtypes"
                    },
                    disallowedTypes: {
                        to: "disallowedElements",
                        id: "replace-allownode-allowedtypes-and-disallowedtypes"
                    },
                    includeNodeIndex: {
                        to: "includeElementIndex",
                        id: "change-includenodeindex-to-includeelementindex"
                    }
                };

            function t3(e) {
                for (let t in t2)
                    if (t1.call(t2, t) && t1.call(e, t)) {
                        let n = t2[t];
                        console.warn(`[react-markdown] Warning: please ${n.to?`use \`${n.to}\` instead of`:"remove"} \`${t}\` (see <https://github.com/remarkjs/react-markdown/blob/main/changelog.md#${n.id}> for more info)`), delete t2[t]
                    }
                let r = E().use(eW).use(e.remarkPlugins || []).use(tl, { ...e.remarkRehypeOptions,
                        allowDangerousHtml: !0
                    }).use(e.rehypePlugins || []).use(tP, e),
                    i = new b;
                "string" == typeof e.children ? i.value = e.children : void 0 !== e.children && null !== e.children && console.warn(`[react-markdown] Warning: please pass a string as \`children\` (not: \`${e.children}\`)`);
                let a = r.runSync(r.parse(i), i);
                if ("root" !== a.type) throw TypeError("Expected a `root` node");
                let l = o.createElement(o.Fragment, {}, tX({
                    options: e,
                    schema: tR,
                    listDepth: 0
                }, a));
                return e.className && (l = o.createElement("div", {
                    className: e.className
                }, l)), l
            }
            t3.defaultProps = {
                transformLinkUri: function(e) {
                    let t = (e || "").trim(),
                        n = t.charAt(0);
                    if ("#" === n || "/" === n) return t;
                    let r = t.indexOf(":");
                    if (-1 === r) return t;
                    let i = -1;
                    for (; ++i < tB.length;) {
                        let o = tB[i];
                        if (r === o.length && t.slice(0, o.length).toLowerCase() === o) return t
                    }
                    return -1 !== (i = t.indexOf("?")) && r > i || -1 !== (i = t.indexOf("#")) && r > i ? t : "javascript:void(0)"
                }
            }, t3.propTypes = {
                children: ts.string,
                className: ts.string,
                allowElement: ts.func,
                allowedElements: ts.arrayOf(ts.string),
                disallowedElements: ts.arrayOf(ts.string),
                unwrapDisallowed: ts.bool,
                remarkPlugins: ts.arrayOf(ts.oneOfType([ts.object, ts.func, ts.arrayOf(ts.oneOfType([ts.bool, ts.string, ts.object, ts.func, ts.arrayOf(ts.any)]))])),
                rehypePlugins: ts.arrayOf(ts.oneOfType([ts.object, ts.func, ts.arrayOf(ts.oneOfType([ts.bool, ts.string, ts.object, ts.func, ts.arrayOf(ts.any)]))])),
                sourcePos: ts.bool,
                rawSourcePos: ts.bool,
                skipHtml: ts.bool,
                includeElementIndex: ts.bool,
                transformLinkUri: ts.oneOfType([ts.func, ts.bool]),
                linkTarget: ts.oneOfType([ts.func, ts.string]),
                transformImageUri: ts.func,
                components: ts.object
            }
        },
        2155: function(e, t, n) {
            "use strict";
            n.d(t, {
                Z: function() {
                    return eU
                }
            });
            let r = e => ({
                    IMPORTANT: {
                        scope: "meta",
                        begin: "!important"
                    },
                    BLOCK_COMMENT: e.C_BLOCK_COMMENT_MODE,
                    HEXCOLOR: {
                        scope: "number",
                        begin: /#(([0-9a-fA-F]{3,4})|(([0-9a-fA-F]{2}){3,4}))\b/
                    },
                    FUNCTION_DISPATCH: {
                        className: "built_in",
                        begin: /[\w-]+(?=\()/
                    },
                    ATTRIBUTE_SELECTOR_MODE: {
                        scope: "selector-attr",
                        begin: /\[/,
                        end: /\]/,
                        illegal: "$",
                        contains: [e.APOS_STRING_MODE, e.QUOTE_STRING_MODE]
                    },
                    CSS_NUMBER_MODE: {
                        scope: "number",
                        begin: e.NUMBER_RE + "(%|em|ex|ch|rem|vw|vh|vmin|vmax|cm|mm|in|pt|pc|px|deg|grad|rad|turn|s|ms|Hz|kHz|dpi|dpcm|dppx)?",
                        relevance: 0
                    },
                    CSS_VARIABLE: {
                        className: "attr",
                        begin: /--[A-Za-z][A-Za-z0-9_-]*/
                    }
                }),
                i = ["a", "abbr", "address", "article", "aside", "audio", "b", "blockquote", "body", "button", "canvas", "caption", "cite", "code", "dd", "del", "details", "dfn", "div", "dl", "dt", "em", "fieldset", "figcaption", "figure", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "header", "hgroup", "html", "i", "iframe", "img", "input", "ins", "kbd", "label", "legend", "li", "main", "mark", "menu", "nav", "object", "ol", "p", "q", "quote", "samp", "section", "span", "strong", "summary", "sup", "table", "tbody", "td", "textarea", "tfoot", "th", "thead", "time", "tr", "ul", "var", "video"],
                o = ["any-hover", "any-pointer", "aspect-ratio", "color", "color-gamut", "color-index", "device-aspect-ratio", "device-height", "device-width", "display-mode", "forced-colors", "grid", "height", "hover", "inverted-colors", "monochrome", "orientation", "overflow-block", "overflow-inline", "pointer", "prefers-color-scheme", "prefers-contrast", "prefers-reduced-motion", "prefers-reduced-transparency", "resolution", "scan", "scripting", "update", "width", "min-width", "max-width", "min-height", "max-height"],
                a = ["active", "any-link", "blank", "checked", "current", "default", "defined", "dir", "disabled", "drop", "empty", "enabled", "first", "first-child", "first-of-type", "fullscreen", "future", "focus", "focus-visible", "focus-within", "has", "host", "host-context", "hover", "indeterminate", "in-range", "invalid", "is", "lang", "last-child", "last-of-type", "left", "link", "local-link", "not", "nth-child", "nth-col", "nth-last-child", "nth-last-col", "nth-last-of-type", "nth-of-type", "only-child", "only-of-type", "optional", "out-of-range", "past", "placeholder-shown", "read-only", "read-write", "required", "right", "root", "scope", "target", "target-within", "user-invalid", "valid", "visited", "where"],
                l = ["after", "backdrop", "before", "cue", "cue-region", "first-letter", "first-line", "grammar-error", "marker", "part", "placeholder", "selection", "slotted", "spelling-error"],
                s = ["align-content", "align-items", "align-self", "all", "animation", "animation-delay", "animation-direction", "animation-duration", "animation-fill-mode", "animation-iteration-count", "animation-name", "animation-play-state", "animation-timing-function", "backface-visibility", "background", "background-attachment", "background-blend-mode", "background-clip", "background-color", "background-image", "background-origin", "background-position", "background-repeat", "background-size", "block-size", "border", "border-block", "border-block-color", "border-block-end", "border-block-end-color", "border-block-end-style", "border-block-end-width", "border-block-start", "border-block-start-color", "border-block-start-style", "border-block-start-width", "border-block-style", "border-block-width", "border-bottom", "border-bottom-color", "border-bottom-left-radius", "border-bottom-right-radius", "border-bottom-style", "border-bottom-width", "border-collapse", "border-color", "border-image", "border-image-outset", "border-image-repeat", "border-image-slice", "border-image-source", "border-image-width", "border-inline", "border-inline-color", "border-inline-end", "border-inline-end-color", "border-inline-end-style", "border-inline-end-width", "border-inline-start", "border-inline-start-color", "border-inline-start-style", "border-inline-start-width", "border-inline-style", "border-inline-width", "border-left", "border-left-color", "border-left-style", "border-left-width", "border-radius", "border-right", "border-right-color", "border-right-style", "border-right-width", "border-spacing", "border-style", "border-top", "border-top-color", "border-top-left-radius", "border-top-right-radius", "border-top-style", "border-top-width", "border-width", "bottom", "box-decoration-break", "box-shadow", "box-sizing", "break-after", "break-before", "break-inside", "caption-side", "caret-color", "clear", "clip", "clip-path", "clip-rule", "color", "column-count", "column-fill", "column-gap", "column-rule", "column-rule-color", "column-rule-style", "column-rule-width", "column-span", "column-width", "columns", "contain", "content", "content-visibility", "counter-increment", "counter-reset", "cue", "cue-after", "cue-before", "cursor", "direction", "display", "empty-cells", "filter", "flex", "flex-basis", "flex-direction", "flex-flow", "flex-grow", "flex-shrink", "flex-wrap", "float", "flow", "font", "font-display", "font-family", "font-feature-settings", "font-kerning", "font-language-override", "font-size", "font-size-adjust", "font-smoothing", "font-stretch", "font-style", "font-synthesis", "font-variant", "font-variant-caps", "font-variant-east-asian", "font-variant-ligatures", "font-variant-numeric", "font-variant-position", "font-variation-settings", "font-weight", "gap", "glyph-orientation-vertical", "grid", "grid-area", "grid-auto-columns", "grid-auto-flow", "grid-auto-rows", "grid-column", "grid-column-end", "grid-column-start", "grid-gap", "grid-row", "grid-row-end", "grid-row-start", "grid-template", "grid-template-areas", "grid-template-columns", "grid-template-rows", "hanging-punctuation", "height", "hyphens", "icon", "image-orientation", "image-rendering", "image-resolution", "ime-mode", "inline-size", "isolation", "justify-content", "left", "letter-spacing", "line-break", "line-height", "list-style", "list-style-image", "list-style-position", "list-style-type", "margin", "margin-block", "margin-block-end", "margin-block-start", "margin-bottom", "margin-inline", "margin-inline-end", "margin-inline-start", "margin-left", "margin-right", "margin-top", "marks", "mask", "mask-border", "mask-border-mode", "mask-border-outset", "mask-border-repeat", "mask-border-slice", "mask-border-source", "mask-border-width", "mask-clip", "mask-composite", "mask-image", "mask-mode", "mask-origin", "mask-position", "mask-repeat", "mask-size", "mask-type", "max-block-size", "max-height", "max-inline-size", "max-width", "min-block-size", "min-height", "min-inline-size", "min-width", "mix-blend-mode", "nav-down", "nav-index", "nav-left", "nav-right", "nav-up", "none", "normal", "object-fit", "object-position", "opacity", "order", "orphans", "outline", "outline-color", "outline-offset", "outline-style", "outline-width", "overflow", "overflow-wrap", "overflow-x", "overflow-y", "padding", "padding-block", "padding-block-end", "padding-block-start", "padding-bottom", "padding-inline", "padding-inline-end", "padding-inline-start", "padding-left", "padding-right", "padding-top", "page-break-after", "page-break-before", "page-break-inside", "pause", "pause-after", "pause-before", "perspective", "perspective-origin", "pointer-events", "position", "quotes", "resize", "rest", "rest-after", "rest-before", "right", "row-gap", "scroll-margin", "scroll-margin-block", "scroll-margin-block-end", "scroll-margin-block-start", "scroll-margin-bottom", "scroll-margin-inline", "scroll-margin-inline-end", "scroll-margin-inline-start", "scroll-margin-left", "scroll-margin-right", "scroll-margin-top", "scroll-padding", "scroll-padding-block", "scroll-padding-block-end", "scroll-padding-block-start", "scroll-padding-bottom", "scroll-padding-inline", "scroll-padding-inline-end", "scroll-padding-inline-start", "scroll-padding-left", "scroll-padding-right", "scroll-padding-top", "scroll-snap-align", "scroll-snap-stop", "scroll-snap-type", "scrollbar-color", "scrollbar-gutter", "scrollbar-width", "shape-image-threshold", "shape-margin", "shape-outside", "speak", "speak-as", "src", "tab-size", "table-layout", "text-align", "text-align-all", "text-align-last", "text-combine-upright", "text-decoration", "text-decoration-color", "text-decoration-line", "text-decoration-style", "text-emphasis", "text-emphasis-color", "text-emphasis-position", "text-emphasis-style", "text-indent", "text-justify", "text-orientation", "text-overflow", "text-rendering", "text-shadow", "text-transform", "text-underline-position", "top", "transform", "transform-box", "transform-origin", "transform-style", "transition", "transition-delay", "transition-duration", "transition-property", "transition-timing-function", "unicode-bidi", "vertical-align", "visibility", "voice-balance", "voice-duration", "voice-family", "voice-pitch", "voice-range", "voice-rate", "voice-stress", "voice-volume", "white-space", "widows", "width", "will-change", "word-break", "word-spacing", "word-wrap", "writing-mode", "z-index"].reverse();
            var c = "[0-9](_*[0-9])*",
                u = `\\.(${c})`,
                d = "[0-9a-fA-F](_*[0-9a-fA-F])*",
                f = {
                    className: "number",
                    variants: [{
                        begin: `(\\b(${c})((${u})|\\.)?|(${u}))[eE][+-]?(${c})[fFdD]?\\b`
                    }, {
                        begin: `\\b(${c})((${u})[fFdD]?\\b|\\.([fFdD]\\b)?)`
                    }, {
                        begin: `(${u})[fFdD]?\\b`
                    }, {
                        begin: `\\b(${c})[fFdD]\\b`
                    }, {
                        begin: `\\b0[xX]((${d})\\.?|(${d})?\\.(${d}))[pP][+-]?(${c})[fFdD]?\\b`
                    }, {
                        begin: "\\b(0|[1-9](_*[0-9])*)[lL]?\\b"
                    }, {
                        begin: `\\b0[xX](${d})[lL]?\\b`
                    }, {
                        begin: "\\b0(_*[0-7])*[lL]?\\b"
                    }, {
                        begin: "\\b0[bB][01](_*[01])*[lL]?\\b"
                    }, ],
                    relevance: 0
                };
            let p = "[A-Za-z$_][0-9A-Za-z$_]*",
                g = ["as", "in", "of", "if", "for", "while", "finally", "var", "new", "function", "do", "return", "void", "else", "break", "catch", "instanceof", "with", "throw", "case", "default", "try", "switch", "continue", "typeof", "delete", "let", "yield", "const", "class", "debugger", "async", "await", "static", "import", "from", "export", "extends"],
                m = ["true", "false", "null", "undefined", "NaN", "Infinity"],
                h = ["Object", "Function", "Boolean", "Symbol", "Math", "Date", "Number", "BigInt", "String", "RegExp", "Array", "Float32Array", "Float64Array", "Int8Array", "Uint8Array", "Uint8ClampedArray", "Int16Array", "Int32Array", "Uint16Array", "Uint32Array", "BigInt64Array", "BigUint64Array", "Set", "Map", "WeakSet", "WeakMap", "ArrayBuffer", "SharedArrayBuffer", "Atomics", "DataView", "JSON", "Promise", "Generator", "GeneratorFunction", "AsyncFunction", "Reflect", "Proxy", "Intl", "WebAssembly"],
                b = ["Error", "EvalError", "InternalError", "RangeError", "ReferenceError", "SyntaxError", "TypeError", "URIError"],
                y = ["setInterval", "setTimeout", "clearInterval", "clearTimeout", "require", "exports", "eval", "isFinite", "isNaN", "parseFloat", "parseInt", "decodeURI", "decodeURIComponent", "encodeURI", "encodeURIComponent", "escape", "unescape"],
                v = ["arguments", "this", "super", "console", "window", "document", "localStorage", "module", "global"],
                k = [].concat(y, h, b);
            var x = "[0-9](_*[0-9])*",
                _ = `\\.(${x})`,
                w = "[0-9a-fA-F](_*[0-9a-fA-F])*",
                E = {
                    className: "number",
                    variants: [{
                        begin: `(\\b(${x})((${_})|\\.)?|(${_}))[eE][+-]?(${x})[fFdD]?\\b`
                    }, {
                        begin: `\\b(${x})((${_})[fFdD]?\\b|\\.([fFdD]\\b)?)`
                    }, {
                        begin: `(${_})[fFdD]?\\b`
                    }, {
                        begin: `\\b(${x})[fFdD]\\b`
                    }, {
                        begin: `\\b0[xX]((${w})\\.?|(${w})?\\.(${w}))[pP][+-]?(${x})[fFdD]?\\b`
                    }, {
                        begin: "\\b(0|[1-9](_*[0-9])*)[lL]?\\b"
                    }, {
                        begin: `\\b0[xX](${w})[lL]?\\b`
                    }, {
                        begin: "\\b0(_*[0-7])*[lL]?\\b"
                    }, {
                        begin: "\\b0[bB][01](_*[01])*[lL]?\\b"
                    }, ],
                    relevance: 0
                };
            let S = e => ({
                    IMPORTANT: {
                        scope: "meta",
                        begin: "!important"
                    },
                    BLOCK_COMMENT: e.C_BLOCK_COMMENT_MODE,
                    HEXCOLOR: {
                        scope: "number",
                        begin: /#(([0-9a-fA-F]{3,4})|(([0-9a-fA-F]{2}){3,4}))\b/
                    },
                    FUNCTION_DISPATCH: {
                        className: "built_in",
                        begin: /[\w-]+(?=\()/
                    },
                    ATTRIBUTE_SELECTOR_MODE: {
                        scope: "selector-attr",
                        begin: /\[/,
                        end: /\]/,
                        illegal: "$",
                        contains: [e.APOS_STRING_MODE, e.QUOTE_STRING_MODE]
                    },
                    CSS_NUMBER_MODE: {
                        scope: "number",
                        begin: e.NUMBER_RE + "(%|em|ex|ch|rem|vw|vh|vmin|vmax|cm|mm|in|pt|pc|px|deg|grad|rad|turn|s|ms|Hz|kHz|dpi|dpcm|dppx)?",
                        relevance: 0
                    },
                    CSS_VARIABLE: {
                        className: "attr",
                        begin: /--[A-Za-z][A-Za-z0-9_-]*/
                    }
                }),
                N = ["a", "abbr", "address", "article", "aside", "audio", "b", "blockquote", "body", "button", "canvas", "caption", "cite", "code", "dd", "del", "details", "dfn", "div", "dl", "dt", "em", "fieldset", "figcaption", "figure", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "header", "hgroup", "html", "i", "iframe", "img", "input", "ins", "kbd", "label", "legend", "li", "main", "mark", "menu", "nav", "object", "ol", "p", "q", "quote", "samp", "section", "span", "strong", "summary", "sup", "table", "tbody", "td", "textarea", "tfoot", "th", "thead", "time", "tr", "ul", "var", "video"],
                C = ["any-hover", "any-pointer", "aspect-ratio", "color", "color-gamut", "color-index", "device-aspect-ratio", "device-height", "device-width", "display-mode", "forced-colors", "grid", "height", "hover", "inverted-colors", "monochrome", "orientation", "overflow-block", "overflow-inline", "pointer", "prefers-color-scheme", "prefers-contrast", "prefers-reduced-motion", "prefers-reduced-transparency", "resolution", "scan", "scripting", "update", "width", "min-width", "max-width", "min-height", "max-height"],
                O = ["active", "any-link", "blank", "checked", "current", "default", "defined", "dir", "disabled", "drop", "empty", "enabled", "first", "first-child", "first-of-type", "fullscreen", "future", "focus", "focus-visible", "focus-within", "has", "host", "host-context", "hover", "indeterminate", "in-range", "invalid", "is", "lang", "last-child", "last-of-type", "left", "link", "local-link", "not", "nth-child", "nth-col", "nth-last-child", "nth-last-col", "nth-last-of-type", "nth-of-type", "only-child", "only-of-type", "optional", "out-of-range", "past", "placeholder-shown", "read-only", "read-write", "required", "right", "root", "scope", "target", "target-within", "user-invalid", "valid", "visited", "where"],
                A = ["after", "backdrop", "before", "cue", "cue-region", "first-letter", "first-line", "grammar-error", "marker", "part", "placeholder", "selection", "slotted", "spelling-error"],
                T = ["align-content", "align-items", "align-self", "all", "animation", "animation-delay", "animation-direction", "animation-duration", "animation-fill-mode", "animation-iteration-count", "animation-name", "animation-play-state", "animation-timing-function", "backface-visibility", "background", "background-attachment", "background-blend-mode", "background-clip", "background-color", "background-image", "background-origin", "background-position", "background-repeat", "background-size", "block-size", "border", "border-block", "border-block-color", "border-block-end", "border-block-end-color", "border-block-end-style", "border-block-end-width", "border-block-start", "border-block-start-color", "border-block-start-style", "border-block-start-width", "border-block-style", "border-block-width", "border-bottom", "border-bottom-color", "border-bottom-left-radius", "border-bottom-right-radius", "border-bottom-style", "border-bottom-width", "border-collapse", "border-color", "border-image", "border-image-outset", "border-image-repeat", "border-image-slice", "border-image-source", "border-image-width", "border-inline", "border-inline-color", "border-inline-end", "border-inline-end-color", "border-inline-end-style", "border-inline-end-width", "border-inline-start", "border-inline-start-color", "border-inline-start-style", "border-inline-start-width", "border-inline-style", "border-inline-width", "border-left", "border-left-color", "border-left-style", "border-left-width", "border-radius", "border-right", "border-right-color", "border-right-style", "border-right-width", "border-spacing", "border-style", "border-top", "border-top-color", "border-top-left-radius", "border-top-right-radius", "border-top-style", "border-top-width", "border-width", "bottom", "box-decoration-break", "box-shadow", "box-sizing", "break-after", "break-before", "break-inside", "caption-side", "caret-color", "clear", "clip", "clip-path", "clip-rule", "color", "column-count", "column-fill", "column-gap", "column-rule", "column-rule-color", "column-rule-style", "column-rule-width", "column-span", "column-width", "columns", "contain", "content", "content-visibility", "counter-increment", "counter-reset", "cue", "cue-after", "cue-before", "cursor", "direction", "display", "empty-cells", "filter", "flex", "flex-basis", "flex-direction", "flex-flow", "flex-grow", "flex-shrink", "flex-wrap", "float", "flow", "font", "font-display", "font-family", "font-feature-settings", "font-kerning", "font-language-override", "font-size", "font-size-adjust", "font-smoothing", "font-stretch", "font-style", "font-synthesis", "font-variant", "font-variant-caps", "font-variant-east-asian", "font-variant-ligatures", "font-variant-numeric", "font-variant-position", "font-variation-settings", "font-weight", "gap", "glyph-orientation-vertical", "grid", "grid-area", "grid-auto-columns", "grid-auto-flow", "grid-auto-rows", "grid-column", "grid-column-end", "grid-column-start", "grid-gap", "grid-row", "grid-row-end", "grid-row-start", "grid-template", "grid-template-areas", "grid-template-columns", "grid-template-rows", "hanging-punctuation", "height", "hyphens", "icon", "image-orientation", "image-rendering", "image-resolution", "ime-mode", "inline-size", "isolation", "justify-content", "left", "letter-spacing", "line-break", "line-height", "list-style", "list-style-image", "list-style-position", "list-style-type", "margin", "margin-block", "margin-block-end", "margin-block-start", "margin-bottom", "margin-inline", "margin-inline-end", "margin-inline-start", "margin-left", "margin-right", "margin-top", "marks", "mask", "mask-border", "mask-border-mode", "mask-border-outset", "mask-border-repeat", "mask-border-slice", "mask-border-source", "mask-border-width", "mask-clip", "mask-composite", "mask-image", "mask-mode", "mask-origin", "mask-position", "mask-repeat", "mask-size", "mask-type", "max-block-size", "max-height", "max-inline-size", "max-width", "min-block-size", "min-height", "min-inline-size", "min-width", "mix-blend-mode", "nav-down", "nav-index", "nav-left", "nav-right", "nav-up", "none", "normal", "object-fit", "object-position", "opacity", "order", "orphans", "outline", "outline-color", "outline-offset", "outline-style", "outline-width", "overflow", "overflow-wrap", "overflow-x", "overflow-y", "padding", "padding-block", "padding-block-end", "padding-block-start", "padding-bottom", "padding-inline", "padding-inline-end", "padding-inline-start", "padding-left", "padding-right", "padding-top", "page-break-after", "page-break-before", "page-break-inside", "pause", "pause-after", "pause-before", "perspective", "perspective-origin", "pointer-events", "position", "quotes", "resize", "rest", "rest-after", "rest-before", "right", "row-gap", "scroll-margin", "scroll-margin-block", "scroll-margin-block-end", "scroll-margin-block-start", "scroll-margin-bottom", "scroll-margin-inline", "scroll-margin-inline-end", "scroll-margin-inline-start", "scroll-margin-left", "scroll-margin-right", "scroll-margin-top", "scroll-padding", "scroll-padding-block", "scroll-padding-block-end", "scroll-padding-block-start", "scroll-padding-bottom", "scroll-padding-inline", "scroll-padding-inline-end", "scroll-padding-inline-start", "scroll-padding-left", "scroll-padding-right", "scroll-padding-top", "scroll-snap-align", "scroll-snap-stop", "scroll-snap-type", "scrollbar-color", "scrollbar-gutter", "scrollbar-width", "shape-image-threshold", "shape-margin", "shape-outside", "speak", "speak-as", "src", "tab-size", "table-layout", "text-align", "text-align-all", "text-align-last", "text-combine-upright", "text-decoration", "text-decoration-color", "text-decoration-line", "text-decoration-style", "text-emphasis", "text-emphasis-color", "text-emphasis-position", "text-emphasis-style", "text-indent", "text-justify", "text-orientation", "text-overflow", "text-rendering", "text-shadow", "text-transform", "text-underline-position", "top", "transform", "transform-box", "transform-origin", "transform-style", "transition", "transition-delay", "transition-duration", "transition-property", "transition-timing-function", "unicode-bidi", "vertical-align", "visibility", "voice-balance", "voice-duration", "voice-family", "voice-pitch", "voice-range", "voice-rate", "voice-stress", "voice-volume", "white-space", "widows", "width", "will-change", "word-break", "word-spacing", "word-wrap", "writing-mode", "z-index"].reverse(),
                M = O.concat(A),
                I = e => ({
                    IMPORTANT: {
                        scope: "meta",
                        begin: "!important"
                    },
                    BLOCK_COMMENT: e.C_BLOCK_COMMENT_MODE,
                    HEXCOLOR: {
                        scope: "number",
                        begin: /#(([0-9a-fA-F]{3,4})|(([0-9a-fA-F]{2}){3,4}))\b/
                    },
                    FUNCTION_DISPATCH: {
                        className: "built_in",
                        begin: /[\w-]+(?=\()/
                    },
                    ATTRIBUTE_SELECTOR_MODE: {
                        scope: "selector-attr",
                        begin: /\[/,
                        end: /\]/,
                        illegal: "$",
                        contains: [e.APOS_STRING_MODE, e.QUOTE_STRING_MODE]
                    },
                    CSS_NUMBER_MODE: {
                        scope: "number",
                        begin: e.NUMBER_RE + "(%|em|ex|ch|rem|vw|vh|vmin|vmax|cm|mm|in|pt|pc|px|deg|grad|rad|turn|s|ms|Hz|kHz|dpi|dpcm|dppx)?",
                        relevance: 0
                    },
                    CSS_VARIABLE: {
                        className: "attr",
                        begin: /--[A-Za-z][A-Za-z0-9_-]*/
                    }
                }),
                D = ["a", "abbr", "address", "article", "aside", "audio", "b", "blockquote", "body", "button", "canvas", "caption", "cite", "code", "dd", "del", "details", "dfn", "div", "dl", "dt", "em", "fieldset", "figcaption", "figure", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "header", "hgroup", "html", "i", "iframe", "img", "input", "ins", "kbd", "label", "legend", "li", "main", "mark", "menu", "nav", "object", "ol", "p", "q", "quote", "samp", "section", "span", "strong", "summary", "sup", "table", "tbody", "td", "textarea", "tfoot", "th", "thead", "time", "tr", "ul", "var", "video"],
                L = ["any-hover", "any-pointer", "aspect-ratio", "color", "color-gamut", "color-index", "device-aspect-ratio", "device-height", "device-width", "display-mode", "forced-colors", "grid", "height", "hover", "inverted-colors", "monochrome", "orientation", "overflow-block", "overflow-inline", "pointer", "prefers-color-scheme", "prefers-contrast", "prefers-reduced-motion", "prefers-reduced-transparency", "resolution", "scan", "scripting", "update", "width", "min-width", "max-width", "min-height", "max-height"],
                R = ["active", "any-link", "blank", "checked", "current", "default", "defined", "dir", "disabled", "drop", "empty", "enabled", "first", "first-child", "first-of-type", "fullscreen", "future", "focus", "focus-visible", "focus-within", "has", "host", "host-context", "hover", "indeterminate", "in-range", "invalid", "is", "lang", "last-child", "last-of-type", "left", "link", "local-link", "not", "nth-child", "nth-col", "nth-last-child", "nth-last-col", "nth-last-of-type", "nth-of-type", "only-child", "only-of-type", "optional", "out-of-range", "past", "placeholder-shown", "read-only", "read-write", "required", "right", "root", "scope", "target", "target-within", "user-invalid", "valid", "visited", "where"],
                F = ["after", "backdrop", "before", "cue", "cue-region", "first-letter", "first-line", "grammar-error", "marker", "part", "placeholder", "selection", "slotted", "spelling-error"],
                P = ["align-content", "align-items", "align-self", "all", "animation", "animation-delay", "animation-direction", "animation-duration", "animation-fill-mode", "animation-iteration-count", "animation-name", "animation-play-state", "animation-timing-function", "backface-visibility", "background", "background-attachment", "background-blend-mode", "background-clip", "background-color", "background-image", "background-origin", "background-position", "background-repeat", "background-size", "block-size", "border", "border-block", "border-block-color", "border-block-end", "border-block-end-color", "border-block-end-style", "border-block-end-width", "border-block-start", "border-block-start-color", "border-block-start-style", "border-block-start-width", "border-block-style", "border-block-width", "border-bottom", "border-bottom-color", "border-bottom-left-radius", "border-bottom-right-radius", "border-bottom-style", "border-bottom-width", "border-collapse", "border-color", "border-image", "border-image-outset", "border-image-repeat", "border-image-slice", "border-image-source", "border-image-width", "border-inline", "border-inline-color", "border-inline-end", "border-inline-end-color", "border-inline-end-style", "border-inline-end-width", "border-inline-start", "border-inline-start-color", "border-inline-start-style", "border-inline-start-width", "border-inline-style", "border-inline-width", "border-left", "border-left-color", "border-left-style", "border-left-width", "border-radius", "border-right", "border-right-color", "border-right-style", "border-right-width", "border-spacing", "border-style", "border-top", "border-top-color", "border-top-left-radius", "border-top-right-radius", "border-top-style", "border-top-width", "border-width", "bottom", "box-decoration-break", "box-shadow", "box-sizing", "break-after", "break-before", "break-inside", "caption-side", "caret-color", "clear", "clip", "clip-path", "clip-rule", "color", "column-count", "column-fill", "column-gap", "column-rule", "column-rule-color", "column-rule-style", "column-rule-width", "column-span", "column-width", "columns", "contain", "content", "content-visibility", "counter-increment", "counter-reset", "cue", "cue-after", "cue-before", "cursor", "direction", "display", "empty-cells", "filter", "flex", "flex-basis", "flex-direction", "flex-flow", "flex-grow", "flex-shrink", "flex-wrap", "float", "flow", "font", "font-display", "font-family", "font-feature-settings", "font-kerning", "font-language-override", "font-size", "font-size-adjust", "font-smoothing", "font-stretch", "font-style", "font-synthesis", "font-variant", "font-variant-caps", "font-variant-east-asian", "font-variant-ligatures", "font-variant-numeric", "font-variant-position", "font-variation-settings", "font-weight", "gap", "glyph-orientation-vertical", "grid", "grid-area", "grid-auto-columns", "grid-auto-flow", "grid-auto-rows", "grid-column", "grid-column-end", "grid-column-start", "grid-gap", "grid-row", "grid-row-end", "grid-row-start", "grid-template", "grid-template-areas", "grid-template-columns", "grid-template-rows", "hanging-punctuation", "height", "hyphens", "icon", "image-orientation", "image-rendering", "image-resolution", "ime-mode", "inline-size", "isolation", "justify-content", "left", "letter-spacing", "line-break", "line-height", "list-style", "list-style-image", "list-style-position", "list-style-type", "margin", "margin-block", "margin-block-end", "margin-block-start", "margin-bottom", "margin-inline", "margin-inline-end", "margin-inline-start", "margin-left", "margin-right", "margin-top", "marks", "mask", "mask-border", "mask-border-mode", "mask-border-outset", "mask-border-repeat", "mask-border-slice", "mask-border-source", "mask-border-width", "mask-clip", "mask-composite", "mask-image", "mask-mode", "mask-origin", "mask-position", "mask-repeat", "mask-size", "mask-type", "max-block-size", "max-height", "max-inline-size", "max-width", "min-block-size", "min-height", "min-inline-size", "min-width", "mix-blend-mode", "nav-down", "nav-index", "nav-left", "nav-right", "nav-up", "none", "normal", "object-fit", "object-position", "opacity", "order", "orphans", "outline", "outline-color", "outline-offset", "outline-style", "outline-width", "overflow", "overflow-wrap", "overflow-x", "overflow-y", "padding", "padding-block", "padding-block-end", "padding-block-start", "padding-bottom", "padding-inline", "padding-inline-end", "padding-inline-start", "padding-left", "padding-right", "padding-top", "page-break-after", "page-break-before", "page-break-inside", "pause", "pause-after", "pause-before", "perspective", "perspective-origin", "pointer-events", "position", "quotes", "resize", "rest", "rest-after", "rest-before", "right", "row-gap", "scroll-margin", "scroll-margin-block", "scroll-margin-block-end", "scroll-margin-block-start", "scroll-margin-bottom", "scroll-margin-inline", "scroll-margin-inline-end", "scroll-margin-inline-start", "scroll-margin-left", "scroll-margin-right", "scroll-margin-top", "scroll-padding", "scroll-padding-block", "scroll-padding-block-end", "scroll-padding-block-start", "scroll-padding-bottom", "scroll-padding-inline", "scroll-padding-inline-end", "scroll-padding-inline-start", "scroll-padding-left", "scroll-padding-right", "scroll-padding-top", "scroll-snap-align", "scroll-snap-stop", "scroll-snap-type", "scrollbar-color", "scrollbar-gutter", "scrollbar-width", "shape-image-threshold", "shape-margin", "shape-outside", "speak", "speak-as", "src", "tab-size", "table-layout", "text-align", "text-align-all", "text-align-last", "text-combine-upright", "text-decoration", "text-decoration-color", "text-decoration-line", "text-decoration-style", "text-emphasis", "text-emphasis-color", "text-emphasis-position", "text-emphasis-style", "text-indent", "text-justify", "text-orientation", "text-overflow", "text-rendering", "text-shadow", "text-transform", "text-underline-position", "top", "transform", "transform-box", "transform-origin", "transform-style", "transition", "transition-delay", "transition-duration", "transition-property", "transition-timing-function", "unicode-bidi", "vertical-align", "visibility", "voice-balance", "voice-duration", "voice-family", "voice-pitch", "voice-range", "voice-rate", "voice-stress", "voice-volume", "white-space", "widows", "width", "will-change", "word-break", "word-spacing", "word-wrap", "writing-mode", "z-index"].reverse();

            function B(e) {
                return e ? "string" == typeof e ? e : e.source : null
            }

            function z(e) {
                return j("(?=", e, ")")
            }

            function j(...e) {
                let t = e.map(e => B(e)).join("");
                return t
            }

            function $(...e) {
                let t = function(e) {
                        let t = e[e.length - 1];
                        return "object" == typeof t && t.constructor === Object ? (e.splice(e.length - 1, 1), t) : {}
                    }(e),
                    n = "(" + (t.capture ? "" : "?:") + e.map(e => B(e)).join("|") + ")";
                return n
            }
            let U = e => j(/\b/, e, /\w$/.test(e) ? /\b/ : /\B/),
                H = ["Protocol", "Type"].map(U),
                q = ["init", "self"].map(U),
                K = ["Any", "Self"],
                V = ["actor", "any", "associatedtype", "async", "await", /as\?/, /as!/, "as", "break", "case", "catch", "class", "continue", "convenience", "default", "defer", "deinit", "didSet", "distributed", "do", "dynamic", "else", "enum", "extension", "fallthrough", /fileprivate\(set\)/, "fileprivate", "final", "for", "func", "get", "guard", "if", "import", "indirect", "infix", /init\?/, /init!/, "inout", /internal\(set\)/, "internal", "in", "is", "isolated", "nonisolated", "lazy", "let", "mutating", "nonmutating", /open\(set\)/, "open", "operator", "optional", "override", "postfix", "precedencegroup", "prefix", /private\(set\)/, "private", "protocol", /public\(set\)/, "public", "repeat", "required", "rethrows", "return", "set", "some", "static", "struct", "subscript", "super", "switch", "throws", "throw", /try\?/, /try!/, "try", "typealias", /unowned\(safe\)/, /unowned\(unsafe\)/, "unowned", "var", "weak", "where", "while", "willSet"],
                Z = ["false", "nil", "true"],
                W = ["assignment", "associativity", "higherThan", "left", "lowerThan", "none", "right"],
                G = ["#colorLiteral", "#column", "#dsohandle", "#else", "#elseif", "#endif", "#error", "#file", "#fileID", "#fileLiteral", "#filePath", "#function", "#if", "#imageLiteral", "#keyPath", "#line", "#selector", "#sourceLocation", "#warn_unqualified_access", "#warning"],
                X = ["abs", "all", "any", "assert", "assertionFailure", "debugPrint", "dump", "fatalError", "getVaList", "isKnownUniquelyReferenced", "max", "min", "numericCast", "pointwiseMax", "pointwiseMin", "precondition", "preconditionFailure", "print", "readLine", "repeatElement", "sequence", "stride", "swap", "swift_unboxFromSwiftValueWithType", "transcode", "type", "unsafeBitCast", "unsafeDowncast", "withExtendedLifetime", "withUnsafeMutablePointer", "withUnsafePointer", "withVaList", "withoutActuallyEscaping", "zip"],
                Q = $(/[/=\-+!*%<>&|^~?]/, /[\u00A1-\u00A7]/, /[\u00A9\u00AB]/, /[\u00AC\u00AE]/, /[\u00B0\u00B1]/, /[\u00B6\u00BB\u00BF\u00D7\u00F7]/, /[\u2016-\u2017]/, /[\u2020-\u2027]/, /[\u2030-\u203E]/, /[\u2041-\u2053]/, /[\u2055-\u205E]/, /[\u2190-\u23FF]/, /[\u2500-\u2775]/, /[\u2794-\u2BFF]/, /[\u2E00-\u2E7F]/, /[\u3001-\u3003]/, /[\u3008-\u3020]/, /[\u3030]/),
                Y = $(Q, /[\u0300-\u036F]/, /[\u1DC0-\u1DFF]/, /[\u20D0-\u20FF]/, /[\uFE00-\uFE0F]/, /[\uFE20-\uFE2F]/),
                J = j(Q, Y, "*"),
                ee = $(/[a-zA-Z_]/, /[\u00A8\u00AA\u00AD\u00AF\u00B2-\u00B5\u00B7-\u00BA]/, /[\u00BC-\u00BE\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u00FF]/, /[\u0100-\u02FF\u0370-\u167F\u1681-\u180D\u180F-\u1DBF]/, /[\u1E00-\u1FFF]/, /[\u200B-\u200D\u202A-\u202E\u203F-\u2040\u2054\u2060-\u206F]/, /[\u2070-\u20CF\u2100-\u218F\u2460-\u24FF\u2776-\u2793]/, /[\u2C00-\u2DFF\u2E80-\u2FFF]/, /[\u3004-\u3007\u3021-\u302F\u3031-\u303F\u3040-\uD7FF]/, /[\uF900-\uFD3D\uFD40-\uFDCF\uFDF0-\uFE1F\uFE30-\uFE44]/, /[\uFE47-\uFEFE\uFF00-\uFFFD]/),
                et = $(ee, /\d/, /[\u0300-\u036F\u1DC0-\u1DFF\u20D0-\u20FF\uFE20-\uFE2F]/),
                en = j(ee, et, "*"),
                er = j(/[A-Z]/, et, "*"),
                ei = ["autoclosure", j(/convention\(/, $("swift", "block", "c"), /\)/), "discardableResult", "dynamicCallable", "dynamicMemberLookup", "escaping", "frozen", "GKInspectable", "IBAction", "IBDesignable", "IBInspectable", "IBOutlet", "IBSegueAction", "inlinable", "main", "nonobjc", "NSApplicationMain", "NSCopying", "NSManaged", j(/objc\(/, en, /\)/), "objc", "objcMembers", "propertyWrapper", "requires_stored_property_inits", "resultBuilder", "testable", "UIApplicationMain", "unknown", "usableFromInline"],
                eo = ["iOS", "iOSApplicationExtension", "macOS", "macOSApplicationExtension", "macCatalyst", "macCatalystApplicationExtension", "watchOS", "watchOSApplicationExtension", "tvOS", "tvOSApplicationExtension", "swift"],
                ea = "[A-Za-z$_][0-9A-Za-z$_]*",
                el = ["as", "in", "of", "if", "for", "while", "finally", "var", "new", "function", "do", "return", "void", "else", "break", "catch", "instanceof", "with", "throw", "case", "default", "try", "switch", "continue", "typeof", "delete", "let", "yield", "const", "class", "debugger", "async", "await", "static", "import", "from", "export", "extends"],
                es = ["true", "false", "null", "undefined", "NaN", "Infinity"],
                ec = ["Object", "Function", "Boolean", "Symbol", "Math", "Date", "Number", "BigInt", "String", "RegExp", "Array", "Float32Array", "Float64Array", "Int8Array", "Uint8Array", "Uint8ClampedArray", "Int16Array", "Int32Array", "Uint16Array", "Uint32Array", "BigInt64Array", "BigUint64Array", "Set", "Map", "WeakSet", "WeakMap", "ArrayBuffer", "SharedArrayBuffer", "Atomics", "DataView", "JSON", "Promise", "Generator", "GeneratorFunction", "AsyncFunction", "Reflect", "Proxy", "Intl", "WebAssembly"],
                eu = ["Error", "EvalError", "InternalError", "RangeError", "ReferenceError", "SyntaxError", "TypeError", "URIError"],
                ed = ["setInterval", "setTimeout", "clearInterval", "clearTimeout", "require", "exports", "eval", "isFinite", "isNaN", "parseFloat", "parseInt", "decodeURI", "decodeURIComponent", "encodeURI", "encodeURIComponent", "escape", "unescape"],
                ef = ["arguments", "this", "super", "console", "window", "document", "localStorage", "module", "global"],
                ep = [].concat(ed, ec, eu);
            var eg = n(76966),
                em = n(98544);
            let eh = Object.assign(eb(Error), {
                eval: eb(EvalError),
                range: eb(RangeError),
                reference: eb(ReferenceError),
                syntax: eb(SyntaxError),
                type: eb(TypeError),
                uri: eb(URIError)
            });

            function eb(e) {
                return t.displayName = e.displayName || e.name, t;

                function t(t, ...n) {
                    let r = t ? em(t, ...n) : t;
                    return new e(r)
                }
            }
            let ey = {}.hasOwnProperty,
                ev = "hljs-";

            function ek(e, t, n = {}) {
                let r = n.prefix;
                if ("string" != typeof e) throw eh("Expected `string` for name, got `%s`", e);
                if (!eg.getLanguage(e)) throw eh("Unknown language: `%s` is not registered", e);
                if ("string" != typeof t) throw eh("Expected `string` for value, got `%s`", t);
                null == r && (r = ev), eg.configure({
                    __emitter: e_,
                    classPrefix: r
                });
                let i = eg.highlight(t, {
                    language: e,
                    ignoreIllegals: !0
                });
                if (eg.configure({}), i.errorRaised) throw i.errorRaised;
                return i._emitter.root.data.language = i.language, i._emitter.root.data.relevance = i.relevance, i._emitter.root
            }
            let ex = function(e, t) {
                if ("string" == typeof e) eg.registerAliases(t, {
                    languageName: e
                });
                else {
                    let n;
                    for (n in e) ey.call(e, n) && eg.registerAliases(e[n], {
                        languageName: n
                    })
                }
            };
            class e_ {
                constructor(e) {
                    this.options = e, this.root = {
                        type: "root",
                        data: {
                            language: null,
                            relevance: 0
                        },
                        children: []
                    }, this.stack = [this.root]
                }
                addText(e) {
                    if ("" === e) return;
                    let t = this.stack[this.stack.length - 1],
                        n = t.children[t.children.length - 1];
                    n && "text" === n.type ? n.value += e : t.children.push({
                        type: "text",
                        value: e
                    })
                }
                addKeyword(e, t) {
                    this.openNode(t), this.addText(e), this.closeNode()
                }
                addSublanguage(e, t) {
                    let n = this.stack[this.stack.length - 1],
                        r = e.root.children;
                    t ? n.children.push({
                        type: "element",
                        tagName: "span",
                        properties: {
                            className: [t]
                        },
                        children: r
                    }) : n.children.push(...r)
                }
                openNode(e) {
                    let t = e.split(".").map((e, t) => t ? e + "_".repeat(t) : this.options.classPrefix + e),
                        n = this.stack[this.stack.length - 1],
                        r = {
                            type: "element",
                            tagName: "span",
                            properties: {
                                className: t
                            },
                            children: []
                        };
                    n.children.push(r), this.stack.push(r)
                }
                closeNode() {
                    this.stack.pop()
                }
                closeAllNodes() {}
                finalize() {}
                toHTML() {
                    return ""
                }
            }
            let ew = {
                highlight: ek,
                highlightAuto: function(e, t = {}) {
                    let n = t.subset || eg.listLanguages(),
                        r = t.prefix,
                        i = -1,
                        o = {
                            type: "root",
                            data: {
                                language: null,
                                relevance: 0
                            },
                            children: []
                        };
                    if (null == r && (r = ev), "string" != typeof e) throw eh("Expected `string` for value, got `%s`", e);
                    for (; ++i < n.length;) {
                        let a = n[i];
                        if (!eg.getLanguage(a)) continue;
                        let l = ek(a, e, t);
                        l.data.relevance > o.data.relevance && (o = l)
                    }
                    return o
                },
                registerLanguage: function(e, t) {
                    eg.registerLanguage(e, t)
                },
                registered: function(e) {
                    return Boolean(eg.getLanguage(e))
                },
                listLanguages: function() {
                    return eg.listLanguages()
                },
                registerAlias: ex
            };
            ew.registerLanguage("arduino", function(e) {
                let t = {
                        type: ["boolean", "byte", "word", "String"],
                        built_in: ["KeyboardController", "MouseController", "SoftwareSerial", "EthernetServer", "EthernetClient", "LiquidCrystal", "RobotControl", "GSMVoiceCall", "EthernetUDP", "EsploraTFT", "HttpClient", "RobotMotor", "WiFiClient", "GSMScanner", "FileSystem", "Scheduler", "GSMServer", "YunClient", "YunServer", "IPAddress", "GSMClient", "GSMModem", "Keyboard", "Ethernet", "Console", "GSMBand", "Esplora", "Stepper", "Process", "WiFiUDP", "GSM_SMS", "Mailbox", "USBHost", "Firmata", "PImage", "Client", "Server", "GSMPIN", "FileIO", "Bridge", "Serial", "EEPROM", "Stream", "Mouse", "Audio", "Servo", "File", "Task", "GPRS", "WiFi", "Wire", "TFT", "GSM", "SPI", "SD"],
                        _hints: ["setup", "loop", "runShellCommandAsynchronously", "analogWriteResolution", "retrieveCallingNumber", "printFirmwareVersion", "analogReadResolution", "sendDigitalPortPair", "noListenOnLocalhost", "readJoystickButton", "setFirmwareVersion", "readJoystickSwitch", "scrollDisplayRight", "getVoiceCallStatus", "scrollDisplayLeft", "writeMicroseconds", "delayMicroseconds", "beginTransmission", "getSignalStrength", "runAsynchronously", "getAsynchronously", "listenOnLocalhost", "getCurrentCarrier", "readAccelerometer", "messageAvailable", "sendDigitalPorts", "lineFollowConfig", "countryNameWrite", "runShellCommand", "readStringUntil", "rewindDirectory", "readTemperature", "setClockDivider", "readLightSensor", "endTransmission", "analogReference", "detachInterrupt", "countryNameRead", "attachInterrupt", "encryptionType", "readBytesUntil", "robotNameWrite", "readMicrophone", "robotNameRead", "cityNameWrite", "userNameWrite", "readJoystickY", "readJoystickX", "mouseReleased", "openNextFile", "scanNetworks", "noInterrupts", "digitalWrite", "beginSpeaker", "mousePressed", "isActionDone", "mouseDragged", "displayLogos", "noAutoscroll", "addParameter", "remoteNumber", "getModifiers", "keyboardRead", "userNameRead", "waitContinue", "processInput", "parseCommand", "printVersion", "readNetworks", "writeMessage", "blinkVersion", "cityNameRead", "readMessage", "setDataMode", "parsePacket", "isListening", "setBitOrder", "beginPacket", "isDirectory", "motorsWrite", "drawCompass", "digitalRead", "clearScreen", "serialEvent", "rightToLeft", "setTextSize", "leftToRight", "requestFrom", "keyReleased", "compassRead", "analogWrite", "interrupts", "WiFiServer", "disconnect", "playMelody", "parseFloat", "autoscroll", "getPINUsed", "setPINUsed", "setTimeout", "sendAnalog", "readSlider", "analogRead", "beginWrite", "createChar", "motorsStop", "keyPressed", "tempoWrite", "readButton", "subnetMask", "debugPrint", "macAddress", "writeGreen", "randomSeed", "attachGPRS", "readString", "sendString", "remotePort", "releaseAll", "mouseMoved", "background", "getXChange", "getYChange", "answerCall", "getResult", "voiceCall", "endPacket", "constrain", "getSocket", "writeJSON", "getButton", "available", "connected", "findUntil", "readBytes", "exitValue", "readGreen", "writeBlue", "startLoop", "IPAddress", "isPressed", "sendSysex", "pauseMode", "gatewayIP", "setCursor", "getOemKey", "tuneWrite", "noDisplay", "loadImage", "switchPIN", "onRequest", "onReceive", "changePIN", "playFile", "noBuffer", "parseInt", "overflow", "checkPIN", "knobRead", "beginTFT", "bitClear", "updateIR", "bitWrite", "position", "writeRGB", "highByte", "writeRed", "setSpeed", "readBlue", "noStroke", "remoteIP", "transfer", "shutdown", "hangCall", "beginSMS", "endWrite", "attached", "maintain", "noCursor", "checkReg", "checkPUK", "shiftOut", "isValid", "shiftIn", "pulseIn", "connect", "println", "localIP", "pinMode", "getIMEI", "display", "noBlink", "process", "getBand", "running", "beginSD", "drawBMP", "lowByte", "setBand", "release", "bitRead", "prepare", "pointTo", "readRed", "setMode", "noFill", "remove", "listen", "stroke", "detach", "attach", "noTone", "exists", "buffer", "height", "bitSet", "circle", "config", "cursor", "random", "IRread", "setDNS", "endSMS", "getKey", "micros", "millis", "begin", "print", "write", "ready", "flush", "width", "isPIN", "blink", "clear", "press", "mkdir", "rmdir", "close", "point", "yield", "image", "BSSID", "click", "delay", "read", "text", "move", "peek", "beep", "rect", "line", "open", "seek", "fill", "size", "turn", "stop", "home", "find", "step", "tone", "sqrt", "RSSI", "SSID", "end", "bit", "tan", "cos", "sin", "pow", "map", "abs", "max", "min", "get", "run", "put"],
                        literal: ["DIGITAL_MESSAGE", "FIRMATA_STRING", "ANALOG_MESSAGE", "REPORT_DIGITAL", "REPORT_ANALOG", "INPUT_PULLUP", "SET_PIN_MODE", "INTERNAL2V56", "SYSTEM_RESET", "LED_BUILTIN", "INTERNAL1V1", "SYSEX_START", "INTERNAL", "EXTERNAL", "DEFAULT", "OUTPUT", "INPUT", "HIGH", "LOW"]
                    },
                    n = function(e) {
                        let t = e.regex,
                            n = e.COMMENT("//", "$", {
                                contains: [{
                                    begin: /\\\n/
                                }]
                            }),
                            r = "decltype\\(auto\\)",
                            i = "[a-zA-Z_]\\w*::",
                            o = "(?!struct)(" + r + "|" + t.optional(i) + "[a-zA-Z_]\\w*" + t.optional("<[^<>]+>") + ")",
                            a = {
                                className: "type",
                                begin: "\\b[a-z\\d_]*_t\\b"
                            },
                            l = {
                                className: "string",
                                variants: [{
                                    begin: '(u8?|U|L)?"',
                                    end: '"',
                                    illegal: "\\n",
                                    contains: [e.BACKSLASH_ESCAPE]
                                }, {
                                    begin: "(u8?|U|L)?'(\\\\(x[0-9A-Fa-f]{2}|u[0-9A-Fa-f]{4,8}|[0-7]{3}|\\S)|.)",
                                    end: "'",
                                    illegal: "."
                                }, e.END_SAME_AS_BEGIN({
                                    begin: /(?:u8?|U|L)?R"([^()\\ ]{0,16})\(/,
                                    end: /\)([^()\\ ]{0,16})"/
                                })]
                            },
                            s = {
                                className: "number",
                                variants: [{
                                    begin: "\\b(0b[01']+)"
                                }, {
                                    begin: "(-?)\\b([\\d']+(\\.[\\d']*)?|\\.[\\d']+)((ll|LL|l|L)(u|U)?|(u|U)(ll|LL|l|L)?|f|F|b|B)"
                                }, {
                                    begin: "(-?)(\\b0[xX][a-fA-F0-9']+|(\\b[\\d']+(\\.[\\d']*)?|\\.[\\d']+)([eE][-+]?[\\d']+)?)"
                                }],
                                relevance: 0
                            },
                            c = {
                                className: "meta",
                                begin: /#\s*[a-z]+\b/,
                                end: /$/,
                                keywords: {
                                    keyword: "if else elif endif define undef warning error line pragma _Pragma ifdef ifndef include"
                                },
                                contains: [{
                                    begin: /\\\n/,
                                    relevance: 0
                                }, e.inherit(l, {
                                    className: "string"
                                }), {
                                    className: "string",
                                    begin: /<.*?>/
                                }, n, e.C_BLOCK_COMMENT_MODE]
                            },
                            u = {
                                className: "title",
                                begin: t.optional(i) + e.IDENT_RE,
                                relevance: 0
                            },
                            d = t.optional(i) + e.IDENT_RE + "\\s*\\(",
                            f = {
                                type: ["bool", "char", "char16_t", "char32_t", "char8_t", "double", "float", "int", "long", "short", "void", "wchar_t", "unsigned", "signed", "const", "static"],
                                keyword: ["alignas", "alignof", "and", "and_eq", "asm", "atomic_cancel", "atomic_commit", "atomic_noexcept", "auto", "bitand", "bitor", "break", "case", "catch", "class", "co_await", "co_return", "co_yield", "compl", "concept", "const_cast|10", "consteval", "constexpr", "constinit", "continue", "decltype", "default", "delete", "do", "dynamic_cast|10", "else", "enum", "explicit", "export", "extern", "false", "final", "for", "friend", "goto", "if", "import", "inline", "module", "mutable", "namespace", "new", "noexcept", "not", "not_eq", "nullptr", "operator", "or", "or_eq", "override", "private", "protected", "public", "reflexpr", "register", "reinterpret_cast|10", "requires", "return", "sizeof", "static_assert", "static_cast|10", "struct", "switch", "synchronized", "template", "this", "thread_local", "throw", "transaction_safe", "transaction_safe_dynamic", "true", "try", "typedef", "typeid", "typename", "union", "using", "virtual", "volatile", "while", "xor", "xor_eq"],
                                literal: ["NULL", "false", "nullopt", "nullptr", "true"],
                                built_in: ["_Pragma"],
                                _type_hints: ["any", "auto_ptr", "barrier", "binary_semaphore", "bitset", "complex", "condition_variable", "condition_variable_any", "counting_semaphore", "deque", "false_type", "future", "imaginary", "initializer_list", "istringstream", "jthread", "latch", "lock_guard", "multimap", "multiset", "mutex", "optional", "ostringstream", "packaged_task", "pair", "promise", "priority_queue", "queue", "recursive_mutex", "recursive_timed_mutex", "scoped_lock", "set", "shared_future", "shared_lock", "shared_mutex", "shared_timed_mutex", "shared_ptr", "stack", "string_view", "stringstream", "timed_mutex", "thread", "true_type", "tuple", "unique_lock", "unique_ptr", "unordered_map", "unordered_multimap", "unordered_multiset", "unordered_set", "variant", "vector", "weak_ptr", "wstring", "wstring_view"]
                            },
                            p = {
                                className: "function.dispatch",
                                relevance: 0,
                                keywords: {
                                    _hint: ["abort", "abs", "acos", "apply", "as_const", "asin", "atan", "atan2", "calloc", "ceil", "cerr", "cin", "clog", "cos", "cosh", "cout", "declval", "endl", "exchange", "exit", "exp", "fabs", "floor", "fmod", "forward", "fprintf", "fputs", "free", "frexp", "fscanf", "future", "invoke", "isalnum", "isalpha", "iscntrl", "isdigit", "isgraph", "islower", "isprint", "ispunct", "isspace", "isupper", "isxdigit", "labs", "launder", "ldexp", "log", "log10", "make_pair", "make_shared", "make_shared_for_overwrite", "make_tuple", "make_unique", "malloc", "memchr", "memcmp", "memcpy", "memset", "modf", "move", "pow", "printf", "putchar", "puts", "realloc", "scanf", "sin", "sinh", "snprintf", "sprintf", "sqrt", "sscanf", "std", "stderr", "stdin", "stdout", "strcat", "strchr", "strcmp", "strcpy", "strcspn", "strlen", "strncat", "strncmp", "strncpy", "strpbrk", "strrchr", "strspn", "strstr", "swap", "tan", "tanh", "terminate", "to_underlying", "tolower", "toupper", "vfprintf", "visit", "vprintf", "vsprintf"]
                                },
                                begin: t.concat(/\b/, /(?!decltype)/, /(?!if)/, /(?!for)/, /(?!switch)/, /(?!while)/, e.IDENT_RE, t.lookahead(/(<[^<>]+>|)\s*\(/))
                            },
                            g = [p, c, a, n, e.C_BLOCK_COMMENT_MODE, s, l],
                            m = {
                                variants: [{
                                    begin: /=/,
                                    end: /;/
                                }, {
                                    begin: /\(/,
                                    end: /\)/
                                }, {
                                    beginKeywords: "new throw return else",
                                    end: /;/
                                }],
                                keywords: f,
                                contains: g.concat([{
                                    begin: /\(/,
                                    end: /\)/,
                                    keywords: f,
                                    contains: g.concat(["self"]),
                                    relevance: 0
                                }]),
                                relevance: 0
                            },
                            h = {
                                className: "function",
                                begin: "(" + o + "[\\*&\\s]+)+" + d,
                                returnBegin: !0,
                                end: /[{;=]/,
                                excludeEnd: !0,
                                keywords: f,
                                illegal: /[^\w\s\*&:<>.]/,
                                contains: [{
                                    begin: r,
                                    keywords: f,
                                    relevance: 0
                                }, {
                                    begin: d,
                                    returnBegin: !0,
                                    contains: [u],
                                    relevance: 0
                                }, {
                                    begin: /::/,
                                    relevance: 0
                                }, {
                                    begin: /:/,
                                    endsWithParent: !0,
                                    contains: [l, s]
                                }, {
                                    relevance: 0,
                                    match: /,/
                                }, {
                                    className: "params",
                                    begin: /\(/,
                                    end: /\)/,
                                    keywords: f,
                                    relevance: 0,
                                    contains: [n, e.C_BLOCK_COMMENT_MODE, l, s, a, {
                                        begin: /\(/,
                                        end: /\)/,
                                        keywords: f,
                                        relevance: 0,
                                        contains: ["self", n, e.C_BLOCK_COMMENT_MODE, l, s, a]
                                    }]
                                }, a, n, e.C_BLOCK_COMMENT_MODE, c]
                            };
                        return {
                            name: "C++",
                            aliases: ["cc", "c++", "h++", "hpp", "hh", "hxx", "cxx"],
                            keywords: f,
                            illegal: "</",
                            classNameAliases: {
                                "function.dispatch": "built_in"
                            },
                            contains: [].concat(m, h, p, g, [c, {
                                begin: "\\b(deque|list|queue|priority_queue|pair|stack|vector|map|set|bitset|multiset|multimap|unordered_map|unordered_set|unordered_multiset|unordered_multimap|array|tuple|optional|variant|function)\\s*<(?!<)",
                                end: ">",
                                keywords: f,
                                contains: ["self", a]
                            }, {
                                begin: e.IDENT_RE + "::",
                                keywords: f
                            }, {
                                match: [/\b(?:enum(?:\s+(?:class|struct))?|class|struct|union)/, /\s+/, /\w+/],
                                className: {
                                    1: "keyword",
                                    3: "title.class"
                                }
                            }])
                        }
                    }(e),
                    r = n.keywords;
                return r.type = [...r.type, ...t.type], r.literal = [...r.literal, ...t.literal], r.built_in = [...r.built_in, ...t.built_in], r._hints = t._hints, n.name = "Arduino", n.aliases = ["ino"], n.supersetOf = "cpp", n
            }), ew.registerLanguage("bash", function(e) {
                let t = e.regex,
                    n = {};
                Object.assign(n, {
                    className: "variable",
                    variants: [{
                        begin: t.concat(/\$[\w\d#@][\w\d_]*/, "(?![\\w\\d])(?![$])")
                    }, {
                        begin: /\$\{/,
                        end: /\}/,
                        contains: ["self", {
                            begin: /:-/,
                            contains: [n]
                        }]
                    }]
                });
                let r = {
                        className: "subst",
                        begin: /\$\(/,
                        end: /\)/,
                        contains: [e.BACKSLASH_ESCAPE]
                    },
                    i = {
                        begin: /<<-?\s*(?=\w+)/,
                        starts: {
                            contains: [e.END_SAME_AS_BEGIN({
                                begin: /(\w+)/,
                                end: /(\w+)/,
                                className: "string"
                            })]
                        }
                    },
                    o = {
                        className: "string",
                        begin: /"/,
                        end: /"/,
                        contains: [e.BACKSLASH_ESCAPE, n, r]
                    };
                r.contains.push(o);
                let a = {
                        begin: /\$?\(\(/,
                        end: /\)\)/,
                        contains: [{
                            begin: /\d+#[0-9a-f]+/,
                            className: "number"
                        }, e.NUMBER_MODE, n]
                    },
                    l = e.SHEBANG({
                        binary: "(fish|bash|zsh|sh|csh|ksh|tcsh|dash|scsh)",
                        relevance: 10
                    }),
                    s = {
                        className: "function",
                        begin: /\w[\w\d_]*\s*\(\s*\)\s*\{/,
                        returnBegin: !0,
                        contains: [e.inherit(e.TITLE_MODE, {
                            begin: /\w[\w\d_]*/
                        })],
                        relevance: 0
                    };
                return {
                    name: "Bash",
                    aliases: ["sh"],
                    keywords: {
                        $pattern: /\b[a-z][a-z0-9._-]+\b/,
                        keyword: ["if", "then", "else", "elif", "fi", "for", "while", "in", "do", "done", "case", "esac", "function"],
                        literal: ["true", "false"],
                        built_in: ["break", "cd", "continue", "eval", "exec", "exit", "export", "getopts", "hash", "pwd", "readonly", "return", "shift", "test", "times", "trap", "umask", "unset", "alias", "bind", "builtin", "caller", "command", "declare", "echo", "enable", "help", "let", "local", "logout", "mapfile", "printf", "read", "readarray", "source", "type", "typeset", "ulimit", "unalias", "set", "shopt", "autoload", "bg", "bindkey", "bye", "cap", "chdir", "clone", "comparguments", "compcall", "compctl", "compdescribe", "compfiles", "compgroups", "compquote", "comptags", "comptry", "compvalues", "dirs", "disable", "disown", "echotc", "echoti", "emulate", "fc", "fg", "float", "functions", "getcap", "getln", "history", "integer", "jobs", "kill", "limit", "log", "noglob", "popd", "print", "pushd", "pushln", "rehash", "sched", "setcap", "setopt", "stat", "suspend", "ttyctl", "unfunction", "unhash", "unlimit", "unsetopt", "vared", "wait", "whence", "where", "which", "zcompile", "zformat", "zftp", "zle", "zmodload", "zparseopts", "zprof", "zpty", "zregexparse", "zsocket", "zstyle", "ztcp", "chcon", "chgrp", "chown", "chmod", "cp", "dd", "df", "dir", "dircolors", "ln", "ls", "mkdir", "mkfifo", "mknod", "mktemp", "mv", "realpath", "rm", "rmdir", "shred", "sync", "touch", "truncate", "vdir", "b2sum", "base32", "base64", "cat", "cksum", "comm", "csplit", "cut", "expand", "fmt", "fold", "head", "join", "md5sum", "nl", "numfmt", "od", "paste", "ptx", "pr", "sha1sum", "sha224sum", "sha256sum", "sha384sum", "sha512sum", "shuf", "sort", "split", "sum", "tac", "tail", "tr", "tsort", "unexpand", "uniq", "wc", "arch", "basename", "chroot", "date", "dirname", "du", "echo", "env", "expr", "factor", "groups", "hostid", "id", "link", "logname", "nice", "nohup", "nproc", "pathchk", "pinky", "printenv", "printf", "pwd", "readlink", "runcon", "seq", "sleep", "stat", "stdbuf", "stty", "tee", "test", "timeout", "tty", "uname", "unlink", "uptime", "users", "who", "whoami", "yes"]
                    },
                    contains: [l, e.SHEBANG(), s, a, e.HASH_COMMENT_MODE, i, {
                        match: /(\/[a-z._-]+)+/
                    }, o, {
                        className: "",
                        begin: /\\"/
                    }, {
                        className: "string",
                        begin: /'/,
                        end: /'/
                    }, n]
                }
            }), ew.registerLanguage("c", function(e) {
                let t = e.regex,
                    n = e.COMMENT("//", "$", {
                        contains: [{
                            begin: /\\\n/
                        }]
                    }),
                    r = "decltype\\(auto\\)",
                    i = "[a-zA-Z_]\\w*::",
                    o = "(" + r + "|" + t.optional(i) + "[a-zA-Z_]\\w*" + t.optional("<[^<>]+>") + ")",
                    a = {
                        className: "type",
                        variants: [{
                            begin: "\\b[a-z\\d_]*_t\\b"
                        }, {
                            match: /\batomic_[a-z]{3,6}\b/
                        }]
                    },
                    l = {
                        className: "string",
                        variants: [{
                            begin: '(u8?|U|L)?"',
                            end: '"',
                            illegal: "\\n",
                            contains: [e.BACKSLASH_ESCAPE]
                        }, {
                            begin: "(u8?|U|L)?'(\\\\(x[0-9A-Fa-f]{2}|u[0-9A-Fa-f]{4,8}|[0-7]{3}|\\S)|.)",
                            end: "'",
                            illegal: "."
                        }, e.END_SAME_AS_BEGIN({
                            begin: /(?:u8?|U|L)?R"([^()\\ ]{0,16})\(/,
                            end: /\)([^()\\ ]{0,16})"/
                        })]
                    },
                    s = {
                        className: "number",
                        variants: [{
                            begin: "\\b(0b[01']+)"
                        }, {
                            begin: "(-?)\\b([\\d']+(\\.[\\d']*)?|\\.[\\d']+)((ll|LL|l|L)(u|U)?|(u|U)(ll|LL|l|L)?|f|F|b|B)"
                        }, {
                            begin: "(-?)(\\b0[xX][a-fA-F0-9']+|(\\b[\\d']+(\\.[\\d']*)?|\\.[\\d']+)([eE][-+]?[\\d']+)?)"
                        }],
                        relevance: 0
                    },
                    c = {
                        className: "meta",
                        begin: /#\s*[a-z]+\b/,
                        end: /$/,
                        keywords: {
                            keyword: "if else elif endif define undef warning error line pragma _Pragma ifdef ifndef include"
                        },
                        contains: [{
                            begin: /\\\n/,
                            relevance: 0
                        }, e.inherit(l, {
                            className: "string"
                        }), {
                            className: "string",
                            begin: /<.*?>/
                        }, n, e.C_BLOCK_COMMENT_MODE]
                    },
                    u = {
                        className: "title",
                        begin: t.optional(i) + e.IDENT_RE,
                        relevance: 0
                    },
                    d = t.optional(i) + e.IDENT_RE + "\\s*\\(",
                    f = {
                        keyword: ["asm", "auto", "break", "case", "continue", "default", "do", "else", "enum", "extern", "for", "fortran", "goto", "if", "inline", "register", "restrict", "return", "sizeof", "struct", "switch", "typedef", "union", "volatile", "while", "_Alignas", "_Alignof", "_Atomic", "_Generic", "_Noreturn", "_Static_assert", "_Thread_local", "alignas", "alignof", "noreturn", "static_assert", "thread_local", "_Pragma"],
                        type: ["float", "double", "signed", "unsigned", "int", "short", "long", "char", "void", "_Bool", "_Complex", "_Imaginary", "_Decimal32", "_Decimal64", "_Decimal128", "const", "static", "complex", "bool", "imaginary"],
                        literal: "true false NULL",
                        built_in: "std string wstring cin cout cerr clog stdin stdout stderr stringstream istringstream ostringstream auto_ptr deque list queue stack vector map set pair bitset multiset multimap unordered_set unordered_map unordered_multiset unordered_multimap priority_queue make_pair array shared_ptr abort terminate abs acos asin atan2 atan calloc ceil cosh cos exit exp fabs floor fmod fprintf fputs free frexp fscanf future isalnum isalpha iscntrl isdigit isgraph islower isprint ispunct isspace isupper isxdigit tolower toupper labs ldexp log10 log malloc realloc memchr memcmp memcpy memset modf pow printf putchar puts scanf sinh sin snprintf sprintf sqrt sscanf strcat strchr strcmp strcpy strcspn strlen strncat strncmp strncpy strpbrk strrchr strspn strstr tanh tan vfprintf vprintf vsprintf endl initializer_list unique_ptr"
                    },
                    p = [c, a, n, e.C_BLOCK_COMMENT_MODE, s, l],
                    g = {
                        variants: [{
                            begin: /=/,
                            end: /;/
                        }, {
                            begin: /\(/,
                            end: /\)/
                        }, {
                            beginKeywords: "new throw return else",
                            end: /;/
                        }],
                        keywords: f,
                        contains: p.concat([{
                            begin: /\(/,
                            end: /\)/,
                            keywords: f,
                            contains: p.concat(["self"]),
                            relevance: 0
                        }]),
                        relevance: 0
                    },
                    m = {
                        begin: "(" + o + "[\\*&\\s]+)+" + d,
                        returnBegin: !0,
                        end: /[{;=]/,
                        excludeEnd: !0,
                        keywords: f,
                        illegal: /[^\w\s\*&:<>.]/,
                        contains: [{
                            begin: r,
                            keywords: f,
                            relevance: 0
                        }, {
                            begin: d,
                            returnBegin: !0,
                            contains: [e.inherit(u, {
                                className: "title.function"
                            })],
                            relevance: 0
                        }, {
                            relevance: 0,
                            match: /,/
                        }, {
                            className: "params",
                            begin: /\(/,
                            end: /\)/,
                            keywords: f,
                            relevance: 0,
                            contains: [n, e.C_BLOCK_COMMENT_MODE, l, s, a, {
                                begin: /\(/,
                                end: /\)/,
                                keywords: f,
                                relevance: 0,
                                contains: ["self", n, e.C_BLOCK_COMMENT_MODE, l, s, a]
                            }]
                        }, a, n, e.C_BLOCK_COMMENT_MODE, c]
                    };
                return {
                    name: "C",
                    aliases: ["h"],
                    keywords: f,
                    disableAutodetect: !0,
                    illegal: "</",
                    contains: [].concat(g, m, p, [c, {
                        begin: e.IDENT_RE + "::",
                        keywords: f
                    }, {
                        className: "class",
                        beginKeywords: "enum class struct union",
                        end: /[{;:<>=]/,
                        contains: [{
                            beginKeywords: "final class struct"
                        }, e.TITLE_MODE]
                    }]),
                    exports: {
                        preprocessor: c,
                        strings: l,
                        keywords: f
                    }
                }
            }), ew.registerLanguage("cpp", function(e) {
                let t = e.regex,
                    n = e.COMMENT("//", "$", {
                        contains: [{
                            begin: /\\\n/
                        }]
                    }),
                    r = "decltype\\(auto\\)",
                    i = "[a-zA-Z_]\\w*::",
                    o = "(?!struct)(" + r + "|" + t.optional(i) + "[a-zA-Z_]\\w*" + t.optional("<[^<>]+>") + ")",
                    a = {
                        className: "type",
                        begin: "\\b[a-z\\d_]*_t\\b"
                    },
                    l = {
                        className: "string",
                        variants: [{
                            begin: '(u8?|U|L)?"',
                            end: '"',
                            illegal: "\\n",
                            contains: [e.BACKSLASH_ESCAPE]
                        }, {
                            begin: "(u8?|U|L)?'(\\\\(x[0-9A-Fa-f]{2}|u[0-9A-Fa-f]{4,8}|[0-7]{3}|\\S)|.)",
                            end: "'",
                            illegal: "."
                        }, e.END_SAME_AS_BEGIN({
                            begin: /(?:u8?|U|L)?R"([^()\\ ]{0,16})\(/,
                            end: /\)([^()\\ ]{0,16})"/
                        })]
                    },
                    s = {
                        className: "number",
                        variants: [{
                            begin: "\\b(0b[01']+)"
                        }, {
                            begin: "(-?)\\b([\\d']+(\\.[\\d']*)?|\\.[\\d']+)((ll|LL|l|L)(u|U)?|(u|U)(ll|LL|l|L)?|f|F|b|B)"
                        }, {
                            begin: "(-?)(\\b0[xX][a-fA-F0-9']+|(\\b[\\d']+(\\.[\\d']*)?|\\.[\\d']+)([eE][-+]?[\\d']+)?)"
                        }],
                        relevance: 0
                    },
                    c = {
                        className: "meta",
                        begin: /#\s*[a-z]+\b/,
                        end: /$/,
                        keywords: {
                            keyword: "if else elif endif define undef warning error line pragma _Pragma ifdef ifndef include"
                        },
                        contains: [{
                            begin: /\\\n/,
                            relevance: 0
                        }, e.inherit(l, {
                            className: "string"
                        }), {
                            className: "string",
                            begin: /<.*?>/
                        }, n, e.C_BLOCK_COMMENT_MODE]
                    },
                    u = {
                        className: "title",
                        begin: t.optional(i) + e.IDENT_RE,
                        relevance: 0
                    },
                    d = t.optional(i) + e.IDENT_RE + "\\s*\\(",
                    f = {
                        type: ["bool", "char", "char16_t", "char32_t", "char8_t", "double", "float", "int", "long", "short", "void", "wchar_t", "unsigned", "signed", "const", "static"],
                        keyword: ["alignas", "alignof", "and", "and_eq", "asm", "atomic_cancel", "atomic_commit", "atomic_noexcept", "auto", "bitand", "bitor", "break", "case", "catch", "class", "co_await", "co_return", "co_yield", "compl", "concept", "const_cast|10", "consteval", "constexpr", "constinit", "continue", "decltype", "default", "delete", "do", "dynamic_cast|10", "else", "enum", "explicit", "export", "extern", "false", "final", "for", "friend", "goto", "if", "import", "inline", "module", "mutable", "namespace", "new", "noexcept", "not", "not_eq", "nullptr", "operator", "or", "or_eq", "override", "private", "protected", "public", "reflexpr", "register", "reinterpret_cast|10", "requires", "return", "sizeof", "static_assert", "static_cast|10", "struct", "switch", "synchronized", "template", "this", "thread_local", "throw", "transaction_safe", "transaction_safe_dynamic", "true", "try", "typedef", "typeid", "typename", "union", "using", "virtual", "volatile", "while", "xor", "xor_eq"],
                        literal: ["NULL", "false", "nullopt", "nullptr", "true"],
                        built_in: ["_Pragma"],
                        _type_hints: ["any", "auto_ptr", "barrier", "binary_semaphore", "bitset", "complex", "condition_variable", "condition_variable_any", "counting_semaphore", "deque", "false_type", "future", "imaginary", "initializer_list", "istringstream", "jthread", "latch", "lock_guard", "multimap", "multiset", "mutex", "optional", "ostringstream", "packaged_task", "pair", "promise", "priority_queue", "queue", "recursive_mutex", "recursive_timed_mutex", "scoped_lock", "set", "shared_future", "shared_lock", "shared_mutex", "shared_timed_mutex", "shared_ptr", "stack", "string_view", "stringstream", "timed_mutex", "thread", "true_type", "tuple", "unique_lock", "unique_ptr", "unordered_map", "unordered_multimap", "unordered_multiset", "unordered_set", "variant", "vector", "weak_ptr", "wstring", "wstring_view"]
                    },
                    p = {
                        className: "function.dispatch",
                        relevance: 0,
                        keywords: {
                            _hint: ["abort", "abs", "acos", "apply", "as_const", "asin", "atan", "atan2", "calloc", "ceil", "cerr", "cin", "clog", "cos", "cosh", "cout", "declval", "endl", "exchange", "exit", "exp", "fabs", "floor", "fmod", "forward", "fprintf", "fputs", "free", "frexp", "fscanf", "future", "invoke", "isalnum", "isalpha", "iscntrl", "isdigit", "isgraph", "islower", "isprint", "ispunct", "isspace", "isupper", "isxdigit", "labs", "launder", "ldexp", "log", "log10", "make_pair", "make_shared", "make_shared_for_overwrite", "make_tuple", "make_unique", "malloc", "memchr", "memcmp", "memcpy", "memset", "modf", "move", "pow", "printf", "putchar", "puts", "realloc", "scanf", "sin", "sinh", "snprintf", "sprintf", "sqrt", "sscanf", "std", "stderr", "stdin", "stdout", "strcat", "strchr", "strcmp", "strcpy", "strcspn", "strlen", "strncat", "strncmp", "strncpy", "strpbrk", "strrchr", "strspn", "strstr", "swap", "tan", "tanh", "terminate", "to_underlying", "tolower", "toupper", "vfprintf", "visit", "vprintf", "vsprintf"]
                        },
                        begin: t.concat(/\b/, /(?!decltype)/, /(?!if)/, /(?!for)/, /(?!switch)/, /(?!while)/, e.IDENT_RE, t.lookahead(/(<[^<>]+>|)\s*\(/))
                    },
                    g = [p, c, a, n, e.C_BLOCK_COMMENT_MODE, s, l],
                    m = {
                        variants: [{
                            begin: /=/,
                            end: /;/
                        }, {
                            begin: /\(/,
                            end: /\)/
                        }, {
                            beginKeywords: "new throw return else",
                            end: /;/
                        }],
                        keywords: f,
                        contains: g.concat([{
                            begin: /\(/,
                            end: /\)/,
                            keywords: f,
                            contains: g.concat(["self"]),
                            relevance: 0
                        }]),
                        relevance: 0
                    },
                    h = {
                        className: "function",
                        begin: "(" + o + "[\\*&\\s]+)+" + d,
                        returnBegin: !0,
                        end: /[{;=]/,
                        excludeEnd: !0,
                        keywords: f,
                        illegal: /[^\w\s\*&:<>.]/,
                        contains: [{
                            begin: r,
                            keywords: f,
                            relevance: 0
                        }, {
                            begin: d,
                            returnBegin: !0,
                            contains: [u],
                            relevance: 0
                        }, {
                            begin: /::/,
                            relevance: 0
                        }, {
                            begin: /:/,
                            endsWithParent: !0,
                            contains: [l, s]
                        }, {
                            relevance: 0,
                            match: /,/
                        }, {
                            className: "params",
                            begin: /\(/,
                            end: /\)/,
                            keywords: f,
                            relevance: 0,
                            contains: [n, e.C_BLOCK_COMMENT_MODE, l, s, a, {
                                begin: /\(/,
                                end: /\)/,
                                keywords: f,
                                relevance: 0,
                                contains: ["self", n, e.C_BLOCK_COMMENT_MODE, l, s, a]
                            }]
                        }, a, n, e.C_BLOCK_COMMENT_MODE, c]
                    };
                return {
                    name: "C++",
                    aliases: ["cc", "c++", "h++", "hpp", "hh", "hxx", "cxx"],
                    keywords: f,
                    illegal: "</",
                    classNameAliases: {
                        "function.dispatch": "built_in"
                    },
                    contains: [].concat(m, h, p, g, [c, {
                        begin: "\\b(deque|list|queue|priority_queue|pair|stack|vector|map|set|bitset|multiset|multimap|unordered_map|unordered_set|unordered_multiset|unordered_multimap|array|tuple|optional|variant|function)\\s*<(?!<)",
                        end: ">",
                        keywords: f,
                        contains: ["self", a]
                    }, {
                        begin: e.IDENT_RE + "::",
                        keywords: f
                    }, {
                        match: [/\b(?:enum(?:\s+(?:class|struct))?|class|struct|union)/, /\s+/, /\w+/],
                        className: {
                            1: "keyword",
                            3: "title.class"
                        }
                    }])
                }
            }), ew.registerLanguage("csharp", function(e) {
                let t = {
                        keyword: ["abstract", "as", "base", "break", "case", "catch", "class", "const", "continue", "do", "else", "event", "explicit", "extern", "finally", "fixed", "for", "foreach", "goto", "if", "implicit", "in", "interface", "internal", "is", "lock", "namespace", "new", "operator", "out", "override", "params", "private", "protected", "public", "readonly", "record", "ref", "return", "scoped", "sealed", "sizeof", "stackalloc", "static", "struct", "switch", "this", "throw", "try", "typeof", "unchecked", "unsafe", "using", "virtual", "void", "volatile", "while"].concat(["add", "alias", "and", "ascending", "async", "await", "by", "descending", "equals", "from", "get", "global", "group", "init", "into", "join", "let", "nameof", "not", "notnull", "on", "or", "orderby", "partial", "remove", "select", "set", "unmanaged", "value|0", "var", "when", "where", "with", "yield"]),
                        built_in: ["bool", "byte", "char", "decimal", "delegate", "double", "dynamic", "enum", "float", "int", "long", "nint", "nuint", "object", "sbyte", "short", "string", "ulong", "uint", "ushort"],
                        literal: ["default", "false", "null", "true"]
                    },
                    n = e.inherit(e.TITLE_MODE, {
                        begin: "[a-zA-Z](\\.?\\w)*"
                    }),
                    r = {
                        className: "number",
                        variants: [{
                            begin: "\\b(0b[01']+)"
                        }, {
                            begin: "(-?)\\b([\\d']+(\\.[\\d']*)?|\\.[\\d']+)(u|U|l|L|ul|UL|f|F|b|B)"
                        }, {
                            begin: "(-?)(\\b0[xX][a-fA-F0-9']+|(\\b[\\d']+(\\.[\\d']*)?|\\.[\\d']+)([eE][-+]?[\\d']+)?)"
                        }],
                        relevance: 0
                    },
                    i = {
                        className: "string",
                        begin: '@"',
                        end: '"',
                        contains: [{
                            begin: '""'
                        }]
                    },
                    o = e.inherit(i, {
                        illegal: /\n/
                    }),
                    a = {
                        className: "subst",
                        begin: /\{/,
                        end: /\}/,
                        keywords: t
                    },
                    l = e.inherit(a, {
                        illegal: /\n/
                    }),
                    s = {
                        className: "string",
                        begin: /\$"/,
                        end: '"',
                        illegal: /\n/,
                        contains: [{
                            begin: /\{\{/
                        }, {
                            begin: /\}\}/
                        }, e.BACKSLASH_ESCAPE, l]
                    },
                    c = {
                        className: "string",
                        begin: /\$@"/,
                        end: '"',
                        contains: [{
                            begin: /\{\{/
                        }, {
                            begin: /\}\}/
                        }, {
                            begin: '""'
                        }, a]
                    },
                    u = e.inherit(c, {
                        illegal: /\n/,
                        contains: [{
                            begin: /\{\{/
                        }, {
                            begin: /\}\}/
                        }, {
                            begin: '""'
                        }, l]
                    });
                a.contains = [c, s, i, e.APOS_STRING_MODE, e.QUOTE_STRING_MODE, r, e.C_BLOCK_COMMENT_MODE], l.contains = [u, s, o, e.APOS_STRING_MODE, e.QUOTE_STRING_MODE, r, e.inherit(e.C_BLOCK_COMMENT_MODE, {
                    illegal: /\n/
                })];
                let d = {
                        variants: [c, s, i, e.APOS_STRING_MODE, e.QUOTE_STRING_MODE]
                    },
                    f = {
                        begin: "<",
                        end: ">",
                        contains: [{
                            beginKeywords: "in out"
                        }, n]
                    },
                    p = e.IDENT_RE + "(<" + e.IDENT_RE + "(\\s*,\\s*" + e.IDENT_RE + ")*>)?(\\[\\])?",
                    g = {
                        begin: "@" + e.IDENT_RE,
                        relevance: 0
                    };
                return {
                    name: "C#",
                    aliases: ["cs", "c#"],
                    keywords: t,
                    illegal: /::/,
                    contains: [e.COMMENT("///", "$", {
                        returnBegin: !0,
                        contains: [{
                            className: "doctag",
                            variants: [{
                                begin: "///",
                                relevance: 0
                            }, {
                                begin: "<!--|-->"
                            }, {
                                begin: "</?",
                                end: ">"
                            }]
                        }]
                    }), e.C_LINE_COMMENT_MODE, e.C_BLOCK_COMMENT_MODE, {
                        className: "meta",
                        begin: "#",
                        end: "$",
                        keywords: {
                            keyword: "if else elif endif define undef warning error line region endregion pragma checksum"
                        }
                    }, d, r, {
                        beginKeywords: "class interface",
                        relevance: 0,
                        end: /[{;=]/,
                        illegal: /[^\s:,]/,
                        contains: [{
                            beginKeywords: "where class"
                        }, n, f, e.C_LINE_COMMENT_MODE, e.C_BLOCK_COMMENT_MODE]
                    }, {
                        beginKeywords: "namespace",
                        relevance: 0,
                        end: /[{;=]/,
                        illegal: /[^\s:]/,
                        contains: [n, e.C_LINE_COMMENT_MODE, e.C_BLOCK_COMMENT_MODE]
                    }, {
                        beginKeywords: "record",
                        relevance: 0,
                        end: /[{;=]/,
                        illegal: /[^\s:]/,
                        contains: [n, f, e.C_LINE_COMMENT_MODE, e.C_BLOCK_COMMENT_MODE]
                    }, {
                        className: "meta",
                        begin: "^\\s*\\[(?=[\\w])",
                        excludeBegin: !0,
                        end: "\\]",
                        excludeEnd: !0,
                        contains: [{
                            className: "string",
                            begin: /"/,
                            end: /"/
                        }]
                    }, {
                        beginKeywords: "new return throw await else",
                        relevance: 0
                    }, {
                        className: "function",
                        begin: "(" + p + "\\s+)+" + e.IDENT_RE + "\\s*(<[^=]+>\\s*)?\\(",
                        returnBegin: !0,
                        end: /\s*[{;=]/,
                        excludeEnd: !0,
                        keywords: t,
                        contains: [{
                            beginKeywords: "public private protected static internal protected abstract async extern override unsafe virtual new sealed partial",
                            relevance: 0
                        }, {
                            begin: e.IDENT_RE + "\\s*(<[^=]+>\\s*)?\\(",
                            returnBegin: !0,
                            contains: [e.TITLE_MODE, f],
                            relevance: 0
                        }, {
                            match: /\(\)/
                        }, {
                            className: "params",
                            begin: /\(/,
                            end: /\)/,
                            excludeBegin: !0,
                            excludeEnd: !0,
                            keywords: t,
                            relevance: 0,
                            contains: [d, r, e.C_BLOCK_COMMENT_MODE]
                        }, e.C_LINE_COMMENT_MODE, e.C_BLOCK_COMMENT_MODE]
                    }, g]
                }
            }), ew.registerLanguage("css", function(e) {
                let t = e.regex,
                    n = r(e),
                    c = [e.APOS_STRING_MODE, e.QUOTE_STRING_MODE];
                return {
                    name: "CSS",
                    case_insensitive: !0,
                    illegal: /[=|'\$]/,
                    keywords: {
                        keyframePosition: "from to"
                    },
                    classNameAliases: {
                        keyframePosition: "selector-tag"
                    },
                    contains: [n.BLOCK_COMMENT, {
                        begin: /-(webkit|moz|ms|o)-(?=[a-z])/
                    }, n.CSS_NUMBER_MODE, {
                        className: "selector-id",
                        begin: /#[A-Za-z0-9_-]+/,
                        relevance: 0
                    }, {
                        className: "selector-class",
                        begin: "\\.[a-zA-Z-][a-zA-Z0-9_-]*",
                        relevance: 0
                    }, n.ATTRIBUTE_SELECTOR_MODE, {
                        className: "selector-pseudo",
                        variants: [{
                            begin: ":(" + a.join("|") + ")"
                        }, {
                            begin: ":(:)?(" + l.join("|") + ")"
                        }]
                    }, n.CSS_VARIABLE, {
                        className: "attribute",
                        begin: "\\b(" + s.join("|") + ")\\b"
                    }, {
                        begin: /:/,
                        end: /[;}{]/,
                        contains: [n.BLOCK_COMMENT, n.HEXCOLOR, n.IMPORTANT, n.CSS_NUMBER_MODE, ...c, {
                            begin: /(url|data-uri)\(/,
                            end: /\)/,
                            relevance: 0,
                            keywords: {
                                built_in: "url data-uri"
                            },
                            contains: [...c, {
                                className: "string",
                                begin: /[^)]/,
                                endsWithParent: !0,
                                excludeEnd: !0
                            }]
                        }, n.FUNCTION_DISPATCH]
                    }, {
                        begin: t.lookahead(/@/),
                        end: "[{;]",
                        relevance: 0,
                        illegal: /:/,
                        contains: [{
                            className: "keyword",
                            begin: /@-?\w[\w]*(-\w+)*/
                        }, {
                            begin: /\s/,
                            endsWithParent: !0,
                            excludeEnd: !0,
                            relevance: 0,
                            keywords: {
                                $pattern: /[a-z-]+/,
                                keyword: "and or not only",
                                attribute: o.join(" ")
                            },
                            contains: [{
                                begin: /[a-z-]+(?=:)/,
                                className: "attribute"
                            }, ...c, n.CSS_NUMBER_MODE]
                        }]
                    }, {
                        className: "selector-tag",
                        begin: "\\b(" + i.join("|") + ")\\b"
                    }]
                }
            }), ew.registerLanguage("diff", function(e) {
                let t = e.regex;
                return {
                    name: "Diff",
                    aliases: ["patch"],
                    contains: [{
                        className: "meta",
                        relevance: 10,
                        match: t.either(/^@@ +-\d+,\d+ +\+\d+,\d+ +@@/, /^\*\*\* +\d+,\d+ +\*\*\*\*$/, /^--- +\d+,\d+ +----$/)
                    }, {
                        className: "comment",
                        variants: [{
                            begin: t.either(/Index: /, /^index/, /={3,}/, /^-{3}/, /^\*{3} /, /^\+{3}/, /^diff --git/),
                            end: /$/
                        }, {
                            match: /^\*{15}$/
                        }]
                    }, {
                        className: "addition",
                        begin: /^\+/,
                        end: /$/
                    }, {
                        className: "deletion",
                        begin: /^-/,
                        end: /$/
                    }, {
                        className: "addition",
                        begin: /^!/,
                        end: /$/
                    }]
                }
            }), ew.registerLanguage("go", function(e) {
                let t = {
                    keyword: ["break", "case", "chan", "const", "continue", "default", "defer", "else", "fallthrough", "for", "func", "go", "goto", "if", "import", "interface", "map", "package", "range", "return", "select", "struct", "switch", "type", "var", ],
                    type: ["bool", "byte", "complex64", "complex128", "error", "float32", "float64", "int8", "int16", "int32", "int64", "string", "uint8", "uint16", "uint32", "uint64", "int", "uint", "uintptr", "rune"],
                    literal: ["true", "false", "iota", "nil"],
                    built_in: ["append", "cap", "close", "complex", "copy", "imag", "len", "make", "new", "panic", "print", "println", "real", "recover", "delete"]
                };
                return {
                    name: "Go",
                    aliases: ["golang"],
                    keywords: t,
                    illegal: "</",
                    contains: [e.C_LINE_COMMENT_MODE, e.C_BLOCK_COMMENT_MODE, {
                        className: "string",
                        variants: [e.QUOTE_STRING_MODE, e.APOS_STRING_MODE, {
                            begin: "`",
                            end: "`"
                        }]
                    }, {
                        className: "number",
                        variants: [{
                            begin: e.C_NUMBER_RE + "[i]",
                            relevance: 1
                        }, e.C_NUMBER_MODE]
                    }, {
                        begin: /:=/
                    }, {
                        className: "function",
                        beginKeywords: "func",
                        end: "\\s*(\\{|$)",
                        excludeEnd: !0,
                        contains: [e.TITLE_MODE, {
                            className: "params",
                            begin: /\(/,
                            end: /\)/,
                            endsParent: !0,
                            keywords: t,
                            illegal: /["']/
                        }]
                    }]
                }
            }), ew.registerLanguage("graphql", function(e) {
                let t = e.regex;
                return {
                    name: "GraphQL",
                    aliases: ["gql"],
                    case_insensitive: !0,
                    disableAutodetect: !1,
                    keywords: {
                        keyword: ["query", "mutation", "subscription", "type", "input", "schema", "directive", "interface", "union", "scalar", "fragment", "enum", "on"],
                        literal: ["true", "false", "null"]
                    },
                    contains: [e.HASH_COMMENT_MODE, e.QUOTE_STRING_MODE, e.NUMBER_MODE, {
                        scope: "punctuation",
                        match: /[.]{3}/,
                        relevance: 0
                    }, {
                        scope: "punctuation",
                        begin: /[\!\(\)\:\=\[\]\{\|\}]{1}/,
                        relevance: 0
                    }, {
                        scope: "variable",
                        begin: /\$/,
                        end: /\W/,
                        excludeEnd: !0,
                        relevance: 0
                    }, {
                        scope: "meta",
                        match: /@\w+/,
                        excludeEnd: !0
                    }, {
                        scope: "symbol",
                        begin: t.concat(/[_A-Za-z][_0-9A-Za-z]*/, t.lookahead(/\s*:/)),
                        relevance: 0
                    }],
                    illegal: [/[;<']/, /BEGIN/]
                }
            }), ew.registerLanguage("ini", function(e) {
                let t = e.regex,
                    n = {
                        className: "number",
                        relevance: 0,
                        variants: [{
                            begin: /([+-]+)?[\d]+_[\d_]+/
                        }, {
                            begin: e.NUMBER_RE
                        }]
                    },
                    r = e.COMMENT();
                r.variants = [{
                    begin: /;/,
                    end: /$/
                }, {
                    begin: /#/,
                    end: /$/
                }];
                let i = {
                        className: "variable",
                        variants: [{
                            begin: /\$[\w\d"][\w\d_]*/
                        }, {
                            begin: /\$\{(.*?)\}/
                        }]
                    },
                    o = {
                        className: "literal",
                        begin: /\bon|off|true|false|yes|no\b/
                    },
                    a = {
                        className: "string",
                        contains: [e.BACKSLASH_ESCAPE],
                        variants: [{
                            begin: "'''",
                            end: "'''",
                            relevance: 10
                        }, {
                            begin: '"""',
                            end: '"""',
                            relevance: 10
                        }, {
                            begin: '"',
                            end: '"'
                        }, {
                            begin: "'",
                            end: "'"
                        }]
                    },
                    l = t.either(/[A-Za-z0-9_-]+/, /"(\\"|[^"])*"/, /'[^']*'/),
                    s = t.concat(l, "(\\s*\\.\\s*", l, ")*", t.lookahead(/\s*=\s*[^#\s]/));
                return {
                    name: "TOML, also INI",
                    aliases: ["toml"],
                    case_insensitive: !0,
                    illegal: /\S/,
                    contains: [r, {
                        className: "section",
                        begin: /\[+/,
                        end: /\]+/
                    }, {
                        begin: s,
                        className: "attr",
                        starts: {
                            end: /$/,
                            contains: [r, {
                                begin: /\[/,
                                end: /\]/,
                                contains: [r, o, i, a, n, "self"],
                                relevance: 0
                            }, o, i, a, n]
                        }
                    }]
                }
            }), ew.registerLanguage("java", function(e) {
                let t = e.regex,
                    n = "[\xc0-ʸa-zA-Z_$][\xc0-ʸa-zA-Z_$0-9]*",
                    r = n + function e(t, n, r) {
                        return -1 === r ? "" : t.replace(n, i => e(t, n, r - 1))
                    }("(?:<" + n + "~~~(?:\\s*,\\s*" + n + "~~~)*>)?", /~~~/g, 2),
                    i = {
                        keyword: ["synchronized", "abstract", "private", "var", "static", "if", "const ", "for", "while", "strictfp", "finally", "protected", "import", "native", "final", "void", "enum", "else", "break", "transient", "catch", "instanceof", "volatile", "case", "assert", "package", "default", "public", "try", "switch", "continue", "throws", "protected", "public", "private", "module", "requires", "exports", "do", "sealed", "yield", "permits"],
                        literal: ["false", "true", "null"],
                        type: ["char", "boolean", "long", "float", "int", "byte", "short", "double"],
                        built_in: ["super", "this"]
                    },
                    o = {
                        className: "meta",
                        begin: "@" + n,
                        contains: [{
                            begin: /\(/,
                            end: /\)/,
                            contains: ["self"]
                        }]
                    },
                    a = {
                        className: "params",
                        begin: /\(/,
                        end: /\)/,
                        keywords: i,
                        relevance: 0,
                        contains: [e.C_BLOCK_COMMENT_MODE],
                        endsParent: !0
                    };
                return {
                    name: "Java",
                    aliases: ["jsp"],
                    keywords: i,
                    illegal: /<\/|#/,
                    contains: [e.COMMENT("/\\*\\*", "\\*/", {
                        relevance: 0,
                        contains: [{
                            begin: /\w+@/,
                            relevance: 0
                        }, {
                            className: "doctag",
                            begin: "@[A-Za-z]+"
                        }]
                    }), {
                        begin: /import java\.[a-z]+\./,
                        keywords: "import",
                        relevance: 2
                    }, e.C_LINE_COMMENT_MODE, e.C_BLOCK_COMMENT_MODE, {
                        begin: /"""/,
                        end: /"""/,
                        className: "string",
                        contains: [e.BACKSLASH_ESCAPE]
                    }, e.APOS_STRING_MODE, e.QUOTE_STRING_MODE, {
                        match: [/\b(?:class|interface|enum|extends|implements|new)/, /\s+/, n],
                        className: {
                            1: "keyword",
                            3: "title.class"
                        }
                    }, {
                        match: /non-sealed/,
                        scope: "keyword"
                    }, {
                        begin: [t.concat(/(?!else)/, n), /\s+/, n, /\s+/, /=(?!=)/],
                        className: {
                            1: "type",
                            3: "variable",
                            5: "operator"
                        }
                    }, {
                        begin: [/record/, /\s+/, n],
                        className: {
                            1: "keyword",
                            3: "title.class"
                        },
                        contains: [a, e.C_LINE_COMMENT_MODE, e.C_BLOCK_COMMENT_MODE]
                    }, {
                        beginKeywords: "new throw return else",
                        relevance: 0
                    }, {
                        begin: ["(?:" + r + "\\s+)", e.UNDERSCORE_IDENT_RE, /\s*(?=\()/],
                        className: {
                            2: "title.function"
                        },
                        keywords: i,
                        contains: [{
                            className: "params",
                            begin: /\(/,
                            end: /\)/,
                            keywords: i,
                            relevance: 0,
                            contains: [o, e.APOS_STRING_MODE, e.QUOTE_STRING_MODE, f, e.C_BLOCK_COMMENT_MODE]
                        }, e.C_LINE_COMMENT_MODE, e.C_BLOCK_COMMENT_MODE]
                    }, f, o]
                }
            }), ew.registerLanguage("javascript", function(e) {
                var t;
                let n = e.regex,
                    r = (e, {
                        after: t
                    }) => {
                        let n = "</" + e[0].slice(1),
                            r = e.input.indexOf(n, t);
                        return -1 !== r
                    },
                    i = {
                        begin: "<>",
                        end: "</>"
                    },
                    o = {
                        begin: /<[A-Za-z0-9\\._:-]+/,
                        end: /\/[A-Za-z0-9\\._:-]+>|\/>/,
                        isTrulyOpeningTag(e, t) {
                            let n = e[0].length + e.index,
                                i = e.input[n];
                            if ("<" === i || "," === i) {
                                t.ignoreMatch();
                                return
                            }
                            ">" !== i || r(e, {
                                after: n
                            }) || t.ignoreMatch();
                            let o, a = e.input.substring(n);
                            if ((o = a.match(/^\s*=/)) || (o = a.match(/^\s+extends\s+/)) && 0 === o.index) {
                                t.ignoreMatch();
                                return
                            }
                        }
                    },
                    a = {
                        $pattern: p,
                        keyword: g,
                        literal: m,
                        built_in: k,
                        "variable.language": v
                    },
                    l = "[0-9](_?[0-9])*",
                    s = `\\.(${l})`,
                    c = "0|[1-9](_?[0-9])*|0[0-7]*[89][0-9]*",
                    u = {
                        className: "number",
                        variants: [{
                            begin: `(\\b(${c})((${s})|\\.)?|(${s}))[eE][+-]?(${l})\\b`
                        }, {
                            begin: `\\b(${c})\\b((${s})\\b|\\.)?|(${s})\\b`
                        }, {
                            begin: "\\b(0|[1-9](_?[0-9])*)n\\b"
                        }, {
                            begin: "\\b0[xX][0-9a-fA-F](_?[0-9a-fA-F])*n?\\b"
                        }, {
                            begin: "\\b0[bB][0-1](_?[0-1])*n?\\b"
                        }, {
                            begin: "\\b0[oO][0-7](_?[0-7])*n?\\b"
                        }, {
                            begin: "\\b0[0-7]+n?\\b"
                        }, ],
                        relevance: 0
                    },
                    d = {
                        className: "subst",
                        begin: "\\$\\{",
                        end: "\\}",
                        keywords: a,
                        contains: []
                    },
                    f = {
                        begin: "html`",
                        end: "",
                        starts: {
                            end: "`",
                            returnEnd: !1,
                            contains: [e.BACKSLASH_ESCAPE, d],
                            subLanguage: "xml"
                        }
                    },
                    x = {
                        begin: "css`",
                        end: "",
                        starts: {
                            end: "`",
                            returnEnd: !1,
                            contains: [e.BACKSLASH_ESCAPE, d],
                            subLanguage: "css"
                        }
                    },
                    _ = {
                        className: "string",
                        begin: "`",
                        end: "`",
                        contains: [e.BACKSLASH_ESCAPE, d]
                    },
                    w = e.COMMENT(/\/\*\*(?!\/)/, "\\*/", {
                        relevance: 0,
                        contains: [{
                            begin: "(?=@[A-Za-z]+)",
                            relevance: 0,
                            contains: [{
                                className: "doctag",
                                begin: "@[A-Za-z]+"
                            }, {
                                className: "type",
                                begin: "\\{",
                                end: "\\}",
                                excludeEnd: !0,
                                excludeBegin: !0,
                                relevance: 0
                            }, {
                                className: "variable",
                                begin: p + "(?=\\s*(-)|$)",
                                endsParent: !0,
                                relevance: 0
                            }, {
                                begin: /(?=[^\n])\s/,
                                relevance: 0
                            }]
                        }]
                    }),
                    E = {
                        className: "comment",
                        variants: [w, e.C_BLOCK_COMMENT_MODE, e.C_LINE_COMMENT_MODE]
                    },
                    S = [e.APOS_STRING_MODE, e.QUOTE_STRING_MODE, f, x, _, {
                        match: /\$\d+/
                    }, u];
                d.contains = S.concat({
                    begin: /\{/,
                    end: /\}/,
                    keywords: a,
                    contains: ["self"].concat(S)
                });
                let N = [].concat(E, d.contains),
                    C = N.concat([{
                        begin: /\(/,
                        end: /\)/,
                        keywords: a,
                        contains: ["self"].concat(N)
                    }]),
                    O = {
                        className: "params",
                        begin: /\(/,
                        end: /\)/,
                        excludeBegin: !0,
                        excludeEnd: !0,
                        keywords: a,
                        contains: C
                    },
                    A = {
                        variants: [{
                            match: [/class/, /\s+/, p, /\s+/, /extends/, /\s+/, n.concat(p, "(", n.concat(/\./, p), ")*")],
                            scope: {
                                1: "keyword",
                                3: "title.class",
                                5: "keyword",
                                7: "title.class.inherited"
                            }
                        }, {
                            match: [/class/, /\s+/, p],
                            scope: {
                                1: "keyword",
                                3: "title.class"
                            }
                        }, ]
                    },
                    T = {
                        relevance: 0,
                        match: n.either(/\bJSON/, /\b[A-Z][a-z]+([A-Z][a-z]*|\d)*/, /\b[A-Z]{2,}([A-Z][a-z]+|\d)+([A-Z][a-z]*)*/, /\b[A-Z]{2,}[a-z]+([A-Z][a-z]+|\d)*([A-Z][a-z]*)*/),
                        className: "title.class",
                        keywords: {
                            _: [...h, ...b]
                        }
                    },
                    M = {
                        match: n.concat(/\b/, (t = [...y, "super", "import"], n.concat("(?!", t.join("|"), ")")), p, n.lookahead(/\(/)),
                        className: "title.function",
                        relevance: 0
                    },
                    I = {
                        begin: n.concat(/\./, n.lookahead(n.concat(p, /(?![0-9A-Za-z$_(])/))),
                        end: p,
                        excludeBegin: !0,
                        keywords: "prototype",
                        className: "property",
                        relevance: 0
                    },
                    D = "(\\([^()]*(\\([^()]*(\\([^()]*\\)[^()]*)*\\)[^()]*)*\\)|" + e.UNDERSCORE_IDENT_RE + ")\\s*=>",
                    L = {
                        match: [/const|var|let/, /\s+/, p, /\s*/, /=\s*/, /(async\s*)?/, n.lookahead(D)],
                        keywords: "async",
                        className: {
                            1: "keyword",
                            3: "title.function"
                        },
                        contains: [O]
                    };
                return {
                    name: "Javascript",
                    aliases: ["js", "jsx", "mjs", "cjs"],
                    keywords: a,
                    exports: {
                        PARAMS_CONTAINS: C,
                        CLASS_REFERENCE: T
                    },
                    illegal: /#(?![$_A-z])/,
                    contains: [e.SHEBANG({
                        label: "shebang",
                        binary: "node",
                        relevance: 5
                    }), {
                        label: "use_strict",
                        className: "meta",
                        relevance: 10,
                        begin: /^\s*['"]use (strict|asm)['"]/
                    }, e.APOS_STRING_MODE, e.QUOTE_STRING_MODE, f, x, _, E, {
                        match: /\$\d+/
                    }, u, T, {
                        className: "attr",
                        begin: p + n.lookahead(":"),
                        relevance: 0
                    }, L, {
                        begin: "(" + e.RE_STARTERS_RE + "|\\b(case|return|throw)\\b)\\s*",
                        keywords: "return throw case",
                        relevance: 0,
                        contains: [E, e.REGEXP_MODE, {
                            className: "function",
                            begin: D,
                            returnBegin: !0,
                            end: "\\s*=>",
                            contains: [{
                                className: "params",
                                variants: [{
                                    begin: e.UNDERSCORE_IDENT_RE,
                                    relevance: 0
                                }, {
                                    className: null,
                                    begin: /\(\s*\)/,
                                    skip: !0
                                }, {
                                    begin: /\(/,
                                    end: /\)/,
                                    excludeBegin: !0,
                                    excludeEnd: !0,
                                    keywords: a,
                                    contains: C
                                }]
                            }]
                        }, {
                            begin: /,/,
                            relevance: 0
                        }, {
                            match: /\s+/,
                            relevance: 0
                        }, {
                            variants: [{
                                begin: i.begin,
                                end: i.end
                            }, {
                                match: /<[A-Za-z0-9\\._:-]+\s*\/>/
                            }, {
                                begin: o.begin,
                                "on:begin": o.isTrulyOpeningTag,
                                end: o.end
                            }],
                            subLanguage: "xml",
                            contains: [{
                                begin: o.begin,
                                end: o.end,
                                skip: !0,
                                contains: ["self"]
                            }]
                        }]
                    }, {
                        variants: [{
                            match: [/function/, /\s+/, p, /(?=\s*\()/]
                        }, {
                            match: [/function/, /\s*(?=\()/]
                        }],
                        className: {
                            1: "keyword",
                            3: "title.function"
                        },
                        label: "func.def",
                        contains: [O],
                        illegal: /%/
                    }, {
                        beginKeywords: "while if switch catch for"
                    }, {
                        begin: "\\b(?!function)" + e.UNDERSCORE_IDENT_RE + "\\([^()]*(\\([^()]*(\\([^()]*\\)[^()]*)*\\)[^()]*)*\\)\\s*\\{",
                        returnBegin: !0,
                        label: "func.def",
                        contains: [O, e.inherit(e.TITLE_MODE, {
                            begin: p,
                            className: "title.function"
                        })]
                    }, {
                        match: /\.\.\./,
                        relevance: 0
                    }, I, {
                        match: "\\$" + p,
                        relevance: 0
                    }, {
                        match: [/\bconstructor(?=\s*\()/],
                        className: {
                            1: "title.function"
                        },
                        contains: [O]
                    }, M, {
                        relevance: 0,
                        match: /\b[A-Z][A-Z_0-9]+\b/,
                        className: "variable.constant"
                    }, A, {
                        match: [/get|set/, /\s+/, p, /(?=\()/],
                        className: {
                            1: "keyword",
                            3: "title.function"
                        },
                        contains: [{
                            begin: /\(\)/
                        }, O]
                    }, {
                        match: /\$[(.]/
                    }]
                }
            }), ew.registerLanguage("json", function(e) {
                let t = ["true", "false", "null"],
                    n = {
                        scope: "literal",
                        beginKeywords: t.join(" ")
                    };
                return {
                    name: "JSON",
                    keywords: {
                        literal: t
                    },
                    contains: [{
                        className: "attr",
                        begin: /"(\\.|[^\\"\r\n])*"(?=\s*:)/,
                        relevance: 1.01
                    }, {
                        match: /[{}[\],:]/,
                        className: "punctuation",
                        relevance: 0
                    }, e.QUOTE_STRING_MODE, n, e.C_NUMBER_MODE, e.C_LINE_COMMENT_MODE, e.C_BLOCK_COMMENT_MODE],
                    illegal: "\\S"
                }
            }), ew.registerLanguage("kotlin", function(e) {
                let t = {
                        keyword: "abstract as val var vararg get set class object open private protected public noinline crossinline dynamic final enum if else do while for when throw try catch finally import package is in fun override companion reified inline lateinit init interface annotation data sealed internal infix operator out by constructor super tailrec where const inner suspend typealias external expect actual",
                        built_in: "Byte Short Char Int Long Boolean Float Double Void Unit Nothing",
                        literal: "true false null"
                    },
                    n = {
                        className: "symbol",
                        begin: e.UNDERSCORE_IDENT_RE + "@"
                    },
                    r = {
                        className: "subst",
                        begin: /\$\{/,
                        end: /\}/,
                        contains: [e.C_NUMBER_MODE]
                    },
                    i = {
                        className: "variable",
                        begin: "\\$" + e.UNDERSCORE_IDENT_RE
                    },
                    o = {
                        className: "string",
                        variants: [{
                            begin: '"""',
                            end: '"""(?=[^"])',
                            contains: [i, r]
                        }, {
                            begin: "'",
                            end: "'",
                            illegal: /\n/,
                            contains: [e.BACKSLASH_ESCAPE]
                        }, {
                            begin: '"',
                            end: '"',
                            illegal: /\n/,
                            contains: [e.BACKSLASH_ESCAPE, i, r]
                        }]
                    };
                r.contains.push(o);
                let a = {
                        className: "meta",
                        begin: "@(?:file|property|field|get|set|receiver|param|setparam|delegate)\\s*:(?:\\s*" + e.UNDERSCORE_IDENT_RE + ")?"
                    },
                    l = {
                        className: "meta",
                        begin: "@" + e.UNDERSCORE_IDENT_RE,
                        contains: [{
                            begin: /\(/,
                            end: /\)/,
                            contains: [e.inherit(o, {
                                className: "string"
                            }), "self"]
                        }]
                    },
                    s = e.COMMENT("/\\*", "\\*/", {
                        contains: [e.C_BLOCK_COMMENT_MODE]
                    }),
                    c = {
                        variants: [{
                            className: "type",
                            begin: e.UNDERSCORE_IDENT_RE
                        }, {
                            begin: /\(/,
                            end: /\)/,
                            contains: []
                        }]
                    },
                    u = c;
                return u.variants[1].contains = [c], c.variants[1].contains = [u], {
                    name: "Kotlin",
                    aliases: ["kt", "kts"],
                    keywords: t,
                    contains: [e.COMMENT("/\\*\\*", "\\*/", {
                        relevance: 0,
                        contains: [{
                            className: "doctag",
                            begin: "@[A-Za-z]+"
                        }]
                    }), e.C_LINE_COMMENT_MODE, s, {
                        className: "keyword",
                        begin: /\b(break|continue|return|this)\b/,
                        starts: {
                            contains: [{
                                className: "symbol",
                                begin: /@\w+/
                            }]
                        }
                    }, n, a, l, {
                        className: "function",
                        beginKeywords: "fun",
                        end: "[(]|$",
                        returnBegin: !0,
                        excludeEnd: !0,
                        keywords: t,
                        relevance: 5,
                        contains: [{
                            begin: e.UNDERSCORE_IDENT_RE + "\\s*\\(",
                            returnBegin: !0,
                            relevance: 0,
                            contains: [e.UNDERSCORE_TITLE_MODE]
                        }, {
                            className: "type",
                            begin: /</,
                            end: />/,
                            keywords: "reified",
                            relevance: 0
                        }, {
                            className: "params",
                            begin: /\(/,
                            end: /\)/,
                            endsParent: !0,
                            keywords: t,
                            relevance: 0,
                            contains: [{
                                begin: /:/,
                                end: /[=,\/]/,
                                endsWithParent: !0,
                                contains: [c, e.C_LINE_COMMENT_MODE, s],
                                relevance: 0
                            }, e.C_LINE_COMMENT_MODE, s, a, l, o, e.C_NUMBER_MODE]
                        }, s]
                    }, {
                        begin: [/class|interface|trait/, /\s+/, e.UNDERSCORE_IDENT_RE],
                        beginScope: {
                            3: "title.class"
                        },
                        keywords: "class interface trait",
                        end: /[:\{(]|$/,
                        excludeEnd: !0,
                        illegal: "extends implements",
                        contains: [{
                            beginKeywords: "public protected internal private constructor"
                        }, e.UNDERSCORE_TITLE_MODE, {
                            className: "type",
                            begin: /</,
                            end: />/,
                            excludeBegin: !0,
                            excludeEnd: !0,
                            relevance: 0
                        }, {
                            className: "type",
                            begin: /[,:]\s*/,
                            end: /[<\(,){\s]|$/,
                            excludeBegin: !0,
                            returnEnd: !0
                        }, a, l]
                    }, o, {
                        className: "meta",
                        begin: "^#!/usr/bin/env",
                        end: "$",
                        illegal: "\n"
                    }, E]
                }
            }), ew.registerLanguage("less", function(e) {
                let t = S(e),
                    n = "[\\w-]+",
                    r = "(" + n + "|@\\{" + n + "\\})",
                    i = [],
                    o = [],
                    a = function(e) {
                        return {
                            className: "string",
                            begin: "~?" + e + ".*?" + e
                        }
                    },
                    l = function(e, t, n) {
                        return {
                            className: e,
                            begin: t,
                            relevance: n
                        }
                    },
                    s = {
                        $pattern: /[a-z-]+/,
                        keyword: "and or not only",
                        attribute: C.join(" ")
                    };
                o.push(e.C_LINE_COMMENT_MODE, e.C_BLOCK_COMMENT_MODE, a("'"), a('"'), t.CSS_NUMBER_MODE, {
                    begin: "(url|data-uri)\\(",
                    starts: {
                        className: "string",
                        end: "[\\)\\n]",
                        excludeEnd: !0
                    }
                }, t.HEXCOLOR, {
                    begin: "\\(",
                    end: "\\)",
                    contains: o,
                    keywords: s,
                    relevance: 0
                }, l("variable", "@@?" + n, 10), l("variable", "@\\{" + n + "\\}"), l("built_in", "~?`[^`]*?`"), {
                    className: "attribute",
                    begin: n + "\\s*:",
                    end: ":",
                    returnBegin: !0,
                    excludeEnd: !0
                }, t.IMPORTANT, {
                    beginKeywords: "and not"
                }, t.FUNCTION_DISPATCH);
                let c = o.concat({
                        begin: /\{/,
                        end: /\}/,
                        contains: i
                    }),
                    u = {
                        beginKeywords: "when",
                        endsWithParent: !0,
                        contains: [{
                            beginKeywords: "and not"
                        }].concat(o)
                    },
                    d = {
                        begin: r + "\\s*:",
                        returnBegin: !0,
                        end: /[;}]/,
                        relevance: 0,
                        contains: [{
                            begin: /-(webkit|moz|ms|o)-/
                        }, t.CSS_VARIABLE, {
                            className: "attribute",
                            begin: "\\b(" + T.join("|") + ")\\b",
                            end: /(?=:)/,
                            starts: {
                                endsWithParent: !0,
                                illegal: "[<=$]",
                                relevance: 0,
                                contains: o
                            }
                        }]
                    },
                    f = {
                        variants: [{
                            begin: "[\\.#:&\\[>]",
                            end: "[;{}]"
                        }, {
                            begin: r,
                            end: /\{/
                        }],
                        returnBegin: !0,
                        returnEnd: !0,
                        illegal: "[<='$\"]",
                        relevance: 0,
                        contains: [e.C_LINE_COMMENT_MODE, e.C_BLOCK_COMMENT_MODE, u, l("keyword", "all\\b"), l("variable", "@\\{" + n + "\\}"), {
                            begin: "\\b(" + N.join("|") + ")\\b",
                            className: "selector-tag"
                        }, t.CSS_NUMBER_MODE, l("selector-tag", r, 0), l("selector-id", "#" + r), l("selector-class", "\\." + r, 0), l("selector-tag", "&", 0), t.ATTRIBUTE_SELECTOR_MODE, {
                            className: "selector-pseudo",
                            begin: ":(" + O.join("|") + ")"
                        }, {
                            className: "selector-pseudo",
                            begin: ":(:)?(" + A.join("|") + ")"
                        }, {
                            begin: /\(/,
                            end: /\)/,
                            relevance: 0,
                            contains: c
                        }, {
                            begin: "!important"
                        }, t.FUNCTION_DISPATCH]
                    },
                    p = {
                        begin: n + ":(:)?" + `(${M.join("|")})`,
                        returnBegin: !0,
                        contains: [f]
                    };
                return i.push(e.C_LINE_COMMENT_MODE, e.C_BLOCK_COMMENT_MODE, {
                    className: "keyword",
                    begin: "@(import|media|charset|font-face|(-[a-z]+-)?keyframes|supports|document|namespace|page|viewport|host)\\b",
                    starts: {
                        end: "[;{}]",
                        keywords: s,
                        returnEnd: !0,
                        contains: o,
                        relevance: 0
                    }
                }, {
                    className: "variable",
                    variants: [{
                        begin: "@" + n + "\\s*:",
                        relevance: 15
                    }, {
                        begin: "@" + n
                    }],
                    starts: {
                        end: "[;}]",
                        returnEnd: !0,
                        contains: c
                    }
                }, p, d, f, u, t.FUNCTION_DISPATCH), {
                    name: "Less",
                    case_insensitive: !0,
                    illegal: "[=>'/<($\"]",
                    contains: i
                }
            }), ew.registerLanguage("lua", function(e) {
                let t = "\\[=*\\[",
                    n = "\\]=*\\]",
                    r = {
                        begin: t,
                        end: n,
                        contains: ["self"]
                    },
                    i = [e.COMMENT("--(?!" + t + ")", "$"), e.COMMENT("--" + t, n, {
                        contains: [r],
                        relevance: 10
                    })];
                return {
                    name: "Lua",
                    keywords: {
                        $pattern: e.UNDERSCORE_IDENT_RE,
                        literal: "true false nil",
                        keyword: "and break do else elseif end for goto if in local not or repeat return then until while",
                        built_in: "_G _ENV _VERSION __index __newindex __mode __call __metatable __tostring __len __gc __add __sub __mul __div __mod __pow __concat __unm __eq __lt __le assert collectgarbage dofile error getfenv getmetatable ipairs load loadfile loadstring module next pairs pcall print rawequal rawget rawset require select setfenv setmetatable tonumber tostring type unpack xpcall arg self coroutine resume yield status wrap create running debug getupvalue debug sethook getmetatable gethook setmetatable setlocal traceback setfenv getinfo setupvalue getlocal getregistry getfenv io lines write close flush open output type read stderr stdin input stdout popen tmpfile math log max acos huge ldexp pi cos tanh pow deg tan cosh sinh random randomseed frexp ceil floor rad abs sqrt modf asin min mod fmod log10 atan2 exp sin atan os exit setlocale date getenv difftime remove time clock tmpname rename execute package preload loadlib loaded loaders cpath config path seeall string sub upper len gfind rep find match char dump gmatch reverse byte format gsub lower table setn insert getn foreachi maxn foreach concat sort remove"
                    },
                    contains: i.concat([{
                        className: "function",
                        beginKeywords: "function",
                        end: "\\)",
                        contains: [e.inherit(e.TITLE_MODE, {
                            begin: "([_a-zA-Z]\\w*\\.)*([_a-zA-Z]\\w*:)?[_a-zA-Z]\\w*"
                        }), {
                            className: "params",
                            begin: "\\(",
                            endsWithParent: !0,
                            contains: i
                        }].concat(i)
                    }, e.C_NUMBER_MODE, e.APOS_STRING_MODE, e.QUOTE_STRING_MODE, {
                        className: "string",
                        begin: t,
                        end: n,
                        contains: [r],
                        relevance: 5
                    }])
                }
            }), ew.registerLanguage("makefile", function(e) {
                let t = {
                        className: "variable",
                        variants: [{
                            begin: "\\$\\(" + e.UNDERSCORE_IDENT_RE + "\\)",
                            contains: [e.BACKSLASH_ESCAPE]
                        }, {
                            begin: /\$[@%<?\^\+\*]/
                        }]
                    },
                    n = {
                        className: "string",
                        begin: /"/,
                        end: /"/,
                        contains: [e.BACKSLASH_ESCAPE, t]
                    },
                    r = {
                        begin: "^" + e.UNDERSCORE_IDENT_RE + "\\s*(?=[:+?]?=)"
                    };
                return {
                    name: "Makefile",
                    aliases: ["mk", "mak", "make", ],
                    keywords: {
                        $pattern: /[\w-]+/,
                        keyword: "define endef undefine ifdef ifndef ifeq ifneq else endif include -include sinclude override export unexport private vpath"
                    },
                    contains: [e.HASH_COMMENT_MODE, t, n, {
                        className: "variable",
                        begin: /\$\([\w-]+\s/,
                        end: /\)/,
                        keywords: {
                            built_in: "subst patsubst strip findstring filter filter-out sort word wordlist firstword lastword dir notdir suffix basename addsuffix addprefix join wildcard realpath abspath error warning shell origin flavor foreach if or and call eval file value"
                        },
                        contains: [t]
                    }, r, {
                        className: "meta",
                        begin: /^\.PHONY:/,
                        end: /$/,
                        keywords: {
                            $pattern: /[\.\w]+/,
                            keyword: ".PHONY"
                        }
                    }, {
                        className: "section",
                        begin: /^[^\s]+:/,
                        end: /$/,
                        contains: [t]
                    }]
                }
            }), ew.registerLanguage("markdown", function(e) {
                let t = e.regex,
                    n = {
                        begin: /<\/?[A-Za-z_]/,
                        end: ">",
                        subLanguage: "xml",
                        relevance: 0
                    },
                    r = {
                        variants: [{
                            begin: /\[.+?\]\[.*?\]/,
                            relevance: 0
                        }, {
                            begin: /\[.+?\]\(((data|javascript|mailto):|(?:http|ftp)s?:\/\/).*?\)/,
                            relevance: 2
                        }, {
                            begin: t.concat(/\[.+?\]\(/, /[A-Za-z][A-Za-z0-9+.-]*/, /:\/\/.*?\)/),
                            relevance: 2
                        }, {
                            begin: /\[.+?\]\([./?&#].*?\)/,
                            relevance: 1
                        }, {
                            begin: /\[.*?\]\(.*?\)/,
                            relevance: 0
                        }],
                        returnBegin: !0,
                        contains: [{
                            match: /\[(?=\])/
                        }, {
                            className: "string",
                            relevance: 0,
                            begin: "\\[",
                            end: "\\]",
                            excludeBegin: !0,
                            returnEnd: !0
                        }, {
                            className: "link",
                            relevance: 0,
                            begin: "\\]\\(",
                            end: "\\)",
                            excludeBegin: !0,
                            excludeEnd: !0
                        }, {
                            className: "symbol",
                            relevance: 0,
                            begin: "\\]\\[",
                            end: "\\]",
                            excludeBegin: !0,
                            excludeEnd: !0
                        }]
                    },
                    i = {
                        className: "strong",
                        contains: [],
                        variants: [{
                            begin: /_{2}(?!\s)/,
                            end: /_{2}/
                        }, {
                            begin: /\*{2}(?!\s)/,
                            end: /\*{2}/
                        }]
                    },
                    o = {
                        className: "emphasis",
                        contains: [],
                        variants: [{
                            begin: /\*(?![*\s])/,
                            end: /\*/
                        }, {
                            begin: /_(?![_\s])/,
                            end: /_/,
                            relevance: 0
                        }]
                    },
                    a = e.inherit(i, {
                        contains: []
                    }),
                    l = e.inherit(o, {
                        contains: []
                    });
                i.contains.push(l), o.contains.push(a);
                let s = [n, r];
                [i, o, a, l].forEach(e => {
                    e.contains = e.contains.concat(s)
                }), s = s.concat(i, o);
                let c = {
                        className: "section",
                        variants: [{
                            begin: "^#{1,6}",
                            end: "$",
                            contains: s
                        }, {
                            begin: "(?=^.+?\\n[=-]{2,}$)",
                            contains: [{
                                begin: "^[=-]*$"
                            }, {
                                begin: "^",
                                end: "\\n",
                                contains: s
                            }]
                        }]
                    },
                    u = {
                        className: "quote",
                        begin: "^>\\s+",
                        contains: s,
                        end: "$"
                    };
                return {
                    name: "Markdown",
                    aliases: ["md", "mkdown", "mkd"],
                    contains: [c, n, {
                        className: "bullet",
                        begin: "^[ 	]*([*+-]|(\\d+\\.))(?=\\s+)",
                        end: "\\s+",
                        excludeEnd: !0
                    }, i, o, u, {
                        className: "code",
                        variants: [{
                            begin: "(`{3,})[^`](.|\\n)*?\\1`*[ ]*"
                        }, {
                            begin: "(~{3,})[^~](.|\\n)*?\\1~*[ ]*"
                        }, {
                            begin: "```",
                            end: "```+[ ]*$"
                        }, {
                            begin: "~~~",
                            end: "~~~+[ ]*$"
                        }, {
                            begin: "`.+?`"
                        }, {
                            begin: "(?=^( {4}|\\t))",
                            contains: [{
                                begin: "^( {4}|\\t)",
                                end: "(\\n)$"
                            }],
                            relevance: 0
                        }]
                    }, {
                        begin: "^[-\\*]{3,}",
                        end: "$"
                    }, r, {
                        begin: /^\[[^\n]+\]:/,
                        returnBegin: !0,
                        contains: [{
                            className: "symbol",
                            begin: /\[/,
                            end: /\]/,
                            excludeBegin: !0,
                            excludeEnd: !0
                        }, {
                            className: "link",
                            begin: /:\s*/,
                            end: /$/,
                            excludeBegin: !0
                        }]
                    }]
                }
            }), ew.registerLanguage("objectivec", function(e) {
                let t = /[a-zA-Z@][a-zA-Z0-9_]*/,
                    n = {
                        $pattern: t,
                        keyword: ["@interface", "@class", "@protocol", "@implementation"]
                    };
                return {
                    name: "Objective-C",
                    aliases: ["mm", "objc", "obj-c", "obj-c++", "objective-c++"],
                    keywords: {
                        "variable.language": ["this", "super"],
                        $pattern: t,
                        keyword: ["while", "export", "sizeof", "typedef", "const", "struct", "for", "union", "volatile", "static", "mutable", "if", "do", "return", "goto", "enum", "else", "break", "extern", "asm", "case", "default", "register", "explicit", "typename", "switch", "continue", "inline", "readonly", "assign", "readwrite", "self", "@synchronized", "id", "typeof", "nonatomic", "IBOutlet", "IBAction", "strong", "weak", "copy", "in", "out", "inout", "bycopy", "byref", "oneway", "__strong", "__weak", "__block", "__autoreleasing", "@private", "@protected", "@public", "@try", "@property", "@end", "@throw", "@catch", "@finally", "@autoreleasepool", "@synthesize", "@dynamic", "@selector", "@optional", "@required", "@encode", "@package", "@import", "@defs", "@compatibility_alias", "__bridge", "__bridge_transfer", "__bridge_retained", "__bridge_retain", "__covariant", "__contravariant", "__kindof", "_Nonnull", "_Nullable", "_Null_unspecified", "__FUNCTION__", "__PRETTY_FUNCTION__", "__attribute__", "getter", "setter", "retain", "unsafe_unretained", "nonnull", "nullable", "null_unspecified", "null_resettable", "class", "instancetype", "NS_DESIGNATED_INITIALIZER", "NS_UNAVAILABLE", "NS_REQUIRES_SUPER", "NS_RETURNS_INNER_POINTER", "NS_INLINE", "NS_AVAILABLE", "NS_DEPRECATED", "NS_ENUM", "NS_OPTIONS", "NS_SWIFT_UNAVAILABLE", "NS_ASSUME_NONNULL_BEGIN", "NS_ASSUME_NONNULL_END", "NS_REFINED_FOR_SWIFT", "NS_SWIFT_NAME", "NS_SWIFT_NOTHROW", "NS_DURING", "NS_HANDLER", "NS_ENDHANDLER", "NS_VALUERETURN", "NS_VOIDRETURN"],
                        literal: ["false", "true", "FALSE", "TRUE", "nil", "YES", "NO", "NULL"],
                        built_in: ["dispatch_once_t", "dispatch_queue_t", "dispatch_sync", "dispatch_async", "dispatch_once"],
                        type: ["int", "float", "char", "unsigned", "signed", "short", "long", "double", "wchar_t", "unichar", "void", "bool", "BOOL", "id|0", "_Bool"]
                    },
                    illegal: "</",
                    contains: [{
                        className: "built_in",
                        begin: "\\b(AV|CA|CF|CG|CI|CL|CM|CN|CT|MK|MP|MTK|MTL|NS|SCN|SK|UI|WK|XC)\\w+"
                    }, e.C_LINE_COMMENT_MODE, e.C_BLOCK_COMMENT_MODE, e.C_NUMBER_MODE, e.QUOTE_STRING_MODE, e.APOS_STRING_MODE, {
                        className: "string",
                        variants: [{
                            begin: '@"',
                            end: '"',
                            illegal: "\\n",
                            contains: [e.BACKSLASH_ESCAPE]
                        }]
                    }, {
                        className: "meta",
                        begin: /#\s*[a-z]+\b/,
                        end: /$/,
                        keywords: {
                            keyword: "if else elif endif define undef warning error line pragma ifdef ifndef include"
                        },
                        contains: [{
                            begin: /\\\n/,
                            relevance: 0
                        }, e.inherit(e.QUOTE_STRING_MODE, {
                            className: "string"
                        }), {
                            className: "string",
                            begin: /<.*?>/,
                            end: /$/,
                            illegal: "\\n"
                        }, e.C_LINE_COMMENT_MODE, e.C_BLOCK_COMMENT_MODE]
                    }, {
                        className: "class",
                        begin: "(" + n.keyword.join("|") + ")\\b",
                        end: /(\{|$)/,
                        excludeEnd: !0,
                        keywords: n,
                        contains: [e.UNDERSCORE_TITLE_MODE]
                    }, {
                        begin: "\\." + e.UNDERSCORE_IDENT_RE,
                        relevance: 0
                    }]
                }
            }), ew.registerLanguage("perl", function(e) {
                let t = e.regex,
                    n = /[dualxmsipngr]{0,12}/,
                    r = {
                        $pattern: /[\w.]+/,
                        keyword: "abs accept alarm and atan2 bind binmode bless break caller chdir chmod chomp chop chown chr chroot close closedir connect continue cos crypt dbmclose dbmopen defined delete die do dump each else elsif endgrent endhostent endnetent endprotoent endpwent endservent eof eval exec exists exit exp fcntl fileno flock for foreach fork format formline getc getgrent getgrgid getgrnam gethostbyaddr gethostbyname gethostent getlogin getnetbyaddr getnetbyname getnetent getpeername getpgrp getpriority getprotobyname getprotobynumber getprotoent getpwent getpwnam getpwuid getservbyname getservbyport getservent getsockname getsockopt given glob gmtime goto grep gt hex if index int ioctl join keys kill last lc lcfirst length link listen local localtime log lstat lt ma map mkdir msgctl msgget msgrcv msgsnd my ne next no not oct open opendir or ord our pack package pipe pop pos print printf prototype push q|0 qq quotemeta qw qx rand read readdir readline readlink readpipe recv redo ref rename require reset return reverse rewinddir rindex rmdir say scalar seek seekdir select semctl semget semop send setgrent sethostent setnetent setpgrp setpriority setprotoent setpwent setservent setsockopt shift shmctl shmget shmread shmwrite shutdown sin sleep socket socketpair sort splice split sprintf sqrt srand stat state study sub substr symlink syscall sysopen sysread sysseek system syswrite tell telldir tie tied time times tr truncate uc ucfirst umask undef unless unlink unpack unshift untie until use utime values vec wait waitpid wantarray warn when while write x|0 xor y|0"
                    },
                    i = {
                        className: "subst",
                        begin: "[$@]\\{",
                        end: "\\}",
                        keywords: r
                    },
                    o = {
                        begin: /->\{/,
                        end: /\}/
                    },
                    a = {
                        variants: [{
                            begin: /\$\d/
                        }, {
                            begin: t.concat(/[$%@](\^\w\b|#\w+(::\w+)*|\{\w+\}|\w+(::\w*)*)/, "(?![A-Za-z])(?![@$%])")
                        }, {
                            begin: /[$%@][^\s\w{]/,
                            relevance: 0
                        }]
                    },
                    l = [e.BACKSLASH_ESCAPE, i, a],
                    s = [/!/, /\//, /\|/, /\?/, /'/, /"/, /#/],
                    c = (e, r, i = "\\1") => {
                        let o = "\\1" === i ? i : t.concat(i, r);
                        return t.concat(t.concat("(?:", e, ")"), r, /(?:\\.|[^\\\/])*?/, o, /(?:\\.|[^\\\/])*?/, i, n)
                    },
                    u = (e, r, i) => t.concat(t.concat("(?:", e, ")"), r, /(?:\\.|[^\\\/])*?/, i, n),
                    d = [a, e.HASH_COMMENT_MODE, e.COMMENT(/^=\w/, /=cut/, {
                        endsWithParent: !0
                    }), o, {
                        className: "string",
                        contains: l,
                        variants: [{
                            begin: "q[qwxr]?\\s*\\(",
                            end: "\\)",
                            relevance: 5
                        }, {
                            begin: "q[qwxr]?\\s*\\[",
                            end: "\\]",
                            relevance: 5
                        }, {
                            begin: "q[qwxr]?\\s*\\{",
                            end: "\\}",
                            relevance: 5
                        }, {
                            begin: "q[qwxr]?\\s*\\|",
                            end: "\\|",
                            relevance: 5
                        }, {
                            begin: "q[qwxr]?\\s*<",
                            end: ">",
                            relevance: 5
                        }, {
                            begin: "qw\\s+q",
                            end: "q",
                            relevance: 5
                        }, {
                            begin: "'",
                            end: "'",
                            contains: [e.BACKSLASH_ESCAPE]
                        }, {
                            begin: '"',
                            end: '"'
                        }, {
                            begin: "`",
                            end: "`",
                            contains: [e.BACKSLASH_ESCAPE]
                        }, {
                            begin: /\{\w+\}/,
                            relevance: 0
                        }, {
                            begin: "-?\\w+\\s*=>",
                            relevance: 0
                        }]
                    }, {
                        className: "number",
                        begin: "(\\b0[0-7_]+)|(\\b0x[0-9a-fA-F_]+)|(\\b[1-9][0-9_]*(\\.[0-9_]+)?)|[0_]\\b",
                        relevance: 0
                    }, {
                        begin: "(\\/\\/|" + e.RE_STARTERS_RE + "|\\b(split|return|print|reverse|grep)\\b)\\s*",
                        keywords: "split return print reverse grep",
                        relevance: 0,
                        contains: [e.HASH_COMMENT_MODE, {
                            className: "regexp",
                            variants: [{
                                begin: c("s|tr|y", t.either(...s, {
                                    capture: !0
                                }))
                            }, {
                                begin: c("s|tr|y", "\\(", "\\)")
                            }, {
                                begin: c("s|tr|y", "\\[", "\\]")
                            }, {
                                begin: c("s|tr|y", "\\{", "\\}")
                            }],
                            relevance: 2
                        }, {
                            className: "regexp",
                            variants: [{
                                begin: /(m|qr)\/\//,
                                relevance: 0
                            }, {
                                begin: u("(?:m|qr)?", /\//, /\//)
                            }, {
                                begin: u("m|qr", t.either(...s, {
                                    capture: !0
                                }), /\1/)
                            }, {
                                begin: u("m|qr", /\(/, /\)/)
                            }, {
                                begin: u("m|qr", /\[/, /\]/)
                            }, {
                                begin: u("m|qr", /\{/, /\}/)
                            }]
                        }]
                    }, {
                        className: "function",
                        beginKeywords: "sub",
                        end: "(\\s*\\(.*?\\))?[;{]",
                        excludeEnd: !0,
                        relevance: 5,
                        contains: [e.TITLE_MODE]
                    }, {
                        begin: "-\\w\\b",
                        relevance: 0
                    }, {
                        begin: "^__DATA__$",
                        end: "^__END__$",
                        subLanguage: "mojolicious",
                        contains: [{
                            begin: "^@@.*",
                            end: "$",
                            className: "comment"
                        }]
                    }];
                return i.contains = d, o.contains = d, {
                    name: "Perl",
                    aliases: ["pl", "pm"],
                    keywords: r,
                    contains: d
                }
            }), ew.registerLanguage("php", function(e) {
                let t = e.regex,
                    n = /(?![A-Za-z0-9])(?![$])/,
                    r = t.concat(/[a-zA-Z_\x7f-\xff][a-zA-Z0-9_\x7f-\xff]*/, n),
                    i = t.concat(/(\\?[A-Z][a-z0-9_\x7f-\xff]+|\\?[A-Z]+(?=[A-Z][a-z0-9_\x7f-\xff])){1,}/, n),
                    o = {
                        scope: "variable",
                        match: "\\$+" + r
                    },
                    a = {
                        scope: "subst",
                        variants: [{
                            begin: /\$\w+/
                        }, {
                            begin: /\{\$/,
                            end: /\}/
                        }]
                    },
                    l = e.inherit(e.APOS_STRING_MODE, {
                        illegal: null
                    }),
                    s = e.inherit(e.QUOTE_STRING_MODE, {
                        illegal: null,
                        contains: e.QUOTE_STRING_MODE.contains.concat(a)
                    }),
                    c = e.END_SAME_AS_BEGIN({
                        begin: /<<<[ \t]*(\w+)\n/,
                        end: /[ \t]*(\w+)\b/,
                        contains: e.QUOTE_STRING_MODE.contains.concat(a)
                    }),
                    u = "[ 	\n]",
                    d = {
                        scope: "string",
                        variants: [s, l, c]
                    },
                    f = {
                        scope: "number",
                        variants: [{
                            begin: "\\b0[bB][01]+(?:_[01]+)*\\b"
                        }, {
                            begin: "\\b0[oO][0-7]+(?:_[0-7]+)*\\b"
                        }, {
                            begin: "\\b0[xX][\\da-fA-F]+(?:_[\\da-fA-F]+)*\\b"
                        }, {
                            begin: "(?:\\b\\d+(?:_\\d+)*(\\.(?:\\d+(?:_\\d+)*))?|\\B\\.\\d+)(?:[eE][+-]?\\d+)?"
                        }],
                        relevance: 0
                    },
                    p = ["false", "null", "true"],
                    g = ["__CLASS__", "__DIR__", "__FILE__", "__FUNCTION__", "__COMPILER_HALT_OFFSET__", "__LINE__", "__METHOD__", "__NAMESPACE__", "__TRAIT__", "die", "echo", "exit", "include", "include_once", "print", "require", "require_once", "array", "abstract", "and", "as", "binary", "bool", "boolean", "break", "callable", "case", "catch", "class", "clone", "const", "continue", "declare", "default", "do", "double", "else", "elseif", "empty", "enddeclare", "endfor", "endforeach", "endif", "endswitch", "endwhile", "enum", "eval", "extends", "final", "finally", "float", "for", "foreach", "from", "global", "goto", "if", "implements", "instanceof", "insteadof", "int", "integer", "interface", "isset", "iterable", "list", "match|0", "mixed", "new", "never", "object", "or", "private", "protected", "public", "readonly", "real", "return", "string", "switch", "throw", "trait", "try", "unset", "use", "var", "void", "while", "xor", "yield"],
                    m = ["Error|0", "AppendIterator", "ArgumentCountError", "ArithmeticError", "ArrayIterator", "ArrayObject", "AssertionError", "BadFunctionCallException", "BadMethodCallException", "CachingIterator", "CallbackFilterIterator", "CompileError", "Countable", "DirectoryIterator", "DivisionByZeroError", "DomainException", "EmptyIterator", "ErrorException", "Exception", "FilesystemIterator", "FilterIterator", "GlobIterator", "InfiniteIterator", "InvalidArgumentException", "IteratorIterator", "LengthException", "LimitIterator", "LogicException", "MultipleIterator", "NoRewindIterator", "OutOfBoundsException", "OutOfRangeException", "OuterIterator", "OverflowException", "ParentIterator", "ParseError", "RangeException", "RecursiveArrayIterator", "RecursiveCachingIterator", "RecursiveCallbackFilterIterator", "RecursiveDirectoryIterator", "RecursiveFilterIterator", "RecursiveIterator", "RecursiveIteratorIterator", "RecursiveRegexIterator", "RecursiveTreeIterator", "RegexIterator", "RuntimeException", "SeekableIterator", "SplDoublyLinkedList", "SplFileInfo", "SplFileObject", "SplFixedArray", "SplHeap", "SplMaxHeap", "SplMinHeap", "SplObjectStorage", "SplObserver", "SplPriorityQueue", "SplQueue", "SplStack", "SplSubject", "SplTempFileObject", "TypeError", "UnderflowException", "UnexpectedValueException", "UnhandledMatchError", "ArrayAccess", "BackedEnum", "Closure", "Fiber", "Generator", "Iterator", "IteratorAggregate", "Serializable", "Stringable", "Throwable", "Traversable", "UnitEnum", "WeakReference", "WeakMap", "Directory", "__PHP_Incomplete_Class", "parent", "php_user_filter", "self", "static", "stdClass"],
                    h = {
                        keyword: g,
                        literal: (e => {
                            let t = [];
                            return e.forEach(e => {
                                t.push(e), e.toLowerCase() === e ? t.push(e.toUpperCase()) : t.push(e.toLowerCase())
                            }), t
                        })(p),
                        built_in: m
                    },
                    b = e => e.map(e => e.replace(/\|\d+$/, "")),
                    y = {
                        variants: [{
                            match: [/new/, t.concat(u, "+"), t.concat("(?!", b(m).join("\\b|"), "\\b)"), i, ],
                            scope: {
                                1: "keyword",
                                4: "title.class"
                            }
                        }]
                    },
                    v = t.concat(r, "\\b(?!\\()"),
                    k = {
                        variants: [{
                            match: [t.concat(/::/, t.lookahead(/(?!class\b)/)), v, ],
                            scope: {
                                2: "variable.constant"
                            }
                        }, {
                            match: [/::/, /class/, ],
                            scope: {
                                2: "variable.language"
                            }
                        }, {
                            match: [i, t.concat(/::/, t.lookahead(/(?!class\b)/)), v, ],
                            scope: {
                                1: "title.class",
                                3: "variable.constant"
                            }
                        }, {
                            match: [i, t.concat("::", t.lookahead(/(?!class\b)/)), ],
                            scope: {
                                1: "title.class"
                            }
                        }, {
                            match: [i, /::/, /class/, ],
                            scope: {
                                1: "title.class",
                                3: "variable.language"
                            }
                        }]
                    },
                    x = {
                        scope: "attr",
                        match: t.concat(r, t.lookahead(":"), t.lookahead(/(?!::)/))
                    },
                    _ = {
                        relevance: 0,
                        begin: /\(/,
                        end: /\)/,
                        keywords: h,
                        contains: [x, o, k, e.C_BLOCK_COMMENT_MODE, d, f, y, ]
                    },
                    w = {
                        relevance: 0,
                        match: [/\b/, t.concat("(?!fn\\b|function\\b|", b(g).join("\\b|"), "|", b(m).join("\\b|"), "\\b)"), r, t.concat(u, "*"), t.lookahead(/(?=\()/)],
                        scope: {
                            3: "title.function.invoke"
                        },
                        contains: [_]
                    };
                _.contains.push(w);
                let E = [x, k, e.C_BLOCK_COMMENT_MODE, d, f, y, ],
                    S = {
                        begin: t.concat(/#\[\s*/, i),
                        beginScope: "meta",
                        end: /]/,
                        endScope: "meta",
                        keywords: {
                            literal: p,
                            keyword: ["new", "array", ]
                        },
                        contains: [{
                            begin: /\[/,
                            end: /]/,
                            keywords: {
                                literal: p,
                                keyword: ["new", "array", ]
                            },
                            contains: ["self", ...E, ]
                        }, ...E, {
                            scope: "meta",
                            match: i
                        }]
                    };
                return {
                    case_insensitive: !1,
                    keywords: h,
                    contains: [S, e.HASH_COMMENT_MODE, e.COMMENT("//", "$"), e.COMMENT("/\\*", "\\*/", {
                        contains: [{
                            scope: "doctag",
                            match: "@[A-Za-z]+"
                        }]
                    }), {
                        match: /__halt_compiler\(\);/,
                        keywords: "__halt_compiler",
                        starts: {
                            scope: "comment",
                            end: e.MATCH_NOTHING_RE,
                            contains: [{
                                match: /\?>/,
                                scope: "meta",
                                endsParent: !0
                            }]
                        }
                    }, {
                        scope: "meta",
                        variants: [{
                            begin: /<\?php/,
                            relevance: 10
                        }, {
                            begin: /<\?=/
                        }, {
                            begin: /<\?/,
                            relevance: .1
                        }, {
                            begin: /\?>/
                        }]
                    }, {
                        scope: "variable.language",
                        match: /\$this\b/
                    }, o, w, k, {
                        match: [/const/, /\s/, r, ],
                        scope: {
                            1: "keyword",
                            3: "variable.constant"
                        }
                    }, y, {
                        scope: "function",
                        relevance: 0,
                        beginKeywords: "fn function",
                        end: /[;{]/,
                        excludeEnd: !0,
                        illegal: "[$%\\[]",
                        contains: [{
                            beginKeywords: "use"
                        }, e.UNDERSCORE_TITLE_MODE, {
                            begin: "=>",
                            endsParent: !0
                        }, {
                            scope: "params",
                            begin: "\\(",
                            end: "\\)",
                            excludeBegin: !0,
                            excludeEnd: !0,
                            keywords: h,
                            contains: ["self", o, k, e.C_BLOCK_COMMENT_MODE, d, f]
                        }, ]
                    }, {
                        scope: "class",
                        variants: [{
                            beginKeywords: "enum",
                            illegal: /[($"]/
                        }, {
                            beginKeywords: "class interface trait",
                            illegal: /[:($"]/
                        }],
                        relevance: 0,
                        end: /\{/,
                        excludeEnd: !0,
                        contains: [{
                            beginKeywords: "extends implements"
                        }, e.UNDERSCORE_TITLE_MODE]
                    }, {
                        beginKeywords: "namespace",
                        relevance: 0,
                        end: ";",
                        illegal: /[.']/,
                        contains: [e.inherit(e.UNDERSCORE_TITLE_MODE, {
                            scope: "title.class"
                        })]
                    }, {
                        beginKeywords: "use",
                        relevance: 0,
                        end: ";",
                        contains: [{
                            match: /\b(as|const|function)\b/,
                            scope: "keyword"
                        }, e.UNDERSCORE_TITLE_MODE]
                    }, d, f, ]
                }
            }), ew.registerLanguage("php-template", function(e) {
                return {
                    name: "PHP template",
                    subLanguage: "xml",
                    contains: [{
                        begin: /<\?(php|=)?/,
                        end: /\?>/,
                        subLanguage: "php",
                        contains: [{
                            begin: "/\\*",
                            end: "\\*/",
                            skip: !0
                        }, {
                            begin: 'b"',
                            end: '"',
                            skip: !0
                        }, {
                            begin: "b'",
                            end: "'",
                            skip: !0
                        }, e.inherit(e.APOS_STRING_MODE, {
                            illegal: null,
                            className: null,
                            contains: null,
                            skip: !0
                        }), e.inherit(e.QUOTE_STRING_MODE, {
                            illegal: null,
                            className: null,
                            contains: null,
                            skip: !0
                        })]
                    }]
                }
            }), ew.registerLanguage("plaintext", function(e) {
                return {
                    name: "Plain text",
                    aliases: ["text", "txt"],
                    disableAutodetect: !0
                }
            }), ew.registerLanguage("python", function(e) {
                let t = e.regex,
                    n = /[\p{XID_Start}_]\p{XID_Continue}*/u,
                    r = ["and", "as", "assert", "async", "await", "break", "case", "class", "continue", "def", "del", "elif", "else", "except", "finally", "for", "from", "global", "if", "import", "in", "is", "lambda", "match", "nonlocal|10", "not", "or", "pass", "raise", "return", "try", "while", "with", "yield"],
                    i = {
                        $pattern: /[A-Za-z]\w+|__\w+__/,
                        keyword: r,
                        built_in: ["__import__", "abs", "all", "any", "ascii", "bin", "bool", "breakpoint", "bytearray", "bytes", "callable", "chr", "classmethod", "compile", "complex", "delattr", "dict", "dir", "divmod", "enumerate", "eval", "exec", "filter", "float", "format", "frozenset", "getattr", "globals", "hasattr", "hash", "help", "hex", "id", "input", "int", "isinstance", "issubclass", "iter", "len", "list", "locals", "map", "max", "memoryview", "min", "next", "object", "oct", "open", "ord", "pow", "print", "property", "range", "repr", "reversed", "round", "set", "setattr", "slice", "sorted", "staticmethod", "str", "sum", "super", "tuple", "type", "vars", "zip"],
                        literal: ["__debug__", "Ellipsis", "False", "None", "NotImplemented", "True"],
                        type: ["Any", "Callable", "Coroutine", "Dict", "List", "Literal", "Generic", "Optional", "Sequence", "Set", "Tuple", "Type", "Union"]
                    },
                    o = {
                        className: "meta",
                        begin: /^(>>>|\.\.\.) /
                    },
                    a = {
                        className: "subst",
                        begin: /\{/,
                        end: /\}/,
                        keywords: i,
                        illegal: /#/
                    },
                    l = {
                        begin: /\{\{/,
                        relevance: 0
                    },
                    s = {
                        className: "string",
                        contains: [e.BACKSLASH_ESCAPE],
                        variants: [{
                            begin: /([uU]|[bB]|[rR]|[bB][rR]|[rR][bB])?'''/,
                            end: /'''/,
                            contains: [e.BACKSLASH_ESCAPE, o],
                            relevance: 10
                        }, {
                            begin: /([uU]|[bB]|[rR]|[bB][rR]|[rR][bB])?"""/,
                            end: /"""/,
                            contains: [e.BACKSLASH_ESCAPE, o],
                            relevance: 10
                        }, {
                            begin: /([fF][rR]|[rR][fF]|[fF])'''/,
                            end: /'''/,
                            contains: [e.BACKSLASH_ESCAPE, o, l, a]
                        }, {
                            begin: /([fF][rR]|[rR][fF]|[fF])"""/,
                            end: /"""/,
                            contains: [e.BACKSLASH_ESCAPE, o, l, a]
                        }, {
                            begin: /([uU]|[rR])'/,
                            end: /'/,
                            relevance: 10
                        }, {
                            begin: /([uU]|[rR])"/,
                            end: /"/,
                            relevance: 10
                        }, {
                            begin: /([bB]|[bB][rR]|[rR][bB])'/,
                            end: /'/
                        }, {
                            begin: /([bB]|[bB][rR]|[rR][bB])"/,
                            end: /"/
                        }, {
                            begin: /([fF][rR]|[rR][fF]|[fF])'/,
                            end: /'/,
                            contains: [e.BACKSLASH_ESCAPE, l, a]
                        }, {
                            begin: /([fF][rR]|[rR][fF]|[fF])"/,
                            end: /"/,
                            contains: [e.BACKSLASH_ESCAPE, l, a]
                        }, e.APOS_STRING_MODE, e.QUOTE_STRING_MODE]
                    },
                    c = "[0-9](_?[0-9])*",
                    u = `(\\b(${c}))?\\.(${c})|\\b(${c})\\.`,
                    d = `\\b|${r.join("|")}`,
                    f = {
                        className: "number",
                        relevance: 0,
                        variants: [{
                            begin: `(\\b(${c})|(${u}))[eE][+-]?(${c})[jJ]?(?=${d})`
                        }, {
                            begin: `(${u})[jJ]?`
                        }, {
                            begin: `\\b([1-9](_?[0-9])*|0+(_?0)*)[lLjJ]?(?=${d})`
                        }, {
                            begin: `\\b0[bB](_?[01])+[lL]?(?=${d})`
                        }, {
                            begin: `\\b0[oO](_?[0-7])+[lL]?(?=${d})`
                        }, {
                            begin: `\\b0[xX](_?[0-9a-fA-F])+[lL]?(?=${d})`
                        }, {
                            begin: `\\b(${c})[jJ](?=${d})`
                        }]
                    },
                    p = {
                        className: "comment",
                        begin: t.lookahead(/# type:/),
                        end: /$/,
                        keywords: i,
                        contains: [{
                            begin: /# type:/
                        }, {
                            begin: /#/,
                            end: /\b\B/,
                            endsWithParent: !0
                        }]
                    },
                    g = {
                        className: "params",
                        variants: [{
                            className: "",
                            begin: /\(\s*\)/,
                            skip: !0
                        }, {
                            begin: /\(/,
                            end: /\)/,
                            excludeBegin: !0,
                            excludeEnd: !0,
                            keywords: i,
                            contains: ["self", o, f, s, e.HASH_COMMENT_MODE]
                        }]
                    };
                return a.contains = [s, f, o], {
                    name: "Python",
                    aliases: ["py", "gyp", "ipython"],
                    unicodeRegex: !0,
                    keywords: i,
                    illegal: /(<\/|->|\?)|=>/,
                    contains: [o, f, {
                        begin: /\bself\b/
                    }, {
                        beginKeywords: "if",
                        relevance: 0
                    }, s, p, e.HASH_COMMENT_MODE, {
                        match: [/\bdef/, /\s+/, n, ],
                        scope: {
                            1: "keyword",
                            3: "title.function"
                        },
                        contains: [g]
                    }, {
                        variants: [{
                            match: [/\bclass/, /\s+/, n, /\s*/, /\(\s*/, n, /\s*\)/]
                        }, {
                            match: [/\bclass/, /\s+/, n]
                        }],
                        scope: {
                            1: "keyword",
                            3: "title.class",
                            6: "title.class.inherited"
                        }
                    }, {
                        className: "meta",
                        begin: /^[\t ]*@/,
                        end: /(?=#)|$/,
                        contains: [f, g, s]
                    }]
                }
            }), ew.registerLanguage("python-repl", function(e) {
                return {
                    aliases: ["pycon"],
                    contains: [{
                        className: "meta.prompt",
                        starts: {
                            end: / |$/,
                            starts: {
                                end: "$",
                                subLanguage: "python"
                            }
                        },
                        variants: [{
                            begin: /^>>>(?=[ ]|$)/
                        }, {
                            begin: /^\.\.\.(?=[ ]|$)/
                        }]
                    }]
                }
            }), ew.registerLanguage("r", function(e) {
                let t = e.regex,
                    n = /(?:(?:[a-zA-Z]|\.[._a-zA-Z])[._a-zA-Z0-9]*)|\.(?!\d)/,
                    r = t.either(/0[xX][0-9a-fA-F]+\.[0-9a-fA-F]*[pP][+-]?\d+i?/, /0[xX][0-9a-fA-F]+(?:[pP][+-]?\d+)?[Li]?/, /(?:\d+(?:\.\d*)?|\.\d+)(?:[eE][+-]?\d+)?[Li]?/),
                    i = /[=!<>:]=|\|\||&&|:::?|<-|<<-|->>|->|\|>|[-+*\/?!$&|:<=>@^~]|\*\*/,
                    o = t.either(/[()]/, /[{}]/, /\[\[/, /[[\]]/, /\\/, /,/);
                return {
                    name: "R",
                    keywords: {
                        $pattern: n,
                        keyword: "function if in break next repeat else for while",
                        literal: "NULL NA TRUE FALSE Inf NaN NA_integer_|10 NA_real_|10 NA_character_|10 NA_complex_|10",
                        built_in: "LETTERS letters month.abb month.name pi T F abs acos acosh all any anyNA Arg as.call as.character as.complex as.double as.environment as.integer as.logical as.null.default as.numeric as.raw asin asinh atan atanh attr attributes baseenv browser c call ceiling class Conj cos cosh cospi cummax cummin cumprod cumsum digamma dim dimnames emptyenv exp expression floor forceAndCall gamma gc.time globalenv Im interactive invisible is.array is.atomic is.call is.character is.complex is.double is.environment is.expression is.finite is.function is.infinite is.integer is.language is.list is.logical is.matrix is.na is.name is.nan is.null is.numeric is.object is.pairlist is.raw is.recursive is.single is.symbol lazyLoadDBfetch length lgamma list log max min missing Mod names nargs nzchar oldClass on.exit pos.to.env proc.time prod quote range Re rep retracemem return round seq_along seq_len seq.int sign signif sin sinh sinpi sqrt standardGeneric substitute sum switch tan tanh tanpi tracemem trigamma trunc unclass untracemem UseMethod xtfrm"
                    },
                    contains: [e.COMMENT(/#'/, /$/, {
                        contains: [{
                            scope: "doctag",
                            match: /@examples/,
                            starts: {
                                end: t.lookahead(t.either(/\n^#'\s*(?=@[a-zA-Z]+)/, /\n^(?!#')/)),
                                endsParent: !0
                            }
                        }, {
                            scope: "doctag",
                            begin: "@param",
                            end: /$/,
                            contains: [{
                                scope: "variable",
                                variants: [{
                                    match: n
                                }, {
                                    match: /`(?:\\.|[^`\\])+`/
                                }],
                                endsParent: !0
                            }]
                        }, {
                            scope: "doctag",
                            match: /@[a-zA-Z]+/
                        }, {
                            scope: "keyword",
                            match: /\\[a-zA-Z]+/
                        }]
                    }), e.HASH_COMMENT_MODE, {
                        scope: "string",
                        contains: [e.BACKSLASH_ESCAPE],
                        variants: [e.END_SAME_AS_BEGIN({
                            begin: /[rR]"(-*)\(/,
                            end: /\)(-*)"/
                        }), e.END_SAME_AS_BEGIN({
                            begin: /[rR]"(-*)\{/,
                            end: /\}(-*)"/
                        }), e.END_SAME_AS_BEGIN({
                            begin: /[rR]"(-*)\[/,
                            end: /\](-*)"/
                        }), e.END_SAME_AS_BEGIN({
                            begin: /[rR]'(-*)\(/,
                            end: /\)(-*)'/
                        }), e.END_SAME_AS_BEGIN({
                            begin: /[rR]'(-*)\{/,
                            end: /\}(-*)'/
                        }), e.END_SAME_AS_BEGIN({
                            begin: /[rR]'(-*)\[/,
                            end: /\](-*)'/
                        }), {
                            begin: '"',
                            end: '"',
                            relevance: 0
                        }, {
                            begin: "'",
                            end: "'",
                            relevance: 0
                        }]
                    }, {
                        relevance: 0,
                        variants: [{
                            scope: {
                                1: "operator",
                                2: "number"
                            },
                            match: [i, r]
                        }, {
                            scope: {
                                1: "operator",
                                2: "number"
                            },
                            match: [/%[^%]*%/, r]
                        }, {
                            scope: {
                                1: "punctuation",
                                2: "number"
                            },
                            match: [o, r]
                        }, {
                            scope: {
                                2: "number"
                            },
                            match: [/[^a-zA-Z0-9._]|^/, r]
                        }]
                    }, {
                        scope: {
                            3: "operator"
                        },
                        match: [n, /\s+/, /<-/, /\s+/]
                    }, {
                        scope: "operator",
                        relevance: 0,
                        variants: [{
                            match: i
                        }, {
                            match: /%[^%]*%/
                        }]
                    }, {
                        scope: "punctuation",
                        relevance: 0,
                        match: o
                    }, {
                        begin: "`",
                        end: "`",
                        contains: [{
                            begin: /\\./
                        }]
                    }]
                }
            }), ew.registerLanguage("ruby", function(e) {
                let t = e.regex,
                    n = "([a-zA-Z_]\\w*[!?=]?|[-+~]@|<<|>>|=~|===?|<=>|[<>]=?|\\*\\*|[-/+%^&*~`|]|\\[\\]=?)",
                    r = t.either(/\b([A-Z]+[a-z0-9]+)+/, /\b([A-Z]+[a-z0-9]+)+[A-Z]+/),
                    i = t.concat(r, /(::\w+)*/),
                    o = {
                        "variable.constant": ["__FILE__", "__LINE__", "__ENCODING__"],
                        "variable.language": ["self", "super", ],
                        keyword: ["alias", "and", "begin", "BEGIN", "break", "case", "class", "defined", "do", "else", "elsif", "end", "END", "ensure", "for", "if", "in", "module", "next", "not", "or", "redo", "require", "rescue", "retry", "return", "then", "undef", "unless", "until", "when", "while", "yield", "include", "extend", "prepend", "public", "private", "protected", "raise", "throw"],
                        built_in: ["proc", "lambda", "attr_accessor", "attr_reader", "attr_writer", "define_method", "private_constant", "module_function"],
                        literal: ["true", "false", "nil"]
                    },
                    a = {
                        className: "doctag",
                        begin: "@[A-Za-z]+"
                    },
                    l = {
                        begin: "#<",
                        end: ">"
                    },
                    s = [e.COMMENT("#", "$", {
                        contains: [a]
                    }), e.COMMENT("^=begin", "^=end", {
                        contains: [a],
                        relevance: 10
                    }), e.COMMENT("^__END__", e.MATCH_NOTHING_RE)],
                    c = {
                        className: "subst",
                        begin: /#\{/,
                        end: /\}/,
                        keywords: o
                    },
                    u = {
                        className: "string",
                        contains: [e.BACKSLASH_ESCAPE, c],
                        variants: [{
                            begin: /'/,
                            end: /'/
                        }, {
                            begin: /"/,
                            end: /"/
                        }, {
                            begin: /`/,
                            end: /`/
                        }, {
                            begin: /%[qQwWx]?\(/,
                            end: /\)/
                        }, {
                            begin: /%[qQwWx]?\[/,
                            end: /\]/
                        }, {
                            begin: /%[qQwWx]?\{/,
                            end: /\}/
                        }, {
                            begin: /%[qQwWx]?</,
                            end: />/
                        }, {
                            begin: /%[qQwWx]?\//,
                            end: /\//
                        }, {
                            begin: /%[qQwWx]?%/,
                            end: /%/
                        }, {
                            begin: /%[qQwWx]?-/,
                            end: /-/
                        }, {
                            begin: /%[qQwWx]?\|/,
                            end: /\|/
                        }, {
                            begin: /\B\?(\\\d{1,3})/
                        }, {
                            begin: /\B\?(\\x[A-Fa-f0-9]{1,2})/
                        }, {
                            begin: /\B\?(\\u\{?[A-Fa-f0-9]{1,6}\}?)/
                        }, {
                            begin: /\B\?(\\M-\\C-|\\M-\\c|\\c\\M-|\\M-|\\C-\\M-)[\x20-\x7e]/
                        }, {
                            begin: /\B\?\\(c|C-)[\x20-\x7e]/
                        }, {
                            begin: /\B\?\\?\S/
                        }, {
                            begin: t.concat(/<<[-~]?'?/, t.lookahead(/(\w+)(?=\W)[^\n]*\n(?:[^\n]*\n)*?\s*\1\b/)),
                            contains: [e.END_SAME_AS_BEGIN({
                                begin: /(\w+)/,
                                end: /(\w+)/,
                                contains: [e.BACKSLASH_ESCAPE, c]
                            })]
                        }]
                    },
                    d = "[0-9](_?[0-9])*",
                    f = {
                        className: "number",
                        relevance: 0,
                        variants: [{
                            begin: `\\b([1-9](_?[0-9])*|0)(\\.(${d}))?([eE][+-]?(${d})|r)?i?\\b`
                        }, {
                            begin: "\\b0[dD][0-9](_?[0-9])*r?i?\\b"
                        }, {
                            begin: "\\b0[bB][0-1](_?[0-1])*r?i?\\b"
                        }, {
                            begin: "\\b0[oO][0-7](_?[0-7])*r?i?\\b"
                        }, {
                            begin: "\\b0[xX][0-9a-fA-F](_?[0-9a-fA-F])*r?i?\\b"
                        }, {
                            begin: "\\b0(_?[0-7])+r?i?\\b"
                        }]
                    },
                    p = {
                        variants: [{
                            match: /\(\)/
                        }, {
                            className: "params",
                            begin: /\(/,
                            end: /(?=\))/,
                            excludeBegin: !0,
                            endsParent: !0,
                            keywords: o
                        }]
                    },
                    g = [u, {
                        variants: [{
                            match: [/class\s+/, i, /\s+<\s+/, i]
                        }, {
                            match: [/\b(class|module)\s+/, i]
                        }],
                        scope: {
                            2: "title.class",
                            4: "title.class.inherited"
                        },
                        keywords: o
                    }, {
                        match: [/(include|extend)\s+/, i],
                        scope: {
                            2: "title.class"
                        },
                        keywords: o
                    }, {
                        relevance: 0,
                        match: [i, /\.new[. (]/],
                        scope: {
                            1: "title.class"
                        }
                    }, {
                        relevance: 0,
                        match: /\b[A-Z][A-Z_0-9]+\b/,
                        className: "variable.constant"
                    }, {
                        relevance: 0,
                        match: r,
                        scope: "title.class"
                    }, {
                        match: [/def/, /\s+/, n],
                        scope: {
                            1: "keyword",
                            3: "title.function"
                        },
                        contains: [p]
                    }, {
                        begin: e.IDENT_RE + "::"
                    }, {
                        className: "symbol",
                        begin: e.UNDERSCORE_IDENT_RE + "(!|\\?)?:",
                        relevance: 0
                    }, {
                        className: "symbol",
                        begin: ":(?!\\s)",
                        contains: [u, {
                            begin: n
                        }],
                        relevance: 0
                    }, f, {
                        className: "variable",
                        begin: "(\\$\\W)|((\\$|@@?)(\\w+))(?=[^@$?])(?![A-Za-z])(?![@$?'])"
                    }, {
                        className: "params",
                        begin: /\|/,
                        end: /\|/,
                        excludeBegin: !0,
                        excludeEnd: !0,
                        relevance: 0,
                        keywords: o
                    }, {
                        begin: "(" + e.RE_STARTERS_RE + "|unless)\\s*",
                        keywords: "unless",
                        contains: [{
                            className: "regexp",
                            contains: [e.BACKSLASH_ESCAPE, c],
                            illegal: /\n/,
                            variants: [{
                                begin: "/",
                                end: "/[a-z]*"
                            }, {
                                begin: /%r\{/,
                                end: /\}[a-z]*/
                            }, {
                                begin: "%r\\(",
                                end: "\\)[a-z]*"
                            }, {
                                begin: "%r!",
                                end: "![a-z]*"
                            }, {
                                begin: "%r\\[",
                                end: "\\][a-z]*"
                            }]
                        }].concat(l, s),
                        relevance: 0
                    }].concat(l, s);
                return c.contains = g, p.contains = g, s.unshift(l), {
                    name: "Ruby",
                    aliases: ["rb", "gemspec", "podspec", "thor", "irb"],
                    keywords: o,
                    illegal: /\/\*/,
                    contains: [e.SHEBANG({
                        binary: "ruby"
                    })].concat([{
                        begin: /^\s*=>/,
                        starts: {
                            end: "$",
                            contains: g
                        }
                    }, {
                        className: "meta.prompt",
                        begin: "^([>?]>|[\\w#]+\\(\\w+\\):\\d+:\\d+[>*]|(\\w+-)?\\d+\\.\\d+\\.\\d+(p\\d+)?[^\\d][^>]+>)(?=[ ])",
                        starts: {
                            end: "$",
                            keywords: o,
                            contains: g
                        }
                    }]).concat(s).concat(g)
                }
            }), ew.registerLanguage("rust", function(e) {
                let t = e.regex,
                    n = {
                        className: "title.function.invoke",
                        relevance: 0,
                        begin: t.concat(/\b/, /(?!let\b)/, e.IDENT_RE, t.lookahead(/\s*\(/))
                    },
                    r = "([ui](8|16|32|64|128|size)|f(32|64))?",
                    i = ["drop ", "Copy", "Send", "Sized", "Sync", "Drop", "Fn", "FnMut", "FnOnce", "ToOwned", "Clone", "Debug", "PartialEq", "PartialOrd", "Eq", "Ord", "AsRef", "AsMut", "Into", "From", "Default", "Iterator", "Extend", "IntoIterator", "DoubleEndedIterator", "ExactSizeIterator", "SliceConcatExt", "ToString", "assert!", "assert_eq!", "bitflags!", "bytes!", "cfg!", "col!", "concat!", "concat_idents!", "debug_assert!", "debug_assert_eq!", "env!", "panic!", "file!", "format!", "format_args!", "include_bytes!", "include_str!", "line!", "local_data_key!", "module_path!", "option_env!", "print!", "println!", "select!", "stringify!", "try!", "unimplemented!", "unreachable!", "vec!", "write!", "writeln!", "macro_rules!", "assert_ne!", "debug_assert_ne!"],
                    o = ["i8", "i16", "i32", "i64", "i128", "isize", "u8", "u16", "u32", "u64", "u128", "usize", "f32", "f64", "str", "char", "bool", "Box", "Option", "Result", "String", "Vec"];
                return {
                    name: "Rust",
                    aliases: ["rs"],
                    keywords: {
                        $pattern: e.IDENT_RE + "!?",
                        type: o,
                        keyword: ["abstract", "as", "async", "await", "become", "box", "break", "const", "continue", "crate", "do", "dyn", "else", "enum", "extern", "false", "final", "fn", "for", "if", "impl", "in", "let", "loop", "macro", "match", "mod", "move", "mut", "override", "priv", "pub", "ref", "return", "self", "Self", "static", "struct", "super", "trait", "true", "try", "type", "typeof", "unsafe", "unsized", "use", "virtual", "where", "while", "yield"],
                        literal: ["true", "false", "Some", "None", "Ok", "Err"],
                        built_in: i
                    },
                    illegal: "</",
                    contains: [e.C_LINE_COMMENT_MODE, e.COMMENT("/\\*", "\\*/", {
                        contains: ["self"]
                    }), e.inherit(e.QUOTE_STRING_MODE, {
                        begin: /b?"/,
                        illegal: null
                    }), {
                        className: "string",
                        variants: [{
                            begin: /b?r(#*)"(.|\n)*?"\1(?!#)/
                        }, {
                            begin: /b?'\\?(x\w{2}|u\w{4}|U\w{8}|.)'/
                        }]
                    }, {
                        className: "symbol",
                        begin: /'[a-zA-Z_][a-zA-Z0-9_]*/
                    }, {
                        className: "number",
                        variants: [{
                            begin: "\\b0b([01_]+)" + r
                        }, {
                            begin: "\\b0o([0-7_]+)" + r
                        }, {
                            begin: "\\b0x([A-Fa-f0-9_]+)" + r
                        }, {
                            begin: "\\b(\\d[\\d_]*(\\.[0-9_]+)?([eE][+-]?[0-9_]+)?)" + r
                        }],
                        relevance: 0
                    }, {
                        begin: [/fn/, /\s+/, e.UNDERSCORE_IDENT_RE],
                        className: {
                            1: "keyword",
                            3: "title.function"
                        }
                    }, {
                        className: "meta",
                        begin: "#!?\\[",
                        end: "\\]",
                        contains: [{
                            className: "string",
                            begin: /"/,
                            end: /"/
                        }]
                    }, {
                        begin: [/let/, /\s+/, /(?:mut\s+)?/, e.UNDERSCORE_IDENT_RE],
                        className: {
                            1: "keyword",
                            3: "keyword",
                            4: "variable"
                        }
                    }, {
                        begin: [/for/, /\s+/, e.UNDERSCORE_IDENT_RE, /\s+/, /in/],
                        className: {
                            1: "keyword",
                            3: "variable",
                            5: "keyword"
                        }
                    }, {
                        begin: [/type/, /\s+/, e.UNDERSCORE_IDENT_RE],
                        className: {
                            1: "keyword",
                            3: "title.class"
                        }
                    }, {
                        begin: [/(?:trait|enum|struct|union|impl|for)/, /\s+/, e.UNDERSCORE_IDENT_RE],
                        className: {
                            1: "keyword",
                            3: "title.class"
                        }
                    }, {
                        begin: e.IDENT_RE + "::",
                        keywords: {
                            keyword: "Self",
                            built_in: i,
                            type: o
                        }
                    }, {
                        className: "punctuation",
                        begin: "->"
                    }, n]
                }
            }), ew.registerLanguage("scss", function(e) {
                let t = I(e),
                    n = "@[a-z-]+",
                    r = {
                        className: "variable",
                        begin: "(\\$[a-zA-Z-][a-zA-Z0-9_-]*)\\b",
                        relevance: 0
                    };
                return {
                    name: "SCSS",
                    case_insensitive: !0,
                    illegal: "[=/|']",
                    contains: [e.C_LINE_COMMENT_MODE, e.C_BLOCK_COMMENT_MODE, t.CSS_NUMBER_MODE, {
                        className: "selector-id",
                        begin: "#[A-Za-z0-9_-]+",
                        relevance: 0
                    }, {
                        className: "selector-class",
                        begin: "\\.[A-Za-z0-9_-]+",
                        relevance: 0
                    }, t.ATTRIBUTE_SELECTOR_MODE, {
                        className: "selector-tag",
                        begin: "\\b(" + D.join("|") + ")\\b",
                        relevance: 0
                    }, {
                        className: "selector-pseudo",
                        begin: ":(" + R.join("|") + ")"
                    }, {
                        className: "selector-pseudo",
                        begin: ":(:)?(" + F.join("|") + ")"
                    }, r, {
                        begin: /\(/,
                        end: /\)/,
                        contains: [t.CSS_NUMBER_MODE]
                    }, t.CSS_VARIABLE, {
                        className: "attribute",
                        begin: "\\b(" + P.join("|") + ")\\b"
                    }, {
                        begin: "\\b(whitespace|wait|w-resize|visible|vertical-text|vertical-ideographic|uppercase|upper-roman|upper-alpha|underline|transparent|top|thin|thick|text|text-top|text-bottom|tb-rl|table-header-group|table-footer-group|sw-resize|super|strict|static|square|solid|small-caps|separate|se-resize|scroll|s-resize|rtl|row-resize|ridge|right|repeat|repeat-y|repeat-x|relative|progress|pointer|overline|outside|outset|oblique|nowrap|not-allowed|normal|none|nw-resize|no-repeat|no-drop|newspaper|ne-resize|n-resize|move|middle|medium|ltr|lr-tb|lowercase|lower-roman|lower-alpha|loose|list-item|line|line-through|line-edge|lighter|left|keep-all|justify|italic|inter-word|inter-ideograph|inside|inset|inline|inline-block|inherit|inactive|ideograph-space|ideograph-parenthesis|ideograph-numeric|ideograph-alpha|horizontal|hidden|help|hand|groove|fixed|ellipsis|e-resize|double|dotted|distribute|distribute-space|distribute-letter|distribute-all-lines|disc|disabled|default|decimal|dashed|crosshair|collapse|col-resize|circle|char|center|capitalize|break-word|break-all|bottom|both|bolder|bold|block|bidi-override|below|baseline|auto|always|all-scroll|absolute|table|table-cell)\\b"
                    }, {
                        begin: /:/,
                        end: /[;}{]/,
                        relevance: 0,
                        contains: [t.BLOCK_COMMENT, r, t.HEXCOLOR, t.CSS_NUMBER_MODE, e.QUOTE_STRING_MODE, e.APOS_STRING_MODE, t.IMPORTANT, t.FUNCTION_DISPATCH]
                    }, {
                        begin: "@(page|font-face)",
                        keywords: {
                            $pattern: n,
                            keyword: "@page @font-face"
                        }
                    }, {
                        begin: "@",
                        end: "[{;]",
                        returnBegin: !0,
                        keywords: {
                            $pattern: /[a-z-]+/,
                            keyword: "and or not only",
                            attribute: L.join(" ")
                        },
                        contains: [{
                            begin: n,
                            className: "keyword"
                        }, {
                            begin: /[a-z-]+(?=:)/,
                            className: "attribute"
                        }, r, e.QUOTE_STRING_MODE, e.APOS_STRING_MODE, t.HEXCOLOR, t.CSS_NUMBER_MODE]
                    }, t.FUNCTION_DISPATCH]
                }
            }), ew.registerLanguage("shell", function(e) {
                return {
                    name: "Shell Session",
                    aliases: ["console", "shellsession"],
                    contains: [{
                        className: "meta.prompt",
                        begin: /^\s{0,3}[/~\w\d[\]()@-]*[>%$#][ ]?/,
                        starts: {
                            end: /[^\\](?=\s*$)/,
                            subLanguage: "bash"
                        }
                    }]
                }
            }), ew.registerLanguage("sql", function(e) {
                let t = e.regex,
                    n = e.COMMENT("--", "$"),
                    r = ["true", "false", "unknown"],
                    i = ["bigint", "binary", "blob", "boolean", "char", "character", "clob", "date", "dec", "decfloat", "decimal", "float", "int", "integer", "interval", "nchar", "nclob", "national", "numeric", "real", "row", "smallint", "time", "timestamp", "varchar", "varying", "varbinary"],
                    o = ["abs", "acos", "array_agg", "asin", "atan", "avg", "cast", "ceil", "ceiling", "coalesce", "corr", "cos", "cosh", "count", "covar_pop", "covar_samp", "cume_dist", "dense_rank", "deref", "element", "exp", "extract", "first_value", "floor", "json_array", "json_arrayagg", "json_exists", "json_object", "json_objectagg", "json_query", "json_table", "json_table_primitive", "json_value", "lag", "last_value", "lead", "listagg", "ln", "log", "log10", "lower", "max", "min", "mod", "nth_value", "ntile", "nullif", "percent_rank", "percentile_cont", "percentile_disc", "position", "position_regex", "power", "rank", "regr_avgx", "regr_avgy", "regr_count", "regr_intercept", "regr_r2", "regr_slope", "regr_sxx", "regr_sxy", "regr_syy", "row_number", "sin", "sinh", "sqrt", "stddev_pop", "stddev_samp", "substring", "substring_regex", "sum", "tan", "tanh", "translate", "translate_regex", "treat", "trim", "trim_array", "unnest", "upper", "value_of", "var_pop", "var_samp", "width_bucket", ],
                    a = ["create table", "insert into", "primary key", "foreign key", "not null", "alter table", "add constraint", "grouping sets", "on overflow", "character set", "respect nulls", "ignore nulls", "nulls first", "nulls last", "depth first", "breadth first"],
                    l = ["abs", "acos", "all", "allocate", "alter", "and", "any", "are", "array", "array_agg", "array_max_cardinality", "as", "asensitive", "asin", "asymmetric", "at", "atan", "atomic", "authorization", "avg", "begin", "begin_frame", "begin_partition", "between", "bigint", "binary", "blob", "boolean", "both", "by", "call", "called", "cardinality", "cascaded", "case", "cast", "ceil", "ceiling", "char", "char_length", "character", "character_length", "check", "classifier", "clob", "close", "coalesce", "collate", "collect", "column", "commit", "condition", "connect", "constraint", "contains", "convert", "copy", "corr", "corresponding", "cos", "cosh", "count", "covar_pop", "covar_samp", "create", "cross", "cube", "cume_dist", "current", "current_catalog", "current_date", "current_default_transform_group", "current_path", "current_role", "current_row", "current_schema", "current_time", "current_timestamp", "current_path", "current_role", "current_transform_group_for_type", "current_user", "cursor", "cycle", "date", "day", "deallocate", "dec", "decimal", "decfloat", "declare", "default", "define", "delete", "dense_rank", "deref", "describe", "deterministic", "disconnect", "distinct", "double", "drop", "dynamic", "each", "element", "else", "empty", "end", "end_frame", "end_partition", "end-exec", "equals", "escape", "every", "except", "exec", "execute", "exists", "exp", "external", "extract", "false", "fetch", "filter", "first_value", "float", "floor", "for", "foreign", "frame_row", "free", "from", "full", "function", "fusion", "get", "global", "grant", "group", "grouping", "groups", "having", "hold", "hour", "identity", "in", "indicator", "initial", "inner", "inout", "insensitive", "insert", "int", "integer", "intersect", "intersection", "interval", "into", "is", "join", "json_array", "json_arrayagg", "json_exists", "json_object", "json_objectagg", "json_query", "json_table", "json_table_primitive", "json_value", "lag", "language", "large", "last_value", "lateral", "lead", "leading", "left", "like", "like_regex", "listagg", "ln", "local", "localtime", "localtimestamp", "log", "log10", "lower", "match", "match_number", "match_recognize", "matches", "max", "member", "merge", "method", "min", "minute", "mod", "modifies", "module", "month", "multiset", "national", "natural", "nchar", "nclob", "new", "no", "none", "normalize", "not", "nth_value", "ntile", "null", "nullif", "numeric", "octet_length", "occurrences_regex", "of", "offset", "old", "omit", "on", "one", "only", "open", "or", "order", "out", "outer", "over", "overlaps", "overlay", "parameter", "partition", "pattern", "per", "percent", "percent_rank", "percentile_cont", "percentile_disc", "period", "portion", "position", "position_regex", "power", "precedes", "precision", "prepare", "primary", "procedure", "ptf", "range", "rank", "reads", "real", "recursive", "ref", "references", "referencing", "regr_avgx", "regr_avgy", "regr_count", "regr_intercept", "regr_r2", "regr_slope", "regr_sxx", "regr_sxy", "regr_syy", "release", "result", "return", "returns", "revoke", "right", "rollback", "rollup", "row", "row_number", "rows", "running", "savepoint", "scope", "scroll", "search", "second", "seek", "select", "sensitive", "session_user", "set", "show", "similar", "sin", "sinh", "skip", "smallint", "some", "specific", "specifictype", "sql", "sqlexception", "sqlstate", "sqlwarning", "sqrt", "start", "static", "stddev_pop", "stddev_samp", "submultiset", "subset", "substring", "substring_regex", "succeeds", "sum", "symmetric", "system", "system_time", "system_user", "table", "tablesample", "tan", "tanh", "then", "time", "timestamp", "timezone_hour", "timezone_minute", "to", "trailing", "translate", "translate_regex", "translation", "treat", "trigger", "trim", "trim_array", "true", "truncate", "uescape", "union", "unique", "unknown", "unnest", "update", "upper", "user", "using", "value", "values", "value_of", "var_pop", "var_samp", "varbinary", "varchar", "varying", "versioning", "when", "whenever", "where", "width_bucket", "window", "with", "within", "without", "year", "add", "asc", "collation", "desc", "final", "first", "last", "view"].filter(e => !o.includes(e)),
                    s = {
                        begin: t.concat(/\b/, t.either(...o), /\s*\(/),
                        relevance: 0,
                        keywords: {
                            built_in: o
                        }
                    };
                return {
                    name: "SQL",
                    case_insensitive: !0,
                    illegal: /[{}]|<\//,
                    keywords: {
                        $pattern: /\b[\w\.]+/,
                        keyword: function(e, {
                            exceptions: t,
                            when: n
                        } = {}) {
                            return t = t || [], e.map(e => e.match(/\|\d+$/) || t.includes(e) ? e : n(e) ? `${e}|0` : e)
                        }(l, {
                            when: e => e.length < 3
                        }),
                        literal: r,
                        type: i,
                        built_in: ["current_catalog", "current_date", "current_default_transform_group", "current_path", "current_role", "current_schema", "current_transform_group_for_type", "current_user", "session_user", "system_time", "system_user", "current_time", "localtime", "current_timestamp", "localtimestamp"]
                    },
                    contains: [{
                        begin: t.either(...a),
                        relevance: 0,
                        keywords: {
                            $pattern: /[\w\.]+/,
                            keyword: l.concat(a),
                            literal: r,
                            type: i
                        }
                    }, {
                        className: "type",
                        begin: t.either(...["double precision", "large object", "with timezone", "without timezone"])
                    }, s, {
                        className: "variable",
                        begin: /@[a-z0-9]+/
                    }, {
                        className: "string",
                        variants: [{
                            begin: /'/,
                            end: /'/,
                            contains: [{
                                begin: /''/
                            }]
                        }]
                    }, {
                        begin: /"/,
                        end: /"/,
                        contains: [{
                            begin: /""/
                        }]
                    }, e.C_NUMBER_MODE, e.C_BLOCK_COMMENT_MODE, n, {
                        className: "operator",
                        begin: /[-+*/=%^~]|&&?|\|\|?|!=?|<(?:=>?|<|>)?|>[>=]?/,
                        relevance: 0
                    }]
                }
            }), ew.registerLanguage("swift", function(e) {
                let t = {
                        match: /\s+/,
                        relevance: 0
                    },
                    n = e.COMMENT("/\\*", "\\*/", {
                        contains: ["self"]
                    }),
                    r = [e.C_LINE_COMMENT_MODE, n],
                    i = {
                        match: [/\./, $(...H, ...q)],
                        className: {
                            2: "keyword"
                        }
                    },
                    o = {
                        match: j(/\./, $(...V)),
                        relevance: 0
                    },
                    a = V.filter(e => "string" == typeof e).concat(["_|0"]),
                    l = V.filter(e => "string" != typeof e).concat(K).map(U),
                    s = {
                        variants: [{
                            className: "keyword",
                            match: $(...l, ...q)
                        }]
                    },
                    c = {
                        $pattern: $(/\b\w+/, /#\w+/),
                        keyword: a.concat(G),
                        literal: Z
                    },
                    u = [i, o, s],
                    d = {
                        match: j(/\./, $(...X)),
                        relevance: 0
                    },
                    f = {
                        className: "built_in",
                        match: j(/\b/, $(...X), /(?=\()/)
                    },
                    p = [d, f],
                    g = {
                        match: /->/,
                        relevance: 0
                    },
                    m = {
                        className: "operator",
                        relevance: 0,
                        variants: [{
                            match: J
                        }, {
                            match: `\\.(\\.|${Y})+`
                        }]
                    },
                    h = [g, m],
                    b = "([0-9]_*)+",
                    y = "([0-9a-fA-F]_*)+",
                    v = {
                        className: "number",
                        relevance: 0,
                        variants: [{
                            match: `\\b(${b})(\\.(${b}))?([eE][+-]?(${b}))?\\b`
                        }, {
                            match: `\\b0x(${y})(\\.(${y}))?([pP][+-]?(${b}))?\\b`
                        }, {
                            match: /\b0o([0-7]_*)+\b/
                        }, {
                            match: /\b0b([01]_*)+\b/
                        }]
                    },
                    k = (e = "") => ({
                        className: "subst",
                        variants: [{
                            match: j(/\\/, e, /[0\\tnr"']/)
                        }, {
                            match: j(/\\/, e, /u\{[0-9a-fA-F]{1,8}\}/)
                        }]
                    }),
                    x = (e = "") => ({
                        className: "subst",
                        match: j(/\\/, e, /[\t ]*(?:[\r\n]|\r\n)/)
                    }),
                    _ = (e = "") => ({
                        className: "subst",
                        label: "interpol",
                        begin: j(/\\/, e, /\(/),
                        end: /\)/
                    }),
                    w = (e = "") => ({
                        begin: j(e, /"""/),
                        end: j(/"""/, e),
                        contains: [k(e), x(e), _(e)]
                    }),
                    E = (e = "") => ({
                        begin: j(e, /"/),
                        end: j(/"/, e),
                        contains: [k(e), _(e)]
                    }),
                    S = {
                        className: "string",
                        variants: [w(), w("#"), w("##"), w("###"), E(), E("#"), E("##"), E("###")]
                    },
                    N = {
                        match: j(/`/, en, /`/)
                    },
                    C = {
                        className: "variable",
                        match: `\\$${et}+`
                    },
                    O = [N, {
                        className: "variable",
                        match: /\$\d+/
                    }, C],
                    A = {
                        className: "keyword",
                        match: j(/@/, $(...ei))
                    },
                    T = {
                        className: "meta",
                        match: j(/@/, en)
                    },
                    M = [{
                        match: /(@|#(un)?)available/,
                        className: "keyword",
                        starts: {
                            contains: [{
                                begin: /\(/,
                                end: /\)/,
                                keywords: eo,
                                contains: [...h, v, S]
                            }]
                        }
                    }, A, T],
                    I = {
                        match: z(/\b[A-Z]/),
                        relevance: 0,
                        contains: [{
                            className: "type",
                            match: j(/(AV|CA|CF|CG|CI|CL|CM|CN|CT|MK|MP|MTK|MTL|NS|SCN|SK|UI|WK|XC)/, et, "+")
                        }, {
                            className: "type",
                            match: er,
                            relevance: 0
                        }, {
                            match: /[?!]+/,
                            relevance: 0
                        }, {
                            match: /\.\.\./,
                            relevance: 0
                        }, {
                            match: j(/\s+&\s+/, z(er)),
                            relevance: 0
                        }]
                    };
                I.contains.push({
                    begin: /</,
                    end: />/,
                    keywords: c,
                    contains: [...r, ...u, ...M, g, I]
                });
                let D = {
                        match: j(en, /\s*:/),
                        keywords: "_|0",
                        relevance: 0
                    },
                    L = {
                        begin: /\(/,
                        end: /\)/,
                        relevance: 0,
                        keywords: c,
                        contains: ["self", D, ...r, ...u, ...p, ...h, v, S, ...O, ...M, I]
                    },
                    R = {
                        begin: /</,
                        end: />/,
                        contains: [...r, I]
                    },
                    F = {
                        begin: $(z(j(en, /\s*:/)), z(j(en, /\s+/, en, /\s*:/))),
                        end: /:/,
                        relevance: 0,
                        contains: [{
                            className: "keyword",
                            match: /\b_\b/
                        }, {
                            className: "params",
                            match: en
                        }]
                    },
                    P = {
                        begin: /\(/,
                        end: /\)/,
                        keywords: c,
                        contains: [F, ...r, ...u, ...h, v, S, ...M, I, L],
                        endsParent: !0,
                        illegal: /["']/
                    },
                    B = {
                        match: [/func/, /\s+/, $(N.match, en, J)],
                        className: {
                            1: "keyword",
                            3: "title.function"
                        },
                        contains: [R, P, t],
                        illegal: [/\[/, /%/]
                    };
                for (let Q of S.variants) {
                    let ee = Q.contains.find(e => "interpol" === e.label);
                    ee.keywords = c;
                    let ea = [...u, ...p, ...h, v, S, ...O];
                    ee.contains = [...ea, {
                        begin: /\(/,
                        end: /\)/,
                        contains: ["self", ...ea]
                    }]
                }
                return {
                    name: "Swift",
                    keywords: c,
                    contains: [...r, B, {
                        match: [/\b(?:subscript|init[?!]?)/, /\s*(?=[<(])/, ],
                        className: {
                            1: "keyword"
                        },
                        contains: [R, P, t],
                        illegal: /\[|%/
                    }, {
                        beginKeywords: "struct protocol class extension enum actor",
                        end: "\\{",
                        excludeEnd: !0,
                        keywords: c,
                        contains: [e.inherit(e.TITLE_MODE, {
                            className: "title.class",
                            begin: /[A-Za-z$_][\u00C0-\u02B80-9A-Za-z$_]*/
                        }), ...u]
                    }, {
                        match: [/operator/, /\s+/, J],
                        className: {
                            1: "keyword",
                            3: "title"
                        }
                    }, {
                        begin: [/precedencegroup/, /\s+/, er],
                        className: {
                            1: "keyword",
                            3: "title"
                        },
                        contains: [I],
                        keywords: [...W, ...Z],
                        end: /}/
                    }, {
                        beginKeywords: "import",
                        end: /$/,
                        contains: [...r],
                        relevance: 0
                    }, ...u, ...p, ...h, v, S, ...O, ...M, I, L]
                }
            }), ew.registerLanguage("typescript", function(e) {
                let t = function(e) {
                        var t;
                        let n = e.regex,
                            r = (e, {
                                after: t
                            }) => {
                                let n = "</" + e[0].slice(1),
                                    r = e.input.indexOf(n, t);
                                return -1 !== r
                            },
                            i = {
                                begin: "<>",
                                end: "</>"
                            },
                            o = {
                                begin: /<[A-Za-z0-9\\._:-]+/,
                                end: /\/[A-Za-z0-9\\._:-]+>|\/>/,
                                isTrulyOpeningTag(e, t) {
                                    let n = e[0].length + e.index,
                                        i = e.input[n];
                                    if ("<" === i || "," === i) {
                                        t.ignoreMatch();
                                        return
                                    }
                                    ">" !== i || r(e, {
                                        after: n
                                    }) || t.ignoreMatch();
                                    let o, a = e.input.substring(n);
                                    if ((o = a.match(/^\s*=/)) || (o = a.match(/^\s+extends\s+/)) && 0 === o.index) {
                                        t.ignoreMatch();
                                        return
                                    }
                                }
                            },
                            a = {
                                $pattern: ea,
                                keyword: el,
                                literal: es,
                                built_in: ep,
                                "variable.language": ef
                            },
                            l = "[0-9](_?[0-9])*",
                            s = `\\.(${l})`,
                            c = "0|[1-9](_?[0-9])*|0[0-7]*[89][0-9]*",
                            u = {
                                className: "number",
                                variants: [{
                                    begin: `(\\b(${c})((${s})|\\.)?|(${s}))[eE][+-]?(${l})\\b`
                                }, {
                                    begin: `\\b(${c})\\b((${s})\\b|\\.)?|(${s})\\b`
                                }, {
                                    begin: "\\b(0|[1-9](_?[0-9])*)n\\b"
                                }, {
                                    begin: "\\b0[xX][0-9a-fA-F](_?[0-9a-fA-F])*n?\\b"
                                }, {
                                    begin: "\\b0[bB][0-1](_?[0-1])*n?\\b"
                                }, {
                                    begin: "\\b0[oO][0-7](_?[0-7])*n?\\b"
                                }, {
                                    begin: "\\b0[0-7]+n?\\b"
                                }, ],
                                relevance: 0
                            },
                            d = {
                                className: "subst",
                                begin: "\\$\\{",
                                end: "\\}",
                                keywords: a,
                                contains: []
                            },
                            f = {
                                begin: "html`",
                                end: "",
                                starts: {
                                    end: "`",
                                    returnEnd: !1,
                                    contains: [e.BACKSLASH_ESCAPE, d],
                                    subLanguage: "xml"
                                }
                            },
                            p = {
                                begin: "css`",
                                end: "",
                                starts: {
                                    end: "`",
                                    returnEnd: !1,
                                    contains: [e.BACKSLASH_ESCAPE, d],
                                    subLanguage: "css"
                                }
                            },
                            g = {
                                className: "string",
                                begin: "`",
                                end: "`",
                                contains: [e.BACKSLASH_ESCAPE, d]
                            },
                            m = e.COMMENT(/\/\*\*(?!\/)/, "\\*/", {
                                relevance: 0,
                                contains: [{
                                    begin: "(?=@[A-Za-z]+)",
                                    relevance: 0,
                                    contains: [{
                                        className: "doctag",
                                        begin: "@[A-Za-z]+"
                                    }, {
                                        className: "type",
                                        begin: "\\{",
                                        end: "\\}",
                                        excludeEnd: !0,
                                        excludeBegin: !0,
                                        relevance: 0
                                    }, {
                                        className: "variable",
                                        begin: ea + "(?=\\s*(-)|$)",
                                        endsParent: !0,
                                        relevance: 0
                                    }, {
                                        begin: /(?=[^\n])\s/,
                                        relevance: 0
                                    }]
                                }]
                            }),
                            h = {
                                className: "comment",
                                variants: [m, e.C_BLOCK_COMMENT_MODE, e.C_LINE_COMMENT_MODE]
                            },
                            b = [e.APOS_STRING_MODE, e.QUOTE_STRING_MODE, f, p, g, {
                                match: /\$\d+/
                            }, u];
                        d.contains = b.concat({
                            begin: /\{/,
                            end: /\}/,
                            keywords: a,
                            contains: ["self"].concat(b)
                        });
                        let y = [].concat(h, d.contains),
                            v = y.concat([{
                                begin: /\(/,
                                end: /\)/,
                                keywords: a,
                                contains: ["self"].concat(y)
                            }]),
                            k = {
                                className: "params",
                                begin: /\(/,
                                end: /\)/,
                                excludeBegin: !0,
                                excludeEnd: !0,
                                keywords: a,
                                contains: v
                            },
                            x = {
                                variants: [{
                                    match: [/class/, /\s+/, ea, /\s+/, /extends/, /\s+/, n.concat(ea, "(", n.concat(/\./, ea), ")*")],
                                    scope: {
                                        1: "keyword",
                                        3: "title.class",
                                        5: "keyword",
                                        7: "title.class.inherited"
                                    }
                                }, {
                                    match: [/class/, /\s+/, ea],
                                    scope: {
                                        1: "keyword",
                                        3: "title.class"
                                    }
                                }, ]
                            },
                            _ = {
                                relevance: 0,
                                match: n.either(/\bJSON/, /\b[A-Z][a-z]+([A-Z][a-z]*|\d)*/, /\b[A-Z]{2,}([A-Z][a-z]+|\d)+([A-Z][a-z]*)*/, /\b[A-Z]{2,}[a-z]+([A-Z][a-z]+|\d)*([A-Z][a-z]*)*/),
                                className: "title.class",
                                keywords: {
                                    _: [...ec, ...eu]
                                }
                            },
                            w = {
                                match: n.concat(/\b/, (t = [...ed, "super", "import"], n.concat("(?!", t.join("|"), ")")), ea, n.lookahead(/\(/)),
                                className: "title.function",
                                relevance: 0
                            },
                            E = {
                                begin: n.concat(/\./, n.lookahead(n.concat(ea, /(?![0-9A-Za-z$_(])/))),
                                end: ea,
                                excludeBegin: !0,
                                keywords: "prototype",
                                className: "property",
                                relevance: 0
                            },
                            S = "(\\([^()]*(\\([^()]*(\\([^()]*\\)[^()]*)*\\)[^()]*)*\\)|" + e.UNDERSCORE_IDENT_RE + ")\\s*=>",
                            N = {
                                match: [/const|var|let/, /\s+/, ea, /\s*/, /=\s*/, /(async\s*)?/, n.lookahead(S)],
                                keywords: "async",
                                className: {
                                    1: "keyword",
                                    3: "title.function"
                                },
                                contains: [k]
                            };
                        return {
                            name: "Javascript",
                            aliases: ["js", "jsx", "mjs", "cjs"],
                            keywords: a,
                            exports: {
                                PARAMS_CONTAINS: v,
                                CLASS_REFERENCE: _
                            },
                            illegal: /#(?![$_A-z])/,
                            contains: [e.SHEBANG({
                                label: "shebang",
                                binary: "node",
                                relevance: 5
                            }), {
                                label: "use_strict",
                                className: "meta",
                                relevance: 10,
                                begin: /^\s*['"]use (strict|asm)['"]/
                            }, e.APOS_STRING_MODE, e.QUOTE_STRING_MODE, f, p, g, h, {
                                match: /\$\d+/
                            }, u, _, {
                                className: "attr",
                                begin: ea + n.lookahead(":"),
                                relevance: 0
                            }, N, {
                                begin: "(" + e.RE_STARTERS_RE + "|\\b(case|return|throw)\\b)\\s*",
                                keywords: "return throw case",
                                relevance: 0,
                                contains: [h, e.REGEXP_MODE, {
                                    className: "function",
                                    begin: S,
                                    returnBegin: !0,
                                    end: "\\s*=>",
                                    contains: [{
                                        className: "params",
                                        variants: [{
                                            begin: e.UNDERSCORE_IDENT_RE,
                                            relevance: 0
                                        }, {
                                            className: null,
                                            begin: /\(\s*\)/,
                                            skip: !0
                                        }, {
                                            begin: /\(/,
                                            end: /\)/,
                                            excludeBegin: !0,
                                            excludeEnd: !0,
                                            keywords: a,
                                            contains: v
                                        }]
                                    }]
                                }, {
                                    begin: /,/,
                                    relevance: 0
                                }, {
                                    match: /\s+/,
                                    relevance: 0
                                }, {
                                    variants: [{
                                        begin: i.begin,
                                        end: i.end
                                    }, {
                                        match: /<[A-Za-z0-9\\._:-]+\s*\/>/
                                    }, {
                                        begin: o.begin,
                                        "on:begin": o.isTrulyOpeningTag,
                                        end: o.end
                                    }],
                                    subLanguage: "xml",
                                    contains: [{
                                        begin: o.begin,
                                        end: o.end,
                                        skip: !0,
                                        contains: ["self"]
                                    }]
                                }]
                            }, {
                                variants: [{
                                    match: [/function/, /\s+/, ea, /(?=\s*\()/]
                                }, {
                                    match: [/function/, /\s*(?=\()/]
                                }],
                                className: {
                                    1: "keyword",
                                    3: "title.function"
                                },
                                label: "func.def",
                                contains: [k],
                                illegal: /%/
                            }, {
                                beginKeywords: "while if switch catch for"
                            }, {
                                begin: "\\b(?!function)" + e.UNDERSCORE_IDENT_RE + "\\([^()]*(\\([^()]*(\\([^()]*\\)[^()]*)*\\)[^()]*)*\\)\\s*\\{",
                                returnBegin: !0,
                                label: "func.def",
                                contains: [k, e.inherit(e.TITLE_MODE, {
                                    begin: ea,
                                    className: "title.function"
                                })]
                            }, {
                                match: /\.\.\./,
                                relevance: 0
                            }, E, {
                                match: "\\$" + ea,
                                relevance: 0
                            }, {
                                match: [/\bconstructor(?=\s*\()/],
                                className: {
                                    1: "title.function"
                                },
                                contains: [k]
                            }, w, {
                                relevance: 0,
                                match: /\b[A-Z][A-Z_0-9]+\b/,
                                className: "variable.constant"
                            }, x, {
                                match: [/get|set/, /\s+/, ea, /(?=\()/],
                                className: {
                                    1: "keyword",
                                    3: "title.function"
                                },
                                contains: [{
                                    begin: /\(\)/
                                }, k]
                            }, {
                                match: /\$[(.]/
                            }]
                        }
                    }(e),
                    n = ["any", "void", "number", "boolean", "string", "object", "never", "symbol", "bigint", "unknown"],
                    r = {
                        beginKeywords: "namespace",
                        end: /\{/,
                        excludeEnd: !0,
                        contains: [t.exports.CLASS_REFERENCE]
                    },
                    i = {
                        beginKeywords: "interface",
                        end: /\{/,
                        excludeEnd: !0,
                        keywords: {
                            keyword: "interface extends",
                            built_in: n
                        },
                        contains: [t.exports.CLASS_REFERENCE]
                    },
                    o = {
                        $pattern: ea,
                        keyword: el.concat(["type", "namespace", "interface", "public", "private", "protected", "implements", "declare", "abstract", "readonly", "enum", "override"]),
                        literal: es,
                        built_in: ep.concat(n),
                        "variable.language": ef
                    },
                    a = {
                        className: "meta",
                        begin: "@" + ea
                    },
                    l = (e, t, n) => {
                        let r = e.contains.findIndex(e => e.label === t);
                        if (-1 === r) throw Error("can not find mode to replace");
                        e.contains.splice(r, 1, n)
                    };
                Object.assign(t.keywords, o), t.exports.PARAMS_CONTAINS.push(a), t.contains = t.contains.concat([a, r, i, ]), l(t, "shebang", e.SHEBANG()), l(t, "use_strict", {
                    className: "meta",
                    relevance: 10,
                    begin: /^\s*['"]use strict['"]/
                });
                let s = t.contains.find(e => "func.def" === e.label);
                return s.relevance = 0, Object.assign(t, {
                    name: "TypeScript",
                    aliases: ["ts", "tsx"]
                }), t
            }), ew.registerLanguage("vbnet", function(e) {
                let t = e.regex,
                    n = /\d{1,2}\/\d{1,2}\/\d{4}/,
                    r = /\d{4}-\d{1,2}-\d{1,2}/,
                    i = /(\d|1[012])(:\d+){0,2} *(AM|PM)/,
                    o = /\d{1,2}(:\d{1,2}){1,2}/,
                    a = {
                        className: "literal",
                        variants: [{
                            begin: t.concat(/# */, t.either(r, n), / *#/)
                        }, {
                            begin: t.concat(/# */, o, / *#/)
                        }, {
                            begin: t.concat(/# */, i, / *#/)
                        }, {
                            begin: t.concat(/# */, t.either(r, n), / +/, t.either(i, o), / *#/)
                        }]
                    },
                    l = e.COMMENT(/'''/, /$/, {
                        contains: [{
                            className: "doctag",
                            begin: /<\/?/,
                            end: />/
                        }]
                    }),
                    s = e.COMMENT(null, /$/, {
                        variants: [{
                            begin: /'/
                        }, {
                            begin: /([\t ]|^)REM(?=\s)/
                        }]
                    });
                return {
                    name: "Visual Basic .NET",
                    aliases: ["vb"],
                    case_insensitive: !0,
                    classNameAliases: {
                        label: "symbol"
                    },
                    keywords: {
                        keyword: "addhandler alias aggregate ansi as async assembly auto binary by byref byval call case catch class compare const continue custom declare default delegate dim distinct do each equals else elseif end enum erase error event exit explicit finally for friend from function get global goto group handles if implements imports in inherits interface into iterator join key let lib loop me mid module mustinherit mustoverride mybase myclass namespace narrowing new next notinheritable notoverridable of off on operator option optional order overloads overridable overrides paramarray partial preserve private property protected public raiseevent readonly redim removehandler resume return select set shadows shared skip static step stop structure strict sub synclock take text then throw to try unicode until using when where while widening with withevents writeonly yield",
                        built_in: "addressof and andalso await directcast gettype getxmlnamespace is isfalse isnot istrue like mod nameof new not or orelse trycast typeof xor cbool cbyte cchar cdate cdbl cdec cint clng cobj csbyte cshort csng cstr cuint culng cushort",
                        type: "boolean byte char date decimal double integer long object sbyte short single string uinteger ulong ushort",
                        literal: "true false nothing"
                    },
                    illegal: "//|\\{|\\}|endif|gosub|variant|wend|^\\$ ",
                    contains: [{
                        className: "string",
                        begin: /"(""|[^/n])"C\b/
                    }, {
                        className: "string",
                        begin: /"/,
                        end: /"/,
                        illegal: /\n/,
                        contains: [{
                            begin: /""/
                        }]
                    }, a, {
                        className: "number",
                        relevance: 0,
                        variants: [{
                            begin: /\b\d[\d_]*((\.[\d_]+(E[+-]?[\d_]+)?)|(E[+-]?[\d_]+))[RFD@!#]?/
                        }, {
                            begin: /\b\d[\d_]*((U?[SIL])|[%&])?/
                        }, {
                            begin: /&H[\dA-F_]+((U?[SIL])|[%&])?/
                        }, {
                            begin: /&O[0-7_]+((U?[SIL])|[%&])?/
                        }, {
                            begin: /&B[01_]+((U?[SIL])|[%&])?/
                        }]
                    }, {
                        className: "label",
                        begin: /^\w+:/
                    }, l, s, {
                        className: "meta",
                        begin: /[\t ]*#(const|disable|else|elseif|enable|end|externalsource|if|region)\b/,
                        end: /$/,
                        keywords: {
                            keyword: "const disable else elseif enable end externalsource if region then"
                        },
                        contains: [s]
                    }]
                }
            }), ew.registerLanguage("wasm", function(e) {
                e.regex;
                let t = e.COMMENT(/\(;/, /;\)/);
                t.contains.push("self");
                let n = e.COMMENT(/;;/, /$/);
                return {
                    name: "WebAssembly",
                    keywords: {
                        $pattern: /[\w.]+/,
                        keyword: ["anyfunc", "block", "br", "br_if", "br_table", "call", "call_indirect", "data", "drop", "elem", "else", "end", "export", "func", "global.get", "global.set", "local.get", "local.set", "local.tee", "get_global", "get_local", "global", "if", "import", "local", "loop", "memory", "memory.grow", "memory.size", "module", "mut", "nop", "offset", "param", "result", "return", "select", "set_global", "set_local", "start", "table", "tee_local", "then", "type", "unreachable"]
                    },
                    contains: [n, t, {
                        match: [/(?:offset|align)/, /\s*/, /=/],
                        className: {
                            1: "keyword",
                            3: "operator"
                        }
                    }, {
                        className: "variable",
                        begin: /\$[\w_]+/
                    }, {
                        match: /(\((?!;)|\))+/,
                        className: "punctuation",
                        relevance: 0
                    }, {
                        begin: [/(?:func|call|call_indirect)/, /\s+/, /\$[^\s)]+/],
                        className: {
                            1: "keyword",
                            3: "title.function"
                        }
                    }, e.QUOTE_STRING_MODE, {
                        match: /(i32|i64|f32|f64)(?!\.)/,
                        className: "type"
                    }, {
                        className: "keyword",
                        match: /\b(f32|f64|i32|i64)(?:\.(?:abs|add|and|ceil|clz|const|convert_[su]\/i(?:32|64)|copysign|ctz|demote\/f64|div(?:_[su])?|eqz?|extend_[su]\/i32|floor|ge(?:_[su])?|gt(?:_[su])?|le(?:_[su])?|load(?:(?:8|16|32)_[su])?|lt(?:_[su])?|max|min|mul|nearest|neg?|or|popcnt|promote\/f32|reinterpret\/[fi](?:32|64)|rem_[su]|rot[lr]|shl|shr_[su]|store(?:8|16|32)?|sqrt|sub|trunc(?:_[su]\/f(?:32|64))?|wrap\/i64|xor))\b/
                    }, {
                        className: "number",
                        relevance: 0,
                        match: /[+-]?\b(?:\d(?:_?\d)*(?:\.\d(?:_?\d)*)?(?:[eE][+-]?\d(?:_?\d)*)?|0x[\da-fA-F](?:_?[\da-fA-F])*(?:\.[\da-fA-F](?:_?[\da-fA-D])*)?(?:[pP][+-]?\d(?:_?\d)*)?)\b|\binf\b|\bnan(?::0x[\da-fA-F](?:_?[\da-fA-D])*)?\b/
                    }]
                }
            }), ew.registerLanguage("xml", function(e) {
                let t = e.regex,
                    n = t.concat(/[\p{L}_]/u, t.optional(/[\p{L}0-9_.-]*:/u), /[\p{L}0-9_.-]*/u),
                    r = {
                        className: "symbol",
                        begin: /&[a-z]+;|&#[0-9]+;|&#x[a-f0-9]+;/
                    },
                    i = {
                        begin: /\s/,
                        contains: [{
                            className: "keyword",
                            begin: /#?[a-z_][a-z1-9_-]+/,
                            illegal: /\n/
                        }]
                    },
                    o = e.inherit(i, {
                        begin: /\(/,
                        end: /\)/
                    }),
                    a = e.inherit(e.APOS_STRING_MODE, {
                        className: "string"
                    }),
                    l = e.inherit(e.QUOTE_STRING_MODE, {
                        className: "string"
                    }),
                    s = {
                        endsWithParent: !0,
                        illegal: /</,
                        relevance: 0,
                        contains: [{
                            className: "attr",
                            begin: /[\p{L}0-9._:-]+/u,
                            relevance: 0
                        }, {
                            begin: /=\s*/,
                            relevance: 0,
                            contains: [{
                                className: "string",
                                endsParent: !0,
                                variants: [{
                                    begin: /"/,
                                    end: /"/,
                                    contains: [r]
                                }, {
                                    begin: /'/,
                                    end: /'/,
                                    contains: [r]
                                }, {
                                    begin: /[^\s"'=<>`]+/
                                }]
                            }]
                        }]
                    };
                return {
                    name: "HTML, XML",
                    aliases: ["html", "xhtml", "rss", "atom", "xjb", "xsd", "xsl", "plist", "wsf", "svg"],
                    case_insensitive: !0,
                    unicodeRegex: !0,
                    contains: [{
                        className: "meta",
                        begin: /<![a-z]/,
                        end: />/,
                        relevance: 10,
                        contains: [i, l, a, o, {
                            begin: /\[/,
                            end: /\]/,
                            contains: [{
                                className: "meta",
                                begin: /<![a-z]/,
                                end: />/,
                                contains: [i, o, l, a]
                            }]
                        }]
                    }, e.COMMENT(/<!--/, /-->/, {
                        relevance: 10
                    }), {
                        begin: /<!\[CDATA\[/,
                        end: /\]\]>/,
                        relevance: 10
                    }, r, {
                        className: "meta",
                        end: /\?>/,
                        variants: [{
                            begin: /<\?xml/,
                            relevance: 10,
                            contains: [l]
                        }, {
                            begin: /<\?[a-z][a-z0-9]+/
                        }]
                    }, {
                        className: "tag",
                        begin: /<style(?=\s|>)/,
                        end: />/,
                        keywords: {
                            name: "style"
                        },
                        contains: [s],
                        starts: {
                            end: /<\/style>/,
                            returnEnd: !0,
                            subLanguage: ["css", "xml"]
                        }
                    }, {
                        className: "tag",
                        begin: /<script(?=\s|>)/,
                        end: />/,
                        keywords: {
                            name: "script"
                        },
                        contains: [s],
                        starts: {
                            end: /<\/script>/,
                            returnEnd: !0,
                            subLanguage: ["javascript", "handlebars", "xml"]
                        }
                    }, {
                        className: "tag",
                        begin: /<>|<\/>/
                    }, {
                        className: "tag",
                        begin: t.concat(/</, t.lookahead(t.concat(n, t.either(/\/>/, />/, /\s/)))),
                        end: /\/?>/,
                        contains: [{
                            className: "name",
                            begin: n,
                            relevance: 0,
                            starts: s
                        }]
                    }, {
                        className: "tag",
                        begin: t.concat(/<\//, t.lookahead(t.concat(n, />/))),
                        contains: [{
                            className: "name",
                            begin: n,
                            relevance: 0
                        }, {
                            begin: />/,
                            relevance: 0,
                            endsParent: !0
                        }]
                    }]
                }
            }), ew.registerLanguage("yaml", function(e) {
                let t = "true false yes no null",
                    n = "[\\w#;/?:@&=+$,.~*'()[\\]]+",
                    r = {
                        className: "string",
                        relevance: 0,
                        variants: [{
                            begin: /'/,
                            end: /'/
                        }, {
                            begin: /"/,
                            end: /"/
                        }, {
                            begin: /\S+/
                        }],
                        contains: [e.BACKSLASH_ESCAPE, {
                            className: "template-variable",
                            variants: [{
                                begin: /\{\{/,
                                end: /\}\}/
                            }, {
                                begin: /%\{/,
                                end: /\}/
                            }]
                        }]
                    },
                    i = e.inherit(r, {
                        variants: [{
                            begin: /'/,
                            end: /'/
                        }, {
                            begin: /"/,
                            end: /"/
                        }, {
                            begin: /[^\s,{}[\]]+/
                        }]
                    }),
                    o = {
                        end: ",",
                        endsWithParent: !0,
                        excludeEnd: !0,
                        keywords: t,
                        relevance: 0
                    },
                    a = [{
                        className: "attr",
                        variants: [{
                            begin: "\\w[\\w :\\/.-]*:(?=[ 	]|$)"
                        }, {
                            begin: '"\\w[\\w :\\/.-]*":(?=[ 	]|$)'
                        }, {
                            begin: "'\\w[\\w :\\/.-]*':(?=[ 	]|$)"
                        }]
                    }, {
                        className: "meta",
                        begin: "^---\\s*$",
                        relevance: 10
                    }, {
                        className: "string",
                        begin: "[\\|>]([1-9]?[+-])?[ ]*\\n( +)[^ ][^\\n]*\\n(\\2[^\\n]+\\n?)*"
                    }, {
                        begin: "<%[%=-]?",
                        end: "[%-]?%>",
                        subLanguage: "ruby",
                        excludeBegin: !0,
                        excludeEnd: !0,
                        relevance: 0
                    }, {
                        className: "type",
                        begin: "!\\w+!" + n
                    }, {
                        className: "type",
                        begin: "!<" + n + ">"
                    }, {
                        className: "type",
                        begin: "!" + n
                    }, {
                        className: "type",
                        begin: "!!" + n
                    }, {
                        className: "meta",
                        begin: "&" + e.UNDERSCORE_IDENT_RE + "$"
                    }, {
                        className: "meta",
                        begin: "\\*" + e.UNDERSCORE_IDENT_RE + "$"
                    }, {
                        className: "bullet",
                        begin: "-(?=[ ]|$)",
                        relevance: 0
                    }, e.HASH_COMMENT_MODE, {
                        beginKeywords: t,
                        keywords: {
                            literal: t
                        }
                    }, {
                        className: "number",
                        begin: "\\b[0-9]{4}(-[0-9][0-9]){0,2}([Tt \\t][0-9][0-9]?(:[0-9][0-9]){2})?(\\.[0-9]*)?([ \\t])*(Z|[-+][0-9][0-9]?(:[0-9][0-9])?)?\\b"
                    }, {
                        className: "number",
                        begin: e.C_NUMBER_RE + "\\b",
                        relevance: 0
                    }, {
                        begin: /\{/,
                        end: /\}/,
                        contains: [o],
                        illegal: "\\n",
                        relevance: 0
                    }, {
                        begin: "\\[",
                        end: "\\]",
                        contains: [o],
                        illegal: "\\n",
                        relevance: 0
                    }, r],
                    l = [...a];
                return l.pop(), l.push(i), o.contains = l, {
                    name: "YAML",
                    case_insensitive: !0,
                    aliases: ["yml"],
                    contains: a
                }
            });
            var eE = n(1849),
                eS = n(36943),
                eN = function(e, t, n) {
                    var r = (0, eS.O)(n);
                    if (!e || !e.type || !e.children) throw Error("Expected parent node");
                    if ("number" == typeof t) {
                        if (t < 0 || t === Number.POSITIVE_INFINITY) throw Error("Expected positive finite number as index")
                    } else if ((t = e.children.indexOf(t)) < 0) throw Error("Expected child node or index");
                    for (; ++t < e.children.length;)
                        if (r(e.children[t], t, e)) return e.children[t];
                    return null
                };
            let eC = /\n/g,
                eO = /[\t ]+/g,
                eA = (0, eE.Y)("br"),
                eT = (0, eE.Y)("p"),
                eM = (0, eE.Y)(["th", "td"]),
                eI = (0, eE.Y)("tr"),
                eD = (0, eE.Y)(["datalist", "head", "noembed", "noframes", "noscript", "rp", "script", "style", "template", "title", function(e) {
                    return Boolean((e.properties || {}).hidden)
                }, function(e) {
                    return "dialog" === e.tagName && !(e.properties || {}).open
                }]),
                eL = (0, eE.Y)(["address", "article", "aside", "blockquote", "body", "caption", "center", "dd", "dialog", "dir", "dl", "dt", "div", "figure", "figcaption", "footer", "form,", "h1", "h2", "h3", "h4", "h5", "h6", "header", "hgroup", "hr", "html", "legend", "listing", "main", "menu", "nav", "ol", "p", "plaintext", "pre", "section", "ul", "xmp"]);

            function eR(e, t = {}) {
                let n = e.children || [],
                    r = eL(e),
                    i = ez(e, {
                        whitespace: t.whitespace || "normal",
                        breakBefore: !1,
                        breakAfter: !1
                    }),
                    o = -1,
                    a, l, s;
                if ("text" === e.type || "comment" === e.type) return eP(e, {
                    whitespace: i,
                    breakBefore: !0,
                    breakAfter: !0
                });
                for (a = []; ++o < n.length;) a = a.concat(eF(n[o], e, {
                    whitespace: i,
                    breakBefore: o ? null : r,
                    breakAfter: o < n.length - 1 ? eA(n[o + 1]) : r
                }));
                o = -1;
                let c = [];
                for (; ++o < a.length;) "number" == typeof(l = a[o]) ? void 0 !== s && l > s && (s = l) : l && (s && c.push("\n".repeat(s)), s = 0, c.push(l));
                return c.join("")
            }

            function eF(e, t, n) {
                var r;
                return "element" === e.type ? function(e, t, n) {
                    let r = ez(e, n),
                        i = e.children || [],
                        o = -1,
                        a = [],
                        l, s;
                    if (eD(e)) return a;
                    for (eA(e) ? s = "\n" : eI(e) && eN(t, e, eI) ? s = "\n" : eT(e) ? (l = 2, s = 2) : eL(e) && (l = 1, s = 1); ++o < i.length;) a = a.concat(eF(i[o], e, {
                        whitespace: r,
                        breakBefore: o ? void 0 : l,
                        breakAfter: o < i.length - 1 ? eA(i[o + 1]) : s
                    }));
                    return eM(e) && eN(t, e, eM) && a.push("	"), l && a.unshift(l), s && a.push(s), a
                }(e, t, n) : "text" === e.type ? ["normal" === n.whitespace ? eP(e, n) : (r = e, String(r.value))] : []
            }

            function eP(e, t) {
                let n = String(e.value),
                    r = [],
                    i = [],
                    o = 0,
                    a = -1,
                    l, s, c;
                for (; o < n.length;) eC.lastIndex = o, s = (l = eC.exec(n)) ? l.index : n.length, r.push(eB(n.slice(o, s).replace(/[\u061C\u200E\u200F\u202A-\u202E\u2066-\u2069]/g, ""), t.breakBefore, t.breakAfter)), o = s + 1;
                for (; ++a < r.length;) 8203 === r[a].charCodeAt(r[a].length - 1) || a < r.length - 1 && 8203 === r[a + 1].charCodeAt(0) ? (i.push(r[a]), c = "") : r[a] && (c && i.push(c), i.push(r[a]), c = " ");
                return i.join("")
            }

            function eB(e, t, n) {
                let r = [],
                    i = 0,
                    o, a;
                for (; i < e.length;) eO.lastIndex = i, a = (o = eO.exec(e)) ? o.index : e.length, i || a || !o || t || r.push(""), i !== a && r.push(e.slice(i, a)), i = o ? a + o[0].length : a;
                return i === a || n || r.push(""), r.join(" ")
            }

            function ez(e, t) {
                let n;
                if ("element" === e.type) switch (n = e.properties || {}, e.tagName) {
                    case "listing":
                    case "plaintext":
                    case "xmp":
                        return "pre";
                    case "nobr":
                        return "nowrap";
                    case "pre":
                        return n.wrap ? "pre-wrap" : "pre";
                    case "td":
                    case "th":
                        return n.noWrap ? "nowrap" : t.whitespace;
                    case "textarea":
                        return "pre-wrap"
                }
                return t.whitespace
            }
            var ej = n(20539);
            let e$ = {}.hasOwnProperty;

            function eU(e = {}) {
                let {
                    aliases: t,
                    languages: n,
                    prefix: r,
                    plainText: i,
                    ignoreMissing: o,
                    subset: a,
                    detect: l
                } = e, s = "hljs";
                if (t && ew.registerAlias(t), n) {
                    let c;
                    for (c in n) e$.call(n, c) && ew.registerLanguage(c, n[c])
                }
                if (r) {
                    let u = r.indexOf("-");
                    s = u > -1 ? r.slice(0, u) : r
                }
                return (e, t) => {
                    (0, ej.Vn)(e, "element", (e, n, c) => {
                        if (!c || !("tagName" in c) || "pre" !== c.tagName || "code" !== e.tagName || !e.properties) return;
                        let u = function(e) {
                            let t = e.properties && e.properties.className,
                                n = -1;
                            if (Array.isArray(t))
                                for (; ++n < t.length;) {
                                    let r = String(t[n]);
                                    if ("no-highlight" === r || "nohighlight" === r) return !1;
                                    if ("lang-" === r.slice(0, 5)) return r.slice(5);
                                    if ("language-" === r.slice(0, 9)) return r.slice(9)
                                }
                        }(e);
                        if (!1 === u || !u && !l || u && i && i.includes(u)) return;
                        Array.isArray(e.properties.className) || (e.properties.className = []), e.properties.className.includes(s) || e.properties.className.unshift(s);
                        let d;
                        try {
                            d = u ? ew.highlight(u, eR(c), {
                                prefix: r
                            }) : ew.highlightAuto(eR(c), {
                                prefix: r,
                                subset: a
                            })
                        } catch (f) {
                            o && /Unknown language/.test(f.message) || t.fail(f, e, "rehype-highlight:missing-language");
                            return
                        }!u && d.data.language && e.properties.className.push("language-" + d.data.language), Array.isArray(d.children) && d.children.length > 0 && (e.children = d.children)
                    })
                }
            }
        },
        42426: function(e, t, n) {
            "use strict";
            n.d(t, {
                Z: function() {
                    return d
                }
            });
            var r = n(1849);
            let i = (0, r.Y)(["audio", "canvas", "embed", "iframe", "img", "math", "object", "picture", "svg", "video"]);
            var o = n(36943),
                a = n(48733);
            let l = ["address", "article", "aside", "blockquote", "body", "br", "caption", "center", "col", "colgroup", "dd", "dialog", "dir", "div", "dl", "dt", "figcaption", "figure", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "legend", "li", "li", "listing", "main", "menu", "nav", "ol", "optgroup", "option", "p", "plaintext", "pre", "section", "summary", "table", "tbody", "td", "td", "tfoot", "th", "th", "thead", "tr", "ul", "wbr", "xmp"],
                s = ["button", "input", "select", "textarea"],
                c = ["area", "base", "basefont", "dialog", "datalist", "head", "link", "meta", "noembed", "noframes", "param", "rp", "script", "source", "style", "template", "track", "title"],
                u = (0, o.O)(["doctype", "comment"]);

            function d(e = {}) {
                var t;
                let n = (t = e.newlines ? v : k, function(e) {
                    return String(e).replace(/[\t\n\v\f\r ]+/g, t)
                });
                return e => {
                    f(e, {
                        collapse: n,
                        whitespace: "normal"
                    })
                }
            }

            function f(e, t) {
                if ("children" in e) {
                    let n = Object.assign({}, t);
                    return ("root" === e.type || h(e)) && (n.before = !0, n.after = !0), n.whitespace = function(e, t) {
                            if ("tagName" in e && e.properties) switch (e.tagName) {
                                case "listing":
                                case "plaintext":
                                case "script":
                                case "style":
                                case "xmp":
                                    return "pre";
                                case "nobr":
                                    return "nowrap";
                                case "pre":
                                    return e.properties.wrap ? "pre-wrap" : "pre";
                                case "td":
                                case "th":
                                    return e.properties.noWrap ? "nowrap" : t.whitespace;
                                case "textarea":
                                    return "pre-wrap"
                            }
                            return t.whitespace
                        }(e, t),
                        function(e, t) {
                            let n = t.before,
                                r = t.after,
                                i = e.children,
                                o = i.length,
                                a = -1;
                            for (; ++a < o;) {
                                let l = f(i[a], Object.assign({}, t, {
                                    before: n,
                                    after: p(i, a, r)
                                }));
                                l.remove ? (i.splice(a, 1), a--, o--) : l.ignore || (n = l.stripAtStart), m(i[a]) && (n = !1)
                            }
                            return {
                                remove: !1,
                                ignore: !1,
                                stripAtStart: Boolean(n || r)
                            }
                        }(e, n)
                }
                if ("text" === e.type) {
                    if ("normal" === t.whitespace) return function(e, t) {
                        let n = t.collapse(e.value),
                            r = {
                                remove: !1,
                                ignore: !1,
                                stripAtStart: !1
                            },
                            i = 0,
                            o = n.length;
                        return t.before && y(n.charAt(0)) && i++, i !== o && y(n.charAt(o - 1)) && (t.after ? o-- : r.stripAtStart = !0), i === o ? r.remove = !0 : e.value = n.slice(i, o), r
                    }(e, t);
                    "nowrap" === t.whitespace && (e.value = t.collapse(e.value))
                }
                return {
                    remove: !1,
                    ignore: u(e),
                    stripAtStart: !1
                }
            }

            function p(e, t, n) {
                for (; ++t < e.length;) {
                    let r = e[t],
                        i = g(r);
                    if (void 0 === i && "children" in r && !b(r) && (i = p(r.children, -1)), "boolean" == typeof i) return i
                }
                return n
            }

            function g(e) {
                if ("element" === e.type) {
                    if (m(e)) return !1;
                    if (h(e)) return !0
                } else if ("text" === e.type) {
                    if (!(0, a.Q)(e)) return !1
                } else if (!u(e)) return !1
            }

            function m(e) {
                return i(e) || (0, r.k)(e, s)
            }

            function h(e) {
                return (0, r.k)(e, l)
            }

            function b(e) {
                return Boolean("properties" in e && e.properties && e.properties.hidden) || u(e) || (0, r.k)(e, c)
            }

            function y(e) {
                return " " === e || "\n" === e
            }

            function v(e) {
                let t = /\r?\n|\r/.exec(e);
                return t ? t[0] : " "
            }

            function k() {
                return " "
            }
        },
        36542: function(e, t, n) {
            "use strict";
            n.d(t, {
                Z: function() {
                    return eO
                }
            });
            var r = n(89063),
                i = n(29874);
            let o = {
                    tokenize: function(e, t, n) {
                        return function(t) {
                            return e.consume(t), r
                        };

                        function r(t) {
                            return 87 === t || 119 === t ? (e.consume(t), o) : n(t)
                        }

                        function o(t) {
                            return 87 === t || 119 === t ? (e.consume(t), a) : n(t)
                        }

                        function a(t) {
                            return 46 === t ? (e.consume(t), l) : n(t)
                        }

                        function l(e) {
                            return null === e || (0, i.Ch)(e) ? n(e) : t(e)
                        }
                    },
                    partial: !0
                },
                a = {
                    tokenize: function(e, t, n) {
                        let r, o;
                        return a;

                        function a(t) {
                            return 38 === t ? e.check(c, u, l)(t) : 46 === t || 95 === t ? e.check(s, u, l)(t) : null === t || (0, i.Av)(t) || (0, i.B8)(t) || 45 !== t && (0, i.Xh)(t) ? u(t) : (e.consume(t), a)
                        }

                        function l(t) {
                            return 46 === t ? (o = r, r = void 0, e.consume(t), a) : (95 === t && (r = !0), e.consume(t), a)
                        }

                        function u(e) {
                            return o || r ? n(e) : t(e)
                        }
                    },
                    partial: !0
                },
                l = {
                    tokenize: function(e, t) {
                        let n = 0;
                        return r;

                        function r(a) {
                            return 38 === a ? e.check(c, t, i)(a) : (40 === a && n++, 41 === a) ? e.check(s, o, i)(a) : b(a) ? t(a) : h(a) ? e.check(s, t, i)(a) : (e.consume(a), r)
                        }

                        function i(t) {
                            return e.consume(t), r
                        }

                        function o(e) {
                            return --n < 0 ? t(e) : i(e)
                        }
                    },
                    partial: !0
                },
                s = {
                    tokenize: function(e, t, n) {
                        return function(t) {
                            return e.consume(t), r
                        };

                        function r(i) {
                            return h(i) ? (e.consume(i), r) : b(i) ? t(i) : n(i)
                        }
                    },
                    partial: !0
                },
                c = {
                    tokenize: function(e, t, n) {
                        return function(t) {
                            return e.consume(t), r
                        };

                        function r(t) {
                            return (0, i.jv)(t) ? (e.consume(t), r) : 59 === t ? (e.consume(t), o) : n(t)
                        }

                        function o(e) {
                            return b(e) ? t(e) : n(e)
                        }
                    },
                    partial: !0
                },
                u = {
                    tokenize: function(e, t, n) {
                        let r = this;
                        return function(t) {
                            return 87 !== t && 119 !== t || !v(r.previous) || _(r.events) ? n(t) : (e.enter("literalAutolink"), e.enter("literalAutolinkWww"), e.check(o, e.attempt(a, e.attempt(l, i), n), n)(t))
                        };

                        function i(n) {
                            return e.exit("literalAutolinkWww"), e.exit("literalAutolink"), t(n)
                        }
                    },
                    previous: v
                },
                d = {
                    tokenize: function(e, t, n) {
                        let r = this;
                        return function(t) {
                            return 72 !== t && 104 !== t || !k(r.previous) || _(r.events) ? n(t) : (e.enter("literalAutolink"), e.enter("literalAutolinkHttp"), e.consume(t), o)
                        };

                        function o(t) {
                            return 84 === t || 116 === t ? (e.consume(t), s) : n(t)
                        }

                        function s(t) {
                            return 84 === t || 116 === t ? (e.consume(t), c) : n(t)
                        }

                        function c(t) {
                            return 80 === t || 112 === t ? (e.consume(t), u) : n(t)
                        }

                        function u(t) {
                            return 83 === t || 115 === t ? (e.consume(t), d) : d(t)
                        }

                        function d(t) {
                            return 58 === t ? (e.consume(t), f) : n(t)
                        }

                        function f(t) {
                            return 47 === t ? (e.consume(t), p) : n(t)
                        }

                        function p(t) {
                            return 47 === t ? (e.consume(t), g) : n(t)
                        }

                        function g(t) {
                            return null === t || (0, i.Av)(t) || (0, i.B8)(t) || (0, i.Xh)(t) ? n(t) : e.attempt(a, e.attempt(l, m), n)(t)
                        }

                        function m(n) {
                            return e.exit("literalAutolinkHttp"), e.exit("literalAutolink"), t(n)
                        }
                    },
                    previous: k
                },
                f = {
                    tokenize: function(e, t, n) {
                        let r = this,
                            o, a;
                        return function(t) {
                            return !y(t) || !x(r.previous) || _(r.events) ? n(t) : (e.enter("literalAutolink"), e.enter("literalAutolinkEmail"), function t(r) {
                                return y(r) ? (e.consume(r), t) : 64 === r ? (e.consume(r), l) : n(r)
                            }(t))
                        };

                        function l(t) {
                            return 46 === t ? e.check(s, f, c)(t) : 45 === t || 95 === t ? e.check(s, n, u)(t) : (0, i.H$)(t) ? (!a && (0, i.pY)(t) && (a = !0), e.consume(t), l) : f(t)
                        }

                        function c(t) {
                            return e.consume(t), o = !0, a = void 0, l
                        }

                        function u(t) {
                            return e.consume(t), d
                        }

                        function d(t) {
                            return 46 === t ? e.check(s, n, c)(t) : l(t)
                        }

                        function f(r) {
                            return o && !a ? (e.exit("literalAutolinkEmail"), e.exit("literalAutolink"), t(r)) : n(r)
                        }
                    },
                    previous: x
                },
                p = {},
                g = {
                    text: p
                },
                m = 48;
            for (; m < 123;) p[m] = f, 58 == ++m ? m = 65 : 91 === m && (m = 97);

            function h(e) {
                return 33 === e || 34 === e || 39 === e || 41 === e || 42 === e || 44 === e || 46 === e || 58 === e || 59 === e || 60 === e || 63 === e || 95 === e || 126 === e
            }

            function b(e) {
                return null === e || 60 === e || (0, i.z3)(e)
            }

            function y(e) {
                return 43 === e || 45 === e || 46 === e || 95 === e || (0, i.H$)(e)
            }

            function v(e) {
                return null === e || 40 === e || 42 === e || 95 === e || 126 === e || (0, i.z3)(e)
            }

            function k(e) {
                return null === e || !(0, i.jv)(e)
            }

            function x(e) {
                return 47 !== e && k(e)
            }

            function _(e) {
                let t = e.length,
                    n = !1;
                for (; t--;) {
                    let r = e[t][1];
                    if (("labelLink" === r.type || "labelImage" === r.type) && !r._balanced) {
                        n = !0;
                        break
                    }
                    if (r._gfmAutolinkLiteralWalkedInto) {
                        n = !1;
                        break
                    }
                }
                return e.length > 0 && !n && (e[e.length - 1][1]._gfmAutolinkLiteralWalkedInto = !0), n
            }
            p[43] = f, p[45] = f, p[46] = f, p[95] = f, p[72] = [f, d], p[104] = [f, d], p[87] = [f, u], p[119] = [f, u];
            var w = n(58775),
                E = n(46050),
                S = n(37618);
            let N = {
                tokenize: function(e, t, n) {
                    let r = this;
                    return (0, E.f)(e, function(e) {
                        let i = r.events[r.events.length - 1];
                        return i && "gfmFootnoteDefinitionIndent" === i[1].type && 4 === i[2].sliceSerialize(i[1], !0).length ? t(e) : n(e)
                    }, "gfmFootnoteDefinitionIndent", 5)
                },
                partial: !0
            };

            function C(e, t, n) {
                let r = this,
                    i = r.events.length,
                    o = r.parser.gfmFootnotes || (r.parser.gfmFootnotes = []),
                    a;
                for (; i--;) {
                    let l = r.events[i][1];
                    if ("labelImage" === l.type) {
                        a = l;
                        break
                    }
                    if ("gfmFootnoteCall" === l.type || "labelLink" === l.type || "label" === l.type || "image" === l.type || "link" === l.type) break
                }
                return function(i) {
                    if (!a || !a._balanced) return n(i);
                    let l = (0, S.d)(r.sliceSerialize({
                        start: a.end,
                        end: r.now()
                    }));
                    return 94 === l.charCodeAt(0) && o.includes(l.slice(1)) ? (e.enter("gfmFootnoteCallLabelMarker"), e.consume(i), e.exit("gfmFootnoteCallLabelMarker"), t(i)) : n(i)
                }
            }

            function O(e, t) {
                let n = e.length;
                for (; n--;)
                    if ("labelImage" === e[n][1].type && "enter" === e[n][0]) {
                        e[n][1];
                        break
                    }
                e[n + 1][1].type = "data", e[n + 3][1].type = "gfmFootnoteCallLabelMarker";
                let r = {
                        type: "gfmFootnoteCall",
                        start: Object.assign({}, e[n + 3][1].start),
                        end: Object.assign({}, e[e.length - 1][1].end)
                    },
                    i = {
                        type: "gfmFootnoteCallMarker",
                        start: Object.assign({}, e[n + 3][1].end),
                        end: Object.assign({}, e[n + 3][1].end)
                    };
                i.end.column++, i.end.offset++, i.end._bufferIndex++;
                let o = {
                        type: "gfmFootnoteCallString",
                        start: Object.assign({}, i.end),
                        end: Object.assign({}, e[e.length - 1][1].start)
                    },
                    a = {
                        type: "chunkString",
                        contentType: "string",
                        start: Object.assign({}, o.start),
                        end: Object.assign({}, o.end)
                    },
                    l = [e[n + 1], e[n + 2],
                        ["enter", r, t], e[n + 3], e[n + 4],
                        ["enter", i, t],
                        ["exit", i, t],
                        ["enter", o, t],
                        ["enter", a, t],
                        ["exit", a, t],
                        ["exit", o, t], e[e.length - 2], e[e.length - 1],
                        ["exit", r, t]
                    ];
                return e.splice(n, e.length - n + 1, ...l), e
            }

            function A(e, t, n) {
                let r = this,
                    o = r.parser.gfmFootnotes || (r.parser.gfmFootnotes = []),
                    a = 0,
                    l;
                return function(t) {
                    return e.enter("gfmFootnoteCall"), e.enter("gfmFootnoteCallLabelMarker"), e.consume(t), e.exit("gfmFootnoteCallLabelMarker"), s
                };

                function s(t) {
                    return 94 !== t ? n(t) : (e.enter("gfmFootnoteCallMarker"), e.consume(t), e.exit("gfmFootnoteCallMarker"), e.enter("gfmFootnoteCallString"), e.enter("chunkString").contentType = "string", c)
                }

                function c(s) {
                    let d;
                    if (null === s || 91 === s || a++ > 999) return n(s);
                    if (93 === s) {
                        var f;
                        return l ? (e.exit("chunkString"), d = e.exit("gfmFootnoteCallString"), o.includes((0, S.d)(r.sliceSerialize(d))) ? (f = s, e.enter("gfmFootnoteCallLabelMarker"), e.consume(f), e.exit("gfmFootnoteCallLabelMarker"), e.exit("gfmFootnoteCall"), t) : n(s)) : n(s)
                    }
                    return e.consume(s), (0, i.z3)(s) || (l = !0), 92 === s ? u : c
                }

                function u(t) {
                    return 91 === t || 92 === t || 93 === t ? (e.consume(t), a++, c) : c(t)
                }
            }

            function T(e, t, n) {
                let r = this,
                    o = r.parser.gfmFootnotes || (r.parser.gfmFootnotes = []),
                    a, l = 0,
                    s;
                return function(t) {
                    return e.enter("gfmFootnoteDefinition")._container = !0, e.enter("gfmFootnoteDefinitionLabel"), e.enter("gfmFootnoteDefinitionLabelMarker"), e.consume(t), e.exit("gfmFootnoteDefinitionLabelMarker"), c
                };

                function c(t) {
                    return 94 === t ? (e.enter("gfmFootnoteDefinitionMarker"), e.consume(t), e.exit("gfmFootnoteDefinitionMarker"), e.enter("gfmFootnoteDefinitionLabelString"), u) : n(t)
                }

                function u(t) {
                    let o;
                    return null === t || 91 === t || l > 999 ? n(t) : 93 === t ? s ? (o = e.exit("gfmFootnoteDefinitionLabelString"), a = (0, S.d)(r.sliceSerialize(o)), e.enter("gfmFootnoteDefinitionLabelMarker"), e.consume(t), e.exit("gfmFootnoteDefinitionLabelMarker"), e.exit("gfmFootnoteDefinitionLabel"), p) : n(t) : (0, i.Ch)(t) ? (e.enter("lineEnding"), e.consume(t), e.exit("lineEnding"), l++, u) : (e.enter("chunkString").contentType = "string", d(t))
                }

                function d(t) {
                    return null === t || (0, i.Ch)(t) || 91 === t || 93 === t || l > 999 ? (e.exit("chunkString"), u(t)) : ((0, i.z3)(t) || (s = !0), l++, e.consume(t), 92 === t ? f : d)
                }

                function f(t) {
                    return 91 === t || 92 === t || 93 === t ? (e.consume(t), l++, d) : d(t)
                }

                function p(t) {
                    return 58 === t ? (e.enter("definitionMarker"), e.consume(t), e.exit("definitionMarker"), (0, E.f)(e, g, "gfmFootnoteDefinitionWhitespace")) : n(t)
                }

                function g(e) {
                    return o.includes(a) || o.push(a), t(e)
                }
            }

            function M(e, t, n) {
                return e.check(w.w, t, e.attempt(N, t, n))
            }

            function I(e) {
                e.exit("gfmFootnoteDefinition")
            }
            var D = n(11707),
                L = n(85618),
                R = n(79142);
            let F = {
                    flow: {
                        null: {
                            tokenize: function(e, t, n) {
                                let r = this,
                                    o = [],
                                    a = 0,
                                    l, s;
                                return function(t) {
                                    return (e.enter("table")._align = o, e.enter("tableHead"), e.enter("tableRow"), 124 === t) ? c(t) : (a++, e.enter("temporaryTableCellContent"), f(t))
                                };

                                function c(t) {
                                    return e.enter("tableCellDivider"), e.consume(t), e.exit("tableCellDivider"), l = !0, u
                                }

                                function u(t) {
                                    return null === t || (0, i.Ch)(t) ? function(t) {
                                        if (null === t) return n(t);
                                        e.exit("tableRow"), e.exit("tableHead");
                                        let i = r.interrupt;
                                        return r.interrupt = !0, e.attempt({
                                            tokenize: T,
                                            partial: !0
                                        }, function(t) {
                                            return r.interrupt = i, e.enter("tableDelimiterRow"), g(t)
                                        }, function(e) {
                                            return r.interrupt = i, n(e)
                                        })(t)
                                    }(t) : (0, i.xz)(t) ? (e.enter("whitespace"), e.consume(t), d) : (l && (l = void 0, a++), 124 === t) ? c(t) : (e.enter("temporaryTableCellContent"), f(t))
                                }

                                function d(t) {
                                    return (0, i.xz)(t) ? (e.consume(t), d) : (e.exit("whitespace"), u(t))
                                }

                                function f(t) {
                                    return null === t || 124 === t || (0, i.z3)(t) ? (e.exit("temporaryTableCellContent"), u(t)) : (e.consume(t), 92 === t ? p : f)
                                }

                                function p(t) {
                                    return 92 === t || 124 === t ? (e.consume(t), f) : f(t)
                                }

                                function g(t) {
                                    return null === t || (0, i.Ch)(t) ? v(t) : (0, i.xz)(t) ? (e.enter("whitespace"), e.consume(t), m) : 45 === t ? (e.enter("tableDelimiterFiller"), e.consume(t), s = !0, o.push("none"), h) : 58 === t ? (e.enter("tableDelimiterAlignment"), e.consume(t), e.exit("tableDelimiterAlignment"), o.push("left"), b) : 124 === t ? (e.enter("tableCellDivider"), e.consume(t), e.exit("tableCellDivider"), g) : n(t)
                                }

                                function m(t) {
                                    return (0, i.xz)(t) ? (e.consume(t), m) : (e.exit("whitespace"), g(t))
                                }

                                function h(t) {
                                    return 45 === t ? (e.consume(t), h) : (e.exit("tableDelimiterFiller"), 58 === t) ? (e.enter("tableDelimiterAlignment"), e.consume(t), e.exit("tableDelimiterAlignment"), o[o.length - 1] = "left" === o[o.length - 1] ? "center" : "right", y) : g(t)
                                }

                                function b(t) {
                                    return 45 === t ? (e.enter("tableDelimiterFiller"), e.consume(t), s = !0, h) : n(t)
                                }

                                function y(t) {
                                    return null === t || (0, i.Ch)(t) ? v(t) : (0, i.xz)(t) ? (e.enter("whitespace"), e.consume(t), m) : 124 === t ? (e.enter("tableCellDivider"), e.consume(t), e.exit("tableCellDivider"), g) : n(t)
                                }

                                function v(t) {
                                    return (e.exit("tableDelimiterRow"), s && a === o.length) ? null === t ? k(t) : e.check(P, k, e.attempt({
                                        tokenize: T,
                                        partial: !0
                                    }, (0, E.f)(e, x, "linePrefix", 4), k))(t) : n(t)
                                }

                                function k(n) {
                                    return e.exit("table"), t(n)
                                }

                                function x(t) {
                                    return e.enter("tableBody"), _(t)
                                }

                                function _(t) {
                                    return (e.enter("tableRow"), 124 === t) ? w(t) : (e.enter("temporaryTableCellContent"), C(t))
                                }

                                function w(t) {
                                    return e.enter("tableCellDivider"), e.consume(t), e.exit("tableCellDivider"), S
                                }

                                function S(t) {
                                    var n;
                                    return null === t || (0, i.Ch)(t) ? (n = t, (e.exit("tableRow"), null === n) ? A(n) : e.check(P, A, e.attempt({
                                        tokenize: T,
                                        partial: !0
                                    }, (0, E.f)(e, _, "linePrefix", 4), A))(n)) : (0, i.xz)(t) ? (e.enter("whitespace"), e.consume(t), N) : 124 === t ? w(t) : (e.enter("temporaryTableCellContent"), C(t))
                                }

                                function N(t) {
                                    return (0, i.xz)(t) ? (e.consume(t), N) : (e.exit("whitespace"), S(t))
                                }

                                function C(t) {
                                    return null === t || 124 === t || (0, i.z3)(t) ? (e.exit("temporaryTableCellContent"), S(t)) : (e.consume(t), 92 === t ? O : C)
                                }

                                function O(t) {
                                    return 92 === t || 124 === t ? (e.consume(t), C) : C(t)
                                }

                                function A(t) {
                                    return e.exit("tableBody"), k(t)
                                }

                                function T(e, t, n) {
                                    return function(t) {
                                        return e.enter("lineEnding"), e.consume(t), e.exit("lineEnding"), (0, E.f)(e, o, "linePrefix")
                                    };

                                    function o(o) {
                                        if (r.parser.lazy[r.now().line] || null === o || (0, i.Ch)(o)) return n(o);
                                        let a = r.events[r.events.length - 1];
                                        return !r.parser.constructs.disable.null.includes("codeIndented") && a && "linePrefix" === a[1].type && a[2].sliceSerialize(a[1], !0).length >= 4 ? n(o) : (r._gfmTableDynamicInterruptHack = !0, e.check(r.parser.constructs.flow, function(e) {
                                            return r._gfmTableDynamicInterruptHack = !1, n(e)
                                        }, function(e) {
                                            return r._gfmTableDynamicInterruptHack = !1, t(e)
                                        })(o))
                                    }
                                }
                            },
                            resolve: function(e, t) {
                                let n = -1,
                                    r, i, o, a, l, s, c;
                                for (; ++n < e.length;) {
                                    let u = e[n][1];
                                    if (o && ("temporaryTableCellContent" === u.type && (a = a || n, l = n), ("tableCellDivider" === u.type || "tableRow" === u.type) && l)) {
                                        let d = {
                                                type: "tableContent",
                                                start: e[a][1].start,
                                                end: e[l][1].end
                                            },
                                            f = {
                                                type: "chunkText",
                                                start: d.start,
                                                end: d.end,
                                                contentType: "text"
                                            };
                                        e.splice(a, l - a + 1, ["enter", d, t], ["enter", f, t], ["exit", f, t], ["exit", d, t]), n -= l - a - 3, a = void 0, l = void 0
                                    }
                                    if ("exit" === e[n][0] && void 0 !== s && s + (c ? 0 : 1) < n && ("tableCellDivider" === u.type || "tableRow" === u.type && (s + 3 < n || "whitespace" !== e[s][1].type))) {
                                        let p = {
                                            type: i ? "tableDelimiter" : r ? "tableHeader" : "tableData",
                                            start: e[s][1].start,
                                            end: e[n][1].end
                                        };
                                        e.splice(n + ("tableCellDivider" === u.type ? 1 : 0), 0, ["exit", p, t]), e.splice(s, 0, ["enter", p, t]), n += 2, s = n + 1, c = !0
                                    }
                                    "tableRow" === u.type && (o = "enter" === e[n][0]) && (s = n + 1, c = !1), "tableDelimiterRow" === u.type && (i = "enter" === e[n][0]) && (s = n + 1, c = !1), "tableHead" === u.type && (r = "enter" === e[n][0])
                                }
                                return e
                            }
                        }
                    }
                },
                P = {
                    tokenize: function(e, t, n) {
                        let r = 0;
                        return function(t) {
                            return e.enter("check"), e.consume(t), o
                        };

                        function o(a) {
                            return -1 === a || 32 === a ? (e.consume(a), 4 == ++r ? t : o) : null === a || (0, i.z3)(a) ? t(a) : n(a)
                        }
                    },
                    partial: !0
                },
                B = {
                    text: {
                        91: {
                            tokenize: function(e, t, n) {
                                let r = this;
                                return function(t) {
                                    return null === r.previous && r._gfmTasklistFirstContentOfListItem ? (e.enter("taskListCheck"), e.enter("taskListCheckMarker"), e.consume(t), e.exit("taskListCheckMarker"), o) : n(t)
                                };

                                function o(t) {
                                    return (0, i.z3)(t) ? (e.enter("taskListCheckValueUnchecked"), e.consume(t), e.exit("taskListCheckValueUnchecked"), a) : 88 === t || 120 === t ? (e.enter("taskListCheckValueChecked"), e.consume(t), e.exit("taskListCheckValueChecked"), a) : n(t)
                                }

                                function a(r) {
                                    return 93 === r ? (e.enter("taskListCheckMarker"), e.consume(r), e.exit("taskListCheckMarker"), e.exit("taskListCheck"), e.check({
                                        tokenize: z
                                    }, t, n)) : n(r)
                                }
                            }
                        }
                    }
                };

            function z(e, t, n) {
                let r = this;
                return (0, E.f)(e, function(e) {
                    let o = r.events[r.events.length - 1];
                    return (o && "whitespace" === o[1].type || (0, i.Ch)(e)) && null !== e ? t(e) : n(e)
                }, "whitespace")
            }

            function j(e, t) {
                let n = String(e);
                if ("string" != typeof t) throw TypeError("Expected character");
                let r = 0,
                    i = n.indexOf(t);
                for (; - 1 !== i;) r++, i = n.indexOf(t, i + t.length);
                return r
            }
            var $ = n(72900),
                U = n(36943);
            let H = {}.hasOwnProperty,
                q = function(e, t, n, r) {
                    let i, o;
                    "string" == typeof t || t instanceof RegExp ? (o = [
                        [t, n]
                    ], i = r) : (o = t, i = n), i || (i = {});
                    let a = (0, U.O)(i.ignore || []),
                        l = function(e) {
                            let t = [];
                            if ("object" != typeof e) throw TypeError("Expected array or object as schema");
                            if (Array.isArray(e)) {
                                let n = -1;
                                for (; ++n < e.length;) t.push([K(e[n][0]), V(e[n][1])])
                            } else {
                                let r;
                                for (r in e) H.call(e, r) && t.push([K(r), V(e[r])])
                            }
                            return t
                        }(o),
                        s = -1;
                    for (; ++s < l.length;)(0, $.S4)(e, "text", c);
                    return e;

                    function c(e, t) {
                        let n = -1,
                            r;
                        for (; ++n < t.length;) {
                            let i = t[n];
                            if (a(i, r ? r.children.indexOf(i) : void 0, r)) return;
                            r = i
                        }
                        if (r) return function(e, t) {
                            let n = t[t.length - 1],
                                r = l[s][0],
                                i = l[s][1],
                                o = 0,
                                a = n.children.indexOf(e),
                                c = !1,
                                u = [],
                                d;
                            r.lastIndex = 0;
                            let f = r.exec(e.value);
                            for (; f;) {
                                d = f.index;
                                let p = {
                                        index: f.index,
                                        input: f.input,
                                        stack: [...t, e]
                                    },
                                    g = i(...f, p);
                                if ("string" == typeof g && (g = g.length > 0 ? {
                                        type: "text",
                                        value: g
                                    } : void 0), !1 !== g && (o !== d && u.push({
                                        type: "text",
                                        value: e.value.slice(o, d)
                                    }), Array.isArray(g) ? u.push(...g) : g && u.push(g), o = d + f[0].length, c = !0), !r.global) break;
                                f = r.exec(e.value)
                            }
                            return c ? (o < e.value.length && u.push({
                                type: "text",
                                value: e.value.slice(o)
                            }), n.children.splice(a, 1, ...u)) : u = [e], a + u.length
                        }(e, t)
                    }
                };

            function K(e) {
                return "string" == typeof e ? RegExp(function(e) {
                    if ("string" != typeof e) throw TypeError("Expected a string");
                    return e.replace(/[|\\{}()[\]^$+*?.]/g, "\\$&").replace(/-/g, "\\x2d")
                }(e), "g") : e
            }

            function V(e) {
                return "function" == typeof e ? e : () => e
            }
            let Z = "phrasing",
                W = ["autolink", "link", "image", "label"],
                G = {
                    transforms: [function(e) {
                        q(e, [
                            [/(https?:\/\/|www(?=\.))([-.\w]+)([^ \t\r\n]*)/gi, Y],
                            [/([-.\w+]+)@([-\w]+(?:\.[-\w]+)+)/g, J]
                        ], {
                            ignore: ["link", "linkReference"]
                        })
                    }],
                    enter: {
                        literalAutolink: function(e) {
                            this.enter({
                                type: "link",
                                title: null,
                                url: "",
                                children: []
                            }, e)
                        },
                        literalAutolinkEmail: Q,
                        literalAutolinkHttp: Q,
                        literalAutolinkWww: Q
                    },
                    exit: {
                        literalAutolink: function(e) {
                            this.exit(e)
                        },
                        literalAutolinkEmail: function(e) {
                            this.config.exit.autolinkEmail.call(this, e)
                        },
                        literalAutolinkHttp: function(e) {
                            this.config.exit.autolinkProtocol.call(this, e)
                        },
                        literalAutolinkWww: function(e) {
                            this.config.exit.data.call(this, e);
                            let t = this.stack[this.stack.length - 1];
                            t.url = "http://" + this.sliceSerialize(e)
                        }
                    }
                },
                X = {
                    unsafe: [{
                        character: "@",
                        before: "[+\\-.\\w]",
                        after: "[\\-.\\w]",
                        inConstruct: Z,
                        notInConstruct: W
                    }, {
                        character: ".",
                        before: "[Ww]",
                        after: "[\\-.\\w]",
                        inConstruct: Z,
                        notInConstruct: W
                    }, {
                        character: ":",
                        before: "[ps]",
                        after: "\\/",
                        inConstruct: Z,
                        notInConstruct: W
                    }]
                };

            function Q(e) {
                this.config.enter.autolinkProtocol.call(this, e)
            }

            function Y(e, t, n, r, i) {
                let o = "";
                if (!ee(i) || (/^w/i.test(t) && (n = t + n, t = "", o = "http://"), ! function(e) {
                        let t = e.split(".");
                        return !(t.length < 2 || t[t.length - 1] && (/_/.test(t[t.length - 1]) || !/[a-zA-Z\d]/.test(t[t.length - 1])) || t[t.length - 2] && (/_/.test(t[t.length - 2]) || !/[a-zA-Z\d]/.test(t[t.length - 2])))
                    }(n))) return !1;
                let a = function(e) {
                    let t = /[!"&'),.:;<>?\]}]+$/.exec(e),
                        n, r, i, o;
                    if (t)
                        for (e = e.slice(0, t.index), n = (o = t[0]).indexOf(")"), r = j(e, "("), i = j(e, ")"); - 1 !== n && r > i;) e += o.slice(0, n + 1), n = (o = o.slice(n + 1)).indexOf(")"), i++;
                    return [e, o]
                }(n + r);
                if (!a[0]) return !1;
                let l = {
                    type: "link",
                    title: null,
                    url: o + t + a[0],
                    children: [{
                        type: "text",
                        value: t + a[0]
                    }]
                };
                return a[1] ? [l, {
                    type: "text",
                    value: a[1]
                }] : l
            }

            function J(e, t, n, r) {
                return !(!ee(r, !0) || /[_-\d]$/.test(n)) && {
                    type: "link",
                    title: null,
                    url: "mailto:" + t + "@" + n,
                    children: [{
                        type: "text",
                        value: t + "@" + n
                    }]
                }
            }

            function ee(e, t) {
                let n = e.input.charCodeAt(e.index - 1);
                return (0 === e.index || (0, i.B8)(n) || (0, i.Xh)(n)) && (!t || 47 !== n)
            }
            var et = n(12006);

            function en(e) {
                return e.label || !e.identifier ? e.label || "" : (0, et.v)(e.identifier)
            }

            function er(e) {
                let t = e || {},
                    n = t.now || {},
                    r = t.lineShift || 0,
                    i = n.line || 1,
                    o = n.column || 1;
                return {
                    move: function(e = "") {
                        let t = e.split(/\r?\n|\r/g),
                            n = t[t.length - 1];
                        return i += t.length - 1, o = 1 === t.length ? o + n.length : 1 + n.length + r, e
                    },
                    current: function() {
                        return {
                            now: {
                                line: i,
                                column: o
                            },
                            lineShift: r
                        }
                    },
                    shift: a
                };

                function a(e) {
                    r += e
                }
            }

            function ei(e, t, n) {
                let r = t.indexStack,
                    i = e.children || [],
                    o = er(n),
                    a = [],
                    l = -1;
                for (r.push(-1); ++l < i.length;) {
                    let s = i[l];
                    r[r.length - 1] = l, a.push(o.move(t.handle(s, e, t, {
                        before: "\n",
                        after: "\n",
                        ...o.current()
                    }))), "list" !== s.type && (t.bulletLastUsed = void 0), l < i.length - 1 && a.push(o.move(c(s, i[l + 1])))
                }
                return r.pop(), a.join("");

                function c(n, r) {
                    let i = t.join.length;
                    for (; i--;) {
                        let o = t.join[i](n, r, e, t);
                        if (!0 === o || 1 === o) break;
                        if ("number" == typeof o) return "\n".repeat(1 + o);
                        if (!1 === o) return "\n\n<!---->\n\n"
                    }
                    return "\n\n"
                }
            }
            let eo = /\r?\n|\r/g;

            function ea(e, t) {
                let n = [],
                    r = 0,
                    i = 0,
                    o;
                for (; o = eo.exec(e);) a(e.slice(r, o.index)), n.push(o[0]), r = o.index + o[0].length, i++;
                return a(e.slice(r)), n.join("");

                function a(e) {
                    n.push(t(e, i, !e))
                }
            }

            function el(e) {
                if (!e._compiled) {
                    let t = (e.atBreak ? "[\\r\\n][\\t ]*" : "") + (e.before ? "(?:" + e.before + ")" : "");
                    e._compiled = RegExp((t ? "(" + t + ")" : "") + (/[|\\{}()[\]^$+*?.-]/.test(e.character) ? "\\" : "") + e.character + (e.after ? "(?:" + e.after + ")" : ""), "g")
                }
                return e._compiled
            }

            function es(e, t) {
                return ec(e, t.inConstruct, !0) && !ec(e, t.notInConstruct, !1)
            }

            function ec(e, t, n) {
                if (!t) return n;
                "string" == typeof t && (t = [t]);
                let r = -1;
                for (; ++r < t.length;)
                    if (e.includes(t[r])) return !0;
                return !1
            }

            function eu(e, t, n) {
                let r = (n.before || "") + (t || "") + (n.after || ""),
                    i = [],
                    o = [],
                    a = {},
                    l = -1;
                for (; ++l < e.unsafe.length;) {
                    let s = e.unsafe[l];
                    if (!es(e.stack, s)) continue;
                    let c = el(s),
                        u;
                    for (; u = c.exec(r);) {
                        let d = "before" in s || Boolean(s.atBreak),
                            f = "after" in s,
                            p = u.index + (d ? u[1].length : 0);
                        i.includes(p) ? (a[p].before && !d && (a[p].before = !1), a[p].after && !f && (a[p].after = !1)) : (i.push(p), a[p] = {
                            before: d,
                            after: f
                        })
                    }
                }
                i.sort(ed);
                let g = n.before ? n.before.length : 0,
                    m = r.length - (n.after ? n.after.length : 0);
                for (l = -1; ++l < i.length;) {
                    let h = i[l];
                    !(h < g) && !(h >= m) && (!(h + 1 < m) || i[l + 1] !== h + 1 || !a[h].after || a[h + 1].before || a[h + 1].after) && (i[l - 1] !== h - 1 || !a[h].before || a[h - 1].before || a[h - 1].after) && (g !== h && o.push(ef(r.slice(g, h), "\\")), g = h, !/[!-/:-@[-`{-~]/.test(r.charAt(h)) || n.encode && n.encode.includes(r.charAt(h)) ? (o.push("&#x" + r.charCodeAt(h).toString(16).toUpperCase() + ";"), g++) : o.push("\\"))
                }
                return o.push(ef(r.slice(g, m), n.after)), o.join("")
            }

            function ed(e, t) {
                return e - t
            }

            function ef(e, t) {
                let n = /\\(?=[!-/:-@[-`{-~])/g,
                    r = [],
                    i = [],
                    o = e + t,
                    a = -1,
                    l = 0,
                    s;
                for (; s = n.exec(o);) r.push(s.index);
                for (; ++a < r.length;) l !== r[a] && i.push(e.slice(l, r[a])), i.push("\\"), l = r[a];
                return i.push(e.slice(l)), i.join("")
            }

            function ep(e, t, n) {
                let r = t.indexStack,
                    i = e.children || [],
                    o = [],
                    a = -1,
                    l = n.before;
                r.push(-1);
                let s = er(n);
                for (; ++a < i.length;) {
                    let c = i[a],
                        u;
                    if (r[r.length - 1] = a, a + 1 < i.length) {
                        let d = t.handle.handlers[i[a + 1].type];
                        d && d.peek && (d = d.peek), u = d ? d(i[a + 1], e, t, {
                            before: "",
                            after: "",
                            ...s.current()
                        }).charAt(0) : ""
                    } else u = n.after;
                    o.length > 0 && ("\r" === l || "\n" === l) && "html" === c.type && (o[o.length - 1] = o[o.length - 1].replace(/(\r?\n|\r)$/, " "), l = " ", (s = er(n)).move(o.join(""))), o.push(s.move(t.handle(c, e, t, { ...s.current(),
                        before: l,
                        after: u
                    }))), l = o[o.length - 1].slice(-1)
                }
                return r.pop(), o.join("")
            }
            let eg = {
                    canContainEols: ["delete"],
                    enter: {
                        strikethrough: function(e) {
                            this.enter({
                                type: "delete",
                                children: []
                            }, e)
                        }
                    },
                    exit: {
                        strikethrough: function(e) {
                            this.exit(e)
                        }
                    }
                },
                em = {
                    unsafe: [{
                        character: "~",
                        inConstruct: "phrasing"
                    }],
                    handlers: {
                        delete: eh
                    }
                };

            function eh(e, t, n, r) {
                let i = er(r),
                    o = n.enter("emphasis"),
                    a = i.move("~~");
                return a += ep(e, n, { ...i.current(),
                    before: a,
                    after: "~"
                }), a += i.move("~~"), o(), a
            }

            function eb(e, t, n) {
                let r = e.value || "",
                    i = "`",
                    o = -1;
                for (; RegExp("(^|[^`])" + i + "([^`]|$)").test(r);) i += "`";
                for (/[^ \r\n]/.test(r) && (/^[ \r\n]/.test(r) && /[ \r\n]$/.test(r) || /^`|`$/.test(r)) && (r = " " + r + " "); ++o < n.unsafe.length;) {
                    let a = n.unsafe[o],
                        l = el(a),
                        s;
                    if (a.atBreak)
                        for (; s = l.exec(r);) {
                            let c = s.index;
                            10 === r.charCodeAt(c) && 13 === r.charCodeAt(c - 1) && c--, r = r.slice(0, c) + " " + r.slice(s.index + 1)
                        }
                }
                return i + r + i
            }

            function ey(e) {
                return null == e ? "" : String(e)
            }

            function ev(e) {
                return e.length
            }

            function ek(e) {
                let t = "string" == typeof e ? e.codePointAt(0) : 0;
                return 67 === t || 99 === t ? 99 : 76 === t || 108 === t ? 108 : 82 === t || 114 === t ? 114 : 0
            }
            eh.peek = function() {
                return "~"
            }, eb.peek = function() {
                return "`"
            };
            let ex = {
                enter: {
                    table: function(e) {
                        let t = e._align;
                        this.enter({
                            type: "table",
                            align: t.map(e => "none" === e ? null : e),
                            children: []
                        }, e), this.setData("inTable", !0)
                    },
                    tableData: ew,
                    tableHeader: ew,
                    tableRow: function(e) {
                        this.enter({
                            type: "tableRow",
                            children: []
                        }, e)
                    }
                },
                exit: {
                    codeText: function(e) {
                        let t = this.resume();
                        this.getData("inTable") && (t = t.replace(/\\([\\|])/g, eE));
                        let n = this.stack[this.stack.length - 1];
                        n.value = t, this.exit(e)
                    },
                    table: function(e) {
                        this.exit(e), this.setData("inTable")
                    },
                    tableData: e_,
                    tableHeader: e_,
                    tableRow: e_
                }
            };

            function e_(e) {
                this.exit(e)
            }

            function ew(e) {
                this.enter({
                    type: "tableCell",
                    children: []
                }, e)
            }

            function eE(e, t) {
                return "|" === t ? t : e
            }
            let eS = {
                    exit: {
                        taskListCheckValueChecked: eC,
                        taskListCheckValueUnchecked: eC,
                        paragraph: function(e) {
                            let t = this.stack[this.stack.length - 2],
                                n = this.stack[this.stack.length - 1],
                                r = t.children,
                                i = n.children[0],
                                o = -1,
                                a;
                            if (t && "listItem" === t.type && "boolean" == typeof t.checked && i && "text" === i.type) {
                                for (; ++o < r.length;) {
                                    let l = r[o];
                                    if ("paragraph" === l.type) {
                                        a = l;
                                        break
                                    }
                                }
                                a === n && (i.value = i.value.slice(1), 0 === i.value.length ? n.children.shift() : n.position && i.position && "number" == typeof i.position.start.offset && (i.position.start.column++, i.position.start.offset++, n.position.start = Object.assign({}, i.position.start)))
                            }
                            this.exit(e)
                        }
                    }
                },
                eN = {
                    unsafe: [{
                        atBreak: !0,
                        character: "-",
                        after: "[:|-]"
                    }],
                    handlers: {
                        listItem: function(e, t, n, r) {
                            let i = e.children[0],
                                o = "boolean" == typeof e.checked && i && "paragraph" === i.type,
                                a = "[" + (e.checked ? "x" : " ") + "] ",
                                l = er(r);
                            o && l.move(a);
                            let s = function(e, t, n, r) {
                                let i = function(e) {
                                        let t = e.options.listItemIndent || "tab";
                                        if (1 === t || "1" === t) return "one";
                                        if ("tab" !== t && "one" !== t && "mixed" !== t) throw Error("Cannot serialize items with `" + t + "` for `options.listItemIndent`, expected `tab`, `one`, or `mixed`");
                                        return t
                                    }(n),
                                    o = n.bulletCurrent || function(e) {
                                        let t = e.options.bullet || "*";
                                        if ("*" !== t && "+" !== t && "-" !== t) throw Error("Cannot serialize items with `" + t + "` for `options.bullet`, expected `*`, `+`, or `-`");
                                        return t
                                    }(n);
                                t && "list" === t.type && t.ordered && (o = ("number" == typeof t.start && t.start > -1 ? t.start : 1) + (!1 === n.options.incrementListMarker ? 0 : t.children.indexOf(e)) + o);
                                let a = o.length + 1;
                                ("tab" === i || "mixed" === i && (t && "list" === t.type && t.spread || e.spread)) && (a = 4 * Math.ceil(a / 4));
                                let l = er(r);
                                l.move(o + " ".repeat(a - o.length)), l.shift(a);
                                let s = n.enter("listItem"),
                                    c = ea(ei(e, n, l.current()), function(e, t, n) {
                                        return t ? (n ? "" : " ".repeat(a)) + e : (n ? o : o + " ".repeat(a - o.length)) + e
                                    });
                                return s(), c
                            }(e, t, n, { ...r,
                                ...l.current()
                            });
                            return o && (s = s.replace(/^(?:[*+-]|\d+\.)([\r\n]| {1,3})/, c)), s;

                            function c(e) {
                                return e + a
                            }
                        }
                    }
                };

            function eC(e) {
                let t = this.stack[this.stack.length - 2];
                t.checked = "taskListCheckValueChecked" === e.type
            }

            function eO(e = {}) {
                var t, n;
                let i = this.data();

                function o(e, t) {
                    let n = i[e] ? i[e] : i[e] = [];
                    n.push(t)
                }
                o("micromarkExtensions", (0, r.W)([g, {
                    document: {
                        91: {
                            tokenize: T,
                            continuation: {
                                tokenize: M
                            },
                            exit: I
                        }
                    },
                    text: {
                        91: {
                            tokenize: A
                        },
                        93: {
                            add: "after",
                            tokenize: C,
                            resolveTo: O
                        }
                    }
                }, function(e = {}) {
                    let t = e.singleTilde,
                        n = {
                            tokenize: function(e, n, r) {
                                let i = this.previous,
                                    o = this.events,
                                    a = 0;
                                return function(l) {
                                    return 126 === i && "characterEscape" !== o[o.length - 1][1].type ? r(l) : (e.enter("strikethroughSequenceTemporary"), function o(l) {
                                        let s = (0, L.r)(i);
                                        if (126 === l) return a > 1 ? r(l) : (e.consume(l), a++, o);
                                        if (a < 2 && !t) return r(l);
                                        let c = e.exit("strikethroughSequenceTemporary"),
                                            u = (0, L.r)(l);
                                        return c._open = !u || 2 === u && Boolean(s), c._close = !s || 2 === s && Boolean(u), n(l)
                                    }(l))
                                }
                            },
                            resolveAll: function(e, t) {
                                let n = -1;
                                for (; ++n < e.length;)
                                    if ("enter" === e[n][0] && "strikethroughSequenceTemporary" === e[n][1].type && e[n][1]._close) {
                                        let r = n;
                                        for (; r--;)
                                            if ("exit" === e[r][0] && "strikethroughSequenceTemporary" === e[r][1].type && e[r][1]._open && e[n][1].end.offset - e[n][1].start.offset == e[r][1].end.offset - e[r][1].start.offset) {
                                                e[n][1].type = "strikethroughSequence", e[r][1].type = "strikethroughSequence";
                                                let i = {
                                                        type: "strikethrough",
                                                        start: Object.assign({}, e[r][1].start),
                                                        end: Object.assign({}, e[n][1].end)
                                                    },
                                                    o = {
                                                        type: "strikethroughText",
                                                        start: Object.assign({}, e[r][1].end),
                                                        end: Object.assign({}, e[n][1].start)
                                                    },
                                                    a = [
                                                        ["enter", i, t],
                                                        ["enter", e[r][1], t],
                                                        ["exit", e[r][1], t],
                                                        ["enter", o, t]
                                                    ];
                                                (0, D.d)(a, a.length, 0, (0, R.C)(t.parser.constructs.insideSpan.null, e.slice(r + 1, n), t)), (0, D.d)(a, a.length, 0, [
                                                    ["exit", o, t],
                                                    ["enter", e[n][1], t],
                                                    ["exit", e[n][1], t],
                                                    ["exit", i, t]
                                                ]), (0, D.d)(e, r - 1, n - r + 3, a), n = r + a.length - 2;
                                                break
                                            }
                                    }
                                for (n = -1; ++n < e.length;) "strikethroughSequenceTemporary" === e[n][1].type && (e[n][1].type = "data");
                                return e
                            }
                        };
                    return null == t && (t = !0), {
                        text: {
                            126: n
                        },
                        insideSpan: {
                            null: [n]
                        },
                        attentionMarkers: {
                            null: [126]
                        }
                    }
                }(e), F, B])), o("fromMarkdownExtensions", [G, {
                    enter: {
                        gfmFootnoteDefinition: function(e) {
                            this.enter({
                                type: "footnoteDefinition",
                                identifier: "",
                                label: "",
                                children: []
                            }, e)
                        },
                        gfmFootnoteDefinitionLabelString: function() {
                            this.buffer()
                        },
                        gfmFootnoteCall: function(e) {
                            this.enter({
                                type: "footnoteReference",
                                identifier: "",
                                label: ""
                            }, e)
                        },
                        gfmFootnoteCallString: function() {
                            this.buffer()
                        }
                    },
                    exit: {
                        gfmFootnoteDefinition: function(e) {
                            this.exit(e)
                        },
                        gfmFootnoteDefinitionLabelString: function(e) {
                            let t = this.resume(),
                                n = this.stack[this.stack.length - 1];
                            n.label = t, n.identifier = (0, S.d)(this.sliceSerialize(e)).toLowerCase()
                        },
                        gfmFootnoteCall: function(e) {
                            this.exit(e)
                        },
                        gfmFootnoteCallString: function(e) {
                            let t = this.resume(),
                                n = this.stack[this.stack.length - 1];
                            n.label = t, n.identifier = (0, S.d)(this.sliceSerialize(e)).toLowerCase()
                        }
                    }
                }, eg, ex, eS]), o("toMarkdownExtensions", {
                    extensions: [X, function() {
                        return e.peek = function() {
                            return "["
                        }, {
                            unsafe: [{
                                character: "[",
                                inConstruct: ["phrasing", "label", "reference"]
                            }],
                            handlers: {
                                footnoteDefinition: function(e, t, n, r) {
                                    let i = er(r),
                                        o = i.move("[^"),
                                        a = n.enter("footnoteDefinition"),
                                        l = n.enter("label");
                                    return o += i.move(eu(n, en(e), { ...i.current(),
                                        before: o,
                                        after: "]"
                                    })), l(), o += i.move("]:" + (e.children && e.children.length > 0 ? " " : "")), i.shift(4), o += i.move(ea(ei(e, n, i.current()), function(e, t, n) {
                                        return t ? (n ? "" : "    ") + e : e
                                    })), a(), o
                                },
                                footnoteReference: e
                            }
                        };

                        function e(e, t, n, r) {
                            let i = er(r),
                                o = i.move("[^"),
                                a = n.enter("footnoteReference"),
                                l = n.enter("reference");
                            return o += i.move(eu(n, en(e), { ...i.current(),
                                before: o,
                                after: "]"
                            })), l(), a(), o += i.move("]")
                        }
                    }(), em, function(e) {
                        let t = e || {},
                            n = t.tableCellPadding,
                            r = t.tablePipeAlign,
                            i = t.stringLength,
                            o = n ? " " : "|";
                        return {
                            unsafe: [{
                                character: "\r",
                                inConstruct: "tableCell"
                            }, {
                                character: "\n",
                                inConstruct: "tableCell"
                            }, {
                                atBreak: !0,
                                character: "|",
                                after: "[	 :-]"
                            }, {
                                character: "|",
                                inConstruct: "tableCell"
                            }, {
                                atBreak: !0,
                                character: ":",
                                after: "-"
                            }, {
                                atBreak: !0,
                                character: "-",
                                after: "[:|-]"
                            }],
                            handlers: {
                                table: function(e, t, n, r) {
                                    return l(function(e, t, n) {
                                        let r = e.children,
                                            i = -1,
                                            o = [],
                                            a = t.enter("table");
                                        for (; ++i < r.length;) o[i] = s(r[i], t, n);
                                        return a(), o
                                    }(e, n, r), e.align)
                                },
                                tableRow: function(e, t, n, r) {
                                    let i = s(e, n, r),
                                        o = l([i]);
                                    return o.slice(0, o.indexOf("\n"))
                                },
                                tableCell: a,
                                inlineCode: function(e, t, n) {
                                    let r = eb(e, t, n);
                                    return n.stack.includes("tableCell") && (r = r.replace(/\|/g, "\\$&")), r
                                }
                            }
                        };

                        function a(e, t, n, r) {
                            let i = n.enter("tableCell"),
                                a = n.enter("phrasing"),
                                l = ep(e, n, { ...r,
                                    before: o,
                                    after: o
                                });
                            return a(), i(), l
                        }

                        function l(e, t) {
                            return function(e, t = {}) {
                                let n = (t.align || []).concat(),
                                    r = t.stringLength || ev,
                                    i = [],
                                    o = [],
                                    a = [],
                                    l = [],
                                    s = 0,
                                    c = -1;
                                for (; ++c < e.length;) {
                                    let u = [],
                                        d = [],
                                        f = -1;
                                    for (e[c].length > s && (s = e[c].length); ++f < e[c].length;) {
                                        let p = ey(e[c][f]);
                                        if (!1 !== t.alignDelimiters) {
                                            let g = r(p);
                                            d[f] = g, (void 0 === l[f] || g > l[f]) && (l[f] = g)
                                        }
                                        u.push(p)
                                    }
                                    o[c] = u, a[c] = d
                                }
                                let m = -1;
                                if ("object" == typeof n && "length" in n)
                                    for (; ++m < s;) i[m] = ek(n[m]);
                                else {
                                    let h = ek(n);
                                    for (; ++m < s;) i[m] = h
                                }
                                m = -1;
                                let b = [],
                                    y = [];
                                for (; ++m < s;) {
                                    let v = i[m],
                                        k = "",
                                        x = "";
                                    99 === v ? (k = ":", x = ":") : 108 === v ? k = ":" : 114 === v && (x = ":");
                                    let _ = !1 === t.alignDelimiters ? 1 : Math.max(1, l[m] - k.length - x.length),
                                        w = k + "-".repeat(_) + x;
                                    !1 !== t.alignDelimiters && ((_ = k.length + _ + x.length) > l[m] && (l[m] = _), y[m] = _), b[m] = w
                                }
                                o.splice(1, 0, b), a.splice(1, 0, y), c = -1;
                                let E = [];
                                for (; ++c < o.length;) {
                                    let S = o[c],
                                        N = a[c];
                                    m = -1;
                                    let C = [];
                                    for (; ++m < s;) {
                                        let O = S[m] || "",
                                            A = "",
                                            T = "";
                                        if (!1 !== t.alignDelimiters) {
                                            let M = l[m] - (N[m] || 0),
                                                I = i[m];
                                            114 === I ? A = " ".repeat(M) : 99 === I ? M % 2 ? (A = " ".repeat(M / 2 + .5), T = " ".repeat(M / 2 - .5)) : T = A = " ".repeat(M / 2) : T = " ".repeat(M)
                                        }!1 === t.delimiterStart || m || C.push("|"), !1 !== t.padding && !(!1 === t.alignDelimiters && "" === O) && (!1 !== t.delimiterStart || m) && C.push(" "), !1 !== t.alignDelimiters && C.push(A), C.push(O), !1 !== t.alignDelimiters && C.push(T), !1 !== t.padding && C.push(" "), (!1 !== t.delimiterEnd || m !== s - 1) && C.push("|")
                                    }
                                    E.push(!1 === t.delimiterEnd ? C.join("").replace(/ +$/, "") : C.join(""))
                                }
                                return E.join("\n")
                            }(e, {
                                align: t,
                                alignDelimiters: r,
                                padding: n,
                                stringLength: i
                            })
                        }

                        function s(e, t, n) {
                            let r = e.children,
                                i = -1,
                                o = [],
                                l = t.enter("tableRow");
                            for (; ++i < r.length;) o[i] = a(r[i], e, t, n);
                            return l(), o
                        }
                    }(e), eN]
                })
            }
        },
        36943: function(e, t, n) {
            "use strict";
            n.d(t, {
                O: function() {
                    return r
                }
            });
            let r = function(e) {
                var t, n;
                if (null == e) return o;
                if ("string" == typeof e) {
                    return t = e, i(function(e) {
                        return e && e.type === t
                    })
                }
                if ("object" == typeof e) {
                    return Array.isArray(e) ? function(e) {
                        let t = [],
                            n = -1;
                        for (; ++n < e.length;) t[n] = r(e[n]);
                        return i(function(...e) {
                            let n = -1;
                            for (; ++n < t.length;)
                                if (t[n].call(this, ...e)) return !0;
                            return !1
                        })
                    }(e) : (n = e, i(function(e) {
                        let t;
                        for (t in n)
                            if (e[t] !== n[t]) return !1;
                        return !0
                    }))
                }
                if ("function" == typeof e) return i(e);
                throw Error("Expected function, string, or object as test")
            };

            function i(e) {
                return function(...t) {
                    return Boolean(e.call(this, ...t))
                }
            }

            function o() {
                return !0
            }
        },
        72900: function(e, t, n) {
            "use strict";
            n.d(t, {
                S4: function() {
                    return i
                }
            });
            var r = n(36943);
            let i = function(e, t, n, i) {
                "function" == typeof t && "function" != typeof n && (i = n, n = t, t = null);
                let o = (0, r.O)(t),
                    a = i ? -1 : 1;
                (function e(r, l, s) {
                    let c = "object" == typeof r && null !== r ? r : {},
                        u;
                    if ("string" == typeof c.type) {
                        var d;
                        u = "string" == typeof c.tagName ? c.tagName : "string" == typeof c.name ? c.name : void 0, Object.defineProperty(f, "name", {
                            value: "node (" + (d = c.type + (u ? "<" + u + ">" : "")) + ")"
                        })
                    }
                    return f;

                    function f() {
                        var c;
                        let u = [],
                            d, f, p;
                        if ((!t || o(r, l, s[s.length - 1] || null)) && !1 === (c = n(r, s), u = Array.isArray(c) ? c : "number" == typeof c ? [!0, c] : [c])[0]) return u;
                        if (r.children && "skip" !== u[0])
                            for (f = (i ? r.children.length : -1) + a, p = s.concat(r); f > -1 && f < r.children.length;) {
                                if (!1 === (d = e(r.children[f], f, p)())[0]) return d;
                                f = "number" == typeof d[1] ? d[1] : f + a
                            }
                        return u
                    }
                })(e, null, [])()
            }
        },
        20539: function(e, t, n) {
            "use strict";
            n.d(t, {
                Vn: function() {
                    return i
                }
            });
            var r = n(72900);
            let i = function(e, t, n, i) {
                "function" == typeof t && "function" != typeof n && (i = n, n = t, t = null), (0, r.S4)(e, t, function(e, t) {
                    let r = t[t.length - 1];
                    return n(e, r ? r.children.indexOf(e) : null, r)
                }, i)
            }
        }
    }
]);