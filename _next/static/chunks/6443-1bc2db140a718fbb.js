"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [6443],
  {
    36443: function (t, i, r) {
      r.d(i, {
        _: function () {
          return s;
        },
      });
      var a = r(70917),
        e = r(8503),
        n = r(48710),
        c = r(35944);
      var u = function (t, i) {
        var r = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          a = t.replace("-", "_"),
          e = "";
        return (
          r && (e = "_sp"),
          (a = "".concat(a).concat(e)),
          (a = "".concat(i, "/").concat(a)),
          "/common/brush/".concat(a, ".svg")
        );
      };
      function s(t) {
        var i,
          r = t.className,
          s = t.slug,
          h = t.height,
          l = void 0 === h ? 80 : h,
          v = t.run,
          b = void 0 === v || v,
          p = t.isTwoLine,
          g = void 0 !== p && p,
          d = t.isSmall,
          f = void 0 !== d && d,
          m = (0, e.bU)();
        return (
          (i = g ? o.figureTwo : f ? o.figureOneSmall : o.figureOne),
          (0, c.tZ)("div", {
            className: r,
            css: (0, a.iv)(
              "position:relative;z-index:1;height:var(--brush-height);pointer-events:none;--brush-height:",
              l,
              "px;--brush-unit:calc(var(--brush-height) / 80);",
              ""
            ),
            children: (0, c.tZ)("figure", {
              css: [
                i,
                (0, a.iv)(
                  "clip-path:",
                  b
                    ? "polygon(0 0, 100% 0, 100% 100%, 0 100%)"
                    : "polygon(0 0, 0 0, 0 100%, 0 100%)",
                  ";background:url(",
                  u(s, m),
                  ") no-repeat center/contain;transition:clip-path 0.5s;@media ",
                  n.r.media.preTablet,
                  "{background:url(",
                  u(s, m, !0),
                  ") no-repeat center/contain;}",
                  ""
                ),
                "",
                "",
              ],
            }),
          })
        );
      }
      var o = {
        figureOne: {
          name: "cpzr2m",
          styles:
            "position:absolute;top:calc(-70 * var(--brush-unit));left:calc(-150 * var(--brush-unit));width:calc(800 * var(--brush-unit));height:calc(220 * var(--brush-unit))",
        },
        figureOneSmall: {
          name: "j18w38",
          styles:
            "position:absolute;top:calc(-70 * var(--brush-unit));left:calc(-115 * var(--brush-unit));width:calc(615 * var(--brush-unit));height:calc(210 * var(--brush-unit))",
        },
        figureTwo: (0, a.iv)(
          "position:absolute;top:calc(-70 * var(--brush-unit));left:calc(-150 * var(--brush-unit));width:calc(800 * var(--brush-unit));height:calc(220 * var(--brush-unit));@media ",
          n.r.media.preTablet,
          "{width:calc(400 * var(--brush-unit));}",
          ""
        ),
      };
    },
  },
]);
