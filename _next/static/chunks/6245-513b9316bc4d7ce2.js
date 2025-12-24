"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [6245],
  {
    26267: function (e, t, a) {
      a.d(t, {
        e: function () {
          return u;
        },
      });
      var i = a(67294),
        r = a(41128),
        n = a(33587),
        l = a(8503),
        c = a(80072),
        o = a(11047),
        s = a(27715),
        d = a(10255),
        p = a(35944),
        u = function (e) {
          var t,
            a = e.category,
            u = e.children,
            f = (0, l.bU)(),
            m = (0, r.Vd)("articleList", {
              start: 0,
              limit: 16,
              data: (0, s.k8)({ category: "NEWS", subcategory: a }),
            }).result,
            v = (0, n.Z)(
              null !==
                (t =
                  null === m || void 0 === m ? void 0 : m.data.article_list) &&
                void 0 !== t
                ? t
                : []
            ).slice(0, 8),
            b = (0, i.useMemo)(
              function () {
                return v.map(function (e) {
                  var t,
                    a,
                    i,
                    n =
                      null !==
                        (t =
                          null === (a = e.categories) ||
                          void 0 === a ||
                          null === (i = a.subcategory) ||
                          void 0 === i
                            ? void 0
                            : i.map(function (e) {
                                return e.name;
                              })) && void 0 !== t
                        ? t
                        : [];
                  return {
                    id: e._id,
                    title: e.title,
                    categories: n,
                    imgUrl: (0, r.hT)(e.thumbnail),
                    date: (0, o.Am)(e.dspdate, f),
                    path: e.path,
                    isNew: (0, o.e_)(e.startdate, c.E),
                    isPickedUp: (0, o.e_)(e.startdate, c.e) && "1" === e.pickup,
                  };
                });
              },
              [v, f]
            );
          return (0, p.tZ)(p.HY, {
            children: (0, p.tZ)(d.S, { articles: b, children: u }),
          });
        };
    },
    6981: function (e, t, a) {
      a.d(t, {
        h: function () {
          return o;
        },
      });
      var i = a(70917),
        r = (a(67294), a(27715)),
        n = a(48710),
        l = a(35944);
      var c = { name: "zjik7", styles: "display:flex" },
        o = function (e) {
          var t = e.stausLabels;
          return (0, l.tZ)("div", {
            css: c,
            children: t.map(function (e, t) {
              return (0, l.tZ)(s, { stausLabel: e }, t);
            }),
          });
        },
        s = function (e) {
          var t = e.stausLabel,
            a = "orange" === t.bgColor ? d.bgOrange : d.bgBlack,
            n = (0, r.yx)(t.label) ? p.impact : p.comic;
          return (0, l.tZ)("div", {
            css: (0, i.iv)(
              "display:flex;align-items:center;height:24px;padding:4px 7px;",
              a,
              ";",
              ""
            ),
            children: (0, l.tZ)("p", {
              css: (0, i.iv)("line-height:1;", n, ";", ""),
              children: t.label,
            }),
          });
        },
        d = {
          bgOrange: {
            name: "xw6h1r",
            styles: "color:black;background-color:var(--primary-color)",
          },
          bgBlack: {
            name: "ebejx",
            styles: "color:var(--primary-color);background-color:black",
          },
        },
        p = {
          impact: (0, i.iv)(
            "margin-top:2px;font-family:var(--impact-font);font-size:16px;@media ",
            n.r.media.preTablet,
            "{font-size:14px;}",
            ""
          ),
          comic: (0, i.iv)(
            "margin-top:-1px;font-family:var(--comic-font);font-size:11px;@media ",
            n.r.media.preTablet,
            "{font-size:12px;}",
            ""
          ),
        };
    },
    77983: function (e, t, a) {
      var i = a(70917),
        r = (a(67294), a(48710)),
        n = a(37642),
        l = a(35944);
      var c = {
        name: "1s4qkvb",
        styles: "display:flex;flex-wrap:wrap;gap:5px",
      };
      t.Z = (0, n.U)(function (e) {
        var t = e.labels;
        return (0, l.tZ)("div", {
          css: c,
          children:
            null === t || void 0 === t
              ? void 0
              : t.map(function (e, t) {
                  return (0, l.tZ)(s, { label: e }, t);
                }),
        });
      });
      var o = {
          name: "hc9rql",
          styles:
            "display:flex;align-items:center;height:24px;padding:4px 7px;background-color:#eaeaea",
        },
        s = function (e) {
          var t = e.label;
          return (0, l.tZ)("div", {
            css: o,
            children: (0, l.tZ)("p", {
              css: (0, i.iv)(
                "width:100%;font-family:var(--comic-font);font-size:11px;line-height:1;white-space:nowrap;@media ",
                r.r.media.preTablet,
                "{font-size:12px;}",
                ""
              ),
              children: t,
            }),
          });
        };
    },
  },
]);
