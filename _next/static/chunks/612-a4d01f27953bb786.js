"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [612],
  {
    89434: function (t, e, i) {
      i.d(e, {
        if: function () {
          return m;
        },
        jt: function () {
          return h;
        },
        mD: function () {
          return f;
        },
      });
      var n = i(92777),
        o = i(82262),
        r = i(10748),
        a = i(45959),
        c = i(63553),
        s = i(37247),
        l = i(59499),
        u = i(25293);
      function d(t) {
        var e = (function () {
          if ("undefined" === typeof Reflect || !Reflect.construct) return !1;
          if (Reflect.construct.sham) return !1;
          if ("function" === typeof Proxy) return !0;
          try {
            return (
              Boolean.prototype.valueOf.call(
                Reflect.construct(Boolean, [], function () {})
              ),
              !0
            );
          } catch (t) {
            return !1;
          }
        })();
        return function () {
          var i,
            n = (0, s.Z)(t);
          if (e) {
            var o = (0, s.Z)(this).constructor;
            i = Reflect.construct(n, arguments, o);
          } else i = n.apply(this, arguments);
          return (0, c.Z)(this, i);
        };
      }
      var p = (function (t) {
        (0, a.Z)(i, t);
        var e = d(i);
        function i(t) {
          var o;
          return (
            (0, n.Z)(this, i),
            (o = e.call(this)),
            (0, l.Z)((0, r.Z)(o), "duration", void 0),
            (0, l.Z)((0, r.Z)(o), "value", 0),
            (o.duration = t),
            o
          );
        }
        return (
          (0, o.Z)(i, [
            {
              key: "play",
              value: function () {
                var t = this,
                  e =
                    arguments.length > 0 &&
                    void 0 !== arguments[0] &&
                    arguments[0],
                  i = performance.now(),
                  n = function n(r) {
                    var a = Math.min((r - i) / (1e3 * t.duration), 1);
                    (t.value = e ? 1 - a : a),
                      t.emit("change"),
                      a >= 1
                        ? t.emit("complete")
                        : (o = requestAnimationFrame(n));
                  },
                  o = requestAnimationFrame(n);
                return function () {
                  return cancelAnimationFrame(o);
                };
              },
            },
            {
              key: "forward",
              value: function () {
                return this.play();
              },
            },
            {
              key: "reverse",
              value: function () {
                return this.play(!0);
              },
            },
          ]),
          i
        );
      })(i.n(u)());
      function h(t) {
        var e = t.duration,
          i = void 0 === e ? 1 : e,
          n = t.onChange,
          o = void 0 === n ? function () {} : n,
          r = t.onComplete,
          a = void 0 === r ? function () {} : r,
          c = new p(i)
            .on("change", function () {
              o(c.value);
            })
            .on("complete", a);
        return c.forward();
      }
      function f() {
        var t =
          arguments.length > 0 && void 0 !== arguments[0]
            ? arguments[0]
            : function (t) {
                return t;
              };
        return function (e) {
          var i = t(e);
          if (i < 0.5) {
            var n = 2 * i;
            return (n * n) / 2;
          }
          var o = 1 - 2 * (i - 0.5);
          return 0.5 + 0.5 * (1 - o * o);
        };
      }
      function m(t, e) {
        var i =
          arguments.length > 2 && void 0 !== arguments[2]
            ? arguments[2]
            : function (t) {
                return t;
              };
        return function (n) {
          return t + (e - t) * i(n);
        };
      }
    },
    612: function (t, e, i) {
      i.d(e, {
        Q: function () {
          return tt;
        },
      });
      var n = i(67294),
        o = i(41128),
        r = i(33587),
        a = i(27715),
        c = i(26267),
        s = i(65313),
        l = i(73938),
        u = i(95541),
        d = i(70917),
        p = i(8503),
        h = i(48710),
        f = i(77340),
        m = i(10014),
        v = i(72462),
        g = i(86090),
        b = i(18714),
        x = i(32974),
        w = i(16835),
        y = i(11163),
        Z = i(85257),
        k = i(89434),
        _ = i(26184),
        T = i(35944);
      var C = {
          name: "1d1cd9q",
          styles:
            "position:relative;z-index:1;display:block;width:100%;height:auto;aspect-ratio:350/554;pointer-events:none",
        },
        I = {
          name: "1gtzfh0",
          styles:
            "margin-top:5px;font-size:14px;font-weight:400;line-height:19px",
        },
        S = {
          name: "1olrw96",
          styles:
            "font-family:var(--comic-font);font-size:20px;line-height:1.5;&:not(:lang(ja)){font-size:22px;font-weight:400;line-height:1.2;}",
        },
        E = { name: "3q4ecs", styles: "position:relative;z-index:0" };
      function j(t) {
        var e = t.className,
          i = t.style,
          n = t.active,
          o = void 0 !== n && n,
          r = t.comic,
          a = (0, p.bU)();
        return (0, T.BX)("div", {
          className: e,
          style: i,
          css: E,
          children: [
            (0, T.BX)("div", {
              css: (0, d.iv)(
                "position:absolute;right:0;bottom:calc(100% + 10px);left:0;z-index:1;padding:10px;font-size:20px;font-weight:bold;line-height:1.5em;color:white;background:black;opacity:",
                o ? "1" : "0",
                ";transition:0.25s opacity;@media ",
                h.r.media.preTablet,
                "{right:calc((100vw - 224px) / -2 + 24px);left:calc((100vw - 224px) / -2 + 24px);}",
                ""
              ),
              children: [
                (0, T.tZ)("div", {
                  css: S,
                  children:
                    "ja" === a
                      ? "\u5dfb\u30ce"
                          .concat(r.volume, " \u300c")
                          .concat(r.title, "\u300d")
                      : "".concat(r.title),
                }),
                (0, T.BX)("div", {
                  css: I,
                  children: [
                    L[a],
                    "fr" === a || "de" === a || "es" === a
                      ? "".concat(r.storyFrom, "-").concat(r.storyTo)
                      : "".concat(r.storyFrom, "~").concat(r.storyTo),
                  ],
                }),
              ],
            }),
            (0, T.tZ)("img", {
              src: "/comics/boruto_pop/boruto_pop_".concat(a, ".webp"),
              alt: P[a],
              width: "160",
              height: "160",
              css: (0, d.iv)(
                "position:absolute;top:-150px;right:0;left:0;margin:auto;visibility:",
                r.isBoruto1Initial ? "visible" : "hidden",
                ";opacity:",
                o ? 0 : 1,
                ";transition:0.25s opacity;",
                ""
              ),
            }),
            (0, T.tZ)(_._, {
              loadStyle: C,
              imgStyle: (0, d.iv)(
                "position:relative;z-index:1;display:block;width:100%;height:auto;pointer-events:none;border:3px solid black;@media ",
                h.r.media.preTablet,
                "{border:2px solid black;}",
                ""
              ),
              src: r.imgSrc,
              width: 350,
              height: 554,
              alt: r.title,
            }),
            (0, T.tZ)("div", {
              css: (0, d.iv)(
                "position:absolute;top:calc(100% + 20px);right:0;left:0;@media ",
                h.r.media.preTablet,
                "{right:calc((100vw - 224px) / -2 + 24px);left:calc((100vw - 224px) / -2 + 24px);}",
                ""
              ),
              children: (0, T.tZ)(b.f, {
                css: (0, d.iv)(
                  "width:100%;height:52px;font-size:26px;white-space:nowrap;pointer-events:",
                  o ? "auto" : "none",
                  ";opacity:",
                  o ? "1" : "0",
                  ";transition:0.25s opacity;&:not(:lang(ja)){font-size:34px;}@media ",
                  h.r.media.preTablet,
                  "{font-size:20px;&:not(:lang(ja)){font-size:26px;}&:lang(de){font-size:24px;}}",
                  ""
                ),
                href: "/comics/".concat(r.path),
                icon: "kunai",
                children: O[a],
              }),
            }),
          ],
        });
      }
      var L = {
          ja: "\u30ca\u30f3\u30d0\u30fc",
          en: "NO.",
          fr: "NO.",
          de: "NO.",
          es: "Cap.",
          it: "NO.",
        },
        P = {
          ja: "\u65b0\u4e16\u4ee3\u306e\u4f1d\u8aac\u304c\u4eca\u3001\u958b\u5e55!!",
          en: "The new generation\u2019s legend begins now!!",
          fr: "La nouvelle g\xe9n\xe9ration de l\xe9gendes d\xe9barque !",
          de: "Die Legende einer neuen Generation ist da!",
          es: "\xa1La leyenda de la nueva generaci\xf3n est\xe1 aqu\xed!",
          it: "La nuova generazione di ninja della foglia!",
        },
        O = {
          ja: "\u8a73\u3057\u304f\u306f\u3053\u3061\u3089",
          en: "MORE DETAILS",
          fr: "PLUS D\u2019INFOS",
          de: "DETAILS",
          es: "M\xc1S DETALLES",
          it: "DETTAGLI",
        };
      function B(t) {
        var e = t.children,
          i = t.onPan,
          o = void 0 === i ? function () {} : i,
          r = t.onSwipe,
          a = void 0 === r ? function () {} : r,
          c = n.useRef(null);
        return (
          n.useEffect(
            function () {
              if (null != c.current) {
                var t = c.current,
                  e = new DOMPoint(),
                  i = new DOMPoint(),
                  n = 0,
                  r = !1,
                  s = !1,
                  l = function (t) {
                    return new DOMPoint(t.x, t.y);
                  },
                  u = function (t) {
                    return l(
                      new DOMPoint(t.touches[0].clientX, t.touches[0].clientY)
                    );
                  },
                  d = function (t) {
                    return l(new DOMPoint(t.clientX, t.clientY));
                  },
                  p = function (t) {
                    (i = e = t), (n = performance.now()), (s = !1), (r = !1);
                  },
                  h = function (t) {
                    if (!s) {
                      var e = [t.x - i.x, t.y - i.y];
                      if (((i = t), !r)) {
                        if (
                          !(function (t, e) {
                            var i = Math.atan2(e, t);
                            return (
                              (i >= 0 && i <= Math.PI / 4) ||
                              (i >= (Math.PI / 4) * 3 && i <= Math.PI) ||
                              (i > -Math.PI && i < (-Math.PI / 4) * 3) ||
                              (i > -Math.PI / 4 && i < 0)
                            );
                          })(e[0], e[1])
                        )
                          return void (s = !0);
                        r = !0;
                      }
                      o((e[0] / 190) * -1);
                    }
                  },
                  f = function () {
                    if (!s) {
                      var t = i.x - e.x,
                        o = Math.abs(t),
                        r = performance.now() - n;
                      a(
                        (r < 200 && o > 10) || o / 190 > 0.5
                          ? t > 0
                            ? -1
                            : 1
                          : 0
                      );
                    }
                  },
                  m = function (t) {
                    p(u(t));
                  },
                  v = function (t) {
                    h(u(t)), !s && t.cancelable && t.preventDefault();
                  },
                  g = function () {
                    f();
                  },
                  b = !1,
                  x = function (t) {
                    (b = !0), p(d(t));
                  },
                  w = function (t) {
                    b && (s || t.preventDefault(), h(d(t)));
                  },
                  y = function () {
                    b && f(), (b = !1);
                  };
                return (
                  t.addEventListener("touchstart", m),
                  t.addEventListener("touchmove", v),
                  t.addEventListener("touchend", g),
                  t.addEventListener("mousedown", x),
                  document.addEventListener("mousemove", w),
                  document.addEventListener("mouseup", y),
                  function () {
                    t.removeEventListener("touchstart", m),
                      t.removeEventListener("touchmove", v),
                      t.removeEventListener("touchend", g),
                      t.removeEventListener("mousedown", x),
                      document.removeEventListener("mousemove", w),
                      document.removeEventListener("mouseup", y);
                  }
                );
              }
            },
            [c, o, a]
          ),
          n.cloneElement(e, { ref: c })
        );
      }
      var M = {
          name: "19hd29b",
          styles:
            "position:absolute;top:50%;display:flex;justify-content:space-between;width:calc(100% - 30px);margin:0 15px",
        },
        z = { name: "1naatx0", styles: "position:relative;margin:0 -15px" };
      function D(t) {
        var e = t.controller,
          i = t.onSnap,
          o = t.comics,
          r = n.useState(0),
          a = (0, w.Z)(r, 2),
          c = a[0],
          s = a[1],
          l = o.length,
          u = n.useCallback(
            function (t) {
              (e.page = Math.round(t)), s(t);
            },
            [e]
          ),
          p = n.useCallback(
            function (t) {
              return Math.max(0, Math.min(l - 1, t));
            },
            [l]
          ),
          f = 0 === c,
          m = c >= l - 1,
          v = (0, d.iv)(
            "z-index:10;display:inline-flex;align-items:center;justify-content:center;width:48px;height:48px;background-color:black;border:1px solid white;stroke:white;@media ",
            h.r.media.preTablet,
            "{display:none;}&:disabled{opacity:0;}&:not(:disabled){cursor:pointer;}",
            ""
          ),
          g = n.useCallback(
            function (t) {
              var n = p(Math.round(t)),
                o = (0, k.if)(e.page, n, (0, k.mD)());
              (0, k.jt)({
                duration: 0.5,
                onChange: function (t) {
                  var e = o(t);
                  u(e);
                },
                onComplete: function () {
                  return i(n);
                },
              });
            },
            [e, p, u, i]
          ),
          b = n.useCallback(
            function (t) {
              u(t), i(t);
            },
            [u, i]
          ),
          x = n.useCallback(
            function (t) {
              s(function (i) {
                var n = i + t;
                return (e.page = n), n;
              });
            },
            [e]
          );
        n.useEffect(
          function () {
            var t = function (t) {
              var e = t.page;
              t.animated ? g(e) : b(e);
            };
            return (
              e.cue.on("change", t),
              function () {
                e.cue.off("change", t);
              }
            );
          },
          [e, u, g, b]
        );
        var y = n.useCallback(
            function (t) {
              return x(t);
            },
            [x]
          ),
          Z = n.useCallback(
            function (t) {
              g(e.page);
            },
            [e, g]
          );
        return (0, T.tZ)(B, {
          onPan: y,
          onSwipe: Z,
          children: (0, T.BX)("div", {
            css: z,
            children: [
              (0, T.BX)("div", {
                css: M,
                children: [
                  (0, T.BX)("button", {
                    onClick: function () {
                      g(c - 1);
                    },
                    css: [v, "", ""],
                    disabled: f,
                    children: [
                      (0, T.tZ)("svg", {
                        width: "13",
                        height: "24",
                        strokeWidth: "2",
                        fill: "none",
                        css: (0, d.iv)(
                          "display:block;@media ",
                          h.r.media.preTablet,
                          "{display:none;}",
                          ""
                        ),
                        children: (0, T.tZ)("polyline", {
                          points: "12 1, 1 12, 12 23",
                        }),
                      }),
                      (0, T.tZ)("svg", {
                        width: "11",
                        height: "20",
                        strokeWidth: "2",
                        fill: "none",
                        css: (0, d.iv)(
                          "display:none;@media ",
                          h.r.media.preTablet,
                          "{display:block;}",
                          ""
                        ),
                        children: (0, T.tZ)("polyline", {
                          points: "10 1, 1 10, 10 19",
                        }),
                      }),
                    ],
                  }),
                  (0, T.BX)("button", {
                    onClick: function () {
                      g(c + 1);
                    },
                    css: [v, "", ""],
                    disabled: m,
                    children: [
                      (0, T.tZ)("svg", {
                        width: "13",
                        height: "24",
                        strokeWidth: "2",
                        fill: "none",
                        css: (0, d.iv)(
                          "display:block;@media ",
                          h.r.media.preTablet,
                          "{display:none;}",
                          ""
                        ),
                        children: (0, T.tZ)("polyline", {
                          points: "1 1, 12 12, 1 23",
                        }),
                      }),
                      (0, T.tZ)("svg", {
                        width: "11",
                        height: "20",
                        strokeWidth: "2",
                        fill: "none",
                        css: (0, d.iv)(
                          "display:none;@media ",
                          h.r.media.preTablet,
                          "{display:block;}",
                          ""
                        ),
                        children: (0, T.tZ)("polyline", {
                          points: "1 1, 10 10, 1 19",
                        }),
                      }),
                    ],
                  }),
                ],
              }),
              (0, T.tZ)("div", {
                css: (0, d.iv)(
                  "height:550px;padding-left:calc((100vw - 350px) / 2);@media ",
                  h.r.media.preTablet,
                  "{height:350px;padding-left:calc((100vw - 224px) / 2);}",
                  ""
                ),
                children: (0, T.tZ)("div", {
                  css: (0, d.iv)(
                    "display:flex;align-items:center;width:",
                    190 * (l - 1) + 380,
                    "px;height:100%;--page-unit:calc((100% - 190px) / ",
                    -l,
                    ");@media ",
                    h.r.media.preTablet,
                    "{width:",
                    190 * (l - 1) + 254,
                    "px;--page-unit:calc((100% - (254px - 190px)) / ",
                    -l,
                    ");}",
                    ""
                  ),
                  style: {
                    transform: "translateX(calc(".concat(
                      c,
                      " * var(--page-unit)))"
                    ),
                  },
                  children: o.map(function (t, e) {
                    var i = Math.min(Math.abs(e - c), 1),
                      n = c === e;
                    return (0,
                    T.tZ)(j, { comic: t, active: n, css: (0, d.iv)("position:relative;margin:0 15px;--scaled-width:350px;@media ", h.r.media.preTablet, "{--scaled-width:224px;}", ""), style: { width: "calc(160px + (var(--scaled-width) - 160px) * (1 - ".concat(i, "))") } }, e);
                  }),
                }),
              }),
            ],
          }),
        });
      }
      var N = i(59499),
        R = i(94398);
      function A(t, e) {
        var i = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(t);
          e &&
            (n = n.filter(function (e) {
              return Object.getOwnPropertyDescriptor(t, e).enumerable;
            })),
            i.push.apply(i, n);
        }
        return i;
      }
      function X(t) {
        for (var e = 1; e < arguments.length; e++) {
          var i = null != arguments[e] ? arguments[e] : {};
          e % 2
            ? A(Object(i), !0).forEach(function (e) {
                (0, N.Z)(t, e, i[e]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(i))
            : A(Object(i)).forEach(function (e) {
                Object.defineProperty(
                  t,
                  e,
                  Object.getOwnPropertyDescriptor(i, e)
                );
              });
        }
        return t;
      }
      var U = {
        name: "1gyrw59",
        styles:
          "position:absolute;top:20px;left:calc(var(--series-indicator-width) / -2);width:var(--series-indicator-width);height:auto;cursor:pointer",
      };
      function W(t) {
        var e = t.comics,
          i = t.volume,
          n = t.onChange,
          o = t.onStop,
          r = t.className,
          a = e,
          c = e[i],
          s = e.findIndex(function (t) {
            return t.isBoruto1Initial;
          }),
          l = e.findIndex(function (t) {
            return t.isBoruto2Initial;
          }),
          u = (0, T.tZ)(R.Range, {
            step: 1,
            min: 0,
            max: Math.max(a.length - 1, 1),
            values: [i],
            onChange: function (t) {
              return n(t[0]);
            },
            onFinalChange: function (t) {
              return o(t[0]);
            },
            renderTrack: function (t) {
              var e = t.props,
                n = t.children;
              return (0, T.BX)(
                "div",
                X(
                  X({}, e),
                  {},
                  {
                    style: X(
                      X({}, e.style),
                      {},
                      { position: "relative", height: "6px", width: "100%" }
                    ),
                    children: [
                      (0, T.tZ)("div", {
                        css: (0, d.iv)(
                          "position:absolute;width:calc(",
                          (i / (a.length - 1)) * 100,
                          "%);height:6px;background-color:#000;",
                          ""
                        ),
                      }),
                      (0, T.tZ)("div", {
                        css: (0, d.iv)(
                          "position:absolute;left:calc(",
                          (i / (a.length - 1)) * 100,
                          "%);width:calc(",
                          100 - (i / (a.length - 1)) * 100,
                          "%);height:6px;background-color:#b1b1b1;",
                          ""
                        ),
                      }),
                      n,
                    ],
                  }
                )
              );
            },
            renderThumb: function (t) {
              var e = t.props;
              return (0, T.tZ)(
                q,
                { props: e, thumbRef: e.ref, comics: c },
                "test"
              );
            },
          });
        return (0, T.BX)(f.W, {
          relative: !0,
          className: r,
          css: (0, d.iv)(
            "--series-indicator-width:76px;@media ",
            h.r.media.preTablet,
            "{padding:0 44px;--series-indicator-width:56px;}",
            ""
          ),
          children: [
            (0, T.tZ)("div", {
              onClick: function () {
                n(0), o(0);
              },
              children: (0, T.tZ)("img", {
                css: U,
                src: "/comics/naruto_balloon.webp",
                width: "76",
                height: "93",
                alt: "",
              }),
            }),
            -1 !== s &&
              (0, T.tZ)("div", {
                onClick: function () {
                  n(s), o(s);
                },
                children: (0, T.tZ)("img", {
                  css: (0, d.iv)(
                    "position:absolute;top:20px;left:calc(",
                    (s / (e.length - 1)) * 100,
                    "% - var(--series-indicator-width) / 2);cursor:pointer;@media ",
                    h.r.media.preTablet,
                    "{width:var(--series-indicator-width);height:68px;}",
                    ""
                  ),
                  src: "/comics/boruto_balloon.webp",
                  width: "76",
                  height: "93",
                  alt: "",
                }),
              }),
            -1 !== l &&
              (0, T.tZ)("div", {
                onClick: function () {
                  n(l), o(l);
                },
                children: (0, T.tZ)("img", {
                  css: (0, d.iv)(
                    "position:absolute;top:20px;left:calc(",
                    (l / (e.length - 1)) * 100,
                    "% - var(--series-indicator-width) / 2);cursor:pointer;@media ",
                    h.r.media.preTablet,
                    "{width:var(--series-indicator-width);height:68px;}",
                    ""
                  ),
                  src: "/comics/boruto_balloon2.webp",
                  width: "76",
                  height: "93",
                  alt: "",
                }),
              }),
            u,
          ],
        });
      }
      var q = function (t) {
          var e = t.props,
            i = t.thumbRef,
            o = t.comics,
            r = (0, p.bU)(),
            a = n.useState(!1),
            c = (0, w.Z)(a, 2),
            s = c[0],
            l = c[1],
            u = n.useState(!1),
            d = (0, w.Z)(u, 2),
            h = d[0],
            f = d[1],
            m = "ja" === r ? "\u5dfb\u30ce" : "",
            v = n.useCallback(
              function (t) {
                i.current && i.current.setPointerCapture(t.pointerId), l(!0);
              },
              [i]
            ),
            g = n.useCallback(
              function (t) {
                i.current && i.current.releasePointerCapture(t.pointerId),
                  l(!1);
              },
              [i]
            ),
            b = n.useCallback(
              function (t) {
                i.current && i.current.setPointerCapture(t.pointerId), f(!0);
              },
              [i]
            ),
            x = n.useCallback(
              function (t) {
                i.current && i.current.releasePointerCapture(t.pointerId),
                  f(!1);
              },
              [i]
            );
          return (0, T.tZ)(
            "div",
            X(
              X({}, e),
              {},
              {
                css: F.thumbWrapper,
                onPointerEnter: v,
                onPointerLeave: g,
                onPointerDown: b,
                onPointerUp: x,
                children:
                  (s || h) &&
                  (0, T.tZ)("div", {
                    css: F.thumbPopup,
                    children: "".concat(m).concat(o.volume),
                  }),
              }
            )
          );
        },
        F = {
          carouselBox: { name: "1d3w5wq", styles: "width:100%" },
          comicsBox: (0, d.iv)(
            "position:relative;width:350px;margin:0 auto;@media ",
            h.r.media.preTablet,
            "{width:226px;}",
            ""
          ),
          comics: { name: "vpafqz", styles: "object-fit:covert" },
          comicsCaption: (0, d.iv)(
            "position:absolute;bottom:calc(100% + 6px);width:100%;padding:0 10px 10px;color:#fff;background-color:#000;@media ",
            h.r.media.preTablet,
            "{max-width:227px;padding-bottom:8px;}",
            ""
          ),
          comicsTitle: (0, d.iv)(
            "font-family:'fot-udkakugoc80-pro';font-size:20px;line-height:31px;@media ",
            h.r.media.preTablet,
            "{font-size:18px;line-height:31px;}",
            ""
          ),
          storyNo: (0, d.iv)(
            "font-size:14px;line-height:19px;@media ",
            h.r.media.preTablet,
            "{font-size:10px;}",
            ""
          ),
          checkStoryBtnWrapper: (0, d.iv)(
            "max-width:350px;margin:10px auto 0;@media ",
            h.r.media.preTablet,
            "{max-width:269px;margin-top:27px;}",
            ""
          ),
          detailBtnWrapper: (0, d.iv)(
            "max-width:350px;margin:10px auto 0;@media ",
            h.r.media.preTablet,
            "{max-width:269px;margin-top:20px;}",
            ""
          ),
          thumbPopup: {
            name: "14jf74n",
            styles:
              "position:absolute;top:-24px;left:50%;display:flex;align-items:center;justify-content:center;width:57px;height:28px;font-family:'fot-udkakugoc80-pro';font-size:16px;color:#fff;pointer-events:none;background-color:#000;transform:translate(-50%, -50%)",
          },
          thumbWrapper: (0, d.iv)(
            "position:relative;width:35px;height:35px;background:url('/comics/handle.webp');background-position:center;background-size:cover;outline-width:0;@media ",
            h.r.media.preTablet,
            "{width:32px;height:32px;}",
            ""
          ),
        };
      var H = {
        name: "1j746ex",
        styles: "margin-top:calc(20px + 54px + 54px)",
      };
      function V(t) {
        var e = t.comics,
          i = t.onChange,
          o = n.useState(function () {
            return new Z.W();
          }),
          r = (0, w.Z)(o, 1)[0],
          a = n.useCallback(
            function (t) {
              u(t), i(e[t]);
            },
            [e, i]
          ),
          c = n.useState(0),
          s = (0, w.Z)(c, 2),
          l = s[0],
          u = s[1],
          d = (0, y.useRouter)();
        return (
          n.useEffect(
            function () {
              d.asPath.includes("#boruto1")
                ? r.jumpTo(
                    e.findIndex(function (t) {
                      return t.isBoruto1Initial;
                    })
                  )
                : d.asPath.includes("#boruto2")
                ? r.jumpTo(
                    e.findIndex(function (t) {
                      return t.isBoruto2Initial;
                    })
                  )
                : r.jumpTo(0);
            },
            [e, r, d]
          ),
          (0, T.BX)(T.HY, {
            children: [
              (0, T.tZ)(D, { controller: r, onSnap: a, comics: e }),
              (0, T.tZ)(W, {
                css: H,
                comics: e,
                volume: l,
                onChange: function (t) {
                  u(t);
                },
                onStop: function (t) {
                  r.to(t);
                },
              }),
            ],
          })
        );
      }
      var Y = { name: "1d3w5wq", styles: "width:100%" },
        G = { name: "pw7jst", styles: "position:relative;width:100%" },
        Q = function (t) {
          var e = t.comicsList,
            i = (t.newComicsAdData, (0, p.bU)()),
            o = (0, n.useState)("naruto"),
            r = o[0],
            a = o[1],
            c =
              "ja" === i
                ? "/common/bg_naruto_jp.webp"
                : "/common/bg_naruto_en.webp",
            s =
              "ja" === i
                ? "/common/bg_boruto_jp.webp"
                : "/common/bg_boruto_en.webp",
            l =
              "ja" === i
                ? "/common/bg_boruto_tbv_jp.webp"
                : "/common/bg_boruto_en.webp",
            u = function (t) {
              switch (t) {
                case "naruto":
                  return c;
                case "boruto":
                  return s;
                case "boruto_two_blue_vortex":
                  return l;
              }
            },
            w = (0, n.useCallback)(function (t) {
              t && a(t.series);
            }, []);
          return (0, T.BX)("main", {
            css: J.main,
            children: [
              (0, T.tZ)("div", {
                css: G,
                children: (0, T.tZ)(m.E, {
                  pcImgSrc: "/comics/key_visual_pc.webp",
                  spImgSrc: "/comics/key_visual_sp.webp",
                  position: "center",
                  isShort: !0,
                }),
              }),
              (0, T.tZ)("div", {
                css: (0, d.iv)(
                  "position:absolute;top:163px;width:100%;@media ",
                  h.r.media.preTablet,
                  "{top:177px;}",
                  ""
                ),
                children: (0, T.tZ)(f.W, {
                  children: (0, T.tZ)(x.V, {
                    title: "COMICS",
                    ruby: "\u30b3\u30df\u30c3\u30af\u30b9",
                    slug: "comics",
                    h1: "COMICS",
                    isSmall: !0,
                  }),
                }),
              }),
              (0, T.BX)("div", {
                css: (0, d.iv)(
                  "position:relative;display:flex;flex-direction:column;align-items:center;width:100%;padding:60px 0 100px;background:url(",
                  u(r),
                  ") top/1280px;@media ",
                  h.r.media.preTablet,
                  "{padding:142px 0 57px;}",
                  ""
                ),
                children: [
                  (0, T.tZ)("div", {
                    css: (0, d.iv)(
                      "position:absolute;top:0;width:100%;height:100%;background:url(",
                      u(r),
                      ") top/1280px;opacity:",
                      "naruto" !== r ? 0 : 1,
                      ";transition:0.25s opacity;",
                      ""
                    ),
                  }),
                  (0, T.tZ)("div", {
                    css: Y,
                    children: e && (0, T.tZ)(V, { comics: e, onChange: w }),
                  }),
                  (0, T.tZ)(b.f, {
                    css: (0, d.iv)(
                      "width:730px;height:100px;margin-top:141px;font-size:32px;text-align:center;border:4px solid #000;&:not(:lang(ja)){font-size:46px;}@media ",
                      h.r.media.preTablet,
                      "{width:269px;height:46px;margin-top:110px;font-size:20px;text-align:left;border:2px solid #000;&:lang(en),&:lang(de){font-size:26px;}&:lang(fr),&:lang(it){font-size:24px;}&:lang(de){height:auto;}&:lang(es){font-size:21px;}}",
                      ""
                    ),
                    href: "/books",
                    icon: "kunai",
                    children: K[i],
                  }),
                ],
              }),
              (0, T.tZ)(v.E, {
                topicsComponent: (0, T.tZ)(g.E, { slug: "news-comics" }),
                bgImgSrc: "/common/news_content_bg_boruto.webp",
              }),
            ],
          });
        },
        J = {
          main: {
            name: "q4b2tk",
            styles:
              "position:relative;z-index:0;display:flex;flex-direction:column;overflow-x:hidden",
          },
          bg: {
            name: "1ihvugr",
            styles: "position:absolute;width:100%;height:200%",
          },
        },
        K = {
          ja: "\u95a2\u9023\u66f8\u7c4d\u60c5\u5831\u306f\u3053\u3061\u3089",
          en: "RELATED PUBLICATIONS",
          fr: "PUBLICATIONS LI\xc9ES",
          de: "\xc4HNLICHE VER\xd6FFENTLICHUNGEN",
          es: "PUBLICACIONES RELACIONADAS",
          it: "PUBBLICAZIONI CORRELATE",
        },
        $ = function (t) {
          var e = t.comicsList,
            i = t.newComicsAdData;
          return (0, T.tZ)(T.HY, {
            children: (0, T.BX)(u.DY, {
              children: [
                (0, T.tZ)(l.h, {}),
                (0, T.tZ)(Q, { comicsList: e, newComicsAdData: i }),
                (0, T.tZ)(s.T, {}),
              ],
            }),
          });
        },
        tt = function (t) {
          var e,
            i,
            s,
            l,
            u,
            d,
            p = t.siteInfomationList,
            h = (0, o.Vd)("comicList", {
              sort: "asc",
              data: (0, a.k8)({
                categories: ["\u30b3\u30df\u30c3\u30af"],
                comic_type: "comic_details",
                series: ["naruto"],
              }),
            }),
            f = h.result,
            m = h.pending,
            v = (0, o.Vd)("comicList", {
              sort: "asc",
              data: (0, a.k8)({
                categories: ["\u30b3\u30df\u30c3\u30af"],
                comic_type: "comic_details",
                series: ["boruto"],
              }),
            }),
            g = v.result,
            b = v.pending,
            x = (0, o.Vd)("comicList", {
              sort: "asc",
              data: (0, a.k8)({
                categories: ["\u30b3\u30df\u30c3\u30af"],
                comic_type: "comic_details",
                series: ["boruto_two_blue_vortex"],
              }),
            }),
            w = x.result,
            y = x.pending,
            Z =
              m || b || y
                ? []
                : null !==
                    (e =
                      null === f ||
                      void 0 === f ||
                      null === (i = f.data) ||
                      void 0 === i
                        ? void 0
                        : i.comic_list) && void 0 !== e
                ? e
                : [],
            k =
              m || b || y
                ? []
                : null !==
                    (s =
                      null === g ||
                      void 0 === g ||
                      null === (l = g.data) ||
                      void 0 === l
                        ? void 0
                        : l.comic_list) && void 0 !== s
                ? s
                : [],
            _ =
              m || b || y
                ? []
                : null !==
                    (u =
                      null === w ||
                      void 0 === w ||
                      null === (d = w.data) ||
                      void 0 === d
                        ? void 0
                        : d.comic_list) && void 0 !== u
                ? u
                : [],
            C = Z.concat(k).concat(_),
            I = (0, r.Z)(C),
            S = p
              ? p.sort(function (t, e) {
                  return e.startdate - t.startdate;
                })[0]
              : void 0,
            E = (0, n.useMemo)(
              function () {
                try {
                  return I.map(function (t) {
                    var e = t.series ? t.series[0].code : "naruto";
                    return {
                      id: t._id,
                      path: t.path,
                      imgSrc: (0, o.hT)(t.thumbnail),
                      title: t.title,
                      volume: t.comic.comic_no,
                      storyFrom: t.comic.story_from,
                      storyTo: t.comic.story_to,
                      storySummary: t.title,
                      series: e,
                      isBoruto1Initial:
                        "boruto" === e && 1 === t.comic.comic_no,
                      isBoruto2Initial:
                        "boruto_two_blue_vortex" === e &&
                        1 === t.comic.comic_no,
                    };
                  });
                } catch (t) {
                  return;
                }
              },
              [I]
            ),
            j = (0, n.useMemo)(
              function () {
                try {
                  if (!S) return;
                  var t = S.destination,
                    e = null;
                  switch (t) {
                    case "comic_path":
                      e = S.comic_path;
                      break;
                    case "external_url":
                      e = S.external_url;
                  }
                  return S
                    ? {
                        title: S.title,
                        subTitle: S.subtitle,
                        summary: S.text,
                        imgUrl: (0, o.hT)(S.thumbnail),
                        href: e,
                        isExternal: "external_url" === t,
                      }
                    : void 0;
                } catch (i) {
                  return;
                }
              },
              [S]
            );
          return (0, T.tZ)(c.e, {
            category: "comics",
            children: (0, T.tZ)($, { comicsList: E, newComicsAdData: j }),
          });
        };
    },
    26267: function (t, e, i) {
      i.d(e, {
        e: function () {
          return p;
        },
      });
      var n = i(67294),
        o = i(41128),
        r = i(33587),
        a = i(8503),
        c = i(80072),
        s = i(11047),
        l = i(27715),
        u = i(10255),
        d = i(35944),
        p = function (t) {
          var e,
            i = t.category,
            p = t.children,
            h = (0, a.bU)(),
            f = (0, o.Vd)("articleList", {
              start: 0,
              limit: 16,
              data: (0, l.k8)({ category: "NEWS", subcategory: i }),
            }).result,
            m = (0, r.Z)(
              null !==
                (e =
                  null === f || void 0 === f ? void 0 : f.data.article_list) &&
                void 0 !== e
                ? e
                : []
            ).slice(0, 8),
            v = (0, n.useMemo)(
              function () {
                return m.map(function (t) {
                  var e,
                    i,
                    n,
                    r =
                      null !==
                        (e =
                          null === (i = t.categories) ||
                          void 0 === i ||
                          null === (n = i.subcategory) ||
                          void 0 === n
                            ? void 0
                            : n.map(function (t) {
                                return t.name;
                              })) && void 0 !== e
                        ? e
                        : [];
                  return {
                    id: t._id,
                    title: t.title,
                    categories: r,
                    imgUrl: (0, o.hT)(t.thumbnail),
                    date: (0, s.Am)(t.dspdate, h),
                    path: t.path,
                    isNew: (0, s.e_)(t.startdate, c.E),
                    isPickedUp: (0, s.e_)(t.startdate, c.e) && "1" === t.pickup,
                  };
                });
              },
              [m, h]
            );
          return (0, d.tZ)(d.HY, {
            children: (0, d.tZ)(u.S, { articles: v, children: p }),
          });
        };
    },
    10014: function (t, e, i) {
      i.d(e, {
        E: function () {
          return c;
        },
      });
      var n = i(70917),
        o = (i(67294), i(48710)),
        r = i(35944);
      var a = { name: "1d3w5wq", styles: "width:100%" },
        c = function (t) {
          var e = t.pcImgSrc,
            i = t.spImgSrc,
            c = t.position,
            s = t.spPosition,
            l = t.isShort ? 300 : 575;
          return (0, r.tZ)("div", {
            css: a,
            children: (0, r.BX)("picture", {
              children: [
                (0, r.tZ)("source", {
                  srcSet: i,
                  width: 375,
                  height: 250,
                  media: o.r.media.preTablet,
                }),
                (0, r.tZ)("img", {
                  css: (0, n.iv)(
                    "display:block;width:100%;object-fit:cover;object-position:",
                    c,
                    ";@media ",
                    o.r.media.preTablet,
                    "{object-position:",
                    s,
                    ";height:250px;}",
                    ""
                  ),
                  src: e,
                  width: 1280,
                  height: l,
                  alt: "",
                }),
              ],
            }),
          });
        };
    },
    32974: function (t, e, i) {
      i.d(e, {
        V: function () {
          return c;
        },
      });
      var n = i(70917),
        o = i(48710),
        r = i(36443),
        a = i(35944);
      function c(t) {
        var e = t.className,
          i = t.slug,
          c = (t.title, t.ruby, t.run),
          s = void 0 === c || c,
          l = t.scale,
          u = void 0 === l ? "1" : l,
          d = t.h1,
          p = t.long,
          h = void 0 !== p && p,
          f = t.isTwoLines,
          m = void 0 !== f && f,
          v = t.isSmall,
          g = void 0 !== v && v,
          b = "2/3" === u ? 2 / 3 : 1;
        return (0, a.BX)(a.HY, {
          children: [
            d && (0, a.tZ)("h1", { className: "visually-hidden", children: d }),
            (0, a.tZ)(r._, {
              className: e,
              slug: i,
              run: s,
              height: h ? 80 : 80 * b,
              isTwoLine: m,
              isSmall: g,
              css: (0, n.iv)(
                "@media ",
                o.r.media.preTablet,
                "{--brush-height:",
                m ? 80 : 40,
                "px;}",
                ""
              ),
            }),
          ],
        });
      }
    },
    85257: function (t, e, i) {
      i.d(e, {
        W: function () {
          return m;
        },
      });
      var n = i(92777),
        o = i(82262),
        r = i(10748),
        a = i(45959),
        c = i(63553),
        s = i(37247),
        l = i(59499),
        u = i(25293),
        d = i.n(u);
      function p(t) {
        var e = (function () {
          if ("undefined" === typeof Reflect || !Reflect.construct) return !1;
          if (Reflect.construct.sham) return !1;
          if ("function" === typeof Proxy) return !0;
          try {
            return (
              Boolean.prototype.valueOf.call(
                Reflect.construct(Boolean, [], function () {})
              ),
              !0
            );
          } catch (t) {
            return !1;
          }
        })();
        return function () {
          var i,
            n = (0, s.Z)(t);
          if (e) {
            var o = (0, s.Z)(this).constructor;
            i = Reflect.construct(n, arguments, o);
          } else i = n.apply(this, arguments);
          return (0, c.Z)(this, i);
        };
      }
      var h = (function (t) {
        (0, a.Z)(i, t);
        var e = p(i);
        function i() {
          return (0, n.Z)(this, i), e.apply(this, arguments);
        }
        return (
          (0, o.Z)(i, [
            {
              key: "add",
              value: function (t, e) {
                this.emit("change", { page: t, animated: e });
              },
            },
          ]),
          i
        );
      })(d());
      function f(t) {
        var e = (function () {
          if ("undefined" === typeof Reflect || !Reflect.construct) return !1;
          if (Reflect.construct.sham) return !1;
          if ("function" === typeof Proxy) return !0;
          try {
            return (
              Boolean.prototype.valueOf.call(
                Reflect.construct(Boolean, [], function () {})
              ),
              !0
            );
          } catch (t) {
            return !1;
          }
        })();
        return function () {
          var i,
            n = (0, s.Z)(t);
          if (e) {
            var o = (0, s.Z)(this).constructor;
            i = Reflect.construct(n, arguments, o);
          } else i = n.apply(this, arguments);
          return (0, c.Z)(this, i);
        };
      }
      var m = (function (t) {
        (0, a.Z)(i, t);
        var e = f(i);
        function i() {
          var t;
          (0, n.Z)(this, i);
          for (var o = arguments.length, a = new Array(o), c = 0; c < o; c++)
            a[c] = arguments[c];
          return (
            (t = e.call.apply(e, [this].concat(a))),
            (0, l.Z)((0, r.Z)(t), "page", 0),
            (0, l.Z)((0, r.Z)(t), "cue", new h()),
            t
          );
        }
        return (
          (0, o.Z)(i, [
            {
              key: "jumpTo",
              value: function (t) {
                Math.round(t) === t && this.cue.add(Math.round(t), !1);
              },
            },
            {
              key: "to",
              value: function (t) {
                Math.round(t) === t && this.cue.add(Math.round(t), !0);
              },
            },
            {
              key: "next",
              value: function () {
                this.to(this.page + 1);
              },
            },
            {
              key: "prev",
              value: function () {
                this.to(this.page - 1);
              },
            },
          ]),
          i
        );
      })(d());
    },
  },
]);
