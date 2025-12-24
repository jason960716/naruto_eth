"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [5701],
  {
    25701: function (e, i, l) {
      var n = l(70917),
        t = l(37642),
        a = l(37868),
        o = l(35944);
      var s = { "Bebas Neue": 16, "fot-udkakugoc80-pro": 13 };
      i.Z = (0, t.U)(function (e) {
        var i = e.paths,
          l = e.color,
          t = void 0 === l ? "white" : l;
        return (0, o.tZ)("div", {
          css: r.headerLinkBox,
          children: i.map(function (e, i) {
            return (0,
            o.BX)("span", { css: r.labelBox, children: [0 !== i && (0, o.tZ)("span", { css: [r.linkSlash, "", ""], children: " / " }), (0, o.tZ)(a.Z, { href: e.href, children: (0, o.tZ)("a", { css: [r.linkLabel, (0, n.iv)("font-family:", e.font, ";font-size:", s[e.font], "px;color:", "white" === t ? "#000" : "#fff", ";background:", "white" === t ? "#fff" : "#000", ";", ""), "", ""], children: e.label }) })] }, e.href);
          }),
        });
      });
      var r = {
        headerLinkBox: {
          name: "awofmk",
          styles:
            "display:flex;flex-wrap:wrap;justify-content:flex-end;height:fit-content;text-align:right",
        },
        labelBox: { name: "s5xdrg", styles: "display:flex;align-items:center" },
        linkSlash: {
          name: "p1xwh8",
          styles:
            "height:16px;font-family:'Bebas Neue';font-size:16px;line-height:16px;color:rgb(0 0 0 / 20%);white-space:pre",
        },
        linkLabel: {
          name: "a3mwu0",
          styles:
            "display:inline-block;max-width:128px;padding:0 3px;overflow:hidden;line-height:21px;text-decoration:underline;text-overflow:ellipsis;white-space:nowrap",
        },
        linkSlashBlack: {
          name: "y9rhpf",
          styles:
            "height:16px;font-family:'Bebas Neue';font-size:16px;line-height:16px;color:rgb(255 255 255 / 20%);white-space:pre",
        },
        linkLabelBlack: {
          name: "zsonpp",
          styles:
            "display:inline-block;max-width:128px;padding:0 3px;overflow:hidden;line-height:21px;color:#fff;text-decoration:underline;text-overflow:ellipsis;white-space:nowrap;background-color:#000",
        },
      };
    },
  },
]);
