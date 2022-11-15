(() => {
  "use strict";
  function r(r, t) {
    (null == t || t > r.length) && (t = r.length);
    for (var n = 0, e = new Array(t); n < t; n++) e[n] = r[n];
    return e;
  }
  function t(t, n) {
    return (
      (function (r) {
        if (Array.isArray(r)) return r;
      })(t) ||
      (function (r, t) {
        var n =
          null == r
            ? null
            : ("undefined" != typeof Symbol && r[Symbol.iterator]) ||
              r["@@iterator"];
        if (null != n) {
          var e,
            a,
            i = [],
            o = !0,
            u = !1;
          try {
            for (n = n.call(r); !(o = (e = n.next()).done); o = !0) {
              i.push(e.value);
              if (t && i.length === t) break;
            }
          } catch (r) {
            u = !0;
            a = r;
          } finally {
            try {
              o || null == n.return || n.return();
            } finally {
              if (u) throw a;
            }
          }
          return i;
        }
      })(t, n) ||
      (function (t, n) {
        if (!t) return;
        if ("string" == typeof t) return r(t, n);
        var e = Object.prototype.toString.call(t).slice(8, -1);
        "Object" === e && t.constructor && (e = t.constructor.name);
        if ("Map" === e || "Set" === e) return Array.from(e);
        if (
          "Arguments" === e ||
          /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)
        )
          return r(t, n);
      })(t, n) ||
      (function () {
        throw new TypeError(
          "Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
        );
      })()
    );
  }
  var n = /^#[0-9a-f]{3,8}$/i,
    e = /^((?:rgb|hsl)a?)\s*\(([^)]*)\)/i,
    a = (function () {
      function r(t, n, e, a) {
        !(function (r, t) {
          if (!(r instanceof t))
            throw new TypeError("Cannot call a class as a function");
        })(this, r);
        this.red = t;
        this.green = n;
        this.blue = e;
        this.alpha = a;
      }
      var a = r.prototype;
      a.toHexString = function () {
        var r = Math.round(this.red).toString(16),
          t = Math.round(this.green).toString(16),
          n = Math.round(this.blue).toString(16);
        return (
          "#" +
          (this.red > 15.5 ? r : "0" + r) +
          (this.green > 15.5 ? t : "0" + t) +
          (this.blue > 15.5 ? n : "0" + n)
        );
      };
      a.toHSL = function () {
        return (function (r) {
          var t = r.red,
            n = r.green,
            e = r.blue,
            a = r.alpha,
            i = t / 255,
            o = n / 255,
            u = e / 255,
            l = Math.max(i, o, u),
            s = Math.min(i, o, u),
            f = l - s,
            h = (l + s) / 2,
            c = f > 0 ? f / (1 - Math.abs(2 * h - 1)) : 0;
          if (0 === f) return { hue: 0, saturation: c, lightness: h, alpha: a };
          var p = 0;
          switch (l) {
            case i:
              p = ((o - u) / f) % 6;
              break;
            case o:
              p = (u - i) / f + 2;
              break;
            case u:
              p = (o - u) / f + 4;
          }
          return { hue: 60 * p, saturation: c, lightness: h, alpha: a };
        })({
          red: this.red,
          green: this.green,
          blue: this.blue,
          alpha: this.alpha,
        });
      };
      a.getRelativeLuminance = function () {
        var r = this.red / 255,
          t = this.green / 255,
          n = this.blue / 255;
        return (
          0.2126 *
            (r <= 0.03928 ? r / 12.92 : Math.pow((r + 0.055) / 1.055, 2.4)) +
          0.7152 *
            (t <= 0.03928 ? t / 12.92 : Math.pow((t + 0.055) / 1.055, 2.4)) +
          0.0722 *
            (n <= 0.03928 ? n / 12.92 : Math.pow((n + 0.055) / 1.055, 2.4))
        );
      };
      r.parseString = function (r) {
        return null != r.match(e)
          ? this.parseColorFnString(r)
          : null != r.match(n)
          ? this.parseHexString(r)
          : void 0;
      };
      r.parseRgbString = function (t) {
        return "transparent" === t
          ? new r(0, 0, 0, 0)
          : this.parseColorFnString(t);
      };
      r.parseHexString = function (e) {
        if (null != e.match(n) && ![6, 8].includes(e.length)) {
          if ((e = e.replace("#", "")).length < 6) {
            var a = t(e, 4),
              i = a[0],
              o = a[1],
              u = a[2],
              l = a[3];
            e = i + i + o + o + u + u;
            null != l && (e += l + l);
          }
          var s = e.match(/.{1,2}/g);
          if (null != s)
            return new r(
              parseInt(s[0], 16),
              parseInt(s[1], 16),
              parseInt(s[2], 16),
              null != s[3] ? parseInt(s[3], 16) / 255 : 1
            );
        }
      };
      r.parseColorFnString = function (n) {
        var a,
          i = t(null !== (a = n.match(e)) && void 0 !== a ? a : [], 3),
          o = i[1],
          u = i[2];
        if (null != o && null != u) {
          var l = u
            .split(/\s*[,/\s]\s*/)
            .map(function (r) {
              return r.replace(",", "").trim();
            })
            .filter(function (r) {
              return "" !== r;
            })
            .map(function (r, t) {
              return (function (r, t, n) {
                if (/%$/.test(t))
                  return 3 === n
                    ? parseFloat(t) / 100
                    : (255 * parseFloat(t)) / 100;
                if ("h" === r[n]) {
                  if (/turn$/.test(t)) return 360 * parseFloat(t);
                  if (/rad$/.test(t)) return 57.3 * parseFloat(t);
                }
                return parseFloat(t);
              })(o, r, t);
            });
          if ("hsl" === o.substr(0, 3)) {
            var s = (function (r) {
              var t = r.hue,
                n = r.saturation,
                e = r.lightness,
                a = r.alpha;
              n /= 255;
              e /= 255;
              var i = (1 - Math.abs(2 * e - 1)) * n,
                o = i * (1 - Math.abs(((t / 60) % 2) - 1)),
                u = e - i / 2,
                l = (
                  t < 60
                    ? [i, o, 0]
                    : t < 120
                    ? [o, i, 0]
                    : t < 180
                    ? [0, i, o]
                    : t < 240
                    ? [0, o, i]
                    : t < 300
                    ? [o, 0, i]
                    : [i, 0, o]
                ).map(function (r) {
                  return Math.round(255 * (r + u));
                });
              return { red: l[0], green: l[1], blue: l[2], alpha: a };
            })({ hue: l[0], saturation: l[1], lightness: l[2], alpha: l[3] });
            return new r(s.red, s.green, s.blue, s.alpha);
          }
          return new r(l[0], l[1], l[2], "number" == typeof l[3] ? l[3] : 1);
        }
      };
      return r;
    })();
  function i(r, t) {
    (null == t || t > r.length) && (t = r.length);
    for (var n = 0, e = new Array(t); n < t; n++) e[n] = r[n];
    return e;
  }
  function o(r) {
    return (
      (function (r) {
        if (Array.isArray(r)) return i(r);
      })(r) ||
      (function (r) {
        if (
          ("undefined" != typeof Symbol && null != r[Symbol.iterator]) ||
          null != r["@@iterator"]
        )
          return Array.from(r);
      })(r) ||
      (function (r, t) {
        if (!r) return;
        if ("string" == typeof r) return i(r, t);
        var n = Object.prototype.toString.call(r).slice(8, -1);
        "Object" === n && r.constructor && (n = r.constructor.name);
        if ("Map" === n || "Set" === n) return Array.from(n);
        if (
          "Arguments" === n ||
          /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
        )
          return i(r, t);
      })(r) ||
      (function () {
        throw new TypeError(
          "Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
        );
      })()
    );
  }
  function u(r, t, n) {
    return 4 * (t * n + r);
  }
  function l(r, t, n, e, a) {
    var i = e - r,
      o = a - t;
    return Math.pow(i, 2) + Math.pow(o, 2) <= Math.pow(n, 2);
  }
  function s(r, t, n, e) {
    for (
      var a = (function (r, t) {
          return { x: (r / 4) % t, y: Math.floor(r / 4 / t) };
        })(t, n),
        i = a.x,
        o = a.y,
        s = e + i;
      s >= i;
      s--
    )
      for (var f = e + o; f >= o; f--)
        if (l(i, o, e, s, f)) {
          var h = i - (s - i),
            c = o - (f - o);
          r.add(u(s, f, n));
          r.add(u(s, c, n));
          r.add(u(h, f, n));
          r.add(u(h, c, n));
        }
    return r;
  }
  function f(r, t, n) {
    return o(s(new Set(), r, n, 1)).some(function (r) {
      return t[r + 3] <= 15;
    });
  }
  self.addEventListener("message", function (r) {
    var t = r.data,
      n = t.imageData,
      e = t.scaledBorderSize,
      i = t.color,
      o = t.id,
      u = (function (r, t, n) {
        var e = a.parseString(n),
          i = new Uint8ClampedArray(r.data.length),
          o = new Set();
        if (null == e) throw new Error("Invalid color");
        for (var u = 0; u < r.data.length; u += 4)
          if (!(r.data[u + 3] <= 15) && f(u, r.data, r.width)) {
            o.add(u);
            o = s(o, u, r.width, t);
          }
        o.forEach(function (r) {
          return (function (r, t, n) {
            r[t] = n.red;
            r[t + 1] = n.green;
            r[t + 2] = n.blue;
            var e;
            r[t + 3] = null !== (e = n.alpha) && void 0 !== e ? e : 255;
          })(i, r, e);
        });
        return i;
      })(n, e, i);
    self.postMessage({ border: u, id: o });
  });
})();
//# sourceMappingURL=3c55f26f667247689825.worker.js.map
