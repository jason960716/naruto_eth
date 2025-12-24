"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [4850],
  {
    71327: function (t, e, n) {
      var i = n(70917),
        o = n(67294),
        s = n(48710),
        r = n(37642),
        l = n(35944);
      var a = {
          name: "kzdrva",
          styles:
            "pointer-events:none;transition:transform 0.25s;transform:scaleY(0)",
        },
        c = {
          name: "5rct17",
          styles: "transition:transform 0.25s;transform:scaleY(1)",
        },
        d = { name: "1mqxuk7", styles: "&:not(:lang(ja)){margin-top:3px;}" },
        p = { name: "1lvqym1", styles: "right:25px" },
        f = { name: "p1h14q", styles: "right:25px;transform:rotate(180deg)" },
        u = {
          name: "xr3noz",
          styles: "position:absolute;width:100%;inset:0;cursor:pointer",
        },
        m = {
          name: "1vwm8e3",
          styles: "position:relative;z-index:1;width:100%;height:50px",
        };
      e.Z = (0, r.U)(
        function (t) {
          var e = t.items,
            n = t.initType,
            s = t.onChange,
            r = (0, o.useState)(!1),
            h = r[0],
            v = r[1],
            g = (0, o.useState)(e[0]),
            b = g[0],
            y = g[1],
            k = (0, o.useCallback)(
              function (t) {
                s(t.type), y(t), v(!1);
              },
              [s]
            );
          return (
            (0, o.useEffect)(
              function () {
                y(e[0]);
              },
              [e]
            ),
            (0, o.useEffect)(
              function () {
                var t;
                y(
                  null !==
                    (t = e.filter(function (t) {
                      return t.type === n;
                    })[0]) && void 0 !== t
                    ? t
                    : e[0]
                );
              },
              [n, e]
            ),
            (0, l.BX)("div", {
              css: m,
              children: [
                (0, l.tZ)("button", {
                  css: u,
                  onClick: function () {
                    return v(!h);
                  },
                  children: (0, l.tZ)("div", {
                    css: (0, i.iv)(
                      "position:relative;font-family:var(--comic-font);font-size:20px;height:52px;line-height:44px;color:#fff;background-color:#000;border:3px solid rgb(0 0 0);&:not(:lang(ja)){font-size:24px;}&::after{position:absolute;top:1px;display:block;font-family:var(--impact-font);font-size:28px;content:url('/common/pulldown_arrow.svg');",
                      h ? f : p,
                      ";}",
                      ""
                    ),
                    children:
                      b && (0, l.tZ)("div", { css: d, children: b.label }),
                  }),
                }),
                b &&
                  (0, l.tZ)("ul", {
                    css: (0, i.iv)(
                      "position:absolute;top:calc(100%);width:100%;padding:0;margin:0;transform-origin:center top;",
                      h ? c : a,
                      " li:first-of-type{border-top:none;}li:last-of-type{border-bottom:3px solid #000;}",
                      ""
                    ),
                    children: e.map(function (t) {
                      return (0,
                      l.tZ)(x, { item: t, isSelected: t.type === b.type, onClick: k }, t.type);
                    }),
                  }),
              ],
            })
          );
        },
        { name: "1d3w5wq", styles: "width:100%" }
      );
      var h = { name: "1mqxuk7", styles: "&:not(:lang(ja)){margin-top:3px;}" },
        v = { name: "x3brzu", styles: "color:#000" },
        g = { name: "m5xep1", styles: "color:#c3c3c3" },
        b = { name: "h9u7nh", styles: "width:100%;cursor:pointer" },
        y = { name: "je8g23", styles: "pointer-events:none" },
        x = function (t) {
          var e = t.item,
            n = t.isSelected,
            r = t.onClick,
            a = (0, o.useCallback)(
              function () {
                r(e);
              },
              [e, r]
            );
          return (0, l.tZ)("li", {
            css: (0, i.iv)(
              "text-align:center;list-style:none;background-color:#fff;border-top:1px solid #000;border-right:3px solid #000;border-left:3px solid #000;transition:background-color 0.25s;",
              n && y,
              "@media ",
              s.r.media.postTablet,
              "{&:hover{background-color:#7f7f7f;}}",
              ""
            ),
            children: (0, l.tZ)("button", {
              css: b,
              onClick: a,
              children: (0, l.tZ)("div", {
                css: (0, i.iv)(
                  "position:relative;font-family:var(--comic-font);font-size:20px;line-height:46px;transition:color 0.25s;&:not(:lang(ja)){font-size:24px;}",
                  n ? g : v,
                  "@media ",
                  s.r.media.postTablet,
                  "{&:hover{color:#fff;}}",
                  ""
                ),
                children: (0, l.tZ)("div", { css: h, children: e.label }),
              }),
            }),
          });
        };
    },
    32974: function (t, e, n) {
      n.d(e, {
        V: function () {
          return l;
        },
      });
      var i = n(70917),
        o = n(48710),
        s = n(36443),
        r = n(35944);
      function l(t) {
        var e = t.className,
          n = t.slug,
          l = (t.title, t.ruby, t.run),
          a = void 0 === l || l,
          c = t.scale,
          d = void 0 === c ? "1" : c,
          p = t.h1,
          f = t.long,
          u = void 0 !== f && f,
          m = t.isTwoLines,
          h = void 0 !== m && m,
          v = t.isSmall,
          g = void 0 !== v && v,
          b = "2/3" === d ? 2 / 3 : 1;
        return (0, r.BX)(r.HY, {
          children: [
            p && (0, r.tZ)("h1", { className: "visually-hidden", children: p }),
            (0, r.tZ)(s._, {
              className: e,
              slug: n,
              run: a,
              height: u ? 80 : 80 * b,
              isTwoLine: h,
              isSmall: g,
              css: (0, i.iv)(
                "@media ",
                o.r.media.preTablet,
                "{--brush-height:",
                h ? 80 : 40,
                "px;}",
                ""
              ),
            }),
          ],
        });
      }
    },
  },
]);
