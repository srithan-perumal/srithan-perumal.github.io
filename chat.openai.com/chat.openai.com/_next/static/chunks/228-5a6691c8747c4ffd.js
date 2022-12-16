"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [228], {
        99294: function(e, t, n) {
            n.d(t, {
                Y: function() {
                    return b
                },
                k: function() {
                    return v
                }
            });
            var r = n(14806),
                o = n(35250),
                a = n(19841),
                i = n(31294),
                s = n.n(i),
                c = n(1454),
                u = n(34303),
                l = n(46195);

            function d() {
                var e = (0, r.Z)(["relative h-[30px] w-[30px] p-1 rounded-sm text-white flex items-center justify-center"]);
                return d = function() {
                    return e
                }, e
            }

            function f() {
                var e = (0, r.Z)(["\n  absolute w-4 h-4 rounded-full text-[10px] text-white flex  justify-center items-center right-0 top-[20px] -mr-2 border border-white\n  ", "\n  ", "\n"]);
                return f = function() {
                    return e
                }, e
            }

            function p() {
                var e = (0, r.Z)(["bg-[#5436DA] rounded-sm text-white flex justify-center items-center relative"]);
                return p = function() {
                    return e
                }, e
            }

            function h() {
                var e = (0, r.Z)(["relative flex"]);
                return h = function() {
                    return e
                }, e
            }
            var m = u.Z.div(d()),
                g = u.Z.span(f(), function(e) {
                    return "warning" === e.$type && "bg-orange-500 text-white"
                }, function(e) {
                    return "danger" === e.$type && "bg-red-500 text-white"
                }),
                v = function(e) {
                    var t = e.iconName,
                        n = e.background,
                        r = e.notice,
                        a = "globe" === t ? c.RsK : "terminal" === t ? c.cDN : l.nI;
                    return (0, o.jsxs)(m, {
                        style: {
                            backgroundColor: n
                        },
                        children: [(0, o.jsx)(l.ZP, {
                            icon: a,
                            size: "medium"
                        }), r && (0, o.jsx)(g, {
                            $type: r,
                            children: "!"
                        })]
                    })
                },
                x = u.Z.div(p()),
                y = u.Z.div(h()),
                b = function(e) {
                    var t = e.user,
                        n = e.size,
                        r = void 0 === n ? "small" : n,
                        i = e.notice;
                    if (null == t ? void 0 : t.picture) return (0, o.jsxs)(y, {
                        children: [(0, o.jsx)(s(), {
                            src: t.picture,
                            alt: t.name,
                            width: "small" === r ? 30 : 38,
                            height: "small" === r ? 30 : 38,
                            className: "rounded-sm"
                        }), i && (0, o.jsx)(g, {
                            $type: i,
                            children: "!"
                        })]
                    });
                    var c = ((null == t ? void 0 : t.name) || "").split(" ").map(function(e) {
                        return e[0]
                    }).join("");
                    return (0, o.jsxs)(x, {
                        className: (0, a.Z)("small" === r ? "h-8 w-8 text-xs" : "h-10 w-10 text-lg"),
                        children: [c, i && (0, o.jsx)(g, {
                            $type: i,
                            children: "!"
                        })]
                    })
                }
        },
        94312: function(e, t, n) {
            n.d(t, {
                Z: function() {
                    return d
                }
            });
            var r = n(14806),
                o = n(35250),
                a = n(70079),
                i = n(1454),
                s = n(34303),
                c = n(74511),
                u = n(46195);

            function l() {
                var e = (0, r.Z)(["flex ml-auto gap-2"]);
                return l = function() {
                    return e
                }, e
            }

            function d(e) {
                var t = e.text,
                    n = e.onCopy,
                    r = (0, a.useState)(!1),
                    s = r[0],
                    l = r[1],
                    d = (0, c.Z)(),
                    p = (0, a.useCallback)(function() {
                        n(), l(!0), setTimeout(function() {
                            d() && l(!1)
                        }, 2e3)
                    }, [d, n]);
                return (0, o.jsxs)(o.Fragment, {
                    children: [!s && (0, o.jsxs)(f, {
                        onClick: p,
                        children: [(0, o.jsx)(u.ZP, {
                            icon: i.j4u
                        }), t]
                    }), s && (0, o.jsxs)(f, {
                        children: [(0, o.jsx)(u.ZP, {
                            icon: i.UgA
                        }), t && "Copied!"]
                    })]
                })
            }
            var f = s.Z.button(l())
        },
        29996: function(e, t, n) {
            var r = n(31501),
                o = n(14806),
                a = n(35250),
                i = n(19841),
                s = n(70079),
                c = n(34303),
                u = n(46195);

            function l() {
                var e = (0, o.Z)(["absolute right-0 top-1/2 -translate-y-1/2"]);
                return l = function() {
                    return e
                }, e
            }
            t.Z = s.forwardRef(function(e, t) {
                var n = e.name,
                    o = e.placeholder,
                    c = e.type,
                    l = e.displayName,
                    f = e.onChange,
                    p = e.onBlur,
                    h = e.value,
                    m = e.saveOnBlur,
                    g = e.icon,
                    v = e.onInputIconClick,
                    x = e.className,
                    y = (0, s.useState)(h),
                    b = y[0],
                    Z = y[1],
                    k = (0, s.useCallback)(function(e) {
                        null == p || p(e), m && Z(e.target.value)
                    }, [p, m]),
                    w = (0, s.useCallback)(function(e) {
                        null == f || f(e), m && Z(e.target.value)
                    }, [f, m]);
                (0, s.useEffect)(function() {
                    Z(h)
                }, [h]);
                var C = (0, r.Z)({}, m ? {} : {
                    value: h
                }, m ? {
                    value: b
                } : {});
                return (0, a.jsxs)("div", {
                    className: (0, i.Z)("rounded-md border border-gray-300 px-3 py-2 shadow-sm focus-within:border-indigo-600 focus-within:ring-1 focus-within:ring-indigo-600", x),
                    children: [(0, a.jsx)("label", {
                        htmlFor: n,
                        className: "block text-xs font-medium text-gray-900",
                        children: l
                    }), (0, a.jsxs)("div", {
                        className: (0, i.Z)(l && "mt-1", "relative"),
                        children: [(0, a.jsx)("input", (0, r.Z)({
                            ref: t,
                            type: c,
                            name: n,
                            id: n,
                            className: (0, i.Z)("block w-full border-0 p-0 text-gray-900 placeholder-gray-500 outline-none focus:ring-0 sm:text-sm", g && "pr-6"),
                            placeholder: o,
                            onBlur: k,
                            onChange: w
                        }, C)), g && (0, a.jsx)(d, {
                            onClick: v,
                            children: (0, a.jsx)(u.ZP, {
                                icon: g
                            })
                        })]
                    })]
                })
            });
            var d = c.Z.button(l())
        },
        66658: function(e, t, n) {
            n.d(t, {
                Jw: function() {
                    return x
                },
                Vq: function() {
                    return v
                },
                ZP: function() {
                    return y
                }
            });
            var r = n(14806),
                o = n(35250),
                a = n(57976),
                i = n(1771),
                s = n(19841),
                c = n(70079),
                u = n(34303),
                l = n(62517),
                d = n(29996),
                f = n(78914);

            function p() {
                var e = (0, r.Z)(["form-textarea focus:ring-indigo-600 focus:border-indigo-600 block w-full sm:text-sm border-gray-300 rounded-md"]);
                return p = function() {
                    return e
                }, e
            }

            function h() {
                var e = (0, r.Z)(["block w-full border-0 p-0 text-gray-900 placeholder-gray-500 focus:ring-0 outline-none border-none"]);
                return h = function() {
                    return e
                }, e
            }

            function m() {
                var e = (0, r.Z)(["mt-1 outline-none border-0"]);
                return m = function() {
                    return e
                }, e
            }

            function g() {
                var e = (0, r.Z)(["text-right"]);
                return g = function() {
                    return e
                }, e
            }

            function v(e) {
                return e && (e.startsWith("http") || "custom" === e)
            }

            function x(e) {
                return e && !v(e)
            }

            function y(e) {
                var t = e.children,
                    n = (e.maxTokens, e.temperature),
                    r = e.endOfPromptToken,
                    u = e.onRestoreDefaults,
                    p = e.promptPrefix,
                    h = e.onChangePromptPrefix,
                    m = e.modelBackend,
                    g = e.onChangeSetting,
                    x = e.position,
                    y = e.settings,
                    C = e.availableModels,
                    T = (0, f.ZP)(C).modelBackend,
                    j = v(m) ? "custom" : T,
                    _ = (0, c.useState)(v(j)),
                    N = _[0],
                    E = _[1],
                    A = (0, c.useCallback)(function(e) {
                        h(e.target.value)
                    }, [h]),
                    M = (0, c.useCallback)(function(e) {
                        var t = e.target.value;
                        v(t) ? (g(f.G3.Model, "custom" !== t ? t : "http://custom:8000"), E(!0)) : (E(!1), g(f.G3.Model, e.target.value))
                    }, [g]),
                    P = (0, c.useCallback)(function(e) {
                        g(f.G3.EopToken, e.target.value)
                    }, [g]);
                (0, c.useCallback)(function(e) {
                    g(f.G3.MaxTokens, e.target.value)
                }, [g]);
                var R = (0, c.useCallback)(function(e) {
                    g(f.G3.Temperature, e.target.value)
                }, [g]);
                return (0, o.jsxs)(a.J, {
                    className: "relative",
                    children: [t, (0, o.jsx)(i.u, {
                        as: c.Fragment,
                        enter: "transition ease-out duration-200",
                        enterFrom: (0, s.Z)("opacity-0", "top-right" === x ? "translate-x-1" : "translate-y-1"),
                        enterTo: (0, s.Z)("opacity-100", "top-right" === x ? "translate-x-0" : "translate-y-0"),
                        leave: "transition ease-in duration-150",
                        leaveFrom: (0, s.Z)("opacity-100", "top-right" === x ? "translate-x-0" : "translate-y-0"),
                        leaveTo: (0, s.Z)("opacity-0", "top-right" === x ? "translate-x-1" : "translate-y-1"),
                        children: (0, o.jsx)(a.J.Panel, {
                            className: (0, s.Z)("absolute z-20 mt-3 w-screen max-w-xs px-2 sm:px-0", "bottom-center" === x && "right-0 top-6", "bottom-right" === x && "left-2 top-8", "top-right" === x && "left-full top-1/2 ml-6 -translate-y-full"),
                            children: (0, o.jsx)("div", {
                                className: "overflow-hidden rounded-lg text-left text-sm shadow-lg ring-1 ring-black ring-opacity-5 dark:ring-gray-600",
                                children: (0, o.jsxs)("div", {
                                    className: "relative grid gap-6 bg-white px-2 py-1 dark:bg-gray-800 sm:gap-4 sm:p-4",
                                    children: [y.has(f.G3.Model) && C.length > 0 && (0, o.jsx)("select", {
                                        name: "model",
                                        className: "form-select rounded-md border-gray-300 text-sm dark:text-gray-900",
                                        onChange: M,
                                        value: j,
                                        children: C.map(function(e) {
                                            return (0, o.jsx)("option", {
                                                value: e.id,
                                                children: e.id
                                            }, e.id)
                                        })
                                    }), N && (0, o.jsx)(d.Z, {
                                        displayName: "Model Endpoint",
                                        name: "modelBackend",
                                        onBlur: M,
                                        value: m,
                                        saveOnBlur: !0
                                    }), y.has(f.G3.Context) && (0, o.jsx)(b, {
                                        value: p,
                                        onChange: A,
                                        rows: 4,
                                        placeholder: "Add additional context..."
                                    }), y.has(f.G3.EopToken) && (0, o.jsx)(d.Z, {
                                        displayName: "End of prompt token",
                                        name: "endOfPromptToken",
                                        onBlur: P,
                                        value: r,
                                        saveOnBlur: !0
                                    }), y.has(f.G3.Temperature) && (0, o.jsxs)("div", {
                                        className: "rounded-md border border-gray-300 px-3 py-2 shadow-sm focus-within:border-indigo-600 focus-within:ring-1 focus-within:ring-indigo-600",
                                        children: [(0, o.jsx)("label", {
                                            htmlFor: "temperature",
                                            className: "block text-xs font-medium text-gray-800",
                                            children: "Temperature"
                                        }), (0, o.jsxs)("div", {
                                            className: "mt-1",
                                            children: [(0, o.jsx)(Z, {
                                                type: "number",
                                                name: "temperature",
                                                id: "temperature",
                                                onChange: R,
                                                value: n,
                                                className: "form-input"
                                            }), (0, o.jsx)(k, {
                                                name: "temperature",
                                                type: "range",
                                                min: "0",
                                                max: "1",
                                                value: n,
                                                className: "range w-full",
                                                step: "0.05",
                                                onChange: R
                                            })]
                                        })]
                                    }), (0, o.jsx)(w, {
                                        children: (0, o.jsx)(l.z, {
                                            as: "button",
                                            color: "neutral",
                                            onClick: u,
                                            children: "Restore defaults"
                                        })
                                    })]
                                })
                            })
                        })
                    })]
                })
            }
            var b = u.Z.textarea(p()),
                Z = u.Z.input(h()),
                k = u.Z.input(m()),
                w = u.Z.div(g())
        },
        80117: function(e, t, n) {
            n.d(t, {
                Z: function() {
                    return S
                }
            });
            var r = n(14806),
                o = n(35250),
                a = n(19841),
                i = n(15762),
                s = n(70079),
                c = n(66280),
                u = n(34303),
                l = n(31501),
                d = n(61079),
                f = n(89874),
                p = n(88366),
                h = n(2155),
                m = n(42426),
                g = n(36542);

            function v() {
                var e = (0, r.Z)(["text-xs absolute right-0 top-1/2 -translate-y-1/2 text-gray-400 font-normal flex items-center gap-1 hover:text-gray-500"]);
                return v = function() {
                    return e
                }, e
            }
            n(708), n(75998), n(46195), n(67349), n(44883), u.Z.button(v());
            var x = n(94312);

            function y() {
                var e = (0, r.Z)(["bg-black mb-4 rounded-md"]);
                return y = function() {
                    return e
                }, e
            }

            function b() {
                var e = (0, r.Z)(["flex items-center relative text-gray-200 bg-gray-800 px-4 py-2 text-xs font-sans"]);
                return b = function() {
                    return e
                }, e
            }

            function Z() {
                var e = (0, r.Z)([""]);
                return Z = function() {
                    return e
                }, e
            }

            function k() {
                var e = (0, r.Z)(["p-4"]);
                return k = function() {
                    return e
                }, e
            }

            function w() {
                var e = (0, r.Z)(["!whitespace-pre-wrap"]);
                return w = function() {
                    return e
                }, e
            }
            var C = u.Z.div(y()),
                T = u.Z.div(b()),
                j = u.Z.span(Z()),
                _ = u.Z.div(k()),
                N = u.Z.code(w());

            function E(e) {
                var t = e.children,
                    n = e.className,
                    r = e.language,
                    a = e.content,
                    i = (0, s.useCallback)(function() {
                        navigator.clipboard.writeText(a)
                    }, [a]);
                return (0, o.jsxs)(C, {
                    children: [(0, o.jsxs)(T, {
                        children: [r && (0, o.jsx)(j, {
                            children: r
                        }), (0, o.jsx)(x.Z, {
                            text: "Copy code",
                            onCopy: i
                        })]
                    }), (0, o.jsx)(_, {
                        children: (0, o.jsx)(N, {
                            className: n,
                            children: t
                        })
                    })]
                })
            }
            "## ".concat("Table of Contents");
            var A = [
                    [h.Z, {
                        detect: !0,
                        subset: ["python", "javascript", "java", "go", "bash", "c", "cpp", "csharp", "css", "diff", "graphql", "json", "kotlin", "less", "lua", "makefile", "markdown", "objectivec", "perl", "php", "php-template", "plaintext", "python-repl", "r", "ruby", "rust", "scss", "shell", "sql", "swift", "typescript", "vbnet", "wasm", "xml", "yaml", ],
                        ignoreMissing: !0
                    }, ],
                    [m.Z, {
                        newlines: !0
                    }],
                ],
                M = [g.Z];

            function P() {
                var e = (0, r.Z)(["\npy-2 px-3 border text-gray-600 rounded-md text-sm dark:text-gray-100\n", "\n", "\n"]);
                return P = function() {
                    return e
                }, e
            }
            var R = {
                    code: function(e) {
                        var t = e.inline,
                            n = e.node,
                            r = e.className,
                            a = e.children,
                            i = (0, f.Z)(e, ["inline", "node", "className", "children"]);
                        if (t) return (0, o.jsx)("code", (0, d.Z)((0, l.Z)({
                            className: r
                        }, i), {
                            children: a
                        }));
                        var s = (null == r ? void 0 : r.startsWith("language-")) ? r.split("-")[1] : "";
                        return (0, o.jsx)(E, {
                            language: s,
                            className: r,
                            content: (0, p.B)(n),
                            children: a
                        })
                    }
                },
                S = s.memo(function(e) {
                    var t = e.id,
                        n = e.text,
                        r = e.isActive,
                        s = e.format,
                        u = e.className,
                        l = e.isCompletionInProgress,
                        d = e.flag,
                        f = e.showContentPolicyViolation,
                        p = (0, i.F)().theme;
                    return (0, o.jsxs)("div", {
                        className: (0, a.Z)(u, "flex flex-col items-start gap-4 whitespace-pre-wrap", !r && "hidden", "danger" === d && "flex flex-row gap-2 text-red-500", "warning" === d && "text-orange-500"),
                        children: [s ? (0, o.jsx)(c.D, {
                            components: R,
                            rehypePlugins: A,
                            remarkPlugins: M,
                            linkTarget: "_new",
                            className: (0, a.Z)(t, !d && s && "markdown prose break-words dark:prose-invert", "danger" !== d && l && "result-streaming", "dark" === p ? "dark" : "light", "danger" === d && "flex flex-row gap-2 text-red-500", "warning" === d && "text-orange-500"),
                            children: "" === n ? "&#8203;" : n
                        }) : n, f && (0, o.jsx)(I, {
                            $flag: d,
                            children: ("danger" === d || "warning" === d) && (0, o.jsx)(F, {})
                        })]
                    }, t)
                });

            function F() {
                return (0, o.jsxs)(o.Fragment, {
                    children: ["This content may violate our", " ", (0, o.jsx)("a", {
                        target: "_blank",
                        href: "https://beta.openai.com/docs/usage-policies/content-policy",
                        rel: "noreferrer",
                        className: "bold underline",
                        children: "content policy"
                    }), ". If you believe this to be in error, please", " ", (0, o.jsx)("a", {
                        target: "_blank",
                        href: "https://forms.gle/3gyAMj5r5rTEcgbs5",
                        rel: "noreferrer",
                        className: "bold underline",
                        children: "submit your feedback"
                    }), " ", "— your input will aid our research in this area."]
                })
            }
            var I = u.Z.div(P(), function(e) {
                return "warning" === e.$flag && "border-orange-500 bg-orange-500/10"
            }, function(e) {
                return "danger" === e.$flag && "border-red-500 bg-red-500/10"
            })
        },
        67349: function(e, t, n) {
            n.d(t, {
                $: function() {
                    return h
                },
                u: function() {
                    return p
                }
            });
            var r = n(31501),
                o = n(61079),
                a = n(14806),
                i = n(35250),
                s = n(19841),
                c = n(70079),
                u = n(65921),
                l = n(34303);

            function d() {
                var e = (0, a.Z)(['\nbefore:absolute before:w-2 before:h-2 before:bg-gray-900 before:visible before:content-[""] dark:before:bg-gray-100\n', "\n", "\n"]);
                return d = function() {
                    return e
                }, e
            }

            function f() {
                var e = (0, a.Z)(["absolute w-2 h-2 -z-10"]);
                return f = function() {
                    return e
                }, e
            }

            function p(e) {
                var t = e.text,
                    n = e.children;
                return (0, i.jsx)("span", {
                    className: "tooltip-label bg-slate-700 flex items-center whitespace-pre-wrap rounded-sm py-1 px-2 text-center text-sm font-medium normal-case text-white shadow-md dark:text-gray-700",
                    "data-content": t,
                    children: n
                })
            }
            var h = function(e) {
                    var t = e.children,
                        n = e.label,
                        a = e.enterDelay,
                        l = void 0 === a ? 0 : a,
                        d = e.leaveDelay,
                        f = void 0 === d ? 50 : d,
                        p = e.placement,
                        h = void 0 === p ? "bottom" : p,
                        m = e.offset,
                        v = e.withArrow,
                        x = (0, c.useState)(!1),
                        y = x[0],
                        b = x[1],
                        Z = (0, c.useState)(null),
                        k = Z[0],
                        w = Z[1],
                        C = (0, c.useState)(null),
                        T = C[0],
                        j = C[1],
                        _ = (0, c.useState)(null),
                        N = _[0],
                        E = _[1],
                        A = (0, u.D)(k, T, {
                            placement: h,
                            modifiers: [{
                                name: "offset",
                                options: {
                                    offset: void 0 === m ? [0, 14] : m
                                }
                            }, {
                                name: "arrow",
                                options: {
                                    element: N
                                }
                            }, ]
                        }),
                        M = A.styles,
                        P = A.attributes,
                        R = A.forceUpdate,
                        S = (0, c.useRef)(),
                        F = (0, c.useRef)(),
                        I = (0, c.useCallback)(function() {
                            null == R || R(), F.current && clearTimeout(F.current), S.current = setTimeout(function() {
                                return b(!0)
                            }, l)
                        }, [l, R]),
                        O = (0, c.useCallback)(function() {
                            S.current && clearTimeout(S.current), F.current = setTimeout(function() {
                                return b(!1)
                            }, f)
                        }, [f]);
                    return (0, i.jsxs)("div", {
                        style: {
                            lineHeight: 0
                        },
                        children: [(0, i.jsx)("div", {
                            ref: w,
                            onMouseEnter: I,
                            onMouseLeave: O,
                            className: "relative h-full",
                            children: t
                        }), (0, i.jsxs)("div", (0, o.Z)((0, r.Z)({
                            ref: j,
                            style: M.popper
                        }, P.popper), {
                            className: (0, s.Z)("z-10 transition-opacity", y ? "opacity-100" : "opacity-0", "pointer-events-none bg-gray-800 dark:bg-gray-100"),
                            children: [n, (void 0 === v || v) && (0, i.jsx)(g, {
                                ref: E,
                                style: M.arrow,
                                $placement: h
                            })]
                        }))]
                    })
                },
                m = l.Z.div(d(), function(e) {
                    return "bottom" === e.$placement && "before:rotate-45 before:-top-7 before:-translate-y-1/2 before:-translate-x-1/2"
                }, function(e) {
                    return "top" === e.$placement && "before:-top-1 before:rotate-45"
                }),
                g = (0, l.Z)(m)(f())
        },
        44883: function(e, t, n) {
            n.d(t, {
                M$: function() {
                    return s
                }
            });
            var r = n(14806),
                o = (n(70079), n(34303));

            function a() {
                var e = (0, r.Z)(["h-[37px] py-2.5 px-6 text-xs uppercase text-gray-700 font-medium border-y relative"]);
                return a = function() {
                    return e
                }, e
            }

            function i() {
                var e = (0, r.Z)(["relative py-1 px-6 text-xs uppercase text-gray-700 font-medium bg-gray-100 border-y"]);
                return i = function() {
                    return e
                }, e
            }
            o.Z.h3(a());
            var s = o.Z.h3(i())
        },
        78914: function(e, t, n) {
            n.d(t, {
                G3: function() {
                    return r
                },
                QZ: function() {
                    return f
                },
                ZP: function() {
                    return h
                },
                hY: function() {
                    return p
                }
            });
            var r, o, a = n(33861),
                i = n(31501),
                s = n(61079),
                c = n(25787),
                u = n(70079),
                l = n(40147),
                d = n(66658);
            (o = r || (r = {})).Model = "model", o.Temperature = "temperature", o.EopToken = "endOfPromptToken", o.MaxTokens = "maxTokens", o.Context = "context";
            var f = "<|endofprompt|>";

            function p(e) {
                return Boolean(e && e.includes("-render"))
            }

            function h(e) {
                var t, n, o, f, h, m, g = (0, u.useContext)(l.yP).id,
                    v = (0, c.useRouter)(),
                    x = v.query,
                    y = decodeURIComponent(x[r.Model] || ""),
                    b = (0, u.useMemo)(function() {
                        if (y || e.length) {
                            var t, n = y || (null === (t = e.find(function(e) {
                                    return "programming" === g ? "special" === e.type : "chat" === g ? p(e.id) : "default" === e.type
                                })) || void 0 === t ? void 0 : t.id) || e[0].id,
                                r = (0, d.Vq)(y) ? "custom" : n;
                            return e.find(function(e) {
                                return e.id === r
                            })
                        }
                    }, [e, g, y]),
                    Z = (o = null == b ? void 0 : b.maxTokens, parseInt(x[r.MaxTokens] || "", 10) || o || 1024),
                    k = parseFloat(x[r.Temperature] || "1"),
                    w = (m = (null == b ? void 0 : b.eopToken) || "", decodeURIComponent(x[r.EopToken] || m)),
                    C = (0, u.useCallback)(function(e, t) {
                        v.replace({
                            pathname: v.basePath,
                            query: (0, s.Z)((0, i.Z)({}, x), (0, a.Z)({}, e, encodeURIComponent(t)))
                        }, void 0, {
                            shallow: !0
                        })
                    }, [x, v]);
                return (0, u.useMemo)(function() {
                    return {
                        temperature: k,
                        maxTokens: Z,
                        modelBackend: (null == b ? void 0 : b.id) || "",
                        modelIsSpecial: (null == b ? void 0 : b.type) === "special",
                        endOfPromptToken: w,
                        onChangeModelSetting: C
                    }
                }, [w, C, Z, null == b ? void 0 : b.id, null == b ? void 0 : b.type, k, ])
            }
        },
        63437: function(e, t, n) {
            n.d(t, {
                Z: function() {
                    return c
                }
            });
            var r = n(48957),
                o = n(70079),
                a = n(708),
                i = n(75998),
                s = n(36489);

            function c(e, t, n, c) {
                var u = (0, r.useSession)().data,
                    l = (0, a.WS)(c);
                (0, o.useEffect)(function() {
                    s.ZP.setAccessToken(n), a.ZP.setUser(t), l(i.s6.pageLoad)
                }, []), (0, o.useEffect)(function() {
                    (null == u ? void 0 : u.accessToken) && s.ZP.setAccessToken(u.accessToken), (null == u ? void 0 : u.error) === "RefreshAccessTokenError" && (console.error(u.error), window._oaiHandleSessionExpired())
                }, [u]), (0, o.useEffect)(function() {
                    document.title = e
                }, [e])
            }
        },
        36489: function(e, t, n) {
            n.d(t, {
                ZP: function() {
                    return k
                }
            });
            var r = n(61706),
                o = n(35025),
                a = n(9135),
                i = n(31501),
                s = n(61079),
                c = n(45813),
                u = n(48879),
                l = n(48957);
            n(138);
            var d = n(22832),
                f = n(25829),
                p = n(19818),
                h = "Something went wrong. If this issue persists please contact us through our help center at help.openai.com.";
            ! function(e) {
                (0, d.Z)(n, e);
                var t = (0, p.Z)(n);

                function n(e, r, a, i, s) {
                    var c;
                    return (0, o.Z)(this, n), (c = t.call(this, e)).name = "UserError", c.userMessage = e, c.status = r || 400, c.code = a, c.type = i, c.response = s, c
                }
                return n
            }((0, f.Z)(Error)), ! function(e) {
                (0, d.Z)(n, e);
                var t = (0, p.Z)(n);

                function n() {
                    var e, r = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : h,
                        a = arguments.length > 1 ? arguments[1] : void 0,
                        i = arguments.length > 2 ? arguments[2] : void 0;
                    return (0, o.Z)(this, n), (e = t.call(this, r)).name = "FatalError", e.type = a, e.response = i, e
                }
                return n
            }((0, f.Z)(Error)), (0, f.Z)(Error);
            var m = n(66658),
                g = n(78914),
                v = function(e) {
                    (0, d.Z)(n, e);
                    var t = (0, p.Z)(n);

                    function n(e, r, a, i) {
                        var s;
                        return (0, o.Z)(this, n), (s = t.call(this, e)).name = "UserError", s.userMessage = e, s.status = r || 400, s.code = a || null, s.type = i || null, s
                    }
                    return n
                }((0, f.Z)(Error)),
                x = function(e) {
                    (0, d.Z)(n, e);
                    var t = (0, p.Z)(n);

                    function n() {
                        var e, r, a = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "An error occurred. If this issue persists please contact us through our help center at help.openai.com.",
                            i = arguments.length > 1 ? arguments[1] : void 0;
                        return (0, o.Z)(this, n), (e = t.call(this, (r = a, r && (r.startsWith("Rate limit reached for") || r.startsWith("End-user exceeded rate-limit")) ? "We're sorry, but we limit the number of requests one user can make in a certain timeframe. Please hang tight and try again in a little while." : r))).name = "FatalError", e.type = i || null, e
                    }
                    return n
                }((0, f.Z)(Error)),
                y = n(63671),
                b = "https://chat.openai.com/backend-api",
                Z = function() {
                    function e() {
                        (0, o.Z)(this, e)
                    }
                    return e.setAccessToken = function(e) {
                        this.accessToken = e
                    }, e.getAuthHeader = function(e) {
                        return {
                            Authorization: "Bearer ".concat(e || this.accessToken)
                        }
                    }, e.refreshApiKey = function() {
                        var e = this;
                        if (this.apiKeyRefreshing) return this.apiKeyRefreshing;
                        var t = this;
                        return this.apiKeyRefreshing = (0, r.Z)(function() {
                            var e;
                            return (0, c.__generator)(this, function(n) {
                                switch (n.label) {
                                    case 0:
                                        return [4, (0, l.getSession)()];
                                    case 1:
                                        return (e = n.sent()) && t.setAccessToken(e.accessToken), [2];
                                    case 2:
                                        throw Error("Cannot refresh access token outside of browser");
                                    case 3:
                                        return [2]
                                }
                            })
                        })(), setTimeout(function() {
                            e.apiKeyRefreshing = null
                        }, 6e4), this.apiKeyRefreshing
                    }, e.fetch = function(e, t) {
                        var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                            o = this;
                        return (0, r.Z)(function() {
                            var r, a, u, l;
                            return (0, c.__generator)(this, function(c) {
                                switch (c.label) {
                                    case 0:
                                        return [4, fetch(e, t)];
                                    case 1:
                                        if ((r = c.sent()).status >= 500) throw new x;
                                        if (!(r.status >= 400)) return [3, 9];
                                        return [4, r.json()];
                                    case 2:
                                        if (u = (null == (a = c.sent()) ? void 0 : a.detail) || (null == a ? void 0 : a.error), console.error("API error", e, u), !((null == u ? void 0 : u.code) === "expired_session_key" || (null == u ? void 0 : u.code) === "token_expired")) return [3, 8];
                                        c.label = 3;
                                    case 3:
                                        if (c.trys.push([3, 6, , 7]), n.isRetry) return [3, 5];
                                        return [4, o.refreshApiKey()];
                                    case 4:
                                        return c.sent(), [2, o.fetch(e, t, (0, s.Z)((0, i.Z)({}, n), {
                                            isRetry: !0
                                        }))];
                                    case 5:
                                        return [3, 7];
                                    case 6:
                                        return l = c.sent(), console.error("Failed to refresh expired access token: ".concat(l)), [3, 7];
                                    case 7:
                                        window._oaiHandleSessionExpired(), c.label = 8;
                                    case 8:
                                        if (null == u ? void 0 : u.type) throw new v((null == u ? void 0 : u.message) || u, r.status, null == u ? void 0 : u.code, null == u ? void 0 : u.type);
                                        throw new x;
                                    case 9:
                                        if (204 === r.status) return [2, {}];
                                        return [2, r.json()]
                                }
                            })
                        })()
                    }, e.getArtifacts = function() {
                        return this.fetch("".concat(b, "/artifacts"), {
                            method: "GET",
                            headers: (0, i.Z)({
                                "Content-Type": "application/json"
                            }, this.getAuthHeader())
                        })
                    }, e.createArtifact = function(e) {
                        return this.fetch("".concat(b, "/artifacts"), {
                            method: "POST",
                            headers: (0, i.Z)({
                                "Content-Type": "application/json"
                            }, this.getAuthHeader()),
                            body: JSON.stringify({
                                url: e,
                                contents: "\n"
                            })
                        })
                    }, e.sendDocument = function() {
                        return this.fetch("".concat(b, "/private"), {
                            method: "GET",
                            headers: {
                                "Content-Type": "application/json"
                            }
                        })
                    }, e.getRetrievalResults = function(e) {
                        return this.fetch("".concat(b, "/retrieval/public_data"), {
                            method: "POST",
                            headers: (0, i.Z)({
                                "Content-Type": "application/json"
                            }, this.getAuthHeader()),
                            body: JSON.stringify({
                                query: e
                            })
                        })
                    }, e.getModels = function(e) {
                        return this.fetch("".concat(b, "/models"), {
                            method: "GET",
                            headers: (0, i.Z)({
                                "Content-Type": "application/json"
                            }, this.getAuthHeader(e))
                        })
                    }, e.getConversations = function(e, t, n) {
                        var r = n ? "".concat(y.env.INTERNAL_API_URL, "/api") : b,
                            o = new URLSearchParams({
                                offset: e.toString(),
                                limit: t.toString()
                            });
                        return this.fetch("".concat(r, "/conversations?").concat(o), {
                            method: "GET",
                            headers: (0, i.Z)({
                                "Content-Type": "application/json"
                            }, this.getAuthHeader(n))
                        })
                    }, e.getConversation = function(e, t) {
                        var n = t ? "".concat(y.env.INTERNAL_API_URL, "/api") : b;
                        return this.fetch("".concat(n, "/conversation/").concat(e), {
                            method: "GET",
                            headers: (0, i.Z)({
                                "Content-Type": "application/json"
                            }, this.getAuthHeader(t))
                        })
                    }, e.generateTitle = function(e, t, n) {
                        return this.fetch("".concat(b, "/conversation/gen_title/").concat(e), {
                            method: "POST",
                            headers: (0, i.Z)({
                                "Content-Type": "application/json"
                            }, this.getAuthHeader()),
                            body: JSON.stringify({
                                message_id: t,
                                model: n
                            })
                        })
                    }, e.patchConversation = function(e, t) {
                        return this.fetch("".concat(b, "/conversation/").concat(e), {
                            method: "PATCH",
                            headers: (0, i.Z)({
                                "Content-Type": "application/json"
                            }, this.getAuthHeader()),
                            body: JSON.stringify(t)
                        })
                    }, e.getServiceMessaging = function() {
                        var e = "false" === y.env.BLOCK_LOGIN,
                            t = this.fetch("".concat(y.env.INTERNAL_API_URL, "/public/status"), {
                                method: "GET",
                                headers: {
                                    "Content-Type": "application/json"
                                }
                            });
                        return e ? (0, s.Z)((0, i.Z)({}, t), {
                            oof: !1
                        }) : t
                    }, e.publicApiCompletionStream = function(e, t, n) {
                        var o = this;
                        return (0, r.Z)(function() {
                            var s, l, d, f;
                            return (0, c.__generator)(this, function(f) {
                                return s = new AbortController, l = e.url.startsWith("https://api.openai.com") ? {
                                    prompt: t.prompt || "",
                                    max_tokens: t.maxTokens,
                                    temperature: t.temperature,
                                    stop: t.stop || [""],
                                    stream: !0
                                } : (0, g.hY)(e.model) ? {
                                    action: t.completionType,
                                    messages: t.messages,
                                    conversation_id: t.threadId,
                                    parent_message_id: t.parentMessageId,
                                    model: e.model
                                } : {
                                    query: t.prompt || "",
                                    url: t.url,
                                    max_tokens: t.maxTokens,
                                    temperature: t.temperature,
                                    stop: t.stop || [""],
                                    stream: !0,
                                    model: e.model
                                }, d = (0, m.Vq)(e.model) ? {
                                    "X-OpenAI-Preferred-Model-Url": e.url || "",
                                    Authorization: "Bearer 1"
                                } : void 0, (0, u.L)(e.url, {
                                    method: "POST",
                                    headers: (0, i.Z)({
                                        "Content-Type": "application/json",
                                        "X-OpenAI-Assistant-App-Id": e.appId || ""
                                    }, o.getAuthHeader(), d),
                                    body: JSON.stringify(l),
                                    signal: s.signal,
                                    openWhenHidden: !0,
                                    onopen: function(e) {
                                        return (0, r.Z)(function() {
                                            var t, n, r;
                                            return (0, c.__generator)(this, function(o) {
                                                switch (o.label) {
                                                    case 0:
                                                        if (t = e.headers.get("content-type") || "", e.ok && t.includes("text/event-stream")) return [2];
                                                        if (!t.includes("application/json")) return [3, 2];
                                                        return [4, e.json()];
                                                    case 1:
                                                        if (n = o.sent(), console.error(n), r = (null == n ? void 0 : n.error) || (null == n ? void 0 : n.detail)) {
                                                            if (e.status >= 500) throw new x((null == r ? void 0 : r.message) || r);
                                                            throw ((null == r ? void 0 : r.code) === "expired_session_key" || (null == r ? void 0 : r.code) === "invalid_api_key" || (null == r ? void 0 : r.code) === "token_expired") && window._oaiHandleSessionExpired(), new v((null == r ? void 0 : r.message) || r, e.status, null == r ? void 0 : r.code, null == r ? void 0 : r.type)
                                                        }
                                                        o.label = 2;
                                                    case 2:
                                                        throw new x
                                                }
                                            })
                                        })()
                                    },
                                    onmessage: function(e) {
                                        if ("[DONE]" === e.data) s.abort(), n({
                                            finish_reason: "stop"
                                        });
                                        else if ("ping" === e.event) console.error("PING RECEIVED", e);
                                        else try {
                                            var t, r = JSON.parse(e.data);
                                            if (r.error) throw new x(r.error.message);
                                            r.message ? n({
                                                message: r.message,
                                                threadId: r.conversation_id
                                            }) : n({
                                                id: r.id,
                                                text: r.choices[0].text,
                                                finish_reason: r.choices[0].finish_reason
                                            })
                                        } catch (o) {
                                            if (void 0 !== (t = o).userMessage) throw new x(o.message)
                                        }
                                    },
                                    onerror: function(e) {
                                        throw "Failed to fetch" === e.message && (e = new x("An error occurred. Either the engine you requested does not exist or there was another issue processing your request. If this issue persists please contact us through our help center at help.openai.com.")), n({
                                            err: e
                                        }), e
                                    }
                                }).catch(function(e) {
                                    (0, a.Z)(e, v) || (0, a.Z)(e, x) || console.error(e)
                                }), [2, s]
                            })
                        })()
                    }, e.runModerationApi = function(e, t, n) {
                        return this.fetch("".concat("https://chat.openai.com/backend-api", "/moderations"), {
                            method: "POST",
                            headers: (0, i.Z)({
                                "Content-Type": "application/json"
                            }, this.getAuthHeader()),
                            body: JSON.stringify({
                                input: e,
                                model: "text-moderation-playground",
                                conversation_id: t,
                                message_id: n
                            })
                        })
                    }, e.submitMessageFeedback = function(e) {
                        return this.fetch("".concat(b, "/conversation/message_feedback"), {
                            method: "POST",
                            headers: (0, i.Z)({
                                "Content-Type": "application/json"
                            }, this.getAuthHeader()),
                            body: JSON.stringify(e)
                        })
                    }, e
                }();
            Z.auth0Client = null;
            var k = Z
        },
        74511: function(e, t, n) {
            var r = n(70079);
            t.Z = function() {
                var e = (0, r.useRef)(!1);
                return (0, r.useEffect)(function() {
                    return e.current = !0,
                        function() {
                            e.current = !1
                        }
                }, []), (0, r.useCallback)(function() {
                    return e.current
                }, [])
            }
        },
        75998: function(e, t, n) {
            n.d(t, {
                MC: function() {
                    return o
                },
                VY: function() {
                    return r
                },
                s6: function() {
                    return a
                }
            });
            var r = "Explorer: ",
                o = {
                    Dashboard: "Dashboard: ",
                    Thread: "Thread: ",
                    CodeQA: "CodeQA: "
                },
                a = {
                    pageLoad: function(e) {
                        return "".concat(e, "Page Load")
                    },
                    editPrompt: function(e) {
                        return "".concat(e, "Edit Prompt")
                    },
                    cancelEditPrompt: function(e) {
                        return "".concat(e, "Cancel Edit Prompt")
                    },
                    editCompletion: function(e) {
                        return "".concat(e, "Edit Completion")
                    },
                    cancelEditCompletion: function(e) {
                        return "".concat(e, "Cancel Edit Completion")
                    },
                    generateCompletion: function(e) {
                        return "".concat(e, "Generate Completion")
                    },
                    completionFinished: function(e) {
                        return "".concat(e, "Completion Finished")
                    },
                    pauseCompletion: function(e) {
                        return "".concat(e, "Pause Completion")
                    },
                    copyToClipboard: function(e) {
                        return "".concat(e, "Copy Thread to Clipboard")
                    },
                    copyNodeToClipboard: function(e) {
                        return "".concat(e, "Copy Node to Clipboard")
                    },
                    newThread: function(e) {
                        return "".concat(e, "Create New Thread")
                    },
                    loadThread: function(e) {
                        return "".concat(e, "Load Thread")
                    },
                    renameThread: function(e) {
                        return "".concat(e, "Rename Thread")
                    },
                    changeNode: function(e) {
                        return "".concat(e, "Change Active Node")
                    },
                    enableFormattingThread: function(e) {
                        return "".concat(e, "Enable Thread Formatting")
                    },
                    disableFormattingThread: function(e) {
                        return "".concat(e, "Disable Thread Formatting")
                    },
                    enableFormatNode: function(e) {
                        return "".concat(e, "Enable Node Formatting")
                    },
                    disableFormatNode: function(e) {
                        return "".concat(e, "Disable Node Formatting")
                    },
                    addLink: function(e) {
                        return "".concat(e, "Add Link")
                    },
                    removeLink: function(e) {
                        return "".concat(e, "Remove Link")
                    },
                    reportResult: function(e) {
                        return "".concat(e, "Report Result")
                    },
                    thumbRating: function(e) {
                        return "".concat(e, "Rated Result")
                    },
                    allowContactForFeedback: function(e) {
                        return "".concat(e, "Allow contact for Feedback")
                    },
                    moderationError: function(e) {
                        return "".concat(e, "Moderation: Error")
                    },
                    promptFlaggedByModeration: function(e) {
                        return "".concat(e, "Moderation: Prompt Content Flagged")
                    },
                    promptBlockedByModeration: function(e) {
                        return "".concat(e, "Moderation: Prompt Content Blocked")
                    },
                    promptUsedRestrictedWords: function(e) {
                        return "".concat(e, "Moderation: Prompt Has Restricted Terms")
                    },
                    completionFlaggedByModeration: function(e) {
                        return "".concat(e, "Moderation: Completion Content Flagged")
                    },
                    completionBlockedByModeration: function(e) {
                        return "".concat(e, "Moderation: Completion Content Blocked")
                    },
                    clickDiscordLink: function(e) {
                        return "".concat(e, "Click Discord")
                    },
                    clickFaqLink: function(e) {
                        return "".concat(e, "Click FAQ")
                    }
                }
        },
        708: function(e, t, n) {
            n.d(t, {
                Af: function() {
                    return f
                },
                WS: function() {
                    return p
                }
            });
            var r, o = n(35025),
                a = n(31501),
                i = n(61079),
                s = n(79153),
                c = n.n(s),
                u = n(70079),
                l = n(75998),
                d = new(function() {
                    function e() {
                        (0, o.Z)(this, e), this._initializedMixpanel = !1, this._identified = !1, this._skipMixpanel = !0
                    }
                    var t = e.prototype;
                    return t.pageview = function(e, t) {
                        this._sendMixpanelEvent("View Page", (0, a.Z)({
                            page: e
                        }, t))
                    }, t.event = function(e, t) {
                        this._sendMixpanelEvent(e, t)
                    }, t.publicEvent = function(e, t) {
                        this._sendMixpanelEvent(e, t, !1)
                    }, t.setUser = function(e) {
                        if (!this._identified) {
                            var t = (e.email || "").toLowerCase();
                            this._skipMixpanel = function(e) {
                                for (var t = 0, n = 0, r = e.length; n < r; n++) t = (t << 5) - t + e.charCodeAt(n), t |= 0;
                                return (t - -2147483647) / 4294967294
                            }(t) > .2, (!this._skipMixpanel || e.features.includes("forceAnalytics")) && (this._initializeMixpanel(), c().identify(e.id), c().people.set({
                                $email: e.email,
                                $user_id: e.id,
                                name: e.name
                            })), this._identified = !0
                        }
                    }, t._initializeMixpanel = function() {
                        this._initializedMixpanel || (c().init("d7d7628de9d5e6160010b84db960a7ee"), this._initializedMixpanel = !0)
                    }, t._sendMixpanelEvent = function(e, t) {
                        var n = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2];
                        if (!this._skipMixpanel)(!n || this._identified) && (this._initializeMixpanel(), t = (0, i.Z)((0, a.Z)({}, t), {
                            openai_app: "API"
                        }), c().track(e, t))
                    }, e
                }()),
                f = (0, u.createContext)({}),
                p = function(e) {
                    var t = (0, u.useContext)(f),
                        n = e || t,
                        r = n.app,
                        o = n.origin;
                    return (0, u.useMemo)(function() {
                        return function(e, t) {
                            d.event(e("".concat(r).concat(l.MC.Thread)), (0, i.Z)((0, a.Z)({}, t), {
                                origin: o
                            }))
                        }
                    }, [r, o])
                };
            t.ZP = d
        }
    }
]);