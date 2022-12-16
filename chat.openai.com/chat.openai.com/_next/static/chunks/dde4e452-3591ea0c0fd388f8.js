"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [861], {
        79153: function(e) {
            var t, r, i, o = {
                DEBUG: !1,
                LIB_VERSION: "2.45.0"
            };
            if ("undefined" == typeof window) {
                var n = {
                    hostname: ""
                };
                t = {
                    navigator: {
                        userAgent: ""
                    },
                    document: {
                        location: n,
                        referrer: ""
                    },
                    screen: {
                        width: 0,
                        height: 0
                    },
                    location: n
                }
            } else t = window;
            var s, a, c, p, u, _, h, f, l, d, g, y, m, v, b, k = Array.prototype,
                x = Function.prototype,
                q = Object.prototype,
                w = k.slice,
                S = q.toString,
                E = q.hasOwnProperty,
                O = t.console,
                I = t.navigator,
                D = t.document,
                A = t.opera,
                T = t.screen,
                B = I.userAgent,
                U = x.bind,
                $ = k.forEach,
                C = k.indexOf,
                N = k.map,
                j = Array.isArray,
                M = {},
                P = {
                    trim: function(e) {
                        return e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "")
                    }
                },
                F = {
                    log: function() {
                        if (o.DEBUG && !P.isUndefined(O) && O) try {
                            O.log.apply(O, arguments)
                        } catch (e) {
                            P.each(arguments, function(e) {
                                O.log(e)
                            })
                        }
                    },
                    warn: function() {
                        if (o.DEBUG && !P.isUndefined(O) && O) {
                            var e = ["Mixpanel warning:"].concat(P.toArray(arguments));
                            try {
                                O.warn.apply(O, e)
                            } catch (t) {
                                P.each(e, function(e) {
                                    O.warn(e)
                                })
                            }
                        }
                    },
                    error: function() {
                        if (o.DEBUG && !P.isUndefined(O) && O) {
                            var e = ["Mixpanel error:"].concat(P.toArray(arguments));
                            try {
                                O.error.apply(O, e)
                            } catch (t) {
                                P.each(e, function(e) {
                                    O.error(e)
                                })
                            }
                        }
                    },
                    critical: function() {
                        if (!P.isUndefined(O) && O) {
                            var e = ["Mixpanel error:"].concat(P.toArray(arguments));
                            try {
                                O.error.apply(O, e)
                            } catch (t) {
                                P.each(e, function(e) {
                                    O.error(e)
                                })
                            }
                        }
                    }
                },
                R = function(e, t) {
                    return function() {
                        return arguments[0] = "[" + t + "] " + arguments[0], e.apply(F, arguments)
                    }
                },
                z = function(e) {
                    return {
                        log: R(F.log, e),
                        error: R(F.error, e),
                        critical: R(F.critical, e)
                    }
                };
            P.bind = function(e, t) {
                var r, i;
                if (U && e.bind === U) return U.apply(e, w.call(arguments, 1));
                if (!P.isFunction(e)) throw TypeError();
                return r = w.call(arguments, 2), i = function() {
                    if (!(this instanceof i)) return e.apply(t, r.concat(w.call(arguments)));
                    var o = {};
                    o.prototype = e.prototype;
                    var n = new o;
                    o.prototype = null;
                    var s = e.apply(n, r.concat(w.call(arguments)));
                    return Object(s) === s ? s : n
                }
            }, P.each = function(e, t, r) {
                if (null != e) {
                    if ($ && e.forEach === $) e.forEach(t, r);
                    else if (e.length === +e.length) {
                        for (var i = 0, o = e.length; i < o; i++)
                            if (i in e && t.call(r, e[i], i, e) === M) return
                    } else
                        for (var n in e)
                            if (E.call(e, n) && t.call(r, e[n], n, e) === M) return
                }
            }, P.extend = function(e) {
                return P.each(w.call(arguments, 1), function(t) {
                    for (var r in t) void 0 !== t[r] && (e[r] = t[r])
                }), e
            }, P.isArray = j || function(e) {
                return "[object Array]" === S.call(e)
            }, P.isFunction = function(e) {
                try {
                    return /^\s*\bfunction\b/.test(e)
                } catch (t) {
                    return !1
                }
            }, P.isArguments = function(e) {
                return !!(e && E.call(e, "callee"))
            }, P.toArray = function(e) {
                return e ? e.toArray ? e.toArray() : P.isArray(e) || P.isArguments(e) ? w.call(e) : P.values(e) : []
            }, P.map = function(e, t, r) {
                if (N && e.map === N) return e.map(t, r);
                var i = [];
                return P.each(e, function(e) {
                    i.push(t.call(r, e))
                }), i
            }, P.keys = function(e) {
                var t = [];
                return null === e || P.each(e, function(e, r) {
                    t[t.length] = r
                }), t
            }, P.values = function(e) {
                var t = [];
                return null === e || P.each(e, function(e) {
                    t[t.length] = e
                }), t
            }, P.include = function(e, t) {
                var r = !1;
                return null === e ? r : C && e.indexOf === C ? -1 != e.indexOf(t) : (P.each(e, function(e) {
                    if (r || (r = e === t)) return M
                }), r)
            }, P.includes = function(e, t) {
                return -1 !== e.indexOf(t)
            }, P.inherit = function(e, t) {
                return e.prototype = new t, e.prototype.constructor = e, e.superclass = t.prototype, e
            }, P.isObject = function(e) {
                return e === Object(e) && !P.isArray(e)
            }, P.isEmptyObject = function(e) {
                if (P.isObject(e)) {
                    for (var t in e)
                        if (E.call(e, t)) return !1;
                    return !0
                }
                return !1
            }, P.isUndefined = function(e) {
                return void 0 === e
            }, P.isString = function(e) {
                return "[object String]" == S.call(e)
            }, P.isDate = function(e) {
                return "[object Date]" == S.call(e)
            }, P.isNumber = function(e) {
                return "[object Number]" == S.call(e)
            }, P.isElement = function(e) {
                return !!(e && 1 === e.nodeType)
            }, P.encodeDates = function(e) {
                return P.each(e, function(t, r) {
                    P.isDate(t) ? e[r] = P.formatDate(t) : P.isObject(t) && (e[r] = P.encodeDates(t))
                }), e
            }, P.timestamp = function() {
                return Date.now = Date.now || function() {
                    return +new Date
                }, Date.now()
            }, P.formatDate = function(e) {
                function t(e) {
                    return e < 10 ? "0" + e : e
                }
                return e.getUTCFullYear() + "-" + t(e.getUTCMonth() + 1) + "-" + t(e.getUTCDate()) + "T" + t(e.getUTCHours()) + ":" + t(e.getUTCMinutes()) + ":" + t(e.getUTCSeconds())
            }, P.strip_empty_properties = function(e) {
                var t = {};
                return P.each(e, function(e, r) {
                    P.isString(e) && e.length > 0 && (t[r] = e)
                }), t
            }, P.truncate = function(e, t) {
                var r;
                return "string" == typeof e ? r = e.slice(0, t) : P.isArray(e) ? (r = [], P.each(e, function(e) {
                    r.push(P.truncate(e, t))
                })) : P.isObject(e) ? (r = {}, P.each(e, function(e, i) {
                    r[i] = P.truncate(e, t)
                })) : r = e, r
            }, P.JSONEncode = function(e) {
                var t = function(e) {
                        var t = /[\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,
                            r = {
                                "\b": "\\b",
                                "	": "\\t",
                                "\n": "\\n",
                                "\f": "\\f",
                                "\r": "\\r",
                                '"': '\\"',
                                "\\": "\\\\"
                            };
                        return t.lastIndex = 0, t.test(e) ? '"' + e.replace(t, function(e) {
                            var t = r[e];
                            return "string" == typeof t ? t : "\\u" + ("0000" + e.charCodeAt(0).toString(16)).slice(-4)
                        }) + '"' : '"' + e + '"'
                    },
                    r = function(e, i) {
                        var o = "",
                            n = 0,
                            s = "",
                            a = "",
                            c = 0,
                            p = o,
                            u = [],
                            _ = i[e];
                        switch (_ && "object" == typeof _ && "function" == typeof _.toJSON && (_ = _.toJSON(e)), typeof _) {
                            case "string":
                                return t(_);
                            case "number":
                                return isFinite(_) ? String(_) : "null";
                            case "boolean":
                            case "null":
                                return String(_);
                            case "object":
                                if (!_) return "null";
                                if (o += "    ", u = [], "[object Array]" === S.apply(_)) {
                                    for (n = 0, c = _.length; n < c; n += 1) u[n] = r(n, _) || "null";
                                    return a = 0 === u.length ? "[]" : o ? "[\n" + o + u.join(",\n" + o) + "\n" + p + "]" : "[" + u.join(",") + "]", o = p, a
                                }
                                for (s in _) E.call(_, s) && (a = r(s, _)) && u.push(t(s) + (o ? ": " : ":") + a);
                                return a = 0 === u.length ? "{}" : o ? "{" + u.join(",") + p + "}" : "{" + u.join(",") + "}", o = p, a
                        }
                    };
                return r("", {
                    "": e
                })
            }, P.JSONDecode = (u = {
                '"': '"',
                "\\": "\\",
                "/": "/",
                b: "\b",
                f: "\f",
                n: "\n",
                r: "\r",
                t: "	"
            }, _ = function(e) {
                var t = SyntaxError(e);
                throw t.at = s, t.text = c, t
            }, h = function(e) {
                return e && e !== a && _("Expected '" + e + "' instead of '" + a + "'"), a = c.charAt(s), s += 1, a
            }, f = function() {
                var e, t = "";
                for ("-" === a && (t = "-", h("-")); a >= "0" && a <= "9";) t += a, h();
                if ("." === a)
                    for (t += "."; h() && a >= "0" && a <= "9";) t += a;
                if ("e" === a || "E" === a)
                    for (t += a, h(), ("-" === a || "+" === a) && (t += a, h()); a >= "0" && a <= "9";) t += a, h();
                if (isFinite(e = +t)) return e;
                _("Bad number")
            }, l = function() {
                var e, t, r, i = "";
                if ('"' === a)
                    for (; h();) {
                        if ('"' === a) return h(), i;
                        if ("\\" === a) {
                            if (h(), "u" === a) {
                                for (t = 0, r = 0; t < 4 && (e = parseInt(h(), 16), isFinite(e)); t += 1) r = 16 * r + e;
                                i += String.fromCharCode(r)
                            } else if ("string" == typeof u[a]) i += u[a];
                            else break
                        } else i += a
                    }
                _("Bad string")
            }, d = function() {
                for (; a && a <= " ";) h()
            }, g = function() {
                switch (a) {
                    case "t":
                        return h("t"), h("r"), h("u"), h("e"), !0;
                    case "f":
                        return h("f"), h("a"), h("l"), h("s"), h("e"), !1;
                    case "n":
                        return h("n"), h("u"), h("l"), h("l"), null
                }
                _('Unexpected "' + a + '"')
            }, y = function() {
                var e = [];
                if ("[" === a) {
                    if (h("["), d(), "]" === a) return h("]"), e;
                    for (; a;) {
                        if (e.push(p()), d(), "]" === a) return h("]"), e;
                        h(","), d()
                    }
                }
                _("Bad array")
            }, m = function() {
                var e, t = {};
                if ("{" === a) {
                    if (h("{"), d(), "}" === a) return h("}"), t;
                    for (; a;) {
                        if (e = l(), d(), h(":"), Object.hasOwnProperty.call(t, e) && _('Duplicate key "' + e + '"'), t[e] = p(), d(), "}" === a) return h("}"), t;
                        h(","), d()
                    }
                }
                _("Bad object")
            }, p = function() {
                switch (d(), a) {
                    case "{":
                        return m();
                    case "[":
                        return y();
                    case '"':
                        return l();
                    case "-":
                        return f();
                    default:
                        return a >= "0" && a <= "9" ? f() : g()
                }
            }, function(e) {
                var t;
                return c = e, s = 0, a = " ", t = p(), d(), a && _("Syntax error"), t
            }), P.base64Encode = function(e) {
                var t, r, i, o, n, s, a, c, p = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
                    u = 0,
                    _ = 0,
                    h = "",
                    f = [];
                if (!e) return e;
                e = P.utf8Encode(e);
                do t = e.charCodeAt(u++), o = (c = t << 16 | (r = e.charCodeAt(u++)) << 8 | e.charCodeAt(u++)) >> 18 & 63, n = c >> 12 & 63, s = c >> 6 & 63, a = 63 & c, f[_++] = p.charAt(o) + p.charAt(n) + p.charAt(s) + p.charAt(a); while (u < e.length);
                switch (h = f.join(""), e.length % 3) {
                    case 1:
                        h = h.slice(0, -2) + "==";
                        break;
                    case 2:
                        h = h.slice(0, -1) + "="
                }
                return h
            }, P.utf8Encode = function(e) {
                e = (e + "").replace(/\r\n/g, "\n").replace(/\r/g, "\n");
                var t, r, i, o = "",
                    n = 0;
                for (i = 0, t = r = 0, n = e.length; i < n; i++) {
                    var s = e.charCodeAt(i),
                        a = null;
                    s < 128 ? r++ : a = s > 127 && s < 2048 ? String.fromCharCode(s >> 6 | 192, 63 & s | 128) : String.fromCharCode(s >> 12 | 224, s >> 6 & 63 | 128, 63 & s | 128), null !== a && (r > t && (o += e.substring(t, r)), o += a, t = r = i + 1)
                }
                return r > t && (o += e.substring(t, e.length)), o
            }, P.UUID = (v = function() {
                for (var e = 1 * new Date, t = 0; e == 1 * new Date;) t++;
                return e.toString(16) + t.toString(16)
            }, b = function() {
                var e, t, r = [],
                    i = 0;

                function o(e, t) {
                    var i, o = 0;
                    for (i = 0; i < t.length; i++) o |= r[i] << 8 * i;
                    return e ^ o
                }
                for (e = 0; e < B.length; e++) t = B.charCodeAt(e), r.unshift(255 & t), r.length >= 4 && (i = o(i, r), r = []);
                return r.length > 0 && (i = o(i, r)), i.toString(16)
            }, function() {
                var e = (T.height * T.width).toString(16);
                return v() + "-" + Math.random().toString(16).replace(".", "") + "-" + b() + "-" + e + "-" + v()
            });
            var L = ["ahrefsbot", "baiduspider", "bingbot", "bingpreview", "facebookexternal", "petalbot", "pinterest", "screaming frog", "yahoo! slurp", "yandexbot", "adsbot-google", "apis-google", "duplexweb-google", "feedfetcher-google", "google favicon", "google web preview", "google-read-aloud", "googlebot", "googleweblight", "mediapartners-google", "storebot-google"];
            P.isBlockedUA = function(e) {
                var t;
                for (t = 0, e = e.toLowerCase(); t < L.length; t++)
                    if (-1 !== e.indexOf(L[t])) return !0;
                return !1
            }, P.HTTPBuildQuery = function(e, t) {
                var r, i, o = [];
                return P.isUndefined(t) && (t = "&"), P.each(e, function(e, t) {
                    r = encodeURIComponent(e.toString()), i = encodeURIComponent(t), o[o.length] = i + "=" + r
                }), o.join(t)
            }, P.getQueryParam = function(e, t) {
                var r = RegExp("[\\?&]" + (t = t.replace(/[[]/, "\\[").replace(/[\]]/, "\\]")) + "=([^&#]*)").exec(e);
                if (null === r || r && "string" != typeof r[1] && r[1].length) return "";
                var i = r[1];
                try {
                    i = decodeURIComponent(i)
                } catch (o) {
                    F.error("Skipping decoding for malformed query param: " + i)
                }
                return i.replace(/\+/g, " ")
            }, P.cookie = {
                get: function(e) {
                    for (var t = e + "=", r = D.cookie.split(";"), i = 0; i < r.length; i++) {
                        for (var o = r[i];
                            " " == o.charAt(0);) o = o.substring(1, o.length);
                        if (0 === o.indexOf(t)) return decodeURIComponent(o.substring(t.length, o.length))
                    }
                    return null
                },
                parse: function(e) {
                    var t;
                    try {
                        t = P.JSONDecode(P.cookie.get(e)) || {}
                    } catch (r) {}
                    return t
                },
                set_seconds: function(e, t, r, i, o, n, s) {
                    var a = "",
                        c = "",
                        p = "";
                    if (s) a = "; domain=" + s;
                    else if (i) {
                        var u = W(D.location.hostname);
                        a = u ? "; domain=." + u : ""
                    }
                    if (r) {
                        var _ = new Date;
                        _.setTime(_.getTime() + 1e3 * r), c = "; expires=" + _.toGMTString()
                    }
                    n && (o = !0, p = "; SameSite=None"), o && (p += "; secure"), D.cookie = e + "=" + encodeURIComponent(t) + c + "; path=/" + a + p
                },
                set: function(e, t, r, i, o, n, s) {
                    var a = "",
                        c = "",
                        p = "";
                    if (s) a = "; domain=" + s;
                    else if (i) {
                        var u = W(D.location.hostname);
                        a = u ? "; domain=." + u : ""
                    }
                    if (r) {
                        var _ = new Date;
                        _.setTime(_.getTime() + 864e5 * r), c = "; expires=" + _.toGMTString()
                    }
                    n && (o = !0, p = "; SameSite=None"), o && (p += "; secure");
                    var h = e + "=" + encodeURIComponent(t) + c + "; path=/" + a + p;
                    return D.cookie = h, h
                },
                remove: function(e, t, r) {
                    P.cookie.set(e, "", -1, t, !1, !1, r)
                }
            };
            var J = null,
                Q = function(e, t) {
                    if (null !== J && !t) return J;
                    var r = !0;
                    try {
                        e = e || window.localStorage;
                        var i = "__mplss_" + K(8);
                        e.setItem(i, "xyz"), "xyz" !== e.getItem(i) && (r = !1), e.removeItem(i)
                    } catch (o) {
                        r = !1
                    }
                    return J = r, r
                };
            P.localStorage = {
                is_supported: function(e) {
                    var t = Q(null, e);
                    return t || F.error("localStorage unsupported; falling back to cookie store"), t
                },
                error: function(e) {
                    F.error("localStorage error: " + e)
                },
                get: function(e) {
                    try {
                        return window.localStorage.getItem(e)
                    } catch (t) {
                        P.localStorage.error(t)
                    }
                    return null
                },
                parse: function(e) {
                    try {
                        return P.JSONDecode(P.localStorage.get(e)) || {}
                    } catch (t) {}
                    return null
                },
                set: function(e, t) {
                    try {
                        window.localStorage.setItem(e, t)
                    } catch (r) {
                        P.localStorage.error(r)
                    }
                },
                remove: function(e) {
                    try {
                        window.localStorage.removeItem(e)
                    } catch (t) {
                        P.localStorage.error(t)
                    }
                }
            }, P.register_event = function() {
                var e = function(e, r, i, o, n) {
                    if (!e) {
                        F.error("No valid element provided to register_event");
                        return
                    }
                    if (e.addEventListener && !o) e.addEventListener(r, i, !!n);
                    else {
                        var s, a, c, p = "on" + r,
                            u = e[p];
                        e[p] = (s = e, a = i, c = u, function(e) {
                            if (e = e || t(window.event)) {
                                var r, i, o = !0;
                                return P.isFunction(c) && (r = c(e)), i = a.call(s, e), (!1 === r || !1 === i) && (o = !1), o
                            }
                        })
                    }
                };

                function t(e) {
                    return e && (e.preventDefault = t.preventDefault, e.stopPropagation = t.stopPropagation), e
                }
                return t.preventDefault = function() {
                    this.returnValue = !1
                }, t.stopPropagation = function() {
                    this.cancelBubble = !0
                }, e
            }();
            var H = RegExp('^(\\w*)\\[(\\w+)([=~\\|\\^\\$\\*]?)=?"?([^\\]"]*)"?\\]$');
            P.dom_query = function() {
                function e(e) {
                    return e.all ? e.all : e.getElementsByTagName("*")
                }
                var t = /[\t\r\n]/g;

                function r(e, r) {
                    return (" " + e.className + " ").replace(t, " ").indexOf(" " + r + " ") >= 0
                }

                function i(t) {
                    if (!D.getElementsByTagName) return [];
                    var i = t.split(" "),
                        o = [D];
                    for (l = 0; l < i.length; l++) {
                        if ((p = i[l].replace(/^\s+/, "").replace(/\s+$/, "")).indexOf("#") > -1) {
                            _ = (u = p.split("#"))[0];
                            var n = u[1],
                                s = D.getElementById(n);
                            if (!s || _ && s.nodeName.toLowerCase() != _) return [];
                            o = [s];
                            continue
                        }
                        if (p.indexOf(".") > -1) {
                            _ = (u = p.split("."))[0];
                            var a = u[1];
                            for (_ || (_ = "*"), h = [], f = 0, d = 0; d < o.length; d++)
                                for (g = 0, y = "*" == _ ? e(o[d]) : o[d].getElementsByTagName(_); g < y.length; g++) h[f++] = y[g];
                            for (d = 0, o = [], m = 0; d < h.length; d++) h[d].className && P.isString(h[d].className) && r(h[d], a) && (o[m++] = h[d]);
                            continue
                        }
                        var c = p.match(H);
                        if (c) {
                            _ = c[1];
                            var p, u, _, h, f, l, d, g, y, m, v, b = c[2],
                                k = c[3],
                                x = c[4];
                            for (_ || (_ = "*"), h = [], f = 0, d = 0; d < o.length; d++)
                                for (g = 0, y = "*" == _ ? e(o[d]) : o[d].getElementsByTagName(_); g < y.length; g++) h[f++] = y[g];
                            switch (o = [], m = 0, k) {
                                case "=":
                                    v = function(e) {
                                        return e.getAttribute(b) == x
                                    };
                                    break;
                                case "~":
                                    v = function(e) {
                                        return e.getAttribute(b).match(RegExp("\\b" + x + "\\b"))
                                    };
                                    break;
                                case "|":
                                    v = function(e) {
                                        return e.getAttribute(b).match(RegExp("^" + x + "-?"))
                                    };
                                    break;
                                case "^":
                                    v = function(e) {
                                        return 0 === e.getAttribute(b).indexOf(x)
                                    };
                                    break;
                                case "$":
                                    v = function(e) {
                                        return e.getAttribute(b).lastIndexOf(x) == e.getAttribute(b).length - x.length
                                    };
                                    break;
                                case "*":
                                    v = function(e) {
                                        return e.getAttribute(b).indexOf(x) > -1
                                    };
                                    break;
                                default:
                                    v = function(e) {
                                        return e.getAttribute(b)
                                    }
                            }
                            for (d = 0, o = [], m = 0; d < h.length; d++) v(h[d]) && (o[m++] = h[d]);
                            continue
                        }
                        for (d = 0, _ = p, h = [], f = 0; d < o.length; d++)
                            for (g = 0, y = o[d].getElementsByTagName(_); g < y.length; g++) h[f++] = y[g];
                        o = h
                    }
                    return o
                }
                return function(e) {
                    return P.isElement(e) ? [e] : P.isObject(e) && !P.isUndefined(e.length) ? e : i.call(this, e)
                }
            }(), P.info = {
                campaignParams: function() {
                    var e = "utm_source utm_medium utm_campaign utm_content utm_term".split(" "),
                        t = "",
                        r = {};
                    return P.each(e, function(e) {
                        (t = P.getQueryParam(D.URL, e)).length && (r[e] = t)
                    }), r
                },
                searchEngine: function(e) {
                    return 0 === e.search("https?://(.*)google.([^/?]*)") ? "google" : 0 === e.search("https?://(.*)bing.com") ? "bing" : 0 === e.search("https?://(.*)yahoo.com") ? "yahoo" : 0 === e.search("https?://(.*)duckduckgo.com") ? "duckduckgo" : null
                },
                searchInfo: function(e) {
                    var t = P.info.searchEngine(e),
                        r = {};
                    if (null !== t) {
                        r.$search_engine = t;
                        var i = P.getQueryParam(e, "yahoo" != t ? "q" : "p");
                        i.length && (r.mp_keyword = i)
                    }
                    return r
                },
                browser: function(e, t, r) {
                    if (t = t || "", r || P.includes(e, " OPR/")) return P.includes(e, "Mini") ? "Opera Mini" : "Opera";
                    if (/(BlackBerry|PlayBook|BB10)/i.test(e)) return "BlackBerry";
                    if (P.includes(e, "IEMobile") || P.includes(e, "WPDesktop")) return "Internet Explorer Mobile";
                    if (P.includes(e, "SamsungBrowser/")) return "Samsung Internet";
                    if (P.includes(e, "Edge") || P.includes(e, "Edg/")) return "Microsoft Edge";
                    else if (P.includes(e, "FBIOS")) return "Facebook Mobile";
                    else if (P.includes(e, "Chrome")) return "Chrome";
                    else if (P.includes(e, "CriOS")) return "Chrome iOS";
                    else if (P.includes(e, "UCWEB") || P.includes(e, "UCBrowser")) return "UC Browser";
                    else if (P.includes(e, "FxiOS")) return "Firefox iOS";
                    else if (P.includes(t, "Apple")) return P.includes(e, "Mobile") ? "Mobile Safari" : "Safari";
                    else if (P.includes(e, "Android")) return "Android Mobile";
                    else if (P.includes(e, "Konqueror")) return "Konqueror";
                    else if (P.includes(e, "Firefox")) return "Firefox";
                    else if (P.includes(e, "MSIE") || P.includes(e, "Trident/")) return "Internet Explorer";
                    else if (P.includes(e, "Gecko")) return "Mozilla";
                    else return ""
                },
                browserVersion: function(e, t, r) {
                    var i, o = {
                        "Internet Explorer Mobile": /rv:(\d+(\.\d+)?)/,
                        "Microsoft Edge": /Edge?\/(\d+(\.\d+)?)/,
                        Chrome: /Chrome\/(\d+(\.\d+)?)/,
                        "Chrome iOS": /CriOS\/(\d+(\.\d+)?)/,
                        "UC Browser": /(UCBrowser|UCWEB)\/(\d+(\.\d+)?)/,
                        Safari: /Version\/(\d+(\.\d+)?)/,
                        "Mobile Safari": /Version\/(\d+(\.\d+)?)/,
                        Opera: /(Opera|OPR)\/(\d+(\.\d+)?)/,
                        Firefox: /Firefox\/(\d+(\.\d+)?)/,
                        "Firefox iOS": /FxiOS\/(\d+(\.\d+)?)/,
                        Konqueror: /Konqueror:(\d+(\.\d+)?)/,
                        BlackBerry: /BlackBerry (\d+(\.\d+)?)/,
                        "Android Mobile": /android\s(\d+(\.\d+)?)/,
                        "Samsung Internet": /SamsungBrowser\/(\d+(\.\d+)?)/,
                        "Internet Explorer": /(rv:|MSIE )(\d+(\.\d+)?)/,
                        Mozilla: /rv:(\d+(\.\d+)?)/
                    }[P.info.browser(e, t, r)];
                    if (void 0 === o) return null;
                    var n = e.match(o);
                    return n ? parseFloat(n[n.length - 2]) : null
                },
                os: function() {
                    if (/Windows/i.test(B)) return /Phone/.test(B) || /WPDesktop/.test(B) ? "Windows Phone" : "Windows";
                    if (/(iPhone|iPad|iPod)/.test(B)) return "iOS";
                    if (/Android/.test(B)) return "Android";
                    if (/(BlackBerry|PlayBook|BB10)/i.test(B)) return "BlackBerry";
                    if (/Mac/i.test(B)) return "Mac OS X";
                    else if (/Linux/.test(B)) return "Linux";
                    else if (/CrOS/.test(B)) return "Chrome OS";
                    else return ""
                },
                device: function(e) {
                    if (/Windows Phone/i.test(e) || /WPDesktop/.test(e)) return "Windows Phone";
                    if (/iPad/.test(e)) return "iPad";
                    if (/iPod/.test(e)) return "iPod Touch";
                    if (/iPhone/.test(e)) return "iPhone";
                    if (/(BlackBerry|PlayBook|BB10)/i.test(e)) return "BlackBerry";
                    else if (/Android/.test(e)) return "Android";
                    else return ""
                },
                referringDomain: function(e) {
                    var t = e.split("/");
                    return t.length >= 3 ? t[2] : ""
                },
                properties: function() {
                    return P.extend(P.strip_empty_properties({
                        $os: P.info.os(),
                        $browser: P.info.browser(B, I.vendor, A),
                        $referrer: D.referrer,
                        $referring_domain: P.info.referringDomain(D.referrer),
                        $device: P.info.device(B)
                    }), {
                        $current_url: t.location.href,
                        $browser_version: P.info.browserVersion(B, I.vendor, A),
                        $screen_height: T.height,
                        $screen_width: T.width,
                        mp_lib: "web",
                        $lib_version: o.LIB_VERSION,
                        $insert_id: K(),
                        time: P.timestamp() / 1e3
                    })
                },
                people_properties: function() {
                    return P.extend(P.strip_empty_properties({
                        $os: P.info.os(),
                        $browser: P.info.browser(B, I.vendor, A)
                    }), {
                        $browser_version: P.info.browserVersion(B, I.vendor, A)
                    })
                },
                pageviewInfo: function(e) {
                    return P.strip_empty_properties({
                        mp_page: e,
                        mp_referrer: D.referrer,
                        mp_browser: P.info.browser(B, I.vendor, A),
                        mp_platform: P.info.os()
                    })
                }
            };
            var K = function(e) {
                    var t = Math.random().toString(36).substring(2, 10) + Math.random().toString(36).substring(2, 10);
                    return e ? t.substring(0, e) : t
                },
                G = /[a-z0-9][a-z0-9-]*\.[a-z]+$/i,
                V = /[a-z0-9][a-z0-9-]+\.[a-z.]{2,6}$/i,
                W = function(e) {
                    var t = V,
                        r = e.split("."),
                        i = r[r.length - 1];
                    (i.length > 4 || "com" === i || "org" === i) && (t = G);
                    var o = e.match(t);
                    return o ? o[0] : ""
                },
                X = null,
                Y = null;
            "undefined" != typeof JSON && (X = JSON.stringify, Y = JSON.parse), X = X || P.JSONEncode, Y = Y || P.JSONDecode, P.toArray = P.toArray, P.isObject = P.isObject, P.JSONEncode = P.JSONEncode, P.JSONDecode = P.JSONDecode, P.isBlockedUA = P.isBlockedUA, P.isEmptyObject = P.isEmptyObject, P.info = P.info, P.info.device = P.info.device, P.info.browser = P.info.browser, P.info.browserVersion = P.info.browserVersion, P.info.properties = P.info.properties;
            var Z = function() {};
            Z.prototype.create_properties = function() {}, Z.prototype.event_handler = function() {}, Z.prototype.after_track_handler = function() {}, Z.prototype.init = function(e) {
                return this.mp = e, this
            }, Z.prototype.track = function(e, t, r, i) {
                var o = this,
                    n = P.dom_query(e);
                if (0 === n.length) {
                    F.error("The DOM query (" + e + ") returned 0 elements");
                    return
                }
                return P.each(n, function(e) {
                    P.register_event(e, this.override_event, function(e) {
                        var n = {},
                            s = o.create_properties(r, this),
                            a = o.mp.get_config("track_links_timeout");
                        o.event_handler(e, this, n), window.setTimeout(o.track_callback(i, s, n, !0), a), o.mp.track(t, s, o.track_callback(i, s, n))
                    })
                }, this), !0
            }, Z.prototype.track_callback = function(e, t, r, i) {
                i = i || !1;
                var o = this;
                return function() {
                    if (!r.callback_fired) r.callback_fired = !0, (!e || !1 !== e(i, t)) && o.after_track_handler(t, r, i)
                }
            }, Z.prototype.create_properties = function(e, t) {
                var r;
                return "function" == typeof e ? e(t) : P.extend({}, e)
            };
            var ee = function() {
                this.override_event = "click"
            };
            P.inherit(ee, Z), ee.prototype.create_properties = function(e, t) {
                var r = ee.superclass.create_properties.apply(this, arguments);
                return t.href && (r.url = t.href), r
            }, ee.prototype.event_handler = function(e, t, r) {
                r.new_tab = 2 === e.which || e.metaKey || e.ctrlKey || "_blank" === t.target, r.href = t.href, r.new_tab || e.preventDefault()
            }, ee.prototype.after_track_handler = function(e, t) {
                !t.new_tab && setTimeout(function() {
                    window.location = t.href
                }, 0)
            };
            var et = function() {
                this.override_event = "submit"
            };
            P.inherit(et, Z), et.prototype.event_handler = function(e, t, r) {
                r.element = t, e.preventDefault()
            }, et.prototype.after_track_handler = function(e, t) {
                setTimeout(function() {
                    t.element.submit()
                }, 0)
            };
            var er = z("lock"),
                ei = function(e, t) {
                    t = t || {}, this.storageKey = e, this.storage = t.storage || window.localStorage, this.pollIntervalMS = t.pollIntervalMS || 100, this.timeoutMS = t.timeoutMS || 2e3
                };
            ei.prototype.withLock = function(e, t, r) {
                r || "function" == typeof t || (r = t, t = null);
                var i = r || new Date().getTime() + "|" + Math.random(),
                    o = new Date().getTime(),
                    n = this.storageKey,
                    s = this.pollIntervalMS,
                    a = this.timeoutMS,
                    c = this.storage,
                    p = n + ":X",
                    u = n + ":Y",
                    _ = n + ":Z",
                    h = function(e) {
                        t && t(e)
                    },
                    f = function(e) {
                        if (new Date().getTime() - o > a) {
                            er.error("Timeout waiting for mutex on " + n + "; clearing lock. [" + i + "]"), c.removeItem(_), c.removeItem(u), g();
                            return
                        }
                        setTimeout(function() {
                            try {
                                e()
                            } catch (t) {
                                h(t)
                            }
                        }, s * (Math.random() + .1))
                    },
                    l = function(e, t) {
                        e() ? t() : f(function() {
                            l(e, t)
                        })
                    },
                    d = function() {
                        var e = c.getItem(u);
                        if (e && e !== i) return !1;
                        if (c.setItem(u, i), c.getItem(u) === i) return !0;
                        if (!Q(c, !0)) throw Error("localStorage support dropped while acquiring lock");
                        return !1
                    },
                    g = function() {
                        c.setItem(p, i), l(d, function() {
                            if (c.getItem(p) === i) {
                                y();
                                return
                            }
                            f(function() {
                                if (c.getItem(u) !== i) {
                                    g();
                                    return
                                }
                                l(function() {
                                    return !c.getItem(_)
                                }, y)
                            })
                        })
                    },
                    y = function() {
                        c.setItem(_, "1");
                        try {
                            e()
                        } finally {
                            c.removeItem(_), c.getItem(u) === i && c.removeItem(u), c.getItem(p) === i && c.removeItem(p)
                        }
                    };
                try {
                    if (Q(c, !0)) g();
                    else throw Error("localStorage support check failed")
                } catch (m) {
                    h(m)
                }
            };
            var eo = z("batch"),
                en = function(e, t) {
                    t = t || {}, this.storageKey = e, this.storage = t.storage || window.localStorage, this.reportError = t.errorReporter || P.bind(eo.error, eo), this.lock = new ei(e, {
                        storage: this.storage
                    }), this.pid = t.pid || null, this.memQueue = []
                };
            en.prototype.enqueue = function(e, t, r) {
                var i = {
                    id: K(),
                    flushAfter: new Date().getTime() + 2 * t,
                    payload: e
                };
                this.lock.withLock(P.bind(function() {
                    var t;
                    try {
                        var o = this.readFromStorage();
                        o.push(i), (t = this.saveToStorage(o)) && this.memQueue.push(i)
                    } catch (n) {
                        this.reportError("Error enqueueing item", e), t = !1
                    }
                    r && r(t)
                }, this), P.bind(function(e) {
                    this.reportError("Error acquiring storage lock", e), r && r(!1)
                }, this), this.pid)
            }, en.prototype.fillBatch = function(e) {
                var t = this.memQueue.slice(0, e);
                if (t.length < e) {
                    var r = this.readFromStorage();
                    if (r.length) {
                        var i = {};
                        P.each(t, function(e) {
                            i[e.id] = !0
                        });
                        for (var o = 0; o < r.length; o++) {
                            var n = r[o];
                            if (new Date().getTime() > n.flushAfter && !i[n.id] && (n.orphaned = !0, t.push(n), t.length >= e)) break
                        }
                    }
                }
                return t
            };
            var es = function(e, t) {
                var r = [];
                return P.each(e, function(e) {
                    e.id && !t[e.id] && r.push(e)
                }), r
            };
            en.prototype.removeItemsByID = function(e, t) {
                var r = {};
                P.each(e, function(e) {
                    r[e] = !0
                }), this.memQueue = es(this.memQueue, r);
                var i = P.bind(function() {
                    var t;
                    try {
                        var i = this.readFromStorage();
                        if (i = es(i, r), t = this.saveToStorage(i)) {
                            i = this.readFromStorage();
                            for (var o = 0; o < i.length; o++) {
                                var n = i[o];
                                if (n.id && r[n.id]) return this.reportError("Item not removed from storage"), !1
                            }
                        }
                    } catch (s) {
                        this.reportError("Error removing items", e), t = !1
                    }
                    return t
                }, this);
                this.lock.withLock(function() {
                    var e = i();
                    t && t(e)
                }, P.bind(function(e) {
                    var r = !1;
                    if (this.reportError("Error acquiring storage lock", e), !Q(this.storage, !0) && !(r = i())) try {
                        this.storage.removeItem(this.storageKey)
                    } catch (o) {
                        this.reportError("Error clearing queue", o)
                    }
                    t && t(r)
                }, this), this.pid)
            };
            var ea = function(e, t) {
                var r = [];
                return P.each(e, function(e) {
                    var i = e.id;
                    if (i in t) {
                        var o = t[i];
                        null !== o && (e.payload = o, r.push(e))
                    } else r.push(e)
                }), r
            };
            en.prototype.updatePayloads = function(e, t) {
                this.memQueue = ea(this.memQueue, e), this.lock.withLock(P.bind(function() {
                    var r;
                    try {
                        var i = this.readFromStorage();
                        i = ea(i, e), r = this.saveToStorage(i)
                    } catch (o) {
                        this.reportError("Error updating items", e), r = !1
                    }
                    t && t(r)
                }, this), P.bind(function(e) {
                    this.reportError("Error acquiring storage lock", e), t && t(!1)
                }, this), this.pid)
            }, en.prototype.readFromStorage = function() {
                var e;
                try {
                    (e = this.storage.getItem(this.storageKey)) && (e = Y(e), P.isArray(e) || (this.reportError("Invalid storage entry:", e), e = null))
                } catch (t) {
                    this.reportError("Error retrieving queue", t), e = null
                }
                return e || []
            }, en.prototype.saveToStorage = function(e) {
                try {
                    return this.storage.setItem(this.storageKey, X(e)), !0
                } catch (t) {
                    return this.reportError("Error saving queue", t), !1
                }
            }, en.prototype.clear = function() {
                this.memQueue = [], this.storage.removeItem(this.storageKey)
            };
            var ec = z("batch"),
                ep = function(e, t) {
                    this.errorReporter = t.errorReporter, this.queue = new en(e, {
                        errorReporter: P.bind(this.reportError, this),
                        storage: t.storage
                    }), this.libConfig = t.libConfig, this.sendRequest = t.sendRequestFunc, this.beforeSendHook = t.beforeSendHook, this.stopAllBatching = t.stopAllBatchingFunc, this.batchSize = this.libConfig.batch_size, this.flushInterval = this.libConfig.batch_flush_interval_ms, this.stopped = !this.libConfig.batch_autostart, this.consecutiveRemovalFailures = 0
                };

            function eu(e, t) {
                ek(!0, e, t)
            }

            function e_(e, t) {
                ek(!1, e, t)
            }

            function eh(e, t) {
                return "1" === eb(e, t)
            }

            function ef(e, r) {
                if (function(e) {
                        if (e && e.ignoreDnt) return !1;
                        var r = e && e.window || t,
                            i = r.navigator || {},
                            o = !1;
                        return P.each([i.doNotTrack, i.msDoNotTrack, r.doNotTrack], function(e) {
                            P.includes([!0, 1, "1", "yes"], e) && (o = !0)
                        }), o
                    }(r)) return F.warn('This browser has "Do Not Track" enabled. This will prevent the Mixpanel SDK from sending any data. To ignore the "Do Not Track" browser setting, initialize the Mixpanel instance with the config "ignore_dnt: true"'), !0;
                var i = "0" === eb(e, r);
                return i && F.warn("You are opted out of Mixpanel tracking. This will prevent the Mixpanel SDK from sending any data."), i
            }

            function el(e) {
                return ex(e, function(e) {
                    return this.get_config(e)
                })
            }

            function ed(e) {
                return ex(e, function(e) {
                    return this._get_config(e)
                })
            }

            function eg(e) {
                return ex(e, function(e) {
                    return this._get_config(e)
                })
            }

            function ey(e, t) {
                em(t = t || {}).remove(ev(e, t), !!t.crossSubdomainCookie, t.cookieDomain)
            }

            function em(e) {
                return "localStorage" === (e = e || {}).persistenceType ? P.localStorage : P.cookie
            }

            function ev(e, t) {
                return ((t = t || {}).persistencePrefix || "__mp_opt_in_out_") + e
            }

            function eb(e, t) {
                return em(t).get(ev(e, t))
            }

            function ek(e, t, r) {
                if (!P.isString(t) || !t.length) {
                    F.error("gdpr." + (e ? "optIn" : "optOut") + " called with an invalid token");
                    return
                }
                em(r = r || {}).set(ev(t, r), e ? 1 : 0, P.isNumber(r.cookieExpiration) ? r.cookieExpiration : null, !!r.crossSubdomainCookie, !!r.secureCookie, !!r.crossSiteCookie, r.cookieDomain), r.track && e && r.track(r.trackEventName || "$opt_in", r.trackProperties, {
                    send_immediately: !0
                })
            }

            function ex(e, t) {
                return function() {
                    var r = !1;
                    try {
                        var i = t.call(this, "token"),
                            o = t.call(this, "ignore_dnt"),
                            n = t.call(this, "opt_out_tracking_persistence_type"),
                            s = t.call(this, "opt_out_tracking_cookie_prefix"),
                            a = t.call(this, "window");
                        i && (r = ef(i, {
                            ignoreDnt: o,
                            persistenceType: n,
                            persistencePrefix: s,
                            window: a
                        }))
                    } catch (c) {
                        F.error("Unexpected error when checking tracking opt-out status: " + c)
                    }
                    if (!r) return e.apply(this, arguments);
                    var p = arguments[arguments.length - 1];
                    "function" == typeof p && p(0)
                }
            }
            ep.prototype.enqueue = function(e, t) {
                this.queue.enqueue(e, this.flushInterval, t)
            }, ep.prototype.start = function() {
                this.stopped = !1, this.consecutiveRemovalFailures = 0, this.flush()
            }, ep.prototype.stop = function() {
                this.stopped = !0, this.timeoutID && (clearTimeout(this.timeoutID), this.timeoutID = null)
            }, ep.prototype.clear = function() {
                this.queue.clear()
            }, ep.prototype.resetBatchSize = function() {
                this.batchSize = this.libConfig.batch_size
            }, ep.prototype.resetFlush = function() {
                this.scheduleFlush(this.libConfig.batch_flush_interval_ms)
            }, ep.prototype.scheduleFlush = function(e) {
                this.flushInterval = e, this.stopped || (this.timeoutID = setTimeout(P.bind(this.flush, this), this.flushInterval))
            }, ep.prototype.flush = function(e) {
                try {
                    if (this.requestInProgress) {
                        ec.log("Flush: Request already in progress");
                        return
                    }
                    e = e || {};
                    var t = this.libConfig.batch_request_timeout_ms,
                        r = new Date().getTime(),
                        i = this.batchSize,
                        o = this.queue.fillBatch(i),
                        n = [],
                        s = {};
                    if (P.each(o, function(e) {
                            var t = e.payload;
                            this.beforeSendHook && !e.orphaned && (t = this.beforeSendHook(t)), t && n.push(t), s[e.id] = t
                        }, this), n.length < 1) {
                        this.resetFlush();
                        return
                    }
                    this.requestInProgress = !0;
                    var a = P.bind(function(n) {
                            this.requestInProgress = !1;
                            try {
                                var a = !1;
                                if (e.unloading) this.queue.updatePayloads(s);
                                else if (P.isObject(n) && "timeout" === n.error && new Date().getTime() - r >= t) this.reportError("Network timeout; retrying"), this.flush();
                                else if (P.isObject(n) && n.xhr_req && (n.xhr_req.status >= 500 || 429 === n.xhr_req.status || "timeout" === n.error)) {
                                    var c = 2 * this.flushInterval,
                                        p = n.xhr_req.responseHeaders;
                                    if (p) {
                                        var u = p["Retry-After"];
                                        u && (c = 1e3 * parseInt(u, 10) || c)
                                    }
                                    c = Math.min(6e5, c), this.reportError("Error; retry in " + c + " ms"), this.scheduleFlush(c)
                                } else P.isObject(n) && n.xhr_req && 413 === n.xhr_req.status ? o.length > 1 ? (this.batchSize = Math.min(this.batchSize, Math.max(1, Math.floor(i / 2)), o.length - 1), this.reportError("413 response; reducing batch size to " + this.batchSize), this.resetFlush()) : (this.reportError("Single-event request too large; dropping", o), this.resetBatchSize(), a = !0) : a = !0;
                                a && this.queue.removeItemsByID(P.map(o, function(e) {
                                    return e.id
                                }), P.bind(function(e) {
                                    e ? (this.consecutiveRemovalFailures = 0, this.flush()) : (this.reportError("Failed to remove items from queue"), ++this.consecutiveRemovalFailures > 5 ? (this.reportError("Too many queue failures; disabling batching system."), this.stopAllBatching()) : this.resetFlush())
                                }, this))
                            } catch (_) {
                                this.reportError("Error handling API response", _), this.resetFlush()
                            }
                        }, this),
                        c = {
                            method: "POST",
                            verbose: !0,
                            ignore_json_errors: !0,
                            timeout_ms: t
                        };
                    e.unloading && (c.transport = "sendBeacon"), ec.log("MIXPANEL REQUEST:", n), this.sendRequest(n, c, a)
                } catch (p) {
                    this.reportError("Error flushing request queue", p), this.resetFlush()
                }
            }, ep.prototype.reportError = function(e, t) {
                if (ec.error.apply(ec.error, arguments), this.errorReporter) try {
                    t instanceof Error || (t = Error(e)), this.errorReporter(e, t)
                } catch (r) {
                    ec.error(r)
                }
            };
            var eq = "$set",
                ew = "$set_once",
                eS = "$unset",
                eE = "$add",
                eO = "$append",
                eI = "$union",
                eD = "$remove",
                eA = {
                    set_action: function(e, t) {
                        var r = {},
                            i = {};
                        return P.isObject(e) ? P.each(e, function(e, t) {
                            this._is_reserved_property(t) || (i[t] = e)
                        }, this) : i[e] = t, r[eq] = i, r
                    },
                    unset_action: function(e) {
                        var t = {},
                            r = [];
                        return P.isArray(e) || (e = [e]), P.each(e, function(e) {
                            this._is_reserved_property(e) || r.push(e)
                        }, this), t[eS] = r, t
                    },
                    set_once_action: function(e, t) {
                        var r = {},
                            i = {};
                        return P.isObject(e) ? P.each(e, function(e, t) {
                            this._is_reserved_property(t) || (i[t] = e)
                        }, this) : i[e] = t, r[ew] = i, r
                    },
                    union_action: function(e, t) {
                        var r = {},
                            i = {};
                        return P.isObject(e) ? P.each(e, function(e, t) {
                            this._is_reserved_property(t) || (i[t] = P.isArray(e) ? e : [e])
                        }, this) : i[e] = P.isArray(t) ? t : [t], r[eI] = i, r
                    },
                    append_action: function(e, t) {
                        var r = {},
                            i = {};
                        return P.isObject(e) ? P.each(e, function(e, t) {
                            this._is_reserved_property(t) || (i[t] = e)
                        }, this) : i[e] = t, r[eO] = i, r
                    },
                    remove_action: function(e, t) {
                        var r = {},
                            i = {};
                        return P.isObject(e) ? P.each(e, function(e, t) {
                            this._is_reserved_property(t) || (i[t] = e)
                        }, this) : i[e] = t, r[eD] = i, r
                    },
                    delete_action: function() {
                        var e = {};
                        return e.$delete = "", e
                    }
                },
                eT = function() {};
            P.extend(eT.prototype, eA), eT.prototype._init = function(e, t, r) {
                this._mixpanel = e, this._group_key = t, this._group_id = r
            }, eT.prototype.set = eg(function(e, t, r) {
                var i = this.set_action(e, t);
                return P.isObject(e) && (r = t), this._send_request(i, r)
            }), eT.prototype.set_once = eg(function(e, t, r) {
                var i = this.set_once_action(e, t);
                return P.isObject(e) && (r = t), this._send_request(i, r)
            }), eT.prototype.unset = eg(function(e, t) {
                var r = this.unset_action(e);
                return this._send_request(r, t)
            }), eT.prototype.union = eg(function(e, t, r) {
                P.isObject(e) && (r = t);
                var i = this.union_action(e, t);
                return this._send_request(i, r)
            }), eT.prototype.delete = eg(function(e) {
                var t = this.delete_action();
                return this._send_request(t, e)
            }), eT.prototype.remove = eg(function(e, t, r) {
                var i = this.remove_action(e, t);
                return this._send_request(i, r)
            }), eT.prototype._send_request = function(e, t) {
                e.$group_key = this._group_key, e.$group_id = this._group_id, e.$token = this._get_config("token");
                var r = P.encodeDates(e);
                return this._mixpanel._track_or_batch({
                    type: "groups",
                    data: r,
                    endpoint: this._get_config("api_host") + "/groups/",
                    batcher: this._mixpanel.request_batchers.groups
                }, t)
            }, eT.prototype._is_reserved_property = function(e) {
                return "$group_key" === e || "$group_id" === e
            }, eT.prototype._get_config = function(e) {
                return this._mixpanel.get_config(e)
            }, eT.prototype.toString = function() {
                return this._mixpanel.toString() + ".group." + this._group_key + "." + this._group_id
            }, eT.prototype.remove = eT.prototype.remove, eT.prototype.set = eT.prototype.set, eT.prototype.set_once = eT.prototype.set_once, eT.prototype.union = eT.prototype.union, eT.prototype.unset = eT.prototype.unset, eT.prototype.toString = eT.prototype.toString;
            var eB = function() {};
            P.extend(eB.prototype, eA), eB.prototype._init = function(e) {
                this._mixpanel = e
            }, eB.prototype.set = ed(function(e, t, r) {
                var i = this.set_action(e, t);
                return P.isObject(e) && (r = t), this._get_config("save_referrer") && this._mixpanel.persistence.update_referrer_info(document.referrer), i[eq] = P.extend({}, P.info.people_properties(), this._mixpanel.persistence.get_referrer_info(), i[eq]), this._send_request(i, r)
            }), eB.prototype.set_once = ed(function(e, t, r) {
                var i = this.set_once_action(e, t);
                return P.isObject(e) && (r = t), this._send_request(i, r)
            }), eB.prototype.unset = ed(function(e, t) {
                var r = this.unset_action(e);
                return this._send_request(r, t)
            }), eB.prototype.increment = ed(function(e, t, r) {
                var i = {},
                    o = {};
                return P.isObject(e) ? (P.each(e, function(e, t) {
                    if (!this._is_reserved_property(t)) {
                        if (isNaN(parseFloat(e))) {
                            F.error("Invalid increment value passed to mixpanel.people.increment - must be a number");
                            return
                        }
                        o[t] = e
                    }
                }, this), r = t) : (P.isUndefined(t) && (t = 1), o[e] = t), i[eE] = o, this._send_request(i, r)
            }), eB.prototype.append = ed(function(e, t, r) {
                P.isObject(e) && (r = t);
                var i = this.append_action(e, t);
                return this._send_request(i, r)
            }), eB.prototype.remove = ed(function(e, t, r) {
                P.isObject(e) && (r = t);
                var i = this.remove_action(e, t);
                return this._send_request(i, r)
            }), eB.prototype.union = ed(function(e, t, r) {
                P.isObject(e) && (r = t);
                var i = this.union_action(e, t);
                return this._send_request(i, r)
            }), eB.prototype.track_charge = ed(function(e, t, r) {
                if (!P.isNumber(e) && isNaN(e = parseFloat(e))) {
                    F.error("Invalid value passed to mixpanel.people.track_charge - must be a number");
                    return
                }
                return this.append("$transactions", P.extend({
                    $amount: e
                }, t), r)
            }), eB.prototype.clear_charges = function(e) {
                return this.set("$transactions", [], e)
            }, eB.prototype.delete_user = function() {
                if (!this._identify_called()) {
                    F.error("mixpanel.people.delete_user() requires you to call identify() first");
                    return
                }
                var e = {
                    $delete: this._mixpanel.get_distinct_id()
                };
                return this._send_request(e)
            }, eB.prototype.toString = function() {
                return this._mixpanel.toString() + ".people"
            }, eB.prototype._send_request = function(e, t) {
                e.$token = this._get_config("token"), e.$distinct_id = this._mixpanel.get_distinct_id();
                var r = this._mixpanel.get_property("$device_id"),
                    i = this._mixpanel.get_property("$user_id"),
                    o = this._mixpanel.get_property("$had_persisted_distinct_id");
                r && (e.$device_id = r), i && (e.$user_id = i), o && (e.$had_persisted_distinct_id = o);
                var n = P.encodeDates(e);
                return this._identify_called() ? this._mixpanel._track_or_batch({
                    type: "people",
                    data: n,
                    endpoint: this._get_config("api_host") + "/engage/",
                    batcher: this._mixpanel.request_batchers.people
                }, t) : (this._enqueue(e), P.isUndefined(t) || t(this._get_config("verbose") ? {
                    status: -1,
                    error: null
                } : -1), P.truncate(n, 255))
            }, eB.prototype._get_config = function(e) {
                return this._mixpanel.get_config(e)
            }, eB.prototype._identify_called = function() {
                return !0 === this._mixpanel._flags.identify_called
            }, eB.prototype._enqueue = function(e) {
                eq in e ? this._mixpanel.persistence._add_to_people_queue(eq, e) : ew in e ? this._mixpanel.persistence._add_to_people_queue(ew, e) : eS in e ? this._mixpanel.persistence._add_to_people_queue(eS, e) : eE in e ? this._mixpanel.persistence._add_to_people_queue(eE, e) : eO in e ? this._mixpanel.persistence._add_to_people_queue(eO, e) : eD in e ? this._mixpanel.persistence._add_to_people_queue(eD, e) : eI in e ? this._mixpanel.persistence._add_to_people_queue(eI, e) : F.error("Invalid call to _enqueue():", e)
            }, eB.prototype._flush_one_queue = function(e, t, r, i) {
                var o = this,
                    n = P.extend({}, this._mixpanel.persistence._get_queue(e)),
                    s = n;
                !P.isUndefined(n) && P.isObject(n) && !P.isEmptyObject(n) && (o._mixpanel.persistence._pop_from_people_queue(e, n), i && (s = i(n)), t.call(o, s, function(t, i) {
                    0 === t && o._mixpanel.persistence._add_to_people_queue(e, n), P.isUndefined(r) || r(t, i)
                }))
            }, eB.prototype._flush = function(e, t, r, i, o, n, s) {
                var a = this,
                    c = this._mixpanel.persistence._get_queue(eO),
                    p = this._mixpanel.persistence._get_queue(eD);
                if (this._flush_one_queue(eq, this.set, e), this._flush_one_queue(ew, this.set_once, i), this._flush_one_queue(eS, this.unset, n, function(e) {
                        return P.keys(e)
                    }), this._flush_one_queue(eE, this.increment, t), this._flush_one_queue(eI, this.union, o), !P.isUndefined(c) && P.isArray(c) && c.length) {
                    for (var u, _ = function(e, t) {
                            0 === e && a._mixpanel.persistence._add_to_people_queue(eO, u), P.isUndefined(r) || r(e, t)
                        }, h = c.length - 1; h >= 0; h--) u = c.pop(), P.isEmptyObject(u) || a.append(u, _);
                    a._mixpanel.persistence.save()
                }
                if (!P.isUndefined(p) && P.isArray(p) && p.length) {
                    for (var f, l = function(e, t) {
                            0 === e && a._mixpanel.persistence._add_to_people_queue(eD, f), P.isUndefined(s) || s(e, t)
                        }, d = p.length - 1; d >= 0; d--) f = p.pop(), P.isEmptyObject(f) || a.remove(f, l);
                    a._mixpanel.persistence.save()
                }
            }, eB.prototype._is_reserved_property = function(e) {
                return "$distinct_id" === e || "$token" === e || "$device_id" === e || "$user_id" === e || "$had_persisted_distinct_id" === e
            }, eB.prototype.set = eB.prototype.set, eB.prototype.set_once = eB.prototype.set_once, eB.prototype.unset = eB.prototype.unset, eB.prototype.increment = eB.prototype.increment, eB.prototype.append = eB.prototype.append, eB.prototype.remove = eB.prototype.remove, eB.prototype.union = eB.prototype.union, eB.prototype.track_charge = eB.prototype.track_charge, eB.prototype.clear_charges = eB.prototype.clear_charges, eB.prototype.delete_user = eB.prototype.delete_user, eB.prototype.toString = eB.prototype.toString;
            var eU = "__mps",
                e$ = "__mpso",
                eC = "__mpus",
                eN = "__mpa",
                ej = "__mpap",
                eM = "__mpr",
                eP = "__mpu",
                eF = "$people_distinct_id",
                eR = "__alias",
                ez = "__timers",
                eL = [eU, e$, eC, eN, ej, eM, eP, eF, eR, ez],
                eJ = function(e) {
                    this.props = {}, this.campaign_params_saved = !1, e.persistence_name ? this.name = "mp_" + e.persistence_name : this.name = "mp_" + e.token + "_mixpanel";
                    var t = e.persistence;
                    "cookie" !== t && "localStorage" !== t && (F.critical("Unknown persistence type " + t + "; falling back to cookie"), t = e.persistence = "cookie"), "localStorage" === t && P.localStorage.is_supported() ? this.storage = P.localStorage : this.storage = P.cookie, this.load(), this.update_config(e), this.upgrade(e), this.save()
                };
            eJ.prototype.properties = function() {
                var e = {};
                return P.each(this.props, function(t, r) {
                    P.include(eL, r) || (e[r] = t)
                }), e
            }, eJ.prototype.load = function() {
                if (!this.disabled) {
                    var e = this.storage.parse(this.name);
                    e && (this.props = P.extend({}, e))
                }
            }, eJ.prototype.upgrade = function(e) {
                var t, r, i = e.upgrade;
                i && (t = "mp_super_properties", "string" == typeof i && (t = i), r = this.storage.parse(t), this.storage.remove(t), this.storage.remove(t, !0), r && (this.props = P.extend(this.props, r.all, r.events))), !e.cookie_name && "mixpanel" !== e.name && (t = "mp_" + e.token + "_" + e.name, (r = this.storage.parse(t)) && (this.storage.remove(t), this.storage.remove(t, !0), this.register_once(r))), this.storage === P.localStorage && (r = P.cookie.parse(this.name), P.cookie.remove(this.name), P.cookie.remove(this.name, !0), r && this.register_once(r))
            }, eJ.prototype.save = function() {
                !this.disabled && this.storage.set(this.name, P.JSONEncode(this.props), this.expire_days, this.cross_subdomain, this.secure, this.cross_site, this.cookie_domain)
            }, eJ.prototype.remove = function() {
                this.storage.remove(this.name, !1, this.cookie_domain), this.storage.remove(this.name, !0, this.cookie_domain)
            }, eJ.prototype.clear = function() {
                this.remove(), this.props = {}
            }, eJ.prototype.register_once = function(e, t, r) {
                return !!P.isObject(e) && (void 0 === t && (t = "None"), this.expire_days = void 0 === r ? this.default_expiry : r, P.each(e, function(e, r) {
                    this.props.hasOwnProperty(r) && this.props[r] !== t || (this.props[r] = e)
                }, this), this.save(), !0)
            }, eJ.prototype.register = function(e, t) {
                return !!P.isObject(e) && (this.expire_days = void 0 === t ? this.default_expiry : t, P.extend(this.props, e), this.save(), !0)
            }, eJ.prototype.unregister = function(e) {
                e in this.props && (delete this.props[e], this.save())
            }, eJ.prototype.update_campaign_params = function() {
                this.campaign_params_saved || (this.register_once(P.info.campaignParams()), this.campaign_params_saved = !0)
            }, eJ.prototype.update_search_keyword = function(e) {
                this.register(P.info.searchInfo(e))
            }, eJ.prototype.update_referrer_info = function(e) {
                this.register_once({
                    $initial_referrer: e || "$direct",
                    $initial_referring_domain: P.info.referringDomain(e) || "$direct"
                }, "")
            }, eJ.prototype.get_referrer_info = function() {
                return P.strip_empty_properties({
                    $initial_referrer: this.props.$initial_referrer,
                    $initial_referring_domain: this.props.$initial_referring_domain
                })
            }, eJ.prototype.safe_merge = function(e) {
                return P.each(this.props, function(t, r) {
                    r in e || (e[r] = t)
                }), e
            }, eJ.prototype.update_config = function(e) {
                this.default_expiry = this.expire_days = e.cookie_expiration, this.set_disabled(e.disable_persistence), this.set_cookie_domain(e.cookie_domain), this.set_cross_site(e.cross_site_cookie), this.set_cross_subdomain(e.cross_subdomain_cookie), this.set_secure(e.secure_cookie)
            }, eJ.prototype.set_disabled = function(e) {
                this.disabled = e, this.disabled ? this.remove() : this.save()
            }, eJ.prototype.set_cookie_domain = function(e) {
                e !== this.cookie_domain && (this.remove(), this.cookie_domain = e, this.save())
            }, eJ.prototype.set_cross_site = function(e) {
                e !== this.cross_site && (this.cross_site = e, this.remove(), this.save())
            }, eJ.prototype.set_cross_subdomain = function(e) {
                e !== this.cross_subdomain && (this.cross_subdomain = e, this.remove(), this.save())
            }, eJ.prototype.get_cross_subdomain = function() {
                return this.cross_subdomain
            }, eJ.prototype.set_secure = function(e) {
                e !== this.secure && (this.secure = !!e, this.remove(), this.save())
            }, eJ.prototype._add_to_people_queue = function(e, t) {
                var r = this._get_queue_key(e),
                    i = t[e],
                    o = this._get_or_create_queue(eq),
                    n = this._get_or_create_queue(ew),
                    s = this._get_or_create_queue(eS),
                    a = this._get_or_create_queue(eE),
                    c = this._get_or_create_queue(eI),
                    p = this._get_or_create_queue(eD, []),
                    u = this._get_or_create_queue(eO, []);
                r === eU ? (P.extend(o, i), this._pop_from_people_queue(eE, i), this._pop_from_people_queue(eI, i), this._pop_from_people_queue(eS, i)) : r === e$ ? (P.each(i, function(e, t) {
                    t in n || (n[t] = e)
                }), this._pop_from_people_queue(eS, i)) : r === eC ? P.each(i, function(e) {
                    P.each([o, n, a, c], function(t) {
                        e in t && delete t[e]
                    }), P.each(u, function(t) {
                        e in t && delete t[e]
                    }), s[e] = !0
                }) : r === eN ? (P.each(i, function(e, t) {
                    t in o ? o[t] += e : (t in a || (a[t] = 0), a[t] += e)
                }, this), this._pop_from_people_queue(eS, i)) : r === eP ? (P.each(i, function(e, t) {
                    P.isArray(e) && (t in c || (c[t] = []), c[t] = c[t].concat(e))
                }), this._pop_from_people_queue(eS, i)) : r === eM ? (p.push(i), this._pop_from_people_queue(eO, i)) : r === ej && (u.push(i), this._pop_from_people_queue(eS, i)), F.log("MIXPANEL PEOPLE REQUEST (QUEUED, PENDING IDENTIFY):"), F.log(t), this.save()
            }, eJ.prototype._pop_from_people_queue = function(e, t) {
                var r = this._get_queue(e);
                P.isUndefined(r) || (P.each(t, function(t, i) {
                    e === eO || e === eD ? P.each(r, function(e) {
                        e[i] === t && delete e[i]
                    }) : delete r[i]
                }, this), this.save())
            }, eJ.prototype._get_queue_key = function(e) {
                if (e === eq) return eU;
                if (e === ew) return e$;
                if (e === eS) return eC;
                if (e === eE) return eN;
                if (e === eO) return ej;
                if (e === eD) return eM;
                if (e === eI) return eP;
                F.error("Invalid queue:", e)
            }, eJ.prototype._get_queue = function(e) {
                return this.props[this._get_queue_key(e)]
            }, eJ.prototype._get_or_create_queue = function(e, t) {
                var r = this._get_queue_key(e);
                return t = P.isUndefined(t) ? {} : t, this.props[r] || (this.props[r] = t)
            }, eJ.prototype.set_event_timer = function(e, t) {
                var r = this.props[ez] || {};
                r[e] = t, this.props[ez] = r, this.save()
            }, eJ.prototype.remove_event_timer = function(e) {
                var t = (this.props[ez] || {})[e];
                return P.isUndefined(t) || (delete this.props[ez][e], this.save()), t
            };
            var eQ = function(e) {
                    return e
                },
                eH = function() {},
                eK = "mixpanel",
                eG = "base64",
                eV = t.XMLHttpRequest && "withCredentials" in new XMLHttpRequest,
                eW = !eV && -1 === B.indexOf("MSIE") && -1 === B.indexOf("Mozilla"),
                eX = null;
            I.sendBeacon && (eX = function() {
                return I.sendBeacon.apply(I, arguments)
            });
            var eY = {
                    api_host: "https://api-js.mixpanel.com",
                    api_method: "POST",
                    api_transport: "XHR",
                    api_payload_format: eG,
                    app_host: "https://mixpanel.com",
                    cdn: "https://cdn.mxpnl.com",
                    cross_site_cookie: !1,
                    cross_subdomain_cookie: !0,
                    error_reporter: eH,
                    persistence: "cookie",
                    persistence_name: "",
                    cookie_domain: "",
                    cookie_name: "",
                    loaded: eH,
                    store_google: !0,
                    save_referrer: !0,
                    test: !1,
                    verbose: !1,
                    img: !1,
                    debug: !1,
                    track_links_timeout: 300,
                    cookie_expiration: 365,
                    upgrade: !1,
                    disable_persistence: !1,
                    disable_cookie: !1,
                    secure_cookie: !1,
                    ip: !0,
                    opt_out_tracking_by_default: !1,
                    opt_out_persistence_by_default: !1,
                    opt_out_tracking_persistence_type: "localStorage",
                    opt_out_tracking_cookie_prefix: null,
                    property_blacklist: [],
                    xhr_headers: {},
                    ignore_dnt: !1,
                    batch_requests: !0,
                    batch_size: 50,
                    batch_flush_interval_ms: 5e3,
                    batch_request_timeout_ms: 9e4,
                    batch_autostart: !0,
                    hooks: {}
                },
                eZ = !1,
                e0 = function() {},
                e1 = function(e, t, n) {
                    var s, a = n === eK ? i : i[n];
                    if (a && 0 === r) s = a;
                    else {
                        if (a && !P.isArray(a)) {
                            F.error("You have already initialized " + n);
                            return
                        }
                        s = new e0
                    }
                    return s._cached_groups = {}, s._init(e, t, n), s.people = new eB, s.people._init(s), o.DEBUG = o.DEBUG || s.get_config("debug"), !P.isUndefined(a) && P.isArray(a) && (s._execute_array.call(s.people, a.people), s._execute_array(a)), s
                };
            e0.prototype.init = function(e, t, r) {
                if (P.isUndefined(r)) {
                    this.report_error("You must name your new library: init(token, config, name)");
                    return
                }
                if (r === eK) {
                    this.report_error("You must initialize the main mixpanel object right after you include the Mixpanel js snippet");
                    return
                }
                var o = e1(e, t, r);
                return i[r] = o, o._loaded(), o
            }, e0.prototype._init = function(e, r, i) {
                r = r || {}, this.__loaded = !0, this.config = {};
                var o = {};
                if (!("api_payload_format" in r) && (r.api_host || eY.api_host).match(/\.mixpanel\.com$/) && (o.api_payload_format = "json"), this.set_config(P.extend({}, eY, o, r, {
                        name: i,
                        token: e,
                        callback_fn: (i === eK ? i : eK + "." + i) + "._jsc"
                    })), this._jsc = eH, this.__dom_loaded_queue = [], this.__request_queue = [], this.__disabled_events = [], this._flags = {
                        disable_all_events: !1,
                        identify_called: !1
                    }, this.request_batchers = {}, this._batch_requests = this.get_config("batch_requests"), this._batch_requests) {
                    if (P.localStorage.is_supported(!0) && eV) {
                        if (this.init_batchers(), eX && t.addEventListener) {
                            var n = P.bind(function() {
                                this.request_batchers.events.stopped || this.request_batchers.events.flush({
                                    unloading: !0
                                })
                            }, this);
                            t.addEventListener("pagehide", function(e) {
                                e.persisted && n()
                            }), t.addEventListener("visibilitychange", function() {
                                "hidden" === D.visibilityState && n()
                            })
                        }
                    } else this._batch_requests = !1, F.log("Turning off Mixpanel request-queueing; needs XHR and localStorage support")
                }
                this.persistence = this.cookie = new eJ(this.config), this.unpersisted_superprops = {}, this._gdpr_init();
                var s = P.UUID();
                this.get_distinct_id() || this.register_once({
                    distinct_id: s,
                    $device_id: s
                }, "")
            }, e0.prototype._loaded = function() {
                this.get_config("loaded")(this), this._set_default_superprops()
            }, e0.prototype._set_default_superprops = function() {
                this.persistence.update_search_keyword(D.referrer), this.get_config("store_google") && this.persistence.update_campaign_params(), this.get_config("save_referrer") && this.persistence.update_referrer_info(D.referrer)
            }, e0.prototype._dom_loaded = function() {
                P.each(this.__dom_loaded_queue, function(e) {
                    this._track_dom.apply(this, e)
                }, this), this.has_opted_out_tracking() || P.each(this.__request_queue, function(e) {
                    this._send_request.apply(this, e)
                }, this), delete this.__dom_loaded_queue, delete this.__request_queue
            }, e0.prototype._track_dom = function(e, t) {
                if (this.get_config("img")) return this.report_error("You can't use DOM tracking functions with img = true."), !1;
                if (!eZ) return this.__dom_loaded_queue.push([e, t]), !1;
                var r = new e().init(this);
                return r.track.apply(r, t)
            }, e0.prototype._prepare_callback = function(e, t) {
                if (P.isUndefined(e)) return null;
                if (eV) return function(r) {
                    e(r, t)
                };
                var r = this._jsc,
                    i = "" + Math.floor(1e8 * Math.random()),
                    o = this.get_config("callback_fn") + "[" + i + "]";
                return r[i] = function(o) {
                    delete r[i], e(o, t)
                }, o
            }, e0.prototype._send_request = function(e, t, r, i) {
                var o = !0;
                if (eW) return this.__request_queue.push(arguments), o;
                var n = {
                        method: this.get_config("api_method"),
                        transport: this.get_config("api_transport"),
                        verbose: this.get_config("verbose")
                    },
                    s = null;
                !i && (P.isFunction(r) || "string" == typeof r) && (i = r, r = null), r = P.extend(n, r || {}), eV || (r.method = "GET");
                var a = "POST" === r.method,
                    c = eX && a && "sendbeacon" === r.transport.toLowerCase(),
                    p = r.verbose;
                t.verbose && (p = !0), this.get_config("test") && (t.test = 1), p && (t.verbose = 1), this.get_config("img") && (t.img = 1), !eV && (i ? t.callback = i : (p || this.get_config("test")) && (t.callback = "(function(){})")), t.ip = this.get_config("ip") ? 1 : 0, t._ = new Date().getTime().toString(), a && (s = "data=" + encodeURIComponent(t.data), delete t.data), e += "?" + P.HTTPBuildQuery(t);
                var u = this;
                if ("img" in t) {
                    var _ = D.createElement("img");
                    _.src = e, D.body.appendChild(_)
                } else if (c) {
                    try {
                        o = eX(e, s)
                    } catch (h) {
                        u.report_error(h), o = !1
                    }
                    try {
                        i && i(o ? 1 : 0)
                    } catch (f) {
                        u.report_error(f)
                    }
                } else if (eV) try {
                    var l = new XMLHttpRequest;
                    l.open(r.method, e, !0);
                    var d = this.get_config("xhr_headers");
                    if (a && (d["Content-Type"] = "application/x-www-form-urlencoded"), P.each(d, function(e, t) {
                            l.setRequestHeader(t, e)
                        }), r.timeout_ms && void 0 !== l.timeout) {
                        l.timeout = r.timeout_ms;
                        var g = new Date().getTime()
                    }
                    l.withCredentials = !0, l.onreadystatechange = function() {
                        if (4 === l.readyState) {
                            var e, t;
                            if (200 === l.status) {
                                if (i) {
                                    if (p) {
                                        try {
                                            e = P.JSONDecode(l.responseText)
                                        } catch (o) {
                                            if (u.report_error(o), !r.ignore_json_errors) return;
                                            e = l.responseText
                                        }
                                        i(e)
                                    } else i(Number(l.responseText))
                                }
                            } else t = l.timeout && !l.status && new Date().getTime() - g >= l.timeout ? "timeout" : "Bad HTTP status: " + l.status + " " + l.statusText, u.report_error(t), i && (p ? i({
                                status: 0,
                                error: t,
                                xhr_req: l
                            }) : i(0))
                        }
                    }, l.send(s)
                } catch (y) {
                    u.report_error(y), o = !1
                } else {
                    var m = D.createElement("script");
                    m.type = "text/javascript", m.async = !0, m.defer = !0, m.src = e;
                    var v = D.getElementsByTagName("script")[0];
                    v.parentNode.insertBefore(m, v)
                }
                return o
            }, e0.prototype._execute_array = function(e) {
                var t, r = [],
                    i = [],
                    o = [];
                P.each(e, function(e) {
                    e && (t = e[0], P.isArray(t) ? o.push(e) : "function" == typeof e ? e.call(this) : P.isArray(e) && "alias" === t ? r.push(e) : P.isArray(e) && -1 !== t.indexOf("track") && "function" == typeof this[t] ? o.push(e) : i.push(e))
                }, this);
                var n = function(e, t) {
                    P.each(e, function(e) {
                        if (P.isArray(e[0])) {
                            var r = t;
                            P.each(e, function(e) {
                                r = r[e[0]].apply(r, e.slice(1))
                            })
                        } else this[e[0]].apply(this, e.slice(1))
                    }, t)
                };
                n(r, this), n(i, this), n(o, this)
            }, e0.prototype.are_batchers_initialized = function() {
                return !!this.request_batchers.events
            }, e0.prototype.init_batchers = function() {
                var e = this.get_config("token");
                if (!this.are_batchers_initialized()) {
                    var t = P.bind(function(t) {
                        return new ep("__mpq_" + e + t.queue_suffix, {
                            libConfig: this.config,
                            sendRequestFunc: P.bind(function(e, r, i) {
                                this._send_request(this.get_config("api_host") + t.endpoint, this._encode_data_for_request(e), r, this._prepare_callback(i, e))
                            }, this),
                            beforeSendHook: P.bind(function(e) {
                                return this._run_hook("before_send_" + t.type, e)
                            }, this),
                            errorReporter: this.get_config("error_reporter"),
                            stopAllBatchingFunc: P.bind(this.stop_batch_senders, this)
                        })
                    }, this);
                    this.request_batchers = {
                        events: t({
                            type: "events",
                            endpoint: "/track/",
                            queue_suffix: "_ev"
                        }),
                        people: t({
                            type: "people",
                            endpoint: "/engage/",
                            queue_suffix: "_pp"
                        }),
                        groups: t({
                            type: "groups",
                            endpoint: "/groups/",
                            queue_suffix: "_gr"
                        })
                    }
                }
                this.get_config("batch_autostart") && this.start_batch_senders()
            }, e0.prototype.start_batch_senders = function() {
                this.are_batchers_initialized() && (this._batch_requests = !0, P.each(this.request_batchers, function(e) {
                    e.start()
                }))
            }, e0.prototype.stop_batch_senders = function() {
                this._batch_requests = !1, P.each(this.request_batchers, function(e) {
                    e.stop(), e.clear()
                })
            }, e0.prototype.push = function(e) {
                this._execute_array([e])
            }, e0.prototype.disable = function(e) {
                void 0 === e ? this._flags.disable_all_events = !0 : this.__disabled_events = this.__disabled_events.concat(e)
            }, e0.prototype._encode_data_for_request = function(e) {
                var t = P.JSONEncode(e);
                return this.get_config("api_payload_format") === eG && (t = P.base64Encode(t)), {
                    data: t
                }
            }, e0.prototype._track_or_batch = function(e, t) {
                var r = P.truncate(e.data, 255),
                    i = e.endpoint,
                    o = e.batcher,
                    n = e.should_send_immediately,
                    s = e.send_request_options || {};
                t = t || eH;
                var a = !0,
                    c = P.bind(function() {
                        return (s.skip_hooks || (r = this._run_hook("before_send_" + e.type, r)), r) ? (F.log("MIXPANEL REQUEST:"), F.log(r), this._send_request(i, this._encode_data_for_request(r), s, this._prepare_callback(t, r))) : null
                    }, this);
                return this._batch_requests && !n ? o.enqueue(r, function(e) {
                    e ? t(1, r) : c()
                }) : a = c(), a && r
            }, e0.prototype.track = el(function(e, t, r, i) {
                i || "function" != typeof r || (i = r, r = null);
                var o = (r = r || {}).transport;
                o && (r.transport = o);
                var n = r.send_immediately;
                if ("function" != typeof i && (i = eH), P.isUndefined(e)) {
                    this.report_error("No event name provided to mixpanel.track");
                    return
                }
                if (this._event_is_disabled(e)) {
                    i(0);
                    return
                }(t = t || {}).token = this.get_config("token");
                var s = this.persistence.remove_event_timer(e);
                if (!P.isUndefined(s)) {
                    var a = new Date().getTime() - s;
                    t.$duration = parseFloat((a / 1e3).toFixed(3))
                }
                this._set_default_superprops(), t = P.extend({}, P.info.properties(), this.persistence.properties(), this.unpersisted_superprops, t);
                var c = this.get_config("property_blacklist");
                P.isArray(c) ? P.each(c, function(e) {
                    delete t[e]
                }) : this.report_error("Invalid value for property_blacklist config: " + c);
                var p = {
                    event: e,
                    properties: t
                };
                return this._track_or_batch({
                    type: "events",
                    data: p,
                    endpoint: this.get_config("api_host") + "/track/",
                    batcher: this.request_batchers.events,
                    should_send_immediately: n,
                    send_request_options: r
                }, i)
            }), e0.prototype.set_group = el(function(e, t, r) {
                P.isArray(t) || (t = [t]);
                var i = {};
                return i[e] = t, this.register(i), this.people.set(e, t, r)
            }), e0.prototype.add_group = el(function(e, t, r) {
                var i = this.get_property(e);
                if (void 0 === i) {
                    var o = {};
                    o[e] = [t], this.register(o)
                } else -1 === i.indexOf(t) && (i.push(t), this.register(o));
                return this.people.union(e, t, r)
            }), e0.prototype.remove_group = el(function(e, t, r) {
                var i = this.get_property(e);
                if (void 0 !== i) {
                    var o = i.indexOf(t);
                    o > -1 && (i.splice(o, 1), this.register({
                        group_key: i
                    })), 0 === i.length && this.unregister(e)
                }
                return this.people.remove(e, t, r)
            }), e0.prototype.track_with_groups = el(function(e, t, r, i) {
                var o = P.extend({}, t || {});
                return P.each(r, function(e, t) {
                    null != e && (o[t] = e)
                }), this.track(e, o, i)
            }), e0.prototype._create_map_key = function(e, t) {
                return e + "_" + JSON.stringify(t)
            }, e0.prototype._remove_group_from_cache = function(e, t) {
                delete this._cached_groups[this._create_map_key(e, t)]
            }, e0.prototype.get_group = function(e, t) {
                var r = this._create_map_key(e, t),
                    i = this._cached_groups[r];
                return (void 0 === i || i._group_key !== e || i._group_id !== t) && ((i = new eT)._init(this, e, t), this._cached_groups[r] = i), i
            }, e0.prototype.track_pageview = function(e) {
                P.isUndefined(e) && (e = D.location.href), this.track("mp_page_view", P.info.pageviewInfo(e))
            }, e0.prototype.track_links = function() {
                return this._track_dom.call(this, ee, arguments)
            }, e0.prototype.track_forms = function() {
                return this._track_dom.call(this, et, arguments)
            }, e0.prototype.time_event = function(e) {
                if (P.isUndefined(e)) {
                    this.report_error("No event name provided to mixpanel.time_event");
                    return
                }!this._event_is_disabled(e) && this.persistence.set_event_timer(e, new Date().getTime())
            };
            var e2 = {
                    persistent: !0
                },
                e6 = function(e) {
                    var t;
                    return t = P.isObject(e) ? e : P.isUndefined(e) ? {} : {
                        days: e
                    }, P.extend({}, e2, t)
                };
            e0.prototype.register = function(e, t) {
                var r = e6(t);
                r.persistent ? this.persistence.register(e, r.days) : P.extend(this.unpersisted_superprops, e)
            }, e0.prototype.register_once = function(e, t, r) {
                var i = e6(r);
                i.persistent ? this.persistence.register_once(e, t, i.days) : (void 0 === t && (t = "None"), P.each(e, function(e, r) {
                    this.unpersisted_superprops.hasOwnProperty(r) && this.unpersisted_superprops[r] !== t || (this.unpersisted_superprops[r] = e)
                }, this))
            }, e0.prototype.unregister = function(e, t) {
                (t = e6(t)).persistent ? this.persistence.unregister(e) : delete this.unpersisted_superprops[e]
            }, e0.prototype._register_single = function(e, t) {
                var r = {};
                r[e] = t, this.register(r)
            }, e0.prototype.identify = function(e, t, r, i, o, n, s, a) {
                var c = this.get_distinct_id();
                this.register({
                    $user_id: e
                }), this.get_property("$device_id") || this.register_once({
                    $had_persisted_distinct_id: !0,
                    $device_id: c
                }, ""), e !== c && e !== this.get_property(eR) && (this.unregister(eR), this.register({
                    distinct_id: e
                })), this._flags.identify_called = !0, this.people._flush(t, r, i, o, n, s, a), e !== c && this.track("$identify", {
                    distinct_id: e,
                    $anon_distinct_id: c
                }, {
                    skip_hooks: !0
                })
            }, e0.prototype.reset = function() {
                this.persistence.clear(), this._flags.identify_called = !1;
                var e = P.UUID();
                this.register_once({
                    distinct_id: e,
                    $device_id: e
                }, "")
            }, e0.prototype.get_distinct_id = function() {
                return this.get_property("distinct_id")
            }, e0.prototype.alias = function(e, t) {
                if (e === this.get_property(eF)) return this.report_error("Attempting to create alias for existing People user - aborting."), -2;
                var r = this;
                return (P.isUndefined(t) && (t = this.get_distinct_id()), e !== t) ? (this._register_single(eR, e), this.track("$create_alias", {
                    alias: e,
                    distinct_id: t
                }, {
                    skip_hooks: !0
                }, function() {
                    r.identify(e)
                })) : (this.report_error("alias matches current distinct_id - skipping api call."), this.identify(e), -1)
            }, e0.prototype.name_tag = function(e) {
                this._register_single("mp_name_tag", e)
            }, e0.prototype.set_config = function(e) {
                P.isObject(e) && (P.extend(this.config, e), e.batch_size && P.each(this.request_batchers, function(e) {
                    e.resetBatchSize()
                }), this.get_config("persistence_name") || (this.config.persistence_name = this.config.cookie_name), this.get_config("disable_persistence") || (this.config.disable_persistence = this.config.disable_cookie), this.persistence && this.persistence.update_config(this.config), o.DEBUG = o.DEBUG || this.get_config("debug"))
            }, e0.prototype.get_config = function(e) {
                return this.config[e]
            }, e0.prototype._run_hook = function(e) {
                var t = (this.config.hooks[e] || eQ).apply(this, w.call(arguments, 1));
                return void 0 === t && (this.report_error(e + " hook did not return a value"), t = null), t
            }, e0.prototype.get_property = function(e) {
                return this.persistence.props[e]
            }, e0.prototype.toString = function() {
                var e = this.get_config("name");
                return e !== eK && (e = eK + "." + e), e
            }, e0.prototype._event_is_disabled = function(e) {
                return P.isBlockedUA(B) || this._flags.disable_all_events || P.include(this.__disabled_events, e)
            }, e0.prototype._gdpr_init = function() {
                "localStorage" === this.get_config("opt_out_tracking_persistence_type") && P.localStorage.is_supported() && (!this.has_opted_in_tracking() && this.has_opted_in_tracking({
                    persistence_type: "cookie"
                }) && this.opt_in_tracking({
                    enable_persistence: !1
                }), !this.has_opted_out_tracking() && this.has_opted_out_tracking({
                    persistence_type: "cookie"
                }) && this.opt_out_tracking({
                    clear_persistence: !1
                }), this.clear_opt_in_out_tracking({
                    persistence_type: "cookie",
                    enable_persistence: !1
                })), this.has_opted_out_tracking() ? this._gdpr_update_persistence({
                    clear_persistence: !0
                }) : !this.has_opted_in_tracking() && (this.get_config("opt_out_tracking_by_default") || P.cookie.get("mp_optout")) && (P.cookie.remove("mp_optout"), this.opt_out_tracking({
                    clear_persistence: this.get_config("opt_out_persistence_by_default")
                }))
            }, e0.prototype._gdpr_update_persistence = function(e) {
                var t;
                if (e && e.clear_persistence) t = !0;
                else {
                    if (!e || !e.enable_persistence) return;
                    t = !1
                }
                this.get_config("disable_persistence") || this.persistence.disabled === t || this.persistence.set_disabled(t), t && P.each(this.request_batchers, function(e) {
                    e.clear()
                })
            }, e0.prototype._gdpr_call_func = function(e, t) {
                return t = P.extend({
                    track: P.bind(this.track, this),
                    persistence_type: this.get_config("opt_out_tracking_persistence_type"),
                    cookie_prefix: this.get_config("opt_out_tracking_cookie_prefix"),
                    cookie_expiration: this.get_config("cookie_expiration"),
                    cross_site_cookie: this.get_config("cross_site_cookie"),
                    cross_subdomain_cookie: this.get_config("cross_subdomain_cookie"),
                    cookie_domain: this.get_config("cookie_domain"),
                    secure_cookie: this.get_config("secure_cookie"),
                    ignore_dnt: this.get_config("ignore_dnt")
                }, t), P.localStorage.is_supported() || (t.persistence_type = "cookie"), e(this.get_config("token"), {
                    track: t.track,
                    trackEventName: t.track_event_name,
                    trackProperties: t.track_properties,
                    persistenceType: t.persistence_type,
                    persistencePrefix: t.cookie_prefix,
                    cookieDomain: t.cookie_domain,
                    cookieExpiration: t.cookie_expiration,
                    crossSiteCookie: t.cross_site_cookie,
                    crossSubdomainCookie: t.cross_subdomain_cookie,
                    secureCookie: t.secure_cookie,
                    ignoreDnt: t.ignore_dnt
                })
            }, e0.prototype.opt_in_tracking = function(e) {
                e = P.extend({
                    enable_persistence: !0
                }, e), this._gdpr_call_func(eu, e), this._gdpr_update_persistence(e)
            }, e0.prototype.opt_out_tracking = function(e) {
                (e = P.extend({
                    clear_persistence: !0,
                    delete_user: !0
                }, e)).delete_user && this.people && this.people._identify_called() && (this.people.delete_user(), this.people.clear_charges()), this._gdpr_call_func(e_, e), this._gdpr_update_persistence(e)
            }, e0.prototype.has_opted_in_tracking = function(e) {
                return this._gdpr_call_func(eh, e)
            }, e0.prototype.has_opted_out_tracking = function(e) {
                return this._gdpr_call_func(ef, e)
            }, e0.prototype.clear_opt_in_out_tracking = function(e) {
                e = P.extend({
                    enable_persistence: !0
                }, e), this._gdpr_call_func(ey, e), this._gdpr_update_persistence(e)
            }, e0.prototype.report_error = function(e, t) {
                F.error.apply(F.error, arguments);
                try {
                    t || e instanceof Error || (e = Error(e)), this.get_config("error_reporter")(e, t)
                } catch (r) {
                    F.error(r)
                }
            }, e0.prototype.init = e0.prototype.init, e0.prototype.reset = e0.prototype.reset, e0.prototype.disable = e0.prototype.disable, e0.prototype.time_event = e0.prototype.time_event, e0.prototype.track = e0.prototype.track, e0.prototype.track_links = e0.prototype.track_links, e0.prototype.track_forms = e0.prototype.track_forms, e0.prototype.track_pageview = e0.prototype.track_pageview, e0.prototype.register = e0.prototype.register, e0.prototype.register_once = e0.prototype.register_once, e0.prototype.unregister = e0.prototype.unregister, e0.prototype.identify = e0.prototype.identify, e0.prototype.alias = e0.prototype.alias, e0.prototype.name_tag = e0.prototype.name_tag, e0.prototype.set_config = e0.prototype.set_config, e0.prototype.get_config = e0.prototype.get_config, e0.prototype.get_property = e0.prototype.get_property, e0.prototype.get_distinct_id = e0.prototype.get_distinct_id, e0.prototype.toString = e0.prototype.toString, e0.prototype.opt_out_tracking = e0.prototype.opt_out_tracking, e0.prototype.opt_in_tracking = e0.prototype.opt_in_tracking, e0.prototype.has_opted_out_tracking = e0.prototype.has_opted_out_tracking, e0.prototype.has_opted_in_tracking = e0.prototype.has_opted_in_tracking, e0.prototype.clear_opt_in_out_tracking = e0.prototype.clear_opt_in_out_tracking, e0.prototype.get_group = e0.prototype.get_group, e0.prototype.set_group = e0.prototype.set_group, e0.prototype.add_group = e0.prototype.add_group, e0.prototype.remove_group = e0.prototype.remove_group, e0.prototype.track_with_groups = e0.prototype.track_with_groups, e0.prototype.start_batch_senders = e0.prototype.start_batch_senders, e0.prototype.stop_batch_senders = e0.prototype.stop_batch_senders, eJ.prototype.properties = eJ.prototype.properties, eJ.prototype.update_search_keyword = eJ.prototype.update_search_keyword, eJ.prototype.update_referrer_info = eJ.prototype.update_referrer_info, eJ.prototype.get_cross_subdomain = eJ.prototype.get_cross_subdomain, eJ.prototype.clear = eJ.prototype.clear;
            var e3 = {},
                e4 = function() {
                    P.each(e3, function(e, t) {
                        t !== eK && (i[t] = e)
                    }), i._ = P
                },
                e5 = (r = 0, (i = new e0).init = function(e, o, n) {
                    if (n) return i[n] || (i[n] = e3[n] = e1(e, o, n), i[n]._loaded()), i[n];
                    var s = i;
                    e3[eK] ? s = e3[eK] : e && ((s = e1(e, o, eK))._loaded(), e3[eK] = s), i = s, 1 === r && (t[eK] = i), e4()
                }, i.init(), function() {
                    function e() {
                        !e.done && (e.done = !0, eZ = !0, eW = !1, P.each(e3, function(e) {
                            e._dom_loaded()
                        }))
                    }
                    if (D.addEventListener) "complete" === D.readyState ? e() : D.addEventListener("DOMContentLoaded", e, !1);
                    else if (D.attachEvent) {
                        D.attachEvent("onreadystatechange", e);
                        var r = !1;
                        try {
                            r = null === t.frameElement
                        } catch (i) {}
                        D.documentElement.doScroll && r && function t() {
                            try {
                                D.documentElement.doScroll("left")
                            } catch (r) {
                                setTimeout(t, 1);
                                return
                            }
                            e()
                        }()
                    }
                    P.register_event(t, "load", e, !0)
                }(), i);
            e.exports = e5
        }
    }
]);