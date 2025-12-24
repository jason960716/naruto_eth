"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [3142],
  {
    786: function (t, e) {
      var s;
      class i {
        constructor() {
          (this.entries = {}), (this.size = 0);
        }
        add(t) {
          let e = this.entries[t];
          return (this.entries[t] = !0), !e && (this.size++, !0);
        }
        addAll(t) {
          let e = this.size;
          for (var s = 0, i = t.length; s < i; s++) this.add(t[s]);
          return e != this.size;
        }
        contains(t) {
          return this.entries[t];
        }
        clear() {
          (this.entries = {}), (this.size = 0);
        }
      }
      class r {
        constructor(t = 0, e = 0, s = 0, i = 0) {
          (this.r = t), (this.g = e), (this.b = s), (this.a = i);
        }
        set(t, e, s, i) {
          return (
            (this.r = t), (this.g = e), (this.b = s), (this.a = i), this.clamp()
          );
        }
        setFromColor(t) {
          return (
            (this.r = t.r), (this.g = t.g), (this.b = t.b), (this.a = t.a), this
          );
        }
        setFromString(t) {
          return (
            (t = "#" == t.charAt(0) ? t.substr(1) : t),
            (this.r = parseInt(t.substr(0, 2), 16) / 255),
            (this.g = parseInt(t.substr(2, 2), 16) / 255),
            (this.b = parseInt(t.substr(4, 2), 16) / 255),
            (this.a = 8 != t.length ? 1 : parseInt(t.substr(6, 2), 16) / 255),
            this
          );
        }
        add(t, e, s, i) {
          return (
            (this.r += t),
            (this.g += e),
            (this.b += s),
            (this.a += i),
            this.clamp()
          );
        }
        clamp() {
          return (
            this.r < 0 ? (this.r = 0) : this.r > 1 && (this.r = 1),
            this.g < 0 ? (this.g = 0) : this.g > 1 && (this.g = 1),
            this.b < 0 ? (this.b = 0) : this.b > 1 && (this.b = 1),
            this.a < 0 ? (this.a = 0) : this.a > 1 && (this.a = 1),
            this
          );
        }
        static rgba8888ToColor(t, e) {
          (t.r = ((4278190080 & e) >>> 24) / 255),
            (t.g = ((16711680 & e) >>> 16) / 255),
            (t.b = ((65280 & e) >>> 8) / 255),
            (t.a = (255 & e) / 255);
        }
        static rgb888ToColor(t, e) {
          (t.r = ((16711680 & e) >>> 16) / 255),
            (t.g = ((65280 & e) >>> 8) / 255),
            (t.b = (255 & e) / 255);
        }
        static fromString(t) {
          return new r().setFromString(t);
        }
      }
      (r.WHITE = new r(1, 1, 1, 1)),
        (r.RED = new r(1, 0, 0, 1)),
        (r.GREEN = new r(0, 1, 0, 1)),
        (r.BLUE = new r(0, 0, 1, 1)),
        (r.MAGENTA = new r(1, 0, 1, 1));
      class n {
        static clamp(t, e, s) {
          return t < e ? e : t > s ? s : t;
        }
        static cosDeg(t) {
          return Math.cos(t * n.degRad);
        }
        static sinDeg(t) {
          return Math.sin(t * n.degRad);
        }
        static signum(t) {
          return t > 0 ? 1 : t < 0 ? -1 : 0;
        }
        static toInt(t) {
          return t > 0 ? Math.floor(t) : Math.ceil(t);
        }
        static cbrt(t) {
          let e = Math.pow(Math.abs(t), 1 / 3);
          return t < 0 ? -e : e;
        }
        static randomTriangular(t, e) {
          return n.randomTriangularWith(t, e, 0.5 * (t + e));
        }
        static randomTriangularWith(t, e, s) {
          let i = Math.random(),
            r = e - t;
          return i <= (s - t) / r
            ? t + Math.sqrt(i * r * (s - t))
            : e - Math.sqrt((1 - i) * r * (e - s));
        }
        static isPowerOfTwo(t) {
          return t && 0 === (t & (t - 1));
        }
      }
      (n.PI = 3.1415927),
        (n.PI2 = 2 * n.PI),
        (n.radiansToDegrees = 180 / n.PI),
        (n.radDeg = n.radiansToDegrees),
        (n.degreesToRadians = n.PI / 180),
        (n.degRad = n.degreesToRadians);
      class a {
        apply(t, e, s) {
          return t + (e - t) * this.applyInternal(s);
        }
      }
      class h extends a {
        constructor(t) {
          super(), (this.power = 2), (this.power = t);
        }
        applyInternal(t) {
          return t <= 0.5
            ? Math.pow(2 * t, this.power) / 2
            : Math.pow(2 * (t - 1), this.power) /
                (this.power % 2 == 0 ? -2 : 2) +
                1;
        }
      }
      class o {
        static arrayCopy(t, e, s, i, r) {
          for (let n = e, a = i; n < e + r; n++, a++) s[a] = t[n];
        }
        static arrayFill(t, e, s, i) {
          for (let r = e; r < s; r++) t[r] = i;
        }
        static setArraySize(t, e, s = 0) {
          let i = t.length;
          if (i == e) return t;
          if (((t.length = e), i < e)) for (let r = i; r < e; r++) t[r] = s;
          return t;
        }
        static ensureArrayCapacity(t, e, s = 0) {
          return t.length >= e ? t : o.setArraySize(t, e, s);
        }
        static newArray(t, e) {
          let s = new Array(t);
          for (let i = 0; i < t; i++) s[i] = e;
          return s;
        }
        static newFloatArray(t) {
          if (o.SUPPORTS_TYPED_ARRAYS) return new Float32Array(t);
          {
            let e = new Array(t);
            for (let t = 0; t < e.length; t++) e[t] = 0;
            return e;
          }
        }
        static newShortArray(t) {
          if (o.SUPPORTS_TYPED_ARRAYS) return new Int16Array(t);
          {
            let e = new Array(t);
            for (let t = 0; t < e.length; t++) e[t] = 0;
            return e;
          }
        }
        static toFloatArray(t) {
          return o.SUPPORTS_TYPED_ARRAYS ? new Float32Array(t) : t;
        }
        static toSinglePrecision(t) {
          return o.SUPPORTS_TYPED_ARRAYS ? Math.fround(t) : t;
        }
        static webkit602BugfixHelper(t, e) {}
        static contains(t, e, s = !0) {
          for (var i = 0; i < t.length; i++) if (t[i] == e) return !0;
          return !1;
        }
        static enumValue(t, e) {
          return t[e[0].toUpperCase() + e.slice(1)];
        }
      }
      o.SUPPORTS_TYPED_ARRAYS = "undefined" !== typeof Float32Array;
      class l {
        constructor(t) {
          (this.items = new Array()), (this.instantiator = t);
        }
        obtain() {
          return this.items.length > 0 ? this.items.pop() : this.instantiator();
        }
        free(t) {
          t.reset && t.reset(), this.items.push(t);
        }
        freeAll(t) {
          for (let e = 0; e < t.length; e++) this.free(t[e]);
        }
        clear() {
          this.items.length = 0;
        }
      }
      class c {
        constructor(t = 0, e = 0) {
          (this.x = t), (this.y = e);
        }
        set(t, e) {
          return (this.x = t), (this.y = e), this;
        }
        length() {
          let t = this.x,
            e = this.y;
          return Math.sqrt(t * t + e * e);
        }
        normalize() {
          let t = this.length();
          return 0 != t && ((this.x /= t), (this.y /= t)), this;
        }
      }
      class d {
        constructor() {
          (this.maxDelta = 0.064),
            (this.framesPerSecond = 0),
            (this.delta = 0),
            (this.totalTime = 0),
            (this.lastTime = Date.now() / 1e3),
            (this.frameCount = 0),
            (this.frameTime = 0);
        }
        update() {
          let t = Date.now() / 1e3;
          (this.delta = t - this.lastTime),
            (this.frameTime += this.delta),
            (this.totalTime += this.delta),
            this.delta > this.maxDelta && (this.delta = this.maxDelta),
            (this.lastTime = t),
            this.frameCount++,
            this.frameTime > 1 &&
              ((this.framesPerSecond = this.frameCount / this.frameTime),
              (this.frameTime = 0),
              (this.frameCount = 0));
        }
      }
      class u {
        constructor(t) {
          if (!t) throw new Error("name cannot be null.");
          this.name = t;
        }
      }
      class m extends u {
        constructor(t) {
          super(t),
            (this.id = m.nextID++),
            (this.bones = null),
            (this.vertices = []),
            (this.worldVerticesLength = 0),
            (this.timelineAttahment = this);
        }
        computeWorldVertices(t, e, s, i, r, n) {
          s = r + (s >> 1) * n;
          let a = t.bone.skeleton,
            h = t.deform,
            o = this.vertices,
            l = this.bones;
          if (!l) {
            h.length > 0 && (o = h);
            let a = t.bone,
              l = a.worldX,
              c = a.worldY,
              d = a.a,
              u = a.b,
              m = a.c,
              f = a.d;
            for (let t = e, h = r; h < s; t += 2, h += n) {
              let e = o[t],
                s = o[t + 1];
              (i[h] = e * d + s * u + l), (i[h + 1] = e * m + s * f + c);
            }
            return;
          }
          let c = 0,
            d = 0;
          for (let m = 0; m < e; m += 2) {
            let t = l[c];
            (c += t + 1), (d += t);
          }
          let u = a.bones;
          if (0 == h.length)
            for (let m = r, f = 3 * d; m < s; m += n) {
              let t = 0,
                e = 0,
                s = l[c++];
              for (s += c; c < s; c++, f += 3) {
                let s = u[l[c]],
                  i = o[f],
                  r = o[f + 1],
                  n = o[f + 2];
                (t += (i * s.a + r * s.b + s.worldX) * n),
                  (e += (i * s.c + r * s.d + s.worldY) * n);
              }
              (i[m] = t), (i[m + 1] = e);
            }
          else {
            let t = h;
            for (let e = r, a = 3 * d, h = d << 1; e < s; e += n) {
              let s = 0,
                r = 0,
                n = l[c++];
              for (n += c; c < n; c++, a += 3, h += 2) {
                let e = u[l[c]],
                  i = o[a] + t[h],
                  n = o[a + 1] + t[h + 1],
                  d = o[a + 2];
                (s += (i * e.a + n * e.b + e.worldX) * d),
                  (r += (i * e.c + n * e.d + e.worldY) * d);
              }
              (i[e] = s), (i[e + 1] = r);
            }
          }
        }
        copyTo(t) {
          this.bones
            ? ((t.bones = new Array(this.bones.length)),
              o.arrayCopy(this.bones, 0, t.bones, 0, this.bones.length))
            : (t.bones = null),
            this.vertices &&
              ((t.vertices = o.newFloatArray(this.vertices.length)),
              o.arrayCopy(
                this.vertices,
                0,
                t.vertices,
                0,
                this.vertices.length
              )),
            (t.worldVerticesLength = this.worldVerticesLength),
            (t.timelineAttahment = this.timelineAttahment);
        }
      }
      m.nextID = 0;
      class f {
        constructor(t) {
          (this.id = f.nextID()),
            (this.start = 0),
            (this.digits = 0),
            (this.setupIndex = 0),
            (this.regions = new Array(t));
        }
        copy() {
          let t = new f(this.regions.length);
          return (
            o.arrayCopy(this.regions, 0, t.regions, 0, this.regions.length),
            (t.start = this.start),
            (t.digits = this.digits),
            (t.setupIndex = this.setupIndex),
            t
          );
        }
        apply(t, e) {
          let s = t.sequenceIndex;
          -1 == s && (s = this.setupIndex),
            s >= this.regions.length && (s = this.regions.length - 1);
          let i = this.regions[s];
          e.region != i && ((e.region = i), e.updateRegion());
        }
        getPath(t, e) {
          let s = t,
            i = (this.start + e).toString();
          for (let r = this.digits - i.length; r > 0; r--) s += "0";
          return (s += i), s;
        }
        static nextID() {
          return f._nextID++;
        }
      }
      (f._nextID = 0),
        (function (t) {
          (t[(t.hold = 0)] = "hold"),
            (t[(t.once = 1)] = "once"),
            (t[(t.loop = 2)] = "loop"),
            (t[(t.pingpong = 3)] = "pingpong"),
            (t[(t.onceReverse = 4)] = "onceReverse"),
            (t[(t.loopReverse = 5)] = "loopReverse"),
            (t[(t.pingpongReverse = 6)] = "pingpongReverse");
        })(s || (s = {}));
      const g = [
        s.hold,
        s.once,
        s.loop,
        s.pingpong,
        s.onceReverse,
        s.loopReverse,
        s.pingpongReverse,
      ];
      class p {
        constructor(t, e, s) {
          if (((this.timelines = []), (this.timelineIds = new i()), !t))
            throw new Error("name cannot be null.");
          (this.name = t), this.setTimelines(e), (this.duration = s);
        }
        setTimelines(t) {
          if (!t) throw new Error("timelines cannot be null.");
          (this.timelines = t), this.timelineIds.clear();
          for (var e = 0; e < t.length; e++)
            this.timelineIds.addAll(t[e].getPropertyIds());
        }
        hasTimeline(t) {
          for (let e = 0; e < t.length; e++)
            if (this.timelineIds.contains(t[e])) return !0;
          return !1;
        }
        apply(t, e, s, i, r, n, a, h) {
          if (!t) throw new Error("skeleton cannot be null.");
          i &&
            0 != this.duration &&
            ((s %= this.duration), e > 0 && (e %= this.duration));
          let o = this.timelines;
          for (let l = 0, c = o.length; l < c; l++)
            o[l].apply(t, e, s, r, n, a, h);
        }
      }
      var x, b;
      (e.bq = void 0),
        ((x = e.bq || (e.bq = {}))[(x.setup = 0)] = "setup"),
        (x[(x.first = 1)] = "first"),
        (x[(x.replace = 2)] = "replace"),
        (x[(x.add = 3)] = "add"),
        (e.mJ = void 0),
        ((b = e.mJ || (e.mJ = {}))[(b.mixIn = 0)] = "mixIn"),
        (b[(b.mixOut = 1)] = "mixOut");
      const w = 0,
        v = 1,
        y = 2,
        A = 3,
        Y = 4,
        C = 5,
        S = 6,
        E = 7,
        M = 8,
        T = 9,
        k = 10,
        I = 11,
        R = 12,
        X = 13,
        L = 14,
        F = 15,
        P = 16,
        q = 17,
        D = 18,
        B = 19;
      class V {
        constructor(t, e) {
          (this.propertyIds = e),
            (this.frames = o.newFloatArray(t * this.getFrameEntries()));
        }
        getPropertyIds() {
          return this.propertyIds;
        }
        getFrameEntries() {
          return 1;
        }
        getFrameCount() {
          return this.frames.length / this.getFrameEntries();
        }
        getDuration() {
          return this.frames[this.frames.length - this.getFrameEntries()];
        }
        static search1(t, e) {
          let s = t.length;
          for (let i = 1; i < s; i++) if (t[i] > e) return i - 1;
          return s - 1;
        }
        static search(t, e, s) {
          let i = t.length;
          for (let r = s; r < i; r += s) if (t[r] > e) return r - s;
          return i - s;
        }
      }
      class O extends V {
        constructor(t, e, s) {
          super(t, s),
            (this.curves = o.newFloatArray(t + 18 * e)),
            (this.curves[t - 1] = 1);
        }
        setLinear(t) {
          this.curves[t] = 0;
        }
        setStepped(t) {
          this.curves[t] = 1;
        }
        shrink(t) {
          let e = this.getFrameCount() + 18 * t;
          if (this.curves.length > e) {
            let t = o.newFloatArray(e);
            o.arrayCopy(this.curves, 0, t, 0, e), (this.curves = t);
          }
        }
        setBezier(t, e, s, i, r, n, a, h, o, l, c) {
          let d = this.curves,
            u = this.getFrameCount() + 18 * t;
          0 == s && (d[e] = 2 + u);
          let m = 0.03 * (i - 2 * n + h),
            f = 0.03 * (r - 2 * a + o),
            g = 0.006 * (3 * (n - h) - i + l),
            p = 0.006 * (3 * (a - o) - r + c),
            x = 2 * m + g,
            b = 2 * f + p,
            w = 0.3 * (n - i) + m + 0.16666667 * g,
            v = 0.3 * (a - r) + f + 0.16666667 * p,
            y = i + w,
            A = r + v;
          for (let Y = u + 18; u < Y; u += 2)
            (d[u] = y),
              (d[u + 1] = A),
              (w += x),
              (v += b),
              (x += g),
              (b += p),
              (y += w),
              (A += v);
        }
        getBezierValue(t, e, s, i) {
          let r = this.curves;
          if (r[i] > t) {
            let n = this.frames[e],
              a = this.frames[e + s];
            return a + ((t - n) / (r[i] - n)) * (r[i + 1] - a);
          }
          let n = i + 18;
          for (i += 2; i < n; i += 2)
            if (r[i] >= t) {
              let e = r[i - 2],
                s = r[i - 1];
              return s + ((t - e) / (r[i] - e)) * (r[i + 1] - s);
            }
          e += this.getFrameEntries();
          let a = r[n - 2],
            h = r[n - 1];
          return (
            h + ((t - a) / (this.frames[e] - a)) * (this.frames[e + s] - h)
          );
        }
      }
      class N extends O {
        constructor(t, e, s) {
          super(t, e, [s]);
        }
        getFrameEntries() {
          return 2;
        }
        setFrame(t, e, s) {
          (t <<= 1), (this.frames[t] = e), (this.frames[t + 1] = s);
        }
        getCurveValue(t) {
          let e = this.frames,
            s = e.length - 2;
          for (let r = 2; r <= s; r += 2)
            if (e[r] > t) {
              s = r - 2;
              break;
            }
          let i = this.curves[s >> 1];
          switch (i) {
            case 0:
              let i = e[s],
                r = e[s + 1];
              return r + ((t - i) / (e[s + 2] - i)) * (e[s + 2 + 1] - r);
            case 1:
              return e[s + 1];
          }
          return this.getBezierValue(t, s, 1, i - 2);
        }
      }
      class U extends O {
        constructor(t, e, s, i) {
          super(t, e, [s, i]);
        }
        getFrameEntries() {
          return 3;
        }
        setFrame(t, e, s, i) {
          (t *= 3),
            (this.frames[t] = e),
            (this.frames[t + 1] = s),
            (this.frames[t + 2] = i);
        }
      }
      class W extends N {
        constructor(t, e, s) {
          super(t, e, w + "|" + s), (this.boneIndex = 0), (this.boneIndex = s);
        }
        apply(t, s, i, r, n, a, h) {
          let o = t.bones[this.boneIndex];
          if (!o.active) return;
          if (i < this.frames[0]) {
            switch (a) {
              case e.bq.setup:
                return void (o.rotation = o.data.rotation);
              case e.bq.first:
                o.rotation += (o.data.rotation - o.rotation) * n;
            }
            return;
          }
          let l = this.getCurveValue(i);
          switch (a) {
            case e.bq.setup:
              o.rotation = o.data.rotation + l * n;
              break;
            case e.bq.first:
            case e.bq.replace:
              l += o.data.rotation - o.rotation;
            case e.bq.add:
              o.rotation += l * n;
          }
        }
      }
      class z extends U {
        constructor(t, e, s) {
          super(t, e, v + "|" + s, y + "|" + s),
            (this.boneIndex = 0),
            (this.boneIndex = s);
        }
        apply(t, s, i, r, n, a, h) {
          let o = t.bones[this.boneIndex];
          if (!o.active) return;
          let l = this.frames;
          if (i < l[0]) {
            switch (a) {
              case e.bq.setup:
                return (o.x = o.data.x), void (o.y = o.data.y);
              case e.bq.first:
                (o.x += (o.data.x - o.x) * n), (o.y += (o.data.y - o.y) * n);
            }
            return;
          }
          let c = 0,
            d = 0,
            u = V.search(l, i, 3),
            m = this.curves[u / 3];
          switch (m) {
            case 0:
              let t = l[u];
              (c = l[u + 1]), (d = l[u + 2]);
              let e = (i - t) / (l[u + 3] - t);
              (c += (l[u + 3 + 1] - c) * e), (d += (l[u + 3 + 2] - d) * e);
              break;
            case 1:
              (c = l[u + 1]), (d = l[u + 2]);
              break;
            default:
              (c = this.getBezierValue(i, u, 1, m - 2)),
                (d = this.getBezierValue(i, u, 2, m + 18 - 2));
          }
          switch (a) {
            case e.bq.setup:
              (o.x = o.data.x + c * n), (o.y = o.data.y + d * n);
              break;
            case e.bq.first:
            case e.bq.replace:
              (o.x += (o.data.x + c - o.x) * n),
                (o.y += (o.data.y + d - o.y) * n);
              break;
            case e.bq.add:
              (o.x += c * n), (o.y += d * n);
          }
        }
      }
      class G extends N {
        constructor(t, e, s) {
          super(t, e, v + "|" + s), (this.boneIndex = 0), (this.boneIndex = s);
        }
        apply(t, s, i, r, n, a, h) {
          let o = t.bones[this.boneIndex];
          if (!o.active) return;
          if (i < this.frames[0]) {
            switch (a) {
              case e.bq.setup:
                return void (o.x = o.data.x);
              case e.bq.first:
                o.x += (o.data.x - o.x) * n;
            }
            return;
          }
          let l = this.getCurveValue(i);
          switch (a) {
            case e.bq.setup:
              o.x = o.data.x + l * n;
              break;
            case e.bq.first:
            case e.bq.replace:
              o.x += (o.data.x + l - o.x) * n;
              break;
            case e.bq.add:
              o.x += l * n;
          }
        }
      }
      class j extends N {
        constructor(t, e, s) {
          super(t, e, y + "|" + s), (this.boneIndex = 0), (this.boneIndex = s);
        }
        apply(t, s, i, r, n, a, h) {
          let o = t.bones[this.boneIndex];
          if (!o.active) return;
          if (i < this.frames[0]) {
            switch (a) {
              case e.bq.setup:
                return void (o.y = o.data.y);
              case e.bq.first:
                o.y += (o.data.y - o.y) * n;
            }
            return;
          }
          let l = this.getCurveValue(i);
          switch (a) {
            case e.bq.setup:
              o.y = o.data.y + l * n;
              break;
            case e.bq.first:
            case e.bq.replace:
              o.y += (o.data.y + l - o.y) * n;
              break;
            case e.bq.add:
              o.y += l * n;
          }
        }
      }
      class _ extends U {
        constructor(t, e, s) {
          super(t, e, A + "|" + s, Y + "|" + s),
            (this.boneIndex = 0),
            (this.boneIndex = s);
        }
        apply(t, s, i, r, a, h, o) {
          let l = t.bones[this.boneIndex];
          if (!l.active) return;
          let c,
            d,
            u = this.frames;
          if (i < u[0]) {
            switch (h) {
              case e.bq.setup:
                return (
                  (l.scaleX = l.data.scaleX), void (l.scaleY = l.data.scaleY)
                );
              case e.bq.first:
                (l.scaleX += (l.data.scaleX - l.scaleX) * a),
                  (l.scaleY += (l.data.scaleY - l.scaleY) * a);
            }
            return;
          }
          let m = V.search(u, i, 3),
            f = this.curves[m / 3];
          switch (f) {
            case 0:
              let t = u[m];
              (c = u[m + 1]), (d = u[m + 2]);
              let e = (i - t) / (u[m + 3] - t);
              (c += (u[m + 3 + 1] - c) * e), (d += (u[m + 3 + 2] - d) * e);
              break;
            case 1:
              (c = u[m + 1]), (d = u[m + 2]);
              break;
            default:
              (c = this.getBezierValue(i, m, 1, f - 2)),
                (d = this.getBezierValue(i, m, 2, f + 18 - 2));
          }
          if (((c *= l.data.scaleX), (d *= l.data.scaleY), 1 == a))
            h == e.bq.add
              ? ((l.scaleX += c - l.data.scaleX),
                (l.scaleY += d - l.data.scaleY))
              : ((l.scaleX = c), (l.scaleY = d));
          else {
            let t = 0,
              s = 0;
            if (o == e.mJ.mixOut)
              switch (h) {
                case e.bq.setup:
                  (t = l.data.scaleX),
                    (s = l.data.scaleY),
                    (l.scaleX = t + (Math.abs(c) * n.signum(t) - t) * a),
                    (l.scaleY = s + (Math.abs(d) * n.signum(s) - s) * a);
                  break;
                case e.bq.first:
                case e.bq.replace:
                  (t = l.scaleX),
                    (s = l.scaleY),
                    (l.scaleX = t + (Math.abs(c) * n.signum(t) - t) * a),
                    (l.scaleY = s + (Math.abs(d) * n.signum(s) - s) * a);
                  break;
                case e.bq.add:
                  (l.scaleX += (c - l.data.scaleX) * a),
                    (l.scaleY += (d - l.data.scaleY) * a);
              }
            else
              switch (h) {
                case e.bq.setup:
                  (t = Math.abs(l.data.scaleX) * n.signum(c)),
                    (s = Math.abs(l.data.scaleY) * n.signum(d)),
                    (l.scaleX = t + (c - t) * a),
                    (l.scaleY = s + (d - s) * a);
                  break;
                case e.bq.first:
                case e.bq.replace:
                  (t = Math.abs(l.scaleX) * n.signum(c)),
                    (s = Math.abs(l.scaleY) * n.signum(d)),
                    (l.scaleX = t + (c - t) * a),
                    (l.scaleY = s + (d - s) * a);
                  break;
                case e.bq.add:
                  (l.scaleX += (c - l.data.scaleX) * a),
                    (l.scaleY += (d - l.data.scaleY) * a);
              }
          }
        }
      }
      class Z extends N {
        constructor(t, e, s) {
          super(t, e, A + "|" + s), (this.boneIndex = 0), (this.boneIndex = s);
        }
        apply(t, s, i, r, a, h, o) {
          let l = t.bones[this.boneIndex];
          if (!l.active) return;
          if (i < this.frames[0]) {
            switch (h) {
              case e.bq.setup:
                return void (l.scaleX = l.data.scaleX);
              case e.bq.first:
                l.scaleX += (l.data.scaleX - l.scaleX) * a;
            }
            return;
          }
          let c = this.getCurveValue(i) * l.data.scaleX;
          if (1 == a)
            h == e.bq.add ? (l.scaleX += c - l.data.scaleX) : (l.scaleX = c);
          else {
            let t = 0;
            if (o == e.mJ.mixOut)
              switch (h) {
                case e.bq.setup:
                  (t = l.data.scaleX),
                    (l.scaleX = t + (Math.abs(c) * n.signum(t) - t) * a);
                  break;
                case e.bq.first:
                case e.bq.replace:
                  (t = l.scaleX),
                    (l.scaleX = t + (Math.abs(c) * n.signum(t) - t) * a);
                  break;
                case e.bq.add:
                  l.scaleX += (c - l.data.scaleX) * a;
              }
            else
              switch (h) {
                case e.bq.setup:
                  (t = Math.abs(l.data.scaleX) * n.signum(c)),
                    (l.scaleX = t + (c - t) * a);
                  break;
                case e.bq.first:
                case e.bq.replace:
                  (t = Math.abs(l.scaleX) * n.signum(c)),
                    (l.scaleX = t + (c - t) * a);
                  break;
                case e.bq.add:
                  l.scaleX += (c - l.data.scaleX) * a;
              }
          }
        }
      }
      class H extends N {
        constructor(t, e, s) {
          super(t, e, Y + "|" + s), (this.boneIndex = 0), (this.boneIndex = s);
        }
        apply(t, s, i, r, a, h, o) {
          let l = t.bones[this.boneIndex];
          if (!l.active) return;
          if (i < this.frames[0]) {
            switch (h) {
              case e.bq.setup:
                return void (l.scaleY = l.data.scaleY);
              case e.bq.first:
                l.scaleY += (l.data.scaleY - l.scaleY) * a;
            }
            return;
          }
          let c = this.getCurveValue(i) * l.data.scaleY;
          if (1 == a)
            h == e.bq.add ? (l.scaleY += c - l.data.scaleY) : (l.scaleY = c);
          else {
            let t = 0;
            if (o == e.mJ.mixOut)
              switch (h) {
                case e.bq.setup:
                  (t = l.data.scaleY),
                    (l.scaleY = t + (Math.abs(c) * n.signum(t) - t) * a);
                  break;
                case e.bq.first:
                case e.bq.replace:
                  (t = l.scaleY),
                    (l.scaleY = t + (Math.abs(c) * n.signum(t) - t) * a);
                  break;
                case e.bq.add:
                  l.scaleY += (c - l.data.scaleY) * a;
              }
            else
              switch (h) {
                case e.bq.setup:
                  (t = Math.abs(l.data.scaleY) * n.signum(c)),
                    (l.scaleY = t + (c - t) * a);
                  break;
                case e.bq.first:
                case e.bq.replace:
                  (t = Math.abs(l.scaleY) * n.signum(c)),
                    (l.scaleY = t + (c - t) * a);
                  break;
                case e.bq.add:
                  l.scaleY += (c - l.data.scaleY) * a;
              }
          }
        }
      }
      class J extends U {
        constructor(t, e, s) {
          super(t, e, C + "|" + s, S + "|" + s),
            (this.boneIndex = 0),
            (this.boneIndex = s);
        }
        apply(t, s, i, r, n, a, h) {
          let o = t.bones[this.boneIndex];
          if (!o.active) return;
          let l = this.frames;
          if (i < l[0]) {
            switch (a) {
              case e.bq.setup:
                return (
                  (o.shearX = o.data.shearX), void (o.shearY = o.data.shearY)
                );
              case e.bq.first:
                (o.shearX += (o.data.shearX - o.shearX) * n),
                  (o.shearY += (o.data.shearY - o.shearY) * n);
            }
            return;
          }
          let c = 0,
            d = 0,
            u = V.search(l, i, 3),
            m = this.curves[u / 3];
          switch (m) {
            case 0:
              let t = l[u];
              (c = l[u + 1]), (d = l[u + 2]);
              let e = (i - t) / (l[u + 3] - t);
              (c += (l[u + 3 + 1] - c) * e), (d += (l[u + 3 + 2] - d) * e);
              break;
            case 1:
              (c = l[u + 1]), (d = l[u + 2]);
              break;
            default:
              (c = this.getBezierValue(i, u, 1, m - 2)),
                (d = this.getBezierValue(i, u, 2, m + 18 - 2));
          }
          switch (a) {
            case e.bq.setup:
              (o.shearX = o.data.shearX + c * n),
                (o.shearY = o.data.shearY + d * n);
              break;
            case e.bq.first:
            case e.bq.replace:
              (o.shearX += (o.data.shearX + c - o.shearX) * n),
                (o.shearY += (o.data.shearY + d - o.shearY) * n);
              break;
            case e.bq.add:
              (o.shearX += c * n), (o.shearY += d * n);
          }
        }
      }
      class Q extends N {
        constructor(t, e, s) {
          super(t, e, C + "|" + s), (this.boneIndex = 0), (this.boneIndex = s);
        }
        apply(t, s, i, r, n, a, h) {
          let o = t.bones[this.boneIndex];
          if (!o.active) return;
          if (i < this.frames[0]) {
            switch (a) {
              case e.bq.setup:
                return void (o.shearX = o.data.shearX);
              case e.bq.first:
                o.shearX += (o.data.shearX - o.shearX) * n;
            }
            return;
          }
          let l = this.getCurveValue(i);
          switch (a) {
            case e.bq.setup:
              o.shearX = o.data.shearX + l * n;
              break;
            case e.bq.first:
            case e.bq.replace:
              o.shearX += (o.data.shearX + l - o.shearX) * n;
              break;
            case e.bq.add:
              o.shearX += l * n;
          }
        }
      }
      class K extends N {
        constructor(t, e, s) {
          super(t, e, S + "|" + s), (this.boneIndex = 0), (this.boneIndex = s);
        }
        apply(t, s, i, r, n, a, h) {
          let o = t.bones[this.boneIndex];
          if (!o.active) return;
          if (i < this.frames[0]) {
            switch (a) {
              case e.bq.setup:
                return void (o.shearY = o.data.shearY);
              case e.bq.first:
                o.shearY += (o.data.shearY - o.shearY) * n;
            }
            return;
          }
          let l = this.getCurveValue(i);
          switch (a) {
            case e.bq.setup:
              o.shearY = o.data.shearY + l * n;
              break;
            case e.bq.first:
            case e.bq.replace:
              o.shearY += (o.data.shearY + l - o.shearY) * n;
              break;
            case e.bq.add:
              o.shearY += l * n;
          }
        }
      }
      class $ extends O {
        constructor(t, e, s) {
          super(t, e, [E + "|" + s, M + "|" + s]),
            (this.slotIndex = 0),
            (this.slotIndex = s);
        }
        getFrameEntries() {
          return 5;
        }
        setFrame(t, e, s, i, r, n) {
          (t *= 5),
            (this.frames[t] = e),
            (this.frames[t + 1] = s),
            (this.frames[t + 2] = i),
            (this.frames[t + 3] = r),
            (this.frames[t + 4] = n);
        }
        apply(t, s, i, r, n, a, h) {
          let o = t.slots[this.slotIndex];
          if (!o.bone.active) return;
          let l = this.frames,
            c = o.color;
          if (i < l[0]) {
            let t = o.data.color;
            switch (a) {
              case e.bq.setup:
                return void c.setFromColor(t);
              case e.bq.first:
                c.add(
                  (t.r - c.r) * n,
                  (t.g - c.g) * n,
                  (t.b - c.b) * n,
                  (t.a - c.a) * n
                );
            }
            return;
          }
          let d = 0,
            u = 0,
            m = 0,
            f = 0,
            g = V.search(l, i, 5),
            p = this.curves[g / 5];
          switch (p) {
            case 0:
              let t = l[g];
              (d = l[g + 1]), (u = l[g + 2]), (m = l[g + 3]), (f = l[g + 4]);
              let e = (i - t) / (l[g + 5] - t);
              (d += (l[g + 5 + 1] - d) * e),
                (u += (l[g + 5 + 2] - u) * e),
                (m += (l[g + 5 + 3] - m) * e),
                (f += (l[g + 5 + 4] - f) * e);
              break;
            case 1:
              (d = l[g + 1]), (u = l[g + 2]), (m = l[g + 3]), (f = l[g + 4]);
              break;
            default:
              (d = this.getBezierValue(i, g, 1, p - 2)),
                (u = this.getBezierValue(i, g, 2, p + 18 - 2)),
                (m = this.getBezierValue(i, g, 3, p + 36 - 2)),
                (f = this.getBezierValue(i, g, 4, p + 54 - 2));
          }
          1 == n
            ? c.set(d, u, m, f)
            : (a == e.bq.setup && c.setFromColor(o.data.color),
              c.add(
                (d - c.r) * n,
                (u - c.g) * n,
                (m - c.b) * n,
                (f - c.a) * n
              ));
        }
      }
      class tt extends O {
        constructor(t, e, s) {
          super(t, e, [E + "|" + s]),
            (this.slotIndex = 0),
            (this.slotIndex = s);
        }
        getFrameEntries() {
          return 4;
        }
        setFrame(t, e, s, i, r) {
          (t <<= 2),
            (this.frames[t] = e),
            (this.frames[t + 1] = s),
            (this.frames[t + 2] = i),
            (this.frames[t + 3] = r);
        }
        apply(t, s, i, r, n, a, h) {
          let o = t.slots[this.slotIndex];
          if (!o.bone.active) return;
          let l = this.frames,
            c = o.color;
          if (i < l[0]) {
            let t = o.data.color;
            switch (a) {
              case e.bq.setup:
                return (c.r = t.r), (c.g = t.g), void (c.b = t.b);
              case e.bq.first:
                (c.r += (t.r - c.r) * n),
                  (c.g += (t.g - c.g) * n),
                  (c.b += (t.b - c.b) * n);
            }
            return;
          }
          let d = 0,
            u = 0,
            m = 0,
            f = V.search(l, i, 4),
            g = this.curves[f >> 2];
          switch (g) {
            case 0:
              let t = l[f];
              (d = l[f + 1]), (u = l[f + 2]), (m = l[f + 3]);
              let e = (i - t) / (l[f + 4] - t);
              (d += (l[f + 4 + 1] - d) * e),
                (u += (l[f + 4 + 2] - u) * e),
                (m += (l[f + 4 + 3] - m) * e);
              break;
            case 1:
              (d = l[f + 1]), (u = l[f + 2]), (m = l[f + 3]);
              break;
            default:
              (d = this.getBezierValue(i, f, 1, g - 2)),
                (u = this.getBezierValue(i, f, 2, g + 18 - 2)),
                (m = this.getBezierValue(i, f, 3, g + 36 - 2));
          }
          if (1 == n) (c.r = d), (c.g = u), (c.b = m);
          else {
            if (a == e.bq.setup) {
              let t = o.data.color;
              (c.r = t.r), (c.g = t.g), (c.b = t.b);
            }
            (c.r += (d - c.r) * n),
              (c.g += (u - c.g) * n),
              (c.b += (m - c.b) * n);
          }
        }
      }
      class et extends N {
        constructor(t, e, s) {
          super(t, e, M + "|" + s), (this.slotIndex = 0), (this.slotIndex = s);
        }
        apply(t, s, i, r, n, a, h) {
          let o = t.slots[this.slotIndex];
          if (!o.bone.active) return;
          let l = o.color;
          if (i < this.frames[0]) {
            let t = o.data.color;
            switch (a) {
              case e.bq.setup:
                return void (l.a = t.a);
              case e.bq.first:
                l.a += (t.a - l.a) * n;
            }
            return;
          }
          let c = this.getCurveValue(i);
          1 == n
            ? (l.a = c)
            : (a == e.bq.setup && (l.a = o.data.color.a),
              (l.a += (c - l.a) * n));
        }
      }
      class st extends O {
        constructor(t, e, s) {
          super(t, e, [E + "|" + s, M + "|" + s, T + "|" + s]),
            (this.slotIndex = 0),
            (this.slotIndex = s);
        }
        getFrameEntries() {
          return 8;
        }
        setFrame(t, e, s, i, r, n, a, h, o) {
          (t <<= 3),
            (this.frames[t] = e),
            (this.frames[t + 1] = s),
            (this.frames[t + 2] = i),
            (this.frames[t + 3] = r),
            (this.frames[t + 4] = n),
            (this.frames[t + 5] = a),
            (this.frames[t + 6] = h),
            (this.frames[t + 7] = o);
        }
        apply(t, s, i, r, n, a, h) {
          let o = t.slots[this.slotIndex];
          if (!o.bone.active) return;
          let l = this.frames,
            c = o.color,
            d = o.darkColor;
          if (i < l[0]) {
            let t = o.data.color,
              s = o.data.darkColor;
            switch (a) {
              case e.bq.setup:
                return (
                  c.setFromColor(t), (d.r = s.r), (d.g = s.g), void (d.b = s.b)
                );
              case e.bq.first:
                c.add(
                  (t.r - c.r) * n,
                  (t.g - c.g) * n,
                  (t.b - c.b) * n,
                  (t.a - c.a) * n
                ),
                  (d.r += (s.r - d.r) * n),
                  (d.g += (s.g - d.g) * n),
                  (d.b += (s.b - d.b) * n);
            }
            return;
          }
          let u = 0,
            m = 0,
            f = 0,
            g = 0,
            p = 0,
            x = 0,
            b = 0,
            w = V.search(l, i, 8),
            v = this.curves[w >> 3];
          switch (v) {
            case 0:
              let t = l[w];
              (u = l[w + 1]),
                (m = l[w + 2]),
                (f = l[w + 3]),
                (g = l[w + 4]),
                (p = l[w + 5]),
                (x = l[w + 6]),
                (b = l[w + 7]);
              let e = (i - t) / (l[w + 8] - t);
              (u += (l[w + 8 + 1] - u) * e),
                (m += (l[w + 8 + 2] - m) * e),
                (f += (l[w + 8 + 3] - f) * e),
                (g += (l[w + 8 + 4] - g) * e),
                (p += (l[w + 8 + 5] - p) * e),
                (x += (l[w + 8 + 6] - x) * e),
                (b += (l[w + 8 + 7] - b) * e);
              break;
            case 1:
              (u = l[w + 1]),
                (m = l[w + 2]),
                (f = l[w + 3]),
                (g = l[w + 4]),
                (p = l[w + 5]),
                (x = l[w + 6]),
                (b = l[w + 7]);
              break;
            default:
              (u = this.getBezierValue(i, w, 1, v - 2)),
                (m = this.getBezierValue(i, w, 2, v + 18 - 2)),
                (f = this.getBezierValue(i, w, 3, v + 36 - 2)),
                (g = this.getBezierValue(i, w, 4, v + 54 - 2)),
                (p = this.getBezierValue(i, w, 5, v + 72 - 2)),
                (x = this.getBezierValue(i, w, 6, v + 90 - 2)),
                (b = this.getBezierValue(i, w, 7, v + 108 - 2));
          }
          if (1 == n) c.set(u, m, f, g), (d.r = p), (d.g = x), (d.b = b);
          else {
            if (a == e.bq.setup) {
              c.setFromColor(o.data.color);
              let t = o.data.darkColor;
              (d.r = t.r), (d.g = t.g), (d.b = t.b);
            }
            c.add((u - c.r) * n, (m - c.g) * n, (f - c.b) * n, (g - c.a) * n),
              (d.r += (p - d.r) * n),
              (d.g += (x - d.g) * n),
              (d.b += (b - d.b) * n);
          }
        }
      }
      class it extends O {
        constructor(t, e, s) {
          super(t, e, [E + "|" + s, T + "|" + s]),
            (this.slotIndex = 0),
            (this.slotIndex = s);
        }
        getFrameEntries() {
          return 7;
        }
        setFrame(t, e, s, i, r, n, a, h) {
          (t *= 7),
            (this.frames[t] = e),
            (this.frames[t + 1] = s),
            (this.frames[t + 2] = i),
            (this.frames[t + 3] = r),
            (this.frames[t + 4] = n),
            (this.frames[t + 5] = a),
            (this.frames[t + 6] = h);
        }
        apply(t, s, i, r, n, a, h) {
          let o = t.slots[this.slotIndex];
          if (!o.bone.active) return;
          let l = this.frames,
            c = o.color,
            d = o.darkColor;
          if (i < l[0]) {
            let t = o.data.color,
              s = o.data.darkColor;
            switch (a) {
              case e.bq.setup:
                return (
                  (c.r = t.r),
                  (c.g = t.g),
                  (c.b = t.b),
                  (d.r = s.r),
                  (d.g = s.g),
                  void (d.b = s.b)
                );
              case e.bq.first:
                (c.r += (t.r - c.r) * n),
                  (c.g += (t.g - c.g) * n),
                  (c.b += (t.b - c.b) * n),
                  (d.r += (s.r - d.r) * n),
                  (d.g += (s.g - d.g) * n),
                  (d.b += (s.b - d.b) * n);
            }
            return;
          }
          let u = 0,
            m = 0,
            f = 0,
            g = 0,
            p = 0,
            x = 0,
            b = V.search(l, i, 7),
            w = this.curves[b / 7];
          switch (w) {
            case 0:
              let t = l[b];
              (u = l[b + 1]),
                (m = l[b + 2]),
                (f = l[b + 3]),
                (g = l[b + 4]),
                (p = l[b + 5]),
                (x = l[b + 6]);
              let e = (i - t) / (l[b + 7] - t);
              (u += (l[b + 7 + 1] - u) * e),
                (m += (l[b + 7 + 2] - m) * e),
                (f += (l[b + 7 + 3] - f) * e),
                (g += (l[b + 7 + 4] - g) * e),
                (p += (l[b + 7 + 5] - p) * e),
                (x += (l[b + 7 + 6] - x) * e);
              break;
            case 1:
              (u = l[b + 1]),
                (m = l[b + 2]),
                (f = l[b + 3]),
                (g = l[b + 4]),
                (p = l[b + 5]),
                (x = l[b + 6]);
              break;
            default:
              (u = this.getBezierValue(i, b, 1, w - 2)),
                (m = this.getBezierValue(i, b, 2, w + 18 - 2)),
                (f = this.getBezierValue(i, b, 3, w + 36 - 2)),
                (g = this.getBezierValue(i, b, 4, w + 54 - 2)),
                (p = this.getBezierValue(i, b, 5, w + 72 - 2)),
                (x = this.getBezierValue(i, b, 6, w + 90 - 2));
          }
          if (1 == n)
            (c.r = u), (c.g = m), (c.b = f), (d.r = g), (d.g = p), (d.b = x);
          else {
            if (a == e.bq.setup) {
              let t = o.data.color,
                e = o.data.darkColor;
              (c.r = t.r),
                (c.g = t.g),
                (c.b = t.b),
                (d.r = e.r),
                (d.g = e.g),
                (d.b = e.b);
            }
            (c.r += (u - c.r) * n),
              (c.g += (m - c.g) * n),
              (c.b += (f - c.b) * n),
              (d.r += (g - d.r) * n),
              (d.g += (p - d.g) * n),
              (d.b += (x - d.b) * n);
          }
        }
      }
      class rt extends V {
        constructor(t, e) {
          super(t, [k + "|" + e]),
            (this.slotIndex = 0),
            (this.slotIndex = e),
            (this.attachmentNames = new Array(t));
        }
        getFrameCount() {
          return this.frames.length;
        }
        setFrame(t, e, s) {
          (this.frames[t] = e), (this.attachmentNames[t] = s);
        }
        apply(t, s, i, r, n, a, h) {
          let o = t.slots[this.slotIndex];
          o.bone.active &&
            (h != e.mJ.mixOut
              ? i < this.frames[0]
                ? (a != e.bq.setup && a != e.bq.first) ||
                  this.setAttachment(t, o, o.data.attachmentName)
                : this.setAttachment(
                    t,
                    o,
                    this.attachmentNames[V.search1(this.frames, i)]
                  )
              : a == e.bq.setup &&
                this.setAttachment(t, o, o.data.attachmentName));
        }
        setAttachment(t, e, s) {
          e.setAttachment(s ? t.getAttachment(this.slotIndex, s) : null);
        }
      }
      class nt extends O {
        constructor(t, e, s, i) {
          super(t, e, [I + "|" + s + "|" + i.id]),
            (this.slotIndex = 0),
            (this.slotIndex = s),
            (this.attachment = i),
            (this.vertices = new Array(t));
        }
        getFrameCount() {
          return this.frames.length;
        }
        setFrame(t, e, s) {
          (this.frames[t] = e), (this.vertices[t] = s);
        }
        setBezier(t, e, s, i, r, n, a, h, o, l, c) {
          let d = this.curves,
            u = this.getFrameCount() + 18 * t;
          0 == s && (d[e] = 2 + u);
          let m = 0.03 * (i - 2 * n + h),
            f = 0.03 * o - 0.06 * a,
            g = 0.006 * (3 * (n - h) - i + l),
            p = 0.018 * (a - o + 0.33333333),
            x = 2 * m + g,
            b = 2 * f + p,
            w = 0.3 * (n - i) + m + 0.16666667 * g,
            v = 0.3 * a + f + 0.16666667 * p,
            y = i + w,
            A = v;
          for (let Y = u + 18; u < Y; u += 2)
            (d[u] = y),
              (d[u + 1] = A),
              (w += x),
              (v += b),
              (x += g),
              (b += p),
              (y += w),
              (A += v);
        }
        getCurvePercent(t, e) {
          let s = this.curves,
            i = s[e];
          switch (i) {
            case 0:
              let s = this.frames[e];
              return (t - s) / (this.frames[e + this.getFrameEntries()] - s);
            case 1:
              return 0;
          }
          if (((i -= 2), s[i] > t)) {
            let r = this.frames[e];
            return (s[i + 1] * (t - r)) / (s[i] - r);
          }
          let r = i + 18;
          for (i += 2; i < r; i += 2)
            if (s[i] >= t) {
              let e = s[i - 2],
                r = s[i - 1];
              return r + ((t - e) / (s[i] - e)) * (s[i + 1] - r);
            }
          let n = s[r - 2],
            a = s[r - 1];
          return (
            a +
            ((1 - a) * (t - n)) / (this.frames[e + this.getFrameEntries()] - n)
          );
        }
        apply(t, s, i, r, n, a, h) {
          let l = t.slots[this.slotIndex];
          if (!l.bone.active) return;
          let c = l.getAttachment();
          if (!c) return;
          if (!(c instanceof m) || c.timelineAttahment != this.attachment)
            return;
          let d = l.deform;
          0 == d.length && (a = e.bq.setup);
          let u = this.vertices,
            f = u[0].length,
            g = this.frames;
          if (i < g[0]) {
            switch (a) {
              case e.bq.setup:
                return void (d.length = 0);
              case e.bq.first:
                if (1 == n) return void (d.length = 0);
                d.length = f;
                let t = c;
                if (t.bones) {
                  n = 1 - n;
                  for (p = 0; p < f; p++) d[p] *= n;
                } else {
                  let e = t.vertices;
                  for (var p = 0; p < f; p++) d[p] += (e[p] - d[p]) * n;
                }
            }
            return;
          }
          if (((d.length = f), i >= g[g.length - 1])) {
            let t = u[g.length - 1];
            if (1 == n)
              if (a == e.bq.add) {
                let e = c;
                if (e.bones) for (let s = 0; s < f; s++) d[s] += t[s];
                else {
                  let s = e.vertices;
                  for (let e = 0; e < f; e++) d[e] += t[e] - s[e];
                }
              } else o.arrayCopy(t, 0, d, 0, f);
            else
              switch (a) {
                case e.bq.setup: {
                  let e = c;
                  if (e.bones) for (let s = 0; s < f; s++) d[s] = t[s] * n;
                  else {
                    let s = e.vertices;
                    for (let e = 0; e < f; e++) {
                      let i = s[e];
                      d[e] = i + (t[e] - i) * n;
                    }
                  }
                  break;
                }
                case e.bq.first:
                case e.bq.replace:
                  for (let e = 0; e < f; e++) d[e] += (t[e] - d[e]) * n;
                  break;
                case e.bq.add:
                  let s = c;
                  if (s.bones) for (let e = 0; e < f; e++) d[e] += t[e] * n;
                  else {
                    let e = s.vertices;
                    for (let s = 0; s < f; s++) d[s] += (t[s] - e[s]) * n;
                  }
              }
            return;
          }
          let x = V.search1(g, i),
            b = this.getCurvePercent(i, x),
            w = u[x],
            v = u[x + 1];
          if (1 == n)
            if (a == e.bq.add) {
              let t = c;
              if (t.bones)
                for (let e = 0; e < f; e++) {
                  let t = w[e];
                  d[e] += t + (v[e] - t) * b;
                }
              else {
                let e = t.vertices;
                for (let t = 0; t < f; t++) {
                  let s = w[t];
                  d[t] += s + (v[t] - s) * b - e[t];
                }
              }
            } else
              for (let e = 0; e < f; e++) {
                let t = w[e];
                d[e] = t + (v[e] - t) * b;
              }
          else
            switch (a) {
              case e.bq.setup: {
                let t = c;
                if (t.bones)
                  for (let e = 0; e < f; e++) {
                    let t = w[e];
                    d[e] = (t + (v[e] - t) * b) * n;
                  }
                else {
                  let e = t.vertices;
                  for (let t = 0; t < f; t++) {
                    let s = w[t],
                      i = e[t];
                    d[t] = i + (s + (v[t] - s) * b - i) * n;
                  }
                }
                break;
              }
              case e.bq.first:
              case e.bq.replace:
                for (let e = 0; e < f; e++) {
                  let t = w[e];
                  d[e] += (t + (v[e] - t) * b - d[e]) * n;
                }
                break;
              case e.bq.add:
                let t = c;
                if (t.bones)
                  for (let e = 0; e < f; e++) {
                    let t = w[e];
                    d[e] += (t + (v[e] - t) * b) * n;
                  }
                else {
                  let e = t.vertices;
                  for (let t = 0; t < f; t++) {
                    let s = w[t];
                    d[t] += (s + (v[t] - s) * b - e[t]) * n;
                  }
                }
            }
        }
      }
      class at extends V {
        constructor(t) {
          super(t, at.propertyIds), (this.events = new Array(t));
        }
        getFrameCount() {
          return this.frames.length;
        }
        setFrame(t, e) {
          (this.frames[t] = e.time), (this.events[t] = e);
        }
        apply(t, e, s, i, r, n, a) {
          if (!i) return;
          let h = this.frames,
            o = this.frames.length;
          if (e > s) this.apply(t, e, Number.MAX_VALUE, i, r, n, a), (e = -1);
          else if (e >= h[o - 1]) return;
          if (s < h[0]) return;
          let l = 0;
          if (e < h[0]) l = 0;
          else {
            l = V.search1(h, e) + 1;
            let t = h[l];
            for (; l > 0 && h[l - 1] == t; ) l--;
          }
          for (; l < o && s >= h[l]; l++) i.push(this.events[l]);
        }
      }
      at.propertyIds = ["" + R];
      class ht extends V {
        constructor(t) {
          super(t, ht.propertyIds), (this.drawOrders = new Array(t));
        }
        getFrameCount() {
          return this.frames.length;
        }
        setFrame(t, e, s) {
          (this.frames[t] = e), (this.drawOrders[t] = s);
        }
        apply(t, s, i, r, n, a, h) {
          if (h == e.mJ.mixOut)
            return void (
              a == e.bq.setup &&
              o.arrayCopy(t.slots, 0, t.drawOrder, 0, t.slots.length)
            );
          if (i < this.frames[0])
            return void (
              (a != e.bq.setup && a != e.bq.first) ||
              o.arrayCopy(t.slots, 0, t.drawOrder, 0, t.slots.length)
            );
          let l = V.search1(this.frames, i),
            c = this.drawOrders[l];
          if (c) {
            let e = t.drawOrder,
              s = t.slots;
            for (let t = 0, i = c.length; t < i; t++) e[t] = s[c[t]];
          } else o.arrayCopy(t.slots, 0, t.drawOrder, 0, t.slots.length);
        }
      }
      ht.propertyIds = ["" + X];
      class ot extends O {
        constructor(t, e, s) {
          super(t, e, [L + "|" + s]),
            (this.ikConstraintIndex = 0),
            (this.ikConstraintIndex = s);
        }
        getFrameEntries() {
          return 6;
        }
        setFrame(t, e, s, i, r, n, a) {
          (t *= 6),
            (this.frames[t] = e),
            (this.frames[t + 1] = s),
            (this.frames[t + 2] = i),
            (this.frames[t + 3] = r),
            (this.frames[t + 4] = n ? 1 : 0),
            (this.frames[t + 5] = a ? 1 : 0);
        }
        apply(t, s, i, r, n, a, h) {
          let o = t.ikConstraints[this.ikConstraintIndex];
          if (!o.active) return;
          let l = this.frames;
          if (i < l[0]) {
            switch (a) {
              case e.bq.setup:
                return (
                  (o.mix = o.data.mix),
                  (o.softness = o.data.softness),
                  (o.bendDirection = o.data.bendDirection),
                  (o.compress = o.data.compress),
                  void (o.stretch = o.data.stretch)
                );
              case e.bq.first:
                (o.mix += (o.data.mix - o.mix) * n),
                  (o.softness += (o.data.softness - o.softness) * n),
                  (o.bendDirection = o.data.bendDirection),
                  (o.compress = o.data.compress),
                  (o.stretch = o.data.stretch);
            }
            return;
          }
          let c = 0,
            d = 0,
            u = V.search(l, i, 6),
            m = this.curves[u / 6];
          switch (m) {
            case 0:
              let t = l[u];
              (c = l[u + 1]), (d = l[u + 2]);
              let e = (i - t) / (l[u + 6] - t);
              (c += (l[u + 6 + 1] - c) * e), (d += (l[u + 6 + 2] - d) * e);
              break;
            case 1:
              (c = l[u + 1]), (d = l[u + 2]);
              break;
            default:
              (c = this.getBezierValue(i, u, 1, m - 2)),
                (d = this.getBezierValue(i, u, 2, m + 18 - 2));
          }
          a == e.bq.setup
            ? ((o.mix = o.data.mix + (c - o.data.mix) * n),
              (o.softness = o.data.softness + (d - o.data.softness) * n),
              h == e.mJ.mixOut
                ? ((o.bendDirection = o.data.bendDirection),
                  (o.compress = o.data.compress),
                  (o.stretch = o.data.stretch))
                : ((o.bendDirection = l[u + 3]),
                  (o.compress = 0 != l[u + 4]),
                  (o.stretch = 0 != l[u + 5])))
            : ((o.mix += (c - o.mix) * n),
              (o.softness += (d - o.softness) * n),
              h == e.mJ.mixIn &&
                ((o.bendDirection = l[u + 3]),
                (o.compress = 0 != l[u + 4]),
                (o.stretch = 0 != l[u + 5])));
        }
      }
      class lt extends O {
        constructor(t, e, s) {
          super(t, e, [F + "|" + s]),
            (this.transformConstraintIndex = 0),
            (this.transformConstraintIndex = s);
        }
        getFrameEntries() {
          return 7;
        }
        setFrame(t, e, s, i, r, n, a, h) {
          let o = this.frames;
          (o[(t *= 7)] = e),
            (o[t + 1] = s),
            (o[t + 2] = i),
            (o[t + 3] = r),
            (o[t + 4] = n),
            (o[t + 5] = a),
            (o[t + 6] = h);
        }
        apply(t, s, i, r, n, a, h) {
          let o = t.transformConstraints[this.transformConstraintIndex];
          if (!o.active) return;
          let l,
            c,
            d,
            u,
            m,
            f,
            g = this.frames;
          if (i < g[0]) {
            let t = o.data;
            switch (a) {
              case e.bq.setup:
                return (
                  (o.mixRotate = t.mixRotate),
                  (o.mixX = t.mixX),
                  (o.mixY = t.mixY),
                  (o.mixScaleX = t.mixScaleX),
                  (o.mixScaleY = t.mixScaleY),
                  void (o.mixShearY = t.mixShearY)
                );
              case e.bq.first:
                (o.mixRotate += (t.mixRotate - o.mixRotate) * n),
                  (o.mixX += (t.mixX - o.mixX) * n),
                  (o.mixY += (t.mixY - o.mixY) * n),
                  (o.mixScaleX += (t.mixScaleX - o.mixScaleX) * n),
                  (o.mixScaleY += (t.mixScaleY - o.mixScaleY) * n),
                  (o.mixShearY += (t.mixShearY - o.mixShearY) * n);
            }
            return;
          }
          let p = V.search(g, i, 7),
            x = this.curves[p / 7];
          switch (x) {
            case 0:
              let t = g[p];
              (l = g[p + 1]),
                (c = g[p + 2]),
                (d = g[p + 3]),
                (u = g[p + 4]),
                (m = g[p + 5]),
                (f = g[p + 6]);
              let e = (i - t) / (g[p + 7] - t);
              (l += (g[p + 7 + 1] - l) * e),
                (c += (g[p + 7 + 2] - c) * e),
                (d += (g[p + 7 + 3] - d) * e),
                (u += (g[p + 7 + 4] - u) * e),
                (m += (g[p + 7 + 5] - m) * e),
                (f += (g[p + 7 + 6] - f) * e);
              break;
            case 1:
              (l = g[p + 1]),
                (c = g[p + 2]),
                (d = g[p + 3]),
                (u = g[p + 4]),
                (m = g[p + 5]),
                (f = g[p + 6]);
              break;
            default:
              (l = this.getBezierValue(i, p, 1, x - 2)),
                (c = this.getBezierValue(i, p, 2, x + 18 - 2)),
                (d = this.getBezierValue(i, p, 3, x + 36 - 2)),
                (u = this.getBezierValue(i, p, 4, x + 54 - 2)),
                (m = this.getBezierValue(i, p, 5, x + 72 - 2)),
                (f = this.getBezierValue(i, p, 6, x + 90 - 2));
          }
          if (a == e.bq.setup) {
            let t = o.data;
            (o.mixRotate = t.mixRotate + (l - t.mixRotate) * n),
              (o.mixX = t.mixX + (c - t.mixX) * n),
              (o.mixY = t.mixY + (d - t.mixY) * n),
              (o.mixScaleX = t.mixScaleX + (u - t.mixScaleX) * n),
              (o.mixScaleY = t.mixScaleY + (m - t.mixScaleY) * n),
              (o.mixShearY = t.mixShearY + (f - t.mixShearY) * n);
          } else
            (o.mixRotate += (l - o.mixRotate) * n),
              (o.mixX += (c - o.mixX) * n),
              (o.mixY += (d - o.mixY) * n),
              (o.mixScaleX += (u - o.mixScaleX) * n),
              (o.mixScaleY += (m - o.mixScaleY) * n),
              (o.mixShearY += (f - o.mixShearY) * n);
        }
      }
      class ct extends N {
        constructor(t, e, s) {
          super(t, e, P + "|" + s),
            (this.pathConstraintIndex = 0),
            (this.pathConstraintIndex = s);
        }
        apply(t, s, i, r, n, a, h) {
          let o = t.pathConstraints[this.pathConstraintIndex];
          if (!o.active) return;
          if (i < this.frames[0]) {
            switch (a) {
              case e.bq.setup:
                return void (o.position = o.data.position);
              case e.bq.first:
                o.position += (o.data.position - o.position) * n;
            }
            return;
          }
          let l = this.getCurveValue(i);
          a == e.bq.setup
            ? (o.position = o.data.position + (l - o.data.position) * n)
            : (o.position += (l - o.position) * n);
        }
      }
      class dt extends N {
        constructor(t, e, s) {
          super(t, e, q + "|" + s),
            (this.pathConstraintIndex = 0),
            (this.pathConstraintIndex = s);
        }
        apply(t, s, i, r, n, a, h) {
          let o = t.pathConstraints[this.pathConstraintIndex];
          if (!o.active) return;
          if (i < this.frames[0]) {
            switch (a) {
              case e.bq.setup:
                return void (o.spacing = o.data.spacing);
              case e.bq.first:
                o.spacing += (o.data.spacing - o.spacing) * n;
            }
            return;
          }
          let l = this.getCurveValue(i);
          a == e.bq.setup
            ? (o.spacing = o.data.spacing + (l - o.data.spacing) * n)
            : (o.spacing += (l - o.spacing) * n);
        }
      }
      class ut extends O {
        constructor(t, e, s) {
          super(t, e, [D + "|" + s]),
            (this.pathConstraintIndex = 0),
            (this.pathConstraintIndex = s);
        }
        getFrameEntries() {
          return 4;
        }
        setFrame(t, e, s, i, r) {
          let n = this.frames;
          (n[(t <<= 2)] = e), (n[t + 1] = s), (n[t + 2] = i), (n[t + 3] = r);
        }
        apply(t, s, i, r, n, a, h) {
          let o = t.pathConstraints[this.pathConstraintIndex];
          if (!o.active) return;
          let l,
            c,
            d,
            u = this.frames;
          if (i < u[0]) {
            switch (a) {
              case e.bq.setup:
                return (
                  (o.mixRotate = o.data.mixRotate),
                  (o.mixX = o.data.mixX),
                  void (o.mixY = o.data.mixY)
                );
              case e.bq.first:
                (o.mixRotate += (o.data.mixRotate - o.mixRotate) * n),
                  (o.mixX += (o.data.mixX - o.mixX) * n),
                  (o.mixY += (o.data.mixY - o.mixY) * n);
            }
            return;
          }
          let m = V.search(u, i, 4),
            f = this.curves[m >> 2];
          switch (f) {
            case 0:
              let t = u[m];
              (l = u[m + 1]), (c = u[m + 2]), (d = u[m + 3]);
              let e = (i - t) / (u[m + 4] - t);
              (l += (u[m + 4 + 1] - l) * e),
                (c += (u[m + 4 + 2] - c) * e),
                (d += (u[m + 4 + 3] - d) * e);
              break;
            case 1:
              (l = u[m + 1]), (c = u[m + 2]), (d = u[m + 3]);
              break;
            default:
              (l = this.getBezierValue(i, m, 1, f - 2)),
                (c = this.getBezierValue(i, m, 2, f + 18 - 2)),
                (d = this.getBezierValue(i, m, 3, f + 36 - 2));
          }
          if (a == e.bq.setup) {
            let t = o.data;
            (o.mixRotate = t.mixRotate + (l - t.mixRotate) * n),
              (o.mixX = t.mixX + (c - t.mixX) * n),
              (o.mixY = t.mixY + (d - t.mixY) * n);
          } else
            (o.mixRotate += (l - o.mixRotate) * n),
              (o.mixX += (c - o.mixX) * n),
              (o.mixY += (d - o.mixY) * n);
        }
      }
      class mt extends V {
        constructor(t, e, s) {
          super(t, [B + "|" + e + "|" + s.sequence.id]),
            (this.slotIndex = e),
            (this.attachment = s);
        }
        getFrameEntries() {
          return mt.ENTRIES;
        }
        getSlotIndex() {
          return this.slotIndex;
        }
        getAttachment() {
          return this.attachment;
        }
        setFrame(t, e, s, i, r) {
          let n = this.frames;
          (n[(t *= mt.ENTRIES)] = e),
            (n[t + mt.MODE] = s | (i << 4)),
            (n[t + mt.DELAY] = r);
        }
        apply(t, i, r, n, a, h, o) {
          let l = t.slots[this.slotIndex];
          if (!l.bone.active) return;
          let c = l.attachment,
            d = this.attachment;
          if (c != d && (!(c instanceof m) || c.timelineAttahment != d)) return;
          let u = this.frames;
          if (r < u[0])
            return void (
              (h != e.bq.setup && h != e.bq.first) ||
              (l.sequenceIndex = -1)
            );
          let f = V.search(u, r, mt.ENTRIES),
            p = u[f],
            x = u[f + mt.MODE],
            b = u[f + mt.DELAY],
            w = x >> 4,
            v = this.attachment.sequence.regions.length,
            y = g[15 & x];
          if (y != s.hold)
            switch (((w += ((r - p) / b + 1e-5) | 0), y)) {
              case s.once:
                w = Math.min(v - 1, w);
                break;
              case s.loop:
                w %= v;
                break;
              case s.pingpong: {
                let t = (v << 1) - 2;
                (w %= t), w >= v && (w = t - w);
                break;
              }
              case s.onceReverse:
                w = Math.max(v - 1 - w, 0);
                break;
              case s.loopReverse:
                w = v - 1 - (w % v);
                break;
              case s.pingpongReverse: {
                let t = (v << 1) - 2;
                (w = (w + v - 1) % t), w >= v && (w = t - w);
              }
            }
          l.sequenceIndex = w;
        }
      }
      (mt.ENTRIES = 3), (mt.MODE = 1), (mt.DELAY = 2);
      class ft {
        constructor(t) {
          (this.tracks = new Array()),
            (this.timeScale = 1),
            (this.unkeyedState = 0),
            (this.events = new Array()),
            (this.listeners = new Array()),
            (this.queue = new pt(this)),
            (this.propertyIDs = new i()),
            (this.animationsChanged = !1),
            (this.trackEntryPool = new l(() => new gt())),
            (this.data = t);
        }
        static emptyAnimation() {
          return ft._emptyAnimation;
        }
        update(t) {
          t *= this.timeScale;
          let e = this.tracks;
          for (let s = 0, i = e.length; s < i; s++) {
            let i = e[s];
            if (!i) continue;
            (i.animationLast = i.nextAnimationLast),
              (i.trackLast = i.nextTrackLast);
            let r = t * i.timeScale;
            if (i.delay > 0) {
              if (((i.delay -= r), i.delay > 0)) continue;
              (r = -i.delay), (i.delay = 0);
            }
            let n = i.next;
            if (n) {
              let e = i.trackLast - n.delay;
              if (e >= 0) {
                for (
                  n.delay = 0,
                    n.trackTime +=
                      0 == i.timeScale
                        ? 0
                        : (e / i.timeScale + t) * n.timeScale,
                    i.trackTime += r,
                    this.setCurrent(s, n, !0);
                  n.mixingFrom;

                )
                  (n.mixTime += t), (n = n.mixingFrom);
                continue;
              }
            } else if (i.trackLast >= i.trackEnd && !i.mixingFrom) {
              (e[s] = null), this.queue.end(i), this.clearNext(i);
              continue;
            }
            if (i.mixingFrom && this.updateMixingFrom(i, t)) {
              let t = i.mixingFrom;
              for (i.mixingFrom = null, t && (t.mixingTo = null); t; )
                this.queue.end(t), (t = t.mixingFrom);
            }
            i.trackTime += r;
          }
          this.queue.drain();
        }
        updateMixingFrom(t, e) {
          let s = t.mixingFrom;
          if (!s) return !0;
          let i = this.updateMixingFrom(s, e);
          return (
            (s.animationLast = s.nextAnimationLast),
            (s.trackLast = s.nextTrackLast),
            t.mixTime > 0 && t.mixTime >= t.mixDuration
              ? ((0 != s.totalAlpha && 0 != t.mixDuration) ||
                  ((t.mixingFrom = s.mixingFrom),
                  s.mixingFrom && (s.mixingFrom.mixingTo = t),
                  (t.interruptAlpha = s.interruptAlpha),
                  this.queue.end(s)),
                i)
              : ((s.trackTime += e * s.timeScale), (t.mixTime += e), !1)
          );
        }
        apply(t) {
          if (!t) throw new Error("skeleton cannot be null.");
          this.animationsChanged && this._animationsChanged();
          let s = this.events,
            i = this.tracks,
            r = !1;
          for (let m = 0, f = i.length; m < f; m++) {
            let a = i[m];
            if (!a || a.delay > 0) continue;
            r = !0;
            let h = 0 == m ? e.bq.first : a.mixBlend,
              l = a.alpha;
            a.mixingFrom
              ? (l *= this.applyMixingFrom(a, t, h))
              : a.trackTime >= a.trackEnd && !a.next && (l = 0);
            let c = a.animationLast,
              d = a.getAnimationTime(),
              u = d,
              f = s;
            a.reverse && ((u = a.animation.duration - u), (f = null));
            let g = a.animation.timelines,
              p = g.length;
            if ((0 == m && 1 == l) || h == e.bq.add)
              for (let s = 0; s < p; s++) {
                o.webkit602BugfixHelper(l, h);
                var n = g[s];
                n instanceof rt
                  ? this.applyAttachmentTimeline(n, t, u, h, !0)
                  : n.apply(t, c, u, f, l, h, e.mJ.mixIn);
              }
            else {
              let s = a.timelineMode,
                i = a.shortestRotation,
                r = !i && a.timelinesRotation.length != p << 1;
              r && (a.timelinesRotation.length = p << 1);
              for (let n = 0; n < p; n++) {
                let d = g[n],
                  m = s[n] == bt ? h : e.bq.setup;
                !i && d instanceof W
                  ? this.applyRotateTimeline(
                      d,
                      t,
                      u,
                      l,
                      m,
                      a.timelinesRotation,
                      n << 1,
                      r
                    )
                  : d instanceof rt
                  ? this.applyAttachmentTimeline(d, t, u, h, !0)
                  : (o.webkit602BugfixHelper(l, h),
                    d.apply(t, c, u, f, l, m, e.mJ.mixIn));
              }
            }
            this.queueEvents(a, d),
              (s.length = 0),
              (a.nextAnimationLast = d),
              (a.nextTrackLast = a.trackTime);
          }
          for (
            var a = this.unkeyedState + Yt,
              h = t.slots,
              l = 0,
              c = t.slots.length;
            l < c;
            l++
          ) {
            var d = h[l];
            if (d.attachmentState == a) {
              var u = d.data.attachmentName;
              d.setAttachment(u ? t.getAttachment(d.data.index, u) : null);
            }
          }
          return (this.unkeyedState += 2), this.queue.drain(), r;
        }
        applyMixingFrom(t, s, i) {
          let r = t.mixingFrom;
          r.mixingFrom && this.applyMixingFrom(r, s, i);
          let n = 0;
          0 == t.mixDuration
            ? ((n = 1), i == e.bq.first && (i = e.bq.setup))
            : ((n = t.mixTime / t.mixDuration),
              n > 1 && (n = 1),
              i != e.bq.first && (i = r.mixBlend));
          let a = n < r.attachmentThreshold,
            h = n < r.drawOrderThreshold,
            l = r.animation.timelines,
            c = l.length,
            d = r.alpha * t.interruptAlpha,
            u = d * (1 - n),
            m = r.animationLast,
            f = r.getAnimationTime(),
            g = f,
            p = null;
          if (
            (r.reverse
              ? (g = r.animation.duration - g)
              : n < r.eventThreshold && (p = this.events),
            i == e.bq.add)
          )
            for (let o = 0; o < c; o++)
              l[o].apply(s, m, g, p, u, i, e.mJ.mixOut);
          else {
            let t = r.timelineMode,
              n = r.timelineHoldMix,
              f = r.shortestRotation,
              x = !f && r.timelinesRotation.length != c << 1;
            x && (r.timelinesRotation.length = c << 1), (r.totalAlpha = 0);
            for (let b = 0; b < c; b++) {
              let c,
                w = l[b],
                v = e.mJ.mixOut,
                y = 0;
              switch (t[b]) {
                case bt:
                  if (!h && w instanceof ht) continue;
                  (c = i), (y = u);
                  break;
                case wt:
                  (c = e.bq.setup), (y = u);
                  break;
                case vt:
                  (c = i), (y = d);
                  break;
                case yt:
                  (c = e.bq.setup), (y = d);
                  break;
                default:
                  c = e.bq.setup;
                  let t = n[b];
                  y = d * Math.max(0, 1 - t.mixTime / t.mixDuration);
              }
              (r.totalAlpha += y),
                !f && w instanceof W
                  ? this.applyRotateTimeline(
                      w,
                      s,
                      g,
                      y,
                      c,
                      r.timelinesRotation,
                      b << 1,
                      x
                    )
                  : w instanceof rt
                  ? this.applyAttachmentTimeline(w, s, g, c, a)
                  : (o.webkit602BugfixHelper(y, i),
                    h && w instanceof ht && c == e.bq.setup && (v = e.mJ.mixIn),
                    w.apply(s, m, g, p, y, c, v));
            }
          }
          return (
            t.mixDuration > 0 && this.queueEvents(r, f),
            (this.events.length = 0),
            (r.nextAnimationLast = f),
            (r.nextTrackLast = r.trackTime),
            n
          );
        }
        applyAttachmentTimeline(t, s, i, r, n) {
          var a = s.slots[t.slotIndex];
          a.bone.active &&
            (i < t.frames[0]
              ? (r != e.bq.setup && r != e.bq.first) ||
                this.setAttachment(s, a, a.data.attachmentName, n)
              : this.setAttachment(
                  s,
                  a,
                  t.attachmentNames[V.search1(t.frames, i)],
                  n
                ),
            a.attachmentState <= this.unkeyedState &&
              (a.attachmentState = this.unkeyedState + Yt));
        }
        setAttachment(t, e, s, i) {
          e.setAttachment(s ? t.getAttachment(e.data.index, s) : null),
            i && (e.attachmentState = this.unkeyedState + Ct);
        }
        applyRotateTimeline(t, s, i, r, a, h, o, l) {
          if ((l && (h[o] = 0), 1 == r))
            return void t.apply(s, 0, i, null, 1, a, e.mJ.mixIn);
          let c = s.bones[t.boneIndex];
          if (!c.active) return;
          let d = 0,
            u = 0;
          if (i < t.frames[0])
            switch (a) {
              case e.bq.setup:
                c.rotation = c.data.rotation;
              default:
                return;
              case e.bq.first:
                (d = c.rotation), (u = c.data.rotation);
            }
          else
            (d = a == e.bq.setup ? c.data.rotation : c.rotation),
              (u = c.data.rotation + t.getCurveValue(i));
          let m = 0,
            f = u - d;
          if (
            ((f -= 360 * (16384 - ((16384.499999999996 - f / 360) | 0))),
            0 == f)
          )
            m = h[o];
          else {
            let t = 0,
              e = 0;
            l ? ((t = 0), (e = f)) : ((t = h[o]), (e = h[o + 1]));
            let s = f > 0,
              i = t >= 0;
            n.signum(e) != n.signum(f) &&
              Math.abs(e) <= 90 &&
              (Math.abs(t) > 180 && (t += 360 * n.signum(t)), (i = s)),
              (m = f + t - (t % 360)),
              i != s && (m += 360 * n.signum(t)),
              (h[o] = m);
          }
          (h[o + 1] = f), (c.rotation = d + m * r);
        }
        queueEvents(t, e) {
          let s = t.animationStart,
            i = t.animationEnd,
            r = i - s,
            n = t.trackLast % r,
            a = this.events,
            h = 0,
            o = a.length;
          for (; h < o; h++) {
            let e = a[h];
            if (e.time < n) break;
            e.time > i || this.queue.event(t, e);
          }
          let l = !1;
          for (
            l = t.loop
              ? 0 == r || n > t.trackTime % r
              : e >= i && t.animationLast < i,
              l && this.queue.complete(t);
            h < o;
            h++
          ) {
            let e = a[h];
            e.time < s || this.queue.event(t, e);
          }
        }
        clearTracks() {
          let t = this.queue.drainDisabled;
          this.queue.drainDisabled = !0;
          for (let e = 0, s = this.tracks.length; e < s; e++)
            this.clearTrack(e);
          (this.tracks.length = 0),
            (this.queue.drainDisabled = t),
            this.queue.drain();
        }
        clearTrack(t) {
          if (t >= this.tracks.length) return;
          let e = this.tracks[t];
          if (!e) return;
          this.queue.end(e), this.clearNext(e);
          let s = e;
          for (;;) {
            let t = s.mixingFrom;
            if (!t) break;
            this.queue.end(t),
              (s.mixingFrom = null),
              (s.mixingTo = null),
              (s = t);
          }
          (this.tracks[e.trackIndex] = null), this.queue.drain();
        }
        setCurrent(t, e, s) {
          let i = this.expandToIndex(t);
          (this.tracks[t] = e),
            (e.previous = null),
            i &&
              (s && this.queue.interrupt(i),
              (e.mixingFrom = i),
              (i.mixingTo = e),
              (e.mixTime = 0),
              i.mixingFrom &&
                i.mixDuration > 0 &&
                (e.interruptAlpha *= Math.min(1, i.mixTime / i.mixDuration)),
              (i.timelinesRotation.length = 0)),
            this.queue.start(e);
        }
        setAnimation(t, e, s = !1) {
          let i = this.data.skeletonData.findAnimation(e);
          if (!i) throw new Error("Animation not found: " + e);
          return this.setAnimationWith(t, i, s);
        }
        setAnimationWith(t, e, s = !1) {
          if (!e) throw new Error("animation cannot be null.");
          let i = !0,
            r = this.expandToIndex(t);
          r &&
            (-1 == r.nextTrackLast
              ? ((this.tracks[t] = r.mixingFrom),
                this.queue.interrupt(r),
                this.queue.end(r),
                this.clearNext(r),
                (r = r.mixingFrom),
                (i = !1))
              : this.clearNext(r));
          let n = this.trackEntry(t, e, s, r);
          return this.setCurrent(t, n, i), this.queue.drain(), n;
        }
        addAnimation(t, e, s = !1, i = 0) {
          let r = this.data.skeletonData.findAnimation(e);
          if (!r) throw new Error("Animation not found: " + e);
          return this.addAnimationWith(t, r, s, i);
        }
        addAnimationWith(t, e, s = !1, i = 0) {
          if (!e) throw new Error("animation cannot be null.");
          let r = this.expandToIndex(t);
          if (r) for (; r.next; ) r = r.next;
          let n = this.trackEntry(t, e, s, r);
          return (
            r
              ? ((r.next = n),
                (n.previous = r),
                i <= 0 && (i += r.getTrackComplete() - n.mixDuration))
              : (this.setCurrent(t, n, !0), this.queue.drain()),
            (n.delay = i),
            n
          );
        }
        setEmptyAnimation(t, e = 0) {
          let s = this.setAnimationWith(t, ft.emptyAnimation(), !1);
          return (s.mixDuration = e), (s.trackEnd = e), s;
        }
        addEmptyAnimation(t, e = 0, s = 0) {
          let i = this.addAnimationWith(t, ft.emptyAnimation(), !1, s);
          return (
            s <= 0 && (i.delay += i.mixDuration - e),
            (i.mixDuration = e),
            (i.trackEnd = e),
            i
          );
        }
        setEmptyAnimations(t = 0) {
          let e = this.queue.drainDisabled;
          this.queue.drainDisabled = !0;
          for (let s = 0, i = this.tracks.length; s < i; s++) {
            let e = this.tracks[s];
            e && this.setEmptyAnimation(e.trackIndex, t);
          }
          (this.queue.drainDisabled = e), this.queue.drain();
        }
        expandToIndex(t) {
          return t < this.tracks.length
            ? this.tracks[t]
            : (o.ensureArrayCapacity(this.tracks, t + 1, null),
              (this.tracks.length = t + 1),
              null);
        }
        trackEntry(t, s, i, r) {
          let n = this.trackEntryPool.obtain();
          return (
            n.reset(),
            (n.trackIndex = t),
            (n.animation = s),
            (n.loop = i),
            (n.holdPrevious = !1),
            (n.reverse = !1),
            (n.shortestRotation = !1),
            (n.eventThreshold = 0),
            (n.attachmentThreshold = 0),
            (n.drawOrderThreshold = 0),
            (n.animationStart = 0),
            (n.animationEnd = s.duration),
            (n.animationLast = -1),
            (n.nextAnimationLast = -1),
            (n.delay = 0),
            (n.trackTime = 0),
            (n.trackLast = -1),
            (n.nextTrackLast = -1),
            (n.trackEnd = Number.MAX_VALUE),
            (n.timeScale = 1),
            (n.alpha = 1),
            (n.mixTime = 0),
            (n.mixDuration = r ? this.data.getMix(r.animation, s) : 0),
            (n.interruptAlpha = 1),
            (n.totalAlpha = 0),
            (n.mixBlend = e.bq.replace),
            n
          );
        }
        clearNext(t) {
          let e = t.next;
          for (; e; ) this.queue.dispose(e), (e = e.next);
          t.next = null;
        }
        _animationsChanged() {
          (this.animationsChanged = !1), this.propertyIDs.clear();
          let t = this.tracks;
          for (let s = 0, i = t.length; s < i; s++) {
            let i = t[s];
            if (i) {
              for (; i.mixingFrom; ) i = i.mixingFrom;
              do {
                (i.mixingTo && i.mixBlend == e.bq.add) || this.computeHold(i),
                  (i = i.mixingTo);
              } while (i);
            }
          }
        }
        computeHold(t) {
          let e = t.mixingTo,
            s = t.animation.timelines,
            i = t.animation.timelines.length,
            r = t.timelineMode;
          r.length = i;
          let n = t.timelineHoldMix;
          n.length = 0;
          let a = this.propertyIDs;
          if (e && e.holdPrevious)
            for (let h = 0; h < i; h++)
              r[h] = a.addAll(s[h].getPropertyIds()) ? yt : vt;
          else
            t: for (let h = 0; h < i; h++) {
              let i = s[h],
                o = i.getPropertyIds();
              if (a.addAll(o))
                if (
                  !e ||
                  i instanceof rt ||
                  i instanceof ht ||
                  i instanceof at ||
                  !e.animation.hasTimeline(o)
                )
                  r[h] = wt;
                else {
                  for (let s = e.mixingTo; s; s = s.mixingTo)
                    if (!s.animation.hasTimeline(o)) {
                      if (t.mixDuration > 0) {
                        (r[h] = At), (n[h] = s);
                        continue t;
                      }
                      break;
                    }
                  r[h] = yt;
                }
              else r[h] = bt;
            }
        }
        getCurrent(t) {
          return t >= this.tracks.length ? null : this.tracks[t];
        }
        addListener(t) {
          if (!t) throw new Error("listener cannot be null.");
          this.listeners.push(t);
        }
        removeListener(t) {
          let e = this.listeners.indexOf(t);
          e >= 0 && this.listeners.splice(e, 1);
        }
        clearListeners() {
          this.listeners.length = 0;
        }
        clearListenerNotifications() {
          this.queue.clear();
        }
      }
      ft._emptyAnimation = new p("<empty>", [], 0);
      class gt {
        constructor() {
          (this.animation = null),
            (this.previous = null),
            (this.next = null),
            (this.mixingFrom = null),
            (this.mixingTo = null),
            (this.listener = null),
            (this.trackIndex = 0),
            (this.loop = !1),
            (this.holdPrevious = !1),
            (this.reverse = !1),
            (this.shortestRotation = !1),
            (this.eventThreshold = 0),
            (this.attachmentThreshold = 0),
            (this.drawOrderThreshold = 0),
            (this.animationStart = 0),
            (this.animationEnd = 0),
            (this.animationLast = 0),
            (this.nextAnimationLast = 0),
            (this.delay = 0),
            (this.trackTime = 0),
            (this.trackLast = 0),
            (this.nextTrackLast = 0),
            (this.trackEnd = 0),
            (this.timeScale = 0),
            (this.alpha = 0),
            (this.mixTime = 0),
            (this.mixDuration = 0),
            (this.interruptAlpha = 0),
            (this.totalAlpha = 0),
            (this.mixBlend = e.bq.replace),
            (this.timelineMode = new Array()),
            (this.timelineHoldMix = new Array()),
            (this.timelinesRotation = new Array());
        }
        reset() {
          (this.next = null),
            (this.previous = null),
            (this.mixingFrom = null),
            (this.mixingTo = null),
            (this.animation = null),
            (this.listener = null),
            (this.timelineMode.length = 0),
            (this.timelineHoldMix.length = 0),
            (this.timelinesRotation.length = 0);
        }
        getAnimationTime() {
          if (this.loop) {
            let t = this.animationEnd - this.animationStart;
            return 0 == t
              ? this.animationStart
              : (this.trackTime % t) + this.animationStart;
          }
          return Math.min(
            this.trackTime + this.animationStart,
            this.animationEnd
          );
        }
        setAnimationLast(t) {
          (this.animationLast = t), (this.nextAnimationLast = t);
        }
        isComplete() {
          return this.trackTime >= this.animationEnd - this.animationStart;
        }
        resetRotationDirections() {
          this.timelinesRotation.length = 0;
        }
        getTrackComplete() {
          let t = this.animationEnd - this.animationStart;
          if (0 != t) {
            if (this.loop) return t * (1 + ((this.trackTime / t) | 0));
            if (this.trackTime < t) return t;
          }
          return this.trackTime;
        }
      }
      class pt {
        constructor(t) {
          (this.objects = []), (this.drainDisabled = !1), (this.animState = t);
        }
        start(t) {
          this.objects.push(e.tw.start),
            this.objects.push(t),
            (this.animState.animationsChanged = !0);
        }
        interrupt(t) {
          this.objects.push(e.tw.interrupt), this.objects.push(t);
        }
        end(t) {
          this.objects.push(e.tw.end),
            this.objects.push(t),
            (this.animState.animationsChanged = !0);
        }
        dispose(t) {
          this.objects.push(e.tw.dispose), this.objects.push(t);
        }
        complete(t) {
          this.objects.push(e.tw.complete), this.objects.push(t);
        }
        event(t, s) {
          this.objects.push(e.tw.event),
            this.objects.push(t),
            this.objects.push(s);
        }
        drain() {
          if (this.drainDisabled) return;
          this.drainDisabled = !0;
          let t = this.objects,
            s = this.animState.listeners;
          for (let i = 0; i < t.length; i += 2) {
            let r = t[i],
              n = t[i + 1];
            switch (r) {
              case e.tw.start:
                n.listener && n.listener.start && n.listener.start(n);
                for (let t = 0; t < s.length; t++) {
                  let e = s[t];
                  e.start && e.start(n);
                }
                break;
              case e.tw.interrupt:
                n.listener && n.listener.interrupt && n.listener.interrupt(n);
                for (let t = 0; t < s.length; t++) {
                  let e = s[t];
                  e.interrupt && e.interrupt(n);
                }
                break;
              case e.tw.end:
                n.listener && n.listener.end && n.listener.end(n);
                for (let t = 0; t < s.length; t++) {
                  let e = s[t];
                  e.end && e.end(n);
                }
              case e.tw.dispose:
                n.listener && n.listener.dispose && n.listener.dispose(n);
                for (let t = 0; t < s.length; t++) {
                  let e = s[t];
                  e.dispose && e.dispose(n);
                }
                this.animState.trackEntryPool.free(n);
                break;
              case e.tw.complete:
                n.listener && n.listener.complete && n.listener.complete(n);
                for (let t = 0; t < s.length; t++) {
                  let e = s[t];
                  e.complete && e.complete(n);
                }
                break;
              case e.tw.event:
                let r = t[2 + i++];
                n.listener && n.listener.event && n.listener.event(n, r);
                for (let t = 0; t < s.length; t++) {
                  let e = s[t];
                  e.event && e.event(n, r);
                }
            }
          }
          this.clear(), (this.drainDisabled = !1);
        }
        clear() {
          this.objects.length = 0;
        }
      }
      var xt;
      (e.tw = void 0),
        ((xt = e.tw || (e.tw = {}))[(xt.start = 0)] = "start"),
        (xt[(xt.interrupt = 1)] = "interrupt"),
        (xt[(xt.end = 2)] = "end"),
        (xt[(xt.dispose = 3)] = "dispose"),
        (xt[(xt.complete = 4)] = "complete"),
        (xt[(xt.event = 5)] = "event");
      const bt = 0,
        wt = 1,
        vt = 2,
        yt = 3,
        At = 4,
        Yt = 1,
        Ct = 2;
      class St extends m {
        constructor(t) {
          super(t), (this.color = new r(1, 1, 1, 1));
        }
        copy() {
          let t = new St(this.name);
          return this.copyTo(t), t.color.setFromColor(this.color), t;
        }
      }
      class Et extends m {
        constructor(t) {
          super(t),
            (this.endSlot = null),
            (this.color = new r(0.2275, 0.2275, 0.8078, 1));
        }
        copy() {
          let t = new Et(this.name);
          return (
            this.copyTo(t),
            (t.endSlot = this.endSlot),
            t.color.setFromColor(this.color),
            t
          );
        }
      }
      class Mt {
        constructor(t) {
          this._image = t;
        }
        getImage() {
          return this._image;
        }
      }
      var Tt, kt, It, Rt, Xt, Lt, Ft, Pt;
      (e.Qb = void 0),
        ((Tt = e.Qb || (e.Qb = {}))[(Tt.Nearest = 9728)] = "Nearest"),
        (Tt[(Tt.Linear = 9729)] = "Linear"),
        (Tt[(Tt.MipMap = 9987)] = "MipMap"),
        (Tt[(Tt.MipMapNearestNearest = 9984)] = "MipMapNearestNearest"),
        (Tt[(Tt.MipMapLinearNearest = 9985)] = "MipMapLinearNearest"),
        (Tt[(Tt.MipMapNearestLinear = 9986)] = "MipMapNearestLinear"),
        (Tt[(Tt.MipMapLinearLinear = 9987)] = "MipMapLinearLinear"),
        (e.Df = void 0),
        ((kt = e.Df || (e.Df = {}))[(kt.MirroredRepeat = 33648)] =
          "MirroredRepeat"),
        (kt[(kt.ClampToEdge = 33071)] = "ClampToEdge"),
        (kt[(kt.Repeat = 10497)] = "Repeat");
      class qt {
        constructor() {
          (this.u = 0),
            (this.v = 0),
            (this.u2 = 0),
            (this.v2 = 0),
            (this.width = 0),
            (this.height = 0),
            (this.degrees = 0),
            (this.offsetX = 0),
            (this.offsetY = 0),
            (this.originalWidth = 0),
            (this.originalHeight = 0);
        }
      }
      class Dt {
        constructor(t) {
          (this.pages = new Array()), (this.regions = new Array());
          let s = new Bt(t),
            i = new Array(4),
            r = {
              size: (t) => {
                (t.width = parseInt(i[1])), (t.height = parseInt(i[2]));
              },
              format: () => {},
              filter: (t) => {
                (t.minFilter = o.enumValue(e.Qb, i[1])),
                  (t.magFilter = o.enumValue(e.Qb, i[2]));
              },
              repeat: (t) => {
                -1 != i[1].indexOf("x") && (t.uWrap = e.Df.Repeat),
                  -1 != i[1].indexOf("y") && (t.vWrap = e.Df.Repeat);
              },
              pma: (t) => {
                t.pma = "true" == i[1];
              },
            };
          var n = {
            xy: (t) => {
              (t.x = parseInt(i[1])), (t.y = parseInt(i[2]));
            },
            size: (t) => {
              (t.width = parseInt(i[1])), (t.height = parseInt(i[2]));
            },
            bounds: (t) => {
              (t.x = parseInt(i[1])),
                (t.y = parseInt(i[2])),
                (t.width = parseInt(i[3])),
                (t.height = parseInt(i[4]));
            },
            offset: (t) => {
              (t.offsetX = parseInt(i[1])), (t.offsetY = parseInt(i[2]));
            },
            orig: (t) => {
              (t.originalWidth = parseInt(i[1])),
                (t.originalHeight = parseInt(i[2]));
            },
            offsets: (t) => {
              (t.offsetX = parseInt(i[1])),
                (t.offsetY = parseInt(i[2])),
                (t.originalWidth = parseInt(i[3])),
                (t.originalHeight = parseInt(i[4]));
            },
            rotate: (t) => {
              let e = i[1];
              "true" == e
                ? (t.degrees = 90)
                : "false" != e && (t.degrees = parseInt(e));
            },
            index: (t) => {
              t.index = parseInt(i[1]);
            },
          };
          let a = s.readLine();
          for (; a && 0 == a.trim().length; ) a = s.readLine();
          for (; a && 0 != a.trim().length && 0 != s.readEntry(i, a); )
            a = s.readLine();
          let h = null,
            l = null,
            c = null;
          for (; null !== a; )
            if (0 == a.trim().length) (h = null), (a = s.readLine());
            else if (h) {
              let t = new Ot(h, a);
              for (;;) {
                let e = s.readEntry(i, (a = s.readLine()));
                if (0 == e) break;
                let r = n[i[0]];
                if (r) r(t);
                else {
                  l || (l = []), c || (c = []), l.push(i[0]);
                  let t = [];
                  for (let s = 0; s < e; s++) t.push(parseInt(i[s + 1]));
                  c.push(t);
                }
              }
              0 == t.originalWidth &&
                0 == t.originalHeight &&
                ((t.originalWidth = t.width), (t.originalHeight = t.height)),
                l &&
                  l.length > 0 &&
                  c &&
                  c.length > 0 &&
                  ((t.names = l), (t.values = c), (l = null), (c = null)),
                (t.u = t.x / h.width),
                (t.v = t.y / h.height),
                90 == t.degrees
                  ? ((t.u2 = (t.x + t.height) / h.width),
                    (t.v2 = (t.y + t.width) / h.height))
                  : ((t.u2 = (t.x + t.width) / h.width),
                    (t.v2 = (t.y + t.height) / h.height)),
                this.regions.push(t);
            } else {
              for (
                h = new Vt(a.trim());
                0 != s.readEntry(i, (a = s.readLine()));

              ) {
                let t = r[i[0]];
                t && t(h);
              }
              this.pages.push(h);
            }
        }
        findRegion(t) {
          for (let e = 0; e < this.regions.length; e++)
            if (this.regions[e].name == t) return this.regions[e];
          return null;
        }
        setTextures(t, e = "") {
          for (let s of this.pages) s.setTexture(t.get(e + s.name));
        }
        dispose() {
          var t;
          for (let e = 0; e < this.pages.length; e++)
            null === (t = this.pages[e].texture) || void 0 === t || t.dispose();
        }
      }
      class Bt {
        constructor(t) {
          (this.index = 0), (this.lines = t.split(/\r\n|\r|\n/));
        }
        readLine() {
          return this.index >= this.lines.length
            ? null
            : this.lines[this.index++];
        }
        readEntry(t, e) {
          if (!e) return 0;
          if (0 == (e = e.trim()).length) return 0;
          let s = e.indexOf(":");
          if (-1 == s) return 0;
          t[0] = e.substr(0, s).trim();
          for (let i = 1, r = s + 1; ; i++) {
            let s = e.indexOf(",", r);
            if (-1 == s) return (t[i] = e.substr(r).trim()), i;
            if (((t[i] = e.substr(r, s - r).trim()), (r = s + 1), 4 == i))
              return 4;
          }
        }
      }
      class Vt {
        constructor(t) {
          (this.minFilter = e.Qb.Nearest),
            (this.magFilter = e.Qb.Nearest),
            (this.uWrap = e.Df.ClampToEdge),
            (this.vWrap = e.Df.ClampToEdge),
            (this.texture = null),
            (this.width = 0),
            (this.height = 0),
            (this.pma = !1),
            (this.name = t);
        }
        setTexture(t) {
          (this.texture = t),
            t.setFilters(this.minFilter, this.magFilter),
            t.setWraps(this.uWrap, this.vWrap);
        }
      }
      class Ot extends qt {
        constructor(t, e) {
          super(),
            (this.x = 0),
            (this.y = 0),
            (this.offsetX = 0),
            (this.offsetY = 0),
            (this.originalWidth = 0),
            (this.originalHeight = 0),
            (this.index = 0),
            (this.degrees = 0),
            (this.names = null),
            (this.values = null),
            (this.page = t),
            (this.name = e);
        }
      }
      class Nt extends m {
        constructor(t, e) {
          super(t),
            (this.region = null),
            (this.regionUVs = []),
            (this.uvs = []),
            (this.triangles = []),
            (this.color = new r(1, 1, 1, 1)),
            (this.width = 0),
            (this.height = 0),
            (this.hullLength = 0),
            (this.edges = []),
            (this.parentMesh = null),
            (this.sequence = null),
            (this.tempColor = new r(0, 0, 0, 0)),
            (this.path = e);
        }
        updateRegion() {
          if (!this.region) throw new Error("Region not set.");
          let t = this.regionUVs;
          (this.uvs && this.uvs.length == t.length) ||
            (this.uvs = o.newFloatArray(t.length));
          let e = this.uvs,
            s = this.uvs.length,
            i = this.region.u,
            r = this.region.v,
            n = 0,
            a = 0;
          if (this.region instanceof Ot) {
            let h = this.region,
              o = h.page.texture.getImage(),
              l = o.width,
              c = o.height;
            switch (h.degrees) {
              case 90:
                (i -= (h.originalHeight - h.offsetY - h.height) / l),
                  (r -= (h.originalWidth - h.offsetX - h.width) / c),
                  (n = h.originalHeight / l),
                  (a = h.originalWidth / c);
                for (let h = 0; h < s; h += 2)
                  (e[h] = i + t[h + 1] * n), (e[h + 1] = r + (1 - t[h]) * a);
                return;
              case 180:
                (i -= (h.originalWidth - h.offsetX - h.width) / l),
                  (r -= h.offsetY / c),
                  (n = h.originalWidth / l),
                  (a = h.originalHeight / c);
                for (let h = 0; h < s; h += 2)
                  (e[h] = i + (1 - t[h]) * n),
                    (e[h + 1] = r + (1 - t[h + 1]) * a);
                return;
              case 270:
                (i -= h.offsetY / l),
                  (r -= h.offsetX / c),
                  (n = h.originalHeight / l),
                  (a = h.originalWidth / c);
                for (let h = 0; h < s; h += 2)
                  (e[h] = i + (1 - t[h + 1]) * n), (e[h + 1] = r + t[h] * a);
                return;
            }
            (i -= h.offsetX / l),
              (r -= (h.originalHeight - h.offsetY - h.height) / c),
              (n = h.originalWidth / l),
              (a = h.originalHeight / c);
          } else
            this.region
              ? ((n = this.region.u2 - i), (a = this.region.v2 - r))
              : ((i = r = 0), (n = a = 1));
          for (let h = 0; h < s; h += 2)
            (e[h] = i + t[h] * n), (e[h + 1] = r + t[h + 1] * a);
        }
        getParentMesh() {
          return this.parentMesh;
        }
        setParentMesh(t) {
          (this.parentMesh = t),
            t &&
              ((this.bones = t.bones),
              (this.vertices = t.vertices),
              (this.worldVerticesLength = t.worldVerticesLength),
              (this.regionUVs = t.regionUVs),
              (this.triangles = t.triangles),
              (this.hullLength = t.hullLength),
              (this.worldVerticesLength = t.worldVerticesLength));
        }
        copy() {
          if (this.parentMesh) return this.newLinkedMesh();
          let t = new Nt(this.name, this.path);
          return (
            (t.region = this.region),
            t.color.setFromColor(this.color),
            this.copyTo(t),
            (t.regionUVs = new Array(this.regionUVs.length)),
            o.arrayCopy(
              this.regionUVs,
              0,
              t.regionUVs,
              0,
              this.regionUVs.length
            ),
            (t.uvs = new Array(this.uvs.length)),
            o.arrayCopy(this.uvs, 0, t.uvs, 0, this.uvs.length),
            (t.triangles = new Array(this.triangles.length)),
            o.arrayCopy(
              this.triangles,
              0,
              t.triangles,
              0,
              this.triangles.length
            ),
            (t.hullLength = this.hullLength),
            (t.sequence = null != this.sequence ? this.sequence.copy() : null),
            this.edges &&
              ((t.edges = new Array(this.edges.length)),
              o.arrayCopy(this.edges, 0, t.edges, 0, this.edges.length)),
            (t.width = this.width),
            (t.height = this.height),
            t
          );
        }
        computeWorldVertices(t, e, s, i, r, n) {
          null != this.sequence && this.sequence.apply(t, this),
            super.computeWorldVertices(t, e, s, i, r, n);
        }
        newLinkedMesh() {
          let t = new Nt(this.name, this.path);
          return (
            (t.region = this.region),
            t.color.setFromColor(this.color),
            (t.timelineAttahment = this.timelineAttahment),
            t.setParentMesh(this.parentMesh ? this.parentMesh : this),
            null != t.region && t.updateRegion(),
            t
          );
        }
      }
      class Ut extends m {
        constructor(t) {
          super(t),
            (this.lengths = []),
            (this.closed = !1),
            (this.constantSpeed = !1),
            (this.color = new r(1, 1, 1, 1));
        }
        copy() {
          let t = new Ut(this.name);
          return (
            this.copyTo(t),
            (t.lengths = new Array(this.lengths.length)),
            o.arrayCopy(this.lengths, 0, t.lengths, 0, this.lengths.length),
            (t.closed = closed),
            (t.constantSpeed = this.constantSpeed),
            t.color.setFromColor(this.color),
            t
          );
        }
      }
      class Wt extends m {
        constructor(t) {
          super(t),
            (this.x = 0),
            (this.y = 0),
            (this.rotation = 0),
            (this.color = new r(0.38, 0.94, 0, 1));
        }
        computeWorldPosition(t, e) {
          return (
            (e.x = this.x * t.a + this.y * t.b + t.worldX),
            (e.y = this.x * t.c + this.y * t.d + t.worldY),
            e
          );
        }
        computeWorldRotation(t) {
          let e = n.cosDeg(this.rotation),
            s = n.sinDeg(this.rotation),
            i = e * t.a + s * t.b,
            r = e * t.c + s * t.d;
          return Math.atan2(r, i) * n.radDeg;
        }
        copy() {
          let t = new Wt(this.name);
          return (
            (t.x = this.x),
            (t.y = this.y),
            (t.rotation = this.rotation),
            t.color.setFromColor(this.color),
            t
          );
        }
      }
      class zt extends u {
        constructor(t, e) {
          super(t),
            (this.x = 0),
            (this.y = 0),
            (this.scaleX = 1),
            (this.scaleY = 1),
            (this.rotation = 0),
            (this.width = 0),
            (this.height = 0),
            (this.color = new r(1, 1, 1, 1)),
            (this.rendererObject = null),
            (this.region = null),
            (this.sequence = null),
            (this.offset = o.newFloatArray(8)),
            (this.uvs = o.newFloatArray(8)),
            (this.tempColor = new r(1, 1, 1, 1)),
            (this.path = e);
        }
        updateRegion() {
          if (!this.region) throw new Error("Region not set.");
          let t = this.region,
            e = (this.width / this.region.originalWidth) * this.scaleX,
            s = (this.height / this.region.originalHeight) * this.scaleY,
            i = (-this.width / 2) * this.scaleX + this.region.offsetX * e,
            r = (-this.height / 2) * this.scaleY + this.region.offsetY * s,
            n = i + this.region.width * e,
            a = r + this.region.height * s,
            h = (this.rotation * Math.PI) / 180,
            o = Math.cos(h),
            l = Math.sin(h),
            c = this.x,
            d = this.y,
            u = i * o + c,
            m = i * l,
            f = r * o + d,
            g = r * l,
            p = n * o + c,
            x = n * l,
            b = a * o + d,
            w = a * l,
            v = this.offset;
          (v[0] = u - g),
            (v[1] = f + m),
            (v[2] = u - w),
            (v[3] = b + m),
            (v[4] = p - w),
            (v[5] = b + x),
            (v[6] = p - g),
            (v[7] = f + x);
          let y = this.uvs;
          90 == t.degrees
            ? ((y[2] = t.u),
              (y[3] = t.v2),
              (y[4] = t.u),
              (y[5] = t.v),
              (y[6] = t.u2),
              (y[7] = t.v),
              (y[0] = t.u2),
              (y[1] = t.v2))
            : ((y[0] = t.u),
              (y[1] = t.v2),
              (y[2] = t.u),
              (y[3] = t.v),
              (y[4] = t.u2),
              (y[5] = t.v),
              (y[6] = t.u2),
              (y[7] = t.v2));
        }
        computeWorldVertices(t, e, s, i) {
          null != this.sequence && this.sequence.apply(t, this);
          let r = t.bone,
            n = this.offset,
            a = r.worldX,
            h = r.worldY,
            o = r.a,
            l = r.b,
            c = r.c,
            d = r.d,
            u = 0,
            m = 0;
          (u = n[0]),
            (m = n[1]),
            (e[s] = u * o + m * l + a),
            (e[s + 1] = u * c + m * d + h),
            (s += i),
            (u = n[2]),
            (m = n[3]),
            (e[s] = u * o + m * l + a),
            (e[s + 1] = u * c + m * d + h),
            (s += i),
            (u = n[4]),
            (m = n[5]),
            (e[s] = u * o + m * l + a),
            (e[s + 1] = u * c + m * d + h),
            (s += i),
            (u = n[6]),
            (m = n[7]),
            (e[s] = u * o + m * l + a),
            (e[s + 1] = u * c + m * d + h);
        }
        copy() {
          let t = new zt(this.name, this.path);
          return (
            (t.region = this.region),
            (t.rendererObject = this.rendererObject),
            (t.x = this.x),
            (t.y = this.y),
            (t.scaleX = this.scaleX),
            (t.scaleY = this.scaleY),
            (t.rotation = this.rotation),
            (t.width = this.width),
            (t.height = this.height),
            o.arrayCopy(this.uvs, 0, t.uvs, 0, 8),
            o.arrayCopy(this.offset, 0, t.offset, 0, 8),
            t.color.setFromColor(this.color),
            (t.sequence = null != this.sequence ? this.sequence.copy() : null),
            t
          );
        }
      }
      (zt.X1 = 0),
        (zt.Y1 = 1),
        (zt.C1R = 2),
        (zt.C1G = 3),
        (zt.C1B = 4),
        (zt.C1A = 5),
        (zt.U1 = 6),
        (zt.V1 = 7),
        (zt.X2 = 8),
        (zt.Y2 = 9),
        (zt.C2R = 10),
        (zt.C2G = 11),
        (zt.C2B = 12),
        (zt.C2A = 13),
        (zt.U2 = 14),
        (zt.V2 = 15),
        (zt.X3 = 16),
        (zt.Y3 = 17),
        (zt.C3R = 18),
        (zt.C3G = 19),
        (zt.C3B = 20),
        (zt.C3A = 21),
        (zt.U3 = 22),
        (zt.V3 = 23),
        (zt.X4 = 24),
        (zt.Y4 = 25),
        (zt.C4R = 26),
        (zt.C4G = 27),
        (zt.C4B = 28),
        (zt.C4A = 29),
        (zt.U4 = 30),
        (zt.V4 = 31);
      class Gt {
        constructor(t, s, i) {
          if (
            ((this.index = 0),
            (this.parent = null),
            (this.length = 0),
            (this.x = 0),
            (this.y = 0),
            (this.rotation = 0),
            (this.scaleX = 1),
            (this.scaleY = 1),
            (this.shearX = 0),
            (this.shearY = 0),
            (this.transformMode = e.Qe.Normal),
            (this.skinRequired = !1),
            (this.color = new r()),
            t < 0)
          )
            throw new Error("index must be >= 0.");
          if (!s) throw new Error("name cannot be null.");
          (this.index = t), (this.name = s), (this.parent = i);
        }
      }
      (e.Qe = void 0),
        ((It = e.Qe || (e.Qe = {}))[(It.Normal = 0)] = "Normal"),
        (It[(It.OnlyTranslation = 1)] = "OnlyTranslation"),
        (It[(It.NoRotationOrReflection = 2)] = "NoRotationOrReflection"),
        (It[(It.NoScale = 3)] = "NoScale"),
        (It[(It.NoScaleOrReflection = 4)] = "NoScaleOrReflection");
      class jt {
        constructor(t, e, s) {
          if (
            ((this.parent = null),
            (this.children = new Array()),
            (this.x = 0),
            (this.y = 0),
            (this.rotation = 0),
            (this.scaleX = 0),
            (this.scaleY = 0),
            (this.shearX = 0),
            (this.shearY = 0),
            (this.ax = 0),
            (this.ay = 0),
            (this.arotation = 0),
            (this.ascaleX = 0),
            (this.ascaleY = 0),
            (this.ashearX = 0),
            (this.ashearY = 0),
            (this.a = 0),
            (this.b = 0),
            (this.c = 0),
            (this.d = 0),
            (this.worldY = 0),
            (this.worldX = 0),
            (this.sorted = !1),
            (this.active = !1),
            !t)
          )
            throw new Error("data cannot be null.");
          if (!e) throw new Error("skeleton cannot be null.");
          (this.data = t),
            (this.skeleton = e),
            (this.parent = s),
            this.setToSetupPose();
        }
        isActive() {
          return this.active;
        }
        update() {
          this.updateWorldTransformWith(
            this.ax,
            this.ay,
            this.arotation,
            this.ascaleX,
            this.ascaleY,
            this.ashearX,
            this.ashearY
          );
        }
        updateWorldTransform() {
          this.updateWorldTransformWith(
            this.x,
            this.y,
            this.rotation,
            this.scaleX,
            this.scaleY,
            this.shearX,
            this.shearY
          );
        }
        updateWorldTransformWith(t, s, i, r, a, h, o) {
          (this.ax = t),
            (this.ay = s),
            (this.arotation = i),
            (this.ascaleX = r),
            (this.ascaleY = a),
            (this.ashearX = h),
            (this.ashearY = o);
          let l = this.parent;
          if (!l) {
            let e = this.skeleton,
              l = i + 90 + o,
              c = e.scaleX,
              d = e.scaleY;
            return (
              (this.a = n.cosDeg(i + h) * r * c),
              (this.b = n.cosDeg(l) * a * c),
              (this.c = n.sinDeg(i + h) * r * d),
              (this.d = n.sinDeg(l) * a * d),
              (this.worldX = t * c + e.x),
              void (this.worldY = s * d + e.y)
            );
          }
          let c = l.a,
            d = l.b,
            u = l.c,
            m = l.d;
          switch (
            ((this.worldX = c * t + d * s + l.worldX),
            (this.worldY = u * t + m * s + l.worldY),
            this.data.transformMode)
          ) {
            case e.Qe.Normal: {
              let t = i + 90 + o,
                e = n.cosDeg(i + h) * r,
                s = n.cosDeg(t) * a,
                l = n.sinDeg(i + h) * r,
                f = n.sinDeg(t) * a;
              return (
                (this.a = c * e + d * l),
                (this.b = c * s + d * f),
                (this.c = u * e + m * l),
                void (this.d = u * s + m * f)
              );
            }
            case e.Qe.OnlyTranslation: {
              let t = i + 90 + o;
              (this.a = n.cosDeg(i + h) * r),
                (this.b = n.cosDeg(t) * a),
                (this.c = n.sinDeg(i + h) * r),
                (this.d = n.sinDeg(t) * a);
              break;
            }
            case e.Qe.NoRotationOrReflection: {
              let t = c * c + u * u,
                e = 0;
              t > 1e-4
                ? ((t = Math.abs(c * m - d * u) / t),
                  (c /= this.skeleton.scaleX),
                  (u /= this.skeleton.scaleY),
                  (d = u * t),
                  (m = c * t),
                  (e = Math.atan2(u, c) * n.radDeg))
                : ((c = 0), (u = 0), (e = 90 - Math.atan2(m, d) * n.radDeg));
              let s = i + h - e,
                l = i + o - e + 90,
                f = n.cosDeg(s) * r,
                g = n.cosDeg(l) * a,
                p = n.sinDeg(s) * r,
                x = n.sinDeg(l) * a;
              (this.a = c * f - d * p),
                (this.b = c * g - d * x),
                (this.c = u * f + m * p),
                (this.d = u * g + m * x);
              break;
            }
            case e.Qe.NoScale:
            case e.Qe.NoScaleOrReflection: {
              let t = n.cosDeg(i),
                s = n.sinDeg(i),
                l = (c * t + d * s) / this.skeleton.scaleX,
                f = (u * t + m * s) / this.skeleton.scaleY,
                g = Math.sqrt(l * l + f * f);
              g > 1e-5 && (g = 1 / g),
                (l *= g),
                (f *= g),
                (g = Math.sqrt(l * l + f * f)),
                this.data.transformMode == e.Qe.NoScale &&
                  c * m - d * u < 0 !=
                    (this.skeleton.scaleX < 0 != this.skeleton.scaleY < 0) &&
                  (g = -g);
              let p = Math.PI / 2 + Math.atan2(f, l),
                x = Math.cos(p) * g,
                b = Math.sin(p) * g,
                w = n.cosDeg(h) * r,
                v = n.cosDeg(90 + o) * a,
                y = n.sinDeg(h) * r,
                A = n.sinDeg(90 + o) * a;
              (this.a = l * w + x * y),
                (this.b = l * v + x * A),
                (this.c = f * w + b * y),
                (this.d = f * v + b * A);
              break;
            }
          }
          (this.a *= this.skeleton.scaleX),
            (this.b *= this.skeleton.scaleX),
            (this.c *= this.skeleton.scaleY),
            (this.d *= this.skeleton.scaleY);
        }
        setToSetupPose() {
          let t = this.data;
          (this.x = t.x),
            (this.y = t.y),
            (this.rotation = t.rotation),
            (this.scaleX = t.scaleX),
            (this.scaleY = t.scaleY),
            (this.shearX = t.shearX),
            (this.shearY = t.shearY);
        }
        getWorldRotationX() {
          return Math.atan2(this.c, this.a) * n.radDeg;
        }
        getWorldRotationY() {
          return Math.atan2(this.d, this.b) * n.radDeg;
        }
        getWorldScaleX() {
          return Math.sqrt(this.a * this.a + this.c * this.c);
        }
        getWorldScaleY() {
          return Math.sqrt(this.b * this.b + this.d * this.d);
        }
        updateAppliedTransform() {
          let t = this.parent;
          if (!t)
            return (
              (this.ax = this.worldX - this.skeleton.x),
              (this.ay = this.worldY - this.skeleton.y),
              (this.arotation = Math.atan2(this.c, this.a) * n.radDeg),
              (this.ascaleX = Math.sqrt(this.a * this.a + this.c * this.c)),
              (this.ascaleY = Math.sqrt(this.b * this.b + this.d * this.d)),
              (this.ashearX = 0),
              void (this.ashearY =
                Math.atan2(
                  this.a * this.b + this.c * this.d,
                  this.a * this.d - this.b * this.c
                ) * n.radDeg)
            );
          let e = t.a,
            s = t.b,
            i = t.c,
            r = t.d,
            a = 1 / (e * r - s * i),
            h = this.worldX - t.worldX,
            o = this.worldY - t.worldY;
          (this.ax = h * r * a - o * s * a), (this.ay = o * e * a - h * i * a);
          let l = a * r,
            c = a * e,
            d = a * s,
            u = a * i,
            m = l * this.a - d * this.c,
            f = l * this.b - d * this.d,
            g = c * this.c - u * this.a,
            p = c * this.d - u * this.b;
          if (
            ((this.ashearX = 0),
            (this.ascaleX = Math.sqrt(m * m + g * g)),
            this.ascaleX > 1e-4)
          ) {
            let t = m * p - f * g;
            (this.ascaleY = t / this.ascaleX),
              (this.ashearY = Math.atan2(m * f + g * p, t) * n.radDeg),
              (this.arotation = Math.atan2(g, m) * n.radDeg);
          } else
            (this.ascaleX = 0),
              (this.ascaleY = Math.sqrt(f * f + p * p)),
              (this.ashearY = 0),
              (this.arotation = 90 - Math.atan2(p, f) * n.radDeg);
        }
        worldToLocal(t) {
          let e = 1 / (this.a * this.d - this.b * this.c),
            s = t.x - this.worldX,
            i = t.y - this.worldY;
          return (
            (t.x = s * this.d * e - i * this.b * e),
            (t.y = i * this.a * e - s * this.c * e),
            t
          );
        }
        localToWorld(t) {
          let e = t.x,
            s = t.y;
          return (
            (t.x = e * this.a + s * this.b + this.worldX),
            (t.y = e * this.c + s * this.d + this.worldY),
            t
          );
        }
        worldToLocalRotation(t) {
          let e = n.sinDeg(t),
            s = n.cosDeg(t);
          return (
            Math.atan2(this.a * e - this.c * s, this.d * s - this.b * e) *
              n.radDeg +
            this.rotation -
            this.shearX
          );
        }
        localToWorldRotation(t) {
          t -= this.rotation - this.shearX;
          let e = n.sinDeg(t),
            s = n.cosDeg(t);
          return (
            Math.atan2(s * this.c + e * this.d, s * this.a + e * this.b) *
            n.radDeg
          );
        }
        rotateWorld(t) {
          let e = this.a,
            s = this.b,
            i = this.c,
            r = this.d,
            a = n.cosDeg(t),
            h = n.sinDeg(t);
          (this.a = a * e - h * i),
            (this.b = a * s - h * r),
            (this.c = h * e + a * i),
            (this.d = h * s + a * r);
        }
      }
      class _t {
        constructor(t, e, s) {
          (this.name = t), (this.order = e), (this.skinRequired = s);
        }
      }
      class Zt {
        constructor(t, e = "", s = new Ht()) {
          (this.pathPrefix = ""),
            (this.assets = {}),
            (this.errors = {}),
            (this.toLoad = 0),
            (this.loaded = 0),
            (this.textureLoader = t),
            (this.pathPrefix = e),
            (this.downloader = s);
        }
        start(t) {
          return this.toLoad++, this.pathPrefix + t;
        }
        success(t, e, s) {
          this.toLoad--, this.loaded++, (this.assets[e] = s), t && t(e, s);
        }
        error(t, e, s) {
          this.toLoad--, this.loaded++, (this.errors[e] = s), t && t(e, s);
        }
        loadAll() {
          return new Promise((t, e) => {
            let s = () => {
              this.isLoadingComplete()
                ? this.hasErrors()
                  ? e(this.errors)
                  : t(this)
                : requestAnimationFrame(s);
            };
            requestAnimationFrame(s);
          });
        }
        setRawDataURI(t, e) {
          this.downloader.rawDataUris[this.pathPrefix + t] = e;
        }
        loadBinary(t, e = () => {}, s = () => {}) {
          (t = this.start(t)),
            this.downloader.downloadBinary(
              t,
              (s) => {
                this.success(e, t, s);
              },
              (e, i) => {
                this.error(
                  s,
                  t,
                  `Couldn't load binary ${t}: status ${e}, ${i}`
                );
              }
            );
        }
        loadText(t, e = () => {}, s = () => {}) {
          (t = this.start(t)),
            this.downloader.downloadText(
              t,
              (s) => {
                this.success(e, t, s);
              },
              (e, i) => {
                this.error(s, t, `Couldn't load text ${t}: status ${e}, ${i}`);
              }
            );
        }
        loadJson(t, e = () => {}, s = () => {}) {
          (t = this.start(t)),
            this.downloader.downloadJson(
              t,
              (s) => {
                this.success(e, t, s);
              },
              (e, i) => {
                this.error(s, t, `Couldn't load JSON ${t}: status ${e}, ${i}`);
              }
            );
        }
        loadTexture(t, e = () => {}, s = () => {}) {
          if (
            ((t = this.start(t)),
            !!(
              "undefined" === typeof window ||
              "undefined" === typeof navigator ||
              !window.document
            ))
          )
            fetch(t, { mode: "cors" })
              .then((e) =>
                e.ok
                  ? e.blob()
                  : (this.error(s, t, `Couldn't load image: ${t}`), null)
              )
              .then((t) =>
                t
                  ? createImageBitmap(t, {
                      premultiplyAlpha: "none",
                      colorSpaceConversion: "none",
                    })
                  : null
              )
              .then((s) => {
                s && this.success(e, t, this.textureLoader(s));
              });
          else {
            let i = new Image();
            (i.crossOrigin = "anonymous"),
              (i.onload = () => {
                this.success(e, t, this.textureLoader(i));
              }),
              (i.onerror = () => {
                this.error(s, t, `Couldn't load image: ${t}`);
              }),
              this.downloader.rawDataUris[t] &&
                (t = this.downloader.rawDataUris[t]),
              (i.src = t);
          }
        }
        loadTextureAtlas(t, e = () => {}, s = () => {}, i) {
          let r = t.lastIndexOf("/"),
            n = r >= 0 ? t.substring(0, r + 1) : "";
          (t = this.start(t)),
            this.downloader.downloadText(
              t,
              (r) => {
                try {
                  let a = new Dt(r),
                    h = a.pages.length,
                    o = !1;
                  for (let r of a.pages)
                    this.loadTexture(
                      i ? i[r.name] : n + r.name,
                      (s, i) => {
                        o ||
                          (r.setTexture(i), 0 == --h && this.success(e, t, a));
                      },
                      (e, i) => {
                        o ||
                          this.error(
                            s,
                            t,
                            `Couldn't load texture atlas ${t} page image: ${e}`
                          ),
                          (o = !0);
                      }
                    );
                } catch (a) {
                  this.error(
                    s,
                    t,
                    `Couldn't parse texture atlas ${t}: ${a.message}`
                  );
                }
              },
              (e, i) => {
                this.error(
                  s,
                  t,
                  `Couldn't load texture atlas ${t}: status ${e}, ${i}`
                );
              }
            );
        }
        get(t) {
          return this.assets[this.pathPrefix + t];
        }
        require(t) {
          t = this.pathPrefix + t;
          let e = this.assets[t];
          if (e) return e;
          let s = this.errors[t];
          throw Error("Asset not found: " + t + (s ? "\n" + s : ""));
        }
        remove(t) {
          t = this.pathPrefix + t;
          let e = this.assets[t];
          return e.dispose && e.dispose(), delete this.assets[t], e;
        }
        removeAll() {
          for (let t in this.assets) {
            let e = this.assets[t];
            e.dispose && e.dispose();
          }
          this.assets = {};
        }
        isLoadingComplete() {
          return 0 == this.toLoad;
        }
        getToLoad() {
          return this.toLoad;
        }
        getLoaded() {
          return this.loaded;
        }
        dispose() {
          this.removeAll();
        }
        hasErrors() {
          return Object.keys(this.errors).length > 0;
        }
        getErrors() {
          return this.errors;
        }
      }
      class Ht {
        constructor() {
          (this.callbacks = {}), (this.rawDataUris = {});
        }
        dataUriToString(t) {
          if (!t.startsWith("data:")) throw new Error("Not a data URI.");
          let e = t.indexOf("base64,");
          return -1 != e
            ? ((e += "base64,".length), atob(t.substr(e)))
            : t.substr(t.indexOf(",") + 1);
        }
        base64ToUint8Array(t) {
          for (
            var e = window.atob(t), s = e.length, i = new Uint8Array(s), r = 0;
            r < s;
            r++
          )
            i[r] = e.charCodeAt(r);
          return i;
        }
        dataUriToUint8Array(t) {
          if (!t.startsWith("data:")) throw new Error("Not a data URI.");
          let e = t.indexOf("base64,");
          if (-1 == e) throw new Error("Not a binary data URI.");
          return (e += "base64,".length), this.base64ToUint8Array(t.substr(e));
        }
        downloadText(t, e, s) {
          if (this.start(t, e, s)) return;
          if (this.rawDataUris[t]) {
            try {
              let e = this.rawDataUris[t];
              this.finish(t, 200, this.dataUriToString(e));
            } catch (n) {
              this.finish(t, 400, JSON.stringify(n));
            }
            return;
          }
          let i = new XMLHttpRequest();
          i.overrideMimeType("text/html"), i.open("GET", t, !0);
          let r = () => {
            this.finish(t, i.status, i.responseText);
          };
          (i.onload = r), (i.onerror = r), i.send();
        }
        downloadJson(t, e, s) {
          this.downloadText(
            t,
            (t) => {
              e(JSON.parse(t));
            },
            s
          );
        }
        downloadBinary(t, e, s) {
          if (this.start(t, e, s)) return;
          if (this.rawDataUris[t]) {
            try {
              let e = this.rawDataUris[t];
              this.finish(t, 200, this.dataUriToUint8Array(e));
            } catch (n) {
              this.finish(t, 400, JSON.stringify(n));
            }
            return;
          }
          let i = new XMLHttpRequest();
          i.open("GET", t, !0), (i.responseType = "arraybuffer");
          let r = () => {
            this.finish(t, i.status, i.response);
          };
          (i.onload = () => {
            200 == i.status || 0 == i.status
              ? this.finish(t, 200, new Uint8Array(i.response))
              : r();
          }),
            (i.onerror = r),
            i.send();
        }
        start(t, e, s) {
          let i = this.callbacks[t];
          try {
            if (i) return !0;
            this.callbacks[t] = i = [];
          } finally {
            i.push(e, s);
          }
        }
        finish(t, e, s) {
          let i = this.callbacks[t];
          delete this.callbacks[t];
          let r = 200 == e || 0 == e ? [s] : [e, s];
          for (let n = r.length - 1, a = i.length; n < a; n += 2)
            i[n].apply(null, r);
        }
      }
      class Jt {
        constructor(t, e) {
          if (
            ((this.intValue = 0),
            (this.floatValue = 0),
            (this.stringValue = null),
            (this.time = 0),
            (this.volume = 0),
            (this.balance = 0),
            !e)
          )
            throw new Error("data cannot be null.");
          (this.time = t), (this.data = e);
        }
      }
      class Qt {
        constructor(t) {
          (this.intValue = 0),
            (this.floatValue = 0),
            (this.stringValue = null),
            (this.audioPath = null),
            (this.volume = 0),
            (this.balance = 0),
            (this.name = t);
        }
      }
      class Kt {
        constructor(t, e) {
          if (
            ((this.bendDirection = 0),
            (this.compress = !1),
            (this.stretch = !1),
            (this.mix = 1),
            (this.softness = 0),
            (this.active = !1),
            !t)
          )
            throw new Error("data cannot be null.");
          if (!e) throw new Error("skeleton cannot be null.");
          (this.data = t),
            (this.mix = t.mix),
            (this.softness = t.softness),
            (this.bendDirection = t.bendDirection),
            (this.compress = t.compress),
            (this.stretch = t.stretch),
            (this.bones = new Array());
          for (let i = 0; i < t.bones.length; i++) {
            let s = e.findBone(t.bones[i].name);
            if (!s) throw new Error(`Couldn't find bone ${t.bones[i].name}`);
            this.bones.push(s);
          }
          let s = e.findBone(t.target.name);
          if (!s) throw new Error(`Couldn't find bone ${t.target.name}`);
          this.target = s;
        }
        isActive() {
          return this.active;
        }
        update() {
          if (0 == this.mix) return;
          let t = this.target,
            e = this.bones;
          switch (e.length) {
            case 1:
              this.apply1(
                e[0],
                t.worldX,
                t.worldY,
                this.compress,
                this.stretch,
                this.data.uniform,
                this.mix
              );
              break;
            case 2:
              this.apply2(
                e[0],
                e[1],
                t.worldX,
                t.worldY,
                this.bendDirection,
                this.stretch,
                this.data.uniform,
                this.softness,
                this.mix
              );
          }
        }
        apply1(t, s, i, r, a, h, o) {
          let l = t.parent;
          if (!l) throw new Error("IK bone must have parent.");
          let c = l.a,
            d = l.b,
            u = l.c,
            m = l.d,
            f = -t.ashearX - t.arotation,
            g = 0,
            p = 0;
          switch (t.data.transformMode) {
            case e.Qe.OnlyTranslation:
              (g = s - t.worldX), (p = i - t.worldY);
              break;
            case e.Qe.NoRotationOrReflection:
              let r = Math.abs(c * m - d * u) / (c * c + u * u),
                a = c / t.skeleton.scaleX,
                h = u / t.skeleton.scaleY;
              (d = -h * r * t.skeleton.scaleX),
                (m = a * r * t.skeleton.scaleY),
                (f += Math.atan2(h, a) * n.radDeg);
            default:
              let o = s - l.worldX,
                x = i - l.worldY,
                b = c * m - d * u;
              (g = (o * m - x * d) / b - t.ax),
                (p = (x * c - o * u) / b - t.ay);
          }
          (f += Math.atan2(p, g) * n.radDeg),
            t.ascaleX < 0 && (f += 180),
            f > 180 ? (f -= 360) : f < -180 && (f += 360);
          let x = t.ascaleX,
            b = t.ascaleY;
          if (r || a) {
            switch (t.data.transformMode) {
              case e.Qe.NoScale:
              case e.Qe.NoScaleOrReflection:
                (g = s - t.worldX), (p = i - t.worldY);
            }
            let n = t.data.length * x,
              l = Math.sqrt(g * g + p * p);
            if ((r && l < n) || (a && l > n && n > 1e-4)) {
              let t = (l / n - 1) * o + 1;
              (x *= t), h && (b *= t);
            }
          }
          t.updateWorldTransformWith(
            t.ax,
            t.ay,
            t.arotation + f * o,
            x,
            b,
            t.ashearX,
            t.ashearY
          );
        }
        apply2(t, e, s, i, r, a, h, o, l) {
          let c = t.ax,
            d = t.ay,
            u = t.ascaleX,
            m = t.ascaleY,
            f = u,
            g = m,
            p = e.ascaleX,
            x = 0,
            b = 0,
            w = 0;
          u < 0 ? ((u = -u), (x = 180), (w = -1)) : ((x = 0), (w = 1)),
            m < 0 && ((m = -m), (w = -w)),
            p < 0 ? ((p = -p), (b = 180)) : (b = 0);
          let v = e.ax,
            y = 0,
            A = 0,
            Y = 0,
            C = t.a,
            S = t.b,
            E = t.c,
            M = t.d,
            T = Math.abs(u - m) <= 1e-4;
          !T || a
            ? ((y = 0), (A = C * v + t.worldX), (Y = E * v + t.worldY))
            : ((y = e.ay),
              (A = C * v + S * y + t.worldX),
              (Y = E * v + M * y + t.worldY));
          let k = t.parent;
          if (!k) throw new Error("IK parent must itself have a parent.");
          (C = k.a), (S = k.b), (E = k.c), (M = k.d);
          let I,
            R,
            X = 1 / (C * M - S * E),
            L = A - k.worldX,
            F = Y - k.worldY,
            P = (L * M - F * S) * X - c,
            q = (F * C - L * E) * X - d,
            D = Math.sqrt(P * P + q * q),
            B = e.data.length * p;
          if (D < 1e-4)
            return (
              this.apply1(t, s, i, !1, a, !1, l),
              void e.updateWorldTransformWith(
                v,
                y,
                0,
                e.ascaleX,
                e.ascaleY,
                e.ashearX,
                e.ashearY
              )
            );
          (L = s - k.worldX), (F = i - k.worldY);
          let V = (L * M - F * S) * X - c,
            O = (F * C - L * E) * X - d,
            N = V * V + O * O;
          if (0 != o) {
            o *= u * (p + 1) * 0.5;
            let t = Math.sqrt(N),
              e = t - D - B * u + o;
            if (e > 0) {
              let s = Math.min(1, e / (2 * o)) - 1;
              (s = (e - o * (1 - s * s)) / t),
                (V -= s * V),
                (O -= s * O),
                (N = V * V + O * O);
            }
          }
          t: if (T) {
            B *= u;
            let t = (N - D * D - B * B) / (2 * D * B);
            t < -1
              ? ((t = -1), (R = Math.PI * r))
              : t > 1
              ? ((t = 1),
                (R = 0),
                a &&
                  ((C = (Math.sqrt(N) / (D + B) - 1) * l + 1),
                  (f *= C),
                  h && (g *= C)))
              : (R = Math.acos(t) * r),
              (C = D + B * t),
              (S = B * Math.sin(R)),
              (I = Math.atan2(O * C - V * S, V * C + O * S));
          } else {
            (C = u * B), (S = m * B);
            let t = C * C,
              e = S * S,
              s = Math.atan2(O, V);
            E = e * D * D + t * N - t * e;
            let i = -2 * e * D,
              a = e - t;
            if (((M = i * i - 4 * a * E), M >= 0)) {
              let t = Math.sqrt(M);
              i < 0 && (t = -t), (t = 0.5 * -(i + t));
              let e = t / a,
                n = E / t,
                h = Math.abs(e) < Math.abs(n) ? e : n;
              if (h * h <= N) {
                (F = Math.sqrt(N - h * h) * r),
                  (I = s - Math.atan2(F, h)),
                  (R = Math.atan2(F / m, (h - D) / u));
                break t;
              }
            }
            let h = n.PI,
              o = D - C,
              l = o * o,
              c = 0,
              d = 0,
              f = D + C,
              g = f * f,
              p = 0;
            (E = (-C * D) / (t - e)),
              E >= -1 &&
                E <= 1 &&
                ((E = Math.acos(E)),
                (L = C * Math.cos(E) + D),
                (F = S * Math.sin(E)),
                (M = L * L + F * F),
                M < l && ((h = E), (l = M), (o = L), (c = F)),
                M > g && ((d = E), (g = M), (f = L), (p = F))),
              N <= 0.5 * (l + g)
                ? ((I = s - Math.atan2(c * r, o)), (R = h * r))
                : ((I = s - Math.atan2(p * r, f)), (R = d * r));
          }
          let U = Math.atan2(y, v) * w,
            W = t.arotation;
          (I = (I - U) * n.radDeg + x - W),
            I > 180 ? (I -= 360) : I < -180 && (I += 360),
            t.updateWorldTransformWith(c, d, W + I * l, f, g, 0, 0),
            (W = e.arotation),
            (R = ((R + U) * n.radDeg - e.ashearX) * w + b - W),
            R > 180 ? (R -= 360) : R < -180 && (R += 360),
            e.updateWorldTransformWith(
              v,
              y,
              W + R * l,
              e.ascaleX,
              e.ascaleY,
              e.ashearX,
              e.ashearY
            );
        }
      }
      class $t extends _t {
        constructor(t) {
          super(t, 0, !1),
            (this.bones = new Array()),
            (this._target = null),
            (this.bendDirection = 1),
            (this.compress = !1),
            (this.stretch = !1),
            (this.uniform = !1),
            (this.mix = 1),
            (this.softness = 0);
        }
        set target(t) {
          this._target = t;
        }
        get target() {
          if (this._target) return this._target;
          throw new Error("BoneData not set.");
        }
      }
      class te extends _t {
        constructor(t) {
          super(t, 0, !1),
            (this.bones = new Array()),
            (this._target = null),
            (this.positionMode = e.T.Fixed),
            (this.spacingMode = e.m3.Fixed),
            (this.rotateMode = e.YK.Chain),
            (this.offsetRotation = 0),
            (this.position = 0),
            (this.spacing = 0),
            (this.mixRotate = 0),
            (this.mixX = 0),
            (this.mixY = 0);
        }
        set target(t) {
          this._target = t;
        }
        get target() {
          if (this._target) return this._target;
          throw new Error("SlotData not set.");
        }
      }
      (e.T = void 0),
        ((Rt = e.T || (e.T = {}))[(Rt.Fixed = 0)] = "Fixed"),
        (Rt[(Rt.Percent = 1)] = "Percent"),
        (e.m3 = void 0),
        ((Xt = e.m3 || (e.m3 = {}))[(Xt.Length = 0)] = "Length"),
        (Xt[(Xt.Fixed = 1)] = "Fixed"),
        (Xt[(Xt.Percent = 2)] = "Percent"),
        (Xt[(Xt.Proportional = 3)] = "Proportional"),
        (e.YK = void 0),
        ((Lt = e.YK || (e.YK = {}))[(Lt.Tangent = 0)] = "Tangent"),
        (Lt[(Lt.Chain = 1)] = "Chain"),
        (Lt[(Lt.ChainScale = 2)] = "ChainScale");
      class ee {
        constructor(t, e) {
          if (
            ((this.position = 0),
            (this.spacing = 0),
            (this.mixRotate = 0),
            (this.mixX = 0),
            (this.mixY = 0),
            (this.spaces = new Array()),
            (this.positions = new Array()),
            (this.world = new Array()),
            (this.curves = new Array()),
            (this.lengths = new Array()),
            (this.segments = new Array()),
            (this.active = !1),
            !t)
          )
            throw new Error("data cannot be null.");
          if (!e) throw new Error("skeleton cannot be null.");
          (this.data = t), (this.bones = new Array());
          for (let i = 0, r = t.bones.length; i < r; i++) {
            let s = e.findBone(t.bones[i].name);
            if (!s) throw new Error(`Couldn't find bone ${t.bones[i].name}.`);
            this.bones.push(s);
          }
          let s = e.findSlot(t.target.name);
          if (!s) throw new Error(`Couldn't find target bone ${t.target.name}`);
          (this.target = s),
            (this.position = t.position),
            (this.spacing = t.spacing),
            (this.mixRotate = t.mixRotate),
            (this.mixX = t.mixX),
            (this.mixY = t.mixY);
        }
        isActive() {
          return this.active;
        }
        update() {
          let t = this.target.getAttachment();
          if (!(t instanceof Ut)) return;
          let s = this.mixRotate,
            i = this.mixX,
            r = this.mixY;
          if (0 == s && 0 == i && 0 == r) return;
          let a = this.data,
            h = a.rotateMode == e.YK.Tangent,
            l = a.rotateMode == e.YK.ChainScale,
            c = this.bones,
            d = c.length,
            u = h ? d : d + 1,
            m = o.setArraySize(this.spaces, u),
            f = l ? (this.lengths = o.setArraySize(this.lengths, d)) : [],
            g = this.spacing;
          switch (a.spacingMode) {
            case e.m3.Percent:
              if (l)
                for (let e = 0, i = u - 1; e < i; e++) {
                  let t = c[e],
                    s = t.data.length;
                  if (s < ee.epsilon) f[e] = 0;
                  else {
                    let i = s * t.a,
                      r = s * t.c;
                    f[e] = Math.sqrt(i * i + r * r);
                  }
                }
              o.arrayFill(m, 1, u, g);
              break;
            case e.m3.Proportional:
              let t = 0;
              for (let e = 0, i = u - 1; e < i; ) {
                let s = c[e],
                  i = s.data.length;
                if (i < ee.epsilon) l && (f[e] = 0), (m[++e] = g);
                else {
                  let r = i * s.a,
                    n = i * s.c,
                    a = Math.sqrt(r * r + n * n);
                  l && (f[e] = a), (m[++e] = a), (t += a);
                }
              }
              if (t > 0) {
                t = (u / t) * g;
                for (let e = 1; e < u; e++) m[e] *= t;
              }
              break;
            default:
              let s = a.spacingMode == e.m3.Length;
              for (let e = 0, i = u - 1; e < i; ) {
                let t = c[e],
                  i = t.data.length;
                if (i < ee.epsilon) l && (f[e] = 0), (m[++e] = g);
                else {
                  let r = i * t.a,
                    n = i * t.c,
                    a = Math.sqrt(r * r + n * n);
                  l && (f[e] = a), (m[++e] = ((s ? i + g : g) * a) / i);
                }
              }
          }
          let p = this.computeWorldPositions(t, u, h),
            x = p[0],
            b = p[1],
            w = a.offsetRotation,
            v = !1;
          if (0 == w) v = a.rotateMode == e.YK.Chain;
          else {
            v = !1;
            let t = this.target.bone;
            w *= t.a * t.d - t.b * t.c > 0 ? n.degRad : -n.degRad;
          }
          for (let e = 0, o = 3; e < d; e++, o += 3) {
            let t = c[e];
            (t.worldX += (x - t.worldX) * i), (t.worldY += (b - t.worldY) * r);
            let a = p[o],
              d = p[o + 1],
              u = a - x,
              g = d - b;
            if (l) {
              let i = f[e];
              if (0 != i) {
                let e = (Math.sqrt(u * u + g * g) / i - 1) * s + 1;
                (t.a *= e), (t.c *= e);
              }
            }
            if (((x = a), (b = d), s > 0)) {
              let i = t.a,
                r = t.b,
                a = t.c,
                l = t.d,
                c = 0,
                d = 0,
                f = 0;
              if (
                ((c = h
                  ? p[o - 1]
                  : 0 == m[e + 1]
                  ? p[o + 2]
                  : Math.atan2(g, u)),
                (c -= Math.atan2(a, i)),
                v)
              ) {
                (d = Math.cos(c)), (f = Math.sin(c));
                let e = t.data.length;
                (x += (e * (d * i - f * a) - u) * s),
                  (b += (e * (f * i + d * a) - g) * s);
              } else c += w;
              c > n.PI ? (c -= n.PI2) : c < -n.PI && (c += n.PI2),
                (c *= s),
                (d = Math.cos(c)),
                (f = Math.sin(c)),
                (t.a = d * i - f * a),
                (t.b = d * r - f * l),
                (t.c = f * i + d * a),
                (t.d = f * r + d * l);
            }
            t.updateAppliedTransform();
          }
        }
        computeWorldPositions(t, s, i) {
          let r = this.target,
            n = this.position,
            a = this.spaces,
            h = o.setArraySize(this.positions, 3 * s + 2),
            l = this.world,
            c = t.closed,
            d = t.worldVerticesLength,
            u = d / 6,
            m = ee.NONE;
          if (!t.constantSpeed) {
            let f = t.lengths;
            u -= c ? 1 : 2;
            let g,
              p = f[u];
            switch (
              (this.data.positionMode == e.T.Percent && (n *= p),
              this.data.spacingMode)
            ) {
              case e.m3.Percent:
                g = p;
                break;
              case e.m3.Proportional:
                g = p / s;
                break;
              default:
                g = 1;
            }
            l = o.setArraySize(this.world, 8);
            for (let e = 0, o = 0, x = 0; e < s; e++, o += 3) {
              let s = a[e] * g;
              n += s;
              let b = n;
              if (c) (b %= p), b < 0 && (b += p), (x = 0);
              else {
                if (b < 0) {
                  m != ee.BEFORE &&
                    ((m = ee.BEFORE), t.computeWorldVertices(r, 2, 4, l, 0, 2)),
                    this.addBeforePosition(b, l, 0, h, o);
                  continue;
                }
                if (b > p) {
                  m != ee.AFTER &&
                    ((m = ee.AFTER),
                    t.computeWorldVertices(r, d - 6, 4, l, 0, 2)),
                    this.addAfterPosition(b - p, l, 0, h, o);
                  continue;
                }
              }
              for (; ; x++) {
                let t = f[x];
                if (!(b > t)) {
                  if (0 == x) b /= t;
                  else {
                    let e = f[x - 1];
                    b = (b - e) / (t - e);
                  }
                  break;
                }
              }
              x != m &&
                ((m = x),
                c && x == u
                  ? (t.computeWorldVertices(r, d - 4, 4, l, 0, 2),
                    t.computeWorldVertices(r, 0, 4, l, 4, 2))
                  : t.computeWorldVertices(r, 6 * x + 2, 8, l, 0, 2)),
                this.addCurvePosition(
                  b,
                  l[0],
                  l[1],
                  l[2],
                  l[3],
                  l[4],
                  l[5],
                  l[6],
                  l[7],
                  h,
                  o,
                  i || (e > 0 && 0 == s)
                );
            }
            return h;
          }
          c
            ? ((d += 2),
              (l = o.setArraySize(this.world, d)),
              t.computeWorldVertices(r, 2, d - 4, l, 0, 2),
              t.computeWorldVertices(r, 0, 2, l, d - 4, 2),
              (l[d - 2] = l[0]),
              (l[d - 1] = l[1]))
            : (u--,
              (d -= 4),
              (l = o.setArraySize(this.world, d)),
              t.computeWorldVertices(r, 2, d, l, 0, 2));
          let f,
            g = o.setArraySize(this.curves, u),
            p = 0,
            x = l[0],
            b = l[1],
            w = 0,
            v = 0,
            y = 0,
            A = 0,
            Y = 0,
            C = 0,
            S = 0,
            E = 0,
            M = 0,
            T = 0,
            k = 0,
            I = 0,
            R = 0,
            X = 0;
          for (let e = 0, o = 2; e < u; e++, o += 6)
            (w = l[o]),
              (v = l[o + 1]),
              (y = l[o + 2]),
              (A = l[o + 3]),
              (Y = l[o + 4]),
              (C = l[o + 5]),
              (S = 0.1875 * (x - 2 * w + y)),
              (E = 0.1875 * (b - 2 * v + A)),
              (M = 0.09375 * (3 * (w - y) - x + Y)),
              (T = 0.09375 * (3 * (v - A) - b + C)),
              (k = 2 * S + M),
              (I = 2 * E + T),
              (R = 0.75 * (w - x) + S + 0.16666667 * M),
              (X = 0.75 * (v - b) + E + 0.16666667 * T),
              (p += Math.sqrt(R * R + X * X)),
              (R += k),
              (X += I),
              (k += M),
              (I += T),
              (p += Math.sqrt(R * R + X * X)),
              (R += k),
              (X += I),
              (p += Math.sqrt(R * R + X * X)),
              (R += k + M),
              (X += I + T),
              (p += Math.sqrt(R * R + X * X)),
              (g[e] = p),
              (x = Y),
              (b = C);
          switch (
            (this.data.positionMode == e.T.Percent && (n *= p),
            this.data.spacingMode)
          ) {
            case e.m3.Percent:
              f = p;
              break;
            case e.m3.Proportional:
              f = p / s;
              break;
            default:
              f = 1;
          }
          let L = this.segments,
            F = 0;
          for (let e = 0, o = 0, P = 0, q = 0; e < s; e++, o += 3) {
            let t = a[e] * f;
            n += t;
            let s = n;
            if (c) (s %= p), s < 0 && (s += p), (P = 0);
            else {
              if (s < 0) {
                this.addBeforePosition(s, l, 0, h, o);
                continue;
              }
              if (s > p) {
                this.addAfterPosition(s - p, l, d - 4, h, o);
                continue;
              }
            }
            for (; ; P++) {
              let t = g[P];
              if (!(s > t)) {
                if (0 == P) s /= t;
                else {
                  let e = g[P - 1];
                  s = (s - e) / (t - e);
                }
                break;
              }
            }
            if (P != m) {
              m = P;
              let t = 6 * P;
              for (
                x = l[t],
                  b = l[t + 1],
                  w = l[t + 2],
                  v = l[t + 3],
                  y = l[t + 4],
                  A = l[t + 5],
                  Y = l[t + 6],
                  C = l[t + 7],
                  S = 0.03 * (x - 2 * w + y),
                  E = 0.03 * (b - 2 * v + A),
                  M = 0.006 * (3 * (w - y) - x + Y),
                  T = 0.006 * (3 * (v - A) - b + C),
                  k = 2 * S + M,
                  I = 2 * E + T,
                  R = 0.3 * (w - x) + S + 0.16666667 * M,
                  X = 0.3 * (v - b) + E + 0.16666667 * T,
                  F = Math.sqrt(R * R + X * X),
                  L[0] = F,
                  t = 1;
                t < 8;
                t++
              )
                (R += k),
                  (X += I),
                  (k += M),
                  (I += T),
                  (F += Math.sqrt(R * R + X * X)),
                  (L[t] = F);
              (R += k),
                (X += I),
                (F += Math.sqrt(R * R + X * X)),
                (L[8] = F),
                (R += k + M),
                (X += I + T),
                (F += Math.sqrt(R * R + X * X)),
                (L[9] = F),
                (q = 0);
            }
            for (s *= F; ; q++) {
              let t = L[q];
              if (!(s > t)) {
                if (0 == q) s /= t;
                else {
                  let e = L[q - 1];
                  s = q + (s - e) / (t - e);
                }
                break;
              }
            }
            this.addCurvePosition(
              0.1 * s,
              x,
              b,
              w,
              v,
              y,
              A,
              Y,
              C,
              h,
              o,
              i || (e > 0 && 0 == t)
            );
          }
          return h;
        }
        addBeforePosition(t, e, s, i, r) {
          let n = e[s],
            a = e[s + 1],
            h = e[s + 2] - n,
            o = e[s + 3] - a,
            l = Math.atan2(o, h);
          (i[r] = n + t * Math.cos(l)),
            (i[r + 1] = a + t * Math.sin(l)),
            (i[r + 2] = l);
        }
        addAfterPosition(t, e, s, i, r) {
          let n = e[s + 2],
            a = e[s + 3],
            h = n - e[s],
            o = a - e[s + 1],
            l = Math.atan2(o, h);
          (i[r] = n + t * Math.cos(l)),
            (i[r + 1] = a + t * Math.sin(l)),
            (i[r + 2] = l);
        }
        addCurvePosition(t, e, s, i, r, n, a, h, o, l, c, d) {
          if (0 == t || isNaN(t))
            return (
              (l[c] = e),
              (l[c + 1] = s),
              void (l[c + 2] = Math.atan2(r - s, i - e))
            );
          let u = t * t,
            m = u * t,
            f = 1 - t,
            g = f * f,
            p = g * f,
            x = f * t,
            b = 3 * x,
            w = f * b,
            v = b * t,
            y = e * p + i * w + n * v + h * m,
            A = s * p + r * w + a * v + o * m;
          (l[c] = y),
            (l[c + 1] = A),
            d &&
              (l[c + 2] =
                t < 0.001
                  ? Math.atan2(r - s, i - e)
                  : Math.atan2(
                      A - (s * g + r * x * 2 + a * u),
                      y - (e * g + i * x * 2 + n * u)
                    ));
        }
      }
      (ee.NONE = -1), (ee.BEFORE = -2), (ee.AFTER = -3), (ee.epsilon = 1e-5);
      class se {
        constructor(t, e) {
          if (
            ((this.darkColor = null),
            (this.attachment = null),
            (this.attachmentState = 0),
            (this.sequenceIndex = -1),
            (this.deform = new Array()),
            !t)
          )
            throw new Error("data cannot be null.");
          if (!e) throw new Error("bone cannot be null.");
          (this.data = t),
            (this.bone = e),
            (this.color = new r()),
            (this.darkColor = t.darkColor ? new r() : null),
            this.setToSetupPose();
        }
        getSkeleton() {
          return this.bone.skeleton;
        }
        getAttachment() {
          return this.attachment;
        }
        setAttachment(t) {
          this.attachment != t &&
            ((t instanceof m &&
              this.attachment instanceof m &&
              t.timelineAttahment == this.attachment.timelineAttahment) ||
              (this.deform.length = 0),
            (this.attachment = t),
            (this.sequenceIndex = -1));
        }
        setToSetupPose() {
          this.color.setFromColor(this.data.color),
            this.darkColor && this.darkColor.setFromColor(this.data.darkColor),
            this.data.attachmentName
              ? ((this.attachment = null),
                this.setAttachment(
                  this.bone.skeleton.getAttachment(
                    this.data.index,
                    this.data.attachmentName
                  )
                ))
              : (this.attachment = null);
        }
      }
      class ie {
        constructor(t, e) {
          if (
            ((this.mixRotate = 0),
            (this.mixX = 0),
            (this.mixY = 0),
            (this.mixScaleX = 0),
            (this.mixScaleY = 0),
            (this.mixShearY = 0),
            (this.temp = new c()),
            (this.active = !1),
            !t)
          )
            throw new Error("data cannot be null.");
          if (!e) throw new Error("skeleton cannot be null.");
          (this.data = t),
            (this.mixRotate = t.mixRotate),
            (this.mixX = t.mixX),
            (this.mixY = t.mixY),
            (this.mixScaleX = t.mixScaleX),
            (this.mixScaleY = t.mixScaleY),
            (this.mixShearY = t.mixShearY),
            (this.bones = new Array());
          for (let i = 0; i < t.bones.length; i++) {
            let s = e.findBone(t.bones[i].name);
            if (!s) throw new Error(`Couldn't find bone ${t.bones[i].name}.`);
            this.bones.push(s);
          }
          let s = e.findBone(t.target.name);
          if (!s)
            throw new Error(`Couldn't find target bone ${t.target.name}.`);
          this.target = s;
        }
        isActive() {
          return this.active;
        }
        update() {
          (0 == this.mixRotate &&
            0 == this.mixX &&
            0 == this.mixY &&
            0 == this.mixScaleX &&
            0 == this.mixScaleX &&
            0 == this.mixShearY) ||
            (this.data.local
              ? this.data.relative
                ? this.applyRelativeLocal()
                : this.applyAbsoluteLocal()
              : this.data.relative
              ? this.applyRelativeWorld()
              : this.applyAbsoluteWorld());
        }
        applyAbsoluteWorld() {
          let t = this.mixRotate,
            e = this.mixX,
            s = this.mixY,
            i = this.mixScaleX,
            r = this.mixScaleY,
            a = this.mixShearY,
            h = 0 != e || 0 != s,
            o = this.target,
            l = o.a,
            c = o.b,
            d = o.c,
            u = o.d,
            m = l * u - c * d > 0 ? n.degRad : -n.degRad,
            f = this.data.offsetRotation * m,
            g = this.data.offsetShearY * m,
            p = this.bones;
          for (let x = 0, b = p.length; x < b; x++) {
            let m = p[x];
            if (0 != t) {
              let e = m.a,
                s = m.b,
                i = m.c,
                r = m.d,
                a = Math.atan2(d, l) - Math.atan2(i, e) + f;
              a > n.PI ? (a -= n.PI2) : a < -n.PI && (a += n.PI2), (a *= t);
              let h = Math.cos(a),
                o = Math.sin(a);
              (m.a = h * e - o * i),
                (m.b = h * s - o * r),
                (m.c = o * e + h * i),
                (m.d = o * s + h * r);
            }
            if (h) {
              let t = this.temp;
              o.localToWorld(t.set(this.data.offsetX, this.data.offsetY)),
                (m.worldX += (t.x - m.worldX) * e),
                (m.worldY += (t.y - m.worldY) * s);
            }
            if (0 != i) {
              let t = Math.sqrt(m.a * m.a + m.c * m.c);
              0 != t &&
                (t =
                  (t +
                    (Math.sqrt(l * l + d * d) - t + this.data.offsetScaleX) *
                      i) /
                  t),
                (m.a *= t),
                (m.c *= t);
            }
            if (0 != r) {
              let t = Math.sqrt(m.b * m.b + m.d * m.d);
              0 != t &&
                (t =
                  (t +
                    (Math.sqrt(c * c + u * u) - t + this.data.offsetScaleY) *
                      r) /
                  t),
                (m.b *= t),
                (m.d *= t);
            }
            if (a > 0) {
              let t = m.b,
                e = m.d,
                s = Math.atan2(e, t),
                i =
                  Math.atan2(u, c) -
                  Math.atan2(d, l) -
                  (s - Math.atan2(m.c, m.a));
              i > n.PI ? (i -= n.PI2) : i < -n.PI && (i += n.PI2),
                (i = s + (i + g) * a);
              let r = Math.sqrt(t * t + e * e);
              (m.b = Math.cos(i) * r), (m.d = Math.sin(i) * r);
            }
            m.updateAppliedTransform();
          }
        }
        applyRelativeWorld() {
          let t = this.mixRotate,
            e = this.mixX,
            s = this.mixY,
            i = this.mixScaleX,
            r = this.mixScaleY,
            a = this.mixShearY,
            h = 0 != e || 0 != s,
            o = this.target,
            l = o.a,
            c = o.b,
            d = o.c,
            u = o.d,
            m = l * u - c * d > 0 ? n.degRad : -n.degRad,
            f = this.data.offsetRotation * m,
            g = this.data.offsetShearY * m,
            p = this.bones;
          for (let x = 0, b = p.length; x < b; x++) {
            let m = p[x];
            if (0 != t) {
              let e = m.a,
                s = m.b,
                i = m.c,
                r = m.d,
                a = Math.atan2(d, l) + f;
              a > n.PI ? (a -= n.PI2) : a < -n.PI && (a += n.PI2), (a *= t);
              let h = Math.cos(a),
                o = Math.sin(a);
              (m.a = h * e - o * i),
                (m.b = h * s - o * r),
                (m.c = o * e + h * i),
                (m.d = o * s + h * r);
            }
            if (h) {
              let t = this.temp;
              o.localToWorld(t.set(this.data.offsetX, this.data.offsetY)),
                (m.worldX += t.x * e),
                (m.worldY += t.y * s);
            }
            if (0 != i) {
              let t =
                (Math.sqrt(l * l + d * d) - 1 + this.data.offsetScaleX) * i + 1;
              (m.a *= t), (m.c *= t);
            }
            if (0 != r) {
              let t =
                (Math.sqrt(c * c + u * u) - 1 + this.data.offsetScaleY) * r + 1;
              (m.b *= t), (m.d *= t);
            }
            if (a > 0) {
              let t = Math.atan2(u, c) - Math.atan2(d, l);
              t > n.PI ? (t -= n.PI2) : t < -n.PI && (t += n.PI2);
              let e = m.b,
                s = m.d;
              t = Math.atan2(s, e) + (t - n.PI / 2 + g) * a;
              let i = Math.sqrt(e * e + s * s);
              (m.b = Math.cos(t) * i), (m.d = Math.sin(t) * i);
            }
            m.updateAppliedTransform();
          }
        }
        applyAbsoluteLocal() {
          let t = this.mixRotate,
            e = this.mixX,
            s = this.mixY,
            i = this.mixScaleX,
            r = this.mixScaleY,
            n = this.mixShearY,
            a = this.target,
            h = this.bones;
          for (let o = 0, l = h.length; o < l; o++) {
            let l = h[o],
              c = l.arotation;
            if (0 != t) {
              let e = a.arotation - c + this.data.offsetRotation;
              (e -= 360 * (16384 - ((16384.499999999996 - e / 360) | 0))),
                (c += e * t);
            }
            let d = l.ax,
              u = l.ay;
            (d += (a.ax - d + this.data.offsetX) * e),
              (u += (a.ay - u + this.data.offsetY) * s);
            let m = l.ascaleX,
              f = l.ascaleY;
            0 != i &&
              0 != m &&
              (m = (m + (a.ascaleX - m + this.data.offsetScaleX) * i) / m),
              0 != r &&
                0 != f &&
                (f = (f + (a.ascaleY - f + this.data.offsetScaleY) * r) / f);
            let g = l.ashearY;
            if (0 != n) {
              let t = a.ashearY - g + this.data.offsetShearY;
              (t -= 360 * (16384 - ((16384.499999999996 - t / 360) | 0))),
                (g += t * n);
            }
            l.updateWorldTransformWith(d, u, c, m, f, l.ashearX, g);
          }
        }
        applyRelativeLocal() {
          let t = this.mixRotate,
            e = this.mixX,
            s = this.mixY,
            i = this.mixScaleX,
            r = this.mixScaleY,
            n = this.mixShearY,
            a = this.target,
            h = this.bones;
          for (let o = 0, l = h.length; o < l; o++) {
            let l = h[o],
              c = l.arotation + (a.arotation + this.data.offsetRotation) * t,
              d = l.ax + (a.ax + this.data.offsetX) * e,
              u = l.ay + (a.ay + this.data.offsetY) * s,
              m =
                l.ascaleX * ((a.ascaleX - 1 + this.data.offsetScaleX) * i + 1),
              f =
                l.ascaleY * ((a.ascaleY - 1 + this.data.offsetScaleY) * r + 1),
              g = l.ashearY + (a.ashearY + this.data.offsetShearY) * n;
            l.updateWorldTransformWith(d, u, c, m, f, l.ashearX, g);
          }
        }
      }
      class re {
        constructor() {
          (this.name = null),
            (this.bones = new Array()),
            (this.slots = new Array()),
            (this.skins = new Array()),
            (this.defaultSkin = null),
            (this.events = new Array()),
            (this.animations = new Array()),
            (this.ikConstraints = new Array()),
            (this.transformConstraints = new Array()),
            (this.pathConstraints = new Array()),
            (this.x = 0),
            (this.y = 0),
            (this.width = 0),
            (this.height = 0),
            (this.version = null),
            (this.hash = null),
            (this.fps = 0),
            (this.imagesPath = null),
            (this.audioPath = null);
        }
        findBone(t) {
          if (!t) throw new Error("boneName cannot be null.");
          let e = this.bones;
          for (let s = 0, i = e.length; s < i; s++) {
            let i = e[s];
            if (i.name == t) return i;
          }
          return null;
        }
        findSlot(t) {
          if (!t) throw new Error("slotName cannot be null.");
          let e = this.slots;
          for (let s = 0, i = e.length; s < i; s++) {
            let i = e[s];
            if (i.name == t) return i;
          }
          return null;
        }
        findSkin(t) {
          if (!t) throw new Error("skinName cannot be null.");
          let e = this.skins;
          for (let s = 0, i = e.length; s < i; s++) {
            let i = e[s];
            if (i.name == t) return i;
          }
          return null;
        }
        findEvent(t) {
          if (!t) throw new Error("eventDataName cannot be null.");
          let e = this.events;
          for (let s = 0, i = e.length; s < i; s++) {
            let i = e[s];
            if (i.name == t) return i;
          }
          return null;
        }
        findAnimation(t) {
          if (!t) throw new Error("animationName cannot be null.");
          let e = this.animations;
          for (let s = 0, i = e.length; s < i; s++) {
            let i = e[s];
            if (i.name == t) return i;
          }
          return null;
        }
        findIkConstraint(t) {
          if (!t) throw new Error("constraintName cannot be null.");
          let e = this.ikConstraints;
          for (let s = 0, i = e.length; s < i; s++) {
            let i = e[s];
            if (i.name == t) return i;
          }
          return null;
        }
        findTransformConstraint(t) {
          if (!t) throw new Error("constraintName cannot be null.");
          let e = this.transformConstraints;
          for (let s = 0, i = e.length; s < i; s++) {
            let i = e[s];
            if (i.name == t) return i;
          }
          return null;
        }
        findPathConstraint(t) {
          if (!t) throw new Error("constraintName cannot be null.");
          let e = this.pathConstraints;
          for (let s = 0, i = e.length; s < i; s++) {
            let i = e[s];
            if (i.name == t) return i;
          }
          return null;
        }
      }
      class ne {
        constructor(t = 0, e, s) {
          (this.slotIndex = t), (this.name = e), (this.attachment = s);
        }
      }
      class ae {
        constructor(t) {
          if (
            ((this.attachments = new Array()),
            (this.bones = Array()),
            (this.constraints = new Array()),
            !t)
          )
            throw new Error("name cannot be null.");
          this.name = t;
        }
        setAttachment(t, e, s) {
          if (!s) throw new Error("attachment cannot be null.");
          let i = this.attachments;
          t >= i.length && (i.length = t + 1),
            i[t] || (i[t] = {}),
            (i[t][e] = s);
        }
        addSkin(t) {
          for (let i = 0; i < t.bones.length; i++) {
            let e = t.bones[i],
              s = !1;
            for (let t = 0; t < this.bones.length; t++)
              if (this.bones[t] == e) {
                s = !0;
                break;
              }
            s || this.bones.push(e);
          }
          for (let i = 0; i < t.constraints.length; i++) {
            let e = t.constraints[i],
              s = !1;
            for (let t = 0; t < this.constraints.length; t++)
              if (this.constraints[t] == e) {
                s = !0;
                break;
              }
            s || this.constraints.push(e);
          }
          let e = t.getAttachments();
          for (let i = 0; i < e.length; i++) {
            var s = e[i];
            this.setAttachment(s.slotIndex, s.name, s.attachment);
          }
        }
        copySkin(t) {
          for (let i = 0; i < t.bones.length; i++) {
            let e = t.bones[i],
              s = !1;
            for (let t = 0; t < this.bones.length; t++)
              if (this.bones[t] == e) {
                s = !0;
                break;
              }
            s || this.bones.push(e);
          }
          for (let i = 0; i < t.constraints.length; i++) {
            let e = t.constraints[i],
              s = !1;
            for (let t = 0; t < this.constraints.length; t++)
              if (this.constraints[t] == e) {
                s = !0;
                break;
              }
            s || this.constraints.push(e);
          }
          let e = t.getAttachments();
          for (let i = 0; i < e.length; i++) {
            var s = e[i];
            s.attachment &&
              (s.attachment instanceof Nt
                ? ((s.attachment = s.attachment.newLinkedMesh()),
                  this.setAttachment(s.slotIndex, s.name, s.attachment))
                : ((s.attachment = s.attachment.copy()),
                  this.setAttachment(s.slotIndex, s.name, s.attachment)));
          }
        }
        getAttachment(t, e) {
          let s = this.attachments[t];
          return s ? s[e] : null;
        }
        removeAttachment(t, e) {
          let s = this.attachments[t];
          s && delete s[e];
        }
        getAttachments() {
          let t = new Array();
          for (var e = 0; e < this.attachments.length; e++) {
            let s = this.attachments[e];
            if (s)
              for (let i in s) {
                let r = s[i];
                r && t.push(new ne(e, i, r));
              }
          }
          return t;
        }
        getAttachmentsForSlot(t, e) {
          let s = this.attachments[t];
          if (s)
            for (let i in s) {
              let r = s[i];
              r && e.push(new ne(t, i, r));
            }
        }
        clear() {
          (this.attachments.length = 0),
            (this.bones.length = 0),
            (this.constraints.length = 0);
        }
        attachAll(t, e) {
          let s = 0;
          for (let i = 0; i < t.slots.length; i++) {
            let r = t.slots[i],
              n = r.getAttachment();
            if (n && s < e.attachments.length) {
              let t = e.attachments[s];
              for (let e in t) {
                if (n == t[e]) {
                  let t = this.getAttachment(s, e);
                  t && r.setAttachment(t);
                  break;
                }
              }
            }
            s++;
          }
        }
      }
      class he {
        constructor(t, s, i) {
          if (
            ((this.index = 0),
            (this.color = new r(1, 1, 1, 1)),
            (this.darkColor = null),
            (this.attachmentName = null),
            (this.blendMode = e.bt.Normal),
            t < 0)
          )
            throw new Error("index must be >= 0.");
          if (!s) throw new Error("name cannot be null.");
          if (!i) throw new Error("boneData cannot be null.");
          (this.index = t), (this.name = s), (this.boneData = i);
        }
      }
      (e.bt = void 0),
        ((Ft = e.bt || (e.bt = {}))[(Ft.Normal = 0)] = "Normal"),
        (Ft[(Ft.Additive = 1)] = "Additive"),
        (Ft[(Ft.Multiply = 2)] = "Multiply"),
        (Ft[(Ft.Screen = 3)] = "Screen");
      class oe extends _t {
        constructor(t) {
          super(t, 0, !1),
            (this.bones = new Array()),
            (this._target = null),
            (this.mixRotate = 0),
            (this.mixX = 0),
            (this.mixY = 0),
            (this.mixScaleX = 0),
            (this.mixScaleY = 0),
            (this.mixShearY = 0),
            (this.offsetRotation = 0),
            (this.offsetX = 0),
            (this.offsetY = 0),
            (this.offsetScaleX = 0),
            (this.offsetScaleY = 0),
            (this.offsetShearY = 0),
            (this.relative = !1),
            (this.local = !1);
        }
        set target(t) {
          this._target = t;
        }
        get target() {
          if (this._target) return this._target;
          throw new Error("BoneData not set.");
        }
      }
      class le {
        constructor(t, e = new Array(), s = 0, i = new DataView(t.buffer)) {
          (this.strings = e), (this.index = s), (this.buffer = i);
        }
        readByte() {
          return this.buffer.getInt8(this.index++);
        }
        readUnsignedByte() {
          return this.buffer.getUint8(this.index++);
        }
        readShort() {
          let t = this.buffer.getInt16(this.index);
          return (this.index += 2), t;
        }
        readInt32() {
          let t = this.buffer.getInt32(this.index);
          return (this.index += 4), t;
        }
        readInt(t) {
          let e = this.readByte(),
            s = 127 & e;
          return (
            0 != (128 & e) &&
              ((e = this.readByte()),
              (s |= (127 & e) << 7),
              0 != (128 & e) &&
                ((e = this.readByte()),
                (s |= (127 & e) << 14),
                0 != (128 & e) &&
                  ((e = this.readByte()),
                  (s |= (127 & e) << 21),
                  0 != (128 & e) &&
                    ((e = this.readByte()), (s |= (127 & e) << 28))))),
            t ? s : (s >>> 1) ^ -(1 & s)
          );
        }
        readStringRef() {
          let t = this.readInt(!0);
          return 0 == t ? null : this.strings[t - 1];
        }
        readString() {
          let t = this.readInt(!0);
          switch (t) {
            case 0:
              return null;
            case 1:
              return "";
          }
          t--;
          let e = "";
          for (let s = 0; s < t; ) {
            let t = this.readUnsignedByte();
            switch (t >> 4) {
              case 12:
              case 13:
                (e += String.fromCharCode(
                  ((31 & t) << 6) | (63 & this.readByte())
                )),
                  (s += 2);
                break;
              case 14:
                (e += String.fromCharCode(
                  ((15 & t) << 12) |
                    ((63 & this.readByte()) << 6) |
                    (63 & this.readByte())
                )),
                  (s += 3);
                break;
              default:
                (e += String.fromCharCode(t)), s++;
            }
          }
          return e;
        }
        readFloat() {
          let t = this.buffer.getFloat32(this.index);
          return (this.index += 4), t;
        }
        readBoolean() {
          return 0 != this.readByte();
        }
      }
      class ce {
        constructor(t, e, s, i, r) {
          (this.mesh = t),
            (this.skin = e),
            (this.slotIndex = s),
            (this.parent = i),
            (this.inheritTimeline = r);
        }
      }
      class de {
        constructor(t = null, e = null) {
          (this.bones = t), (this.vertices = e);
        }
      }
      function ue(t, e, s) {
        let i = t.readFloat(),
          r = t.readFloat() * s;
        for (
          let n = 0, a = 0, h = e.getFrameCount() - 1;
          e.setFrame(n, i, r), n != h;
          n++
        ) {
          let h = t.readFloat(),
            o = t.readFloat() * s;
          switch (t.readByte()) {
            case qe:
              e.setStepped(n);
              break;
            case De:
              fe(t, e, a++, n, 0, i, h, r, o, s);
          }
          (i = h), (r = o);
        }
        return e;
      }
      function me(t, e, s) {
        let i = t.readFloat(),
          r = t.readFloat() * s,
          n = t.readFloat() * s;
        for (
          let a = 0, h = 0, o = e.getFrameCount() - 1;
          e.setFrame(a, i, r, n), a != o;
          a++
        ) {
          let o = t.readFloat(),
            l = t.readFloat() * s,
            c = t.readFloat() * s;
          switch (t.readByte()) {
            case qe:
              e.setStepped(a);
              break;
            case De:
              fe(t, e, h++, a, 0, i, o, r, l, s),
                fe(t, e, h++, a, 1, i, o, n, c, s);
          }
          (i = o), (r = l), (n = c);
        }
        return e;
      }
      function fe(t, e, s, i, r, n, a, h, o, l) {
        e.setBezier(
          s,
          i,
          r,
          n,
          h,
          t.readFloat(),
          t.readFloat() * l,
          t.readFloat(),
          t.readFloat() * l,
          a,
          o
        );
      }
      !(function (t) {
        (t[(t.Region = 0)] = "Region"),
          (t[(t.BoundingBox = 1)] = "BoundingBox"),
          (t[(t.Mesh = 2)] = "Mesh"),
          (t[(t.LinkedMesh = 3)] = "LinkedMesh"),
          (t[(t.Path = 4)] = "Path"),
          (t[(t.Point = 5)] = "Point"),
          (t[(t.Clipping = 6)] = "Clipping");
      })(Pt || (Pt = {}));
      const ge = 0,
        pe = 1,
        xe = 2,
        be = 3,
        we = 4,
        ve = 5,
        ye = 6,
        Ae = 7,
        Ye = 8,
        Ce = 9,
        Se = 0,
        Ee = 1,
        Me = 2,
        Te = 3,
        ke = 4,
        Ie = 5,
        Re = 0,
        Xe = 1,
        Le = 0,
        Fe = 1,
        Pe = 2,
        qe = 1,
        De = 2;
      class Be {
        constructor() {
          (this.minX = 0),
            (this.minY = 0),
            (this.maxX = 0),
            (this.maxY = 0),
            (this.boundingBoxes = new Array()),
            (this.polygons = new Array()),
            (this.polygonPool = new l(() => o.newFloatArray(16)));
        }
        update(t, e) {
          if (!t) throw new Error("skeleton cannot be null.");
          let s = this.boundingBoxes,
            i = this.polygons,
            r = this.polygonPool,
            n = t.slots,
            a = n.length;
          (s.length = 0), r.freeAll(i), (i.length = 0);
          for (let h = 0; h < a; h++) {
            let t = n[h];
            if (!t.bone.active) continue;
            let e = t.getAttachment();
            if (e instanceof St) {
              let n = e;
              s.push(n);
              let a = r.obtain();
              a.length != n.worldVerticesLength &&
                (a = o.newFloatArray(n.worldVerticesLength)),
                i.push(a),
                n.computeWorldVertices(t, 0, n.worldVerticesLength, a, 0, 2);
            }
          }
          e
            ? this.aabbCompute()
            : ((this.minX = Number.POSITIVE_INFINITY),
              (this.minY = Number.POSITIVE_INFINITY),
              (this.maxX = Number.NEGATIVE_INFINITY),
              (this.maxY = Number.NEGATIVE_INFINITY));
        }
        aabbCompute() {
          let t = Number.POSITIVE_INFINITY,
            e = Number.POSITIVE_INFINITY,
            s = Number.NEGATIVE_INFINITY,
            i = Number.NEGATIVE_INFINITY,
            r = this.polygons;
          for (let n = 0, a = r.length; n < a; n++) {
            let a = r[n],
              h = a;
            for (let r = 0, n = a.length; r < n; r += 2) {
              let n = h[r],
                a = h[r + 1];
              (t = Math.min(t, n)),
                (e = Math.min(e, a)),
                (s = Math.max(s, n)),
                (i = Math.max(i, a));
            }
          }
          (this.minX = t), (this.minY = e), (this.maxX = s), (this.maxY = i);
        }
        aabbContainsPoint(t, e) {
          return (
            t >= this.minX && t <= this.maxX && e >= this.minY && e <= this.maxY
          );
        }
        aabbIntersectsSegment(t, e, s, i) {
          let r = this.minX,
            n = this.minY,
            a = this.maxX,
            h = this.maxY;
          if (
            (t <= r && s <= r) ||
            (e <= n && i <= n) ||
            (t >= a && s >= a) ||
            (e >= h && i >= h)
          )
            return !1;
          let o = (i - e) / (s - t),
            l = o * (r - t) + e;
          if (l > n && l < h) return !0;
          if (((l = o * (a - t) + e), l > n && l < h)) return !0;
          let c = (n - e) / o + t;
          return (c > r && c < a) || ((c = (h - e) / o + t), c > r && c < a);
        }
        aabbIntersectsSkeleton(t) {
          return (
            this.minX < t.maxX &&
            this.maxX > t.minX &&
            this.minY < t.maxY &&
            this.maxY > t.minY
          );
        }
        containsPoint(t, e) {
          let s = this.polygons;
          for (let i = 0, r = s.length; i < r; i++)
            if (this.containsPointPolygon(s[i], t, e))
              return this.boundingBoxes[i];
          return null;
        }
        containsPointPolygon(t, e, s) {
          let i = t,
            r = t.length,
            n = r - 2,
            a = !1;
          for (let h = 0; h < r; h += 2) {
            let t = i[h + 1],
              r = i[n + 1];
            if ((t < s && r >= s) || (r < s && t >= s)) {
              let o = i[h];
              o + ((s - t) / (r - t)) * (i[n] - o) < e && (a = !a);
            }
            n = h;
          }
          return a;
        }
        intersectsSegment(t, e, s, i) {
          let r = this.polygons;
          for (let n = 0, a = r.length; n < a; n++)
            if (this.intersectsSegmentPolygon(r[n], t, e, s, i))
              return this.boundingBoxes[n];
          return null;
        }
        intersectsSegmentPolygon(t, e, s, i, r) {
          let n = t,
            a = t.length,
            h = e - i,
            o = s - r,
            l = e * r - s * i,
            c = n[a - 2],
            d = n[a - 1];
          for (let u = 0; u < a; u += 2) {
            let t = n[u],
              a = n[u + 1],
              m = c * a - d * t,
              f = c - t,
              g = d - a,
              p = h * g - o * f,
              x = (l * f - h * m) / p;
            if (
              ((x >= c && x <= t) || (x >= t && x <= c)) &&
              ((x >= e && x <= i) || (x >= i && x <= e))
            ) {
              let t = (l * g - o * m) / p;
              if (
                ((t >= d && t <= a) || (t >= a && t <= d)) &&
                ((t >= s && t <= r) || (t >= r && t <= s))
              )
                return !0;
            }
            (c = t), (d = a);
          }
          return !1;
        }
        getPolygon(t) {
          if (!t) throw new Error("boundingBox cannot be null.");
          let e = this.boundingBoxes.indexOf(t);
          return -1 == e ? null : this.polygons[e];
        }
        getWidth() {
          return this.maxX - this.minX;
        }
        getHeight() {
          return this.maxY - this.minY;
        }
      }
      class Ve {
        constructor() {
          (this.convexPolygons = new Array()),
            (this.convexPolygonsIndices = new Array()),
            (this.indicesArray = new Array()),
            (this.isConcaveArray = new Array()),
            (this.triangles = new Array()),
            (this.polygonPool = new l(() => new Array())),
            (this.polygonIndicesPool = new l(() => new Array()));
        }
        triangulate(t) {
          let e = t,
            s = t.length >> 1,
            i = this.indicesArray;
          i.length = 0;
          for (let a = 0; a < s; a++) i[a] = a;
          let r = this.isConcaveArray;
          r.length = 0;
          for (let a = 0, h = s; a < h; ++a) r[a] = Ve.isConcave(a, s, e, i);
          let n = this.triangles;
          for (n.length = 0; s > 3; ) {
            let t = s - 1,
              a = 0,
              h = 1;
            for (;;) {
              t: if (!r[a]) {
                let n = i[t] << 1,
                  o = i[a] << 1,
                  l = i[h] << 1,
                  c = e[n],
                  d = e[n + 1],
                  u = e[o],
                  m = e[o + 1],
                  f = e[l],
                  g = e[l + 1];
                for (let a = (h + 1) % s; a != t; a = (a + 1) % s) {
                  if (!r[a]) continue;
                  let t = i[a] << 1,
                    s = e[t],
                    n = e[t + 1];
                  if (
                    Ve.positiveArea(f, g, c, d, s, n) &&
                    Ve.positiveArea(c, d, u, m, s, n) &&
                    Ve.positiveArea(u, m, f, g, s, n)
                  )
                    break t;
                }
                break;
              }
              if (0 == h) {
                do {
                  if (!r[a]) break;
                  a--;
                } while (a > 0);
                break;
              }
              (t = a), (a = h), (h = (h + 1) % s);
            }
            n.push(i[(s + a - 1) % s]),
              n.push(i[a]),
              n.push(i[(a + 1) % s]),
              i.splice(a, 1),
              r.splice(a, 1),
              s--;
            let o = (s + a - 1) % s,
              l = a == s ? 0 : a;
            (r[o] = Ve.isConcave(o, s, e, i)),
              (r[l] = Ve.isConcave(l, s, e, i));
          }
          return 3 == s && (n.push(i[2]), n.push(i[0]), n.push(i[1])), n;
        }
        decompose(t, e) {
          let s = t,
            i = this.convexPolygons;
          this.polygonPool.freeAll(i), (i.length = 0);
          let r = this.convexPolygonsIndices;
          this.polygonIndicesPool.freeAll(r), (r.length = 0);
          let n = this.polygonIndicesPool.obtain();
          n.length = 0;
          let a = this.polygonPool.obtain();
          a.length = 0;
          let h = -1,
            o = 0;
          for (let l = 0, c = e.length; l < c; l += 3) {
            let t = e[l] << 1,
              c = e[l + 1] << 1,
              d = e[l + 2] << 1,
              u = s[t],
              m = s[t + 1],
              f = s[c],
              g = s[c + 1],
              p = s[d],
              x = s[d + 1],
              b = !1;
            if (h == t) {
              let t = a.length - 4,
                e = Ve.winding(a[t], a[t + 1], a[t + 2], a[t + 3], p, x),
                s = Ve.winding(p, x, a[0], a[1], a[2], a[3]);
              e == o && s == o && (a.push(p), a.push(x), n.push(d), (b = !0));
            }
            b ||
              (a.length > 0
                ? (i.push(a), r.push(n))
                : (this.polygonPool.free(a), this.polygonIndicesPool.free(n)),
              (a = this.polygonPool.obtain()),
              (a.length = 0),
              a.push(u),
              a.push(m),
              a.push(f),
              a.push(g),
              a.push(p),
              a.push(x),
              (n = this.polygonIndicesPool.obtain()),
              (n.length = 0),
              n.push(t),
              n.push(c),
              n.push(d),
              (o = Ve.winding(u, m, f, g, p, x)),
              (h = t));
          }
          a.length > 0 && (i.push(a), r.push(n));
          for (let l = 0, c = i.length; l < c; l++) {
            if (((n = r[l]), 0 == n.length)) continue;
            let t = n[0],
              e = n[n.length - 1];
            a = i[l];
            let s = a.length - 4,
              h = a[s],
              o = a[s + 1],
              d = a[s + 2],
              u = a[s + 3],
              m = a[0],
              f = a[1],
              g = a[2],
              p = a[3],
              x = Ve.winding(h, o, d, u, m, f);
            for (let b = 0; b < c; b++) {
              if (b == l) continue;
              let s = r[b];
              if (3 != s.length) continue;
              let c = s[0],
                w = s[1],
                v = s[2],
                y = i[b],
                A = y[y.length - 2],
                Y = y[y.length - 1];
              if (c != t || w != e) continue;
              let C = Ve.winding(h, o, d, u, A, Y),
                S = Ve.winding(A, Y, m, f, g, p);
              C == x &&
                S == x &&
                ((y.length = 0),
                (s.length = 0),
                a.push(A),
                a.push(Y),
                n.push(v),
                (h = d),
                (o = u),
                (d = A),
                (u = Y),
                (b = 0));
            }
          }
          for (let l = i.length - 1; l >= 0; l--)
            (a = i[l]),
              0 == a.length &&
                (i.splice(l, 1),
                this.polygonPool.free(a),
                (n = r[l]),
                r.splice(l, 1),
                this.polygonIndicesPool.free(n));
          return i;
        }
        static isConcave(t, e, s, i) {
          let r = i[(e + t - 1) % e] << 1,
            n = i[t] << 1,
            a = i[(t + 1) % e] << 1;
          return !this.positiveArea(
            s[r],
            s[r + 1],
            s[n],
            s[n + 1],
            s[a],
            s[a + 1]
          );
        }
        static positiveArea(t, e, s, i, r, n) {
          return t * (n - i) + s * (e - n) + r * (i - e) >= 0;
        }
        static winding(t, e, s, i, r, n) {
          let a = s - t,
            h = i - e;
          return r * h - n * a + a * e - t * h >= 0 ? 1 : -1;
        }
      }
      class Oe {
        constructor() {
          (this.triangulator = new Ve()),
            (this.clippingPolygon = new Array()),
            (this.clipOutput = new Array()),
            (this.clippedVertices = new Array()),
            (this.clippedTriangles = new Array()),
            (this.scratch = new Array()),
            (this.clipAttachment = null),
            (this.clippingPolygons = null);
        }
        clipStart(t, e) {
          if (this.clipAttachment) return 0;
          this.clipAttachment = e;
          let s = e.worldVerticesLength,
            i = o.setArraySize(this.clippingPolygon, s);
          e.computeWorldVertices(t, 0, s, i, 0, 2);
          let r = this.clippingPolygon;
          Oe.makeClockwise(r);
          let n = (this.clippingPolygons = this.triangulator.decompose(
            r,
            this.triangulator.triangulate(r)
          ));
          for (let a = 0, h = n.length; a < h; a++) {
            let t = n[a];
            Oe.makeClockwise(t), t.push(t[0]), t.push(t[1]);
          }
          return n.length;
        }
        clipEndWithSlot(t) {
          this.clipAttachment &&
            this.clipAttachment.endSlot == t.data &&
            this.clipEnd();
        }
        clipEnd() {
          this.clipAttachment &&
            ((this.clipAttachment = null),
            (this.clippingPolygons = null),
            (this.clippedVertices.length = 0),
            (this.clippedTriangles.length = 0),
            (this.clippingPolygon.length = 0));
        }
        isClipping() {
          return null != this.clipAttachment;
        }
        clipTriangles(t, e, s, i, r, n, a, h) {
          let l = this.clipOutput,
            c = this.clippedVertices,
            d = this.clippedTriangles,
            u = this.clippingPolygons,
            m = u.length,
            f = h ? 12 : 8,
            g = 0;
          (c.length = 0), (d.length = 0);
          t: for (let p = 0; p < i; p += 3) {
            let e = s[p] << 1,
              i = t[e],
              x = t[e + 1],
              b = r[e],
              w = r[e + 1];
            e = s[p + 1] << 1;
            let v = t[e],
              y = t[e + 1],
              A = r[e],
              Y = r[e + 1];
            e = s[p + 2] << 1;
            let C = t[e],
              S = t[e + 1],
              E = r[e],
              M = r[e + 1];
            for (let t = 0; t < m; t++) {
              let e = c.length;
              if (!this.clip(i, x, v, y, C, S, u[t], l)) {
                let t = o.setArraySize(c, e + 3 * f);
                (t[e] = i),
                  (t[e + 1] = x),
                  (t[e + 2] = n.r),
                  (t[e + 3] = n.g),
                  (t[e + 4] = n.b),
                  (t[e + 5] = n.a),
                  h
                    ? ((t[e + 6] = b),
                      (t[e + 7] = w),
                      (t[e + 8] = a.r),
                      (t[e + 9] = a.g),
                      (t[e + 10] = a.b),
                      (t[e + 11] = a.a),
                      (t[e + 12] = v),
                      (t[e + 13] = y),
                      (t[e + 14] = n.r),
                      (t[e + 15] = n.g),
                      (t[e + 16] = n.b),
                      (t[e + 17] = n.a),
                      (t[e + 18] = A),
                      (t[e + 19] = Y),
                      (t[e + 20] = a.r),
                      (t[e + 21] = a.g),
                      (t[e + 22] = a.b),
                      (t[e + 23] = a.a),
                      (t[e + 24] = C),
                      (t[e + 25] = S),
                      (t[e + 26] = n.r),
                      (t[e + 27] = n.g),
                      (t[e + 28] = n.b),
                      (t[e + 29] = n.a),
                      (t[e + 30] = E),
                      (t[e + 31] = M),
                      (t[e + 32] = a.r),
                      (t[e + 33] = a.g),
                      (t[e + 34] = a.b),
                      (t[e + 35] = a.a))
                    : ((t[e + 6] = b),
                      (t[e + 7] = w),
                      (t[e + 8] = v),
                      (t[e + 9] = y),
                      (t[e + 10] = n.r),
                      (t[e + 11] = n.g),
                      (t[e + 12] = n.b),
                      (t[e + 13] = n.a),
                      (t[e + 14] = A),
                      (t[e + 15] = Y),
                      (t[e + 16] = C),
                      (t[e + 17] = S),
                      (t[e + 18] = n.r),
                      (t[e + 19] = n.g),
                      (t[e + 20] = n.b),
                      (t[e + 21] = n.a),
                      (t[e + 22] = E),
                      (t[e + 23] = M)),
                  (e = d.length);
                let s = o.setArraySize(d, e + 3);
                (s[e] = g), (s[e + 1] = g + 1), (s[e + 2] = g + 2), (g += 3);
                continue t;
              }
              {
                let t = l.length;
                if (0 == t) continue;
                let s = y - S,
                  r = C - v,
                  u = i - C,
                  m = S - x,
                  p = 1 / (s * u + r * (x - S)),
                  T = t >> 1,
                  k = this.clipOutput,
                  I = o.setArraySize(c, e + T * f);
                for (let i = 0; i < t; i += 2) {
                  let t = k[i],
                    o = k[i + 1];
                  (I[e] = t),
                    (I[e + 1] = o),
                    (I[e + 2] = n.r),
                    (I[e + 3] = n.g),
                    (I[e + 4] = n.b),
                    (I[e + 5] = n.a);
                  let l = t - C,
                    c = o - S,
                    d = (s * l + r * c) * p,
                    g = (m * l + u * c) * p,
                    x = 1 - d - g;
                  (I[e + 6] = b * d + A * g + E * x),
                    (I[e + 7] = w * d + Y * g + M * x),
                    h &&
                      ((I[e + 8] = a.r),
                      (I[e + 9] = a.g),
                      (I[e + 10] = a.b),
                      (I[e + 11] = a.a)),
                    (e += f);
                }
                e = d.length;
                let R = o.setArraySize(d, e + 3 * (T - 2));
                T--;
                for (let i = 1; i < T; i++)
                  (R[e] = g),
                    (R[e + 1] = g + i),
                    (R[e + 2] = g + i + 1),
                    (e += 3);
                g += T + 1;
              }
            }
          }
        }
        clip(t, e, s, i, r, n, a, h) {
          let o,
            l = h,
            c = !1;
          a.length % 4 >= 2
            ? ((o = h), (h = this.scratch))
            : (o = this.scratch),
            (o.length = 0),
            o.push(t),
            o.push(e),
            o.push(s),
            o.push(i),
            o.push(r),
            o.push(n),
            o.push(t),
            o.push(e),
            (h.length = 0);
          let d = a,
            u = a.length - 4;
          for (let m = 0; ; m += 2) {
            let t = d[m],
              e = d[m + 1],
              s = d[m + 2],
              i = d[m + 3],
              r = t - s,
              n = e - i,
              a = o,
              f = o.length - 2,
              g = h.length;
            for (let o = 0; o < f; o += 2) {
              let l = a[o],
                d = a[o + 1],
                u = a[o + 2],
                m = a[o + 3],
                f = r * (m - i) - n * (u - s) > 0;
              if (r * (d - i) - n * (l - s) > 0) {
                if (f) {
                  h.push(u), h.push(m);
                  continue;
                }
                let r = m - d,
                  n = u - l,
                  a = r * (s - t) - n * (i - e);
                if (Math.abs(a) > 1e-6) {
                  let o = (n * (e - d) - r * (t - l)) / a;
                  h.push(t + (s - t) * o), h.push(e + (i - e) * o);
                } else h.push(t), h.push(e);
              } else if (f) {
                let r = m - d,
                  n = u - l,
                  a = r * (s - t) - n * (i - e);
                if (Math.abs(a) > 1e-6) {
                  let o = (n * (e - d) - r * (t - l)) / a;
                  h.push(t + (s - t) * o), h.push(e + (i - e) * o);
                } else h.push(t), h.push(e);
                h.push(u), h.push(m);
              }
              c = !0;
            }
            if (g == h.length) return (l.length = 0), !0;
            if ((h.push(h[0]), h.push(h[1]), m == u)) break;
            let p = h;
            ((h = o).length = 0), (o = p);
          }
          if (l != h) {
            l.length = 0;
            for (let t = 0, e = h.length - 2; t < e; t++) l[t] = h[t];
          } else l.length = l.length - 2;
          return c;
        }
        static makeClockwise(t) {
          let e = t,
            s = t.length,
            i = e[s - 2] * e[1] - e[0] * e[s - 1],
            r = 0,
            n = 0,
            a = 0,
            h = 0;
          for (let o = 0, l = s - 3; o < l; o += 2)
            (r = e[o]),
              (n = e[o + 1]),
              (a = e[o + 2]),
              (h = e[o + 3]),
              (i += r * h - a * n);
          if (!(i < 0))
            for (let o = 0, l = s - 2, c = s >> 1; o < c; o += 2) {
              let t = e[o],
                s = e[o + 1],
                i = l - o;
              (e[o] = e[i]), (e[o + 1] = e[i + 1]), (e[i] = t), (e[i + 1] = s);
            }
        }
      }
      class Ne {
        constructor(t, e, s, i, r) {
          (this.mesh = t),
            (this.skin = e),
            (this.slotIndex = s),
            (this.parent = i),
            (this.inheritTimeline = r);
        }
      }
      function Ue(t, e, s, i) {
        let r = t[0],
          n = Ge(r, "time", 0),
          a = Ge(r, "value", s) * i,
          h = 0;
        for (let o = 0; ; o++) {
          e.setFrame(o, n, a);
          let l = t[o + 1];
          if (!l) return e.shrink(h), e;
          let c = Ge(l, "time", 0),
            d = Ge(l, "value", s) * i;
          r.curve && (h = ze(r.curve, e, h, o, 0, n, c, a, d, i)),
            (n = c),
            (a = d),
            (r = l);
        }
      }
      function We(t, e, s, i, r, n) {
        let a = t[0],
          h = Ge(a, "time", 0),
          o = Ge(a, s, r) * n,
          l = Ge(a, i, r) * n,
          c = 0;
        for (let d = 0; ; d++) {
          e.setFrame(d, h, o, l);
          let u = t[d + 1];
          if (!u) return e.shrink(c), e;
          let m = Ge(u, "time", 0),
            f = Ge(u, s, r) * n,
            g = Ge(u, i, r) * n,
            p = a.curve;
          p &&
            ((c = ze(p, e, c, d, 0, h, m, o, f, n)),
            (c = ze(p, e, c, d, 1, h, m, l, g, n))),
            (h = m),
            (o = f),
            (l = g),
            (a = u);
        }
      }
      function ze(t, e, s, i, r, n, a, h, o, l) {
        if ("stepped" == t) return e.setStepped(i), s;
        let c = r << 2,
          d = t[c],
          u = t[c + 1] * l,
          m = t[c + 2],
          f = t[c + 3] * l;
        return e.setBezier(s, i, r, n, h, d, u, m, f, a, o), s + 1;
      }
      function Ge(t, e, s) {
        return void 0 !== t[e] ? t[e] : s;
      }
      (() => {
        var t;
        "undefined" === typeof Math.fround &&
          (Math.fround =
            ((t = new Float32Array(1)),
            function (e) {
              return (t[0] = e), t[0];
            }));
      })();
      class je {
        constructor(t, e = { alpha: "true" }) {
          if (
            ((this.restorables = new Array()),
            t instanceof WebGLRenderingContext ||
              ("undefined" !== typeof WebGL2RenderingContext &&
                t instanceof WebGL2RenderingContext))
          )
            (this.gl = t), (this.canvas = this.gl.canvas);
          else {
            let s = t;
            (this.gl = s.getContext("webgl2", e) || s.getContext("webgl", e)),
              (this.canvas = s),
              s.addEventListener("webglcontextlost", (t) => {
                t && t.preventDefault();
              }),
              s.addEventListener("webglcontextrestored", (t) => {
                for (let e = 0, s = this.restorables.length; e < s; e++)
                  this.restorables[e].restore();
              });
          }
        }
        addRestorable(t) {
          this.restorables.push(t);
        }
        removeRestorable(t) {
          let e = this.restorables.indexOf(t);
          e > -1 && this.restorables.splice(e, 1);
        }
      }
      const _e = 771;
      class Ze {
        static getDestGLBlendMode(t) {
          switch (t) {
            case e.bt.Normal:
              return _e;
            case e.bt.Additive:
              return 1;
            case e.bt.Multiply:
            case e.bt.Screen:
              return _e;
            default:
              throw new Error("Unknown blend mode: " + t);
          }
        }
        static getSourceColorGLBlendMode(t, s = !1) {
          switch (t) {
            case e.bt.Normal:
            case e.bt.Additive:
              return s ? 1 : 770;
            case e.bt.Multiply:
              return 774;
            case e.bt.Screen:
              return 1;
            default:
              throw new Error("Unknown blend mode: " + t);
          }
        }
        static getSourceAlphaGLBlendMode(t) {
          switch (t) {
            case e.bt.Normal:
            case e.bt.Additive:
              return 1;
            case e.bt.Multiply:
              return _e;
            case e.bt.Screen:
              return 769;
            default:
              throw new Error("Unknown blend mode: " + t);
          }
        }
      }
      class He extends Mt {
        constructor(t, e, s = !1) {
          super(e),
            (this.texture = null),
            (this.boundUnit = 0),
            (this.useMipMaps = !1),
            (this.context = t instanceof je ? t : new je(t)),
            (this.useMipMaps = s),
            this.restore(),
            this.context.addRestorable(this);
        }
        setFilters(t, e) {
          let s = this.context.gl;
          this.bind(),
            s.texParameteri(s.TEXTURE_2D, s.TEXTURE_MIN_FILTER, t),
            s.texParameteri(
              s.TEXTURE_2D,
              s.TEXTURE_MAG_FILTER,
              He.validateMagFilter(e)
            );
        }
        static validateMagFilter(t) {
          switch (t) {
            case e.Qb.MipMap:
            case e.Qb.MipMapLinearLinear:
            case e.Qb.MipMapLinearNearest:
            case e.Qb.MipMapNearestLinear:
            case e.Qb.MipMapNearestNearest:
              return e.Qb.Linear;
            default:
              return t;
          }
        }
        setWraps(t, e) {
          let s = this.context.gl;
          this.bind(),
            s.texParameteri(s.TEXTURE_2D, s.TEXTURE_WRAP_S, t),
            s.texParameteri(s.TEXTURE_2D, s.TEXTURE_WRAP_T, e);
        }
        update(t) {
          let e = this.context.gl;
          this.texture || (this.texture = this.context.gl.createTexture()),
            this.bind(),
            He.DISABLE_UNPACK_PREMULTIPLIED_ALPHA_WEBGL &&
              e.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL, !1),
            e.texImage2D(
              e.TEXTURE_2D,
              0,
              e.RGBA,
              e.RGBA,
              e.UNSIGNED_BYTE,
              this._image
            ),
            e.texParameteri(e.TEXTURE_2D, e.TEXTURE_MAG_FILTER, e.LINEAR),
            e.texParameteri(
              e.TEXTURE_2D,
              e.TEXTURE_MIN_FILTER,
              t ? e.LINEAR_MIPMAP_LINEAR : e.LINEAR
            ),
            e.texParameteri(e.TEXTURE_2D, e.TEXTURE_WRAP_S, e.CLAMP_TO_EDGE),
            e.texParameteri(e.TEXTURE_2D, e.TEXTURE_WRAP_T, e.CLAMP_TO_EDGE),
            t && e.generateMipmap(e.TEXTURE_2D);
        }
        restore() {
          (this.texture = null), this.update(this.useMipMaps);
        }
        bind(t = 0) {
          let e = this.context.gl;
          (this.boundUnit = t),
            e.activeTexture(e.TEXTURE0 + t),
            e.bindTexture(e.TEXTURE_2D, this.texture);
        }
        unbind() {
          let t = this.context.gl;
          t.activeTexture(t.TEXTURE0 + this.boundUnit),
            t.bindTexture(t.TEXTURE_2D, null);
        }
        dispose() {
          this.context.removeRestorable(this),
            this.context.gl.deleteTexture(this.texture);
        }
      }
      He.DISABLE_UNPACK_PREMULTIPLIED_ALPHA_WEBGL = !1;
      class Je extends Zt {
        constructor(t, e = "", s = new Ht()) {
          super((e) => new He(t, e), e, s);
        }
      }
      class Qe {
        constructor(t = 0, e = 0, s = 0) {
          (this.x = 0),
            (this.y = 0),
            (this.z = 0),
            (this.x = t),
            (this.y = e),
            (this.z = s);
        }
        setFrom(t) {
          return (this.x = t.x), (this.y = t.y), (this.z = t.z), this;
        }
        set(t, e, s) {
          return (this.x = t), (this.y = e), (this.z = s), this;
        }
        add(t) {
          return (this.x += t.x), (this.y += t.y), (this.z += t.z), this;
        }
        sub(t) {
          return (this.x -= t.x), (this.y -= t.y), (this.z -= t.z), this;
        }
        scale(t) {
          return (this.x *= t), (this.y *= t), (this.z *= t), this;
        }
        normalize() {
          let t = this.length();
          return (
            0 == t ||
              ((t = 1 / t), (this.x *= t), (this.y *= t), (this.z *= t)),
            this
          );
        }
        cross(t) {
          return this.set(
            this.y * t.z - this.z * t.y,
            this.z * t.x - this.x * t.z,
            this.x * t.y - this.y * t.x
          );
        }
        multiply(t) {
          let e = t.values;
          return this.set(
            this.x * e[Ke] + this.y * e[$e] + this.z * e[ts] + e[es],
            this.x * e[ss] + this.y * e[is] + this.z * e[rs] + e[ns],
            this.x * e[as] + this.y * e[hs] + this.z * e[os] + e[ls]
          );
        }
        project(t) {
          let e = t.values,
            s = 1 / (this.x * e[cs] + this.y * e[ds] + this.z * e[us] + e[ms]);
          return this.set(
            (this.x * e[Ke] + this.y * e[$e] + this.z * e[ts] + e[es]) * s,
            (this.x * e[ss] + this.y * e[is] + this.z * e[rs] + e[ns]) * s,
            (this.x * e[as] + this.y * e[hs] + this.z * e[os] + e[ls]) * s
          );
        }
        dot(t) {
          return this.x * t.x + this.y * t.y + this.z * t.z;
        }
        length() {
          return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z);
        }
        distance(t) {
          let e = t.x - this.x,
            s = t.y - this.y,
            i = t.z - this.z;
          return Math.sqrt(e * e + s * s + i * i);
        }
      }
      const Ke = 0,
        $e = 4,
        ts = 8,
        es = 12,
        ss = 1,
        is = 5,
        rs = 9,
        ns = 13,
        as = 2,
        hs = 6,
        os = 10,
        ls = 14,
        cs = 3,
        ds = 7,
        us = 11,
        ms = 15;
      class fs {
        constructor() {
          (this.temp = new Float32Array(16)),
            (this.values = new Float32Array(16));
          let t = this.values;
          (t[Ke] = 1), (t[is] = 1), (t[os] = 1), (t[ms] = 1);
        }
        set(t) {
          return this.values.set(t), this;
        }
        transpose() {
          let t = this.temp,
            e = this.values;
          return (
            (t[Ke] = e[Ke]),
            (t[$e] = e[ss]),
            (t[ts] = e[as]),
            (t[es] = e[cs]),
            (t[ss] = e[$e]),
            (t[is] = e[is]),
            (t[rs] = e[hs]),
            (t[ns] = e[ds]),
            (t[as] = e[ts]),
            (t[hs] = e[rs]),
            (t[os] = e[os]),
            (t[ls] = e[us]),
            (t[cs] = e[es]),
            (t[ds] = e[ns]),
            (t[us] = e[ls]),
            (t[ms] = e[ms]),
            this.set(t)
          );
        }
        identity() {
          let t = this.values;
          return (
            (t[Ke] = 1),
            (t[$e] = 0),
            (t[ts] = 0),
            (t[es] = 0),
            (t[ss] = 0),
            (t[is] = 1),
            (t[rs] = 0),
            (t[ns] = 0),
            (t[as] = 0),
            (t[hs] = 0),
            (t[os] = 1),
            (t[ls] = 0),
            (t[cs] = 0),
            (t[ds] = 0),
            (t[us] = 0),
            (t[ms] = 1),
            this
          );
        }
        invert() {
          let t = this.values,
            e = this.temp,
            s =
              t[cs] * t[hs] * t[rs] * t[es] -
              t[as] * t[ds] * t[rs] * t[es] -
              t[cs] * t[is] * t[os] * t[es] +
              t[ss] * t[ds] * t[os] * t[es] +
              t[as] * t[is] * t[us] * t[es] -
              t[ss] * t[hs] * t[us] * t[es] -
              t[cs] * t[hs] * t[ts] * t[ns] +
              t[as] * t[ds] * t[ts] * t[ns] +
              t[cs] * t[$e] * t[os] * t[ns] -
              t[Ke] * t[ds] * t[os] * t[ns] -
              t[as] * t[$e] * t[us] * t[ns] +
              t[Ke] * t[hs] * t[us] * t[ns] +
              t[cs] * t[is] * t[ts] * t[ls] -
              t[ss] * t[ds] * t[ts] * t[ls] -
              t[cs] * t[$e] * t[rs] * t[ls] +
              t[Ke] * t[ds] * t[rs] * t[ls] +
              t[ss] * t[$e] * t[us] * t[ls] -
              t[Ke] * t[is] * t[us] * t[ls] -
              t[as] * t[is] * t[ts] * t[ms] +
              t[ss] * t[hs] * t[ts] * t[ms] +
              t[as] * t[$e] * t[rs] * t[ms] -
              t[Ke] * t[hs] * t[rs] * t[ms] -
              t[ss] * t[$e] * t[os] * t[ms] +
              t[Ke] * t[is] * t[os] * t[ms];
          if (0 == s) throw new Error("non-invertible matrix");
          let i = 1 / s;
          return (
            (e[Ke] =
              t[rs] * t[ls] * t[ds] -
              t[ns] * t[os] * t[ds] +
              t[ns] * t[hs] * t[us] -
              t[is] * t[ls] * t[us] -
              t[rs] * t[hs] * t[ms] +
              t[is] * t[os] * t[ms]),
            (e[$e] =
              t[es] * t[os] * t[ds] -
              t[ts] * t[ls] * t[ds] -
              t[es] * t[hs] * t[us] +
              t[$e] * t[ls] * t[us] +
              t[ts] * t[hs] * t[ms] -
              t[$e] * t[os] * t[ms]),
            (e[ts] =
              t[ts] * t[ns] * t[ds] -
              t[es] * t[rs] * t[ds] +
              t[es] * t[is] * t[us] -
              t[$e] * t[ns] * t[us] -
              t[ts] * t[is] * t[ms] +
              t[$e] * t[rs] * t[ms]),
            (e[es] =
              t[es] * t[rs] * t[hs] -
              t[ts] * t[ns] * t[hs] -
              t[es] * t[is] * t[os] +
              t[$e] * t[ns] * t[os] +
              t[ts] * t[is] * t[ls] -
              t[$e] * t[rs] * t[ls]),
            (e[ss] =
              t[ns] * t[os] * t[cs] -
              t[rs] * t[ls] * t[cs] -
              t[ns] * t[as] * t[us] +
              t[ss] * t[ls] * t[us] +
              t[rs] * t[as] * t[ms] -
              t[ss] * t[os] * t[ms]),
            (e[is] =
              t[ts] * t[ls] * t[cs] -
              t[es] * t[os] * t[cs] +
              t[es] * t[as] * t[us] -
              t[Ke] * t[ls] * t[us] -
              t[ts] * t[as] * t[ms] +
              t[Ke] * t[os] * t[ms]),
            (e[rs] =
              t[es] * t[rs] * t[cs] -
              t[ts] * t[ns] * t[cs] -
              t[es] * t[ss] * t[us] +
              t[Ke] * t[ns] * t[us] +
              t[ts] * t[ss] * t[ms] -
              t[Ke] * t[rs] * t[ms]),
            (e[ns] =
              t[ts] * t[ns] * t[as] -
              t[es] * t[rs] * t[as] +
              t[es] * t[ss] * t[os] -
              t[Ke] * t[ns] * t[os] -
              t[ts] * t[ss] * t[ls] +
              t[Ke] * t[rs] * t[ls]),
            (e[as] =
              t[is] * t[ls] * t[cs] -
              t[ns] * t[hs] * t[cs] +
              t[ns] * t[as] * t[ds] -
              t[ss] * t[ls] * t[ds] -
              t[is] * t[as] * t[ms] +
              t[ss] * t[hs] * t[ms]),
            (e[hs] =
              t[es] * t[hs] * t[cs] -
              t[$e] * t[ls] * t[cs] -
              t[es] * t[as] * t[ds] +
              t[Ke] * t[ls] * t[ds] +
              t[$e] * t[as] * t[ms] -
              t[Ke] * t[hs] * t[ms]),
            (e[os] =
              t[$e] * t[ns] * t[cs] -
              t[es] * t[is] * t[cs] +
              t[es] * t[ss] * t[ds] -
              t[Ke] * t[ns] * t[ds] -
              t[$e] * t[ss] * t[ms] +
              t[Ke] * t[is] * t[ms]),
            (e[ls] =
              t[es] * t[is] * t[as] -
              t[$e] * t[ns] * t[as] -
              t[es] * t[ss] * t[hs] +
              t[Ke] * t[ns] * t[hs] +
              t[$e] * t[ss] * t[ls] -
              t[Ke] * t[is] * t[ls]),
            (e[cs] =
              t[rs] * t[hs] * t[cs] -
              t[is] * t[os] * t[cs] -
              t[rs] * t[as] * t[ds] +
              t[ss] * t[os] * t[ds] +
              t[is] * t[as] * t[us] -
              t[ss] * t[hs] * t[us]),
            (e[ds] =
              t[$e] * t[os] * t[cs] -
              t[ts] * t[hs] * t[cs] +
              t[ts] * t[as] * t[ds] -
              t[Ke] * t[os] * t[ds] -
              t[$e] * t[as] * t[us] +
              t[Ke] * t[hs] * t[us]),
            (e[us] =
              t[ts] * t[is] * t[cs] -
              t[$e] * t[rs] * t[cs] -
              t[ts] * t[ss] * t[ds] +
              t[Ke] * t[rs] * t[ds] +
              t[$e] * t[ss] * t[us] -
              t[Ke] * t[is] * t[us]),
            (e[ms] =
              t[$e] * t[rs] * t[as] -
              t[ts] * t[is] * t[as] +
              t[ts] * t[ss] * t[hs] -
              t[Ke] * t[rs] * t[hs] -
              t[$e] * t[ss] * t[os] +
              t[Ke] * t[is] * t[os]),
            (t[Ke] = e[Ke] * i),
            (t[$e] = e[$e] * i),
            (t[ts] = e[ts] * i),
            (t[es] = e[es] * i),
            (t[ss] = e[ss] * i),
            (t[is] = e[is] * i),
            (t[rs] = e[rs] * i),
            (t[ns] = e[ns] * i),
            (t[as] = e[as] * i),
            (t[hs] = e[hs] * i),
            (t[os] = e[os] * i),
            (t[ls] = e[ls] * i),
            (t[cs] = e[cs] * i),
            (t[ds] = e[ds] * i),
            (t[us] = e[us] * i),
            (t[ms] = e[ms] * i),
            this
          );
        }
        determinant() {
          let t = this.values;
          return (
            t[cs] * t[hs] * t[rs] * t[es] -
            t[as] * t[ds] * t[rs] * t[es] -
            t[cs] * t[is] * t[os] * t[es] +
            t[ss] * t[ds] * t[os] * t[es] +
            t[as] * t[is] * t[us] * t[es] -
            t[ss] * t[hs] * t[us] * t[es] -
            t[cs] * t[hs] * t[ts] * t[ns] +
            t[as] * t[ds] * t[ts] * t[ns] +
            t[cs] * t[$e] * t[os] * t[ns] -
            t[Ke] * t[ds] * t[os] * t[ns] -
            t[as] * t[$e] * t[us] * t[ns] +
            t[Ke] * t[hs] * t[us] * t[ns] +
            t[cs] * t[is] * t[ts] * t[ls] -
            t[ss] * t[ds] * t[ts] * t[ls] -
            t[cs] * t[$e] * t[rs] * t[ls] +
            t[Ke] * t[ds] * t[rs] * t[ls] +
            t[ss] * t[$e] * t[us] * t[ls] -
            t[Ke] * t[is] * t[us] * t[ls] -
            t[as] * t[is] * t[ts] * t[ms] +
            t[ss] * t[hs] * t[ts] * t[ms] +
            t[as] * t[$e] * t[rs] * t[ms] -
            t[Ke] * t[hs] * t[rs] * t[ms] -
            t[ss] * t[$e] * t[os] * t[ms] +
            t[Ke] * t[is] * t[os] * t[ms]
          );
        }
        translate(t, e, s) {
          let i = this.values;
          return (i[es] += t), (i[ns] += e), (i[ls] += s), this;
        }
        copy() {
          return new fs().set(this.values);
        }
        projection(t, e, s, i) {
          this.identity();
          let r = 1 / Math.tan((s * (Math.PI / 180)) / 2),
            n = (e + t) / (t - e),
            a = (2 * e * t) / (t - e),
            h = this.values;
          return (
            (h[Ke] = r / i),
            (h[ss] = 0),
            (h[as] = 0),
            (h[cs] = 0),
            (h[$e] = 0),
            (h[is] = r),
            (h[hs] = 0),
            (h[ds] = 0),
            (h[ts] = 0),
            (h[rs] = 0),
            (h[os] = n),
            (h[us] = -1),
            (h[es] = 0),
            (h[ns] = 0),
            (h[ls] = a),
            (h[ms] = 0),
            this
          );
        }
        ortho2d(t, e, s, i) {
          return this.ortho(t, t + s, e, e + i, 0, 1);
        }
        ortho(t, e, s, i, r, n) {
          this.identity();
          let a = 2 / (e - t),
            h = 2 / (i - s),
            o = -2 / (n - r),
            l = -(e + t) / (e - t),
            c = -(i + s) / (i - s),
            d = -(n + r) / (n - r),
            u = this.values;
          return (
            (u[Ke] = a),
            (u[ss] = 0),
            (u[as] = 0),
            (u[cs] = 0),
            (u[$e] = 0),
            (u[is] = h),
            (u[hs] = 0),
            (u[ds] = 0),
            (u[ts] = 0),
            (u[rs] = 0),
            (u[os] = o),
            (u[us] = 0),
            (u[es] = l),
            (u[ns] = c),
            (u[ls] = d),
            (u[ms] = 1),
            this
          );
        }
        multiply(t) {
          let e = this.temp,
            s = this.values,
            i = t.values;
          return (
            (e[Ke] =
              s[Ke] * i[Ke] + s[$e] * i[ss] + s[ts] * i[as] + s[es] * i[cs]),
            (e[$e] =
              s[Ke] * i[$e] + s[$e] * i[is] + s[ts] * i[hs] + s[es] * i[ds]),
            (e[ts] =
              s[Ke] * i[ts] + s[$e] * i[rs] + s[ts] * i[os] + s[es] * i[us]),
            (e[es] =
              s[Ke] * i[es] + s[$e] * i[ns] + s[ts] * i[ls] + s[es] * i[ms]),
            (e[ss] =
              s[ss] * i[Ke] + s[is] * i[ss] + s[rs] * i[as] + s[ns] * i[cs]),
            (e[is] =
              s[ss] * i[$e] + s[is] * i[is] + s[rs] * i[hs] + s[ns] * i[ds]),
            (e[rs] =
              s[ss] * i[ts] + s[is] * i[rs] + s[rs] * i[os] + s[ns] * i[us]),
            (e[ns] =
              s[ss] * i[es] + s[is] * i[ns] + s[rs] * i[ls] + s[ns] * i[ms]),
            (e[as] =
              s[as] * i[Ke] + s[hs] * i[ss] + s[os] * i[as] + s[ls] * i[cs]),
            (e[hs] =
              s[as] * i[$e] + s[hs] * i[is] + s[os] * i[hs] + s[ls] * i[ds]),
            (e[os] =
              s[as] * i[ts] + s[hs] * i[rs] + s[os] * i[os] + s[ls] * i[us]),
            (e[ls] =
              s[as] * i[es] + s[hs] * i[ns] + s[os] * i[ls] + s[ls] * i[ms]),
            (e[cs] =
              s[cs] * i[Ke] + s[ds] * i[ss] + s[us] * i[as] + s[ms] * i[cs]),
            (e[ds] =
              s[cs] * i[$e] + s[ds] * i[is] + s[us] * i[hs] + s[ms] * i[ds]),
            (e[us] =
              s[cs] * i[ts] + s[ds] * i[rs] + s[us] * i[os] + s[ms] * i[us]),
            (e[ms] =
              s[cs] * i[es] + s[ds] * i[ns] + s[us] * i[ls] + s[ms] * i[ms]),
            this.set(this.temp)
          );
        }
        multiplyLeft(t) {
          let e = this.temp,
            s = this.values,
            i = t.values;
          return (
            (e[Ke] =
              i[Ke] * s[Ke] + i[$e] * s[ss] + i[ts] * s[as] + i[es] * s[cs]),
            (e[$e] =
              i[Ke] * s[$e] + i[$e] * s[is] + i[ts] * s[hs] + i[es] * s[ds]),
            (e[ts] =
              i[Ke] * s[ts] + i[$e] * s[rs] + i[ts] * s[os] + i[es] * s[us]),
            (e[es] =
              i[Ke] * s[es] + i[$e] * s[ns] + i[ts] * s[ls] + i[es] * s[ms]),
            (e[ss] =
              i[ss] * s[Ke] + i[is] * s[ss] + i[rs] * s[as] + i[ns] * s[cs]),
            (e[is] =
              i[ss] * s[$e] + i[is] * s[is] + i[rs] * s[hs] + i[ns] * s[ds]),
            (e[rs] =
              i[ss] * s[ts] + i[is] * s[rs] + i[rs] * s[os] + i[ns] * s[us]),
            (e[ns] =
              i[ss] * s[es] + i[is] * s[ns] + i[rs] * s[ls] + i[ns] * s[ms]),
            (e[as] =
              i[as] * s[Ke] + i[hs] * s[ss] + i[os] * s[as] + i[ls] * s[cs]),
            (e[hs] =
              i[as] * s[$e] + i[hs] * s[is] + i[os] * s[hs] + i[ls] * s[ds]),
            (e[os] =
              i[as] * s[ts] + i[hs] * s[rs] + i[os] * s[os] + i[ls] * s[us]),
            (e[ls] =
              i[as] * s[es] + i[hs] * s[ns] + i[os] * s[ls] + i[ls] * s[ms]),
            (e[cs] =
              i[cs] * s[Ke] + i[ds] * s[ss] + i[us] * s[as] + i[ms] * s[cs]),
            (e[ds] =
              i[cs] * s[$e] + i[ds] * s[is] + i[us] * s[hs] + i[ms] * s[ds]),
            (e[us] =
              i[cs] * s[ts] + i[ds] * s[rs] + i[us] * s[os] + i[ms] * s[us]),
            (e[ms] =
              i[cs] * s[es] + i[ds] * s[ns] + i[us] * s[ls] + i[ms] * s[ms]),
            this.set(this.temp)
          );
        }
        lookAt(t, e, s) {
          let i = fs.xAxis,
            r = fs.yAxis,
            n = fs.zAxis;
          n.setFrom(e).normalize(),
            i.setFrom(e).normalize(),
            i.cross(s).normalize(),
            r.setFrom(i).cross(n).normalize(),
            this.identity();
          let a = this.values;
          return (
            (a[Ke] = i.x),
            (a[$e] = i.y),
            (a[ts] = i.z),
            (a[ss] = r.x),
            (a[is] = r.y),
            (a[rs] = r.z),
            (a[as] = -n.x),
            (a[hs] = -n.y),
            (a[os] = -n.z),
            fs.tmpMatrix.identity(),
            (fs.tmpMatrix.values[es] = -t.x),
            (fs.tmpMatrix.values[ns] = -t.y),
            (fs.tmpMatrix.values[ls] = -t.z),
            this.multiply(fs.tmpMatrix),
            this
          );
        }
      }
      (fs.xAxis = new Qe()),
        (fs.yAxis = new Qe()),
        (fs.zAxis = new Qe()),
        (fs.tmpMatrix = new fs());
      class gs {
        constructor(t, e) {
          (this.position = new Qe(0, 0, 0)),
            (this.direction = new Qe(0, 0, -1)),
            (this.up = new Qe(0, 1, 0)),
            (this.near = 0),
            (this.far = 100),
            (this.zoom = 1),
            (this.viewportWidth = 0),
            (this.viewportHeight = 0),
            (this.projectionView = new fs()),
            (this.inverseProjectionView = new fs()),
            (this.projection = new fs()),
            (this.view = new fs()),
            (this.viewportWidth = t),
            (this.viewportHeight = e),
            this.update();
        }
        update() {
          let t = this.projection,
            e = this.view,
            s = this.projectionView,
            i = this.inverseProjectionView,
            r = this.zoom,
            n = this.viewportWidth,
            a = this.viewportHeight;
          t.ortho(
            r * (-n / 2),
            r * (n / 2),
            r * (-a / 2),
            r * (a / 2),
            this.near,
            this.far
          ),
            e.lookAt(this.position, this.direction, this.up),
            s.set(t.values),
            s.multiply(e),
            i.set(s.values).invert();
        }
        screenToWorld(t, e, s) {
          let i = t.x,
            r = s - t.y - 1;
          return (
            (t.x = (2 * i) / e - 1),
            (t.y = (2 * r) / s - 1),
            (t.z = 2 * t.z - 1),
            t.project(this.inverseProjectionView),
            t
          );
        }
        worldToScreen(t, e, s) {
          return (
            t.project(this.projectionView),
            (t.x = (e * (t.x + 1)) / 2),
            (t.y = (s * (t.y + 1)) / 2),
            (t.z = (t.z + 1) / 2),
            t
          );
        }
        setViewport(t, e) {
          (this.viewportWidth = t), (this.viewportHeight = e);
        }
      }
      class ps {
        constructor(t) {
          (this.mouseX = 0),
            (this.mouseY = 0),
            (this.buttonDown = !1),
            (this.touch0 = null),
            (this.touch1 = null),
            (this.initialPinchDistance = 0),
            (this.listeners = new Array()),
            (this.eventListeners = []),
            (this.element = t),
            this.setupCallbacks(t);
        }
        setupCallbacks(t) {
          let e = (e) => {
              if (e instanceof MouseEvent) {
                let s = t.getBoundingClientRect();
                (this.mouseX = e.clientX - s.left),
                  (this.mouseY = e.clientY - s.top),
                  this.listeners.map((t) => {
                    this.buttonDown
                      ? t.dragged && t.dragged(this.mouseX, this.mouseY)
                      : t.moved && t.moved(this.mouseX, this.mouseY);
                  });
              }
            },
            s = (i) => {
              if (i instanceof MouseEvent) {
                let r = t.getBoundingClientRect();
                (this.mouseX = i.clientX - r.left),
                  (this.mouseY = i.clientY - r.top),
                  (this.buttonDown = !1),
                  this.listeners.map((t) => {
                    t.up && t.up(this.mouseX, this.mouseY);
                  }),
                  document.removeEventListener("mousemove", e),
                  document.removeEventListener("mouseup", s);
              }
            };
          t.addEventListener(
            "mousedown",
            (i) => {
              if (i instanceof MouseEvent) {
                let r = t.getBoundingClientRect();
                (this.mouseX = i.clientX - r.left),
                  (this.mouseY = i.clientY - r.top),
                  (this.buttonDown = !0),
                  this.listeners.map((t) => {
                    t.down && t.down(this.mouseX, this.mouseY);
                  }),
                  document.addEventListener("mousemove", e),
                  document.addEventListener("mouseup", s);
              }
            },
            !0
          ),
            t.addEventListener("mousemove", e, !0),
            t.addEventListener("mouseup", s, !0),
            t.addEventListener(
              "wheel",
              (t) => {
                t.preventDefault(),
                  t.deltaY,
                  t.deltaMode,
                  WheelEvent.DOM_DELTA_LINE,
                  t.deltaMode,
                  WheelEvent.DOM_DELTA_PAGE,
                  this.listeners.map((e) => {
                    e.wheel && e.wheel(t.deltaY);
                  });
              },
              !0
            ),
            t.addEventListener(
              "touchstart",
              (e) => {
                if (!this.touch0 || !this.touch1) {
                  let s = e.changedTouches.item(0);
                  if (!s) return;
                  let i = t.getBoundingClientRect(),
                    r = s.clientX - i.left,
                    n = s.clientY - i.top,
                    a = new xs(s.identifier, r, n);
                  if (
                    ((this.mouseX = r),
                    (this.mouseY = n),
                    (this.buttonDown = !0),
                    this.touch0)
                  ) {
                    if (!this.touch1) {
                      this.touch1 = a;
                      let t = this.touch1.x - this.touch0.x,
                        e = this.touch1.x - this.touch0.x;
                      (this.initialPinchDistance = Math.sqrt(t * t + e * e)),
                        this.listeners.map((t) => {
                          t.zoom &&
                            t.zoom(
                              this.initialPinchDistance,
                              this.initialPinchDistance
                            );
                        });
                    }
                  } else
                    (this.touch0 = a),
                      this.listeners.map((t) => {
                        t.down && t.down(a.x, a.y);
                      });
                }
                e.preventDefault();
              },
              !1
            ),
            t.addEventListener(
              "touchmove",
              (e) => {
                if (this.touch0) {
                  var s = e.changedTouches;
                  let n = t.getBoundingClientRect();
                  for (var i = 0; i < s.length; i++) {
                    var r = s[i];
                    let t = r.clientX - n.left,
                      e = r.clientY - n.top;
                    this.touch0.identifier === r.identifier &&
                      ((this.touch0.x = this.mouseX = t),
                      (this.touch0.y = this.mouseY = e),
                      this.listeners.map((s) => {
                        s.dragged && s.dragged(t, e);
                      })),
                      this.touch1 &&
                        this.touch1.identifier === r.identifier &&
                        ((this.touch1.x = this.mouseX = t),
                        (this.touch1.y = this.mouseY = e));
                  }
                  if (this.touch0 && this.touch1) {
                    let t = this.touch1.x - this.touch0.x,
                      e = this.touch1.x - this.touch0.x,
                      s = Math.sqrt(t * t + e * e);
                    this.listeners.map((t) => {
                      t.zoom && t.zoom(this.initialPinchDistance, s);
                    });
                  }
                }
                e.preventDefault();
              },
              !1
            );
          let i = (e) => {
            if (this.touch0) {
              var s = e.changedTouches;
              let n = t.getBoundingClientRect();
              for (var i = 0; i < s.length; i++) {
                var r = s[i];
                let t = r.clientX - n.left,
                  e = r.clientY - n.top;
                if (this.touch0.identifier === r.identifier) {
                  if (
                    ((this.touch0 = null),
                    (this.mouseX = t),
                    (this.mouseY = e),
                    this.listeners.map((s) => {
                      s.up && s.up(t, e);
                    }),
                    !this.touch1)
                  ) {
                    this.buttonDown = !1;
                    break;
                  }
                  (this.touch0 = this.touch1),
                    (this.touch1 = null),
                    (this.mouseX = this.touch0.x),
                    (this.mouseX = this.touch0.x),
                    (this.buttonDown = !0),
                    this.listeners.map((t) => {
                      t.down && t.down(this.touch0.x, this.touch0.y);
                    });
                }
                this.touch1 && this.touch1.identifier && (this.touch1 = null);
              }
            }
            e.preventDefault();
          };
          t.addEventListener("touchend", i, !1),
            t.addEventListener("touchcancel", i);
        }
        addListener(t) {
          this.listeners.push(t);
        }
        removeListener(t) {
          let e = this.listeners.indexOf(t);
          e > -1 && this.listeners.splice(e, 1);
        }
      }
      class xs {
        constructor(t, e, s) {
          (this.identifier = t), (this.x = e), (this.y = s);
        }
      }
      class bs {
        constructor(t, e, s) {
          (this.vertexShader = e),
            (this.fragmentShader = s),
            (this.vs = null),
            (this.fs = null),
            (this.program = null),
            (this.tmp2x2 = new Float32Array(4)),
            (this.tmp3x3 = new Float32Array(9)),
            (this.tmp4x4 = new Float32Array(16)),
            (this.vsSource = e),
            (this.fsSource = s),
            (this.context = t instanceof je ? t : new je(t)),
            this.context.addRestorable(this),
            this.compile();
        }
        getProgram() {
          return this.program;
        }
        getVertexShader() {
          return this.vertexShader;
        }
        getFragmentShader() {
          return this.fragmentShader;
        }
        getVertexShaderSource() {
          return this.vsSource;
        }
        getFragmentSource() {
          return this.fsSource;
        }
        compile() {
          let t = this.context.gl;
          try {
            if (
              ((this.vs = this.compileShader(
                t.VERTEX_SHADER,
                this.vertexShader
              )),
              !this.vs)
            )
              throw new Error("Couldn't compile vertex shader.");
            if (
              ((this.fs = this.compileShader(
                t.FRAGMENT_SHADER,
                this.fragmentShader
              )),
              !this.fs)
            )
              throw new Error("Couldn#t compile fragment shader.");
            this.program = this.compileProgram(this.vs, this.fs);
          } catch (e) {
            throw (this.dispose(), e);
          }
        }
        compileShader(t, e) {
          let s = this.context.gl,
            i = s.createShader(t);
          if (!i) throw new Error("Couldn't create shader.");
          if (
            (s.shaderSource(i, e),
            s.compileShader(i),
            !s.getShaderParameter(i, s.COMPILE_STATUS))
          ) {
            let t = "Couldn't compile shader: " + s.getShaderInfoLog(i);
            if ((s.deleteShader(i), !s.isContextLost())) throw new Error(t);
          }
          return i;
        }
        compileProgram(t, e) {
          let s = this.context.gl,
            i = s.createProgram();
          if (!i) throw new Error("Couldn't compile program.");
          if (
            (s.attachShader(i, t),
            s.attachShader(i, e),
            s.linkProgram(i),
            !s.getProgramParameter(i, s.LINK_STATUS))
          ) {
            let t =
              "Couldn't compile shader program: " + s.getProgramInfoLog(i);
            if ((s.deleteProgram(i), !s.isContextLost())) throw new Error(t);
          }
          return i;
        }
        restore() {
          this.compile();
        }
        bind() {
          this.context.gl.useProgram(this.program);
        }
        unbind() {
          this.context.gl.useProgram(null);
        }
        setUniformi(t, e) {
          this.context.gl.uniform1i(this.getUniformLocation(t), e);
        }
        setUniformf(t, e) {
          this.context.gl.uniform1f(this.getUniformLocation(t), e);
        }
        setUniform2f(t, e, s) {
          this.context.gl.uniform2f(this.getUniformLocation(t), e, s);
        }
        setUniform3f(t, e, s, i) {
          this.context.gl.uniform3f(this.getUniformLocation(t), e, s, i);
        }
        setUniform4f(t, e, s, i, r) {
          this.context.gl.uniform4f(this.getUniformLocation(t), e, s, i, r);
        }
        setUniform2x2f(t, e) {
          let s = this.context.gl;
          this.tmp2x2.set(e),
            s.uniformMatrix2fv(this.getUniformLocation(t), !1, this.tmp2x2);
        }
        setUniform3x3f(t, e) {
          let s = this.context.gl;
          this.tmp3x3.set(e),
            s.uniformMatrix3fv(this.getUniformLocation(t), !1, this.tmp3x3);
        }
        setUniform4x4f(t, e) {
          let s = this.context.gl;
          this.tmp4x4.set(e),
            s.uniformMatrix4fv(this.getUniformLocation(t), !1, this.tmp4x4);
        }
        getUniformLocation(t) {
          let e = this.context.gl;
          if (!this.program) throw new Error("Shader not compiled.");
          let s = e.getUniformLocation(this.program, t);
          if (!s && !e.isContextLost())
            throw new Error(`Couldn't find location for uniform ${t}`);
          return s;
        }
        getAttributeLocation(t) {
          let e = this.context.gl;
          if (!this.program) throw new Error("Shader not compiled.");
          let s = e.getAttribLocation(this.program, t);
          if (-1 == s && !e.isContextLost())
            throw new Error(`Couldn't find location for attribute ${t}`);
          return s;
        }
        dispose() {
          this.context.removeRestorable(this);
          let t = this.context.gl;
          this.vs && (t.deleteShader(this.vs), (this.vs = null)),
            this.fs && (t.deleteShader(this.fs), (this.fs = null)),
            this.program &&
              (t.deleteProgram(this.program), (this.program = null));
        }
        static newColoredTextured(t) {
          let e = `\n\t\t\t\tattribute vec4 ${bs.POSITION};\n\t\t\t\tattribute vec4 ${bs.COLOR};\n\t\t\t\tattribute vec2 ${bs.TEXCOORDS};\n\t\t\t\tuniform mat4 ${bs.MVP_MATRIX};\n\t\t\t\tvarying vec4 v_color;\n\t\t\t\tvarying vec2 v_texCoords;\n\n\t\t\t\tvoid main () {\n\t\t\t\t\tv_color = ${bs.COLOR};\n\t\t\t\t\tv_texCoords = ${bs.TEXCOORDS};\n\t\t\t\t\tgl_Position = ${bs.MVP_MATRIX} * ${bs.POSITION};\n\t\t\t\t}\n\t\t\t`;
          return new bs(
            t,
            e,
            "\n\t\t\t\t#ifdef GL_ES\n\t\t\t\t\t#define LOWP lowp\n\t\t\t\t\tprecision mediump float;\n\t\t\t\t#else\n\t\t\t\t\t#define LOWP\n\t\t\t\t#endif\n\t\t\t\tvarying LOWP vec4 v_color;\n\t\t\t\tvarying vec2 v_texCoords;\n\t\t\t\tuniform sampler2D u_texture;\n\n\t\t\t\tvoid main () {\n\t\t\t\t\tgl_FragColor = v_color * texture2D(u_texture, v_texCoords);\n\t\t\t\t}\n\t\t\t"
          );
        }
        static newTwoColoredTextured(t) {
          let e = `\n\t\t\t\tattribute vec4 ${bs.POSITION};\n\t\t\t\tattribute vec4 ${bs.COLOR};\n\t\t\t\tattribute vec4 ${bs.COLOR2};\n\t\t\t\tattribute vec2 ${bs.TEXCOORDS};\n\t\t\t\tuniform mat4 ${bs.MVP_MATRIX};\n\t\t\t\tvarying vec4 v_light;\n\t\t\t\tvarying vec4 v_dark;\n\t\t\t\tvarying vec2 v_texCoords;\n\n\t\t\t\tvoid main () {\n\t\t\t\t\tv_light = ${bs.COLOR};\n\t\t\t\t\tv_dark = ${bs.COLOR2};\n\t\t\t\t\tv_texCoords = ${bs.TEXCOORDS};\n\t\t\t\t\tgl_Position = ${bs.MVP_MATRIX} * ${bs.POSITION};\n\t\t\t\t}\n\t\t\t`;
          return new bs(
            t,
            e,
            "\n\t\t\t\t#ifdef GL_ES\n\t\t\t\t\t#define LOWP lowp\n\t\t\t\t\tprecision mediump float;\n\t\t\t\t#else\n\t\t\t\t\t#define LOWP\n\t\t\t\t#endif\n\t\t\t\tvarying LOWP vec4 v_light;\n\t\t\t\tvarying LOWP vec4 v_dark;\n\t\t\t\tvarying vec2 v_texCoords;\n\t\t\t\tuniform sampler2D u_texture;\n\n\t\t\t\tvoid main () {\n\t\t\t\t\tvec4 texColor = texture2D(u_texture, v_texCoords);\n\t\t\t\t\tgl_FragColor.a = texColor.a * v_light.a;\n\t\t\t\t\tgl_FragColor.rgb = ((texColor.a - 1.0) * v_dark.a + 1.0 - texColor.rgb) * v_dark.rgb + texColor.rgb * v_light.rgb;\n\t\t\t\t}\n\t\t\t"
          );
        }
        static newColored(t) {
          let e = `\n\t\t\t\tattribute vec4 ${bs.POSITION};\n\t\t\t\tattribute vec4 ${bs.COLOR};\n\t\t\t\tuniform mat4 ${bs.MVP_MATRIX};\n\t\t\t\tvarying vec4 v_color;\n\n\t\t\t\tvoid main () {\n\t\t\t\t\tv_color = ${bs.COLOR};\n\t\t\t\t\tgl_Position = ${bs.MVP_MATRIX} * ${bs.POSITION};\n\t\t\t\t}\n\t\t\t`;
          return new bs(
            t,
            e,
            "\n\t\t\t\t#ifdef GL_ES\n\t\t\t\t\t#define LOWP lowp\n\t\t\t\t\tprecision mediump float;\n\t\t\t\t#else\n\t\t\t\t\t#define LOWP\n\t\t\t\t#endif\n\t\t\t\tvarying LOWP vec4 v_color;\n\n\t\t\t\tvoid main () {\n\t\t\t\t\tgl_FragColor = v_color;\n\t\t\t\t}\n\t\t\t"
          );
        }
      }
      (bs.MVP_MATRIX = "u_projTrans"),
        (bs.POSITION = "a_position"),
        (bs.COLOR = "a_color"),
        (bs.COLOR2 = "a_color2"),
        (bs.TEXCOORDS = "a_texCoords"),
        (bs.SAMPLER = "u_texture");
      class ws {
        constructor(t, e, s, i) {
          (this.attributes = e),
            (this.verticesBuffer = null),
            (this.verticesLength = 0),
            (this.dirtyVertices = !1),
            (this.indicesBuffer = null),
            (this.indicesLength = 0),
            (this.dirtyIndices = !1),
            (this.elementsPerVertex = 0),
            (this.context = t instanceof je ? t : new je(t)),
            (this.elementsPerVertex = 0);
          for (let r = 0; r < e.length; r++)
            this.elementsPerVertex += e[r].numElements;
          (this.vertices = new Float32Array(s * this.elementsPerVertex)),
            (this.indices = new Uint16Array(i)),
            this.context.addRestorable(this);
        }
        getAttributes() {
          return this.attributes;
        }
        maxVertices() {
          return this.vertices.length / this.elementsPerVertex;
        }
        numVertices() {
          return this.verticesLength / this.elementsPerVertex;
        }
        setVerticesLength(t) {
          (this.dirtyVertices = !0), (this.verticesLength = t);
        }
        getVertices() {
          return this.vertices;
        }
        maxIndices() {
          return this.indices.length;
        }
        numIndices() {
          return this.indicesLength;
        }
        setIndicesLength(t) {
          (this.dirtyIndices = !0), (this.indicesLength = t);
        }
        getIndices() {
          return this.indices;
        }
        getVertexSizeInFloats() {
          let t = 0;
          for (var e = 0; e < this.attributes.length; e++) {
            t += this.attributes[e].numElements;
          }
          return t;
        }
        setVertices(t) {
          if (((this.dirtyVertices = !0), t.length > this.vertices.length))
            throw Error(
              "Mesh can't store more than " + this.maxVertices() + " vertices"
            );
          this.vertices.set(t, 0), (this.verticesLength = t.length);
        }
        setIndices(t) {
          if (((this.dirtyIndices = !0), t.length > this.indices.length))
            throw Error(
              "Mesh can't store more than " + this.maxIndices() + " indices"
            );
          this.indices.set(t, 0), (this.indicesLength = t.length);
        }
        draw(t, e) {
          this.drawWithOffset(
            t,
            e,
            0,
            this.indicesLength > 0
              ? this.indicesLength
              : this.verticesLength / this.elementsPerVertex
          );
        }
        drawWithOffset(t, e, s, i) {
          let r = this.context.gl;
          (this.dirtyVertices || this.dirtyIndices) && this.update(),
            this.bind(t),
            this.indicesLength > 0
              ? r.drawElements(e, i, r.UNSIGNED_SHORT, 2 * s)
              : r.drawArrays(e, s, i),
            this.unbind(t);
        }
        bind(t) {
          let e = this.context.gl;
          e.bindBuffer(e.ARRAY_BUFFER, this.verticesBuffer);
          let s = 0;
          for (let i = 0; i < this.attributes.length; i++) {
            let r = this.attributes[i],
              n = t.getAttributeLocation(r.name);
            e.enableVertexAttribArray(n),
              e.vertexAttribPointer(
                n,
                r.numElements,
                e.FLOAT,
                !1,
                4 * this.elementsPerVertex,
                4 * s
              ),
              (s += r.numElements);
          }
          this.indicesLength > 0 &&
            e.bindBuffer(e.ELEMENT_ARRAY_BUFFER, this.indicesBuffer);
        }
        unbind(t) {
          let e = this.context.gl;
          for (let s = 0; s < this.attributes.length; s++) {
            let i = this.attributes[s],
              r = t.getAttributeLocation(i.name);
            e.disableVertexAttribArray(r);
          }
          e.bindBuffer(e.ARRAY_BUFFER, null),
            this.indicesLength > 0 &&
              e.bindBuffer(e.ELEMENT_ARRAY_BUFFER, null);
        }
        update() {
          let t = this.context.gl;
          this.dirtyVertices &&
            (this.verticesBuffer || (this.verticesBuffer = t.createBuffer()),
            t.bindBuffer(t.ARRAY_BUFFER, this.verticesBuffer),
            t.bufferData(
              t.ARRAY_BUFFER,
              this.vertices.subarray(0, this.verticesLength),
              t.DYNAMIC_DRAW
            ),
            (this.dirtyVertices = !1)),
            this.dirtyIndices &&
              (this.indicesBuffer || (this.indicesBuffer = t.createBuffer()),
              t.bindBuffer(t.ELEMENT_ARRAY_BUFFER, this.indicesBuffer),
              t.bufferData(
                t.ELEMENT_ARRAY_BUFFER,
                this.indices.subarray(0, this.indicesLength),
                t.DYNAMIC_DRAW
              ),
              (this.dirtyIndices = !1));
        }
        restore() {
          (this.verticesBuffer = null),
            (this.indicesBuffer = null),
            this.update();
        }
        dispose() {
          this.context.removeRestorable(this);
          let t = this.context.gl;
          t.deleteBuffer(this.verticesBuffer),
            t.deleteBuffer(this.indicesBuffer);
        }
      }
      class vs {
        constructor(t, e, s) {
          (this.name = t), (this.type = e), (this.numElements = s);
        }
      }
      class ys extends vs {
        constructor() {
          super(bs.POSITION, e.wY.Float, 2);
        }
      }
      class As extends vs {
        constructor(t = 0) {
          super(bs.TEXCOORDS + (0 == t ? "" : t), e.wY.Float, 2);
        }
      }
      class Ys extends vs {
        constructor() {
          super(bs.COLOR, e.wY.Float, 4);
        }
      }
      class Cs extends vs {
        constructor() {
          super(bs.COLOR2, e.wY.Float, 4);
        }
      }
      var Ss, Es;
      (e.wY = void 0), ((Ss = e.wY || (e.wY = {}))[(Ss.Float = 0)] = "Float");
      class Ms {
        constructor(t, e = !0, s = 10920) {
          if (
            ((this.drawCalls = 0),
            (this.isDrawing = !1),
            (this.shader = null),
            (this.lastTexture = null),
            (this.verticesLength = 0),
            (this.indicesLength = 0),
            (this.cullWasEnabled = !1),
            s > 10920)
          )
            throw new Error(
              "Can't have more than 10920 triangles per batch: " + s
            );
          this.context = t instanceof je ? t : new je(t);
          let i = e
            ? [new ys(), new Ys(), new As(), new Cs()]
            : [new ys(), new Ys(), new As()];
          this.mesh = new ws(t, i, s, 3 * s);
          let r = this.context.gl;
          (this.srcColorBlend = r.SRC_ALPHA),
            (this.srcAlphaBlend = r.ONE),
            (this.dstBlend = r.ONE_MINUS_SRC_ALPHA);
        }
        begin(t) {
          if (this.isDrawing)
            throw new Error(
              "PolygonBatch is already drawing. Call PolygonBatch.end() before calling PolygonBatch.begin()"
            );
          (this.drawCalls = 0),
            (this.shader = t),
            (this.lastTexture = null),
            (this.isDrawing = !0);
          let e = this.context.gl;
          e.enable(e.BLEND),
            e.blendFuncSeparate(
              this.srcColorBlend,
              this.dstBlend,
              this.srcAlphaBlend,
              this.dstBlend
            ),
            (this.cullWasEnabled = e.isEnabled(e.CULL_FACE)),
            this.cullWasEnabled && e.disable(e.CULL_FACE);
        }
        setBlendMode(t, e, s) {
          if (
            (this.srcColorBlend != t ||
              this.srcAlphaBlend != e ||
              this.dstBlend != s) &&
            ((this.srcColorBlend = t),
            (this.srcAlphaBlend = e),
            (this.dstBlend = s),
            this.isDrawing)
          ) {
            this.flush(), this.context.gl.blendFuncSeparate(t, s, e, s);
          }
        }
        draw(t, e, s) {
          t != this.lastTexture
            ? (this.flush(), (this.lastTexture = t))
            : (this.verticesLength + e.length >
                this.mesh.getVertices().length ||
                this.indicesLength + s.length >
                  this.mesh.getIndices().length) &&
              this.flush();
          let i = this.mesh.numVertices();
          this.mesh.getVertices().set(e, this.verticesLength),
            (this.verticesLength += e.length),
            this.mesh.setVerticesLength(this.verticesLength);
          let r = this.mesh.getIndices();
          for (let n = this.indicesLength, a = 0; a < s.length; n++, a++)
            r[n] = s[a] + i;
          (this.indicesLength += s.length),
            this.mesh.setIndicesLength(this.indicesLength);
        }
        flush() {
          if (0 != this.verticesLength) {
            if (!this.lastTexture) throw new Error("No texture set.");
            if (!this.shader) throw new Error("No shader set.");
            this.lastTexture.bind(),
              this.mesh.draw(this.shader, this.context.gl.TRIANGLES),
              (this.verticesLength = 0),
              (this.indicesLength = 0),
              this.mesh.setVerticesLength(0),
              this.mesh.setIndicesLength(0),
              this.drawCalls++;
          }
        }
        end() {
          if (!this.isDrawing)
            throw new Error(
              "PolygonBatch is not drawing. Call PolygonBatch.begin() before calling PolygonBatch.end()"
            );
          (this.verticesLength > 0 || this.indicesLength > 0) && this.flush(),
            (this.shader = null),
            (this.lastTexture = null),
            (this.isDrawing = !1);
          let t = this.context.gl;
          t.disable(t.BLEND), this.cullWasEnabled && t.enable(t.CULL_FACE);
        }
        getDrawCalls() {
          return this.drawCalls;
        }
        dispose() {
          this.mesh.dispose();
        }
      }
      class Ts {
        constructor(t, s = 10920) {
          if (
            ((this.isDrawing = !1),
            (this.shapeType = e.DY.Filled),
            (this.color = new r(1, 1, 1, 1)),
            (this.shader = null),
            (this.vertexIndex = 0),
            (this.tmp = new c()),
            s > 10920)
          )
            throw new Error(
              "Can't have more than 10920 triangles per batch: " + s
            );
          (this.context = t instanceof je ? t : new je(t)),
            (this.mesh = new ws(t, [new ys(), new Ys()], s, 0));
          let i = this.context.gl;
          (this.srcColorBlend = i.SRC_ALPHA),
            (this.srcAlphaBlend = i.ONE),
            (this.dstBlend = i.ONE_MINUS_SRC_ALPHA);
        }
        begin(t) {
          if (this.isDrawing)
            throw new Error("ShapeRenderer.begin() has already been called");
          (this.shader = t), (this.vertexIndex = 0), (this.isDrawing = !0);
          let e = this.context.gl;
          e.enable(e.BLEND),
            e.blendFuncSeparate(
              this.srcColorBlend,
              this.dstBlend,
              this.srcAlphaBlend,
              this.dstBlend
            );
        }
        setBlendMode(t, e, s) {
          if (
            ((this.srcColorBlend = t),
            (this.srcAlphaBlend = e),
            (this.dstBlend = s),
            this.isDrawing)
          ) {
            this.flush(), this.context.gl.blendFuncSeparate(t, s, e, s);
          }
        }
        setColor(t) {
          this.color.setFromColor(t);
        }
        setColorWith(t, e, s, i) {
          this.color.set(t, e, s, i);
        }
        point(t, s, i) {
          this.check(e.DY.Point, 1),
            i || (i = this.color),
            this.vertex(t, s, i);
        }
        line(t, s, i, r, n) {
          this.check(e.DY.Line, 2),
            this.mesh.getVertices(),
            this.vertexIndex,
            n || (n = this.color),
            this.vertex(t, s, n),
            this.vertex(i, r, n);
        }
        triangle(t, s, i, r, n, a, h, o, l, c) {
          this.check(t ? e.DY.Filled : e.DY.Line, 3),
            this.mesh.getVertices(),
            this.vertexIndex,
            o || (o = this.color),
            l || (l = this.color),
            c || (c = this.color),
            t
              ? (this.vertex(s, i, o),
                this.vertex(r, n, l),
                this.vertex(a, h, c))
              : (this.vertex(s, i, o),
                this.vertex(r, n, l),
                this.vertex(r, n, o),
                this.vertex(a, h, l),
                this.vertex(a, h, o),
                this.vertex(s, i, l));
        }
        quad(t, s, i, r, n, a, h, o, l, c, d, u, m) {
          this.check(t ? e.DY.Filled : e.DY.Line, 3),
            this.mesh.getVertices(),
            this.vertexIndex,
            c || (c = this.color),
            d || (d = this.color),
            u || (u = this.color),
            m || (m = this.color),
            t
              ? (this.vertex(s, i, c),
                this.vertex(r, n, d),
                this.vertex(a, h, u),
                this.vertex(a, h, u),
                this.vertex(o, l, m),
                this.vertex(s, i, c))
              : (this.vertex(s, i, c),
                this.vertex(r, n, d),
                this.vertex(r, n, d),
                this.vertex(a, h, u),
                this.vertex(a, h, u),
                this.vertex(o, l, m),
                this.vertex(o, l, m),
                this.vertex(s, i, c));
        }
        rect(t, e, s, i, r, n) {
          this.quad(t, e, s, e + i, s, e + i, s + r, e, s + r, n, n, n, n);
        }
        rectLine(t, s, i, r, n, a, h) {
          this.check(t ? e.DY.Filled : e.DY.Line, 8), h || (h = this.color);
          let o = this.tmp.set(n - i, s - r);
          o.normalize(), (a *= 0.5);
          let l = o.x * a,
            c = o.y * a;
          t
            ? (this.vertex(s + l, i + c, h),
              this.vertex(s - l, i - c, h),
              this.vertex(r + l, n + c, h),
              this.vertex(r - l, n - c, h),
              this.vertex(r + l, n + c, h),
              this.vertex(s - l, i - c, h))
            : (this.vertex(s + l, i + c, h),
              this.vertex(s - l, i - c, h),
              this.vertex(r + l, n + c, h),
              this.vertex(r - l, n - c, h),
              this.vertex(r + l, n + c, h),
              this.vertex(s + l, i + c, h),
              this.vertex(r - l, n - c, h),
              this.vertex(s - l, i - c, h));
        }
        x(t, e, s) {
          this.line(t - s, e - s, t + s, e + s),
            this.line(t - s, e + s, t + s, e - s);
        }
        polygon(t, s, i, r) {
          if (i < 3)
            throw new Error("Polygon must contain at least 3 vertices");
          this.check(e.DY.Line, 2 * i),
            r && (r = this.color),
            this.mesh.getVertices(),
            this.vertexIndex,
            (i <<= 1);
          let n = t[(s <<= 1)],
            a = t[s + 1],
            h = s + i;
          for (let e = s, o = s + i - 2; e < o; e += 2) {
            let s = t[e],
              i = t[e + 1],
              o = 0,
              l = 0;
            e + 2 >= h ? ((o = n), (l = a)) : ((o = t[e + 2]), (l = t[e + 3])),
              this.vertex(s, i, r),
              this.vertex(o, l, r);
          }
        }
        circle(t, s, i, r, a, h = 0) {
          if ((0 == h && (h = Math.max(1, (6 * n.cbrt(r)) | 0)), h <= 0))
            throw new Error("segments must be > 0.");
          a || (a = this.color);
          let o = (2 * n.PI) / h,
            l = Math.cos(o),
            c = Math.sin(o),
            d = r,
            u = 0;
          if (t) {
            this.check(e.DY.Filled, 3 * h + 3), h--;
            for (let t = 0; t < h; t++) {
              this.vertex(s, i, a), this.vertex(s + d, i + u, a);
              let t = d;
              (d = l * d - c * u),
                (u = c * t + l * u),
                this.vertex(s + d, i + u, a);
            }
            this.vertex(s, i, a), this.vertex(s + d, i + u, a);
          } else {
            this.check(e.DY.Line, 2 * h + 2);
            for (let t = 0; t < h; t++) {
              this.vertex(s + d, i + u, a);
              let t = d;
              (d = l * d - c * u),
                (u = c * t + l * u),
                this.vertex(s + d, i + u, a);
            }
            this.vertex(s + d, i + u, a);
          }
          (d = r), (u = 0), this.vertex(s + d, i + u, a);
        }
        curve(t, s, i, r, n, a, h, o, l, c) {
          this.check(e.DY.Line, 2 * l + 2), c && (c = this.color);
          let d = 1 / l,
            u = d * d,
            m = d * d * d,
            f = 3 * d,
            g = 3 * u,
            p = 6 * u,
            x = 6 * m,
            b = t - 2 * i + n,
            w = s - 2 * r + a,
            v = 3 * (i - n) - t + h,
            y = 3 * (r - a) - s + o,
            A = t,
            Y = s,
            C = (i - t) * f + b * g + v * m,
            S = (r - s) * f + w * g + y * m,
            E = b * p + v * x,
            M = w * p + y * x,
            T = v * x,
            k = y * x;
          for (; l-- > 0; )
            this.vertex(A, Y, c),
              (A += C),
              (Y += S),
              (C += E),
              (S += M),
              (E += T),
              (M += k),
              this.vertex(A, Y, c);
          this.vertex(A, Y, c), this.vertex(h, o, c);
        }
        vertex(t, e, s) {
          let i = this.vertexIndex,
            r = this.mesh.getVertices();
          (r[i++] = t),
            (r[i++] = e),
            (r[i++] = s.r),
            (r[i++] = s.g),
            (r[i++] = s.b),
            (r[i++] = s.a),
            (this.vertexIndex = i);
        }
        end() {
          if (!this.isDrawing)
            throw new Error("ShapeRenderer.begin() has not been called");
          this.flush();
          let t = this.context.gl;
          t.disable(t.BLEND), (this.isDrawing = !1);
        }
        flush() {
          if (0 != this.vertexIndex) {
            if (!this.shader) throw new Error("No shader set.");
            this.mesh.setVerticesLength(this.vertexIndex),
              this.mesh.draw(this.shader, this.shapeType),
              (this.vertexIndex = 0);
          }
        }
        check(t, e) {
          if (!this.isDrawing)
            throw new Error("ShapeRenderer.begin() has not been called");
          if (this.shapeType == t) {
            if (!(this.mesh.maxVertices() - this.mesh.numVertices() < e))
              return;
            this.flush();
          } else this.flush(), (this.shapeType = t);
        }
        dispose() {
          this.mesh.dispose();
        }
      }
      (e.DY = void 0),
        ((Es = e.DY || (e.DY = {}))[(Es.Point = 0)] = "Point"),
        (Es[(Es.Line = 1)] = "Line"),
        (Es[(Es.Filled = 4)] = "Filled");
      class ks {
        constructor(t) {
          (this.boneLineColor = new r(1, 0, 0, 1)),
            (this.boneOriginColor = new r(0, 1, 0, 1)),
            (this.attachmentLineColor = new r(0, 0, 1, 0.5)),
            (this.triangleLineColor = new r(1, 0.64, 0, 0.5)),
            (this.pathColor = new r().setFromString("FF7F00")),
            (this.clipColor = new r(0.8, 0, 0, 2)),
            (this.aabbColor = new r(0, 1, 0, 0.5)),
            (this.drawBones = !0),
            (this.drawRegionAttachments = !0),
            (this.drawBoundingBoxes = !0),
            (this.drawMeshHull = !0),
            (this.drawMeshTriangles = !0),
            (this.drawPaths = !0),
            (this.drawSkeletonXY = !1),
            (this.drawClipping = !0),
            (this.premultipliedAlpha = !1),
            (this.scale = 1),
            (this.boneWidth = 2),
            (this.bounds = new Be()),
            (this.temp = new Array()),
            (this.vertices = o.newFloatArray(2048)),
            (this.context = t instanceof je ? t : new je(t));
        }
        draw(t, e, s) {
          let i = e.x,
            r = e.y,
            n = this.context.gl,
            a = this.premultipliedAlpha ? n.ONE : n.SRC_ALPHA;
          t.setBlendMode(a, n.ONE, n.ONE_MINUS_SRC_ALPHA);
          let h = e.bones;
          if (this.drawBones) {
            t.setColor(this.boneLineColor);
            for (let e = 0, i = h.length; e < i; e++) {
              let i = h[e];
              if (s && s.indexOf(i.data.name) > -1) continue;
              if (!i.parent) continue;
              let r = i.data.length * i.a + i.worldX,
                n = i.data.length * i.c + i.worldY;
              t.rectLine(
                !0,
                i.worldX,
                i.worldY,
                r,
                n,
                this.boneWidth * this.scale
              );
            }
            this.drawSkeletonXY && t.x(i, r, 4 * this.scale);
          }
          if (this.drawRegionAttachments) {
            t.setColor(this.attachmentLineColor);
            let s = e.slots;
            for (let e = 0, i = s.length; e < i; e++) {
              let i = s[e],
                r = i.getAttachment();
              if (r instanceof zt) {
                let e = r,
                  s = this.vertices;
                e.computeWorldVertices(i, s, 0, 2),
                  t.line(s[0], s[1], s[2], s[3]),
                  t.line(s[2], s[3], s[4], s[5]),
                  t.line(s[4], s[5], s[6], s[7]),
                  t.line(s[6], s[7], s[0], s[1]);
              }
            }
          }
          if (this.drawMeshHull || this.drawMeshTriangles) {
            let s = e.slots;
            for (let e = 0, i = s.length; e < i; e++) {
              let i = s[e];
              if (!i.bone.active) continue;
              let r = i.getAttachment();
              if (!(r instanceof Nt)) continue;
              let n = r,
                a = this.vertices;
              n.computeWorldVertices(i, 0, n.worldVerticesLength, a, 0, 2);
              let h = n.triangles,
                o = n.hullLength;
              if (this.drawMeshTriangles) {
                t.setColor(this.triangleLineColor);
                for (let e = 0, s = h.length; e < s; e += 3) {
                  let s = 2 * h[e],
                    i = 2 * h[e + 1],
                    r = 2 * h[e + 2];
                  t.triangle(
                    !1,
                    a[s],
                    a[s + 1],
                    a[i],
                    a[i + 1],
                    a[r],
                    a[r + 1]
                  );
                }
              }
              if (this.drawMeshHull && o > 0) {
                t.setColor(this.attachmentLineColor), (o = 2 * (o >> 1));
                let e = a[o - 2],
                  s = a[o - 1];
                for (let i = 0, r = o; i < r; i += 2) {
                  let r = a[i],
                    n = a[i + 1];
                  t.line(r, n, e, s), (e = r), (s = n);
                }
              }
            }
          }
          if (this.drawBoundingBoxes) {
            let s = this.bounds;
            s.update(e, !0),
              t.setColor(this.aabbColor),
              t.rect(!1, s.minX, s.minY, s.getWidth(), s.getHeight());
            let i = s.polygons,
              r = s.boundingBoxes;
            for (let e = 0, n = i.length; e < n; e++) {
              let s = i[e];
              t.setColor(r[e].color), t.polygon(s, 0, s.length);
            }
          }
          if (this.drawPaths) {
            let s = e.slots;
            for (let e = 0, i = s.length; e < i; e++) {
              let i = s[e];
              if (!i.bone.active) continue;
              let r = i.getAttachment();
              if (!(r instanceof Ut)) continue;
              let n = r,
                a = n.worldVerticesLength,
                h = (this.temp = o.setArraySize(this.temp, a, 0));
              n.computeWorldVertices(i, 0, a, h, 0, 2);
              let l = this.pathColor,
                c = h[2],
                d = h[3],
                u = 0,
                m = 0;
              if (n.closed) {
                t.setColor(l);
                let e = h[0],
                  s = h[1],
                  i = h[a - 2],
                  r = h[a - 1];
                (u = h[a - 4]),
                  (m = h[a - 3]),
                  t.curve(c, d, e, s, i, r, u, m, 32),
                  t.setColor(ks.LIGHT_GRAY),
                  t.line(c, d, e, s),
                  t.line(u, m, i, r);
              }
              a -= 4;
              for (let e = 4; e < a; e += 6) {
                let s = h[e],
                  i = h[e + 1],
                  r = h[e + 2],
                  n = h[e + 3];
                (u = h[e + 4]),
                  (m = h[e + 5]),
                  t.setColor(l),
                  t.curve(c, d, s, i, r, n, u, m, 32),
                  t.setColor(ks.LIGHT_GRAY),
                  t.line(c, d, s, i),
                  t.line(u, m, r, n),
                  (c = u),
                  (d = m);
              }
            }
          }
          if (this.drawBones) {
            t.setColor(this.boneOriginColor);
            for (let e = 0, i = h.length; e < i; e++) {
              let i = h[e];
              (s && s.indexOf(i.data.name) > -1) ||
                t.circle(!0, i.worldX, i.worldY, 3 * this.scale, ks.GREEN, 8);
            }
          }
          if (this.drawClipping) {
            let s = e.slots;
            t.setColor(this.clipColor);
            for (let e = 0, i = s.length; e < i; e++) {
              let i = s[e];
              if (!i.bone.active) continue;
              let r = i.getAttachment();
              if (!(r instanceof Et)) continue;
              let n = r,
                a = n.worldVerticesLength,
                h = (this.temp = o.setArraySize(this.temp, a, 0));
              n.computeWorldVertices(i, 0, a, h, 0, 2);
              for (let e = 0, s = h.length; e < s; e += 2) {
                let s = h[e],
                  i = h[e + 1],
                  r = h[(e + 2) % h.length],
                  n = h[(e + 3) % h.length];
                t.line(s, i, r, n);
              }
            }
          }
        }
        dispose() {}
      }
      (ks.LIGHT_GRAY = new r(192 / 255, 192 / 255, 192 / 255, 1)),
        (ks.GREEN = new r(0, 1, 0, 1));
      class Is {
        constructor(t, e, s) {
          (this.vertices = t), (this.numVertices = e), (this.numFloats = s);
        }
      }
      class Rs {
        constructor(t, e = !0) {
          (this.premultipliedAlpha = !1),
            (this.tempColor = new r()),
            (this.tempColor2 = new r()),
            (this.vertexSize = 8),
            (this.twoColorTint = !1),
            (this.renderable = new Is([], 0, 0)),
            (this.clipper = new Oe()),
            (this.temp = new c()),
            (this.temp2 = new c()),
            (this.temp3 = new r()),
            (this.temp4 = new r()),
            (this.twoColorTint = e),
            e && (this.vertexSize += 4),
            (this.vertices = o.newFloatArray(1024 * this.vertexSize));
        }
        draw(t, e, s = -1, i = -1) {
          let r = this.clipper,
            n = this.premultipliedAlpha,
            a = this.twoColorTint,
            h = null;
          this.temp, this.temp2, this.temp3, this.temp4;
          let l,
            c,
            d,
            u = this.renderable,
            m = e.drawOrder,
            f = e.color,
            g = a ? 12 : 8,
            p = !1;
          -1 == s && (p = !0);
          for (let x = 0, b = m.length; x < b; x++) {
            let e = r.isClipping() ? 2 : g,
              b = m[x];
            if (!b.bone.active) {
              r.clipEndWithSlot(b);
              continue;
            }
            if ((s >= 0 && s == b.data.index && (p = !0), !p)) {
              r.clipEndWithSlot(b);
              continue;
            }
            i >= 0 && i == b.data.index && (p = !1);
            let w,
              v = b.getAttachment();
            if (v instanceof zt) {
              let t = v;
              (u.vertices = this.vertices),
                (u.numVertices = 4),
                (u.numFloats = e << 2),
                t.computeWorldVertices(b, u.vertices, 0, e),
                (c = Rs.QUAD_TRIANGLES),
                (l = t.uvs),
                (w = t.region.renderObject.page.texture),
                (d = t.color);
            } else {
              if (!(v instanceof Nt)) {
                if (v instanceof Et) {
                  let t = v;
                  r.clipStart(b, t);
                  continue;
                }
                r.clipEndWithSlot(b);
                continue;
              }
              {
                let t = v;
                (u.vertices = this.vertices),
                  (u.numVertices = t.worldVerticesLength >> 1),
                  (u.numFloats = u.numVertices * e),
                  u.numFloats > u.vertices.length &&
                    (u.vertices = this.vertices = o.newFloatArray(u.numFloats)),
                  t.computeWorldVertices(
                    b,
                    0,
                    t.worldVerticesLength,
                    u.vertices,
                    0,
                    e
                  ),
                  (c = t.triangles),
                  (w = t.region.renderObject.page.texture),
                  (l = t.uvs),
                  (d = t.color);
              }
            }
            if (w) {
              let e = b.color,
                s = this.tempColor;
              (s.r = f.r * e.r * d.r),
                (s.g = f.g * e.g * d.g),
                (s.b = f.b * e.b * d.b),
                (s.a = f.a * e.a * d.a),
                n && ((s.r *= s.a), (s.g *= s.a), (s.b *= s.a));
              let i = this.tempColor2;
              b.darkColor
                ? (n
                    ? ((i.r = b.darkColor.r * s.a),
                      (i.g = b.darkColor.g * s.a),
                      (i.b = b.darkColor.b * s.a))
                    : i.setFromColor(b.darkColor),
                  (i.a = n ? 1 : 0))
                : i.set(0, 0, 0, 1);
              let o = b.data.blendMode;
              if (
                (o != h &&
                  ((h = o),
                  t.setBlendMode(
                    Ze.getSourceColorGLBlendMode(h, n),
                    Ze.getSourceAlphaGLBlendMode(h),
                    Ze.getDestGLBlendMode(h)
                  )),
                r.isClipping())
              ) {
                r.clipTriangles(
                  u.vertices,
                  u.numFloats,
                  c,
                  c.length,
                  l,
                  s,
                  i,
                  a
                );
                let e = new Float32Array(r.clippedVertices),
                  n = r.clippedTriangles;
                t.draw(w, e, n);
              } else {
                let e = u.vertices;
                if (a)
                  for (let t = 2, n = 0, a = u.numFloats; t < a; t += g, n += 2)
                    (e[t] = s.r),
                      (e[t + 1] = s.g),
                      (e[t + 2] = s.b),
                      (e[t + 3] = s.a),
                      (e[t + 4] = l[n]),
                      (e[t + 5] = l[n + 1]),
                      (e[t + 6] = i.r),
                      (e[t + 7] = i.g),
                      (e[t + 8] = i.b),
                      (e[t + 9] = i.a);
                else
                  for (let t = 2, i = 0, n = u.numFloats; t < n; t += g, i += 2)
                    (e[t] = s.r),
                      (e[t + 1] = s.g),
                      (e[t + 2] = s.b),
                      (e[t + 3] = s.a),
                      (e[t + 4] = l[i]),
                      (e[t + 5] = l[i + 1]);
                let r = u.vertices.subarray(0, u.numFloats);
                t.draw(w, r, c);
              }
            }
            r.clipEndWithSlot(b);
          }
          r.clipEnd();
        }
      }
      Rs.QUAD_TRIANGLES = [0, 1, 2, 2, 3, 0];
      const Xs = [
          0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0,
          0, 0, 0, 1, 1, 1, 1, 0, 0,
        ],
        Ls = [0, 1, 2, 2, 3, 0],
        Fs = new r(1, 1, 1, 1);
      class Ps {
        constructor(t, e, s = !0) {
          (this.twoColorTint = !1),
            (this.activeRenderer = null),
            (this.canvas = t),
            (this.context = e instanceof je ? e : new je(e)),
            (this.twoColorTint = s),
            (this.camera = new gs(t.width, t.height)),
            (this.batcherShader = s
              ? bs.newTwoColoredTextured(this.context)
              : bs.newColoredTextured(this.context)),
            (this.batcher = new Ms(this.context, s)),
            (this.shapesShader = bs.newColored(this.context)),
            (this.shapes = new Ts(this.context)),
            (this.skeletonRenderer = new Rs(this.context, s)),
            (this.skeletonDebugRenderer = new ks(this.context));
        }
        dispose() {
          this.batcher.dispose(),
            this.batcherShader.dispose(),
            this.shapes.dispose(),
            this.shapesShader.dispose(),
            this.skeletonDebugRenderer.dispose();
        }
        begin() {
          this.camera.update(), this.enableRenderer(this.batcher);
        }
        drawSkeleton(t, e = !1, s = -1, i = -1) {
          this.enableRenderer(this.batcher),
            (this.skeletonRenderer.premultipliedAlpha = e),
            this.skeletonRenderer.draw(this.batcher, t, s, i);
        }
        drawSkeletonDebug(t, e = !1, s) {
          this.enableRenderer(this.shapes),
            (this.skeletonDebugRenderer.premultipliedAlpha = e),
            this.skeletonDebugRenderer.draw(this.shapes, t, s);
        }
        drawTexture(t, e, s, i, r, n) {
          this.enableRenderer(this.batcher), n || (n = Fs);
          var a = 0;
          (Xs[a++] = e),
            (Xs[a++] = s),
            (Xs[a++] = n.r),
            (Xs[a++] = n.g),
            (Xs[a++] = n.b),
            (Xs[a++] = n.a),
            (Xs[a++] = 0),
            (Xs[a++] = 1),
            this.twoColorTint &&
              ((Xs[a++] = 0), (Xs[a++] = 0), (Xs[a++] = 0), (Xs[a++] = 0)),
            (Xs[a++] = e + i),
            (Xs[a++] = s),
            (Xs[a++] = n.r),
            (Xs[a++] = n.g),
            (Xs[a++] = n.b),
            (Xs[a++] = n.a),
            (Xs[a++] = 1),
            (Xs[a++] = 1),
            this.twoColorTint &&
              ((Xs[a++] = 0), (Xs[a++] = 0), (Xs[a++] = 0), (Xs[a++] = 0)),
            (Xs[a++] = e + i),
            (Xs[a++] = s + r),
            (Xs[a++] = n.r),
            (Xs[a++] = n.g),
            (Xs[a++] = n.b),
            (Xs[a++] = n.a),
            (Xs[a++] = 1),
            (Xs[a++] = 0),
            this.twoColorTint &&
              ((Xs[a++] = 0), (Xs[a++] = 0), (Xs[a++] = 0), (Xs[a++] = 0)),
            (Xs[a++] = e),
            (Xs[a++] = s + r),
            (Xs[a++] = n.r),
            (Xs[a++] = n.g),
            (Xs[a++] = n.b),
            (Xs[a++] = n.a),
            (Xs[a++] = 0),
            (Xs[a++] = 0),
            this.twoColorTint &&
              ((Xs[a++] = 0), (Xs[a++] = 0), (Xs[a++] = 0), (Xs[a] = 0)),
            this.batcher.draw(t, Xs, Ls);
        }
        drawTextureUV(t, e, s, i, r, n, a, h, o, l) {
          this.enableRenderer(this.batcher), l || (l = Fs);
          var c = 0;
          (Xs[c++] = e),
            (Xs[c++] = s),
            (Xs[c++] = l.r),
            (Xs[c++] = l.g),
            (Xs[c++] = l.b),
            (Xs[c++] = l.a),
            (Xs[c++] = n),
            (Xs[c++] = a),
            this.twoColorTint &&
              ((Xs[c++] = 0), (Xs[c++] = 0), (Xs[c++] = 0), (Xs[c++] = 0)),
            (Xs[c++] = e + i),
            (Xs[c++] = s),
            (Xs[c++] = l.r),
            (Xs[c++] = l.g),
            (Xs[c++] = l.b),
            (Xs[c++] = l.a),
            (Xs[c++] = h),
            (Xs[c++] = a),
            this.twoColorTint &&
              ((Xs[c++] = 0), (Xs[c++] = 0), (Xs[c++] = 0), (Xs[c++] = 0)),
            (Xs[c++] = e + i),
            (Xs[c++] = s + r),
            (Xs[c++] = l.r),
            (Xs[c++] = l.g),
            (Xs[c++] = l.b),
            (Xs[c++] = l.a),
            (Xs[c++] = h),
            (Xs[c++] = o),
            this.twoColorTint &&
              ((Xs[c++] = 0), (Xs[c++] = 0), (Xs[c++] = 0), (Xs[c++] = 0)),
            (Xs[c++] = e),
            (Xs[c++] = s + r),
            (Xs[c++] = l.r),
            (Xs[c++] = l.g),
            (Xs[c++] = l.b),
            (Xs[c++] = l.a),
            (Xs[c++] = n),
            (Xs[c++] = o),
            this.twoColorTint &&
              ((Xs[c++] = 0), (Xs[c++] = 0), (Xs[c++] = 0), (Xs[c] = 0)),
            this.batcher.draw(t, Xs, Ls);
        }
        drawTextureRotated(t, e, s, i, r, a, h, o, l) {
          this.enableRenderer(this.batcher), l || (l = Fs);
          let c = e + a,
            d = s + h,
            u = -a,
            m = -h,
            f = i - a,
            g = r - h,
            p = u,
            x = m,
            b = u,
            w = g,
            v = f,
            y = g,
            A = f,
            Y = m,
            C = 0,
            S = 0,
            E = 0,
            M = 0,
            T = 0,
            k = 0,
            I = 0,
            R = 0;
          if (0 != o) {
            let t = n.cosDeg(o),
              e = n.sinDeg(o);
            (C = t * p - e * x),
              (S = e * p + t * x),
              (I = t * b - e * w),
              (R = e * b + t * w),
              (T = t * v - e * y),
              (k = e * v + t * y),
              (E = T + (C - I)),
              (M = k + (S - R));
          } else
            (C = p),
              (S = x),
              (I = b),
              (R = w),
              (T = v),
              (k = y),
              (E = A),
              (M = Y);
          (C += c),
            (S += d),
            (E += c),
            (M += d),
            (T += c),
            (k += d),
            (I += c),
            (R += d);
          var X = 0;
          (Xs[X++] = C),
            (Xs[X++] = S),
            (Xs[X++] = l.r),
            (Xs[X++] = l.g),
            (Xs[X++] = l.b),
            (Xs[X++] = l.a),
            (Xs[X++] = 0),
            (Xs[X++] = 1),
            this.twoColorTint &&
              ((Xs[X++] = 0), (Xs[X++] = 0), (Xs[X++] = 0), (Xs[X++] = 0)),
            (Xs[X++] = E),
            (Xs[X++] = M),
            (Xs[X++] = l.r),
            (Xs[X++] = l.g),
            (Xs[X++] = l.b),
            (Xs[X++] = l.a),
            (Xs[X++] = 1),
            (Xs[X++] = 1),
            this.twoColorTint &&
              ((Xs[X++] = 0), (Xs[X++] = 0), (Xs[X++] = 0), (Xs[X++] = 0)),
            (Xs[X++] = T),
            (Xs[X++] = k),
            (Xs[X++] = l.r),
            (Xs[X++] = l.g),
            (Xs[X++] = l.b),
            (Xs[X++] = l.a),
            (Xs[X++] = 1),
            (Xs[X++] = 0),
            this.twoColorTint &&
              ((Xs[X++] = 0), (Xs[X++] = 0), (Xs[X++] = 0), (Xs[X++] = 0)),
            (Xs[X++] = I),
            (Xs[X++] = R),
            (Xs[X++] = l.r),
            (Xs[X++] = l.g),
            (Xs[X++] = l.b),
            (Xs[X++] = l.a),
            (Xs[X++] = 0),
            (Xs[X++] = 0),
            this.twoColorTint &&
              ((Xs[X++] = 0), (Xs[X++] = 0), (Xs[X++] = 0), (Xs[X] = 0)),
            this.batcher.draw(t, Xs, Ls);
        }
        drawRegion(t, e, s, i, r, n) {
          this.enableRenderer(this.batcher), n || (n = Fs);
          var a = 0;
          (Xs[a++] = e),
            (Xs[a++] = s),
            (Xs[a++] = n.r),
            (Xs[a++] = n.g),
            (Xs[a++] = n.b),
            (Xs[a++] = n.a),
            (Xs[a++] = t.u),
            (Xs[a++] = t.v2),
            this.twoColorTint &&
              ((Xs[a++] = 0), (Xs[a++] = 0), (Xs[a++] = 0), (Xs[a++] = 0)),
            (Xs[a++] = e + i),
            (Xs[a++] = s),
            (Xs[a++] = n.r),
            (Xs[a++] = n.g),
            (Xs[a++] = n.b),
            (Xs[a++] = n.a),
            (Xs[a++] = t.u2),
            (Xs[a++] = t.v2),
            this.twoColorTint &&
              ((Xs[a++] = 0), (Xs[a++] = 0), (Xs[a++] = 0), (Xs[a++] = 0)),
            (Xs[a++] = e + i),
            (Xs[a++] = s + r),
            (Xs[a++] = n.r),
            (Xs[a++] = n.g),
            (Xs[a++] = n.b),
            (Xs[a++] = n.a),
            (Xs[a++] = t.u2),
            (Xs[a++] = t.v),
            this.twoColorTint &&
              ((Xs[a++] = 0), (Xs[a++] = 0), (Xs[a++] = 0), (Xs[a++] = 0)),
            (Xs[a++] = e),
            (Xs[a++] = s + r),
            (Xs[a++] = n.r),
            (Xs[a++] = n.g),
            (Xs[a++] = n.b),
            (Xs[a++] = n.a),
            (Xs[a++] = t.u),
            (Xs[a++] = t.v),
            this.twoColorTint &&
              ((Xs[a++] = 0), (Xs[a++] = 0), (Xs[a++] = 0), (Xs[a] = 0)),
            this.batcher.draw(t.page.texture, Xs, Ls);
        }
        line(t, e, s, i, r, n) {
          this.enableRenderer(this.shapes), this.shapes.line(t, e, s, i, r);
        }
        triangle(t, e, s, i, r, n, a, h, o, l) {
          this.enableRenderer(this.shapes),
            this.shapes.triangle(t, e, s, i, r, n, a, h, o, l);
        }
        quad(t, e, s, i, r, n, a, h, o, l, c, d, u) {
          this.enableRenderer(this.shapes),
            this.shapes.quad(t, e, s, i, r, n, a, h, o, l, c, d, u);
        }
        rect(t, e, s, i, r, n) {
          this.enableRenderer(this.shapes), this.shapes.rect(t, e, s, i, r, n);
        }
        rectLine(t, e, s, i, r, n, a) {
          this.enableRenderer(this.shapes),
            this.shapes.rectLine(t, e, s, i, r, n, a);
        }
        polygon(t, e, s, i) {
          this.enableRenderer(this.shapes), this.shapes.polygon(t, e, s, i);
        }
        circle(t, e, s, i, r, n = 0) {
          this.enableRenderer(this.shapes),
            this.shapes.circle(t, e, s, i, r, n);
        }
        curve(t, e, s, i, r, n, a, h, o, l) {
          this.enableRenderer(this.shapes),
            this.shapes.curve(t, e, s, i, r, n, a, h, o, l);
        }
        end() {
          this.activeRenderer === this.batcher
            ? this.batcher.end()
            : this.activeRenderer === this.shapes && this.shapes.end(),
            (this.activeRenderer = null);
        }
        resize(t) {
          let s = this.canvas;
          var i = window.devicePixelRatio || 1,
            r = Math.round(s.clientWidth * i),
            n = Math.round(s.clientHeight * i);
          if (
            ((s.width == r && s.height == n) || ((s.width = r), (s.height = n)),
            this.context.gl.viewport(0, 0, s.width, s.height),
            t === e.Pf.Expand)
          )
            this.camera.setViewport(r, n);
          else if (t === e.Pf.Fit) {
            let t = s.width,
              e = s.height,
              i = this.camera.viewportWidth,
              r = this.camera.viewportHeight,
              n = r / i < e / t ? i / t : r / e;
            this.camera.setViewport(t * n, e * n);
          }
          this.camera.update();
        }
        enableRenderer(t) {
          this.activeRenderer !== t &&
            (this.end(),
            t instanceof Ms
              ? (this.batcherShader.bind(),
                this.batcherShader.setUniform4x4f(
                  bs.MVP_MATRIX,
                  this.camera.projectionView.values
                ),
                this.batcherShader.setUniformi("u_texture", 0),
                this.batcher.begin(this.batcherShader),
                (this.activeRenderer = this.batcher))
              : t instanceof Ts
              ? (this.shapesShader.bind(),
                this.shapesShader.setUniform4x4f(
                  bs.MVP_MATRIX,
                  this.camera.projectionView.values
                ),
                this.shapes.begin(this.shapesShader),
                (this.activeRenderer = this.shapes))
              : (this.activeRenderer = this.skeletonDebugRenderer));
        }
      }
      var qs;
      let Ds, Bs;
      (e.Pf = void 0),
        ((qs = e.Pf || (e.Pf = {}))[(qs.Stretch = 0)] = "Stretch"),
        (qs[(qs.Expand = 1)] = "Expand"),
        (qs[(qs.Fit = 2)] = "Fit");
      let Vs = 0;
      const Os = 163;
      let Ns =
          "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAKMAAACjCAYAAADmbK6AAAALKElEQVR42u2de2iW5R/GPzuqcwfnnKfNmafl5tTNHWzqNi3DEMQykcAoJSsySkspjSIk0iD/07Kf4R+FnVBDUTshZGpWUEJaaiWFgZlUFmXmIe3HNXthyebeZ77P9H13ffBG8Y8H7ut7vff93N/7fu4vGGPiFZiez/Qtw9lytJajfzfw9z/j+efPOv7cV8W+lUNY2a8T/ayTCRsWFLJA5rtUO1LLkV5p9LJeJizQiHeqnlOtmVFtdTGrrZkJCxYXsTgaI6r9MY4/UpNItW4mFDaXsTlaM6qVZlBq3UwofFrJp0HMWJ9DvXUzobCznJ1BzFjWlTLrZkJh/TDWBzFjTgo51s2EgnKI0Rrx+FiOWzNzVaym91Syx5qZsGBWb2ZFa0ZN6dbMhAWTcpkUrRmXD2K5NTNhgVbH0Zpxbl/mWjMTFvRIo0e0ZpzcncnWzISKtvmiMWNRJ4qslwmVXRXsas2Ix8ZwzFqZsGFREYtaM+Oaa1ljrUzYkJ9G/ok6TlzKjJWZVFor0y7c1Zu7WjLiqiGsskamXdHopyT4vALmzS9k/t19uHtKHlOSIMn6xAtARjIZ1sFcUSZ0Y4La+G6M18hS2IlCn4a+WoC0JNL0d/dUupdnUj40g6EJ2VEdMnhrOG/p5f/jUXz8SgmvaGU6KpNRNsLVQV0OdXf24s63h/P2gWoOrBjMCr2GJFQnnxnIM3q5P1PPmaYv+4ev4/C6UtbpV2gzXCkgL5W8Bwt48OIc6ul6Tp+s4+SyASxLiI4+PYCn1bHzDZxvaQW6vZzto7MYnQIpNkf7kp5EuozYUroqEjcNKHHd0Tl9mBPN1pk+hFeieGBnBtog7UXjsj9pWg+m6duecw2cay1OC/uxMC47KmP9OIYfoz1YoC20J/rzRG4quTZK2EAyJGs20qwUbYw0aNRmUxtvfUW/uEtNzc1NB1/X8LVyd15hh82F43AvD+VlXcsSJEZa1CQ3ejleAO7oxR3RDP0XN91X4+NXYb8nkv7UNTwV7e0YTdu7I3g33t7tuaEbNwSZpps2fSyvs4M2Tjhot+jb0Xzbltj8r5j/xVt/6Z1Ob93U1ZYO691EhhzchcHeXosVjcNZysyezLw4xRZt05R+fTeuj8vOj+zKyG0j2aZcVVs6v+QalnjrMFZASQYl2nBoSyz06e3j/Xk8rgWYmMvEICu2pm1HOTuc7okV8FgRj0XukwzanhvCc/F+72TjoQjdObN1OFuDLmh0xP+WHtxiI10ukJlCprb4guiv1fP+avZrS1C7NAkliHZjDtZwMMgqbukAltpMlwuMy2FcEBPqvfLLar5Uqi0hBdEwryy+Mv5n6zkbjTBa+dlMlwvUZFETZKGiFM7tvbhdJ3gSVRO0wzIjnxmvl/J6a6JsGMYGrahtpssFeqbR841S3mhN80OjOaSDEdqd6SjaMKgzgzRK7q1ib3PT9sYyNo7JZoyNFNvRcVMZmy7WOvIuryv/Zvdmdt90+nY0bRp3AvROohFwdwW7dTG7RFlbwlqdrbOBYg005NAQmZU0HWt1rXMBH1Xw0dQ8pmqzoaPmdhun7bHZjNVe9qP9eFQfO1VkUmHjhAVUZ1GtnKFSbjrkrPfy4i4UW5t/6ZxM54J0CqxFe81KpGsQyE4h23oYY4wxxhhjjDHGGGOMMcYYY4wxxhhjjDHGGGOMMcYYY4wxxhhjjDHGGGOMMcYYY4wxxhhjjLna+bdOy+IiFquIpGq16Pb79cNYv3IIK/X/ugx+Ui6TVKvYVU9Nc8gX8od8Ir/IN/KPfCQ/yVfyl/6/pfJvLChkQdD6wyqntquCXYuKWJSfRr6D0dEAxV3xlw/khyD+kd/ku/88cHo+09tS3LBpO1HHCVUqcIA6CqB4K+6X6x35L/JM2loXurlWmUmlA5XogOIcK8/If5HncrSWo7F6cKIWPjT/RXGOlWfkv8hzaWsN4uaaysE6WIkOKM6x8oz8F3kusXqo2vxC5jtYiQ4ozrH0TeS5qIZcrB7qkrwdA8U5Vp6R/yLPZV8V+2L14Cl5THGwEh1QnGPlGfkv8lyUlIzFQ1cNYVVHrcjZ0VCcFe9Y+Eb+izy3ceclUl43aFN52DXXssYpnY6a4qFS8ZcP2uIf+e7inRh6pdFrdTGrm8uiHx/L8T2V7NGWzvJBLJ/bl7mTuzO5qBNFDoiJID/IF/KHfCK/yDfyT3O7d/KbfNfS80hNIrU0g9L6HOq1x5iTQo6FNpeLfCQ/yVfyl3xmXYwxxhhjjDHGGGOMMcYYY4wxxhhjjDHGGGOMMcYYY4wxxhhjjDHGGGOMMcYYY4wxxhhjjDHNk9z4JwJ0SqKTdQkbyEwhU393T6V7zzR6pieR3tE1ITeVXImhe6BXDGZFdRbVeank2TBhcaEMr0rwbixj49IBLL2/L/ffmMuNHfqO9tFZjJYBd1ewO3Lx+IcVfKhqna5nHZYR6XFPH+5R3eeI5t9fx/fvjeC9Jdew5OKZKqFR/RDVKL6vL/f9PJafmyvHsL+a/ff24V6NmjZQbGchVbY6UM2BluqHv1rCqzVZ1KQlkZboepCdQvacPsz5bjTfXao+yMEaDt7Wk9tSIMVGig3TejCtJSM2bSpkPjWPqd1S6Zao+lORSYWmgkOjORRNwZqd5ezMSiHLRooNr5XwWjS6/1XHX9vL2T67N7M1iyXa9JCrYjVrS1gbpJyw6hBfsmiNCYT0P9/A+Wj1/6qGr5YNYFlJBiWJogEzezLz/ZG8/9s4fgtSyuvNYbyp1IONFBtu7sHNv4/j9yAxUHWrdaWsG9+N8XHd+YxkMpSy+aySz841cC5oXbmHCnnI74yxAgZ3YbDeB4PEQCOpBpFNZWwa2ZWRcdnxLsl00crtRB0n2lLg8JNRfDKoM4NsolgBSmw/UMADba1+qpmqfyf6x1u/0a/og3I+aEunP6/i86osqmygcGarF4p54dex/Bo0LqfqOfVwIQ/HW5/RSkwV1oN2WLlHTc82TljAwM4M1O5LWwYKZTjibYXNS0N5KcjKTe10PadfLObFuJwK4ozp+UzXDBTUjL+M5ZcBnRkQV53dMIwNQTu6bSTbVEzbi5awuVByd2E/FgaN0Tc1fKOzBHHV2aAdVSdv6s5NNkp7cSH/++xAng2yyHx+CM/H21YhfdPp+0U1X0TbSZnXx8faG9Aop0MS0cToh1p+iLcpOkLj9t/JOk5eqoPHxnDsyf486an5yqCDK7XZ1O4oZ4dWyy3FSXHUAYq47uyYbMZoGmhpG3DlEFb6uNiVBhpyaHhnBO8oJmfqOROJjzIiP43hJ8UxITqqX56S2Hur2KsOnq3nrE6PPNKPRwrSKbAZrjTQNZmuE7oxYXMZmxWbw9dxWFu4W4ezVedOE6qzI7oyYkY+M7TPeWsPbk2UX1qioSN+E3OZqOR2cReKE+qQRFN0Pi7y73g/UawU1KzezJpXwLz5hczX1ueUPKYkNb6GJQZ+j7/aAfRZREsv+quGsMoamXZBW2Gt5eU0alorEzYsKmJRa/m4NdeyxlqZsCGa84DKnVorEzboC7podis69DfIJmwufHMc7famvvmxZiYsKOtKWbRm1OcW1syEBboSJFozLh/EcmtmwgIluaM14/phrLdmJixYXMTiaM24p5I91syEBTphFOR7Y2tmwgJNvUFOr+tov3UzoaAv44KYUatv62ZCoemdhtG0+hzqrZsJBR08DWLG0gxKrZu50qvpxos3U5NItW4mFPp1ot+lPlpq2lYXs9qamVBZUMiC1ox4pJYjvlfStAu6GmTLcLboMtPIV4/6im5fFfuUi9QIap2MiWP+D96R1vPmsD/fAAAAAElFTkSuQmCC",
        Us =
          "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAKUAAABsCAYAAAALzHKmAAAQ7klEQVR42u3da4xdVRUA4D0zd2Y6nZY59DVtZ1puS9+lzC0YAi2UQ8AAQczFpPgA9VIeIQbirRqJ0cBUBVGjDr/QCKSNRSMmpuODxAdxqhgwxkhFjf6Sxh/+UUNVNGJCzR7uTvas7LXX2q9zzp3em6y0gTN3Zu75utZe5+yztxC9V+/Ve5X9En1Vjd7J6SFbLNF7naPw+l2jh7YHMBWssqMHtlsRdim4qsLtIawaPiHEQOLoNrA9iIkQDnRrVA1qD2LZ8ISoxYqKo13sQAtBWBayQWZUAXGRQM9JjCngDVY0UqJNDbQrMcaGmArdUKpIjbYiQLsCZCyIMQBy8QwnilR4Q5AuCpxFYvRFmBLbEiwKwpsSaWycVQGZBKMrwBjA9BhxDe57u2L2hOoKNCbOrgAZitEVYUxoKSMErQvSxYIzCkguRg5EF4AUhqUlhy/YUKSxcRaKsioYOQhD4I0yYxkR3PcJBcuFysmgsXAWBTMJyBCMIQh9kGGxXIXvexCQXbHGAMrBWTbM2CCpMSMLIxehC77lSJwXGth7M0FzoVJIXXDWQnGmhOkL0ic7YhhtWdGGkAuPAjUWGoF4faCmwBkbZmyUqUCyMqMLRA4+E6IsdTjidUHKBYrh9CnpRcH0ypKxsyOGEYNIIeTCOz91OIJ1QYoB5eAMyZo+MFNnyVTZ0YiRC9EGEMOyAgshxErHsL2XK1gOUgwohtM1a5YNM7Rsu4K0ZkcbRm4mpPBRwFZ5hg9eCqkrUB+csWGGogzNkqEgrdnRhpGLkINudaLgwvVB6oqzCjCTZElb2Y4B0gUjBtEG0ARnDRLjjoG9DwcshtQGlIPTljVjwUySLWNkyRCQVHa0ZUUTRAwgF91a33BEy0VKAcVwwqwZC2bqbOlUurllOxQkJzNyINoAYqjWhYYjWg5SCiiG05Q1U8FMjTIoS8YE6YORi1BHtJ4KIcQEEtTXUWAxpK44YVlPBdO1jCdFWTZIE8bVGEYMIRPcZGBw4HKQcoBiOE1ZMzbMgVQwU6JMAdKEEcuIJogUvg1YCCE2gsCO42DlIIVAKZwpYJaSLVNnSU6XjYHUmxhTmXaFaMO3EYkLqMC+FsLlIoVAKZzMrEnBhJeLfLNlKMrYWRIDCbOkFSSVHbHM6AKRC6/ODUewNqQ+OLlZkxpjUmV8MBbMUJSxyzY3Q1IgTRgxiBRCHdem0KDAUkBh9sRwwjEnAXMMgTnKhFlUtiwkS5rGka4g9SaGgxFmRC7AzTCEEBcyA36dDSsXqAtOLkysjGMwY5XxVChjZ0kuSCo7YlkRQsQQYtDEFsegsLoCxUp7Kpgps2UslFGzJGccSYHUmxhOZqwzEZqAbfUMCisHKIZzgsCpl3MTzMwTpi1bYp2477gyFKUxS7qWbdjY2EBS2dGE0QQRA7gNCyHEdhjE8RhUDlBT9tzgmjWZMFNlSy+Urk1OzCyJlW0XkK4YOQh1cDtcgwBrQmoDWkdgboBZE8mYsJSHlnFbJ+5bwmOPJ7lZkirbC8aRsMvmgtTHjBhGE0QbwJ2egUE1ITVlUC5OmDVdYNrKuN70xM6WoShjlW4464dbtiFIWK6x7GjESEHUUe0iYncnbMdQSE0Z1ITTNOb0hRmjjLtmS9dmJ2rp1jtuKktyyrb6YLEMCUHq2dGG0QQRQ7f72kzc+cJecerne8Wvv7JNPHPvenEkz8Sh3UtFc92QyGt9Yko/HgOLAIUZlItTz5ouMF3KuE+2jFLCQ1D6lm6fLMkBacuOJowYRBUXyfjuHjF3NhdnsfjvAfH6E9vFt9XxKgikEKgJZyyYalzOLeMu2bLbULI6bh+QGwmQ+rgRlumdGEQAao+K56bEL2woVUwOiev0r8OAUjiJrMmFCbvykGxZRAmPitK1dHM7bohyMsuyi/I8f0+e57fJYIKEZXpXo9E4mOf5XTKyLLvCBLETF8uY2SKepkC+dpX4T02Ivepr4HvZcOZ5fmee54fyPL+DmTUhzAs6n4n8bN5dr9f3YdkSg8nsxG0lPBVKVpNjG0/aGhzfLDmRZdnumZmZp8+c+cdZPV555fSr7Xb7s0jJ3i5Pcue4MxKkPPkvvXTqz/B92u32l0wYOzG1fkhcd/py8Rcbyq/vFM/KY1WA95h/3zzP71bfU6JsNpsfgj+P/FlbrdaDGExYyuXvLz8H+DudODH700ajcSM3W6Yu4alQ1spCOTd38jcKocTZbh9+9NixY99XJ8AEUkcpo9W64yH197m5k7+bnZ19QT+J09NHntQhwji/Jg58qi6++ofLxJ8gSFneVw2Ka4QQDfh1Ok4dZavVmtZ/nrm5k7/Vf55O1tRhboUw5+ZOvqyOl5+R/FyOHj32PYVU/tloNG5IXcKrhJIzngwp3fNjomazea/64BuNxts646f50lWv169utw9/DmtqdJQyZFaSJVuV6nq9fqMEof5/vV6/CYBqgJDlee+yAbF/+4i4ZWqZeNfaIfHWzn+Hx0KcEuU9+s8jv3ej0bhVlXOZydX/k0iRMeb8P0D5e6tj8zy/Xb9UJIc56h/yqVOnXul8lmuZ2bJslKmbHG7XrbpCmCXFRLvdfqQD6jTS3Jiy5I4OykM6ADV+1Eu1DmV6evopBORexzDi1L+X/HnGxsb2w3Hm9PSRJ9QxWPOTZdmlKht2hi+w6dkox5bqffI8fye3hDteGqKaHVsHXihKl0tB+h0cY+lute54AGRKDCW89LNTRynHb7ChUWVVjetOnJh9EYBUyPZeNCoOtsbFQwdXi4/esELcd+tq8cCHJ8UXp+viy9efLz7AgamjlKXc1AA1m83DoIRDlFubzeb96hhZLVTlgJ24gttutx+ONa50bHZKRenaeTs1OfpAfnr6yOOdE7EZdNwmlKocntXLNkA5JTGq47Ds+Lf94lWsyfnXleLfnIwJUN4DOnNYwuUxh2A3Ln9XULrfK8t3J27Tu3BVwiOjXJqoAy8UZej1yclGo3GTLN+gu3w+z/P3YaWbQqk3Ne12e4ZC+c8rxWsYytcPiP9RpZxCqWDKnxOiBNlyAUpOnGsoh4tA2Rm8X9xqtT6md5wyZmYe+0YRKL+1S/wYQ3n8zctBl5SBUv5djivfjMOPduIzcizeiYfr9foVvUwZG+XCuzibZKnSceZ5/v4QlKp8y7ElhnJlTeTP7BI/kllRYfzrfvHqFy4UX1vaL/aVlSmROzwbwdS29T2UcEwZF+V8ozM2lu1VY812u/15akypGh3TmFJesJbHHD167IdUxz3YJy5bNySuX1mbvy55CbMLtzU6tjGlsdFptVqfUMc0Go23F4wy1l2dSnbfvpMwVPe9WWVLDsrOJaF9MFu2Wq1PqmNkGce67xiXhTjdNwdlvV6/BgxfbPfBfVCetxi6b9/rlCup65QzM48dl2OjLMv26CibzeZ96sTIzEFdpwQXz9U1yrtVlpR/Zll2Fec65Y6l4pbbx8XHH9kknvzJlPjlHy8Tp29eKT5ou0aJoIT3w3dBlLDzVpfAJEZ1XOdaJZxnOSlvPMjPzxFljIvng914RwebsjYO7uhMyHu46sOfnf3Oz2TXDW6vvYxdFoIXz3Wc8J5zs9n8iOn2IrxTc2BM3Glqdp7dI553uaOjxrhwcob+MyuUpjs6WZZdon8OcigjPx8V+u+GTWFTSWEx3WYcdJ225jNDSE4q0GHCzlueHOyujn6bUWYgeb9ZZUaQPe+GzQ+Gc8+oOGhC+c1d4gfI16n3XDAhQ7+9qE9l01E2Go132GYKyXE1NiFDTcpoNpv3LOYJGWXNErJNW9sEp63p2RKiVPMn1bS1DgxsyhoGdGpmizj+xtXiDYnx7/vFmce3iWdW1cTVGEY4hQ2ZW0nNq8Qm/M6XbXm3S100lwGedFybuvNOibLI+ZS2ceU4eAxiEuvCkfmU8ycToDxETe6FgCBQHeqyAbFvfEhcO7BwDuXFCEbTZF840XeHK0jYcbs2OIGle0mVJ/mmnClEPQqxyTY5I8/zFhif7fSZee4bnrPOU4AssnRXHaVTCTd14dRDY3UbTIiSeFhsN/aMjgnqthFx880rxX3yATL5p3y4LPXzOaBkUyBjZMlYpbtQlIOBD475ZEusjMNSvkXe6VEoJVDkeZ2dzIfIFsRzU+JF2OyM9M9fTC/6SUYOyFQPjQ2nWiUjxnPfw5EeHqMWIqAeIFsAU847lJM2JM6xsewt1OIDLs99P7ZFHNdB/upS8XtPiD7PfLuCXJNolYyyFiNI/Zit65ItrOVafFbHcFohY7hPTN21Tjz4uc3iqfsnxKdX1MTl1OoYRFaMsToGB6Trw2JFP/OdZC2hJZ7ZkrMoAbbSGmelDJ91hFKuJeS7jlBMkJnrAqqJlgMUZS/dArPlGHNdSg5M3xXXtvquuEatvIYtDRhpxbUJuIgqsU5lGWtUploK0KuEU9mSW8YpmFQ556xNuYW7NiW13B+FkMiKHIy+C6eGgBxJvMR0oSv5hi6+z4HJyZoU0M2RVvDlrOQbcxVfX5AhZbuqy0v7ZstYMLHlAVlLTF9ALLbvu9Y5Zylpn/XOsd0ibIvxr2KCLHpp6SCUIdnSZSF+WzfOhem6GD+1KwR3Z4jNjrtDpNoZwmWd8yrupZN6Hx3fbMmFSe0Swdq2ZIPjxk1112Duo8OBGLrBkw/IoncdK2XHsdC9dHz204m50xh3tzFq1zFqtzHXrfCw7OgDsqyNnZLszVijsmXgrmNcmGtS78lIoMX2aJz03fKO2sDJddPQSCDPiQ1DfWBycY6XtXstc2PQKuxgG2McmXTPb9/9vmuJYXKyJrWjbeg+3xPM4O73nWqvbyw7xgZZSJbEUBa157cNJjdr2vb+5iA1YV3HxYscj30PDCEHIgcjtfm8K8hSsmRotkwFk5s1TTghUAopB6xrjHMBBkI0YYTZ0dZlxwLpkiWDULpmy5gwqayZgZNkA7oKQQCxctByYg0XIIEQQuRitGVHblMTA2ShKGPDpC6wu+DEgJqg2rDGDBtAF4Q6RAojp1xXGmSMbImVcR+YWNY04eQCtUG1ofUJ2/uvcETIgUhhdAE5GAlkKShjwHTNmhhODKgJqQ2sC14uOgyfD0IbRF+MlQaZAiZWyn2yJsTJATqGnHQO2Jhh+xlsACFCG0QbRtdyzQFZCZSxYPpmTS7Q5cjJHYNBYIkZpu99HoUQ/o4QIYSIZUZfjJ4ZMjZI32wZBDMU5yhy8pZTULl4XYP5fagMyEVoy4oupTpGduwnkloSlKEwY+AcQU4MhRTD6ovXBRwFzwWgCSEF0QVjJUGmgEllTS5OLlCIlIN1mS9mx/cZ5eLDALpCTI2RAhkTZQqYoTgpoCPECbaBHQ2ETL3PUl98ECAXYijG0OyYAmQoTG7W5ODkAF1CnVgm2JQx4okPA+gCMTbGskBGgRmaOblAh5GTORIrfKFx4VH4EIAxIXIxlg2SBbMvECY3e7oApbDaIgQu5/2HmeEKEINYiwSRi7EQkLFgumZOCuggctKGI4ULZN/vMeSLj0AYMytWEqMLzFg4fYDaoKaC6wvOFR4FkIPQFaILxrJAOsHsc/zlfYDWXE8qF22s8Pz5KHxcgEVALBtjJXBSSEOwFhk1Zgy4hitCT4hVw+gFs8/zwxqIBbUgyK7fcyA0PD9XX4iVxhiC0xdof6STWCsoBmKF7+cVCWFXQYyBMxRpf+STX1b0x45AhN0OMSrOGEirhrY/dfQAdjvS7oy+WCF6r1RIFxXWvlTRg1YVqFWBmxZbD99ig9pt0YPQw9rD1nstVri9V+/Ve3XrS/wfim4P5fIFxLoAAAAASUVORK5CYII=";
      (e.SR = ft),
        (e.OZ = class {
          constructor(t) {
            if (((this.animationToMixTime = {}), (this.defaultMix = 0), !t))
              throw new Error("skeletonData cannot be null.");
            this.skeletonData = t;
          }
          setMix(t, e, s) {
            let i = this.skeletonData.findAnimation(t);
            if (!i) throw new Error("Animation not found: " + t);
            let r = this.skeletonData.findAnimation(e);
            if (!r) throw new Error("Animation not found: " + e);
            this.setMixWith(i, r, s);
          }
          setMixWith(t, e, s) {
            if (!t) throw new Error("from cannot be null.");
            if (!e) throw new Error("to cannot be null.");
            let i = t.name + "." + e.name;
            this.animationToMixTime[i] = s;
          }
          getMix(t, e) {
            let s = t.name + "." + e.name,
              i = this.animationToMixTime[s];
            return void 0 === i ? this.defaultMix : i;
          }
        }),
        (e.me = Je),
        (e.N0 = class {
          constructor(t) {
            this.atlas = t;
          }
          loadSequence(t, e, s) {
            let i = s.regions;
            for (let r = 0, n = i.length; r < n; r++) {
              let n = s.getPath(e, r),
                a = this.atlas.findRegion(n);
              if (null == a)
                throw new Error(
                  "Region not found in atlas: " + n + " (sequence: " + t + ")"
                );
              (i[r] = a), (i[r].renderObject = i[r]);
            }
          }
          newRegionAttachment(t, e, s, i) {
            let r = new zt(e, s);
            if (null != i) this.loadSequence(e, s, i);
            else {
              let t = this.atlas.findRegion(s);
              if (!t)
                throw new Error(
                  "Region not found in atlas: " +
                    s +
                    " (region attachment: " +
                    e +
                    ")"
                );
              (t.renderObject = t), (r.region = t);
            }
            return r;
          }
          newMeshAttachment(t, e, s, i) {
            let r = new Nt(e, s);
            if (null != i) this.loadSequence(e, s, i);
            else {
              let t = this.atlas.findRegion(s);
              if (!t)
                throw new Error(
                  "Region not found in atlas: " +
                    s +
                    " (mesh attachment: " +
                    e +
                    ")"
                );
              (t.renderObject = t), (r.region = t);
            }
            return r;
          }
          newBoundingBoxAttachment(t, e) {
            return new St(e);
          }
          newPathAttachment(t, e) {
            return new Ut(e);
          }
          newPointAttachment(t, e) {
            return new Wt(e);
          }
          newClippingAttachment(t, e) {
            return new Et(e);
          }
        }),
        (e.yG = fs),
        (e.OR = Ms),
        (e.ex = bs),
        (e.Od = class {
          constructor(t) {
            if (
              ((this._updateCache = new Array()),
              (this.skin = null),
              (this.scaleX = 1),
              (this.scaleY = 1),
              (this.x = 0),
              (this.y = 0),
              !t)
            )
              throw new Error("data cannot be null.");
            (this.data = t), (this.bones = new Array());
            for (let e = 0; e < t.bones.length; e++) {
              let s,
                i = t.bones[e];
              if (i.parent) {
                let t = this.bones[i.parent.index];
                (s = new jt(i, this, t)), t.children.push(s);
              } else s = new jt(i, this, null);
              this.bones.push(s);
            }
            (this.slots = new Array()), (this.drawOrder = new Array());
            for (let e = 0; e < t.slots.length; e++) {
              let s = t.slots[e],
                i = this.bones[s.boneData.index],
                r = new se(s, i);
              this.slots.push(r), this.drawOrder.push(r);
            }
            this.ikConstraints = new Array();
            for (let e = 0; e < t.ikConstraints.length; e++) {
              let s = t.ikConstraints[e];
              this.ikConstraints.push(new Kt(s, this));
            }
            this.transformConstraints = new Array();
            for (let e = 0; e < t.transformConstraints.length; e++) {
              let s = t.transformConstraints[e];
              this.transformConstraints.push(new ie(s, this));
            }
            this.pathConstraints = new Array();
            for (let e = 0; e < t.pathConstraints.length; e++) {
              let s = t.pathConstraints[e];
              this.pathConstraints.push(new ee(s, this));
            }
            (this.color = new r(1, 1, 1, 1)), this.updateCache();
          }
          updateCache() {
            this._updateCache.length = 0;
            let t = this.bones;
            for (let o = 0, l = t.length; o < l; o++) {
              let e = t[o];
              (e.sorted = e.data.skinRequired), (e.active = !e.sorted);
            }
            if (this.skin) {
              let t = this.skin.bones;
              for (let e = 0, s = this.skin.bones.length; e < s; e++) {
                let s = this.bones[t[e].index];
                do {
                  (s.sorted = !1), (s.active = !0), (s = s.parent);
                } while (s);
              }
            }
            let e = this.ikConstraints,
              s = this.transformConstraints,
              i = this.pathConstraints,
              r = e.length,
              n = s.length,
              a = i.length,
              h = r + n + a;
            t: for (let o = 0; o < h; o++) {
              for (let t = 0; t < r; t++) {
                let s = e[t];
                if (s.data.order == o) {
                  this.sortIkConstraint(s);
                  continue t;
                }
              }
              for (let t = 0; t < n; t++) {
                let e = s[t];
                if (e.data.order == o) {
                  this.sortTransformConstraint(e);
                  continue t;
                }
              }
              for (let t = 0; t < a; t++) {
                let e = i[t];
                if (e.data.order == o) {
                  this.sortPathConstraint(e);
                  continue t;
                }
              }
            }
            for (let o = 0, l = t.length; o < l; o++) this.sortBone(t[o]);
          }
          sortIkConstraint(t) {
            if (
              ((t.active =
                t.target.isActive() &&
                (!t.data.skinRequired ||
                  (this.skin &&
                    o.contains(this.skin.constraints, t.data, !0)))),
              !t.active)
            )
              return;
            let e = t.target;
            this.sortBone(e);
            let s = t.bones,
              i = s[0];
            if ((this.sortBone(i), 1 == s.length))
              this._updateCache.push(t), this.sortReset(i.children);
            else {
              let e = s[s.length - 1];
              this.sortBone(e),
                this._updateCache.push(t),
                this.sortReset(i.children),
                (e.sorted = !0);
            }
          }
          sortPathConstraint(t) {
            if (
              ((t.active =
                t.target.bone.isActive() &&
                (!t.data.skinRequired ||
                  (this.skin &&
                    o.contains(this.skin.constraints, t.data, !0)))),
              !t.active)
            )
              return;
            let e = t.target,
              s = e.data.index,
              i = e.bone;
            this.skin && this.sortPathConstraintAttachment(this.skin, s, i),
              this.data.defaultSkin &&
                this.data.defaultSkin != this.skin &&
                this.sortPathConstraintAttachment(this.data.defaultSkin, s, i);
            for (let h = 0, o = this.data.skins.length; h < o; h++)
              this.sortPathConstraintAttachment(this.data.skins[h], s, i);
            let r = e.getAttachment();
            r instanceof Ut && this.sortPathConstraintAttachmentWith(r, i);
            let n = t.bones,
              a = n.length;
            for (let h = 0; h < a; h++) this.sortBone(n[h]);
            this._updateCache.push(t);
            for (let h = 0; h < a; h++) this.sortReset(n[h].children);
            for (let h = 0; h < a; h++) n[h].sorted = !0;
          }
          sortTransformConstraint(t) {
            if (
              ((t.active =
                t.target.isActive() &&
                (!t.data.skinRequired ||
                  (this.skin &&
                    o.contains(this.skin.constraints, t.data, !0)))),
              !t.active)
            )
              return;
            this.sortBone(t.target);
            let e = t.bones,
              s = e.length;
            if (t.data.local)
              for (let i = 0; i < s; i++) {
                let t = e[i];
                this.sortBone(t.parent), this.sortBone(t);
              }
            else for (let i = 0; i < s; i++) this.sortBone(e[i]);
            this._updateCache.push(t);
            for (let i = 0; i < s; i++) this.sortReset(e[i].children);
            for (let i = 0; i < s; i++) e[i].sorted = !0;
          }
          sortPathConstraintAttachment(t, e, s) {
            let i = t.attachments[e];
            if (i)
              for (let r in i) this.sortPathConstraintAttachmentWith(i[r], s);
          }
          sortPathConstraintAttachmentWith(t, e) {
            if (!(t instanceof Ut)) return;
            let s = t.bones;
            if (s) {
              let t = this.bones;
              for (let e = 0, i = s.length; e < i; ) {
                let i = s[e++];
                for (i += e; e < i; ) this.sortBone(t[s[e++]]);
              }
            } else this.sortBone(e);
          }
          sortBone(t) {
            if (!t) return;
            if (t.sorted) return;
            let e = t.parent;
            e && this.sortBone(e), (t.sorted = !0), this._updateCache.push(t);
          }
          sortReset(t) {
            for (let e = 0, s = t.length; e < s; e++) {
              let s = t[e];
              s.active &&
                (s.sorted && this.sortReset(s.children), (s.sorted = !1));
            }
          }
          updateWorldTransform() {
            let t = this.bones;
            for (let s = 0, i = t.length; s < i; s++) {
              let e = t[s];
              (e.ax = e.x),
                (e.ay = e.y),
                (e.arotation = e.rotation),
                (e.ascaleX = e.scaleX),
                (e.ascaleY = e.scaleY),
                (e.ashearX = e.shearX),
                (e.ashearY = e.shearY);
            }
            let e = this._updateCache;
            for (let s = 0, i = e.length; s < i; s++) e[s].update();
          }
          updateWorldTransformWith(t) {
            let e = this.getRootBone();
            if (!e) throw new Error("Root bone must not be null.");
            let s = t.a,
              i = t.b,
              r = t.c,
              a = t.d;
            (e.worldX = s * this.x + i * this.y + t.worldX),
              (e.worldY = r * this.x + a * this.y + t.worldY);
            let h = e.rotation + 90 + e.shearY,
              o = n.cosDeg(e.rotation + e.shearX) * e.scaleX,
              l = n.cosDeg(h) * e.scaleY,
              c = n.sinDeg(e.rotation + e.shearX) * e.scaleX,
              d = n.sinDeg(h) * e.scaleY;
            (e.a = (s * o + i * c) * this.scaleX),
              (e.b = (s * l + i * d) * this.scaleX),
              (e.c = (r * o + a * c) * this.scaleY),
              (e.d = (r * l + a * d) * this.scaleY);
            let u = this._updateCache;
            for (let n = 0, m = u.length; n < m; n++) {
              let t = u[n];
              t != e && t.update();
            }
          }
          setToSetupPose() {
            this.setBonesToSetupPose(), this.setSlotsToSetupPose();
          }
          setBonesToSetupPose() {
            let t = this.bones;
            for (let r = 0, n = t.length; r < n; r++) t[r].setToSetupPose();
            let e = this.ikConstraints;
            for (let r = 0, n = e.length; r < n; r++) {
              let t = e[r];
              (t.mix = t.data.mix),
                (t.softness = t.data.softness),
                (t.bendDirection = t.data.bendDirection),
                (t.compress = t.data.compress),
                (t.stretch = t.data.stretch);
            }
            let s = this.transformConstraints;
            for (let r = 0, n = s.length; r < n; r++) {
              let t = s[r],
                e = t.data;
              (t.mixRotate = e.mixRotate),
                (t.mixX = e.mixX),
                (t.mixY = e.mixY),
                (t.mixScaleX = e.mixScaleX),
                (t.mixScaleY = e.mixScaleY),
                (t.mixShearY = e.mixShearY);
            }
            let i = this.pathConstraints;
            for (let r = 0, n = i.length; r < n; r++) {
              let t = i[r],
                e = t.data;
              (t.position = e.position),
                (t.spacing = e.spacing),
                (t.mixRotate = e.mixRotate),
                (t.mixX = e.mixX),
                (t.mixY = e.mixY);
            }
          }
          setSlotsToSetupPose() {
            let t = this.slots;
            o.arrayCopy(t, 0, this.drawOrder, 0, t.length);
            for (let e = 0, s = t.length; e < s; e++) t[e].setToSetupPose();
          }
          getRootBone() {
            return 0 == this.bones.length ? null : this.bones[0];
          }
          findBone(t) {
            if (!t) throw new Error("boneName cannot be null.");
            let e = this.bones;
            for (let s = 0, i = e.length; s < i; s++) {
              let i = e[s];
              if (i.data.name == t) return i;
            }
            return null;
          }
          findSlot(t) {
            if (!t) throw new Error("slotName cannot be null.");
            let e = this.slots;
            for (let s = 0, i = e.length; s < i; s++) {
              let i = e[s];
              if (i.data.name == t) return i;
            }
            return null;
          }
          setSkinByName(t) {
            let e = this.data.findSkin(t);
            if (!e) throw new Error("Skin not found: " + t);
            this.setSkin(e);
          }
          setSkin(t) {
            if (t != this.skin) {
              if (t)
                if (this.skin) t.attachAll(this, this.skin);
                else {
                  let e = this.slots;
                  for (let s = 0, i = e.length; s < i; s++) {
                    let i = e[s],
                      r = i.data.attachmentName;
                    if (r) {
                      let e = t.getAttachment(s, r);
                      e && i.setAttachment(e);
                    }
                  }
                }
              (this.skin = t), this.updateCache();
            }
          }
          getAttachmentByName(t, e) {
            let s = this.data.findSlot(t);
            if (!s) throw new Error(`Can't find slot with name ${t}`);
            return this.getAttachment(s.index, e);
          }
          getAttachment(t, e) {
            if (!e) throw new Error("attachmentName cannot be null.");
            if (this.skin) {
              let s = this.skin.getAttachment(t, e);
              if (s) return s;
            }
            return this.data.defaultSkin
              ? this.data.defaultSkin.getAttachment(t, e)
              : null;
          }
          setAttachment(t, e) {
            if (!t) throw new Error("slotName cannot be null.");
            let s = this.slots;
            for (let i = 0, r = s.length; i < r; i++) {
              let r = s[i];
              if (r.data.name == t) {
                let s = null;
                if (e && ((s = this.getAttachment(i, e)), !s))
                  throw new Error(
                    "Attachment not found: " + e + ", for slot: " + t
                  );
                return void r.setAttachment(s);
              }
            }
            throw new Error("Slot not found: " + t);
          }
          findIkConstraint(t) {
            if (!t) throw new Error("constraintName cannot be null.");
            let e = this.ikConstraints;
            for (let s = 0, i = e.length; s < i; s++) {
              let i = e[s];
              if (i.data.name == t) return i;
            }
            return null;
          }
          findTransformConstraint(t) {
            if (!t) throw new Error("constraintName cannot be null.");
            let e = this.transformConstraints;
            for (let s = 0, i = e.length; s < i; s++) {
              let i = e[s];
              if (i.data.name == t) return i;
            }
            return null;
          }
          findPathConstraint(t) {
            if (!t) throw new Error("constraintName cannot be null.");
            let e = this.pathConstraints;
            for (let s = 0, i = e.length; s < i; s++) {
              let i = e[s];
              if (i.data.name == t) return i;
            }
            return null;
          }
          getBoundsRect() {
            let t = new c(),
              e = new c();
            return (
              this.getBounds(t, e), { x: t.x, y: t.y, width: e.x, height: e.y }
            );
          }
          getBounds(t, e, s = new Array(2)) {
            if (!t) throw new Error("offset cannot be null.");
            if (!e) throw new Error("size cannot be null.");
            let i = this.drawOrder,
              r = Number.POSITIVE_INFINITY,
              n = Number.POSITIVE_INFINITY,
              a = Number.NEGATIVE_INFINITY,
              h = Number.NEGATIVE_INFINITY;
            for (let l = 0, c = i.length; l < c; l++) {
              let t = i[l];
              if (!t.bone.active) continue;
              let e = 0,
                c = null,
                d = t.getAttachment();
              if (d instanceof zt)
                (e = 8),
                  (c = o.setArraySize(s, e, 0)),
                  d.computeWorldVertices(t, c, 0, 2);
              else if (d instanceof Nt) {
                let i = d;
                (e = i.worldVerticesLength),
                  (c = o.setArraySize(s, e, 0)),
                  i.computeWorldVertices(t, 0, e, c, 0, 2);
              }
              if (c)
                for (let s = 0, i = c.length; s < i; s += 2) {
                  let t = c[s],
                    e = c[s + 1];
                  (r = Math.min(r, t)),
                    (n = Math.min(n, e)),
                    (a = Math.max(a, t)),
                    (h = Math.max(h, e));
                }
            }
            t.set(r, n), e.set(a - r, h - n);
          }
        }),
        (e.CE = class {
          constructor(t) {
            (this.scale = 1),
              (this.linkedMeshes = new Array()),
              (this.attachmentLoader = t);
          }
          readSkeletonData(t) {
            let s = this.scale,
              i = new re(),
              n = "string" === typeof t ? JSON.parse(t) : t,
              a = n.skeleton;
            if (
              (a &&
                ((i.hash = a.hash),
                (i.version = a.spine),
                (i.x = a.x),
                (i.y = a.y),
                (i.width = a.width),
                (i.height = a.height),
                (i.fps = a.fps),
                (i.imagesPath = a.images)),
              n.bones)
            )
              for (let r = 0; r < n.bones.length; r++) {
                let t = n.bones[r],
                  a = null,
                  h = Ge(t, "parent", null);
                h && (a = i.findBone(h));
                let l = new Gt(i.bones.length, t.name, a);
                (l.length = Ge(t, "length", 0) * s),
                  (l.x = Ge(t, "x", 0) * s),
                  (l.y = Ge(t, "y", 0) * s),
                  (l.rotation = Ge(t, "rotation", 0)),
                  (l.scaleX = Ge(t, "scaleX", 1)),
                  (l.scaleY = Ge(t, "scaleY", 1)),
                  (l.shearX = Ge(t, "shearX", 0)),
                  (l.shearY = Ge(t, "shearY", 0)),
                  (l.transformMode = o.enumValue(
                    e.Qe,
                    Ge(t, "transform", "Normal")
                  )),
                  (l.skinRequired = Ge(t, "skin", !1));
                let c = Ge(t, "color", null);
                c && l.color.setFromString(c), i.bones.push(l);
              }
            if (n.slots)
              for (let h = 0; h < n.slots.length; h++) {
                let t = n.slots[h],
                  s = i.findBone(t.bone);
                if (!s)
                  throw new Error(
                    `Couldn't find bone ${t.bone} for slot ${t.name}`
                  );
                let a = new he(i.slots.length, t.name, s),
                  l = Ge(t, "color", null);
                l && a.color.setFromString(l);
                let c = Ge(t, "dark", null);
                c && (a.darkColor = r.fromString(c)),
                  (a.attachmentName = Ge(t, "attachment", null)),
                  (a.blendMode = o.enumValue(e.bt, Ge(t, "blend", "normal"))),
                  i.slots.push(a);
              }
            if (n.ik)
              for (let e = 0; e < n.ik.length; e++) {
                let t = n.ik[e],
                  r = new $t(t.name);
                (r.order = Ge(t, "order", 0)),
                  (r.skinRequired = Ge(t, "skin", !1));
                for (let e = 0; e < t.bones.length; e++) {
                  let s = i.findBone(t.bones[e]);
                  if (!s)
                    throw new Error(
                      `Couldn't find bone ${t.bones[e]} for IK constraint ${t.name}.`
                    );
                  r.bones.push(s);
                }
                let a = i.findBone(t.target);
                if (!a)
                  throw new Error(
                    `Couldn't find target bone ${t.target} for IK constraint ${t.name}.`
                  );
                (r.target = a),
                  (r.mix = Ge(t, "mix", 1)),
                  (r.softness = Ge(t, "softness", 0) * s),
                  (r.bendDirection = Ge(t, "bendPositive", !0) ? 1 : -1),
                  (r.compress = Ge(t, "compress", !1)),
                  (r.stretch = Ge(t, "stretch", !1)),
                  (r.uniform = Ge(t, "uniform", !1)),
                  i.ikConstraints.push(r);
              }
            if (n.transform)
              for (let e = 0; e < n.transform.length; e++) {
                let t = n.transform[e],
                  r = new oe(t.name);
                (r.order = Ge(t, "order", 0)),
                  (r.skinRequired = Ge(t, "skin", !1));
                for (let e = 0; e < t.bones.length; e++) {
                  let s = t.bones[e],
                    n = i.findBone(s);
                  if (!n)
                    throw new Error(
                      `Couldn't find bone ${s} for transform constraint ${t.name}.`
                    );
                  r.bones.push(n);
                }
                let a = t.target,
                  h = i.findBone(a);
                if (!h)
                  throw new Error(
                    `Couldn't find target bone ${a} for transform constraint ${t.name}.`
                  );
                (r.target = h),
                  (r.local = Ge(t, "local", !1)),
                  (r.relative = Ge(t, "relative", !1)),
                  (r.offsetRotation = Ge(t, "rotation", 0)),
                  (r.offsetX = Ge(t, "x", 0) * s),
                  (r.offsetY = Ge(t, "y", 0) * s),
                  (r.offsetScaleX = Ge(t, "scaleX", 0)),
                  (r.offsetScaleY = Ge(t, "scaleY", 0)),
                  (r.offsetShearY = Ge(t, "shearY", 0)),
                  (r.mixRotate = Ge(t, "mixRotate", 1)),
                  (r.mixX = Ge(t, "mixX", 1)),
                  (r.mixY = Ge(t, "mixY", r.mixX)),
                  (r.mixScaleX = Ge(t, "mixScaleX", 1)),
                  (r.mixScaleY = Ge(t, "mixScaleY", r.mixScaleX)),
                  (r.mixShearY = Ge(t, "mixShearY", 1)),
                  i.transformConstraints.push(r);
              }
            if (n.path)
              for (let r = 0; r < n.path.length; r++) {
                let t = n.path[r],
                  a = new te(t.name);
                (a.order = Ge(t, "order", 0)),
                  (a.skinRequired = Ge(t, "skin", !1));
                for (let e = 0; e < t.bones.length; e++) {
                  let s = t.bones[e],
                    r = i.findBone(s);
                  if (!r)
                    throw new Error(
                      `Couldn't find bone ${s} for path constraint ${t.name}.`
                    );
                  a.bones.push(r);
                }
                let h = t.target,
                  l = i.findSlot(h);
                if (!l)
                  throw new Error(
                    `Couldn't find target slot ${h} for path constraint ${t.name}.`
                  );
                (a.target = l),
                  (a.positionMode = o.enumValue(
                    e.T,
                    Ge(t, "positionMode", "Percent")
                  )),
                  (a.spacingMode = o.enumValue(
                    e.m3,
                    Ge(t, "spacingMode", "Length")
                  )),
                  (a.rotateMode = o.enumValue(
                    e.YK,
                    Ge(t, "rotateMode", "Tangent")
                  )),
                  (a.offsetRotation = Ge(t, "rotation", 0)),
                  (a.position = Ge(t, "position", 0)),
                  a.positionMode == e.T.Fixed && (a.position *= s),
                  (a.spacing = Ge(t, "spacing", 0)),
                  (a.spacingMode != e.m3.Length &&
                    a.spacingMode != e.m3.Fixed) ||
                    (a.spacing *= s),
                  (a.mixRotate = Ge(t, "mixRotate", 1)),
                  (a.mixX = Ge(t, "mixX", 1)),
                  (a.mixY = Ge(t, "mixY", a.mixX)),
                  i.pathConstraints.push(a);
              }
            if (n.skins)
              for (let e = 0; e < n.skins.length; e++) {
                let t = n.skins[e],
                  s = new ae(t.name);
                if (t.bones)
                  for (let e = 0; e < t.bones.length; e++) {
                    let r = t.bones[e],
                      n = i.findBone(r);
                    if (!n)
                      throw new Error(
                        `Couldn't find bone ${r} for skin ${t.name}.`
                      );
                    s.bones.push(n);
                  }
                if (t.ik)
                  for (let e = 0; e < t.ik.length; e++) {
                    let r = t.ik[e],
                      n = i.findIkConstraint(r);
                    if (!n)
                      throw new Error(
                        `Couldn't find IK constraint ${r} for skin ${t.name}.`
                      );
                    s.constraints.push(n);
                  }
                if (t.transform)
                  for (let e = 0; e < t.transform.length; e++) {
                    let r = t.transform[e],
                      n = i.findTransformConstraint(r);
                    if (!n)
                      throw new Error(
                        `Couldn't find transform constraint ${r} for skin ${t.name}.`
                      );
                    s.constraints.push(n);
                  }
                if (t.path)
                  for (let e = 0; e < t.path.length; e++) {
                    let r = t.path[e],
                      n = i.findPathConstraint(r);
                    if (!n)
                      throw new Error(
                        `Couldn't find path constraint ${r} for skin ${t.name}.`
                      );
                    s.constraints.push(n);
                  }
                for (let e in t.attachments) {
                  let r = i.findSlot(e);
                  if (!r)
                    throw new Error(
                      `Couldn't find slot ${e} for skin ${t.name}.`
                    );
                  let n = t.attachments[e];
                  for (let t in n) {
                    let e = this.readAttachment(n[t], s, r.index, t, i);
                    e && s.setAttachment(r.index, t, e);
                  }
                }
                i.skins.push(s), "default" == s.name && (i.defaultSkin = s);
              }
            for (let e = 0, r = this.linkedMeshes.length; e < r; e++) {
              let t = this.linkedMeshes[e],
                s = t.skin ? i.findSkin(t.skin) : i.defaultSkin;
              if (!s) throw new Error(`Skin not found: ${t.skin}`);
              let r = s.getAttachment(t.slotIndex, t.parent);
              if (!r) throw new Error(`Parent mesh not found: ${t.parent}`);
              (t.mesh.timelineAttahment = t.inheritTimeline ? r : t.mesh),
                t.mesh.setParentMesh(r),
                null != t.mesh.region && t.mesh.updateRegion();
            }
            if (((this.linkedMeshes.length = 0), n.events))
              for (let e in n.events) {
                let t = n.events[e],
                  s = new Qt(e);
                (s.intValue = Ge(t, "int", 0)),
                  (s.floatValue = Ge(t, "float", 0)),
                  (s.stringValue = Ge(t, "string", "")),
                  (s.audioPath = Ge(t, "audio", null)),
                  s.audioPath &&
                    ((s.volume = Ge(t, "volume", 1)),
                    (s.balance = Ge(t, "balance", 0))),
                  i.events.push(s);
              }
            if (n.animations)
              for (let e in n.animations) {
                let t = n.animations[e];
                this.readAnimation(t, e, i);
              }
            return i;
          }
          readAttachment(t, e, s, i, r) {
            let n = this.scale;
            switch (((i = Ge(t, "name", i)), Ge(t, "type", "region"))) {
              case "region": {
                let s = Ge(t, "path", i),
                  r = this.readSequence(Ge(t, "sequence", null)),
                  a = this.attachmentLoader.newRegionAttachment(e, i, s, r);
                if (!a) return null;
                (a.path = s),
                  (a.x = Ge(t, "x", 0) * n),
                  (a.y = Ge(t, "y", 0) * n),
                  (a.scaleX = Ge(t, "scaleX", 1)),
                  (a.scaleY = Ge(t, "scaleY", 1)),
                  (a.rotation = Ge(t, "rotation", 0)),
                  (a.width = t.width * n),
                  (a.height = t.height * n),
                  (a.sequence = r);
                let h = Ge(t, "color", null);
                return (
                  h && a.color.setFromString(h),
                  null != a.region && a.updateRegion(),
                  a
                );
              }
              case "boundingbox": {
                let s = this.attachmentLoader.newBoundingBoxAttachment(e, i);
                if (!s) return null;
                this.readVertices(t, s, t.vertexCount << 1);
                let r = Ge(t, "color", null);
                return r && s.color.setFromString(r), s;
              }
              case "mesh":
              case "linkedmesh": {
                let r = Ge(t, "path", i),
                  a = this.readSequence(Ge(t, "sequence", null)),
                  h = this.attachmentLoader.newMeshAttachment(e, i, r, a);
                if (!h) return null;
                h.path = r;
                let o = Ge(t, "color", null);
                o && h.color.setFromString(o),
                  (h.width = Ge(t, "width", 0) * n),
                  (h.height = Ge(t, "height", 0) * n),
                  (h.sequence = a);
                let l = Ge(t, "parent", null);
                if (l)
                  return (
                    this.linkedMeshes.push(
                      new Ne(
                        h,
                        Ge(t, "skin", null),
                        s,
                        l,
                        Ge(t, "timelines", !0)
                      )
                    ),
                    h
                  );
                let c = t.uvs;
                return (
                  this.readVertices(t, h, c.length),
                  (h.triangles = t.triangles),
                  (h.regionUVs = c),
                  null != h.region && h.updateRegion(),
                  (h.edges = Ge(t, "edges", null)),
                  (h.hullLength = 2 * Ge(t, "hull", 0)),
                  h
                );
              }
              case "path": {
                let s = this.attachmentLoader.newPathAttachment(e, i);
                if (!s) return null;
                (s.closed = Ge(t, "closed", !1)),
                  (s.constantSpeed = Ge(t, "constantSpeed", !0));
                let r = t.vertexCount;
                this.readVertices(t, s, r << 1);
                let a = o.newArray(r / 3, 0);
                for (let e = 0; e < t.lengths.length; e++)
                  a[e] = t.lengths[e] * n;
                s.lengths = a;
                let h = Ge(t, "color", null);
                return h && s.color.setFromString(h), s;
              }
              case "point": {
                let s = this.attachmentLoader.newPointAttachment(e, i);
                if (!s) return null;
                (s.x = Ge(t, "x", 0) * n),
                  (s.y = Ge(t, "y", 0) * n),
                  (s.rotation = Ge(t, "rotation", 0));
                let r = Ge(t, "color", null);
                return r && s.color.setFromString(r), s;
              }
              case "clipping": {
                let s = this.attachmentLoader.newClippingAttachment(e, i);
                if (!s) return null;
                let n = Ge(t, "end", null);
                n && (s.endSlot = r.findSlot(n));
                let a = t.vertexCount;
                this.readVertices(t, s, a << 1);
                let h = Ge(t, "color", null);
                return h && s.color.setFromString(h), s;
              }
            }
            return null;
          }
          readSequence(t) {
            if (null == t) return null;
            let e = new f(Ge(t, "count", 0));
            return (
              (e.start = Ge(t, "start", 1)),
              (e.digits = Ge(t, "digits", 0)),
              (e.setupIndex = Ge(t, "setup", 0)),
              e
            );
          }
          readVertices(t, e, s) {
            let i = this.scale;
            e.worldVerticesLength = s;
            let r = t.vertices;
            if (s == r.length) {
              let t = o.toFloatArray(r);
              if (1 != i) for (let e = 0, s = r.length; e < s; e++) t[e] *= i;
              return void (e.vertices = t);
            }
            let n = new Array(),
              a = new Array();
            for (let h = 0, o = r.length; h < o; ) {
              let t = r[h++];
              a.push(t);
              for (let e = h + 4 * t; h < e; h += 4)
                a.push(r[h]),
                  n.push(r[h + 1] * i),
                  n.push(r[h + 2] * i),
                  n.push(r[h + 3]);
            }
            (e.bones = a), (e.vertices = o.toFloatArray(n));
          }
          readAnimation(t, i, n) {
            let a = this.scale,
              h = new Array();
            if (t.slots)
              for (let e in t.slots) {
                let s = t.slots[e],
                  i = n.findSlot(e);
                if (!i) throw new Error("Slot not found: " + e);
                let a = i.index;
                for (let t in s) {
                  let e = s[t];
                  if (!e) continue;
                  let i = e.length;
                  if ("attachment" == t) {
                    let t = new rt(i, a);
                    for (let s = 0; s < i; s++) {
                      let i = e[s];
                      t.setFrame(s, Ge(i, "time", 0), Ge(i, "name", null));
                    }
                    h.push(t);
                  } else if ("rgba" == t) {
                    let t = new $(i, i << 2, a),
                      s = e[0],
                      n = Ge(s, "time", 0),
                      o = r.fromString(s.color);
                    for (let i = 0, a = 0; ; i++) {
                      t.setFrame(i, n, o.r, o.g, o.b, o.a);
                      let h = e[i + 1];
                      if (!h) {
                        t.shrink(a);
                        break;
                      }
                      let l = Ge(h, "time", 0),
                        c = r.fromString(h.color),
                        d = s.curve;
                      d &&
                        ((a = ze(d, t, a, i, 0, n, l, o.r, c.r, 1)),
                        (a = ze(d, t, a, i, 1, n, l, o.g, c.g, 1)),
                        (a = ze(d, t, a, i, 2, n, l, o.b, c.b, 1)),
                        (a = ze(d, t, a, i, 3, n, l, o.a, c.a, 1))),
                        (n = l),
                        (o = c),
                        (s = h);
                    }
                    h.push(t);
                  } else if ("rgb" == t) {
                    let t = new tt(i, 3 * i, a),
                      s = e[0],
                      n = Ge(s, "time", 0),
                      o = r.fromString(s.color);
                    for (let i = 0, a = 0; ; i++) {
                      t.setFrame(i, n, o.r, o.g, o.b);
                      let h = e[i + 1];
                      if (!h) {
                        t.shrink(a);
                        break;
                      }
                      let l = Ge(h, "time", 0),
                        c = r.fromString(h.color),
                        d = s.curve;
                      d &&
                        ((a = ze(d, t, a, i, 0, n, l, o.r, c.r, 1)),
                        (a = ze(d, t, a, i, 1, n, l, o.g, c.g, 1)),
                        (a = ze(d, t, a, i, 2, n, l, o.b, c.b, 1))),
                        (n = l),
                        (o = c),
                        (s = h);
                    }
                    h.push(t);
                  } else if ("alpha" == t) h.push(Ue(e, new et(i, i, a), 0, 1));
                  else if ("rgba2" == t) {
                    let t = new st(i, 7 * i, a),
                      s = e[0],
                      n = Ge(s, "time", 0),
                      o = r.fromString(s.light),
                      l = r.fromString(s.dark);
                    for (let i = 0, a = 0; ; i++) {
                      t.setFrame(i, n, o.r, o.g, o.b, o.a, l.r, l.g, l.b);
                      let h = e[i + 1];
                      if (!h) {
                        t.shrink(a);
                        break;
                      }
                      let c = Ge(h, "time", 0),
                        d = r.fromString(h.light),
                        u = r.fromString(h.dark),
                        m = s.curve;
                      m &&
                        ((a = ze(m, t, a, i, 0, n, c, o.r, d.r, 1)),
                        (a = ze(m, t, a, i, 1, n, c, o.g, d.g, 1)),
                        (a = ze(m, t, a, i, 2, n, c, o.b, d.b, 1)),
                        (a = ze(m, t, a, i, 3, n, c, o.a, d.a, 1)),
                        (a = ze(m, t, a, i, 4, n, c, l.r, u.r, 1)),
                        (a = ze(m, t, a, i, 5, n, c, l.g, u.g, 1)),
                        (a = ze(m, t, a, i, 6, n, c, l.b, u.b, 1))),
                        (n = c),
                        (o = d),
                        (l = u),
                        (s = h);
                    }
                    h.push(t);
                  } else if ("rgb2" == t) {
                    let t = new it(i, 6 * i, a),
                      s = e[0],
                      n = Ge(s, "time", 0),
                      o = r.fromString(s.light),
                      l = r.fromString(s.dark);
                    for (let i = 0, a = 0; ; i++) {
                      t.setFrame(i, n, o.r, o.g, o.b, l.r, l.g, l.b);
                      let h = e[i + 1];
                      if (!h) {
                        t.shrink(a);
                        break;
                      }
                      let c = Ge(h, "time", 0),
                        d = r.fromString(h.light),
                        u = r.fromString(h.dark),
                        m = s.curve;
                      m &&
                        ((a = ze(m, t, a, i, 0, n, c, o.r, d.r, 1)),
                        (a = ze(m, t, a, i, 1, n, c, o.g, d.g, 1)),
                        (a = ze(m, t, a, i, 2, n, c, o.b, d.b, 1)),
                        (a = ze(m, t, a, i, 3, n, c, l.r, u.r, 1)),
                        (a = ze(m, t, a, i, 4, n, c, l.g, u.g, 1)),
                        (a = ze(m, t, a, i, 5, n, c, l.b, u.b, 1))),
                        (n = c),
                        (o = d),
                        (l = u),
                        (s = h);
                    }
                    h.push(t);
                  }
                }
              }
            if (t.bones)
              for (let e in t.bones) {
                let s = t.bones[e],
                  i = n.findBone(e);
                if (!i) throw new Error("Bone not found: " + e);
                let r = i.index;
                for (let t in s) {
                  let e = s[t],
                    i = e.length;
                  if (0 != i)
                    if ("rotate" === t) h.push(Ue(e, new W(i, i, r), 0, 1));
                    else if ("translate" === t) {
                      let t = new z(i, i << 1, r);
                      h.push(We(e, t, "x", "y", 0, a));
                    } else if ("translatex" === t) {
                      let t = new G(i, i, r);
                      h.push(Ue(e, t, 0, a));
                    } else if ("translatey" === t) {
                      let t = new j(i, i, r);
                      h.push(Ue(e, t, 0, a));
                    } else if ("scale" === t) {
                      let t = new _(i, i << 1, r);
                      h.push(We(e, t, "x", "y", 1, 1));
                    } else if ("scalex" === t) {
                      let t = new Z(i, i, r);
                      h.push(Ue(e, t, 1, 1));
                    } else if ("scaley" === t) {
                      let t = new H(i, i, r);
                      h.push(Ue(e, t, 1, 1));
                    } else if ("shear" === t) {
                      let t = new J(i, i << 1, r);
                      h.push(We(e, t, "x", "y", 0, 1));
                    } else if ("shearx" === t) {
                      let t = new Q(i, i, r);
                      h.push(Ue(e, t, 0, 1));
                    } else if ("sheary" === t) {
                      let t = new K(i, i, r);
                      h.push(Ue(e, t, 0, 1));
                    }
                }
              }
            if (t.ik)
              for (let e in t.ik) {
                let s = t.ik[e],
                  i = s[0];
                if (!i) continue;
                let r = n.findIkConstraint(e);
                if (!r) throw new Error("IK Constraint not found: " + e);
                let o = n.ikConstraints.indexOf(r),
                  l = new ot(s.length, s.length << 1, o),
                  c = Ge(i, "time", 0),
                  d = Ge(i, "mix", 1),
                  u = Ge(i, "softness", 0) * a;
                for (let t = 0, e = 0; ; t++) {
                  l.setFrame(
                    t,
                    c,
                    d,
                    u,
                    Ge(i, "bendPositive", !0) ? 1 : -1,
                    Ge(i, "compress", !1),
                    Ge(i, "stretch", !1)
                  );
                  let r = s[t + 1];
                  if (!r) {
                    l.shrink(e);
                    break;
                  }
                  let n = Ge(r, "time", 0),
                    h = Ge(r, "mix", 1),
                    o = Ge(r, "softness", 0) * a,
                    m = i.curve;
                  m &&
                    ((e = ze(m, l, e, t, 0, c, n, d, h, 1)),
                    (e = ze(m, l, e, t, 1, c, n, u, o, a))),
                    (c = n),
                    (d = h),
                    (u = o),
                    (i = r);
                }
                h.push(l);
              }
            if (t.transform)
              for (let e in t.transform) {
                let s = t.transform[e],
                  i = s[0];
                if (!i) continue;
                let r = n.findTransformConstraint(e);
                if (!r) throw new Error("Transform constraint not found: " + e);
                let a = n.transformConstraints.indexOf(r),
                  o = new lt(s.length, 6 * s.length, a),
                  l = Ge(i, "time", 0),
                  c = Ge(i, "mixRotate", 1),
                  d = Ge(i, "mixX", 1),
                  u = Ge(i, "mixY", d),
                  m = Ge(i, "mixScaleX", 1),
                  f = Ge(i, "mixScaleY", m),
                  g = Ge(i, "mixShearY", 1);
                for (let t = 0, e = 0; ; t++) {
                  o.setFrame(t, l, c, d, u, m, f, g);
                  let r = s[t + 1];
                  if (!r) {
                    o.shrink(e);
                    break;
                  }
                  let n = Ge(r, "time", 0),
                    a = Ge(r, "mixRotate", 1),
                    h = Ge(r, "mixX", 1),
                    p = Ge(r, "mixY", h),
                    x = Ge(r, "mixScaleX", 1),
                    b = Ge(r, "mixScaleY", x),
                    w = Ge(r, "mixShearY", 1),
                    v = i.curve;
                  v &&
                    ((e = ze(v, o, e, t, 0, l, n, c, a, 1)),
                    (e = ze(v, o, e, t, 1, l, n, d, h, 1)),
                    (e = ze(v, o, e, t, 2, l, n, u, p, 1)),
                    (e = ze(v, o, e, t, 3, l, n, m, x, 1)),
                    (e = ze(v, o, e, t, 4, l, n, f, b, 1)),
                    (e = ze(v, o, e, t, 5, l, n, g, w, 1))),
                    (l = n),
                    (c = a),
                    (d = h),
                    (u = p),
                    (m = x),
                    (f = b),
                    (m = x),
                    (i = r);
                }
                h.push(o);
              }
            if (t.path)
              for (let s in t.path) {
                let i = t.path[s],
                  r = n.findPathConstraint(s);
                if (!r) throw new Error("Path constraint not found: " + s);
                let o = n.pathConstraints.indexOf(r);
                for (let t in i) {
                  let s = i[t],
                    n = s[0];
                  if (!n) continue;
                  let l = s.length;
                  if ("position" === t) {
                    let t = new ct(l, l, o);
                    h.push(Ue(s, t, 0, r.positionMode == e.T.Fixed ? a : 1));
                  } else if ("spacing" === t) {
                    let t = new dt(l, l, o);
                    h.push(
                      Ue(
                        s,
                        t,
                        0,
                        r.spacingMode == e.m3.Length ||
                          r.spacingMode == e.m3.Fixed
                          ? a
                          : 1
                      )
                    );
                  } else if ("mix" === t) {
                    let t = new ut(l, 3 * l, o),
                      e = Ge(n, "time", 0),
                      i = Ge(n, "mixRotate", 1),
                      r = Ge(n, "mixX", 1),
                      a = Ge(n, "mixY", r);
                    for (let h = 0, o = 0; ; h++) {
                      t.setFrame(h, e, i, r, a);
                      let l = s[h + 1];
                      if (!l) {
                        t.shrink(o);
                        break;
                      }
                      let c = Ge(l, "time", 0),
                        d = Ge(l, "mixRotate", 1),
                        u = Ge(l, "mixX", 1),
                        m = Ge(l, "mixY", u),
                        f = n.curve;
                      f &&
                        ((o = ze(f, t, o, h, 0, e, c, i, d, 1)),
                        (o = ze(f, t, o, h, 1, e, c, r, u, 1)),
                        (o = ze(f, t, o, h, 2, e, c, a, m, 1))),
                        (e = c),
                        (i = d),
                        (r = u),
                        (a = m),
                        (n = l);
                    }
                    h.push(t);
                  }
                }
              }
            if (t.attachments)
              for (let e in t.attachments) {
                let i = t.attachments[e],
                  r = n.findSkin(e);
                if (!r) throw new Error("Skin not found: " + e);
                for (let t in i) {
                  let e = i[t],
                    l = n.findSlot(t);
                  if (!l) throw new Error("Slot not found: " + t);
                  let c = l.index;
                  for (let t in e) {
                    let i = e[t],
                      n = r.getAttachment(c, t);
                    for (let t in i) {
                      let e = i[t],
                        r = e[0];
                      if (r)
                        if ("deform" == t) {
                          let t = n.bones,
                            s = n.vertices,
                            i = t ? (s.length / 3) * 2 : s.length,
                            l = new nt(e.length, e.length, c, n),
                            d = Ge(r, "time", 0);
                          for (let n = 0, h = 0; ; n++) {
                            let c,
                              u = Ge(r, "vertices", null);
                            if (u) {
                              c = o.newFloatArray(i);
                              let e = Ge(r, "offset", 0);
                              if ((o.arrayCopy(u, 0, c, e, u.length), 1 != a))
                                for (let t = e, s = t + u.length; t < s; t++)
                                  c[t] *= a;
                              if (!t) for (let t = 0; t < i; t++) c[t] += s[t];
                            } else c = t ? o.newFloatArray(i) : s;
                            l.setFrame(n, d, c);
                            let m = e[n + 1];
                            if (!m) {
                              l.shrink(h);
                              break;
                            }
                            let f = Ge(m, "time", 0),
                              g = r.curve;
                            g && (h = ze(g, l, h, n, 0, d, f, 0, 1, 1)),
                              (d = f),
                              (r = m);
                          }
                          h.push(l);
                        } else if ("sequence" == t) {
                          let t = new mt(e.length, c, n),
                            i = 0;
                          for (let n = 0; n < e.length; n++) {
                            let a = Ge(r, "delay", i),
                              h = Ge(r, "time", 0),
                              o = s[Ge(r, "mode", "hold")],
                              l = Ge(r, "index", 0);
                            t.setFrame(n, h, o, l, a), (i = a), (r = e[n + 1]);
                          }
                          h.push(t);
                        }
                    }
                  }
                }
              }
            if (t.drawOrder) {
              let e = new ht(t.drawOrder.length),
                s = n.slots.length,
                i = 0;
              for (let r = 0; r < t.drawOrder.length; r++, i++) {
                let a = t.drawOrder[r],
                  h = null,
                  l = Ge(a, "offsets", null);
                if (l) {
                  h = o.newArray(s, -1);
                  let t = o.newArray(s - l.length, 0),
                    e = 0,
                    i = 0;
                  for (let s = 0; s < l.length; s++) {
                    let r = l[s],
                      a = n.findSlot(r.slot);
                    if (!a) throw new Error("Slot not found: " + a);
                    let o = a.index;
                    for (; e != o; ) t[i++] = e++;
                    h[e + r.offset] = e++;
                  }
                  for (; e < s; ) t[i++] = e++;
                  for (let r = s - 1; r >= 0; r--)
                    -1 == h[r] && (h[r] = t[--i]);
                }
                e.setFrame(i, Ge(a, "time", 0), h);
              }
              h.push(e);
            }
            if (t.events) {
              let e = new at(t.events.length),
                s = 0;
              for (let i = 0; i < t.events.length; i++, s++) {
                let r = t.events[i],
                  a = n.findEvent(r.name);
                if (!a) throw new Error("Event not found: " + r.name);
                let h = new Jt(o.toSinglePrecision(Ge(r, "time", 0)), a);
                (h.intValue = Ge(r, "int", a.intValue)),
                  (h.floatValue = Ge(r, "float", a.floatValue)),
                  (h.stringValue = Ge(r, "string", a.stringValue)),
                  h.data.audioPath &&
                    ((h.volume = Ge(r, "volume", 1)),
                    (h.balance = Ge(r, "balance", 0))),
                  e.setFrame(s, h);
              }
              h.push(e);
            }
            let l = 0;
            for (let e = 0, s = h.length; e < s; e++)
              l = Math.max(l, h[e].getDuration());
            n.animations.push(new p(i, h, l));
          }
        }),
        (e.UL = Rs),
        (e.FM = c);
    },
  },
]);
