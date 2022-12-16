"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [552], {
        30530: function(e, n, t) {
            var r, a, o, i, s, u, c, l, d, f;
            t.d(n, {
                Jq: function() {
                    return s
                },
                Os: function() {
                    return o
                },
                u9: function() {
                    return a
                },
                uU: function() {
                    return i
                }
            }), (u = r || (r = {})).Default = "default", u.Dark = "dark", (c = a || (a = {})).Retrieval = "retrieval", (l = o || (o = {})).Next = "next", l.Variant = "variant", l.Continue = "continue", (d = i || (i = {})).Unknown = "unknown", d.User = "user", d.Assistant = "assistant", d.System = "system", d.Critic = "critic", d.Tool = "tool", (f = s || (s = {})).Root = "root", f.System = "system", f.Prompt = "prompt", f.Completion = "completion", f.EditedPrompt = "edited_prompt", f.EditedCompletion = "edited_completion"
        },
        70168: function(e, n, t) {
            t.d(n, {
                Z: function() {
                    return rW
                }
            });
            var r, a, o, i, s = t(61706),
                u = t(33861),
                c = t(31501),
                l = t(61079),
                d = t(89874),
                f = t(14806),
                m = t(64705),
                h = t(25769),
                p = t(45813),
                x = t(35250),
                g = t(57976),
                v = t(6128),
                b = t(19841),
                y = t(91530),
                j = t.n(y),
                k = t(25787),
                w = t(11253),
                Z = t.n(w),
                C = t(70079),
                P = t(2827),
                N = t(1454),
                S = t(34303),
                I = t(708),
                T = t(75998),
                D = t(34888),
                E = t(30530),
                q = t(36489),
                R = t(40147),
                F = "{{Question}}",
                O = 'You are a brilliant and helpful coding assistant designed to help users with any programming-related questions or problems they may have.\n\nAs a programming expert, you have extensive knowledge about a variety of topics related to programming, including programming languages, syntax, debugging techniques, software design principles, code optimization, documentation, and more. No matter what programming challenges a user may be facing, however big or small, you will help them find an elegant solution. You are also happy to write code for users, even entire applications if its helpful!\n\nPlease respond in markdown format, making appropriate use of headers, numbered lists, tables, tagged code blocks, etc as needed. Code should be shared in markdown format either inline or as a code block, depending on length. Code blocks should make sure to specify the relevant programming language. Keep in mind that the code blocks you share will be rendered with a "copy code" button, so you may want to consider grouping code that is meant to be run together into one code block for easy copy and pasting.\n\nAdditionally, please note that you are not equipped to answer questions that fall outside of the realm of programming or programming-adjacent topics, so if a user asks you a totally unrelated question, kindly let them know that you are unable to assist them with that particular query and the reason why. Feel free to crack a joke about it, if appropriate. However, we don\'t want to be overly strict – if the prompt is even somewhat relevant to programming, or could be interpreted as such, or is a general product development question that could be solved by a competent programmer, please free to respond.';

            function M(e) {
                return {
                    processPrefix: function(n) {
                        return "<|endoftext|>".concat(n ? "".concat(n).concat(e) : "")
                    },
                    turnSeparator: "",
                    preProcessInput: function(n) {
                        return "".concat(n).concat(e)
                    },
                    promptSuffix: "",
                    preProcessRetrieval: function(e) {
                        var n;
                        return "---\n\n".concat(e, "\n\n---\n\n")
                    }
                }
            }

            function U(e) {
                return {
                    processPrefix: function(n) {
                        var t, r, a, o;
                        return "quality: high\n\n[System]\nAssistant is a large language model trained by OpenAI.\nKnowledge cutoff: 2021-09\nCurrent date: ".concat((r = (t = new Date(Date.now())).getFullYear(), a = t.getMonth() + 1, o = t.getDate(), a < 10 && (a = "0" + a), o < 10 && (o = "0" + o), "".concat(r, "-").concat(a, "-").concat(o)), "\nBrowsing: disabled").concat(e, "\n\n[System]\n").concat(n).concat(e)
                    },
                    turnSeparator: "\n\n",
                    preProcessInput: function(n, t) {
                        return "[".concat(t, "]\n").concat(n).concat(e)
                    },
                    promptSuffix: "[Assistant]\n",
                    preProcessRetrieval: function(n) {
                        return "\n\n[System]\n".concat(n).concat(e)
                    }
                }
            }
            var A = t(84251),
                B = t.n(A),
                z = t(8844),
                _ = (r = {}, (0, u.Z)(r, E.Jq.Root, E.uU.Unknown), (0, u.Z)(r, E.Jq.Prompt, E.uU.User), (0, u.Z)(r, E.Jq.Completion, E.uU.Assistant), (0, u.Z)(r, E.Jq.EditedPrompt, E.uU.User), (0, u.Z)(r, E.Jq.EditedCompletion, E.uU.Assistant), (0, u.Z)(r, E.Jq.System, E.uU.System), r);
            a = {}, (0, u.Z)(a, E.uU.System, E.Jq.System), (0, u.Z)(a, E.uU.User, E.Jq.Prompt), (0, u.Z)(a, E.uU.Assistant, E.Jq.Completion), (0, u.Z)(a, E.uU.Unknown, E.Jq.Completion), (0, u.Z)(a, E.uU.Critic, E.Jq.Completion), (0, u.Z)(a, E.uU.Tool, E.Jq.Completion);
            var J = function(e, n) {
                    for (var t = [], r = e[n]; t.push(r), "root" !== r.type;) r = e[r.parentId];
                    return t.reverse()
                },
                L = function(e, n) {
                    for (var t = e[n];;) {
                        if (0 === t.children.length) return t;
                        t = e[t.children.values().next().value]
                    }
                };

            function $(e, n, t, r, a) {
                return (0, l.Z)((0, c.Z)({
                    id: e,
                    children: [],
                    parentId: t,
                    type: r
                }, a ? {
                    metadata: a
                } : {}), {
                    message: {
                        id: (0, z.Z)(),
                        role: _[r],
                        content: {
                            content_type: "text",
                            parts: [n]
                        }
                    }
                })
            }

            function W(e, n, t) {
                return e[n] ? B()(e, (0, u.Z)({
                    $merge: (0, u.Z)({}, t.id, t)
                }, n, {
                    children: {
                        $apply: function(e) {
                            return Array.from(new Set((0, m.Z)(e).concat([t.id])))
                        }
                    }
                })) : (0, u.Z)({}, t.id, t)
            }

            function V(e, n, t) {
                return B()(e, (0, u.Z)({}, n, t))
            }

            function H(e) {
                return Q(e.message)
            }

            function Q(e) {
                return e.content.parts.join("")
            }

            function K(e, n, t) {
                return J(e, n).slice(-t).filter(function(e) {
                    return e.type !== E.Jq.Root && e.type !== E.Jq.System
                }).map(function(e) {
                    return H(e)
                }).join("\n\n")
            }

            function Y(e) {
                var n = e.id,
                    t = e.label;
                return e.checked, e.onChange, (0, x.jsxs)("div", {
                    className: "form-check",
                    children: [(0, x.jsx)("input", {
                        className: "form-check-input float-left mt-1 mr-2 h-4 w-4 cursor-pointer appearance-none rounded-sm border border-gray-300 bg-white bg-contain bg-center bg-no-repeat align-top transition duration-200 checked:border-blue-600 checked:bg-blue-600 focus:outline-none",
                        type: "checkbox",
                        value: "",
                        id: n
                    }), (0, x.jsx)("label", {
                        className: "form-check-label inline-block text-gray-800 dark:text-gray-100",
                        htmlFor: n,
                        children: t
                    })]
                })
            }
            var G = t(35025),
                X = t(42928),
                ee = t(74511);

            function en(e) {
                var n = e.text,
                    t = e.onDone,
                    r = (0, ee.Z)(),
                    a = (0, C.useState)(!0),
                    o = a[0],
                    i = a[1],
                    s = (0, C.useState)(0),
                    u = s[0],
                    c = s[1],
                    l = (0, C.useMemo)(function() {
                        return new et().humanTypingDelaysQuertyDistance(n)
                    }, [n]);
                return (0, C.useEffect)(function() {
                    n && o && (i(!0), l.forEach(function(e, n) {
                        setTimeout(function() {
                            r() && (c(n), n === l.length - 1 && (i(!1), t()))
                        }, e)
                    }))
                }, [l, r, o, t, n]), (0, x.jsxs)(x.Fragment, {
                    children: [n.substring(0, u + 1), o && "▋"]
                })
            }
            var et = function() {
                    function e() {
                        (0, G.Z)(this, e)
                    }
                    var n = e.prototype;
                    return n.qwertyDistance = function(e, n) {
                        var t, r, a, o = {
                                q: [0, 0],
                                w: [1, 0],
                                e: [2, 0],
                                r: [3, 0],
                                t: [4, 0],
                                y: [5, 0],
                                u: [6, 0],
                                i: [7, 0],
                                o: [8, 0],
                                p: [9, 0],
                                a: [0, 1],
                                s: [1, 1],
                                d: [2, 1],
                                f: [3, 1],
                                g: [4, 1],
                                h: [5, 1],
                                j: [6, 1],
                                k: [7, 1],
                                l: [8, 1],
                                z: [0, 2],
                                x: [1, 2],
                                c: [2, 2],
                                v: [3, 2],
                                b: [4, 2],
                                n: [5, 2],
                                m: [6, 2]
                            },
                            i = (0, X.Z)(null !== (t = o[e.toLowerCase()]) && void 0 !== t ? t : [0, 0], 2),
                            s = i[0],
                            u = i[1],
                            c = (0, X.Z)(null !== (r = o[n.toLowerCase()]) && void 0 !== r ? r : [0, 0], 2);
                        return Math.abs(s - c[0]) + Math.abs(u - c[1])
                    }, n.humanTypingDelaysQuertyDistance = function(e) {
                        for (var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 10, t = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 100, r = 0, a = [], o = 0; o < e.length; ++o) {
                            var i = void 0;
                            if (o > 0) {
                                var s = this.qwertyDistance(e[o - 1], e[o]);
                                i = 0 === s ? this.getRandomInt(n, Math.floor(t / 2)) : 1 === s ? this.getRandomInt(n, Math.floor(2 * t / 3)) : this.getRandomInt(n, t)
                            } else i = this.getRandomInt(n, t);
                            a.push(i + r), r += i
                        }
                        return a
                    }, n.getRandomInt = function(e, n) {
                        return Math.floor(Math.random() * (n - e + 1)) + e
                    }, e
                }(),
                er = t(62517),
                ea = t(46195);

            function eo() {
                var e = (0, f.Z)(["flex flex-col gap-2 text-gray-100 text-sm"]);
                return eo = function() {
                    return e
                }, e
            }

            function ei() {
                var e = (0, f.Z)(["flex py-3 px-3 items-center gap-3 relative rounded-md hover:bg-gray-500/10 cursor-pointer break-all\n", "\n"]);
                return ei = function() {
                    return e
                }, e
            }

            function es() {
                var e = (0, f.Z)(["flex py-3 px-3 items-center gap-3 relative rounded-md hover:bg-gray-500/10 cursor-pointer hover:pr-12 break-all\n", "\n"]);
                return es = function() {
                    return e
                }, e
            }

            function eu() {
                var e = (0, f.Z)(["text-sm border-none bg-transparent p-0 m-0 w-full"]);
                return eu = function() {
                    return e
                }, e
            }

            function ec() {
                var e = (0, f.Z)(["flex-1 text-ellipsis max-h-5 overflow-hidden break-all"]);
                return ec = function() {
                    return e
                }, e
            }

            function el() {
                var e = (0, f.Z)(["absolute flex right-1 z-10 text-gray-300\n", ""]);
                return el = function() {
                    return e
                }, e
            }

            function ed() {
                var e = (0, f.Z)(["p-1 hover:text-white"]);
                return ed = function() {
                    return e
                }, e
            }

            function ef(e) {
                var n = e.items,
                    t = e.activeId,
                    r = e.onNextPage,
                    a = e.hasNextPage,
                    o = e.onNewThread,
                    i = e.onRefetchHistory,
                    s = e.newChatName,
                    u = (0, C.useRef)(null);
                return (0, C.useLayoutEffect)(function() {
                    u.current && u.current.scrollIntoView()
                }, []), (0, x.jsxs)(em, {
                    children: [n.map(function(e) {
                        return (0, x.jsx)(eh, {
                            id: e.id,
                            title: e.title,
                            newChatName: s,
                            active: t === e.id,
                            forwardRef: t === e.id ? u : void 0,
                            onNewThread: o,
                            onRefetchHistory: i
                        }, "Entry-".concat(e.id))
                    }), a && (0, x.jsx)(er.z, {
                        as: "button",
                        onClick: r,
                        color: "dark",
                        className: "m-auto mb-2",
                        size: "small",
                        children: "Show more"
                    })]
                })
            }
            var em = S.Z.div(eo());

            function eh(e) {
                var n = e.id,
                    t = e.title,
                    r = e.active,
                    a = e.onNewThread,
                    o = e.onRefetchHistory,
                    i = e.newChatName,
                    s = e.forwardRef,
                    u = (0, I.WS)(),
                    c = (0, k.useRouter)(),
                    l = (0, C.useState)(!1),
                    d = l[0],
                    f = l[1],
                    m = (0, C.useRef)(null),
                    h = (0, C.useState)(""),
                    p = h[0],
                    g = h[1],
                    v = (0, C.useContext)(R.yP).href,
                    y = (0, C.useState)(!1),
                    w = y[0],
                    Z = y[1],
                    P = (0, C.useCallback)(function(e) {
                        var r, a;
                        if (null == e || e.preventDefault(), f(!1), (null === (r = m.current) || void 0 === r ? void 0 : r.value) && (null === (a = m.current) || void 0 === a ? void 0 : a.value) !== t) {
                            var o = m.current.value;
                            q.ZP.patchConversation(n, {
                                title: o
                            }), g(o), u(T.s6.renameThread, {
                                threadId: n,
                                content: o
                            })
                        }
                    }, [u, n, t]),
                    S = (0, C.useCallback)(function(e) {
                        "Enter" === e.key && P()
                    }, [P]),
                    D = (0, C.useCallback)(function() {
                        q.ZP.patchConversation(n, {
                            is_visible: !1
                        }).then(function() {
                            o()
                        }), c.asPath === v ? a() : c.replace({
                            pathname: v
                        })
                    }, [v, n, a, o, c]),
                    E = (0, C.useCallback)(function(e) {
                        e.preventDefault(), u(T.s6.loadThread, {
                            threadId: n
                        }), c.push({
                            pathname: c.pathname,
                            query: {
                                chatId: n
                            }
                        })
                    }, [u, n, c]);
                (0, C.useEffect)(function() {
                    Z(!1), r && i && !p && Z(!0)
                }, [r, i, p]);
                var F = (0, C.useCallback)(function() {
                        r && w && Z(!1)
                    }, [r, w]),
                    O = p || r && i || t;
                if (d) return (0, x.jsxs)(ex, {
                    $active: r,
                    className: "",
                    children: [(0, x.jsx)(ea.ZP, {
                        icon: N.IC0,
                        className: "flex-shrink-0"
                    }), (0, x.jsx)(eg, {
                        ref: m,
                        type: "text",
                        defaultValue: O,
                        autoFocus: !0,
                        onKeyDown: S,
                        className: "mr-0"
                    }), (0, x.jsxs)(eb, {
                        $active: !0,
                        children: [(0, x.jsx)(ey, {
                            onClick: function(e) {
                                e.preventDefault(), f(!1)
                            },
                            children: (0, x.jsx)(ea.ZP, {
                                icon: N.q5L
                            })
                        }), (0, x.jsx)(ey, {
                            onClick: P,
                            children: (0, x.jsx)(ea.ZP, {
                                icon: N.mW3
                            })
                        })]
                    })]
                });
                var M = w && r;
                return (0, x.jsxs)(ep, {
                    onClick: r ? j() : E,
                    $active: r,
                    className: (0, b.Z)("group", M && "animate-flash"),
                    ref: s,
                    children: [(0, x.jsx)(ea.ZP, {
                        icon: N.IC0
                    }), (0, x.jsx)(ev, {
                        children: M ? (0, x.jsx)(en, {
                            text: O,
                            onDone: F
                        }) : O
                    }), r && (0, x.jsxs)(eb, {
                        $active: r,
                        children: [(0, x.jsx)(ey, {
                            onClick: function(e) {
                                e.preventDefault(), f(!0)
                            },
                            children: (0, x.jsx)(ea.ZP, {
                                icon: N.Nte
                            })
                        }), (0, x.jsx)(ey, {
                            onClick: D,
                            children: (0, x.jsx)(ea.ZP, {
                                icon: N.We9
                            })
                        })]
                    })]
                })
            }
            var ep = S.Z.a(ei(), function(e) {
                    return e.$active ? "pr-12 bg-gray-800 hover:bg-gray-800" : "hover:pr-4"
                }),
                ex = S.Z.div(es(), function(e) {
                    return e.$active && "pr-12 bg-gray-800 hover:bg-gray-800"
                }),
                eg = S.Z.input(eu()),
                ev = S.Z.div(ec()),
                eb = S.Z.div(el(), function(e) {
                    return e.$active ? "visible" : "invisible group-hover:visible"
                }),
                ey = S.Z.button(ed()),
                ej = t(65831),
                ek = t(66658),
                ew = t(1771),
                eZ = t(55260),
                eC = t(15762),
                eP = t(9313),
                eN = t.n(eP),
                eS = t(7137),
                eI = t(83632),
                eT = t(48957);

            function eD() {
                var e = (0, f.Z)(["flex py-3 px-3 items-center gap-3 rounded-md hover:bg-gray-500/10 transition-colors duration-200 text-white cursor-pointer text-sm"]);
                return eD = function() {
                    return e
                }, e
            }

            function eE() {
                var e = (0, f.Z)(["flex-col flex-1 overflow-y-auto border-b border-white/20"]);
                return eE = function() {
                    return e
                }, e
            }
            var eq = S.Z.a(eD()),
                eR = S.Z.div(eE());

            function eF(e) {
                var n, t, r = e.onNewThread,
                    a = e.onOpenDebugPanel,
                    o = e.pages,
                    i = e.settings,
                    s = e.children,
                    u = (0, I.WS)(),
                    c = (0, eC.F)(),
                    l = c.theme,
                    d = c.setTheme,
                    f = (t = (0, eT.useSession)().data, (0, C.useMemo)(function() {
                        var e, n;
                        return new Set(null !== (n = null == t ? void 0 : null === (e = t.user) || void 0 === e ? void 0 : e.features) && void 0 !== n ? n : [])
                    }, [null == t ? void 0 : null === (n = t.user) || void 0 === n ? void 0 : n.features])),
                    m = (0, k.useRouter)(),
                    h = m.pathname,
                    p = (0, C.useContext)(R.yP),
                    g = p.id,
                    v = p.href,
                    b = (0, C.useMemo)(function() {
                        var e;
                        return (null === (e = m.query.chatId) || void 0 === e ? void 0 : e[0]) ? (0, x.jsx)(eN(), {
                            href: v,
                            children: (0, x.jsxs)(eq, {
                                className: "mb-2 flex-shrink-0 border border-white/20",
                                children: [(0, x.jsx)(ea.ZP, {
                                    icon: N.OvN
                                }), "New Chat"]
                            })
                        }, "Page-reset") : (0, x.jsxs)(eq, {
                            onClick: r,
                            className: "mb-2 flex-shrink-0 border border-white/20",
                            children: [(0, x.jsx)(ea.ZP, {
                                icon: N.OvN
                            }), "New Chat"]
                        })
                    }, [v, r, m.query.chatId]),
                    y = o.filter(function(e) {
                        return h.indexOf(e.href)
                    }),
                    j = (0, C.useCallback)(function() {
                        u(T.s6.clickDiscordLink)
                    }, [u]),
                    w = (0, C.useCallback)(function() {
                        u(T.s6.clickFaqLink)
                    }, [u]);
                return (0, x.jsx)("div", {
                    className: "flex h-full w-full flex-1 items-start border-white/20",
                    children: (0, x.jsxs)("nav", {
                        className: "flex h-full flex-1 flex-col space-y-1 p-2",
                        children: [b, (0, x.jsx)(eR, {
                            children: s
                        }), f.has("debug") && (0, x.jsxs)(eq, {
                            onClick: function() {
                                return a(!0)
                            },
                            children: [(0, x.jsx)(ea.ZP, {
                                icon: N.cDN
                            }), "Debug"]
                        }), (0, x.jsxs)(eq, {
                            onClick: function() {
                                return d("dark" === l ? "light" : "dark")
                            },
                            children: [(0, x.jsx)(ea.ZP, {
                                icon: "dark" === l ? N.kXG : N.wOW
                            }), "dark" === l ? "Light" : "Dark", " Mode"]
                        }), "chat" === g && (0, x.jsxs)(eq, {
                            href: "https://discord.gg/openai",
                            target: "_blank",
                            onClick: j,
                            children: [(0, x.jsx)(ea.ZP, {
                                icon: eS.j2d
                            }), "OpenAI Discord"]
                        }), "chat" === g && (0, x.jsxs)(eq, {
                            href: "https://help.openai.com/en/collections/3742473-chatgpt",
                            target: "_blank",
                            onClick: w,
                            children: [(0, x.jsx)(ea.ZP, {
                                icon: N.AlO
                            }), "Updates & FAQ"]
                        }), i, y.length > 1 && (0, x.jsx)(eN(), {
                            href: "/",
                            children: (0, x.jsxs)(eq, {
                                children: [(0, x.jsx)(ea.ZP, {
                                    icon: N.m6D
                                }), "Home"]
                            })
                        }, "Page-home"), (0, x.jsxs)(eq, {
                            onClick: function() {
                                return (0, eI.w)()
                            },
                            children: [(0, x.jsx)(ea.ZP, {
                                icon: N.xqh
                            }), "Log out"]
                        })]
                    })
                })
            }
            var eO = function(e) {
                    var n = e.onNewThread,
                        t = e.onOpenDebugPanel,
                        r = e.pages,
                        a = e.children,
                        o = e.settings;
                    return (0, x.jsx)("div", {
                        className: "hidden bg-gray-900 md:fixed md:inset-y-0 md:flex md:w-60 md:flex-col",
                        children: (0, x.jsx)("div", {
                            className: "flex h-full min-h-0 flex-col ",
                            children: (0, x.jsx)(eF, {
                                onNewThread: n,
                                onOpenDebugPanel: t,
                                pages: r,
                                settings: o,
                                children: a
                            })
                        })
                    })
                },
                eM = function(e) {
                    var n = e.onSidebarOpen,
                        t = e.sidebarOpen,
                        r = e.onNewThread,
                        a = e.onOpenDebugPanel,
                        o = e.pages,
                        i = e.children,
                        s = e.settings;
                    return (0, x.jsx)(ew.u.Root, {
                        show: t,
                        as: C.Fragment,
                        children: (0, x.jsxs)(eZ.V, {
                            as: "div",
                            className: "relative z-40 md:hidden",
                            onClose: n,
                            children: [(0, x.jsx)(ew.u.Child, {
                                as: C.Fragment,
                                enter: "transition-opacity ease-linear duration-300",
                                enterFrom: "opacity-0",
                                enterTo: "opacity-100",
                                leave: "transition-opacity ease-linear duration-300",
                                leaveFrom: "opacity-100",
                                leaveTo: "opacity-0",
                                children: (0, x.jsx)("div", {
                                    className: "fixed inset-0 bg-gray-600 bg-opacity-75"
                                })
                            }), (0, x.jsxs)("div", {
                                className: "fixed inset-0 z-40 flex",
                                children: [(0, x.jsx)(ew.u.Child, {
                                    as: C.Fragment,
                                    enter: "transition ease-in-out duration-300 transform",
                                    enterFrom: "-translate-x-full",
                                    enterTo: "translate-x-0",
                                    leave: "transition ease-in-out duration-300 transform",
                                    leaveFrom: "translate-x-0",
                                    leaveTo: "-translate-x-full",
                                    children: (0, x.jsxs)(eZ.V.Panel, {
                                        className: "relative flex w-full max-w-xs flex-1 flex-col bg-gray-800",
                                        children: [(0, x.jsx)(ew.u.Child, {
                                            as: C.Fragment,
                                            enter: "ease-in-out duration-300",
                                            enterFrom: "opacity-0",
                                            enterTo: "opacity-100",
                                            leave: "ease-in-out duration-300",
                                            leaveFrom: "opacity-100",
                                            leaveTo: "opacity-0",
                                            children: (0, x.jsx)("div", {
                                                className: "absolute top-0 right-0 -mr-12 pt-2",
                                                children: (0, x.jsxs)("button", {
                                                    type: "button",
                                                    className: "ml-1 flex h-10 w-10 items-center justify-center focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white",
                                                    onClick: function() {
                                                        return n(!1)
                                                    },
                                                    children: [(0, x.jsx)("span", {
                                                        className: "sr-only",
                                                        children: "Close sidebar"
                                                    }), (0, x.jsx)(ea.ZP, {
                                                        icon: N.q5L,
                                                        size: "medium",
                                                        className: "text-white",
                                                        "aria-hidden": "true"
                                                    })]
                                                })
                                            })
                                        }), (0, x.jsx)(eF, {
                                            onNewThread: r,
                                            onOpenDebugPanel: a,
                                            pages: o,
                                            settings: s,
                                            children: i
                                        })]
                                    })
                                }), (0, x.jsx)("div", {
                                    className: "w-14 flex-shrink-0"
                                })]
                            })]
                        })
                    })
                },
                eU = function(e) {
                    var n = e.onSidebarOpen;
                    return (0, x.jsx)("div", {
                        className: "sticky top-0 z-10 border-b bg-white pl-1 pt-1 text-gray-600 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-100 sm:pl-3 sm:pt-3 md:hidden",
                        children: (0, x.jsxs)("button", {
                            type: "button",
                            className: "-ml-0.5 -mt-0.5 inline-flex h-10 w-10 items-center justify-center rounded-md hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white dark:hover:text-white",
                            onClick: function() {
                                return n(!0)
                            },
                            children: [(0, x.jsx)("span", {
                                className: "sr-only",
                                children: "Open sidebar"
                            }), (0, x.jsx)(ea.ZP, {
                                icon: N.cur,
                                "aria-hidden": "true",
                                size: "medium"
                            })]
                        })
                    })
                },
                eA = t(13002);

            function eB() {
                var e = (0, f.Z)(["flex flex-row gap-2 mb-4"]);
                return eB = function() {
                    return e
                }, e
            }

            function ez() {
                var e = (0, f.Z)(["bg-gray-200 rounded-md text-gray-500 text-xs flex flex-row items-center gap-1 px-2 py-1"]);
                return ez = function() {
                    return e
                }, e
            }

            function e_() {
                var e = (0, f.Z)(["flex items-center gap-1"]);
                return e_ = function() {
                    return e
                }, e
            }

            function eJ() {
                var e = (0, f.Z)([""]);
                return eJ = function() {
                    return e
                }, e
            }
            var eL = function(e) {
                    var n = e.urls,
                        t = e.onRemoveUrl,
                        r = e.clickable,
                        a = e.className;
                    return 0 === n.size ? null : (0, x.jsx)(e$, {
                        className: a,
                        children: Array.from(n).map(function(e) {
                            return (0, x.jsxs)(eW, {
                                children: [(0, x.jsx)(N.XKb, {}), (0, x.jsxs)(eV, (0, l.Z)((0, c.Z)({}, r ? {
                                    href: e,
                                    target: "_blank",
                                    disabled: !1
                                } : {
                                    disabled: !0
                                }), {
                                    children: [new URL(e).hostname, r && (0, x.jsx)(N.AlO, {})]
                                })), t && (0, x.jsx)(eH, {
                                    onClick: function() {
                                        return t(e)
                                    },
                                    children: (0, x.jsx)(N.q5L, {})
                                })]
                            }, e)
                        })
                    })
                },
                e$ = S.Z.div(eB()),
                eW = S.Z.div(ez()),
                eV = S.Z.a(e_()),
                eH = S.Z.button(eJ()),
                eQ = C.memo(eL);

            function eK() {
                var e = (0, f.Z)(["\npx-2 py-1 rounded-md  flex items-center gap-2 text-white hover:bg-white/20 hover:text-white dark:hover:bg-gray-100\n", "\n", "\n"]);
                return eK = function() {
                    return e
                }, e
            }

            function eY() {
                var e = (0, f.Z)(["flex items-center gap-1 text-xs mt-1 md:text-sm md:mt-3 text-gray-500 min-h-[32px] md:min-h-[34px]"]);
                return eY = function() {
                    return e
                }, e
            }

            function eG() {
                var e = (0, f.Z)(['\n  flex items-center gap-1\n  after:content-[""] after:w-[1px] after:h-[15px] after:bg-gray-300\n  last:after:bg-transparent\n']);
                return eG = function() {
                    return e
                }, e
            }
            var eX = C.createContext({
                currentPalette: !1
            });
            eX.displayName = "PaletteContext";
            var e0 = S.Z.button(eK(), function(e) {
                return e.active && "text-blue-500"
            }, function(e) {
                return e.selected && "bg-gray-200 dark:bg-gray-800"
            });

            function e1(e) {
                var n = e.icon,
                    t = e.children,
                    r = e.onClick;
                return (0, x.jsx)(e2, {
                    children: (0, x.jsxs)(e0, {
                        selected: !1,
                        onClick: r,
                        active: !1,
                        children: [(0, x.jsx)(ea.ZP, {
                            icon: n
                        }), t]
                    })
                })
            }
            S.Z.div(eY());
            var e2 = S.Z.div(eG());

            function e3(e) {
                var n = e.active,
                    t = e.title,
                    r = e.id,
                    a = e.onClick,
                    o = e.icon,
                    i = (0, C.useContext)(eX),
                    s = i.currentPalette,
                    u = i.setCurrentPalette,
                    c = (0, C.useCallback)(function(e) {
                        e.preventDefault(), n || null == u || u(function(e) {
                            return e !== r && r
                        }), null == a || a()
                    }, [n, r, a, u]);
                return (0, x.jsx)(e2, {
                    children: (0, x.jsxs)(e0, {
                        selected: s === r,
                        onClick: c,
                        active: n,
                        children: [(0, x.jsx)(ea.ZP, {
                            icon: o
                        }), t]
                    })
                })
            }

            function e4() {
                var e = (0, f.Z)(["relative flex flex-col"]);
                return e4 = function() {
                    return e
                }, e
            }

            function e5() {
                var e = (0, f.Z)(["flex mt-2 gap-2"]);
                return e5 = function() {
                    return e
                }, e
            }

            function e6() {
                var e = (0, f.Z)(["text-red-500 text-xs font-mono"]);
                return e6 = function() {
                    return e
                }, e
            }
            var e8 = {
                    id: "editPrompt",
                    title: "Edit prompt",
                    icon: N.SwK,
                    width: "full"
                },
                e7 = function(e) {
                    var n = e.onEditPromptEngineering,
                        t = e.promptEngineering,
                        r = !t.includes(F);
                    return (0, x.jsxs)(nn, {
                        children: [r && (0, x.jsx)(nr, {
                            children: 'Missing "'.concat(F, '" in prompt')
                        }), (0, x.jsx)(P.ZP, {
                            onChange: function(e) {
                                n(e.currentTarget.value)
                            },
                            className: "m-0 w-full resize-none rounded-md bg-transparent font-mono text-sm focus:ring-0 focus-visible:ring-0",
                            value: t,
                            style: {
                                maxHeight: "70vh"
                            }
                        }), (0, x.jsx)(nt, {
                            children: (0, x.jsx)(er.z, {
                                as: "button",
                                color: "neutral",
                                onClick: function(e) {
                                    e.preventDefault(), n(O)
                                },
                                children: "Reset"
                            })
                        })]
                    })
                };
            e7.displayName = "EditPromptPalette";
            var e9, ne = function() {
                    return (0, x.jsx)(e3, (0, c.Z)({}, e8))
                },
                nn = S.Z.div(e4()),
                nt = S.Z.div(e5()),
                nr = S.Z.div(e6()),
                na = (0, l.Z)((0, c.Z)({}, e8), {
                    Palette: C.memo(e7),
                    Button: ne
                });
            (e9 = o || (o = {})).Small = "small", e9.Medium = "medium", e9.Large = "large", e9.XLarge = "xlarge", e9.Full = "full";
            var no = (i = {}, (0, u.Z)(i, o.Small, 640), (0, u.Z)(i, o.Medium, 768), (0, u.Z)(i, o.Large, 1024), (0, u.Z)(i, o.XLarge, 1280), (0, u.Z)(i, o.Full, 1536), i);

            function ni() {
                var e, n, t, r, a, i;
                return e = "(max-width: ".concat(no[o.Large], "px)"), n = function() {
                    i(t(e))
                }, t = function(e) {
                    return window.matchMedia(e).matches
                }, a = (r = (0, C.useState)(t(e)))[0], i = r[1], (0, C.useEffect)(function() {
                    var t = window.matchMedia(e);
                    return n(), t.addListener ? t.addListener(n) : t.addEventListener("change", n),
                        function() {
                            t.removeListener ? t.removeListener(n) : t.removeEventListener("change", n)
                        }
                }, [e]), a
            }
            var ns = t(29996);

            function nu() {
                var e = (0, f.Z)(["relative flex gap-2"]);
                return nu = function() {
                    return e
                }, e
            }

            function nc() {
                var e = (0, f.Z)(["border flex items-center rounded-md text-xs p-1"]);
                return nc = function() {
                    return e
                }, e
            }
            var nl = {
                    id: "link",
                    title: "Add text from link",
                    icon: N.j4u,
                    width: "1/2"
                },
                nd = function(e) {
                    var n = e.onAddArtifact,
                        t = (0, C.useRef)(null),
                        r = (0, C.useCallback)(function(e) {
                            var r;
                            if (e.preventDefault(), null === (r = t.current) || void 0 === r ? void 0 : r.value) {
                                var a = new URL(t.current.value);
                                n(a.href)
                            }
                        }, [n]);
                    return (0, x.jsx)(nm, {
                        children: (0, x.jsx)(ns.Z, {
                            name: "link",
                            ref: t,
                            icon: N.qQs,
                            onInputIconClick: r,
                            className: "w-full"
                        })
                    })
                },
                nf = function(e) {
                    var n = e.isOnClipboard,
                        t = e.currentUrl,
                        r = e.isTextareaFocused,
                        a = e.onClick,
                        o = ni();
                    return (0, x.jsx)(e3, {
                        icon: N.j4u,
                        title: (0, x.jsxs)(x.Fragment, {
                            children: [n && (0, x.jsxs)(x.Fragment, {
                                children: ["Add text from", " ", (0, x.jsx)(eW, {
                                    children: new URL(t).hostname
                                }), !o && r && (0, x.jsxs)(nh, {
                                    children: [(0, x.jsx)(N.zv2, {
                                        className: "mr-1"
                                    }), "+ V"]
                                })]
                            }), !n && "Add text from link"]
                        }),
                        id: nl.id,
                        onClick: a,
                        active: n
                    })
                },
                nm = S.Z.div(nu()),
                nh = S.Z.span(nc()),
                np = (0, l.Z)((0, c.Z)({}, nl), {
                    Palette: C.memo(nd),
                    Button: nf
                });

            function nx() {
                var e = (0, f.Z)(["flex hover:bg-gray-100 py-1 relative pr-5 pl-1 rounded-md"]);
                return nx = function() {
                    return e
                }, e
            }

            function ng() {
                var e = (0, f.Z)(["flex-shrink-0 font-semibold mr-1"]);
                return ng = function() {
                    return e
                }, e
            }

            function nv() {
                var e = (0, f.Z)(["truncate"]);
                return nv = function() {
                    return e
                }, e
            }
            var nb = {
                    id: "prompts",
                    title: "Select prompt",
                    icon: N.yK7,
                    width: "2/3"
                },
                ny = function(e) {
                    var n = e.onInsertText;
                    return (0, x.jsx)(x.Fragment, {
                        children: nC.map(function(e) {
                            return (0, x.jsxs)(nk, {
                                className: "group",
                                onClick: function(t) {
                                    t.preventDefault(), n(e.content)
                                },
                                children: [(0, x.jsxs)(nw, {
                                    children: [e.name, ":"]
                                }), (0, x.jsx)(nZ, {
                                    children: e.content
                                }), (0, x.jsx)(ea.ZP, {
                                    icon: N.Rgz,
                                    className: "invisible absolute right-1 top-1.5 group-hover:visible"
                                })]
                            }, e.id)
                        })
                    })
                };
            ny.displayName = "PromptPalette";
            var nj = function() {
                    return (0, x.jsx)(e3, (0, c.Z)({}, nb))
                },
                nk = S.Z.button(nx()),
                nw = S.Z.div(ng()),
                nZ = S.Z.div(nv()),
                nC = [{
                    id: "summarize",
                    name: "Summarize",
                    content: 'Break down this content into a series of super short, simply written sections that follow a logical flow designed to help me understand the content as quickly as possible. Each section should include a "title" (1-5 words), the primary "content" (1-2 sentence), and an optional additional sentence for "detail" (1 sentence). The first section should provide a concise summary of the content.'
                }, {
                    id: "format",
                    name: "Format",
                    content: "(When responding to the following prompts, please make sure to properly style your response using Github Flavored Markdown. Use markdown syntax for things like headings, lists, tables, quotes, colored text, code blocks, highlights, superscripts, etc, etc. For emojis, use unicode. Make sure not to mention markdown or stying in your actual response.)\n"
                }, {
                    id: "code",
                    name: "Programming question",
                    content: O
                }],
                nP = (0, l.Z)((0, c.Z)({}, nb), {
                    Palette: C.memo(ny),
                    Button: nj
                }),
                nN = {
                    id: "editPrompt",
                    title: "Edit prompt",
                    icon: N.SwK,
                    width: "full"
                },
                nS = function(e) {
                    var n = e.onToggleQueryData,
                        t = e.queryDataEnabled,
                        r = function(e) {
                            n(e.currentTarget.checked)
                        };
                    return (0, x.jsxs)(e2, {
                        children: [(0, x.jsx)("div", {
                            className: "flex h-5 items-center pl-1",
                            children: (0, x.jsx)("input", {
                                id: "queryData",
                                name: "queryData",
                                type: "checkbox",
                                className: "h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500",
                                onChange: r,
                                checked: t
                            })
                        }), (0, x.jsx)("div", {
                            className: "ml-1 cursor-pointer pr-1 text-sm dark:text-gray-300",
                            children: (0, x.jsx)("label", {
                                htmlFor: "queryData",
                                children: "Include retrieval data (beta)"
                            })
                        })]
                    })
                },
                nI = (0, l.Z)((0, c.Z)({}, nN), {
                    Button: nS
                }),
                nT = {
                    id: "reroll",
                    title: "Retry",
                    icon: N.Qxo,
                    width: "full"
                },
                nD = function(e) {
                    var n = e.onClick;
                    return (0, x.jsx)(e1, {
                        icon: nT.icon,
                        onClick: n,
                        children: nT.title
                    })
                },
                nE = (0, l.Z)((0, c.Z)({}, nT), {
                    Button: nD
                });

            function nq() {
                var e = (0, f.Z)(["relative flex gap-2"]);
                return nq = function() {
                    return e
                }, e
            }

            function nR() {
                var e = (0, f.Z)(["px-4 border rounded-md mt-1"]);
                return nR = function() {
                    return e
                }, e
            }
            var nF = {
                    id: "snippet",
                    title: "Add snippet",
                    icon: N.xqv,
                    width: "1/2"
                },
                nO = function(e) {
                    var n = e.onInsertText,
                        t = (0, C.useRef)(null),
                        r = (0, C.useCallback)(function(e) {
                            e.preventDefault();
                            var r = nB.find(function(e) {
                                var n;
                                return e.value === (null == t ? void 0 : null === (n = t.current) || void 0 === n ? void 0 : n.value)
                            });
                            r && n(r.content)
                        }, [n]);
                    return (0, x.jsxs)(nU, {
                        children: [(0, x.jsx)("label", {
                            htmlFor: "language",
                            className: "hidden text-sm font-medium text-gray-700",
                            children: "Supported languages"
                        }), (0, x.jsxs)("select", {
                            ref: t,
                            id: "language",
                            name: "language",
                            className: "mt-1 block w-full rounded-md border-gray-300 py-2 pl-3 pr-10 text-base focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm",
                            children: [(0, x.jsxs)("option", {
                                disabled: !0,
                                selected: !0,
                                children: [" ", "-- select a language --", " "]
                            }), nB.map(function(e) {
                                return (0, x.jsx)("option", {
                                    value: e.value,
                                    children: e.name
                                }, "option-".concat(e.value))
                            })]
                        }), (0, x.jsx)(nA, {
                            onClick: r,
                            children: (0, x.jsx)(N.qQs, {})
                        })]
                    })
                };
            nO.displayName = "SnippetPalette";
            var nM = function() {
                    return (0, x.jsx)(e3, (0, c.Z)({}, nF))
                },
                nU = S.Z.div(nq()),
                nA = S.Z.button(nR()),
                nB = [{
                    name: "Plain text",
                    value: "plaintext",
                    icon: N.RUS,
                    content: "```\n{INSERT CODE HERE}\n```"
                }, {
                    name: "Python",
                    value: "python",
                    icon: eS.osz,
                    content: "```python\n{INSERT CODE HERE}\n```"
                }, {
                    name: "JavaScript",
                    value: "javascript",
                    icon: N.xqv,
                    content: "```js\n{INSERT CODE HERE}\n```"
                }, {
                    name: "TypeScript",
                    value: "typescript",
                    icon: N.xqv,
                    content: "```ts\n{INSERT CODE HERE}\n```"
                }, ],
                nz = (0, l.Z)((0, c.Z)({}, nF), {
                    Palette: C.memo(nO),
                    Button: nM
                });
            na.Button;
            var n_ = na.Palette;
            np.Button;
            var nJ = np.Palette;
            nP.Button;
            var nL = nP.Palette;
            nz.Button;
            var n$ = nz.Palette,
                nW = nI.Button,
                nV = nE.Button;

            function nH() {
                var e = (0, f.Z)(["\nabsolute z-10 bg-white rounded-md shadow-md border p-2 text-sm ml-4 text-gray-700\n", "\n", "\n", "\n"]);
                return nH = function() {
                    return e
                }, e
            }

            function nQ() {
                var e = (0, f.Z)(["flex items-center mb-2 font-semibold"]);
                return nQ = function() {
                    return e
                }, e
            }

            function nK() {
                var e = (0, f.Z)(["flex flex-col"]);
                return nK = function() {
                    return e
                }, e
            }

            function nY(e) {
                var n = e.onInsertText,
                    t = e.onAddArtifact,
                    r = e.onEditPromptEngineering,
                    a = e.promptEngineering,
                    o = e.paletteType,
                    i = e.isOpen,
                    s = e.className,
                    u = (0, C.useMemo)(function() {
                        switch (o) {
                            case "editPrompt":
                                return na;
                            case "link":
                                return np;
                            case "prompts":
                                return nP;
                            case "snippet":
                                return nz
                        }
                    }, [o]);
                return u ? (0, x.jsx)(ew.u, {
                    show: i,
                    enterFrom: "opacity-0",
                    enterTo: "opacity-100",
                    leave: "transition-opacity duration-500",
                    leaveFrom: "opacity-100",
                    leaveTo: "opacity-0",
                    children: (0, x.jsxs)(nG, {
                        className: s,
                        width: u.width,
                        children: [(0, x.jsxs)(nX, {
                            children: [(null == u ? void 0 : u.icon) && (0, x.jsx)(ea.ZP, {
                                icon: u.icon,
                                className: "mr-2"
                            }), (0, x.jsx)("span", {
                                children: (null == u ? void 0 : u.title) || ""
                            })]
                        }), (0, x.jsxs)(n0, {
                            children: ["link" === o && (0, x.jsx)(nJ, {
                                onAddArtifact: t
                            }), "prompts" === o && (0, x.jsx)(nL, {
                                onInsertText: n
                            }), "snippet" === o && (0, x.jsx)(n$, {
                                onInsertText: n
                            }), "editPrompt" === o && (0, x.jsx)(n_, {
                                onEditPromptEngineering: r,
                                promptEngineering: a
                            })]
                        })]
                    })
                }) : null
            }
            var nG = S.Z.div(nH(), function(e) {
                    return "1/2" === e.width && "w-[calc(100%-34px)] lg:w-1/2"
                }, function(e) {
                    return "2/3" === e.width && "w-[calc(100%-34px)] lg:w-2/3"
                }, function(e) {
                    return "full" === e.width && "w-[calc(100%-34px)] lg:w-[calc(100%-20px)]"
                }),
                nX = S.Z.div(nQ()),
                n0 = S.Z.div(nK());

            function n1() {
                var e = (0, f.Z)(["\nflex flex-col w-full py-2 pl-3 md:py-3 md:pl-4 relative\n", "\nborder border-black/10 bg-white dark:border-gray-900/50 dark:text-white dark:bg-gray-700 rounded-md shadow-[0_0_10px_rgba(0,0,0,0.10)] dark:shadow-[0_0_15px_rgba(0,0,0,0.10)]\n"]);
                return n1 = function() {
                    return e
                }, e
            }

            function n2() {
                var e = (0, f.Z)(["\nabsolute p-1 rounded-md text-gray-500 bottom-1.5 right-1 md:bottom-2.5 md:right-2 hover:bg-gray-100 dark:hover:text-gray-400 dark:hover:bg-gray-900 disabled:hover:bg-transparent dark:disabled:hover:bg-transparent\n", ""]);
                return n2 = function() {
                    return e
                }, e
            }

            function n3() {
                var e = (0, f.Z)(["flex items-center gap-1 text-xs mt-1 md:text-sm md:mt-2 text-gray-500 min-h-[32px] md:min-h-[34px]"]);
                return n3 = function() {
                    return e
                }, e
            }

            function n4() {
                var e = (0, f.Z)(["w-full flex gap-2 justify-center mb-3"]);
                return n4 = function() {
                    return e
                }, e
            }

            function n5(e) {
                var n = e.onAbortCompletion,
                    t = e.onCreateNewCompletion,
                    r = e.onUpdateArtifactStatus,
                    a = e.onRequestMoreCompletions,
                    o = e.onToggleQueryData,
                    i = e.queryDataEnabled,
                    u = e.artifact,
                    d = e.currentLeafId,
                    f = e.threadId,
                    m = e.isCompletionInProgress,
                    h = e.className,
                    g = e.canUsePalette,
                    v = e.position,
                    y = e.paletteFeatures,
                    j = e.placeholder,
                    w = e.currentPrompt,
                    Z = e.onChangeCurrentPrompt,
                    S = e.clearOnSubmit,
                    D = void 0 === S || S,
                    E = e.disableInterruptions,
                    q = void 0 !== E && E,
                    F = e.disabled,
                    M = void 0 !== F && F,
                    U = "root" === d;
                (0, k.useRouter)();
                var A = (0, I.WS)(),
                    B = (0, C.useContext)(R.gt).serviceStatus,
                    z = (0, C.useMemo)(function() {
                        var e, n, t;
                        return t = new Set, y.forEach(function(e) {
                            "link" === e && U ? t.add("link") : "link" !== e && t.add(e)
                        }), t
                    }, [y, U]),
                    _ = (0, C.useState)(!1),
                    J = (_[0], _[1]),
                    L = (0, C.useState)(!1),
                    $ = L[0],
                    W = L[1],
                    V = (0, C.useRef)(null),
                    H = (0, C.useState)(""),
                    Q = H[0],
                    K = H[1],
                    Y = (0, C.useState)(O),
                    G = Y[0],
                    X = Y[1],
                    ee = (0, C.useMemo)(function() {
                        return {
                            currentPalette: $,
                            setCurrentPalette: W
                        }
                    }, [$]),
                    en = (0, C.useCallback)(function(e) {
                        var n;
                        Z(function(n) {
                            return n + e
                        }), W(!1), null === (n = V.current) || void 0 === n || n.focus()
                    }, [Z]),
                    et = (0, C.useCallback)(function(e) {
                        r({
                            state: "pasted",
                            url: e,
                            id: e,
                            contents: ""
                        }), K("")
                    }, [r]),
                    eo = (0, C.useCallback)(function(e) {
                        var n;
                        et(e), W(!1), null === (n = V.current) || void 0 === n || n.focus()
                    }, [et]),
                    ei = (0, C.useCallback)(function(e) {
                        X(e)
                    }, []),
                    es = (0, C.useCallback)(function(e) {
                        Z(e.currentTarget.value)
                    }, [Z]),
                    eu = (0, C.useCallback)(function(e) {
                        if (null == e || e.preventDefault(), !M) {
                            var n, a, o = null === (n = V.current) || void 0 === n ? void 0 : n.value,
                                i = "".concat(null === (a = V.current) || void 0 === a ? void 0 : a.dataset.id, "-nextPrompt");
                            if (o || (null == u ? void 0 : u.url)) {
                                var s = (null == u ? void 0 : u.url) || "";
                                (null == u ? void 0 : u.state) === "pasted" && r(function(e) {
                                    return (0, l.Z)((0, c.Z)({}, e), {
                                        state: "static"
                                    })
                                });
                                var d = (null == u ? void 0 : u.state) === "pasted" ? {
                                    artifacts: [null == u ? void 0 : u.url]
                                } : {};
                                t(i, (0, c.Z)({
                                    value: o || ""
                                }, d), {
                                    eventSource: e ? "mouse" : "keyboard"
                                }, s), D && Z(""), K(""), (0, P.SI)(1, V.current)
                            }
                        }
                    }, [null == u ? void 0 : u.state, null == u ? void 0 : u.url, D, M, t, r, Z, ]),
                    ec = (0, C.useCallback)((0, s.Z)(function() {
                        var e, n, t, r;
                        return (0, p.__generator)(this, function(a) {
                            switch (a.label) {
                                case 0:
                                    if (J(!0), !z.has("link") || "root" !== d) return [2];
                                    return [4, navigator.clipboard.readText()];
                                case 1:
                                    return n = a.sent(), t = /^https?:\/\/[^\s]+/g, (r = null === (e = n.match(t)) || void 0 === e ? void 0 : e[0]) && K(r), [2]
                            }
                        })
                    }), [z, d]),
                    el = (0, C.useCallback)(function() {
                        J(!1)
                    }, []),
                    ed = (0, C.useCallback)(function() {
                        r(null)
                    }, [r]),
                    ef = (0, C.useCallback)(function() {
                        n("", d), a(d, {
                            eventSource: "mouse"
                        })
                    }, [d, n, a]),
                    em = (0, C.useCallback)(function() {
                        n("", d), A(T.s6.pauseCompletion, {
                            threadId: f,
                            eventSource: "mouse"
                        })
                    }, [d, f, A, n]),
                    eh = (0, C.useMemo)(function() {
                        return {
                            Enter: {
                                validator: function() {
                                    return !0
                                },
                                handler: function(e) {
                                    e.shiftKey || e.isComposing || (e.preventDefault(), q && m || eu())
                                }
                            },
                            Escape: {
                                validator: function() {
                                    return !q && m
                                },
                                handler: function() {
                                    n("", d), A(T.s6.pauseCompletion, {
                                        threadId: f,
                                        eventSource: "keyboard"
                                    })
                                }
                            },
                            Tab: {
                                validator: function() {
                                    var e;
                                    return U && !(null == V ? void 0 : null === (e = V.current) || void 0 === e ? void 0 : e.value) && g
                                },
                                handler: function(e) {
                                    e.preventDefault(), Z("(When responding to the following prompts, please make sure to properly style your response using Github Flavored Markdown. Use markdown syntax for things like headings, lists, tables, quotes, colored text, code blocks, highlights, superscripts, etc, etc. For emojis, use unicode. Make sure not to mention markdown or stying in your actual response.)\n")
                                }
                            }
                        }
                    }, [q, m, eu, n, d, A, f, U, g, Z, ]);
                (0, C.useEffect)(function() {
                    var e = V.current,
                        n = function(e) {
                            var n;
                            (null === (n = eh[e.key]) || void 0 === n ? void 0 : n.validator(e)) && eh[e.key].handler(e)
                        };
                    return e && e.addEventListener("keydown", n),
                        function() {
                            e && e.removeEventListener("keydown", n)
                        }
                }, [eh]), (0, C.useEffect)(function() {
                    var e = V.current,
                        n = function(n) {
                            !(null == e ? void 0 : e.value) && Q && U && (n.preventDefault(), et(Q))
                        };
                    return z.has("link") && e && U && e.addEventListener("paste", n),
                        function() {
                            e && e.removeEventListener("paste", n)
                        }
                }, [et, d, U, r, Q, z, ]), (0, C.useEffect)(function() {
                    return window.addEventListener("focus", ec),
                        function() {
                            window.removeEventListener("focus", ec)
                        }
                }, [ec]), (0, C.useEffect)(function() {
                    var e;
                    null === (e = V.current) || void 0 === e || e.focus()
                }, [A]);
                var ep = q && m;
                return (0, x.jsx)("form", {
                    className: h,
                    onSubmit: eu,
                    children: (0, x.jsxs)("div", {
                        className: (0, b.Z)("relative flex h-full flex-1 flex-col"),
                        children: [(0, x.jsxs)(te, {
                            children: [!U && !(q && m) && !(null == B ? void 0 : B.oof) && (0, x.jsxs)(er.z, {
                                as: "button",
                                color: "neutral",
                                onClick: ef,
                                children: [(0, x.jsx)(ea.ZP, {
                                    icon: N.Qxo,
                                    size: "xsmall"
                                }), "Try again"]
                            }), !q && m && (0, x.jsxs)(er.z, {
                                as: "button",
                                color: "neutral",
                                onClick: em,
                                children: ["Pause completion", (0, x.jsx)(ea.ZP, {
                                    icon: N.R4s,
                                    size: "xsmall"
                                })]
                            })]
                        }), (0, x.jsxs)(n8, {
                            $lessPadding: !g,
                            children: [(null == u ? void 0 : u.state) === "pasted" && (0, x.jsx)(eQ, {
                                urls: new Set([u.url]),
                                onRemoveUrl: ed,
                                className: "ml-2"
                            }), (0, x.jsx)(P.ZP, {
                                tabIndex: 0,
                                onFocus: ec,
                                onBlur: el,
                                value: w,
                                "data-id": d,
                                ref: V,
                                style: {
                                    maxHeight: "200px"
                                },
                                rows: 1,
                                onChange: es,
                                placeholder: j,
                                className: (0, b.Z)(g && "pl-2", "m-0 w-full resize-none border-0 bg-transparent p-0 pr-7 focus:ring-0 focus-visible:ring-0 dark:bg-transparent")
                            }), (0, x.jsx)(n7, {
                                disabled: ep || M,
                                $nudgeBottom: ep,
                                children: ep ? (0, x.jsx)("div", {
                                    className: "text-2xl",
                                    children: (0, x.jsx)(n6, {})
                                }) : (0, x.jsx)(ea.ZP, {
                                    icon: eA.ip9,
                                    size: "small",
                                    strokeWidth: 0,
                                    className: "rotate-90"
                                })
                            }), (0, x.jsxs)(eX.Provider, {
                                value: ee,
                                children: [(0, x.jsx)(nY, {
                                    onInsertText: en,
                                    onAddArtifact: eo,
                                    onEditPromptEngineering: ei,
                                    promptEngineering: G,
                                    paletteType: $,
                                    isOpen: Boolean($),
                                    className: (0, b.Z)("bottom" === v ? "top-full -left-2" : "mt-3 -translate-y-full")
                                }), g && (0, x.jsxs)(n9, {
                                    children: [z.has("reroll") && !U && (0, x.jsx)(nV, {
                                        onClick: ef
                                    }), z.has("retrieval") && (0, x.jsx)(nW, {
                                        queryDataEnabled: i,
                                        onToggleQueryData: o
                                    })]
                                })]
                            })]
                        })]
                    })
                })
            }

            function n6() {
                var e = (0, C.useState)(0),
                    n = e[0],
                    t = e[1];
                (0, C.useEffect)(function() {
                    var e = setInterval(function() {
                        t(function(e) {
                            return (e + 1) % 3
                        })
                    }, 350);
                    return function() {
                        return clearInterval(e)
                    }
                }, []);
                for (var r = [], a = 0; a < 3; a++) r.push((0, x.jsx)("span", {
                    className: a <= n ? "" : "invisible",
                    children: "\xb7"
                }, a));
                return (0, x.jsx)(x.Fragment, {
                    children: r
                })
            }
            var n8 = S.Z.div(n1(), function(e) {
                    return !e.$lessPadding && "pl-1 pb-0 md:pb-1"
                }),
                n7 = S.Z.button(n2(), function(e) {
                    return e.$nudgeBottom && "disabled:bottom-1"
                }),
                n9 = S.Z.div(n3()),
                te = S.Z.div(n4());

            function tn(e) {
                var n = e.children,
                    t = e.title,
                    r = e.icon,
                    a = e.sidebarOpen,
                    o = e.onSidebarOpen;
                return (0, x.jsx)(ew.u.Root, {
                    show: a,
                    as: C.Fragment,
                    children: (0, x.jsxs)(eZ.V, {
                        as: "div",
                        className: "relative z-10",
                        onClose: o,
                        children: [(0, x.jsx)("div", {
                            className: "fixed inset-0"
                        }), (0, x.jsx)("div", {
                            className: "fixed inset-0 overflow-hidden",
                            children: (0, x.jsx)("div", {
                                className: "absolute inset-0 overflow-hidden",
                                children: (0, x.jsx)("div", {
                                    className: "pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10",
                                    children: (0, x.jsx)(ew.u.Child, {
                                        as: C.Fragment,
                                        enter: "transform transition ease-in-out duration-100 sm:duration-300",
                                        enterFrom: "translate-x-full",
                                        enterTo: "translate-x-0",
                                        leave: "transform transition ease-in-out duration-300 sm:duration-500",
                                        leaveFrom: "translate-x-0",
                                        leaveTo: "translate-x-full",
                                        children: (0, x.jsx)(eZ.V.Panel, {
                                            className: "pointer-events-auto w-screen max-w-md border-l border-gray-100 dark:border-gray-700",
                                            children: (0, x.jsxs)("div", {
                                                className: "flex h-full flex-col overflow-y-auto bg-white shadow-xl dark:bg-gray-800",
                                                children: [(0, x.jsx)("div", {
                                                    className: "",
                                                    children: (0, x.jsxs)("div", {
                                                        className: "flex items-start justify-between",
                                                        children: [(0, x.jsxs)(eZ.V.Title, {
                                                            className: "flex items-center gap-2 px-4 py-2 text-lg font-medium text-gray-900 dark:text-white",
                                                            children: [(0, x.jsx)(ea.ZP, {
                                                                icon: r
                                                            }), t]
                                                        }), (0, x.jsx)("div", {
                                                            className: "mr-2 mt-2 flex h-7 items-center",
                                                            children: (0, x.jsxs)("button", {
                                                                type: "button",
                                                                className: "rounded-md bg-white text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2",
                                                                onClick: function() {
                                                                    return o(!1)
                                                                },
                                                                children: [(0, x.jsx)("span", {
                                                                    className: "sr-only",
                                                                    children: "Close panel"
                                                                }), (0, x.jsx)(ea.ZP, {
                                                                    icon: N.q5L,
                                                                    size: "medium",
                                                                    "aria-hidden": "true"
                                                                })]
                                                            })
                                                        })]
                                                    })
                                                }), (0, x.jsx)("div", {
                                                    className: "relative flex-1",
                                                    children: n
                                                })]
                                            })
                                        })
                                    })
                                })
                            })
                        })]
                    })
                })
            }
            var tt = t(99367),
                tr = t(95182),
                ta = t.n(tr),
                to = {
                    errType: "warning",
                    errCode: "content_policy"
                },
                ti = {
                    err: "Contents may violate our content policy",
                    errType: "danger",
                    errCode: "content_policy"
                },
                ts = "content_policy",
                tu = t(99294);

            function tc() {
                var e = (0, f.Z)(["text-center mt-2 flex justify-center"]);
                return tc = function() {
                    return e
                }, e
            }
            var tl = S.Z.div(tc());

            function td(e) {
                var n = e.initialText,
                    t = e.type,
                    r = e.parentId,
                    a = e.threadId,
                    o = e.currentLeaf,
                    i = e.onCreateNewNode,
                    s = e.onUpdateNode,
                    u = e.onChangeItemInView,
                    c = e.onExitEdit,
                    l = e.onDeleteNode,
                    d = e.onRequestCompletion,
                    f = e.disabled,
                    m = (0, I.WS)(),
                    h = (0, C.useId)(),
                    p = "".concat(o, "-").concat(h),
                    g = (0, C.useState)(n || ""),
                    v = g[0],
                    b = g[1],
                    y = (0, C.useRef)(null),
                    j = t === E.Jq.Completion || t === E.Jq.EditedCompletion;
                (0, C.useEffect)(function() {
                    i(p, r, j ? E.Jq.EditedCompletion : E.Jq.EditedPrompt, "")
                }, []);
                var k = (0, C.useCallback)(function(e) {
                        b(e.currentTarget.value)
                    }, []),
                    w = (0, C.useCallback)(function() {
                        s(p, v), u(p), j || d(E.Os.Next, p, {
                            eventSource: "mouse"
                        }, !0), c()
                    }, [p, j, u, c, d, s, v, ]),
                    Z = (0, C.useCallback)(function() {
                        l(p), u(o), c(), m(t === E.Jq.Completion || t === E.Jq.EditedCompletion ? T.s6.cancelEditCompletion : T.s6.cancelEditPrompt, {
                            threadId: a
                        })
                    }, [p, o, m, u, l, c, t, a, ]);
                return (0, C.useEffect)(function() {
                    var e = y.current,
                        n = function(e) {
                            "Enter" === e.key && e.metaKey ? w() : "Escape" === e.key && Z()
                        };
                    return e && e.addEventListener("keydown", n),
                        function() {
                            e && e.removeEventListener("keydown", n)
                        }
                }, [Z, w]), (0, x.jsxs)(x.Fragment, {
                    children: [(0, x.jsx)(P.ZP, {
                        ref: y,
                        value: v,
                        onChange: k,
                        className: "m-0 resize-none border-0 bg-transparent p-0 focus:ring-0 focus-visible:ring-0"
                    }), (0, x.jsxs)(tl, {
                        children: [(0, x.jsx)(er.z, {
                            as: "button",
                            onClick: w,
                            className: "mr-2",
                            disabled: f,
                            children: j ? "Save new edit" : "Save & Submit"
                        }), (0, x.jsx)(er.z, {
                            as: "button",
                            color: "neutral",
                            onClick: Z,
                            children: "Cancel"
                        })]
                    })]
                })
            }

            function tf() {
                var e = (0, f.Z)(["text-xs flex items-center justify-center gap-1"]);
                return tf = function() {
                    return e
                }, e
            }

            function tm() {
                var e = (0, f.Z)(["dark:text-white disabled:text-gray-300 dark:disabled:text-gray-400"]);
                return tm = function() {
                    return e
                }, e
            }

            function th() {
                var e = (0, f.Z)(["flex-grow flex-shrink-0"]);
                return th = function() {
                    return e
                }, e
            }

            function tp(e) {
                var n = e.currentPage,
                    t = e.onChangeIndex,
                    r = e.length,
                    a = e.className,
                    o = function(e) {
                        t(ta()(n + e, 0, r - 1))
                    };
                return (0, x.jsxs)(tx, {
                    className: a,
                    children: [(0, x.jsx)(tg, {
                        onClick: function() {
                            return o(-1)
                        },
                        disabled: 0 === n,
                        children: (0, x.jsx)(ea.ZP, {
                            size: "xsmall",
                            icon: N.YFh
                        })
                    }), (0, x.jsx)(tv, {
                        children: "".concat(n + 1, " / ").concat(r)
                    }), (0, x.jsx)(tg, {
                        onClick: function() {
                            return o(1)
                        },
                        disabled: n === r - 1,
                        children: (0, x.jsx)(ea.ZP, {
                            size: "xsmall",
                            icon: N.Tfp
                        })
                    })]
                })
            }
            var tx = S.Z.div(tf()),
                tg = S.Z.button(tm()),
                tv = S.Z.span(th()),
                tb = t(80117);

            function ty() {
                var e = (0, f.Z)(["w-full border-b border-black/10 dark:border-gray-900/50 text-gray-800 dark:text-gray-100"]);
                return ty = function() {
                    return e
                }, e
            }

            function tj() {
                var e = (0, f.Z)(["text-base gap-6 m-auto md:max-w-2xl lg:max-w-2xl xl:max-w-3xl p-4 md:py-6 flex lg:px-0"]);
                return tj = function() {
                    return e
                }, e
            }

            function tk() {
                var e = (0, f.Z)(["w-[30px] flex flex-col relative items-end"]);
                return tk = function() {
                    return e
                }, e
            }

            function tw() {
                var e = (0, f.Z)(["p-1 rounded-md hover:bg-gray-100 hover:text-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-200 disabled:dark:hover:text-gray-400"]);
                return tw = function() {
                    return e
                }, e
            }

            function tZ() {
                var e = (0, f.Z)(["text-gray-400 flex self-end lg:self-center justify-center mt-2 gap-4 lg:gap-1 lg:absolute lg:top-0 lg:translate-x-full lg:right-0 lg:mt-0 lg:pl-2"]);
                return tZ = function() {
                    return e
                }, e
            }
            var tC = C.memo(function(e) {
                    var n = e.activeRequests,
                        t = e.itemInViewId,
                        r = e.onChangeItemInView,
                        a = e.onChangeRating,
                        o = e.onCreateNewNode,
                        i = e.onDeleteNode,
                        s = e.onRequestCompletion,
                        u = e.onUpdateNode,
                        c = e.parentId,
                        l = e.siblings,
                        d = void 0 === l ? [] : l,
                        f = e.threadId,
                        m = e.type,
                        h = (0, C.useContext)(R.yP).theme,
                        p = h.color,
                        g = h.icon,
                        v = (0, eT.useSession)().data,
                        y = ni(),
                        j = (0, I.WS)(),
                        k = (0, C.useState)(!1),
                        w = k[0],
                        Z = k[1],
                        P = (0, C.useMemo)(function() {
                            return d.findIndex(function(e) {
                                return e.id === t
                            })
                        }, [t, d]),
                        S = (0, C.useMemo)(function() {
                            return d[P]
                        }, [d, P]),
                        D = S.id,
                        q = S.message,
                        F = S.err,
                        O = S.errType,
                        M = S.errCode,
                        U = S.rating,
                        A = (0, C.useState)(U),
                        B = A[0],
                        z = A[1],
                        _ = (0, C.useState)(Q(q)),
                        J = _[0],
                        L = _[1],
                        $ = (0, C.useState)(O || !1),
                        W = $[0],
                        V = $[1],
                        H = (0, C.useState)(M === ts),
                        K = H[0],
                        Y = H[1],
                        G = (0, C.useCallback)(function() {
                            j(m === E.Jq.Completion || m === E.Jq.EditedCompletion ? T.s6.editCompletion : T.s6.editPrompt, {
                                id: q.id,
                                threadId: f
                            }), Z(!0)
                        }, [q, j, m, f]),
                        X = (0, C.useCallback)(function() {
                            Z(!1)
                        }, []),
                        ee = m === E.Jq.Completion || m === E.Jq.EditedCompletion,
                        en = (0, C.useCallback)(function(e) {
                            a(D, q.id, e), z(e)
                        }, [D, q.id, a]),
                        et = "CompletionUpdated:".concat(D),
                        er = (0, C.useCallback)(function(e, n) {
                            var t = n.text,
                                r = n.flag,
                                a = void 0 !== r && r,
                                o = n.errCode;
                            a && (V(a), Y((void 0 === o ? "" : o) === ts)), null !== t && L(t)
                        }, []);
                    return (0, C.useEffect)(function() {
                        z(U), q && L(F || Q(q))
                    }, [q, U, F]), (0, C.useEffect)(function() {
                        V(O || !1), Y(M === ts)
                    }, [D, M, O]), (0, C.useEffect)(function() {
                        return PubSub.subscribe(et, er),
                            function() {
                                PubSub.unsubscribe(et)
                            }
                    }, [er, et]), (0, x.jsx)(tP, {
                        className: (0, b.Z)("group", ee ? "bg-gray-50 dark:bg-[#444654]" : "dark:bg-gray-800"),
                        children: (0, x.jsxs)(tN, {
                            children: [(0, x.jsxs)(tS, {
                                children: [ee ? (0, x.jsx)(tu.k, {
                                    background: p,
                                    iconName: g,
                                    notice: W || void 0
                                }) : (0, x.jsx)(tu.Y, {
                                    user: null == v ? void 0 : v.user,
                                    notice: W || void 0
                                }), d.length > 1 && !y && (0, x.jsx)(tp, {
                                    currentPage: P,
                                    onChangeIndex: function(e) {
                                        return r(d[e].id)
                                    },
                                    length: d.length,
                                    className: "invisible absolute left-0 top-2 -ml-4 -translate-x-full group-hover:visible"
                                })]
                            }), (0, x.jsxs)("div", {
                                className: (0, b.Z)("relative flex w-full flex-col lg:w-[calc(100%-115px)]"),
                                children: [!w && (0, x.jsx)(tb.Z, {
                                    id: D,
                                    text: J,
                                    errCode: W ? M : void 0,
                                    flag: W,
                                    isActive: !0,
                                    isCompletionInProgress: n.has(D),
                                    format: ee,
                                    className: "min-h-[20px]",
                                    showContentPolicyViolation: K
                                }, "Result:".concat(D)), w && (0, x.jsx)(td, {
                                    currentLeaf: D,
                                    initialText: J,
                                    onCreateNewNode: o,
                                    type: m,
                                    parentId: c,
                                    threadId: f,
                                    onUpdateNode: u,
                                    onDeleteNode: i,
                                    onChangeItemInView: r,
                                    onRequestCompletion: s,
                                    onExitEdit: X,
                                    disabled: 0 !== n.size
                                }), d.length > 1 && y && (0, x.jsx)(tp, {
                                    currentPage: P,
                                    onChangeIndex: function(e) {
                                        return r(d[e].id)
                                    },
                                    length: d.length,
                                    className: "self-center pt-2"
                                }), !ee && !w && 0 === n.size && (0, x.jsx)(tT, {
                                    children: (0, x.jsx)(tI, {
                                        onClick: G,
                                        className: "invisible group-hover:visible",
                                        children: (0, x.jsx)(ea.ZP, {
                                            icon: N.vPQ
                                        })
                                    })
                                }), ee && !n.has(D) && (0, x.jsxs)(tT, {
                                    children: ["thumbsDown" !== B && (0, x.jsx)(tI, {
                                        onClick: function() {
                                            return en("thumbsUp")
                                        },
                                        disabled: "thumbsUp" === B,
                                        className: (0, b.Z)("thumbsUp" === B && "!dark:text-gray-200 bg-gray-100 text-gray-700 dark:bg-gray-700"),
                                        children: (0, x.jsx)(ea.ZP, {
                                            icon: N.fmn
                                        })
                                    }, "thumbsUp:".concat(D)), "thumbsUp" !== B && (0, x.jsx)(tI, {
                                        onClick: function() {
                                            return en("thumbsDown")
                                        },
                                        disabled: "thumbsDown" === B,
                                        className: (0, b.Z)("thumbsDown" === B && "!dark:text-gray-200 bg-gray-100 text-gray-700 dark:bg-gray-700"),
                                        children: (0, x.jsx)(ea.ZP, {
                                            icon: N.oLd
                                        })
                                    }, "thumbsDown:".concat(D))]
                                })]
                            })]
                        })
                    })
                }),
                tP = S.Z.div(ty()),
                tN = S.Z.div(tj()),
                tS = S.Z.div(tk()),
                tI = S.Z.button(tw()),
                tT = S.Z.div(tZ());

            function tD() {
                var e = (0, f.Z)(["animate-spin text-center"]);
                return tD = function() {
                    return e
                }, e
            }
            var tE = (0, S.Z)(N.dAq)(tD());

            function tq(e) {
                var n = e.className;
                return (0, x.jsx)(tE, {
                    className: n
                })
            }
            var tR = t(75318);

            function tF() {
                var e = (0, f.Z)(["text-gray-800 w-full md:max-w-2xl lg:max-w-3xl md:h-full md:flex md:flex-col px-6 dark:text-gray-100"]);
                return tF = function() {
                    return e
                }, e
            }

            function tO() {
                var e = (0, f.Z)(["text-4xl font-semibold mt-[20vh] ml-auto mr-auto mb-16"]);
                return tO = function() {
                    return e
                }, e
            }

            function tM() {
                var e = (0, f.Z)(["flex items-start text-center gap-3.5"]);
                return tM = function() {
                    return e
                }, e
            }

            function tU() {
                var e = (0, f.Z)(["flex flex-col gap-3.5 flex-1"]);
                return tU = function() {
                    return e
                }, e
            }

            function tA() {
                var e = (0, f.Z)(["text-lg font-normal"]);
                return tA = function() {
                    return e
                }, e
            }

            function tB() {
                var e = (0, f.Z)(["flex flex-col gap-3.5"]);
                return tB = function() {
                    return e
                }, e
            }

            function tz() {
                var e = (0, f.Z)(["w-full bg-gray-50 dark:bg-white/5 p-3 rounded-md"]);
                return tz = function() {
                    return e
                }, e
            }

            function t_() {
                var e = (0, f.Z)(["w-full bg-gray-50 dark:bg-white/5 p-3 rounded-md after:content-['\"'] before:content-['\"']"]);
                return t_ = function() {
                    return e
                }, e
            }

            function tJ() {
                var e = (0, f.Z)(["w-full bg-gray-50 dark:bg-white/5 p-3 rounded-md hover:bg-gray-200 dark:hover:bg-gray-900"]);
                return tJ = function() {
                    return e
                }, e
            }
            var tL = S.Z.div(tF()),
                t$ = S.Z.h1(tO()),
                tW = S.Z.div(tM()),
                tV = S.Z.div(tU()),
                tH = S.Z.h2(tA()),
                tQ = S.Z.ul(tB()),
                tK = S.Z.li(tz()),
                tY = S.Z.li(t_()),
                tG = S.Z.button(tJ());

            function tX(e) {
                var n = e.text,
                    t = e.onChangeCurrentPrompt,
                    r = (0, C.useCallback)(function() {
                        t(n)
                    }, [n, t]);
                return (0, x.jsxs)(tG, {
                    onClick: r,
                    children: ['"', n, '" →']
                })
            }

            function t0(e) {
                var n = e.onChangeCurrentPrompt;
                return (0, x.jsxs)(tL, {
                    children: [(0, x.jsx)(t$, {
                        children: "ChatGPT"
                    }), (0, x.jsxs)(tW, {
                        children: [(0, x.jsxs)(tV, {
                            children: [(0, x.jsx)(ea.ZP, {
                                icon: N.kXG,
                                size: "medium",
                                className: "m-auto"
                            }), (0, x.jsx)(tH, {
                                children: "Examples"
                            }), (0, x.jsxs)(tQ, {
                                children: [(0, x.jsx)(tX, {
                                    text: "Explain quantum computing in simple terms",
                                    onChangeCurrentPrompt: n
                                }), (0, x.jsx)(tX, {
                                    text: "Got any creative ideas for a 10 year old’s birthday?",
                                    onChangeCurrentPrompt: n
                                }), (0, x.jsx)(tX, {
                                    text: "How do I make an HTTP request in Javascript?",
                                    onChangeCurrentPrompt: n
                                })]
                            })]
                        }), (0, x.jsxs)(tV, {
                            children: [(0, x.jsx)(ea.ZP, {
                                icon: tR.Z,
                                size: "medium",
                                className: "m-auto"
                            }), (0, x.jsx)(tH, {
                                children: "Capabilities"
                            }), (0, x.jsxs)(tQ, {
                                children: [(0, x.jsx)(tK, {
                                    children: "Remembers what user said earlier in the conversation"
                                }), (0, x.jsx)(tK, {
                                    children: "Allows user to provide follow-up corrections"
                                }), (0, x.jsx)(tK, {
                                    children: "Trained to decline inappropriate requests"
                                })]
                            })]
                        }), (0, x.jsxs)(tV, {
                            children: [(0, x.jsx)(ea.ZP, {
                                icon: N.BJv,
                                size: "medium",
                                className: "m-auto"
                            }), (0, x.jsx)(tH, {
                                children: "Limitations"
                            }), (0, x.jsxs)(tQ, {
                                children: [(0, x.jsx)(tK, {
                                    children: "May occasionally generate incorrect information"
                                }), (0, x.jsx)(tK, {
                                    children: "May occasionally produce harmful instructions or biased content"
                                }), (0, x.jsx)(tK, {
                                    children: "Limited knowledge of world and events after 2021"
                                })]
                            })]
                        })]
                    })]
                })
            }
            var t1 = t(40053);

            function t2() {
                return (0, x.jsxs)(tL, {
                    children: [(0, x.jsx)(t$, {
                        children: "Workspace"
                    }), (0, x.jsxs)(tW, {
                        children: [(0, x.jsxs)(tV, {
                            children: [(0, x.jsx)(ea.ZP, {
                                icon: N.kXG,
                                size: "medium",
                                className: "m-auto"
                            }), (0, x.jsx)(tH, {
                                children: "Learn about anything"
                            }), (0, x.jsxs)(tQ, {
                                children: [(0, x.jsx)(tY, {
                                    children: "Explain quantum computing, in layman's terms"
                                }), (0, x.jsx)(tY, {
                                    children: "What the heck is a Kubernetes cluster?"
                                }), (0, x.jsx)(tY, {
                                    children: "Quiz me on the Boston Tea Party"
                                })]
                            })]
                        }), (0, x.jsxs)(tV, {
                            children: [(0, x.jsx)(ea.ZP, {
                                icon: tR.Z,
                                size: "medium",
                                className: "m-auto"
                            }), (0, x.jsx)(tH, {
                                children: "Synthesize information"
                            }), (0, x.jsxs)(tQ, {
                                children: [(0, x.jsx)(tY, {
                                    children: "Pull out memorable quotes from this blog post"
                                }), (0, x.jsx)(tY, {
                                    children: "Summarize this meeting transcript as a poem"
                                }), (0, x.jsx)(tY, {
                                    children: "Compare and contrast these two articles"
                                })]
                            })]
                        }), (0, x.jsxs)(tV, {
                            children: [(0, x.jsx)(ea.ZP, {
                                icon: t1.Z,
                                size: "medium",
                                className: "m-auto"
                            }), (0, x.jsx)(tH, {
                                children: "Create things together"
                            }), (0, x.jsxs)(tQ, {
                                children: [(0, x.jsx)(tY, {
                                    children: "Plan an itinerary for a weekend trip to Big Sur"
                                }), (0, x.jsx)(tY, {
                                    children: "Create an alien-themed browser game, full code"
                                }), (0, x.jsx)(tY, {
                                    children: "Write a critical analysis on the current state of AI"
                                })]
                            })]
                        })]
                    })]
                })
            }
            var t3 = t(24066);

            function t4() {
                var e = (0, f.Z)(["w-full px-6 md:px-0 md:max-w-2xl lg:max-w-3xl md:h-full md:flex text-gray-600 dark:text-white gap-10 items-center justify-between"]);
                return t4 = function() {
                    return e
                }, e
            }

            function t5() {
                var e = (0, f.Z)(["font-mono font-normal text-6xl flex gap-6 flex-col items-center py-10 border-b-2 border-gray-700 md:items-start md:border-0 md:py-0"]);
                return t5 = function() {
                    return e
                }, e
            }

            function t6() {
                var e = (0, f.Z)(["flex flex-col items-center justify-evenly h-full"]);
                return t6 = function() {
                    return e
                }, e
            }

            function t8() {
                var e = (0, f.Z)(["flex flex-col items-center gap-2"]);
                return t8 = function() {
                    return e
                }, e
            }

            function t7() {
                var e = (0, f.Z)(["text-xl font-normal"]);
                return t7 = function() {
                    return e
                }, e
            }

            function t9() {
                var e = (0, f.Z)(["text-base dark:text-gray-300"]);
                return t9 = function() {
                    return e
                }, e
            }

            function re() {
                return (0, x.jsxs)(rn, {
                    children: [(0, x.jsx)(rt, {
                        children: "Codespace"
                    }), (0, x.jsxs)(rr, {
                        children: [(0, x.jsxs)(ra, {
                            children: [(0, x.jsx)(ea.ZP, {
                                className: "text-gray-400",
                                icon: t3.Z,
                                size: "medium"
                            }), (0, x.jsx)(ro, {
                                children: "Ask anything"
                            }), (0, x.jsx)(ri, {
                                children: "No matter how simple or complex"
                            })]
                        }), (0, x.jsxs)(ra, {
                            children: [(0, x.jsx)(ea.ZP, {
                                className: "text-gray-400",
                                icon: N.cDN,
                                size: "medium"
                            }), (0, x.jsx)(ro, {
                                children: "Write code"
                            }), (0, x.jsx)(ri, {
                                children: "From one line of code to full-fledged apps"
                            })]
                        }), (0, x.jsxs)(ra, {
                            children: [(0, x.jsx)(ea.ZP, {
                                className: "text-gray-400",
                                icon: N.U0j,
                                size: "medium"
                            }), (0, x.jsx)(ro, {
                                children: "Debug faster"
                            }), (0, x.jsx)(ri, {
                                children: "Paste in a code of just an error statement"
                            })]
                        })]
                    })]
                })
            }
            var rn = S.Z.div(t4()),
                rt = S.Z.h1(t5()),
                rr = S.Z.div(t6()),
                ra = S.Z.div(t8()),
                ro = S.Z.h2(t7()),
                ri = S.Z.p(t9());

            function rs() {
                var e = (0, f.Z)(["flex flex-col items-center text-sm h-full dark:bg-gray-800"]);
                return rs = function() {
                    return e
                }, e
            }

            function ru() {
                var e = (0, f.Z)(["w-full h-48 flex-shrink-0"]);
                return ru = function() {
                    return e
                }, e
            }

            function rc() {
                var e = (0, f.Z)(["cursor-pointer absolute right-6 bottom-[124px] md:bottom-[120px] z-10 rounded-full border border-gray-200 bg-gray-50 text-gray-600 dark:border-white/10 dark:bg-white/10 dark:text-gray-200"]);
                return rc = function() {
                    return e
                }, e
            }

            function rl(e) {
                var n = e.nodes,
                    t = e.onChangeItemInView,
                    r = e.onCreateNewNode,
                    a = e.onUpdateNode,
                    o = e.onChangeRating,
                    i = e.onDeleteNode,
                    s = e.onRequestCompletion,
                    u = e.onChangeCurrentPrompt,
                    c = e.threadId,
                    l = e.activeRequests,
                    d = e.branchesInView,
                    f = e.isProcessingArtifact,
                    m = (0, C.useContext)(R.yP).id,
                    h = (0, tt.useScrollToBottom)(),
                    p = (0, X.Z)((0, tt.useSticky)(), 1)[0];
                return (0, x.jsxs)(x.Fragment, {
                    children: [(0, x.jsxs)(rd, {
                        children: ["programming" === m && n.length < 2 && (0, x.jsx)(re, {}), "chat" === m && n.length < 2 && (0, x.jsx)(t0, {
                            onChangeCurrentPrompt: u
                        }), "default" === m && n.length < 2 && (0, x.jsx)(t2, {}), n.map(function(e, n) {
                            var u = e.siblings,
                                f = e.type,
                                m = e.parentId;
                            if (f === E.Jq.Root) return null;
                            var h = u.findIndex(function(e) {
                                return e.id === d[n]
                            });
                            return (0, x.jsx)(tC, {
                                activeRequests: l,
                                itemInViewId: u[h].id,
                                onChangeItemInView: t,
                                onChangeRating: o,
                                onCreateNewNode: r,
                                onDeleteNode: i,
                                onRequestCompletion: s,
                                onUpdateNode: a,
                                parentId: m,
                                siblings: u,
                                threadId: c,
                                type: f
                            }, "".concat(m, "-").concat(n, "-").concat(h))
                        }), (0, x.jsx)(rf, {})]
                    }), f && (0, x.jsx)(tq, {
                        className: "mx-auto mt-4"
                    }), !p && (0, x.jsx)(rm, {
                        onClick: h,
                        children: (0, x.jsx)(ea.ZP, {
                            icon: N.tv1,
                            className: "m-1"
                        })
                    })]
                })
            }
            var rd = S.Z.div(rs()),
                rf = S.Z.div(ru()),
                rm = S.Z.button(rc()),
                rh = t(40447),
                rp = t.n(rh)()(function() {
                    return Promise.resolve().then(t.bind(t, 99367))
                }, {
                    loadableGenerated: {
                        webpack: function() {
                            return [99367]
                        }
                    },
                    ssr: !1
                });

            function rx(e) {
                var n = e.children;
                return e.wrap ? (0, x.jsx)(rp, {
                    className: (0, b.Z)("h-full dark:bg-gray-800"),
                    followButtonClassName: "scroll-convo",
                    initialScrollBehavior: "auto",
                    children: n
                }) : (0, x.jsx)("div", {
                    className: "h-full overflow-y-auto",
                    children: n
                })
            }
            var rg = t(94312),
                rv = t(67349),
                rb = t(44883);

            function ry() {
                var e = (0, f.Z)(["overflow-y-auto h-full"]);
                return ry = function() {
                    return e
                }, e
            }

            function rj() {
                var e = (0, f.Z)(["p-6 whitespace-pre-wrap text-sm "]);
                return rj = function() {
                    return e
                }, e
            }

            function rk() {
                var e = (0, f.Z)(["absolute top-1/2 -translate-y-1/2 right-6"]);
                return rk = function() {
                    return e
                }, e
            }
            var rw = /(<\|endoftext\|>)|(<\|endofprompt\|>)|(<\|endofprefix\|>)/g;

            function rZ(e) {
                var n = e.lastPrompt,
                    t = e.lastQueryDataResult,
                    r = e.fullText,
                    a = (0, C.useCallback)(function(e) {
                        return "".concat(n.prefix || "").concat(e).concat(t || "").concat(n.prompt).concat(n.turnSeparator)
                    }, [n.prefix, n.prompt, n.turnSeparator, t, ]),
                    o = (0, C.useMemo)(function() {
                        var e = (r || a("<|endofprefix|>")).split(rw),
                            t = [],
                            o = Boolean(!n.prefix);
                        return e.forEach(function(e, n) {
                            e && (e.match(rw) ? "<|endofprefix|>" === e ? o = !0 : t.push((0, x.jsx)("span", {
                                className: "text-gray-400",
                                children: e
                            }, "piece-".concat(n))) : t.push((0, x.jsx)("span", {
                                className: o ? "" : "text-gray-400",
                                children: e
                            }, "piece-".concat(n))))
                        }), t
                    }, [r, a, n.prefix]),
                    i = (0, C.useCallback)(function() {
                        navigator.clipboard.writeText(r || a(""))
                    }, [r, a]);
                return (0, x.jsx)(x.Fragment, {
                    children: (0, x.jsxs)(rC, {
                        children: [(0, x.jsxs)(rb.M$, {
                            children: ["Last prompt request", (0, x.jsx)(rN, {
                                children: (0, x.jsx)(rv.$, {
                                    label: (0, x.jsx)(rv.u, {
                                        text: "Copy thread to clipboard"
                                    }),
                                    children: (0, x.jsx)(rg.Z, {
                                        onCopy: i
                                    })
                                })
                            })]
                        }), (0, x.jsx)(rP, {
                            children: o
                        })]
                    })
                })
            }
            var rC = S.Z.div(ry()),
                rP = S.Z.pre(rj()),
                rN = S.Z.div(rk()),
                rS = t(30331),
                rI = t(87762),
                rT = t(78914),
                rD = t(89678),
                rE = t.n(rD),
                rq = /^\n+/,
                rR = t(39400),
                rF = function(e) {
                    var n = e.pageParam;
                    return q.ZP.getConversations(n || 0, 20)
                },
                rO = [/\bnigger\w*/i, /\bfaggot\w*/i, /\bkike\w*/i, /\bdykes?\b/i, /\bwetbacks?\b/i, /\bchinks?\b/i, /\bgooks?\b/i, /\bpakis?\b/i, /\binjuns?\b/i, /\btrannys?\b/i, /\btrannies\b/i, /\bspicks?\b/i, /\bshemales?\b/i, ];

            function rM() {
                var e = (0, f.Z)(["overflow-hidden w-full h-full relative"]);
                return rM = function() {
                    return e
                }, e
            }

            function rU() {
                var e = (0, f.Z)(["relative h-full w-full transition-width flex flex-col overflow-hidden items-stretch"]);
                return rU = function() {
                    return e
                }, e
            }

            function rA() {
                var e = (0, f.Z)(["grow flex-1 overflow-hidden"]);
                return rA = function() {
                    return e
                }, e
            }

            function rB() {
                var e = (0, f.Z)(["absolute bottom-0 left-0 w-full dark:border-transparent bg-vert-light-gradient dark:bg-vert-dark-gradient"]);
                return rB = function() {
                    return e
                }, e
            }
            var rz = function(e) {
                    var n, t, r, a, o, i, f, y, w, S, F, A, G, X, ee, en, et, er, eo, ei, es, eu, ec, el, ed, em, eh, ep, ex, eg, ev, eb, ey, ew, eZ, eC, eP, eN, eS, eI, eD = e.contextName,
                        eE = e.initialData,
                        eR = e.paletteFeatures,
                        eF = e.features,
                        eA = e.pages,
                        eB = (0, k.useRouter)(),
                        ez = (0, C.useContext)(R.yP).id,
                        e_ = (0, I.WS)(),
                        eJ = (0, C.useState)("programming" === ez ? O : ""),
                        eL = eJ[0],
                        e$ = eJ[1],
                        eW = (0, C.useState)(!1),
                        eV = eW[0],
                        eH = eW[1],
                        eQ = (0, C.useState)(""),
                        eK = eQ[0],
                        eY = eQ[1],
                        eG = (0, C.useState)(),
                        eX = eG[0],
                        e0 = eG[1],
                        e1 = (0, C.useState)(),
                        e2 = e1[0],
                        e3 = e1[1],
                        e4 = (0, C.useRef)(null),
                        e5 = (0, C.useRef)(eE.threadId || ""),
                        e6 = (0, C.useState)(!eE.threadId),
                        e8 = e6[0],
                        e7 = e6[1],
                        e9 = (t = (n = {
                            enabled: eF.has("saveHistory") && "chat" === ez
                        }).enabled, r = (0, C.useContext)(R.yP).id, o = (a = (0, rR.N)({
                            queryKey: ["conversations", r],
                            queryFn: rF,
                            getNextPageParam: function(e) {
                                var n = e.offset + e.limit;
                                return n < e.total ? n : void 0
                            },
                            enabled: t
                        })).data, i = a.fetchNextPage, f = a.hasNextPage, y = a.refetch, (0, C.useMemo)(function() {
                            return {
                                conversations: null == o ? void 0 : o.pages.reduce(function(e, n) {
                                    if (n) {
                                        var t = n.items;
                                        e.push.apply(e, (0, m.Z)(void 0 === t ? [] : t))
                                    }
                                    return e
                                }, []),
                                hasNextPage: f,
                                fetchNextPage: i,
                                refetch: function() {
                                    return t && y()
                                }
                            }
                        }, [null == o ? void 0 : o.pages, t, i, f, y])),
                        ne = e9.conversations,
                        nn = e9.hasNextPage,
                        nt = e9.fetchNextPage,
                        nr = e9.refetch,
                        na = (0, C.useState)(!1),
                        no = na[0],
                        ni = na[1],
                        ns = (S = (w = {
                            exempt: !1,
                            onRestrictedTermFound: (0, C.useCallback)(function(e) {
                                ni(!0), e_(T.s6.promptUsedRestrictedWords, {
                                    threadId: e5.current,
                                    content: e
                                })
                            }, [e_])
                        }).exempt, F = w.onRestrictedTermFound, G = (A = (0, C.useState)(!1))[0], X = A[1], {
                            hasRestrictedTerms: G,
                            checkRestrictedTerms: (0, C.useCallback)(function(e) {
                                var n;
                                return (rO.some(function(t) {
                                    var r = t.exec(e);
                                    return r && (n = r[0]), r
                                }), !S && n) ? (X(!0), null == F || F(n), !0) : (X(!1), !1)
                            }, [S, F])
                        }),
                        nu = ns.hasRestrictedTerms,
                        nc = ns.checkRestrictedTerms,
                        nl = (0, C.useState)(!0),
                        nd = nl[0],
                        nf = nl[1],
                        nm = (0, C.useState)(!1),
                        nh = nm[0],
                        np = nm[1],
                        nx = (0, C.useState)(!1),
                        ng = nx[0],
                        nv = nx[1],
                        nb = (ee = (0, eT.useSession)().data, en = (0, rI.a)(["models"], function() {
                            return q.ZP.getModels(null == ee ? void 0 : ee.accessToken)
                        }, {
                            enabled: !!(null == ee ? void 0 : ee.accessToken),
                            placeholderData: {
                                models: [{
                                    slug: "text-davinci-002-render",
                                    is_special: !1,
                                    max_tokens: 4097
                                }, ]
                            },
                            onError: function(e) {
                                try {
                                    rS.Tb(e)
                                } catch (n) {}
                            }
                        }).data, (0, C.useMemo)(function() {
                            var e;
                            return {
                                availableModels: en ? (e = en.models).map(function(e) {
                                    var n = e.is_special ? "■" : rT.QZ,
                                        t = (0, rT.hY)(e.slug) ? "" : n;
                                    return {
                                        id: e.slug,
                                        type: e.is_special ? "special" : "default",
                                        eopToken: t,
                                        maxTokens: e.max_tokens
                                    }
                                }).sort(function(e, n) {
                                    return n.type.localeCompare(e.type) || e.id.localeCompare(n.id)
                                }) : []
                            }
                        }, [en])).availableModels,
                        ny = (0, rT.ZP)(nb),
                        nj = ny.temperature,
                        nk = ny.maxTokens,
                        nw = ny.modelBackend,
                        nZ = ny.modelIsSpecial,
                        nC = ny.endOfPromptToken,
                        nP = ny.onChangeModelSetting,
                        nN = (0, C.useRef)(eE.thread),
                        nS = (0, C.useState)(eE.currentLeafId),
                        nI = nS[0],
                        nT = nS[1],
                        nD = (0, C.useMemo)(function() {
                            return nZ ? U : M
                        }, [nZ]),
                        nE = (0, C.useMemo)(function() {
                            var e = {
                                model: nw || "",
                                url: "".concat("https://chat.openai.com/backend-api", "/").concat((0, rT.hY)(nw) ? "conversation" : "completions"),
                                appId: "programming" === ez ? "codeqa" : ""
                            };
                            if ("public" === eD) {
                                var n = (0, ek.Jw)(nw || "") ? nw : "custom";
                                e.url = "".concat("https://api.openai.com", "/v1/engines/").concat(n, "/completions")
                            }
                            return e
                        }, [ez, eD, nw]),
                        nq = (0, C.useState)(null),
                        nR = nq[0],
                        nF = nq[1],
                        nO = (0, C.useState)({}),
                        nM = (nO[0], nO[1]),
                        nU = (0, C.useState)(new Set),
                        nA = nU[0],
                        nB = nU[1],
                        nz = (0, C.useCallback)(function(e, n) {
                            var t = n.isContinue,
                                r = void 0 !== t && t,
                                a = "",
                                o = J(nN.current, e),
                                i = new Set;
                            o.forEach(function(e, n) {
                                if (e.type !== E.Jq.Root) {
                                    (null === (t = e.metadata) || void 0 === t ? void 0 : t.artifacts) && (0, m.Z)(e.metadata.artifacts).forEach(function(e) {
                                        return i.add(e)
                                    });
                                    var t, s = H(e);
                                    if (n === o.length - 1 && r) return a += s;
                                    var u, c = nD(nC),
                                        l = c.turnSeparator,
                                        d = (0, c.preProcessInput)(s, e.type === E.Jq.Completion || e.type === E.Jq.EditedCompletion ? "Assistant" : "User");
                                    return a += l + d
                                }
                            });
                            var s = nD(nC),
                                u = s.processPrefix,
                                c = s.turnSeparator,
                                l = s.promptSuffix,
                                d = s.preProcessRetrieval;
                            return {
                                prefix: u(eL),
                                prompt: a,
                                artifacts: i,
                                turnSeparator: c,
                                promptSuffix: l,
                                preProcessRetrieval: d
                            }
                        }, [nC, nD, eL]),
                        n_ = (0, C.useCallback)(function(e) {
                            nM(function(n) {
                                return n[e], (0, d.Z)(n, [e].map(h.Z))
                            })
                        }, []),
                        nJ = (0, C.useCallback)(function() {
                            nr(), nW(""), e_(T.s6.newThread)
                        }, [e_, nr]),
                        nL = (0, C.useState)(""),
                        n$ = nL[0],
                        nW = nL[1],
                        nV = (0, C.useCallback)(function(e) {
                            if (eF.has("saveHistory") && "chat" === ez) {
                                var n = "text-davinci-002-render";
                                q.ZP.generateTitle(e5.current, e, n).then(function(e) {
                                    var t = e.title;
                                    nW(t), e_(T.s6.renameThread, {
                                        threadId: e5.current,
                                        content: t,
                                        model: n
                                    })
                                }).catch(function(e) {
                                    console.error(e)
                                })
                            }
                        }, [ez, e_, eF]),
                        nH = (et = e5, er = nN, eh = (0, C.useId)(), ep = (0, I.WS)(), eg = (ex = (0, rT.ZP)(nb)).temperature, ev = ex.endOfPromptToken, eb = ex.modelBackend, ey = ex.maxTokens, eZ = (ew = (0, C.useState)(0))[0], eC = ew[1], eP = (0, C.useRef)({}), eN = (0, C.useCallback)(function(e, n, t) {
                            var r, a = t.completionPrefix,
                                o = t.eventSource,
                                i = function() {
                                    setTimeout(function() {
                                        n_(n), nB(function(e) {
                                            var t = new Set(e);
                                            return t.delete(n), t
                                        }), delete eP.current[n]
                                    }, 0)
                                },
                                u = er.current[n].parentId,
                                c = "CompletionUpdated:".concat(n),
                                l = "CompletionUpdated:".concat(u),
                                d = !0,
                                f = "",
                                m = !a,
                                h = a || "",
                                x = !1,
                                g = !1,
                                v = !1,
                                b = rE()(function() {
                                    if (!x && !g) {
                                        var e = V(er.current || {}, n, {
                                            message: {
                                                content: {
                                                    parts: {
                                                        $set: [h]
                                                    }
                                                }
                                            }
                                        });
                                        er.current = e, Z().publish(c, {
                                            text: h
                                        })
                                    }
                                }, 50, {
                                    leading: !0,
                                    maxWait: 50
                                });

                            function y(e, n, t) {
                                return j.apply(this, arguments)
                            }

                            function j() {
                                return (j = (0, s.Z)(function(e, n, t) {
                                    var r, a, o, i, s, u, d, f, m, b = arguments;
                                    return (0, p.__generator)(this, function(p) {
                                        switch (p.label) {
                                            case 0:
                                                r = b.length > 3 && void 0 !== b[3] && b[3], p.label = 1;
                                            case 1:
                                                return p.trys.push([1, 3, , 4]), [4, function(e) {
                                                    var n = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                                                        t = arguments.length > 2 ? arguments[2] : void 0,
                                                        r = arguments.length > 3 ? arguments[3] : void 0,
                                                        a = ta()(e.length, 0, 4e3),
                                                        o = ta()(e.length - a, 0, e.length - 1),
                                                        i = n ? e.substring(o, e.length) : e;
                                                    return i ? q.ZP.runModerationApi(i, t, r).then(function(e) {
                                                        var n, t;
                                                        return {
                                                            isBlocked: Boolean(e.blocked),
                                                            isFlagged: Boolean(e.flagged)
                                                        }
                                                    }).catch(function(e) {
                                                        return console.error(e), {
                                                            isBlocked: !1,
                                                            isFlagged: !1,
                                                            error: e
                                                        }
                                                    }) : Promise.resolve({
                                                        isBlocked: !1,
                                                        isFlagged: !1
                                                    })
                                                }(t, !1, et.current, er.current[n].message.id)];
                                            case 2:
                                                return o = (a = p.sent()).isBlocked, i = a.isFlagged, o ? (g = !0, r || (x = !0), s = V(er.current, n, {
                                                    message: {
                                                        content: {
                                                            parts: {
                                                                $set: [""]
                                                            }
                                                        }
                                                    },
                                                    metadata: {
                                                        $set: {
                                                            err: "Contents may violate our content policy",
                                                            errCode: "content_policy",
                                                            errType: "danger"
                                                        }
                                                    }
                                                }), er.current = s, Z().publish(r ? c : l, {
                                                    text: "Contents may violate our content policy",
                                                    errCode: "content_policy",
                                                    flag: "danger"
                                                }), ep(r ? T.s6.completionBlockedByModeration : T.s6.promptBlockedByModeration, {
                                                    threadId: e,
                                                    id: n
                                                })) : i ? (v = !0, u = V(er.current, n, {
                                                    metadata: {
                                                        $set: to
                                                    }
                                                }), er.current = u, Z().publish(r ? c : l, {
                                                    text: r ? h : null,
                                                    errCode: "content_policy",
                                                    flag: "warning"
                                                }), ep(r ? T.s6.completionFlaggedByModeration : T.s6.promptFlaggedByModeration, {
                                                    threadId: e,
                                                    id: n
                                                })) : r && x && (d = V(er.current, n, {
                                                    message: {
                                                        content: {
                                                            parts: {
                                                                $set: [h]
                                                            }
                                                        }
                                                    }
                                                }), er.current = d, Z().publish(c, {
                                                    text: h
                                                })), [3, 4];
                                            case 3:
                                                return f = p.sent(), g = !0, m = V(er.current, n, {
                                                    metadata: {
                                                        $set: ti
                                                    }
                                                }), er.current = m, ep(T.s6.moderationError, {
                                                    threadId: e,
                                                    content: JSON.stringify(f || "")
                                                }), Z().publish(r ? c : l, {
                                                    text: "An error occured",
                                                    flag: "danger"
                                                }), Z().publish("UnrecoverableError"), [3, 4];
                                            case 4:
                                                return [2]
                                        }
                                    })
                                })).apply(this, arguments)
                            }
                            return r = (0, s.Z)(function(t) {
                                    var r, a, s, l, j, k, w, C, P, N, S, I;
                                    return (0, p.__generator)(this, function(p) {
                                        if (r = t.id, a = t.text, s = t.err, l = t.finish_reason, j = t.message, k = t.threadId, (s || !a && !j) && !l) return s && console.error(s), w = V(er.current || {}, n, {
                                            message: {
                                                content: {
                                                    parts: {
                                                        $set: [h]
                                                    }
                                                }
                                            },
                                            metadata: {
                                                $set: {
                                                    err: null == s ? void 0 : s.message,
                                                    errType: "danger"
                                                }
                                            }
                                        }), er.current = w, Z().publish(c, {
                                            text: (null == s ? void 0 : s.message) || "Something went wrong",
                                            flag: "danger"
                                        }), i(), [2];
                                        if (j) h = Q(j);
                                        else if (!m && a) h += a;
                                        else {
                                            var N, D;
                                            N = a || "", P = ((D = RegExp(rq, "gm")).test(N), C = {
                                                found: 0 !== D.lastIndex,
                                                result: N.substring(D.lastIndex)
                                            }).found, h += C.result, P || (m = !1)
                                        }
                                        return d && (d = !1, f = (null == j ? void 0 : j.id) || r || "", k && (et.current = k), S = j ? V(er.current || {}, n, {
                                            message: {
                                                $set: j
                                            }
                                        }) : V(er.current || {}, n, {
                                            message: {
                                                id: {
                                                    $set: r
                                                }
                                            }
                                        }), er.current = S, 3 === Object.values(er.current).length && nJ(), y(et.current, u, K(er.current, u, 1), !1), ep(T.s6.generateCompletion, {
                                            id: f,
                                            threadId: k,
                                            completionType: e,
                                            eventSource: o
                                        }), Z().publish("PublishAborter", {
                                            id: n,
                                            aborter: eP.current[n]
                                        })), b(), ("stop" === l || "length" === l) && (x || g || (b.flush(), v || 3 !== Object.values(er.current).length || nV(f)), I = K(er.current, u, 3) + h, y(et.current, n, I, !0), g || (Z().publish(c, {
                                            text: h
                                        }), ep(T.s6.completionFinished, {
                                            id: f,
                                            threadId: et.current,
                                            completionType: e,
                                            eventSource: o,
                                            containsCodeBlock: h.includes("```")
                                        })), i()), [2]
                                    })
                                }),
                                function(e) {
                                    return r.apply(this, arguments)
                                }
                        }, [ep, nJ, nV, n_, nB, et, er, ]), (0, C.useCallback)((eS = (0, s.Z)(function(e, n, t, r, a) {
                            var o, i, s, u, c, l, d, f, m, h, x, g, v, b, y, j, k, w, Z, C, P;
                            return (0, p.__generator)(this, function(p) {
                                switch (p.label) {
                                    case 0:
                                        if (o = n.prefix, i = n.prompt, s = n.url, u = n.tokenCount, c = n.promptSuffix, l = n.turnSeparator, d = n.preProcessRetrieval, eC(function(e) {
                                                return e + 1
                                            }), f = "request-".concat(eh, "-").concat(eZ), nB(function(e) {
                                                var n = new Set(e);
                                                return n.add(f), n
                                            }), m = "".concat(o || "").concat(i).concat(l).concat(c), h = $(f, "", t, E.Jq.Completion), x = W(er.current || {}, t, h), er.current = x, nT(f), !eV) return [3, 4];
                                        p.label = 1;
                                    case 1:
                                        return p.trys.push([1, 3, , 4]), [4, q.ZP.getRetrievalResults(i)];
                                    case 2:
                                        var N, S, I;
                                        return g = p.sent(), N = d, eY(v = (null == (S = g) ? void 0 : null === (I = S.public_data) || void 0 === I ? void 0 : I.length) ? S.public_data.map(function(e) {
                                            var n = JSON.parse(e[0].contents);
                                            return N("Sample question:\n".concat(n.question, "Answer:\n").concat(n.answer))
                                        }).join("") : ""), m = "".concat(o || "").concat(v).concat(i).concat(l).concat(c), [3, 4];
                                    case 3:
                                        return b = p.sent(), console.error(b), eY(""), [3, 4];
                                    case 4:
                                        return j = [], k = er.current[t], e === E.Os.Next || e === E.Os.Variant ? (y = (null === (w = (Z = er.current[k.parentId]).message) || void 0 === w ? void 0 : w.id) || Z.id, j.push(k.message)) : y = k.message.id, C = ta()(ey - u - 500, 100, Math.floor(ey / 2)), [4, q.ZP.publicApiCompletionStream({
                                            url: r.url,
                                            model: eb,
                                            appId: r.appId
                                        }, {
                                            completionType: e,
                                            threadId: et.current || void 0,
                                            parentMessageId: y,
                                            messages: j,
                                            prompt: m,
                                            url: s,
                                            temperature: eg,
                                            stop: [ev],
                                            maxTokens: C
                                        }, eN(e, f, a))];
                                    case 5:
                                        return P = p.sent(), eP.current[f] = P, [2]
                                }
                            })
                        }), function(e, n, t, r, a) {
                            return eS.apply(this, arguments)
                        }), [eh, eZ, nB, er, nT, eV, eb, et, eg, ev, ey, eN, eY, ])),
                        nQ = (0, C.useCallback)(function() {
                            eB.replace({
                                pathname: eB.basePath,
                                query: {}
                            }, void 0, {
                                shallow: !0
                            })
                        }, [eB]),
                        nK = (0, C.useCallback)(function() {
                            if (nI) {
                                var e = J(nN.current, nI);
                                nM(function(n) {
                                    var t = (0, c.Z)({}, n);
                                    return e.forEach(function(e) {
                                        e.id in t && (t[e.id].abort(), delete t[e.id])
                                    }), t
                                }), nB(function(n) {
                                    var t = new Set(n);
                                    return e.forEach(function(e) {
                                        t.delete(e.id)
                                    }), t
                                })
                            }
                        }, [nI]),
                        nY = (0, C.useCallback)((eI = (0, s.Z)(function(e, n, t, r, a) {
                            var o;
                            return (0, p.__generator)(this, function(i) {
                                return r && nK(), e7(!0), o = nz(n, {
                                    isContinue: e === E.Os.Continue
                                }), nc(o.prompt) || nH(e, (0, l.Z)((0, c.Z)({}, o), {
                                    url: a,
                                    tokenCount: 0
                                }), n, nE, t), [2]
                            })
                        }), function(e, n, t, r, a) {
                            return eI.apply(this, arguments)
                        }), [nz, nc, nH, nE, nK, ]),
                        nG = (0, C.useCallback)(function(e, n, t, r, a) {
                            var o = $(e, r, n, t, a),
                                i = W(nN.current, n, o);
                            nN.current = i
                        }, []),
                        nX = (0, C.useCallback)(function(e, n, t, r) {
                            var a = n.value,
                                o = n.artifacts;
                            nG(e, nI, E.Jq.Prompt, a, o ? {
                                artifacts: o
                            } : void 0), nY(E.Os.Next, e, t, !0, r)
                        }, [nI, nG, nY]),
                        n0 = (0, C.useCallback)(function(e) {
                            var n = nN.current[e].parentId || "root";
                            nY(E.Os.Variant, n, {
                                eventSource: "mouse"
                            }, !1)
                        }, [nY]);
                    (0, C.useCallback)(function(e) {
                        var n = nN.current[e].parentId || "root";
                        nY(E.Os.Continue, n, {
                            eventSource: "mouse"
                        }, !0)
                    }, [nY]);
                    var n1 = (0, C.useCallback)(function(e) {
                            var n = L(nN.current, e);
                            nT(n.id), e_(T.s6.changeNode)
                        }, [e_, nT]),
                        n2 = (0, C.useCallback)(function(e, n) {
                            var t = V(nN.current, e, {
                                message: {
                                    content: {
                                        parts: {
                                            $set: [n]
                                        }
                                    }
                                }
                            });
                            nN.current = t
                        }, []),
                        n3 = (0, C.useCallback)(function(e, n, t) {
                            e_(T.s6.thumbRating, {
                                id: n,
                                threadId: e5.current,
                                rating: t,
                                model: nw
                            }), e5.current && q.ZP.submitMessageFeedback({
                                message_id: n,
                                conversation_id: e5.current,
                                rating: t
                            }), e0(t), e3(n);
                            var r = nN.current[e].metadata,
                                a = V(nN.current, e, {
                                    metadata: {
                                        $set: (0, l.Z)((0, c.Z)({}, r), {
                                            rating: t
                                        })
                                    }
                                });
                            nN.current = a
                        }, [e_, nw]),
                        n4 = (0, C.useCallback)(function() {
                            var e, n = null === (e = e4.current) || void 0 === e ? void 0 : e.elements,
                                t = (0, m.Z)(n || []).filter(function(e) {
                                    return e.checked
                                }).map(function(e) {
                                    return e.id
                                }),
                                r = (null == n ? void 0 : n["feedback-other"].value) || "";
                            eX && e2 && (r || t.length > 0) && (e_(T.s6.reportResult, {
                                id: e2,
                                threadId: e5.current,
                                content: r,
                                model: nw,
                                rating: eX,
                                tags: t
                            }), e5.current && q.ZP.submitMessageFeedback({
                                message_id: e2,
                                conversation_id: e5.current,
                                rating: eX,
                                text: r,
                                tags: t.map(function(e) {
                                    return e.replace("feedback-", "")
                                })
                            })), e0(void 0)
                        }, [e_, nw, e2, eX]),
                        n6 = (0, C.useCallback)(function(e) {
                            var n, t, r, a, o, i = (r = (n = nN.current)[e], a = (0, d.Z)(n, [e].map(h.Z)), o = r.parentId, B()(a, (0, u.Z)({}, o, {
                                children: {
                                    $apply: function(n) {
                                        return n.filter(function(n) {
                                            return n !== e
                                        })
                                    }
                                }
                            })));
                            nN.current = i
                        }, []),
                        n8 = (0, C.useCallback)(function(e) {
                            switch (null == e ? void 0 : e.state) {
                                case "pending":
                                    nG("artifact", "root", E.Jq.Prompt, e.url, {
                                        artifacts: [e.url]
                                    }), nG("artifact-summary", "artifact", E.Jq.Completion, "loading..."), nT("artifact"), nF(e);
                                    break;
                                case "success":
                                    n2("artifact-summary", e.contents), nT("artifact-summary"), nF(e);
                                    break;
                                default:
                                    nF(e)
                            }
                        }, [nG, n2, nT]),
                        n7 = (0, C.useCallback)(function() {
                            nv(function(e) {
                                return "debug" !== e && "debug"
                            })
                        }, []),
                        n9 = (0, C.useCallback)(function() {
                            nv(function(e) {
                                return "navigation" !== e && "navigation"
                            })
                        }, []),
                        te = (0, C.useCallback)(function(e, n) {
                            nM(function(e) {
                                var t = e[n],
                                    r = (0, d.Z)(e, [n].map(h.Z));
                                return null == t || t.abort(), r
                            }), nB(function(e) {
                                var t = new Set(e);
                                return t.delete(n), t
                            })
                        }, []),
                        tt = (0, C.useCallback)(function(e, n) {
                            var t = n.id,
                                r = n.aborter;
                            r && nM(function(e) {
                                return (0, l.Z)((0, c.Z)({}, e), (0, u.Z)({}, t, r))
                            })
                        }, []),
                        tr = (0, C.useCallback)(function() {
                            nM(function(e) {
                                return Object.values(e).forEach(function(e) {
                                    return e.abort()
                                }), {}
                            }), nB(new Set), nT("root"), nF(null), nN.current = {
                                root: {
                                    id: "root",
                                    children: [],
                                    parentId: "",
                                    type: E.Jq.Root,
                                    message: {
                                        id: (0, z.Z)(),
                                        role: _[E.Jq.Root],
                                        content: {
                                            content_type: "text",
                                            parts: []
                                        }
                                    }
                                }
                            }, e5.current = ""
                        }, []);
                    (0, C.useCallback)(function() {
                        var e = nz(nI, {}),
                            n = e.prompt,
                            t = e.prefix;
                        navigator.clipboard.writeText("".concat(t).concat(n)), e_(T.s6.copyToClipboard, {
                            threadId: e5.current
                        })
                    }, [nz, nI, e_]);
                    var ts = (0, C.useCallback)(function() {
                        np(!0)
                    }, []);
                    (0, C.useEffect)(function() {
                        return Z().subscribe("AbortCompletion", te), Z().subscribe("PublishAborter", tt), Z().subscribe("UnrecoverableError", ts),
                            function() {
                                Z().unsubscribe("AbortCompletion"), Z().unsubscribe("PublishAborter"), Z().unsubscribe("UnrecoverableError")
                            }
                    }, [te, tt, ts]);
                    var tu, tc, tl = (0, C.useMemo)(function() {
                            return nI ? J(nN.current, nI).map(function(e) {
                                return e.id
                            }) : []
                        }, [nI]),
                        td = (0, C.useMemo)(function() {
                            if (0 === Object.keys(nN.current || {}).length) return [];
                            var e = nN.current || {},
                                n = J(e, nI || "root").reverse(),
                                t = [];
                            return n.forEach(function(n, r) {
                                var a = n.id,
                                    o = n.children,
                                    i = n.type,
                                    s = n.parentId,
                                    u = n.message,
                                    l = n.metadata;
                                t.push({
                                    siblings: [{
                                        id: a,
                                        type: i,
                                        depth: r,
                                        message: u,
                                        err: null == l ? void 0 : l.err,
                                        errType: null == l ? void 0 : l.errType,
                                        errCode: null == l ? void 0 : l.errCode,
                                        rating: null == l ? void 0 : l.rating
                                    }, ],
                                    type: i,
                                    parentId: s
                                }), o.length > 0 && r > 0 && (t[r - 1].siblings = Array.from(o).map(function(n) {
                                    var t = e[n],
                                        a = t.id,
                                        o = t.type,
                                        i = t.metadata,
                                        s = t.message;
                                    return (0, c.Z)({
                                        id: a,
                                        message: s,
                                        type: o,
                                        depth: r - 1,
                                        rating: null == i ? void 0 : i.rating
                                    }, i)
                                }))
                            }), t.reverse()
                        }, [nI]),
                        tf = (0, C.useState)(""),
                        tm = tf[0],
                        th = tf[1],
                        tp = (0, C.useCallback)(function() {
                            nf(!0), D.m.setItem("oai/librarian/hasSeenWarning", "true")
                        }, []),
                        tx = (0, C.useCallback)(function() {
                            ni(!1)
                        }, []),
                        tg = nz(nI, {
                            isContinue: !1
                        }),
                        tv = (0, C.useMemo)(function() {
                            return eF.has("debug") ? new Set([rT.G3.Model]) : new Set
                        }, [eF]),
                        tb = (0, C.useMemo)(function() {
                            return (0, x.jsx)(ef, {
                                items: ne || [],
                                activeId: e5.current,
                                hasNextPage: Boolean(nn),
                                onNextPage: nt,
                                onNewThread: tr,
                                onRefetchHistory: nr,
                                newChatName: n$
                            })
                        }, [ne, nt, tr, nn, nr, n$, ]);
                    return (0, x.jsxs)(r_, {
                        children: [!nd && (0, x.jsx)(ej.Z, {
                            isOpen: !0,
                            onModalClose: tp,
                            icon: v.Z,
                            title: "Do not share sensitive materials with this application",
                            primaryButton: (0, x.jsx)(ej.m, {
                                onClick: tp,
                                title: "Acknowledge"
                            }),
                            type: "danger"
                        }, "OnboardingModal"), nu && no && (0, x.jsx)(ej.Z, {
                            isOpen: !0,
                            onModalClose: tx,
                            icon: N.U0j,
                            title: "This prompt may violate our content policy.",
                            primaryButton: (0, x.jsx)(ej.m, {
                                onClick: tx,
                                title: "Acknowledge"
                            }),
                            type: "danger"
                        }, "RestrictedTerms"), Boolean(eX) && (0, x.jsx)(ej.Z, {
                            isOpen: !0,
                            onModalClose: function() {
                                return e0(void 0)
                            },
                            type: "thumbsUp" === eX ? "success" : "danger",
                            icon: "thumbsUp" === eX ? N.fmn : N.oLd,
                            title: "Provide additional feedback",
                            primaryButton: (0, x.jsx)(ej.m, {
                                title: "Submit feedback",
                                onClick: n4
                            }),
                            children: (0, x.jsxs)("form", {
                                ref: e4,
                                children: [(0, x.jsx)(P.ZP, {
                                    id: "feedback-other",
                                    placeholder: "What would the ideal answer have been?",
                                    rows: 3,
                                    className: "mt-4 mb-1 w-full rounded-md dark:bg-gray-800 dark:focus:border-white dark:focus:ring-white"
                                }), "thumbsDown" === eX && (0, x.jsxs)(x.Fragment, {
                                    children: [(0, x.jsx)(Y, {
                                        id: "feedback-harmful",
                                        label: "This is harmful / unsafe"
                                    }), (0, x.jsx)(Y, {
                                        id: "feedback-false",
                                        label: "This isn't true"
                                    }), (0, x.jsx)(Y, {
                                        id: "feedback-not-helpful",
                                        label: "This isn't helpful"
                                    })]
                                })]
                            })
                        }, "RatingModal-".concat(e2)), (0, x.jsxs)("div", {
                            className: "flex h-full flex-1 flex-col md:pl-60",
                            children: [(0, x.jsx)(eU, {
                                onSidebarOpen: n9
                            }), (0, x.jsxs)(rJ, {
                                className: "flex-1 ",
                                children: [(0, x.jsx)(rL, {
                                    children: (0, x.jsx)(rx, {
                                        wrap: e8,
                                        children: (0, x.jsx)(rl, {
                                            onChangeItemInView: n1,
                                            onCreateNewNode: nG,
                                            onUpdateNode: n2,
                                            onChangeRating: n3,
                                            onDeleteNode: n6,
                                            onRequestCompletion: nY,
                                            onChangeCurrentPrompt: th,
                                            threadId: e5.current,
                                            nodes: td,
                                            branchesInView: tl,
                                            activeRequests: nA,
                                            isProcessingArtifact: (null == nR ? void 0 : nR.state) === "pending"
                                        })
                                    })
                                }), (0, x.jsxs)(r$, {
                                    children: [(0, x.jsx)(n5, {
                                        currentLeafId: nI,
                                        threadId: e5.current,
                                        currentPrompt: tm,
                                        onChangeCurrentPrompt: th,
                                        queryDataEnabled: eV,
                                        onToggleQueryData: eH,
                                        onRequestMoreCompletions: n0,
                                        onCreateNewCompletion: nX,
                                        onAbortCompletion: te,
                                        isCompletionInProgress: nA.has(nI),
                                        onUpdateArtifactStatus: n8,
                                        artifact: nR,
                                        className: (0, b.Z)("stretch mx-2 flex flex-row gap-3 pt-2 last:mb-2 md:last:mb-6 lg:mx-auto lg:max-w-3xl lg:pt-6"),
                                        canUsePalette: eR.length > 0,
                                        paletteFeatures: eR,
                                        placeholder: "programming" === ez ? "How do I..." : "",
                                        disableInterruptions: (0, rT.hY)(nw || ""),
                                        disabled: !nb.length
                                    }), "chat" === ez && (0, x.jsxs)("div", {
                                        className: "px-3 pt-2 pb-3 text-center text-xs text-black/50 dark:text-white/50 md:px-4 md:pt-3 md:pb-6",
                                        children: [(0, x.jsx)("a", {
                                            href: "https://help.openai.com/en/articles/6825453-chatgpt-release-notes",
                                            target: "_blank",
                                            rel: "noreferrer",
                                            className: "underline",
                                            children: "ChatGPT Dec 15 Version"
                                        }), ". Free Research Preview. Our goal is to make AI systems more natural and safe to interact with. Your feedback will help us improve."]
                                    })]
                                })]
                            })]
                        }), (0, x.jsx)(eM, {
                            onSidebarOpen: n9,
                            sidebarOpen: "navigation" === ng,
                            onOpenDebugPanel: n7,
                            onNewThread: tr,
                            pages: eA,
                            children: tb
                        }), (0, x.jsx)(eO, {
                            onOpenDebugPanel: n7,
                            onNewThread: tr,
                            pages: eA,
                            settings: tv.size > 0 && (0, x.jsx)(ek.ZP, {
                                temperature: nj,
                                maxTokens: nk,
                                endOfPromptToken: nC,
                                onRestoreDefaults: nQ,
                                promptPrefix: eL,
                                onChangePromptPrefix: e$,
                                modelBackend: nw,
                                onChangeSetting: nP,
                                position: "top-right",
                                settings: tv,
                                availableModels: nb,
                                children: (0, x.jsxs)(g.J.Button, {
                                    as: eq,
                                    children: [(0, x.jsx)(ea.ZP, {
                                        icon: N.nbt
                                    }), "Settings"]
                                })
                            }),
                            children: tb
                        }), (0, x.jsx)(tn, {
                            icon: N.cDN,
                            title: "Debug",
                            sidebarOpen: "debug" === ng,
                            onSidebarOpen: n9,
                            children: (0, x.jsx)(rZ, {
                                lastPrompt: tg,
                                lastQueryDataResult: eK,
                                fullText: (0, rT.hY)(nw || "") ? J(tu = nN.current, nI).filter(function(e) {
                                    return e.type !== E.Jq.Root && e.type !== E.Jq.System
                                }).map(function(e) {
                                    return H(e)
                                }).join("\n\n") : ""
                            })
                        }), nh && (0, x.jsx)(ej.Z, {
                            onModalClose: j(),
                            isOpen: !0,
                            icon: v.Z,
                            title: "Something went wrong",
                            description: "We're sorry, but something went wrong. Please try again later.",
                            primaryButton: (0, x.jsx)(ej.m, {
                                onClick: function() {
                                    tr(), np(!1)
                                },
                                title: "Reset thread"
                            }),
                            type: "danger"
                        }, "UnrecoverableErrorModal")]
                    })
                },
                r_ = S.Z.div(rM()),
                rJ = S.Z.main(rU()),
                rL = S.Z.div(rA()),
                r$ = S.Z.div(rB()),
                rW = rz
        },
        17282: function(e, n, t) {
            t.d(n, {
                ZP: function() {
                    return S
                },
                PV: function() {
                    return N
                }
            });
            var r = t(14806),
                a = t(35250),
                o = t(70079),
                i = t(34303),
                s = t(34888),
                u = t(40147),
                c = t(62517);

            function l() {
                var e = (0, r.Z)(["flex p-4 bg-gray-50 dark:bg-white/5 rounded-md items-center gap-4 min-h-[71px]"]);
                return l = function() {
                    return e
                }, e
            }

            function d() {
                var e = (0, r.Z)(["w-10 text-2xl text-center"]);
                return d = function() {
                    return e
                }, e
            }

            function f() {
                var e = (0, r.Z)(["flex-1 leading-5"]);
                return f = function() {
                    return e
                }, e
            }

            function m() {
                var e = (0, r.Z)(["flex gap-4 mt-6"]);
                return m = function() {
                    return e
                }, e
            }

            function h(e) {
                var n = e.icon,
                    t = e.children;
                return (0, a.jsxs)(p, {
                    children: [(0, a.jsx)(x, {
                        children: n
                    }), (0, a.jsx)(g, {
                        children: t
                    })]
                })
            }
            var p = i.Z.div(l()),
                x = i.Z.div(d()),
                g = i.Z.div(f());

            function v(e) {
                var n = e.onBack,
                    t = e.onNext,
                    r = e.onSubmit;
                return (0, a.jsxs)(b, {
                    children: [n && (0, a.jsx)(c.z, {
                        as: "button",
                        color: "neutral",
                        onClick: n,
                        children: "Back"
                    }), t && (0, a.jsx)(c.z, {
                        as: "button",
                        onClick: t,
                        color: "neutral",
                        className: "ml-auto",
                        children: "Next"
                    }), r && (0, a.jsx)(c.z, {
                        as: "button",
                        onClick: r,
                        color: "primary",
                        className: "ml-auto",
                        children: "Done"
                    })]
                })
            }
            var b = i.Z.div(m());

            function y() {
                var e = (0, r.Z)(["prose dark:prose-invert"]);
                return y = function() {
                    return e
                }, e
            }

            function j() {
                var e = (0, r.Z)(["!mt-4 font-normal !mb-2"]);
                return j = function() {
                    return e
                }, e
            }

            function k() {
                var e = (0, r.Z)(["mb-4"]);
                return k = function() {
                    return e
                }, e
            }

            function w() {
                var e = (0, r.Z)(["w-full h-[1px] bg-gray-300 opacity-20"]);
                return w = function() {
                    return e
                }, e
            }

            function Z() {
                var e = (0, r.Z)(["flex gap-4 flex-col text-sm"]);
                return Z = function() {
                    return e
                }, e
            }

            function C() {
                var e = (0, r.Z)(["text-xs leading-5 mt-4 flex items-center"]);
                return C = function() {
                    return e
                }, e
            }
            var P = "oai/apps/hasSeenOnboarding",
                N = function(e) {
                    var n = (0, o.useCallback)(function() {
                            s.m.setItem("".concat(P, "/").concat(e), new Date().toLocaleDateString("en-CA", {
                                year: "numeric",
                                month: "2-digit",
                                day: "2-digit"
                            }))
                        }, [e]),
                        t = (0, o.useCallback)(function() {
                            var n = s.m.getItem("".concat(P, "/").concat(e));
                            return n ? new Date(!0 === n ? "2022-12-14" : n) : n
                        }, [e]);
                    return (0, o.useMemo)(function() {
                        return {
                            setHasSeenOnboarding: n,
                            getHasSeenOnboardingDate: t
                        }
                    }, [t, n])
                };

            function S(e) {
                var n = e.onClose,
                    t = N((0, o.useContext)(u.yP).id).setHasSeenOnboarding,
                    r = (0, o.useState)(0),
                    i = r[0],
                    s = r[1],
                    c = (0, o.useCallback)(function() {
                        n(!0), t()
                    }, [n, t]);
                return (0, a.jsxs)(q, {
                    children: [0 === i && (0, a.jsx)(T, {
                        onChangePage: s
                    }), 1 === i && (0, a.jsx)(D, {
                        onChangePage: s
                    }), 2 === i && (0, a.jsx)(E, {
                        onChangePage: s,
                        onSubmit: c
                    })]
                })
            }
            var I = function() {
                    var e = (0, o.useContext)(u.yP),
                        n = e.id,
                        t = e.name;
                    return "chat" === n ? (0, a.jsxs)(a.Fragment, {
                        children: [(0, a.jsx)("div", {
                            className: "mb-5",
                            children: (0, a.jsx)(R, {
                                children: (0, a.jsx)("b", {
                                    children: t
                                })
                            })
                        }), (0, a.jsx)(O, {})]
                    }) : (0, a.jsxs)(a.Fragment, {
                        children: [(0, a.jsxs)(R, {
                            children: ["Welcome to ", (0, a.jsx)("b", {
                                children: t
                            })]
                        }), (0, a.jsx)("p", {
                            children: "Here are a few things to keep in mind before we get started:"
                        }), (0, a.jsx)(O, {})]
                    })
                },
                T = function(e) {
                    var n = e.onChangePage;
                    return "chat" === (0, o.useContext)(u.yP).id ? (0, a.jsxs)(a.Fragment, {
                        children: [(0, a.jsx)(I, {}), (0, a.jsx)(F, {
                            children: "This is a free research preview."
                        }), (0, a.jsxs)(M, {
                            children: [(0, a.jsx)(h, {
                                icon: "\uD83D\uDD2C",
                                children: "Our goal is to get external feedback in order to improve our systems and make them safer."
                            }), (0, a.jsx)(h, {
                                icon: "\uD83D\uDEA8",
                                children: "While we have safeguards in place, the system may occasionally generate incorrect or misleading information and produce offensive or biased content. It is not intended to give advice."
                            })]
                        }), (0, a.jsx)(v, {
                            onNext: function() {
                                return n(1)
                            }
                        })]
                    }) : (0, a.jsxs)(a.Fragment, {
                        children: [(0, a.jsx)(I, {}), (0, a.jsx)(F, {
                            children: "Confidentiality"
                        }), (0, a.jsxs)(M, {
                            children: [(0, a.jsx)(h, {
                                icon: "\uD83E\uDD2B",
                                children: "This private preview is strictly for testing purposes only"
                            }), (0, a.jsxs)(h, {
                                icon: "\uD83D\uDCC3",
                                children: ["Please do not share info about this product with anyone. Use of this product is subject to our", " ", (0, a.jsx)("a", {
                                    href: "https://openai.com/api/policies/terms/",
                                    target: "_blank",
                                    rel: "noreferrer",
                                    children: "Terms of Service"
                                })]
                            })]
                        }), (0, a.jsx)(v, {
                            onNext: function() {
                                return n(1)
                            }
                        })]
                    })
                },
                D = function(e) {
                    var n = e.onChangePage,
                        t = (0, o.useContext)(u.yP).id;
                    return (0, a.jsxs)(a.Fragment, {
                        children: [(0, a.jsx)(I, {}), (0, a.jsx)(F, {
                            children: "How we collect data"
                        }), (0, a.jsxs)(M, {
                            children: [(0, a.jsx)(h, {
                                icon: "\uD83E\uDDBE",
                                children: "Conversations may be reviewed by our AI trainers to improve our systems."
                            }), (0, a.jsx)(h, {
                                icon: "\uD83D\uDD10",
                                children: "Please don't share any sensitive information in your conversations."
                            })]
                        }), "chat" !== t && (0, a.jsx)(U, {
                            children: "If you think you've mentioned sensitive information, please reach out to chat@openai.com"
                        }), (0, a.jsx)(v, {
                            onBack: function() {
                                return n(0)
                            },
                            onNext: function() {
                                return n(2)
                            }
                        })]
                    })
                },
                E = function(e) {
                    var n = e.onChangePage,
                        t = e.onSubmit,
                        r = (0, o.useContext)(u.yP).id,
                        i = (0, o.useRef)(null);
                    return (0, a.jsxs)(a.Fragment, {
                        children: [(0, a.jsx)(I, {}), (0, a.jsx)(F, {
                            children: "We'd love your feedback!"
                        }), (0, a.jsxs)(M, {
                            children: [(0, a.jsx)(h, {
                                icon: "\uD83D\uDC4D",
                                children: "This system is optimized for dialogue. Let us know if a particular response was good or unhelpful."
                            }), (0, a.jsx)(h, {
                                icon: "\uD83D\uDCAC",
                                children: "chat" === r ? (0, a.jsxs)(a.Fragment, {
                                    children: ["Share your feedback in our", " ", (0, a.jsx)("a", {
                                        href: "https://discord.gg/openai",
                                        target: "_blank",
                                        rel: "noreferrer",
                                        children: "Discord server"
                                    }), "."]
                                }) : "Share your ideas and feedback with us directly"
                            })]
                        }), (0, a.jsx)(v, {
                            onBack: function() {
                                return n(1)
                            },
                            onSubmit: function() {
                                return null == t ? void 0 : t(i)
                            }
                        })]
                    })
                },
                q = i.Z.div(y()),
                R = i.Z.h2(j()),
                F = i.Z.h4(k()),
                O = i.Z.div(w()),
                M = i.Z.div(Z()),
                U = i.Z.div(C())
        },
        83632: function(e, n, t) {
            t.d(n, {
                w: function() {
                    return o
                }
            });
            var r = t(31501),
                a = t(48957);

            function o(e) {
                (0, a.signOut)((0, r.Z)({
                    callbackUrl: window.location.origin + "/api/auth/logout"
                }, e))
            }
        },
        34888: function(e, n, t) {
            t.d(n, {
                m: function() {
                    return o
                }
            });
            var r = t(35025);
            t(70079);
            var a = window.localStorage,
                o = function() {
                    function e() {
                        (0, r.Z)(this, e)
                    }
                    return e.setItem = function(e, n) {
                        if (!a) throw Error("You cannot set localStorage server-side");
                        a.setItem(e, JSON.stringify(n))
                    }, e.getItem = function(e) {
                        if (a) {
                            var n = a.getItem(e);
                            return "string" == typeof n ? JSON.parse(n) : n
                        }
                        return null
                    }, e.removeItem = function(e) {
                        if (a) return a.removeItem(e)
                    }, e
                }()
        }
    }
]);