"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [6357],
  {
    2035: function (e, n, i) {
      function t(e, n) {
        for (var i = [], t = e; t < n; t++) i.push(t);
        return i;
      }
      i.d(n, {
        w: function () {
          return t;
        },
      });
    },
    49064: function (e, n, i) {
      i.d(n, {
        t: function () {
          return m;
        },
      });
      var t = i(16835),
        a = i(67294),
        r = i(89434),
        o = i(2035),
        s = i(85257),
        l = i(94693),
        c = i(35944);
      var d = {
          name: "1obhh61",
          styles: "display:flex;justify-content:center;height:100%",
        },
        p = { name: "13udsys", styles: "height:100%" };
      function u(e) {
        var n = e.children,
          i = e.controller,
          s = e.screen,
          u = e.viewport,
          m = e.onSnap,
          h = a.useState(0),
          f = (0, t.Z)(h, 2),
          g = f[0],
          v = f[1],
          b = a.useState(0),
          x = (0, t.Z)(b, 2),
          y = x[0],
          w = x[1],
          A = a.useState(0),
          T = (0, t.Z)(A, 2),
          E = T[0],
          z = T[1],
          N = a.useCallback(function (e) {
            w(e),
              z(function (e) {
                return e + 1;
              });
          }, []),
          R = a.useCallback(
            function (e) {
              (i.page = e), v(e), i.emit("change");
            },
            [i]
          );
        a.useEffect(
          function () {
            var e = function (e) {
              var n = e.animated,
                i = e.page;
              (n ? N : R)(i);
            };
            return (
              i.cue.on("change", e),
              function () {
                i.off("change", e);
              }
            );
          },
          [i, N, R]
        ),
          a.useEffect(
            function () {
              if (i.page !== y) {
                var e = (0, r.if)(i.page, y, (0, r.mD)());
                return (0, r.jt)({
                  duration: 0.5,
                  onChange: function (n) {
                    var i = e(n);
                    R(i);
                  },
                  onComplete: function () {
                    m(i.page);
                  },
                });
              }
            },
            [i, y, E, R, m]
          );
        var I =
            (function () {
              var e = Math.ceil(s / u);
              return e % 2 === 0 ? e + 1 : e;
            })() + 2,
          O = Math.floor(I / 2),
          Z = Math.floor(g),
          j = a.useMemo(
            function () {
              return (0, o.w)(0, I).map(function (e) {
                return e - O + Z;
              });
            },
            [I, O, Z]
          ),
          k = n.length,
          S = a.useCallback(
            function (e) {
              var n = e % k;
              return n < 0 ? k + n : n;
            },
            [k]
          ),
          U = a.useMemo(
            function () {
              return j.map(function (e) {
                return (0,
                c.tZ)("div", { style: { width: u }, children: a.cloneElement(n[S(e)]) }, e);
              });
            },
            [n, S, j, u]
          ),
          M = a.useCallback(
            function (e) {
              return R(g + e);
            },
            [g, R]
          ),
          B = a.useCallback(
            function (e) {
              return N(y + e);
            },
            [y, N]
          );
        return (0, c.tZ)(l.t, {
          viewport: u,
          onPan: M,
          onSwipe: B,
          children: (0, c.tZ)("div", {
            css: p,
            children: (0, c.tZ)("div", {
              css: d,
              style: {
                transform: "translateX(".concat(-1 * (g - Z) * u, "px)"),
              },
              children: U,
            }),
          }),
        });
      }
      function m(e) {
        var n = e.viewport,
          i = e.children,
          r = e.controller,
          o = e.onSnap,
          l = void 0 === o ? function () {} : o,
          d = a.useState(function () {
            return new s.W();
          }),
          p = (0, t.Z)(d, 1)[0],
          m = a.useState(0),
          h = (0, t.Z)(m, 2),
          f = h[0],
          g = h[1];
        if (
          (a.useEffect(function () {
            var e = function () {
              g(window.innerWidth);
            };
            window.addEventListener("resize", e), e();
          }, []),
          0 === f)
        )
          return (0, c.tZ)(a.Fragment, {});
        var v = null !== n && void 0 !== n ? n : f;
        return (0, c.tZ)(u, {
          controller: null !== r && void 0 !== r ? r : p,
          screen: f,
          viewport: v,
          onSnap: l,
          children: i,
        });
      }
    },
    2090: function (e, n, i) {
      i.d(n, {
        CK: function () {
          return l;
        },
        Py: function () {
          return s;
        },
      });
      var t = i(16835);
      function a(e) {
        var n = parseInt(e.slice(1), 16);
        return n <= 16777215 ? (n << 8) | 255 : n;
      }
      function r(e) {
        return "00".concat(e.toString(16)).slice(-2);
      }
      function o(e) {
        return [(e >> 24) & 255, (e >> 16) & 255, (e >> 8) & 255, 255 & e];
      }
      function s(e, n, i) {
        var s,
          l = o(a(e)),
          c = o(a(n)).map(function (e, n) {
            return l[n] + (e - l[n]) * i;
          });
        return (function (e) {
          var n = o(e),
            i = (0, t.Z)(n, 3),
            a = i[0],
            s = i[1],
            l = i[2];
          return "#".concat(r(a)).concat(r(s)).concat(r(l));
        })(((s = c)[0] << 24) | (s[1] << 16) | (s[2] << 8) | s[3]);
      }
      function l(e, n) {
        return (function (e, n) {
          return "".concat(e).concat(r(n));
        })(e, Math.floor(255 * n));
      }
    },
    46357: function (e, n, i) {
      i.d(n, {
        u: function () {
          return Ce;
        },
      });
      var t = i(65313),
        a = i(73938),
        r = i(95541),
        o = i(70917),
        s = i(67294),
        l = i(8503),
        c = i(48710),
        d = i(17484),
        p = i(77340),
        u = i(18714),
        m = i(52431),
        h = i(89434),
        f = i(2035),
        g = i(86513),
        v = i(49064),
        b = i(2090),
        x = i(35944);
      var y = {
          name: "yw05y1",
          styles: "display:block;width:auto;height:100%;margin:0 5px",
        },
        w = { name: "1xwnaty", styles: "margin-top:35px" },
        A = function () {
          return (0, x.tZ)("div", {
            css: w,
            children: (0, x.tZ)(R, {
              children: [
                "/special/20th/carousel_1.webp",
                "/special/20th/carousel_2.webp",
                "/special/20th/carousel_3.webp",
                "/special/20th/carousel_4.webp",
              ].map(function (e, n) {
                return (0, x.tZ)("img", { css: y, src: e, alt: "" }, n);
              }),
            }),
          });
        },
        T = { name: "mf118p", styles: "width:20px;height:20px;cursor:pointer" };
      function E(e) {
        var n = e.active,
          i = void 0 !== n && n,
          t = e.time,
          a = void 0 === t ? 0 : t,
          r = e.distance,
          o = void 0 === r ? 1 : r,
          l = e.onClick,
          d = void 0 === l ? function () {} : l,
          p = (0, s.useRef)(null),
          u = 0 === o ? c.r.color.primary : "#000",
          m =
            0 === o || 1 === o
              ? c.r.color.primary
              : (0, b.CK)(c.r.color.primary, 1 - o);
        return (
          (0, s.useEffect)(
            function () {
              if (null != p.current) {
                var e = p.current.getContext("2d");
                null != e &&
                  (e.save(),
                  e.scale(2, 2),
                  (e.fillStyle = u),
                  (e.strokeStyle = m),
                  (e.lineWidth = 2),
                  e.clearRect(0, 0, 20, 20),
                  e.beginPath(),
                  e.ellipse(10, 10, 4, 4, 0, 0, 2 * Math.PI),
                  e.fill(),
                  i &&
                    (e.beginPath(),
                    e.ellipse(10, 10, 9, 9, 0, 0, a * Math.PI * 2),
                    e.stroke()),
                  e.restore());
              }
            },
            [i, a, u, m]
          ),
          (0, x.tZ)("canvas", {
            ref: p,
            width: "40",
            height: "40",
            onClick: d,
            css: T,
          })
        );
      }
      var z = { name: "13udsys", styles: "height:100%" },
        N = {
          name: "arzqwj",
          styles: "display:flex;justify-content:center;margin:18px auto 0",
        };
      function R(e) {
        var n = e.children,
          i = (0, s.useState)(function () {
            return new g.W();
          })[0],
          t = n.length,
          a = (0, s.useState)(0),
          r = a[0],
          l = a[1],
          d = (0, s.useState)(0),
          p = d[0],
          u = d[1],
          m = (0, s.useState)(!0),
          b = m[0],
          y = m[1],
          w = (0, s.useState)(!0),
          A = w[0],
          T = w[1],
          R = (0, s.useState)(0),
          I = R[0],
          O = R[1],
          Z = function (e) {
            var n = e % t;
            return n < 0 ? t + n : n;
          };
        (0, s.useEffect)(
          function () {
            var e = function () {
              l(i.page), A && (y(!1), T(!1), O(0));
            };
            return (
              i.on("change", e),
              function () {
                i.off("change", e);
              }
            );
          },
          [i, b, A]
        ),
          (0, s.useEffect)(
            function () {
              if (b && A) {
                var e = (0, h.jt)({
                    duration: 5,
                    onChange: function (e) {
                      return O(e);
                    },
                  }),
                  n = setTimeout(function () {
                    T(!1), i.to(i.page + 1);
                  }, 5e3);
                return function () {
                  e(), clearTimeout(n);
                };
              }
            },
            [i, b, A]
          );
        var j = function (e) {
            switch (e) {
              case Z(p):
                return Math.min(Math.abs(r - p), 1);
              case Z(p - 1):
                return Math.min(r - p + 1, 1);
              case Z(p + 1):
                return Math.min(1 - (r - p), 1);
              default:
                return 1;
            }
          },
          k = (0, s.useState)("pc"),
          S = k[0],
          U = k[1];
        (0, s.useEffect)(function () {
          var e = function () {
            U(window.matchMedia(c.r.media.preTablet).matches ? "phone" : "pc");
          };
          window.addEventListener("resize", e), e();
        }, []);
        var M = (0, s.useCallback)(
            function (e) {
              u(e), O(0), b && T(!0);
            },
            [b]
          ),
          B = (0, x.tZ)("div", {
            css: N,
            children: (0, f.w)(0, t).map(function (e) {
              var n = Z(p) === e;
              return (0, x.tZ)(
                E,
                {
                  active: n,
                  distance: j(e),
                  time: I,
                  onClick: function () {
                    y(!1), T(!1), O(0), i.to(p + (e - Z(p)));
                  },
                },
                e
              );
            }),
          });
        return (0, x.BX)("div", {
          children: [
            (0, x.tZ)("div", {
              css: (0, o.iv)(
                "position:relative;height:750px;padding:10px 0;overflow:hidden;background-color:black;@media ",
                c.r.media.preTablet,
                "{height:423px;}",
                ""
              ),
              children: (0, x.tZ)("div", {
                css: z,
                children: (0, x.tZ)(v.t, {
                  viewport: "phone" === S ? 295 : 528,
                  controller: i,
                  onSnap: M,
                  children: n,
                }),
              }),
            }),
            B,
          ],
        });
      }
      var I = {
          name: "c732kj",
          styles: "display:block;width:100%;height:auto;aspect-ratio:560/315",
        },
        O = {
          name: "prvmwn",
          styles:
            "width:fit-content;padding:4px;margin:0 auto;font-family:var(--comic-impact-font);font-size:26px;line-height:1;color:white;background-color:black;:not(:lang(ja)){padding-top:7px;font-size:30px;}",
        },
        Z = function () {
          var e = (0, l.bU)();
          return (0, x.BX)("div", {
            css: (0, o.iv)(
              "padding:80px 0;@media ",
              c.r.media.preTablet,
              "{padding:48px 0;}",
              ""
            ),
            children: [
              (0, x.tZ)("p", { css: O, children: j[e] }),
              (0, x.tZ)("div", {
                css: (0, o.iv)(
                  "max-width:750px;margin:35px auto 0;@media ",
                  c.r.media.preTablet,
                  "{margin-top:20px;}",
                  ""
                ),
                children: (0, x.tZ)("iframe", {
                  css: I,
                  src: "https://www.youtube-nocookie.com/embed/yKELA1qBAKA",
                  width: "560",
                  height: "315",
                  frameBorder: "0",
                  allowFullScreen: !0,
                  title: "video",
                }),
              }),
            ],
          });
        },
        j = {
          ja: "\u30a2\u30cb\u30e120\u5468\u5e74\u8a18\u5ff5\u7279\u5225\u6620\u50cf",
          en: "SPECIAL VIDEO COMMEMORATING THE ANIMATION\u2019S 20TH ANNIVERSARY",
          fr: "VID\xc9O COMM\xc9MORATIVE DU 20E ANNIVERSAIRE DE L\u2019ANIM\xc9",
          de: "SONDERVIDEO ZUM 20. JUBIL\xc4UM DER ANIME-SERIE",
          es: "VIDEO CONMEMORATIVO DEL 20.\xba ANIVERSARIO DEL ANIME",
          it: "VIDEO COMMEMORATIVO 20\xb0 ANNIV. ANIME",
        },
        k = i(25701);
      var S = { name: "azjb6s", styles: "font-size:42px" },
        U = {
          name: "6brbnk",
          styles: "position:absolute;left:55px;font-size:40px;line-height:1",
        },
        M = { name: "f4q8rq", styles: "margin-right:7px" },
        B = {
          name: "1m6hzyz",
          styles: "position:relative;font-size:60px;line-height:0.8",
        },
        C = { name: "pqkgw9", styles: "font-size:42px;line-height:1" },
        L = {
          name: "oymoei",
          styles: "margin-bottom:10px;font-size:42px;line-height:1",
        },
        X = {
          name: "uboxnn",
          styles: "font-family:var(--comic-impact-font);font-size:42px",
        },
        V = {
          name: "t9txkf",
          styles:
            "font-family:var(--impact-font);font-size:60px;vertical-align:-5%",
        },
        q = { name: "1xs00mq", styles: "width:fit-content;margin:5px auto 0" },
        P = {
          name: "hc6a67",
          styles:
            "font-family:var(--comic-impact-font);font-size:min(6.8vw, 28px)",
        },
        _ = {
          name: "xkz0hf",
          styles: "font-family:var(--comic-impact-font);font-size:32px",
        },
        D = {
          name: "14xm1p3",
          styles:
            ".alphabet{font-family:var(--impact-font);font-size:min(10.5vw, 42px);vertical-align:-9%;}",
        },
        H = { name: "1xe63ku", styles: "line-height:1" },
        J = { name: "1uh5df6", styles: "width:auto;height:280px" },
        F = { name: "bjn8wh", styles: "position:relative" },
        G = function () {
          var e = (0, l.bU)();
          return (0, x.BX)("div", {
            css: F,
            children: [
              (0, x.tZ)(k.Z, {
                wrapperCss: (0, o.iv)(
                  "position:absolute;top:154px;right:0;@media ",
                  c.r.media.preTablet,
                  "{top:-73px;}",
                  ""
                ),
                paths: [
                  {
                    label: K[e],
                    href: "/",
                    font: "ja" === e ? "fot-udkakugoc80-pro" : "Bebas Neue",
                  },
                  {
                    label: W[e],
                    href: "/special",
                    font: "ja" === e ? "fot-udkakugoc80-pro" : "Bebas Neue",
                  },
                ],
              }),
              (0, x.BX)("div", {
                css: (0, o.iv)(
                  "display:flex;column-gap:10px;align-items:center;width:fit-content;margin:0 auto;:not(:lang(ja)){row-gap:30px;}@media ",
                  c.r.media.preTablet,
                  "{flex-direction:column;row-gap:50px;:not(:lang(ja)){row-gap:30px;}}",
                  ""
                ),
                children: [
                  (0, x.tZ)("img", {
                    src: "/special/20th/logo-20th.webp",
                    alt: "20th anniversary logo",
                    css: J,
                  }),
                  "ja" === e
                    ? (0, x.BX)("div", {
                        css: H,
                        children: [
                          (0, x.BX)("p", {
                            css: D,
                            children: [
                              (0, x.BX)("span", {
                                css: _,
                                children: [" ", "\u30a2\u30cb\u30e1"],
                              }),
                              (0, x.tZ)("span", {
                                className: "alphabet",
                                children: " NARUTO - ",
                              }),
                              (0, x.tZ)("span", {
                                css: P,
                                children: "\u30ca\u30eb\u30c8",
                              }),
                              (0, x.tZ)("span", {
                                className: "alphabet",
                                children: " -",
                              }),
                            ],
                          }),
                          (0, x.BX)("p", {
                            css: q,
                            children: [
                              (0, x.tZ)("span", { css: V, children: "20" }),
                              (0, x.BX)("span", {
                                css: X,
                                children: [" ", "\u5468\u5e74\u8a18\u5ff5"],
                              }),
                            ],
                          }),
                        ],
                      })
                    : (0, x.BX)("div", {
                        css: (0, o.iv)(
                          "display:flex;flex-flow:column;justify-content:center;text-align:center;@media ",
                          c.r.media.preTablet,
                          "{margin-left:0;}p{font-family:var(--impact-font);}",
                          ""
                        ),
                        children: [
                          (0, x.tZ)("p", { css: L, children: Y[e] }),
                          (0, x.tZ)("p", { css: C, children: "NARUTO" }),
                          (0, x.BX)("p", {
                            css: B,
                            children: [
                              "20",
                              "es" === e &&
                                (0, x.tZ)("span", { css: M, children: "." }),
                              "es" === e &&
                                (0, x.tZ)("span", { css: U, children: "0" }),
                              "it" === e && "\xb0",
                              (0, x.tZ)("span", { css: S, children: Q[e] }),
                            ],
                          }),
                        ],
                      }),
                ],
              }),
            ],
          });
        },
        K = {
          ja: "\u30c8\u30c3\u30d7",
          en: "TOP",
          fr: "ACCUEIL",
          de: "TOP",
          es: "INICIO",
          it: "HOME",
        },
        W = {
          ja: "\u30b9\u30da\u30b7\u30e3\u30eb",
          en: "SPECIAL",
          fr: "EXCLUSIVIT\xc9S",
          de: "SPECIAL",
          es: "ESPECIAL",
          it: "ESCLUSIVE",
        },
        Y = {
          ja: "",
          en: "ANIMATION",
          fr: "ANIM\xc9",
          de: "ANIME-SERIE",
          es: "ANIME",
          it: "ANIME",
        },
        Q = {
          ja: "",
          en: "TH ANNIVERSARY",
          fr: "E ANNIVERSAIRE",
          de: ".JUBIL\xc4UM",
          es: "  ANIVERSARIO",
          it: "ANNIVERSARIO",
        };
      var $ = {
          name: "etara9",
          styles:
            "position:absolute;right:0;bottom:0;width:36px;height:60px;border-right:2px solid black;border-bottom:2px solid black",
        },
        ee = {
          name: "1iens2y",
          styles:
            "font-family:var(--comic-impact-font);font-size:18px;white-space:pre-wrap",
        },
        ne = {
          name: "vy8nye",
          styles:
            "position:absolute;top:0;left:0;width:36px;height:60px;border-top:2px solid black;border-left:2px solid black",
        },
        ie = {
          name: "6zn66z",
          styles: "position:relative;padding:20px 30px 12px;margin-top:40px",
        },
        te = {
          name: "1qyp6q1",
          styles: "vertical-align:top;:not(:lang(ja)){margin-top:20px;}",
        },
        ae = { name: "azjb6s", styles: "font-size:42px" },
        re = { name: "j7349j", styles: "font-size:28px" },
        oe = {
          name: "gs2i67",
          styles:
            "display:flex;flex-flow:column;justify-content:center;margin:0 11px;text-align:center;p{font-family:var(--impact-font);line-height:1;}",
        },
        se = { name: "8fsvs1", styles: "font-size:min(2vw, 26px)" },
        le = { name: "1hx15ju", styles: "font-size:min(3.2vw, 40px)" },
        ce = {
          name: "l8bgk",
          styles:
            "margin:0 20px;font-family:var(--comic-impact-font);line-height:1.3",
        },
        de = {
          name: "1qyp6q1",
          styles: "vertical-align:top;:not(:lang(ja)){margin-top:20px;}",
        },
        pe = {
          name: "l77bnh",
          styles:
            "display:flex;align-items:center;width:fit-content;margin:0 auto",
        },
        ue = { name: "lutbjm", styles: "margin-top:50px" },
        me = function () {
          var e = (0, l.bU)();
          return (0, x.tZ)("div", {
            css: ue,
            children: (0, x.tZ)("div", {
              css: (0, o.iv)(
                "padding:3px;background-color:",
                c.r.color.primary,
                ";border:5px solid black;",
                ""
              ),
              children: (0, x.BX)("div", {
                css: (0, o.iv)(
                  "display:flex;border:2px solid black;@media ",
                  c.r.media.preTablet,
                  "{flex-direction:column;}",
                  ""
                ),
                children: [
                  (0, x.tZ)("img", {
                    css: (0, o.iv)(
                      "width:46%;height:auto;vertical-align:top;@media ",
                      c.r.media.preTablet,
                      "{width:100%;}",
                      ""
                    ),
                    src:
                      "ja" === e
                        ? "/special/20th/illustration-jp.webp"
                        : "/special/20th/illustration-en.webp",
                    alt: "autograph",
                  }),
                  (0, x.BX)("div", {
                    css: (0, o.iv)(
                      "width:54%;padding:70px 40px 72px 45px;@media ",
                      c.r.media.preTablet,
                      "{width:100%;padding:40px 10px 30px;}",
                      ""
                    ),
                    children: [
                      (0, x.BX)("div", {
                        css: pe,
                        children: [
                          (0, x.tZ)("img", {
                            css: de,
                            src: "/special/20th/uzumaki.svg",
                            alt: "",
                          }),
                          "ja" === e
                            ? (0, x.BX)("div", {
                                children: [
                                  (0, x.BX)("p", {
                                    css: ce,
                                    children: [
                                      (0, x.tZ)("span", {
                                        css: le,
                                        children: "\u5cb8\u672c\u5148\u751f",
                                      }),
                                      (0, x.BX)("span", {
                                        css: se,
                                        children: [
                                          " ",
                                          "\u304b\u3089\u306e\u30e1\u30c3\u30bb\u30fc\u30b8",
                                        ],
                                      }),
                                    ],
                                  }),
                                  " ",
                                ],
                              })
                            : (0, x.BX)("div", {
                                css: oe,
                                children: [
                                  (0, x.tZ)("p", { css: re, children: he[e] }),
                                  (0, x.tZ)("p", {
                                    css: ae,
                                    children: "MASASHI KISHIMOTO",
                                  }),
                                ],
                              }),
                          (0, x.tZ)("img", {
                            css: te,
                            src: "/special/20th/uzumaki.svg",
                            alt: "",
                          }),
                        ],
                      }),
                      (0, x.BX)("div", {
                        css: ie,
                        children: [
                          (0, x.tZ)("div", { css: ne }),
                          (0, x.tZ)("p", { css: ee, children: fe[e] }),
                          (0, x.tZ)("div", { css: $ }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
            }),
          });
        },
        he = {
          ja: "",
          en: "A MESSAGE FROM",
          fr: "MESSAGE DE L\u2019AUTEUR",
          de: "EINE NACHRICHT VOM AUTOR",
          es: "MENSAJE DEL AUTOR",
          it: "UN MESSAGGIO DAL MAESTRO",
        },
        fe = {
          ja: "\u30a2\u30cb\u30e1\u300eNARUTO-\u30ca\u30eb\u30c8-\u300f\u304c20\u5468\u5e74\u3092\u8fce\u3048\u307e\u3057\u305f\uff01 \u672c\u65e5\u3001\u305d\u308c\u3092\u8a18\u5ff5\u3057\u3066\u958b\u8a2d\u3055\u308c\u305f\u300cNARUTO SITE\u300d\u306f\u3001 \u65e5\u672c\u306e\u307f\u306a\u3089\u305a\u3001\u6d77\u5916\u306e\u65b9\u3082\u697d\u3057\u3081\u308b\u4f5c\u308a\u306b\u306a\u3063\u3066\u3044\u307e\u3059\uff01 \u4eca\u5e74\u306f\u30a2\u30cb\u30d0\u30fc\u30b5\u30ea\u30fc\u30a4\u30e4\u30fc\u3068\u3044\u3046\u3053\u3068\u3067\u69d8\u3005\u306a\u4f01\u753b\u304c\u52d5\u3044\u3066\u3044\u304f\u307f\u305f\u3044\u3067\u3059\u306e\u3067\u3001 \u662f\u975e\u3053\u306e\u30b5\u30a4\u30c8\u3067\u60c5\u5831\u3092\u30c1\u30a7\u30c3\u30af\u3057\u3066\u307f\u3066\u304f\u3060\u3055\u3044\u306d\uff01 \u7686\u3055\u307e\u3069\u3046\u305e\u304a\u697d\u3057\u307f\u306b\uff01",
          en: 'Anime\'s 20th anniversary!! Sending everyone a "Thank you!" through the Multi Shadow Clone Jutsu!!!\nIt\u2019s the Naruto anime\u2019s 20th anniversary! In celebration, the \u201cNARUTO SITE\u201d is now open not only in Japan, but across the globe for everyone to enjoy! As this is a big anniversary year, a ton of projects are being planned, so please check this website for exciting info! I hope everyone looks forward to it!',
          fr: "20e anniversaire de l'anim\xe9 ! Multi Clonage Supr\xeame des \xab remerciements \xbb \xe0 tous !\nL\u2019anim\xe9 NARUTO f\xeate son 20e anniversaire ! Lanc\xe9 pour c\xe9l\xe9brer cet \xe9v\xe9nement, le \xab site officiel de Naruto \xbb est d\xe9sormais disponible non seulement au Japon, mais aussi dans le monde entier ! De nombreux projets sont pr\xe9vus pour cette ann\xe9e d\u2019aniversaire ! Consultez les derni\xe8res informations sur ce site pour ne pas les manquer ! Nous esp\xe9rons que vous avez h\xe2te !",
          de: "Der Anime feiert 20-j\xe4hriges Jubil\xe4um! Zum Dank gibt's ein Schattendoppelg\xe4nger-Jutsu der Superlative!\nSeit bereits 20 Jahren gibt es den Anime NARUTO! Zum Jubil\xe4um wurde die offizielle NARUTO-Webseite, nicht nur in Japan, sondern weltweit ver\xf6ffentlicht! F\xfcr das Jubil\xe4umsjahr haben wir einiges vorbereitet! Schaut also auf jeden Fall auf der Seite vorbei, um euch die neuesten Infos zu holen! Wir hoffen, ihr habt viel Spa\xdf!",
          es: "\xa120.\xba aniversario del anime! \xa1Jutsu Multiclones de Sombras en agradecimiento a todos!\n\xa1El anime Naruto ha llegado a su 20.\xba aniversario! En conmemoraci\xf3n, \xa1el sitio oficial de Naruto ahora no solo estar\xe1 disponible para Jap\xf3n, sino que podr\xe1 ser disfrutado por gente de todo el mundo! \xa1Este a\xf1o ser\xe1 de celebraci\xf3n por el aniversario, as\xed que se acercan muchos proyectos! \xa1Conoce toda la informaci\xf3n sobre estos en el sitio! \xa1No te lo puedes perder!",
          it: "20\xb0 anniversario dell' anime! Una Moltiplicazione Superiore Estrema di ringraziamenti a tutti!\nL' anime Naruto compie 20 anni! Inizialmente concepito esclusivamente per il Giappone, il sito ufficiale di Naruto creato per festeggiare questo evento \xe8 ora disponibile in tutto il mondo! Tenetelo d'occhio per non perdervi i numerosi progetti previsti per questo ventennale! Restate connessi!",
        };
      var ge = {
          name: "73a8my",
          styles:
            "display:flex;flex-direction:column;align-items:center;line-height:1;color:#fff",
        },
        ve = function () {
          var e = (0, l.bU)();
          return (0, x.tZ)("div", {
            css: (0, o.iv)(
              "position:relative;padding:40px 60px;margin:100px 0;background-color:#fff;@media ",
              c.r.media.preTablet,
              "{padding:0;background-color:transparent;}",
              ""
            ),
            children: (0, x.BX)("div", {
              css: (0, o.iv)(
                "@media ",
                c.r.media.preTablet,
                "{padding-top:48px;background-color:#fff;}",
                ""
              ),
              children: [
                (0, x.tZ)("img", {
                  css: (0, o.iv)(
                    "position:relative;right:-30px;display:block;margin:0 auto;@media ",
                    c.r.media.preTablet,
                    "{right:-10px;width:76.5vw;height:auto;}",
                    ""
                  ),
                  src: "/special/20th/naruto-gallery-logo.webp",
                  width: "698",
                  height: "320",
                  alt: "naruto the gallery logo",
                }),
                (0, x.BX)("div", {
                  css: (0, o.iv)(
                    "display:flex;max-width:990px;margin:15px auto 0;background-color:#0061b1;background-image:url('/special/20th/bg-naruto-gallery.webp');@media ",
                    c.r.media.preTablet,
                    "{display:block;margin-top:20px;}",
                    ""
                  ),
                  children: [
                    (0, x.tZ)("img", {
                      css: (0, o.iv)(
                        "flex:1;@media ",
                        c.r.media.preTablet,
                        "{width:100%;height:auto;}",
                        ""
                      ),
                      src: "/special/20th/naruto-gallery-visual.webp",
                      height: "708",
                      alt: "main visual of naruto the gallery ",
                    }),
                    (0, x.BX)("div", {
                      css: (0, o.iv)(
                        "flex:1;padding:40px;@media ",
                        c.r.media.preTablet,
                        "{padding:35px 20px 40px;}",
                        ""
                      ),
                      children: [
                        (0, x.BX)("div", {
                          css: ge,
                          children: [
                            (0, x.tZ)("p", {
                              css: (0, o.iv)(
                                "font-family:var(--comic-impact-font);font-size:20px;:not(:lang(ja)){font-size:26px;}@media ",
                                c.r.media.preTablet,
                                "{font-size:18px;:not(:lang(ja)){font-size:23px;}}",
                                ""
                              ),
                              children: be[e],
                            }),
                            (0, x.tZ)("p", {
                              css: (0, o.iv)(
                                "margin-top:10px;font-family:var(--impact-font);font-size:36px;@media ",
                                c.r.media.preTablet,
                                "{font-size:32px;}",
                                ""
                              ),
                              children: "-NARUTO THE GALLERY-",
                            }),
                          ],
                        }),
                        (0, x.tZ)("p", {
                          css: (0, o.iv)(
                            "margin-top:50px;font-family:var(--comic-impact-font);font-size:16px;color:#fff;white-space:pre-wrap;:not(:lang(ja)){font-size:18px;line-height:26px;}@media ",
                            c.r.media.preTablet,
                            "{margin-top:30px;line-height:1.5;:not(:lang(ja)){line-height:24px;}}",
                            ""
                          ),
                          children: xe[e],
                        }),
                        (0, x.tZ)("div", {
                          css: (0, o.iv)(
                            "margin:80px auto 0;@media ",
                            c.r.media.preTablet,
                            "{width:auto;margin-top:30px;}",
                            ""
                          ),
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
          });
        },
        be = {
          ja: "\u30a2\u30cb\u30e1\u300cNARUTO-\u30ca\u30eb\u30c8-\u300d20\u5468\u5e74\u8a18\u5ff5",
          en: "TV Animation NARUTO 20th Anniversary",
          fr: "Anim\xe9 NARUTO 20e anniversaire",
          de: "Anime-Serie NARUTO 20. Jubil\xe4um",
          es: "Anime NARUTO 20.\xba aniversario",
          it: "Anime NARUTO 20\xb0 Anniversario",
        },
        xe = {
          ja: "7\u5e74\u3076\u308a\u306e\u5c55\u793a\u30a4\u30d9\u30f3\u30c8\u958b\u50ac\u6c7a\u5b9a!!\n\u30ad\u30e3\u30e9\u30af\u30bf\u30fc\u306e\u6210\u9577\u3001\u4ef2\u9593\u3068\u306e\u7d46\u3001\u305d\u3057\u3066\u71b1\u3044\u201c\u6226\u3044\u201d\u306b\u30d5\u30e5\u30fc\u30c1\u30e3\u30fc\u3057\u3001\u305f\u304f\u3055\u3093\u306e\u30a2\u30cb\u30e1\u6620\u50cf\u3067\u3001\u30a2\u30cb\u30e1\u300cNARUTO-\u30ca\u30eb\u30c8-\u300d\u306e\u6b74\u53f2\u3092\u632f\u308a\u8fd4\u308a\u307e\u3059\u3002\u5927\u578b\u30b9\u30af\u30ea\u30fc\u30f3\u306b\u3088\u308b\u8feb\u529b\u306e\u6620\u50cf\u3084\u591a\u9762\u30e2\u30cb\u30bf\u30fc\u306b\u3088\u308b\u6f14\u51fa\u3001\u305d\u3057\u3066\u3001\u4eca\u8a71\u984c\u306e\u6620\u50cf\u30a2\u30fc\u30c6\u30a3\u30b9\u30c8\u3068\u30b3\u30e9\u30dc\u30ec\u30fc\u30b7\u30e7\u30f3\u3057\u305f\u3001\u7279\u5225\u306a\u4f5c\u54c1\u306e\u4e0a\u6620\u3082\u4e88\u5b9a\u3057\u3066\u3044\u307e\u3059\u3002\u307e\u305f\u3001\u63cf\u304d\u4e0b\u308d\u3057\u30a4\u30e9\u30b9\u30c8\u3092\u4f7f\u3063\u305f\u30aa\u30ea\u30b8\u30ca\u30eb\u30b0\u30c3\u30ba\u3082\u8ca9\u58f2\u4e88\u5b9a\uff01\u653e\u9001\u958b\u59cb\u304b\u308920\u5e74\u304c\u7d4c\u3063\u305f\u4eca\u3001\u518d\u3073\u30a2\u30cb\u30e1\u300cNARUTO-\u30ca\u30eb\u30c8-\u300d\u306e\u611f\u52d5\u306e\u4e16\u754c\u306b\u6ca1\u5165\u3057\u3088\u3046\uff01",
          en: "After a long 7-year wait, a brand-new NARUTO exhibition event is coming!\nGo back in time and relive scenes from the anime depicting how the characters grew, the bonds they shared between friends, as well as their heated battles. Feel the intensity of every scene through the huge main screen or from one of the many smaller monitors available. In addition, enjoy a special video made in collaboration with a high-profile visual artist which is scheduled to air during the event. Merchandise featuring original illustrations will also be available for sale! It's been 20 years since the animation first aired on TV, so come join this amazing event and immerse yourself in the world of NARUTO once again!",
          fr: "Apr\xe8s sept longues ann\xe9es, voici enfin une nouvelle exposition NARUTO !\nL'\xe9v\xe9nement retracera l'histoire de NARUTO, en se concentrant sur l'\xe9volution des personnages, la profondeur de leurs liens ainsi que leurs \xab combats \xbb enflamm\xe9s, avec de nombreuses s\xe9quences tir\xe9es de l'anim\xe9. Revivez les sc\xe8nes cl\xe9s sur un \xe9cran g\xe9ant et des animations sur plein d'autres \xe9crans ! Il y aura \xe9galement des projections d'images in\xe9dites en collaboration avec certains vid\xe9astes populaires du moment. Des goodies originaux avec de toutes nouvelles illustrations seront \xe9galement en vente ! Plongez \xe0 nouveau dans le monde passionnant de NARUTO, 20 ans apr\xe8s sa premi\xe8re diffusion !",
          de: "Erste Ausstellung seit 7 Jahren geplant!\nBlickt mit zahlreichen Bildern aus dem Anime zur\xfcck auf die Geschichte von NARUTO, die Entwicklung der Charaktere und deren Freundschaften sowie hitzigen Gefechten! Genie\xdft beeindruckende Bilder auf einer Gro\xdfleinwand sowie Auff\xfchrungen auf einer Multiscreen-Leinwand. Au\xdferdem haben wir mit aktuell beliebten K\xfcnstlern zusammengearbeitet und eine besondere Vorstellung geplant! Es wird auch Original Merchandise mit brandneuen Illustrationen zum Verkauf stehen! Taucht jetzt, 20 Jahre nach der Erstausstrahlung, noch einmal in die aufregende Welt von NARUTO ein!",
          es: "Despu\xe9s de 7 largos a\xf1os, \xa1llega una nueva exposici\xf3n de NARUTO!\nRevive la historia de NARUTO, el crecimiento de los personajes, los lazos entre amigos y las batallas m\xe1s intensas a trav\xe9s de videos extra\xeddos del anime. Tambi\xe9n habr\xe1 proyecciones de im\xe1genes in\xe9ditas en colaboraci\xf3n con algunos vide\xf3grafos populares del momento y proyecciones de escenas clave en pantallas gigantes y monitores multipantalla. Adem\xe1s, \xa1habr\xe1 merchandising original con nuevas ilustraciones! \xa1Celebra los 20 a\xf1os de NARUTO sumergi\xe9ndote en esta nueva y emocionante aventura!",
          it: "Dopo 7 lunghi anni arriva una nuova mostra di NARUTO!\nRivivi la storia di NARUTO, i momenti di crescita con gli amici e le battaglie pi\xf9 intense attraverso una miriade di immagini tratte dall' anime e proiettate su schermi di ogni dimensione. In pi\xf9, potrai vedere tutta una serie di immagini inedite create in collaborazione con artisti di alto profilo e acquistare prodotti originali creati a partire da bozze e illustrazioni! Celebra 20 anni di NARUTO tuffandoti in questa nuova, emozionante avventura!",
        };
      var ye = { name: "1d3w5wq", styles: "width:100%" },
        we = { name: "1d3w5wq", styles: "width:100%" },
        Ae = { name: "bjn8wh", styles: "position:relative" },
        Te = { name: "pr10xp", styles: "margin-bottom:10px" },
        Ee = function () {
          var e = (0, l.bU)();
          return (0, x.tZ)("div", {
            css: Te,
            children: (0, x.BX)("div", {
              css: Ae,
              children: [
                (0, x.BX)("picture", {
                  children: [
                    (0, x.tZ)("source", {
                      srcSet: "/narutop99/naruto_the_live_bg_sp_ja.png",
                      media: c.r.media.prePhone,
                      css: we,
                    }),
                    (0, x.tZ)("img", {
                      src: "/narutop99/naruto_the_live_bg_ja.png",
                      alt: "",
                      css: ye,
                    }),
                  ],
                }),
                (0, x.BX)("div", {
                  css: (0, o.iv)(
                    "position:absolute;bottom:145px;left:50%;width:85%;margin:0 auto;color:white;text-align:center;transform:translateX(-50%);@media ",
                    c.r.media.preTablet,
                    "{bottom:10%;}@media ",
                    c.r.media.prePhone,
                    "{bottom:10%;}",
                    ""
                  ),
                  children: [
                    (0, x.BX)("div", {
                      css: (0, o.iv)(
                        "display:flex;justify-content:center;margin-bottom:20px;font-family:var(--comic-impact-font);font-size:24px;line-height:36px;color:white;vertical-align:center;&:not(:lang(ja)){font-size:28px;}@media ",
                        c.r.media.preTablet,
                        "{margin-bottom:12px;font-size:18px;&:not(:lang(ja)){font-size:24px;}&:lang(it),&:lang(fr),&:lang(es){font-size:22px;}}@media ",
                        c.r.media.prePhone,
                        "{display:block;margin-bottom:5%;font-size:20px;&:not(:lang(ja)){font-size:24px;}&:lang(fr){font-size:20px;}}",
                        ""
                      ),
                      children: [
                        ze[e],
                        "ja" === e &&
                          (0, x.BX)(x.HY, {
                            children: [
                              (0, x.tZ)("span", {
                                css: (0, o.iv)(
                                  "font-family:'Bebas Neue';font-size:48px;letter-spacing:-0.01;@media ",
                                  c.r.media.preTablet,
                                  "{font-size:36px;}@media ",
                                  c.r.media.prePhone,
                                  "{display:block;font-size:36px;}",
                                  ""
                                ),
                                children: Ne,
                              }),
                              Re,
                            ],
                          }),
                      ],
                    }),
                    (0, x.tZ)("div", {
                      css: (0, o.iv)(
                        "font-family:var(--comic-impact-font);font-size:16px;color:white;white-space:pre-wrap;&:not(:lang(ja)){font-size:20px;line-height:26px;}@media ",
                        c.r.media.preTablet,
                        "{font-size:14px;&:not(:lang(ja)){font-size:18px;}&:lang(fr){font-size:16px;}}@media ",
                        c.r.media.prePhone,
                        "{width:90%;margin:0 auto;font-size:14px;text-align:left;&:not(:lang(ja)){font-size:18px;}&:lang(fr){font-size:16px;}}",
                        ""
                      ),
                      children: Ie[e],
                    }),
                    (0, x.tZ)("div", {
                      css: (0, o.iv)(
                        "margin-bottom:5%;font-family:var(--comic-impact-font);font-size:16px;color:white;&:not(:lang(ja)){font-size:20px;line-height:26px;}@media ",
                        c.r.media.preTablet,
                        "{margin-bottom:1%;font-size:14px;&:not(:lang(ja)){font-size:18px;}&:lang(fr){font-size:16px;}}@media ",
                        c.r.media.prePhone,
                        "{width:90%;margin:0 auto;margin-bottom:10%;font-size:14px;text-align:left;&:not(:lang(ja)){font-size:18px;}&:lang(fr){font-size:16px;}}",
                        ""
                      ),
                      children: Oe[e],
                    }),
                    (0, x.BX)(u.f, {
                      css: (0, o.iv)(
                        "padding:5px 20px;font-family:'Bebas Neue';font-size:28px;color:black;@media ",
                        c.r.media.prePhone,
                        "{width:82%;font-size:28px;line-height:20px;}",
                        ""
                      ),
                      width: 335,
                      height: 72,
                      href: Ze[e],
                      icon: "link",
                      children: [
                        "NARUTO THE LIVE",
                        "ja" === e &&
                          (0, x.tZ)("span", {
                            css: (0, o.iv)(
                              "font-family:var(--comic-impact-font);font-size:20px;vertical-align:middle;@media ",
                              c.r.media.prePhone,
                              "{display:block;margin-top:5px;}",
                              ""
                            ),
                            children: je,
                          }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
          });
        },
        ze = {
          ja: "2023\u5e74\u79cb\u3001\u30b9\u30da\u30b7\u30e3\u30eb\u97f3\u697d\u30a4\u30d9\u30f3\u30c8",
          en: "Special Musical Event Confirmed for Fall 2023: NARUTO THE LIVE!! ",
          fr: "Lancement de l\u2019\xe9v\xe9nement musical sp\xe9cial \xab NARUTO THE LIVE \xbb \xe0 l\u2019automne 2023 ! ",
          de: "Im Herbst 2023 findet das Spezial-Musik-Event NARUTO THE LIVE statt! ",
          es: "\xa1El festival especial de m\xfasica NARUTO THE LIVE se celebrar\xe1 en oto\xf1o de 2023!",
          it: "L\u2019evento musicale \u201cNARUTO THE LIVE\u201d confermato per l\u2019autunno 2023! ",
        },
        Ne = "\u300cNARUTO THE LIVE\u300d",
        Re = "\u958b\u50ac\u6c7a\u5b9a\uff01\uff01",
        Ie = {
          ja: "\u30a2\u30cb\u30e1\u300eNARUTO-\u30ca\u30eb\u30c8-\u300f\u304c20\u5468\u5e74\u3092\u8a18\u5ff5\u3057\u3066\u3001\u8c6a\u83ef\u30a2\u30fc\u30c6\u30a3\u30b9\u30c8\u306b\u3088\u308b\u30e9\u30a4\u30d6\u30a4\u30d9\u30f3\u30c8\u3092\u958b\u50ac\uff01\uff01",
          en: "In celebration of the NARUTO anime\u2019s 20th anniversary, a live event featuring incredible artists has been announced!",
          fr: "Pour c\xe9l\xe9brer le 20e anniversaire de l\u2019anim\xe9 \xab NARUTO \xbb,\nun \xe9v\xe9nement en direct sera organis\xe9 avec de nombreux artistes de renom ! ",
          de: "Um das 20-j\xe4hrige Jubil\xe4um von NARUTO zu feiern, laden gro\xdfartige K\xfcnstler zu einem Live-Event ein! ",
          es: "\xa1Para conmemorar el 20.\xba aniversario del anime de Naruto,\nse celebrar\xe1 un evento con actuaciones en directo de artistas incre\xedbles!",
          it: "Per festeggiare il 20\xb0 anniversario di Naruto si terr\xe0 un evento dal vivo a cui parteciperanno alcuni degli artisti pi\xf9 in voga della\nscena musicale nipponica! ",
        },
        Oe = {
          ja: "\u3053\u3053\u3067\u3057\u304b\u89b3\u308b\u3053\u3068\u304c\u3067\u304d\u306a\u3044\u3001\u300eNARUTO-\u30ca\u30eb\u30c8-\u300f\u3068\u30a2\u30fc\u30c6\u30a3\u30b9\u30c8\u306e\u30b3\u30e9\u30dc\u30ec\u30fc\u30b7\u30e7\u30f3\u3092\u304a\u697d\u3057\u307f\u306b\uff01\uff01",
          en: "Please look forward to this one-of-a-kind collaboration between NARUTO and these amazing performers!",
          fr: "Ne manquez pas cette collaboration entre NARUTO et ces artistes que vous ne pourrez voir nulle part ailleurs !",
          de: "Ein noch nie dagewesenes Event, bei dem eine Kollaboration zwischen NARUTO und diversen K\xfcnstlern genossen werden kann!",
          es: "\xa1No te pierdas la oportunidad \xfanica de ver a estos artistas colaborar con Naruto!",
          it: "Non perderti questa collaborazione esclusiva tra Naruto e musicisti!",
        },
        Ze = {
          ja: "https://naruto-20th.jp/live/",
          en: "https://naruto-20th.jp/live/",
          fr: "https://naruto-20th.jp/live/",
          de: "https://naruto-20th.jp/live/",
          es: "https://naruto-20th.jp/live/",
          it: "https://naruto-20th.jp/live/",
        },
        je = " \u7279\u8a2d\u30b5\u30a4\u30c8";
      var ke = {
          name: "1iz05fa",
          styles: "display:flex;justify-content:center;margin-top:36px",
        },
        Se = {
          name: "1f6072o",
          styles:
            "width:100%;height:100%;background-image:url('/special/20th/bg-special-move.webp');background-position:right 0;background-size:cover",
        },
        Ue = {
          name: "q4b2tk",
          styles:
            "position:relative;z-index:0;display:flex;flex-direction:column;overflow-x:hidden",
        },
        Me = function () {
          var e = (0, l.bU)();
          return (0, x.BX)("main", {
            css: Ue,
            children: [
              (0, x.BX)("div", {
                css: (0, o.iv)(
                  "padding-top:35px;padding-bottom:90px;background-image:url('/special/20th/bg-20th.webp');background-repeat:repeat-y;background-position:center center;@media ",
                  c.r.media.preTablet,
                  "{padding-top:173px;padding-bottom:48px;}",
                  ""
                ),
                children: [
                  (0, x.tZ)(p.W, { children: (0, x.tZ)(G, {}) }),
                  (0, x.tZ)(A, {}),
                  (0, x.tZ)(p.W, { children: (0, x.tZ)(me, {}) }),
                ],
              }),
              (0, x.tZ)("div", {
                css: Se,
                children: (0, x.tZ)(p.W, { children: (0, x.tZ)(Z, {}) }),
              }),
              (0, x.tZ)("div", {
                css: (0, o.iv)(
                  "padding-top:90px;padding-bottom:120px;background-image:url('/special/20th/bg-20th.webp');background-repeat:repeat-y;background-position:center center;@media ",
                  c.r.media.preTablet,
                  "{padding-top:48px;padding-bottom:63px;}",
                  ""
                ),
                children: (0, x.BX)(p.W, {
                  children: [
                    (0, x.BX)("div", {
                      css: (0, o.iv)(
                        "position:relative;padding:0 0 210px;@media ",
                        c.r.media.preTablet,
                        "{padding:0 0 200px;background-color:transparent;}",
                        ""
                      ),
                      children: [
                        (0, x.tZ)(Ee, {}),
                        (0, x.tZ)(ve, {}),
                        (0, x.tZ)("div", {
                          css: (0, o.iv)(
                            "width:100%;max-width:1280px;margin-bottom:53px;@media ",
                            c.r.media.preTablet,
                            "{margin-bottom:300px;}",
                            ""
                          ),
                          children: (0, x.tZ)(d.j, {
                            href: "/special/anime-gallery",
                            src: "/common/banner/anime_gallery_".concat(
                              e,
                              "_pc.webp"
                            ),
                            spSrc: "/common/banner/anime_gallery_".concat(
                              e,
                              "_sp.webp"
                            ),
                            target: "_self",
                          }),
                        }),
                        (0, x.tZ)(m.q, {}),
                      ],
                    }),
                    (0, x.tZ)("div", {
                      css: ke,
                      children: (0, x.tZ)(u.f, {
                        css: (0, o.iv)(
                          "height:40px;font-size:18px;text-align:center;&:not(:lang(ja)){font-size:22px;}@media ",
                          c.r.media.preTablet,
                          "{width:100%;height:48px;font-size:20px;&:not(:lang(ja)){font-size:26px;}}",
                          ""
                        ),
                        href: "/special",
                        children: Be[e],
                      }),
                    }),
                  ],
                }),
              }),
            ],
          });
        },
        Be = {
          ja: "\u623b\u308b",
          en: "BACK",
          fr: "RETOUR",
          de: "ZUR\xdcCK",
          es: "VOLVER",
          it: "TORNA INDIETRO",
        },
        Ce = function () {
          return (0, x.tZ)(x.HY, {
            children: (0, x.BX)(r.DY, {
              children: [
                (0, x.tZ)(a.h, {}),
                (0, x.tZ)(Me, {}),
                (0, x.tZ)(t.T, {}),
              ],
            }),
          });
        };
    },
  },
]);
