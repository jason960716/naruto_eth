"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [2300],
  {
    74574: function (e, t, i) {
      i.d(t, {
        V: function () {
          return c;
        },
      });
      var n = i(70917),
        o = i(48710),
        a = i(35944);
      var r = { name: "s079uh", styles: "margin-top:2px" },
        c = function () {
          return (0, a.BX)("div", {
            css: (0, n.iv)(
              "display:flex;column-gap:4px;align-items:center;height:100%;padding:0 7px;font-family:var(--impact-font);font-size:20px;line-height:1em;color:black;background:var(--primary-color);@media ",
              o.r.media.prePhone,
              "{font-size:15px;}",
              ""
            ),
            children: [
              (0, a.BX)("svg", {
                width: "14",
                height: "14",
                children: [
                  (0, a.tZ)("circle", {
                    cx: "7",
                    cy: "7",
                    r: "3.5",
                    fill: "black",
                  }),
                  (0, a.tZ)("circle", {
                    cx: "7",
                    cy: "7",
                    r: "6",
                    stroke: "black",
                    strokeWidth: "1",
                    fill: "none",
                  }),
                ],
              }),
              (0, a.tZ)("span", { css: r, children: "ONAIR" }),
            ],
          });
        };
    },
    96890: function (e, t, i) {
      i.d(t, {
        G: function () {
          return N;
        },
      });
      var n = i(16835),
        o = i(70917),
        a = i(11163),
        r = i(67294),
        c = i(55756),
        s = i(8503),
        l = i(7673),
        p = i(53877),
        d = i(48710),
        h = i(37642),
        u = i(35944),
        x = (0, h.U)(function (e) {
          var t = e.text,
            i = e.checked,
            n = e.breakPoint,
            a = void 0 === n ? 1024 : n,
            c = e.onChange,
            s = "screen and (max-width: ".concat(a - 1, "px)"),
            l = (0, r.useCallback)(
              function (e) {
                c(e.target.checked);
              },
              [c]
            );
          return (0,
          u.BX)("label", { css: (0, o.iv)("position:relative;display:flex;align-items:center;height:28px;padding:5px 28px 5px 5px;cursor:pointer;user-select:none;background-color:#000;@media ", s, "{height:24px;padding:3px 25px 3px 3px;}input{display:none;}", ""), children: [(0, u.tZ)("input", { type: "checkbox", checked: i, onChange: l }), (0, u.tZ)("span", { css: (0, o.iv)("position:absolute;top:6px;right:6px;box-sizing:border-box;width:16px;height:16px;background-color:#fff;border-radius:2px;@media ", s, "{top:4px;right:4px;}input:checked+&{background:white url('/common/header/check.svg') center center no-repeat;background-size:11.44px 8.41px;}", "") }), (0, u.tZ)("span", { css: (0, o.iv)("margin-top:1px;font-family:var(--comic-impact-font);font-size:12px;line-height:1;color:#fff;&:not(:lang(ja)){font-size:16px;}@media ", s, "{&:not(:lang(ja)){font-size:14px;}&:lang(es){font-size:13px;}}", ""), children: t })] });
        }),
        f = i(26184),
        g = i(37868),
        m = i(18714),
        k = i(95541),
        v = i(83454);
      var b = { name: "1mo1suq", styles: "background:rgb(0 0 0 / 70%)" },
        y = { name: "1v5a6de", styles: "width:fit-content;margin:0 auto" },
        w = { name: "2sqchg", styles: "top:-46px;right:6px" },
        Z = {
          name: "1dk7tzg",
          styles: "padding:25px;font-size:14px;color:white",
        },
        z = {
          name: "1onsmcq",
          styles: "width:100%;height:auto;aspect-ratio:560/315",
        },
        C = {
          name: "1onsmcq",
          styles: "width:100%;height:auto;aspect-ratio:560/315",
        },
        S = {
          name: "1onsmcq",
          styles: "width:100%;height:auto;aspect-ratio:560/315",
        },
        E = {
          name: "1onsmcq",
          styles: "width:100%;height:auto;aspect-ratio:560/315",
        },
        _ = {
          name: "c732kj",
          styles: "display:block;width:100%;height:auto;aspect-ratio:560/315",
        },
        T = {
          name: "17j026p",
          styles: "position:relative;width:100%;max-width:744px;margin:auto",
        };
      function N(e) {
        var t = e.videoSrc,
          i = e.imgSrc,
          h = e.text,
          N = e.checkbox,
          P = e.href,
          I = e.onClose,
          X = (0, s.bU)(),
          D = (0, a.useRouter)(),
          L = "preview" === v.env.NEXT_PUBLIC_MODE,
          q = (0, c.fP)(["_ga"]),
          A = (0, n.Z)(q, 1)[0],
          M = (0, k.bQ)(),
          O = (0, k.a$)(),
          R = (0, r.useState)(!1),
          U = R[0],
          G = R[1],
          W = (0, r.useCallback)(
            function () {
              I && I(U), M();
            },
            [U, M, I]
          ),
          F = function (e) {
            if ((0, l.B)(e) && !L) {
              var t = (0, l.X)(
                ""
                  .concat("https://analyze.naruto-official.com")
                  .concat(D.asPath),
                [
                  { key: "title", value: document.title },
                  { key: "uuid", value: (0, p.p)() },
                  { key: "sessionId", value: (0, p.M)() },
                  { key: "cookie", value: A._ga },
                  { key: "referrer", value: document.referrer },
                  { key: "extlink", value: e },
                ]
              );
              fetch(t).catch(function (e) {
                return console.error(e);
              });
            }
          },
          H = (0, u.BX)("div", {
            css: T,
            children: [
              (0, u.BX)("div", {
                css: (0, o.iv)(
                  "display:flex;flex-direction:column;justify-content:center;min-width:500px;aspect-ratio:560/315;margin-bottom:30px;background:black;border:6px solid black;@media ",
                  d.r.media.preTablet,
                  "{min-width:300px;margin-bottom:24px;border:none;}",
                  ""
                ),
                onClick: function (e) {
                  e.stopPropagation();
                },
                children: [
                  t &&
                    (0, u.tZ)("iframe", {
                      css: _,
                      src: t,
                      width: "560",
                      height: "315",
                      frameBorder: "0",
                      allowFullScreen: !0,
                      title: "video",
                    }),
                  i &&
                    (P
                      ? (0, u.tZ)(g.Z, {
                          href: P,
                          children: (0, u.tZ)("a", {
                            target: "_blank",
                            rel: "noopener noreferrer",
                            onClick: function () {
                              return F(P);
                            },
                            children: (0, u.tZ)(f._, {
                              src: i,
                              loadStyle: E,
                              imgStyle: S,
                              alt: "",
                            }),
                          }),
                        })
                      : (0, u.tZ)(f._, {
                          src: i,
                          loadStyle: C,
                          imgStyle: z,
                          alt: "",
                        })),
                  h && (0, u.tZ)("p", { css: Z, children: h }),
                  (0, u.BX)("svg", {
                    width: "40",
                    height: "40",
                    stroke: "white",
                    onClick: W,
                    "aria-hidden": !0,
                    css: (0, o.iv)(
                      "position:absolute;top:0;right:calc(-40px - 6px - 80px);",
                      O > 1 && w,
                      " cursor:pointer;transition:opacity 0.25s;&:active{opacity:0.5;}@media ",
                      d.r.media.postPhone,
                      "{&:hover{opacity:0.5;}}@media ",
                      d.r.media.preTablet,
                      "{top:-54px;right:-12px;transform:scale(0.6);}",
                      ""
                    ),
                    children: [
                      (0, u.tZ)("line", {
                        x1: "0.5",
                        y1: "0.5",
                        x2: "39.5",
                        y2: "39.5",
                        strokeWidth: 3,
                      }),
                      (0, u.tZ)("line", {
                        x1: "39.5",
                        y1: "0.5",
                        x2: "0.5",
                        y2: "39.5",
                        strokeWidth: 3,
                      }),
                    ],
                  }),
                ],
              }),
              N &&
                (0, u.tZ)("div", {
                  css: (0, o.iv)(
                    "width:fit-content;margin:0 auto 19px;@media ",
                    d.r.media.preTablet,
                    "{margin-bottom:16px;transform:scale(1.2);}",
                    ""
                  ),
                  onClick: function (e) {
                    e.stopPropagation();
                  },
                  children: (0, u.tZ)(x, {
                    text: j[X],
                    checked: U,
                    onChange: G,
                  }),
                }),
              P &&
                (0, u.tZ)("div", {
                  css: y,
                  children: (0, u.tZ)(m.f, {
                    href: P,
                    icon: "kunai",
                    target: "_blank",
                    onClick: function () {
                      F(P);
                    },
                    css: (0, o.iv)(
                      "width:200px;height:40px;font-size:18px;&:not(:lang(ja)){font-size:22px;}@media ",
                      d.r.media.preTablet,
                      "{width:267px;height:48px;font-size:20px;&:not(:lang(ja)){font-size:27px;}}",
                      ""
                    ),
                    children: B[X],
                  }),
                }),
            ],
          });
        return (0, u.tZ)("div", {
          onClick: W,
          "aria-hidden": !0,
          css: (0, o.iv)(
            "display:flex;width:100%;height:100%;padding:24px;",
            1 === O && b,
            ";",
            ""
          ),
          children: H,
        });
      }
      var j = {
          ja: "\u4eca\u65e5\u306f\u3082\u3046\u8868\u793a\u3057\u306a\u3044",
          en: "Do not show again today",
          fr: "Ne plus afficher",
          de: "Heute nicht mehr anzeigen.",
          es: "No volver a mostrar hoy",
          it: "Non mostrare pi\xf9",
        },
        B = {
          ja: "\u8a73\u3057\u304f\u306f\u3053\u3061\u3089",
          en: "MORE DETAILS",
          fr: "PLUS D\u2019INFOS",
          de: "STREAMINGDIENSTE",
          es: "M\xc1S DETALLES",
          it: "DETTAGLI",
        };
    },
    89660: function (e, t, i) {
      i.d(t, {
        A: function () {
          return o;
        },
        L: function () {
          return n;
        },
      });
      var n = {
          boruto: "boruto",
          naruto1: "naruto-shounen",
          naruto2: "naruto-shippu",
        },
        o = {
          boruto: "boruto",
          "naruto-shounen": "naruto1",
          "naruto-shippu": "naruto2",
        };
    },
  },
]);
