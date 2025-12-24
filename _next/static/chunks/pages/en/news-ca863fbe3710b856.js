(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [7674],
  {
    24145: function (n, t, e) {
      "use strict";
      e.r(t);
      var a = e(11163),
        r = e(92301),
        o = e(83773),
        i = e(46045),
        c = e(35944);
      t.default = function () {
        var n = (0, a.useRouter)();
        return (0, c.BX)(c.HY, {
          children: [
            (0, c.tZ)(r.p, {
              title: "NEWS | NARUTO & BORUTO SITE",
              description:
                "The latest news on Naruto and Boruto. Check out all the official info on the anime, merchandise, games, comics, and more!",
              url: "".concat("https://naruto-official.com").concat(n.asPath),
              twitterCard: "summary_large_image",
            }),
            (0, c.tZ)(i.X$, { children: (0, c.tZ)(o.W, {}) }),
          ],
        });
      };
    },
    27602: function (n, t, e) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/en/news",
        function () {
          return e(24145);
        },
      ]);
    },
  },
  function (n) {
    n.O(
      0,
      [4977, 5313, 6443, 4850, 146, 2517, 4824, 9774, 2888, 179],
      function () {
        return (t = 27602), n((n.s = t));
        var t;
      }
    );
    var t = n.O();
    _N_E = t;
  },
]);
