(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [3554],
  {
    60473: function (t, n, e) {
      "use strict";
      e.r(n),
        e.d(n, {
          __N_SSG: function () {
            return o;
          },
        });
      var i = e(11163),
        r = e(42730),
        u = e(92301),
        a = e(26948),
        c = e(35944),
        o = !0;
      n.default = function (t) {
        var n = t.seriesDetail,
          e = (0, i.useRouter)();
        return (0, c.BX)(c.HY, {
          children: [
            (0, c.tZ)(u.p, {
              title: a.sq[n.id],
              description: a.ol[n.id],
              url: "".concat("https://naruto-official.com").concat(e.asPath),
              twitterCard: "summary_large_image",
            }),
            (0, c.tZ)(r.C, { seriesDetail: n }),
          ],
        });
      };
    },
    6858: function (t, n, e) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/en/anime/[id]",
        function () {
          return e(60473);
        },
      ]);
    },
  },
  function (t) {
    t.O(
      0,
      [9941, 4977, 5313, 6443, 9539, 1105, 5701, 1132, 9774, 2888, 179],
      function () {
        return (n = 6858), t((t.s = n));
        var n;
      }
    );
    var n = t.O();
    _N_E = n;
  },
]);
