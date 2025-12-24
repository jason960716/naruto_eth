"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [3960],
  {
    32974: function (e, t, i) {
      i.d(t, {
        V: function () {
          return c;
        },
      });
      var n = i(70917),
        o = i(48710),
        r = i(36443),
        a = i(35944);
      function c(e) {
        var t = e.className,
          i = e.slug,
          c = (e.title, e.ruby, e.run),
          l = void 0 === c || c,
          s = e.scale,
          p = void 0 === s ? "1" : s,
          d = e.h1,
          b = e.long,
          u = void 0 !== b && b,
          x = e.isTwoLines,
          m = void 0 !== x && x,
          g = e.isSmall,
          h = void 0 !== g && g,
          f = "2/3" === p ? 2 / 3 : 1;
        return (0, a.BX)(a.HY, {
          children: [
            d && (0, a.tZ)("h1", { className: "visually-hidden", children: d }),
            (0, a.tZ)(r._, {
              className: t,
              slug: i,
              run: l,
              height: u ? 80 : 80 * f,
              isTwoLine: m,
              isSmall: h,
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
    62707: function (e, t, i) {
      i.d(t, {
        P: function () {
          return pe;
        },
      });
      var n = i(27812),
        o = i(67294),
        r = i(41128),
        a = i(8503),
        c = i(80072),
        l = i(11047),
        s = i(28613),
        p = i(65313),
        d = i(73938),
        b = i(59499),
        u = i(16835),
        x = i(69873),
        m = i(33587),
        g = i(77865),
        h = i(27715),
        f = i(10255),
        k = i(35944);
      function v(e, t) {
        var i = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t &&
            (n = n.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            i.push.apply(i, n);
        }
        return i;
      }
      var w = function (e) {
          var t = e.articleDto,
            i = e.children,
            n = (0, a.bU)(),
            p = (0, x.W)(),
            d = (0, g.A)(),
            h = (0, u.Z)(d, 1)[0].universal,
            w = (0, s.n)(n),
            Z = (0, o.useMemo)(
              function () {
                var e, i;
                if (t && t.related_item)
                  return null !==
                    (e =
                      null === (i = t.related_item[w]) || void 0 === i
                        ? void 0
                        : i.map(function (e) {
                            var t = e.path;
                            return (
                              t.startsWith("/news/") && (t = t.substring(6)), t
                            );
                          })) && void 0 !== e
                    ? e
                    : [];
              },
              [t, w]
            ),
            q = (0, o.useState)(function () {
              var e = {};
              return (
                null === Z ||
                  void 0 === Z ||
                  Z.forEach(function (t) {
                    e[t] = null;
                  }),
                e
              );
            }),
            _ = q[0],
            T = q[1],
            j = Object.values(_).filter(function (e) {
              return e && e._id && (0, m.J)(e, h, p);
            }),
            z = (0, o.useMemo)(
              function () {
                return j.map(function (e) {
                  var t,
                    i,
                    o,
                    a =
                      null !==
                        (t =
                          null === (i = e.categories) ||
                          void 0 === i ||
                          null === (o = i.subcategory) ||
                          void 0 === o
                            ? void 0
                            : o.map(function (e) {
                                return e.name;
                              })) && void 0 !== t
                        ? t
                        : [];
                  return {
                    id: e._id,
                    title: e.title,
                    categories: a,
                    imgUrl: (0, r.hT)(e.thumbnail),
                    date: (0, l.Am)(e.dspdate, n),
                    path: e.path,
                    isNew: (0, l.e_)(e.startdate, c.E),
                    isPickedUp: (0, l.e_)(e.startdate, c.e) && "1" === e.pickup,
                    relatedPageIds: Z,
                  };
                });
              },
              [j, Z, n]
            ),
            O = (0, o.useCallback)(function (e, t) {
              T(function (i) {
                return (
                  (i[e] = t),
                  (function (e) {
                    for (var t = 1; t < arguments.length; t++) {
                      var i = null != arguments[t] ? arguments[t] : {};
                      t % 2
                        ? v(Object(i), !0).forEach(function (t) {
                            (0, b.Z)(e, t, i[t]);
                          })
                        : Object.getOwnPropertyDescriptors
                        ? Object.defineProperties(
                            e,
                            Object.getOwnPropertyDescriptors(i)
                          )
                        : v(Object(i)).forEach(function (t) {
                            Object.defineProperty(
                              e,
                              t,
                              Object.getOwnPropertyDescriptor(i, t)
                            );
                          });
                    }
                    return e;
                  })({}, i)
                );
              });
            }, []);
          return (0, k.BX)(f.S, {
            articles: z,
            children: [
              null === Z || void 0 === Z
                ? void 0
                : Z.map(function (e) {
                    return (0, k.tZ)(y, { pageId: e, onReceive: O }, e);
                  }),
              i,
            ],
          });
        },
        y = function (e) {
          var t = e.pageId,
            i = e.onReceive,
            n = (0, r.Vd)("articleGet", {
              data: (0, h.k8)({ page: t }),
            }).result;
          return (
            (0, o.useEffect)(
              function () {
                n && i(t, n.data.article);
              },
              [i, t, n]
            ),
            (0, k.tZ)(k.HY, {})
          );
        },
        Z = i(95541),
        q = i(70917),
        _ = i(48710),
        T = i(77340),
        j = i(72462),
        z = i(86090),
        O = i(32974),
        N = i(25701),
        E = i(11163),
        B = i(55756),
        S = i(7673),
        I = i(53877),
        P = i(25935);
      var A = {
        name: "1ceix6p",
        styles:
          ".blocks .row,.blocks [data-type]:not([data-type='container-content']){margin-top:72px;word-break:break-word;}.blocks .row:first-of-type,.blocks [data-type]:not([data-type='container-content']):first-of-type{margin-top:0;}@media screen and (max-width: 1023px){.blocks .row,.blocks .col-xs-12{margin-top:36px;}.blocks .col-xs-12:first-of-type{margin-top:0;}}.blocks .rich a{color:var(--primary-color);}.blocks .rich a:hover{text-decoration:underline;}.blocks .rich a[target='_blank']::after{display:inline-block;width:16px;height:16px;margin-left:0.25em;content:'';background:url('/blocks/link_icon_primary.svg') no-repeat center/contain;}.blocks .rich p{margin-bottom:1.5em;}.blocks .rich p:last-of-type{margin-bottom:0;}.blocks .rich ul{font-size:14px;line-height:24px;}.blocks .rich ul li{display:flex;align-items:center;margin-bottom:15px;}.blocks .rich ul li:last-of-type{margin-bottom:0;}.blocks .rich ul li::before{width:14px;height:14px;margin-right:12px;content:'';background:url('/blocks/list_item_icon.svg') no-repeat center/contain;}@media screen and (max-width: 1023px){.blocks .rich ul{line-height:21px;}.blocks .rich ul li::before{margin-right:8px;}}.blocks .pane.box{padding:30px;border:3px solid black;}.blocks .hr{height:2px;background-image:linear-gradient(to right, #000, #000 3px, transparent 3px, transparent 6px);background-repeat:repeat-x;background-position:left bottom;background-size:6px 2px;border:none;}.blocks .h2{position:relative;padding:18px 0 20px 38px;border-style:solid;border-image-source:url('/blocks/scroll.svg');border-image-slice:30;border-image-width:30px;}.blocks .h2 h2{margin:0;font-family:var(--comic-font);font-size:30px;font-weight:bold;line-height:1.5;}.blocks .h3{display:flex;align-items:center;}.blocks .h3::before{width:48px;height:32px;content:'';background:url('/blocks/konoha.svg') no-repeat center/contain;}.blocks .h3 h3{margin:0 0 0 20px;font-family:var(--comic-font);font-size:28px;font-weight:bold;line-height:1.5;}.blocks .h4{display:flex;align-items:center;}.blocks .h4::before{width:36px;height:36px;content:'';background:url('/blocks/sharin.svg') no-repeat center/contain;}.blocks .h4 h4{margin:0 0 0 12px;font-family:var(--comic-font);font-size:20px;font-weight:bold;line-height:1.5;}.blocks .h5{margin:0;font-family:var(--comic-font);font-size:20px;font-weight:bold;line-height:1.5;}@media (max-width: 1023px){.blocks .h2 h2{font-size:20px;}.blocks .h3::before{width:41px;height:32px;}.blocks .h3 h3{font-size:18px;}.blocks .h4 h4,.blocks .h5{font-size:16px;}}.blocks .blockquote{position:relative;padding:20px 40px 15px;font-size:14px;background-color:#f2f2f2;}.blocks .blockquote::before{position:absolute;top:12px;left:12px;width:18px;height:14px;content:'';background:url('/blocks/double_quotation.svg') no-repeat center/contain;}.blocks .blockquote::after{position:absolute;right:12px;bottom:12px;width:18px;height:14px;content:'';background:url('/blocks/double_quotation.svg') no-repeat center/contain;transform:rotate(180deg);}@media screen and (max-width: 1023px){.blocks .blockquote{padding:48px 16px;line-height:26px;}.blocks .blockquote::before{top:18px;left:14px;}.blocks .blockquote::after{right:14px;bottom:20px;}}.blocks .caution{position:relative;display:flex;align-items:center;padding:21px 17px 17px 16px;border:3px solid var(--primary-color);}.blocks .caution::before{flex:none;width:28px;height:24px;content:'';background:url('/blocks/caution_icon.svg') no-repeat center/contain;}.blocks .caution .block-body{margin-left:12px;font-size:14px;line-height:28px;color:var(--primary-color);}@media screen and (max-width: 1023px){.blocks .caution{flex-direction:column;align-items:center;padding:28px 20px 20px;}.blocks .caution::before{width:40px;height:34px;}.blocks .caution .block-body{margin-top:24px;margin-left:0;line-height:26px;}}.blocks .photo{display:block;}.blocks .photo img{width:100%;max-width:100%;height:auto;}.blocks .photo figcaption{margin-top:10px;font-size:13px;line-height:18px;color:#666;}.blocks .photo.box{padding:7.5%;background:url('/blocks/image_bg.png') no-repeat center/cover;border:3px solid black;}@media (max-width: 1023px){.blocks .photo figcaption{font-size:12px;}}.blocks .video iframe{display:block;width:100%;aspect-ratio:16/9;}.blocks .button{display:inline-flex;align-items:center;height:40px;padding:5px 10px;font-weight:bold;border:2px solid black;transition:color 0.25s,background-color 0.25s;}.blocks .button .title{flex:1;}.blocks .button .icon{margin-left:10px;transition:fill 0.25s;}.blocks .button:hover{color:white;background:black;}.blocks .button:hover .icon{fill:white;transform:translateZ(0);animation:0.25s linear kunai-icon-hover;animation-iteration-count:2;}.blocks .button[target='_blank']:hover .icon{animation:none;}@keyframes kunai-icon-hover{to{transform:translateX(-8px);}}.blocks .button-set{display:flex;flex-direction:column;align-items:flex-start;}.blocks .button-set .button{margin-top:20px;}.blocks .button-set .button:first-of-type{margin-top:0;}.blocks .button-set.big .button{min-width:366px;height:72px;padding:10px 20px;font-size:20px;}.blocks .button-set.big .button .icon{margin-left:20px;}@media screen and (max-width: 1023px){.blocks .button-set{align-items:center;}.blocks .button-set.big .button{min-width:auto;}}",
      };
      var X = {
        name: "qtwnpt",
        styles:
          ".blocks .row{margin-right:-15px;margin-left:-15px;}.blocks .row::before,.blocks .row::after{display:table;content:' ';}.blocks .row::after{clear:both;}.blocks .col-xs-12,.blocks .col-xs-6,.blocks .col-xs-4,.blocks .col-sm-12,.blocks .col-sm-6,.blocks .col-sm-4,.blocks .col-md-12,.blocks .col-md-6,.blocks .col-md-4{float:left;padding-right:15px;padding-left:15px;}.blocks .col-sm-12,.blocks .col-md-12{width:100%;}.blocks .col-sm-6,.blocks .col-md-6{width:50%;}.blocks .col-sm-4,.blocks .col-md-4{width:33.3333%;}@media screen and (max-width: 1023px){.blocks .col-xs-12{width:100%;}.blocks .col-xs-6{width:50%;}.blocks .col-xs-4{width:33.3333%;}}",
      };
      var C = {
          name: "1hkdi6w",
          styles:
            ".blocks .enquete .h5{margin:10px 0;}.blocks .enquete ul{border-bottom:2px solid black;}.blocks .enquete li{background-color:white;}.blocks .enquete li button{display:flex;align-items:center;width:100%;min-height:52px;padding:10px 12px;color:inherit;border-top:2px solid black;}.blocks .enquete li .icon{margin-right:12px;}.blocks .enquete li[data-checked]{color:white;background:black;}.blocks .enquete li[data-checked] .icon{fill:var(--primary-color);}@media screen and (max-width: 1023px){.blocks .enquete ul{font-size:14px;}}.blocks .send-box{display:flex;align-items:center;justify-content:flex-end;}@media screen and (max-width: 1023px){.blocks .send-box{display:block;}}.blocks .enquete.single-text,.enquete.multi-text,.enquete.select-text,.enquete.enquete-image.single,.enquete.enquete-image.multi{margin-bottom:50px;}.blocks .enquete .remain-msg{display:flex;align-items:center;justify-content:flex-end;margin-top:30px;font-size:14px;}@media screen and (max-width: 1023px){.blocks .enquete .remain-msg{display:block;width:100%;margin:10px 0;text-align:center;}}.blocks .send-box .answer-button{height:40px;padding:0 20px;font-family:var(--comic-font);font-size:18px;line-height:40px;color:white;background-color:black;}@media screen and (max-width: 1023px){.blocks .send-box .answer-button{width:100%;padding:0;text-align:center;}}.blocks .enquete.single-text .input{width:100%;padding:8px 20px;background-color:#f2f2f2;border:2px solid black;}.blocks .enquete.multi-text .textarea{width:100%;height:200px;padding:20px;line-height:1.5;resize:none;background-color:#f2f2f2;border:2px solid black;}.blocks .enquete-image .annotation{margin-top:7px;font-size:14px;}.blocks .enquete-image .grid{display:grid;grid-template-columns:repeat(2, calc(50% - 25px));grid-auto-rows:203px;row-gap:30px;column-gap:50px;width:100%;}@media screen and (max-width: 1023px){.blocks .enquete-image .grid{display:grid;grid-template-columns:repeat(1, 100%);grid-auto-rows:auto;row-gap:40px;width:100%;}}.block .enquete-image .grid .grid-item{width:100%;}.blocks .enquete-image .choice-box{display:flex;justify-content:space-between;aspect-ratio:456/203;background-color:#e8e8e8;border:2px solid black;}@media screen and (max-width: 1023px){.blocks .enquete-image .choice-box{position:relative;aspect-ratio:296/242;}}.blocks .enquete .thumbnail{display:flex;width:100%;height:100px;}.blocks .enquete .thumbnail img{width:100%;height:100%;object-fit:fill;}.blocks .enquete-image .choice-box .img-box{display:flex;flex:1;justify-content:center;}@media screen and (max-width: 1023px){.blocks .enquete-image .choice-box .img-box{align-items:center;height:calc(100% - 75px);}}.blocks .enquete-image .choice-box .img-box img{display:block;width:100%;user-select:none;object-fit:contain;}.blocks .enquete-image .choice-box .input-box{position:relative;display:flex;align-items:center;justify-content:center;width:96px;background-color:white;}@media screen and (max-width: 1023px){.blocks .enquete-image .choice-box .input-box{position:absolute;bottom:0;width:100%;height:75px;}}.blocks .enquete-image .choice-box .input-box .input-bg{display:flex;align-items:center;justify-content:center;width:100%;height:100%;}.blocks .enquete-image .choice-box .input-box input:checked+.input-bg{background-color:black;}.blocks .enquete-image.single .input-box input:checked+.input-bg .icon{fill:var(--primary-color);}.blocks .enquete-image.multi .choice-box .input-box .input-bg .checkbox{display:flex;align-items:center;justify-content:center;width:22px;height:22px;border:1px solid black;border-radius:5px;}.blocks .enquete-image.multi .choice-box .input-box .input-bg .checkbox .icon{display:none;}.blocks .enquete-image.multi .choice-box .input-box input:checked+.input-bg .checkbox .icon{display:block;}.blocks .enquete-image.multi .choice-box .input-box input:checked+.input-bg .checkbox{background-color:var(--primary-color);border:none;}",
        },
        W = {
          replace: function (e) {
            if (e instanceof P.W_ && e.attribs["data-enq-id"])
              return (0, k.tZ)(k.HY, {});
          },
        };
      function M(e) {
        var t,
          i = e.html;
        return (0, k.tZ)("div", {
          css: [X, A, C, "", ""],
          children: (0, P.ZP)(
            null !== (t = (0, h.ux)((0, h.T3)(i))) && void 0 !== t ? t : "",
            W
          ),
        });
      }
      var D = { name: "19ojmcp", styles: "margin-top:72px" },
        U = function (e) {
          var t = e.description;
          return (0, k.tZ)("div", {
            css: D,
            children:
              t &&
              (0, k.tZ)("div", {
                css: (0, q.iv)(
                  "position:relative;margin-bottom:48px;background-color:#f2f2f2;@media ",
                  _.r.media.preTablet,
                  "{margin-bottom:52px;}",
                  ""
                ),
                children: (0, k.tZ)("div", {
                  css: (0, q.iv)(
                    "padding:20px 40px 15px;font-size:14px;line-height:28px;white-space:normal;a{color:var(--primary-color);}a:hover{text-decoration:underline;}a::after{display:inline-block;width:16px;height:16px;margin-left:0.25em;content:'';background:url('/blocks/link_icon_primary.svg') no-repeat center/contain;}@media ",
                    _.r.media.preTablet,
                    "{padding:20px 16px;line-height:26px;}",
                    ""
                  ),
                  dangerouslySetInnerHTML: { __html: t },
                }),
              }),
          });
        };
      var H = {
          name: "1kyerui",
          styles: "font-size:14px;white-space:pre-wrap",
        },
        L = function (e) {
          var t = e.notice;
          return (0, k.tZ)(k.HY, {
            children: t && (0, k.tZ)("p", { css: H, children: t }),
          });
        },
        Y = i(37868);
      var V = {
          name: "rcp3jv",
          styles:
            "display:inline-flex;align-items:center;height:22px;padding:0 8px;font-family:var(--comic-font);font-size:14px;border:1px solid #000;border-radius:20px",
        },
        R = {
          name: "7cj843",
          styles:
            "display:flex;flex-wrap:wrap;gap:5px;align-items:flex-start;margin-bottom:49px",
        },
        F = function (e) {
          var t = e.tags,
            i = e.labels;
          return (0, k.tZ)("div", {
            css: R,
            children: i.map(function (e, i) {
              return (0,
              k.tZ)(Y.Z, { href: "/news?tag=".concat(t[i]), children: (0, k.tZ)("a", { children: (0, k.BX)("div", { css: V, children: ["#", e] }) }) }, i);
            }),
          });
        },
        G = function (e) {
          var t = e.children;
          return (0, k.tZ)("h1", {
            css: (0, q.iv)(
              "margin-bottom:10px;font-family:var(--comic-font);font-size:36px;line-height:1.5;@media ",
              _.r.media.preTablet,
              "{font-size:24px;}",
              ""
            ),
            children: t,
          });
        };
      var J = {
          name: "qhsk2x",
          styles: "display:flex;align-items:center;margin-left:12px",
        },
        $ = function (e) {
          var t = e.isNew,
            i = e.categories,
            n = e.date;
          return (0, k.BX)("div", {
            css: (0, q.iv)(
              "display:flex;align-items:center;margin-bottom:20px;@media ",
              _.r.media.preTablet,
              "{margin-bottom:18px;}",
              ""
            ),
            children: [
              t &&
                (0, k.tZ)("div", {
                  css: (0, q.iv)(
                    "display:flex;align-items:center;height:34px;padding:0 7px;background:rgb(250 148 39);@media ",
                    _.r.media.preTablet,
                    "{height:24px;}",
                    ""
                  ),
                  children: (0, k.tZ)("p", {
                    css: (0, q.iv)(
                      "width:100%;margin-top:1px;font-family:'Bebas Neue';font-size:22px;line-height:1;color:rgb(0 0 0);text-align:center;@media ",
                      _.r.media.preTablet,
                      "{font-size:14px;}",
                      ""
                    ),
                    children: "NEW",
                  }),
                }),
              i &&
                i.map(function (e, t) {
                  return (0,
                  k.tZ)("div", { css: (0, q.iv)("display:flex;align-items:center;height:34px;padding:0 7px;background:rgb(0 0 0);@media ", _.r.media.preTablet, "{height:24px;}", ""), children: (0, k.tZ)("p", { css: (0, q.iv)("font-family:var(--comic-impact-font);font-size:20px;line-height:1;color:rgb(250 148 39);text-align:center;@media ", _.r.media.preTablet, "{font-size:12px;}", ""), children: e }) }, t);
                }),
              (0, k.tZ)("div", {
                css: J,
                children: (0, k.tZ)("p", {
                  css: (0, q.iv)(
                    "margin-top:1px;font-family:'Bebas Neue';font-size:20px;line-height:1;@media ",
                    _.r.media.preTablet,
                    "{font-size:18px;}",
                    ""
                  ),
                  children: n,
                }),
              }),
            ],
          });
        },
        K = i(83454);
      var Q = {
          name: "1kk0f85",
          styles:
            "height:9px;margin-bottom:30px;border-top:solid 5px;border-bottom:solid 2px",
        },
        ee = function (e) {
          var t = e.news,
            i = (0, E.useRouter)(),
            n = "preview" === K.env.NEXT_PUBLIC_MODE,
            r = (0, B.fP)(["_ga"]),
            a = (0, u.Z)(r, 1)[0];
          return (
            (0, o.useEffect)(function () {
              n ||
                document.querySelectorAll("a.link").forEach(function (e) {
                  var t = e.getAttribute("href");
                  null !== t &&
                    (0, S.B)(t) &&
                    e.addEventListener("click", function () {
                      var e = (0, S.X)(
                        ""
                          .concat("https://analyze.naruto-official.com")
                          .concat(i.asPath),
                        [
                          { key: "title", value: document.title },
                          { key: "uuid", value: (0, I.p)() },
                          { key: "sessionId", value: (0, I.M)() },
                          { key: "cookie", value: a._ga },
                          { key: "referrer", value: document.referrer },
                          { key: "extlink", value: t },
                        ]
                      );
                      fetch(e).catch(function (e) {
                        return console.error(e);
                      });
                    });
                });
            }, []),
            (0, k.BX)("div", {
              children: [
                (0, k.tZ)($, {
                  isNew: t.isNew,
                  categories: t.categories,
                  date: t.date,
                }),
                (0, k.tZ)("div", { css: Q }),
                (0, k.tZ)(G, { children: t.title }),
                (0, k.tZ)(F, { tags: t.tags, labels: t.tagsName }),
                t.content && (0, k.tZ)(M, { html: t.content }),
                t.product &&
                  t.product.map(function (e, t) {
                    return (0, k.tZ)(U, { description: e.description }, t);
                  }),
                t.product && (0, k.tZ)(L, { notice: t.product[0].notice }),
              ],
            })
          );
        },
        te = i(52431);
      var ie = {
          name: "1eoy87d",
          styles: "display:flex;justify-content:space-between",
        },
        ne = {
          name: "1218p1i",
          styles:
            "position:fixed;width:100%;height:100vh;object-fit:cover;object-position:center top",
        },
        oe = function (e) {
          var t = e.news,
            i = (0, a.bU)();
          return (0, k.BX)("main", {
            css: re.main,
            children: [
              (0, k.BX)("picture", {
                children: [
                  (0, k.tZ)("source", {
                    srcSet: "/common/news/bg_newsdetail_1_sp.webp",
                    media: _.r.media.preTablet,
                  }),
                  (0, k.tZ)("img", {
                    css: ne,
                    src: "/common/news/bg_newsdetail_1_pc.webp",
                    alt: "",
                  }),
                ],
              }),
              (0, k.tZ)("div", {
                css: (0, q.iv)(
                  "position:absolute;top:186px;width:100%;@media ",
                  _.r.media.preTablet,
                  "{top:177px;}",
                  ""
                ),
                children: (0, k.tZ)(T.W, {
                  children: (0, k.BX)("div", {
                    css: ie,
                    children: [
                      (0, k.tZ)(O.V, {
                        title: "NEWS",
                        ruby: "\u30cb\u30e5\u30fc\u30b9",
                        slug: "news",
                      }),
                      (0, k.tZ)(N.Z, {
                        wrapperCss: (0, q.iv)(
                          "@media ",
                          _.r.media.preTablet,
                          "{margin-top:40px;}",
                          ""
                        ),
                        paths: [
                          {
                            label: ae[i],
                            href: "/",
                            font:
                              "ja" === i ? "fot-udkakugoc80-pro" : "Bebas Neue",
                          },
                          {
                            label: ce[i],
                            href: "/news",
                            font:
                              "ja" === i ? "fot-udkakugoc80-pro" : "Bebas Neue",
                          },
                        ],
                      }),
                    ],
                  }),
                }),
              }),
              (0, k.tZ)("div", {
                children: (0, k.tZ)(T.W, {
                  children: (0, k.tZ)("div", {
                    css: re.contentWrapper,
                    children: (0, k.BX)("div", {
                      css: re.contentBox,
                      children: [
                        t && (0, k.tZ)(ee, { news: t }),
                        (0, k.tZ)(te.q, {}),
                      ],
                    }),
                  }),
                }),
              }),
              (0, k.tZ)("div", {
                css: (0, q.iv)(
                  "display:flex;align-items:center;justify-content:center;margin:96px auto 120px;@media ",
                  _.r.media.preTablet,
                  "{width:100%;margin:98px auto;}",
                  ""
                ),
              }),
              (0, k.tZ)(j.E, {
                topicsComponent: (0, k.tZ)(z.E, { slug: "related" }),
                bgImgSrc: "/common/news_content_bg_boruto.webp",
              }),
            ],
          });
        },
        re = {
          main: (0, q.iv)(
            "position:relative;z-index:0;display:flex;flex-direction:column;@media ",
            _.r.media.preTablet,
            "{overflow-x:hidden;}",
            ""
          ),
          contentWrapper: (0, q.iv)(
            "position:relative;display:flex;margin-top:260px;overflow-x:hidden;background-color:#fff;@media ",
            _.r.media.preTablet,
            "{margin-top:251px;overflow-x:visible;}",
            ""
          ),
          contentFooterBg: (0, q.iv)(
            "position:absolute;bottom:0;left:50%;width:1110px;transform:translateX(-50%);object-fit:cover;@media ",
            _.r.media.preTablet,
            "{width:1023px;height:500px;}",
            ""
          ),
          contentBox: (0, q.iv)(
            "position:relative;flex-grow:1;width:100%;padding:48px 60px 270px;@media ",
            _.r.media.preTablet,
            "{padding:18px clamp(20px, 20px + (60 - 20) * ((100% - 327px) / (972 - 327)), 60px) 539px;}&:lang(en){padding:48px 60px 280px;@media ",
            _.r.media.preTablet,
            "{&:lang(en){}padding:18px clamp(20px, 20px + (60 - 20) * ((100% - 327px) / (972 - 327)), 60px) 559px;}}&:lang(fr){padding:48px 60px 322px;@media ",
            _.r.media.preTablet,
            "{&:lang(fr){}padding:18px clamp(20px, 20px + (60 - 20) * ((100% - 327px) / (972 - 327)), 60px) 587px;}}&:lang(de){padding:48px 60px 290px;@media ",
            _.r.media.preTablet,
            "{&:lang(de){}padding:18px clamp(20px, 20px + (60 - 20) * ((100% - 327px) / (972 - 327)), 60px) 607px;}}&:lang(es){padding:48px 60px 310px;@media ",
            _.r.media.preTablet,
            "{&:lang(es){}padding:18px clamp(20px, 20px + (60 - 20) * ((100% - 327px) / (972 - 327)), 60px) 589px;}}&:lang(it){padding:48px 60px 270px;@media ",
            _.r.media.preTablet,
            "{&:lang(it){}padding:18px clamp(20px, 20px + (60 - 20) * ((100% - 327px) / (972 - 327)), 60px) 559px;}}",
            ""
          ),
          backBtn: (0, q.iv)(
            "@media ",
            _.r.media.preTablet,
            "{width:90%;height:48px;text-align:center;}&:not(:lang(ja)){font-family:'Bebas Neue';font-size:22px;}",
            ""
          ),
        },
        ae = {
          ja: "\u30c8\u30c3\u30d7",
          en: "TOP",
          fr: "ACCUEIL",
          de: "TOP",
          es: "INICIO",
          it: "HOME",
        },
        ce = {
          ja: "\u30cb\u30e5\u30fc\u30b9",
          en: "NEWS",
          fr: "ACTUALIT\xc9S",
          de: "NEWS",
          es: "NOTICIAS",
          it: "NOVIT\xc0",
        };
      function le(e, t) {
        var i =
          ("undefined" !== typeof Symbol && e[Symbol.iterator]) ||
          e["@@iterator"];
        if (!i) {
          if (
            Array.isArray(e) ||
            (i = (function (e, t) {
              if (!e) return;
              if ("string" === typeof e) return se(e, t);
              var i = Object.prototype.toString.call(e).slice(8, -1);
              "Object" === i && e.constructor && (i = e.constructor.name);
              if ("Map" === i || "Set" === i) return Array.from(e);
              if (
                "Arguments" === i ||
                /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i)
              )
                return se(e, t);
            })(e)) ||
            (t && e && "number" === typeof e.length)
          ) {
            i && (e = i);
            var n = 0,
              o = function () {};
            return {
              s: o,
              n: function () {
                return n >= e.length
                  ? { done: !0 }
                  : { done: !1, value: e[n++] };
              },
              e: function (e) {
                throw e;
              },
              f: o,
            };
          }
          throw new TypeError(
            "Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
          );
        }
        var r,
          a = !0,
          c = !1;
        return {
          s: function () {
            i = i.call(e);
          },
          n: function () {
            var e = i.next();
            return (a = e.done), e;
          },
          e: function (e) {
            (c = !0), (r = e);
          },
          f: function () {
            try {
              a || null == i.return || i.return();
            } finally {
              if (c) throw r;
            }
          },
        };
      }
      function se(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var i = 0, n = new Array(t); i < t; i++) n[i] = e[i];
        return n;
      }
      var pe = function (e) {
        var t = e.articleDto,
          i = (0, o.useMemo)(
            function () {
              var e;
              return null !==
                (e = t.use_image.map(function (e) {
                  return "".concat(e.path, "/").concat(e.filename);
                })) && void 0 !== e
                ? e
                : [];
            },
            [t.use_image]
          ),
          b = i.reduce(function (e, t) {
            return e.includes(t) ? e : [].concat((0, n.Z)(e), [t]);
          }, []),
          u = (0, a.bU)(),
          x = (0, r.Vd)("siteCommon", {}).result,
          m = (0, o.useMemo)(
            function () {
              var e,
                i = [],
                n = le(t.tags);
              try {
                var o = function () {
                  var t = e.value,
                    n =
                      null === x || void 0 === x
                        ? void 0
                        : x.data.tag.filter(function (e) {
                            return e.code === t;
                          })[0];
                  void 0 !== n && i.push(n.name);
                };
                for (n.s(); !(e = n.n()).done; ) o();
              } catch (r) {
                n.e(r);
              } finally {
                n.f();
              }
              return i;
            },
            [t.tags, null === x || void 0 === x ? void 0 : x.data.tag]
          ),
          g = (0, o.useMemo)(
            function () {
              try {
                var e,
                  i,
                  n,
                  o,
                  a,
                  p =
                    null !==
                      (e =
                        null === (i = t.categories) ||
                        void 0 === i ||
                        null === (n = i.subcategory) ||
                        void 0 === n
                          ? void 0
                          : n.map(function (e) {
                              return e.name;
                            })) && void 0 !== e
                      ? e
                      : [],
                  d = t.content,
                  x = le(b);
                try {
                  for (x.s(); !(a = x.n()).done; ) {
                    var g = a.value;
                    d = (d = d.replace(
                      new RegExp(g, "g"),
                      (0, r.hT)(g)
                    )).replaceAll("&nbsp;", " ");
                  }
                } catch (h) {
                  x.e(h);
                } finally {
                  x.f();
                }
                return {
                  id: t._id,
                  title: t.title,
                  date: (0, l.Am)(t.dspdate, u),
                  categories: p,
                  tags: null !== (o = t.tags) && void 0 !== o ? o : [],
                  tagsName: null !== m && void 0 !== m ? m : [],
                  content: d,
                  isNew: (0, l.e_)(t.startdate, c.E),
                  product:
                    null === t || void 0 === t
                      ? void 0
                      : t.product_info[(0, s.n)(u)],
                };
              } catch (f) {
                return;
              }
            },
            [t, u, m, i]
          );
        return (0, k.tZ)(k.HY, {
          children: (0, k.tZ)(w, {
            articleDto: t,
            children: (0, k.BX)(Z.DY, {
              children: [
                (0, k.tZ)(d.h, {}),
                (0, k.tZ)(oe, { news: g }),
                (0, k.tZ)(p.T, {}),
              ],
            }),
          }),
        });
      };
    },
    17913: function (e, t, i) {
      i.d(t, {
        P: function () {
          return n;
        },
      });
      var n = function (e) {
        if (void 0 !== e && null !== e && !e.includes("news_noimg.jpg"))
          return ""
            .concat(
              "https://cmsapi-frontend.naruto-official.com/site/api/",
              "naruto/Image/get?path="
            )
            .concat(e);
      };
    },
  },
]);
