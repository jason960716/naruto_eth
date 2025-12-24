"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [2517],
  {
    92517: function (e, n, t) {
      var o = t(70917),
        a = t(67294),
        i = t(48710),
        c = t(37642),
        r = t(35944);
      var l = { name: "wmzzp", styles: "display:flex;flex-wrap:wrap;gap:10px" };
      n.Z = (0, c.U)(function (e) {
        var n = e.items,
          t = e.initType,
          o = e.onClick,
          i = (0, a.useState)(n[0].type),
          c = i[0],
          s = i[1],
          p = (0, a.useCallback)(
            function (e) {
              s(e), o(e);
            },
            [o]
          );
        return (
          (0, a.useEffect)(
            function () {
              void 0 !== t && s(t);
            },
            [t, n]
          ),
          (0, r.tZ)("div", {
            css: l,
            children: n.map(function (e) {
              return (0,
              r.tZ)(f, { active: e.type === c, label: e.label, type: e.type, onClick: p }, e.type);
            }),
          })
        );
      });
      var s = { name: "1mqxuk7", styles: "&:not(:lang(ja)){margin-top:3px;}" },
        p = { name: "1pfrh2c", styles: "color:#fff;background-color:#000" },
        f = function (e) {
          var n = e.active,
            t = e.label,
            c = e.type,
            l = e.onClick,
            f = (0, a.useCallback)(
              function () {
                l(c);
              },
              [c, l]
            );
          return (0, r.tZ)("button", {
            css: (0, o.iv)(
              "flex-shrink:0;height:32px;padding:0 10px;font-family:var(--comic-font);font-size:18px;line-height:18px;color:#000;text-align:center;cursor:",
              n ? "auto" : "pointer",
              ";background-color:#fff;border:2px solid #000;transition:background-color 0.25s,color 0.25s;&:not(:lang(ja)){padding:0 6px;}",
              n && p,
              " ",
              !n &&
                (0, o.iv)(
                  "@media ",
                  i.r.media.postTablet,
                  "{&:hover{color:white;background-color:#7f7f7f;}}",
                  ""
                ),
              ";",
              ""
            ),
            onClick: f,
            children: (0, r.tZ)("div", { css: s, children: t }),
          });
        };
    },
  },
]);
