"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([[5472], {
    89434: function(e, t, n) {
        n.d(t, {
            if: function() {
                return f
            },
            jt: function() {
                return h
            },
            mD: function() {
                return m
            }
        });
        var i = n(92777)
          , r = n(82262)
          , a = n(10748)
          , o = n(45959)
          , s = n(63553)
          , c = n(37247)
          , l = n(59499)
          , d = n(25293);
        function p(e) {
            var t = function() {
                if ("undefined" === typeof Reflect || !Reflect.construct)
                    return !1;
                if (Reflect.construct.sham)
                    return !1;
                if ("function" === typeof Proxy)
                    return !0;
                try {
                    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}
                    ))),
                    !0
                } catch (e) {
                    return !1
                }
            }();
            return function() {
                var n, i = (0,
                c.Z)(e);
                if (t) {
                    var r = (0,
                    c.Z)(this).constructor;
                    n = Reflect.construct(i, arguments, r)
                } else
                    n = i.apply(this, arguments);
                return (0,
                s.Z)(this, n)
            }
        }
        var u = function(e) {
            (0,
            o.Z)(n, e);
            var t = p(n);
            function n(e) {
                var r;
                return (0,
                i.Z)(this, n),
                r = t.call(this),
                (0,
                l.Z)((0,
                a.Z)(r), "duration", void 0),
                (0,
                l.Z)((0,
                a.Z)(r), "value", 0),
                r.duration = e,
                r
            }
            return (0,
            r.Z)(n, [{
                key: "play",
                value: function() {
                    var e = this
                      , t = arguments.length > 0 && void 0 !== arguments[0] && arguments[0]
                      , n = performance.now()
                      , i = function i(a) {
                        var o = Math.min((a - n) / (1e3 * e.duration), 1);
                        e.value = t ? 1 - o : o,
                        e.emit("change"),
                        o >= 1 ? e.emit("complete") : r = requestAnimationFrame(i)
                    }
                      , r = requestAnimationFrame(i);
                    return function() {
                        return cancelAnimationFrame(r)
                    }
                }
            }, {
                key: "forward",
                value: function() {
                    return this.play()
                }
            }, {
                key: "reverse",
                value: function() {
                    return this.play(!0)
                }
            }]),
            n
        }(n.n(d)());
        function h(e) {
            var t = e.duration
              , n = void 0 === t ? 1 : t
              , i = e.onChange
              , r = void 0 === i ? function() {}
            : i
              , a = e.onComplete
              , o = void 0 === a ? function() {}
            : a
              , s = new u(n).on("change", (function() {
                r(s.value)
            }
            )).on("complete", o);
            return s.forward()
        }
        function m() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : function(e) {
                return e
            }
            ;
            return function(t) {
                var n = e(t);
                if (n < .5) {
                    var i = 2 * n;
                    return i * i / 2
                }
                var r = 1 - 2 * (n - .5);
                return .5 + .5 * (1 - r * r)
            }
        }
        function f(e, t) {
            var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : function(e) {
                return e
            }
            ;
            return function(i) {
                return e + (t - e) * n(i)
            }
        }
    },
    2035: function(e, t, n) {
        function i(e, t) {
            for (var n = [], i = e; i < t; i++)
                n.push(i);
            return n
        }
        n.d(t, {
            w: function() {
                return i
            }
        })
    },
    85257: function(e, t, n) {
        n.d(t, {
            W: function() {
                return f
            }
        });
        var i = n(92777)
          , r = n(82262)
          , a = n(10748)
          , o = n(45959)
          , s = n(63553)
          , c = n(37247)
          , l = n(59499)
          , d = n(25293)
          , p = n.n(d);
        function u(e) {
            var t = function() {
                if ("undefined" === typeof Reflect || !Reflect.construct)
                    return !1;
                if (Reflect.construct.sham)
                    return !1;
                if ("function" === typeof Proxy)
                    return !0;
                try {
                    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}
                    ))),
                    !0
                } catch (e) {
                    return !1
                }
            }();
            return function() {
                var n, i = (0,
                c.Z)(e);
                if (t) {
                    var r = (0,
                    c.Z)(this).constructor;
                    n = Reflect.construct(i, arguments, r)
                } else
                    n = i.apply(this, arguments);
                return (0,
                s.Z)(this, n)
            }
        }
        var h = function(e) {
            (0,
            o.Z)(n, e);
            var t = u(n);
            function n() {
                return (0,
                i.Z)(this, n),
                t.apply(this, arguments)
            }
            return (0,
            r.Z)(n, [{
                key: "add",
                value: function(e, t) {
                    this.emit("change", {
                        page: e,
                        animated: t
                    })
                }
            }]),
            n
        }(p());
        function m(e) {
            var t = function() {
                if ("undefined" === typeof Reflect || !Reflect.construct)
                    return !1;
                if (Reflect.construct.sham)
                    return !1;
                if ("function" === typeof Proxy)
                    return !0;
                try {
                    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}
                    ))),
                    !0
                } catch (e) {
                    return !1
                }
            }();
            return function() {
                var n, i = (0,
                c.Z)(e);
                if (t) {
                    var r = (0,
                    c.Z)(this).constructor;
                    n = Reflect.construct(i, arguments, r)
                } else
                    n = i.apply(this, arguments);
                return (0,
                s.Z)(this, n)
            }
        }
        var f = function(e) {
            (0,
            o.Z)(n, e);
            var t = m(n);
            function n() {
                var e;
                (0,
                i.Z)(this, n);
                for (var r = arguments.length, o = new Array(r), s = 0; s < r; s++)
                    o[s] = arguments[s];
                return e = t.call.apply(t, [this].concat(o)),
                (0,
                l.Z)((0,
                a.Z)(e), "page", 0),
                (0,
                l.Z)((0,
                a.Z)(e), "cue", new h),
                e
            }
            return (0,
            r.Z)(n, [{
                key: "jumpTo",
                value: function(e) {
                    Math.round(e) === e && this.cue.add(Math.round(e), !1)
                }
            }, {
                key: "to",
                value: function(e) {
                    Math.round(e) === e && this.cue.add(Math.round(e), !0)
                }
            }, {
                key: "next",
                value: function() {
                    this.to(this.page + 1)
                }
            }, {
                key: "prev",
                value: function() {
                    this.to(this.page - 1)
                }
            }]),
            n
        }(p())
    },
    49064: function(e, t, n) {
        n.d(t, {
            t: function() {
                return h
            }
        });
        var i = n(16835)
          , r = n(67294)
          , a = n(89434)
          , o = n(2035)
          , s = n(85257)
          , c = n(94693)
          , l = n(35944);
        var d = {
            name: "1obhh61",
            styles: "display:flex;justify-content:center;height:100%"
        }
          , p = {
            name: "13udsys",
            styles: "height:100%"
        };
        function u(e) {
            var t = e.children
              , n = e.controller
              , s = e.screen
              , u = e.viewport
              , h = e.onSnap
              , m = r.useState(0)
              , f = (0,
            i.Z)(m, 2)
              , v = f[0]
              , g = f[1]
              , b = r.useState(0)
              , x = (0,
            i.Z)(b, 2)
              , w = x[0]
              , Z = x[1]
              , y = r.useState(0)
              , N = (0,
            i.Z)(y, 2)
              , k = N[0]
              , O = N[1]
              , E = r.useCallback((function(e) {
                Z(e),
                O((function(e) {
                    return e + 1
                }
                ))
            }
            ), [])
              , j = r.useCallback((function(e) {
                n.page = e,
                g(e),
                n.emit("change")
            }
            ), [n]);
            r.useEffect((function() {
                var e = function(e) {
                    var t = e.animated
                      , n = e.page;
                    (t ? E : j)(n)
                };
                return n.cue.on("change", e),
                function() {
                    n.off("change", e)
                }
            }
            ), [n, E, j]),
            r.useEffect((function() {
                if (n.page !== w) {
                    var e = (0,
                    a.if)(n.page, w, (0,
                    a.mD)());
                    return (0,
                    a.jt)({
                        duration: .5,
                        onChange: function(t) {
                            var n = e(t);
                            j(n)
                        },
                        onComplete: function() {
                            h(n.page)
                        }
                    })
                }
            }
            ), [n, w, k, j, h]);
            var P = function() {
                var e = Math.ceil(s / u);
                return e % 2 === 0 ? e + 1 : e
            }() + 2
              , S = Math.floor(P / 2)
              , _ = Math.floor(v)
              , T = r.useMemo((function() {
                return (0,
                o.w)(0, P).map((function(e) {
                    return e - S + _
                }
                ))
            }
            ), [P, S, _])
              , R = t.length
              , z = r.useCallback((function(e) {
                var t = e % R;
                return t < 0 ? R + t : t
            }
            ), [R])
              , I = r.useMemo((function() {
                return T.map((function(e) {
                    return (0,
                    l.tZ)("div", {
                        style: {
                            width: u
                        },
                        children: r.cloneElement(t[z(e)])
                    }, e)
                }
                ))
            }
            ), [t, z, T, u])
              , B = r.useCallback((function(e) {
                return j(v + e)
            }
            ), [v, j])
              , A = r.useCallback((function(e) {
                return E(w + e)
            }
            ), [w, E]);
            return (0,
            l.tZ)(c.t, {
                viewport: u,
                onPan: B,
                onSwipe: A,
                children: (0,
                l.tZ)("div", {
                    css: p,
                    children: (0,
                    l.tZ)("div", {
                        css: d,
                        style: {
                            transform: "translateX(".concat(-1 * (v - _) * u, "px)")
                        },
                        children: I
                    })
                })
            })
        }
        function h(e) {
            var t = e.viewport
              , n = e.children
              , a = e.controller
              , o = e.onSnap
              , c = void 0 === o ? function() {}
            : o
              , d = r.useState((function() {
                return new s.W
            }
            ))
              , p = (0,
            i.Z)(d, 1)[0]
              , h = r.useState(0)
              , m = (0,
            i.Z)(h, 2)
              , f = m[0]
              , v = m[1];
            if (r.useEffect((function() {
                var e = function() {
                    v(window.innerWidth)
                };
                window.addEventListener("resize", e),
                e()
            }
            ), []),
            0 === f)
                return (0,
                l.tZ)(r.Fragment, {});
            var g = null !== t && void 0 !== t ? t : f;
            return (0,
            l.tZ)(u, {
                controller: null !== a && void 0 !== a ? a : p,
                screen: f,
                viewport: g,
                onSnap: c,
                children: n
            })
        }
    },
    94693: function(e, t, n) {
        n.d(t, {
            t: function() {
                return r
            }
        });
        var i = n(67294);
        function r(e) {
            var t = e.children
              , n = e.viewport
              , r = e.onPan
              , a = void 0 === r ? function() {}
            : r
              , o = e.onSwipe
              , s = void 0 === o ? function() {}
            : o
              , c = i.useRef(null)
              , l = i.useRef(!1)
              , d = i.useRef(!1)
              , p = i.useRef([0, 0])
              , u = i.useRef([0, 0])
              , h = i.useRef(0);
            return i.useEffect((function() {
                if (n !== 1 / 0 && null != c.current) {
                    var e = c.current
                      , t = n
                      , i = function(e) {
                        return [e.touches[0].clientX, e.touches[0].clientY]
                    }
                      , r = function(e) {
                        l.current = !1,
                        1 === e.touches.length ? (p.current = i(e),
                        u.current = p.current,
                        h.current = performance.now(),
                        d.current = !1) : d.current = !0
                    }
                      , o = function(e) {
                        if (!d.current) {
                            var n = i(e)
                              , r = [n[0] - u.current[0], n[1] - u.current[1]];
                            if (u.current = n,
                            !l.current) {
                                if (!function(e, t) {
                                    var n = Math.atan2(t, e);
                                    return n >= 0 && n <= Math.PI / 4 || n >= Math.PI / 4 * 3 && n <= Math.PI || n > -Math.PI && n < -Math.PI / 4 * 3 || n > -Math.PI / 4 && n < 0
                                }(r[0], r[1]))
                                    return void (d.current = !0);
                                l.current = !0
                            }
                            e.cancelable && e.preventDefault(),
                            a(r[0] / t * -1)
                        }
                    }
                      , m = function() {
                        if (!d.current) {
                            var e = u.current[0] - p.current[0]
                              , n = Math.abs(e)
                              , i = performance.now() - h.current;
                            s(i < 200 && n > 10 || n / t > .5 ? e > 0 ? -1 : 1 : 0)
                        }
                    };
                    return e.addEventListener("touchstart", r),
                    e.addEventListener("touchmove", o),
                    e.addEventListener("touchend", m),
                    function() {
                        e.removeEventListener("touchstart", r),
                        e.removeEventListener("touchmove", o),
                        e.removeEventListener("touchend", m)
                    }
                }
            }
            ), [n, c, a, s]),
            i.cloneElement(t, {
                ref: c
            })
        }
    },
    69818: function(e, t, n) {
        n.d(t, {
            Z: function() {
                return a
            }
        });
        var i = n(70917)
          , r = n(35944);
        function a(e) {
            var t = e.className
              , n = e.size
              , a = e.color
              , o = (0,
            i.iv)("width:auto;height:", n, ";fill:", a, ";", "");
            return (0,
            r.tZ)("svg", {
                css: o,
                width: "22",
                height: "18",
                viewBox: "0 0 1200 1227",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg",
                className: t,
                children: (0,
                r.tZ)("path", {
                    d: "M714.163 519.284L1160.89 0H1055.03L667.137 450.887L357.328 0H0L468.492 681.821L0 1226.37H105.866L515.491 750.218L842.672 1226.37H1200L714.137 519.284H714.163ZM569.165 687.828L521.697 619.934L144.011 79.6944H306.615L611.412 515.685L658.88 583.579L1055.08 1150.3H892.476L569.165 687.854V687.828Z",
                    fill: "black"
                })
            })
        }
    },
    45472: function(e, t, n) {
        n.d(t, {
            Y: function() {
                return si
            }
        });
        var i = n(67294)
          , r = n(41128)
          , a = n(33587)
          , o = n(11047)
          , s = n(27715)
          , c = n(26267)
          , l = n(16835)
          , d = n(70917)
          , p = n(8503)
          , u = n(48710)
          , h = n(18714)
          , m = n(37868)
          , f = n(77340)
          , v = n(35944);
        function g(e, t) {
            var n = e.safe
              , i = void 0 !== n && n
              , r = e.className
              , a = e.children
              , o = e.relative
              , s = void 0 !== o && o
              , c = a;
            return c = i ? (0,
            v.tZ)("div", {
                ref: t,
                className: r,
                css: (0,
                d.iv)(s && "position: relative;", " max-width:830px;@media ", u.r.media.prePC, "{max-width:700px;}@media ", u.r.media.preTablet, "{max-width:570px;}", ""),
                children: c
            }) : (0,
            v.tZ)("div", {
                ref: t,
                className: r,
                css: (0,
                d.iv)(s && "position: relative;", ";", ""),
                children: c
            }),
            (0,
            v.tZ)(f.W, {
                children: c
            })
        }
        var b = i.forwardRef(g)
          , x = function(e) {
            var t = e.infoList;
            return (0,
            v.tZ)("div", {
                children: (0,
                v.tZ)(b, {
                    children: (0,
                    v.BX)("div", {
                        css: (0,
                        d.iv)("position:relative;display:flex;align-items:center;padding:12px;margin-top:-100px;margin-bottom:30px;background:white;border:3px solid #ffce00;@media ", u.r.media.prePhone, "{flex-direction:column;margin-top:-130px;margin-bottom:50px;}", ""),
                        children: [(0,
                        v.tZ)("img", {
                            src: "/index/attention_mark.svg",
                            alt: "",
                            css: (0,
                            d.iv)("margin:0 20px 0 0;@media ", u.r.media.prePhone, "{margin:0 0 10px;}", "")
                        }), (0,
                        v.tZ)("div", {
                            css: (0,
                            d.iv)("&>p{margin-bottom:21px;@media ", u.r.media.prePhone, "{&>p{}margin-bottom:18px;}}&>p:last-of-type{margin-bottom:0;@media ", u.r.media.prePhone, "{&>p:last-of-type{}margin-bottom:0;}}", ""),
                            children: t.map((function(e, t) {
                                return (0,
                                v.tZ)("p", {
                                    css: (0,
                                    d.iv)("font-size:14px;line-height:1.5;white-space:pre-wrap;@media ", u.r.media.prePhone, "{font-size:12px;}", ""),
                                    children: e.destination ? (0,
                                    v.tZ)(m.Z, {
                                        href: e.url,
                                        children: "article_path" === e.destination ? (0,
                                        v.tZ)("a", {
                                            children: e.title
                                        }) : (0,
                                        v.tZ)("a", {
                                            target: "_blank",
                                            rel: "noopener noreferrer",
                                            children: e.title
                                        })
                                    }) : e.title
                                }, t)
                            }
                            ))
                        })]
                    })
                })
            })
        }
          , w = n(92777)
          , Z = n(82262)
          , y = n(59499);
        var N = function() {
            function e() {
                (0,
                w.Z)(this, e),
                (0,
                y.Z)(this, "anchors", {})
            }
            return (0,
            Z.Z)(e, [{
                key: "set",
                value: function(e, t) {
                    var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
                    this.anchors[e] = {
                        $: t,
                        anchor: n
                    }
                }
            }, {
                key: "unset",
                value: function(e) {
                    delete this.anchors[e]
                }
            }]),
            e
        }();
        (0,
        y.Z)(N, "keys", ["N", "A", "R", "U", "T", "O", "$"]);
        var k = i.createContext(null);
        function O(e) {
            var t = e.children;
            return (0,
            v.tZ)(k.Provider, {
                value: new N,
                children: t
            })
        }
        function E() {
            var e = (0,
            i.useContext)(k);
            if (null == e)
                throw Error;
            return e
        }
        var j = {
            name: "4zleql",
            styles: "display:block"
        };
        function P(e) {
            var t = e.letter
              , n = e.anchor
              , r = i.useRef(null)
              , a = E();
            return (0,
            i.useEffect)((function() {
                if (null != r.current)
                    return a.set(t, r.current, n),
                    function() {
                        return a.unset(t)
                    }
            }
            ), [n, t, a]),
            (0,
            v.tZ)("a", {
                id: "checkpoint-".concat(t),
                ref: r,
                css: j
            })
        }
        var S = ["N", "A", "R", "U", "T", "O"];
        function _() {
            var e = E()
              , t = i.useState("N")
              , n = (0,
            l.Z)(t, 2)
              , r = n[0]
              , a = n[1]
              , o = i.useState(-1)
              , s = (0,
            l.Z)(o, 2)
              , c = s[0]
              , p = s[1];
            return (0,
            i.useEffect)((function() {
                var t = window.scrollY
                  , n = window.innerHeight
                  , i = N.keys.map((function(i) {
                    var r = e.anchors[i];
                    return null == r || null == r.$ ? 1 / 0 : 1 === r.anchor ? t + r.$.getBoundingClientRect().top - n : t + r.$.getBoundingClientRect().top
                }
                ))
                  , r = -1
                  , o = function() {
                    var e = window.scrollY;
                    if (r + 1 !== i.length && e >= i[r + 1]) {
                        r++;
                        var t = N.keys[r];
                        if ("$" === t)
                            return void p(1);
                        a(t),
                        p(0)
                    } else if (-1 !== r && e < i[r]) {
                        if (-1 === --r)
                            return void p(-1);
                        a(N.keys[r]),
                        p(0)
                    }
                };
                return window.addEventListener("scroll", o),
                function() {
                    return window.removeEventListener("scroll", o)
                }
            }
            ), [e]),
            (0,
            v.tZ)("div", {
                css: (0,
                d.iv)("position:", 1 === c ? "absolute" : "fixed", ";right:0;bottom:var(--floating-letter-bottom);z-index:1;width:100%;max-width:300px;height:calc(100vh - (var(--header-height) + var(--margin)) - var(--floating-letter-bottom));pointer-events:none;@media ", u.r.media.prePC, "{max-width:235px;}@media ", u.r.media.preTablet, "{max-width:180px;}@media screen and (min-width: 1390px){right:calc((100vw - 1220px) / 2);}--page-top-height:56px;--page-top-bottom:18px;--header-height:68px;--margin:var(--page-top-bottom);--floating-letter-bottom:calc(var(--page-top-height) + var(--page-top-bottom) + var(--margin));", ""),
                children: (0,
                v.tZ)("span", {
                    css: (0,
                    d.iv)("position:absolute;top:0;right:0;bottom:0;left:0;display:flex;align-items:center;justify-content:flex-end;opacity:0;transition:transform 0.25s,opacity 0.25s;transform:translateX(50%);", -1 !== c && "\n              opacity: 1;\n              transform: none;\n          ", ";", ""),
                    children: S.map((function(e) {
                        return (0,
                        v.tZ)("img", {
                            src: "/index/letter_".concat(e.toLowerCase(), ".webp"),
                            alt: "",
                            css: (0,
                            d.iv)("position:absolute;width:auto;max-width:100%;height:auto;max-height:100%;opacity:0;transform:translateX(50%);", r === e && "\n                transition: transform 0.5s, opacity 0.5s;\n                opacity: 1;\n                transform: none;\n              ", ";", "")
                        }, e)
                    }
                    ))
                })
            })
        }
        var T = n(22451)
          , R = n(58482)
          , z = n(82317)
          , I = n(72601)
          , B = i.createContext(!0);
        function A() {
            return (0,
            i.useContext)(B)
        }
        function M(e) {
            var t = e.ready
              , n = void 0 === t || t
              , i = e.children;
            return (0,
            v.tZ)(B.Provider, {
                value: n,
                children: i
            })
        }
        function U() {
            var e = i.useRef(null)
              , t = !(0,
            T.sx)(e)
              , n = A();
            return (0,
            v.BX)("div", {
                id: "footer",
                ref: e,
                css: (0,
                d.iv)("position:relative;background:#d8d8d8;@media ", u.r.media.prePhone, "{padding:40px 0;}", ""),
                children: [(0,
                v.tZ)("span", {
                    css: (0,
                    d.iv)("position:", t ? "fixed" : "absolute", ";bottom:18px;left:15px;z-index:1;@media ", u.r.media.prePhone, "{position:static;display:flex;justify-content:center;}transition:transform 0.5s;", !n && "transform: translateY(150px);", ";", ""),
                    children: (0,
                    v.tZ)(I.m, {
                        breakPoint: u.r.breaks.phone
                    })
                }), (0,
                v.tZ)("span", {
                    css: (0,
                    d.iv)("position:", t ? "fixed" : "absolute", ";right:15px;bottom:18px;z-index:1;@media ", u.r.media.prePhone, "{position:static;display:flex;justify-content:center;margin-top:60px;}transition:transform 0.5s;", !n && "transform: translateY(150px);", ";", ""),
                    children: (0,
                    v.tZ)(z.c, {})
                })]
            })
        }
        var X = function() {
            return (0,
            v.BX)(v.HY, {
                children: [(0,
                v.tZ)(U, {}), (0,
                v.tZ)(R.I, {})]
            })
        }
          , L = n(11163)
          , C = n(19891)
          , D = n(55519)
          , H = n(63233)
          , Y = n(72427)
          , F = n(85859)
          , q = n(91419)
          , V = n(95541);
        function G(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var i = Object.getOwnPropertySymbols(e);
                t && (i = i.filter((function(t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                }
                ))),
                n.push.apply(n, i)
            }
            return n
        }
        function W(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {};
                t % 2 ? G(Object(n), !0).forEach((function(t) {
                    (0,
                    y.Z)(e, t, n[t])
                }
                )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : G(Object(n)).forEach((function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                }
                ))
            }
            return e
        }
        var Q = {
            name: "1r5gb7q",
            styles: "display:inline-block"
        }
          , $ = {
            name: "1i060wr",
            styles: "position:fixed;top:0;right:0;left:0;z-index:1"
        };
        function J() {
            var e = i.useState(!1)
              , t = (0,
            l.Z)(e, 2)
              , n = t[0]
              , r = t[1]
              , a = i.useState(260)
              , o = (0,
            l.Z)(a, 2)
              , s = o[0]
              , c = o[1]
              , h = i.useState(!0)
              , f = (0,
            l.Z)(h, 2)
              , g = f[0]
              , b = f[1]
              , x = i.useState(0)
              , w = (0,
            l.Z)(x, 2)
              , Z = w[0]
              , y = w[1]
              , N = (0,
            p.bU)();
            i.useEffect((function() {
                var e = function() {
                    r(matchMedia(u.r.media.postPhone).matches),
                    c(matchMedia(u.r.media.postPC).matches ? 260 : matchMedia(u.r.media.postTablet).matches ? 206 : 165)
                };
                window.addEventListener("resize", e),
                e()
            }
            ), []),
            i.useEffect((function() {
                if (n) {
                    var e = s - 100
                      , t = function() {
                        var t = window.scrollY;
                        t <= e ? (g || b(!0),
                        y(Math.max(0, t))) : g && (b(!1),
                        y(e))
                    };
                    return window.addEventListener("scroll", t),
                    function() {
                        return window.removeEventListener("scroll", t)
                    }
                }
            }
            ), [s, n, g]);
            var k = u.r.media.prePhone;
            return (0,
            v.tZ)("span", {
                css: $,
                children: (0,
                v.tZ)("span", {
                    css: (0,
                    d.iv)("position:absolute;top:50px;left:85px;display:inline-block;@media ", u.r.media.preTablet, "{top:9px;left:8px;}", ""),
                    children: (0,
                    v.tZ)("span", {
                        css: Q,
                        children: (0,
                        v.tZ)(m.Z, {
                            href: "/",
                            children: (0,
                            v.tZ)("a", {
                                children: (0,
                                v.tZ)("img", {
                                    src: "/common/logo_".concat(N, ".webp"),
                                    alt: "",
                                    width: "370",
                                    height: "260",
                                    css: (0,
                                    d.iv)("width:auto;@media ", k, "{height:88px;}", ""),
                                    style: n ? {
                                        height: "".concat(s - Z, "px")
                                    } : {}
                                })
                            })
                        })
                    })
                })
            })
        }
        function K() {
            var e = i.useState(!1)
              , t = (0,
            l.Z)(e, 2)
              , n = t[0]
              , r = t[1]
              , a = (0,
            V.Q0)()
              , o = (0,
            p.bU)()
              , s = (0,
            D.k)()
              , c = (0,
            l.Z)(s, 2)
              , h = c[0]
              , m = c[1]
              , f = (0,
            L.useRouter)();
            i.useEffect((function() {
                var e;
                h.loaded || h.pages[0].includes(null !== (e = "https://naruto-official.com") ? e : "") || (m(W(W({}, h), {}, {
                    loaded: !0
                })),
                f.asPath.includes("nolangsuggestion=1") || (0,
                C.v)() !== o && a((0,
                v.tZ)(q.J, {})))
            }
            ), [o, f]);
            var g = (0,
            v.BX)(v.HY, {
                children: [(0,
                v.tZ)("span", {
                    css: (0,
                    d.iv)("position:fixed;top:10px;right:10px;z-index:3;display:inline-block;width:68px;height:68px;@media ", u.r.media.prePhone, "{top:0;right:0;width:60px;height:60px;}transition:transform 0.5s;", ""),
                    children: (0,
                    v.tZ)(F.j, {
                        open: n,
                        breakPoint: u.r.breaks.phone,
                        onToggle: function() {
                            return r((function(e) {
                                return !e
                            }
                            ))
                        }
                    })
                }), (0,
                v.tZ)("span", {
                    css: (0,
                    d.iv)("position:fixed;top:32px;right:98px;z-index:3;@media ", u.r.media.prePhone, "{top:14px;right:68px;}transition:transform 0.5s;", ""),
                    children: (0,
                    v.tZ)(H.Z, {})
                })]
            });
            return (0,
            v.BX)(v.HY, {
                children: [(0,
                v.BX)("header", {
                    children: [(0,
                    v.tZ)(J, {}), g]
                }), (0,
                v.tZ)(Y.v, {
                    open: n,
                    breakPoint: u.r.breaks.tablet
                })]
            })
        }
        var ee, te = n(71383);
        var ne = {
            name: "jcviqy",
            styles: "position:relative;z-index:1;pointer-events:none"
        };
        function ie(e) {
            var t = e.slopeTo
              , n = e.image
              , r = (0,
            p.bU)()
              , a = i.useRef(null)
              , o = (0,
            T.YD)(a, {
                rootMargin: "0%",
                threshold: 0
            })
              , s = "polygon(0 50%, 100% 50%, 100% 50%, 0 50%)"
              , c = "/index/intermission/".concat(n.split(".")[0], "a_").concat("ja" === r ? "jp" : "en", ".webp")
              , l = "/index/intermission/".concat(r, "/").concat(n.split(".")[0], "b.webp")
              , h = "/index/intermission/".concat(r, "/").concat(n.split(".")[0], "b_sp.webp")
              , m = (0,
            d.F4)(ee || (ee = (0,
            te.Z)(["\n    to {\n      opacity: 1;\n    }\n  "])));
            return (0,
            v.tZ)("div", {
                ref: a,
                css: ne,
                children: (0,
                v.tZ)("div", {
                    css: (0,
                    d.iv)("position:absolute;top:calc(-180 / 1280 / 2 * 100vw - 290px);right:0;bottom:calc(-180 / 1280 / 2 * 100vw - 290px);left:0;height:720px;clip-path:", o ? "left" === t ? "polygon(0 calc(180 / 1280 * 100vw), 100% 0, 100% calc(100% - 180 / 1280 * 100vw), 0 100%)" : "polygon(0 0, 100% calc(180 / 1280 * 100vw), 100% 100%, 0 calc(100% - 180 / 1280 * 100vw))" : s, ";background:black url(", c, ") no-repeat center/auto 820px;transition:clip-path var(--ease-out-circ) 0.5s;@media ", u.r.media.preTablet, "{top:calc(-45 / 375 / 2 * 100vw - 290px / 2);bottom:calc(-45 / 375 / 2 * 100vw - 290px / 2);height:auto;clip-path:", o ? "polygon(0 calc(45 / 375 * 100vw), 100% 0, 100% calc(100% - 45 / 375 * 100vw), 0 100%)" : s, ";background-size:auto 360px;}@media ", u.r.media.prePhone, "{height:360px;}", ""),
                    children: "ja" === r && (0,
                    v.tZ)("div", {
                        css: (0,
                        d.iv)("width:100%;height:100%;background:url(", l, ") no-repeat center/auto 720px;opacity:0;", o && (0,
                        d.iv)("animation:1s 0.5s forwards ", m, ";@media ", u.r.media.preTablet, "{background-image:url(", h, ");background-size:375px auto;}", ""), ";", "")
                    })
                })
            })
        }
        var re = n(96890);
        function ae(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var i = Object.getOwnPropertySymbols(e);
                t && (i = i.filter((function(t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                }
                ))),
                n.push.apply(n, i)
            }
            return n
        }
        function oe(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {};
                t % 2 ? ae(Object(n), !0).forEach((function(t) {
                    (0,
                    y.Z)(e, t, n[t])
                }
                )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : ae(Object(n)).forEach((function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                }
                ))
            }
            return e
        }
        var se, ce = "popup", le = function(e) {
            var t = e.popup
              , n = e.ready
              , r = (0,
            V.pl)()
              , a = (0,
            i.useState)(!1)
              , s = a[0]
              , c = a[1]
              , l = i.useRef(null)
              , d = i.useCallback((function(e) {
                if (t && e) {
                    l.current && (0,
                    o.Fo)(new Date, new Date(l.current.unixtime)) ? l.current.ids.push(t.id) : l.current = {
                        unixtime: Date.now(),
                        ids: [t.id]
                    };
                    var n = JSON.stringify(l.current)
                      , i = de(new Date);
                    document.cookie = "".concat(ce, "=").concat(n, "; expires=").concat(i.toUTCString())
                }
            }
            ), [t]);
            return i.useEffect((function() {
                var e;
                !n || s || !t || null !== (e = l.current) && void 0 !== e && e.ids.includes(t.id) || (!t.isShowImg || t.imgSrc || t.videoSrc) && (c(!0),
                r((0,
                v.tZ)(re.G, oe(oe({}, t), {}, {
                    checkbox: !0,
                    onClose: d
                }))))
            }
            ), [d, t, n]),
            i.useEffect((function() {
                var e = document.cookie.split("; ").map((function(e) {
                    var t = e.split("=");
                    return {
                        name: t[0],
                        value: t[1]
                    }
                }
                )).find((function(e) {
                    return e.name === ce
                }
                ));
                if (e) {
                    var t = JSON.parse(e.value);
                    l.current = t
                }
            }
            ), []),
            (0,
            v.tZ)(i.Fragment, {})
        }, de = function(e) {
            return e.setDate(e.getDate() + 1),
            new Date(e.getFullYear(),e.getMonth(),e.getDate(),0,0,0)
        }, pe = n(69873), ue = {
            story: "N",
            comics: "A",
            anime: "R",
            others: "U",
            sns: "T",
            extra: "O"
        }, he = {
            story: -86,
            comics: -265,
            anime: -280,
            others: -280,
            sns: -205,
            extra: -355
        };
        function me(e) {
            var t = e.section
              , n = e.run
              , i = void 0 === n || n
              , r = he[t];
            return (0,
            v.tZ)("img", {
                src: "/index/letter_".concat(ue[t].toLowerCase(), ".webp"),
                alt: "",
                css: (0,
                d.iv)("position:absolute;top:", r, "px;right:-62px;z-index:2;display:none;height:419px;@media ", u.r.media.prePhone, "{display:block;transform:translateX(100%);", i ? (0,
                d.iv)("animation:forwards 1s ", (0,
                d.F4)(se || (se = (0,
                te.Z)(["to { transform: none; }"]))), ";", "") : "", ";}", "")
            })
        }
        var fe = n(36443);
        function ve(e) {
            var t = e.className
              , n = e.section
              , i = e.run
              , r = void 0 === i || i
              , a = (0,
            p.bU)();
            return (0,
            v.tZ)(fe._, {
                run: r,
                slug: "top-".concat(n),
                className: t,
                height: "news" === n ? 70 : 80,
                css: (0,
                d.iv)("z-index:3;@media ", u.r.media.prePhone, "{&:not(:lang(ja)){margin-left:", "sns" === n ? "-45px" : "0", ";}--brush-height:", "others" === n ? "ja" === a ? 64 : 48 : 64, "px;}", "")
            })
        }
        var ge = {
            name: "13oh8u2",
            styles: "display:block;&:hover{opacity:0.8;}"
        }
          , be = {
            name: "1qesdsb",
            styles: "background-color:white"
        }
          , xe = {
            name: "13oh8u2",
            styles: "display:block;&:hover{opacity:0.8;}"
        }
          , we = {
            name: "1qesdsb",
            styles: "background-color:white"
        }
          , Ze = {
            name: "13oh8u2",
            styles: "display:block;&:hover{opacity:0.8;}"
        }
          , ye = {
            name: "1qesdsb",
            styles: "background-color:white"
        }
          , Ne = function() {
            var e = (0,
            p.bU)()
              , t = (0,
            d.iv)("display:flex;align-items:center;justify-content:center;width:256px;height:105px;background:white;img{width:163px;height:auto;}@media ", u.r.media.preTablet, "{width:250px;height:160px;aspect-ratio:327/185;}@media ", u.r.media.prePhone, "{width:100%;height:auto;aspect-ratio:327/185;padding:10px 0;margin:0;img{width:60%;}}", "")
              , n = (0,
            d.iv)("width:256px;height:343px;@media ", u.r.media.preTablet, "{display:none;}img{width:100%;height:auto;max-height:100%;}", "");
            return (0,
            v.BX)("div", {
                css: (0,
                d.iv)("display:flex;flex-wrap:wrap;width:100%;margin-top:30px;a:not(:last-of-type){margin-right:30px;margin-bottom:30px;}@media ", u.r.media.prePhone, "{flex-flow:column nowrap;margin-top:0;a{margin-top:7.2%;}a:not(:last-of-type){margin-right:0;margin-bottom:0;}}", ""),
                children: [(0,
                v.tZ)(m.Z, {
                    href: "/anime/naruto1",
                    children: (0,
                    v.tZ)("a", {
                        children: (0,
                        v.tZ)("div", {
                            css: ye,
                            children: (0,
                            v.BX)("div", {
                                css: Ze,
                                children: [(0,
                                v.tZ)("div", {
                                    css: n,
                                    children: (0,
                                    v.tZ)("img", {
                                        src: "/anime/series/naruto1_visual.webp",
                                        alt: ""
                                    })
                                }), (0,
                                v.tZ)("div", {
                                    css: t,
                                    children: "ja" === e ? (0,
                                    v.tZ)("img", {
                                        src: "/index/anime_logo_naruto.webp",
                                        alt: ""
                                    }) : (0,
                                    v.tZ)("img", {
                                        src: "/index/anime_logo_naruto_en.webp",
                                        alt: ""
                                    })
                                })]
                            })
                        })
                    })
                }), (0,
                v.tZ)(m.Z, {
                    href: "/anime/naruto2",
                    children: (0,
                    v.tZ)("a", {
                        children: (0,
                        v.tZ)("div", {
                            css: we,
                            children: (0,
                            v.BX)("div", {
                                css: xe,
                                children: [(0,
                                v.tZ)("div", {
                                    css: n,
                                    children: (0,
                                    v.tZ)("img", {
                                        src: "/anime/series/naruto2_visual.webp",
                                        alt: ""
                                    })
                                }), (0,
                                v.tZ)("div", {
                                    css: t,
                                    children: "ja" === e ? (0,
                                    v.tZ)("img", {
                                        src: "/index/anime_logo_naruto_s.webp",
                                        alt: ""
                                    }) : (0,
                                    v.tZ)("img", {
                                        src: "/index/anime_logo_naruto_s_en.webp",
                                        alt: ""
                                    })
                                })]
                            })
                        })
                    })
                }), (0,
                v.tZ)(m.Z, {
                    href: "/anime/boruto",
                    children: (0,
                    v.tZ)("a", {
                        children: (0,
                        v.tZ)("div", {
                            css: be,
                            children: (0,
                            v.BX)("div", {
                                css: ge,
                                children: [(0,
                                v.tZ)("div", {
                                    css: n,
                                    children: (0,
                                    v.tZ)("img", {
                                        src: "/anime/series/boruto_visual.webp",
                                        alt: ""
                                    })
                                }), (0,
                                v.tZ)("div", {
                                    css: t,
                                    children: "ja" === e ? (0,
                                    v.tZ)("img", {
                                        src: "/index/anime_logo_boruto.webp",
                                        alt: ""
                                    }) : (0,
                                    v.tZ)("img", {
                                        src: "/index/anime_logo_boruto_en.webp",
                                        alt: ""
                                    })
                                })]
                            })
                        })
                    })
                })]
            })
        };
        var ke = {
            name: "m07cng",
            styles: "margin-top:70px"
        }
          , Oe = {
            name: "vu0dhn",
            styles: "position:absolute;top:0;right:0;bottom:0;left:0;background:rgb(0 0 0 / 30%)"
        }
          , Ee = {
            name: "2kqr2s",
            styles: "position:absolute;top:0;left:0;display:block;width:100%;height:100%;object-fit:cover"
        }
          , je = {
            name: "1i3648n",
            styles: "position:absolute;top:0;right:0;bottom:0;left:0"
        }
          , Pe = {
            name: "1dz0zb8",
            styles: "position:relative;background:black"
        }
          , Se = function(e) {
            e.nextStory;
            var t = (0,
            p.bU)()
              , n = ((0,
            pe.W)(),
            i.useRef(null))
              , r = (0,
            T.YD)(n)
              , a = i.useState("")
              , o = (0,
            l.Z)(a, 2)
              , s = o[0]
              , c = o[1];
            i.useEffect((function() {
                var e = function() {
                    window.matchMedia(u.r.media.preTablet).matches ? c("/index/anime-sp.mp4") : c("/index/anime-pc.mp4")
                };
                return window.addEventListener("resize", e),
                e(),
                function() {
                    return window.removeEventListener("resize", e)
                }
            }
            ), []);
            u.r.media.prePhone;
            var m = (0,
            v.BX)("section", {
                ref: n,
                css: Pe,
                children: [(0,
                v.tZ)("div", {
                    css: je,
                    children: r && s && (0,
                    v.BX)("div", {
                        css: (0,
                        d.iv)("position:sticky;top:0;left:0;width:100%;height:100%;@media ", u.r.media.preTablet, "{height:100vh;}", ""),
                        children: [(0,
                        v.tZ)("video", {
                            src: s,
                            playsInline: !0,
                            loop: !0,
                            autoPlay: !0,
                            muted: !0,
                            css: Ee
                        }), (0,
                        v.tZ)("div", {
                            css: Oe
                        })]
                    })
                }), (0,
                v.tZ)("div", {
                    css: (0,
                    d.iv)("padding:360px 0;overflow:hidden;@media ", u.r.media.prePhone, "{padding:calc(150px + 180px) 0 calc(75px + 180px);}", ""),
                    children: (0,
                    v.BX)(b, {
                        safe: !0,
                        relative: !0,
                        children: [(0,
                        v.tZ)(me, {
                            section: "anime",
                            run: r
                        }), (0,
                        v.tZ)(ve, {
                            section: "anime",
                            run: r
                        }), (0,
                        v.tZ)("div", {
                            css: ke,
                            children: (0,
                            v.tZ)(Ne, {})
                        }), (0,
                        v.tZ)("div", {
                            css: (0,
                            d.iv)("margin-top:15px;@media ", u.r.media.prePC, "{margin-top:30px;}@media ", u.r.media.prePhone, "{text-align:center;}", ""),
                            children: (0,
                            v.tZ)(h.f, {
                                href: "/anime",
                                icon: "kunai",
                                css: (0,
                                d.iv)("height:50px;font-size:24px;&:not(:lang(ja)){font-size:28px;}@media ", u.r.media.prePhone, "{width:267px;height:48px;font-size:20px;&:not(:lang(ja)){font-size:26px;}}", ""),
                                children: _e[t]
                            })
                        })]
                    })
                })]
            });
            return (0,
            v.BX)(v.HY, {
                children: [(0,
                v.tZ)(P, {
                    letter: "R"
                }), m]
            })
        }
          , _e = {
            ja: "\u30a2\u30cb\u30e1\u60c5\u5831\u306f\u3053\u3061\u3089",
            en: "MORE INFO ON THE ANIME",
            fr: "PLUS D\u2019INFOS SUR L\u2019ANIM\xc9",
            de: "MEHR INFOS ZUM ANIME",
            es: "INFO. SOBRE EL ANIME",
            it: "INFORMAZIONI SULL' ANIME"
        }
          , Te = n(27812)
          , Re = n(26184);
        var ze = {
            name: "bjn8wh",
            styles: "position:relative"
        }
          , Ie = {
            name: "m5entd",
            styles: "flex:none;margin-left:10px"
        };
        function Be(e) {
            var t = e.quizList
              , n = (0,
            p.bU)()
              , r = i.useRef(null)
              , a = (0,
            T.YD)(r, {
                rootMargin: "-33% 0%"
            })
              , o = (0,
            i.useState)(null)
              , s = o[0]
              , c = o[1]
              , l = t.filter((function(e) {
                return e.id === s
            }
            ))[0];
            (0,
            i.useEffect)((function() {
                if (!s && 0 !== t.length) {
                    var e = function(e) {
                        for (var t = (0,
                        Te.Z)(e), n = t.length - 1; n >= 0; n--) {
                            var i = Math.floor(Math.random() * (n + 1))
                              , r = t[n];
                            t[n] = t[i],
                            t[i] = r
                        }
                        return t
                    }(t);
                    c(e[0].id)
                }
            }
            ), [t, s]);
            var h = (0,
            v.tZ)("span", {
                css: (0,
                d.iv)("font-family:var(--impact-font);font-size:28px;line-height:1;color:white;@media ", u.r.media.prePC, "{font-size:24px;&:lang(fr),&:lang(it){margin-top:2px;font-size:22px;}}", ""),
                children: Ae[n]
            })
              , f = (0,
            v.BX)("span", {
                css: (0,
                d.iv)("display:flex;align-items:center;font-size:14px;line-height:1;color:white;&:not(:lang(ja)){font-size:20px;}@media ", u.r.media.prePC, "{font-size:11px;&:not(:lang(ja)){font-size:18px;}}@media ", u.r.media.prePhone, "{font-size:8px;}", ""),
                children: [Ue[n], (0,
                v.tZ)("img", {
                    src: "/index/kunai_w.svg",
                    alt: "",
                    css: Ie
                })]
            })
              , g = (0,
            v.tZ)("em", {
                css: (0,
                d.iv)("font-size:30px;font-style:normal;color:white;text-align:center;white-space:pre-wrap;&:not(:lang(ja)){font-size:36px;line-height:1;}@media ", u.r.media.prePC, "{font-size:24px;&:not(:lang(ja)){font-size:30px;line-height:1;}}@media ", u.r.media.prePhone, "{font-size:19px;&:not(:lang(ja)){font-size:26px;line-height:1;}&:lang(de){font-size:23px;}}", ""),
                children: Me[n]
            })
              , b = l ? (0,
            v.tZ)(m.Z, {
                href: "/comics/".concat(l.path),
                children: (0,
                v.tZ)("a", {
                    children: (0,
                    v.BX)("div", {
                        css: (0,
                        d.iv)("position:absolute;top:0;bottom:0;display:flex;flex-direction:column;align-items:center;justify-content:space-between;width:275px;height:275px;aspect-ratio:1/1;padding:21px 0 32px;margin:auto;font-family:var(--comic-impact-font);cursor:pointer;background:black url('/index/question.svg') no-repeat center;border-radius:50%;opacity:0;transition:0.25s transform,opacity 0.25s;transform:translateY(50px);&:active{transform:scale(1.1);}@media ", u.r.media.postPhone, "{&:hover{transform:scale(1.1);}}@media ", u.r.media.prePC, "{position:relative;width:221px;height:221px;margin:-150px auto 0 0;}@media ", u.r.media.prePhone, "{width:180px;height:180px;margin:-74px 0 0 -15px;background-size:auto 65px;}", a && "\n          transform: none;\n          opacity: 1;\n        ", ";", ""),
                        children: [h, g, f]
                    })
                })
            }) : (0,
            v.tZ)(v.HY, {});
            return (0,
            v.BX)("div", {
                ref: r,
                css: ze,
                children: [(0,
                v.tZ)("div", {
                    css: (0,
                    d.iv)("position:relative;aspect-ratio:1/1;margin:0 0 0 auto;margin-left:170px;pointer-events:none;@media ", u.r.media.prePC, "{margin-left:135px;}@media ", u.r.media.prePhone, "{width:327px;height:327px;margin:auto;}", ""),
                    children: (0,
                    v.tZ)(Re._, {
                        src: null === l || void 0 === l ? void 0 : l.imgSrc,
                        loadStyle: (0,
                        d.iv)("position:absolute;top:-50px;right:0;bottom:0;left:52%;max-width:117%;aspect-ratio:1/1;margin:auto;transform:translate(-50%, 0);@media ", u.r.media.prePC, "{top:0;}", ""),
                        imgStyle: (0,
                        d.iv)("position:absolute;top:-50px;right:0;bottom:0;left:52%;max-width:117%;margin:auto;transform:translate(-50%, 0);@media ", u.r.media.prePC, "{top:0;}", ""),
                        alt: ""
                    })
                }), b]
            })
        }
        var Ae = {
            ja: "QUIZ",
            en: "QUIZ",
            fr: "QUIZ",
            de: "QUIZ",
            es: "PRUEBA",
            it: "DOMANDA"
        }
          , Me = {
            ja: "\u3053\u306e\u8868\u7d19\u306f\u4f55\u5dfb?",
            en: "Which volume\u2019s\ncover is this?",
            fr: "DE QUEL TOME\nS\u2019AGIT-IL ?",
            de: "VON WELCHEM BAND\nSTAMMT DIESES COVER?",
            es: "\xbfDE QU\xe9 VOLUMEN ES\nESTA PORTADA?",
            it: "CHE VOLUME \xe8 QUESTO?"
        }
          , Ue = {
            ja: "\u7b54\u3048\u306f\u3053\u3061\u3089",
            en: "SEE ANSWER",
            fr: "VOIR R\xc9PONSE",
            de: "ZUR ANTWORT",
            es: "VER RESPUESTA",
            it: "VEDI RISPOSTA"
        };
        var Xe = {
            name: "9ear0z",
            styles: "margin-bottom:90px"
        };
        function Le(e) {
            var t = e.quizList
              , n = (0,
            p.bU)()
              , r = i.useRef(null)
              , a = i.useRef(null)
              , o = (0,
            T.YD)(r)
              , s = (0,
            T.YD)(a, {
                rootMargin: "-33% 0%"
            })
              , c = (0,
            v.BX)("section", {
                css: (0,
                d.iv)("position:relative;padding:460px 0;overflow:hidden;@media ", u.r.media.prePhone, "{padding:calc(150px + 180px) 0;}", ""),
                children: [(0,
                v.tZ)("figure", {
                    css: (0,
                    d.iv)("position:absolute;top:0;right:0;bottom:0;left:0;background:white url(", "ja" === n ? "/index/bg_comics_jp.webp" : "/index/bg_comics_en.webp", ") center/cover no-repeat;opacity:0;transition:opacity 2s;", o && "opacity: 1;", ";", "")
                }), (0,
                v.tZ)(b, {
                    safe: !0,
                    relative: !0,
                    ref: r,
                    children: (0,
                    v.BX)("div", {
                        children: [(0,
                        v.tZ)(me, {
                            section: "comics",
                            run: o
                        }), (0,
                        v.tZ)("div", {
                            css: Xe,
                            children: (0,
                            v.tZ)(ve, {
                                section: "comics",
                                run: o
                            })
                        }), (0,
                        v.tZ)("div", {
                            ref: a,
                            css: (0,
                            d.iv)("opacity:0;transition:opacity 1s;", o && "\n              opacity: 1;\n            ", ";", ""),
                            children: t && (0,
                            v.tZ)(Be, {
                                quizList: t
                            })
                        }), (0,
                        v.tZ)("div", {
                            css: (0,
                            d.iv)("display:flex;margin-top:80px;@media ", u.r.media.prePhone, "{justify-content:center;margin-top:40px;}", ""),
                            children: (0,
                            v.tZ)(h.f, {
                                href: "/comics",
                                icon: "kunai",
                                css: (0,
                                d.iv)("opacity:", s ? "1" : "0", ";transition:opacity 0.25s 0.5s,transform 1s 0.5s;transform:", s ? "none" : "translateY(100px)", ";&:not(:lang(ja)){font-size:28px;}@media ", u.r.media.prePhone, "{width:267px;&:not(:lang(ja)){font-size:26px;}&:lang(fr){height:auto;}&:lang(de){font-size:25px;}&:lang(it){font-size:23px;}}", ""),
                                children: Ce[n]
                            })
                        })]
                    })
                })]
            });
            return (0,
            v.BX)(v.HY, {
                children: [(0,
                v.tZ)(P, {
                    letter: "A"
                }), c]
            })
        }
        var Ce = {
            ja: "\u30b3\u30df\u30c3\u30af\u30b9\u60c5\u5831\u306f\u3053\u3061\u3089",
            en: "MORE INFO ON THE COMICS",
            fr: "PLUS D\u2019INFORMATIONS SUR LE MANGA",
            de: "MEHR INFOS ZUM MANGA",
            es: "INFO. SOBRE EL MANGA",
            it: "INFORMAZIONI SUL MANGA"
        }
          , De = n(22455);
        var He = {
            name: "eaqd57",
            styles: "font-size:11px;line-height:1.5;white-space:pre-wrap"
        }
          , Ye = {
            name: "wyh1ck",
            styles: "margin-top:38px"
        }
          , Fe = function() {
            var e = (0,
            p.bU)()
              , t = i.useRef(null)
              , n = (0,
            T.YD)(t)
              , r = (0,
            d.iv)("width:calc(50% - 10px);margin-bottom:20px;@media ", u.r.media.prePhone, "{width:100%;margin-bottom:3%;}", "");
            return (0,
            v.tZ)("div", {
                ref: t,
                css: (0,
                d.iv)("position:relative;padding:460px 0;overflow:hidden;background:#d8d8d8;@media ", u.r.media.prePhone, "{padding:calc(160px + 180px) 0 0;}", ""),
                children: (0,
                v.BX)(b, {
                    safe: !0,
                    relative: !0,
                    children: [(0,
                    v.tZ)(me, {
                        section: "extra",
                        run: n
                    }), (0,
                    v.BX)("div", {
                        css: (0,
                        d.iv)("position:relative;z-index:3;display:flex;flex-wrap:wrap;justify-content:space-between;@media ", u.r.media.prePhone, "{flex-direction:column;}", ""),
                        children: [(0,
                        v.tZ)(De.m, {
                            bannerCss: r
                        }), (0,
                        v.tZ)("div", {
                            css: Ye,
                            children: (0,
                            v.tZ)("p", {
                                css: He,
                                children: qe[e]
                            })
                        })]
                    })]
                })
            })
        }
          , qe = {
            ja: "\u3053\u306e\u30b5\u30a4\u30c8\u306f\u6a5f\u68b0\u7ffb\u8a33\u3092\u5c0e\u5165\u3057\u3066\u3044\u307e\u3059\u3002\u308f\u304b\u308a\u306b\u304f\u3044\u8868\u73fe\u304c\u3042\u308b\u304b\u3082\u3057\u308c\u307e\u305b\u3093\u304c\u3001\u3054\u4e86\u627f\u304f\u3060\u3055\u3044\u3002\n\u304a\u4f4f\u307e\u3044\u306e\u5730\u57df\u306b\u3088\u3063\u3066\u306f\u63b2\u8f09\u60c5\u5831\u304c\u7570\u306a\u308b\u5834\u5408\u304c\u3054\u3056\u3044\u307e\u3059\u3002\n\u60c5\u5831\u306f\u63b2\u8f09\u6642\u70b9\u306e\u3082\u306e\u3068\u306a\u308a\u307e\u3059\u3002",
            en: "NARUTONOMICS\n\nContract Address: 0x00000000000000000000000000000000000000\n\nChain: Ethereum\n\nTotal Supply: 1,000,000,000\n\nBuy/Sell Tax: 0%\n\nLP locked",
            fr: "Ce site Internet utilise en partie la traduction automatique. Veuillez noter que certaines expressions peuvent \xeatre difficiles \xe0 comprendre.\nLes informations figurant sur ce site peuvent varier en fonction de votre position g\xe9ographique.\nElles sont valables au moment de la publication.",
            de: "Diese Seite wurde maschinell \xfcbersetzt. Dadurch kann es dazu kommen, dass einige Ausdr\xfccke/S\xe4tze schwer verst\xe4ndlich sind. Wir bitten um Verst\xe4ndnis.\nDie Informationen auf dieser Webseite k\xf6nnen sich je nach Standort unterscheiden.\nDie Informationen entsprechen dem Stand zum Zeitpunkt der Ver\xf6ffentlichung.",
            es: "Este sitio web utiliza herramientas de traducci\xf3n autom\xe1tica. Es posible que algunos textos resulten dif\xedciles de comprender.\nEl contenido que aparece en este sitio web podr\xeda cambiar seg\xfan la regi\xf3n en la que te encuentres.\nLa informaci\xf3n mostrada en este sitio refleja la situaci\xf3n del momento en que fue publicada.",
            it: "Questo sito fa uso parziale di traduzione automatica. Alcune espressioni potrebbero non essere perfettamente comprensibili.\nI contenuti presenti sul sito potrebbero variare in base alla vostra regione.\nTutte le notizie risultano attendibili al momento della pubblicazione."
        }
          , Ve = n(55756)
          , Ge = n(89434)
          , We = n(2035)
          , Qe = n(7673)
          , $e = n(53877)
          , Je = n(17484)
          , Ke = n(85257)
          , et = n(49064)
          , tt = n(2090)
          , nt = n(83454);
        var it = {
            name: "mf118p",
            styles: "width:20px;height:20px;cursor:pointer"
        };
        function rt(e) {
            var t = e.active
              , n = void 0 !== t && t
              , r = e.time
              , a = void 0 === r ? 0 : r
              , o = e.distance
              , s = void 0 === o ? 1 : o
              , c = e.onClick
              , l = void 0 === c ? function() {}
            : c
              , d = i.useRef(null)
              , p = 0 === s ? u.r.color.primary : 1 === s ? "white" : (0,
            tt.Py)(u.r.color.primary, "#FFFFFF", s)
              , h = 0 === s || 1 === s ? p : (0,
            tt.CK)(p, 1 - s);
            return i.useEffect((function() {
                if (null != d.current) {
                    var e = d.current.getContext("2d");
                    null != e && (e.save(),
                    e.scale(2, 2),
                    e.fillStyle = p,
                    e.strokeStyle = h,
                    e.lineWidth = 2,
                    e.clearRect(0, 0, 20, 20),
                    e.beginPath(),
                    e.ellipse(10, 10, 4, 4, 0, 0, 2 * Math.PI),
                    e.fill(),
                    n && (e.beginPath(),
                    e.ellipse(10, 10, 9, 9, 0, 0, a * Math.PI * 2),
                    e.stroke()),
                    e.restore())
                }
            }
            ), [n, a, p, h]),
            (0,
            v.tZ)("canvas", {
                ref: d,
                width: "40",
                height: "40",
                onClick: l,
                css: it
            })
        }
        function at(e) {
            var t = e.children
              , n = i.useState((function() {
                return new Ke.W
            }
            ))
              , r = (0,
            l.Z)(n, 1)[0]
              , a = t.length
              , o = i.useState(0)
              , s = (0,
            l.Z)(o, 2)
              , c = s[0]
              , p = s[1]
              , h = i.useState(0)
              , m = (0,
            l.Z)(h, 2)
              , f = m[0]
              , g = m[1]
              , b = i.useState(!0)
              , x = (0,
            l.Z)(b, 2)
              , w = x[0]
              , Z = x[1]
              , y = i.useState(!0)
              , N = (0,
            l.Z)(y, 2)
              , k = N[0]
              , O = N[1]
              , E = i.useState(0)
              , j = (0,
            l.Z)(E, 2)
              , P = j[0]
              , S = j[1]
              , _ = function(e) {
                var t = e % a;
                return t < 0 ? a + t : t
            };
            i.useEffect((function() {
                var e = function() {
                    p(r.page),
                    k && (Z(!1),
                    O(!1),
                    S(0))
                };
                return r.on("change", e),
                function() {
                    r.off("change", e)
                }
            }
            ), [r, w, k]),
            i.useEffect((function() {
                if (w && k) {
                    var e = (0,
                    Ge.jt)({
                        duration: 3.5,
                        onChange: function(e) {
                            return S(e)
                        }
                    })
                      , t = setTimeout((function() {
                        O(!1),
                        r.to(r.page + 1)
                    }
                    ), 3500);
                    return function() {
                        e(),
                        clearTimeout(t)
                    }
                }
            }
            ), [r, w, k]);
            var T = function(e) {
                switch (e) {
                case _(f):
                    return Math.min(Math.abs(c - f), 1);
                case _(f - 1):
                    return Math.min(c - f + 1, 1);
                case _(f + 1):
                    return Math.min(1 - (c - f), 1);
                default:
                    return 1
                }
            }
              , R = i.useState("pc")
              , z = (0,
            l.Z)(R, 2)
              , I = z[0]
              , B = z[1];
            i.useEffect((function() {
                var e = function() {
                    B(window.matchMedia(u.r.media.preTablet).matches ? "phone" : "pc")
                };
                window.addEventListener("resize", e),
                e()
            }
            ), []);
            var A = i.useCallback((function(e) {
                g(e),
                S(0),
                w && O(!0)
            }
            ), [w])
              , M = (0,
            v.tZ)("div", {
                css: (0,
                d.iv)("position:absolute;right:12px;display:flex;flex-direction:column;align-items:center;width:30px;padding:25px 0;margin:auto;background:black;border-radius:15px;@media ", u.r.media.preTablet, "{right:auto;bottom:0;flex-direction:row;width:auto;height:30px;padding:0 25px;}", ""),
                children: (0,
                We.w)(0, a).map((function(e) {
                    var t = _(f) === e;
                    return (0,
                    v.tZ)(rt, {
                        active: t,
                        distance: T(e),
                        time: P,
                        onClick: function() {
                            Z(!1),
                            O(!1),
                            S(0),
                            r.to(f + (e - _(f)))
                        }
                    }, e)
                }
                ))
            });
            return (0,
            v.BX)("div", {
                css: (0,
                d.iv)("position:relative;display:flex;align-items:center;justify-content:center;height:370px;overflow:hidden;@media ", u.r.media.preTablet, "{align-items:flex-start;height:290px;}", ""),
                children: [(0,
                v.tZ)("div", {
                    css: (0,
                    d.iv)("height:100%;@media ", u.r.media.preTablet, "{height:250px;}", ""),
                    children: (0,
                    v.tZ)(et.t, {
                        viewport: "phone" === I ? 375 : 1220,
                        controller: r,
                        onSnap: A,
                        children: t
                    })
                }), M]
            })
        }
        var ot = {
            name: "1azakc",
            styles: "text-align:center"
        };
        function st(e) {
            var t = e.banners
              , n = (0,
            L.useRouter)()
              , r = "preview" === nt.env.NEXT_PUBLIC_MODE
              , a = (0,
            Ve.fP)(["_ga"])
              , o = (0,
            l.Z)(a, 1)[0];
            return 0 === t.length ? (0,
            v.tZ)(i.Fragment, {}) : 1 === t.length ? (0,
            v.tZ)("div", {
                css: ot,
                children: (0,
                v.tZ)(m.Z, {
                    href: t[0].href,
                    children: (0,
                    v.tZ)("a", {
                        target: "same" === t[0].windowType ? "_self" : "_blank",
                        rel: "noopener noreferrer",
                        onClick: function() {
                            !function(e) {
                                if ((0,
                                Qe.B)(e) && !r) {
                                    var t = (0,
                                    Qe.X)("".concat("https://analyze.naruto-official.com").concat(n.asPath), [{
                                        key: "title",
                                        value: document.title
                                    }, {
                                        key: "uuid",
                                        value: (0,
                                        $e.p)()
                                    }, {
                                        key: "sessionId",
                                        value: (0,
                                        $e.M)()
                                    }, {
                                        key: "cookie",
                                        value: o._ga
                                    }, {
                                        key: "referrer",
                                        value: document.referrer
                                    }, {
                                        key: "extlink",
                                        value: e
                                    }]);
                                    fetch(t).catch((function(e) {
                                        return console.error(e)
                                    }
                                    ))
                                }
                            }(t[0].href)
                        },
                        children: (0,
                        v.BX)("picture", {
                            children: [(0,
                            v.tZ)("source", {
                                srcSet: t[0].spSrc,
                                height: 250,
                                media: u.r.media.preTablet
                            }), (0,
                            v.tZ)(Re._, {
                                src: t[0].src,
                                loadStyle: (0,
                                d.iv)("width:auto;max-width:100%;height:370px;aspect-ratio:122/37;margin:0 auto;object-fit:contain;@media ", u.r.media.preTablet, "{height:250px;aspect-ratio:75/50;}", ""),
                                imgStyle: (0,
                                d.iv)("max-width:100%;height:370px;object-fit:contain;@media ", u.r.media.preTablet, "{height:250px;}", ""),
                                alt: "",
                                size: "10%"
                            })]
                        })
                    })
                })
            }) : (0,
            v.tZ)(at, {
                children: t.map((function(e) {
                    return (0,
                    v.tZ)(Je.j, {
                        href: e.href,
                        src: e.src,
                        spSrc: e.spSrc,
                        target: "same" === e.windowType ? "_self" : "_blank",
                        load: !0
                    }, e.id)
                }
                ))
            })
        }
        var ct = n(786)
          , lt = function() {
            function e(t) {
                (0,
                w.Z)(this, e);
                var n = t.$
                  , i = t.gl
                  , r = t.shader
                  , a = t.bounds;
                n.width = a.width * window.devicePixelRatio,
                n.height = a.height * window.devicePixelRatio,
                i.viewport(0, 0, n.width, n.height);
                var o = (new ct.yG).ortho2d(-a.width / 2, a.y, a.width, a.height);
                r.bind(),
                r.setUniform4x4f(ct.ex.MVP_MATRIX, o.values),
                this.spine = t
            }
            return (0,
            Z.Z)(e, [{
                key: "animate",
                value: function() {
                    var e = this.spine
                      , t = e.shader
                      , n = e.animation
                      , i = e.skeleton
                      , r = e.batcher
                      , a = e.skeletonRenderer
                      , o = performance.now()
                      , s = requestAnimationFrame((function e() {
                        var c = performance.now()
                          , l = (c - o) / 1e3;
                        o = c,
                        n.update(l),
                        n.apply(i),
                        i.updateWorldTransform(),
                        r.begin(t),
                        a.draw(r, i),
                        r.end(),
                        s = requestAnimationFrame(e)
                    }
                    ));
                    return function() {
                        return cancelAnimationFrame(s)
                    }
                }
            }]),
            e
        }()
          , dt = n(50029)
          , pt = n(87794)
          , ut = n.n(pt)
          , ht = function() {
            function e(t, n) {
                var i = n.skeleton
                  , r = n.assets
                  , a = n.atlas;
                (0,
                w.Z)(this, e),
                this.$ = t,
                this.gl = t.getContext("webgl"),
                this.settings = {
                    skeleton: i,
                    assets: r,
                    atlas: a
                }
            }
            return (0,
            Z.Z)(e, [{
                key: "load",
                value: function() {
                    var e = (0,
                    dt.Z)(ut().mark((function e() {
                        var t, n, i, r, a, o, s = this;
                        return ut().wrap((function(e) {
                            for (; ; )
                                switch (e.prev = e.next) {
                                case 0:
                                    return t = this.settings,
                                    n = t.skeleton,
                                    i = t.assets,
                                    r = t.atlas,
                                    a = this.gl,
                                    (o = new ct.me(a,i)).loadTextureAtlas(r),
                                    o.loadText(n),
                                    e.abrupt("return", new Promise((function(e) {
                                        setTimeout((function t() {
                                            o.isLoadingComplete() ? e() : setTimeout(t, 100)
                                        }
                                        ), 100)
                                    }
                                    )).then((function() {
                                        var e = new ct.N0(o.require(r))
                                          , t = new ct.CE(e);
                                        t.scale = 1;
                                        var i = t.readSkeletonData(o.require(n))
                                          , c = new ct.Od(i)
                                          , l = new ct.OZ(c.data)
                                          , d = new ct.SR(l);
                                        d.setAnimation(0, "animation", !0);
                                        var p = mt(c);
                                        s.batcher = new ct.OR(a);
                                        var u = ct.ex.newTwoColoredTextured(a)
                                          , h = new ct.UL(a);
                                        // console.log('dash', u,p)
                                        return h.premultipliedAlpha = !1,
                                        s.animation = d,
                                        s.skeleton = c,
                                        s.skeletonRenderer = h,
                                        s.shader = u,
                                        s.bounds = p,
                                        {
                                            bounds: p
                                        }
                                    }
                                    )).catch((function() {}
                                    )));
                                case 6:
                                case "end":
                                    return e.stop()
                                }
                        }
                        ), e, this)
                    }
                    )));
                    return function() {
                        return e.apply(this, arguments)
                    }
                }()
            }]),
            e
        }()
          , mt = function(e) {
            e.setToSetupPose(),
            e.updateWorldTransform();
            var t = new ct.FM
              , n = new ct.FM;
            return e.getBounds(t, n, []),
            new DOMRect(t.x,t.y,n.x,n.y)
        };
        function ft(e) {
            var t = e.className
              , n = e.assets
              , r = void 0 === n ? "" : n
              , a = e.atlas
              , o = e.skeleton
              , s = e.width
              , c = e.height
              , p = i.useRef(null)
              , u = i.useState()
              , h = (0,
            l.Z)(u, 2)
              , m = h[0]
              , f = h[1];
            return (0,
            i.useEffect)((function() {
                if (null != p.current) {
                    var e = new ht(p.current,{
                        assets: r,
                        skeleton: o,
                        atlas: a
                    });
                    e.load().then((function() {
                        f(new lt(e))
                    }
                    )).catch((function(e) {
                        throw e
                    }
                    ))
                }
            }
            ), [r, a, o]),
            (0,
            i.useEffect)((function() {
                if (null != m)
                    return m.animate()
            }
            ), [m]),
            (0,
            v.tZ)("canvas", {
                ref: p,
                className: t,
                css: (0,
                d.iv)(s ? "width: ".concat(s, "px") : "", " ", c ? "height: ".concat(c, "px") : "", ";", "")
            })
        }
        var vt = n(89660)
          , gt = n(74574);
        var bt = {
            name: "1b4920d",
            styles: "position:absolute;top:0;left:0;width:100%;height:100%"
        }
          , xt = {
            name: "s5xdrg",
            styles: "display:flex;align-items:center"
        }
          , wt = {
            name: "1hs1mx1",
            styles: "padding-top:6px"
        }
          , Zt = {
            name: "cajpxi",
            styles: "line-height:1;letter-spacing:-0.01em;white-space:pre-wrap"
        }
          , yt = {
            name: "1dmiggy",
            styles: "display:flex;align-items:center;justify-content:flex-start"
        };
        function Nt(e) {
            var t = e.nextStory
              , n = (0,
            V.pl)()
              , r = u.r.media
              , a = r.prePhone
              , o = r.postPhone
              , c = (0,
            i.useCallback)((function(e) {
                e.stopPropagation(),
                "movie" === t.mediaType && "onair" === t.movieOnAir && t.movieUrl && n((0,
                v.tZ)(re.G, {
                    videoSrc: t.movieUrl
                }))
            }
            ), [t.mediaType, t.movieOnAir, t.movieUrl, n])
              , l = (0,
            v.BX)("p", {
                css: (0,
                d.iv)("line-height:20px;letter-spacing:-1.5px;&:not(:lang(ja)){letter-spacing:-1px;}@media ", a, "{font-size:11px;&:not(:lang(ja)){line-height:1.1;letter-spacing:-0.02em;}}", ""),
                children: [(0,
                v.tZ)("span", {
                    css: (0,
                    d.iv)("&:not(:lang(ja)){font-size:13px;font-weight:400;}@media ", o, "{font-size:15px;&:not(:lang(ja)){font-size:17px;}}", ""),
                    children: "\u30c6\u30ec\u30d3\u6771\u4eac\u7cfb\u306b\u3066"
                }), (0,
                v.tZ)("br", {
                    css: (0,
                    d.iv)("@media ", a, "{display:none;}", "")
                }), (0,
                v.tZ)("span", {
                    css: (0,
                    d.iv)("&:not(:lang(ja)){font-size:13px;font-weight:400;}@media ", o, "{font-size:19px;&:not(:lang(ja)){font-size:17px;}}", ""),
                    children: "\u6bce\u9031\u65e5\u66dc\u65e5\u5915\u65b9"
                })]
            })
              , p = (0,
            v.tZ)("p", {
                css: (0,
                d.iv)("font-size:26px;line-height:1;letter-spacing:-0.02em;&:not(:lang(ja)){font-size:30px;font-weight:400;}@media ", a, "{font-size:14px;&:not(:lang(ja)){margin-top:2px;font-size:18px;}}", ""),
                children: "\u597d\u8a55\u653e\u9001\u4e2d\uff01"
            })
              , h = (0,
            v.BX)("div", {
                css: (0,
                d.iv)("padding-bottom:6px;font-weight:bold;@media ", o, "{display:flex;align-items:flex-end;justify-content:space-between;}", ""),
                children: [l, (0,
                v.BX)("div", {
                    css: yt,
                    children: [(0,
                    v.BX)("p", {
                        css: Zt,
                        children: [(0,
                        v.tZ)("span", {
                            css: (0,
                            d.iv)("font-family:var(--impact-font);font-size:42px;@media ", u.r.media.prePhone, "{font-size:20px;}", ""),
                            children: "5"
                        }), "\u6642", (0,
                        v.tZ)("span", {
                            css: (0,
                            d.iv)("font-family:var(--impact-font);font-size:42px;@media ", u.r.media.prePhone, "{font-size:20px;}", ""),
                            children: "30"
                        }), "\u5206 \u301c", " "]
                    }), p]
                })]
            })
              , f = (0,
            v.BX)("div", {
                css: (0,
                d.iv)("width:347px;padding:6px;font-family:var(--comic-impact-font);color:white;cursor:pointer;background:black;.content{transition:opacity 0.25s;}@media ", u.r.media.postPhone, "{&:hover .content{opacity:0.5;}}@media ", a, "{width:165px;padding:6px;}", ""),
                children: [(0,
                v.BX)("div", {
                    className: "content",
                    children: [h, (0,
                    v.tZ)(Tt, {
                        nextStory: t
                    }), (0,
                    v.BX)("div", {
                        css: wt,
                        children: [(0,
                        v.tZ)("p", {
                            css: (0,
                            d.iv)("font-size:20px;font-weight:bold;line-height:1.5;&:not(:lang(ja)){font-size:26px;font-weight:400;line-height:1;}@media ", a, "{font-size:14px;&:not(:lang(ja)){font-size:16px;}}", ""),
                            children: "\u7b2c".concat((0,
                            s.y$)(t.storyNo), "\u8a71 \u300c").concat(t.title, "\u300d")
                        }), (0,
                        v.BX)("div", {
                            css: xt,
                            children: [(0,
                            v.tZ)(gt.V, {}), (0,
                            v.tZ)("span", {
                                css: (0,
                                d.iv)("margin-left:10px;font-family:var(--impact-font);font-size:20px;line-height:1;@media ", a, "{font-size:15px;}", ""),
                                children: t.date
                            })]
                        })]
                    })]
                }), (0,
                v.tZ)("div", {
                    css: bt,
                    onClick: c
                })]
            });
            return "img" === t.mediaType || "onair" !== t.movieOnAir ? (0,
            v.tZ)(m.Z, {
                href: "/anime/".concat(vt.A[t.series], "/list/").concat(t.path),
                children: (0,
                v.tZ)("a", {
                    children: f
                })
            }) : f
        }
        var kt, Ot, Et = {
            name: "1odok0a",
            styles: "width:100%;height:auto;aspect-ratio:560/315;object-fit:contain"
        }, jt = {
            name: "1odok0a",
            styles: "width:100%;height:auto;aspect-ratio:560/315;object-fit:contain"
        }, Pt = {
            name: "1odok0a",
            styles: "width:100%;height:auto;aspect-ratio:560/315;object-fit:contain"
        }, St = {
            name: "c732kj",
            styles: "display:block;width:100%;height:auto;aspect-ratio:560/315"
        }, _t = {
            name: "1odok0a",
            styles: "width:100%;height:auto;aspect-ratio:560/315;object-fit:contain"
        }, Tt = function(e) {
            var t = e.nextStory;
            return "movie" === t.mediaType ? t.movieUrl ? "before" === t.movieOnAir ? (0,
            v.tZ)("img", {
                css: _t,
                src: "/common/coming_soon.webp",
                alt: "coming soon"
            }) : "onair" === t.movieOnAir ? (0,
            v.tZ)("iframe", {
                css: St,
                src: t.movieUrl,
                width: "560",
                height: "315",
                frameBorder: "0",
                allowFullScreen: !0,
                title: "video"
            }) : (0,
            v.tZ)(Re._, {
                src: t.stillImgSrc,
                imgStyle: Pt,
                alt: ""
            }) : (0,
            v.tZ)("img", {
                css: jt,
                src: "/common/coming_soon.webp",
                alt: "coming soon"
            }) : (0,
            v.tZ)(Re._, {
                src: t.stillImgSrc,
                imgStyle: Et,
                alt: ""
            })
        }, Rt = n(83454);
        var zt = {
            name: "2tjrt4",
            styles: "position:absolute;top:0;right:0;bottom:0;left:0;background:url('/index/mountain.webp') no-repeat center/cover"
        }
          , It = {
            name: "12i25zk",
            styles: "position:absolute;top:0;right:0;bottom:0;left:0;background:#75c1cc url('/index/sky.webp') no-repeat center/cover"
        };
        function Bt(e) {
            var t = e.nextStory
              , n = u.r.media.prePhone
              , i = (0,
            p.bU)()
              , r = (0,
            pe.W)()
              , a = (0,
            L.useRouter)()
              , o = "preview" === Rt.env.NEXT_PUBLIC_MODE
              , s = (0,
            Ve.fP)(["_ga"])
              , c = (0,
            l.Z)(s, 1)[0];
            return (0,
            v.BX)("div", {
                css: (0,
                d.iv)("position:relative;display:flex;justify-content:center;width:100%;height:784px;background:var(--primary-color);@media ", u.r.media.prePhone, "{height:648px;}", ""),
                children: [(0,
                v.BX)("span", {
                    css: (0,
                    d.iv)("position:absolute;width:100%;height:calc(784px + 110.5px + (110.5 / 1280) * 100vw);overflow:hidden;clip-path:polygon(0 0, 100% 0, 100% 100%, 0 calc(100% - (221 / 1280) * 100vw));pointer-events:none;@media ", n, "{height:calc(648px + 45px + (45 / 375) * 100vw);clip-path:polygon(0 0, 100% 0, 100% 100%, 0 calc(100% - (45 / 375) * 100vw));}", ""),
                    children: [(0,
                    v.tZ)("figure", {
                        css: It
                    }), (0,
                    v.tZ)("figure", {
                        css: (0,
                        d.iv)("position:absolute;top:0;right:0;bottom:0;left:0;background:url('/index/cloud.webp') no-repeat center/contain;animation:120s -60s infinite linear ", (0,
                        d.F4)(kt || (kt = (0,
                        te.Z)(["\n              from {\n                transform: translateX(-100%);\n              }\n\n              50% {\n                transform: none;\n              }\n\n              to {\n                transform: translateX(100%);\n              }\n            "]))), ";@media screen and (min-width: 1920px){top:60px;bottom:-60px;}", "")
                    }), (0,
                    v.tZ)("figure", {
                        css: (0,
                        d.iv)("position:absolute;top:0;right:0;bottom:0;left:0;background:url('/index/cloud.webp') no-repeat center/contain;animation:120s 0s infinite linear ", (0,
                        d.F4)(Ot || (Ot = (0,
                        te.Z)(["\n              from {\n                transform: translateX(-100%);\n              }\n\n              50% {\n                transform: none;\n              }\n\n              to {\n                transform: translateX(100%);\n              }\n            "]))), ";@media screen and (min-width: 1920px){top:60px;bottom:-60px;}", "")
                    }), (0,
                    v.tZ)("figure", {
                        css: zt
                    })]
                }), (0,
                v.tZ)("div", {
                    css: (0,
                    d.iv)("position:absolute;top:10px;right:8px;@media ", n, "{top:0;right:0;}", "")
                }), (0,
                v.BX)("span", {
                    css: (0,
                    d.iv)("position:absolute;right:12px;bottom:166px;z-index:1;@media ", n, "{right:0;bottom:10px;}", ""),
                    children: ["ja" === i && "jp" === r && t && (0,
                    v.tZ)(Nt, {
                        nextStory: t
                    }), (0,
                    v.tZ)(m.Z, {
                        href: "ja" === i ? "https://narutomania.naruto-official.com/quiz?season=3" : "https://narutomania.naruto-official.com/quiz/en/?season=3",
                        passHref: !0,
                        children: (0,
                        v.tZ)("a", {
                            target: "_blank",
                            onClick: function() {
                                return function(e) {
                                    if (!o) {
                                        var t = (0,
                                        Qe.X)("".concat("https://analyze.naruto-official.com").concat(a.asPath), [{
                                            key: "title",
                                            value: document.title
                                        }, {
                                            key: "uuid",
                                            value: (0,
                                            $e.p)()
                                        }, {
                                            key: "sessionId",
                                            value: (0,
                                            $e.M)()
                                        }, {
                                            key: "cookie",
                                            value: c._ga
                                        }, {
                                            key: "referrer",
                                            value: document.referrer
                                        }, {
                                            key: "extlink",
                                            value: e
                                        }]);
                                        fetch(t).catch((function(e) {
                                            return console.error(e)
                                        }
                                        ))
                                    }
                                }("https://narutomania.naruto-official.com/quiz?season=3")
                            },
                            children: (0,
                            v.BX)("picture", {
                                children: [(0,
                                v.tZ)("source", {
                                    srcSet: "ja" === i ? "/special/narutomania/s3_special/narutomania_sp_ja.webp" : "/special/narutomania/s3_special/narutomania_sp_en.webp",
                                    media: u.r.media.prePhone
                                }), (0,
                                v.tZ)("img", {
                                    src: "ja" === i ? "/special/narutomania/s3_special/narutomania_ja.webp" : "/special/narutomania/s3_special/narutomania_en.webp",
                                    alt: "NARUTO MANIA",
                                    css: (0,
                                    d.iv)("width:347px;height:auto;padding:6px;@media ", u.r.media.prePhone, "{width:177px;height:auto;}", "")
                                })]
                            })
                        })
                    })]
                }), (0,
                v.tZ)("div", {
                    css: (0,
                    d.iv)("position:absolute;top:26px;display:flex;justify-content:center;width:100%;overflow:hidden;@media ", n, "{top:108px;}", ""),
                    children: (0,
                    v.tZ)(ft, {
                        width: "572",
                        assets: "index/naruto/",
                        skeleton: "naruto_spine.json",
                        atlas: "naruto_spine.atlas",
                        css: (0,
                        d.iv)("@media ", n, "{width:484px;}", "")
                    })
                })]
            })
        }
        var At = n(10255)
          , Mt = n(87516)
          , Ut = n(73205);
        var Xt, Lt = {
            name: "1v18o0j",
            styles: "display:-webkit-box;margin:0;overflow:hidden;line-height:1.5;-webkit-box-orient:vertical;-webkit-line-clamp:5"
        }, Ct = {
            name: "wmh8sp",
            styles: "margin-bottom:0.5em;font-family:var(--impact-font);line-height:1"
        }, Dt = {
            name: "1cbkusl",
            styles: "padding:10px 20px;font-size:14px"
        }, Ht = {
            name: "s3pk5b",
            styles: "display:block;width:100%;height:100%;object-fit:contain"
        }, Yt = {
            name: "8enzsq",
            styles: "flex:none;width:164px;height:163px;overflow:hidden;background-color:#f2f2f2"
        }, Ft = {
            name: "1c66tgr",
            styles: "position:absolute;top:min(-10.5%, -24px);right:min(2.5%, 10px);width:max(5%, 48px);height:auto;pointer-events:none"
        }, qt = {
            name: "10i96ac",
            styles: "height:24px;padding:0 6px;margin:0;font-family:var(--comic-impact-font);font-size:11px;color:#f99327;background-color:#000"
        }, Vt = {
            name: "1ec93n0",
            styles: "display:flex;align-items:center;height:24px;padding:0 5px;text-align:center;background:#f99327"
        }, Gt = {
            name: "1pr5bn5",
            styles: "position:absolute;z-index:1;display:flex;align-items:center;justify-content:flex-start"
        }, Wt = {
            name: "gcqsei",
            styles: "position:relative;display:flex;background:white;.image img{transition:transform 0.25s;}.info{transition:opacity 0.25s;}&:active .image img{transform:scale(1.2);}&:active .info{opacity:0.5;}"
        }, Qt = function(e) {
            var t = e.title
              , n = e.categories
              , i = e.imgUrl
              , r = e.date
              , a = e.path
              , o = e.isNew
              , s = e.isPickedUp
              , c = (0,
            p.bU)()
              , l = "/common/news/pickup_".concat(c, ".svg");
            return (0,
            v.tZ)(m.Z, {
                href: "/news/".concat(a),
                children: (0,
                v.BX)("a", {
                    href: "/",
                    css: Wt,
                    children: [(0,
                    v.BX)("div", {
                        css: Gt,
                        children: [o && (0,
                        v.tZ)("div", {
                            css: Vt,
                            children: (0,
                            v.tZ)("p", {
                                css: (0,
                                d.iv)("height:13px;font-family:var(--impact-font);font-size:16px;line-height:1;@media ", u.r.media.preTablet, "{font-size:14px;}", ""),
                                children: "NEW"
                            })
                        }), n.map((function(e, t) {
                            return (0,
                            v.tZ)("span", {
                                css: qt,
                                children: e
                            }, t)
                        }
                        ))]
                    }), s && (0,
                    v.tZ)("img", {
                        css: Ft,
                        src: l,
                        alt: "pick up"
                    }), (0,
                    v.tZ)("div", {
                        className: "image",
                        css: Yt,
                        children: (0,
                        v.tZ)(Re._, {
                            src: i,
                            imgStyle: Ht,
                            alt: ""
                        })
                    }), (0,
                    v.BX)("div", {
                        className: "info",
                        css: Dt,
                        children: [(0,
                        v.tZ)("p", {
                            css: Ct,
                            children: r
                        }), (0,
                        v.tZ)("p", {
                            css: Lt,
                            children: t
                        })]
                    })]
                })
            })
        };
        function $t(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var i = Object.getOwnPropertySymbols(e);
                t && (i = i.filter((function(t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                }
                ))),
                n.push.apply(n, i)
            }
            return n
        }
        function Jt(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {};
                t % 2 ? $t(Object(n), !0).forEach((function(t) {
                    (0,
                    y.Z)(e, t, n[t])
                }
                )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : $t(Object(n)).forEach((function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                }
                ))
            }
            return e
        }
        var Kt = {
            name: "1a2afmv",
            styles: "margin-left:10px"
        }
          , en = {
            name: "nkt64x",
            styles: "margin-right:10px"
        }
          , tn = {
            name: "bjn8wh",
            styles: "position:relative"
        };
        function nn() {
            var e = i.useRef(null)
              , t = A()
              , n = (0,
            T.YD)(t ? e : void 0)
              , r = (0,
            p.bU)()
              , a = (0,
            At.u)()
              , o = i.useRef(null)
              , s = i.useState(0)
              , c = (0,
            l.Z)(s, 2)
              , m = c[0]
              , f = c[1]
              , g = m <= 0
              , x = m >= 1;
            i.useEffect((function() {
                var e;
                null === (e = o.current) || void 0 === e || e.on("position", f)
            }
            ), []);
            var w = (0,
            d.iv)("display:inline-flex;align-items:center;justify-content:center;width:40px;height:40px;border:2px solid black;&:disabled{opacity:0.1;}&:not(:disabled){cursor:pointer;stroke:black;&:active{background:black;stroke:white;}@media ", u.r.media.postPhone, "{&:not(:disabled){}&:hover{background:black;stroke:white;}}}", "")
              , Z = (0,
            d.F4)(Xt || (Xt = (0,
            te.Z)(["to { transform: none; opacity: 1; }"])));
            return (0,
            v.BX)("section", {
                ref: e,
                css: tn,
                children: [(0,
                v.tZ)(b, {
                    children: (0,
                    v.tZ)(ve, {
                        section: "news",
                        css: (0,
                        d.iv)("margin-bottom:45px;@media ", u.r.media.prePhone, "{margin-bottom:30px;}", "")
                    })
                }), (0,
                v.tZ)("div", {
                    css: (0,
                    d.iv)("margin:-33px -10px 0;@media ", u.r.media.preTablet, "{display:none;}", ""),
                    children: (0,
                    v.tZ)(Ut.c, {
                        ref: o,
                        children: a.map((function(e, t) {
                            return (0,
                            v.tZ)("div", {
                                css: (0,
                                d.iv)("opacity:0;transform:translateX(100px);", n && (0,
                                d.iv)("animation:0.5s ", .05 * t, "s forwards ", Z, ";", ""), ";", ""),
                                children: (0,
                                v.tZ)(Mt.e, Jt({}, e))
                            }, t + 1)
                        }
                        ))
                    })
                }), (0,
                v.BX)(b, {
                    children: [(0,
                    v.tZ)("div", {
                        css: (0,
                        d.iv)("@media ", u.r.media.postTablet, "{display:none;}", ""),
                        children: a.slice(0, 4).map((function(e, t) {
                            return (0,
                            v.tZ)("div", {
                                css: (0,
                                d.iv)("margin-top:20px;opacity:0;", n && (0,
                                d.iv)("transform:translateY(50px);animation:0.5s ", .05 * t, "s forwards ", Z, ";", ""), ";", ""),
                                children: (0,
                                v.tZ)(Qt, Jt({}, e))
                            }, t + 1)
                        }
                        ))
                    }), (0,
                    v.BX)("div", {
                        css: (0,
                        d.iv)("display:flex;justify-content:space-between;margin-top:24px;@media ", u.r.media.prePhone, "{justify-content:center;}", ""),
                        children: [(0,
                        v.tZ)(h.f, {
                            icon: "kunai",
                            css: (0,
                            d.iv)("&:not(:lang(ja)){font-size:22px;}@media ", u.r.media.prePhone, "{width:260px;&:not(:lang(ja)){font-size:26px;}}", ""),
                            href: "/news",
                            children: rn[r]
                        }), (0,
                        v.BX)("div", {
                            css: (0,
                            d.iv)("@media ", u.r.media.preTablet, "{display:none;}", ""),
                            children: [(0,
                            v.tZ)("button", {
                                onClick: function() {
                                    o.current && o.current.toPrev()
                                },
                                disabled: g,
                                css: [w, en, "", ""],
                                children: (0,
                                v.tZ)("svg", {
                                    width: "12",
                                    height: "16",
                                    strokeWidth: "2",
                                    fill: "none",
                                    children: (0,
                                    v.tZ)("polyline", {
                                        points: "11 1, 1 8, 11 15"
                                    })
                                })
                            }), (0,
                            v.tZ)("button", {
                                onClick: function() {
                                    o.current && o.current.toNext()
                                },
                                disabled: x,
                                css: [w, Kt, "", ""],
                                children: (0,
                                v.tZ)("svg", {
                                    width: "12",
                                    height: "16",
                                    strokeWidth: "2",
                                    fill: "none",
                                    children: (0,
                                    v.tZ)("polyline", {
                                        points: "1 1, 11 8, 1 15"
                                    })
                                })
                            })]
                        })]
                    })]
                })]
            })
        }
        var rn = {
            ja: "\u3082\u3063\u3068\u898b\u308b",
            en: "MORE COMING SOON",
            fr: "VOIR PLUS",
            de: "MEHR ANSEHEN",
            es: "VER M\xe1S",
            it: "SCOPRI DI PI\xd9"
        }
          , an = n(6981)
          , on = n(77983);
        var sn = {
            name: "addfrh",
            styles: "font-size:14px;line-height:1.5"
        }
          , cn = {
            name: "5bhc30",
            styles: "margin-bottom:8px"
        }
          , ln = {
            name: "tbxqsq",
            styles: "position:absolute;top:0;left:0;display:flex"
        }
          , dn = {
            name: "d3v9zr",
            styles: "overflow:hidden"
        };
        function pn(e) {
            var t = e.title
              , n = e.image
              , i = e.isNew
              , r = e.status
              , a = e.tags
              , o = e.href
              , s = e.target
              , c = void 0 === s ? "_blank" : s
              , l = (0,
            p.bU)()
              , h = [];
            i && h.push({
                label: un[l],
                bgColor: "orange"
            }),
            r && h.push({
                label: r,
                bgColor: "black"
            });
            var f = (0,
            v.BX)("div", {
                css: (0,
                d.iv)("position:relative;width:100%;margin-bottom:18px;background:white;@media ", u.r.media.preTablet, "{display:flex;}", ""),
                children: [(0,
                v.BX)("div", {
                    className: "thumbnail",
                    css: dn,
                    children: [(0,
                    v.tZ)(Re._, {
                        src: n,
                        imgStyle: (0,
                        d.iv)("display:block;width:100%;aspect-ratio:1/1;background:#f2f2f2;object-fit:contain;@media ", u.r.media.preTablet, "{width:153px;}", ""),
                        alt: ""
                    }), (0,
                    v.tZ)("div", {
                        css: ln,
                        children: 0 !== h.length && (0,
                        v.tZ)(an.h, {
                            stausLabels: h
                        })
                    })]
                }), (0,
                v.BX)("div", {
                    className: "info",
                    css: (0,
                    d.iv)("display:flex;flex:1;flex-direction:column;min-height:190px;padding:20px;@media ", u.r.media.preTablet, "{flex-direction:column-reverse;justify-content:space-between;min-height:auto;padding:12px;}", ""),
                    children: [(0,
                    v.tZ)("div", {
                        children: a && (0,
                        v.tZ)("div", {
                            css: cn,
                            children: (0,
                            v.tZ)(on.Z, {
                                labels: a
                            })
                        })
                    }), (0,
                    v.tZ)("p", {
                        css: sn,
                        children: t
                    })]
                })]
            });
            return o ? (0,
            v.tZ)(m.Z, {
                href: o,
                children: (0,
                v.tZ)("a", {
                    target: c,
                    rel: "noopener noreferrer",
                    css: (0,
                    d.iv)("width:100%;@media ", u.r.media.postPhone, "{.thumbnail img{transition:transform 0.25s;}.info{transition:opacity 0.25s;}&:hover .thumbnail img{transform:scale(1.2);}&:hover .info{opacity:0.5;}}", ""),
                    children: f
                })
            }) : (0,
            v.tZ)(v.HY, {
                children: f
            })
        }
        var un = {
            ja: "NEW",
            en: "NEW",
            fr: "NOUVEAU",
            de: "NEU",
            es: "NUEVO",
            it: "NOVIT\xc0"
        };
        var hn = {
            name: "i02vwc",
            styles: "display:flex;flex:1;width:100%"
        }
          , mn = {
            name: "1ar0ird",
            styles: "margin-left:13px;font-family:'fot-udkakugoc80-pro';font-size:16px;line-height:1em"
        }
          , fn = {
            name: "1mru9g1",
            styles: "margin-top:3px;font-family:var(--impact-font);font-size:32px;line-height:1em"
        }
          , vn = {
            name: "118ndl2",
            styles: "display:flex;align-items:center;height:48px;padding:11px;margin-bottom:20px;color:white;background:black"
        };
        function gn(e) {
            var t = e.name
              , n = e.ruby
              , i = e.item
              , r = e.href
              , a = e.btnLabel
              , o = e.run
              , s = (0,
            p.bU)();
            return (0,
            v.BX)("div", {
                css: (0,
                d.iv)("display:flex;flex-direction:column;width:255px;margin-right:30px;&:last-of-type{margin-right:0;}@media ", u.r.media.prePC, "{width:213px;}@media ", u.r.media.preTablet, "{width:100%;margin-right:0;margin-bottom:60px;}opacity:0;transform:translateY(100px);", o && "\n          transition: transform 0.5s, opacity 0.25s;\n          transition-delay: ".concat(o, ";\n          opacity: 1;\n          transform: none;\n        "), ";", ""),
                children: [(0,
                v.BX)("div", {
                    css: vn,
                    children: [(0,
                    v.tZ)("p", {
                        css: fn,
                        children: t
                    }), "ja" === s && (0,
                    v.tZ)("p", {
                        css: mn,
                        children: n
                    })]
                }), (0,
                v.tZ)("div", {
                    css: hn,
                    children: i && (0,
                    v.tZ)(pn, {
                        title: i.title,
                        image: i.imgUrl,
                        isNew: i.isNew,
                        status: i.status,
                        tags: i.tags,
                        href: i.href,
                        target: i.target
                    })
                }), (0,
                v.tZ)("div", {
                    css: (0,
                    d.iv)("@media ", u.r.media.prePhone, "{text-align:center;}", ""),
                    children: (0,
                    v.tZ)(h.f, {
                        href: r,
                        icon: "kunai",
                        css: (0,
                        d.iv)("width:100%;height:40px;&:not(:lang(ja)){height:auto;font-size:22px;}@media ", u.r.media.preTablet, "{width:auto;height:48px;font-size:20px;&:not(:lang(ja)){font-size:26px;}}@media ", u.r.media.prePhone, "{width:267px;&:lang(fr),&:lang(es){width:297px;}}", ""),
                        children: "it" === s ? bn(a, r)[s] : bn(a)[s]
                    })
                })]
            })
        }
        var bn = function(e, t) {
            var n = "/event" === t ? "SUGLI" : "/game" === t ? "SUI" : "SUL";
            return {
                ja: "".concat(e, "\u60c5\u5831\u306f\u3053\u3061\u3089"),
                en: "MORE INFO ON ".concat(e),
                fr: "\xc0 PROPOS DES ".concat(e),
                de: "MEHR INFOS ZUM ".concat(e),
                es: "INFO. SOBRE ".concat(e),
                it: "INFORMAZIONI ".concat(n, " ").concat(e)
            }
        };
        function xn(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var i = Object.getOwnPropertySymbols(e);
                t && (i = i.filter((function(t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                }
                ))),
                n.push.apply(n, i)
            }
            return n
        }
        function wn(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {};
                t % 2 ? xn(Object(n), !0).forEach((function(t) {
                    (0,
                    y.Z)(e, t, n[t])
                }
                )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : xn(Object(n)).forEach((function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                }
                ))
            }
            return e
        }
        var Zn = function(e) {
            var t = e.goodsItem
              , n = e.gameItem
              , r = e.eventItem
              , a = (0,
            p.bU)()
              , o = i.useRef(null)
              , s = (0,
            T.YD)(o)
              , c = (0,
            v.tZ)("section", {
                css: (0,
                d.iv)("padding:460px 0;overflow:hidden;background:url('/index/bg_others.webp') center center no-repeat;background-size:cover;@media ", u.r.media.prePhone, "{padding:calc(150px + 180px) 0 calc(75px + 180px);}", ""),
                children: (0,
                v.tZ)(b, {
                    safe: !0,
                    relative: !0,
                    children: (0,
                    v.BX)("div", {
                        ref: o,
                        children: [(0,
                        v.tZ)(me, {
                            section: "others",
                            run: s
                        }), (0,
                        v.tZ)(ve, {
                            section: "others",
                            run: s
                        }), (0,
                        v.BX)("div", {
                            css: (0,
                            d.iv)("display:flex;margin-top:88px;@media ", u.r.media.preTablet, "{display:block;}", ""),
                            children: [(0,
                            v.tZ)(gn, {
                                name: yn[a],
                                ruby: "\u30b0\u30c3\u30ba",
                                item: t,
                                btnLabel: On[a],
                                href: "/goods",
                                run: s ? "0.25s" : void 0
                            }), (0,
                            v.tZ)(gn, {
                                name: Nn[a],
                                ruby: "\u30b2\u30fc\u30e0",
                                item: n ? wn(wn({}, n), {}, {
                                    status: n.isWithin ? Pn[a] : void 0
                                }) : void 0,
                                btnLabel: En[a],
                                href: "/game",
                                run: s ? "0.35s" : void 0
                            }), (0,
                            v.tZ)(gn, {
                                name: kn[a],
                                ruby: "\u30a4\u30d9\u30f3\u30c8",
                                item: r ? wn(wn({}, r), {}, {
                                    status: r.isWithin ? Sn[a] : void 0,
                                    target: r.target
                                }) : void 0,
                                btnLabel: jn[a],
                                href: "/event",
                                run: s ? "0.45s" : void 0
                            })]
                        })]
                    })
                })
            });
            return (0,
            v.BX)(v.HY, {
                children: [(0,
                v.tZ)(P, {
                    letter: "U"
                }), c]
            })
        }
          , yn = {
            ja: "GOODS",
            en: "STAGE 1",
            fr: "GOODIES",
            de: "STAGE 1",
            es: "MERCHANDISING",
            it: "MERCHANDISE"
        }
          , Nn = {
            ja: "GAME",
            en: "STAGE 2",
            fr: "JEUX",
            de: "STAGE 2",
            es: "JUEGOS",
            it: "GIOCHI"
        }
          , kn = {
            ja: "EVENT",
            en: "STAGE 3",
            fr: "\xc9V\xc9NEMENTS",
            de: "STAGE 3",
            es: "EVENTOS",
            it: "EVENTI"
        }
          , On = {
            ja: "\u30b0\u30c3\u30ba",
            en: "STAGE 1",
            fr: "GOODIES",
            de: "STAGE 1",
            es: "MERCHANDISING",
            it: "MERCHANDISE"
        }
          , En = {
            ja: "\u30b2\u30fc\u30e0",
            en: "STAGE 2",
            fr: "JEUX",
            de: "STAGE 2",
            es: "JUEGOS",
            it: "GIOCHI"
        }
          , jn = {
            ja: "\u30a4\u30d9\u30f3\u30c8",
            en: "STAGE 3",
            fr: "\xc9V\xc9NEMENTS",
            de: "STAGE 3",
            es: "EVENTOS",
            it: "EVENTI"
        }
          , Pn = {
            ja: "\u914d\u4fe1\u4e2d",
            en: "PLAY NOW",
            fr: "OBTENIR MAINTENANT",
            de: "JETZT ERH\xc4LTLICH!",
            es: "DISPONIBLE AHORA",
            it: "PRENDI ORA"
        }
          , Sn = {
            ja: "\u958b\u50ac\u4e2d",
            en: "ON NOW",
            fr: "EN COURS",
            de: "LAUFEND",
            es: "AHORA",
            it: "IN CORSO"
        };
        var _n = (0,
        d.iv)("position:absolute;padding:40px;@media ", u.r.media.prePhone, "{padding:20px 24px;}", "")
          , Tn = {
            name: "1d7ws1j",
            styles: "font-family:var(--impact-font);font-size:56px;font-weight:400;line-height:1"
        }
          , Rn = (0,
        d.iv)("margin:0;font-family:var(--comic-impact-font);font-size:24px;line-height:1.5;white-space:pre-wrap;.pc-new-line{@media ", u.r.media.prePhone, "{.pc-new-line{}display:none;}}.sp-new-line{display:none;@media ", u.r.media.prePhone, "{.sp-new-line{}display:block;}}&:not(:lang(ja)){line-height:1.1;}@media ", u.r.media.preTablet, "{font-size:20px;}@media ", u.r.media.prePhone, "{font-size:18px;}", "")
          , zn = (0,
        d.iv)("margin-top:22px;@media ", u.r.media.prePhone, "{margin-top:16px;}", "")
          , In = {
            name: "d3v9zr",
            styles: "overflow:hidden"
        };
        function Bn() {
            var e = (0,
            p.bU)()
              , t = i.useRef(null)
              , n = i.useRef(null)
              , r = (0,
            T.YD)(t)
              , a = r
              , o = (0,
            T.YD)(n)
              , s = (0,
            v.BX)("div", {
                css: (0,
                d.iv)(_n, " top:64px;left:127px;width:515px;background:white;@media ", u.r.media.prePC, "{left:0;}@media ", u.r.media.preTablet, "{width:412px;}@media ", u.r.media.prePhone, "{top:370px;left:-24px;width:215px;}opacity:", a ? "1" : "0", ";transition:opacity 0.25s,transform 1s;transform:", a ? "none" : "translateY(100px)", ";", ""),
                children: [(0,
                v.tZ)("h3", {
                    css: Tn,
                    children: "NARUTO"
                }), (0,
                v.tZ)("p", {
                    css: Rn,
                    children: An[e]
                }), (0,
                v.tZ)("div", {
                    css: zn,
                    children: (0,
                    v.tZ)(h.f, {
                        css: (0,
                        d.iv)("&:not(:lang(ja)){font-size:28px;}@media ", u.r.media.prePhone, "{&:not(:lang(ja)){font-size:20px;}}", ""),
                        icon: "kunai",
                        href: "/about/story#naruto",
                        children: Un[e]
                    })
                }), (0,
                v.tZ)("img", {
                    src: "/index/char_naruto.webp",
                    alt: "naruto",
                    css: (0,
                    d.iv)("position:absolute;top:-266px;right:-150px;height:659px;pointer-events:none;transform:rotate(2deg);&:not(:lang(ja)){right:-210px;height:626px;}@media ", u.r.media.preTablet, "{top:-173px;right:-130px;height:554px;&:not(:lang(ja)){height:554px;}}@media ", u.r.media.prePhone, "{top:-61px;right:-214px;height:547px;transform:rotate(-4deg);&:not(:lang(ja)){top:-10px;height:547px;}&:lang(de){top:60px;}}", "")
                })]
            })
              , c = (0,
            v.BX)("div", {
                ref: n,
                css: (0,
                d.iv)(_n, " bottom:0;width:482px;background-color:white;@media ", u.r.media.postPhone, "{left:0;}@media ", u.r.media.preTablet, "{width:376px;}@media ", u.r.media.prePhone, "{right:-24px;width:212px;}opacity:", o ? "1" : "0", ";transition:opacity 0.25s,transform 1s;transform:", o ? "none" : "translateY(100px)", ";", ""),
                children: [(0,
                v.BX)("div", {
                    css: (0,
                    d.iv)("display:flex;align-items:center;@media ", u.r.media.prePhone, "{display:block;margin-bottom:0.5em;}", ""),
                    children: [(0,
                    v.tZ)("h3", {
                        css: Tn,
                        children: "BORUTO"
                    }), (0,
                    v.tZ)("p", {
                        css: (0,
                        d.iv)("margin-left:15px;font-family:", u.r.font.impact, ";font-size:25px;line-height:1;@media ", u.r.media.prePhone, "{margin-left:0;font-size:20px;letter-spacing:-0.03em;}", ""),
                        children: "-NARUTO NEXT GENERATIONS-"
                    })]
                }), (0,
                v.tZ)("p", {
                    css: Rn,
                    children: Mn[e]
                }), (0,
                v.tZ)("div", {
                    css: zn,
                    children: (0,
                    v.tZ)(h.f, {
                        css: (0,
                        d.iv)("&:not(:lang(ja)){font-size:28px;}@media ", u.r.media.prePhone, "{&:not(:lang(ja)){font-size:20px;}}", ""),
                        icon: "kunai",
                        href: "/about/story#boruto",
                        children: Un[e]
                    })
                }), (0,
                v.tZ)("img", {
                    src: "/index/char_boruto.webp",
                    alt: "boruto",
                    css: (0,
                    d.iv)("position:absolute;top:7px;right:-183px;height:389px;pointer-events:none;@media ", u.r.media.preTablet, "{right:-183px;height:310px;&:not(:lang(ja)){top:-20px;right:-160px;transform:scale(0.95);}}@media ", u.r.media.prePhone, "{top:-40px;right:auto;left:-210px;height:265px;}", "")
                })]
            });
            return (0,
            v.tZ)("div", {
                css: In,
                children: (0,
                v.tZ)(b, {
                    children: (0,
                    v.BX)("section", {
                        ref: t,
                        css: (0,
                        d.iv)("position:relative;padding-bottom:400px;margin-top:120px;@media ", u.r.media.prePhone, "{padding-bottom:calc(100px + 180px);margin-top:168px;}", ""),
                        children: [(0,
                        v.tZ)("figure", {
                            css: (0,
                            d.iv)("position:absolute;width:1980px;height:1415px;background:url('/index/bg_story.webp') no-repeat;@media ", u.r.media.postPhone, "{display:none;}", "")
                        }), (0,
                        v.tZ)(me, {
                            section: "story",
                            run: r
                        }), (0,
                        v.tZ)(ve, {
                            section: "story",
                            run: r
                        }), (0,
                        v.BX)("div", {
                            css: (0,
                            d.iv)("position:relative;height:773px;&:lang(en){height:794px;}&:lang(fr){height:821px;}&:lang(de){height:873px;}&:lang(es){height:821px;}&:lang(it){height:821px;}@media ", u.r.media.preTablet, "{&:lang(en),&:lang(es){height:773px;}&:lang(fr){height:794px;}&:lang(de){height:838px;}&:lang(es){height:772px;}&:lang(it){height:750px;}}@media ", u.r.media.prePhone, "{height:1180px;&:lang(en){height:1250px;}&:lang(fr),&:lang(es),&:lang(it){height:1230px;}&:lang(de){height:1360px;}}", ""),
                            children: [s, c]
                        })]
                    })
                })
            })
        }
        var An = {
            ja: (0,
            v.BX)(v.HY, {
                children: ["1999\u5e74\u306e\u9023\u8f09\u958b\u59cb\u304b\u3089\u5b8c\u7d50\u307e\u3067\u2014", (0,
                v.tZ)("br", {}), "\u843d\u3061\u3053\u307c\u308c\u5fcd\u8005\u306e", (0,
                v.tZ)("br", {}), "\u8a66\u7df4\u306b\u6e80\u3061\u305f\u6210\u9577\u7269\u8a9e\u3092", (0,
                v.tZ)("br", {}), "\u540d\u30b7\u30fc\u30f3\u3067\u3075\u308a\u304b\u3048\u308b!!"]
            }),
            en: (0,
            v.BX)(v.HY, {
                children: ["From its debut in 1999,", (0,
                v.tZ)("br", {
                    className: "sp-new-line"
                }), " all the way to ", (0,
                v.tZ)("br", {
                    className: "pc-new-line"
                }), "its ", (0,
                v.tZ)("br", {
                    className: "sp-new-line"
                }), "stunning conclusion\u2014", (0,
                v.tZ)("br", {}), "look back on the ", (0,
                v.tZ)("br", {
                    className: "sp-new-line"
                }), "trials and ", (0,
                v.tZ)("br", {}), "tribulations of an ", (0,
                v.tZ)("br", {
                    className: "sp-new-line"
                }), "outcast", (0,
                v.tZ)("br", {
                    className: "pc-new-line"
                }), "ninja\u2019s coming ", (0,
                v.tZ)("br", {
                    className: "sp-new-line"
                }), "of age and the famous ", (0,
                v.tZ)("br", {
                    className: "pc-new-line"
                }), "scenes that shaped ", (0,
                v.tZ)("br", {
                    className: "sp-new-line"
                }), "his story!!"]
            }),
            fr: (0,
            v.BX)(v.HY, {
                children: ["Depuis le d\xe9but de la ", (0,
                v.tZ)("br", {
                    className: "sp-new-line"
                }), "s\xe9rie en 1999 ", (0,
                v.tZ)("br", {
                    className: "pc-new-line"
                }), "jusqu\u2019\xe0 ", (0,
                v.tZ)("br", {
                    className: "sp-new-line"
                }), "sa conclusion, ", (0,
                v.tZ)("br", {
                    className: "pc-new-line"
                }), "revivez au travers de ", (0,
                v.tZ)("br", {
                    className: "sp-new-line"
                }), "sc\xe8nes ", (0,
                v.tZ)("br", {
                    className: "pc-new-line"
                }), "cultes ", (0,
                v.tZ)("br", {
                    className: "sp-new-line"
                }), "l\u2019histoire d\u2019un ", (0,
                v.tZ)("br", {
                    className: "sp-new-line"
                }), "ninja rat\xe9 ", (0,
                v.tZ)("br", {
                    className: "pc-new-line"
                }), "qui a ", (0,
                v.tZ)("br", {
                    className: "sp-new-line"
                }), "\xe9volu\xe9 au fil des ", (0,
                v.tZ)("br", {
                    className: "sp-new-line"
                }), "\xe9preuves ", (0,
                v.tZ)("br", {
                    className: "pc-new-line"
                }), "et des ", (0,
                v.tZ)("br", {
                    className: "sp-new-line"
                }), "difficult\xe9s !"]
            }),
            de: (0,
            v.BX)(v.HY, {
                children: ["Von der ", (0,
                v.tZ)("br", {
                    className: "sp-new-line"
                }), "Erstausstrahlung im ", (0,
                v.tZ)("br", {
                    className: "sp-new-line"
                }), "Jahre ", (0,
                v.tZ)("br", {
                    className: "pc-new-line"
                }), "1999 bis zum ", (0,
                v.tZ)("br", {
                    className: "sp-new-line"
                }), "atemberaubenden Finale - ", (0,
                v.tZ)("br", {}), "Blickt zur\xfcck auf ", (0,
                v.tZ)("br", {
                    className: "sp-new-line"
                }), "die legend\xe4rsten ", (0,
                v.tZ)("br", {}), "Szenen der ", (0,
                v.tZ)("br", {
                    className: "sp-new-line"
                }), "Geschichte des ", (0,
                v.tZ)("br", {}), "Au\xdfenseiter-Ninjas ", (0,
                v.tZ)("br", {}), "und die Pr\xfcfungen und ", (0,
                v.tZ)("br", {
                    className: "sp-new-line"
                }), "H\xfcrden, ", (0,
                v.tZ)("br", {}), "die er \xfcberstehen ", (0,
                v.tZ)("br", {
                    className: "sp-new-line"
                }), "musste!"]
            }),
            es: (0,
            v.BX)(v.HY, {
                children: ["Revive los momentos ", (0,
                v.tZ)("br", {
                    className: "sp-new-line"
                }), "m\xe1s incre\xedbles ", (0,
                v.tZ)("br", {
                    className: "pc-new-line"
                }), "de la ", (0,
                v.tZ)("br", {
                    className: "sp-new-line"
                }), "historia de crecimiento ", (0,
                v.tZ)("br", {
                    className: "sp-new-line"
                }), "y ", (0,
                v.tZ)("br", {
                    className: "pc-new-line"
                }), "superaci\xf3n del ni\xf1o ", (0,
                v.tZ)("br", {
                    className: "sp-new-line"
                }), "shinobi, ", (0,
                v.tZ)("br", {}), "\xa1desde la primera ", (0,
                v.tZ)("br", {
                    className: "sp-new-line"
                }), "emisi\xf3n en 1999 ", (0,
                v.tZ)("br", {}), "hasta su incre\xedble ", (0,
                v.tZ)("br", {
                    className: "sp-new-line"
                }), "final!"]
            }),
            it: (0,
            v.BX)(v.HY, {
                children: ["Rivivi i momenti pi\xf9 ", (0,
                v.tZ)("br", {
                    className: "sp-new-line"
                }), "incredibili della ", (0,
                v.tZ)("br", {
                    className: "pc-new-line"
                }), "storia ", (0,
                v.tZ)("br", {
                    className: "sp-new-line"
                }), "del ragazzo che ", (0,
                v.tZ)("br", {
                    className: "sp-new-line"
                }), "voleva ", (0,
                v.tZ)("br", {
                    className: "pc-new-line"
                }), "diventare ", (0,
                v.tZ)("br", {
                    className: "sp-new-line"
                }), "Hokage, ", (0,
                v.tZ)("br", {}), "dagli albori nel ", (0,
                v.tZ)("br", {
                    className: "sp-new-line"
                }), "1999 alla sua ", (0,
                v.tZ)("br", {}), "incredibile fine!"]
            })
        }
          , Mn = {
            ja: (0,
            v.BX)(v.HY, {
                children: ["\u706b\u5f71\u3092\u76ee\u6307\u3057\u305f\u5c11\u5e74\u306e\u7269\u8a9e\u306f", (0,
                v.tZ)("br", {
                    className: "pc-new-line"
                }), "\u65b0\u6642\u4ee3\u3078\u3068\u53d7\u3051\u7d99\u304c\u308c\u308b!!", (0,
                v.tZ)("br", {}), "NARUTO\u30ef\u30fc\u30eb\u30c9\u306e\u4eca\u3092\u76ee\u6483\u305b\u3088!!"]
            }),
            en: (0,
            v.BX)(v.HY, {
                children: ["The story of a young ", (0,
                v.tZ)("br", {
                    className: "sp-new-line"
                }), "boy who ", (0,
                v.tZ)("br", {
                    className: "pc-new-line"
                }), "dreams of ", (0,
                v.tZ)("br", {
                    className: "sp-new-line"
                }), "becoming Hokage is ", (0,
                v.tZ)("br", {}), "passed on to a new ", (0,
                v.tZ)("br", {
                    className: "sp-new-line"
                }), "generation!", (0,
                v.tZ)("br", {}), "See how the world of ", (0,
                v.tZ)("br", {
                    className: "sp-new-line"
                }), "NARUTO ", (0,
                v.tZ)("br", {
                    className: "pc-new-line"
                }), "has changed ", (0,
                v.tZ)("br", {
                    className: "sp-new-line"
                }), "over the years!!"]
            }),
            fr: (0,
            v.BX)(v.HY, {
                children: ["L\u2019histoire d\u2019un jeune ", (0,
                v.tZ)("br", {
                    className: "sp-new-line"
                }), "gar\xe7on ", (0,
                v.tZ)("br", {
                    className: "pc-new-line"
                }), "qui r\xeave de ", (0,
                v.tZ)("br", {
                    className: "sp-new-line"
                }), "devenir Hokage ", (0,
                v.tZ)("br", {
                    className: "pc-new-line"
                }), "est ", (0,
                v.tZ)("br", {
                    className: "sp-new-line"
                }), "transmise \xe0 une ", (0,
                v.tZ)("br", {
                    className: "sp-new-line"
                }), "nouvelle ", (0,
                v.tZ)("br", {
                    className: "pc-new-line"
                }), "g\xe9n\xe9ration ! ", (0,
                v.tZ)("br", {}), "D\xe9couvrez le nouveau ", (0,
                v.tZ)("br", {
                    className: "sp-new-line"
                }), "monde ", (0,
                v.tZ)("br", {
                    className: "pc-new-line"
                }), "de NARUTO !"]
            }),
            de: (0,
            v.BX)(v.HY, {
                children: ["Die Geschichte des ", (0,
                v.tZ)("br", {
                    className: "sp-new-line"
                }), "jungen ", (0,
                v.tZ)("br", {
                    className: "pc-new-line"
                }), "Ninjas, dessen ", (0,
                v.tZ)("br", {
                    className: "sp-new-line"
                }), "Traum es ist, ", (0,
                v.tZ)("br", {
                    className: "pc-new-line"
                }), "Hokage ", (0,
                v.tZ)("br", {
                    className: "sp-new-line"
                }), "zu werden, ", (0,
                v.tZ)("br", {}), "wird an die n\xe4chste ", (0,
                v.tZ)("br", {
                    className: "sp-new-line"
                }), "Generation", (0,
                v.tZ)("br", {}), "weitergegeben! ", (0,
                v.tZ)("br", {}), "Ein neues Zeitalter ist ", (0,
                v.tZ)("br", {
                    className: "sp-new-line"
                }), "in der ", (0,
                v.tZ)("br", {
                    className: "pc-new-line"
                }), "NARUTO-Welt ", (0,
                v.tZ)("br", {
                    className: "sp-new-line"
                }), "eingetreten!"]
            }),
            es: (0,
            v.BX)(v.HY, {
                children: ["\xa1La historia del joven ", (0,
                v.tZ)("br", {
                    className: "sp-new-line"
                }), "ninja, ", (0,
                v.tZ)("br", {
                    className: "pc-new-line"
                }), "cuyo sue\xf1o era ", (0,
                v.tZ)("br", {
                    className: "sp-new-line"
                }), "convertirse ", (0,
                v.tZ)("br", {
                    className: "pc-new-line"
                }), "en Hokage, ", (0,
                v.tZ)("br", {
                    className: "sp-new-line"
                }), "pasa a la pr\xf3xima ", (0,
                v.tZ)("br", {}), "generaci\xf3n! ", (0,
                v.tZ)("br", {}), "\xa1Llega una nueva era ", (0,
                v.tZ)("br", {
                    className: "sp-new-line"
                }), "en el mundo ", (0,
                v.tZ)("br", {
                    className: "pc-new-line"
                }), "de Naruto!"]
            }),
            it: (0,
            v.BX)(v.HY, {
                children: ["Il nuovo capitolo ", (0,
                v.tZ)("br", {
                    className: "sp-new-line"
                }), "della storia ", (0,
                v.tZ)("br", {
                    className: "pc-new-line"
                }), "dei ninja ", (0,
                v.tZ)("br", {
                    className: "sp-new-line"
                }), "della foglia! ", (0,
                v.tZ)("br", {}), "Sei pronto a ", (0,
                v.tZ)("br", {
                    className: "sp-new-line"
                }), "scoprire cosa ", (0,
                v.tZ)("br", {
                    className: "pc-new-line"
                }), "\xe8 ", (0,
                v.tZ)("br", {
                    className: "sp-new-line"
                }), "cambiato nel mondo ", (0,
                v.tZ)("br", {}), "di NARUTO?"]
            })
        }
          , Un = {
            ja: "\u8a73\u3057\u304f\u898b\u308b",
            en: "COMING SOON",
            fr: "PLUS D\u2019INFOS",
            de: "MEHR ANSEHEN",
            es: "M\xc1S DETALLES",
            it: "DETTAGLI"
        }
          , Xn = n(69818);
        var Ln = {
            name: "46t7y7",
            styles: "word-break:keep-all;&:not(:lang(ja)){font-family:var(--impact-font);font-size:24px;}"
        }
          , Cn = {
            name: "23pu6j",
            styles: "flex-shrink:0;margin-top:-3px;margin-right:5px"
        }
          , Dn = {
            name: "s5xdrg",
            styles: "display:flex;align-items:center"
        }
          , Hn = {
            name: "107ypaf",
            styles: "height:auto;padding:5px 20px;line-height:1.2"
        }
          , Yn = {
            name: "1bkpu5b",
            styles: "margin-top:30px"
        }
          , Fn = {
            name: "1qwesan",
            styles: "margin-top:100px"
        }
          , qn = function() {
            var e = (0,
            p.bU)()
              , t = i.useRef(null)
              , n = (0,
            T.YD)(t)
              , r = "ja" === e ? "NarutoHokageEth" : "NarutoHokageEth"
              , a = "ja" === e ? "https://x.com/NarutoCoinETH" : "https://x.com/NarutoCoinETH";
            return (0,
            v.BX)(v.HY, {
                children: [(0,
                v.tZ)(P, {
                    letter: "T"
                }), (0,
                v.tZ)("section", {
                    css: (0,
                    d.iv)("padding:460px 0;overflow:hidden;background:#fa9427;@media ", u.r.media.prePhone, "{padding:calc(75px + 180px) 0;}", ""),
                    children: (0,
                    v.BX)(b, {
                        safe: !0,
                        relative: !0,
                        ref: t,
                        children: [(0,
                        v.tZ)(me, {
                            section: "sns",
                            run: n
                        }), (0,
                        v.tZ)(ve, {
                            section: "sns",
                            run: n
                        }), (0,
                        v.BX)("div", {
                            css: Fn,
                            children: [(0,
                            v.BX)("a", {
                                className: "twitter-timeline",
                                "data-height": "500",
                                "data-width": "500",
                                "data-chrome": "noheader",
                                href: "https://twitter.com/".concat(r, "?ref_src=twsrc%5Etfw"),
                                children: ["Posts by ", r]
                            }), " ", (0,
                            v.tZ)("script", {
                                async: !0,
                                src: "https://platform.twitter.com/widgets.js"
                            })]
                        }), (0,
                        v.tZ)("div", {
                            css: Yn,
                            children: (0,
                            v.tZ)(h.f, {
                                css: Hn,
                                href: a,
                                target: "_blank",
                                children: (0,
                                v.BX)("div", {
                                    css: Dn,
                                    children: [(0,
                                    v.tZ)(Xn.Z, {
                                        className: "icon",
                                        size: "16px",
                                        css: Cn
                                    }), (0,
                                    v.tZ)("div", {
                                        css: Ln,
                                        children: Vn[e]
                                    })]
                                })
                            })
                        })]
                    })
                })]
            })
        }
          , Vn = {
            ja: (0,
            v.BX)(v.HY, {
                children: [(0,
                v.tZ)("span", {
                    css: {
                        name: "184kryn",
                        styles: "font-family:var(--impact-font);font-size:24px"
                    },
                    children: "NARUTO\u2022BORUTO"
                }), (0,
                v.tZ)("span", {
                    css: {
                        name: "1odjscj",
                        styles: "font-family:var(--comic-font);font-size:20px"
                    },
                    children: "\u3010\u539f\u4f5c\u516c\u5f0f\u3011"
                }), (0,
                v.tZ)("br", {
                    css: (0,
                    d.iv)("@media ", u.r.media.postTablet, "{display:none;}", "")
                }), (0,
                v.tZ)("span", {
                    css: {
                        name: "1odjscj",
                        styles: "font-family:var(--comic-font);font-size:20px"
                    },
                    children: "\u3092\u30d5\u30a9\u30ed\u30fc\u3059\u308b"
                })]
            }),
            en: (0,
            v.BX)(v.HY, {
                children: [(0,
                v.tZ)("span", {
                    css: {
                        name: "1693thf",
                        styles: "margin-right:5px"
                    },
                    children: "FOLLOW"
                }), (0,
                v.tZ)("span", {
                    children: "NarutoHokageEth"
                })]
            }),
            fr: (0,
            v.BX)(v.HY, {
                children: [(0,
                v.tZ)("span", {
                    css: {
                        name: "1693thf",
                        styles: "margin-right:5px"
                    },
                    children: "SUIVRE"
                }), (0,
                v.tZ)("span", {
                    children: "NarutoHokageEth"
                })]
            }),
            de: (0,
            v.BX)(v.HY, {
                children: [(0,
                v.tZ)("span", {
                    css: {
                        name: "1693thf",
                        styles: "margin-right:5px"
                    },
                    children: "NarutoHokageEth"
                }), (0,
                v.tZ)("span", {
                    children: "FOLGEN"
                })]
            }),
            es: (0,
            v.BX)(v.HY, {
                children: [(0,
                v.tZ)("span", {
                    css: {
                        name: "1693thf",
                        styles: "margin-right:5px"
                    },
                    children: "SIGUE A"
                }), (0,
                v.tZ)("span", {
                    children: "NarutoHokageEth"
                })]
            }),
            it: (0,
            v.BX)(v.HY, {
                children: [(0,
                v.tZ)("span", {
                    css: {
                        name: "nkt64x",
                        styles: "margin-right:10px"
                    },
                    children: "NarutoHokageEth"
                }), (0,
                v.tZ)("span", {
                    children: "SEGUI"
                })]
            })
        };
        var Gn = {
            name: "bjn8wh",
            styles: "position:relative"
        }
          , Wn = {
            name: "1azakc",
            styles: "text-align:center"
        }
          , Qn = {
            name: "bjn8wh",
            styles: "position:relative"
        }
          , $n = {
            name: "1huv1ah",
            styles: "margin-top:60px"
        }
          , Jn = {
            name: "vwxcen",
            styles: "padding-top:140px"
        }
          , Kn = {
            name: "1t4u35c",
            styles: "margin-top:-140px;overflow:hidden"
        }
          , ei = {
            name: "1l0z83d",
            styles: "background:var(--primary-color)"
        }
          , ti = {
            name: "3q4ecs",
            styles: "position:relative;z-index:0"
        }
          , ni = {
            name: "1ai4zo0",
            styles: "margin-left:0.25em;font-size:25px;&:not(:lang(ja)){display:none;}"
        }
          , ii = {
            name: "1wnowod",
            styles: "display:flex;align-items:center;justify-content:center"
        }
          , ri = {
            name: "qhxz92",
            styles: "max-width:100%"
        };
        var ai = function(e) {
            var t = e.infoList
              , n = e.popup
              , r = e.banners
              , a = e.nextStory
              , o = e.quizList
              , s = e.goodsItem
              , c = e.gameItem
              , m = e.eventItem
              , f = (0,
            p.bU)()
              , g = i.useState(!1)
              , w = (0,
            l.Z)(g, 2)
              , Z = w[0]
              , y = w[1]
              , N = i.useState(!1)
              , k = (0,
            l.Z)(N, 2)
              , E = k[0]
              , j = k[1];
            i.useEffect((function() {
                document.body.classList.add("splash");
                var e = setTimeout((function() {
                    document.body.classList.remove("splash"),
                    j(!0)
                }
                ), 1500);
                return function() {
                    return clearTimeout(e)
                }
            }
            ), []),
            i.useEffect((function() {
                var e = function() {
                    y(matchMedia(u.r.media.postPhone).matches)
                };
                window.addEventListener("resize", e),
                e()
            }
            ), []),
            i.useEffect((function() {
                return window.history.scrollRestoration && (window.history.scrollRestoration = "manual"),
                function() {
                    window.history.scrollRestoration && (window.history.scrollRestoration = "auto")
                }
            }
            ), []);
            var S = (0,
            v.tZ)(h.f, {
                href: "/about",
                width: "730",
                height: "100",
                color: "transparent",
                icon: "kunai",
                center: !0,
                css: ri,
                children: (0,
                v.BX)("div", {
                    css: ii,
                    children: [(0,
                    v.tZ)("span", {
                        css: (0,
                        d.iv)("font-family:var(--impact-font);font-size:54px;@media ", u.r.media.prePhone, "{&:not(:lang(ja)){margin-left:-44px;letter-spacing:-0.02em;}}", ""),
                        children: oi[f]
                    }), (0,
                    v.tZ)("span", {
                        css: ni,
                        children: "\u3068\u306f\uff1f"
                    })]
                })
            })
              , T = (0,
            v.BX)(v.HY, {
                children: [(0,
                v.tZ)(le, {
                    popup: n,
                    ready: E
                }), (0,
                v.tZ)("h1", {
                    className: "visually-hidden",
                    children: "NARUTO SITE"
                }), (0,
                v.tZ)(K, {}), (0,
                v.BX)("main", {
                    css: ti,
                    children: [(0,
                    v.tZ)(Bt, {
                        nextStory: void 0
                    }), (0,
                    v.BX)("div", {
                        css: ei,
                        children: [(0,
                        v.tZ)("div", {
                            css: Kn,
                            children: (0,
                            v.BX)("div", {
                                css: Jn,
                                children: [0 !== t.length && (0,
                                v.tZ)(x, {
                                    infoList: t
                                }), (0,
                                v.tZ)(nn, {})]
                            })
                        }), (0,
                        v.tZ)("div", {
                            css: $n,
                            children: r && (0,
                            v.tZ)(st, {
                                banners: r
                            })
                        }), (0,
                        v.BX)("div", {
                            css: Qn,
                            children: [(0,
                            v.tZ)(P, {
                                letter: "N"
                            }), (0,
                            v.BX)("div", {
                                css: (0,
                                d.iv)("padding-top:90px;background:url(", "ja" === f ? "/index/bg_story_jp.webp" : "/index/bg_story_en.webp", ") no-repeat top/auto 100%;@media ", u.r.media.prePhone, "{padding-top:80px;background:url(", "ja" === f ? "/index/bg_story_jp_sp.webp" : "/index/bg_story_en_sp.webp", ") no-repeat left/auto 100%;}", ""),
                                children: [(0,
                                v.tZ)(b, {
                                    children: (0,
                                    v.tZ)("div", {
                                        css: Wn,
                                        children: S
                                    })
                                }), (0,
                                v.tZ)(Bn, {})]
                            })]
                        })]
                    }), (0,
                    v.tZ)(ie, {
                        slopeTo: "left",
                        image: "intermission_1.webp"
                    }), (0,
                    v.tZ)(Le, {
                        quizList: o
                    }), (0,
                    v.tZ)(ie, {
                        slopeTo: "right",
                        image: "intermission_2.webp"
                    }), (0,
                    v.tZ)(Se, {
                        nextStory: a
                    }), (0,
                    v.tZ)(ie, {
                        slopeTo: "left",
                        image: "intermission_3.webp"
                    }), (0,
                    v.tZ)(Zn, {
                        goodsItem: s,
                        gameItem: c,
                        eventItem: m
                    }), (0,
                    v.tZ)(ie, {
                        slopeTo: "right",
                        image: "intermission_4.webp"
                    }), (0,
                    v.tZ)(qn, {}), (0,
                    v.tZ)(ie, {
                        slopeTo: "left",
                        image: "intermission_5.webp"
                    }), (0,
                    v.tZ)(P, {
                        letter: "O"
                    }), (0,
                    v.tZ)(Fe, {}), (0,
                    v.tZ)(P, {
                        letter: "$",
                        anchor: 1
                    }), Z && (0,
                    v.tZ)(_, {})]
                }), (0,
                v.tZ)(X, {})]
            });
            return T = (0,
            v.tZ)(V.DY, {
                children: (0,
                v.tZ)(O, {
                    children: (0,
                    v.tZ)(M, {
                        ready: E,
                        children: (0,
                        v.tZ)("div", {
                            css: Gn,
                            children: T
                        })
                    })
                })
            })
        }
          , oi = {
            ja: "NARUTO",
            en: "ABOUT NARUTO",
            fr: "HISTOIRE",
            de: "\xdcBER NARUTO",
            es: "SOBRE NARUTO",
            it: "COS'\xc8 NARUTO"
        }
          , si = function() {
            var e, t, n, l, d, p, u, h = (0,
            r.Vd)("siteInfomationList", {
                data: (0,
                s.k8)({
                    infomation_type: "top"
                })
            }).result, m = (0,
            r.Vd)("siteCommon", {}).result, f = (0,
            r.Vd)("animeSynopsisList", {
                limit: 5,
                data: (0,
                s.k8)({
                    category: "ANIME",
                    series: "boruto"
                })
            }).result, g = (0,
            r.Vd)("comicList", {
                data: (0,
                s.k8)({
                    categories: ["\u30b3\u30df\u30c3\u30af\u30b9"],
                    comic_type: "comic_details"
                })
            }).result, b = (0,
            r.Vd)("goodsList", {
                limit: 5
            }).result, x = (0,
            r.Vd)("gameList", {
                limit: 5
            }).result, w = (0,
            r.Vd)("eventList", {
                limit: 5
            }).result, Z = null !== (e = null === h || void 0 === h ? void 0 : h.data.site_infomation_list.sort((function(e, t) {
                return t.startdate - e.startdate
            }
            )).slice(0, 3)) && void 0 !== e ? e : [], y = null === m || void 0 === m || null === (t = m.data.top_special_banner[0]) || void 0 === t ? void 0 : t.content, N = (0,
            a.Z)(null !== (n = null === f || void 0 === f ? void 0 : f.data.anime_synopsis_list) && void 0 !== n ? n : [])[0], k = (0,
            a.Z)(null !== (l = null === g || void 0 === g ? void 0 : g.data.comic_list) && void 0 !== l ? l : []).filter((function(e) {
                var t;
                return null === (t = e.comic) || void 0 === t ? void 0 : t.top_random_image
            }
            )), O = (0,
            a.Z)(null !== (d = null === b || void 0 === b ? void 0 : b.data.goods_list) && void 0 !== d ? d : [])[0], E = (0,
            a.Z)(null !== (p = null === x || void 0 === x ? void 0 : x.data.game_list) && void 0 !== p ? p : [])[0], j = (0,
            a.Z)(null !== (u = null === w || void 0 === w ? void 0 : w.data.event_list) && void 0 !== u ? u : [])[0], P = Z.map((function(e) {
                return {
                    destination: e.destination,
                    title: e.title,
                    url: e.destination ? "article_path" === e.destination ? e.article_path : e.external_url : ""
                }
            }
            )), S = (0,
            i.useMemo)((function() {
                try {
                    if (!m || !m.data.top_popup || Array.isArray(m.data.top_popup))
                        return null;
                    var e = m.data.top_popup
                      , t = "img" === e.disp_type;
                    return {
                        id: e._id,
                        imgSrc: t ? (0,
                        r.hT)(e.thumbnail) : void 0,
                        videoSrc: t ? void 0 : (0,
                        s.ux)((0,
                        s.T3)(null === e || void 0 === e ? void 0 : e.movie_url)),
                        text: null === e || void 0 === e ? void 0 : e.content,
                        href: null === e || void 0 === e ? void 0 : e.external_link,
                        isShowImg: t
                    }
                } catch (n) {
                    return null
                }
            }
            ), [m]), _ = (0,
            i.useMemo)((function() {
                try {
                    if (N) {
                        var e, t, n, i = Math.floor((new Date).getTime() / 1e3), a = "before";
                        return (null !== (e = N.anime.movie_startdate) && void 0 !== e ? e : 0) < i && (a = "onair"),
                        (null !== (t = N.anime.movie_enddate) && void 0 !== t ? t : 0) < i && (a = "after"),
                        {
                            path: N.path,
                            series: N.series[0].code,
                            title: N.title,
                            storyNo: N.anime.story_no,
                            summary: N.anime.text,
                            date: N.anime.onair_date,
                            stillImgSrc: (0,
                            r.hT)(null === (n = N.anime) || void 0 === n ? void 0 : n.images[0]),
                            movieUrl: (0,
                            s.ux)((0,
                            s.T3)(N.anime.movie_url)),
                            movieOnAir: a,
                            mediaType: N.anime.page_type
                        }
                    }
                    return
                } catch (o) {
                    return
                }
            }
            ), [N]), T = (0,
            i.useMemo)((function() {
                try {
                    return null === y || void 0 === y ? void 0 : y.map((function(e) {
                        return {
                            id: e.banner_id,
                            href: e.url,
                            src: (0,
                            r.hT)(e.image),
                            spSrc: (0,
                            r.hT)(e.image_sp),
                            windowType: e.window_type
                        }
                    }
                    ))
                } catch (e) {
                    return
                }
            }
            ), [y]), R = (0,
            i.useMemo)((function() {
                try {
                    return k.map((function(e) {
                        return {
                            id: e._id,
                            path: e.path,
                            imgSrc: (0,
                            r.hT)(e.comic.top_random_image)
                        }
                    }
                    ))
                } catch (e) {
                    return
                }
            }
            ), [k]), z = (0,
            i.useMemo)((function() {
                try {
                    var e, t;
                    return O ? {
                        title: O.title,
                        imgUrl: (0,
                        r.hT)(O.thumbnail),
                        tags: null !== (e = null === O || void 0 === O || null === (t = O.categories) || void 0 === t ? void 0 : t.subcategory.map((function(e) {
                            return e.name
                        }
                        ))) && void 0 !== e ? e : [],
                        href: O.goods.url
                    } : void 0
                } catch (n) {
                    return
                }
            }
            ), [O]), I = (0,
            i.useMemo)((function() {
                try {
                    var e, t, n;
                    if (E) {
                        var i = (0,
                        o.Q)(E.game.delivery_startdate)
                          , a = (0,
                        o.Q)(E.game.delivery_enddate);
                        n = 0 !== i && (0,
                        o.f7)(i, a)
                    }
                    return E ? {
                        title: E.title,
                        imgUrl: (0,
                        r.hT)(E.thumbnail),
                        isWithin: n,
                        tags: null !== (e = null === E || void 0 === E || null === (t = E.categories) || void 0 === t ? void 0 : t.subcategory.map((function(e) {
                            return e.name
                        }
                        ))) && void 0 !== e ? e : [],
                        href: E.game.url
                    } : void 0
                } catch (s) {
                    return
                }
            }
            ), [E]), B = (0,
            i.useMemo)((function() {
                try {
                    var e;
                    return j && (e = (0,
                    o.f7)(j.event.event_startdate, j.event.event_enddate)),
                    j ? {
                        title: j.title,
                        imgUrl: (0,
                        r.hT)(j.thumbnail),
                        isWithin: e,
                        tags: j.event.posting_area,
                        href: j.event.url,
                        target: "same" === j.event.window_type ? "_self" : "_blank"
                    } : void 0
                } catch (t) {
                    return
                }
            }
            ), [j]);
            return (0,
            v.tZ)(c.e, {
                children: (0,
                v.tZ)(ai, {
                    infoList: P,
                    popup: S,
                    banners: T,
                    nextStory: _,
                    quizList: R,
                    goodsItem: z,
                    gameItem: I,
                    eventItem: B
                })
            })
        }
    },
    2090: function(e, t, n) {
        n.d(t, {
            CK: function() {
                return c
            },
            Py: function() {
                return s
            }
        });
        var i = n(16835);
        function r(e) {
            var t = parseInt(e.slice(1), 16);
            return t <= 16777215 ? t << 8 | 255 : t
        }
        function a(e) {
            return "00".concat(e.toString(16)).slice(-2)
        }
        function o(e) {
            return [e >> 24 & 255, e >> 16 & 255, e >> 8 & 255, 255 & e]
        }
        function s(e, t, n) {
            var s, c = o(r(e)), l = o(r(t)).map((function(e, t) {
                return c[t] + (e - c[t]) * n
            }
            ));
            return function(e) {
                var t = o(e)
                  , n = (0,
                i.Z)(t, 3)
                  , r = n[0]
                  , s = n[1]
                  , c = n[2];
                return "#".concat(a(r)).concat(a(s)).concat(a(c))
            }((s = l)[0] << 24 | s[1] << 16 | s[2] << 8 | s[3])
        }
        function c(e, t) {
            return function(e, t) {
                return "".concat(e).concat(a(t))
            }(e, Math.floor(255 * t))
        }
    }
}]);
