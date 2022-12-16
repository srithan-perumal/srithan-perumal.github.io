(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [6], {
        69756: function(e, t, n) {
            (window.__NEXT_P = window.__NEXT_P || []).push(["/chat/[[...chatId]]", function() {
                return n(41528)
            }])
        },
        41528: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                __N_SSP: function() {
                    return k
                },
                default: function() {
                    return _
                }
            });
            var s = n(35250),
                a = n(91530),
                i = n.n(a),
                r = n(70079),
                o = n(65831),
                c = n(14806),
                l = n(34303),
                u = n(62517);

            function d() {
                var e = (0, c.Z)(["prose dark:prose-invert"]);
                return d = function() {
                    return e
                }, e
            }

            function m() {
                return (0, s.jsxs)(h, {
                    children: [(0, s.jsxs)("div", {
                        className: "mb-5",
                        children: [(0, s.jsx)("h3", {
                            className: "!mt-0 !mb-2 font-normal text-gray-700 dark:text-white",
                            children: (0, s.jsx)("b", {
                                children: "You've hit your daily limit"
                            })
                        }), (0, s.jsx)("h4", {
                            className: "mb-4 font-normal",
                            children: "To ensure a high-quality experience for all ChatGPT users, we're temporarily limiting the number of daily messages anyone can send."
                        })]
                    }), (0, s.jsx)("div", {
                        className: "-mx-4 -mb-4 bg-green-700 px-4 pt-5 pb-4 dark:text-white sm:-m-6 sm:-mb-12 sm:mt-6 sm:px-6 sm:pb-8",
                        children: (0, s.jsxs)("div", {
                            className: "flex flex-row gap-2 sm:gap-4",
                            children: [(0, s.jsxs)("div", {
                                className: "text-white",
                                children: [(0, s.jsx)("b", {
                                    children: "Want to keep chatting?"
                                }), " Get increased access for today by helping us improve ChatGPT."]
                            }), (0, s.jsx)("div", {
                                className: "flex flex-col items-center justify-center",
                                children: (0, s.jsx)(u.z, {
                                    as: "button",
                                    color: "primary-invert",
                                    onClick: function() {
                                        console.log("go")
                                    },
                                    children: (0, s.jsx)("span", {
                                        className: "whitespace-nowrap",
                                        children: "Compare Responses"
                                    })
                                })
                            })]
                        })
                    })]
                })
            }
            var h = l.Z.div(d()),
                p = n(34888),
                f = "oai/apps/hasSeenReleaseAnnouncement",
                x = "2022-12-15";

            function v(e) {
                var t = e.hasSeenOnboardingDate,
                    n = (0, r.useState)(function() {
                        return !Boolean(p.m.getItem("".concat(f, "/").concat(x))) && !!t && t < new Date(x)
                    }),
                    a = n[0],
                    i = n[1],
                    c = (0, r.useState)(!1),
                    l = c[0],
                    u = c[1];
                (0, r.useEffect)(function() {
                    u(!0)
                }, []);
                var d = (0, r.useCallback)(function() {
                    p.m.setItem("".concat(f, "/").concat(x), !0), i(!1)
                }, []);
                return l ? (0, s.jsx)(o.Z, {
                    size: "xs",
                    isOpen: a,
                    onModalClose: d,
                    type: "success",
                    title: "",
                    primaryButton: (0, s.jsx)(o.m, {
                        title: "Sounds good!",
                        color: "primary",
                        onClick: d
                    }),
                    children: (0, s.jsxs)("div", {
                        className: "mb-6 flex flex-col gap-6",
                        children: [(0, s.jsx)("div", {
                            className: "text-gray-800",
                            children: "Dec 15 version update"
                        }), (0, s.jsx)("div", {
                            className: "text-2xl",
                            children: "Here's what's new"
                        }), (0, s.jsx)("div", {
                            children: "Among other improvements, you will notice that ChatGPT is now less likely to refuse to answer questions. We look forward to your feedback."
                        })]
                    })
                }) : null
            }
            var j = n(70168),
                g = n(17282),
                y = n(63437),
                w = n(40147),
                b = function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "chat",
                        t = (0, r.useMemo)(function() {
                            return Boolean(p.m.getItem("".concat("oai/apps/showRateLimitCaptcha", "/").concat(e)))
                        }, [e]);
                    return (0, r.useMemo)(function() {
                        return {
                            shouldSeeRateLimitCaptcha: t
                        }
                    }, [t])
                },
                N = n(708),
                C = n(75998),
                k = !0;

            function _(e) {
                var t = e.user,
                    n = e.accessToken,
                    a = e.paletteFeatures,
                    c = e.features,
                    l = e.pages,
                    u = e.initialData,
                    d = (0, r.useState)(!1),
                    h = d[0],
                    p = d[1],
                    f = (0, r.useMemo)(function() {
                        return w.TJ
                    }, []),
                    x = (0, g.PV)(f.id).getHasSeenOnboardingDate,
                    k = b(f.id).shouldSeeRateLimitCaptcha,
                    _ = (0, r.useMemo)(function() {
                        return {
                            app: C.VY,
                            origin: "chat"
                        }
                    }, []);
                return (0, y.Z)("ChatGPT", t, n, _), (0, r.useEffect)(function() {
                    p(!x())
                }, [x]), (0, s.jsx)(w.yP.Provider, {
                    value: f,
                    children: (0, s.jsxs)(N.Af.Provider, {
                        value: _,
                        children: [(0, s.jsx)(o.Z, {
                            size: "medium",
                            isOpen: k,
                            onModalClose: i(),
                            type: "success",
                            children: (0, s.jsx)(m, {})
                        }), (0, s.jsx)(o.Z, {
                            isOpen: h,
                            onModalClose: i(),
                            type: "success",
                            title: "",
                            primaryButton: void 0,
                            children: (0, s.jsx)(g.ZP, {
                                onClose: function() {
                                    return p(!1)
                                }
                            })
                        }), (0, s.jsx)(v, {
                            hasSeenOnboardingDate: x()
                        }), (0, s.jsx)(j.Z, {
                            contextName: "proxy",
                            initialData: u,
                            paletteFeatures: a,
                            features: new Set(c),
                            pages: l
                        }, u.threadId)]
                    })
                })
            }
        }
    },
    function(e) {
        e.O(0, [861, 741, 798, 294, 598, 603, 228, 552, 774, 888, 179], function() {
            return e(e.s = 69756)
        }), _N_E = e.O()
    }
]);