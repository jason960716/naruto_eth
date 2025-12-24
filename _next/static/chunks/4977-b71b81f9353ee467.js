"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [4977],
  {
    41128: function (t, n, e) {
      e.d(n, {
        hT: function () {
          return l;
        },
        Vd: function () {
          return u;
        },
      });
      var r = e(67294),
        i = e(8503),
        o = e(81672),
        c = e(1183),
        a = e(62089),
        s = 200;
      var u = function (t, n) {
        var e = (0, i.bU)(),
          u = (0, c.lS)(n),
          l = (0, o.dQ)(),
          d = (0, r.useMemo)(
            function () {
              var n = (0, c.iv)(null !== l && void 0 !== l ? l : "", e, u);
              return (0, c.ue)(t, n);
            },
            [l, e, u, t]
          ),
          m = (0, a.RQ)(d);
        return (
          (0, a.hQ)(l && m),
          (0, r.useEffect)(
            function () {
              var e = "method name: ".concat(t, " param: ").concat(n);
              if (m.error)
                throw new Error("".concat(m.error.message, " ").concat(e));
              if (m.result && m.result.statusCode !== s)
                throw new Error(
                  "Status code is ".concat(m.result.statusCode, ". ").concat(e)
                );
            },
            [t, n, m]
          ),
          m
        );
      };
      function l(t) {
        return Array.isArray(t)
          ? t.map(function (t) {
              return "" !== t
                ? ""
                    .concat(
                      "https://cmsapi-frontend.naruto-official.com/site/api/",
                      "naruto/Image/get?path="
                    )
                    .concat(t)
                : "";
            })
          : "" !== t
          ? ""
              .concat(
                "https://cmsapi-frontend.naruto-official.com/site/api/",
                "naruto/Image/get?path="
              )
              .concat(t)
          : t;
      }
    },
    82317: function (t, n, e) {
      e.d(n, {
        c: function () {
          return a;
        },
      });
      var r = e(67294),
        i = e(8503),
        o = e(35944);
      var c = { name: "e0dnmk", styles: "cursor:pointer" },
        a = function () {
          var t = (0, i.bU)(),
            n = (0, r.useCallback)(function () {
              window.scrollTo({ top: 0, behavior: "smooth" });
            }, []);
          return (0, o.tZ)("button", {
            onClick: n,
            css: c,
            children: (0, o.tZ)("img", {
              src: "/common/page_top_btn_".concat(t, ".svg"),
              alt: "page top button",
            }),
          });
        };
    },
    92301: function (t, n, e) {
      e.d(n, {
        p: function () {
          return c;
        },
      });
      var r = e(9008),
        i = e.n(r),
        o = (e(67294), e(35944)),
        c = function (t) {
          var n = t.title,
            e = t.description,
            r = t.url,
            c = t.imgUrl,
            a = t.imgWidth,
            s = t.imgHeight,
            u = t.twitterCard,
            l =
              null !== c && void 0 !== c
                ? c
                : "".concat(
                    "https://naruto-official.com",
                    "/common/ogp/NTOS_OG-main.png"
                  ),
            d = c ? a : 1200,
            m = c ? s : 630;
          return (0, o.BX)(i(), {
            children: [
              (0, o.tZ)("title", { children: n }),
              (0, o.tZ)("link", { rel: "icon", href: "/meta-images/logo.png" }),
              (0, o.tZ)("link", {
                rel: "apple-touch-icon",
                href: "/meta-images/logo.png",
              }),
              (0, o.tZ)("meta", {
                name: "viewport",
                content: "width=device-width,initial-scale=1.0",
              }),
              (0, o.tZ)("meta", { name: "description", content: e }),
              (0, o.tZ)("meta", { property: "og:url", content: r }),
              (0, o.tZ)("meta", { property: "og:title", content: n }),
              (0, o.tZ)("meta", { property: "og:site_name", content: n }),
              (0, o.tZ)("meta", { property: "og:description", content: e }),
              (0, o.tZ)("meta", { property: "og:type", content: "website" }),
              (0, o.tZ)("meta", { property: "og:image", content: l }),
              d &&
                (0, o.tZ)("meta", {
                  property: "og:image:width",
                  content: String(d),
                }),
              m &&
                (0, o.tZ)("meta", {
                  property: "og:image:height",
                  content: String(m),
                }),
              (0, o.tZ)("meta", {
                name: "twitter:site",
                content: "@NARUTO_kousiki",
              }),
              (0, o.tZ)("meta", { name: "twitter:card", content: u }),
            ],
          });
        };
    },
    72601: function (t, n, e) {
      e.d(n, {
        m: function () {
          return a;
        },
      });
      var r = e(70917),
        i = (e(67294), e(8503)),
        o = e(76132),
        c = e(35944);
      var a = function (t) {
          var n = t.breakPoint,
            e = void 0 === n ? 1024 : n,
            a = t.lineUp,
            l = t.tint,
            d = void 0 === l ? "black" : l,
            m = (0, i.bU)(),
            p = "screen and (max-width: ".concat(e - 1, "px)");
          return (0, c.BX)("div", {
            css: (0, r.iv)(
              "display:flex;flex-direction:column;align-items:center;justify-content:flex-end;width:25px;@media ",
              p,
              "{flex-direction:",
              a ? "row" : "column",
              ";width:auto;height:",
              a ? "fit-content" : "70px",
              ";}",
              ""
            ),
            children: [
              (0, c.tZ)("div", {
                css: (0, r.iv)(
                  "font-family:'Bebas Neue';font-size:12px;pointer-events:none;transform:rotate(90deg);@media ",
                  p,
                  "{padding-right:",
                  a ? "10px" : "initial",
                  ";",
                  !a && "font-size: 20px;",
                  " margin-top:2px;transform:rotate(0);",
                  "white" === d ? "color: white;" : "",
                  ";}",
                  u[m].style,
                  ";",
                  ""
                ),
                children: u[m].word,
              }),
              (0, c.BX)("div", {
                css: (0, r.iv)(
                  "display:flex;flex-direction:column;column-gap:15px;align-items:center;justify-content:space-between;width:auto;height:96px;@media ",
                  p,
                  "{flex-direction:row;height:",
                  a ? "fit-content" : "25px",
                  ";}",
                  ""
                ),
                children: [
                  (0, c.tZ)(o.kP, {
                    children: (0, c.BX)("picture", {
                      children: [
                        (0, c.tZ)("source", {
                          srcSet:
                            "black" === d
                              ? "/common/icon/x_icon.svg"
                              : "/common/icon/x_icon_white.svg",
                          media: p,
                        }),
                        (0, c.tZ)("img", {
                          css: s(p, a),
                          width: 30,
                          height: 24,
                          src: "/common/icon/x_icon.svg",
                          alt: "X",
                        }),
                      ],
                    }),
                  }),
                  (0, c.tZ)(o.DG, {
                    children: (0, c.BX)("picture", {
                      children: [
                        (0, c.tZ)("source", {
                          srcSet:
                            "black" === d
                              ? "/social/telegram.svg"
                              : "/common/icon/facebook_icon_white.svg",
                          media: p,
                        }),
                        (0, c.tZ)("img", {
                          css: s(p, a),
                          width: 27,
                          height: 27,
                          src: "/social/telegram.svg",
                          alt: "facebook",
                        }),
                      ],
                    }),
                  }),
                  (0, c.tZ)(o.Gx, {
                    children: (0, c.BX)("picture", {
                      children: [
                        (0, c.tZ)("source", {
                          srcSet:
                            "black" === d
                              ? "/social/dextools.svg"
                              : "/common/icon/line_icon_white.svg",
                          media: p,
                        }),
                        (0, c.tZ)("img", {
                          css: s(p, a),
                          width: 29,
                          height: 27,
                          src: "/social/dextools.svg",
                          alt: "line",
                        }),
                      ],
                    }),
                  }),
                ],
              }),
            ],
          });
        },
        s = function (t, n) {
          return (0, r.iv)(
            "display:block;width:25px;cursor:pointer;@media ",
            t,
            "{width:",
            n ? "25px" : "30px",
            ";}",
            ""
          );
        },
        u = {
          ja: {
            word: "SHARE",
            style: { name: "qzmnd2", styles: "padding-right:10px" },
          },
          en: {
            word: "SHARE",
            style: { name: "qzmnd2", styles: "padding-right:10px" },
          },
          fr: {
            word: "PARTAGER",
            style: { name: "w8m5lm", styles: "padding-right:26px" },
          },
          de: {
            word: "TEILEN",
            style: { name: "qzmnd2", styles: "padding-right:10px" },
          },
          es: {
            word: "COMPARTIR",
            style: { name: "85417f", styles: "padding-right:30px" },
          },
          it: {
            word: "CONDIVIDI",
            style: { name: "2l87vr", styles: "padding-right:34px" },
          },
        };
    },
    22455: function (t, n, e) {
      e.d(n, {
        m: function () {
          return s;
        },
      });
      var r = e(67294),
        i = e(41128),
        o = e(17484),
        c = e(35944),
        a = function (t) {
          var n = t.commonBannerList,
            e = t.bannerCss;
          return (0, c.tZ)(c.HY, {
            children: n.map(function (t, n) {
              return (0,
              c.tZ)("div", { css: e, children: (0, c.tZ)(o.j, { href: t.url, src: t.src, spSrc: t.spSrc, target: "same" === t.windowType ? "_self" : "_blank" }) }, n);
            }),
          });
        },
        s = function (t) {
          var n = t.bannerCss,
            e = (0, i.Vd)("siteCommon", {}).result,
            o = (0, r.useMemo)(
              function () {
                try {
                  var t;
                  return null === e ||
                    void 0 === e ||
                    null === (t = e.data.common_banner[0]) ||
                    void 0 === t
                    ? void 0
                    : t.content.map(function (t) {
                        return {
                          banner_id: t.banner_id,
                          url: t.url,
                          src: (0, i.hT)(t.image),
                          spSrc: (0, i.hT)(t.image_sp),
                          windowType: t.window_type,
                        };
                      });
                } catch (n) {
                  return;
                }
              },
              [null === e || void 0 === e ? void 0 : e.data.common_banner]
            );
          return (0, c.tZ)(c.HY, {
            children: o && (0, c.tZ)(a, { commonBannerList: o, bannerCss: n }),
          });
        };
    },
    22451: function (t, n, e) {
      e.d(n, {
        YD: function () {
          return c;
        },
        rS: function () {
          return a;
        },
        sx: function () {
          return o;
        },
      });
      var r = e(16835),
        i = e(67294);
      function o(t, n) {
        var e = i.useState(!1),
          o = (0, r.Z)(e, 2),
          c = o[0],
          a = o[1];
        return (
          i.useEffect(
            function () {
              if (null != t && null != t.current) {
                var e = t.current,
                  i = new IntersectionObserver(function (t) {
                    var n = (0, r.Z)(t, 1)[0];
                    a(n.isIntersecting);
                  }, n);
                return (
                  i.observe(e),
                  function () {
                    return i.unobserve(e);
                  }
                );
              }
            },
            [t, n]
          ),
          c
        );
      }
      function c(t) {
        var n =
            arguments.length > 1 && void 0 !== arguments[1]
              ? arguments[1]
              : { rootMargin: "-25% 0%", threshold: 0 },
          e = i.useState(!1),
          o = (0, r.Z)(e, 2),
          c = o[0],
          a = o[1];
        return (
          i.useEffect(
            function () {
              if (!c && null != t && null != t.current) {
                var e = t.current,
                  i = new IntersectionObserver(function (t) {
                    (0, r.Z)(t, 1)[0].isIntersecting && (a(!0), i.unobserve(e));
                  }, n);
                return (
                  i.observe(e),
                  function () {
                    return i.unobserve(e);
                  }
                );
              }
            },
            [t, c, n]
          ),
          c
        );
      }
      function a(t) {
        var n = o(t),
          e = i.useState(0),
          c = (0, r.Z)(e, 2),
          a = c[0],
          s = c[1],
          u = i.useState(0),
          l = (0, r.Z)(u, 2),
          d = l[0],
          m = l[1];
        return (
          i.useEffect(
            function () {
              if (t && t.current) {
                var n = t.current.getBoundingClientRect();
                s(window.scrollY + n.top + n.height / 2);
              }
            },
            [t]
          ),
          i.useEffect(
            function () {
              var t = function () {
                var t = 2 * ((a - window.scrollY) / window.innerHeight - 0.5);
                m(t);
              };
              return (
                n
                  ? window.addEventListener("scroll", t)
                  : window.removeEventListener("scroll", t),
                function () {
                  return window.removeEventListener("scroll", t);
                }
              );
            },
            [n, a]
          ),
          d
        );
      }
    },
  },
]);
