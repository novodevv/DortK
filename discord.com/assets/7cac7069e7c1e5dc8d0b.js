(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  [11248],
  {
    211248: function (module, exports, __webpack_require__) {
      "undefined" != typeof navigator &&
        ((factory = function () {
          "use strict";
          var svgNS = "http://www.w3.org/2000/svg",
            locationHref = "",
            _useWebWorker = !1,
            initialDefaultFrame = -999999,
            setWebWorker = function (t) {
              _useWebWorker = !!t;
            },
            getWebWorker = function () {
              return _useWebWorker;
            },
            setLocationHref = function (t) {
              locationHref = t;
            },
            getLocationHref = function () {
              return locationHref;
            };
          function createTag(t) {
            return document.createElement(t);
          }
          function extendPrototype(t, e) {
            var i,
              r,
              s = t.length;
            for (i = 0; i < s; i += 1) {
              r = t[i].prototype;
              for (var a in r)
                Object.prototype.hasOwnProperty.call(r, a) &&
                  (e.prototype[a] = r[a]);
            }
          }
          function getDescriptor(t, e) {
            return Object.getOwnPropertyDescriptor(t, e);
          }
          function createProxyFunction(t) {
            function e() {}
            e.prototype = t;
            return e;
          }
          var audioControllerFactory = (function () {
              function t(t) {
                this.audios = [];
                this.audioFactory = t;
                this._volume = 1;
                this._isMuted = !1;
              }
              t.prototype = {
                addAudio: function (t) {
                  this.audios.push(t);
                },
                pause: function () {
                  var t,
                    e = this.audios.length;
                  for (t = 0; t < e; t += 1) this.audios[t].pause();
                },
                resume: function () {
                  var t,
                    e = this.audios.length;
                  for (t = 0; t < e; t += 1) this.audios[t].resume();
                },
                setRate: function (t) {
                  var e,
                    i = this.audios.length;
                  for (e = 0; e < i; e += 1) this.audios[e].setRate(t);
                },
                createAudio: function (t) {
                  return this.audioFactory
                    ? this.audioFactory(t)
                    : window.Howl
                    ? new window.Howl({ src: [t] })
                    : {
                        isPlaying: !1,
                        play: function () {
                          this.isPlaying = !0;
                        },
                        seek: function () {
                          this.isPlaying = !1;
                        },
                        playing: function () {},
                        rate: function () {},
                        setVolume: function () {},
                      };
                },
                setAudioFactory: function (t) {
                  this.audioFactory = t;
                },
                setVolume: function (t) {
                  this._volume = t;
                  this._updateVolume();
                },
                mute: function () {
                  this._isMuted = !0;
                  this._updateVolume();
                },
                unmute: function () {
                  this._isMuted = !1;
                  this._updateVolume();
                },
                getVolume: function () {
                  return this._volume;
                },
                _updateVolume: function () {
                  var t,
                    e = this.audios.length;
                  for (t = 0; t < e; t += 1)
                    this.audios[t].volume(
                      this._volume * (this._isMuted ? 0 : 1)
                    );
                },
              };
              return function () {
                return new t();
              };
            })(),
            createTypedArray = (function () {
              function t(t, e) {
                var i,
                  r = 0,
                  s = [];
                switch (t) {
                  case "int16":
                  case "uint8c":
                    i = 1;
                    break;
                  default:
                    i = 1.1;
                }
                for (r = 0; r < e; r += 1) s.push(i);
                return s;
              }
              return "function" == typeof Uint8ClampedArray &&
                "function" == typeof Float32Array
                ? function (e, i) {
                    return "float32" === e
                      ? new Float32Array(i)
                      : "int16" === e
                      ? new Int16Array(i)
                      : "uint8c" === e
                      ? new Uint8ClampedArray(i)
                      : t(e, i);
                  }
                : t;
            })();
          function createSizedArray(t) {
            return Array.apply(null, { length: t });
          }
          function _typeof$6(t) {
            _typeof$6 =
              "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                ? function (t) {
                    return typeof t;
                  }
                : function (t) {
                    return t &&
                      "function" == typeof Symbol &&
                      t.constructor === Symbol &&
                      t !== Symbol.prototype
                      ? "symbol"
                      : typeof t;
                  };
            return _typeof$6(t);
          }
          var subframeEnabled = !0,
            expressionsPlugin = null,
            idPrefix$1 = "",
            isSafari = /^((?!chrome|android).)*safari/i.test(
              navigator.userAgent
            ),
            _shouldRoundValues = !1,
            bmPow = Math.pow,
            bmSqrt = Math.sqrt,
            bmFloor = Math.floor,
            bmMax = Math.max,
            bmMin = Math.min,
            BMMath = {};
          !(function () {
            var t,
              e = [
                "abs",
                "acos",
                "acosh",
                "asin",
                "asinh",
                "atan",
                "atanh",
                "atan2",
                "ceil",
                "cbrt",
                "expm1",
                "clz32",
                "cos",
                "cosh",
                "exp",
                "floor",
                "fround",
                "hypot",
                "imul",
                "log",
                "log1p",
                "log2",
                "log10",
                "max",
                "min",
                "pow",
                "random",
                "round",
                "sign",
                "sin",
                "sinh",
                "sqrt",
                "tan",
                "tanh",
                "trunc",
                "E",
                "LN10",
                "LN2",
                "LOG10E",
                "LOG2E",
                "PI",
                "SQRT1_2",
                "SQRT2",
              ],
              i = e.length;
            for (t = 0; t < i; t += 1) BMMath[e[t]] = Math[e[t]];
          })();
          function ProjectInterface$1() {
            return {};
          }
          BMMath.random = Math.random;
          BMMath.abs = function (t) {
            if ("object" === _typeof$6(t) && t.length) {
              var e,
                i = createSizedArray(t.length),
                r = t.length;
              for (e = 0; e < r; e += 1) i[e] = Math.abs(t[e]);
              return i;
            }
            return Math.abs(t);
          };
          var defaultCurveSegments = 150,
            degToRads = Math.PI / 180,
            roundCorner = 0.5519;
          function roundValues(t) {
            _shouldRoundValues = !!t;
          }
          function bmRnd(t) {
            return _shouldRoundValues ? Math.round(t) : t;
          }
          function styleDiv(t) {
            t.style.position = "absolute";
            t.style.top = 0;
            t.style.left = 0;
            t.style.display = "block";
            t.style.transformOrigin = "0 0";
            t.style.webkitTransformOrigin = "0 0";
            t.style.backfaceVisibility = "visible";
            t.style.webkitBackfaceVisibility = "visible";
            t.style.transformStyle = "preserve-3d";
            t.style.webkitTransformStyle = "preserve-3d";
            t.style.mozTransformStyle = "preserve-3d";
          }
          function BMEnterFrameEvent(t, e, i, r) {
            this.type = t;
            this.currentTime = e;
            this.totalTime = i;
            this.direction = r < 0 ? -1 : 1;
          }
          function BMCompleteEvent(t, e) {
            this.type = t;
            this.direction = e < 0 ? -1 : 1;
          }
          function BMCompleteLoopEvent(t, e, i, r) {
            this.type = t;
            this.currentLoop = i;
            this.totalLoops = e;
            this.direction = r < 0 ? -1 : 1;
          }
          function BMSegmentStartEvent(t, e, i) {
            this.type = t;
            this.firstFrame = e;
            this.totalFrames = i;
          }
          function BMDestroyEvent(t, e) {
            this.type = t;
            this.target = e;
          }
          function BMRenderFrameErrorEvent(t, e) {
            this.type = "renderFrameError";
            this.nativeError = t;
            this.currentTime = e;
          }
          function BMConfigErrorEvent(t) {
            this.type = "configError";
            this.nativeError = t;
          }
          function BMAnimationConfigErrorEvent(t, e) {
            this.type = t;
            this.nativeError = e;
          }
          var createElementID =
              ((_count = 0),
              function () {
                return idPrefix$1 + "__lottie_element_" + (_count += 1);
              }),
            _count;
          function HSVtoRGB(t, e, i) {
            var r, s, a, n, o, h, l, p;
            h = i * (1 - e);
            l = i * (1 - (o = 6 * t - (n = Math.floor(6 * t))) * e);
            p = i * (1 - (1 - o) * e);
            switch (n % 6) {
              case 0:
                r = i;
                s = p;
                a = h;
                break;
              case 1:
                r = l;
                s = i;
                a = h;
                break;
              case 2:
                r = h;
                s = i;
                a = p;
                break;
              case 3:
                r = h;
                s = l;
                a = i;
                break;
              case 4:
                r = p;
                s = h;
                a = i;
                break;
              case 5:
                r = i;
                s = h;
                a = l;
            }
            return [r, s, a];
          }
          function RGBtoHSV(t, e, i) {
            var r,
              s = Math.max(t, e, i),
              a = Math.min(t, e, i),
              n = s - a,
              o = 0 === s ? 0 : n / s,
              h = s / 255;
            switch (s) {
              case a:
                r = 0;
                break;
              case t:
                r = e - i + n * (e < i ? 6 : 0);
                r /= 6 * n;
                break;
              case e:
                r = i - t + 2 * n;
                r /= 6 * n;
                break;
              case i:
                r = t - e + 4 * n;
                r /= 6 * n;
            }
            return [r, o, h];
          }
          function addSaturationToRGB(t, e) {
            var i = RGBtoHSV(255 * t[0], 255 * t[1], 255 * t[2]);
            i[1] += e;
            i[1] > 1 ? (i[1] = 1) : i[1] <= 0 && (i[1] = 0);
            return HSVtoRGB(i[0], i[1], i[2]);
          }
          function addBrightnessToRGB(t, e) {
            var i = RGBtoHSV(255 * t[0], 255 * t[1], 255 * t[2]);
            i[2] += e;
            i[2] > 1 ? (i[2] = 1) : i[2] < 0 && (i[2] = 0);
            return HSVtoRGB(i[0], i[1], i[2]);
          }
          function addHueToRGB(t, e) {
            var i = RGBtoHSV(255 * t[0], 255 * t[1], 255 * t[2]);
            i[0] += e / 360;
            i[0] > 1 ? (i[0] -= 1) : i[0] < 0 && (i[0] += 1);
            return HSVtoRGB(i[0], i[1], i[2]);
          }
          var rgbToHex = (function () {
              var t,
                e,
                i = [];
              for (t = 0; t < 256; t += 1) {
                e = t.toString(16);
                i[t] = 1 === e.length ? "0" + e : e;
              }
              return function (t, e, r) {
                t < 0 && (t = 0);
                e < 0 && (e = 0);
                r < 0 && (r = 0);
                return "#" + i[t] + i[e] + i[r];
              };
            })(),
            setSubframeEnabled = function (t) {
              subframeEnabled = !!t;
            },
            getSubframeEnabled = function () {
              return subframeEnabled;
            },
            setExpressionsPlugin = function (t) {
              expressionsPlugin = t;
            },
            getExpressionsPlugin = function () {
              return expressionsPlugin;
            },
            setDefaultCurveSegments = function (t) {
              defaultCurveSegments = t;
            },
            getDefaultCurveSegments = function () {
              return defaultCurveSegments;
            },
            setIdPrefix = function (t) {
              idPrefix$1 = t;
            },
            getIdPrefix = function () {
              return idPrefix$1;
            };
          function createNS(t) {
            return document.createElementNS(svgNS, t);
          }
          function _typeof$5(t) {
            _typeof$5 =
              "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                ? function (t) {
                    return typeof t;
                  }
                : function (t) {
                    return t &&
                      "function" == typeof Symbol &&
                      t.constructor === Symbol &&
                      t !== Symbol.prototype
                      ? "symbol"
                      : typeof t;
                  };
            return _typeof$5(t);
          }
          var dataManager = (function () {
              var t,
                e,
                i = 1,
                r = [],
                s = {
                  onmessage: function () {},
                  postMessage: function (e) {
                    t({ data: e });
                  },
                },
                a = {
                  postMessage: function (t) {
                    s.onmessage({ data: t });
                  },
                };
              function n() {
                if (!e) {
                  e = (function (e) {
                    if (window.Worker && window.Blob && getWebWorker()) {
                      var i = new Blob(
                          [
                            "var _workerSelf = self; self.onmessage = ",
                            e.toString(),
                          ],
                          { type: "text/javascript" }
                        ),
                        r = URL.createObjectURL(i);
                      return new Worker(r);
                    }
                    t = e;
                    return s;
                  })(function (t) {
                    a.dataManager ||
                      (a.dataManager = (function () {
                        function t(s, a) {
                          var n,
                            o,
                            h,
                            l,
                            p,
                            m,
                            c = s.length;
                          for (o = 0; o < c; o += 1)
                            if ("ks" in (n = s[o]) && !n.completed) {
                              n.completed = !0;
                              n.tt && (s[o - 1].td = n.tt);
                              if (n.hasMask) {
                                var d = n.masksProperties;
                                l = d.length;
                                for (h = 0; h < l; h += 1)
                                  if (d[h].pt.k.i) r(d[h].pt.k);
                                  else {
                                    m = d[h].pt.k.length;
                                    for (p = 0; p < m; p += 1) {
                                      d[h].pt.k[p].s && r(d[h].pt.k[p].s[0]);
                                      d[h].pt.k[p].e && r(d[h].pt.k[p].e[0]);
                                    }
                                  }
                              }
                              if (0 === n.ty) {
                                n.layers = e(n.refId, a);
                                t(n.layers, a);
                              } else
                                4 === n.ty ? i(n.shapes) : 5 === n.ty && f(n);
                            }
                        }
                        function e(t, e) {
                          var i = (function (t, e) {
                            for (var i = 0, r = e.length; i < r; ) {
                              if (e[i].id === t) return e[i];
                              i += 1;
                            }
                            return null;
                          })(t, e);
                          if (i) {
                            if (!i.layers.__used) {
                              i.layers.__used = !0;
                              return i.layers;
                            }
                            return JSON.parse(JSON.stringify(i.layers));
                          }
                          return null;
                        }
                        function i(t) {
                          var e, s, a;
                          for (e = t.length - 1; e >= 0; e -= 1)
                            if ("sh" === t[e].ty)
                              if (t[e].ks.k.i) r(t[e].ks.k);
                              else {
                                a = t[e].ks.k.length;
                                for (s = 0; s < a; s += 1) {
                                  t[e].ks.k[s].s && r(t[e].ks.k[s].s[0]);
                                  t[e].ks.k[s].e && r(t[e].ks.k[s].e[0]);
                                }
                              }
                            else "gr" === t[e].ty && i(t[e].it);
                        }
                        function r(t) {
                          var e,
                            i = t.i.length;
                          for (e = 0; e < i; e += 1) {
                            t.i[e][0] += t.v[e][0];
                            t.i[e][1] += t.v[e][1];
                            t.o[e][0] += t.v[e][0];
                            t.o[e][1] += t.v[e][1];
                          }
                        }
                        function s(t, e) {
                          var i = e ? e.split(".") : [100, 100, 100];
                          return (
                            t[0] > i[0] ||
                            (!(i[0] > t[0]) &&
                              (t[1] > i[1] ||
                                (!(i[1] > t[1]) &&
                                  (t[2] > i[2] || (!(i[2] > t[2]) && null)))))
                          );
                        }
                        var a,
                          n = (function () {
                            var t = [4, 4, 14];
                            function e(t) {
                              var e,
                                i,
                                r,
                                s = t.length;
                              for (e = 0; e < s; e += 1)
                                5 === t[e].ty &&
                                  ((r = void 0),
                                  (r = (i = t[e]).t.d),
                                  (i.t.d = { k: [{ s: r, t: 0 }] }));
                            }
                            return function (i) {
                              if (s(t, i.v)) {
                                e(i.layers);
                                if (i.assets) {
                                  var r,
                                    a = i.assets.length;
                                  for (r = 0; r < a; r += 1)
                                    i.assets[r].layers && e(i.assets[r].layers);
                                }
                              }
                            };
                          })(),
                          o =
                            ((a = [4, 7, 99]),
                            function (t) {
                              if (t.chars && !s(a, t.v)) {
                                var e,
                                  r = t.chars.length;
                                for (e = 0; e < r; e += 1) {
                                  var n = t.chars[e];
                                  if (n.data && n.data.shapes) {
                                    i(n.data.shapes);
                                    n.data.ip = 0;
                                    n.data.op = 99999;
                                    n.data.st = 0;
                                    n.data.sr = 1;
                                    n.data.ks = {
                                      p: { k: [0, 0], a: 0 },
                                      s: { k: [100, 100], a: 0 },
                                      a: { k: [0, 0], a: 0 },
                                      r: { k: 0, a: 0 },
                                      o: { k: 100, a: 0 },
                                    };
                                    if (!t.chars[e].t) {
                                      n.data.shapes.push({ ty: "no" });
                                      n.data.shapes[0].it.push({
                                        p: { k: [0, 0], a: 0 },
                                        s: { k: [100, 100], a: 0 },
                                        a: { k: [0, 0], a: 0 },
                                        r: { k: 0, a: 0 },
                                        o: { k: 100, a: 0 },
                                        sk: { k: 0, a: 0 },
                                        sa: { k: 0, a: 0 },
                                        ty: "tr",
                                      });
                                    }
                                  }
                                }
                              }
                            }),
                          h = (function () {
                            var t = [5, 7, 15];
                            function e(t) {
                              var e = t.t.p;
                              "number" == typeof e.a &&
                                (e.a = { a: 0, k: e.a });
                              "number" == typeof e.p &&
                                (e.p = { a: 0, k: e.p });
                              "number" == typeof e.r &&
                                (e.r = { a: 0, k: e.r });
                            }
                            function i(t) {
                              var i,
                                r = t.length;
                              for (i = 0; i < r; i += 1)
                                5 === t[i].ty && e(t[i]);
                            }
                            return function (e) {
                              if (s(t, e.v)) {
                                i(e.layers);
                                if (e.assets) {
                                  var r,
                                    a = e.assets.length;
                                  for (r = 0; r < a; r += 1)
                                    e.assets[r].layers && i(e.assets[r].layers);
                                }
                              }
                            };
                          })(),
                          l = (function () {
                            var t = [4, 1, 9];
                            function e(t) {
                              var i,
                                r,
                                s,
                                a = t.length;
                              for (i = 0; i < a; i += 1)
                                if ("gr" === t[i].ty) e(t[i].it);
                                else if ("fl" === t[i].ty || "st" === t[i].ty)
                                  if (t[i].c.k && t[i].c.k[0].i) {
                                    s = t[i].c.k.length;
                                    for (r = 0; r < s; r += 1) {
                                      if (t[i].c.k[r].s) {
                                        t[i].c.k[r].s[0] /= 255;
                                        t[i].c.k[r].s[1] /= 255;
                                        t[i].c.k[r].s[2] /= 255;
                                        t[i].c.k[r].s[3] /= 255;
                                      }
                                      if (t[i].c.k[r].e) {
                                        t[i].c.k[r].e[0] /= 255;
                                        t[i].c.k[r].e[1] /= 255;
                                        t[i].c.k[r].e[2] /= 255;
                                        t[i].c.k[r].e[3] /= 255;
                                      }
                                    }
                                  } else {
                                    t[i].c.k[0] /= 255;
                                    t[i].c.k[1] /= 255;
                                    t[i].c.k[2] /= 255;
                                    t[i].c.k[3] /= 255;
                                  }
                            }
                            function i(t) {
                              var i,
                                r = t.length;
                              for (i = 0; i < r; i += 1)
                                4 === t[i].ty && e(t[i].shapes);
                            }
                            return function (e) {
                              if (s(t, e.v)) {
                                i(e.layers);
                                if (e.assets) {
                                  var r,
                                    a = e.assets.length;
                                  for (r = 0; r < a; r += 1)
                                    e.assets[r].layers && i(e.assets[r].layers);
                                }
                              }
                            };
                          })(),
                          p = (function () {
                            var t = [4, 4, 18];
                            function e(t) {
                              var i, r, s;
                              for (i = t.length - 1; i >= 0; i -= 1)
                                if ("sh" === t[i].ty)
                                  if (t[i].ks.k.i) t[i].ks.k.c = t[i].closed;
                                  else {
                                    s = t[i].ks.k.length;
                                    for (r = 0; r < s; r += 1) {
                                      t[i].ks.k[r].s &&
                                        (t[i].ks.k[r].s[0].c = t[i].closed);
                                      t[i].ks.k[r].e &&
                                        (t[i].ks.k[r].e[0].c = t[i].closed);
                                    }
                                  }
                                else "gr" === t[i].ty && e(t[i].it);
                            }
                            function i(t) {
                              var i,
                                r,
                                s,
                                a,
                                n,
                                o,
                                h = t.length;
                              for (r = 0; r < h; r += 1) {
                                if ((i = t[r]).hasMask) {
                                  var l = i.masksProperties;
                                  a = l.length;
                                  for (s = 0; s < a; s += 1)
                                    if (l[s].pt.k.i) l[s].pt.k.c = l[s].cl;
                                    else {
                                      o = l[s].pt.k.length;
                                      for (n = 0; n < o; n += 1) {
                                        l[s].pt.k[n].s &&
                                          (l[s].pt.k[n].s[0].c = l[s].cl);
                                        l[s].pt.k[n].e &&
                                          (l[s].pt.k[n].e[0].c = l[s].cl);
                                      }
                                    }
                                }
                                4 === i.ty && e(i.shapes);
                              }
                            }
                            return function (e) {
                              if (s(t, e.v)) {
                                i(e.layers);
                                if (e.assets) {
                                  var r,
                                    a = e.assets.length;
                                  for (r = 0; r < a; r += 1)
                                    e.assets[r].layers && i(e.assets[r].layers);
                                }
                              }
                            };
                          })();
                        function f(t) {
                          0 === t.t.a.length && t.t.p;
                        }
                        var m = {
                          completeData: function (i) {
                            if (!i.__complete) {
                              l(i);
                              n(i);
                              o(i);
                              h(i);
                              p(i);
                              t(i.layers, i.assets);
                              !(function (i, r) {
                                if (i) {
                                  var s = 0,
                                    a = i.length;
                                  for (s = 0; s < a; s += 1)
                                    if (1 === i[s].t) {
                                      i[s].data.layers = e(i[s].data.refId, r);
                                      t(i[s].data.layers, r);
                                    }
                                }
                              })(i.chars, i.assets);
                              i.__complete = !0;
                            }
                          },
                        };
                        m.checkColors = l;
                        m.checkChars = o;
                        m.checkPathProperties = h;
                        m.checkShapes = p;
                        m.completeLayers = t;
                        return m;
                      })());
                    a.assetLoader ||
                      (a.assetLoader = (function () {
                        function t(t) {
                          var e = t.getResponseHeader("content-type");
                          return (e &&
                            "json" === t.responseType &&
                            -1 !== e.indexOf("json")) ||
                            (t.response && "object" === _typeof$5(t.response))
                            ? t.response
                            : t.response && "string" == typeof t.response
                            ? JSON.parse(t.response)
                            : t.responseText
                            ? JSON.parse(t.responseText)
                            : null;
                        }
                        return {
                          load: function (e, i, r, s) {
                            var a,
                              n = new XMLHttpRequest();
                            try {
                              n.responseType = "json";
                            } catch (t) {}
                            n.onreadystatechange = function () {
                              if (4 === n.readyState)
                                if (200 === n.status) {
                                  a = t(n);
                                  r(a);
                                } else
                                  try {
                                    a = t(n);
                                    r(a);
                                  } catch (t) {
                                    s && s(t);
                                  }
                            };
                            try {
                              n.open("GET", e, !0);
                            } catch (t) {
                              n.open("GET", i + "/" + e, !0);
                            }
                            n.send();
                          },
                        };
                      })());
                    if ("loadAnimation" === t.data.type)
                      a.assetLoader.load(
                        t.data.path,
                        t.data.fullPath,
                        function (e) {
                          a.dataManager.completeData(e);
                          a.postMessage({
                            id: t.data.id,
                            payload: e,
                            status: "success",
                          });
                        },
                        function () {
                          a.postMessage({ id: t.data.id, status: "error" });
                        }
                      );
                    else if ("complete" === t.data.type) {
                      var e = t.data.animation;
                      a.dataManager.completeData(e);
                      a.postMessage({
                        id: t.data.id,
                        payload: e,
                        status: "success",
                      });
                    } else
                      "loadData" === t.data.type &&
                        a.assetLoader.load(
                          t.data.path,
                          t.data.fullPath,
                          function (e) {
                            a.postMessage({
                              id: t.data.id,
                              payload: e,
                              status: "success",
                            });
                          },
                          function () {
                            a.postMessage({ id: t.data.id, status: "error" });
                          }
                        );
                  });
                  e.onmessage = function (t) {
                    var e = t.data,
                      i = e.id,
                      s = r[i];
                    r[i] = null;
                    "success" === e.status
                      ? s.onComplete(e.payload)
                      : s.onError && s.onError();
                  };
                }
              }
              function o(t, e) {
                var s = "processId_" + (i += 1);
                r[s] = { onComplete: t, onError: e };
                return s;
              }
              return {
                loadAnimation: function (t, i, r) {
                  n();
                  var s = o(i, r);
                  e.postMessage({
                    type: "loadAnimation",
                    path: t,
                    fullPath: window.location.origin + window.location.pathname,
                    id: s,
                  });
                },
                loadData: function (t, i, r) {
                  n();
                  var s = o(i, r);
                  e.postMessage({
                    type: "loadData",
                    path: t,
                    fullPath: window.location.origin + window.location.pathname,
                    id: s,
                  });
                },
                completeAnimation: function (t, i, r) {
                  n();
                  var s = o(i, r);
                  e.postMessage({ type: "complete", animation: t, id: s });
                },
              };
            })(),
            ImagePreloader = (function () {
              var t = (function () {
                var t = createTag("canvas");
                t.width = 1;
                t.height = 1;
                var e = t.getContext("2d");
                e.fillStyle = "rgba(0,0,0,0)";
                e.fillRect(0, 0, 1, 1);
                return t;
              })();
              function e() {
                this.loadedAssets += 1;
                this.loadedAssets === this.totalImages &&
                  this.loadedFootagesCount === this.totalFootages &&
                  this.imagesLoadedCb &&
                  this.imagesLoadedCb(null);
              }
              function i() {
                this.loadedFootagesCount += 1;
                this.loadedAssets === this.totalImages &&
                  this.loadedFootagesCount === this.totalFootages &&
                  this.imagesLoadedCb &&
                  this.imagesLoadedCb(null);
              }
              function r(t, e, i) {
                var r = "";
                if (t.e) r = t.p;
                else if (e) {
                  var s = t.p;
                  -1 !== s.indexOf("images/") && (s = s.split("/")[1]);
                  r = e + s;
                } else {
                  r = i;
                  r += t.u ? t.u : "";
                  r += t.p;
                }
                return r;
              }
              function s(t) {
                var e = 0,
                  i = setInterval(
                    function () {
                      if (t.getBBox().width || e > 500) {
                        this._imageLoaded();
                        clearInterval(i);
                      }
                      e += 1;
                    }.bind(this),
                    50
                  );
              }
              function a(t) {
                var e = { assetData: t },
                  i = r(t, this.assetsPath, this.path);
                dataManager.loadData(
                  i,
                  function (t) {
                    e.img = t;
                    this._footageLoaded();
                  }.bind(this),
                  function () {
                    e.img = {};
                    this._footageLoaded();
                  }.bind(this)
                );
                return e;
              }
              function n() {
                this._imageLoaded = e.bind(this);
                this._footageLoaded = i.bind(this);
                this.testImageLoaded = s.bind(this);
                this.createFootageData = a.bind(this);
                this.assetsPath = "";
                this.path = "";
                this.totalImages = 0;
                this.totalFootages = 0;
                this.loadedAssets = 0;
                this.loadedFootagesCount = 0;
                this.imagesLoadedCb = null;
                this.images = [];
              }
              n.prototype = {
                loadAssets: function (t, e) {
                  this.imagesLoadedCb = e;
                  var i,
                    r = t.length;
                  for (i = 0; i < r; i += 1)
                    if (!t[i].layers)
                      if (t[i].t && "seq" !== t[i].t) {
                        if (3 === t[i].t) {
                          this.totalFootages += 1;
                          this.images.push(this.createFootageData(t[i]));
                        }
                      } else {
                        this.totalImages += 1;
                        this.images.push(this._createImageData(t[i]));
                      }
                },
                setAssetsPath: function (t) {
                  this.assetsPath = t || "";
                },
                setPath: function (t) {
                  this.path = t || "";
                },
                loadedImages: function () {
                  return this.totalImages === this.loadedAssets;
                },
                loadedFootages: function () {
                  return this.totalFootages === this.loadedFootagesCount;
                },
                destroy: function () {
                  this.imagesLoadedCb = null;
                  this.images.length = 0;
                },
                getAsset: function (t) {
                  for (var e = 0, i = this.images.length; e < i; ) {
                    if (this.images[e].assetData === t)
                      return this.images[e].img;
                    e += 1;
                  }
                  return null;
                },
                createImgData: function (e) {
                  var i = r(e, this.assetsPath, this.path),
                    s = createTag("img");
                  s.crossOrigin = "anonymous";
                  s.addEventListener("load", this._imageLoaded, !1);
                  s.addEventListener(
                    "error",
                    function () {
                      a.img = t;
                      this._imageLoaded();
                    }.bind(this),
                    !1
                  );
                  s.src = i;
                  var a = { img: s, assetData: e };
                  return a;
                },
                createImageData: function (e) {
                  var i = r(e, this.assetsPath, this.path),
                    s = createNS("image");
                  isSafari
                    ? this.testImageLoaded(s)
                    : s.addEventListener("load", this._imageLoaded, !1);
                  s.addEventListener(
                    "error",
                    function () {
                      a.img = t;
                      this._imageLoaded();
                    }.bind(this),
                    !1
                  );
                  s.setAttributeNS("http://www.w3.org/1999/xlink", "href", i);
                  this._elementHelper.append
                    ? this._elementHelper.append(s)
                    : this._elementHelper.appendChild(s);
                  var a = { img: s, assetData: e };
                  return a;
                },
                imageLoaded: e,
                footageLoaded: i,
                setCacheType: function (t, e) {
                  if ("svg" === t) {
                    this._elementHelper = e;
                    this._createImageData = this.createImageData.bind(this);
                  } else this._createImageData = this.createImgData.bind(this);
                },
              };
              return n;
            })();
          function BaseEvent() {}
          BaseEvent.prototype = {
            triggerEvent: function (t, e) {
              if (this._cbs[t])
                for (var i = this._cbs[t], r = 0; r < i.length; r += 1) i[r](e);
            },
            addEventListener: function (t, e) {
              this._cbs[t] || (this._cbs[t] = []);
              this._cbs[t].push(e);
              return function () {
                this.removeEventListener(t, e);
              }.bind(this);
            },
            removeEventListener: function (t, e) {
              if (e) {
                if (this._cbs[t]) {
                  for (var i = 0, r = this._cbs[t].length; i < r; ) {
                    if (this._cbs[t][i] === e) {
                      this._cbs[t].splice(i, 1);
                      i -= 1;
                      r -= 1;
                    }
                    i += 1;
                  }
                  this._cbs[t].length || (this._cbs[t] = null);
                }
              } else this._cbs[t] = null;
            },
          };
          var markerParser = (function () {
              function t(t) {
                for (
                  var e, i = t.split("\r\n"), r = {}, s = 0, a = 0;
                  a < i.length;
                  a += 1
                )
                  if (2 === (e = i[a].split(":")).length) {
                    r[e[0]] = e[1].trim();
                    s += 1;
                  }
                if (0 === s) throw new Error();
                return r;
              }
              return function (e) {
                for (var i = [], r = 0; r < e.length; r += 1) {
                  var s = e[r],
                    a = { time: s.tm, duration: s.dr };
                  try {
                    a.payload = JSON.parse(e[r].cm);
                  } catch (i) {
                    try {
                      a.payload = t(e[r].cm);
                    } catch (t) {
                      a.payload = { name: e[r].cm };
                    }
                  }
                  i.push(a);
                }
                return i;
              };
            })(),
            ProjectInterface = (function () {
              function t(t) {
                this.compositions.push(t);
              }
              return function () {
                function e(t) {
                  for (var e = 0, i = this.compositions.length; e < i; ) {
                    if (
                      this.compositions[e].data &&
                      this.compositions[e].data.nm === t
                    ) {
                      this.compositions[e].prepareFrame &&
                        this.compositions[e].data.xt &&
                        this.compositions[e].prepareFrame(this.currentFrame);
                      return this.compositions[e].compInterface;
                    }
                    e += 1;
                  }
                  return null;
                }
                e.compositions = [];
                e.currentFrame = 0;
                e.registerComposition = t;
                return e;
              };
            })(),
            renderers = {},
            registerRenderer = function (t, e) {
              renderers[t] = e;
            };
          function getRenderer(t) {
            return renderers[t];
          }
          function _typeof$4(t) {
            _typeof$4 =
              "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                ? function (t) {
                    return typeof t;
                  }
                : function (t) {
                    return t &&
                      "function" == typeof Symbol &&
                      t.constructor === Symbol &&
                      t !== Symbol.prototype
                      ? "symbol"
                      : typeof t;
                  };
            return _typeof$4(t);
          }
          var AnimationItem = function () {
            this._cbs = [];
            this.name = "";
            this.path = "";
            this.isLoaded = !1;
            this.currentFrame = 0;
            this.currentRawFrame = 0;
            this.firstFrame = 0;
            this.totalFrames = 0;
            this.frameRate = 0;
            this.frameMult = 0;
            this.playSpeed = 1;
            this.playDirection = 1;
            this.playCount = 0;
            this.animationData = {};
            this.assets = [];
            this.isPaused = !0;
            this.autoplay = !1;
            this.loop = !0;
            this.renderer = null;
            this.animationID = createElementID();
            this.assetsPath = "";
            this.timeCompleted = 0;
            this.segmentPos = 0;
            this.isSubframeEnabled = getSubframeEnabled();
            this.segments = [];
            this._idle = !0;
            this._completedLoop = !1;
            this.projectInterface = ProjectInterface();
            this.imagePreloader = new ImagePreloader();
            this.audioController = audioControllerFactory();
            this.markers = [];
            this.configAnimation = this.configAnimation.bind(this);
            this.onSetupError = this.onSetupError.bind(this);
            this.onSegmentComplete = this.onSegmentComplete.bind(this);
            this.drawnFrameEvent = new BMEnterFrameEvent("drawnFrame", 0, 0, 0);
          };
          extendPrototype([BaseEvent], AnimationItem);
          AnimationItem.prototype.setParams = function (t) {
            (t.wrapper || t.container) &&
              (this.wrapper = t.wrapper || t.container);
            var e = "svg";
            t.animType ? (e = t.animType) : t.renderer && (e = t.renderer);
            var i = getRenderer(e);
            this.renderer = new i(this, t.rendererSettings);
            this.imagePreloader.setCacheType(e, this.renderer.globalData.defs);
            this.renderer.setProjectInterface(this.projectInterface);
            this.animType = e;
            "" === t.loop ||
            null === t.loop ||
            void 0 === t.loop ||
            !0 === t.loop
              ? (this.loop = !0)
              : !1 === t.loop
              ? (this.loop = !1)
              : (this.loop = parseInt(t.loop, 10));
            this.autoplay = !("autoplay" in t) || t.autoplay;
            this.name = t.name ? t.name : "";
            this.autoloadSegments =
              !Object.prototype.hasOwnProperty.call(t, "autoloadSegments") ||
              t.autoloadSegments;
            this.assetsPath = t.assetsPath;
            this.initialSegment = t.initialSegment;
            t.audioFactory &&
              this.audioController.setAudioFactory(t.audioFactory);
            if (t.animationData) this.setupAnimation(t.animationData);
            else if (t.path) {
              -1 !== t.path.lastIndexOf("\\")
                ? (this.path = t.path.substr(0, t.path.lastIndexOf("\\") + 1))
                : (this.path = t.path.substr(0, t.path.lastIndexOf("/") + 1));
              this.fileName = t.path.substr(t.path.lastIndexOf("/") + 1);
              this.fileName = this.fileName.substr(
                0,
                this.fileName.lastIndexOf(".json")
              );
              dataManager.loadAnimation(
                t.path,
                this.configAnimation,
                this.onSetupError
              );
            }
          };
          AnimationItem.prototype.onSetupError = function () {
            this.trigger("data_failed");
          };
          AnimationItem.prototype.setupAnimation = function (t) {
            dataManager.completeAnimation(t, this.configAnimation);
          };
          AnimationItem.prototype.setData = function (t, e) {
            e && "object" !== _typeof$4(e) && (e = JSON.parse(e));
            var i = { wrapper: t, animationData: e },
              r = t.attributes;
            i.path = r.getNamedItem("data-animation-path")
              ? r.getNamedItem("data-animation-path").value
              : r.getNamedItem("data-bm-path")
              ? r.getNamedItem("data-bm-path").value
              : r.getNamedItem("bm-path")
              ? r.getNamedItem("bm-path").value
              : "";
            i.animType = r.getNamedItem("data-anim-type")
              ? r.getNamedItem("data-anim-type").value
              : r.getNamedItem("data-bm-type")
              ? r.getNamedItem("data-bm-type").value
              : r.getNamedItem("bm-type")
              ? r.getNamedItem("bm-type").value
              : r.getNamedItem("data-bm-renderer")
              ? r.getNamedItem("data-bm-renderer").value
              : r.getNamedItem("bm-renderer")
              ? r.getNamedItem("bm-renderer").value
              : "canvas";
            var s = r.getNamedItem("data-anim-loop")
              ? r.getNamedItem("data-anim-loop").value
              : r.getNamedItem("data-bm-loop")
              ? r.getNamedItem("data-bm-loop").value
              : r.getNamedItem("bm-loop")
              ? r.getNamedItem("bm-loop").value
              : "";
            "false" === s
              ? (i.loop = !1)
              : "true" === s
              ? (i.loop = !0)
              : "" !== s && (i.loop = parseInt(s, 10));
            var a = r.getNamedItem("data-anim-autoplay")
              ? r.getNamedItem("data-anim-autoplay").value
              : r.getNamedItem("data-bm-autoplay")
              ? r.getNamedItem("data-bm-autoplay").value
              : !r.getNamedItem("bm-autoplay") ||
                r.getNamedItem("bm-autoplay").value;
            i.autoplay = "false" !== a;
            i.name = r.getNamedItem("data-name")
              ? r.getNamedItem("data-name").value
              : r.getNamedItem("data-bm-name")
              ? r.getNamedItem("data-bm-name").value
              : r.getNamedItem("bm-name")
              ? r.getNamedItem("bm-name").value
              : "";
            "false" ===
              (r.getNamedItem("data-anim-prerender")
                ? r.getNamedItem("data-anim-prerender").value
                : r.getNamedItem("data-bm-prerender")
                ? r.getNamedItem("data-bm-prerender").value
                : r.getNamedItem("bm-prerender")
                ? r.getNamedItem("bm-prerender").value
                : "") && (i.prerender = !1);
            this.setParams(i);
          };
          AnimationItem.prototype.includeLayers = function (t) {
            if (t.op > this.animationData.op) {
              this.animationData.op = t.op;
              this.totalFrames = Math.floor(t.op - this.animationData.ip);
            }
            var e,
              i,
              r = this.animationData.layers,
              s = r.length,
              a = t.layers,
              n = a.length;
            for (i = 0; i < n; i += 1) {
              e = 0;
              for (; e < s; ) {
                if (r[e].id === a[i].id) {
                  r[e] = a[i];
                  break;
                }
                e += 1;
              }
            }
            if (t.chars || t.fonts) {
              this.renderer.globalData.fontManager.addChars(t.chars);
              this.renderer.globalData.fontManager.addFonts(
                t.fonts,
                this.renderer.globalData.defs
              );
            }
            if (t.assets) {
              s = t.assets.length;
              for (e = 0; e < s; e += 1)
                this.animationData.assets.push(t.assets[e]);
            }
            this.animationData.__complete = !1;
            dataManager.completeAnimation(
              this.animationData,
              this.onSegmentComplete
            );
          };
          AnimationItem.prototype.onSegmentComplete = function (t) {
            this.animationData = t;
            var e = getExpressionsPlugin();
            e && e.initExpressions(this);
            this.loadNextSegment();
          };
          AnimationItem.prototype.loadNextSegment = function () {
            var t = this.animationData.segments;
            if (t && 0 !== t.length && this.autoloadSegments) {
              var e = t.shift();
              this.timeCompleted = e.time * this.frameRate;
              var i =
                this.path + this.fileName + "_" + this.segmentPos + ".json";
              this.segmentPos += 1;
              dataManager.loadData(
                i,
                this.includeLayers.bind(this),
                function () {
                  this.trigger("data_failed");
                }.bind(this)
              );
            } else {
              this.trigger("data_ready");
              this.timeCompleted = this.totalFrames;
            }
          };
          AnimationItem.prototype.loadSegments = function () {
            this.animationData.segments ||
              (this.timeCompleted = this.totalFrames);
            this.loadNextSegment();
          };
          AnimationItem.prototype.imagesLoaded = function () {
            this.trigger("loaded_images");
            this.checkLoaded();
          };
          AnimationItem.prototype.preloadImages = function () {
            this.imagePreloader.setAssetsPath(this.assetsPath);
            this.imagePreloader.setPath(this.path);
            this.imagePreloader.loadAssets(
              this.animationData.assets,
              this.imagesLoaded.bind(this)
            );
          };
          AnimationItem.prototype.configAnimation = function (t) {
            if (this.renderer)
              try {
                this.animationData = t;
                if (this.initialSegment) {
                  this.totalFrames = Math.floor(
                    this.initialSegment[1] - this.initialSegment[0]
                  );
                  this.firstFrame = Math.round(this.initialSegment[0]);
                } else {
                  this.totalFrames = Math.floor(
                    this.animationData.op - this.animationData.ip
                  );
                  this.firstFrame = Math.round(this.animationData.ip);
                }
                this.renderer.configAnimation(t);
                t.assets || (t.assets = []);
                this.assets = this.animationData.assets;
                this.frameRate = this.animationData.fr;
                this.frameMult = this.animationData.fr / 1e3;
                this.renderer.searchExtraCompositions(t.assets);
                this.markers = markerParser(t.markers || []);
                this.trigger("config_ready");
                this.preloadImages();
                this.loadSegments();
                this.updaFrameModifier();
                this.waitForFontsLoaded();
                this.isPaused && this.audioController.pause();
              } catch (t) {
                this.triggerConfigError(t);
              }
          };
          AnimationItem.prototype.waitForFontsLoaded = function () {
            this.renderer &&
              (this.renderer.globalData.fontManager.isLoaded
                ? this.checkLoaded()
                : setTimeout(this.waitForFontsLoaded.bind(this), 20));
          };
          AnimationItem.prototype.checkLoaded = function () {
            if (
              !this.isLoaded &&
              this.renderer.globalData.fontManager.isLoaded &&
              (this.imagePreloader.loadedImages() ||
                "canvas" !== this.renderer.rendererType) &&
              this.imagePreloader.loadedFootages()
            ) {
              this.isLoaded = !0;
              var t = getExpressionsPlugin();
              t && t.initExpressions(this);
              this.renderer.initItems();
              setTimeout(
                function () {
                  this.trigger("DOMLoaded");
                }.bind(this),
                0
              );
              this.gotoFrame();
              this.autoplay && this.play();
            }
          };
          AnimationItem.prototype.resize = function () {
            this.renderer.updateContainerSize();
          };
          AnimationItem.prototype.setSubframe = function (t) {
            this.isSubframeEnabled = !!t;
          };
          AnimationItem.prototype.gotoFrame = function () {
            this.currentFrame = this.isSubframeEnabled
              ? this.currentRawFrame
              : ~~this.currentRawFrame;
            this.timeCompleted !== this.totalFrames &&
              this.currentFrame > this.timeCompleted &&
              (this.currentFrame = this.timeCompleted);
            this.trigger("enterFrame");
            this.renderFrame();
            this.trigger("drawnFrame");
          };
          AnimationItem.prototype.renderFrame = function () {
            if (!1 !== this.isLoaded && this.renderer)
              try {
                this.renderer.renderFrame(this.currentFrame + this.firstFrame);
              } catch (t) {
                this.triggerRenderFrameError(t);
              }
          };
          AnimationItem.prototype.play = function (t) {
            if ((!t || this.name === t) && !0 === this.isPaused) {
              this.isPaused = !1;
              this.trigger("_pause");
              this.audioController.resume();
              if (this._idle) {
                this._idle = !1;
                this.trigger("_active");
              }
            }
          };
          AnimationItem.prototype.pause = function (t) {
            if ((!t || this.name === t) && !1 === this.isPaused) {
              this.isPaused = !0;
              this.trigger("_play");
              this._idle = !0;
              this.trigger("_idle");
              this.audioController.pause();
            }
          };
          AnimationItem.prototype.togglePause = function (t) {
            (t && this.name !== t) ||
              (!0 === this.isPaused ? this.play() : this.pause());
          };
          AnimationItem.prototype.stop = function (t) {
            if (!t || this.name === t) {
              this.pause();
              this.playCount = 0;
              this._completedLoop = !1;
              this.setCurrentRawFrameValue(0);
            }
          };
          AnimationItem.prototype.getMarkerData = function (t) {
            for (var e, i = 0; i < this.markers.length; i += 1)
              if ((e = this.markers[i]).payload && e.payload.name === t)
                return e;
            return null;
          };
          AnimationItem.prototype.goToAndStop = function (t, e, i) {
            if (!i || this.name === i) {
              var r = Number(t);
              if (isNaN(r)) {
                var s = this.getMarkerData(t);
                s && this.goToAndStop(s.time, !0);
              } else
                e
                  ? this.setCurrentRawFrameValue(t)
                  : this.setCurrentRawFrameValue(t * this.frameModifier);
              this.pause();
            }
          };
          AnimationItem.prototype.goToAndPlay = function (t, e, i) {
            if (!i || this.name === i) {
              var r = Number(t);
              if (isNaN(r)) {
                var s = this.getMarkerData(t);
                s &&
                  (s.duration
                    ? this.playSegments([s.time, s.time + s.duration], !0)
                    : this.goToAndStop(s.time, !0));
              } else this.goToAndStop(r, e, i);
              this.play();
            }
          };
          AnimationItem.prototype.advanceTime = function (t) {
            if (!0 !== this.isPaused && !1 !== this.isLoaded) {
              var e = this.currentRawFrame + t * this.frameModifier,
                i = !1;
              if (e >= this.totalFrames - 1 && this.frameModifier > 0) {
                if (this.loop && this.playCount !== this.loop)
                  if (e >= this.totalFrames) {
                    this.playCount += 1;
                    if (!this.checkSegments(e % this.totalFrames)) {
                      this.setCurrentRawFrameValue(e % this.totalFrames);
                      this._completedLoop = !0;
                      this.trigger("loopComplete");
                    }
                  } else this.setCurrentRawFrameValue(e);
                else if (
                  !this.checkSegments(
                    e > this.totalFrames ? e % this.totalFrames : 0
                  )
                ) {
                  i = !0;
                  e = this.totalFrames - 1;
                }
              } else if (e < 0) {
                if (!this.checkSegments(e % this.totalFrames))
                  if (
                    !this.loop ||
                    (this.playCount-- <= 0 && !0 !== this.loop)
                  ) {
                    i = !0;
                    e = 0;
                  } else {
                    this.setCurrentRawFrameValue(
                      this.totalFrames + (e % this.totalFrames)
                    );
                    this._completedLoop
                      ? this.trigger("loopComplete")
                      : (this._completedLoop = !0);
                  }
              } else this.setCurrentRawFrameValue(e);
              if (i) {
                this.setCurrentRawFrameValue(e);
                this.pause();
                this.trigger("complete");
              }
            }
          };
          AnimationItem.prototype.adjustSegment = function (t, e) {
            this.playCount = 0;
            if (t[1] < t[0]) {
              this.frameModifier > 0 &&
                (this.playSpeed < 0
                  ? this.setSpeed(-this.playSpeed)
                  : this.setDirection(-1));
              this.totalFrames = t[0] - t[1];
              this.timeCompleted = this.totalFrames;
              this.firstFrame = t[1];
              this.setCurrentRawFrameValue(this.totalFrames - 0.001 - e);
            } else if (t[1] > t[0]) {
              this.frameModifier < 0 &&
                (this.playSpeed < 0
                  ? this.setSpeed(-this.playSpeed)
                  : this.setDirection(1));
              this.totalFrames = t[1] - t[0];
              this.timeCompleted = this.totalFrames;
              this.firstFrame = t[0];
              this.setCurrentRawFrameValue(0.001 + e);
            }
            this.trigger("segmentStart");
          };
          AnimationItem.prototype.setSegment = function (t, e) {
            var i = -1;
            this.isPaused &&
              (this.currentRawFrame + this.firstFrame < t
                ? (i = t)
                : this.currentRawFrame + this.firstFrame > e && (i = e - t));
            this.firstFrame = t;
            this.totalFrames = e - t;
            this.timeCompleted = this.totalFrames;
            -1 !== i && this.goToAndStop(i, !0);
          };
          AnimationItem.prototype.playSegments = function (t, e) {
            e && (this.segments.length = 0);
            if ("object" === _typeof$4(t[0])) {
              var i,
                r = t.length;
              for (i = 0; i < r; i += 1) this.segments.push(t[i]);
            } else this.segments.push(t);
            this.segments.length &&
              e &&
              this.adjustSegment(this.segments.shift(), 0);
            this.isPaused && this.play();
          };
          AnimationItem.prototype.resetSegments = function (t) {
            this.segments.length = 0;
            this.segments.push([this.animationData.ip, this.animationData.op]);
            t && this.checkSegments(0);
          };
          AnimationItem.prototype.checkSegments = function (t) {
            if (this.segments.length) {
              this.adjustSegment(this.segments.shift(), t);
              return !0;
            }
            return !1;
          };
          AnimationItem.prototype.destroy = function (t) {
            if ((!t || this.name === t) && this.renderer) {
              this.renderer.destroy();
              this.imagePreloader.destroy();
              this.trigger("destroy");
              this._cbs = null;
              this.onEnterFrame = null;
              this.onLoopComplete = null;
              this.onComplete = null;
              this.onSegmentStart = null;
              this.onDestroy = null;
              this.renderer = null;
              this.renderer = null;
              this.imagePreloader = null;
              this.projectInterface = null;
            }
          };
          AnimationItem.prototype.setCurrentRawFrameValue = function (t) {
            this.currentRawFrame = t;
            this.gotoFrame();
          };
          AnimationItem.prototype.setSpeed = function (t) {
            this.playSpeed = t;
            this.updaFrameModifier();
          };
          AnimationItem.prototype.setDirection = function (t) {
            this.playDirection = t < 0 ? -1 : 1;
            this.updaFrameModifier();
          };
          AnimationItem.prototype.setVolume = function (t, e) {
            (e && this.name !== e) || this.audioController.setVolume(t);
          };
          AnimationItem.prototype.getVolume = function () {
            return this.audioController.getVolume();
          };
          AnimationItem.prototype.mute = function (t) {
            (t && this.name !== t) || this.audioController.mute();
          };
          AnimationItem.prototype.unmute = function (t) {
            (t && this.name !== t) || this.audioController.unmute();
          };
          AnimationItem.prototype.updaFrameModifier = function () {
            this.frameModifier =
              this.frameMult * this.playSpeed * this.playDirection;
            this.audioController.setRate(this.playSpeed * this.playDirection);
          };
          AnimationItem.prototype.getPath = function () {
            return this.path;
          };
          AnimationItem.prototype.getAssetsPath = function (t) {
            var e = "";
            if (t.e) e = t.p;
            else if (this.assetsPath) {
              var i = t.p;
              -1 !== i.indexOf("images/") && (i = i.split("/")[1]);
              e = this.assetsPath + i;
            } else {
              e = this.path;
              e += t.u ? t.u : "";
              e += t.p;
            }
            return e;
          };
          AnimationItem.prototype.getAssetData = function (t) {
            for (var e = 0, i = this.assets.length; e < i; ) {
              if (t === this.assets[e].id) return this.assets[e];
              e += 1;
            }
            return null;
          };
          AnimationItem.prototype.hide = function () {
            this.renderer.hide();
          };
          AnimationItem.prototype.show = function () {
            this.renderer.show();
          };
          AnimationItem.prototype.getDuration = function (t) {
            return t ? this.totalFrames : this.totalFrames / this.frameRate;
          };
          AnimationItem.prototype.updateDocumentData = function (t, e, i) {
            try {
              this.renderer.getElementByPath(t).updateDocumentData(e, i);
            } catch (t) {}
          };
          AnimationItem.prototype.trigger = function (t) {
            if (this._cbs && this._cbs[t])
              switch (t) {
                case "enterFrame":
                  this.triggerEvent(
                    t,
                    new BMEnterFrameEvent(
                      t,
                      this.currentFrame,
                      this.totalFrames,
                      this.frameModifier
                    )
                  );
                  break;
                case "drawnFrame":
                  this.drawnFrameEvent.currentTime = this.currentFrame;
                  this.drawnFrameEvent.totalTime = this.totalFrames;
                  this.drawnFrameEvent.direction = this.frameModifier;
                  this.triggerEvent(t, this.drawnFrameEvent);
                  break;
                case "loopComplete":
                  this.triggerEvent(
                    t,
                    new BMCompleteLoopEvent(
                      t,
                      this.loop,
                      this.playCount,
                      this.frameMult
                    )
                  );
                  break;
                case "complete":
                  this.triggerEvent(t, new BMCompleteEvent(t, this.frameMult));
                  break;
                case "segmentStart":
                  this.triggerEvent(
                    t,
                    new BMSegmentStartEvent(
                      t,
                      this.firstFrame,
                      this.totalFrames
                    )
                  );
                  break;
                case "destroy":
                  this.triggerEvent(t, new BMDestroyEvent(t, this));
                  break;
                default:
                  this.triggerEvent(t);
              }
            "enterFrame" === t &&
              this.onEnterFrame &&
              this.onEnterFrame.call(
                this,
                new BMEnterFrameEvent(
                  t,
                  this.currentFrame,
                  this.totalFrames,
                  this.frameMult
                )
              );
            "loopComplete" === t &&
              this.onLoopComplete &&
              this.onLoopComplete.call(
                this,
                new BMCompleteLoopEvent(
                  t,
                  this.loop,
                  this.playCount,
                  this.frameMult
                )
              );
            "complete" === t &&
              this.onComplete &&
              this.onComplete.call(
                this,
                new BMCompleteEvent(t, this.frameMult)
              );
            "segmentStart" === t &&
              this.onSegmentStart &&
              this.onSegmentStart.call(
                this,
                new BMSegmentStartEvent(t, this.firstFrame, this.totalFrames)
              );
            "destroy" === t &&
              this.onDestroy &&
              this.onDestroy.call(this, new BMDestroyEvent(t, this));
          };
          AnimationItem.prototype.triggerRenderFrameError = function (t) {
            var e = new BMRenderFrameErrorEvent(t, this.currentFrame);
            this.triggerEvent("error", e);
            this.onError && this.onError.call(this, e);
          };
          AnimationItem.prototype.triggerConfigError = function (t) {
            var e = new BMConfigErrorEvent(t, this.currentFrame);
            this.triggerEvent("error", e);
            this.onError && this.onError.call(this, e);
          };
          var animationManager = (function () {
              var t = {},
                e = [],
                i = 0,
                r = 0,
                s = 0,
                a = !0,
                n = !1;
              function o(t) {
                for (var i = 0, s = t.target; i < r; ) {
                  if (e[i].animation === s) {
                    e.splice(i, 1);
                    i -= 1;
                    r -= 1;
                    s.isPaused || p();
                  }
                  i += 1;
                }
              }
              function h(t, i) {
                if (!t) return null;
                for (var s = 0; s < r; ) {
                  if (e[s].elem === t && null !== e[s].elem)
                    return e[s].animation;
                  s += 1;
                }
                var a = new AnimationItem();
                f(a, t);
                a.setData(t, i);
                return a;
              }
              function l() {
                s += 1;
                d();
              }
              function p() {
                s -= 1;
              }
              function f(t, i) {
                t.addEventListener("destroy", o);
                t.addEventListener("_active", l);
                t.addEventListener("_idle", p);
                e.push({ elem: i, animation: t });
                r += 1;
              }
              function m(t) {
                var o,
                  h = t - i;
                for (o = 0; o < r; o += 1) e[o].animation.advanceTime(h);
                i = t;
                s && !n ? window.requestAnimationFrame(m) : (a = !0);
              }
              function c(t) {
                i = t;
                window.requestAnimationFrame(m);
              }
              function d() {
                if (!n && s && a) {
                  window.requestAnimationFrame(c);
                  a = !1;
                }
              }
              t.registerAnimation = h;
              t.loadAnimation = function (t) {
                var e = new AnimationItem();
                f(e, null);
                e.setParams(t);
                return e;
              };
              t.setSpeed = function (t, i) {
                var s;
                for (s = 0; s < r; s += 1) e[s].animation.setSpeed(t, i);
              };
              t.setDirection = function (t, i) {
                var s;
                for (s = 0; s < r; s += 1) e[s].animation.setDirection(t, i);
              };
              t.play = function (t) {
                var i;
                for (i = 0; i < r; i += 1) e[i].animation.play(t);
              };
              t.pause = function (t) {
                var i;
                for (i = 0; i < r; i += 1) e[i].animation.pause(t);
              };
              t.stop = function (t) {
                var i;
                for (i = 0; i < r; i += 1) e[i].animation.stop(t);
              };
              t.togglePause = function (t) {
                var i;
                for (i = 0; i < r; i += 1) e[i].animation.togglePause(t);
              };
              t.searchAnimations = function (t, e, i) {
                var r,
                  s = [].concat(
                    [].slice.call(document.getElementsByClassName("lottie")),
                    [].slice.call(document.getElementsByClassName("bodymovin"))
                  ),
                  a = s.length;
                for (r = 0; r < a; r += 1) {
                  i && s[r].setAttribute("data-bm-type", i);
                  h(s[r], t);
                }
                if (e && 0 === a) {
                  i || (i = "svg");
                  var n = document.getElementsByTagName("body")[0];
                  n.innerText = "";
                  var o = createTag("div");
                  o.style.width = "100%";
                  o.style.height = "100%";
                  o.setAttribute("data-bm-type", i);
                  n.appendChild(o);
                  h(o, t);
                }
              };
              t.resize = function () {
                var t;
                for (t = 0; t < r; t += 1) e[t].animation.resize();
              };
              t.goToAndStop = function (t, i, s) {
                var a;
                for (a = 0; a < r; a += 1) e[a].animation.goToAndStop(t, i, s);
              };
              t.destroy = function (t) {
                var i;
                for (i = r - 1; i >= 0; i -= 1) e[i].animation.destroy(t);
              };
              t.freeze = function () {
                n = !0;
              };
              t.unfreeze = function () {
                n = !1;
                d();
              };
              t.setVolume = function (t, i) {
                var s;
                for (s = 0; s < r; s += 1) e[s].animation.setVolume(t, i);
              };
              t.mute = function (t) {
                var i;
                for (i = 0; i < r; i += 1) e[i].animation.mute(t);
              };
              t.unmute = function (t) {
                var i;
                for (i = 0; i < r; i += 1) e[i].animation.unmute(t);
              };
              t.getRegisteredAnimations = function () {
                var t,
                  i = e.length,
                  r = [];
                for (t = 0; t < i; t += 1) r.push(e[t].animation);
                return r;
              };
              return t;
            })(),
            BezierFactory = (function () {
              var t = {
                  getBezierEasing: function (t, i, r, s, a) {
                    var n =
                      a ||
                      ("bez_" + t + "_" + i + "_" + r + "_" + s).replace(
                        /\./g,
                        "p"
                      );
                    if (e[n]) return e[n];
                    var o = new l([t, i, r, s]);
                    e[n] = o;
                    return o;
                  },
                },
                e = {},
                i = 0.1,
                r = "function" == typeof Float32Array;
              function s(t, e) {
                return 1 - 3 * e + 3 * t;
              }
              function a(t, e) {
                return 3 * e - 6 * t;
              }
              function n(t) {
                return 3 * t;
              }
              function o(t, e, i) {
                return ((s(e, i) * t + a(e, i)) * t + n(e)) * t;
              }
              function h(t, e, i) {
                return 3 * s(e, i) * t * t + 2 * a(e, i) * t + n(e);
              }
              function l(t) {
                this._p = t;
                this._mSampleValues = r ? new Float32Array(11) : new Array(11);
                this._precomputed = !1;
                this.get = this.get.bind(this);
              }
              l.prototype = {
                get: function (t) {
                  var e = this._p[0],
                    i = this._p[1],
                    r = this._p[2],
                    s = this._p[3];
                  this._precomputed || this._precompute();
                  return e === i && r === s
                    ? t
                    : 0 === t
                    ? 0
                    : 1 === t
                    ? 1
                    : o(this._getTForX(t), i, s);
                },
                _precompute: function () {
                  var t = this._p[0],
                    e = this._p[1],
                    i = this._p[2],
                    r = this._p[3];
                  this._precomputed = !0;
                  (t === e && i === r) || this._calcSampleValues();
                },
                _calcSampleValues: function () {
                  for (var t = this._p[0], e = this._p[2], r = 0; r < 11; ++r)
                    this._mSampleValues[r] = o(r * i, t, e);
                },
                _getTForX: function (t) {
                  for (
                    var e = this._p[0],
                      r = this._p[2],
                      s = this._mSampleValues,
                      a = 0,
                      n = 1;
                    10 !== n && s[n] <= t;
                    ++n
                  )
                    a += i;
                  var l = a + ((t - s[--n]) / (s[n + 1] - s[n])) * i,
                    p = h(l, e, r);
                  return p >= 0.001
                    ? (function (t, e, i, r) {
                        for (var s = 0; s < 4; ++s) {
                          var a = h(e, i, r);
                          if (0 === a) return e;
                          e -= (o(e, i, r) - t) / a;
                        }
                        return e;
                      })(t, l, e, r)
                    : 0 === p
                    ? l
                    : (function (t, e, i, r, s) {
                        var a,
                          n,
                          h = 0;
                        do {
                          (a = o((n = e + (i - e) / 2), r, s) - t) > 0
                            ? (i = n)
                            : (e = n);
                        } while (Math.abs(a) > 1e-7 && ++h < 10);
                        return n;
                      })(t, a, a + i, e, r);
                },
              };
              return t;
            })(),
            pooling = {
              double: function (t) {
                return t.concat(createSizedArray(t.length));
              },
            },
            poolFactory = function (t, e, i) {
              var r = 0,
                s = t,
                a = createSizedArray(s);
              return {
                newElement: function () {
                  return r ? a[(r -= 1)] : e();
                },
                release: function (t) {
                  if (r === s) {
                    a = pooling.double(a);
                    s *= 2;
                  }
                  i && i(t);
                  a[r] = t;
                  r += 1;
                },
              };
            },
            bezierLengthPool = poolFactory(8, function () {
              return {
                addedLength: 0,
                percents: createTypedArray(
                  "float32",
                  getDefaultCurveSegments()
                ),
                lengths: createTypedArray("float32", getDefaultCurveSegments()),
              };
            }),
            segmentsLengthPool = poolFactory(
              8,
              function () {
                return { lengths: [], totalLength: 0 };
              },
              function (t) {
                var e,
                  i = t.lengths.length;
                for (e = 0; e < i; e += 1)
                  bezierLengthPool.release(t.lengths[e]);
                t.lengths.length = 0;
              }
            );
          function bezFunction() {
            var t = Math;
            function e(t, e, i, r, s, a) {
              var n = t * r + e * s + i * a - s * r - a * t - i * e;
              return n > -0.001 && n < 0.001;
            }
            var i = function (t, e, i, r) {
              var s,
                a,
                n,
                o,
                h,
                l,
                p = getDefaultCurveSegments(),
                f = 0,
                m = [],
                c = [],
                d = bezierLengthPool.newElement();
              n = i.length;
              for (s = 0; s < p; s += 1) {
                h = s / (p - 1);
                l = 0;
                for (a = 0; a < n; a += 1) {
                  o =
                    bmPow(1 - h, 3) * t[a] +
                    3 * bmPow(1 - h, 2) * h * i[a] +
                    3 * (1 - h) * bmPow(h, 2) * r[a] +
                    bmPow(h, 3) * e[a];
                  m[a] = o;
                  null !== c[a] && (l += bmPow(m[a] - c[a], 2));
                  c[a] = m[a];
                }
                l && (f += l = bmSqrt(l));
                d.percents[s] = h;
                d.lengths[s] = f;
              }
              d.addedLength = f;
              return d;
            };
            function r(t) {
              this.segmentLength = 0;
              this.points = new Array(t);
            }
            function s(t, e) {
              this.partialLength = t;
              this.point = e;
            }
            var a,
              n =
                ((a = {}),
                function (t, i, n, o) {
                  var h = (
                    t[0] +
                    "_" +
                    t[1] +
                    "_" +
                    i[0] +
                    "_" +
                    i[1] +
                    "_" +
                    n[0] +
                    "_" +
                    n[1] +
                    "_" +
                    o[0] +
                    "_" +
                    o[1]
                  ).replace(/\./g, "p");
                  if (!a[h]) {
                    var l,
                      p,
                      f,
                      m,
                      c,
                      d,
                      u,
                      y = getDefaultCurveSegments(),
                      g = 0,
                      v = null;
                    2 === t.length &&
                      (t[0] !== i[0] || t[1] !== i[1]) &&
                      e(t[0], t[1], i[0], i[1], t[0] + n[0], t[1] + n[1]) &&
                      e(t[0], t[1], i[0], i[1], i[0] + o[0], i[1] + o[1]) &&
                      (y = 2);
                    var b = new r(y);
                    f = n.length;
                    for (l = 0; l < y; l += 1) {
                      u = createSizedArray(f);
                      c = l / (y - 1);
                      d = 0;
                      for (p = 0; p < f; p += 1) {
                        m =
                          bmPow(1 - c, 3) * t[p] +
                          3 * bmPow(1 - c, 2) * c * (t[p] + n[p]) +
                          3 * (1 - c) * bmPow(c, 2) * (i[p] + o[p]) +
                          bmPow(c, 3) * i[p];
                        u[p] = m;
                        null !== v && (d += bmPow(u[p] - v[p], 2));
                      }
                      g += d = bmSqrt(d);
                      b.points[l] = new s(d, u);
                      v = u;
                    }
                    b.segmentLength = g;
                    a[h] = b;
                  }
                  return a[h];
                });
            function o(t, e) {
              var i = e.percents,
                r = e.lengths,
                s = i.length,
                a = bmFloor((s - 1) * t),
                n = t * e.addedLength,
                o = 0;
              if (a === s - 1 || 0 === a || n === r[a]) return i[a];
              for (var h = r[a] > n ? -1 : 1, l = !0; l; ) {
                if (r[a] <= n && r[a + 1] > n) {
                  o = (n - r[a]) / (r[a + 1] - r[a]);
                  l = !1;
                } else a += h;
                if (a < 0 || a >= s - 1) {
                  if (a === s - 1) return i[a];
                  l = !1;
                }
              }
              return i[a] + (i[a + 1] - i[a]) * o;
            }
            var h = createTypedArray("float32", 8);
            return {
              getSegmentsLength: function (t) {
                var e,
                  r = segmentsLengthPool.newElement(),
                  s = t.c,
                  a = t.v,
                  n = t.o,
                  o = t.i,
                  h = t._length,
                  l = r.lengths,
                  p = 0;
                for (e = 0; e < h - 1; e += 1) {
                  l[e] = i(a[e], a[e + 1], n[e], o[e + 1]);
                  p += l[e].addedLength;
                }
                if (s && h) {
                  l[e] = i(a[e], a[0], n[e], o[0]);
                  p += l[e].addedLength;
                }
                r.totalLength = p;
                return r;
              },
              getNewSegment: function (e, i, r, s, a, n, l) {
                a < 0 ? (a = 0) : a > 1 && (a = 1);
                var p,
                  f = o(a, l),
                  m = o((n = n > 1 ? 1 : n), l),
                  c = e.length,
                  d = 1 - f,
                  u = 1 - m,
                  y = d * d * d,
                  g = f * d * d * 3,
                  v = f * f * d * 3,
                  b = f * f * f,
                  P = d * d * u,
                  E = f * d * u + d * f * u + d * d * m,
                  x = f * f * u + d * f * m + f * d * m,
                  S = f * f * m,
                  _ = d * u * u,
                  C = f * u * u + d * m * u + d * u * m,
                  A = f * m * u + d * m * m + f * u * m,
                  T = f * m * m,
                  k = u * u * u,
                  D = m * u * u + u * m * u + u * u * m,
                  M = m * m * u + u * m * m + m * u * m,
                  F = m * m * m;
                for (p = 0; p < c; p += 1) {
                  h[4 * p] =
                    t.round(1e3 * (y * e[p] + g * r[p] + v * s[p] + b * i[p])) /
                    1e3;
                  h[4 * p + 1] =
                    t.round(1e3 * (P * e[p] + E * r[p] + x * s[p] + S * i[p])) /
                    1e3;
                  h[4 * p + 2] =
                    t.round(1e3 * (_ * e[p] + C * r[p] + A * s[p] + T * i[p])) /
                    1e3;
                  h[4 * p + 3] =
                    t.round(1e3 * (k * e[p] + D * r[p] + M * s[p] + F * i[p])) /
                    1e3;
                }
                return h;
              },
              getPointInSegment: function (e, i, r, s, a, n) {
                var h = o(a, n),
                  l = 1 - h;
                return [
                  t.round(
                    1e3 *
                      (l * l * l * e[0] +
                        (h * l * l + l * h * l + l * l * h) * r[0] +
                        (h * h * l + l * h * h + h * l * h) * s[0] +
                        h * h * h * i[0])
                  ) / 1e3,
                  t.round(
                    1e3 *
                      (l * l * l * e[1] +
                        (h * l * l + l * h * l + l * l * h) * r[1] +
                        (h * h * l + l * h * h + h * l * h) * s[1] +
                        h * h * h * i[1])
                  ) / 1e3,
                ];
              },
              buildBezierData: n,
              pointOnLine2D: e,
              pointOnLine3D: function (i, r, s, a, n, o, h, l, p) {
                if (0 === s && 0 === o && 0 === p) return e(i, r, a, n, h, l);
                var f,
                  m = t.sqrt(
                    t.pow(a - i, 2) + t.pow(n - r, 2) + t.pow(o - s, 2)
                  ),
                  c = t.sqrt(
                    t.pow(h - i, 2) + t.pow(l - r, 2) + t.pow(p - s, 2)
                  ),
                  d = t.sqrt(
                    t.pow(h - a, 2) + t.pow(l - n, 2) + t.pow(p - o, 2)
                  );
                return (
                  (f =
                    m > c
                      ? m > d
                        ? m - c - d
                        : d - c - m
                      : d > c
                      ? d - c - m
                      : c - m - d) > -1e-4 && f < 1e-4
                );
              },
            };
          }
          var bez = bezFunction(),
            PropertyFactory = (function () {
              var t = initialDefaultFrame,
                e = Math.abs;
              function i(t, e) {
                var i,
                  s = this.offsetTime;
                "multidimensional" === this.propType &&
                  (i = createTypedArray("float32", this.pv.length));
                for (
                  var a,
                    n,
                    o,
                    h,
                    l,
                    p,
                    f,
                    m,
                    c,
                    d = e.lastIndex,
                    u = d,
                    y = this.keyframes.length - 1,
                    g = !0;
                  g;

                ) {
                  a = this.keyframes[u];
                  n = this.keyframes[u + 1];
                  if (u === y - 1 && t >= n.t - s) {
                    a.h && (a = n);
                    d = 0;
                    break;
                  }
                  if (n.t - s > t) {
                    d = u;
                    break;
                  }
                  if (u < y - 1) u += 1;
                  else {
                    d = 0;
                    g = !1;
                  }
                }
                o = this.keyframesMetadata[u] || {};
                var v,
                  b = n.t - s,
                  P = a.t - s;
                if (a.to) {
                  o.bezierData ||
                    (o.bezierData = bez.buildBezierData(
                      a.s,
                      n.s || a.e,
                      a.to,
                      a.ti
                    ));
                  var E = o.bezierData;
                  if (t >= b || t < P) {
                    var x = t >= b ? E.points.length - 1 : 0;
                    l = E.points[x].point.length;
                    for (h = 0; h < l; h += 1) i[h] = E.points[x].point[h];
                  } else {
                    if (o.__fnct) c = o.__fnct;
                    else {
                      c = BezierFactory.getBezierEasing(
                        a.o.x,
                        a.o.y,
                        a.i.x,
                        a.i.y,
                        a.n
                      ).get;
                      o.__fnct = c;
                    }
                    p = c((t - P) / (b - P));
                    var S,
                      _ = E.segmentLength * p,
                      C =
                        e.lastFrame < t && e._lastKeyframeIndex === u
                          ? e._lastAddedLength
                          : 0;
                    m =
                      e.lastFrame < t && e._lastKeyframeIndex === u
                        ? e._lastPoint
                        : 0;
                    g = !0;
                    f = E.points.length;
                    for (; g; ) {
                      C += E.points[m].partialLength;
                      if (0 === _ || 0 === p || m === E.points.length - 1) {
                        l = E.points[m].point.length;
                        for (h = 0; h < l; h += 1) i[h] = E.points[m].point[h];
                        break;
                      }
                      if (_ >= C && _ < C + E.points[m + 1].partialLength) {
                        S = (_ - C) / E.points[m + 1].partialLength;
                        l = E.points[m].point.length;
                        for (h = 0; h < l; h += 1)
                          i[h] =
                            E.points[m].point[h] +
                            (E.points[m + 1].point[h] - E.points[m].point[h]) *
                              S;
                        break;
                      }
                      m < f - 1 ? (m += 1) : (g = !1);
                    }
                    e._lastPoint = m;
                    e._lastAddedLength = C - E.points[m].partialLength;
                    e._lastKeyframeIndex = u;
                  }
                } else {
                  var A, T, k, D, M;
                  y = a.s.length;
                  v = n.s || a.e;
                  if (this.sh && 1 !== a.h)
                    if (t >= b) {
                      i[0] = v[0];
                      i[1] = v[1];
                      i[2] = v[2];
                    } else if (t <= P) {
                      i[0] = a.s[0];
                      i[1] = a.s[1];
                      i[2] = a.s[2];
                    } else
                      !(function (t, e) {
                        var i = e[0],
                          r = e[1],
                          s = e[2],
                          a = e[3],
                          n = Math.atan2(
                            2 * r * a - 2 * i * s,
                            1 - 2 * r * r - 2 * s * s
                          ),
                          o = Math.asin(2 * i * r + 2 * s * a),
                          h = Math.atan2(
                            2 * i * a - 2 * r * s,
                            1 - 2 * i * i - 2 * s * s
                          );
                        t[0] = n / degToRads;
                        t[1] = o / degToRads;
                        t[2] = h / degToRads;
                      })(
                        i,
                        (function (t, e, i) {
                          var r,
                            s,
                            a,
                            n,
                            o,
                            h = [],
                            l = t[0],
                            p = t[1],
                            f = t[2],
                            m = t[3],
                            c = e[0],
                            d = e[1],
                            u = e[2],
                            y = e[3];
                          if ((s = l * c + p * d + f * u + m * y) < 0) {
                            s = -s;
                            c = -c;
                            d = -d;
                            u = -u;
                            y = -y;
                          }
                          if (1 - s > 1e-6) {
                            r = Math.acos(s);
                            a = Math.sin(r);
                            n = Math.sin((1 - i) * r) / a;
                            o = Math.sin(i * r) / a;
                          } else {
                            n = 1 - i;
                            o = i;
                          }
                          h[0] = n * l + o * c;
                          h[1] = n * p + o * d;
                          h[2] = n * f + o * u;
                          h[3] = n * m + o * y;
                          return h;
                        })(r(a.s), r(v), (t - P) / (b - P))
                      );
                  else
                    for (u = 0; u < y; u += 1) {
                      if (1 !== a.h)
                        if (t >= b) p = 1;
                        else if (t < P) p = 0;
                        else {
                          if (a.o.x.constructor === Array) {
                            o.__fnct || (o.__fnct = []);
                            if (o.__fnct[u]) c = o.__fnct[u];
                            else {
                              A = void 0 === a.o.x[u] ? a.o.x[0] : a.o.x[u];
                              T = void 0 === a.o.y[u] ? a.o.y[0] : a.o.y[u];
                              k = void 0 === a.i.x[u] ? a.i.x[0] : a.i.x[u];
                              D = void 0 === a.i.y[u] ? a.i.y[0] : a.i.y[u];
                              c = BezierFactory.getBezierEasing(A, T, k, D).get;
                              o.__fnct[u] = c;
                            }
                          } else if (o.__fnct) c = o.__fnct;
                          else {
                            A = a.o.x;
                            T = a.o.y;
                            k = a.i.x;
                            D = a.i.y;
                            c = BezierFactory.getBezierEasing(A, T, k, D).get;
                            a.keyframeMetadata = c;
                          }
                          p = c((t - P) / (b - P));
                        }
                      v = n.s || a.e;
                      M = 1 === a.h ? a.s[u] : a.s[u] + (v[u] - a.s[u]) * p;
                      "multidimensional" === this.propType
                        ? (i[u] = M)
                        : (i = M);
                    }
                }
                e.lastIndex = d;
                return i;
              }
              function r(t) {
                var e = t[0] * degToRads,
                  i = t[1] * degToRads,
                  r = t[2] * degToRads,
                  s = Math.cos(e / 2),
                  a = Math.cos(i / 2),
                  n = Math.cos(r / 2),
                  o = Math.sin(e / 2),
                  h = Math.sin(i / 2),
                  l = Math.sin(r / 2);
                return [
                  o * h * n + s * a * l,
                  o * a * n + s * h * l,
                  s * h * n - o * a * l,
                  s * a * n - o * h * l,
                ];
              }
              function s() {
                var e = this.comp.renderedFrame - this.offsetTime,
                  i = this.keyframes[0].t - this.offsetTime,
                  r =
                    this.keyframes[this.keyframes.length - 1].t -
                    this.offsetTime;
                if (
                  !(
                    e === this._caching.lastFrame ||
                    (this._caching.lastFrame !== t &&
                      ((this._caching.lastFrame >= r && e >= r) ||
                        (this._caching.lastFrame < i && e < i)))
                  )
                ) {
                  if (this._caching.lastFrame >= e) {
                    this._caching._lastKeyframeIndex = -1;
                    this._caching.lastIndex = 0;
                  }
                  var s = this.interpolateValue(e, this._caching);
                  this.pv = s;
                }
                this._caching.lastFrame = e;
                return this.pv;
              }
              function a(t) {
                var i;
                if ("unidimensional" === this.propType) {
                  i = t * this.mult;
                  if (e(this.v - i) > 1e-5) {
                    this.v = i;
                    this._mdf = !0;
                  }
                } else
                  for (var r = 0, s = this.v.length; r < s; ) {
                    i = t[r] * this.mult;
                    if (e(this.v[r] - i) > 1e-5) {
                      this.v[r] = i;
                      this._mdf = !0;
                    }
                    r += 1;
                  }
              }
              function n() {
                if (
                  this.elem.globalData.frameId !== this.frameId &&
                  this.effectsSequence.length
                )
                  if (this.lock) this.setVValue(this.pv);
                  else {
                    this.lock = !0;
                    this._mdf = this._isFirstFrame;
                    var t,
                      e = this.effectsSequence.length,
                      i = this.kf ? this.pv : this.data.k;
                    for (t = 0; t < e; t += 1) i = this.effectsSequence[t](i);
                    this.setVValue(i);
                    this._isFirstFrame = !1;
                    this.lock = !1;
                    this.frameId = this.elem.globalData.frameId;
                  }
              }
              function o(t) {
                this.effectsSequence.push(t);
                this.container.addDynamicProperty(this);
              }
              function h(t, e, i, r) {
                this.propType = "unidimensional";
                this.mult = i || 1;
                this.data = e;
                this.v = i ? e.k * i : e.k;
                this.pv = e.k;
                this._mdf = !1;
                this.elem = t;
                this.container = r;
                this.comp = t.comp;
                this.k = !1;
                this.kf = !1;
                this.vel = 0;
                this.effectsSequence = [];
                this._isFirstFrame = !0;
                this.getValue = n;
                this.setVValue = a;
                this.addEffect = o;
              }
              function l(t, e, i, r) {
                this.propType = "multidimensional";
                this.mult = i || 1;
                this.data = e;
                this._mdf = !1;
                this.elem = t;
                this.container = r;
                this.comp = t.comp;
                this.k = !1;
                this.kf = !1;
                this.frameId = -1;
                var s,
                  h = e.k.length;
                this.v = createTypedArray("float32", h);
                this.pv = createTypedArray("float32", h);
                this.vel = createTypedArray("float32", h);
                for (s = 0; s < h; s += 1) {
                  this.v[s] = e.k[s] * this.mult;
                  this.pv[s] = e.k[s];
                }
                this._isFirstFrame = !0;
                this.effectsSequence = [];
                this.getValue = n;
                this.setVValue = a;
                this.addEffect = o;
              }
              function p(e, r, h, l) {
                this.propType = "unidimensional";
                this.keyframes = r.k;
                this.keyframesMetadata = [];
                this.offsetTime = e.data.st;
                this.frameId = -1;
                this._caching = {
                  lastFrame: t,
                  lastIndex: 0,
                  value: 0,
                  _lastKeyframeIndex: -1,
                };
                this.k = !0;
                this.kf = !0;
                this.data = r;
                this.mult = h || 1;
                this.elem = e;
                this.container = l;
                this.comp = e.comp;
                this.v = t;
                this.pv = t;
                this._isFirstFrame = !0;
                this.getValue = n;
                this.setVValue = a;
                this.interpolateValue = i;
                this.effectsSequence = [s.bind(this)];
                this.addEffect = o;
              }
              function f(e, r, h, l) {
                this.propType = "multidimensional";
                var p,
                  f,
                  m,
                  c,
                  d,
                  u = r.k.length;
                for (p = 0; p < u - 1; p += 1)
                  if (r.k[p].to && r.k[p].s && r.k[p + 1] && r.k[p + 1].s) {
                    f = r.k[p].s;
                    m = r.k[p + 1].s;
                    c = r.k[p].to;
                    d = r.k[p].ti;
                    if (
                      (2 === f.length &&
                        (f[0] !== m[0] || f[1] !== m[1]) &&
                        bez.pointOnLine2D(
                          f[0],
                          f[1],
                          m[0],
                          m[1],
                          f[0] + c[0],
                          f[1] + c[1]
                        ) &&
                        bez.pointOnLine2D(
                          f[0],
                          f[1],
                          m[0],
                          m[1],
                          m[0] + d[0],
                          m[1] + d[1]
                        )) ||
                      (3 === f.length &&
                        (f[0] !== m[0] || f[1] !== m[1] || f[2] !== m[2]) &&
                        bez.pointOnLine3D(
                          f[0],
                          f[1],
                          f[2],
                          m[0],
                          m[1],
                          m[2],
                          f[0] + c[0],
                          f[1] + c[1],
                          f[2] + c[2]
                        ) &&
                        bez.pointOnLine3D(
                          f[0],
                          f[1],
                          f[2],
                          m[0],
                          m[1],
                          m[2],
                          m[0] + d[0],
                          m[1] + d[1],
                          m[2] + d[2]
                        ))
                    ) {
                      r.k[p].to = null;
                      r.k[p].ti = null;
                    }
                    if (
                      f[0] === m[0] &&
                      f[1] === m[1] &&
                      0 === c[0] &&
                      0 === c[1] &&
                      0 === d[0] &&
                      0 === d[1] &&
                      (2 === f.length ||
                        (f[2] === m[2] && 0 === c[2] && 0 === d[2]))
                    ) {
                      r.k[p].to = null;
                      r.k[p].ti = null;
                    }
                  }
                this.effectsSequence = [s.bind(this)];
                this.data = r;
                this.keyframes = r.k;
                this.keyframesMetadata = [];
                this.offsetTime = e.data.st;
                this.k = !0;
                this.kf = !0;
                this._isFirstFrame = !0;
                this.mult = h || 1;
                this.elem = e;
                this.container = l;
                this.comp = e.comp;
                this.getValue = n;
                this.setVValue = a;
                this.interpolateValue = i;
                this.frameId = -1;
                var y = r.k[0].s.length;
                this.v = createTypedArray("float32", y);
                this.pv = createTypedArray("float32", y);
                for (p = 0; p < y; p += 1) {
                  this.v[p] = t;
                  this.pv[p] = t;
                }
                this._caching = {
                  lastFrame: t,
                  lastIndex: 0,
                  value: createTypedArray("float32", y),
                };
                this.addEffect = o;
              }
              return {
                getProp: function (t, e, i, r, s) {
                  var a;
                  if (e.k.length)
                    if ("number" == typeof e.k[0]) a = new l(t, e, r, s);
                    else
                      switch (i) {
                        case 0:
                          a = new p(t, e, r, s);
                          break;
                        case 1:
                          a = new f(t, e, r, s);
                      }
                  else a = new h(t, e, r, s);
                  a.effectsSequence.length && s.addDynamicProperty(a);
                  return a;
                },
              };
            })();
          function DynamicPropertyContainer() {}
          DynamicPropertyContainer.prototype = {
            addDynamicProperty: function (t) {
              if (-1 === this.dynamicProperties.indexOf(t)) {
                this.dynamicProperties.push(t);
                this.container.addDynamicProperty(this);
                this._isAnimated = !0;
              }
            },
            iterateDynamicProperties: function () {
              this._mdf = !1;
              var t,
                e = this.dynamicProperties.length;
              for (t = 0; t < e; t += 1) {
                this.dynamicProperties[t].getValue();
                this.dynamicProperties[t]._mdf && (this._mdf = !0);
              }
            },
            initDynamicPropertyContainer: function (t) {
              this.container = t;
              this.dynamicProperties = [];
              this._mdf = !1;
              this._isAnimated = !1;
            },
          };
          var pointPool = poolFactory(8, function () {
            return createTypedArray("float32", 2);
          });
          function ShapePath() {
            this.c = !1;
            this._length = 0;
            this._maxLength = 8;
            this.v = createSizedArray(this._maxLength);
            this.o = createSizedArray(this._maxLength);
            this.i = createSizedArray(this._maxLength);
          }
          ShapePath.prototype.setPathData = function (t, e) {
            this.c = t;
            this.setLength(e);
            for (var i = 0; i < e; ) {
              this.v[i] = pointPool.newElement();
              this.o[i] = pointPool.newElement();
              this.i[i] = pointPool.newElement();
              i += 1;
            }
          };
          ShapePath.prototype.setLength = function (t) {
            for (; this._maxLength < t; ) this.doubleArrayLength();
            this._length = t;
          };
          ShapePath.prototype.doubleArrayLength = function () {
            this.v = this.v.concat(createSizedArray(this._maxLength));
            this.i = this.i.concat(createSizedArray(this._maxLength));
            this.o = this.o.concat(createSizedArray(this._maxLength));
            this._maxLength *= 2;
          };
          ShapePath.prototype.setXYAt = function (t, e, i, r, s) {
            var a;
            this._length = Math.max(this._length, r + 1);
            this._length >= this._maxLength && this.doubleArrayLength();
            switch (i) {
              case "v":
                a = this.v;
                break;
              case "i":
                a = this.i;
                break;
              case "o":
                a = this.o;
                break;
              default:
                a = [];
            }
            (!a[r] || (a[r] && !s)) && (a[r] = pointPool.newElement());
            a[r][0] = t;
            a[r][1] = e;
          };
          ShapePath.prototype.setTripleAt = function (t, e, i, r, s, a, n, o) {
            this.setXYAt(t, e, "v", n, o);
            this.setXYAt(i, r, "o", n, o);
            this.setXYAt(s, a, "i", n, o);
          };
          ShapePath.prototype.reverse = function () {
            var t = new ShapePath();
            t.setPathData(this.c, this._length);
            var e = this.v,
              i = this.o,
              r = this.i,
              s = 0;
            if (this.c) {
              t.setTripleAt(
                e[0][0],
                e[0][1],
                r[0][0],
                r[0][1],
                i[0][0],
                i[0][1],
                0,
                !1
              );
              s = 1;
            }
            var a,
              n = this._length - 1,
              o = this._length;
            for (a = s; a < o; a += 1) {
              t.setTripleAt(
                e[n][0],
                e[n][1],
                r[n][0],
                r[n][1],
                i[n][0],
                i[n][1],
                a,
                !1
              );
              n -= 1;
            }
            return t;
          };
          var shapePool = (function () {
            var t = poolFactory(
              4,
              function () {
                return new ShapePath();
              },
              function (t) {
                var e,
                  i = t._length;
                for (e = 0; e < i; e += 1) {
                  pointPool.release(t.v[e]);
                  pointPool.release(t.i[e]);
                  pointPool.release(t.o[e]);
                  t.v[e] = null;
                  t.i[e] = null;
                  t.o[e] = null;
                }
                t._length = 0;
                t.c = !1;
              }
            );
            t.clone = function (e) {
              var i,
                r = t.newElement(),
                s = void 0 === e._length ? e.v.length : e._length;
              r.setLength(s);
              r.c = e.c;
              for (i = 0; i < s; i += 1)
                r.setTripleAt(
                  e.v[i][0],
                  e.v[i][1],
                  e.o[i][0],
                  e.o[i][1],
                  e.i[i][0],
                  e.i[i][1],
                  i
                );
              return r;
            };
            return t;
          })();
          function ShapeCollection() {
            this._length = 0;
            this._maxLength = 4;
            this.shapes = createSizedArray(this._maxLength);
          }
          ShapeCollection.prototype.addShape = function (t) {
            if (this._length === this._maxLength) {
              this.shapes = this.shapes.concat(
                createSizedArray(this._maxLength)
              );
              this._maxLength *= 2;
            }
            this.shapes[this._length] = t;
            this._length += 1;
          };
          ShapeCollection.prototype.releaseShapes = function () {
            var t;
            for (t = 0; t < this._length; t += 1)
              shapePool.release(this.shapes[t]);
            this._length = 0;
          };
          var shapeCollectionPool =
              ((ob = {
                newShapeCollection: function () {
                  return _length ? pool[(_length -= 1)] : new ShapeCollection();
                },
                release: function (t) {
                  var e,
                    i = t._length;
                  for (e = 0; e < i; e += 1) shapePool.release(t.shapes[e]);
                  t._length = 0;
                  if (_length === _maxLength) {
                    pool = pooling.double(pool);
                    _maxLength *= 2;
                  }
                  pool[_length] = t;
                  _length += 1;
                },
              }),
              (_length = 0),
              (_maxLength = 4),
              (pool = createSizedArray(_maxLength)),
              ob),
            ob,
            _length,
            _maxLength,
            pool,
            ShapePropertyFactory = (function () {
              var t = -999999;
              function e(t, e, i) {
                var r,
                  s,
                  a,
                  n,
                  o,
                  h,
                  l,
                  p,
                  f,
                  m = i.lastIndex,
                  c = this.keyframes;
                if (t < c[0].t - this.offsetTime) {
                  r = c[0].s[0];
                  a = !0;
                  m = 0;
                } else if (t >= c[c.length - 1].t - this.offsetTime) {
                  r = c[c.length - 1].s
                    ? c[c.length - 1].s[0]
                    : c[c.length - 2].e[0];
                  a = !0;
                } else {
                  for (var d, u, y, g = m, v = c.length - 1, b = !0; b; ) {
                    d = c[g];
                    if ((u = c[g + 1]).t - this.offsetTime > t) break;
                    g < v - 1 ? (g += 1) : (b = !1);
                  }
                  y = this.keyframesMetadata[g] || {};
                  m = g;
                  if (!(a = 1 === d.h)) {
                    if (t >= u.t - this.offsetTime) p = 1;
                    else if (t < d.t - this.offsetTime) p = 0;
                    else {
                      var P;
                      if (y.__fnct) P = y.__fnct;
                      else {
                        P = BezierFactory.getBezierEasing(
                          d.o.x,
                          d.o.y,
                          d.i.x,
                          d.i.y
                        ).get;
                        y.__fnct = P;
                      }
                      p = P(
                        (t - (d.t - this.offsetTime)) /
                          (u.t - this.offsetTime - (d.t - this.offsetTime))
                      );
                    }
                    s = u.s ? u.s[0] : d.e[0];
                  }
                  r = d.s[0];
                }
                h = e._length;
                l = r.i[0].length;
                i.lastIndex = m;
                for (n = 0; n < h; n += 1)
                  for (o = 0; o < l; o += 1) {
                    f = a ? r.i[n][o] : r.i[n][o] + (s.i[n][o] - r.i[n][o]) * p;
                    e.i[n][o] = f;
                    f = a ? r.o[n][o] : r.o[n][o] + (s.o[n][o] - r.o[n][o]) * p;
                    e.o[n][o] = f;
                    f = a ? r.v[n][o] : r.v[n][o] + (s.v[n][o] - r.v[n][o]) * p;
                    e.v[n][o] = f;
                  }
              }
              function i() {
                var e = this.comp.renderedFrame - this.offsetTime,
                  i = this.keyframes[0].t - this.offsetTime,
                  r =
                    this.keyframes[this.keyframes.length - 1].t -
                    this.offsetTime,
                  s = this._caching.lastFrame;
                if (s === t || !((s < i && e < i) || (s > r && e > r))) {
                  this._caching.lastIndex = s < e ? this._caching.lastIndex : 0;
                  this.interpolateShape(e, this.pv, this._caching);
                }
                this._caching.lastFrame = e;
                return this.pv;
              }
              function r() {
                this.paths = this.localShapeCollection;
              }
              function s(t) {
                if (
                  !(function (t, e) {
                    if (t._length !== e._length || t.c !== e.c) return !1;
                    var i,
                      r = t._length;
                    for (i = 0; i < r; i += 1)
                      if (
                        t.v[i][0] !== e.v[i][0] ||
                        t.v[i][1] !== e.v[i][1] ||
                        t.o[i][0] !== e.o[i][0] ||
                        t.o[i][1] !== e.o[i][1] ||
                        t.i[i][0] !== e.i[i][0] ||
                        t.i[i][1] !== e.i[i][1]
                      )
                        return !1;
                    return !0;
                  })(this.v, t)
                ) {
                  this.v = shapePool.clone(t);
                  this.localShapeCollection.releaseShapes();
                  this.localShapeCollection.addShape(this.v);
                  this._mdf = !0;
                  this.paths = this.localShapeCollection;
                }
              }
              function a() {
                if (this.elem.globalData.frameId !== this.frameId)
                  if (this.effectsSequence.length)
                    if (this.lock) this.setVValue(this.pv);
                    else {
                      this.lock = !0;
                      this._mdf = !1;
                      var t, e;
                      t = this.kf
                        ? this.pv
                        : this.data.ks
                        ? this.data.ks.k
                        : this.data.pt.k;
                      var i = this.effectsSequence.length;
                      for (e = 0; e < i; e += 1) t = this.effectsSequence[e](t);
                      this.setVValue(t);
                      this.lock = !1;
                      this.frameId = this.elem.globalData.frameId;
                    }
                  else this._mdf = !1;
              }
              function n(t, e, i) {
                this.propType = "shape";
                this.comp = t.comp;
                this.container = t;
                this.elem = t;
                this.data = e;
                this.k = !1;
                this.kf = !1;
                this._mdf = !1;
                var s = 3 === i ? e.pt.k : e.ks.k;
                this.v = shapePool.clone(s);
                this.pv = shapePool.clone(this.v);
                this.localShapeCollection =
                  shapeCollectionPool.newShapeCollection();
                this.paths = this.localShapeCollection;
                this.paths.addShape(this.v);
                this.reset = r;
                this.effectsSequence = [];
              }
              function o(t) {
                this.effectsSequence.push(t);
                this.container.addDynamicProperty(this);
              }
              n.prototype.interpolateShape = e;
              n.prototype.getValue = a;
              n.prototype.setVValue = s;
              n.prototype.addEffect = o;
              function h(e, s, a) {
                this.propType = "shape";
                this.comp = e.comp;
                this.elem = e;
                this.container = e;
                this.offsetTime = e.data.st;
                this.keyframes = 3 === a ? s.pt.k : s.ks.k;
                this.keyframesMetadata = [];
                this.k = !0;
                this.kf = !0;
                var n = this.keyframes[0].s[0].i.length;
                this.v = shapePool.newElement();
                this.v.setPathData(this.keyframes[0].s[0].c, n);
                this.pv = shapePool.clone(this.v);
                this.localShapeCollection =
                  shapeCollectionPool.newShapeCollection();
                this.paths = this.localShapeCollection;
                this.paths.addShape(this.v);
                this.lastFrame = t;
                this.reset = r;
                this._caching = { lastFrame: t, lastIndex: 0 };
                this.effectsSequence = [i.bind(this)];
              }
              h.prototype.getValue = a;
              h.prototype.interpolateShape = e;
              h.prototype.setVValue = s;
              h.prototype.addEffect = o;
              var l = (function () {
                  var t = roundCorner;
                  function e(t, e) {
                    this.v = shapePool.newElement();
                    this.v.setPathData(!0, 4);
                    this.localShapeCollection =
                      shapeCollectionPool.newShapeCollection();
                    this.paths = this.localShapeCollection;
                    this.localShapeCollection.addShape(this.v);
                    this.d = e.d;
                    this.elem = t;
                    this.comp = t.comp;
                    this.frameId = -1;
                    this.initDynamicPropertyContainer(t);
                    this.p = PropertyFactory.getProp(t, e.p, 1, 0, this);
                    this.s = PropertyFactory.getProp(t, e.s, 1, 0, this);
                    if (this.dynamicProperties.length) this.k = !0;
                    else {
                      this.k = !1;
                      this.convertEllToPath();
                    }
                  }
                  e.prototype = {
                    reset: r,
                    getValue: function () {
                      if (this.elem.globalData.frameId !== this.frameId) {
                        this.frameId = this.elem.globalData.frameId;
                        this.iterateDynamicProperties();
                        this._mdf && this.convertEllToPath();
                      }
                    },
                    convertEllToPath: function () {
                      var e = this.p.v[0],
                        i = this.p.v[1],
                        r = this.s.v[0] / 2,
                        s = this.s.v[1] / 2,
                        a = 3 !== this.d,
                        n = this.v;
                      n.v[0][0] = e;
                      n.v[0][1] = i - s;
                      n.v[1][0] = a ? e + r : e - r;
                      n.v[1][1] = i;
                      n.v[2][0] = e;
                      n.v[2][1] = i + s;
                      n.v[3][0] = a ? e - r : e + r;
                      n.v[3][1] = i;
                      n.i[0][0] = a ? e - r * t : e + r * t;
                      n.i[0][1] = i - s;
                      n.i[1][0] = a ? e + r : e - r;
                      n.i[1][1] = i - s * t;
                      n.i[2][0] = a ? e + r * t : e - r * t;
                      n.i[2][1] = i + s;
                      n.i[3][0] = a ? e - r : e + r;
                      n.i[3][1] = i + s * t;
                      n.o[0][0] = a ? e + r * t : e - r * t;
                      n.o[0][1] = i - s;
                      n.o[1][0] = a ? e + r : e - r;
                      n.o[1][1] = i + s * t;
                      n.o[2][0] = a ? e - r * t : e + r * t;
                      n.o[2][1] = i + s;
                      n.o[3][0] = a ? e - r : e + r;
                      n.o[3][1] = i - s * t;
                    },
                  };
                  extendPrototype([DynamicPropertyContainer], e);
                  return e;
                })(),
                p = (function () {
                  function t(t, e) {
                    this.v = shapePool.newElement();
                    this.v.setPathData(!0, 0);
                    this.elem = t;
                    this.comp = t.comp;
                    this.data = e;
                    this.frameId = -1;
                    this.d = e.d;
                    this.initDynamicPropertyContainer(t);
                    if (1 === e.sy) {
                      this.ir = PropertyFactory.getProp(t, e.ir, 0, 0, this);
                      this.is = PropertyFactory.getProp(t, e.is, 0, 0.01, this);
                      this.convertToPath = this.convertStarToPath;
                    } else this.convertToPath = this.convertPolygonToPath;
                    this.pt = PropertyFactory.getProp(t, e.pt, 0, 0, this);
                    this.p = PropertyFactory.getProp(t, e.p, 1, 0, this);
                    this.r = PropertyFactory.getProp(
                      t,
                      e.r,
                      0,
                      degToRads,
                      this
                    );
                    this.or = PropertyFactory.getProp(t, e.or, 0, 0, this);
                    this.os = PropertyFactory.getProp(t, e.os, 0, 0.01, this);
                    this.localShapeCollection =
                      shapeCollectionPool.newShapeCollection();
                    this.localShapeCollection.addShape(this.v);
                    this.paths = this.localShapeCollection;
                    if (this.dynamicProperties.length) this.k = !0;
                    else {
                      this.k = !1;
                      this.convertToPath();
                    }
                  }
                  t.prototype = {
                    reset: r,
                    getValue: function () {
                      if (this.elem.globalData.frameId !== this.frameId) {
                        this.frameId = this.elem.globalData.frameId;
                        this.iterateDynamicProperties();
                        this._mdf && this.convertToPath();
                      }
                    },
                    convertStarToPath: function () {
                      var t,
                        e,
                        i,
                        r,
                        s = 2 * Math.floor(this.pt.v),
                        a = (2 * Math.PI) / s,
                        n = !0,
                        o = this.or.v,
                        h = this.ir.v,
                        l = this.os.v,
                        p = this.is.v,
                        f = (2 * Math.PI * o) / (2 * s),
                        m = (2 * Math.PI * h) / (2 * s),
                        c = -Math.PI / 2;
                      c += this.r.v;
                      var d = 3 === this.data.d ? -1 : 1;
                      this.v._length = 0;
                      for (t = 0; t < s; t += 1) {
                        i = n ? l : p;
                        r = n ? f : m;
                        var u = (e = n ? o : h) * Math.cos(c),
                          y = e * Math.sin(c),
                          g =
                            0 === u && 0 === y
                              ? 0
                              : y / Math.sqrt(u * u + y * y),
                          v =
                            0 === u && 0 === y
                              ? 0
                              : -u / Math.sqrt(u * u + y * y);
                        u += +this.p.v[0];
                        y += +this.p.v[1];
                        this.v.setTripleAt(
                          u,
                          y,
                          u - g * r * i * d,
                          y - v * r * i * d,
                          u + g * r * i * d,
                          y + v * r * i * d,
                          t,
                          !0
                        );
                        n = !n;
                        c += a * d;
                      }
                    },
                    convertPolygonToPath: function () {
                      var t,
                        e = Math.floor(this.pt.v),
                        i = (2 * Math.PI) / e,
                        r = this.or.v,
                        s = this.os.v,
                        a = (2 * Math.PI * r) / (4 * e),
                        n = 0.5 * -Math.PI,
                        o = 3 === this.data.d ? -1 : 1;
                      n += this.r.v;
                      this.v._length = 0;
                      for (t = 0; t < e; t += 1) {
                        var h = r * Math.cos(n),
                          l = r * Math.sin(n),
                          p =
                            0 === h && 0 === l
                              ? 0
                              : l / Math.sqrt(h * h + l * l),
                          f =
                            0 === h && 0 === l
                              ? 0
                              : -h / Math.sqrt(h * h + l * l);
                        h += +this.p.v[0];
                        l += +this.p.v[1];
                        this.v.setTripleAt(
                          h,
                          l,
                          h - p * a * s * o,
                          l - f * a * s * o,
                          h + p * a * s * o,
                          l + f * a * s * o,
                          t,
                          !0
                        );
                        n += i * o;
                      }
                      this.paths.length = 0;
                      this.paths[0] = this.v;
                    },
                  };
                  extendPrototype([DynamicPropertyContainer], t);
                  return t;
                })(),
                f = (function () {
                  function t(t, e) {
                    this.v = shapePool.newElement();
                    this.v.c = !0;
                    this.localShapeCollection =
                      shapeCollectionPool.newShapeCollection();
                    this.localShapeCollection.addShape(this.v);
                    this.paths = this.localShapeCollection;
                    this.elem = t;
                    this.comp = t.comp;
                    this.frameId = -1;
                    this.d = e.d;
                    this.initDynamicPropertyContainer(t);
                    this.p = PropertyFactory.getProp(t, e.p, 1, 0, this);
                    this.s = PropertyFactory.getProp(t, e.s, 1, 0, this);
                    this.r = PropertyFactory.getProp(t, e.r, 0, 0, this);
                    if (this.dynamicProperties.length) this.k = !0;
                    else {
                      this.k = !1;
                      this.convertRectToPath();
                    }
                  }
                  t.prototype = {
                    convertRectToPath: function () {
                      var t = this.p.v[0],
                        e = this.p.v[1],
                        i = this.s.v[0] / 2,
                        r = this.s.v[1] / 2,
                        s = bmMin(i, r, this.r.v),
                        a = s * (1 - roundCorner);
                      this.v._length = 0;
                      if (2 === this.d || 1 === this.d) {
                        this.v.setTripleAt(
                          t + i,
                          e - r + s,
                          t + i,
                          e - r + s,
                          t + i,
                          e - r + a,
                          0,
                          !0
                        );
                        this.v.setTripleAt(
                          t + i,
                          e + r - s,
                          t + i,
                          e + r - a,
                          t + i,
                          e + r - s,
                          1,
                          !0
                        );
                        if (0 !== s) {
                          this.v.setTripleAt(
                            t + i - s,
                            e + r,
                            t + i - s,
                            e + r,
                            t + i - a,
                            e + r,
                            2,
                            !0
                          );
                          this.v.setTripleAt(
                            t - i + s,
                            e + r,
                            t - i + a,
                            e + r,
                            t - i + s,
                            e + r,
                            3,
                            !0
                          );
                          this.v.setTripleAt(
                            t - i,
                            e + r - s,
                            t - i,
                            e + r - s,
                            t - i,
                            e + r - a,
                            4,
                            !0
                          );
                          this.v.setTripleAt(
                            t - i,
                            e - r + s,
                            t - i,
                            e - r + a,
                            t - i,
                            e - r + s,
                            5,
                            !0
                          );
                          this.v.setTripleAt(
                            t - i + s,
                            e - r,
                            t - i + s,
                            e - r,
                            t - i + a,
                            e - r,
                            6,
                            !0
                          );
                          this.v.setTripleAt(
                            t + i - s,
                            e - r,
                            t + i - a,
                            e - r,
                            t + i - s,
                            e - r,
                            7,
                            !0
                          );
                        } else {
                          this.v.setTripleAt(
                            t - i,
                            e + r,
                            t - i + a,
                            e + r,
                            t - i,
                            e + r,
                            2
                          );
                          this.v.setTripleAt(
                            t - i,
                            e - r,
                            t - i,
                            e - r + a,
                            t - i,
                            e - r,
                            3
                          );
                        }
                      } else {
                        this.v.setTripleAt(
                          t + i,
                          e - r + s,
                          t + i,
                          e - r + a,
                          t + i,
                          e - r + s,
                          0,
                          !0
                        );
                        if (0 !== s) {
                          this.v.setTripleAt(
                            t + i - s,
                            e - r,
                            t + i - s,
                            e - r,
                            t + i - a,
                            e - r,
                            1,
                            !0
                          );
                          this.v.setTripleAt(
                            t - i + s,
                            e - r,
                            t - i + a,
                            e - r,
                            t - i + s,
                            e - r,
                            2,
                            !0
                          );
                          this.v.setTripleAt(
                            t - i,
                            e - r + s,
                            t - i,
                            e - r + s,
                            t - i,
                            e - r + a,
                            3,
                            !0
                          );
                          this.v.setTripleAt(
                            t - i,
                            e + r - s,
                            t - i,
                            e + r - a,
                            t - i,
                            e + r - s,
                            4,
                            !0
                          );
                          this.v.setTripleAt(
                            t - i + s,
                            e + r,
                            t - i + s,
                            e + r,
                            t - i + a,
                            e + r,
                            5,
                            !0
                          );
                          this.v.setTripleAt(
                            t + i - s,
                            e + r,
                            t + i - a,
                            e + r,
                            t + i - s,
                            e + r,
                            6,
                            !0
                          );
                          this.v.setTripleAt(
                            t + i,
                            e + r - s,
                            t + i,
                            e + r - s,
                            t + i,
                            e + r - a,
                            7,
                            !0
                          );
                        } else {
                          this.v.setTripleAt(
                            t - i,
                            e - r,
                            t - i + a,
                            e - r,
                            t - i,
                            e - r,
                            1,
                            !0
                          );
                          this.v.setTripleAt(
                            t - i,
                            e + r,
                            t - i,
                            e + r - a,
                            t - i,
                            e + r,
                            2,
                            !0
                          );
                          this.v.setTripleAt(
                            t + i,
                            e + r,
                            t + i - a,
                            e + r,
                            t + i,
                            e + r,
                            3,
                            !0
                          );
                        }
                      }
                    },
                    getValue: function () {
                      if (this.elem.globalData.frameId !== this.frameId) {
                        this.frameId = this.elem.globalData.frameId;
                        this.iterateDynamicProperties();
                        this._mdf && this.convertRectToPath();
                      }
                    },
                    reset: r,
                  };
                  extendPrototype([DynamicPropertyContainer], t);
                  return t;
                })(),
                m = {
                  getShapeProp: function (t, e, i) {
                    var r;
                    3 === i || 4 === i
                      ? (r = (3 === i ? e.pt : e.ks).k.length
                          ? new h(t, e, i)
                          : new n(t, e, i))
                      : 5 === i
                      ? (r = new f(t, e))
                      : 6 === i
                      ? (r = new l(t, e))
                      : 7 === i && (r = new p(t, e));
                    r.k && t.addDynamicProperty(r);
                    return r;
                  },
                  getConstructorFunction: function () {
                    return n;
                  },
                  getKeyframedConstructorFunction: function () {
                    return h;
                  },
                };
              return m;
            })(),
            Matrix = (function () {
              var t = Math.cos,
                e = Math.sin,
                i = Math.tan,
                r = Math.round;
              function s() {
                this.props[0] = 1;
                this.props[1] = 0;
                this.props[2] = 0;
                this.props[3] = 0;
                this.props[4] = 0;
                this.props[5] = 1;
                this.props[6] = 0;
                this.props[7] = 0;
                this.props[8] = 0;
                this.props[9] = 0;
                this.props[10] = 1;
                this.props[11] = 0;
                this.props[12] = 0;
                this.props[13] = 0;
                this.props[14] = 0;
                this.props[15] = 1;
                return this;
              }
              function a(i) {
                if (0 === i) return this;
                var r = t(i),
                  s = e(i);
                return this._t(r, -s, 0, 0, s, r, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
              }
              function n(i) {
                if (0 === i) return this;
                var r = t(i),
                  s = e(i);
                return this._t(1, 0, 0, 0, 0, r, -s, 0, 0, s, r, 0, 0, 0, 0, 1);
              }
              function o(i) {
                if (0 === i) return this;
                var r = t(i),
                  s = e(i);
                return this._t(r, 0, s, 0, 0, 1, 0, 0, -s, 0, r, 0, 0, 0, 0, 1);
              }
              function h(i) {
                if (0 === i) return this;
                var r = t(i),
                  s = e(i);
                return this._t(r, -s, 0, 0, s, r, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
              }
              function l(t, e) {
                return this._t(1, e, t, 1, 0, 0);
              }
              function p(t, e) {
                return this.shear(i(t), i(e));
              }
              function f(r, s) {
                var a = t(s),
                  n = e(s);
                return this._t(a, n, 0, 0, -n, a, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)
                  ._t(1, 0, 0, 0, i(r), 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)
                  ._t(a, -n, 0, 0, n, a, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
              }
              function m(t, e, i) {
                i || 0 === i || (i = 1);
                return 1 === t && 1 === e && 1 === i
                  ? this
                  : this._t(t, 0, 0, 0, 0, e, 0, 0, 0, 0, i, 0, 0, 0, 0, 1);
              }
              function c(t, e, i, r, s, a, n, o, h, l, p, f, m, c, d, u) {
                this.props[0] = t;
                this.props[1] = e;
                this.props[2] = i;
                this.props[3] = r;
                this.props[4] = s;
                this.props[5] = a;
                this.props[6] = n;
                this.props[7] = o;
                this.props[8] = h;
                this.props[9] = l;
                this.props[10] = p;
                this.props[11] = f;
                this.props[12] = m;
                this.props[13] = c;
                this.props[14] = d;
                this.props[15] = u;
                return this;
              }
              function d(t, e, i) {
                i = i || 0;
                return 0 !== t || 0 !== e || 0 !== i
                  ? this._t(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, t, e, i, 1)
                  : this;
              }
              function u(t, e, i, r, s, a, n, o, h, l, p, f, m, c, d, u) {
                var y = this.props;
                if (
                  1 === t &&
                  0 === e &&
                  0 === i &&
                  0 === r &&
                  0 === s &&
                  1 === a &&
                  0 === n &&
                  0 === o &&
                  0 === h &&
                  0 === l &&
                  1 === p &&
                  0 === f
                ) {
                  y[12] = y[12] * t + y[15] * m;
                  y[13] = y[13] * a + y[15] * c;
                  y[14] = y[14] * p + y[15] * d;
                  y[15] *= u;
                  this._identityCalculated = !1;
                  return this;
                }
                var g = y[0],
                  v = y[1],
                  b = y[2],
                  P = y[3],
                  E = y[4],
                  x = y[5],
                  S = y[6],
                  _ = y[7],
                  C = y[8],
                  A = y[9],
                  T = y[10],
                  k = y[11],
                  D = y[12],
                  M = y[13],
                  F = y[14],
                  w = y[15];
                y[0] = g * t + v * s + b * h + P * m;
                y[1] = g * e + v * a + b * l + P * c;
                y[2] = g * i + v * n + b * p + P * d;
                y[3] = g * r + v * o + b * f + P * u;
                y[4] = E * t + x * s + S * h + _ * m;
                y[5] = E * e + x * a + S * l + _ * c;
                y[6] = E * i + x * n + S * p + _ * d;
                y[7] = E * r + x * o + S * f + _ * u;
                y[8] = C * t + A * s + T * h + k * m;
                y[9] = C * e + A * a + T * l + k * c;
                y[10] = C * i + A * n + T * p + k * d;
                y[11] = C * r + A * o + T * f + k * u;
                y[12] = D * t + M * s + F * h + w * m;
                y[13] = D * e + M * a + F * l + w * c;
                y[14] = D * i + M * n + F * p + w * d;
                y[15] = D * r + M * o + F * f + w * u;
                this._identityCalculated = !1;
                return this;
              }
              function y() {
                if (!this._identityCalculated) {
                  this._identity = !(
                    1 !== this.props[0] ||
                    0 !== this.props[1] ||
                    0 !== this.props[2] ||
                    0 !== this.props[3] ||
                    0 !== this.props[4] ||
                    1 !== this.props[5] ||
                    0 !== this.props[6] ||
                    0 !== this.props[7] ||
                    0 !== this.props[8] ||
                    0 !== this.props[9] ||
                    1 !== this.props[10] ||
                    0 !== this.props[11] ||
                    0 !== this.props[12] ||
                    0 !== this.props[13] ||
                    0 !== this.props[14] ||
                    1 !== this.props[15]
                  );
                  this._identityCalculated = !0;
                }
                return this._identity;
              }
              function g(t) {
                for (var e = 0; e < 16; ) {
                  if (t.props[e] !== this.props[e]) return !1;
                  e += 1;
                }
                return !0;
              }
              function v(t) {
                var e;
                for (e = 0; e < 16; e += 1) t.props[e] = this.props[e];
                return t;
              }
              function b(t) {
                var e;
                for (e = 0; e < 16; e += 1) this.props[e] = t[e];
              }
              function P(t, e, i) {
                return {
                  x:
                    t * this.props[0] +
                    e * this.props[4] +
                    i * this.props[8] +
                    this.props[12],
                  y:
                    t * this.props[1] +
                    e * this.props[5] +
                    i * this.props[9] +
                    this.props[13],
                  z:
                    t * this.props[2] +
                    e * this.props[6] +
                    i * this.props[10] +
                    this.props[14],
                };
              }
              function E(t, e, i) {
                return (
                  t * this.props[0] +
                  e * this.props[4] +
                  i * this.props[8] +
                  this.props[12]
                );
              }
              function x(t, e, i) {
                return (
                  t * this.props[1] +
                  e * this.props[5] +
                  i * this.props[9] +
                  this.props[13]
                );
              }
              function S(t, e, i) {
                return (
                  t * this.props[2] +
                  e * this.props[6] +
                  i * this.props[10] +
                  this.props[14]
                );
              }
              function _() {
                var t =
                    this.props[0] * this.props[5] -
                    this.props[1] * this.props[4],
                  e = this.props[5] / t,
                  i = -this.props[1] / t,
                  r = -this.props[4] / t,
                  s = this.props[0] / t,
                  a =
                    (this.props[4] * this.props[13] -
                      this.props[5] * this.props[12]) /
                    t,
                  n =
                    -(
                      this.props[0] * this.props[13] -
                      this.props[1] * this.props[12]
                    ) / t,
                  o = new Matrix();
                o.props[0] = e;
                o.props[1] = i;
                o.props[4] = r;
                o.props[5] = s;
                o.props[12] = a;
                o.props[13] = n;
                return o;
              }
              function C(t) {
                return this.getInverseMatrix().applyToPointArray(
                  t[0],
                  t[1],
                  t[2] || 0
                );
              }
              function A(t) {
                var e,
                  i = t.length,
                  r = [];
                for (e = 0; e < i; e += 1) r[e] = C(t[e]);
                return r;
              }
              function T(t, e, i) {
                var r = createTypedArray("float32", 6);
                if (this.isIdentity()) {
                  r[0] = t[0];
                  r[1] = t[1];
                  r[2] = e[0];
                  r[3] = e[1];
                  r[4] = i[0];
                  r[5] = i[1];
                } else {
                  var s = this.props[0],
                    a = this.props[1],
                    n = this.props[4],
                    o = this.props[5],
                    h = this.props[12],
                    l = this.props[13];
                  r[0] = t[0] * s + t[1] * n + h;
                  r[1] = t[0] * a + t[1] * o + l;
                  r[2] = e[0] * s + e[1] * n + h;
                  r[3] = e[0] * a + e[1] * o + l;
                  r[4] = i[0] * s + i[1] * n + h;
                  r[5] = i[0] * a + i[1] * o + l;
                }
                return r;
              }
              function k(t, e, i) {
                return this.isIdentity()
                  ? [t, e, i]
                  : [
                      t * this.props[0] +
                        e * this.props[4] +
                        i * this.props[8] +
                        this.props[12],
                      t * this.props[1] +
                        e * this.props[5] +
                        i * this.props[9] +
                        this.props[13],
                      t * this.props[2] +
                        e * this.props[6] +
                        i * this.props[10] +
                        this.props[14],
                    ];
              }
              function D(t, e) {
                if (this.isIdentity()) return t + "," + e;
                var i = this.props;
                return (
                  Math.round(100 * (t * i[0] + e * i[4] + i[12])) / 100 +
                  "," +
                  Math.round(100 * (t * i[1] + e * i[5] + i[13])) / 100
                );
              }
              function M() {
                for (var t = 0, e = this.props, i = "matrix3d("; t < 16; ) {
                  i += r(1e4 * e[t]) / 1e4;
                  i += 15 === t ? ")" : ",";
                  t += 1;
                }
                return i;
              }
              function F(t) {
                return (t < 1e-6 && t > 0) || (t > -1e-6 && t < 0)
                  ? r(1e4 * t) / 1e4
                  : t;
              }
              function w() {
                var t = this.props;
                return (
                  "matrix(" +
                  F(t[0]) +
                  "," +
                  F(t[1]) +
                  "," +
                  F(t[4]) +
                  "," +
                  F(t[5]) +
                  "," +
                  F(t[12]) +
                  "," +
                  F(t[13]) +
                  ")"
                );
              }
              return function () {
                this.reset = s;
                this.rotate = a;
                this.rotateX = n;
                this.rotateY = o;
                this.rotateZ = h;
                this.skew = p;
                this.skewFromAxis = f;
                this.shear = l;
                this.scale = m;
                this.setTransform = c;
                this.translate = d;
                this.transform = u;
                this.applyToPoint = P;
                this.applyToX = E;
                this.applyToY = x;
                this.applyToZ = S;
                this.applyToPointArray = k;
                this.applyToTriplePoints = T;
                this.applyToPointStringified = D;
                this.toCSS = M;
                this.to2dCSS = w;
                this.clone = v;
                this.cloneFromProps = b;
                this.equals = g;
                this.inversePoints = A;
                this.inversePoint = C;
                this.getInverseMatrix = _;
                this._t = this.transform;
                this.isIdentity = y;
                this._identity = !0;
                this._identityCalculated = !1;
                this.props = createTypedArray("float32", 16);
                this.reset();
              };
            })();
          function _typeof$3(t) {
            _typeof$3 =
              "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                ? function (t) {
                    return typeof t;
                  }
                : function (t) {
                    return t &&
                      "function" == typeof Symbol &&
                      t.constructor === Symbol &&
                      t !== Symbol.prototype
                      ? "symbol"
                      : typeof t;
                  };
            return _typeof$3(t);
          }
          var lottie = {},
            standalone = "__[STANDALONE]__",
            animationData = "__[ANIMATIONDATA]__",
            renderer = "";
          function setLocation(t) {
            setLocationHref(t);
          }
          function searchAnimations() {
            !0 === standalone
              ? animationManager.searchAnimations(
                  animationData,
                  standalone,
                  renderer
                )
              : animationManager.searchAnimations();
          }
          function setSubframeRendering(t) {
            setSubframeEnabled(t);
          }
          function setPrefix(t) {
            setIdPrefix(t);
          }
          function loadAnimation(t) {
            !0 === standalone && (t.animationData = JSON.parse(animationData));
            return animationManager.loadAnimation(t);
          }
          function setQuality(t) {
            if ("string" == typeof t)
              switch (t) {
                case "high":
                  setDefaultCurveSegments(200);
                  break;
                default:
                case "medium":
                  setDefaultCurveSegments(50);
                  break;
                case "low":
                  setDefaultCurveSegments(10);
              }
            else !isNaN(t) && t > 1 && setDefaultCurveSegments(t);
            getDefaultCurveSegments() >= 50 ? roundValues(!1) : roundValues(!0);
          }
          function inBrowser() {
            return "undefined" != typeof navigator;
          }
          function installPlugin(t, e) {
            "expressions" === t && setExpressionsPlugin(e);
          }
          function getFactory(t) {
            switch (t) {
              case "propertyFactory":
                return PropertyFactory;
              case "shapePropertyFactory":
                return ShapePropertyFactory;
              case "matrix":
                return Matrix;
              default:
                return null;
            }
          }
          lottie.play = animationManager.play;
          lottie.pause = animationManager.pause;
          lottie.setLocationHref = setLocation;
          lottie.togglePause = animationManager.togglePause;
          lottie.setSpeed = animationManager.setSpeed;
          lottie.setDirection = animationManager.setDirection;
          lottie.stop = animationManager.stop;
          lottie.searchAnimations = searchAnimations;
          lottie.registerAnimation = animationManager.registerAnimation;
          lottie.loadAnimation = loadAnimation;
          lottie.setSubframeRendering = setSubframeRendering;
          lottie.resize = animationManager.resize;
          lottie.goToAndStop = animationManager.goToAndStop;
          lottie.destroy = animationManager.destroy;
          lottie.setQuality = setQuality;
          lottie.inBrowser = inBrowser;
          lottie.installPlugin = installPlugin;
          lottie.freeze = animationManager.freeze;
          lottie.unfreeze = animationManager.unfreeze;
          lottie.setVolume = animationManager.setVolume;
          lottie.mute = animationManager.mute;
          lottie.unmute = animationManager.unmute;
          lottie.getRegisteredAnimations =
            animationManager.getRegisteredAnimations;
          lottie.useWebWorker = setWebWorker;
          lottie.setIDPrefix = setPrefix;
          lottie.__getFactory = getFactory;
          lottie.version = "5.9.5";
          function checkReady() {
            if ("complete" === document.readyState) {
              clearInterval(readyStateCheckInterval);
              searchAnimations();
            }
          }
          function getQueryVariable(t) {
            for (var e = queryString.split("&"), i = 0; i < e.length; i += 1) {
              var r = e[i].split("=");
              if (decodeURIComponent(r[0]) == t)
                return decodeURIComponent(r[1]);
            }
            return null;
          }
          var queryString = "";
          if (standalone) {
            var scripts = document.getElementsByTagName("script"),
              index = scripts.length - 1,
              myScript = scripts[index] || { src: "" };
            queryString = myScript.src
              ? myScript.src.replace(/^[^\?]+\??/, "")
              : "";
            renderer = getQueryVariable("renderer");
          }
          var readyStateCheckInterval = setInterval(checkReady, 100);
          try {
            "object" !== _typeof$3(exports) && __webpack_require__.amdO;
          } catch (t) {}
          var ShapeModifiers = (function () {
            var t = {},
              e = {};
            t.registerModifier = function (t, i) {
              e[t] || (e[t] = i);
            };
            t.getModifier = function (t, i, r) {
              return new e[t](i, r);
            };
            return t;
          })();
          function ShapeModifier() {}
          ShapeModifier.prototype.initModifierProperties = function () {};
          ShapeModifier.prototype.addShapeToModifier = function () {};
          ShapeModifier.prototype.addShape = function (t) {
            if (!this.closed) {
              t.sh.container.addDynamicProperty(t.sh);
              var e = {
                shape: t.sh,
                data: t,
                localShapeCollection: shapeCollectionPool.newShapeCollection(),
              };
              this.shapes.push(e);
              this.addShapeToModifier(e);
              this._isAnimated && t.setAsAnimated();
            }
          };
          ShapeModifier.prototype.init = function (t, e) {
            this.shapes = [];
            this.elem = t;
            this.initDynamicPropertyContainer(t);
            this.initModifierProperties(t, e);
            this.frameId = initialDefaultFrame;
            this.closed = !1;
            this.k = !1;
            this.dynamicProperties.length ? (this.k = !0) : this.getValue(!0);
          };
          ShapeModifier.prototype.processKeys = function () {
            if (this.elem.globalData.frameId !== this.frameId) {
              this.frameId = this.elem.globalData.frameId;
              this.iterateDynamicProperties();
            }
          };
          extendPrototype([DynamicPropertyContainer], ShapeModifier);
          function TrimModifier() {}
          extendPrototype([ShapeModifier], TrimModifier);
          TrimModifier.prototype.initModifierProperties = function (t, e) {
            this.s = PropertyFactory.getProp(t, e.s, 0, 0.01, this);
            this.e = PropertyFactory.getProp(t, e.e, 0, 0.01, this);
            this.o = PropertyFactory.getProp(t, e.o, 0, 0, this);
            this.sValue = 0;
            this.eValue = 0;
            this.getValue = this.processKeys;
            this.m = e.m;
            this._isAnimated =
              !!this.s.effectsSequence.length ||
              !!this.e.effectsSequence.length ||
              !!this.o.effectsSequence.length;
          };
          TrimModifier.prototype.addShapeToModifier = function (t) {
            t.pathsData = [];
          };
          TrimModifier.prototype.calculateShapeEdges = function (
            t,
            e,
            i,
            r,
            s
          ) {
            var a = [];
            if (e <= 1) a.push({ s: t, e });
            else if (t >= 1) a.push({ s: t - 1, e: e - 1 });
            else {
              a.push({ s: t, e: 1 });
              a.push({ s: 0, e: e - 1 });
            }
            var n,
              o,
              h = [],
              l = a.length;
            for (n = 0; n < l; n += 1)
              if (!((o = a[n]).e * s < r || o.s * s > r + i)) {
                var p, f;
                p = o.s * s <= r ? 0 : (o.s * s - r) / i;
                f = o.e * s >= r + i ? 1 : (o.e * s - r) / i;
                h.push([p, f]);
              }
            h.length || h.push([0, 0]);
            return h;
          };
          TrimModifier.prototype.releasePathsData = function (t) {
            var e,
              i = t.length;
            for (e = 0; e < i; e += 1) segmentsLengthPool.release(t[e]);
            t.length = 0;
            return t;
          };
          TrimModifier.prototype.processShapes = function (t) {
            var e, i, r, s;
            if (this._mdf || t) {
              var a = (this.o.v % 360) / 360;
              a < 0 && (a += 1);
              if (
                (e =
                  this.s.v > 1 ? 1 + a : this.s.v < 0 ? 0 + a : this.s.v + a) >
                (i = this.e.v > 1 ? 1 + a : this.e.v < 0 ? 0 + a : this.e.v + a)
              ) {
                var n = e;
                e = i;
                i = n;
              }
              e = 1e-4 * Math.round(1e4 * e);
              i = 1e-4 * Math.round(1e4 * i);
              this.sValue = e;
              this.eValue = i;
            } else {
              e = this.sValue;
              i = this.eValue;
            }
            var o,
              h,
              l,
              p,
              f,
              m = this.shapes.length,
              c = 0;
            if (i === e)
              for (s = 0; s < m; s += 1) {
                this.shapes[s].localShapeCollection.releaseShapes();
                this.shapes[s].shape._mdf = !0;
                this.shapes[s].shape.paths =
                  this.shapes[s].localShapeCollection;
                this._mdf && (this.shapes[s].pathsData.length = 0);
              }
            else if ((1 === i && 0 === e) || (0 === i && 1 === e)) {
              if (this._mdf)
                for (s = 0; s < m; s += 1) {
                  this.shapes[s].pathsData.length = 0;
                  this.shapes[s].shape._mdf = !0;
                }
            } else {
              var d,
                u,
                y = [];
              for (s = 0; s < m; s += 1)
                if (
                  (d = this.shapes[s]).shape._mdf ||
                  this._mdf ||
                  t ||
                  2 === this.m
                ) {
                  h = (r = d.shape.paths)._length;
                  f = 0;
                  if (!d.shape._mdf && d.pathsData.length)
                    f = d.totalShapeLength;
                  else {
                    l = this.releasePathsData(d.pathsData);
                    for (o = 0; o < h; o += 1) {
                      p = bez.getSegmentsLength(r.shapes[o]);
                      l.push(p);
                      f += p.totalLength;
                    }
                    d.totalShapeLength = f;
                    d.pathsData = l;
                  }
                  c += f;
                  d.shape._mdf = !0;
                } else d.shape.paths = d.localShapeCollection;
              var g,
                v = e,
                b = i,
                P = 0;
              for (s = m - 1; s >= 0; s -= 1)
                if ((d = this.shapes[s]).shape._mdf) {
                  (u = d.localShapeCollection).releaseShapes();
                  if (2 === this.m && m > 1) {
                    g = this.calculateShapeEdges(
                      e,
                      i,
                      d.totalShapeLength,
                      P,
                      c
                    );
                    P += d.totalShapeLength;
                  } else g = [[v, b]];
                  h = g.length;
                  for (o = 0; o < h; o += 1) {
                    v = g[o][0];
                    b = g[o][1];
                    y.length = 0;
                    if (b <= 1)
                      y.push({
                        s: d.totalShapeLength * v,
                        e: d.totalShapeLength * b,
                      });
                    else if (v >= 1)
                      y.push({
                        s: d.totalShapeLength * (v - 1),
                        e: d.totalShapeLength * (b - 1),
                      });
                    else {
                      y.push({
                        s: d.totalShapeLength * v,
                        e: d.totalShapeLength,
                      });
                      y.push({ s: 0, e: d.totalShapeLength * (b - 1) });
                    }
                    var E = this.addShapes(d, y[0]);
                    if (y[0].s !== y[0].e) {
                      if (y.length > 1)
                        if (d.shape.paths.shapes[d.shape.paths._length - 1].c) {
                          var x = E.pop();
                          this.addPaths(E, u);
                          E = this.addShapes(d, y[1], x);
                        } else {
                          this.addPaths(E, u);
                          E = this.addShapes(d, y[1]);
                        }
                      this.addPaths(E, u);
                    }
                  }
                  d.shape.paths = u;
                }
            }
          };
          TrimModifier.prototype.addPaths = function (t, e) {
            var i,
              r = t.length;
            for (i = 0; i < r; i += 1) e.addShape(t[i]);
          };
          TrimModifier.prototype.addSegment = function (t, e, i, r, s, a, n) {
            s.setXYAt(e[0], e[1], "o", a);
            s.setXYAt(i[0], i[1], "i", a + 1);
            n && s.setXYAt(t[0], t[1], "v", a);
            s.setXYAt(r[0], r[1], "v", a + 1);
          };
          TrimModifier.prototype.addSegmentFromArray = function (t, e, i, r) {
            e.setXYAt(t[1], t[5], "o", i);
            e.setXYAt(t[2], t[6], "i", i + 1);
            r && e.setXYAt(t[0], t[4], "v", i);
            e.setXYAt(t[3], t[7], "v", i + 1);
          };
          TrimModifier.prototype.addShapes = function (t, e, i) {
            var r,
              s,
              a,
              n,
              o,
              h,
              l,
              p,
              f = t.pathsData,
              m = t.shape.paths.shapes,
              c = t.shape.paths._length,
              d = 0,
              u = [],
              y = !0;
            if (i) {
              o = i._length;
              p = i._length;
            } else {
              i = shapePool.newElement();
              o = 0;
              p = 0;
            }
            u.push(i);
            for (r = 0; r < c; r += 1) {
              h = f[r].lengths;
              i.c = m[r].c;
              a = m[r].c ? h.length : h.length + 1;
              for (s = 1; s < a; s += 1)
                if (d + (n = h[s - 1]).addedLength < e.s) {
                  d += n.addedLength;
                  i.c = !1;
                } else {
                  if (d > e.e) {
                    i.c = !1;
                    break;
                  }
                  if (e.s <= d && e.e >= d + n.addedLength) {
                    this.addSegment(
                      m[r].v[s - 1],
                      m[r].o[s - 1],
                      m[r].i[s],
                      m[r].v[s],
                      i,
                      o,
                      y
                    );
                    y = !1;
                  } else {
                    l = bez.getNewSegment(
                      m[r].v[s - 1],
                      m[r].v[s],
                      m[r].o[s - 1],
                      m[r].i[s],
                      (e.s - d) / n.addedLength,
                      (e.e - d) / n.addedLength,
                      h[s - 1]
                    );
                    this.addSegmentFromArray(l, i, o, y);
                    y = !1;
                    i.c = !1;
                  }
                  d += n.addedLength;
                  o += 1;
                }
              if (m[r].c && h.length) {
                n = h[s - 1];
                if (d <= e.e) {
                  var g = h[s - 1].addedLength;
                  if (e.s <= d && e.e >= d + g) {
                    this.addSegment(
                      m[r].v[s - 1],
                      m[r].o[s - 1],
                      m[r].i[0],
                      m[r].v[0],
                      i,
                      o,
                      y
                    );
                    y = !1;
                  } else {
                    l = bez.getNewSegment(
                      m[r].v[s - 1],
                      m[r].v[0],
                      m[r].o[s - 1],
                      m[r].i[0],
                      (e.s - d) / g,
                      (e.e - d) / g,
                      h[s - 1]
                    );
                    this.addSegmentFromArray(l, i, o, y);
                    y = !1;
                    i.c = !1;
                  }
                } else i.c = !1;
                d += n.addedLength;
                o += 1;
              }
              if (i._length) {
                i.setXYAt(i.v[p][0], i.v[p][1], "i", p);
                i.setXYAt(
                  i.v[i._length - 1][0],
                  i.v[i._length - 1][1],
                  "o",
                  i._length - 1
                );
              }
              if (d > e.e) break;
              if (r < c - 1) {
                i = shapePool.newElement();
                y = !0;
                u.push(i);
                o = 0;
              }
            }
            return u;
          };
          function PuckerAndBloatModifier() {}
          extendPrototype([ShapeModifier], PuckerAndBloatModifier);
          PuckerAndBloatModifier.prototype.initModifierProperties = function (
            t,
            e
          ) {
            this.getValue = this.processKeys;
            this.amount = PropertyFactory.getProp(t, e.a, 0, null, this);
            this._isAnimated = !!this.amount.effectsSequence.length;
          };
          PuckerAndBloatModifier.prototype.processPath = function (t, e) {
            var i = e / 100,
              r = [0, 0],
              s = t._length,
              a = 0;
            for (a = 0; a < s; a += 1) {
              r[0] += t.v[a][0];
              r[1] += t.v[a][1];
            }
            r[0] /= s;
            r[1] /= s;
            var n,
              o,
              h,
              l,
              p,
              f,
              m = shapePool.newElement();
            m.c = t.c;
            for (a = 0; a < s; a += 1) {
              n = t.v[a][0] + (r[0] - t.v[a][0]) * i;
              o = t.v[a][1] + (r[1] - t.v[a][1]) * i;
              h = t.o[a][0] + (r[0] - t.o[a][0]) * -i;
              l = t.o[a][1] + (r[1] - t.o[a][1]) * -i;
              p = t.i[a][0] + (r[0] - t.i[a][0]) * -i;
              f = t.i[a][1] + (r[1] - t.i[a][1]) * -i;
              m.setTripleAt(n, o, h, l, p, f, a);
            }
            return m;
          };
          PuckerAndBloatModifier.prototype.processShapes = function (t) {
            var e,
              i,
              r,
              s,
              a = this.shapes.length,
              n = this.amount.v;
            if (0 !== n) {
              var o, h;
              for (i = 0; i < a; i += 1) {
                h = (o = this.shapes[i]).localShapeCollection;
                if (o.shape._mdf || this._mdf || t) {
                  h.releaseShapes();
                  o.shape._mdf = !0;
                  e = o.shape.paths.shapes;
                  s = o.shape.paths._length;
                  for (r = 0; r < s; r += 1)
                    h.addShape(this.processPath(e[r], n));
                }
                o.shape.paths = o.localShapeCollection;
              }
            }
            this.dynamicProperties.length || (this._mdf = !1);
          };
          var TransformPropertyFactory = (function () {
            var t = [0, 0];
            function e(t, e, i) {
              this.elem = t;
              this.frameId = -1;
              this.propType = "transform";
              this.data = e;
              this.v = new Matrix();
              this.pre = new Matrix();
              this.appliedTransformations = 0;
              this.initDynamicPropertyContainer(i || t);
              if (e.p && e.p.s) {
                this.px = PropertyFactory.getProp(t, e.p.x, 0, 0, this);
                this.py = PropertyFactory.getProp(t, e.p.y, 0, 0, this);
                e.p.z &&
                  (this.pz = PropertyFactory.getProp(t, e.p.z, 0, 0, this));
              } else
                this.p = PropertyFactory.getProp(
                  t,
                  e.p || { k: [0, 0, 0] },
                  1,
                  0,
                  this
                );
              if (e.rx) {
                this.rx = PropertyFactory.getProp(t, e.rx, 0, degToRads, this);
                this.ry = PropertyFactory.getProp(t, e.ry, 0, degToRads, this);
                this.rz = PropertyFactory.getProp(t, e.rz, 0, degToRads, this);
                if (e.or.k[0].ti) {
                  var r,
                    s = e.or.k.length;
                  for (r = 0; r < s; r += 1) {
                    e.or.k[r].to = null;
                    e.or.k[r].ti = null;
                  }
                }
                this.or = PropertyFactory.getProp(t, e.or, 1, degToRads, this);
                this.or.sh = !0;
              } else
                this.r = PropertyFactory.getProp(
                  t,
                  e.r || { k: 0 },
                  0,
                  degToRads,
                  this
                );
              if (e.sk) {
                this.sk = PropertyFactory.getProp(t, e.sk, 0, degToRads, this);
                this.sa = PropertyFactory.getProp(t, e.sa, 0, degToRads, this);
              }
              this.a = PropertyFactory.getProp(
                t,
                e.a || { k: [0, 0, 0] },
                1,
                0,
                this
              );
              this.s = PropertyFactory.getProp(
                t,
                e.s || { k: [100, 100, 100] },
                1,
                0.01,
                this
              );
              e.o
                ? (this.o = PropertyFactory.getProp(t, e.o, 0, 0.01, t))
                : (this.o = { _mdf: !1, v: 1 });
              this._isDirty = !0;
              this.dynamicProperties.length || this.getValue(!0);
            }
            e.prototype = {
              applyToMatrix: function (t) {
                var e = this._mdf;
                this.iterateDynamicProperties();
                this._mdf = this._mdf || e;
                this.a && t.translate(-this.a.v[0], -this.a.v[1], this.a.v[2]);
                this.s && t.scale(this.s.v[0], this.s.v[1], this.s.v[2]);
                this.sk && t.skewFromAxis(-this.sk.v, this.sa.v);
                this.r
                  ? t.rotate(-this.r.v)
                  : t
                      .rotateZ(-this.rz.v)
                      .rotateY(this.ry.v)
                      .rotateX(this.rx.v)
                      .rotateZ(-this.or.v[2])
                      .rotateY(this.or.v[1])
                      .rotateX(this.or.v[0]);
                this.data.p.s
                  ? this.data.p.z
                    ? t.translate(this.px.v, this.py.v, -this.pz.v)
                    : t.translate(this.px.v, this.py.v, 0)
                  : t.translate(this.p.v[0], this.p.v[1], -this.p.v[2]);
              },
              getValue: function (e) {
                if (this.elem.globalData.frameId !== this.frameId) {
                  if (this._isDirty) {
                    this.precalculateMatrix();
                    this._isDirty = !1;
                  }
                  this.iterateDynamicProperties();
                  if (this._mdf || e) {
                    var i;
                    this.v.cloneFromProps(this.pre.props);
                    this.appliedTransformations < 1 &&
                      this.v.translate(-this.a.v[0], -this.a.v[1], this.a.v[2]);
                    this.appliedTransformations < 2 &&
                      this.v.scale(this.s.v[0], this.s.v[1], this.s.v[2]);
                    this.sk &&
                      this.appliedTransformations < 3 &&
                      this.v.skewFromAxis(-this.sk.v, this.sa.v);
                    this.r && this.appliedTransformations < 4
                      ? this.v.rotate(-this.r.v)
                      : !this.r &&
                        this.appliedTransformations < 4 &&
                        this.v
                          .rotateZ(-this.rz.v)
                          .rotateY(this.ry.v)
                          .rotateX(this.rx.v)
                          .rotateZ(-this.or.v[2])
                          .rotateY(this.or.v[1])
                          .rotateX(this.or.v[0]);
                    if (this.autoOriented) {
                      var r, s;
                      i = this.elem.globalData.frameRate;
                      if (this.p && this.p.keyframes && this.p.getValueAtTime)
                        if (
                          this.p._caching.lastFrame + this.p.offsetTime <=
                          this.p.keyframes[0].t
                        ) {
                          r = this.p.getValueAtTime(
                            (this.p.keyframes[0].t + 0.01) / i,
                            0
                          );
                          s = this.p.getValueAtTime(
                            this.p.keyframes[0].t / i,
                            0
                          );
                        } else if (
                          this.p._caching.lastFrame + this.p.offsetTime >=
                          this.p.keyframes[this.p.keyframes.length - 1].t
                        ) {
                          r = this.p.getValueAtTime(
                            this.p.keyframes[this.p.keyframes.length - 1].t / i,
                            0
                          );
                          s = this.p.getValueAtTime(
                            (this.p.keyframes[this.p.keyframes.length - 1].t -
                              0.05) /
                              i,
                            0
                          );
                        } else {
                          r = this.p.pv;
                          s = this.p.getValueAtTime(
                            (this.p._caching.lastFrame +
                              this.p.offsetTime -
                              0.01) /
                              i,
                            this.p.offsetTime
                          );
                        }
                      else if (
                        this.px &&
                        this.px.keyframes &&
                        this.py.keyframes &&
                        this.px.getValueAtTime &&
                        this.py.getValueAtTime
                      ) {
                        r = [];
                        s = [];
                        var a = this.px,
                          n = this.py;
                        if (
                          a._caching.lastFrame + a.offsetTime <=
                          a.keyframes[0].t
                        ) {
                          r[0] = a.getValueAtTime(
                            (a.keyframes[0].t + 0.01) / i,
                            0
                          );
                          r[1] = n.getValueAtTime(
                            (n.keyframes[0].t + 0.01) / i,
                            0
                          );
                          s[0] = a.getValueAtTime(a.keyframes[0].t / i, 0);
                          s[1] = n.getValueAtTime(n.keyframes[0].t / i, 0);
                        } else if (
                          a._caching.lastFrame + a.offsetTime >=
                          a.keyframes[a.keyframes.length - 1].t
                        ) {
                          r[0] = a.getValueAtTime(
                            a.keyframes[a.keyframes.length - 1].t / i,
                            0
                          );
                          r[1] = n.getValueAtTime(
                            n.keyframes[n.keyframes.length - 1].t / i,
                            0
                          );
                          s[0] = a.getValueAtTime(
                            (a.keyframes[a.keyframes.length - 1].t - 0.01) / i,
                            0
                          );
                          s[1] = n.getValueAtTime(
                            (n.keyframes[n.keyframes.length - 1].t - 0.01) / i,
                            0
                          );
                        } else {
                          r = [a.pv, n.pv];
                          s[0] = a.getValueAtTime(
                            (a._caching.lastFrame + a.offsetTime - 0.01) / i,
                            a.offsetTime
                          );
                          s[1] = n.getValueAtTime(
                            (n._caching.lastFrame + n.offsetTime - 0.01) / i,
                            n.offsetTime
                          );
                        }
                      } else r = s = t;
                      this.v.rotate(-Math.atan2(r[1] - s[1], r[0] - s[0]));
                    }
                    this.data.p && this.data.p.s
                      ? this.data.p.z
                        ? this.v.translate(this.px.v, this.py.v, -this.pz.v)
                        : this.v.translate(this.px.v, this.py.v, 0)
                      : this.v.translate(
                          this.p.v[0],
                          this.p.v[1],
                          -this.p.v[2]
                        );
                  }
                  this.frameId = this.elem.globalData.frameId;
                }
              },
              precalculateMatrix: function () {
                if (!this.a.k) {
                  this.pre.translate(-this.a.v[0], -this.a.v[1], this.a.v[2]);
                  this.appliedTransformations = 1;
                  if (!this.s.effectsSequence.length) {
                    this.pre.scale(this.s.v[0], this.s.v[1], this.s.v[2]);
                    this.appliedTransformations = 2;
                    if (this.sk) {
                      if (
                        this.sk.effectsSequence.length ||
                        this.sa.effectsSequence.length
                      )
                        return;
                      this.pre.skewFromAxis(-this.sk.v, this.sa.v);
                      this.appliedTransformations = 3;
                    }
                    if (this.r) {
                      if (!this.r.effectsSequence.length) {
                        this.pre.rotate(-this.r.v);
                        this.appliedTransformations = 4;
                      }
                    } else if (
                      !(
                        this.rz.effectsSequence.length ||
                        this.ry.effectsSequence.length ||
                        this.rx.effectsSequence.length ||
                        this.or.effectsSequence.length
                      )
                    ) {
                      this.pre
                        .rotateZ(-this.rz.v)
                        .rotateY(this.ry.v)
                        .rotateX(this.rx.v)
                        .rotateZ(-this.or.v[2])
                        .rotateY(this.or.v[1])
                        .rotateX(this.or.v[0]);
                      this.appliedTransformations = 4;
                    }
                  }
                }
              },
              autoOrient: function () {},
            };
            extendPrototype([DynamicPropertyContainer], e);
            e.prototype.addDynamicProperty = function (t) {
              this._addDynamicProperty(t);
              this.elem.addDynamicProperty(t);
              this._isDirty = !0;
            };
            e.prototype._addDynamicProperty =
              DynamicPropertyContainer.prototype.addDynamicProperty;
            return {
              getTransformProperty: function (t, i, r) {
                return new e(t, i, r);
              },
            };
          })();
          function RepeaterModifier() {}
          extendPrototype([ShapeModifier], RepeaterModifier);
          RepeaterModifier.prototype.initModifierProperties = function (t, e) {
            this.getValue = this.processKeys;
            this.c = PropertyFactory.getProp(t, e.c, 0, null, this);
            this.o = PropertyFactory.getProp(t, e.o, 0, null, this);
            this.tr = TransformPropertyFactory.getTransformProperty(
              t,
              e.tr,
              this
            );
            this.so = PropertyFactory.getProp(t, e.tr.so, 0, 0.01, this);
            this.eo = PropertyFactory.getProp(t, e.tr.eo, 0, 0.01, this);
            this.data = e;
            this.dynamicProperties.length || this.getValue(!0);
            this._isAnimated = !!this.dynamicProperties.length;
            this.pMatrix = new Matrix();
            this.rMatrix = new Matrix();
            this.sMatrix = new Matrix();
            this.tMatrix = new Matrix();
            this.matrix = new Matrix();
          };
          RepeaterModifier.prototype.applyTransforms = function (
            t,
            e,
            i,
            r,
            s,
            a
          ) {
            var n = a ? -1 : 1,
              o = r.s.v[0] + (1 - r.s.v[0]) * (1 - s),
              h = r.s.v[1] + (1 - r.s.v[1]) * (1 - s);
            t.translate(r.p.v[0] * n * s, r.p.v[1] * n * s, r.p.v[2]);
            e.translate(-r.a.v[0], -r.a.v[1], r.a.v[2]);
            e.rotate(-r.r.v * n * s);
            e.translate(r.a.v[0], r.a.v[1], r.a.v[2]);
            i.translate(-r.a.v[0], -r.a.v[1], r.a.v[2]);
            i.scale(a ? 1 / o : o, a ? 1 / h : h);
            i.translate(r.a.v[0], r.a.v[1], r.a.v[2]);
          };
          RepeaterModifier.prototype.init = function (t, e, i, r) {
            this.elem = t;
            this.arr = e;
            this.pos = i;
            this.elemsData = r;
            this._currentCopies = 0;
            this._elements = [];
            this._groups = [];
            this.frameId = -1;
            this.initDynamicPropertyContainer(t);
            this.initModifierProperties(t, e[i]);
            for (; i > 0; ) {
              i -= 1;
              this._elements.unshift(e[i]);
            }
            this.dynamicProperties.length ? (this.k = !0) : this.getValue(!0);
          };
          RepeaterModifier.prototype.resetElements = function (t) {
            var e,
              i = t.length;
            for (e = 0; e < i; e += 1) {
              t[e]._processed = !1;
              "gr" === t[e].ty && this.resetElements(t[e].it);
            }
          };
          RepeaterModifier.prototype.cloneElements = function (t) {
            var e = JSON.parse(JSON.stringify(t));
            this.resetElements(e);
            return e;
          };
          RepeaterModifier.prototype.changeGroupRender = function (t, e) {
            var i,
              r = t.length;
            for (i = 0; i < r; i += 1) {
              t[i]._render = e;
              "gr" === t[i].ty && this.changeGroupRender(t[i].it, e);
            }
          };
          RepeaterModifier.prototype.processShapes = function (t) {
            var e,
              i,
              r,
              s,
              a,
              n = !1;
            if (this._mdf || t) {
              var o,
                h = Math.ceil(this.c.v);
              if (this._groups.length < h) {
                for (; this._groups.length < h; ) {
                  var l = { it: this.cloneElements(this._elements), ty: "gr" };
                  l.it.push({
                    a: { a: 0, ix: 1, k: [0, 0] },
                    nm: "Transform",
                    o: { a: 0, ix: 7, k: 100 },
                    p: { a: 0, ix: 2, k: [0, 0] },
                    r: {
                      a: 1,
                      ix: 6,
                      k: [
                        { s: 0, e: 0, t: 0 },
                        { s: 0, e: 0, t: 1 },
                      ],
                    },
                    s: { a: 0, ix: 3, k: [100, 100] },
                    sa: { a: 0, ix: 5, k: 0 },
                    sk: { a: 0, ix: 4, k: 0 },
                    ty: "tr",
                  });
                  this.arr.splice(0, 0, l);
                  this._groups.splice(0, 0, l);
                  this._currentCopies += 1;
                }
                this.elem.reloadShapes();
                n = !0;
              }
              a = 0;
              for (r = 0; r <= this._groups.length - 1; r += 1) {
                o = a < h;
                this._groups[r]._render = o;
                this.changeGroupRender(this._groups[r].it, o);
                if (!o) {
                  var p = this.elemsData[r].it,
                    f = p[p.length - 1];
                  if (0 !== f.transform.op.v) {
                    f.transform.op._mdf = !0;
                    f.transform.op.v = 0;
                  } else f.transform.op._mdf = !1;
                }
                a += 1;
              }
              this._currentCopies = h;
              var m = this.o.v,
                c = m % 1,
                d = m > 0 ? Math.floor(m) : Math.ceil(m),
                u = this.pMatrix.props,
                y = this.rMatrix.props,
                g = this.sMatrix.props;
              this.pMatrix.reset();
              this.rMatrix.reset();
              this.sMatrix.reset();
              this.tMatrix.reset();
              this.matrix.reset();
              var v,
                b,
                P = 0;
              if (m > 0) {
                for (; P < d; ) {
                  this.applyTransforms(
                    this.pMatrix,
                    this.rMatrix,
                    this.sMatrix,
                    this.tr,
                    1,
                    !1
                  );
                  P += 1;
                }
                if (c) {
                  this.applyTransforms(
                    this.pMatrix,
                    this.rMatrix,
                    this.sMatrix,
                    this.tr,
                    c,
                    !1
                  );
                  P += c;
                }
              } else if (m < 0) {
                for (; P > d; ) {
                  this.applyTransforms(
                    this.pMatrix,
                    this.rMatrix,
                    this.sMatrix,
                    this.tr,
                    1,
                    !0
                  );
                  P -= 1;
                }
                if (c) {
                  this.applyTransforms(
                    this.pMatrix,
                    this.rMatrix,
                    this.sMatrix,
                    this.tr,
                    -c,
                    !0
                  );
                  P -= c;
                }
              }
              r = 1 === this.data.m ? 0 : this._currentCopies - 1;
              s = 1 === this.data.m ? 1 : -1;
              a = this._currentCopies;
              for (; a; ) {
                b = (i = (e = this.elemsData[r].it)[e.length - 1].transform
                  .mProps.v.props).length;
                e[e.length - 1].transform.mProps._mdf = !0;
                e[e.length - 1].transform.op._mdf = !0;
                e[e.length - 1].transform.op.v =
                  1 === this._currentCopies
                    ? this.so.v
                    : this.so.v +
                      (this.eo.v - this.so.v) * (r / (this._currentCopies - 1));
                if (0 !== P) {
                  ((0 !== r && 1 === s) ||
                    (r !== this._currentCopies - 1 && -1 === s)) &&
                    this.applyTransforms(
                      this.pMatrix,
                      this.rMatrix,
                      this.sMatrix,
                      this.tr,
                      1,
                      !1
                    );
                  this.matrix.transform(
                    y[0],
                    y[1],
                    y[2],
                    y[3],
                    y[4],
                    y[5],
                    y[6],
                    y[7],
                    y[8],
                    y[9],
                    y[10],
                    y[11],
                    y[12],
                    y[13],
                    y[14],
                    y[15]
                  );
                  this.matrix.transform(
                    g[0],
                    g[1],
                    g[2],
                    g[3],
                    g[4],
                    g[5],
                    g[6],
                    g[7],
                    g[8],
                    g[9],
                    g[10],
                    g[11],
                    g[12],
                    g[13],
                    g[14],
                    g[15]
                  );
                  this.matrix.transform(
                    u[0],
                    u[1],
                    u[2],
                    u[3],
                    u[4],
                    u[5],
                    u[6],
                    u[7],
                    u[8],
                    u[9],
                    u[10],
                    u[11],
                    u[12],
                    u[13],
                    u[14],
                    u[15]
                  );
                  for (v = 0; v < b; v += 1) i[v] = this.matrix.props[v];
                  this.matrix.reset();
                } else {
                  this.matrix.reset();
                  for (v = 0; v < b; v += 1) i[v] = this.matrix.props[v];
                }
                P += 1;
                a -= 1;
                r += s;
              }
            } else {
              a = this._currentCopies;
              r = 0;
              s = 1;
              for (; a; ) {
                i = (e = this.elemsData[r].it)[e.length - 1].transform.mProps.v
                  .props;
                e[e.length - 1].transform.mProps._mdf = !1;
                e[e.length - 1].transform.op._mdf = !1;
                a -= 1;
                r += s;
              }
            }
            return n;
          };
          RepeaterModifier.prototype.addShape = function () {};
          function RoundCornersModifier() {}
          extendPrototype([ShapeModifier], RoundCornersModifier);
          RoundCornersModifier.prototype.initModifierProperties = function (
            t,
            e
          ) {
            this.getValue = this.processKeys;
            this.rd = PropertyFactory.getProp(t, e.r, 0, null, this);
            this._isAnimated = !!this.rd.effectsSequence.length;
          };
          RoundCornersModifier.prototype.processPath = function (t, e) {
            var i,
              r = shapePool.newElement();
            r.c = t.c;
            var s,
              a,
              n,
              o,
              h,
              l,
              p,
              f,
              m,
              c,
              d,
              u,
              y = t._length,
              g = 0;
            for (i = 0; i < y; i += 1) {
              s = t.v[i];
              n = t.o[i];
              a = t.i[i];
              if (
                s[0] === n[0] &&
                s[1] === n[1] &&
                s[0] === a[0] &&
                s[1] === a[1]
              )
                if ((0 !== i && i !== y - 1) || t.c) {
                  o = 0 === i ? t.v[y - 1] : t.v[i - 1];
                  l = (h = Math.sqrt(
                    Math.pow(s[0] - o[0], 2) + Math.pow(s[1] - o[1], 2)
                  ))
                    ? Math.min(h / 2, e) / h
                    : 0;
                  p = d = s[0] + (o[0] - s[0]) * l;
                  f = u = s[1] - (s[1] - o[1]) * l;
                  m = p - (p - s[0]) * roundCorner;
                  c = f - (f - s[1]) * roundCorner;
                  r.setTripleAt(p, f, m, c, d, u, g);
                  g += 1;
                  o = i === y - 1 ? t.v[0] : t.v[i + 1];
                  l = (h = Math.sqrt(
                    Math.pow(s[0] - o[0], 2) + Math.pow(s[1] - o[1], 2)
                  ))
                    ? Math.min(h / 2, e) / h
                    : 0;
                  p = m = s[0] + (o[0] - s[0]) * l;
                  f = c = s[1] + (o[1] - s[1]) * l;
                  d = p - (p - s[0]) * roundCorner;
                  u = f - (f - s[1]) * roundCorner;
                  r.setTripleAt(p, f, m, c, d, u, g);
                  g += 1;
                } else {
                  r.setTripleAt(s[0], s[1], n[0], n[1], a[0], a[1], g);
                  g += 1;
                }
              else {
                r.setTripleAt(
                  t.v[i][0],
                  t.v[i][1],
                  t.o[i][0],
                  t.o[i][1],
                  t.i[i][0],
                  t.i[i][1],
                  g
                );
                g += 1;
              }
            }
            return r;
          };
          RoundCornersModifier.prototype.processShapes = function (t) {
            var e,
              i,
              r,
              s,
              a = this.shapes.length,
              n = this.rd.v;
            if (0 !== n) {
              var o, h;
              for (i = 0; i < a; i += 1) {
                h = (o = this.shapes[i]).localShapeCollection;
                if (o.shape._mdf || this._mdf || t) {
                  h.releaseShapes();
                  o.shape._mdf = !0;
                  e = o.shape.paths.shapes;
                  s = o.shape.paths._length;
                  for (r = 0; r < s; r += 1)
                    h.addShape(this.processPath(e[r], n));
                }
                o.shape.paths = o.localShapeCollection;
              }
            }
            this.dynamicProperties.length || (this._mdf = !1);
          };
          function getFontProperties(t) {
            for (
              var e = t.fStyle ? t.fStyle.split(" ") : [],
                i = "normal",
                r = "normal",
                s = e.length,
                a = 0;
              a < s;
              a += 1
            )
              switch (e[a].toLowerCase()) {
                case "italic":
                  r = "italic";
                  break;
                case "bold":
                  i = "700";
                  break;
                case "black":
                  i = "900";
                  break;
                case "medium":
                  i = "500";
                  break;
                case "regular":
                case "normal":
                  i = "400";
                  break;
                case "light":
                case "thin":
                  i = "200";
              }
            return { style: r, weight: t.fWeight || i };
          }
          var FontManager = (function () {
            var t = { w: 0, size: 0, shapes: [], data: { shapes: [] } },
              e = [];
            e = e.concat([
              2304, 2305, 2306, 2307, 2362, 2363, 2364, 2364, 2366, 2367, 2368,
              2369, 2370, 2371, 2372, 2373, 2374, 2375, 2376, 2377, 2378, 2379,
              2380, 2381, 2382, 2383, 2387, 2388, 2389, 2390, 2391, 2402, 2403,
            ]);
            var i = [
                "d83cdffb",
                "d83cdffc",
                "d83cdffd",
                "d83cdffe",
                "d83cdfff",
              ],
              r = [65039, 8205];
            function s(t, e) {
              var i = createTag("span");
              i.setAttribute("aria-hidden", !0);
              i.style.fontFamily = e;
              var r = createTag("span");
              r.innerText = "giItT1WQy@!-/#";
              i.style.position = "absolute";
              i.style.left = "-10000px";
              i.style.top = "-10000px";
              i.style.fontSize = "300px";
              i.style.fontVariant = "normal";
              i.style.fontStyle = "normal";
              i.style.fontWeight = "normal";
              i.style.letterSpacing = "0";
              i.appendChild(r);
              document.body.appendChild(i);
              var s = r.offsetWidth;
              r.style.fontFamily =
                (function (t) {
                  var e,
                    i = t.split(","),
                    r = i.length,
                    s = [];
                  for (e = 0; e < r; e += 1)
                    "sans-serif" !== i[e] &&
                      "monospace" !== i[e] &&
                      s.push(i[e]);
                  return s.join(",");
                })(t) +
                ", " +
                e;
              return { node: r, w: s, parent: i };
            }
            function a(t, e) {
              var i,
                r = document.body && e ? "svg" : "canvas",
                s = getFontProperties(t);
              if ("svg" === r) {
                var a = createNS("text");
                a.style.fontSize = "100px";
                a.setAttribute("font-family", t.fFamily);
                a.setAttribute("font-style", s.style);
                a.setAttribute("font-weight", s.weight);
                a.textContent = "1";
                if (t.fClass) {
                  a.style.fontFamily = "inherit";
                  a.setAttribute("class", t.fClass);
                } else a.style.fontFamily = t.fFamily;
                e.appendChild(a);
                i = a;
              } else {
                var n = new OffscreenCanvas(500, 500).getContext("2d");
                n.font = s.style + " " + s.weight + " 100px " + t.fFamily;
                i = n;
              }
              return {
                measureText: function (t) {
                  if ("svg" === r) {
                    i.textContent = t;
                    return i.getComputedTextLength();
                  }
                  return i.measureText(t).width;
                },
              };
            }
            var n = function () {
              this.fonts = [];
              this.chars = null;
              this.typekitLoaded = 0;
              this.isLoaded = !1;
              this._warned = !1;
              this.initTime = Date.now();
              this.setIsLoadedBinded = this.setIsLoaded.bind(this);
              this.checkLoadedFontsBinded = this.checkLoadedFonts.bind(this);
            };
            n.isModifier = function (t, e) {
              var r = t.toString(16) + e.toString(16);
              return -1 !== i.indexOf(r);
            };
            n.isZeroWidthJoiner = function (t, e) {
              return e ? t === r[0] && e === r[1] : t === r[1];
            };
            n.isCombinedCharacter = function (t) {
              return -1 !== e.indexOf(t);
            };
            var o = {
              addChars: function (t) {
                if (t) {
                  this.chars || (this.chars = []);
                  var e,
                    i,
                    r,
                    s = t.length,
                    a = this.chars.length;
                  for (e = 0; e < s; e += 1) {
                    i = 0;
                    r = !1;
                    for (; i < a; ) {
                      this.chars[i].style === t[e].style &&
                        this.chars[i].fFamily === t[e].fFamily &&
                        this.chars[i].ch === t[e].ch &&
                        (r = !0);
                      i += 1;
                    }
                    if (!r) {
                      this.chars.push(t[e]);
                      a += 1;
                    }
                  }
                }
              },
              addFonts: function (t, e) {
                if (t)
                  if (this.chars) {
                    this.isLoaded = !0;
                    this.fonts = t.list;
                  } else if (document.body) {
                    var i,
                      r = t.list,
                      n = r.length,
                      o = n;
                    for (i = 0; i < n; i += 1) {
                      var h,
                        l,
                        p = !0;
                      r[i].loaded = !1;
                      r[i].monoCase = s(r[i].fFamily, "monospace");
                      r[i].sansCase = s(r[i].fFamily, "sans-serif");
                      if (r[i].fPath) {
                        if ("p" === r[i].fOrigin || 3 === r[i].origin) {
                          (h = document.querySelectorAll(
                            'style[f-forigin="p"][f-family="' +
                              r[i].fFamily +
                              '"], style[f-origin="3"][f-family="' +
                              r[i].fFamily +
                              '"]'
                          )).length > 0 && (p = !1);
                          if (p) {
                            var f = createTag("style");
                            f.setAttribute("f-forigin", r[i].fOrigin);
                            f.setAttribute("f-origin", r[i].origin);
                            f.setAttribute("f-family", r[i].fFamily);
                            f.type = "text/css";
                            f.innerText =
                              "@font-face {font-family: " +
                              r[i].fFamily +
                              "; font-style: normal; src: url('" +
                              r[i].fPath +
                              "');}";
                            e.appendChild(f);
                          }
                        } else if ("g" === r[i].fOrigin || 1 === r[i].origin) {
                          h = document.querySelectorAll(
                            'link[f-forigin="g"], link[f-origin="1"]'
                          );
                          for (l = 0; l < h.length; l += 1)
                            -1 !== h[l].href.indexOf(r[i].fPath) && (p = !1);
                          if (p) {
                            var m = createTag("link");
                            m.setAttribute("f-forigin", r[i].fOrigin);
                            m.setAttribute("f-origin", r[i].origin);
                            m.type = "text/css";
                            m.rel = "stylesheet";
                            m.href = r[i].fPath;
                            document.body.appendChild(m);
                          }
                        } else if ("t" === r[i].fOrigin || 2 === r[i].origin) {
                          h = document.querySelectorAll(
                            'script[f-forigin="t"], script[f-origin="2"]'
                          );
                          for (l = 0; l < h.length; l += 1)
                            r[i].fPath === h[l].src && (p = !1);
                          if (p) {
                            var c = createTag("link");
                            c.setAttribute("f-forigin", r[i].fOrigin);
                            c.setAttribute("f-origin", r[i].origin);
                            c.setAttribute("rel", "stylesheet");
                            c.setAttribute("href", r[i].fPath);
                            e.appendChild(c);
                          }
                        }
                      } else {
                        r[i].loaded = !0;
                        o -= 1;
                      }
                      r[i].helper = a(r[i], e);
                      r[i].cache = {};
                      this.fonts.push(r[i]);
                    }
                    0 === o
                      ? (this.isLoaded = !0)
                      : setTimeout(this.checkLoadedFonts.bind(this), 100);
                  } else {
                    this.isLoaded = !0;
                    t.list.forEach(function (t) {
                      t.helper = a(t);
                      t.cache = {};
                    });
                    this.fonts = t.list;
                  }
                else this.isLoaded = !0;
              },
              getCharData: function (e, i, r) {
                for (var s = 0, a = this.chars.length; s < a; ) {
                  if (
                    this.chars[s].ch === e &&
                    this.chars[s].style === i &&
                    this.chars[s].fFamily === r
                  )
                    return this.chars[s];
                  s += 1;
                }
                if (
                  (("string" == typeof e && 13 !== e.charCodeAt(0)) || !e) &&
                  console &&
                  console.warn &&
                  !this._warned
                ) {
                  this._warned = !0;
                  console.warn(
                    "Missing character from exported characters list: ",
                    e,
                    i,
                    r
                  );
                }
                return t;
              },
              getFontByName: function (t) {
                for (var e = 0, i = this.fonts.length; e < i; ) {
                  if (this.fonts[e].fName === t) return this.fonts[e];
                  e += 1;
                }
                return this.fonts[0];
              },
              measureText: function (t, e, i) {
                var r = this.getFontByName(e),
                  s = t.charCodeAt(0);
                if (!r.cache[s + 1]) {
                  var a = r.helper;
                  if (" " === t) {
                    var n = a.measureText("|" + t + "|"),
                      o = a.measureText("||");
                    r.cache[s + 1] = (n - o) / 100;
                  } else r.cache[s + 1] = a.measureText(t) / 100;
                }
                return r.cache[s + 1] * i;
              },
              checkLoadedFonts: function () {
                var t,
                  e,
                  i,
                  r = this.fonts.length,
                  s = r;
                for (t = 0; t < r; t += 1)
                  if (this.fonts[t].loaded) s -= 1;
                  else if (
                    "n" === this.fonts[t].fOrigin ||
                    0 === this.fonts[t].origin
                  )
                    this.fonts[t].loaded = !0;
                  else {
                    e = this.fonts[t].monoCase.node;
                    i = this.fonts[t].monoCase.w;
                    if (e.offsetWidth !== i) {
                      s -= 1;
                      this.fonts[t].loaded = !0;
                    } else {
                      e = this.fonts[t].sansCase.node;
                      i = this.fonts[t].sansCase.w;
                      if (e.offsetWidth !== i) {
                        s -= 1;
                        this.fonts[t].loaded = !0;
                      }
                    }
                    if (this.fonts[t].loaded) {
                      this.fonts[t].sansCase.parent.parentNode.removeChild(
                        this.fonts[t].sansCase.parent
                      );
                      this.fonts[t].monoCase.parent.parentNode.removeChild(
                        this.fonts[t].monoCase.parent
                      );
                    }
                  }
                0 !== s && Date.now() - this.initTime < 5e3
                  ? setTimeout(this.checkLoadedFontsBinded, 20)
                  : setTimeout(this.setIsLoadedBinded, 10);
              },
              setIsLoaded: function () {
                this.isLoaded = !0;
              },
            };
            n.prototype = o;
            return n;
          })();
          function RenderableElement() {}
          RenderableElement.prototype = {
            initRenderable: function () {
              this.isInRange = !1;
              this.hidden = !1;
              this.isTransparent = !1;
              this.renderableComponents = [];
            },
            addRenderableComponent: function (t) {
              -1 === this.renderableComponents.indexOf(t) &&
                this.renderableComponents.push(t);
            },
            removeRenderableComponent: function (t) {
              -1 !== this.renderableComponents.indexOf(t) &&
                this.renderableComponents.splice(
                  this.renderableComponents.indexOf(t),
                  1
                );
            },
            prepareRenderableFrame: function (t) {
              this.checkLayerLimits(t);
            },
            checkTransparency: function () {
              if (this.finalTransform.mProp.o.v <= 0) {
                if (
                  !this.isTransparent &&
                  this.globalData.renderConfig.hideOnTransparent
                ) {
                  this.isTransparent = !0;
                  this.hide();
                }
              } else if (this.isTransparent) {
                this.isTransparent = !1;
                this.show();
              }
            },
            checkLayerLimits: function (t) {
              if (
                this.data.ip - this.data.st <= t &&
                this.data.op - this.data.st > t
              ) {
                if (!0 !== this.isInRange) {
                  this.globalData._mdf = !0;
                  this._mdf = !0;
                  this.isInRange = !0;
                  this.show();
                }
              } else if (!1 !== this.isInRange) {
                this.globalData._mdf = !0;
                this.isInRange = !1;
                this.hide();
              }
            },
            renderRenderable: function () {
              var t,
                e = this.renderableComponents.length;
              for (t = 0; t < e; t += 1)
                this.renderableComponents[t].renderFrame(this._isFirstFrame);
            },
            sourceRectAtTime: function () {
              return { top: 0, left: 0, width: 100, height: 100 };
            },
            getLayerSize: function () {
              return 5 === this.data.ty
                ? { w: this.data.textData.width, h: this.data.textData.height }
                : { w: this.data.width, h: this.data.height };
            },
          };
          var MaskManagerInterface = (function () {
              function t(t, e) {
                this._mask = t;
                this._data = e;
              }
              Object.defineProperty(t.prototype, "maskPath", {
                get: function () {
                  this._mask.prop.k && this._mask.prop.getValue();
                  return this._mask.prop;
                },
              });
              Object.defineProperty(t.prototype, "maskOpacity", {
                get: function () {
                  this._mask.op.k && this._mask.op.getValue();
                  return 100 * this._mask.op.v;
                },
              });
              return function (e) {
                var i,
                  r = createSizedArray(e.viewData.length),
                  s = e.viewData.length;
                for (i = 0; i < s; i += 1)
                  r[i] = new t(e.viewData[i], e.masksProperties[i]);
                return function (t) {
                  i = 0;
                  for (; i < s; ) {
                    if (e.masksProperties[i].nm === t) return r[i];
                    i += 1;
                  }
                  return null;
                };
              };
            })(),
            ExpressionPropertyInterface = (function () {
              var t = { pv: 0, v: 0, mult: 1 },
                e = { pv: [0, 0, 0], v: [0, 0, 0], mult: 1 };
              function i(t, e, i) {
                Object.defineProperty(t, "velocity", {
                  get: function () {
                    return e.getVelocityAtTime(e.comp.currentFrame);
                  },
                });
                t.numKeys = e.keyframes ? e.keyframes.length : 0;
                t.key = function (r) {
                  if (!t.numKeys) return 0;
                  var s = "";
                  s =
                    "s" in e.keyframes[r - 1]
                      ? e.keyframes[r - 1].s
                      : "e" in e.keyframes[r - 2]
                      ? e.keyframes[r - 2].e
                      : e.keyframes[r - 2].s;
                  var a =
                    "unidimensional" === i
                      ? new Number(s)
                      : Object.assign({}, s);
                  a.time =
                    e.keyframes[r - 1].t / e.elem.comp.globalData.frameRate;
                  a.value = "unidimensional" === i ? s[0] : s;
                  return a;
                };
                t.valueAtTime = e.getValueAtTime;
                t.speedAtTime = e.getSpeedAtTime;
                t.velocityAtTime = e.getVelocityAtTime;
                t.propertyGroup = e.propertyGroup;
              }
              function r() {
                return t;
              }
              return function (s) {
                return s
                  ? "unidimensional" === s.propType
                    ? (function (e) {
                        (e && "pv" in e) || (e = t);
                        var r = 1 / e.mult,
                          s = e.pv * r,
                          a = new Number(s);
                        a.value = s;
                        i(a, e, "unidimensional");
                        return function () {
                          e.k && e.getValue();
                          s = e.v * r;
                          if (a.value !== s) {
                            (a = new Number(s)).value = s;
                            i(a, e, "unidimensional");
                          }
                          return a;
                        };
                      })(s)
                    : (function (t) {
                        (t && "pv" in t) || (t = e);
                        var r = 1 / t.mult,
                          s = (t.data && t.data.l) || t.pv.length,
                          a = createTypedArray("float32", s),
                          n = createTypedArray("float32", s);
                        a.value = n;
                        i(a, t, "multidimensional");
                        return function () {
                          t.k && t.getValue();
                          for (var e = 0; e < s; e += 1) {
                            n[e] = t.v[e] * r;
                            a[e] = n[e];
                          }
                          return a;
                        };
                      })(s)
                  : r;
              };
            })(),
            TransformExpressionInterface = function (t) {
              function e(t) {
                switch (t) {
                  case "scale":
                  case "Scale":
                  case "ADBE Scale":
                  case 6:
                    return e.scale;
                  case "rotation":
                  case "Rotation":
                  case "ADBE Rotation":
                  case "ADBE Rotate Z":
                  case 10:
                    return e.rotation;
                  case "ADBE Rotate X":
                    return e.xRotation;
                  case "ADBE Rotate Y":
                    return e.yRotation;
                  case "position":
                  case "Position":
                  case "ADBE Position":
                  case 2:
                    return e.position;
                  case "ADBE Position_0":
                    return e.xPosition;
                  case "ADBE Position_1":
                    return e.yPosition;
                  case "ADBE Position_2":
                    return e.zPosition;
                  case "anchorPoint":
                  case "AnchorPoint":
                  case "Anchor Point":
                  case "ADBE AnchorPoint":
                  case 1:
                    return e.anchorPoint;
                  case "opacity":
                  case "Opacity":
                  case 11:
                    return e.opacity;
                  default:
                    return null;
                }
              }
              Object.defineProperty(e, "rotation", {
                get: ExpressionPropertyInterface(t.r || t.rz),
              });
              Object.defineProperty(e, "zRotation", {
                get: ExpressionPropertyInterface(t.rz || t.r),
              });
              Object.defineProperty(e, "xRotation", {
                get: ExpressionPropertyInterface(t.rx),
              });
              Object.defineProperty(e, "yRotation", {
                get: ExpressionPropertyInterface(t.ry),
              });
              Object.defineProperty(e, "scale", {
                get: ExpressionPropertyInterface(t.s),
              });
              var i, r, s, a;
              if (t.p) a = ExpressionPropertyInterface(t.p);
              else {
                i = ExpressionPropertyInterface(t.px);
                r = ExpressionPropertyInterface(t.py);
                t.pz && (s = ExpressionPropertyInterface(t.pz));
              }
              Object.defineProperty(e, "position", {
                get: function () {
                  return t.p ? a() : [i(), r(), s ? s() : 0];
                },
              });
              Object.defineProperty(e, "xPosition", {
                get: ExpressionPropertyInterface(t.px),
              });
              Object.defineProperty(e, "yPosition", {
                get: ExpressionPropertyInterface(t.py),
              });
              Object.defineProperty(e, "zPosition", {
                get: ExpressionPropertyInterface(t.pz),
              });
              Object.defineProperty(e, "anchorPoint", {
                get: ExpressionPropertyInterface(t.a),
              });
              Object.defineProperty(e, "opacity", {
                get: ExpressionPropertyInterface(t.o),
              });
              Object.defineProperty(e, "skew", {
                get: ExpressionPropertyInterface(t.sk),
              });
              Object.defineProperty(e, "skewAxis", {
                get: ExpressionPropertyInterface(t.sa),
              });
              Object.defineProperty(e, "orientation", {
                get: ExpressionPropertyInterface(t.or),
              });
              return e;
            },
            LayerExpressionInterface = (function () {
              function t(t) {
                var e = new Matrix();
                void 0 !== t
                  ? this._elem.finalTransform.mProp.getValueAtTime(t).clone(e)
                  : this._elem.finalTransform.mProp.applyToMatrix(e);
                return e;
              }
              function e(t, e) {
                var i = this.getMatrix(e);
                i.props[12] = 0;
                i.props[13] = 0;
                i.props[14] = 0;
                return this.applyPoint(i, t);
              }
              function i(t, e) {
                var i = this.getMatrix(e);
                return this.applyPoint(i, t);
              }
              function r(t, e) {
                var i = this.getMatrix(e);
                i.props[12] = 0;
                i.props[13] = 0;
                i.props[14] = 0;
                return this.invertPoint(i, t);
              }
              function s(t, e) {
                var i = this.getMatrix(e);
                return this.invertPoint(i, t);
              }
              function a(t, e) {
                if (this._elem.hierarchy && this._elem.hierarchy.length) {
                  var i,
                    r = this._elem.hierarchy.length;
                  for (i = 0; i < r; i += 1)
                    this._elem.hierarchy[i].finalTransform.mProp.applyToMatrix(
                      t
                    );
                }
                return t.applyToPointArray(e[0], e[1], e[2] || 0);
              }
              function n(t, e) {
                if (this._elem.hierarchy && this._elem.hierarchy.length) {
                  var i,
                    r = this._elem.hierarchy.length;
                  for (i = 0; i < r; i += 1)
                    this._elem.hierarchy[i].finalTransform.mProp.applyToMatrix(
                      t
                    );
                }
                return t.inversePoint(e);
              }
              function o(t) {
                var e = new Matrix();
                e.reset();
                this._elem.finalTransform.mProp.applyToMatrix(e);
                if (this._elem.hierarchy && this._elem.hierarchy.length) {
                  var i,
                    r = this._elem.hierarchy.length;
                  for (i = 0; i < r; i += 1)
                    this._elem.hierarchy[i].finalTransform.mProp.applyToMatrix(
                      e
                    );
                  return e.inversePoint(t);
                }
                return e.inversePoint(t);
              }
              function h() {
                return [1, 1, 1, 1];
              }
              return function (l) {
                var p;
                function f(t) {
                  switch (t) {
                    case "ADBE Root Vectors Group":
                    case "Contents":
                    case 2:
                      return f.shapeInterface;
                    case 1:
                    case 6:
                    case "Transform":
                    case "transform":
                    case "ADBE Transform Group":
                      return p;
                    case 4:
                    case "ADBE Effect Parade":
                    case "effects":
                    case "Effects":
                      return f.effect;
                    case "ADBE Text Properties":
                      return f.textInterface;
                    default:
                      return null;
                  }
                }
                f.getMatrix = t;
                f.invertPoint = n;
                f.applyPoint = a;
                f.toWorld = i;
                f.toWorldVec = e;
                f.fromWorld = s;
                f.fromWorldVec = r;
                f.toComp = i;
                f.fromComp = o;
                f.sampleImage = h;
                f.sourceRectAtTime = l.sourceRectAtTime.bind(l);
                f._elem = l;
                var m = getDescriptor(
                  (p = TransformExpressionInterface(l.finalTransform.mProp)),
                  "anchorPoint"
                );
                Object.defineProperties(f, {
                  hasParent: {
                    get: function () {
                      return l.hierarchy.length;
                    },
                  },
                  parent: {
                    get: function () {
                      return l.hierarchy[0].layerInterface;
                    },
                  },
                  rotation: getDescriptor(p, "rotation"),
                  scale: getDescriptor(p, "scale"),
                  position: getDescriptor(p, "position"),
                  opacity: getDescriptor(p, "opacity"),
                  anchorPoint: m,
                  anchor_point: m,
                  transform: {
                    get: function () {
                      return p;
                    },
                  },
                  active: {
                    get: function () {
                      return l.isInRange;
                    },
                  },
                });
                f.startTime = l.data.st;
                f.index = l.data.ind;
                f.source = l.data.refId;
                f.height = 0 === l.data.ty ? l.data.h : 100;
                f.width = 0 === l.data.ty ? l.data.w : 100;
                f.inPoint = l.data.ip / l.comp.globalData.frameRate;
                f.outPoint = l.data.op / l.comp.globalData.frameRate;
                f._name = l.data.nm;
                f.registerMaskInterface = function (t) {
                  f.mask = new MaskManagerInterface(t, l);
                };
                f.registerEffectsInterface = function (t) {
                  f.effect = t;
                };
                return f;
              };
            })(),
            propertyGroupFactory = function (t, e) {
              return function (i) {
                return (i = void 0 === i ? 1 : i) <= 0 ? t : e(i - 1);
              };
            },
            PropertyInterface = function (t, e) {
              var i = { _name: t };
              return function (t) {
                return (t = void 0 === t ? 1 : t) <= 0 ? i : e(t - 1);
              };
            },
            EffectsExpressionInterface = (function () {
              function t(i, r, s, a) {
                function n(t) {
                  for (var e = i.ef, r = 0, s = e.length; r < s; ) {
                    if (t === e[r].nm || t === e[r].mn || t === e[r].ix)
                      return 5 === e[r].ty ? l[r] : l[r]();
                    r += 1;
                  }
                  throw new Error();
                }
                var o,
                  h = propertyGroupFactory(n, s),
                  l = [],
                  p = i.ef.length;
                for (o = 0; o < p; o += 1)
                  5 === i.ef[o].ty
                    ? l.push(
                        t(
                          i.ef[o],
                          r.effectElements[o],
                          r.effectElements[o].propertyGroup,
                          a
                        )
                      )
                    : l.push(e(r.effectElements[o], i.ef[o].ty, a, h));
                "ADBE Color Control" === i.mn &&
                  Object.defineProperty(n, "color", {
                    get: function () {
                      return l[0]();
                    },
                  });
                Object.defineProperties(n, {
                  numProperties: {
                    get: function () {
                      return i.np;
                    },
                  },
                  _name: { value: i.nm },
                  propertyGroup: { value: h },
                });
                n.enabled = 0 !== i.en;
                n.active = n.enabled;
                return n;
              }
              function e(t, e, i, r) {
                var s = ExpressionPropertyInterface(t.p);
                t.p.setGroupProperty &&
                  t.p.setGroupProperty(PropertyInterface("", r));
                return function () {
                  return 10 === e ? i.comp.compInterface(t.p.v) : s();
                };
              }
              return {
                createEffectsInterface: function (e, i) {
                  if (e.effectsManager) {
                    var r,
                      s = [],
                      a = e.data.ef,
                      n = e.effectsManager.effectElements.length;
                    for (r = 0; r < n; r += 1)
                      s.push(t(a[r], e.effectsManager.effectElements[r], i, e));
                    var o = e.data.ef || [],
                      h = function (t) {
                        r = 0;
                        n = o.length;
                        for (; r < n; ) {
                          if (t === o[r].nm || t === o[r].mn || t === o[r].ix)
                            return s[r];
                          r += 1;
                        }
                        return null;
                      };
                    Object.defineProperty(h, "numProperties", {
                      get: function () {
                        return o.length;
                      },
                    });
                    return h;
                  }
                  return null;
                },
              };
            })(),
            CompExpressionInterface = function (t) {
              function e(e) {
                for (var i = 0, r = t.layers.length; i < r; ) {
                  if (t.layers[i].nm === e || t.layers[i].ind === e)
                    return t.elements[i].layerInterface;
                  i += 1;
                }
                return null;
              }
              Object.defineProperty(e, "_name", { value: t.data.nm });
              e.layer = e;
              e.pixelAspect = 1;
              e.height = t.data.h || t.globalData.compSize.h;
              e.width = t.data.w || t.globalData.compSize.w;
              e.pixelAspect = 1;
              e.frameDuration = 1 / t.globalData.frameRate;
              e.displayStartTime = 0;
              e.numLayers = t.layers.length;
              return e;
            },
            ShapePathInterface = function (t, e, i) {
              var r = e.sh;
              function s(t) {
                return "Shape" === t ||
                  "shape" === t ||
                  "Path" === t ||
                  "path" === t ||
                  "ADBE Vector Shape" === t ||
                  2 === t
                  ? s.path
                  : null;
              }
              var a = propertyGroupFactory(s, i);
              r.setGroupProperty(PropertyInterface("Path", a));
              Object.defineProperties(s, {
                path: {
                  get: function () {
                    r.k && r.getValue();
                    return r;
                  },
                },
                shape: {
                  get: function () {
                    r.k && r.getValue();
                    return r;
                  },
                },
                _name: { value: t.nm },
                ix: { value: t.ix },
                propertyIndex: { value: t.ix },
                mn: { value: t.mn },
                propertyGroup: { value: i },
              });
              return s;
            },
            ShapeExpressionInterface = (function () {
              function t(t, n, m) {
                var c,
                  d = [],
                  u = t ? t.length : 0;
                for (c = 0; c < u; c += 1)
                  "gr" === t[c].ty
                    ? d.push(e(t[c], n[c], m))
                    : "fl" === t[c].ty
                    ? d.push(i(t[c], n[c], m))
                    : "st" === t[c].ty
                    ? d.push(s(t[c], n[c], m))
                    : "tm" === t[c].ty
                    ? d.push(a(t[c], n[c], m))
                    : "tr" === t[c].ty ||
                      ("el" === t[c].ty
                        ? d.push(o(t[c], n[c], m))
                        : "sr" === t[c].ty
                        ? d.push(h(t[c], n[c], m))
                        : "sh" === t[c].ty
                        ? d.push(ShapePathInterface(t[c], n[c], m))
                        : "rc" === t[c].ty
                        ? d.push(l(t[c], n[c], m))
                        : "rd" === t[c].ty
                        ? d.push(p(t[c], n[c], m))
                        : "rp" === t[c].ty
                        ? d.push(f(t[c], n[c], m))
                        : "gf" === t[c].ty
                        ? d.push(r(t[c], n[c], m))
                        : d.push(
                            (t[c],
                            n[c],
                            function () {
                              return null;
                            })
                          ));
                return d;
              }
              function e(e, i, r) {
                var s = function (t) {
                  switch (t) {
                    case "ADBE Vectors Group":
                    case "Contents":
                    case 2:
                      return s.content;
                    default:
                      return s.transform;
                  }
                };
                s.propertyGroup = propertyGroupFactory(s, r);
                var a = (function (e, i, r) {
                    var s,
                      a = function (t) {
                        for (var e = 0, i = s.length; e < i; ) {
                          if (
                            s[e]._name === t ||
                            s[e].mn === t ||
                            s[e].propertyIndex === t ||
                            s[e].ix === t ||
                            s[e].ind === t
                          )
                            return s[e];
                          e += 1;
                        }
                        return "number" == typeof t ? s[t - 1] : null;
                      };
                    a.propertyGroup = propertyGroupFactory(a, r);
                    s = t(e.it, i.it, a.propertyGroup);
                    a.numProperties = s.length;
                    var o = n(
                      e.it[e.it.length - 1],
                      i.it[i.it.length - 1],
                      a.propertyGroup
                    );
                    a.transform = o;
                    a.propertyIndex = e.cix;
                    a._name = e.nm;
                    return a;
                  })(e, i, s.propertyGroup),
                  o = n(
                    e.it[e.it.length - 1],
                    i.it[i.it.length - 1],
                    s.propertyGroup
                  );
                s.content = a;
                s.transform = o;
                Object.defineProperty(s, "_name", {
                  get: function () {
                    return e.nm;
                  },
                });
                s.numProperties = e.np;
                s.propertyIndex = e.ix;
                s.nm = e.nm;
                s.mn = e.mn;
                return s;
              }
              function i(t, e, i) {
                function r(t) {
                  return "Color" === t || "color" === t
                    ? r.color
                    : "Opacity" === t || "opacity" === t
                    ? r.opacity
                    : null;
                }
                Object.defineProperties(r, {
                  color: { get: ExpressionPropertyInterface(e.c) },
                  opacity: { get: ExpressionPropertyInterface(e.o) },
                  _name: { value: t.nm },
                  mn: { value: t.mn },
                });
                e.c.setGroupProperty(PropertyInterface("Color", i));
                e.o.setGroupProperty(PropertyInterface("Opacity", i));
                return r;
              }
              function r(t, e, i) {
                function r(t) {
                  return "Start Point" === t || "start point" === t
                    ? r.startPoint
                    : "End Point" === t || "end point" === t
                    ? r.endPoint
                    : "Opacity" === t || "opacity" === t
                    ? r.opacity
                    : null;
                }
                Object.defineProperties(r, {
                  startPoint: { get: ExpressionPropertyInterface(e.s) },
                  endPoint: { get: ExpressionPropertyInterface(e.e) },
                  opacity: { get: ExpressionPropertyInterface(e.o) },
                  type: {
                    get: function () {
                      return "a";
                    },
                  },
                  _name: { value: t.nm },
                  mn: { value: t.mn },
                });
                e.s.setGroupProperty(PropertyInterface("Start Point", i));
                e.e.setGroupProperty(PropertyInterface("End Point", i));
                e.o.setGroupProperty(PropertyInterface("Opacity", i));
                return r;
              }
              function s(t, e, i) {
                var r,
                  s = propertyGroupFactory(l, i),
                  a = propertyGroupFactory(h, s);
                function n(i) {
                  Object.defineProperty(h, t.d[i].nm, {
                    get: ExpressionPropertyInterface(e.d.dataProps[i].p),
                  });
                }
                var o = t.d ? t.d.length : 0,
                  h = {};
                for (r = 0; r < o; r += 1) {
                  n(r);
                  e.d.dataProps[r].p.setGroupProperty(a);
                }
                function l(t) {
                  return "Color" === t || "color" === t
                    ? l.color
                    : "Opacity" === t || "opacity" === t
                    ? l.opacity
                    : "Stroke Width" === t || "stroke width" === t
                    ? l.strokeWidth
                    : null;
                }
                Object.defineProperties(l, {
                  color: { get: ExpressionPropertyInterface(e.c) },
                  opacity: { get: ExpressionPropertyInterface(e.o) },
                  strokeWidth: { get: ExpressionPropertyInterface(e.w) },
                  dash: {
                    get: function () {
                      return h;
                    },
                  },
                  _name: { value: t.nm },
                  mn: { value: t.mn },
                });
                e.c.setGroupProperty(PropertyInterface("Color", s));
                e.o.setGroupProperty(PropertyInterface("Opacity", s));
                e.w.setGroupProperty(PropertyInterface("Stroke Width", s));
                return l;
              }
              function a(t, e, i) {
                function r(e) {
                  return e === t.e.ix || "End" === e || "end" === e
                    ? r.end
                    : e === t.s.ix
                    ? r.start
                    : e === t.o.ix
                    ? r.offset
                    : null;
                }
                var s = propertyGroupFactory(r, i);
                r.propertyIndex = t.ix;
                e.s.setGroupProperty(PropertyInterface("Start", s));
                e.e.setGroupProperty(PropertyInterface("End", s));
                e.o.setGroupProperty(PropertyInterface("Offset", s));
                r.propertyIndex = t.ix;
                r.propertyGroup = i;
                Object.defineProperties(r, {
                  start: { get: ExpressionPropertyInterface(e.s) },
                  end: { get: ExpressionPropertyInterface(e.e) },
                  offset: { get: ExpressionPropertyInterface(e.o) },
                  _name: { value: t.nm },
                });
                r.mn = t.mn;
                return r;
              }
              function n(t, e, i) {
                function r(e) {
                  return t.a.ix === e || "Anchor Point" === e
                    ? r.anchorPoint
                    : t.o.ix === e || "Opacity" === e
                    ? r.opacity
                    : t.p.ix === e || "Position" === e
                    ? r.position
                    : t.r.ix === e ||
                      "Rotation" === e ||
                      "ADBE Vector Rotation" === e
                    ? r.rotation
                    : t.s.ix === e || "Scale" === e
                    ? r.scale
                    : (t.sk && t.sk.ix === e) || "Skew" === e
                    ? r.skew
                    : (t.sa && t.sa.ix === e) || "Skew Axis" === e
                    ? r.skewAxis
                    : null;
                }
                var s = propertyGroupFactory(r, i);
                e.transform.mProps.o.setGroupProperty(
                  PropertyInterface("Opacity", s)
                );
                e.transform.mProps.p.setGroupProperty(
                  PropertyInterface("Position", s)
                );
                e.transform.mProps.a.setGroupProperty(
                  PropertyInterface("Anchor Point", s)
                );
                e.transform.mProps.s.setGroupProperty(
                  PropertyInterface("Scale", s)
                );
                e.transform.mProps.r.setGroupProperty(
                  PropertyInterface("Rotation", s)
                );
                if (e.transform.mProps.sk) {
                  e.transform.mProps.sk.setGroupProperty(
                    PropertyInterface("Skew", s)
                  );
                  e.transform.mProps.sa.setGroupProperty(
                    PropertyInterface("Skew Angle", s)
                  );
                }
                e.transform.op.setGroupProperty(
                  PropertyInterface("Opacity", s)
                );
                Object.defineProperties(r, {
                  opacity: {
                    get: ExpressionPropertyInterface(e.transform.mProps.o),
                  },
                  position: {
                    get: ExpressionPropertyInterface(e.transform.mProps.p),
                  },
                  anchorPoint: {
                    get: ExpressionPropertyInterface(e.transform.mProps.a),
                  },
                  scale: {
                    get: ExpressionPropertyInterface(e.transform.mProps.s),
                  },
                  rotation: {
                    get: ExpressionPropertyInterface(e.transform.mProps.r),
                  },
                  skew: {
                    get: ExpressionPropertyInterface(e.transform.mProps.sk),
                  },
                  skewAxis: {
                    get: ExpressionPropertyInterface(e.transform.mProps.sa),
                  },
                  _name: { value: t.nm },
                });
                r.ty = "tr";
                r.mn = t.mn;
                r.propertyGroup = i;
                return r;
              }
              function o(t, e, i) {
                function r(e) {
                  return t.p.ix === e
                    ? r.position
                    : t.s.ix === e
                    ? r.size
                    : null;
                }
                var s = propertyGroupFactory(r, i);
                r.propertyIndex = t.ix;
                var a = "tm" === e.sh.ty ? e.sh.prop : e.sh;
                a.s.setGroupProperty(PropertyInterface("Size", s));
                a.p.setGroupProperty(PropertyInterface("Position", s));
                Object.defineProperties(r, {
                  size: { get: ExpressionPropertyInterface(a.s) },
                  position: { get: ExpressionPropertyInterface(a.p) },
                  _name: { value: t.nm },
                });
                r.mn = t.mn;
                return r;
              }
              function h(t, e, i) {
                function r(e) {
                  return t.p.ix === e
                    ? r.position
                    : t.r.ix === e
                    ? r.rotation
                    : t.pt.ix === e
                    ? r.points
                    : t.or.ix === e || "ADBE Vector Star Outer Radius" === e
                    ? r.outerRadius
                    : t.os.ix === e
                    ? r.outerRoundness
                    : !t.ir ||
                      (t.ir.ix !== e && "ADBE Vector Star Inner Radius" !== e)
                    ? t.is && t.is.ix === e
                      ? r.innerRoundness
                      : null
                    : r.innerRadius;
                }
                var s = propertyGroupFactory(r, i),
                  a = "tm" === e.sh.ty ? e.sh.prop : e.sh;
                r.propertyIndex = t.ix;
                a.or.setGroupProperty(PropertyInterface("Outer Radius", s));
                a.os.setGroupProperty(PropertyInterface("Outer Roundness", s));
                a.pt.setGroupProperty(PropertyInterface("Points", s));
                a.p.setGroupProperty(PropertyInterface("Position", s));
                a.r.setGroupProperty(PropertyInterface("Rotation", s));
                if (t.ir) {
                  a.ir.setGroupProperty(PropertyInterface("Inner Radius", s));
                  a.is.setGroupProperty(
                    PropertyInterface("Inner Roundness", s)
                  );
                }
                Object.defineProperties(r, {
                  position: { get: ExpressionPropertyInterface(a.p) },
                  rotation: { get: ExpressionPropertyInterface(a.r) },
                  points: { get: ExpressionPropertyInterface(a.pt) },
                  outerRadius: { get: ExpressionPropertyInterface(a.or) },
                  outerRoundness: { get: ExpressionPropertyInterface(a.os) },
                  innerRadius: { get: ExpressionPropertyInterface(a.ir) },
                  innerRoundness: { get: ExpressionPropertyInterface(a.is) },
                  _name: { value: t.nm },
                });
                r.mn = t.mn;
                return r;
              }
              function l(t, e, i) {
                function r(e) {
                  return t.p.ix === e
                    ? r.position
                    : t.r.ix === e
                    ? r.roundness
                    : t.s.ix === e ||
                      "Size" === e ||
                      "ADBE Vector Rect Size" === e
                    ? r.size
                    : null;
                }
                var s = propertyGroupFactory(r, i),
                  a = "tm" === e.sh.ty ? e.sh.prop : e.sh;
                r.propertyIndex = t.ix;
                a.p.setGroupProperty(PropertyInterface("Position", s));
                a.s.setGroupProperty(PropertyInterface("Size", s));
                a.r.setGroupProperty(PropertyInterface("Rotation", s));
                Object.defineProperties(r, {
                  position: { get: ExpressionPropertyInterface(a.p) },
                  roundness: { get: ExpressionPropertyInterface(a.r) },
                  size: { get: ExpressionPropertyInterface(a.s) },
                  _name: { value: t.nm },
                });
                r.mn = t.mn;
                return r;
              }
              function p(t, e, i) {
                function r(e) {
                  return t.r.ix === e || "Round Corners 1" === e
                    ? r.radius
                    : null;
                }
                var s = propertyGroupFactory(r, i),
                  a = e;
                r.propertyIndex = t.ix;
                a.rd.setGroupProperty(PropertyInterface("Radius", s));
                Object.defineProperties(r, {
                  radius: { get: ExpressionPropertyInterface(a.rd) },
                  _name: { value: t.nm },
                });
                r.mn = t.mn;
                return r;
              }
              function f(t, e, i) {
                function r(e) {
                  return t.c.ix === e || "Copies" === e
                    ? r.copies
                    : t.o.ix === e || "Offset" === e
                    ? r.offset
                    : null;
                }
                var s = propertyGroupFactory(r, i),
                  a = e;
                r.propertyIndex = t.ix;
                a.c.setGroupProperty(PropertyInterface("Copies", s));
                a.o.setGroupProperty(PropertyInterface("Offset", s));
                Object.defineProperties(r, {
                  copies: { get: ExpressionPropertyInterface(a.c) },
                  offset: { get: ExpressionPropertyInterface(a.o) },
                  _name: { value: t.nm },
                });
                r.mn = t.mn;
                return r;
              }
              return function (e, i, r) {
                var s;
                function a(t) {
                  if ("number" == typeof t)
                    return 0 === (t = void 0 === t ? 1 : t) ? r : s[t - 1];
                  for (var e = 0, i = s.length; e < i; ) {
                    if (s[e]._name === t) return s[e];
                    e += 1;
                  }
                  return null;
                }
                a.propertyGroup = propertyGroupFactory(a, function () {
                  return r;
                });
                s = t(e, i, a.propertyGroup);
                a.numProperties = s.length;
                a._name = "Contents";
                return a;
              };
            })(),
            TextExpressionInterface = function (t) {
              var e, i;
              function r(t) {
                return "ADBE Text Document" === t ? r.sourceText : null;
              }
              Object.defineProperty(r, "sourceText", {
                get: function () {
                  t.textProperty.getValue();
                  var r = t.textProperty.currentData.t;
                  if (r !== e) {
                    t.textProperty.currentData.t = e;
                    (i = new String(r)).value = r || new String(r);
                  }
                  return i;
                },
              });
              return r;
            },
            getBlendMode =
              ((blendModeEnums = {
                0: "source-over",
                1: "multiply",
                2: "screen",
                3: "overlay",
                4: "darken",
                5: "lighten",
                6: "color-dodge",
                7: "color-burn",
                8: "hard-light",
                9: "soft-light",
                10: "difference",
                11: "exclusion",
                12: "hue",
                13: "saturation",
                14: "color",
                15: "luminosity",
              }),
              function (t) {
                return blendModeEnums[t] || "";
              }),
            blendModeEnums;
          function SliderEffect(t, e, i) {
            this.p = PropertyFactory.getProp(e, t.v, 0, 0, i);
          }
          function AngleEffect(t, e, i) {
            this.p = PropertyFactory.getProp(e, t.v, 0, 0, i);
          }
          function ColorEffect(t, e, i) {
            this.p = PropertyFactory.getProp(e, t.v, 1, 0, i);
          }
          function PointEffect(t, e, i) {
            this.p = PropertyFactory.getProp(e, t.v, 1, 0, i);
          }
          function LayerIndexEffect(t, e, i) {
            this.p = PropertyFactory.getProp(e, t.v, 0, 0, i);
          }
          function MaskIndexEffect(t, e, i) {
            this.p = PropertyFactory.getProp(e, t.v, 0, 0, i);
          }
          function CheckboxEffect(t, e, i) {
            this.p = PropertyFactory.getProp(e, t.v, 0, 0, i);
          }
          function NoValueEffect() {
            this.p = {};
          }
          function EffectsManager(t, e) {
            var i,
              r = t.ef || [];
            this.effectElements = [];
            var s,
              a = r.length;
            for (i = 0; i < a; i += 1) {
              s = new GroupEffect(r[i], e);
              this.effectElements.push(s);
            }
          }
          function GroupEffect(t, e) {
            this.init(t, e);
          }
          extendPrototype([DynamicPropertyContainer], GroupEffect);
          GroupEffect.prototype.getValue =
            GroupEffect.prototype.iterateDynamicProperties;
          GroupEffect.prototype.init = function (t, e) {
            this.data = t;
            this.effectElements = [];
            this.initDynamicPropertyContainer(e);
            var i,
              r,
              s = this.data.ef.length,
              a = this.data.ef;
            for (i = 0; i < s; i += 1) {
              r = null;
              switch (a[i].ty) {
                case 0:
                  r = new SliderEffect(a[i], e, this);
                  break;
                case 1:
                  r = new AngleEffect(a[i], e, this);
                  break;
                case 2:
                  r = new ColorEffect(a[i], e, this);
                  break;
                case 3:
                  r = new PointEffect(a[i], e, this);
                  break;
                case 4:
                case 7:
                  r = new CheckboxEffect(a[i], e, this);
                  break;
                case 10:
                  r = new LayerIndexEffect(a[i], e, this);
                  break;
                case 11:
                  r = new MaskIndexEffect(a[i], e, this);
                  break;
                case 5:
                  r = new EffectsManager(a[i], e, this);
                  break;
                default:
                  r = new NoValueEffect(a[i], e, this);
              }
              r && this.effectElements.push(r);
            }
          };
          function BaseElement() {}
          BaseElement.prototype = {
            checkMasks: function () {
              if (!this.data.hasMask) return !1;
              for (var t = 0, e = this.data.masksProperties.length; t < e; ) {
                if (
                  "n" !== this.data.masksProperties[t].mode &&
                  !1 !== this.data.masksProperties[t].cl
                )
                  return !0;
                t += 1;
              }
              return !1;
            },
            initExpressions: function () {
              this.layerInterface = LayerExpressionInterface(this);
              this.data.hasMask &&
                this.maskManager &&
                this.layerInterface.registerMaskInterface(this.maskManager);
              var t = EffectsExpressionInterface.createEffectsInterface(
                this,
                this.layerInterface
              );
              this.layerInterface.registerEffectsInterface(t);
              if (0 === this.data.ty || this.data.xt)
                this.compInterface = CompExpressionInterface(this);
              else if (4 === this.data.ty) {
                this.layerInterface.shapeInterface = ShapeExpressionInterface(
                  this.shapesData,
                  this.itemsData,
                  this.layerInterface
                );
                this.layerInterface.content =
                  this.layerInterface.shapeInterface;
              } else if (5 === this.data.ty) {
                this.layerInterface.textInterface =
                  TextExpressionInterface(this);
                this.layerInterface.text = this.layerInterface.textInterface;
              }
            },
            setBlendMode: function () {
              var t = getBlendMode(this.data.bm);
              (this.baseElement || this.layerElement).style["mix-blend-mode"] =
                t;
            },
            initBaseData: function (t, e, i) {
              this.globalData = e;
              this.comp = i;
              this.data = t;
              this.layerId = createElementID();
              this.data.sr || (this.data.sr = 1);
              this.effectsManager = new EffectsManager(
                this.data,
                this,
                this.dynamicProperties
              );
            },
            getType: function () {
              return this.type;
            },
            sourceRectAtTime: function () {},
          };
          function FrameElement() {}
          FrameElement.prototype = {
            initFrame: function () {
              this._isFirstFrame = !1;
              this.dynamicProperties = [];
              this._mdf = !1;
            },
            prepareProperties: function (t, e) {
              var i,
                r = this.dynamicProperties.length;
              for (i = 0; i < r; i += 1)
                if (
                  e ||
                  (this._isParent &&
                    "transform" === this.dynamicProperties[i].propType)
                ) {
                  this.dynamicProperties[i].getValue();
                  if (this.dynamicProperties[i]._mdf) {
                    this.globalData._mdf = !0;
                    this._mdf = !0;
                  }
                }
            },
            addDynamicProperty: function (t) {
              -1 === this.dynamicProperties.indexOf(t) &&
                this.dynamicProperties.push(t);
            },
          };
          function _typeof$2(t) {
            _typeof$2 =
              "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                ? function (t) {
                    return typeof t;
                  }
                : function (t) {
                    return t &&
                      "function" == typeof Symbol &&
                      t.constructor === Symbol &&
                      t !== Symbol.prototype
                      ? "symbol"
                      : typeof t;
                  };
            return _typeof$2(t);
          }
          var FootageInterface =
              ((dataInterfaceFactory = function (t) {
                function e(t) {
                  return "Outline" === t ? e.outlineInterface() : null;
                }
                e._name = "Outline";
                e.outlineInterface = (function (t) {
                  var e = "",
                    i = t.getFootageData();
                  function r(t) {
                    if (i[t]) {
                      e = t;
                      return "object" === _typeof$2((i = i[t])) ? r : i;
                    }
                    var s = t.indexOf(e);
                    if (-1 !== s) {
                      var a = parseInt(t.substr(s + e.length), 10);
                      return "object" === _typeof$2((i = i[a])) ? r : i;
                    }
                    return "";
                  }
                  return function () {
                    e = "";
                    i = t.getFootageData();
                    return r;
                  };
                })(t);
                return e;
              }),
              function (t) {
                function e(t) {
                  return "Data" === t ? e.dataInterface : null;
                }
                e._name = "Data";
                e.dataInterface = dataInterfaceFactory(t);
                return e;
              }),
            dataInterfaceFactory;
          function FootageElement(t, e, i) {
            this.initFrame();
            this.initRenderable();
            this.assetData = e.getAssetData(t.refId);
            this.footageData = e.imageLoader.getAsset(this.assetData);
            this.initBaseData(t, e, i);
          }
          FootageElement.prototype.prepareFrame = function () {};
          extendPrototype(
            [RenderableElement, BaseElement, FrameElement],
            FootageElement
          );
          FootageElement.prototype.getBaseElement = function () {
            return null;
          };
          FootageElement.prototype.renderFrame = function () {};
          FootageElement.prototype.destroy = function () {};
          FootageElement.prototype.initExpressions = function () {
            this.layerInterface = FootageInterface(this);
          };
          FootageElement.prototype.getFootageData = function () {
            return this.footageData;
          };
          function AudioElement(t, e, i) {
            this.initFrame();
            this.initRenderable();
            this.assetData = e.getAssetData(t.refId);
            this.initBaseData(t, e, i);
            this._isPlaying = !1;
            this._canPlay = !1;
            var r = this.globalData.getAssetsPath(this.assetData);
            this.audio = this.globalData.audioController.createAudio(r);
            this._currentTime = 0;
            this.globalData.audioController.addAudio(this);
            this._volumeMultiplier = 1;
            this._volume = 1;
            this._previousVolume = null;
            this.tm = t.tm
              ? PropertyFactory.getProp(this, t.tm, 0, e.frameRate, this)
              : { _placeholder: !0 };
            this.lv = PropertyFactory.getProp(
              this,
              t.au && t.au.lv ? t.au.lv : { k: [100] },
              1,
              0.01,
              this
            );
          }
          AudioElement.prototype.prepareFrame = function (t) {
            this.prepareRenderableFrame(t, !0);
            this.prepareProperties(t, !0);
            if (this.tm._placeholder) this._currentTime = t / this.data.sr;
            else {
              var e = this.tm.v;
              this._currentTime = e;
            }
            this._volume = this.lv.v[0];
            var i = this._volume * this._volumeMultiplier;
            if (this._previousVolume !== i) {
              this._previousVolume = i;
              this.audio.volume(i);
            }
          };
          extendPrototype(
            [RenderableElement, BaseElement, FrameElement],
            AudioElement
          );
          AudioElement.prototype.renderFrame = function () {
            if (this.isInRange && this._canPlay)
              if (this._isPlaying)
                (!this.audio.playing() ||
                  Math.abs(
                    this._currentTime / this.globalData.frameRate -
                      this.audio.seek()
                  ) > 0.1) &&
                  this.audio.seek(
                    this._currentTime / this.globalData.frameRate
                  );
              else {
                this.audio.play();
                this.audio.seek(this._currentTime / this.globalData.frameRate);
                this._isPlaying = !0;
              }
          };
          AudioElement.prototype.show = function () {};
          AudioElement.prototype.hide = function () {
            this.audio.pause();
            this._isPlaying = !1;
          };
          AudioElement.prototype.pause = function () {
            this.audio.pause();
            this._isPlaying = !1;
            this._canPlay = !1;
          };
          AudioElement.prototype.resume = function () {
            this._canPlay = !0;
          };
          AudioElement.prototype.setRate = function (t) {
            this.audio.rate(t);
          };
          AudioElement.prototype.volume = function (t) {
            this._volumeMultiplier = t;
            this._previousVolume = t * this._volume;
            this.audio.volume(this._previousVolume);
          };
          AudioElement.prototype.getBaseElement = function () {
            return null;
          };
          AudioElement.prototype.destroy = function () {};
          AudioElement.prototype.sourceRectAtTime = function () {};
          AudioElement.prototype.initExpressions = function () {};
          function BaseRenderer() {}
          BaseRenderer.prototype.checkLayers = function (t) {
            var e,
              i,
              r = this.layers.length;
            this.completeLayers = !0;
            for (e = r - 1; e >= 0; e -= 1) {
              this.elements[e] ||
                ((i = this.layers[e]).ip - i.st <= t - this.layers[e].st &&
                  i.op - i.st > t - this.layers[e].st &&
                  this.buildItem(e));
              this.completeLayers = !!this.elements[e] && this.completeLayers;
            }
            this.checkPendingElements();
          };
          BaseRenderer.prototype.createItem = function (t) {
            switch (t.ty) {
              case 2:
                return this.createImage(t);
              case 0:
                return this.createComp(t);
              case 1:
                return this.createSolid(t);
              case 3:
              default:
                return this.createNull(t);
              case 4:
                return this.createShape(t);
              case 5:
                return this.createText(t);
              case 6:
                return this.createAudio(t);
              case 13:
                return this.createCamera(t);
              case 15:
                return this.createFootage(t);
            }
          };
          BaseRenderer.prototype.createCamera = function () {
            throw new Error("You're using a 3d camera. Try the html renderer.");
          };
          BaseRenderer.prototype.createAudio = function (t) {
            return new AudioElement(t, this.globalData, this);
          };
          BaseRenderer.prototype.createFootage = function (t) {
            return new FootageElement(t, this.globalData, this);
          };
          BaseRenderer.prototype.buildAllItems = function () {
            var t,
              e = this.layers.length;
            for (t = 0; t < e; t += 1) this.buildItem(t);
            this.checkPendingElements();
          };
          BaseRenderer.prototype.includeLayers = function (t) {
            this.completeLayers = !1;
            var e,
              i,
              r = t.length,
              s = this.layers.length;
            for (e = 0; e < r; e += 1) {
              i = 0;
              for (; i < s; ) {
                if (this.layers[i].id === t[e].id) {
                  this.layers[i] = t[e];
                  break;
                }
                i += 1;
              }
            }
          };
          BaseRenderer.prototype.setProjectInterface = function (t) {
            this.globalData.projectInterface = t;
          };
          BaseRenderer.prototype.initItems = function () {
            this.globalData.progressiveLoad || this.buildAllItems();
          };
          BaseRenderer.prototype.buildElementParenting = function (t, e, i) {
            for (
              var r = this.elements, s = this.layers, a = 0, n = s.length;
              a < n;

            ) {
              if (s[a].ind == e)
                if (r[a] && !0 !== r[a]) {
                  i.push(r[a]);
                  r[a].setAsParent();
                  void 0 !== s[a].parent
                    ? this.buildElementParenting(t, s[a].parent, i)
                    : t.setHierarchy(i);
                } else {
                  this.buildItem(a);
                  this.addPendingElement(t);
                }
              a += 1;
            }
          };
          BaseRenderer.prototype.addPendingElement = function (t) {
            this.pendingElements.push(t);
          };
          BaseRenderer.prototype.searchExtraCompositions = function (t) {
            var e,
              i = t.length;
            for (e = 0; e < i; e += 1)
              if (t[e].xt) {
                var r = this.createComp(t[e]);
                r.initExpressions();
                this.globalData.projectInterface.registerComposition(r);
              }
          };
          BaseRenderer.prototype.getElementByPath = function (t) {
            var e,
              i = t.shift();
            if ("number" == typeof i) e = this.elements[i];
            else {
              var r,
                s = this.elements.length;
              for (r = 0; r < s; r += 1)
                if (this.elements[r].data.nm === i) {
                  e = this.elements[r];
                  break;
                }
            }
            return 0 === t.length ? e : e.getElementByPath(t);
          };
          BaseRenderer.prototype.setupGlobalData = function (t, e) {
            this.globalData.fontManager = new FontManager();
            this.globalData.fontManager.addChars(t.chars);
            this.globalData.fontManager.addFonts(t.fonts, e);
            this.globalData.getAssetData = this.animationItem.getAssetData.bind(
              this.animationItem
            );
            this.globalData.getAssetsPath =
              this.animationItem.getAssetsPath.bind(this.animationItem);
            this.globalData.imageLoader = this.animationItem.imagePreloader;
            this.globalData.audioController =
              this.animationItem.audioController;
            this.globalData.frameId = 0;
            this.globalData.frameRate = t.fr;
            this.globalData.nm = t.nm;
            this.globalData.compSize = { w: t.w, h: t.h };
          };
          function TransformElement() {}
          TransformElement.prototype = {
            initTransform: function () {
              this.finalTransform = {
                mProp: this.data.ks
                  ? TransformPropertyFactory.getTransformProperty(
                      this,
                      this.data.ks,
                      this
                    )
                  : { o: 0 },
                _matMdf: !1,
                _opMdf: !1,
                mat: new Matrix(),
              };
              this.data.ao && (this.finalTransform.mProp.autoOriented = !0);
              this.data.ty;
            },
            renderTransform: function () {
              this.finalTransform._opMdf =
                this.finalTransform.mProp.o._mdf || this._isFirstFrame;
              this.finalTransform._matMdf =
                this.finalTransform.mProp._mdf || this._isFirstFrame;
              if (this.hierarchy) {
                var t,
                  e = this.finalTransform.mat,
                  i = 0,
                  r = this.hierarchy.length;
                if (!this.finalTransform._matMdf)
                  for (; i < r; ) {
                    if (this.hierarchy[i].finalTransform.mProp._mdf) {
                      this.finalTransform._matMdf = !0;
                      break;
                    }
                    i += 1;
                  }
                if (this.finalTransform._matMdf) {
                  t = this.finalTransform.mProp.v.props;
                  e.cloneFromProps(t);
                  for (i = 0; i < r; i += 1) {
                    t = this.hierarchy[i].finalTransform.mProp.v.props;
                    e.transform(
                      t[0],
                      t[1],
                      t[2],
                      t[3],
                      t[4],
                      t[5],
                      t[6],
                      t[7],
                      t[8],
                      t[9],
                      t[10],
                      t[11],
                      t[12],
                      t[13],
                      t[14],
                      t[15]
                    );
                  }
                }
              }
            },
            globalToLocal: function (t) {
              var e = [];
              e.push(this.finalTransform);
              for (var i, r = !0, s = this.comp; r; )
                if (s.finalTransform) {
                  s.data.hasMask && e.splice(0, 0, s.finalTransform);
                  s = s.comp;
                } else r = !1;
              var a,
                n = e.length;
              for (i = 0; i < n; i += 1) {
                a = e[i].mat.applyToPointArray(0, 0, 0);
                t = [t[0] - a[0], t[1] - a[1], 0];
              }
              return t;
            },
            mHelper: new Matrix(),
          };
          function MaskElement(t, e, i) {
            this.data = t;
            this.element = e;
            this.globalData = i;
            this.storedData = [];
            this.masksProperties = this.data.masksProperties || [];
            this.maskElement = null;
            var r,
              s,
              a = this.globalData.defs,
              n = this.masksProperties ? this.masksProperties.length : 0;
            this.viewData = createSizedArray(n);
            this.solidPath = "";
            var o,
              h,
              l,
              p,
              f,
              m,
              c = this.masksProperties,
              d = 0,
              u = [],
              y = createElementID(),
              g = "clipPath",
              v = "clip-path";
            for (r = 0; r < n; r += 1) {
              if (
                ("a" !== c[r].mode && "n" !== c[r].mode) ||
                c[r].inv ||
                100 !== c[r].o.k ||
                c[r].o.x
              ) {
                g = "mask";
                v = "mask";
              }
              if (("s" !== c[r].mode && "i" !== c[r].mode) || 0 !== d) l = null;
              else {
                (l = createNS("rect")).setAttribute("fill", "#ffffff");
                l.setAttribute("width", this.element.comp.data.w || 0);
                l.setAttribute("height", this.element.comp.data.h || 0);
                u.push(l);
              }
              s = createNS("path");
              if ("n" === c[r].mode) {
                this.viewData[r] = {
                  op: PropertyFactory.getProp(
                    this.element,
                    c[r].o,
                    0,
                    0.01,
                    this.element
                  ),
                  prop: ShapePropertyFactory.getShapeProp(
                    this.element,
                    c[r],
                    3
                  ),
                  elem: s,
                  lastPath: "",
                };
                a.appendChild(s);
              } else {
                d += 1;
                s.setAttribute(
                  "fill",
                  "s" === c[r].mode ? "#000000" : "#ffffff"
                );
                s.setAttribute("clip-rule", "nonzero");
                var b;
                if (0 !== c[r].x.k) {
                  g = "mask";
                  v = "mask";
                  m = PropertyFactory.getProp(
                    this.element,
                    c[r].x,
                    0,
                    null,
                    this.element
                  );
                  b = createElementID();
                  (p = createNS("filter")).setAttribute("id", b);
                  (f = createNS("feMorphology")).setAttribute(
                    "operator",
                    "erode"
                  );
                  f.setAttribute("in", "SourceGraphic");
                  f.setAttribute("radius", "0");
                  p.appendChild(f);
                  a.appendChild(p);
                  s.setAttribute(
                    "stroke",
                    "s" === c[r].mode ? "#000000" : "#ffffff"
                  );
                } else {
                  f = null;
                  m = null;
                }
                this.storedData[r] = {
                  elem: s,
                  x: m,
                  expan: f,
                  lastPath: "",
                  lastOperator: "",
                  filterId: b,
                  lastRadius: 0,
                };
                if ("i" === c[r].mode) {
                  h = u.length;
                  var P = createNS("g");
                  for (o = 0; o < h; o += 1) P.appendChild(u[o]);
                  var E = createNS("mask");
                  E.setAttribute("mask-type", "alpha");
                  E.setAttribute("id", y + "_" + d);
                  E.appendChild(s);
                  a.appendChild(E);
                  P.setAttribute(
                    "mask",
                    "url(" + getLocationHref() + "#" + y + "_" + d + ")"
                  );
                  u.length = 0;
                  u.push(P);
                } else u.push(s);
                c[r].inv &&
                  !this.solidPath &&
                  (this.solidPath = this.createLayerSolidPath());
                this.viewData[r] = {
                  elem: s,
                  lastPath: "",
                  op: PropertyFactory.getProp(
                    this.element,
                    c[r].o,
                    0,
                    0.01,
                    this.element
                  ),
                  prop: ShapePropertyFactory.getShapeProp(
                    this.element,
                    c[r],
                    3
                  ),
                  invRect: l,
                };
                this.viewData[r].prop.k ||
                  this.drawPath(
                    c[r],
                    this.viewData[r].prop.v,
                    this.viewData[r]
                  );
              }
            }
            this.maskElement = createNS(g);
            n = u.length;
            for (r = 0; r < n; r += 1) this.maskElement.appendChild(u[r]);
            if (d > 0) {
              this.maskElement.setAttribute("id", y);
              this.element.maskedElement.setAttribute(
                v,
                "url(" + getLocationHref() + "#" + y + ")"
              );
              a.appendChild(this.maskElement);
            }
            this.viewData.length && this.element.addRenderableComponent(this);
          }
          MaskElement.prototype.getMaskProperty = function (t) {
            return this.viewData[t].prop;
          };
          MaskElement.prototype.renderFrame = function (t) {
            var e,
              i = this.element.finalTransform.mat,
              r = this.masksProperties.length;
            for (e = 0; e < r; e += 1) {
              (this.viewData[e].prop._mdf || t) &&
                this.drawPath(
                  this.masksProperties[e],
                  this.viewData[e].prop.v,
                  this.viewData[e]
                );
              (this.viewData[e].op._mdf || t) &&
                this.viewData[e].elem.setAttribute(
                  "fill-opacity",
                  this.viewData[e].op.v
                );
              if ("n" !== this.masksProperties[e].mode) {
                this.viewData[e].invRect &&
                  (this.element.finalTransform.mProp._mdf || t) &&
                  this.viewData[e].invRect.setAttribute(
                    "transform",
                    i.getInverseMatrix().to2dCSS()
                  );
                if (this.storedData[e].x && (this.storedData[e].x._mdf || t)) {
                  var s = this.storedData[e].expan;
                  if (this.storedData[e].x.v < 0) {
                    if ("erode" !== this.storedData[e].lastOperator) {
                      this.storedData[e].lastOperator = "erode";
                      this.storedData[e].elem.setAttribute(
                        "filter",
                        "url(" +
                          getLocationHref() +
                          "#" +
                          this.storedData[e].filterId +
                          ")"
                      );
                    }
                    s.setAttribute("radius", -this.storedData[e].x.v);
                  } else {
                    if ("dilate" !== this.storedData[e].lastOperator) {
                      this.storedData[e].lastOperator = "dilate";
                      this.storedData[e].elem.setAttribute("filter", null);
                    }
                    this.storedData[e].elem.setAttribute(
                      "stroke-width",
                      2 * this.storedData[e].x.v
                    );
                  }
                }
              }
            }
          };
          MaskElement.prototype.getMaskelement = function () {
            return this.maskElement;
          };
          MaskElement.prototype.createLayerSolidPath = function () {
            var t = "M0,0 ";
            t += " h" + this.globalData.compSize.w;
            t += " v" + this.globalData.compSize.h;
            t += " h-" + this.globalData.compSize.w;
            return (t += " v-" + this.globalData.compSize.h + " ");
          };
          MaskElement.prototype.drawPath = function (t, e, i) {
            var r,
              s,
              a = " M" + e.v[0][0] + "," + e.v[0][1];
            s = e._length;
            for (r = 1; r < s; r += 1)
              a +=
                " C" +
                e.o[r - 1][0] +
                "," +
                e.o[r - 1][1] +
                " " +
                e.i[r][0] +
                "," +
                e.i[r][1] +
                " " +
                e.v[r][0] +
                "," +
                e.v[r][1];
            e.c &&
              s > 1 &&
              (a +=
                " C" +
                e.o[r - 1][0] +
                "," +
                e.o[r - 1][1] +
                " " +
                e.i[0][0] +
                "," +
                e.i[0][1] +
                " " +
                e.v[0][0] +
                "," +
                e.v[0][1]);
            if (i.lastPath !== a) {
              var n = "";
              if (i.elem) {
                e.c && (n = t.inv ? this.solidPath + a : a);
                i.elem.setAttribute("d", n);
              }
              i.lastPath = a;
            }
          };
          MaskElement.prototype.destroy = function () {
            this.element = null;
            this.globalData = null;
            this.maskElement = null;
            this.data = null;
            this.masksProperties = null;
          };
          var filtersFactory = (function () {
              var t = {
                createFilter: function (t, e) {
                  var i = createNS("filter");
                  i.setAttribute("id", t);
                  if (!0 !== e) {
                    i.setAttribute("filterUnits", "objectBoundingBox");
                    i.setAttribute("x", "0%");
                    i.setAttribute("y", "0%");
                    i.setAttribute("width", "100%");
                    i.setAttribute("height", "100%");
                  }
                  return i;
                },
                createAlphaToLuminanceFilter: function () {
                  var t = createNS("feColorMatrix");
                  t.setAttribute("type", "matrix");
                  t.setAttribute("color-interpolation-filters", "sRGB");
                  t.setAttribute(
                    "values",
                    "0 0 0 1 0  0 0 0 1 0  0 0 0 1 0  0 0 0 1 1"
                  );
                  return t;
                },
              };
              return t;
            })(),
            featureSupport = (function () {
              var t = { maskType: !0 };
              (/MSIE 10/i.test(navigator.userAgent) ||
                /MSIE 9/i.test(navigator.userAgent) ||
                /rv:11.0/i.test(navigator.userAgent) ||
                /Edge\/\d./i.test(navigator.userAgent)) &&
                (t.maskType = !1);
              return t;
            })(),
            registeredEffects = {},
            idPrefix = "filter_result_";
          function SVGEffects(t) {
            var e,
              i,
              r = "SourceGraphic",
              s = t.data.ef ? t.data.ef.length : 0,
              a = createElementID(),
              n = filtersFactory.createFilter(a, !0),
              o = 0;
            this.filters = [];
            for (e = 0; e < s; e += 1) {
              i = null;
              var h = t.data.ef[e].ty;
              if (registeredEffects[h]) {
                i = new (0, registeredEffects[h].effect)(
                  n,
                  t.effectsManager.effectElements[e],
                  t,
                  idPrefix + o,
                  r
                );
                r = idPrefix + o;
                registeredEffects[h].countsAsEffect && (o += 1);
              }
              i && this.filters.push(i);
            }
            if (o) {
              t.globalData.defs.appendChild(n);
              t.layerElement.setAttribute(
                "filter",
                "url(" + getLocationHref() + "#" + a + ")"
              );
            }
            this.filters.length && t.addRenderableComponent(this);
          }
          SVGEffects.prototype.renderFrame = function (t) {
            var e,
              i = this.filters.length;
            for (e = 0; e < i; e += 1) this.filters[e].renderFrame(t);
          };
          function registerEffect(t, e, i) {
            registeredEffects[t] = { effect: e, countsAsEffect: i };
          }
          function SVGBaseElement() {}
          SVGBaseElement.prototype = {
            initRendererElement: function () {
              this.layerElement = createNS("g");
            },
            createContainerElements: function () {
              this.matteElement = createNS("g");
              this.transformedElement = this.layerElement;
              this.maskedElement = this.layerElement;
              this._sizeChanged = !1;
              var t,
                e,
                i,
                r = null;
              if (this.data.td) {
                if (3 == this.data.td || 1 == this.data.td) {
                  var s = createNS("mask");
                  s.setAttribute("id", this.layerId);
                  s.setAttribute(
                    "mask-type",
                    3 == this.data.td ? "luminance" : "alpha"
                  );
                  s.appendChild(this.layerElement);
                  r = s;
                  this.globalData.defs.appendChild(s);
                  if (!featureSupport.maskType && 1 == this.data.td) {
                    s.setAttribute("mask-type", "luminance");
                    t = createElementID();
                    e = filtersFactory.createFilter(t);
                    this.globalData.defs.appendChild(e);
                    e.appendChild(
                      filtersFactory.createAlphaToLuminanceFilter()
                    );
                    (i = createNS("g")).appendChild(this.layerElement);
                    r = i;
                    s.appendChild(i);
                    i.setAttribute(
                      "filter",
                      "url(" + getLocationHref() + "#" + t + ")"
                    );
                  }
                } else if (2 == this.data.td) {
                  var a = createNS("mask");
                  a.setAttribute("id", this.layerId);
                  a.setAttribute("mask-type", "alpha");
                  var n = createNS("g");
                  a.appendChild(n);
                  t = createElementID();
                  e = filtersFactory.createFilter(t);
                  var o = createNS("feComponentTransfer");
                  o.setAttribute("in", "SourceGraphic");
                  e.appendChild(o);
                  var h = createNS("feFuncA");
                  h.setAttribute("type", "table");
                  h.setAttribute("tableValues", "1.0 0.0");
                  o.appendChild(h);
                  this.globalData.defs.appendChild(e);
                  var l = createNS("rect");
                  l.setAttribute("width", this.comp.data.w);
                  l.setAttribute("height", this.comp.data.h);
                  l.setAttribute("x", "0");
                  l.setAttribute("y", "0");
                  l.setAttribute("fill", "#ffffff");
                  l.setAttribute("opacity", "0");
                  n.setAttribute(
                    "filter",
                    "url(" + getLocationHref() + "#" + t + ")"
                  );
                  n.appendChild(l);
                  n.appendChild(this.layerElement);
                  r = n;
                  if (!featureSupport.maskType) {
                    a.setAttribute("mask-type", "luminance");
                    e.appendChild(
                      filtersFactory.createAlphaToLuminanceFilter()
                    );
                    i = createNS("g");
                    n.appendChild(l);
                    i.appendChild(this.layerElement);
                    r = i;
                    n.appendChild(i);
                  }
                  this.globalData.defs.appendChild(a);
                }
              } else if (this.data.tt) {
                this.matteElement.appendChild(this.layerElement);
                r = this.matteElement;
                this.baseElement = this.matteElement;
              } else this.baseElement = this.layerElement;
              this.data.ln &&
                this.layerElement.setAttribute("id", this.data.ln);
              this.data.cl &&
                this.layerElement.setAttribute("class", this.data.cl);
              if (0 === this.data.ty && !this.data.hd) {
                var p = createNS("clipPath"),
                  f = createNS("path");
                f.setAttribute(
                  "d",
                  "M0,0 L" +
                    this.data.w +
                    ",0 L" +
                    this.data.w +
                    "," +
                    this.data.h +
                    " L0," +
                    this.data.h +
                    "z"
                );
                var m = createElementID();
                p.setAttribute("id", m);
                p.appendChild(f);
                this.globalData.defs.appendChild(p);
                if (this.checkMasks()) {
                  var c = createNS("g");
                  c.setAttribute(
                    "clip-path",
                    "url(" + getLocationHref() + "#" + m + ")"
                  );
                  c.appendChild(this.layerElement);
                  this.transformedElement = c;
                  r
                    ? r.appendChild(this.transformedElement)
                    : (this.baseElement = this.transformedElement);
                } else
                  this.layerElement.setAttribute(
                    "clip-path",
                    "url(" + getLocationHref() + "#" + m + ")"
                  );
              }
              0 !== this.data.bm && this.setBlendMode();
            },
            renderElement: function () {
              this.finalTransform._matMdf &&
                this.transformedElement.setAttribute(
                  "transform",
                  this.finalTransform.mat.to2dCSS()
                );
              this.finalTransform._opMdf &&
                this.transformedElement.setAttribute(
                  "opacity",
                  this.finalTransform.mProp.o.v
                );
            },
            destroyBaseElement: function () {
              this.layerElement = null;
              this.matteElement = null;
              this.maskManager.destroy();
            },
            getBaseElement: function () {
              return this.data.hd ? null : this.baseElement;
            },
            createRenderableComponents: function () {
              this.maskManager = new MaskElement(
                this.data,
                this,
                this.globalData
              );
              this.renderableEffectsManager = new SVGEffects(this);
            },
            setMatte: function (t) {
              this.matteElement &&
                this.matteElement.setAttribute(
                  "mask",
                  "url(" + getLocationHref() + "#" + t + ")"
                );
            },
          };
          function HierarchyElement() {}
          HierarchyElement.prototype = {
            initHierarchy: function () {
              this.hierarchy = [];
              this._isParent = !1;
              this.checkParenting();
            },
            setHierarchy: function (t) {
              this.hierarchy = t;
            },
            setAsParent: function () {
              this._isParent = !0;
            },
            checkParenting: function () {
              void 0 !== this.data.parent &&
                this.comp.buildElementParenting(this, this.data.parent, []);
            },
          };
          function RenderableDOMElement() {}
          extendPrototype(
            [
              RenderableElement,
              createProxyFunction({
                initElement: function (t, e, i) {
                  this.initFrame();
                  this.initBaseData(t, e, i);
                  this.initTransform(t, e, i);
                  this.initHierarchy();
                  this.initRenderable();
                  this.initRendererElement();
                  this.createContainerElements();
                  this.createRenderableComponents();
                  this.createContent();
                  this.hide();
                },
                hide: function () {
                  if (!this.hidden && (!this.isInRange || this.isTransparent)) {
                    (this.baseElement || this.layerElement).style.display =
                      "none";
                    this.hidden = !0;
                  }
                },
                show: function () {
                  if (this.isInRange && !this.isTransparent) {
                    this.data.hd ||
                      ((this.baseElement || this.layerElement).style.display =
                        "block");
                    this.hidden = !1;
                    this._isFirstFrame = !0;
                  }
                },
                renderFrame: function () {
                  if (!this.data.hd && !this.hidden) {
                    this.renderTransform();
                    this.renderRenderable();
                    this.renderElement();
                    this.renderInnerContent();
                    this._isFirstFrame && (this._isFirstFrame = !1);
                  }
                },
                renderInnerContent: function () {},
                prepareFrame: function (t) {
                  this._mdf = !1;
                  this.prepareRenderableFrame(t);
                  this.prepareProperties(t, this.isInRange);
                  this.checkTransparency();
                },
                destroy: function () {
                  this.innerElem = null;
                  this.destroyBaseElement();
                },
              }),
            ],
            RenderableDOMElement
          );
          function IImageElement(t, e, i) {
            this.assetData = e.getAssetData(t.refId);
            this.initElement(t, e, i);
            this.sourceRect = {
              top: 0,
              left: 0,
              width: this.assetData.w,
              height: this.assetData.h,
            };
          }
          extendPrototype(
            [
              BaseElement,
              TransformElement,
              SVGBaseElement,
              HierarchyElement,
              FrameElement,
              RenderableDOMElement,
            ],
            IImageElement
          );
          IImageElement.prototype.createContent = function () {
            var t = this.globalData.getAssetsPath(this.assetData);
            this.innerElem = createNS("image");
            this.innerElem.setAttribute("width", this.assetData.w + "px");
            this.innerElem.setAttribute("height", this.assetData.h + "px");
            this.innerElem.setAttribute(
              "preserveAspectRatio",
              this.assetData.pr ||
                this.globalData.renderConfig.imagePreserveAspectRatio
            );
            this.innerElem.setAttributeNS(
              "http://www.w3.org/1999/xlink",
              "href",
              t
            );
            this.layerElement.appendChild(this.innerElem);
          };
          IImageElement.prototype.sourceRectAtTime = function () {
            return this.sourceRect;
          };
          function ProcessedElement(t, e) {
            this.elem = t;
            this.pos = e;
          }
          function IShapeElement() {}
          IShapeElement.prototype = {
            addShapeToModifiers: function (t) {
              var e,
                i = this.shapeModifiers.length;
              for (e = 0; e < i; e += 1) this.shapeModifiers[e].addShape(t);
            },
            isShapeInAnimatedModifiers: function (t) {
              for (var e = this.shapeModifiers.length; 0 < e; )
                if (this.shapeModifiers[0].isAnimatedWithShape(t)) return !0;
              return !1;
            },
            renderModifiers: function () {
              if (this.shapeModifiers.length) {
                var t,
                  e = this.shapes.length;
                for (t = 0; t < e; t += 1) this.shapes[t].sh.reset();
                for (
                  t = (e = this.shapeModifiers.length) - 1;
                  t >= 0 &&
                  !this.shapeModifiers[t].processShapes(this._isFirstFrame);
                  t -= 1
                );
              }
            },
            searchProcessedElement: function (t) {
              for (
                var e = this.processedElements, i = 0, r = e.length;
                i < r;

              ) {
                if (e[i].elem === t) return e[i].pos;
                i += 1;
              }
              return 0;
            },
            addProcessedElement: function (t, e) {
              for (var i = this.processedElements, r = i.length; r; )
                if (i[(r -= 1)].elem === t) {
                  i[r].pos = e;
                  return;
                }
              i.push(new ProcessedElement(t, e));
            },
            prepareFrame: function (t) {
              this.prepareRenderableFrame(t);
              this.prepareProperties(t, this.isInRange);
            },
          };
          var lineCapEnum = { 1: "butt", 2: "round", 3: "square" },
            lineJoinEnum = { 1: "miter", 2: "round", 3: "bevel" };
          function SVGShapeData(t, e, i) {
            this.caches = [];
            this.styles = [];
            this.transformers = t;
            this.lStr = "";
            this.sh = i;
            this.lvl = e;
            this._isAnimated = !!i.k;
            for (var r = 0, s = t.length; r < s; ) {
              if (t[r].mProps.dynamicProperties.length) {
                this._isAnimated = !0;
                break;
              }
              r += 1;
            }
          }
          SVGShapeData.prototype.setAsAnimated = function () {
            this._isAnimated = !0;
          };
          function SVGStyleData(t, e) {
            this.data = t;
            this.type = t.ty;
            this.d = "";
            this.lvl = e;
            this._mdf = !1;
            this.closed = !0 === t.hd;
            this.pElem = createNS("path");
            this.msElem = null;
          }
          SVGStyleData.prototype.reset = function () {
            this.d = "";
            this._mdf = !1;
          };
          function DashProperty(t, e, i, r) {
            this.elem = t;
            this.frameId = -1;
            this.dataProps = createSizedArray(e.length);
            this.renderer = i;
            this.k = !1;
            this.dashStr = "";
            this.dashArray = createTypedArray(
              "float32",
              e.length ? e.length - 1 : 0
            );
            this.dashoffset = createTypedArray("float32", 1);
            this.initDynamicPropertyContainer(r);
            var s,
              a,
              n = e.length || 0;
            for (s = 0; s < n; s += 1) {
              a = PropertyFactory.getProp(t, e[s].v, 0, 0, this);
              this.k = a.k || this.k;
              this.dataProps[s] = { n: e[s].n, p: a };
            }
            this.k || this.getValue(!0);
            this._isAnimated = this.k;
          }
          DashProperty.prototype.getValue = function (t) {
            if (this.elem.globalData.frameId !== this.frameId || t) {
              this.frameId = this.elem.globalData.frameId;
              this.iterateDynamicProperties();
              this._mdf = this._mdf || t;
              if (this._mdf) {
                var e = 0,
                  i = this.dataProps.length;
                "svg" === this.renderer && (this.dashStr = "");
                for (e = 0; e < i; e += 1)
                  "o" !== this.dataProps[e].n
                    ? "svg" === this.renderer
                      ? (this.dashStr += " " + this.dataProps[e].p.v)
                      : (this.dashArray[e] = this.dataProps[e].p.v)
                    : (this.dashoffset[0] = this.dataProps[e].p.v);
              }
            }
          };
          extendPrototype([DynamicPropertyContainer], DashProperty);
          function SVGStrokeStyleData(t, e, i) {
            this.initDynamicPropertyContainer(t);
            this.getValue = this.iterateDynamicProperties;
            this.o = PropertyFactory.getProp(t, e.o, 0, 0.01, this);
            this.w = PropertyFactory.getProp(t, e.w, 0, null, this);
            this.d = new DashProperty(t, e.d || {}, "svg", this);
            this.c = PropertyFactory.getProp(t, e.c, 1, 255, this);
            this.style = i;
            this._isAnimated = !!this._isAnimated;
          }
          extendPrototype([DynamicPropertyContainer], SVGStrokeStyleData);
          function SVGFillStyleData(t, e, i) {
            this.initDynamicPropertyContainer(t);
            this.getValue = this.iterateDynamicProperties;
            this.o = PropertyFactory.getProp(t, e.o, 0, 0.01, this);
            this.c = PropertyFactory.getProp(t, e.c, 1, 255, this);
            this.style = i;
          }
          extendPrototype([DynamicPropertyContainer], SVGFillStyleData);
          function SVGNoStyleData(t, e, i) {
            this.initDynamicPropertyContainer(t);
            this.getValue = this.iterateDynamicProperties;
            this.style = i;
          }
          extendPrototype([DynamicPropertyContainer], SVGNoStyleData);
          function GradientProperty(t, e, i) {
            this.data = e;
            this.c = createTypedArray("uint8c", 4 * e.p);
            var r = e.k.k[0].s
              ? e.k.k[0].s.length - 4 * e.p
              : e.k.k.length - 4 * e.p;
            this.o = createTypedArray("float32", r);
            this._cmdf = !1;
            this._omdf = !1;
            this._collapsable = this.checkCollapsable();
            this._hasOpacity = r;
            this.initDynamicPropertyContainer(i);
            this.prop = PropertyFactory.getProp(t, e.k, 1, null, this);
            this.k = this.prop.k;
            this.getValue(!0);
          }
          GradientProperty.prototype.comparePoints = function (t, e) {
            for (var i = 0, r = this.o.length / 2; i < r; ) {
              if (Math.abs(t[4 * i] - t[4 * e + 2 * i]) > 0.01) return !1;
              i += 1;
            }
            return !0;
          };
          GradientProperty.prototype.checkCollapsable = function () {
            if (this.o.length / 2 != this.c.length / 4) return !1;
            if (this.data.k.k[0].s)
              for (var t = 0, e = this.data.k.k.length; t < e; ) {
                if (!this.comparePoints(this.data.k.k[t].s, this.data.p))
                  return !1;
                t += 1;
              }
            else if (!this.comparePoints(this.data.k.k, this.data.p)) return !1;
            return !0;
          };
          GradientProperty.prototype.getValue = function (t) {
            this.prop.getValue();
            this._mdf = !1;
            this._cmdf = !1;
            this._omdf = !1;
            if (this.prop._mdf || t) {
              var e,
                i,
                r,
                s = 4 * this.data.p;
              for (e = 0; e < s; e += 1) {
                i = e % 4 == 0 ? 100 : 255;
                r = Math.round(this.prop.v[e] * i);
                if (this.c[e] !== r) {
                  this.c[e] = r;
                  this._cmdf = !t;
                }
              }
              if (this.o.length) {
                s = this.prop.v.length;
                for (e = 4 * this.data.p; e < s; e += 1) {
                  i = e % 2 == 0 ? 100 : 1;
                  r =
                    e % 2 == 0
                      ? Math.round(100 * this.prop.v[e])
                      : this.prop.v[e];
                  if (this.o[e - 4 * this.data.p] !== r) {
                    this.o[e - 4 * this.data.p] = r;
                    this._omdf = !t;
                  }
                }
              }
              this._mdf = !t;
            }
          };
          extendPrototype([DynamicPropertyContainer], GradientProperty);
          function SVGGradientFillStyleData(t, e, i) {
            this.initDynamicPropertyContainer(t);
            this.getValue = this.iterateDynamicProperties;
            this.initGradientData(t, e, i);
          }
          SVGGradientFillStyleData.prototype.initGradientData = function (
            t,
            e,
            i
          ) {
            this.o = PropertyFactory.getProp(t, e.o, 0, 0.01, this);
            this.s = PropertyFactory.getProp(t, e.s, 1, null, this);
            this.e = PropertyFactory.getProp(t, e.e, 1, null, this);
            this.h = PropertyFactory.getProp(t, e.h || { k: 0 }, 0, 0.01, this);
            this.a = PropertyFactory.getProp(
              t,
              e.a || { k: 0 },
              0,
              degToRads,
              this
            );
            this.g = new GradientProperty(t, e.g, this);
            this.style = i;
            this.stops = [];
            this.setGradientData(i.pElem, e);
            this.setGradientOpacity(e, i);
            this._isAnimated = !!this._isAnimated;
          };
          SVGGradientFillStyleData.prototype.setGradientData = function (t, e) {
            var i = createElementID(),
              r = createNS(1 === e.t ? "linearGradient" : "radialGradient");
            r.setAttribute("id", i);
            r.setAttribute("spreadMethod", "pad");
            r.setAttribute("gradientUnits", "userSpaceOnUse");
            var s,
              a,
              n,
              o = [];
            n = 4 * e.g.p;
            for (a = 0; a < n; a += 4) {
              s = createNS("stop");
              r.appendChild(s);
              o.push(s);
            }
            t.setAttribute(
              "gf" === e.ty ? "fill" : "stroke",
              "url(" + getLocationHref() + "#" + i + ")"
            );
            this.gf = r;
            this.cst = o;
          };
          SVGGradientFillStyleData.prototype.setGradientOpacity = function (
            t,
            e
          ) {
            if (this.g._hasOpacity && !this.g._collapsable) {
              var i,
                r,
                s,
                a = createNS("mask"),
                n = createNS("path");
              a.appendChild(n);
              var o = createElementID(),
                h = createElementID();
              a.setAttribute("id", h);
              var l = createNS(1 === t.t ? "linearGradient" : "radialGradient");
              l.setAttribute("id", o);
              l.setAttribute("spreadMethod", "pad");
              l.setAttribute("gradientUnits", "userSpaceOnUse");
              s = t.g.k.k[0].s ? t.g.k.k[0].s.length : t.g.k.k.length;
              var p = this.stops;
              for (r = 4 * t.g.p; r < s; r += 2) {
                (i = createNS("stop")).setAttribute(
                  "stop-color",
                  "rgb(255,255,255)"
                );
                l.appendChild(i);
                p.push(i);
              }
              n.setAttribute(
                "gf" === t.ty ? "fill" : "stroke",
                "url(" + getLocationHref() + "#" + o + ")"
              );
              if ("gs" === t.ty) {
                n.setAttribute("stroke-linecap", lineCapEnum[t.lc || 2]);
                n.setAttribute("stroke-linejoin", lineJoinEnum[t.lj || 2]);
                1 === t.lj && n.setAttribute("stroke-miterlimit", t.ml);
              }
              this.of = l;
              this.ms = a;
              this.ost = p;
              this.maskId = h;
              e.msElem = n;
            }
          };
          extendPrototype([DynamicPropertyContainer], SVGGradientFillStyleData);
          function SVGGradientStrokeStyleData(t, e, i) {
            this.initDynamicPropertyContainer(t);
            this.getValue = this.iterateDynamicProperties;
            this.w = PropertyFactory.getProp(t, e.w, 0, null, this);
            this.d = new DashProperty(t, e.d || {}, "svg", this);
            this.initGradientData(t, e, i);
            this._isAnimated = !!this._isAnimated;
          }
          extendPrototype(
            [SVGGradientFillStyleData, DynamicPropertyContainer],
            SVGGradientStrokeStyleData
          );
          function ShapeGroupData() {
            this.it = [];
            this.prevViewData = [];
            this.gr = createNS("g");
          }
          function SVGTransformData(t, e, i) {
            this.transform = { mProps: t, op: e, container: i };
            this.elements = [];
            this._isAnimated =
              this.transform.mProps.dynamicProperties.length ||
              this.transform.op.effectsSequence.length;
          }
          var buildShapeString = function (t, e, i, r) {
              if (0 === e) return "";
              var s,
                a = t.o,
                n = t.i,
                o = t.v,
                h = " M" + r.applyToPointStringified(o[0][0], o[0][1]);
              for (s = 1; s < e; s += 1)
                h +=
                  " C" +
                  r.applyToPointStringified(a[s - 1][0], a[s - 1][1]) +
                  " " +
                  r.applyToPointStringified(n[s][0], n[s][1]) +
                  " " +
                  r.applyToPointStringified(o[s][0], o[s][1]);
              if (i && e) {
                h +=
                  " C" +
                  r.applyToPointStringified(a[s - 1][0], a[s - 1][1]) +
                  " " +
                  r.applyToPointStringified(n[0][0], n[0][1]) +
                  " " +
                  r.applyToPointStringified(o[0][0], o[0][1]);
                h += "z";
              }
              return h;
            },
            SVGElementsRenderer = (function () {
              var t = new Matrix(),
                e = new Matrix();
              function i(t, e, i) {
                (i || e.transform.op._mdf) &&
                  e.transform.container.setAttribute(
                    "opacity",
                    e.transform.op.v
                  );
                (i || e.transform.mProps._mdf) &&
                  e.transform.container.setAttribute(
                    "transform",
                    e.transform.mProps.v.to2dCSS()
                  );
              }
              function r() {}
              function s(i, r, s) {
                var a,
                  n,
                  o,
                  h,
                  l,
                  p,
                  f,
                  m,
                  c,
                  d,
                  u,
                  y = r.styles.length,
                  g = r.lvl;
                for (p = 0; p < y; p += 1) {
                  h = r.sh._mdf || s;
                  if (r.styles[p].lvl < g) {
                    m = e.reset();
                    d = g - r.styles[p].lvl;
                    u = r.transformers.length - 1;
                    for (; !h && d > 0; ) {
                      h = r.transformers[u].mProps._mdf || h;
                      d -= 1;
                      u -= 1;
                    }
                    if (h) {
                      d = g - r.styles[p].lvl;
                      u = r.transformers.length - 1;
                      for (; d > 0; ) {
                        c = r.transformers[u].mProps.v.props;
                        m.transform(
                          c[0],
                          c[1],
                          c[2],
                          c[3],
                          c[4],
                          c[5],
                          c[6],
                          c[7],
                          c[8],
                          c[9],
                          c[10],
                          c[11],
                          c[12],
                          c[13],
                          c[14],
                          c[15]
                        );
                        d -= 1;
                        u -= 1;
                      }
                    }
                  } else m = t;
                  n = (f = r.sh.paths)._length;
                  if (h) {
                    o = "";
                    for (a = 0; a < n; a += 1)
                      (l = f.shapes[a]) &&
                        l._length &&
                        (o += buildShapeString(l, l._length, l.c, m));
                    r.caches[p] = o;
                  } else o = r.caches[p];
                  r.styles[p].d += !0 === i.hd ? "" : o;
                  r.styles[p]._mdf = h || r.styles[p]._mdf;
                }
              }
              function a(t, e, i) {
                var r = e.style;
                (e.c._mdf || i) &&
                  r.pElem.setAttribute(
                    "fill",
                    "rgb(" +
                      bmFloor(e.c.v[0]) +
                      "," +
                      bmFloor(e.c.v[1]) +
                      "," +
                      bmFloor(e.c.v[2]) +
                      ")"
                  );
                (e.o._mdf || i) && r.pElem.setAttribute("fill-opacity", e.o.v);
              }
              function n(t, e, i) {
                o(t, e, i);
                h(0, e, i);
              }
              function o(t, e, i) {
                var r,
                  s,
                  a,
                  n,
                  o = e.gf,
                  h = e.g._hasOpacity,
                  l = e.s.v,
                  p = e.e.v;
                if (e.o._mdf || i) {
                  var f = "gf" === t.ty ? "fill-opacity" : "stroke-opacity";
                  e.style.pElem.setAttribute(f, e.o.v);
                }
                if (e.s._mdf || i) {
                  var m = 1 === t.t ? "x1" : "cx",
                    c = "x1" === m ? "y1" : "cy";
                  o.setAttribute(m, l[0]);
                  o.setAttribute(c, l[1]);
                  if (h && !e.g._collapsable) {
                    e.of.setAttribute(m, l[0]);
                    e.of.setAttribute(c, l[1]);
                  }
                }
                if (e.g._cmdf || i) {
                  r = e.cst;
                  var d = e.g.c;
                  a = r.length;
                  for (s = 0; s < a; s += 1) {
                    (n = r[s]).setAttribute("offset", d[4 * s] + "%");
                    n.setAttribute(
                      "stop-color",
                      "rgb(" +
                        d[4 * s + 1] +
                        "," +
                        d[4 * s + 2] +
                        "," +
                        d[4 * s + 3] +
                        ")"
                    );
                  }
                }
                if (h && (e.g._omdf || i)) {
                  var u = e.g.o;
                  a = (r = e.g._collapsable ? e.cst : e.ost).length;
                  for (s = 0; s < a; s += 1) {
                    n = r[s];
                    e.g._collapsable ||
                      n.setAttribute("offset", u[2 * s] + "%");
                    n.setAttribute("stop-opacity", u[2 * s + 1]);
                  }
                }
                if (1 === t.t) {
                  if (e.e._mdf || i) {
                    o.setAttribute("x2", p[0]);
                    o.setAttribute("y2", p[1]);
                    if (h && !e.g._collapsable) {
                      e.of.setAttribute("x2", p[0]);
                      e.of.setAttribute("y2", p[1]);
                    }
                  }
                } else {
                  var y;
                  if (e.s._mdf || e.e._mdf || i) {
                    y = Math.sqrt(
                      Math.pow(l[0] - p[0], 2) + Math.pow(l[1] - p[1], 2)
                    );
                    o.setAttribute("r", y);
                    h && !e.g._collapsable && e.of.setAttribute("r", y);
                  }
                  if (e.e._mdf || e.h._mdf || e.a._mdf || i) {
                    y ||
                      (y = Math.sqrt(
                        Math.pow(l[0] - p[0], 2) + Math.pow(l[1] - p[1], 2)
                      ));
                    var g = Math.atan2(p[1] - l[1], p[0] - l[0]),
                      v = e.h.v;
                    v >= 1 ? (v = 0.99) : v <= -1 && (v = -0.99);
                    var b = y * v,
                      P = Math.cos(g + e.a.v) * b + l[0],
                      E = Math.sin(g + e.a.v) * b + l[1];
                    o.setAttribute("fx", P);
                    o.setAttribute("fy", E);
                    if (h && !e.g._collapsable) {
                      e.of.setAttribute("fx", P);
                      e.of.setAttribute("fy", E);
                    }
                  }
                }
              }
              function h(t, e, i) {
                var r = e.style,
                  s = e.d;
                if (s && (s._mdf || i) && s.dashStr) {
                  r.pElem.setAttribute("stroke-dasharray", s.dashStr);
                  r.pElem.setAttribute("stroke-dashoffset", s.dashoffset[0]);
                }
                e.c &&
                  (e.c._mdf || i) &&
                  r.pElem.setAttribute(
                    "stroke",
                    "rgb(" +
                      bmFloor(e.c.v[0]) +
                      "," +
                      bmFloor(e.c.v[1]) +
                      "," +
                      bmFloor(e.c.v[2]) +
                      ")"
                  );
                (e.o._mdf || i) &&
                  r.pElem.setAttribute("stroke-opacity", e.o.v);
                if (e.w._mdf || i) {
                  r.pElem.setAttribute("stroke-width", e.w.v);
                  r.msElem && r.msElem.setAttribute("stroke-width", e.w.v);
                }
              }
              return {
                createRenderFunction: function (t) {
                  switch (t.ty) {
                    case "fl":
                      return a;
                    case "gf":
                      return o;
                    case "gs":
                      return n;
                    case "st":
                      return h;
                    case "sh":
                    case "el":
                    case "rc":
                    case "sr":
                      return s;
                    case "tr":
                      return i;
                    case "no":
                      return r;
                    default:
                      return null;
                  }
                },
              };
            })();
          function SVGShapeElement(t, e, i) {
            this.shapes = [];
            this.shapesData = t.shapes;
            this.stylesList = [];
            this.shapeModifiers = [];
            this.itemsData = [];
            this.processedElements = [];
            this.animatedContents = [];
            this.initElement(t, e, i);
            this.prevViewData = [];
          }
          extendPrototype(
            [
              BaseElement,
              TransformElement,
              SVGBaseElement,
              IShapeElement,
              HierarchyElement,
              FrameElement,
              RenderableDOMElement,
            ],
            SVGShapeElement
          );
          SVGShapeElement.prototype.initSecondaryElement = function () {};
          SVGShapeElement.prototype.identityMatrix = new Matrix();
          SVGShapeElement.prototype.buildExpressionInterface = function () {};
          SVGShapeElement.prototype.createContent = function () {
            this.searchShapes(
              this.shapesData,
              this.itemsData,
              this.prevViewData,
              this.layerElement,
              0,
              [],
              !0
            );
            this.filterUniqueShapes();
          };
          SVGShapeElement.prototype.filterUniqueShapes = function () {
            var t,
              e,
              i,
              r,
              s = this.shapes.length,
              a = this.stylesList.length,
              n = [],
              o = !1;
            for (i = 0; i < a; i += 1) {
              r = this.stylesList[i];
              o = !1;
              n.length = 0;
              for (t = 0; t < s; t += 1)
                if (-1 !== (e = this.shapes[t]).styles.indexOf(r)) {
                  n.push(e);
                  o = e._isAnimated || o;
                }
              n.length > 1 && o && this.setShapesAsAnimated(n);
            }
          };
          SVGShapeElement.prototype.setShapesAsAnimated = function (t) {
            var e,
              i = t.length;
            for (e = 0; e < i; e += 1) t[e].setAsAnimated();
          };
          SVGShapeElement.prototype.createStyleElement = function (t, e) {
            var i,
              r = new SVGStyleData(t, e),
              s = r.pElem;
            if ("st" === t.ty) i = new SVGStrokeStyleData(this, t, r);
            else if ("fl" === t.ty) i = new SVGFillStyleData(this, t, r);
            else if ("gf" === t.ty || "gs" === t.ty) {
              i = new (
                "gf" === t.ty
                  ? SVGGradientFillStyleData
                  : SVGGradientStrokeStyleData
              )(this, t, r);
              this.globalData.defs.appendChild(i.gf);
              if (i.maskId) {
                this.globalData.defs.appendChild(i.ms);
                this.globalData.defs.appendChild(i.of);
                s.setAttribute(
                  "mask",
                  "url(" + getLocationHref() + "#" + i.maskId + ")"
                );
              }
            } else "no" === t.ty && (i = new SVGNoStyleData(this, t, r));
            if ("st" === t.ty || "gs" === t.ty) {
              s.setAttribute("stroke-linecap", lineCapEnum[t.lc || 2]);
              s.setAttribute("stroke-linejoin", lineJoinEnum[t.lj || 2]);
              s.setAttribute("fill-opacity", "0");
              1 === t.lj && s.setAttribute("stroke-miterlimit", t.ml);
            }
            2 === t.r && s.setAttribute("fill-rule", "evenodd");
            t.ln && s.setAttribute("id", t.ln);
            t.cl && s.setAttribute("class", t.cl);
            t.bm && (s.style["mix-blend-mode"] = getBlendMode(t.bm));
            this.stylesList.push(r);
            this.addToAnimatedContents(t, i);
            return i;
          };
          SVGShapeElement.prototype.createGroupElement = function (t) {
            var e = new ShapeGroupData();
            t.ln && e.gr.setAttribute("id", t.ln);
            t.cl && e.gr.setAttribute("class", t.cl);
            t.bm && (e.gr.style["mix-blend-mode"] = getBlendMode(t.bm));
            return e;
          };
          SVGShapeElement.prototype.createTransformElement = function (t, e) {
            var i = TransformPropertyFactory.getTransformProperty(
                this,
                t,
                this
              ),
              r = new SVGTransformData(i, i.o, e);
            this.addToAnimatedContents(t, r);
            return r;
          };
          SVGShapeElement.prototype.createShapeElement = function (t, e, i) {
            var r = 4;
            "rc" === t.ty
              ? (r = 5)
              : "el" === t.ty
              ? (r = 6)
              : "sr" === t.ty && (r = 7);
            var s = new SVGShapeData(
              e,
              i,
              ShapePropertyFactory.getShapeProp(this, t, r, this)
            );
            this.shapes.push(s);
            this.addShapeToModifiers(s);
            this.addToAnimatedContents(t, s);
            return s;
          };
          SVGShapeElement.prototype.addToAnimatedContents = function (t, e) {
            for (var i = 0, r = this.animatedContents.length; i < r; ) {
              if (this.animatedContents[i].element === e) return;
              i += 1;
            }
            this.animatedContents.push({
              fn: SVGElementsRenderer.createRenderFunction(t),
              element: e,
              data: t,
            });
          };
          SVGShapeElement.prototype.setElementStyles = function (t) {
            var e,
              i = t.styles,
              r = this.stylesList.length;
            for (e = 0; e < r; e += 1)
              this.stylesList[e].closed || i.push(this.stylesList[e]);
          };
          SVGShapeElement.prototype.reloadShapes = function () {
            this._isFirstFrame = !0;
            var t,
              e = this.itemsData.length;
            for (t = 0; t < e; t += 1) this.prevViewData[t] = this.itemsData[t];
            this.searchShapes(
              this.shapesData,
              this.itemsData,
              this.prevViewData,
              this.layerElement,
              0,
              [],
              !0
            );
            this.filterUniqueShapes();
            e = this.dynamicProperties.length;
            for (t = 0; t < e; t += 1) this.dynamicProperties[t].getValue();
            this.renderModifiers();
          };
          SVGShapeElement.prototype.searchShapes = function (
            t,
            e,
            i,
            r,
            s,
            a,
            n
          ) {
            var o,
              h,
              l,
              p,
              f,
              m,
              c = [].concat(a),
              d = t.length - 1,
              u = [],
              y = [];
            for (o = d; o >= 0; o -= 1) {
              (m = this.searchProcessedElement(t[o]))
                ? (e[o] = i[m - 1])
                : (t[o]._render = n);
              if (
                "fl" === t[o].ty ||
                "st" === t[o].ty ||
                "gf" === t[o].ty ||
                "gs" === t[o].ty ||
                "no" === t[o].ty
              ) {
                m
                  ? (e[o].style.closed = !1)
                  : (e[o] = this.createStyleElement(t[o], s));
                t[o]._render &&
                  e[o].style.pElem.parentNode !== r &&
                  r.appendChild(e[o].style.pElem);
                u.push(e[o].style);
              } else if ("gr" === t[o].ty) {
                if (m) {
                  l = e[o].it.length;
                  for (h = 0; h < l; h += 1) e[o].prevViewData[h] = e[o].it[h];
                } else e[o] = this.createGroupElement(t[o]);
                this.searchShapes(
                  t[o].it,
                  e[o].it,
                  e[o].prevViewData,
                  e[o].gr,
                  s + 1,
                  c,
                  n
                );
                t[o]._render &&
                  e[o].gr.parentNode !== r &&
                  r.appendChild(e[o].gr);
              } else if ("tr" === t[o].ty) {
                m || (e[o] = this.createTransformElement(t[o], r));
                p = e[o].transform;
                c.push(p);
              } else if (
                "sh" === t[o].ty ||
                "rc" === t[o].ty ||
                "el" === t[o].ty ||
                "sr" === t[o].ty
              ) {
                m || (e[o] = this.createShapeElement(t[o], c, s));
                this.setElementStyles(e[o]);
              } else if (
                "tm" === t[o].ty ||
                "rd" === t[o].ty ||
                "ms" === t[o].ty ||
                "pb" === t[o].ty
              ) {
                if (m) (f = e[o]).closed = !1;
                else {
                  (f = ShapeModifiers.getModifier(t[o].ty)).init(this, t[o]);
                  e[o] = f;
                  this.shapeModifiers.push(f);
                }
                y.push(f);
              } else if ("rp" === t[o].ty) {
                if (m) (f = e[o]).closed = !0;
                else {
                  f = ShapeModifiers.getModifier(t[o].ty);
                  e[o] = f;
                  f.init(this, t, o, e);
                  this.shapeModifiers.push(f);
                  n = !1;
                }
                y.push(f);
              }
              this.addProcessedElement(t[o], o + 1);
            }
            d = u.length;
            for (o = 0; o < d; o += 1) u[o].closed = !0;
            d = y.length;
            for (o = 0; o < d; o += 1) y[o].closed = !0;
          };
          SVGShapeElement.prototype.renderInnerContent = function () {
            this.renderModifiers();
            var t,
              e = this.stylesList.length;
            for (t = 0; t < e; t += 1) this.stylesList[t].reset();
            this.renderShape();
            for (t = 0; t < e; t += 1)
              if (this.stylesList[t]._mdf || this._isFirstFrame) {
                if (this.stylesList[t].msElem) {
                  this.stylesList[t].msElem.setAttribute(
                    "d",
                    this.stylesList[t].d
                  );
                  this.stylesList[t].d = "M0 0" + this.stylesList[t].d;
                }
                this.stylesList[t].pElem.setAttribute(
                  "d",
                  this.stylesList[t].d || "M0 0"
                );
              }
          };
          SVGShapeElement.prototype.renderShape = function () {
            var t,
              e,
              i = this.animatedContents.length;
            for (t = 0; t < i; t += 1) {
              e = this.animatedContents[t];
              (this._isFirstFrame || e.element._isAnimated) &&
                !0 !== e.data &&
                e.fn(e.data, e.element, this._isFirstFrame);
            }
          };
          SVGShapeElement.prototype.destroy = function () {
            this.destroyBaseElement();
            this.shapesData = null;
            this.itemsData = null;
          };
          function LetterProps(t, e, i, r, s, a) {
            this.o = t;
            this.sw = e;
            this.sc = i;
            this.fc = r;
            this.m = s;
            this.p = a;
            this._mdf = { o: !0, sw: !!e, sc: !!i, fc: !!r, m: !0, p: !0 };
          }
          LetterProps.prototype.update = function (t, e, i, r, s, a) {
            this._mdf.o = !1;
            this._mdf.sw = !1;
            this._mdf.sc = !1;
            this._mdf.fc = !1;
            this._mdf.m = !1;
            this._mdf.p = !1;
            var n = !1;
            if (this.o !== t) {
              this.o = t;
              this._mdf.o = !0;
              n = !0;
            }
            if (this.sw !== e) {
              this.sw = e;
              this._mdf.sw = !0;
              n = !0;
            }
            if (this.sc !== i) {
              this.sc = i;
              this._mdf.sc = !0;
              n = !0;
            }
            if (this.fc !== r) {
              this.fc = r;
              this._mdf.fc = !0;
              n = !0;
            }
            if (this.m !== s) {
              this.m = s;
              this._mdf.m = !0;
              n = !0;
            }
            if (
              a.length &&
              (this.p[0] !== a[0] ||
                this.p[1] !== a[1] ||
                this.p[4] !== a[4] ||
                this.p[5] !== a[5] ||
                this.p[12] !== a[12] ||
                this.p[13] !== a[13])
            ) {
              this.p = a;
              this._mdf.p = !0;
              n = !0;
            }
            return n;
          };
          function TextProperty(t, e) {
            this._frameId = initialDefaultFrame;
            this.pv = "";
            this.v = "";
            this.kf = !1;
            this._isFirstFrame = !0;
            this._mdf = !1;
            this.data = e;
            this.elem = t;
            this.comp = this.elem.comp;
            this.keysIndex = 0;
            this.canResize = !1;
            this.minimumFontSize = 1;
            this.effectsSequence = [];
            this.currentData = {
              ascent: 0,
              boxWidth: this.defaultBoxWidth,
              f: "",
              fStyle: "",
              fWeight: "",
              fc: "",
              j: "",
              justifyOffset: "",
              l: [],
              lh: 0,
              lineWidths: [],
              ls: "",
              of: "",
              s: "",
              sc: "",
              sw: 0,
              t: 0,
              tr: 0,
              sz: 0,
              ps: null,
              fillColorAnim: !1,
              strokeColorAnim: !1,
              strokeWidthAnim: !1,
              yOffset: 0,
              finalSize: 0,
              finalText: [],
              finalLineHeight: 0,
              __complete: !1,
            };
            this.copyData(this.currentData, this.data.d.k[0].s);
            this.searchProperty() || this.completeTextData(this.currentData);
          }
          TextProperty.prototype.defaultBoxWidth = [0, 0];
          TextProperty.prototype.copyData = function (t, e) {
            for (var i in e)
              Object.prototype.hasOwnProperty.call(e, i) && (t[i] = e[i]);
            return t;
          };
          TextProperty.prototype.setCurrentData = function (t) {
            t.__complete || this.completeTextData(t);
            this.currentData = t;
            this.currentData.boxWidth =
              this.currentData.boxWidth || this.defaultBoxWidth;
            this._mdf = !0;
          };
          TextProperty.prototype.searchProperty = function () {
            return this.searchKeyframes();
          };
          TextProperty.prototype.searchKeyframes = function () {
            this.kf = this.data.d.k.length > 1;
            this.kf && this.addEffect(this.getKeyframeValue.bind(this));
            return this.kf;
          };
          TextProperty.prototype.addEffect = function (t) {
            this.effectsSequence.push(t);
            this.elem.addDynamicProperty(this);
          };
          TextProperty.prototype.getValue = function (t) {
            if (
              (this.elem.globalData.frameId !== this.frameId &&
                this.effectsSequence.length) ||
              t
            ) {
              this.currentData.t = this.data.d.k[this.keysIndex].s.t;
              var e = this.currentData,
                i = this.keysIndex;
              if (this.lock) this.setCurrentData(this.currentData);
              else {
                this.lock = !0;
                this._mdf = !1;
                var r,
                  s = this.effectsSequence.length,
                  a = t || this.data.d.k[this.keysIndex].s;
                for (r = 0; r < s; r += 1)
                  a =
                    i !== this.keysIndex
                      ? this.effectsSequence[r](a, a.t)
                      : this.effectsSequence[r](this.currentData, a.t);
                e !== a && this.setCurrentData(a);
                this.v = this.currentData;
                this.pv = this.v;
                this.lock = !1;
                this.frameId = this.elem.globalData.frameId;
              }
            }
          };
          TextProperty.prototype.getKeyframeValue = function () {
            for (
              var t = this.data.d.k,
                e = this.elem.comp.renderedFrame,
                i = 0,
                r = t.length;
              i <= r - 1 && !(i === r - 1 || t[i + 1].t > e);

            )
              i += 1;
            this.keysIndex !== i && (this.keysIndex = i);
            return this.data.d.k[this.keysIndex].s;
          };
          TextProperty.prototype.buildFinalText = function (t) {
            for (var e, i, r = [], s = 0, a = t.length, n = !1; s < a; ) {
              e = t.charCodeAt(s);
              if (FontManager.isCombinedCharacter(e))
                r[r.length - 1] += t.charAt(s);
              else if (e >= 55296 && e <= 56319)
                if ((i = t.charCodeAt(s + 1)) >= 56320 && i <= 57343) {
                  if (n || FontManager.isModifier(e, i)) {
                    r[r.length - 1] += t.substr(s, 2);
                    n = !1;
                  } else r.push(t.substr(s, 2));
                  s += 1;
                } else r.push(t.charAt(s));
              else if (e > 56319) {
                i = t.charCodeAt(s + 1);
                if (FontManager.isZeroWidthJoiner(e, i)) {
                  n = !0;
                  r[r.length - 1] += t.substr(s, 2);
                  s += 1;
                } else r.push(t.charAt(s));
              } else if (FontManager.isZeroWidthJoiner(e)) {
                r[r.length - 1] += t.charAt(s);
                n = !0;
              } else r.push(t.charAt(s));
              s += 1;
            }
            return r;
          };
          TextProperty.prototype.completeTextData = function (t) {
            t.__complete = !0;
            var e,
              i,
              r,
              s,
              a,
              n,
              o,
              h = this.elem.globalData.fontManager,
              l = this.data,
              p = [],
              f = 0,
              m = l.m.g,
              c = 0,
              d = 0,
              u = 0,
              y = [],
              g = 0,
              v = 0,
              b = h.getFontByName(t.f),
              P = 0,
              E = getFontProperties(b);
            t.fWeight = E.weight;
            t.fStyle = E.style;
            t.finalSize = t.s;
            t.finalText = this.buildFinalText(t.t);
            i = t.finalText.length;
            t.finalLineHeight = t.lh;
            var x,
              S = (t.tr / 1e3) * t.finalSize;
            if (t.sz)
              for (var _, C, A = !0, T = t.sz[0], k = t.sz[1]; A; ) {
                _ = 0;
                g = 0;
                i = (C = this.buildFinalText(t.t)).length;
                S = (t.tr / 1e3) * t.finalSize;
                var D = -1;
                for (e = 0; e < i; e += 1) {
                  x = C[e].charCodeAt(0);
                  r = !1;
                  if (" " === C[e]) D = e;
                  else if (13 === x || 3 === x) {
                    g = 0;
                    r = !0;
                    _ += t.finalLineHeight || 1.2 * t.finalSize;
                  }
                  if (h.chars) {
                    o = h.getCharData(C[e], b.fStyle, b.fFamily);
                    P = r ? 0 : (o.w * t.finalSize) / 100;
                  } else P = h.measureText(C[e], t.f, t.finalSize);
                  if (g + P > T && " " !== C[e]) {
                    -1 === D ? (i += 1) : (e = D);
                    _ += t.finalLineHeight || 1.2 * t.finalSize;
                    C.splice(e, D === e ? 1 : 0, "\r");
                    D = -1;
                    g = 0;
                  } else {
                    g += P;
                    g += S;
                  }
                }
                _ += (b.ascent * t.finalSize) / 100;
                if (
                  this.canResize &&
                  t.finalSize > this.minimumFontSize &&
                  k < _
                ) {
                  t.finalSize -= 1;
                  t.finalLineHeight = (t.finalSize * t.lh) / t.s;
                } else {
                  t.finalText = C;
                  i = t.finalText.length;
                  A = !1;
                }
              }
            g = -S;
            P = 0;
            var M,
              F = 0;
            for (e = 0; e < i; e += 1) {
              r = !1;
              if (13 === (x = (M = t.finalText[e]).charCodeAt(0)) || 3 === x) {
                F = 0;
                y.push(g);
                v = g > v ? g : v;
                g = -2 * S;
                s = "";
                r = !0;
                u += 1;
              } else s = M;
              if (h.chars) {
                o = h.getCharData(M, b.fStyle, h.getFontByName(t.f).fFamily);
                P = r ? 0 : (o.w * t.finalSize) / 100;
              } else P = h.measureText(s, t.f, t.finalSize);
              if (" " === M) F += P + S;
              else {
                g += P + S + F;
                F = 0;
              }
              p.push({
                l: P,
                an: P,
                add: c,
                n: r,
                anIndexes: [],
                val: s,
                line: u,
                animatorJustifyOffset: 0,
              });
              if (2 == m) {
                c += P;
                if ("" === s || " " === s || e === i - 1) {
                  ("" !== s && " " !== s) || (c -= P);
                  for (; d <= e; ) {
                    p[d].an = c;
                    p[d].ind = f;
                    p[d].extra = P;
                    d += 1;
                  }
                  f += 1;
                  c = 0;
                }
              } else if (3 == m) {
                c += P;
                if ("" === s || e === i - 1) {
                  "" === s && (c -= P);
                  for (; d <= e; ) {
                    p[d].an = c;
                    p[d].ind = f;
                    p[d].extra = P;
                    d += 1;
                  }
                  c = 0;
                  f += 1;
                }
              } else {
                p[f].ind = f;
                p[f].extra = 0;
                f += 1;
              }
            }
            t.l = p;
            v = g > v ? g : v;
            y.push(g);
            if (t.sz) {
              t.boxWidth = t.sz[0];
              t.justifyOffset = 0;
            } else {
              t.boxWidth = v;
              switch (t.j) {
                case 1:
                  t.justifyOffset = -t.boxWidth;
                  break;
                case 2:
                  t.justifyOffset = -t.boxWidth / 2;
                  break;
                default:
                  t.justifyOffset = 0;
              }
            }
            t.lineWidths = y;
            var w,
              I,
              V,
              B,
              R = l.a;
            n = R.length;
            var L = [];
            for (a = 0; a < n; a += 1) {
              (w = R[a]).a.sc && (t.strokeColorAnim = !0);
              w.a.sw && (t.strokeWidthAnim = !0);
              (w.a.fc || w.a.fh || w.a.fs || w.a.fb) && (t.fillColorAnim = !0);
              B = 0;
              V = w.s.b;
              for (e = 0; e < i; e += 1) {
                (I = p[e]).anIndexes[a] = B;
                if (
                  (1 == V && "" !== I.val) ||
                  (2 == V && "" !== I.val && " " !== I.val) ||
                  (3 == V && (I.n || " " == I.val || e == i - 1)) ||
                  (4 == V && (I.n || e == i - 1))
                ) {
                  1 === w.s.rn && L.push(B);
                  B += 1;
                }
              }
              l.a[a].s.totalChars = B;
              var G,
                z = -1;
              if (1 === w.s.rn)
                for (e = 0; e < i; e += 1) {
                  if (z != (I = p[e]).anIndexes[a]) {
                    z = I.anIndexes[a];
                    G = L.splice(Math.floor(Math.random() * L.length), 1)[0];
                  }
                  I.anIndexes[a] = G;
                }
            }
            t.yOffset = t.finalLineHeight || 1.2 * t.finalSize;
            t.ls = t.ls || 0;
            t.ascent = (b.ascent * t.finalSize) / 100;
          };
          TextProperty.prototype.updateDocumentData = function (t, e) {
            e = void 0 === e ? this.keysIndex : e;
            var i = this.copyData({}, this.data.d.k[e].s);
            i = this.copyData(i, t);
            this.data.d.k[e].s = i;
            this.recalculate(e);
            this.elem.addDynamicProperty(this);
          };
          TextProperty.prototype.recalculate = function (t) {
            var e = this.data.d.k[t].s;
            e.__complete = !1;
            this.keysIndex = 0;
            this._isFirstFrame = !0;
            this.getValue(e);
          };
          TextProperty.prototype.canResizeFont = function (t) {
            this.canResize = t;
            this.recalculate(this.keysIndex);
            this.elem.addDynamicProperty(this);
          };
          TextProperty.prototype.setMinimumFontSize = function (t) {
            this.minimumFontSize = Math.floor(t) || 1;
            this.recalculate(this.keysIndex);
            this.elem.addDynamicProperty(this);
          };
          var TextSelectorProp = (function () {
            var t = Math.max,
              e = Math.min,
              i = Math.floor;
            function r(t, e) {
              this._currentTextLength = -1;
              this.k = !1;
              this.data = e;
              this.elem = t;
              this.comp = t.comp;
              this.finalS = 0;
              this.finalE = 0;
              this.initDynamicPropertyContainer(t);
              this.s = PropertyFactory.getProp(t, e.s || { k: 0 }, 0, 0, this);
              this.e =
                "e" in e
                  ? PropertyFactory.getProp(t, e.e, 0, 0, this)
                  : { v: 100 };
              this.o = PropertyFactory.getProp(t, e.o || { k: 0 }, 0, 0, this);
              this.xe = PropertyFactory.getProp(
                t,
                e.xe || { k: 0 },
                0,
                0,
                this
              );
              this.ne = PropertyFactory.getProp(
                t,
                e.ne || { k: 0 },
                0,
                0,
                this
              );
              this.sm = PropertyFactory.getProp(
                t,
                e.sm || { k: 100 },
                0,
                0,
                this
              );
              this.a = PropertyFactory.getProp(t, e.a, 0, 0.01, this);
              this.dynamicProperties.length || this.getValue();
            }
            r.prototype = {
              getMult: function (r) {
                this._currentTextLength !==
                  this.elem.textProperty.currentData.l.length &&
                  this.getValue();
                var s = 0,
                  a = 0,
                  n = 1,
                  o = 1;
                this.ne.v > 0 ? (s = this.ne.v / 100) : (a = -this.ne.v / 100);
                this.xe.v > 0
                  ? (n = 1 - this.xe.v / 100)
                  : (o = 1 + this.xe.v / 100);
                var h = BezierFactory.getBezierEasing(s, a, n, o).get,
                  l = 0,
                  p = this.finalS,
                  f = this.finalE,
                  m = this.data.sh;
                if (2 === m)
                  l = h(
                    (l =
                      f === p
                        ? r >= f
                          ? 1
                          : 0
                        : t(0, e(0.5 / (f - p) + (r - p) / (f - p), 1)))
                  );
                else if (3 === m)
                  l = h(
                    (l =
                      f === p
                        ? r >= f
                          ? 0
                          : 1
                        : 1 - t(0, e(0.5 / (f - p) + (r - p) / (f - p), 1)))
                  );
                else if (4 === m) {
                  f === p
                    ? (l = 0)
                    : (l = t(0, e(0.5 / (f - p) + (r - p) / (f - p), 1))) < 0.5
                    ? (l *= 2)
                    : (l = 1 - 2 * (l - 0.5));
                  l = h(l);
                } else if (5 === m) {
                  if (f === p) l = 0;
                  else {
                    var c = f - p,
                      d = -c / 2 + (r = e(t(0, r + 0.5 - p), f - p)),
                      u = c / 2;
                    l = Math.sqrt(1 - (d * d) / (u * u));
                  }
                  l = h(l);
                } else if (6 === m) {
                  if (f === p) l = 0;
                  else {
                    r = e(t(0, r + 0.5 - p), f - p);
                    l =
                      (1 + Math.cos(Math.PI + (2 * Math.PI * r) / (f - p))) / 2;
                  }
                  l = h(l);
                } else {
                  r >= i(p) &&
                    (l = t(0, e(r - p < 0 ? e(f, 1) - (p - r) : f - r, 1)));
                  l = h(l);
                }
                if (100 !== this.sm.v) {
                  var y = 0.01 * this.sm.v;
                  0 === y && (y = 1e-8);
                  var g = 0.5 - 0.5 * y;
                  l < g ? (l = 0) : (l = (l - g) / y) > 1 && (l = 1);
                }
                return l * this.a.v;
              },
              getValue: function (t) {
                this.iterateDynamicProperties();
                this._mdf = t || this._mdf;
                this._currentTextLength =
                  this.elem.textProperty.currentData.l.length || 0;
                t && 2 === this.data.r && (this.e.v = this._currentTextLength);
                var e = 2 === this.data.r ? 1 : 100 / this.data.totalChars,
                  i = this.o.v / e,
                  r = this.s.v / e + i,
                  s = this.e.v / e + i;
                if (r > s) {
                  var a = r;
                  r = s;
                  s = a;
                }
                this.finalS = r;
                this.finalE = s;
              },
            };
            extendPrototype([DynamicPropertyContainer], r);
            return {
              getTextSelectorProp: function (t, e, i) {
                return new r(t, e, i);
              },
            };
          })();
          function TextAnimatorDataProperty(t, e, i) {
            var r = { propType: !1 },
              s = PropertyFactory.getProp,
              a = e.a;
            this.a = {
              r: a.r ? s(t, a.r, 0, degToRads, i) : r,
              rx: a.rx ? s(t, a.rx, 0, degToRads, i) : r,
              ry: a.ry ? s(t, a.ry, 0, degToRads, i) : r,
              sk: a.sk ? s(t, a.sk, 0, degToRads, i) : r,
              sa: a.sa ? s(t, a.sa, 0, degToRads, i) : r,
              s: a.s ? s(t, a.s, 1, 0.01, i) : r,
              a: a.a ? s(t, a.a, 1, 0, i) : r,
              o: a.o ? s(t, a.o, 0, 0.01, i) : r,
              p: a.p ? s(t, a.p, 1, 0, i) : r,
              sw: a.sw ? s(t, a.sw, 0, 0, i) : r,
              sc: a.sc ? s(t, a.sc, 1, 0, i) : r,
              fc: a.fc ? s(t, a.fc, 1, 0, i) : r,
              fh: a.fh ? s(t, a.fh, 0, 0, i) : r,
              fs: a.fs ? s(t, a.fs, 0, 0.01, i) : r,
              fb: a.fb ? s(t, a.fb, 0, 0.01, i) : r,
              t: a.t ? s(t, a.t, 0, 0, i) : r,
            };
            this.s = TextSelectorProp.getTextSelectorProp(t, e.s, i);
            this.s.t = e.s.t;
          }
          function TextAnimatorProperty(t, e, i) {
            this._isFirstFrame = !0;
            this._hasMaskedPath = !1;
            this._frameId = -1;
            this._textData = t;
            this._renderType = e;
            this._elem = i;
            this._animatorsData = createSizedArray(this._textData.a.length);
            this._pathData = {};
            this._moreOptions = { alignment: {} };
            this.renderedLetters = [];
            this.lettersChangedFlag = !1;
            this.initDynamicPropertyContainer(i);
          }
          TextAnimatorProperty.prototype.searchProperties = function () {
            var t,
              e,
              i = this._textData.a.length,
              r = PropertyFactory.getProp;
            for (t = 0; t < i; t += 1) {
              e = this._textData.a[t];
              this._animatorsData[t] = new TextAnimatorDataProperty(
                this._elem,
                e,
                this
              );
            }
            if (this._textData.p && "m" in this._textData.p) {
              this._pathData = {
                a: r(this._elem, this._textData.p.a, 0, 0, this),
                f: r(this._elem, this._textData.p.f, 0, 0, this),
                l: r(this._elem, this._textData.p.l, 0, 0, this),
                r: r(this._elem, this._textData.p.r, 0, 0, this),
                p: r(this._elem, this._textData.p.p, 0, 0, this),
                m: this._elem.maskManager.getMaskProperty(this._textData.p.m),
              };
              this._hasMaskedPath = !0;
            } else this._hasMaskedPath = !1;
            this._moreOptions.alignment = r(
              this._elem,
              this._textData.m.a,
              1,
              0,
              this
            );
          };
          TextAnimatorProperty.prototype.getMeasures = function (t, e) {
            this.lettersChangedFlag = e;
            if (
              this._mdf ||
              this._isFirstFrame ||
              e ||
              (this._hasMaskedPath && this._pathData.m._mdf)
            ) {
              this._isFirstFrame = !1;
              var i,
                r,
                s,
                a,
                n,
                o,
                h,
                l,
                p,
                f,
                m,
                c,
                d,
                u,
                y,
                g,
                v,
                b,
                P,
                E = this._moreOptions.alignment.v,
                x = this._animatorsData,
                S = this._textData,
                _ = this.mHelper,
                C = this._renderType,
                A = this.renderedLetters.length,
                T = t.l;
              if (this._hasMaskedPath) {
                P = this._pathData.m;
                if (!this._pathData.n || this._pathData._mdf) {
                  var k,
                    D = P.v;
                  this._pathData.r.v && (D = D.reverse());
                  n = { tLength: 0, segments: [] };
                  a = D._length - 1;
                  g = 0;
                  for (s = 0; s < a; s += 1) {
                    k = bez.buildBezierData(
                      D.v[s],
                      D.v[s + 1],
                      [D.o[s][0] - D.v[s][0], D.o[s][1] - D.v[s][1]],
                      [
                        D.i[s + 1][0] - D.v[s + 1][0],
                        D.i[s + 1][1] - D.v[s + 1][1],
                      ]
                    );
                    n.tLength += k.segmentLength;
                    n.segments.push(k);
                    g += k.segmentLength;
                  }
                  s = a;
                  if (P.v.c) {
                    k = bez.buildBezierData(
                      D.v[s],
                      D.v[0],
                      [D.o[s][0] - D.v[s][0], D.o[s][1] - D.v[s][1]],
                      [D.i[0][0] - D.v[0][0], D.i[0][1] - D.v[0][1]]
                    );
                    n.tLength += k.segmentLength;
                    n.segments.push(k);
                    g += k.segmentLength;
                  }
                  this._pathData.pi = n;
                }
                n = this._pathData.pi;
                o = this._pathData.f.v;
                m = 0;
                f = 1;
                l = 0;
                p = !0;
                u = n.segments;
                if (o < 0 && P.v.c) {
                  n.tLength < Math.abs(o) && (o = -Math.abs(o) % n.tLength);
                  f = (d = u[(m = u.length - 1)].points).length - 1;
                  for (; o < 0; ) {
                    o += d[f].partialLength;
                    (f -= 1) < 0 && (f = (d = u[(m -= 1)].points).length - 1);
                  }
                }
                c = (d = u[m].points)[f - 1];
                y = (h = d[f]).partialLength;
              }
              a = T.length;
              i = 0;
              r = 0;
              var M,
                F,
                w,
                I,
                V,
                B = 1.2 * t.finalSize * 0.714,
                R = !0;
              w = x.length;
              var L,
                G,
                z,
                N,
                O,
                H,
                j,
                q,
                W,
                $,
                Y,
                X,
                K = -1,
                J = o,
                Z = m,
                U = f,
                Q = -1,
                tt = "",
                et = this.defaultPropsArray;
              if (2 === t.j || 1 === t.j) {
                var it = 0,
                  rt = 0,
                  st = 2 === t.j ? -0.5 : -1,
                  at = 0,
                  nt = !0;
                for (s = 0; s < a; s += 1)
                  if (T[s].n) {
                    it && (it += rt);
                    for (; at < s; ) {
                      T[at].animatorJustifyOffset = it;
                      at += 1;
                    }
                    it = 0;
                    nt = !0;
                  } else {
                    for (F = 0; F < w; F += 1)
                      if ((M = x[F].a).t.propType) {
                        nt && 2 === t.j && (rt += M.t.v * st);
                        (V = x[F].s.getMult(
                          T[s].anIndexes[F],
                          S.a[F].s.totalChars
                        )).length
                          ? (it += M.t.v * V[0] * st)
                          : (it += M.t.v * V * st);
                      }
                    nt = !1;
                  }
                it && (it += rt);
                for (; at < s; ) {
                  T[at].animatorJustifyOffset = it;
                  at += 1;
                }
              }
              for (s = 0; s < a; s += 1) {
                _.reset();
                N = 1;
                if (T[s].n) {
                  i = 0;
                  r += t.yOffset;
                  r += R ? 1 : 0;
                  o = J;
                  R = !1;
                  if (this._hasMaskedPath) {
                    f = U;
                    c = (d = u[(m = Z)].points)[f - 1];
                    y = (h = d[f]).partialLength;
                    l = 0;
                  }
                  tt = "";
                  Y = "";
                  W = "";
                  X = "";
                  et = this.defaultPropsArray;
                } else {
                  if (this._hasMaskedPath) {
                    if (Q !== T[s].line) {
                      switch (t.j) {
                        case 1:
                          o += g - t.lineWidths[T[s].line];
                          break;
                        case 2:
                          o += (g - t.lineWidths[T[s].line]) / 2;
                      }
                      Q = T[s].line;
                    }
                    if (K !== T[s].ind) {
                      T[K] && (o += T[K].extra);
                      o += T[s].an / 2;
                      K = T[s].ind;
                    }
                    o += E[0] * T[s].an * 0.005;
                    var ot = 0;
                    for (F = 0; F < w; F += 1) {
                      (M = x[F].a).p.propType &&
                        ((V = x[F].s.getMult(
                          T[s].anIndexes[F],
                          S.a[F].s.totalChars
                        )).length
                          ? (ot += M.p.v[0] * V[0])
                          : (ot += M.p.v[0] * V));
                      M.a.propType &&
                        ((V = x[F].s.getMult(
                          T[s].anIndexes[F],
                          S.a[F].s.totalChars
                        )).length
                          ? (ot += M.a.v[0] * V[0])
                          : (ot += M.a.v[0] * V));
                    }
                    p = !0;
                    if (this._pathData.a.v) {
                      o =
                        0.5 * T[0].an +
                        ((g -
                          this._pathData.f.v -
                          0.5 * T[0].an -
                          0.5 * T[T.length - 1].an) *
                          K) /
                          (a - 1);
                      o += this._pathData.f.v;
                    }
                    for (; p; )
                      if (l + y >= o + ot || !d) {
                        v = (o + ot - l) / h.partialLength;
                        G = c.point[0] + (h.point[0] - c.point[0]) * v;
                        z = c.point[1] + (h.point[1] - c.point[1]) * v;
                        _.translate(-E[0] * T[s].an * 0.005, -E[1] * B * 0.01);
                        p = !1;
                      } else if (d) {
                        l += h.partialLength;
                        if ((f += 1) >= d.length) {
                          f = 0;
                          if (u[(m += 1)]) d = u[m].points;
                          else if (P.v.c) {
                            f = 0;
                            d = u[(m = 0)].points;
                          } else {
                            l -= h.partialLength;
                            d = null;
                          }
                        }
                        if (d) {
                          c = h;
                          y = (h = d[f]).partialLength;
                        }
                      }
                    L = T[s].an / 2 - T[s].add;
                    _.translate(-L, 0, 0);
                  } else {
                    L = T[s].an / 2 - T[s].add;
                    _.translate(-L, 0, 0);
                    _.translate(-E[0] * T[s].an * 0.005, -E[1] * B * 0.01, 0);
                  }
                  for (F = 0; F < w; F += 1)
                    if ((M = x[F].a).t.propType) {
                      V = x[F].s.getMult(
                        T[s].anIndexes[F],
                        S.a[F].s.totalChars
                      );
                      (0 === i && 0 === t.j) ||
                        (this._hasMaskedPath
                          ? V.length
                            ? (o += M.t.v * V[0])
                            : (o += M.t.v * V)
                          : V.length
                          ? (i += M.t.v * V[0])
                          : (i += M.t.v * V));
                    }
                  t.strokeWidthAnim && (H = t.sw || 0);
                  t.strokeColorAnim &&
                    (O = t.sc ? [t.sc[0], t.sc[1], t.sc[2]] : [0, 0, 0]);
                  t.fillColorAnim && t.fc && (j = [t.fc[0], t.fc[1], t.fc[2]]);
                  for (F = 0; F < w; F += 1)
                    (M = x[F].a).a.propType &&
                      ((V = x[F].s.getMult(
                        T[s].anIndexes[F],
                        S.a[F].s.totalChars
                      )).length
                        ? _.translate(
                            -M.a.v[0] * V[0],
                            -M.a.v[1] * V[1],
                            M.a.v[2] * V[2]
                          )
                        : _.translate(
                            -M.a.v[0] * V,
                            -M.a.v[1] * V,
                            M.a.v[2] * V
                          ));
                  for (F = 0; F < w; F += 1)
                    (M = x[F].a).s.propType &&
                      ((V = x[F].s.getMult(
                        T[s].anIndexes[F],
                        S.a[F].s.totalChars
                      )).length
                        ? _.scale(
                            1 + (M.s.v[0] - 1) * V[0],
                            1 + (M.s.v[1] - 1) * V[1],
                            1
                          )
                        : _.scale(
                            1 + (M.s.v[0] - 1) * V,
                            1 + (M.s.v[1] - 1) * V,
                            1
                          ));
                  for (F = 0; F < w; F += 1) {
                    M = x[F].a;
                    V = x[F].s.getMult(T[s].anIndexes[F], S.a[F].s.totalChars);
                    M.sk.propType &&
                      (V.length
                        ? _.skewFromAxis(-M.sk.v * V[0], M.sa.v * V[1])
                        : _.skewFromAxis(-M.sk.v * V, M.sa.v * V));
                    M.r.propType &&
                      (V.length
                        ? _.rotateZ(-M.r.v * V[2])
                        : _.rotateZ(-M.r.v * V));
                    M.ry.propType &&
                      (V.length
                        ? _.rotateY(M.ry.v * V[1])
                        : _.rotateY(M.ry.v * V));
                    M.rx.propType &&
                      (V.length
                        ? _.rotateX(M.rx.v * V[0])
                        : _.rotateX(M.rx.v * V));
                    M.o.propType &&
                      (V.length
                        ? (N += (M.o.v * V[0] - N) * V[0])
                        : (N += (M.o.v * V - N) * V));
                    t.strokeWidthAnim &&
                      M.sw.propType &&
                      (V.length ? (H += M.sw.v * V[0]) : (H += M.sw.v * V));
                    if (t.strokeColorAnim && M.sc.propType)
                      for (q = 0; q < 3; q += 1)
                        V.length
                          ? (O[q] += (M.sc.v[q] - O[q]) * V[0])
                          : (O[q] += (M.sc.v[q] - O[q]) * V);
                    if (t.fillColorAnim && t.fc) {
                      if (M.fc.propType)
                        for (q = 0; q < 3; q += 1)
                          V.length
                            ? (j[q] += (M.fc.v[q] - j[q]) * V[0])
                            : (j[q] += (M.fc.v[q] - j[q]) * V);
                      M.fh.propType &&
                        (j = V.length
                          ? addHueToRGB(j, M.fh.v * V[0])
                          : addHueToRGB(j, M.fh.v * V));
                      M.fs.propType &&
                        (j = V.length
                          ? addSaturationToRGB(j, M.fs.v * V[0])
                          : addSaturationToRGB(j, M.fs.v * V));
                      M.fb.propType &&
                        (j = V.length
                          ? addBrightnessToRGB(j, M.fb.v * V[0])
                          : addBrightnessToRGB(j, M.fb.v * V));
                    }
                  }
                  for (F = 0; F < w; F += 1)
                    if ((M = x[F].a).p.propType) {
                      V = x[F].s.getMult(
                        T[s].anIndexes[F],
                        S.a[F].s.totalChars
                      );
                      this._hasMaskedPath
                        ? V.length
                          ? _.translate(0, M.p.v[1] * V[0], -M.p.v[2] * V[1])
                          : _.translate(0, M.p.v[1] * V, -M.p.v[2] * V)
                        : V.length
                        ? _.translate(
                            M.p.v[0] * V[0],
                            M.p.v[1] * V[1],
                            -M.p.v[2] * V[2]
                          )
                        : _.translate(
                            M.p.v[0] * V,
                            M.p.v[1] * V,
                            -M.p.v[2] * V
                          );
                    }
                  t.strokeWidthAnim && (W = H < 0 ? 0 : H);
                  t.strokeColorAnim &&
                    ($ =
                      "rgb(" +
                      Math.round(255 * O[0]) +
                      "," +
                      Math.round(255 * O[1]) +
                      "," +
                      Math.round(255 * O[2]) +
                      ")");
                  t.fillColorAnim &&
                    t.fc &&
                    (Y =
                      "rgb(" +
                      Math.round(255 * j[0]) +
                      "," +
                      Math.round(255 * j[1]) +
                      "," +
                      Math.round(255 * j[2]) +
                      ")");
                  if (this._hasMaskedPath) {
                    _.translate(0, -t.ls);
                    _.translate(0, E[1] * B * 0.01 + r, 0);
                    if (this._pathData.p.v) {
                      b = (h.point[1] - c.point[1]) / (h.point[0] - c.point[0]);
                      var ht = (180 * Math.atan(b)) / Math.PI;
                      h.point[0] < c.point[0] && (ht += 180);
                      _.rotate((-ht * Math.PI) / 180);
                    }
                    _.translate(G, z, 0);
                    o -= E[0] * T[s].an * 0.005;
                    if (T[s + 1] && K !== T[s + 1].ind) {
                      o += T[s].an / 2;
                      o += 0.001 * t.tr * t.finalSize;
                    }
                  } else {
                    _.translate(i, r, 0);
                    t.ps && _.translate(t.ps[0], t.ps[1] + t.ascent, 0);
                    switch (t.j) {
                      case 1:
                        _.translate(
                          T[s].animatorJustifyOffset +
                            t.justifyOffset +
                            (t.boxWidth - t.lineWidths[T[s].line]),
                          0,
                          0
                        );
                        break;
                      case 2:
                        _.translate(
                          T[s].animatorJustifyOffset +
                            t.justifyOffset +
                            (t.boxWidth - t.lineWidths[T[s].line]) / 2,
                          0,
                          0
                        );
                    }
                    _.translate(0, -t.ls);
                    _.translate(L, 0, 0);
                    _.translate(E[0] * T[s].an * 0.005, E[1] * B * 0.01, 0);
                    i += T[s].l + 0.001 * t.tr * t.finalSize;
                  }
                  "html" === C
                    ? (tt = _.toCSS())
                    : "svg" === C
                    ? (tt = _.to2dCSS())
                    : (et = [
                        _.props[0],
                        _.props[1],
                        _.props[2],
                        _.props[3],
                        _.props[4],
                        _.props[5],
                        _.props[6],
                        _.props[7],
                        _.props[8],
                        _.props[9],
                        _.props[10],
                        _.props[11],
                        _.props[12],
                        _.props[13],
                        _.props[14],
                        _.props[15],
                      ]);
                  X = N;
                }
                if (A <= s) {
                  I = new LetterProps(X, W, $, Y, tt, et);
                  this.renderedLetters.push(I);
                  A += 1;
                  this.lettersChangedFlag = !0;
                } else {
                  I = this.renderedLetters[s];
                  this.lettersChangedFlag =
                    I.update(X, W, $, Y, tt, et) || this.lettersChangedFlag;
                }
              }
            }
          };
          TextAnimatorProperty.prototype.getValue = function () {
            if (this._elem.globalData.frameId !== this._frameId) {
              this._frameId = this._elem.globalData.frameId;
              this.iterateDynamicProperties();
            }
          };
          TextAnimatorProperty.prototype.mHelper = new Matrix();
          TextAnimatorProperty.prototype.defaultPropsArray = [];
          extendPrototype([DynamicPropertyContainer], TextAnimatorProperty);
          function ITextElement() {}
          ITextElement.prototype.initElement = function (t, e, i) {
            this.lettersChangedFlag = !0;
            this.initFrame();
            this.initBaseData(t, e, i);
            this.textProperty = new TextProperty(
              this,
              t.t,
              this.dynamicProperties
            );
            this.textAnimator = new TextAnimatorProperty(
              t.t,
              this.renderType,
              this
            );
            this.initTransform(t, e, i);
            this.initHierarchy();
            this.initRenderable();
            this.initRendererElement();
            this.createContainerElements();
            this.createRenderableComponents();
            this.createContent();
            this.hide();
            this.textAnimator.searchProperties(this.dynamicProperties);
          };
          ITextElement.prototype.prepareFrame = function (t) {
            this._mdf = !1;
            this.prepareRenderableFrame(t);
            this.prepareProperties(t, this.isInRange);
            if (this.textProperty._mdf || this.textProperty._isFirstFrame) {
              this.buildNewText();
              this.textProperty._isFirstFrame = !1;
              this.textProperty._mdf = !1;
            }
          };
          ITextElement.prototype.createPathShape = function (t, e) {
            var i,
              r,
              s = e.length,
              a = "";
            for (i = 0; i < s; i += 1)
              if ("sh" === e[i].ty) {
                r = e[i].ks.k;
                a += buildShapeString(r, r.i.length, !0, t);
              }
            return a;
          };
          ITextElement.prototype.updateDocumentData = function (t, e) {
            this.textProperty.updateDocumentData(t, e);
          };
          ITextElement.prototype.canResizeFont = function (t) {
            this.textProperty.canResizeFont(t);
          };
          ITextElement.prototype.setMinimumFontSize = function (t) {
            this.textProperty.setMinimumFontSize(t);
          };
          ITextElement.prototype.applyTextPropertiesToMatrix = function (
            t,
            e,
            i,
            r,
            s
          ) {
            t.ps && e.translate(t.ps[0], t.ps[1] + t.ascent, 0);
            e.translate(0, -t.ls, 0);
            switch (t.j) {
              case 1:
                e.translate(
                  t.justifyOffset + (t.boxWidth - t.lineWidths[i]),
                  0,
                  0
                );
                break;
              case 2:
                e.translate(
                  t.justifyOffset + (t.boxWidth - t.lineWidths[i]) / 2,
                  0,
                  0
                );
            }
            e.translate(r, s, 0);
          };
          ITextElement.prototype.buildColor = function (t) {
            return (
              "rgb(" +
              Math.round(255 * t[0]) +
              "," +
              Math.round(255 * t[1]) +
              "," +
              Math.round(255 * t[2]) +
              ")"
            );
          };
          ITextElement.prototype.emptyProp = new LetterProps();
          ITextElement.prototype.destroy = function () {};
          var emptyShapeData = { shapes: [] };
          function SVGTextLottieElement(t, e, i) {
            this.textSpans = [];
            this.renderType = "svg";
            this.initElement(t, e, i);
          }
          extendPrototype(
            [
              BaseElement,
              TransformElement,
              SVGBaseElement,
              HierarchyElement,
              FrameElement,
              RenderableDOMElement,
              ITextElement,
            ],
            SVGTextLottieElement
          );
          SVGTextLottieElement.prototype.createContent = function () {
            this.data.singleShape &&
              !this.globalData.fontManager.chars &&
              (this.textContainer = createNS("text"));
          };
          SVGTextLottieElement.prototype.buildTextContents = function (t) {
            for (var e = 0, i = t.length, r = [], s = ""; e < i; ) {
              if (
                t[e] === String.fromCharCode(13) ||
                t[e] === String.fromCharCode(3)
              ) {
                r.push(s);
                s = "";
              } else s += t[e];
              e += 1;
            }
            r.push(s);
            return r;
          };
          SVGTextLottieElement.prototype.buildShapeData = function (t, e) {
            if (t.shapes && t.shapes.length) {
              var i = t.shapes[0];
              if (i.it) {
                var r = i.it[i.it.length - 1];
                if (r.s) {
                  r.s.k[0] = e;
                  r.s.k[1] = e;
                }
              }
            }
            return t;
          };
          SVGTextLottieElement.prototype.buildNewText = function () {
            this.addDynamicProperty(this);
            var t,
              e,
              i = this.textProperty.currentData;
            this.renderedLetters = createSizedArray(i ? i.l.length : 0);
            i.fc
              ? this.layerElement.setAttribute("fill", this.buildColor(i.fc))
              : this.layerElement.setAttribute("fill", "rgba(0,0,0,0)");
            if (i.sc) {
              this.layerElement.setAttribute("stroke", this.buildColor(i.sc));
              this.layerElement.setAttribute("stroke-width", i.sw);
            }
            this.layerElement.setAttribute("font-size", i.finalSize);
            var r = this.globalData.fontManager.getFontByName(i.f);
            if (r.fClass) this.layerElement.setAttribute("class", r.fClass);
            else {
              this.layerElement.setAttribute("font-family", r.fFamily);
              var s = i.fWeight,
                a = i.fStyle;
              this.layerElement.setAttribute("font-style", a);
              this.layerElement.setAttribute("font-weight", s);
            }
            this.layerElement.setAttribute("aria-label", i.t);
            var n,
              o = i.l || [],
              h = !!this.globalData.fontManager.chars;
            e = o.length;
            var l = this.mHelper,
              p = this.data.singleShape,
              f = 0,
              m = 0,
              c = !0,
              d = 0.001 * i.tr * i.finalSize;
            if (!p || h || i.sz) {
              var u,
                y = this.textSpans.length;
              for (t = 0; t < e; t += 1) {
                this.textSpans[t] ||
                  (this.textSpans[t] = {
                    span: null,
                    childSpan: null,
                    glyph: null,
                  });
                if (!h || !p || 0 === t) {
                  n =
                    y > t ? this.textSpans[t].span : createNS(h ? "g" : "text");
                  if (y <= t) {
                    n.setAttribute("stroke-linecap", "butt");
                    n.setAttribute("stroke-linejoin", "round");
                    n.setAttribute("stroke-miterlimit", "4");
                    this.textSpans[t].span = n;
                    if (h) {
                      var g = createNS("g");
                      n.appendChild(g);
                      this.textSpans[t].childSpan = g;
                    }
                    this.textSpans[t].span = n;
                    this.layerElement.appendChild(n);
                  }
                  n.style.display = "inherit";
                }
                l.reset();
                if (p) {
                  if (o[t].n) {
                    f = -d;
                    m += i.yOffset;
                    m += c ? 1 : 0;
                    c = !1;
                  }
                  this.applyTextPropertiesToMatrix(i, l, o[t].line, f, m);
                  f += o[t].l || 0;
                  f += d;
                }
                if (h) {
                  var v;
                  if (
                    1 ===
                    (u = this.globalData.fontManager.getCharData(
                      i.finalText[t],
                      r.fStyle,
                      this.globalData.fontManager.getFontByName(i.f).fFamily
                    )).t
                  )
                    v = new SVGCompElement(u.data, this.globalData, this);
                  else {
                    var b = emptyShapeData;
                    u.data &&
                      u.data.shapes &&
                      (b = this.buildShapeData(u.data, i.finalSize));
                    v = new SVGShapeElement(b, this.globalData, this);
                  }
                  if (this.textSpans[t].glyph) {
                    var P = this.textSpans[t].glyph;
                    this.textSpans[t].childSpan.removeChild(P.layerElement);
                    P.destroy();
                  }
                  this.textSpans[t].glyph = v;
                  v._debug = !0;
                  v.prepareFrame(0);
                  v.renderFrame();
                  this.textSpans[t].childSpan.appendChild(v.layerElement);
                  1 === u.t &&
                    this.textSpans[t].childSpan.setAttribute(
                      "transform",
                      "scale(" +
                        i.finalSize / 100 +
                        "," +
                        i.finalSize / 100 +
                        ")"
                    );
                } else {
                  p &&
                    n.setAttribute(
                      "transform",
                      "translate(" + l.props[12] + "," + l.props[13] + ")"
                    );
                  n.textContent = o[t].val;
                  n.setAttributeNS(
                    "http://www.w3.org/XML/1998/namespace",
                    "xml:space",
                    "preserve"
                  );
                }
              }
              p && n && n.setAttribute("d", "");
            } else {
              var E = this.textContainer,
                x = "start";
              switch (i.j) {
                case 1:
                  x = "end";
                  break;
                case 2:
                  x = "middle";
                  break;
                default:
                  x = "start";
              }
              E.setAttribute("text-anchor", x);
              E.setAttribute("letter-spacing", d);
              var S = this.buildTextContents(i.finalText);
              e = S.length;
              m = i.ps ? i.ps[1] + i.ascent : 0;
              for (t = 0; t < e; t += 1) {
                (n = this.textSpans[t].span || createNS("tspan")).textContent =
                  S[t];
                n.setAttribute("x", 0);
                n.setAttribute("y", m);
                n.style.display = "inherit";
                E.appendChild(n);
                this.textSpans[t] ||
                  (this.textSpans[t] = { span: null, glyph: null });
                this.textSpans[t].span = n;
                m += i.finalLineHeight;
              }
              this.layerElement.appendChild(E);
            }
            for (; t < this.textSpans.length; ) {
              this.textSpans[t].span.style.display = "none";
              t += 1;
            }
            this._sizeChanged = !0;
          };
          SVGTextLottieElement.prototype.sourceRectAtTime = function () {
            this.prepareFrame(this.comp.renderedFrame - this.data.st);
            this.renderInnerContent();
            if (this._sizeChanged) {
              this._sizeChanged = !1;
              var t = this.layerElement.getBBox();
              this.bbox = {
                top: t.y,
                left: t.x,
                width: t.width,
                height: t.height,
              };
            }
            return this.bbox;
          };
          SVGTextLottieElement.prototype.getValue = function () {
            var t,
              e,
              i = this.textSpans.length;
            this.renderedFrame = this.comp.renderedFrame;
            for (t = 0; t < i; t += 1)
              if ((e = this.textSpans[t].glyph)) {
                e.prepareFrame(this.comp.renderedFrame - this.data.st);
                e._mdf && (this._mdf = !0);
              }
          };
          SVGTextLottieElement.prototype.renderInnerContent = function () {
            if (!this.data.singleShape || this._mdf) {
              this.textAnimator.getMeasures(
                this.textProperty.currentData,
                this.lettersChangedFlag
              );
              if (
                this.lettersChangedFlag ||
                this.textAnimator.lettersChangedFlag
              ) {
                this._sizeChanged = !0;
                var t,
                  e,
                  i,
                  r,
                  s,
                  a = this.textAnimator.renderedLetters,
                  n = this.textProperty.currentData.l;
                e = n.length;
                for (t = 0; t < e; t += 1)
                  if (!n[t].n) {
                    i = a[t];
                    r = this.textSpans[t].span;
                    (s = this.textSpans[t].glyph) && s.renderFrame();
                    i._mdf.m && r.setAttribute("transform", i.m);
                    i._mdf.o && r.setAttribute("opacity", i.o);
                    i._mdf.sw && r.setAttribute("stroke-width", i.sw);
                    i._mdf.sc && r.setAttribute("stroke", i.sc);
                    i._mdf.fc && r.setAttribute("fill", i.fc);
                  }
              }
            }
          };
          function ISolidElement(t, e, i) {
            this.initElement(t, e, i);
          }
          extendPrototype([IImageElement], ISolidElement);
          ISolidElement.prototype.createContent = function () {
            var t = createNS("rect");
            t.setAttribute("width", this.data.sw);
            t.setAttribute("height", this.data.sh);
            t.setAttribute("fill", this.data.sc);
            this.layerElement.appendChild(t);
          };
          function NullElement(t, e, i) {
            this.initFrame();
            this.initBaseData(t, e, i);
            this.initFrame();
            this.initTransform(t, e, i);
            this.initHierarchy();
          }
          NullElement.prototype.prepareFrame = function (t) {
            this.prepareProperties(t, !0);
          };
          NullElement.prototype.renderFrame = function () {};
          NullElement.prototype.getBaseElement = function () {
            return null;
          };
          NullElement.prototype.destroy = function () {};
          NullElement.prototype.sourceRectAtTime = function () {};
          NullElement.prototype.hide = function () {};
          extendPrototype(
            [BaseElement, TransformElement, HierarchyElement, FrameElement],
            NullElement
          );
          function SVGRendererBase() {}
          extendPrototype([BaseRenderer], SVGRendererBase);
          SVGRendererBase.prototype.createNull = function (t) {
            return new NullElement(t, this.globalData, this);
          };
          SVGRendererBase.prototype.createShape = function (t) {
            return new SVGShapeElement(t, this.globalData, this);
          };
          SVGRendererBase.prototype.createText = function (t) {
            return new SVGTextLottieElement(t, this.globalData, this);
          };
          SVGRendererBase.prototype.createImage = function (t) {
            return new IImageElement(t, this.globalData, this);
          };
          SVGRendererBase.prototype.createSolid = function (t) {
            return new ISolidElement(t, this.globalData, this);
          };
          SVGRendererBase.prototype.configAnimation = function (t) {
            this.svgElement.setAttribute("xmlns", "http://www.w3.org/2000/svg");
            this.renderConfig.viewBoxSize
              ? this.svgElement.setAttribute(
                  "viewBox",
                  this.renderConfig.viewBoxSize
                )
              : this.svgElement.setAttribute(
                  "viewBox",
                  "0 0 " + t.w + " " + t.h
                );
            if (!this.renderConfig.viewBoxOnly) {
              this.svgElement.setAttribute("width", t.w);
              this.svgElement.setAttribute("height", t.h);
              this.svgElement.style.width = "100%";
              this.svgElement.style.height = "100%";
              this.svgElement.style.transform = "translate3d(0,0,0)";
              this.svgElement.style.contentVisibility =
                this.renderConfig.contentVisibility;
            }
            this.renderConfig.width &&
              this.svgElement.setAttribute("width", this.renderConfig.width);
            this.renderConfig.height &&
              this.svgElement.setAttribute("height", this.renderConfig.height);
            this.renderConfig.className &&
              this.svgElement.setAttribute(
                "class",
                this.renderConfig.className
              );
            this.renderConfig.id &&
              this.svgElement.setAttribute("id", this.renderConfig.id);
            void 0 !== this.renderConfig.focusable &&
              this.svgElement.setAttribute(
                "focusable",
                this.renderConfig.focusable
              );
            this.svgElement.setAttribute(
              "preserveAspectRatio",
              this.renderConfig.preserveAspectRatio
            );
            this.animationItem.wrapper.appendChild(this.svgElement);
            var e = this.globalData.defs;
            this.setupGlobalData(t, e);
            this.globalData.progressiveLoad = this.renderConfig.progressiveLoad;
            this.data = t;
            var i = createNS("clipPath"),
              r = createNS("rect");
            r.setAttribute("width", t.w);
            r.setAttribute("height", t.h);
            r.setAttribute("x", 0);
            r.setAttribute("y", 0);
            var s = createElementID();
            i.setAttribute("id", s);
            i.appendChild(r);
            this.layerElement.setAttribute(
              "clip-path",
              "url(" + getLocationHref() + "#" + s + ")"
            );
            e.appendChild(i);
            this.layers = t.layers;
            this.elements = createSizedArray(t.layers.length);
          };
          SVGRendererBase.prototype.destroy = function () {
            this.animationItem.wrapper &&
              (this.animationItem.wrapper.innerText = "");
            this.layerElement = null;
            this.globalData.defs = null;
            var t,
              e = this.layers ? this.layers.length : 0;
            for (t = 0; t < e; t += 1)
              this.elements[t] && this.elements[t].destroy();
            this.elements.length = 0;
            this.destroyed = !0;
            this.animationItem = null;
          };
          SVGRendererBase.prototype.updateContainerSize = function () {};
          SVGRendererBase.prototype.buildItem = function (t) {
            var e = this.elements;
            if (!e[t] && 99 !== this.layers[t].ty) {
              e[t] = !0;
              var i = this.createItem(this.layers[t]);
              e[t] = i;
              if (getExpressionsPlugin()) {
                0 === this.layers[t].ty &&
                  this.globalData.projectInterface.registerComposition(i);
                i.initExpressions();
              }
              this.appendElementInPos(i, t);
              if (this.layers[t].tt)
                if (this.elements[t - 1] && !0 !== this.elements[t - 1])
                  i.setMatte(e[t - 1].layerId);
                else {
                  this.buildItem(t - 1);
                  this.addPendingElement(i);
                }
            }
          };
          SVGRendererBase.prototype.checkPendingElements = function () {
            for (; this.pendingElements.length; ) {
              var t = this.pendingElements.pop();
              t.checkParenting();
              if (t.data.tt)
                for (var e = 0, i = this.elements.length; e < i; ) {
                  if (this.elements[e] === t) {
                    t.setMatte(this.elements[e - 1].layerId);
                    break;
                  }
                  e += 1;
                }
            }
          };
          SVGRendererBase.prototype.renderFrame = function (t) {
            if (this.renderedFrame !== t && !this.destroyed) {
              null === t ? (t = this.renderedFrame) : (this.renderedFrame = t);
              this.globalData.frameNum = t;
              this.globalData.frameId += 1;
              this.globalData.projectInterface.currentFrame = t;
              this.globalData._mdf = !1;
              var e,
                i = this.layers.length;
              this.completeLayers || this.checkLayers(t);
              for (e = i - 1; e >= 0; e -= 1)
                (this.completeLayers || this.elements[e]) &&
                  this.elements[e].prepareFrame(t - this.layers[e].st);
              if (this.globalData._mdf)
                for (e = 0; e < i; e += 1)
                  (this.completeLayers || this.elements[e]) &&
                    this.elements[e].renderFrame();
            }
          };
          SVGRendererBase.prototype.appendElementInPos = function (t, e) {
            var i = t.getBaseElement();
            if (i) {
              for (var r, s = 0; s < e; ) {
                this.elements[s] &&
                  !0 !== this.elements[s] &&
                  this.elements[s].getBaseElement() &&
                  (r = this.elements[s].getBaseElement());
                s += 1;
              }
              r
                ? this.layerElement.insertBefore(i, r)
                : this.layerElement.appendChild(i);
            }
          };
          SVGRendererBase.prototype.hide = function () {
            this.layerElement.style.display = "none";
          };
          SVGRendererBase.prototype.show = function () {
            this.layerElement.style.display = "block";
          };
          function ICompElement() {}
          extendPrototype(
            [
              BaseElement,
              TransformElement,
              HierarchyElement,
              FrameElement,
              RenderableDOMElement,
            ],
            ICompElement
          );
          ICompElement.prototype.initElement = function (t, e, i) {
            this.initFrame();
            this.initBaseData(t, e, i);
            this.initTransform(t, e, i);
            this.initRenderable();
            this.initHierarchy();
            this.initRendererElement();
            this.createContainerElements();
            this.createRenderableComponents();
            (!this.data.xt && e.progressiveLoad) || this.buildAllItems();
            this.hide();
          };
          ICompElement.prototype.prepareFrame = function (t) {
            this._mdf = !1;
            this.prepareRenderableFrame(t);
            this.prepareProperties(t, this.isInRange);
            if (this.isInRange || this.data.xt) {
              if (this.tm._placeholder) this.renderedFrame = t / this.data.sr;
              else {
                var e = this.tm.v;
                e === this.data.op && (e = this.data.op - 1);
                this.renderedFrame = e;
              }
              var i,
                r = this.elements.length;
              this.completeLayers || this.checkLayers(this.renderedFrame);
              for (i = r - 1; i >= 0; i -= 1)
                if (this.completeLayers || this.elements[i]) {
                  this.elements[i].prepareFrame(
                    this.renderedFrame - this.layers[i].st
                  );
                  this.elements[i]._mdf && (this._mdf = !0);
                }
            }
          };
          ICompElement.prototype.renderInnerContent = function () {
            var t,
              e = this.layers.length;
            for (t = 0; t < e; t += 1)
              (this.completeLayers || this.elements[t]) &&
                this.elements[t].renderFrame();
          };
          ICompElement.prototype.setElements = function (t) {
            this.elements = t;
          };
          ICompElement.prototype.getElements = function () {
            return this.elements;
          };
          ICompElement.prototype.destroyElements = function () {
            var t,
              e = this.layers.length;
            for (t = 0; t < e; t += 1)
              this.elements[t] && this.elements[t].destroy();
          };
          ICompElement.prototype.destroy = function () {
            this.destroyElements();
            this.destroyBaseElement();
          };
          function SVGCompElement(t, e, i) {
            this.layers = t.layers;
            this.supports3d = !0;
            this.completeLayers = !1;
            this.pendingElements = [];
            this.elements = this.layers
              ? createSizedArray(this.layers.length)
              : [];
            this.initElement(t, e, i);
            this.tm = t.tm
              ? PropertyFactory.getProp(this, t.tm, 0, e.frameRate, this)
              : { _placeholder: !0 };
          }
          extendPrototype(
            [SVGRendererBase, ICompElement, SVGBaseElement],
            SVGCompElement
          );
          SVGCompElement.prototype.createComp = function (t) {
            return new SVGCompElement(t, this.globalData, this);
          };
          function SVGRenderer(t, e) {
            this.animationItem = t;
            this.layers = null;
            this.renderedFrame = -1;
            this.svgElement = createNS("svg");
            var i = "";
            if (e && e.title) {
              var r = createNS("title"),
                s = createElementID();
              r.setAttribute("id", s);
              r.textContent = e.title;
              this.svgElement.appendChild(r);
              i += s;
            }
            if (e && e.description) {
              var a = createNS("desc"),
                n = createElementID();
              a.setAttribute("id", n);
              a.textContent = e.description;
              this.svgElement.appendChild(a);
              i += " " + n;
            }
            i && this.svgElement.setAttribute("aria-labelledby", i);
            var o = createNS("defs");
            this.svgElement.appendChild(o);
            var h = createNS("g");
            this.svgElement.appendChild(h);
            this.layerElement = h;
            this.renderConfig = {
              preserveAspectRatio:
                (e && e.preserveAspectRatio) || "xMidYMid meet",
              imagePreserveAspectRatio:
                (e && e.imagePreserveAspectRatio) || "xMidYMid slice",
              contentVisibility: (e && e.contentVisibility) || "visible",
              progressiveLoad: (e && e.progressiveLoad) || !1,
              hideOnTransparent: !(e && !1 === e.hideOnTransparent),
              viewBoxOnly: (e && e.viewBoxOnly) || !1,
              viewBoxSize: (e && e.viewBoxSize) || !1,
              className: (e && e.className) || "",
              id: (e && e.id) || "",
              focusable: e && e.focusable,
              filterSize: {
                width: (e && e.filterSize && e.filterSize.width) || "100%",
                height: (e && e.filterSize && e.filterSize.height) || "100%",
                x: (e && e.filterSize && e.filterSize.x) || "0%",
                y: (e && e.filterSize && e.filterSize.y) || "0%",
              },
              width: e && e.width,
              height: e && e.height,
            };
            this.globalData = {
              _mdf: !1,
              frameNum: -1,
              defs: o,
              renderConfig: this.renderConfig,
            };
            this.elements = [];
            this.pendingElements = [];
            this.destroyed = !1;
            this.rendererType = "svg";
          }
          extendPrototype([SVGRendererBase], SVGRenderer);
          SVGRenderer.prototype.createComp = function (t) {
            return new SVGCompElement(t, this.globalData, this);
          };
          function CVContextData() {
            this.saved = [];
            this.cArrPos = 0;
            this.cTr = new Matrix();
            this.cO = 1;
            var t;
            this.savedOp = createTypedArray("float32", 15);
            for (t = 0; t < 15; t += 1)
              this.saved[t] = createTypedArray("float32", 16);
            this._length = 15;
          }
          CVContextData.prototype.duplicate = function () {
            var t = 2 * this._length,
              e = this.savedOp;
            this.savedOp = createTypedArray("float32", t);
            this.savedOp.set(e);
            var i = 0;
            for (i = this._length; i < t; i += 1)
              this.saved[i] = createTypedArray("float32", 16);
            this._length = t;
          };
          CVContextData.prototype.reset = function () {
            this.cArrPos = 0;
            this.cTr.reset();
            this.cO = 1;
          };
          function ShapeTransformManager() {
            this.sequences = {};
            this.sequenceList = [];
            this.transform_key_count = 0;
          }
          ShapeTransformManager.prototype = {
            addTransformSequence: function (t) {
              var e,
                i = t.length,
                r = "_";
              for (e = 0; e < i; e += 1) r += t[e].transform.key + "_";
              var s = this.sequences[r];
              if (!s) {
                s = {
                  transforms: [].concat(t),
                  finalTransform: new Matrix(),
                  _mdf: !1,
                };
                this.sequences[r] = s;
                this.sequenceList.push(s);
              }
              return s;
            },
            processSequence: function (t, e) {
              for (var i = 0, r = t.transforms.length, s = e; i < r && !e; ) {
                if (t.transforms[i].transform.mProps._mdf) {
                  s = !0;
                  break;
                }
                i += 1;
              }
              if (s) {
                var a;
                t.finalTransform.reset();
                for (i = r - 1; i >= 0; i -= 1) {
                  a = t.transforms[i].transform.mProps.v.props;
                  t.finalTransform.transform(
                    a[0],
                    a[1],
                    a[2],
                    a[3],
                    a[4],
                    a[5],
                    a[6],
                    a[7],
                    a[8],
                    a[9],
                    a[10],
                    a[11],
                    a[12],
                    a[13],
                    a[14],
                    a[15]
                  );
                }
              }
              t._mdf = s;
            },
            processSequences: function (t) {
              var e,
                i = this.sequenceList.length;
              for (e = 0; e < i; e += 1)
                this.processSequence(this.sequenceList[e], t);
            },
            getNewKey: function () {
              this.transform_key_count += 1;
              return "_" + this.transform_key_count;
            },
          };
          function CVEffects() {}
          CVEffects.prototype.renderFrame = function () {};
          function CVMaskElement(t, e) {
            this.data = t;
            this.element = e;
            this.masksProperties = this.data.masksProperties || [];
            this.viewData = createSizedArray(this.masksProperties.length);
            var i,
              r = this.masksProperties.length,
              s = !1;
            for (i = 0; i < r; i += 1) {
              "n" !== this.masksProperties[i].mode && (s = !0);
              this.viewData[i] = ShapePropertyFactory.getShapeProp(
                this.element,
                this.masksProperties[i],
                3
              );
            }
            this.hasMasks = s;
            s && this.element.addRenderableComponent(this);
          }
          CVMaskElement.prototype.renderFrame = function () {
            if (this.hasMasks) {
              var t,
                e,
                i,
                r,
                s = this.element.finalTransform.mat,
                a = this.element.canvasContext,
                n = this.masksProperties.length;
              a.beginPath();
              for (t = 0; t < n; t += 1)
                if ("n" !== this.masksProperties[t].mode) {
                  if (this.masksProperties[t].inv) {
                    a.moveTo(0, 0);
                    a.lineTo(this.element.globalData.compSize.w, 0);
                    a.lineTo(
                      this.element.globalData.compSize.w,
                      this.element.globalData.compSize.h
                    );
                    a.lineTo(0, this.element.globalData.compSize.h);
                    a.lineTo(0, 0);
                  }
                  r = this.viewData[t].v;
                  e = s.applyToPointArray(r.v[0][0], r.v[0][1], 0);
                  a.moveTo(e[0], e[1]);
                  var o,
                    h = r._length;
                  for (o = 1; o < h; o += 1) {
                    i = s.applyToTriplePoints(r.o[o - 1], r.i[o], r.v[o]);
                    a.bezierCurveTo(i[0], i[1], i[2], i[3], i[4], i[5]);
                  }
                  i = s.applyToTriplePoints(r.o[o - 1], r.i[0], r.v[0]);
                  a.bezierCurveTo(i[0], i[1], i[2], i[3], i[4], i[5]);
                }
              this.element.globalData.renderer.save(!0);
              a.clip();
            }
          };
          CVMaskElement.prototype.getMaskProperty =
            MaskElement.prototype.getMaskProperty;
          CVMaskElement.prototype.destroy = function () {
            this.element = null;
          };
          function CVBaseElement() {}
          CVBaseElement.prototype = {
            createElements: function () {},
            initRendererElement: function () {},
            createContainerElements: function () {
              this.canvasContext = this.globalData.canvasContext;
              this.renderableEffectsManager = new CVEffects(this);
            },
            createContent: function () {},
            setBlendMode: function () {
              var t = this.globalData;
              if (t.blendMode !== this.data.bm) {
                t.blendMode = this.data.bm;
                var e = getBlendMode(this.data.bm);
                t.canvasContext.globalCompositeOperation = e;
              }
            },
            createRenderableComponents: function () {
              this.maskManager = new CVMaskElement(this.data, this);
            },
            hideElement: function () {
              this.hidden ||
                (this.isInRange && !this.isTransparent) ||
                (this.hidden = !0);
            },
            showElement: function () {
              if (this.isInRange && !this.isTransparent) {
                this.hidden = !1;
                this._isFirstFrame = !0;
                this.maskManager._isFirstFrame = !0;
              }
            },
            renderFrame: function () {
              if (!this.hidden && !this.data.hd) {
                this.renderTransform();
                this.renderRenderable();
                this.setBlendMode();
                var t = 0 === this.data.ty;
                this.globalData.renderer.save(t);
                this.globalData.renderer.ctxTransform(
                  this.finalTransform.mat.props
                );
                this.globalData.renderer.ctxOpacity(
                  this.finalTransform.mProp.o.v
                );
                this.renderInnerContent();
                this.globalData.renderer.restore(t);
                this.maskManager.hasMasks &&
                  this.globalData.renderer.restore(!0);
                this._isFirstFrame && (this._isFirstFrame = !1);
              }
            },
            destroy: function () {
              this.canvasContext = null;
              this.data = null;
              this.globalData = null;
              this.maskManager.destroy();
            },
            mHelper: new Matrix(),
          };
          CVBaseElement.prototype.hide = CVBaseElement.prototype.hideElement;
          CVBaseElement.prototype.show = CVBaseElement.prototype.showElement;
          function CVShapeData(t, e, i, r) {
            this.styledShapes = [];
            this.tr = [0, 0, 0, 0, 0, 0];
            var s,
              a = 4;
            "rc" === e.ty
              ? (a = 5)
              : "el" === e.ty
              ? (a = 6)
              : "sr" === e.ty && (a = 7);
            this.sh = ShapePropertyFactory.getShapeProp(t, e, a, t);
            var n,
              o = i.length;
            for (s = 0; s < o; s += 1)
              if (!i[s].closed) {
                n = {
                  transforms: r.addTransformSequence(i[s].transforms),
                  trNodes: [],
                };
                this.styledShapes.push(n);
                i[s].elements.push(n);
              }
          }
          CVShapeData.prototype.setAsAnimated =
            SVGShapeData.prototype.setAsAnimated;
          function CVShapeElement(t, e, i) {
            this.shapes = [];
            this.shapesData = t.shapes;
            this.stylesList = [];
            this.itemsData = [];
            this.prevViewData = [];
            this.shapeModifiers = [];
            this.processedElements = [];
            this.transformsManager = new ShapeTransformManager();
            this.initElement(t, e, i);
          }
          extendPrototype(
            [
              BaseElement,
              TransformElement,
              CVBaseElement,
              IShapeElement,
              HierarchyElement,
              FrameElement,
              RenderableElement,
            ],
            CVShapeElement
          );
          CVShapeElement.prototype.initElement =
            RenderableDOMElement.prototype.initElement;
          CVShapeElement.prototype.transformHelper = { opacity: 1, _opMdf: !1 };
          CVShapeElement.prototype.dashResetter = [];
          CVShapeElement.prototype.createContent = function () {
            this.searchShapes(
              this.shapesData,
              this.itemsData,
              this.prevViewData,
              !0,
              []
            );
          };
          CVShapeElement.prototype.createStyleElement = function (t, e) {
            var i = {
                data: t,
                type: t.ty,
                preTransforms: this.transformsManager.addTransformSequence(e),
                transforms: [],
                elements: [],
                closed: !0 === t.hd,
              },
              r = {};
            if ("fl" === t.ty || "st" === t.ty) {
              r.c = PropertyFactory.getProp(this, t.c, 1, 255, this);
              r.c.k ||
                (i.co =
                  "rgb(" +
                  bmFloor(r.c.v[0]) +
                  "," +
                  bmFloor(r.c.v[1]) +
                  "," +
                  bmFloor(r.c.v[2]) +
                  ")");
            } else if ("gf" === t.ty || "gs" === t.ty) {
              r.s = PropertyFactory.getProp(this, t.s, 1, null, this);
              r.e = PropertyFactory.getProp(this, t.e, 1, null, this);
              r.h = PropertyFactory.getProp(
                this,
                t.h || { k: 0 },
                0,
                0.01,
                this
              );
              r.a = PropertyFactory.getProp(
                this,
                t.a || { k: 0 },
                0,
                degToRads,
                this
              );
              r.g = new GradientProperty(this, t.g, this);
            }
            r.o = PropertyFactory.getProp(this, t.o, 0, 0.01, this);
            if ("st" === t.ty || "gs" === t.ty) {
              i.lc = lineCapEnum[t.lc || 2];
              i.lj = lineJoinEnum[t.lj || 2];
              1 == t.lj && (i.ml = t.ml);
              r.w = PropertyFactory.getProp(this, t.w, 0, null, this);
              r.w.k || (i.wi = r.w.v);
              if (t.d) {
                var s = new DashProperty(this, t.d, "canvas", this);
                r.d = s;
                if (!r.d.k) {
                  i.da = r.d.dashArray;
                  i.do = r.d.dashoffset[0];
                }
              }
            } else i.r = 2 === t.r ? "evenodd" : "nonzero";
            this.stylesList.push(i);
            r.style = i;
            return r;
          };
          CVShapeElement.prototype.createGroupElement = function () {
            return { it: [], prevViewData: [] };
          };
          CVShapeElement.prototype.createTransformElement = function (t) {
            return {
              transform: {
                opacity: 1,
                _opMdf: !1,
                key: this.transformsManager.getNewKey(),
                op: PropertyFactory.getProp(this, t.o, 0, 0.01, this),
                mProps: TransformPropertyFactory.getTransformProperty(
                  this,
                  t,
                  this
                ),
              },
            };
          };
          CVShapeElement.prototype.createShapeElement = function (t) {
            var e = new CVShapeData(
              this,
              t,
              this.stylesList,
              this.transformsManager
            );
            this.shapes.push(e);
            this.addShapeToModifiers(e);
            return e;
          };
          CVShapeElement.prototype.reloadShapes = function () {
            this._isFirstFrame = !0;
            var t,
              e = this.itemsData.length;
            for (t = 0; t < e; t += 1) this.prevViewData[t] = this.itemsData[t];
            this.searchShapes(
              this.shapesData,
              this.itemsData,
              this.prevViewData,
              !0,
              []
            );
            e = this.dynamicProperties.length;
            for (t = 0; t < e; t += 1) this.dynamicProperties[t].getValue();
            this.renderModifiers();
            this.transformsManager.processSequences(this._isFirstFrame);
          };
          CVShapeElement.prototype.addTransformToStyleList = function (t) {
            var e,
              i = this.stylesList.length;
            for (e = 0; e < i; e += 1)
              this.stylesList[e].closed ||
                this.stylesList[e].transforms.push(t);
          };
          CVShapeElement.prototype.removeTransformFromStyleList = function () {
            var t,
              e = this.stylesList.length;
            for (t = 0; t < e; t += 1)
              this.stylesList[t].closed || this.stylesList[t].transforms.pop();
          };
          CVShapeElement.prototype.closeStyles = function (t) {
            var e,
              i = t.length;
            for (e = 0; e < i; e += 1) t[e].closed = !0;
          };
          CVShapeElement.prototype.searchShapes = function (t, e, i, r, s) {
            var a,
              n,
              o,
              h,
              l,
              p,
              f = t.length - 1,
              m = [],
              c = [],
              d = [].concat(s);
            for (a = f; a >= 0; a -= 1) {
              (h = this.searchProcessedElement(t[a]))
                ? (e[a] = i[h - 1])
                : (t[a]._shouldRender = r);
              if (
                "fl" === t[a].ty ||
                "st" === t[a].ty ||
                "gf" === t[a].ty ||
                "gs" === t[a].ty
              ) {
                h
                  ? (e[a].style.closed = !1)
                  : (e[a] = this.createStyleElement(t[a], d));
                m.push(e[a].style);
              } else if ("gr" === t[a].ty) {
                if (h) {
                  o = e[a].it.length;
                  for (n = 0; n < o; n += 1) e[a].prevViewData[n] = e[a].it[n];
                } else e[a] = this.createGroupElement(t[a]);
                this.searchShapes(t[a].it, e[a].it, e[a].prevViewData, r, d);
              } else if ("tr" === t[a].ty) {
                if (!h) {
                  p = this.createTransformElement(t[a]);
                  e[a] = p;
                }
                d.push(e[a]);
                this.addTransformToStyleList(e[a]);
              } else if (
                "sh" === t[a].ty ||
                "rc" === t[a].ty ||
                "el" === t[a].ty ||
                "sr" === t[a].ty
              )
                h || (e[a] = this.createShapeElement(t[a]));
              else if (
                "tm" === t[a].ty ||
                "rd" === t[a].ty ||
                "pb" === t[a].ty
              ) {
                if (h) (l = e[a]).closed = !1;
                else {
                  (l = ShapeModifiers.getModifier(t[a].ty)).init(this, t[a]);
                  e[a] = l;
                  this.shapeModifiers.push(l);
                }
                c.push(l);
              } else if ("rp" === t[a].ty) {
                if (h) (l = e[a]).closed = !0;
                else {
                  l = ShapeModifiers.getModifier(t[a].ty);
                  e[a] = l;
                  l.init(this, t, a, e);
                  this.shapeModifiers.push(l);
                  r = !1;
                }
                c.push(l);
              }
              this.addProcessedElement(t[a], a + 1);
            }
            this.removeTransformFromStyleList();
            this.closeStyles(m);
            f = c.length;
            for (a = 0; a < f; a += 1) c[a].closed = !0;
          };
          CVShapeElement.prototype.renderInnerContent = function () {
            this.transformHelper.opacity = 1;
            this.transformHelper._opMdf = !1;
            this.renderModifiers();
            this.transformsManager.processSequences(this._isFirstFrame);
            this.renderShape(
              this.transformHelper,
              this.shapesData,
              this.itemsData,
              !0
            );
          };
          CVShapeElement.prototype.renderShapeTransform = function (t, e) {
            if (t._opMdf || e.op._mdf || this._isFirstFrame) {
              e.opacity = t.opacity;
              e.opacity *= e.op.v;
              e._opMdf = !0;
            }
          };
          CVShapeElement.prototype.drawLayer = function () {
            var t,
              e,
              i,
              r,
              s,
              a,
              n,
              o,
              h,
              l = this.stylesList.length,
              p = this.globalData.renderer,
              f = this.globalData.canvasContext;
            for (t = 0; t < l; t += 1)
              if (
                (("st" !== (o = (h = this.stylesList[t]).type) && "gs" !== o) ||
                  0 !== h.wi) &&
                h.data._shouldRender &&
                0 !== h.coOp &&
                0 !== this.globalData.currentGlobalAlpha
              ) {
                p.save();
                a = h.elements;
                if ("st" === o || "gs" === o) {
                  f.strokeStyle = "st" === o ? h.co : h.grd;
                  f.lineWidth = h.wi;
                  f.lineCap = h.lc;
                  f.lineJoin = h.lj;
                  f.miterLimit = h.ml || 0;
                } else f.fillStyle = "fl" === o ? h.co : h.grd;
                p.ctxOpacity(h.coOp);
                "st" !== o && "gs" !== o && f.beginPath();
                p.ctxTransform(h.preTransforms.finalTransform.props);
                i = a.length;
                for (e = 0; e < i; e += 1) {
                  if ("st" === o || "gs" === o) {
                    f.beginPath();
                    if (h.da) {
                      f.setLineDash(h.da);
                      f.lineDashOffset = h.do;
                    }
                  }
                  s = (n = a[e].trNodes).length;
                  for (r = 0; r < s; r += 1)
                    "m" === n[r].t
                      ? f.moveTo(n[r].p[0], n[r].p[1])
                      : "c" === n[r].t
                      ? f.bezierCurveTo(
                          n[r].pts[0],
                          n[r].pts[1],
                          n[r].pts[2],
                          n[r].pts[3],
                          n[r].pts[4],
                          n[r].pts[5]
                        )
                      : f.closePath();
                  if ("st" === o || "gs" === o) {
                    f.stroke();
                    h.da && f.setLineDash(this.dashResetter);
                  }
                }
                "st" !== o && "gs" !== o && f.fill(h.r);
                p.restore();
              }
          };
          CVShapeElement.prototype.renderShape = function (t, e, i, r) {
            var s, a;
            a = t;
            for (s = e.length - 1; s >= 0; s -= 1)
              if ("tr" === e[s].ty) {
                a = i[s].transform;
                this.renderShapeTransform(t, a);
              } else
                "sh" === e[s].ty ||
                "el" === e[s].ty ||
                "rc" === e[s].ty ||
                "sr" === e[s].ty
                  ? this.renderPath(e[s], i[s])
                  : "fl" === e[s].ty
                  ? this.renderFill(e[s], i[s], a)
                  : "st" === e[s].ty
                  ? this.renderStroke(e[s], i[s], a)
                  : "gf" === e[s].ty || "gs" === e[s].ty
                  ? this.renderGradientFill(e[s], i[s], a)
                  : "gr" === e[s].ty
                  ? this.renderShape(a, e[s].it, i[s].it)
                  : e[s].ty;
            r && this.drawLayer();
          };
          CVShapeElement.prototype.renderStyledShape = function (t, e) {
            if (this._isFirstFrame || e._mdf || t.transforms._mdf) {
              var i,
                r,
                s,
                a = t.trNodes,
                n = e.paths,
                o = n._length;
              a.length = 0;
              var h = t.transforms.finalTransform;
              for (s = 0; s < o; s += 1) {
                var l = n.shapes[s];
                if (l && l.v) {
                  r = l._length;
                  for (i = 1; i < r; i += 1) {
                    1 === i &&
                      a.push({
                        t: "m",
                        p: h.applyToPointArray(l.v[0][0], l.v[0][1], 0),
                      });
                    a.push({
                      t: "c",
                      pts: h.applyToTriplePoints(l.o[i - 1], l.i[i], l.v[i]),
                    });
                  }
                  1 === r &&
                    a.push({
                      t: "m",
                      p: h.applyToPointArray(l.v[0][0], l.v[0][1], 0),
                    });
                  if (l.c && r) {
                    a.push({
                      t: "c",
                      pts: h.applyToTriplePoints(l.o[i - 1], l.i[0], l.v[0]),
                    });
                    a.push({ t: "z" });
                  }
                }
              }
              t.trNodes = a;
            }
          };
          CVShapeElement.prototype.renderPath = function (t, e) {
            if (!0 !== t.hd && t._shouldRender) {
              var i,
                r = e.styledShapes.length;
              for (i = 0; i < r; i += 1)
                this.renderStyledShape(e.styledShapes[i], e.sh);
            }
          };
          CVShapeElement.prototype.renderFill = function (t, e, i) {
            var r = e.style;
            (e.c._mdf || this._isFirstFrame) &&
              (r.co =
                "rgb(" +
                bmFloor(e.c.v[0]) +
                "," +
                bmFloor(e.c.v[1]) +
                "," +
                bmFloor(e.c.v[2]) +
                ")");
            (e.o._mdf || i._opMdf || this._isFirstFrame) &&
              (r.coOp = e.o.v * i.opacity);
          };
          CVShapeElement.prototype.renderGradientFill = function (t, e, i) {
            var r,
              s = e.style;
            if (
              !s.grd ||
              e.g._mdf ||
              e.s._mdf ||
              e.e._mdf ||
              (1 !== t.t && (e.h._mdf || e.a._mdf))
            ) {
              var a,
                n = this.globalData.canvasContext,
                o = e.s.v,
                h = e.e.v;
              if (1 === t.t) r = n.createLinearGradient(o[0], o[1], h[0], h[1]);
              else {
                var l = Math.sqrt(
                    Math.pow(o[0] - h[0], 2) + Math.pow(o[1] - h[1], 2)
                  ),
                  p = Math.atan2(h[1] - o[1], h[0] - o[0]),
                  f = e.h.v;
                f >= 1 ? (f = 0.99) : f <= -1 && (f = -0.99);
                var m = l * f,
                  c = Math.cos(p + e.a.v) * m + o[0],
                  d = Math.sin(p + e.a.v) * m + o[1];
                r = n.createRadialGradient(c, d, 0, o[0], o[1], l);
              }
              var u = t.g.p,
                y = e.g.c,
                g = 1;
              for (a = 0; a < u; a += 1) {
                e.g._hasOpacity && e.g._collapsable && (g = e.g.o[2 * a + 1]);
                r.addColorStop(
                  y[4 * a] / 100,
                  "rgba(" +
                    y[4 * a + 1] +
                    "," +
                    y[4 * a + 2] +
                    "," +
                    y[4 * a + 3] +
                    "," +
                    g +
                    ")"
                );
              }
              s.grd = r;
            }
            s.coOp = e.o.v * i.opacity;
          };
          CVShapeElement.prototype.renderStroke = function (t, e, i) {
            var r = e.style,
              s = e.d;
            if (s && (s._mdf || this._isFirstFrame)) {
              r.da = s.dashArray;
              r.do = s.dashoffset[0];
            }
            (e.c._mdf || this._isFirstFrame) &&
              (r.co =
                "rgb(" +
                bmFloor(e.c.v[0]) +
                "," +
                bmFloor(e.c.v[1]) +
                "," +
                bmFloor(e.c.v[2]) +
                ")");
            (e.o._mdf || i._opMdf || this._isFirstFrame) &&
              (r.coOp = e.o.v * i.opacity);
            (e.w._mdf || this._isFirstFrame) && (r.wi = e.w.v);
          };
          CVShapeElement.prototype.destroy = function () {
            this.shapesData = null;
            this.globalData = null;
            this.canvasContext = null;
            this.stylesList.length = 0;
            this.itemsData.length = 0;
          };
          function CVTextElement(t, e, i) {
            this.textSpans = [];
            this.yOffset = 0;
            this.fillColorAnim = !1;
            this.strokeColorAnim = !1;
            this.strokeWidthAnim = !1;
            this.stroke = !1;
            this.fill = !1;
            this.justifyOffset = 0;
            this.currentRender = null;
            this.renderType = "canvas";
            this.values = {
              fill: "rgba(0,0,0,0)",
              stroke: "rgba(0,0,0,0)",
              sWidth: 0,
              fValue: "",
            };
            this.initElement(t, e, i);
          }
          extendPrototype(
            [
              BaseElement,
              TransformElement,
              CVBaseElement,
              HierarchyElement,
              FrameElement,
              RenderableElement,
              ITextElement,
            ],
            CVTextElement
          );
          CVTextElement.prototype.tHelper =
            createTag("canvas").getContext("2d");
          CVTextElement.prototype.buildNewText = function () {
            var t = this.textProperty.currentData;
            this.renderedLetters = createSizedArray(t.l ? t.l.length : 0);
            var e = !1;
            if (t.fc) {
              e = !0;
              this.values.fill = this.buildColor(t.fc);
            } else this.values.fill = "rgba(0,0,0,0)";
            this.fill = e;
            var i = !1;
            if (t.sc) {
              i = !0;
              this.values.stroke = this.buildColor(t.sc);
              this.values.sWidth = t.sw;
            }
            var r,
              s,
              a,
              n,
              o,
              h,
              l,
              p,
              f,
              m,
              c,
              d,
              u = this.globalData.fontManager.getFontByName(t.f),
              y = t.l,
              g = this.mHelper;
            this.stroke = i;
            this.values.fValue =
              t.finalSize +
              "px " +
              this.globalData.fontManager.getFontByName(t.f).fFamily;
            s = t.finalText.length;
            var v = this.data.singleShape,
              b = 0.001 * t.tr * t.finalSize,
              P = 0,
              E = 0,
              x = !0,
              S = 0;
            for (r = 0; r < s; r += 1) {
              n =
                ((a = this.globalData.fontManager.getCharData(
                  t.finalText[r],
                  u.fStyle,
                  this.globalData.fontManager.getFontByName(t.f).fFamily
                )) &&
                  a.data) ||
                {};
              g.reset();
              if (v && y[r].n) {
                P = -b;
                E += t.yOffset;
                E += x ? 1 : 0;
                x = !1;
              }
              f = (l = n.shapes ? n.shapes[0].it : []).length;
              g.scale(t.finalSize / 100, t.finalSize / 100);
              v && this.applyTextPropertiesToMatrix(t, g, y[r].line, P, E);
              c = createSizedArray(f - 1);
              var _ = 0;
              for (p = 0; p < f; p += 1)
                if ("sh" === l[p].ty) {
                  h = l[p].ks.k.i.length;
                  m = l[p].ks.k;
                  d = [];
                  for (o = 1; o < h; o += 1) {
                    1 === o &&
                      d.push(
                        g.applyToX(m.v[0][0], m.v[0][1], 0),
                        g.applyToY(m.v[0][0], m.v[0][1], 0)
                      );
                    d.push(
                      g.applyToX(m.o[o - 1][0], m.o[o - 1][1], 0),
                      g.applyToY(m.o[o - 1][0], m.o[o - 1][1], 0),
                      g.applyToX(m.i[o][0], m.i[o][1], 0),
                      g.applyToY(m.i[o][0], m.i[o][1], 0),
                      g.applyToX(m.v[o][0], m.v[o][1], 0),
                      g.applyToY(m.v[o][0], m.v[o][1], 0)
                    );
                  }
                  d.push(
                    g.applyToX(m.o[o - 1][0], m.o[o - 1][1], 0),
                    g.applyToY(m.o[o - 1][0], m.o[o - 1][1], 0),
                    g.applyToX(m.i[0][0], m.i[0][1], 0),
                    g.applyToY(m.i[0][0], m.i[0][1], 0),
                    g.applyToX(m.v[0][0], m.v[0][1], 0),
                    g.applyToY(m.v[0][0], m.v[0][1], 0)
                  );
                  c[_] = d;
                  _ += 1;
                }
              if (v) {
                P += y[r].l;
                P += b;
              }
              this.textSpans[S]
                ? (this.textSpans[S].elem = c)
                : (this.textSpans[S] = { elem: c });
              S += 1;
            }
          };
          CVTextElement.prototype.renderInnerContent = function () {
            var t,
              e,
              i,
              r,
              s,
              a,
              n = this.canvasContext;
            n.font = this.values.fValue;
            n.lineCap = "butt";
            n.lineJoin = "miter";
            n.miterLimit = 4;
            this.data.singleShape ||
              this.textAnimator.getMeasures(
                this.textProperty.currentData,
                this.lettersChangedFlag
              );
            var o,
              h = this.textAnimator.renderedLetters,
              l = this.textProperty.currentData.l;
            e = l.length;
            var p,
              f,
              m = null,
              c = null,
              d = null;
            for (t = 0; t < e; t += 1)
              if (!l[t].n) {
                if ((o = h[t])) {
                  this.globalData.renderer.save();
                  this.globalData.renderer.ctxTransform(o.p);
                  this.globalData.renderer.ctxOpacity(o.o);
                }
                if (this.fill) {
                  if (o && o.fc) {
                    if (m !== o.fc) {
                      m = o.fc;
                      n.fillStyle = o.fc;
                    }
                  } else if (m !== this.values.fill) {
                    m = this.values.fill;
                    n.fillStyle = this.values.fill;
                  }
                  r = (p = this.textSpans[t].elem).length;
                  this.globalData.canvasContext.beginPath();
                  for (i = 0; i < r; i += 1) {
                    a = (f = p[i]).length;
                    this.globalData.canvasContext.moveTo(f[0], f[1]);
                    for (s = 2; s < a; s += 6)
                      this.globalData.canvasContext.bezierCurveTo(
                        f[s],
                        f[s + 1],
                        f[s + 2],
                        f[s + 3],
                        f[s + 4],
                        f[s + 5]
                      );
                  }
                  this.globalData.canvasContext.closePath();
                  this.globalData.canvasContext.fill();
                }
                if (this.stroke) {
                  if (o && o.sw) {
                    if (d !== o.sw) {
                      d = o.sw;
                      n.lineWidth = o.sw;
                    }
                  } else if (d !== this.values.sWidth) {
                    d = this.values.sWidth;
                    n.lineWidth = this.values.sWidth;
                  }
                  if (o && o.sc) {
                    if (c !== o.sc) {
                      c = o.sc;
                      n.strokeStyle = o.sc;
                    }
                  } else if (c !== this.values.stroke) {
                    c = this.values.stroke;
                    n.strokeStyle = this.values.stroke;
                  }
                  r = (p = this.textSpans[t].elem).length;
                  this.globalData.canvasContext.beginPath();
                  for (i = 0; i < r; i += 1) {
                    a = (f = p[i]).length;
                    this.globalData.canvasContext.moveTo(f[0], f[1]);
                    for (s = 2; s < a; s += 6)
                      this.globalData.canvasContext.bezierCurveTo(
                        f[s],
                        f[s + 1],
                        f[s + 2],
                        f[s + 3],
                        f[s + 4],
                        f[s + 5]
                      );
                  }
                  this.globalData.canvasContext.closePath();
                  this.globalData.canvasContext.stroke();
                }
                o && this.globalData.renderer.restore();
              }
          };
          function CVImageElement(t, e, i) {
            this.assetData = e.getAssetData(t.refId);
            this.img = e.imageLoader.getAsset(this.assetData);
            this.initElement(t, e, i);
          }
          extendPrototype(
            [
              BaseElement,
              TransformElement,
              CVBaseElement,
              HierarchyElement,
              FrameElement,
              RenderableElement,
            ],
            CVImageElement
          );
          CVImageElement.prototype.initElement =
            SVGShapeElement.prototype.initElement;
          CVImageElement.prototype.prepareFrame =
            IImageElement.prototype.prepareFrame;
          CVImageElement.prototype.createContent = function () {
            if (
              this.img.width &&
              (this.assetData.w !== this.img.width ||
                this.assetData.h !== this.img.height)
            ) {
              var t = createTag("canvas");
              t.width = this.assetData.w;
              t.height = this.assetData.h;
              var e,
                i,
                r = t.getContext("2d"),
                s = this.img.width,
                a = this.img.height,
                n = s / a,
                o = this.assetData.w / this.assetData.h,
                h =
                  this.assetData.pr ||
                  this.globalData.renderConfig.imagePreserveAspectRatio;
              (n > o && "xMidYMid slice" === h) ||
              (n < o && "xMidYMid slice" !== h)
                ? (e = (i = a) * o)
                : (i = (e = s) / o);
              r.drawImage(
                this.img,
                (s - e) / 2,
                (a - i) / 2,
                e,
                i,
                0,
                0,
                this.assetData.w,
                this.assetData.h
              );
              this.img = t;
            }
          };
          CVImageElement.prototype.renderInnerContent = function () {
            this.canvasContext.drawImage(this.img, 0, 0);
          };
          CVImageElement.prototype.destroy = function () {
            this.img = null;
          };
          function CVSolidElement(t, e, i) {
            this.initElement(t, e, i);
          }
          extendPrototype(
            [
              BaseElement,
              TransformElement,
              CVBaseElement,
              HierarchyElement,
              FrameElement,
              RenderableElement,
            ],
            CVSolidElement
          );
          CVSolidElement.prototype.initElement =
            SVGShapeElement.prototype.initElement;
          CVSolidElement.prototype.prepareFrame =
            IImageElement.prototype.prepareFrame;
          CVSolidElement.prototype.renderInnerContent = function () {
            var t = this.canvasContext;
            t.fillStyle = this.data.sc;
            t.fillRect(0, 0, this.data.sw, this.data.sh);
          };
          function CanvasRendererBase(t, e) {
            this.animationItem = t;
            this.renderConfig = {
              clearCanvas: !e || void 0 === e.clearCanvas || e.clearCanvas,
              context: (e && e.context) || null,
              progressiveLoad: (e && e.progressiveLoad) || !1,
              preserveAspectRatio:
                (e && e.preserveAspectRatio) || "xMidYMid meet",
              imagePreserveAspectRatio:
                (e && e.imagePreserveAspectRatio) || "xMidYMid slice",
              contentVisibility: (e && e.contentVisibility) || "visible",
              className: (e && e.className) || "",
              id: (e && e.id) || "",
            };
            this.renderConfig.dpr = (e && e.dpr) || 1;
            this.animationItem.wrapper &&
              (this.renderConfig.dpr =
                (e && e.dpr) || window.devicePixelRatio || 1);
            this.renderedFrame = -1;
            this.globalData = {
              frameNum: -1,
              _mdf: !1,
              renderConfig: this.renderConfig,
              currentGlobalAlpha: -1,
            };
            this.contextData = new CVContextData();
            this.elements = [];
            this.pendingElements = [];
            this.transformMat = new Matrix();
            this.completeLayers = !1;
            this.rendererType = "canvas";
          }
          extendPrototype([BaseRenderer], CanvasRendererBase);
          CanvasRendererBase.prototype.createShape = function (t) {
            return new CVShapeElement(t, this.globalData, this);
          };
          CanvasRendererBase.prototype.createText = function (t) {
            return new CVTextElement(t, this.globalData, this);
          };
          CanvasRendererBase.prototype.createImage = function (t) {
            return new CVImageElement(t, this.globalData, this);
          };
          CanvasRendererBase.prototype.createSolid = function (t) {
            return new CVSolidElement(t, this.globalData, this);
          };
          CanvasRendererBase.prototype.createNull =
            SVGRenderer.prototype.createNull;
          CanvasRendererBase.prototype.ctxTransform = function (t) {
            if (
              1 !== t[0] ||
              0 !== t[1] ||
              0 !== t[4] ||
              1 !== t[5] ||
              0 !== t[12] ||
              0 !== t[13]
            )
              if (this.renderConfig.clearCanvas) {
                this.transformMat.cloneFromProps(t);
                var e = this.contextData.cTr.props;
                this.transformMat.transform(
                  e[0],
                  e[1],
                  e[2],
                  e[3],
                  e[4],
                  e[5],
                  e[6],
                  e[7],
                  e[8],
                  e[9],
                  e[10],
                  e[11],
                  e[12],
                  e[13],
                  e[14],
                  e[15]
                );
                this.contextData.cTr.cloneFromProps(this.transformMat.props);
                var i = this.contextData.cTr.props;
                this.canvasContext.setTransform(
                  i[0],
                  i[1],
                  i[4],
                  i[5],
                  i[12],
                  i[13]
                );
              } else
                this.canvasContext.transform(
                  t[0],
                  t[1],
                  t[4],
                  t[5],
                  t[12],
                  t[13]
                );
          };
          CanvasRendererBase.prototype.ctxOpacity = function (t) {
            if (this.renderConfig.clearCanvas) {
              this.contextData.cO *= t < 0 ? 0 : t;
              if (this.globalData.currentGlobalAlpha !== this.contextData.cO) {
                this.canvasContext.globalAlpha = this.contextData.cO;
                this.globalData.currentGlobalAlpha = this.contextData.cO;
              }
            } else {
              this.canvasContext.globalAlpha *= t < 0 ? 0 : t;
              this.globalData.currentGlobalAlpha = this.contextData.cO;
            }
          };
          CanvasRendererBase.prototype.reset = function () {
            this.renderConfig.clearCanvas
              ? this.contextData.reset()
              : this.canvasContext.restore();
          };
          CanvasRendererBase.prototype.save = function (t) {
            if (this.renderConfig.clearCanvas) {
              t && this.canvasContext.save();
              var e,
                i = this.contextData.cTr.props;
              this.contextData._length <= this.contextData.cArrPos &&
                this.contextData.duplicate();
              var r = this.contextData.saved[this.contextData.cArrPos];
              for (e = 0; e < 16; e += 1) r[e] = i[e];
              this.contextData.savedOp[this.contextData.cArrPos] =
                this.contextData.cO;
              this.contextData.cArrPos += 1;
            } else this.canvasContext.save();
          };
          CanvasRendererBase.prototype.restore = function (t) {
            if (this.renderConfig.clearCanvas) {
              if (t) {
                this.canvasContext.restore();
                this.globalData.blendMode = "source-over";
              }
              this.contextData.cArrPos -= 1;
              var e,
                i = this.contextData.saved[this.contextData.cArrPos],
                r = this.contextData.cTr.props;
              for (e = 0; e < 16; e += 1) r[e] = i[e];
              this.canvasContext.setTransform(
                i[0],
                i[1],
                i[4],
                i[5],
                i[12],
                i[13]
              );
              i = this.contextData.savedOp[this.contextData.cArrPos];
              this.contextData.cO = i;
              if (this.globalData.currentGlobalAlpha !== i) {
                this.canvasContext.globalAlpha = i;
                this.globalData.currentGlobalAlpha = i;
              }
            } else this.canvasContext.restore();
          };
          CanvasRendererBase.prototype.configAnimation = function (t) {
            if (this.animationItem.wrapper) {
              this.animationItem.container = createTag("canvas");
              var e = this.animationItem.container.style;
              e.width = "100%";
              e.height = "100%";
              var i = "0px 0px 0px";
              e.transformOrigin = i;
              e.mozTransformOrigin = i;
              e.webkitTransformOrigin = i;
              e["-webkit-transform"] = i;
              e.contentVisibility = this.renderConfig.contentVisibility;
              this.animationItem.wrapper.appendChild(
                this.animationItem.container
              );
              this.canvasContext =
                this.animationItem.container.getContext("2d");
              this.renderConfig.className &&
                this.animationItem.container.setAttribute(
                  "class",
                  this.renderConfig.className
                );
              this.renderConfig.id &&
                this.animationItem.container.setAttribute(
                  "id",
                  this.renderConfig.id
                );
            } else this.canvasContext = this.renderConfig.context;
            this.data = t;
            this.layers = t.layers;
            this.transformCanvas = {
              w: t.w,
              h: t.h,
              sx: 0,
              sy: 0,
              tx: 0,
              ty: 0,
            };
            this.setupGlobalData(t, document.body);
            this.globalData.canvasContext = this.canvasContext;
            this.globalData.renderer = this;
            this.globalData.isDashed = !1;
            this.globalData.progressiveLoad = this.renderConfig.progressiveLoad;
            this.globalData.transformCanvas = this.transformCanvas;
            this.elements = createSizedArray(t.layers.length);
            this.updateContainerSize();
          };
          CanvasRendererBase.prototype.updateContainerSize = function () {
            this.reset();
            var t, e, i, r;
            if (this.animationItem.wrapper && this.animationItem.container) {
              t = this.animationItem.wrapper.offsetWidth;
              e = this.animationItem.wrapper.offsetHeight;
              this.animationItem.container.setAttribute(
                "width",
                t * this.renderConfig.dpr
              );
              this.animationItem.container.setAttribute(
                "height",
                e * this.renderConfig.dpr
              );
            } else {
              t = this.canvasContext.canvas.width * this.renderConfig.dpr;
              e = this.canvasContext.canvas.height * this.renderConfig.dpr;
            }
            if (
              -1 !== this.renderConfig.preserveAspectRatio.indexOf("meet") ||
              -1 !== this.renderConfig.preserveAspectRatio.indexOf("slice")
            ) {
              var s = this.renderConfig.preserveAspectRatio.split(" "),
                a = s[1] || "meet",
                n = s[0] || "xMidYMid",
                o = n.substr(0, 4),
                h = n.substr(4);
              i = t / e;
              if (
                ((r = this.transformCanvas.w / this.transformCanvas.h) > i &&
                  "meet" === a) ||
                (r < i && "slice" === a)
              ) {
                this.transformCanvas.sx =
                  t / (this.transformCanvas.w / this.renderConfig.dpr);
                this.transformCanvas.sy =
                  t / (this.transformCanvas.w / this.renderConfig.dpr);
              } else {
                this.transformCanvas.sx =
                  e / (this.transformCanvas.h / this.renderConfig.dpr);
                this.transformCanvas.sy =
                  e / (this.transformCanvas.h / this.renderConfig.dpr);
              }
              this.transformCanvas.tx =
                "xMid" === o &&
                ((r < i && "meet" === a) || (r > i && "slice" === a))
                  ? ((t -
                      this.transformCanvas.w * (e / this.transformCanvas.h)) /
                      2) *
                    this.renderConfig.dpr
                  : "xMax" === o &&
                    ((r < i && "meet" === a) || (r > i && "slice" === a))
                  ? (t -
                      this.transformCanvas.w * (e / this.transformCanvas.h)) *
                    this.renderConfig.dpr
                  : 0;
              this.transformCanvas.ty =
                "YMid" === h &&
                ((r > i && "meet" === a) || (r < i && "slice" === a))
                  ? ((e -
                      this.transformCanvas.h * (t / this.transformCanvas.w)) /
                      2) *
                    this.renderConfig.dpr
                  : "YMax" === h &&
                    ((r > i && "meet" === a) || (r < i && "slice" === a))
                  ? (e -
                      this.transformCanvas.h * (t / this.transformCanvas.w)) *
                    this.renderConfig.dpr
                  : 0;
            } else if ("none" === this.renderConfig.preserveAspectRatio) {
              this.transformCanvas.sx =
                t / (this.transformCanvas.w / this.renderConfig.dpr);
              this.transformCanvas.sy =
                e / (this.transformCanvas.h / this.renderConfig.dpr);
              this.transformCanvas.tx = 0;
              this.transformCanvas.ty = 0;
            } else {
              this.transformCanvas.sx = this.renderConfig.dpr;
              this.transformCanvas.sy = this.renderConfig.dpr;
              this.transformCanvas.tx = 0;
              this.transformCanvas.ty = 0;
            }
            this.transformCanvas.props = [
              this.transformCanvas.sx,
              0,
              0,
              0,
              0,
              this.transformCanvas.sy,
              0,
              0,
              0,
              0,
              1,
              0,
              this.transformCanvas.tx,
              this.transformCanvas.ty,
              0,
              1,
            ];
            this.ctxTransform(this.transformCanvas.props);
            this.canvasContext.beginPath();
            this.canvasContext.rect(
              0,
              0,
              this.transformCanvas.w,
              this.transformCanvas.h
            );
            this.canvasContext.closePath();
            this.canvasContext.clip();
            this.renderFrame(this.renderedFrame, !0);
          };
          CanvasRendererBase.prototype.destroy = function () {
            this.renderConfig.clearCanvas &&
              this.animationItem.wrapper &&
              (this.animationItem.wrapper.innerText = "");
            var t;
            for (t = (this.layers ? this.layers.length : 0) - 1; t >= 0; t -= 1)
              this.elements[t] && this.elements[t].destroy();
            this.elements.length = 0;
            this.globalData.canvasContext = null;
            this.animationItem.container = null;
            this.destroyed = !0;
          };
          CanvasRendererBase.prototype.renderFrame = function (t, e) {
            if (
              (this.renderedFrame !== t ||
                !0 !== this.renderConfig.clearCanvas ||
                e) &&
              !this.destroyed &&
              -1 !== t
            ) {
              this.renderedFrame = t;
              this.globalData.frameNum = t - this.animationItem._isFirstFrame;
              this.globalData.frameId += 1;
              this.globalData._mdf = !this.renderConfig.clearCanvas || e;
              this.globalData.projectInterface.currentFrame = t;
              var i,
                r = this.layers.length;
              this.completeLayers || this.checkLayers(t);
              for (i = 0; i < r; i += 1)
                (this.completeLayers || this.elements[i]) &&
                  this.elements[i].prepareFrame(t - this.layers[i].st);
              if (this.globalData._mdf) {
                !0 === this.renderConfig.clearCanvas
                  ? this.canvasContext.clearRect(
                      0,
                      0,
                      this.transformCanvas.w,
                      this.transformCanvas.h
                    )
                  : this.save();
                for (i = r - 1; i >= 0; i -= 1)
                  (this.completeLayers || this.elements[i]) &&
                    this.elements[i].renderFrame();
                !0 !== this.renderConfig.clearCanvas && this.restore();
              }
            }
          };
          CanvasRendererBase.prototype.buildItem = function (t) {
            var e = this.elements;
            if (!e[t] && 99 !== this.layers[t].ty) {
              var i = this.createItem(this.layers[t], this, this.globalData);
              e[t] = i;
              i.initExpressions();
            }
          };
          CanvasRendererBase.prototype.checkPendingElements = function () {
            for (; this.pendingElements.length; )
              this.pendingElements.pop().checkParenting();
          };
          CanvasRendererBase.prototype.hide = function () {
            this.animationItem.container.style.display = "none";
          };
          CanvasRendererBase.prototype.show = function () {
            this.animationItem.container.style.display = "block";
          };
          function CVCompElement(t, e, i) {
            this.completeLayers = !1;
            this.layers = t.layers;
            this.pendingElements = [];
            this.elements = createSizedArray(this.layers.length);
            this.initElement(t, e, i);
            this.tm = t.tm
              ? PropertyFactory.getProp(this, t.tm, 0, e.frameRate, this)
              : { _placeholder: !0 };
          }
          extendPrototype(
            [CanvasRendererBase, ICompElement, CVBaseElement],
            CVCompElement
          );
          CVCompElement.prototype.renderInnerContent = function () {
            var t,
              e = this.canvasContext;
            e.beginPath();
            e.moveTo(0, 0);
            e.lineTo(this.data.w, 0);
            e.lineTo(this.data.w, this.data.h);
            e.lineTo(0, this.data.h);
            e.lineTo(0, 0);
            e.clip();
            for (t = this.layers.length - 1; t >= 0; t -= 1)
              (this.completeLayers || this.elements[t]) &&
                this.elements[t].renderFrame();
          };
          CVCompElement.prototype.destroy = function () {
            var t;
            for (t = this.layers.length - 1; t >= 0; t -= 1)
              this.elements[t] && this.elements[t].destroy();
            this.layers = null;
            this.elements = null;
          };
          CVCompElement.prototype.createComp = function (t) {
            return new CVCompElement(t, this.globalData, this);
          };
          function CanvasRenderer(t, e) {
            this.animationItem = t;
            this.renderConfig = {
              clearCanvas: !e || void 0 === e.clearCanvas || e.clearCanvas,
              context: (e && e.context) || null,
              progressiveLoad: (e && e.progressiveLoad) || !1,
              preserveAspectRatio:
                (e && e.preserveAspectRatio) || "xMidYMid meet",
              imagePreserveAspectRatio:
                (e && e.imagePreserveAspectRatio) || "xMidYMid slice",
              contentVisibility: (e && e.contentVisibility) || "visible",
              className: (e && e.className) || "",
              id: (e && e.id) || "",
            };
            this.renderConfig.dpr = (e && e.dpr) || 1;
            this.animationItem.wrapper &&
              (this.renderConfig.dpr =
                (e && e.dpr) || window.devicePixelRatio || 1);
            this.renderedFrame = -1;
            this.globalData = {
              frameNum: -1,
              _mdf: !1,
              renderConfig: this.renderConfig,
              currentGlobalAlpha: -1,
            };
            this.contextData = new CVContextData();
            this.elements = [];
            this.pendingElements = [];
            this.transformMat = new Matrix();
            this.completeLayers = !1;
            this.rendererType = "canvas";
          }
          extendPrototype([CanvasRendererBase], CanvasRenderer);
          CanvasRenderer.prototype.createComp = function (t) {
            return new CVCompElement(t, this.globalData, this);
          };
          function HBaseElement() {}
          HBaseElement.prototype = {
            checkBlendMode: function () {},
            initRendererElement: function () {
              this.baseElement = createTag(this.data.tg || "div");
              if (this.data.hasMask) {
                this.svgElement = createNS("svg");
                this.layerElement = createNS("g");
                this.maskedElement = this.layerElement;
                this.svgElement.appendChild(this.layerElement);
                this.baseElement.appendChild(this.svgElement);
              } else this.layerElement = this.baseElement;
              styleDiv(this.baseElement);
            },
            createContainerElements: function () {
              this.renderableEffectsManager = new CVEffects(this);
              this.transformedElement = this.baseElement;
              this.maskedElement = this.layerElement;
              this.data.ln &&
                this.layerElement.setAttribute("id", this.data.ln);
              this.data.cl &&
                this.layerElement.setAttribute("class", this.data.cl);
              0 !== this.data.bm && this.setBlendMode();
            },
            renderElement: function () {
              var t = this.transformedElement
                ? this.transformedElement.style
                : {};
              if (this.finalTransform._matMdf) {
                var e = this.finalTransform.mat.toCSS();
                t.transform = e;
                t.webkitTransform = e;
              }
              this.finalTransform._opMdf &&
                (t.opacity = this.finalTransform.mProp.o.v);
            },
            renderFrame: function () {
              if (!this.data.hd && !this.hidden) {
                this.renderTransform();
                this.renderRenderable();
                this.renderElement();
                this.renderInnerContent();
                this._isFirstFrame && (this._isFirstFrame = !1);
              }
            },
            destroy: function () {
              this.layerElement = null;
              this.transformedElement = null;
              this.matteElement && (this.matteElement = null);
              if (this.maskManager) {
                this.maskManager.destroy();
                this.maskManager = null;
              }
            },
            createRenderableComponents: function () {
              this.maskManager = new MaskElement(
                this.data,
                this,
                this.globalData
              );
            },
            addEffects: function () {},
            setMatte: function () {},
          };
          HBaseElement.prototype.getBaseElement =
            SVGBaseElement.prototype.getBaseElement;
          HBaseElement.prototype.destroyBaseElement =
            HBaseElement.prototype.destroy;
          HBaseElement.prototype.buildElementParenting =
            BaseRenderer.prototype.buildElementParenting;
          function HSolidElement(t, e, i) {
            this.initElement(t, e, i);
          }
          extendPrototype(
            [
              BaseElement,
              TransformElement,
              HBaseElement,
              HierarchyElement,
              FrameElement,
              RenderableDOMElement,
            ],
            HSolidElement
          );
          HSolidElement.prototype.createContent = function () {
            var t;
            if (this.data.hasMask) {
              (t = createNS("rect")).setAttribute("width", this.data.sw);
              t.setAttribute("height", this.data.sh);
              t.setAttribute("fill", this.data.sc);
              this.svgElement.setAttribute("width", this.data.sw);
              this.svgElement.setAttribute("height", this.data.sh);
            } else {
              (t = createTag("div")).style.width = this.data.sw + "px";
              t.style.height = this.data.sh + "px";
              t.style.backgroundColor = this.data.sc;
            }
            this.layerElement.appendChild(t);
          };
          function HShapeElement(t, e, i) {
            this.shapes = [];
            this.shapesData = t.shapes;
            this.stylesList = [];
            this.shapeModifiers = [];
            this.itemsData = [];
            this.processedElements = [];
            this.animatedContents = [];
            this.shapesContainer = createNS("g");
            this.initElement(t, e, i);
            this.prevViewData = [];
            this.currentBBox = { x: 999999, y: -999999, h: 0, w: 0 };
          }
          extendPrototype(
            [
              BaseElement,
              TransformElement,
              HSolidElement,
              SVGShapeElement,
              HBaseElement,
              HierarchyElement,
              FrameElement,
              RenderableElement,
            ],
            HShapeElement
          );
          HShapeElement.prototype._renderShapeFrame =
            HShapeElement.prototype.renderInnerContent;
          HShapeElement.prototype.createContent = function () {
            var t;
            this.baseElement.style.fontSize = 0;
            if (this.data.hasMask) {
              this.layerElement.appendChild(this.shapesContainer);
              t = this.svgElement;
            } else {
              t = createNS("svg");
              var e = this.comp.data
                ? this.comp.data
                : this.globalData.compSize;
              t.setAttribute("width", e.w);
              t.setAttribute("height", e.h);
              t.appendChild(this.shapesContainer);
              this.layerElement.appendChild(t);
            }
            this.searchShapes(
              this.shapesData,
              this.itemsData,
              this.prevViewData,
              this.shapesContainer,
              0,
              [],
              !0
            );
            this.filterUniqueShapes();
            this.shapeCont = t;
          };
          HShapeElement.prototype.getTransformedPoint = function (t, e) {
            var i,
              r = t.length;
            for (i = 0; i < r; i += 1)
              e = t[i].mProps.v.applyToPointArray(e[0], e[1], 0);
            return e;
          };
          HShapeElement.prototype.calculateShapeBoundingBox = function (t, e) {
            var i,
              r,
              s,
              a,
              n,
              o = t.sh.v,
              h = t.transformers,
              l = o._length;
            if (!(l <= 1)) {
              for (i = 0; i < l - 1; i += 1) {
                r = this.getTransformedPoint(h, o.v[i]);
                s = this.getTransformedPoint(h, o.o[i]);
                a = this.getTransformedPoint(h, o.i[i + 1]);
                n = this.getTransformedPoint(h, o.v[i + 1]);
                this.checkBounds(r, s, a, n, e);
              }
              if (o.c) {
                r = this.getTransformedPoint(h, o.v[i]);
                s = this.getTransformedPoint(h, o.o[i]);
                a = this.getTransformedPoint(h, o.i[0]);
                n = this.getTransformedPoint(h, o.v[0]);
                this.checkBounds(r, s, a, n, e);
              }
            }
          };
          HShapeElement.prototype.checkBounds = function (t, e, i, r, s) {
            this.getBoundsOfCurve(t, e, i, r);
            var a = this.shapeBoundingBox;
            s.x = bmMin(a.left, s.x);
            s.xMax = bmMax(a.right, s.xMax);
            s.y = bmMin(a.top, s.y);
            s.yMax = bmMax(a.bottom, s.yMax);
          };
          HShapeElement.prototype.shapeBoundingBox = {
            left: 0,
            right: 0,
            top: 0,
            bottom: 0,
          };
          HShapeElement.prototype.tempBoundingBox = {
            x: 0,
            xMax: 0,
            y: 0,
            yMax: 0,
            width: 0,
            height: 0,
          };
          HShapeElement.prototype.getBoundsOfCurve = function (t, e, i, r) {
            for (
              var s,
                a,
                n,
                o,
                h,
                l,
                p,
                f = [
                  [t[0], r[0]],
                  [t[1], r[1]],
                ],
                m = 0;
              m < 2;
              ++m
            ) {
              a = 6 * t[m] - 12 * e[m] + 6 * i[m];
              s = -3 * t[m] + 9 * e[m] - 9 * i[m] + 3 * r[m];
              n = 3 * e[m] - 3 * t[m];
              a |= 0;
              n |= 0;
              if (0 == (s |= 0) && 0 === a);
              else if (0 === s)
                (o = -n / a) > 0 &&
                  o < 1 &&
                  f[m].push(this.calculateF(o, t, e, i, r, m));
              else if ((h = a * a - 4 * n * s) >= 0) {
                (l = (-a + bmSqrt(h)) / (2 * s)) > 0 &&
                  l < 1 &&
                  f[m].push(this.calculateF(l, t, e, i, r, m));
                (p = (-a - bmSqrt(h)) / (2 * s)) > 0 &&
                  p < 1 &&
                  f[m].push(this.calculateF(p, t, e, i, r, m));
              }
            }
            this.shapeBoundingBox.left = bmMin.apply(null, f[0]);
            this.shapeBoundingBox.top = bmMin.apply(null, f[1]);
            this.shapeBoundingBox.right = bmMax.apply(null, f[0]);
            this.shapeBoundingBox.bottom = bmMax.apply(null, f[1]);
          };
          HShapeElement.prototype.calculateF = function (t, e, i, r, s, a) {
            return (
              bmPow(1 - t, 3) * e[a] +
              3 * bmPow(1 - t, 2) * t * i[a] +
              3 * (1 - t) * bmPow(t, 2) * r[a] +
              bmPow(t, 3) * s[a]
            );
          };
          HShapeElement.prototype.calculateBoundingBox = function (t, e) {
            var i,
              r = t.length;
            for (i = 0; i < r; i += 1)
              t[i] && t[i].sh
                ? this.calculateShapeBoundingBox(t[i], e)
                : t[i] && t[i].it
                ? this.calculateBoundingBox(t[i].it, e)
                : t[i] &&
                  t[i].style &&
                  t[i].w &&
                  this.expandStrokeBoundingBox(t[i].w, e);
          };
          HShapeElement.prototype.expandStrokeBoundingBox = function (t, e) {
            var i = 0;
            if (t.keyframes) {
              for (var r = 0; r < t.keyframes.length; r += 1) {
                var s = t.keyframes[r].s;
                s > i && (i = s);
              }
              i *= t.mult;
            } else i = t.v * t.mult;
            e.x -= i;
            e.xMax += i;
            e.y -= i;
            e.yMax += i;
          };
          HShapeElement.prototype.currentBoxContains = function (t) {
            return (
              this.currentBBox.x <= t.x &&
              this.currentBBox.y <= t.y &&
              this.currentBBox.width + this.currentBBox.x >= t.x + t.width &&
              this.currentBBox.height + this.currentBBox.y >= t.y + t.height
            );
          };
          HShapeElement.prototype.renderInnerContent = function () {
            this._renderShapeFrame();
            if (!this.hidden && (this._isFirstFrame || this._mdf)) {
              var t = this.tempBoundingBox,
                e = 999999;
              t.x = e;
              t.xMax = -e;
              t.y = e;
              t.yMax = -e;
              this.calculateBoundingBox(this.itemsData, t);
              t.width = t.xMax < t.x ? 0 : t.xMax - t.x;
              t.height = t.yMax < t.y ? 0 : t.yMax - t.y;
              if (this.currentBoxContains(t)) return;
              var i = !1;
              if (this.currentBBox.w !== t.width) {
                this.currentBBox.w = t.width;
                this.shapeCont.setAttribute("width", t.width);
                i = !0;
              }
              if (this.currentBBox.h !== t.height) {
                this.currentBBox.h = t.height;
                this.shapeCont.setAttribute("height", t.height);
                i = !0;
              }
              if (
                i ||
                this.currentBBox.x !== t.x ||
                this.currentBBox.y !== t.y
              ) {
                this.currentBBox.w = t.width;
                this.currentBBox.h = t.height;
                this.currentBBox.x = t.x;
                this.currentBBox.y = t.y;
                this.shapeCont.setAttribute(
                  "viewBox",
                  this.currentBBox.x +
                    " " +
                    this.currentBBox.y +
                    " " +
                    this.currentBBox.w +
                    " " +
                    this.currentBBox.h
                );
                var r = this.shapeCont.style,
                  s =
                    "translate(" +
                    this.currentBBox.x +
                    "px," +
                    this.currentBBox.y +
                    "px)";
                r.transform = s;
                r.webkitTransform = s;
              }
            }
          };
          function HTextElement(t, e, i) {
            this.textSpans = [];
            this.textPaths = [];
            this.currentBBox = { x: 999999, y: -999999, h: 0, w: 0 };
            this.renderType = "svg";
            this.isMasked = !1;
            this.initElement(t, e, i);
          }
          extendPrototype(
            [
              BaseElement,
              TransformElement,
              HBaseElement,
              HierarchyElement,
              FrameElement,
              RenderableDOMElement,
              ITextElement,
            ],
            HTextElement
          );
          HTextElement.prototype.createContent = function () {
            this.isMasked = this.checkMasks();
            if (this.isMasked) {
              this.renderType = "svg";
              this.compW = this.comp.data.w;
              this.compH = this.comp.data.h;
              this.svgElement.setAttribute("width", this.compW);
              this.svgElement.setAttribute("height", this.compH);
              var t = createNS("g");
              this.maskedElement.appendChild(t);
              this.innerElem = t;
            } else {
              this.renderType = "html";
              this.innerElem = this.layerElement;
            }
            this.checkParenting();
          };
          HTextElement.prototype.buildNewText = function () {
            var t = this.textProperty.currentData;
            this.renderedLetters = createSizedArray(t.l ? t.l.length : 0);
            var e = this.innerElem.style,
              i = t.fc ? this.buildColor(t.fc) : "rgba(0,0,0,0)";
            e.fill = i;
            e.color = i;
            if (t.sc) {
              e.stroke = this.buildColor(t.sc);
              e.strokeWidth = t.sw + "px";
            }
            var r,
              s,
              a = this.globalData.fontManager.getFontByName(t.f);
            if (!this.globalData.fontManager.chars) {
              e.fontSize = t.finalSize + "px";
              e.lineHeight = t.finalSize + "px";
              if (a.fClass) this.innerElem.className = a.fClass;
              else {
                e.fontFamily = a.fFamily;
                var n = t.fWeight,
                  o = t.fStyle;
                e.fontStyle = o;
                e.fontWeight = n;
              }
            }
            var h,
              l,
              p,
              f = t.l;
            s = f.length;
            var m,
              c = this.mHelper,
              d = "",
              u = 0;
            for (r = 0; r < s; r += 1) {
              if (this.globalData.fontManager.chars) {
                if (this.textPaths[u]) h = this.textPaths[u];
                else {
                  (h = createNS("path")).setAttribute(
                    "stroke-linecap",
                    lineCapEnum[1]
                  );
                  h.setAttribute("stroke-linejoin", lineJoinEnum[2]);
                  h.setAttribute("stroke-miterlimit", "4");
                }
                if (!this.isMasked)
                  if (this.textSpans[u])
                    p = (l = this.textSpans[u]).children[0];
                  else {
                    (l = createTag("div")).style.lineHeight = 0;
                    (p = createNS("svg")).appendChild(h);
                    styleDiv(l);
                  }
              } else if (this.isMasked)
                h = this.textPaths[u] ? this.textPaths[u] : createNS("text");
              else if (this.textSpans[u]) {
                l = this.textSpans[u];
                h = this.textPaths[u];
              } else {
                styleDiv((l = createTag("span")));
                styleDiv((h = createTag("span")));
                l.appendChild(h);
              }
              if (this.globalData.fontManager.chars) {
                var y,
                  g = this.globalData.fontManager.getCharData(
                    t.finalText[r],
                    a.fStyle,
                    this.globalData.fontManager.getFontByName(t.f).fFamily
                  );
                y = g ? g.data : null;
                c.reset();
                if (y && y.shapes && y.shapes.length) {
                  m = y.shapes[0].it;
                  c.scale(t.finalSize / 100, t.finalSize / 100);
                  d = this.createPathShape(c, m);
                  h.setAttribute("d", d);
                }
                if (this.isMasked) this.innerElem.appendChild(h);
                else {
                  this.innerElem.appendChild(l);
                  if (y && y.shapes) {
                    document.body.appendChild(p);
                    var v = p.getBBox();
                    p.setAttribute("width", v.width + 2);
                    p.setAttribute("height", v.height + 2);
                    p.setAttribute(
                      "viewBox",
                      v.x -
                        1 +
                        " " +
                        (v.y - 1) +
                        " " +
                        (v.width + 2) +
                        " " +
                        (v.height + 2)
                    );
                    var b = p.style,
                      P = "translate(" + (v.x - 1) + "px," + (v.y - 1) + "px)";
                    b.transform = P;
                    b.webkitTransform = P;
                    f[r].yOffset = v.y - 1;
                  } else {
                    p.setAttribute("width", 1);
                    p.setAttribute("height", 1);
                  }
                  l.appendChild(p);
                }
              } else {
                h.textContent = f[r].val;
                h.setAttributeNS(
                  "http://www.w3.org/XML/1998/namespace",
                  "xml:space",
                  "preserve"
                );
                if (this.isMasked) this.innerElem.appendChild(h);
                else {
                  this.innerElem.appendChild(l);
                  var E = h.style,
                    x = "translate3d(0," + -t.finalSize / 1.2 + "px,0)";
                  E.transform = x;
                  E.webkitTransform = x;
                }
              }
              this.isMasked ? (this.textSpans[u] = h) : (this.textSpans[u] = l);
              this.textSpans[u].style.display = "block";
              this.textPaths[u] = h;
              u += 1;
            }
            for (; u < this.textSpans.length; ) {
              this.textSpans[u].style.display = "none";
              u += 1;
            }
          };
          HTextElement.prototype.renderInnerContent = function () {
            var t;
            if (this.data.singleShape) {
              if (!this._isFirstFrame && !this.lettersChangedFlag) return;
              if (this.isMasked && this.finalTransform._matMdf) {
                this.svgElement.setAttribute(
                  "viewBox",
                  -this.finalTransform.mProp.p.v[0] +
                    " " +
                    -this.finalTransform.mProp.p.v[1] +
                    " " +
                    this.compW +
                    " " +
                    this.compH
                );
                t = this.svgElement.style;
                var e =
                  "translate(" +
                  -this.finalTransform.mProp.p.v[0] +
                  "px," +
                  -this.finalTransform.mProp.p.v[1] +
                  "px)";
                t.transform = e;
                t.webkitTransform = e;
              }
            }
            this.textAnimator.getMeasures(
              this.textProperty.currentData,
              this.lettersChangedFlag
            );
            if (
              this.lettersChangedFlag ||
              this.textAnimator.lettersChangedFlag
            ) {
              var i,
                r,
                s,
                a,
                n,
                o = 0,
                h = this.textAnimator.renderedLetters,
                l = this.textProperty.currentData.l;
              r = l.length;
              for (i = 0; i < r; i += 1)
                if (l[i].n) o += 1;
                else {
                  a = this.textSpans[i];
                  n = this.textPaths[i];
                  s = h[o];
                  o += 1;
                  if (s._mdf.m)
                    if (this.isMasked) a.setAttribute("transform", s.m);
                    else {
                      a.style.webkitTransform = s.m;
                      a.style.transform = s.m;
                    }
                  a.style.opacity = s.o;
                  s.sw && s._mdf.sw && n.setAttribute("stroke-width", s.sw);
                  s.sc && s._mdf.sc && n.setAttribute("stroke", s.sc);
                  if (s.fc && s._mdf.fc) {
                    n.setAttribute("fill", s.fc);
                    n.style.color = s.fc;
                  }
                }
              if (
                this.innerElem.getBBox &&
                !this.hidden &&
                (this._isFirstFrame || this._mdf)
              ) {
                var p = this.innerElem.getBBox();
                if (this.currentBBox.w !== p.width) {
                  this.currentBBox.w = p.width;
                  this.svgElement.setAttribute("width", p.width);
                }
                if (this.currentBBox.h !== p.height) {
                  this.currentBBox.h = p.height;
                  this.svgElement.setAttribute("height", p.height);
                }
                if (
                  this.currentBBox.w !== p.width + 2 ||
                  this.currentBBox.h !== p.height + 2 ||
                  this.currentBBox.x !== p.x - 1 ||
                  this.currentBBox.y !== p.y - 1
                ) {
                  this.currentBBox.w = p.width + 2;
                  this.currentBBox.h = p.height + 2;
                  this.currentBBox.x = p.x - 1;
                  this.currentBBox.y = p.y - 1;
                  this.svgElement.setAttribute(
                    "viewBox",
                    this.currentBBox.x +
                      " " +
                      this.currentBBox.y +
                      " " +
                      this.currentBBox.w +
                      " " +
                      this.currentBBox.h
                  );
                  t = this.svgElement.style;
                  var f =
                    "translate(" +
                    this.currentBBox.x +
                    "px," +
                    this.currentBBox.y +
                    "px)";
                  t.transform = f;
                  t.webkitTransform = f;
                }
              }
            }
          };
          function HCameraElement(t, e, i) {
            this.initFrame();
            this.initBaseData(t, e, i);
            this.initHierarchy();
            var r = PropertyFactory.getProp;
            this.pe = r(this, t.pe, 0, 0, this);
            if (t.ks.p.s) {
              this.px = r(this, t.ks.p.x, 1, 0, this);
              this.py = r(this, t.ks.p.y, 1, 0, this);
              this.pz = r(this, t.ks.p.z, 1, 0, this);
            } else this.p = r(this, t.ks.p, 1, 0, this);
            t.ks.a && (this.a = r(this, t.ks.a, 1, 0, this));
            if (t.ks.or.k.length && t.ks.or.k[0].to) {
              var s,
                a = t.ks.or.k.length;
              for (s = 0; s < a; s += 1) {
                t.ks.or.k[s].to = null;
                t.ks.or.k[s].ti = null;
              }
            }
            this.or = r(this, t.ks.or, 1, degToRads, this);
            this.or.sh = !0;
            this.rx = r(this, t.ks.rx, 0, degToRads, this);
            this.ry = r(this, t.ks.ry, 0, degToRads, this);
            this.rz = r(this, t.ks.rz, 0, degToRads, this);
            this.mat = new Matrix();
            this._prevMat = new Matrix();
            this._isFirstFrame = !0;
            this.finalTransform = { mProp: this };
          }
          extendPrototype(
            [BaseElement, FrameElement, HierarchyElement],
            HCameraElement
          );
          HCameraElement.prototype.setup = function () {
            var t,
              e,
              i,
              r,
              s = this.comp.threeDElements.length;
            for (t = 0; t < s; t += 1)
              if ("3d" === (e = this.comp.threeDElements[t]).type) {
                i = e.perspectiveElem.style;
                r = e.container.style;
                var a = this.pe.v + "px",
                  n = "0px 0px 0px",
                  o = "matrix3d(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1)";
                i.perspective = a;
                i.webkitPerspective = a;
                r.transformOrigin = n;
                r.mozTransformOrigin = n;
                r.webkitTransformOrigin = n;
                i.transform = o;
                i.webkitTransform = o;
              }
          };
          HCameraElement.prototype.createElements = function () {};
          HCameraElement.prototype.hide = function () {};
          HCameraElement.prototype.renderFrame = function () {
            var t,
              e,
              i = this._isFirstFrame;
            if (this.hierarchy) {
              e = this.hierarchy.length;
              for (t = 0; t < e; t += 1)
                i = this.hierarchy[t].finalTransform.mProp._mdf || i;
            }
            if (
              i ||
              this.pe._mdf ||
              (this.p && this.p._mdf) ||
              (this.px && (this.px._mdf || this.py._mdf || this.pz._mdf)) ||
              this.rx._mdf ||
              this.ry._mdf ||
              this.rz._mdf ||
              this.or._mdf ||
              (this.a && this.a._mdf)
            ) {
              this.mat.reset();
              if (this.hierarchy)
                for (t = e = this.hierarchy.length - 1; t >= 0; t -= 1) {
                  var r = this.hierarchy[t].finalTransform.mProp;
                  this.mat.translate(-r.p.v[0], -r.p.v[1], r.p.v[2]);
                  this.mat
                    .rotateX(-r.or.v[0])
                    .rotateY(-r.or.v[1])
                    .rotateZ(r.or.v[2]);
                  this.mat.rotateX(-r.rx.v).rotateY(-r.ry.v).rotateZ(r.rz.v);
                  this.mat.scale(1 / r.s.v[0], 1 / r.s.v[1], 1 / r.s.v[2]);
                  this.mat.translate(r.a.v[0], r.a.v[1], r.a.v[2]);
                }
              this.p
                ? this.mat.translate(-this.p.v[0], -this.p.v[1], this.p.v[2])
                : this.mat.translate(-this.px.v, -this.py.v, this.pz.v);
              if (this.a) {
                var s;
                s = this.p
                  ? [
                      this.p.v[0] - this.a.v[0],
                      this.p.v[1] - this.a.v[1],
                      this.p.v[2] - this.a.v[2],
                    ]
                  : [
                      this.px.v - this.a.v[0],
                      this.py.v - this.a.v[1],
                      this.pz.v - this.a.v[2],
                    ];
                var a = Math.sqrt(
                    Math.pow(s[0], 2) + Math.pow(s[1], 2) + Math.pow(s[2], 2)
                  ),
                  n = [s[0] / a, s[1] / a, s[2] / a],
                  o = Math.sqrt(n[2] * n[2] + n[0] * n[0]),
                  h = Math.atan2(n[1], o),
                  l = Math.atan2(n[0], -n[2]);
                this.mat.rotateY(l).rotateX(-h);
              }
              this.mat
                .rotateX(-this.rx.v)
                .rotateY(-this.ry.v)
                .rotateZ(this.rz.v);
              this.mat
                .rotateX(-this.or.v[0])
                .rotateY(-this.or.v[1])
                .rotateZ(this.or.v[2]);
              this.mat.translate(
                this.globalData.compSize.w / 2,
                this.globalData.compSize.h / 2,
                0
              );
              this.mat.translate(0, 0, this.pe.v);
              var p = !this._prevMat.equals(this.mat);
              if ((p || this.pe._mdf) && this.comp.threeDElements) {
                e = this.comp.threeDElements.length;
                var f, m, c;
                for (t = 0; t < e; t += 1)
                  if ("3d" === (f = this.comp.threeDElements[t]).type) {
                    if (p) {
                      var d = this.mat.toCSS();
                      (c = f.container.style).transform = d;
                      c.webkitTransform = d;
                    }
                    if (this.pe._mdf) {
                      (m = f.perspectiveElem.style).perspective =
                        this.pe.v + "px";
                      m.webkitPerspective = this.pe.v + "px";
                    }
                  }
                this.mat.clone(this._prevMat);
              }
            }
            this._isFirstFrame = !1;
          };
          HCameraElement.prototype.prepareFrame = function (t) {
            this.prepareProperties(t, !0);
          };
          HCameraElement.prototype.destroy = function () {};
          HCameraElement.prototype.getBaseElement = function () {
            return null;
          };
          function HImageElement(t, e, i) {
            this.assetData = e.getAssetData(t.refId);
            this.initElement(t, e, i);
          }
          extendPrototype(
            [
              BaseElement,
              TransformElement,
              HBaseElement,
              HSolidElement,
              HierarchyElement,
              FrameElement,
              RenderableElement,
            ],
            HImageElement
          );
          HImageElement.prototype.createContent = function () {
            var t = this.globalData.getAssetsPath(this.assetData),
              e = new Image();
            if (this.data.hasMask) {
              this.imageElem = createNS("image");
              this.imageElem.setAttribute("width", this.assetData.w + "px");
              this.imageElem.setAttribute("height", this.assetData.h + "px");
              this.imageElem.setAttributeNS(
                "http://www.w3.org/1999/xlink",
                "href",
                t
              );
              this.layerElement.appendChild(this.imageElem);
              this.baseElement.setAttribute("width", this.assetData.w);
              this.baseElement.setAttribute("height", this.assetData.h);
            } else this.layerElement.appendChild(e);
            e.crossOrigin = "anonymous";
            e.src = t;
            this.data.ln && this.baseElement.setAttribute("id", this.data.ln);
          };
          function HybridRendererBase(t, e) {
            this.animationItem = t;
            this.layers = null;
            this.renderedFrame = -1;
            this.renderConfig = {
              className: (e && e.className) || "",
              imagePreserveAspectRatio:
                (e && e.imagePreserveAspectRatio) || "xMidYMid slice",
              hideOnTransparent: !(e && !1 === e.hideOnTransparent),
              filterSize: {
                width: (e && e.filterSize && e.filterSize.width) || "400%",
                height: (e && e.filterSize && e.filterSize.height) || "400%",
                x: (e && e.filterSize && e.filterSize.x) || "-100%",
                y: (e && e.filterSize && e.filterSize.y) || "-100%",
              },
            };
            this.globalData = {
              _mdf: !1,
              frameNum: -1,
              renderConfig: this.renderConfig,
            };
            this.pendingElements = [];
            this.elements = [];
            this.threeDElements = [];
            this.destroyed = !1;
            this.camera = null;
            this.supports3d = !0;
            this.rendererType = "html";
          }
          extendPrototype([BaseRenderer], HybridRendererBase);
          HybridRendererBase.prototype.buildItem =
            SVGRenderer.prototype.buildItem;
          HybridRendererBase.prototype.checkPendingElements = function () {
            for (; this.pendingElements.length; )
              this.pendingElements.pop().checkParenting();
          };
          HybridRendererBase.prototype.appendElementInPos = function (t, e) {
            var i = t.getBaseElement();
            if (i) {
              var r = this.layers[e];
              if (r.ddd && this.supports3d) this.addTo3dContainer(i, e);
              else if (this.threeDElements) this.addTo3dContainer(i, e);
              else {
                for (var s, a, n = 0; n < e; ) {
                  if (
                    this.elements[n] &&
                    !0 !== this.elements[n] &&
                    this.elements[n].getBaseElement
                  ) {
                    a = this.elements[n];
                    s =
                      (this.layers[n].ddd
                        ? this.getThreeDContainerByPos(n)
                        : a.getBaseElement()) || s;
                  }
                  n += 1;
                }
                s
                  ? (r.ddd && this.supports3d) ||
                    this.layerElement.insertBefore(i, s)
                  : (r.ddd && this.supports3d) ||
                    this.layerElement.appendChild(i);
              }
            }
          };
          HybridRendererBase.prototype.createShape = function (t) {
            return this.supports3d
              ? new HShapeElement(t, this.globalData, this)
              : new SVGShapeElement(t, this.globalData, this);
          };
          HybridRendererBase.prototype.createText = function (t) {
            return this.supports3d
              ? new HTextElement(t, this.globalData, this)
              : new SVGTextLottieElement(t, this.globalData, this);
          };
          HybridRendererBase.prototype.createCamera = function (t) {
            this.camera = new HCameraElement(t, this.globalData, this);
            return this.camera;
          };
          HybridRendererBase.prototype.createImage = function (t) {
            return this.supports3d
              ? new HImageElement(t, this.globalData, this)
              : new IImageElement(t, this.globalData, this);
          };
          HybridRendererBase.prototype.createSolid = function (t) {
            return this.supports3d
              ? new HSolidElement(t, this.globalData, this)
              : new ISolidElement(t, this.globalData, this);
          };
          HybridRendererBase.prototype.createNull =
            SVGRenderer.prototype.createNull;
          HybridRendererBase.prototype.getThreeDContainerByPos = function (t) {
            for (var e = 0, i = this.threeDElements.length; e < i; ) {
              if (
                this.threeDElements[e].startPos <= t &&
                this.threeDElements[e].endPos >= t
              )
                return this.threeDElements[e].perspectiveElem;
              e += 1;
            }
            return null;
          };
          HybridRendererBase.prototype.createThreeDContainer = function (t, e) {
            var i,
              r,
              s = createTag("div");
            styleDiv(s);
            var a = createTag("div");
            styleDiv(a);
            if ("3d" === e) {
              (i = s.style).width = this.globalData.compSize.w + "px";
              i.height = this.globalData.compSize.h + "px";
              var n = "50% 50%";
              i.webkitTransformOrigin = n;
              i.mozTransformOrigin = n;
              i.transformOrigin = n;
              var o = "matrix3d(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1)";
              (r = a.style).transform = o;
              r.webkitTransform = o;
            }
            s.appendChild(a);
            var h = {
              container: a,
              perspectiveElem: s,
              startPos: t,
              endPos: t,
              type: e,
            };
            this.threeDElements.push(h);
            return h;
          };
          HybridRendererBase.prototype.build3dContainers = function () {
            var t,
              e,
              i = this.layers.length,
              r = "";
            for (t = 0; t < i; t += 1)
              if (this.layers[t].ddd && 3 !== this.layers[t].ty) {
                if ("3d" !== r) {
                  r = "3d";
                  e = this.createThreeDContainer(t, "3d");
                }
                e.endPos = Math.max(e.endPos, t);
              } else {
                if ("2d" !== r) {
                  r = "2d";
                  e = this.createThreeDContainer(t, "2d");
                }
                e.endPos = Math.max(e.endPos, t);
              }
            for (t = (i = this.threeDElements.length) - 1; t >= 0; t -= 1)
              this.resizerElem.appendChild(
                this.threeDElements[t].perspectiveElem
              );
          };
          HybridRendererBase.prototype.addTo3dContainer = function (t, e) {
            for (var i = 0, r = this.threeDElements.length; i < r; ) {
              if (e <= this.threeDElements[i].endPos) {
                for (var s, a = this.threeDElements[i].startPos; a < e; ) {
                  this.elements[a] &&
                    this.elements[a].getBaseElement &&
                    (s = this.elements[a].getBaseElement());
                  a += 1;
                }
                s
                  ? this.threeDElements[i].container.insertBefore(t, s)
                  : this.threeDElements[i].container.appendChild(t);
                break;
              }
              i += 1;
            }
          };
          HybridRendererBase.prototype.configAnimation = function (t) {
            var e = createTag("div"),
              i = this.animationItem.wrapper,
              r = e.style;
            r.width = t.w + "px";
            r.height = t.h + "px";
            this.resizerElem = e;
            styleDiv(e);
            r.transformStyle = "flat";
            r.mozTransformStyle = "flat";
            r.webkitTransformStyle = "flat";
            this.renderConfig.className &&
              e.setAttribute("class", this.renderConfig.className);
            i.appendChild(e);
            r.overflow = "hidden";
            var s = createNS("svg");
            s.setAttribute("width", "1");
            s.setAttribute("height", "1");
            styleDiv(s);
            this.resizerElem.appendChild(s);
            var a = createNS("defs");
            s.appendChild(a);
            this.data = t;
            this.setupGlobalData(t, s);
            this.globalData.defs = a;
            this.layers = t.layers;
            this.layerElement = this.resizerElem;
            this.build3dContainers();
            this.updateContainerSize();
          };
          HybridRendererBase.prototype.destroy = function () {
            this.animationItem.wrapper &&
              (this.animationItem.wrapper.innerText = "");
            this.animationItem.container = null;
            this.globalData.defs = null;
            var t,
              e = this.layers ? this.layers.length : 0;
            for (t = 0; t < e; t += 1) this.elements[t].destroy();
            this.elements.length = 0;
            this.destroyed = !0;
            this.animationItem = null;
          };
          HybridRendererBase.prototype.updateContainerSize = function () {
            var t,
              e,
              i,
              r,
              s = this.animationItem.wrapper.offsetWidth,
              a = this.animationItem.wrapper.offsetHeight,
              n = s / a;
            if (this.globalData.compSize.w / this.globalData.compSize.h > n) {
              t = s / this.globalData.compSize.w;
              e = s / this.globalData.compSize.w;
              i = 0;
              r =
                (a -
                  this.globalData.compSize.h *
                    (s / this.globalData.compSize.w)) /
                2;
            } else {
              t = a / this.globalData.compSize.h;
              e = a / this.globalData.compSize.h;
              i =
                (s -
                  this.globalData.compSize.w *
                    (a / this.globalData.compSize.h)) /
                2;
              r = 0;
            }
            var o = this.resizerElem.style;
            o.webkitTransform =
              "matrix3d(" +
              t +
              ",0,0,0,0," +
              e +
              ",0,0,0,0,1,0," +
              i +
              "," +
              r +
              ",0,1)";
            o.transform = o.webkitTransform;
          };
          HybridRendererBase.prototype.renderFrame =
            SVGRenderer.prototype.renderFrame;
          HybridRendererBase.prototype.hide = function () {
            this.resizerElem.style.display = "none";
          };
          HybridRendererBase.prototype.show = function () {
            this.resizerElem.style.display = "block";
          };
          HybridRendererBase.prototype.initItems = function () {
            this.buildAllItems();
            if (this.camera) this.camera.setup();
            else {
              var t,
                e = this.globalData.compSize.w,
                i = this.globalData.compSize.h,
                r = this.threeDElements.length;
              for (t = 0; t < r; t += 1) {
                var s = this.threeDElements[t].perspectiveElem.style;
                s.webkitPerspective =
                  Math.sqrt(Math.pow(e, 2) + Math.pow(i, 2)) + "px";
                s.perspective = s.webkitPerspective;
              }
            }
          };
          HybridRendererBase.prototype.searchExtraCompositions = function (t) {
            var e,
              i = t.length,
              r = createTag("div");
            for (e = 0; e < i; e += 1)
              if (t[e].xt) {
                var s = this.createComp(t[e], r, this.globalData.comp, null);
                s.initExpressions();
                this.globalData.projectInterface.registerComposition(s);
              }
          };
          function HCompElement(t, e, i) {
            this.layers = t.layers;
            this.supports3d = !t.hasMask;
            this.completeLayers = !1;
            this.pendingElements = [];
            this.elements = this.layers
              ? createSizedArray(this.layers.length)
              : [];
            this.initElement(t, e, i);
            this.tm = t.tm
              ? PropertyFactory.getProp(this, t.tm, 0, e.frameRate, this)
              : { _placeholder: !0 };
          }
          extendPrototype(
            [HybridRendererBase, ICompElement, HBaseElement],
            HCompElement
          );
          HCompElement.prototype._createBaseContainerElements =
            HCompElement.prototype.createContainerElements;
          HCompElement.prototype.createContainerElements = function () {
            this._createBaseContainerElements();
            if (this.data.hasMask) {
              this.svgElement.setAttribute("width", this.data.w);
              this.svgElement.setAttribute("height", this.data.h);
              this.transformedElement = this.baseElement;
            } else this.transformedElement = this.layerElement;
          };
          HCompElement.prototype.addTo3dContainer = function (t, e) {
            for (var i, r = 0; r < e; ) {
              this.elements[r] &&
                this.elements[r].getBaseElement &&
                (i = this.elements[r].getBaseElement());
              r += 1;
            }
            i
              ? this.layerElement.insertBefore(t, i)
              : this.layerElement.appendChild(t);
          };
          HCompElement.prototype.createComp = function (t) {
            return this.supports3d
              ? new HCompElement(t, this.globalData, this)
              : new SVGCompElement(t, this.globalData, this);
          };
          function HybridRenderer(t, e) {
            this.animationItem = t;
            this.layers = null;
            this.renderedFrame = -1;
            this.renderConfig = {
              className: (e && e.className) || "",
              imagePreserveAspectRatio:
                (e && e.imagePreserveAspectRatio) || "xMidYMid slice",
              hideOnTransparent: !(e && !1 === e.hideOnTransparent),
              filterSize: {
                width: (e && e.filterSize && e.filterSize.width) || "400%",
                height: (e && e.filterSize && e.filterSize.height) || "400%",
                x: (e && e.filterSize && e.filterSize.x) || "-100%",
                y: (e && e.filterSize && e.filterSize.y) || "-100%",
              },
            };
            this.globalData = {
              _mdf: !1,
              frameNum: -1,
              renderConfig: this.renderConfig,
            };
            this.pendingElements = [];
            this.elements = [];
            this.threeDElements = [];
            this.destroyed = !1;
            this.camera = null;
            this.supports3d = !0;
            this.rendererType = "html";
          }
          extendPrototype([HybridRendererBase], HybridRenderer);
          HybridRenderer.prototype.createComp = function (t) {
            return this.supports3d
              ? new HCompElement(t, this.globalData, this)
              : new SVGCompElement(t, this.globalData, this);
          };
          var Expressions = (function () {
            var t = {
              initExpressions: function (t) {
                var e = 0,
                  i = [];
                t.renderer.compInterface = CompExpressionInterface(t.renderer);
                t.renderer.globalData.projectInterface.registerComposition(
                  t.renderer
                );
                t.renderer.globalData.pushExpression = function () {
                  e += 1;
                };
                t.renderer.globalData.popExpression = function () {
                  0 == (e -= 1) &&
                    (function () {
                      var t,
                        e = i.length;
                      for (t = 0; t < e; t += 1) i[t].release();
                      i.length = 0;
                    })();
                };
                t.renderer.globalData.registerExpressionProperty = function (
                  t
                ) {
                  -1 === i.indexOf(t) && i.push(t);
                };
              },
            };
            return t;
          })();
          function _typeof$1(t) {
            _typeof$1 =
              "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                ? function (t) {
                    return typeof t;
                  }
                : function (t) {
                    return t &&
                      "function" == typeof Symbol &&
                      t.constructor === Symbol &&
                      t !== Symbol.prototype
                      ? "symbol"
                      : typeof t;
                  };
            return _typeof$1(t);
          }
          function seedRandom(t, e) {
            var i = this,
              r = 256,
              s = e.pow(r, 6),
              a = e.pow(2, 52),
              n = 2 * a,
              o = 255;
            e.seedrandom = function (o, c, d) {
              var u = [],
                y = f(
                  p(
                    (c =
                      !0 === c
                        ? {
                            entropy: !0,
                          }
                        : c || {}).entropy
                      ? [o, m(t)]
                      : null === o
                      ? (function () {
                          try {
                            var e = new Uint8Array(r);
                            (i.crypto || i.msCrypto).getRandomValues(e);
                            return m(e);
                          } catch (e) {
                            var s = i.navigator,
                              a = s && s.plugins;
                            return [+new Date(), i, a, i.screen, m(t)];
                          }
                        })()
                      : o,
                    3
                  ),
                  u
                ),
                g = new h(u),
                v = function () {
                  for (var t = g.g(6), e = s, i = 0; t < a; ) {
                    t = (t + i) * r;
                    e *= r;
                    i = g.g(1);
                  }
                  for (; t >= n; ) {
                    t /= 2;
                    e /= 2;
                    i >>>= 1;
                  }
                  return (t + i) / e;
                };
              v.int32 = function () {
                return 0 | g.g(4);
              };
              v.quick = function () {
                return g.g(4) / 4294967296;
              };
              v.double = v;
              f(m(g.S), t);
              return (
                c.pass ||
                d ||
                function (t, i, r, s) {
                  if (s) {
                    s.S && l(s, g);
                    t.state = function () {
                      return l(g, {});
                    };
                  }
                  if (r) {
                    e.random = t;
                    return i;
                  }
                  return t;
                }
              )(v, y, "global" in c ? c.global : this == e, c.state);
            };
            function h(t) {
              var e,
                i = t.length,
                s = this,
                a = 0,
                n = (s.i = s.j = 0),
                h = (s.S = []);
              i || (t = [i++]);
              for (; a < r; ) h[a] = a++;
              for (a = 0; a < r; a++) {
                h[a] = h[(n = o & (n + t[a % i] + (e = h[a])))];
                h[n] = e;
              }
              s.g = function (t) {
                for (var e, i = 0, a = s.i, n = s.j, h = s.S; t--; ) {
                  e = h[(a = o & (a + 1))];
                  i =
                    i * r + h[o & ((h[a] = h[(n = o & (n + e))]) + (h[n] = e))];
                }
                s.i = a;
                s.j = n;
                return i;
              };
            }
            function l(t, e) {
              e.i = t.i;
              e.j = t.j;
              e.S = t.S.slice();
              return e;
            }
            function p(t, e) {
              var i,
                r = [],
                s = _typeof$1(t);
              if (e && "object" == s)
                for (i in t)
                  try {
                    r.push(p(t[i], e - 1));
                  } catch (t) {}
              return r.length ? r : "string" == s ? t : t + "\0";
            }
            function f(t, e) {
              for (var i, r = t + "", s = 0; s < r.length; )
                e[o & s] = o & ((i ^= 19 * e[o & s]) + r.charCodeAt(s++));
              return m(e);
            }
            function m(t) {
              return String.fromCharCode.apply(0, t);
            }
            f(e.random(), t);
          }
          function initialize$2(t) {
            seedRandom([], t);
          }
          var propTypes = { SHAPE: "shape" };
          function _typeof(t) {
            _typeof =
              "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                ? function (t) {
                    return typeof t;
                  }
                : function (t) {
                    return t &&
                      "function" == typeof Symbol &&
                      t.constructor === Symbol &&
                      t !== Symbol.prototype
                      ? "symbol"
                      : typeof t;
                  };
            return _typeof(t);
          }
          var ExpressionManager = (function () {
              var ob = {},
                Math = BMMath,
                window = null,
                document = null,
                XMLHttpRequest = null,
                fetch = null,
                frames = null;
              initialize$2(BMMath);
              function $bm_isInstanceOfArray(t) {
                return (
                  t.constructor === Array || t.constructor === Float32Array
                );
              }
              function isNumerable(t, e) {
                return (
                  "number" === t ||
                  "boolean" === t ||
                  "string" === t ||
                  e instanceof Number
                );
              }
              function $bm_neg(t) {
                var e = _typeof(t);
                if ("number" === e || "boolean" === e || t instanceof Number)
                  return -t;
                if ($bm_isInstanceOfArray(t)) {
                  var i,
                    r = t.length,
                    s = [];
                  for (i = 0; i < r; i += 1) s[i] = -t[i];
                  return s;
                }
                return t.propType ? t.v : -t;
              }
              var easeInBez = BezierFactory.getBezierEasing(
                  0.333,
                  0,
                  0.833,
                  0.833,
                  "easeIn"
                ).get,
                easeOutBez = BezierFactory.getBezierEasing(
                  0.167,
                  0.167,
                  0.667,
                  1,
                  "easeOut"
                ).get,
                easeInOutBez = BezierFactory.getBezierEasing(
                  0.33,
                  0,
                  0.667,
                  1,
                  "easeInOut"
                ).get;
              function sum(t, e) {
                var i = _typeof(t),
                  r = _typeof(e);
                if ("string" === i || "string" === r) return t + e;
                if (isNumerable(i, t) && isNumerable(r, e)) return t + e;
                if ($bm_isInstanceOfArray(t) && isNumerable(r, e)) {
                  (t = t.slice(0))[0] += e;
                  return t;
                }
                if (isNumerable(i, t) && $bm_isInstanceOfArray(e)) {
                  (e = e.slice(0))[0] = t + e[0];
                  return e;
                }
                if ($bm_isInstanceOfArray(t) && $bm_isInstanceOfArray(e)) {
                  for (
                    var s = 0, a = t.length, n = e.length, o = [];
                    s < a || s < n;

                  ) {
                    ("number" == typeof t[s] || t[s] instanceof Number) &&
                    ("number" == typeof e[s] || e[s] instanceof Number)
                      ? (o[s] = t[s] + e[s])
                      : (o[s] = void 0 === e[s] ? t[s] : t[s] || e[s]);
                    s += 1;
                  }
                  return o;
                }
                return 0;
              }
              var add = sum;
              function sub(t, e) {
                var i = _typeof(t),
                  r = _typeof(e);
                if (isNumerable(i, t) && isNumerable(r, e)) {
                  "string" === i && (t = parseInt(t, 10));
                  "string" === r && (e = parseInt(e, 10));
                  return t - e;
                }
                if ($bm_isInstanceOfArray(t) && isNumerable(r, e)) {
                  (t = t.slice(0))[0] -= e;
                  return t;
                }
                if (isNumerable(i, t) && $bm_isInstanceOfArray(e)) {
                  (e = e.slice(0))[0] = t - e[0];
                  return e;
                }
                if ($bm_isInstanceOfArray(t) && $bm_isInstanceOfArray(e)) {
                  for (
                    var s = 0, a = t.length, n = e.length, o = [];
                    s < a || s < n;

                  ) {
                    ("number" == typeof t[s] || t[s] instanceof Number) &&
                    ("number" == typeof e[s] || e[s] instanceof Number)
                      ? (o[s] = t[s] - e[s])
                      : (o[s] = void 0 === e[s] ? t[s] : t[s] || e[s]);
                    s += 1;
                  }
                  return o;
                }
                return 0;
              }
              function mul(t, e) {
                var i,
                  r,
                  s,
                  a = _typeof(t),
                  n = _typeof(e);
                if (isNumerable(a, t) && isNumerable(n, e)) return t * e;
                if ($bm_isInstanceOfArray(t) && isNumerable(n, e)) {
                  s = t.length;
                  i = createTypedArray("float32", s);
                  for (r = 0; r < s; r += 1) i[r] = t[r] * e;
                  return i;
                }
                if (isNumerable(a, t) && $bm_isInstanceOfArray(e)) {
                  s = e.length;
                  i = createTypedArray("float32", s);
                  for (r = 0; r < s; r += 1) i[r] = t * e[r];
                  return i;
                }
                return 0;
              }
              function div(t, e) {
                var i,
                  r,
                  s,
                  a = _typeof(t),
                  n = _typeof(e);
                if (isNumerable(a, t) && isNumerable(n, e)) return t / e;
                if ($bm_isInstanceOfArray(t) && isNumerable(n, e)) {
                  s = t.length;
                  i = createTypedArray("float32", s);
                  for (r = 0; r < s; r += 1) i[r] = t[r] / e;
                  return i;
                }
                if (isNumerable(a, t) && $bm_isInstanceOfArray(e)) {
                  s = e.length;
                  i = createTypedArray("float32", s);
                  for (r = 0; r < s; r += 1) i[r] = t / e[r];
                  return i;
                }
                return 0;
              }
              function mod(t, e) {
                "string" == typeof t && (t = parseInt(t, 10));
                "string" == typeof e && (e = parseInt(e, 10));
                return t % e;
              }
              var $bm_sum = sum,
                $bm_sub = sub,
                $bm_mul = mul,
                $bm_div = div,
                $bm_mod = mod;
              function clamp(t, e, i) {
                if (e > i) {
                  var r = i;
                  i = e;
                  e = r;
                }
                return Math.min(Math.max(t, e), i);
              }
              function radiansToDegrees(t) {
                return t / degToRads;
              }
              var radians_to_degrees = radiansToDegrees;
              function degreesToRadians(t) {
                return t * degToRads;
              }
              var degrees_to_radians = radiansToDegrees,
                helperLengthArray = [0, 0, 0, 0, 0, 0];
              function length(t, e) {
                if ("number" == typeof t || t instanceof Number) {
                  e = e || 0;
                  return Math.abs(t - e);
                }
                e || (e = helperLengthArray);
                var i,
                  r = Math.min(t.length, e.length),
                  s = 0;
                for (i = 0; i < r; i += 1) s += Math.pow(e[i] - t[i], 2);
                return Math.sqrt(s);
              }
              function normalize(t) {
                return div(t, length(t));
              }
              function rgbToHsl(t) {
                var e,
                  i,
                  r = t[0],
                  s = t[1],
                  a = t[2],
                  n = Math.max(r, s, a),
                  o = Math.min(r, s, a),
                  h = (n + o) / 2;
                if (n === o) {
                  e = 0;
                  i = 0;
                } else {
                  var l = n - o;
                  i = h > 0.5 ? l / (2 - n - o) : l / (n + o);
                  switch (n) {
                    case r:
                      e = (s - a) / l + (s < a ? 6 : 0);
                      break;
                    case s:
                      e = (a - r) / l + 2;
                      break;
                    case a:
                      e = (r - s) / l + 4;
                  }
                  e /= 6;
                }
                return [e, i, h, t[3]];
              }
              function hue2rgb(t, e, i) {
                i < 0 && (i += 1);
                i > 1 && (i -= 1);
                return i < 1 / 6
                  ? t + 6 * (e - t) * i
                  : i < 0.5
                  ? e
                  : i < 2 / 3
                  ? t + (e - t) * (2 / 3 - i) * 6
                  : t;
              }
              function hslToRgb(t) {
                var e,
                  i,
                  r,
                  s = t[0],
                  a = t[1],
                  n = t[2];
                if (0 === a) {
                  e = n;
                  r = n;
                  i = n;
                } else {
                  var o = n < 0.5 ? n * (1 + a) : n + a - n * a,
                    h = 2 * n - o;
                  e = hue2rgb(h, o, s + 1 / 3);
                  i = hue2rgb(h, o, s);
                  r = hue2rgb(h, o, s - 1 / 3);
                }
                return [e, i, r, t[3]];
              }
              function linear(t, e, i, r, s) {
                if (void 0 === r || void 0 === s) {
                  r = e;
                  s = i;
                  e = 0;
                  i = 1;
                }
                if (i < e) {
                  var a = i;
                  i = e;
                  e = a;
                }
                if (t <= e) return r;
                if (t >= i) return s;
                var n,
                  o = i === e ? 0 : (t - e) / (i - e);
                if (!r.length) return r + (s - r) * o;
                var h = r.length,
                  l = createTypedArray("float32", h);
                for (n = 0; n < h; n += 1) l[n] = r[n] + (s[n] - r[n]) * o;
                return l;
              }
              function random(t, e) {
                if (void 0 === e)
                  if (void 0 === t) {
                    t = 0;
                    e = 1;
                  } else {
                    e = t;
                    t = void 0;
                  }
                if (e.length) {
                  var i,
                    r = e.length;
                  t || (t = createTypedArray("float32", r));
                  var s = createTypedArray("float32", r),
                    a = BMMath.random();
                  for (i = 0; i < r; i += 1) s[i] = t[i] + a * (e[i] - t[i]);
                  return s;
                }
                void 0 === t && (t = 0);
                return t + BMMath.random() * (e - t);
              }
              function createPath(t, e, i, r) {
                var s,
                  a = t.length,
                  n = shapePool.newElement();
                n.setPathData(!!r, a);
                var o,
                  h,
                  l = [0, 0];
                for (s = 0; s < a; s += 1) {
                  o = e && e[s] ? e[s] : l;
                  h = i && i[s] ? i[s] : l;
                  n.setTripleAt(
                    t[s][0],
                    t[s][1],
                    h[0] + t[s][0],
                    h[1] + t[s][1],
                    o[0] + t[s][0],
                    o[1] + t[s][1],
                    s,
                    !0
                  );
                }
                return n;
              }
              function initiateExpression(elem, data, property) {
                var val = data.x,
                  needsVelocity = /velocity(?![\w\d])/.test(val),
                  _needsRandom = -1 !== val.indexOf("random"),
                  elemType = elem.data.ty,
                  transform,
                  $bm_transform,
                  content,
                  effect,
                  thisProperty = property;
                thisProperty.valueAtTime = thisProperty.getValueAtTime;
                Object.defineProperty(thisProperty, "value", {
                  get: function () {
                    return thisProperty.v;
                  },
                });
                elem.comp.frameDuration = 1 / elem.comp.globalData.frameRate;
                elem.comp.displayStartTime = 0;
                var inPoint = elem.data.ip / elem.comp.globalData.frameRate,
                  outPoint = elem.data.op / elem.comp.globalData.frameRate,
                  width = elem.data.sw ? elem.data.sw : 0,
                  height = elem.data.sh ? elem.data.sh : 0,
                  name = elem.data.nm,
                  loopIn,
                  loop_in,
                  loopOut,
                  loop_out,
                  smooth,
                  toWorld,
                  fromWorld,
                  fromComp,
                  toComp,
                  fromCompToSurface,
                  position,
                  rotation,
                  anchorPoint,
                  scale,
                  thisLayer,
                  thisComp,
                  mask,
                  valueAtTime,
                  velocityAtTime,
                  scoped_bm_rt,
                  expression_function = eval(
                    "[function _expression_function(){" +
                      val +
                      ";scoped_bm_rt=$bm_rt}]"
                  )[0],
                  numKeys = property.kf ? data.k.length : 0,
                  active = !this.data || !0 !== this.data.hd,
                  wiggle = function (t, e) {
                    var i,
                      r,
                      s = this.pv.length ? this.pv.length : 1,
                      a = createTypedArray("float32", s),
                      n = Math.floor(5 * time);
                    i = 0;
                    r = 0;
                    for (; i < n; ) {
                      for (r = 0; r < s; r += 1)
                        a[r] += -e + 2 * e * BMMath.random();
                      i += 1;
                    }
                    var o = 5 * time,
                      h = o - Math.floor(o),
                      l = createTypedArray("float32", s);
                    if (s > 1) {
                      for (r = 0; r < s; r += 1)
                        l[r] =
                          this.pv[r] +
                          a[r] +
                          (-e + 2 * e * BMMath.random()) * h;
                      return l;
                    }
                    return this.pv + a[0] + (-e + 2 * e * BMMath.random()) * h;
                  }.bind(this);
                if (thisProperty.loopIn) {
                  loopIn = thisProperty.loopIn.bind(thisProperty);
                  loop_in = loopIn;
                }
                if (thisProperty.loopOut) {
                  loopOut = thisProperty.loopOut.bind(thisProperty);
                  loop_out = loopOut;
                }
                thisProperty.smooth &&
                  (smooth = thisProperty.smooth.bind(thisProperty));
                function loopInDuration(t, e) {
                  return loopIn(t, e, !0);
                }
                function loopOutDuration(t, e) {
                  return loopOut(t, e, !0);
                }
                this.getValueAtTime &&
                  (valueAtTime = this.getValueAtTime.bind(this));
                this.getVelocityAtTime &&
                  (velocityAtTime = this.getVelocityAtTime.bind(this));
                var comp = elem.comp.globalData.projectInterface.bind(
                    elem.comp.globalData.projectInterface
                  ),
                  time,
                  velocity,
                  value,
                  text,
                  textIndex,
                  textTotal,
                  selectorValue;
                function lookAt(t, e) {
                  var i = [e[0] - t[0], e[1] - t[1], e[2] - t[2]],
                    r =
                      Math.atan2(i[0], Math.sqrt(i[1] * i[1] + i[2] * i[2])) /
                      degToRads;
                  return [-Math.atan2(i[1], i[2]) / degToRads, r, 0];
                }
                function easeOut(t, e, i, r, s) {
                  return applyEase(easeOutBez, t, e, i, r, s);
                }
                function easeIn(t, e, i, r, s) {
                  return applyEase(easeInBez, t, e, i, r, s);
                }
                function ease(t, e, i, r, s) {
                  return applyEase(easeInOutBez, t, e, i, r, s);
                }
                function applyEase(t, e, i, r, s, a) {
                  if (void 0 === s) {
                    s = i;
                    a = r;
                  } else e = (e - i) / (r - i);
                  e > 1 ? (e = 1) : e < 0 && (e = 0);
                  var n = t(e);
                  if ($bm_isInstanceOfArray(s)) {
                    var o,
                      h = s.length,
                      l = createTypedArray("float32", h);
                    for (o = 0; o < h; o += 1) l[o] = (a[o] - s[o]) * n + s[o];
                    return l;
                  }
                  return (a - s) * n + s;
                }
                function nearestKey(t) {
                  var e,
                    i,
                    r,
                    s = data.k.length;
                  if (data.k.length && "number" != typeof data.k[0]) {
                    i = -1;
                    if ((t *= elem.comp.globalData.frameRate) < data.k[0].t) {
                      i = 1;
                      r = data.k[0].t;
                    } else {
                      for (e = 0; e < s - 1; e += 1) {
                        if (t === data.k[e].t) {
                          i = e + 1;
                          r = data.k[e].t;
                          break;
                        }
                        if (t > data.k[e].t && t < data.k[e + 1].t) {
                          if (t - data.k[e].t > data.k[e + 1].t - t) {
                            i = e + 2;
                            r = data.k[e + 1].t;
                          } else {
                            i = e + 1;
                            r = data.k[e].t;
                          }
                          break;
                        }
                      }
                      if (-1 === i) {
                        i = e + 1;
                        r = data.k[e].t;
                      }
                    }
                  } else {
                    i = 0;
                    r = 0;
                  }
                  var a = {};
                  a.index = i;
                  a.time = r / elem.comp.globalData.frameRate;
                  return a;
                }
                function key(t) {
                  var e, i, r;
                  if (!data.k.length || "number" == typeof data.k[0])
                    throw new Error(
                      "The property has no keyframe at index " + t
                    );
                  t -= 1;
                  e = {
                    time: data.k[t].t / elem.comp.globalData.frameRate,
                    value: [],
                  };
                  var s = Object.prototype.hasOwnProperty.call(data.k[t], "s")
                    ? data.k[t].s
                    : data.k[t - 1].e;
                  r = s.length;
                  for (i = 0; i < r; i += 1) {
                    e[i] = s[i];
                    e.value[i] = s[i];
                  }
                  return e;
                }
                function framesToTime(t, e) {
                  e || (e = elem.comp.globalData.frameRate);
                  return t / e;
                }
                function timeToFrames(t, e) {
                  t || 0 === t || (t = time);
                  e || (e = elem.comp.globalData.frameRate);
                  return t * e;
                }
                function seedRandom(t) {
                  BMMath.seedrandom(randSeed + t);
                }
                function sourceRectAtTime() {
                  return elem.sourceRectAtTime();
                }
                function substring(t, e) {
                  return "string" == typeof value
                    ? void 0 === e
                      ? value.substring(t)
                      : value.substring(t, e)
                    : "";
                }
                function substr(t, e) {
                  return "string" == typeof value
                    ? void 0 === e
                      ? value.substr(t)
                      : value.substr(t, e)
                    : "";
                }
                function posterizeTime(t) {
                  time = 0 === t ? 0 : Math.floor(time * t) / t;
                  value = valueAtTime(time);
                }
                var index = elem.data.ind,
                  hasParent = !(!elem.hierarchy || !elem.hierarchy.length),
                  parent,
                  randSeed = Math.floor(1e6 * Math.random()),
                  globalData = elem.globalData;
                function executeExpression(t) {
                  value = t;
                  if (
                    this.frameExpressionId === elem.globalData.frameId &&
                    "textSelector" !== this.propType
                  )
                    return value;
                  if ("textSelector" === this.propType) {
                    textIndex = this.textIndex;
                    textTotal = this.textTotal;
                    selectorValue = this.selectorValue;
                  }
                  if (!thisLayer) {
                    text = elem.layerInterface.text;
                    thisLayer = elem.layerInterface;
                    thisComp = elem.comp.compInterface;
                    toWorld = thisLayer.toWorld.bind(thisLayer);
                    fromWorld = thisLayer.fromWorld.bind(thisLayer);
                    fromComp = thisLayer.fromComp.bind(thisLayer);
                    toComp = thisLayer.toComp.bind(thisLayer);
                    mask = thisLayer.mask
                      ? thisLayer.mask.bind(thisLayer)
                      : null;
                    fromCompToSurface = fromComp;
                  }
                  if (!transform) {
                    transform = elem.layerInterface("ADBE Transform Group");
                    $bm_transform = transform;
                    transform && (anchorPoint = transform.anchorPoint);
                  }
                  4 !== elemType ||
                    content ||
                    (content = thisLayer("ADBE Root Vectors Group"));
                  effect || (effect = thisLayer(4));
                  (hasParent = !(!elem.hierarchy || !elem.hierarchy.length)) &&
                    !parent &&
                    (parent = elem.hierarchy[0].layerInterface);
                  time =
                    this.comp.renderedFrame / this.comp.globalData.frameRate;
                  _needsRandom && seedRandom(randSeed + time);
                  needsVelocity && (velocity = velocityAtTime(time));
                  expression_function();
                  this.frameExpressionId = elem.globalData.frameId;
                  return (scoped_bm_rt =
                    scoped_bm_rt.propType === propTypes.SHAPE
                      ? scoped_bm_rt.v
                      : scoped_bm_rt);
                }
                executeExpression.__preventDeadCodeRemoval = [
                  $bm_transform,
                  anchorPoint,
                  time,
                  velocity,
                  inPoint,
                  outPoint,
                  width,
                  height,
                  name,
                  loop_in,
                  loop_out,
                  smooth,
                  toComp,
                  fromCompToSurface,
                  toWorld,
                  fromWorld,
                  mask,
                  position,
                  rotation,
                  scale,
                  thisComp,
                  numKeys,
                  active,
                  wiggle,
                  loopInDuration,
                  loopOutDuration,
                  comp,
                  lookAt,
                  easeOut,
                  easeIn,
                  ease,
                  nearestKey,
                  key,
                  text,
                  textIndex,
                  textTotal,
                  selectorValue,
                  framesToTime,
                  timeToFrames,
                  sourceRectAtTime,
                  substring,
                  substr,
                  posterizeTime,
                  index,
                  globalData,
                ];
                return executeExpression;
              }
              ob.initiateExpression = initiateExpression;
              ob.__preventDeadCodeRemoval = [
                window,
                document,
                XMLHttpRequest,
                fetch,
                frames,
                $bm_neg,
                add,
                $bm_sum,
                $bm_sub,
                $bm_mul,
                $bm_div,
                $bm_mod,
                clamp,
                radians_to_degrees,
                degreesToRadians,
                degrees_to_radians,
                normalize,
                rgbToHsl,
                hslToRgb,
                linear,
                random,
                createPath,
              ];
              return ob;
            })(),
            expressionHelpers = {
              searchExpressions: function (t, e, i) {
                if (e.x) {
                  i.k = !0;
                  i.x = !0;
                  i.initiateExpression = ExpressionManager.initiateExpression;
                  i.effectsSequence.push(i.initiateExpression(t, e, i).bind(i));
                }
              },
              getSpeedAtTime: function (t) {
                var e = this.getValueAtTime(t),
                  i = this.getValueAtTime(t + -0.01),
                  r = 0;
                if (e.length) {
                  var s;
                  for (s = 0; s < e.length; s += 1)
                    r += Math.pow(i[s] - e[s], 2);
                  r = 100 * Math.sqrt(r);
                } else r = 0;
                return r;
              },
              getVelocityAtTime: function (t) {
                if (void 0 !== this.vel) return this.vel;
                var e,
                  i = -0.001,
                  r = this.getValueAtTime(t),
                  s = this.getValueAtTime(t + i);
                if (r.length) {
                  e = createTypedArray("float32", r.length);
                  var a;
                  for (a = 0; a < r.length; a += 1) e[a] = (s[a] - r[a]) / i;
                } else e = (s - r) / i;
                return e;
              },
              getValueAtTime: function (t) {
                t *= this.elem.globalData.frameRate;
                if ((t -= this.offsetTime) !== this._cachingAtTime.lastFrame) {
                  this._cachingAtTime.lastIndex =
                    this._cachingAtTime.lastFrame < t
                      ? this._cachingAtTime.lastIndex
                      : 0;
                  this._cachingAtTime.value = this.interpolateValue(
                    t,
                    this._cachingAtTime
                  );
                  this._cachingAtTime.lastFrame = t;
                }
                return this._cachingAtTime.value;
              },
              getStaticValueAtTime: function () {
                return this.pv;
              },
              setGroupProperty: function (t) {
                this.propertyGroup = t;
              },
            };
          function addPropertyDecorator() {
            function t(t, e, i) {
              if (!this.k || !this.keyframes) return this.pv;
              t = t ? t.toLowerCase() : "";
              var r,
                s,
                a,
                n,
                o,
                h = this.comp.renderedFrame,
                l = this.keyframes,
                p = l[l.length - 1].t;
              if (h <= p) return this.pv;
              if (i)
                s =
                  p -
                  (r = e
                    ? Math.abs(p - this.elem.comp.globalData.frameRate * e)
                    : Math.max(0, p - this.elem.data.ip));
              else {
                (!e || e > l.length - 1) && (e = l.length - 1);
                r = p - (s = l[l.length - 1 - e].t);
              }
              if ("pingpong" === t) {
                if (Math.floor((h - s) / r) % 2 != 0)
                  return this.getValueAtTime(
                    (r - ((h - s) % r) + s) / this.comp.globalData.frameRate,
                    0
                  );
              } else {
                if ("offset" === t) {
                  var f = this.getValueAtTime(
                      s / this.comp.globalData.frameRate,
                      0
                    ),
                    m = this.getValueAtTime(
                      p / this.comp.globalData.frameRate,
                      0
                    ),
                    c = this.getValueAtTime(
                      (((h - s) % r) + s) / this.comp.globalData.frameRate,
                      0
                    ),
                    d = Math.floor((h - s) / r);
                  if (this.pv.length) {
                    n = (o = new Array(f.length)).length;
                    for (a = 0; a < n; a += 1) o[a] = (m[a] - f[a]) * d + c[a];
                    return o;
                  }
                  return (m - f) * d + c;
                }
                if ("continue" === t) {
                  var u = this.getValueAtTime(
                      p / this.comp.globalData.frameRate,
                      0
                    ),
                    y = this.getValueAtTime(
                      (p - 0.001) / this.comp.globalData.frameRate,
                      0
                    );
                  if (this.pv.length) {
                    n = (o = new Array(u.length)).length;
                    for (a = 0; a < n; a += 1)
                      o[a] =
                        u[a] +
                        ((u[a] - y[a]) *
                          ((h - p) / this.comp.globalData.frameRate)) /
                          5e-4;
                    return o;
                  }
                  return u + ((h - p) / 0.001) * (u - y);
                }
              }
              return this.getValueAtTime(
                (((h - s) % r) + s) / this.comp.globalData.frameRate,
                0
              );
            }
            function e(t, e, i) {
              if (!this.k) return this.pv;
              t = t ? t.toLowerCase() : "";
              var r,
                s,
                a,
                n,
                o,
                h = this.comp.renderedFrame,
                l = this.keyframes,
                p = l[0].t;
              if (h >= p) return this.pv;
              if (i)
                s =
                  p +
                  (r = e
                    ? Math.abs(this.elem.comp.globalData.frameRate * e)
                    : Math.max(0, this.elem.data.op - p));
              else {
                (!e || e > l.length - 1) && (e = l.length - 1);
                r = (s = l[e].t) - p;
              }
              if ("pingpong" === t) {
                if (Math.floor((p - h) / r) % 2 == 0)
                  return this.getValueAtTime(
                    (((p - h) % r) + p) / this.comp.globalData.frameRate,
                    0
                  );
              } else {
                if ("offset" === t) {
                  var f = this.getValueAtTime(
                      p / this.comp.globalData.frameRate,
                      0
                    ),
                    m = this.getValueAtTime(
                      s / this.comp.globalData.frameRate,
                      0
                    ),
                    c = this.getValueAtTime(
                      (r - ((p - h) % r) + p) / this.comp.globalData.frameRate,
                      0
                    ),
                    d = Math.floor((p - h) / r) + 1;
                  if (this.pv.length) {
                    n = (o = new Array(f.length)).length;
                    for (a = 0; a < n; a += 1) o[a] = c[a] - (m[a] - f[a]) * d;
                    return o;
                  }
                  return c - (m - f) * d;
                }
                if ("continue" === t) {
                  var u = this.getValueAtTime(
                      p / this.comp.globalData.frameRate,
                      0
                    ),
                    y = this.getValueAtTime(
                      (p + 0.001) / this.comp.globalData.frameRate,
                      0
                    );
                  if (this.pv.length) {
                    n = (o = new Array(u.length)).length;
                    for (a = 0; a < n; a += 1)
                      o[a] = u[a] + ((u[a] - y[a]) * (p - h)) / 0.001;
                    return o;
                  }
                  return u + ((u - y) * (p - h)) / 0.001;
                }
              }
              return this.getValueAtTime(
                (r - (((p - h) % r) + p)) / this.comp.globalData.frameRate,
                0
              );
            }
            function i(t, e) {
              if (!this.k) return this.pv;
              t = 0.5 * (t || 0.4);
              if ((e = Math.floor(e || 5)) <= 1) return this.pv;
              var i,
                r,
                s = this.comp.renderedFrame / this.comp.globalData.frameRate,
                a = s - t,
                n = e > 1 ? (s + t - a) / (e - 1) : 1,
                o = 0,
                h = 0;
              i = this.pv.length
                ? createTypedArray("float32", this.pv.length)
                : 0;
              for (; o < e; ) {
                r = this.getValueAtTime(a + o * n);
                if (this.pv.length)
                  for (h = 0; h < this.pv.length; h += 1) i[h] += r[h];
                else i += r;
                o += 1;
              }
              if (this.pv.length)
                for (h = 0; h < this.pv.length; h += 1) i[h] /= e;
              else i /= e;
              return i;
            }
            function r(t) {
              this._transformCachingAtTime ||
                (this._transformCachingAtTime = { v: new Matrix() });
              var e = this._transformCachingAtTime.v;
              e.cloneFromProps(this.pre.props);
              if (this.appliedTransformations < 1) {
                var i = this.a.getValueAtTime(t);
                e.translate(
                  -i[0] * this.a.mult,
                  -i[1] * this.a.mult,
                  i[2] * this.a.mult
                );
              }
              if (this.appliedTransformations < 2) {
                var r = this.s.getValueAtTime(t);
                e.scale(
                  r[0] * this.s.mult,
                  r[1] * this.s.mult,
                  r[2] * this.s.mult
                );
              }
              if (this.sk && this.appliedTransformations < 3) {
                var s = this.sk.getValueAtTime(t),
                  a = this.sa.getValueAtTime(t);
                e.skewFromAxis(-s * this.sk.mult, a * this.sa.mult);
              }
              if (this.r && this.appliedTransformations < 4) {
                var n = this.r.getValueAtTime(t);
                e.rotate(-n * this.r.mult);
              } else if (!this.r && this.appliedTransformations < 4) {
                var o = this.rz.getValueAtTime(t),
                  h = this.ry.getValueAtTime(t),
                  l = this.rx.getValueAtTime(t),
                  p = this.or.getValueAtTime(t);
                e.rotateZ(-o * this.rz.mult)
                  .rotateY(h * this.ry.mult)
                  .rotateX(l * this.rx.mult)
                  .rotateZ(-p[2] * this.or.mult)
                  .rotateY(p[1] * this.or.mult)
                  .rotateX(p[0] * this.or.mult);
              }
              if (this.data.p && this.data.p.s) {
                var f = this.px.getValueAtTime(t),
                  m = this.py.getValueAtTime(t);
                if (this.data.p.z) {
                  var c = this.pz.getValueAtTime(t);
                  e.translate(
                    f * this.px.mult,
                    m * this.py.mult,
                    -c * this.pz.mult
                  );
                } else e.translate(f * this.px.mult, m * this.py.mult, 0);
              } else {
                var d = this.p.getValueAtTime(t);
                e.translate(
                  d[0] * this.p.mult,
                  d[1] * this.p.mult,
                  -d[2] * this.p.mult
                );
              }
              return e;
            }
            function s() {
              return this.v.clone(new Matrix());
            }
            var a = TransformPropertyFactory.getTransformProperty;
            TransformPropertyFactory.getTransformProperty = function (t, e, i) {
              var n = a(t, e, i);
              n.dynamicProperties.length
                ? (n.getValueAtTime = r.bind(n))
                : (n.getValueAtTime = s.bind(n));
              n.setGroupProperty = expressionHelpers.setGroupProperty;
              return n;
            };
            var n = PropertyFactory.getProp;
            PropertyFactory.getProp = function (r, s, a, o, h) {
              var l = n(r, s, a, o, h);
              l.kf
                ? (l.getValueAtTime = expressionHelpers.getValueAtTime.bind(l))
                : (l.getValueAtTime =
                    expressionHelpers.getStaticValueAtTime.bind(l));
              l.setGroupProperty = expressionHelpers.setGroupProperty;
              l.loopOut = t;
              l.loopIn = e;
              l.smooth = i;
              l.getVelocityAtTime = expressionHelpers.getVelocityAtTime.bind(l);
              l.getSpeedAtTime = expressionHelpers.getSpeedAtTime.bind(l);
              l.numKeys = 1 === s.a ? s.k.length : 0;
              l.propertyIndex = s.ix;
              var p = 0;
              0 !== a &&
                (p = createTypedArray(
                  "float32",
                  1 === s.a ? s.k[0].s.length : s.k.length
                ));
              l._cachingAtTime = {
                lastFrame: initialDefaultFrame,
                lastIndex: 0,
                value: p,
              };
              expressionHelpers.searchExpressions(r, s, l);
              l.k && h.addDynamicProperty(l);
              return l;
            };
            var o = ShapePropertyFactory.getConstructorFunction(),
              h = ShapePropertyFactory.getKeyframedConstructorFunction();
            function l() {}
            l.prototype = {
              vertices: function (t, e) {
                this.k && this.getValue();
                var i,
                  r = this.v;
                void 0 !== e && (r = this.getValueAtTime(e, 0));
                var s = r._length,
                  a = r[t],
                  n = r.v,
                  o = createSizedArray(s);
                for (i = 0; i < s; i += 1)
                  o[i] =
                    "i" === t || "o" === t
                      ? [a[i][0] - n[i][0], a[i][1] - n[i][1]]
                      : [a[i][0], a[i][1]];
                return o;
              },
              points: function (t) {
                return this.vertices("v", t);
              },
              inTangents: function (t) {
                return this.vertices("i", t);
              },
              outTangents: function (t) {
                return this.vertices("o", t);
              },
              isClosed: function () {
                return this.v.c;
              },
              pointOnPath: function (t, e) {
                var i = this.v;
                void 0 !== e && (i = this.getValueAtTime(e, 0));
                this._segmentsLength ||
                  (this._segmentsLength = bez.getSegmentsLength(i));
                for (
                  var r,
                    s = this._segmentsLength,
                    a = s.lengths,
                    n = s.totalLength * t,
                    o = 0,
                    h = a.length,
                    l = 0;
                  o < h;

                ) {
                  if (l + a[o].addedLength > n) {
                    var p = o,
                      f = i.c && o === h - 1 ? 0 : o + 1,
                      m = (n - l) / a[o].addedLength;
                    r = bez.getPointInSegment(
                      i.v[p],
                      i.v[f],
                      i.o[p],
                      i.i[f],
                      m,
                      a[o]
                    );
                    break;
                  }
                  l += a[o].addedLength;
                  o += 1;
                }
                r ||
                  (r = i.c
                    ? [i.v[0][0], i.v[0][1]]
                    : [i.v[i._length - 1][0], i.v[i._length - 1][1]]);
                return r;
              },
              vectorOnPath: function (t, e, i) {
                1 == t ? (t = this.v.c) : 0 == t && (t = 0.999);
                var r = this.pointOnPath(t, e),
                  s = this.pointOnPath(t + 0.001, e),
                  a = s[0] - r[0],
                  n = s[1] - r[1],
                  o = Math.sqrt(Math.pow(a, 2) + Math.pow(n, 2));
                return 0 === o
                  ? [0, 0]
                  : "tangent" === i
                  ? [a / o, n / o]
                  : [-n / o, a / o];
              },
              tangentOnPath: function (t, e) {
                return this.vectorOnPath(t, e, "tangent");
              },
              normalOnPath: function (t, e) {
                return this.vectorOnPath(t, e, "normal");
              },
              setGroupProperty: expressionHelpers.setGroupProperty,
              getValueAtTime: expressionHelpers.getStaticValueAtTime,
            };
            extendPrototype([l], o);
            extendPrototype([l], h);
            h.prototype.getValueAtTime = function (t) {
              this._cachingAtTime ||
                (this._cachingAtTime = {
                  shapeValue: shapePool.clone(this.pv),
                  lastIndex: 0,
                  lastTime: initialDefaultFrame,
                });
              t *= this.elem.globalData.frameRate;
              if ((t -= this.offsetTime) !== this._cachingAtTime.lastTime) {
                this._cachingAtTime.lastIndex =
                  this._cachingAtTime.lastTime < t
                    ? this._caching.lastIndex
                    : 0;
                this._cachingAtTime.lastTime = t;
                this.interpolateShape(
                  t,
                  this._cachingAtTime.shapeValue,
                  this._cachingAtTime
                );
              }
              return this._cachingAtTime.shapeValue;
            };
            h.prototype.initiateExpression =
              ExpressionManager.initiateExpression;
            var p = ShapePropertyFactory.getShapeProp;
            ShapePropertyFactory.getShapeProp = function (t, e, i, r, s) {
              var a = p(t, e, i, r, s);
              a.propertyIndex = e.ix;
              a.lock = !1;
              3 === i
                ? expressionHelpers.searchExpressions(t, e.pt, a)
                : 4 === i && expressionHelpers.searchExpressions(t, e.ks, a);
              a.k && t.addDynamicProperty(a);
              return a;
            };
          }
          function initialize$1() {
            addPropertyDecorator();
          }
          function addDecorator() {
            TextProperty.prototype.getExpressionValue = function (t, e) {
              var i = this.calculateExpression(e);
              if (t.t !== i) {
                var r = {};
                this.copyData(r, t);
                r.t = i.toString();
                r.__complete = !1;
                return r;
              }
              return t;
            };
            TextProperty.prototype.searchProperty = function () {
              var t = this.searchKeyframes(),
                e = this.searchExpressions();
              this.kf = t || e;
              return this.kf;
            };
            TextProperty.prototype.searchExpressions = function () {
              if (this.data.d.x) {
                this.calculateExpression =
                  ExpressionManager.initiateExpression.bind(this)(
                    this.elem,
                    this.data.d,
                    this
                  );
                this.addEffect(this.getExpressionValue.bind(this));
                return !0;
              }
              return null;
            };
          }
          function initialize() {
            addDecorator();
          }
          function SVGComposableEffect() {}
          SVGComposableEffect.prototype = {
            createMergeNode: function (t, e) {
              var i,
                r,
                s = createNS("feMerge");
              s.setAttribute("result", t);
              for (r = 0; r < e.length; r += 1) {
                (i = createNS("feMergeNode")).setAttribute("in", e[r]);
                s.appendChild(i);
                s.appendChild(i);
              }
              return s;
            },
          };
          function SVGTintFilter(t, e, i, r, s) {
            this.filterManager = e;
            var a = createNS("feColorMatrix");
            a.setAttribute("type", "matrix");
            a.setAttribute("color-interpolation-filters", "linearRGB");
            a.setAttribute(
              "values",
              "0.3333 0.3333 0.3333 0 0 0.3333 0.3333 0.3333 0 0 0.3333 0.3333 0.3333 0 0 0 0 0 1 0"
            );
            a.setAttribute("result", r + "_tint_1");
            t.appendChild(a);
            (a = createNS("feColorMatrix")).setAttribute("type", "matrix");
            a.setAttribute("color-interpolation-filters", "sRGB");
            a.setAttribute("values", "1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 1 0");
            a.setAttribute("result", r + "_tint_2");
            t.appendChild(a);
            this.matrixFilter = a;
            var n = this.createMergeNode(r, [s, r + "_tint_1", r + "_tint_2"]);
            t.appendChild(n);
          }
          extendPrototype([SVGComposableEffect], SVGTintFilter);
          SVGTintFilter.prototype.renderFrame = function (t) {
            if (t || this.filterManager._mdf) {
              var e = this.filterManager.effectElements[0].p.v,
                i = this.filterManager.effectElements[1].p.v,
                r = this.filterManager.effectElements[2].p.v / 100;
              this.matrixFilter.setAttribute(
                "values",
                i[0] -
                  e[0] +
                  " 0 0 0 " +
                  e[0] +
                  " " +
                  (i[1] - e[1]) +
                  " 0 0 0 " +
                  e[1] +
                  " " +
                  (i[2] - e[2]) +
                  " 0 0 0 " +
                  e[2] +
                  " 0 0 0 " +
                  r +
                  " 0"
              );
            }
          };
          function SVGFillFilter(t, e, i, r) {
            this.filterManager = e;
            var s = createNS("feColorMatrix");
            s.setAttribute("type", "matrix");
            s.setAttribute("color-interpolation-filters", "sRGB");
            s.setAttribute("values", "1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 1 0");
            s.setAttribute("result", r);
            t.appendChild(s);
            this.matrixFilter = s;
          }
          SVGFillFilter.prototype.renderFrame = function (t) {
            if (t || this.filterManager._mdf) {
              var e = this.filterManager.effectElements[2].p.v,
                i = this.filterManager.effectElements[6].p.v;
              this.matrixFilter.setAttribute(
                "values",
                "0 0 0 0 " +
                  e[0] +
                  " 0 0 0 0 " +
                  e[1] +
                  " 0 0 0 0 " +
                  e[2] +
                  " 0 0 0 " +
                  i +
                  " 0"
              );
            }
          };
          function SVGStrokeEffect(t, e, i) {
            this.initialized = !1;
            this.filterManager = e;
            this.elem = i;
            this.paths = [];
          }
          SVGStrokeEffect.prototype.initialize = function () {
            var t,
              e,
              i,
              r,
              s =
                this.elem.layerElement.children ||
                this.elem.layerElement.childNodes;
            if (1 === this.filterManager.effectElements[1].p.v) {
              r = this.elem.maskManager.masksProperties.length;
              i = 0;
            } else r = 1 + (i = this.filterManager.effectElements[0].p.v - 1);
            (e = createNS("g")).setAttribute("fill", "none");
            e.setAttribute("stroke-linecap", "round");
            e.setAttribute("stroke-dashoffset", 1);
            for (; i < r; i += 1) {
              t = createNS("path");
              e.appendChild(t);
              this.paths.push({ p: t, m: i });
            }
            if (3 === this.filterManager.effectElements[10].p.v) {
              var a = createNS("mask"),
                n = createElementID();
              a.setAttribute("id", n);
              a.setAttribute("mask-type", "alpha");
              a.appendChild(e);
              this.elem.globalData.defs.appendChild(a);
              var o = createNS("g");
              o.setAttribute(
                "mask",
                "url(" + getLocationHref() + "#" + n + ")"
              );
              for (; s[0]; ) o.appendChild(s[0]);
              this.elem.layerElement.appendChild(o);
              this.masker = a;
              e.setAttribute("stroke", "#fff");
            } else if (
              1 === this.filterManager.effectElements[10].p.v ||
              2 === this.filterManager.effectElements[10].p.v
            ) {
              if (2 === this.filterManager.effectElements[10].p.v) {
                s =
                  this.elem.layerElement.children ||
                  this.elem.layerElement.childNodes;
                for (; s.length; ) this.elem.layerElement.removeChild(s[0]);
              }
              this.elem.layerElement.appendChild(e);
              this.elem.layerElement.removeAttribute("mask");
              e.setAttribute("stroke", "#fff");
            }
            this.initialized = !0;
            this.pathMasker = e;
          };
          SVGStrokeEffect.prototype.renderFrame = function (t) {
            this.initialized || this.initialize();
            var e,
              i,
              r,
              s = this.paths.length;
            for (e = 0; e < s; e += 1)
              if (-1 !== this.paths[e].m) {
                i = this.elem.maskManager.viewData[this.paths[e].m];
                r = this.paths[e].p;
                (t || this.filterManager._mdf || i.prop._mdf) &&
                  r.setAttribute("d", i.lastPath);
                if (
                  t ||
                  this.filterManager.effectElements[9].p._mdf ||
                  this.filterManager.effectElements[4].p._mdf ||
                  this.filterManager.effectElements[7].p._mdf ||
                  this.filterManager.effectElements[8].p._mdf ||
                  i.prop._mdf
                ) {
                  var a;
                  if (
                    0 !== this.filterManager.effectElements[7].p.v ||
                    100 !== this.filterManager.effectElements[8].p.v
                  ) {
                    var n =
                        0.01 *
                        Math.min(
                          this.filterManager.effectElements[7].p.v,
                          this.filterManager.effectElements[8].p.v
                        ),
                      o =
                        0.01 *
                        Math.max(
                          this.filterManager.effectElements[7].p.v,
                          this.filterManager.effectElements[8].p.v
                        ),
                      h = r.getTotalLength();
                    a = "0 0 0 " + h * n + " ";
                    var l,
                      p = h * (o - n),
                      f =
                        1 +
                        2 *
                          this.filterManager.effectElements[4].p.v *
                          this.filterManager.effectElements[9].p.v *
                          0.01,
                      m = Math.floor(p / f);
                    for (l = 0; l < m; l += 1)
                      a +=
                        "1 " +
                        2 *
                          this.filterManager.effectElements[4].p.v *
                          this.filterManager.effectElements[9].p.v *
                          0.01 +
                        " ";
                    a += "0 " + 10 * h + " 0 0";
                  } else
                    a =
                      "1 " +
                      2 *
                        this.filterManager.effectElements[4].p.v *
                        this.filterManager.effectElements[9].p.v *
                        0.01;
                  r.setAttribute("stroke-dasharray", a);
                }
              }
            (t || this.filterManager.effectElements[4].p._mdf) &&
              this.pathMasker.setAttribute(
                "stroke-width",
                2 * this.filterManager.effectElements[4].p.v
              );
            (t || this.filterManager.effectElements[6].p._mdf) &&
              this.pathMasker.setAttribute(
                "opacity",
                this.filterManager.effectElements[6].p.v
              );
            if (
              (1 === this.filterManager.effectElements[10].p.v ||
                2 === this.filterManager.effectElements[10].p.v) &&
              (t || this.filterManager.effectElements[3].p._mdf)
            ) {
              var c = this.filterManager.effectElements[3].p.v;
              this.pathMasker.setAttribute(
                "stroke",
                "rgb(" +
                  bmFloor(255 * c[0]) +
                  "," +
                  bmFloor(255 * c[1]) +
                  "," +
                  bmFloor(255 * c[2]) +
                  ")"
              );
            }
          };
          function SVGTritoneFilter(t, e, i, r) {
            this.filterManager = e;
            var s = createNS("feColorMatrix");
            s.setAttribute("type", "matrix");
            s.setAttribute("color-interpolation-filters", "linearRGB");
            s.setAttribute(
              "values",
              "0.3333 0.3333 0.3333 0 0 0.3333 0.3333 0.3333 0 0 0.3333 0.3333 0.3333 0 0 0 0 0 1 0"
            );
            t.appendChild(s);
            var a = createNS("feComponentTransfer");
            a.setAttribute("color-interpolation-filters", "sRGB");
            a.setAttribute("result", r);
            this.matrixFilter = a;
            var n = createNS("feFuncR");
            n.setAttribute("type", "table");
            a.appendChild(n);
            this.feFuncR = n;
            var o = createNS("feFuncG");
            o.setAttribute("type", "table");
            a.appendChild(o);
            this.feFuncG = o;
            var h = createNS("feFuncB");
            h.setAttribute("type", "table");
            a.appendChild(h);
            this.feFuncB = h;
            t.appendChild(a);
          }
          SVGTritoneFilter.prototype.renderFrame = function (t) {
            if (t || this.filterManager._mdf) {
              var e = this.filterManager.effectElements[0].p.v,
                i = this.filterManager.effectElements[1].p.v,
                r = this.filterManager.effectElements[2].p.v,
                s = r[0] + " " + i[0] + " " + e[0],
                a = r[1] + " " + i[1] + " " + e[1],
                n = r[2] + " " + i[2] + " " + e[2];
              this.feFuncR.setAttribute("tableValues", s);
              this.feFuncG.setAttribute("tableValues", a);
              this.feFuncB.setAttribute("tableValues", n);
            }
          };
          function SVGProLevelsFilter(t, e, i, r) {
            this.filterManager = e;
            var s = this.filterManager.effectElements,
              a = createNS("feComponentTransfer");
            (s[10].p.k ||
              0 !== s[10].p.v ||
              s[11].p.k ||
              1 !== s[11].p.v ||
              s[12].p.k ||
              1 !== s[12].p.v ||
              s[13].p.k ||
              0 !== s[13].p.v ||
              s[14].p.k ||
              1 !== s[14].p.v) &&
              (this.feFuncR = this.createFeFunc("feFuncR", a));
            (s[17].p.k ||
              0 !== s[17].p.v ||
              s[18].p.k ||
              1 !== s[18].p.v ||
              s[19].p.k ||
              1 !== s[19].p.v ||
              s[20].p.k ||
              0 !== s[20].p.v ||
              s[21].p.k ||
              1 !== s[21].p.v) &&
              (this.feFuncG = this.createFeFunc("feFuncG", a));
            (s[24].p.k ||
              0 !== s[24].p.v ||
              s[25].p.k ||
              1 !== s[25].p.v ||
              s[26].p.k ||
              1 !== s[26].p.v ||
              s[27].p.k ||
              0 !== s[27].p.v ||
              s[28].p.k ||
              1 !== s[28].p.v) &&
              (this.feFuncB = this.createFeFunc("feFuncB", a));
            (s[31].p.k ||
              0 !== s[31].p.v ||
              s[32].p.k ||
              1 !== s[32].p.v ||
              s[33].p.k ||
              1 !== s[33].p.v ||
              s[34].p.k ||
              0 !== s[34].p.v ||
              s[35].p.k ||
              1 !== s[35].p.v) &&
              (this.feFuncA = this.createFeFunc("feFuncA", a));
            if (this.feFuncR || this.feFuncG || this.feFuncB || this.feFuncA) {
              a.setAttribute("color-interpolation-filters", "sRGB");
              t.appendChild(a);
            }
            if (
              s[3].p.k ||
              0 !== s[3].p.v ||
              s[4].p.k ||
              1 !== s[4].p.v ||
              s[5].p.k ||
              1 !== s[5].p.v ||
              s[6].p.k ||
              0 !== s[6].p.v ||
              s[7].p.k ||
              1 !== s[7].p.v
            ) {
              (a = createNS("feComponentTransfer")).setAttribute(
                "color-interpolation-filters",
                "sRGB"
              );
              a.setAttribute("result", r);
              t.appendChild(a);
              this.feFuncRComposed = this.createFeFunc("feFuncR", a);
              this.feFuncGComposed = this.createFeFunc("feFuncG", a);
              this.feFuncBComposed = this.createFeFunc("feFuncB", a);
            }
          }
          SVGProLevelsFilter.prototype.createFeFunc = function (t, e) {
            var i = createNS(t);
            i.setAttribute("type", "table");
            e.appendChild(i);
            return i;
          };
          SVGProLevelsFilter.prototype.getTableValue = function (
            t,
            e,
            i,
            r,
            s
          ) {
            for (
              var a,
                n,
                o = 0,
                h = Math.min(t, e),
                l = Math.max(t, e),
                p = Array.call(null, { length: 256 }),
                f = 0,
                m = s - r,
                c = e - t;
              o <= 256;

            ) {
              n =
                (a = o / 256) <= h
                  ? c < 0
                    ? s
                    : r
                  : a >= l
                  ? c < 0
                    ? r
                    : s
                  : r + m * Math.pow((a - t) / c, 1 / i);
              p[f] = n;
              f += 1;
              o += 256 / 255;
            }
            return p.join(" ");
          };
          SVGProLevelsFilter.prototype.renderFrame = function (t) {
            if (t || this.filterManager._mdf) {
              var e,
                i = this.filterManager.effectElements;
              if (
                this.feFuncRComposed &&
                (t ||
                  i[3].p._mdf ||
                  i[4].p._mdf ||
                  i[5].p._mdf ||
                  i[6].p._mdf ||
                  i[7].p._mdf)
              ) {
                e = this.getTableValue(
                  i[3].p.v,
                  i[4].p.v,
                  i[5].p.v,
                  i[6].p.v,
                  i[7].p.v
                );
                this.feFuncRComposed.setAttribute("tableValues", e);
                this.feFuncGComposed.setAttribute("tableValues", e);
                this.feFuncBComposed.setAttribute("tableValues", e);
              }
              if (
                this.feFuncR &&
                (t ||
                  i[10].p._mdf ||
                  i[11].p._mdf ||
                  i[12].p._mdf ||
                  i[13].p._mdf ||
                  i[14].p._mdf)
              ) {
                e = this.getTableValue(
                  i[10].p.v,
                  i[11].p.v,
                  i[12].p.v,
                  i[13].p.v,
                  i[14].p.v
                );
                this.feFuncR.setAttribute("tableValues", e);
              }
              if (
                this.feFuncG &&
                (t ||
                  i[17].p._mdf ||
                  i[18].p._mdf ||
                  i[19].p._mdf ||
                  i[20].p._mdf ||
                  i[21].p._mdf)
              ) {
                e = this.getTableValue(
                  i[17].p.v,
                  i[18].p.v,
                  i[19].p.v,
                  i[20].p.v,
                  i[21].p.v
                );
                this.feFuncG.setAttribute("tableValues", e);
              }
              if (
                this.feFuncB &&
                (t ||
                  i[24].p._mdf ||
                  i[25].p._mdf ||
                  i[26].p._mdf ||
                  i[27].p._mdf ||
                  i[28].p._mdf)
              ) {
                e = this.getTableValue(
                  i[24].p.v,
                  i[25].p.v,
                  i[26].p.v,
                  i[27].p.v,
                  i[28].p.v
                );
                this.feFuncB.setAttribute("tableValues", e);
              }
              if (
                this.feFuncA &&
                (t ||
                  i[31].p._mdf ||
                  i[32].p._mdf ||
                  i[33].p._mdf ||
                  i[34].p._mdf ||
                  i[35].p._mdf)
              ) {
                e = this.getTableValue(
                  i[31].p.v,
                  i[32].p.v,
                  i[33].p.v,
                  i[34].p.v,
                  i[35].p.v
                );
                this.feFuncA.setAttribute("tableValues", e);
              }
            }
          };
          function SVGDropShadowEffect(t, e, i, r, s) {
            var a = e.container.globalData.renderConfig.filterSize,
              n = e.data.fs || a;
            t.setAttribute("x", n.x || a.x);
            t.setAttribute("y", n.y || a.y);
            t.setAttribute("width", n.width || a.width);
            t.setAttribute("height", n.height || a.height);
            this.filterManager = e;
            var o = createNS("feGaussianBlur");
            o.setAttribute("in", "SourceAlpha");
            o.setAttribute("result", r + "_drop_shadow_1");
            o.setAttribute("stdDeviation", "0");
            this.feGaussianBlur = o;
            t.appendChild(o);
            var h = createNS("feOffset");
            h.setAttribute("dx", "25");
            h.setAttribute("dy", "0");
            h.setAttribute("in", r + "_drop_shadow_1");
            h.setAttribute("result", r + "_drop_shadow_2");
            this.feOffset = h;
            t.appendChild(h);
            var l = createNS("feFlood");
            l.setAttribute("flood-color", "#00ff00");
            l.setAttribute("flood-opacity", "1");
            l.setAttribute("result", r + "_drop_shadow_3");
            this.feFlood = l;
            t.appendChild(l);
            var p = createNS("feComposite");
            p.setAttribute("in", r + "_drop_shadow_3");
            p.setAttribute("in2", r + "_drop_shadow_2");
            p.setAttribute("operator", "in");
            p.setAttribute("result", r + "_drop_shadow_4");
            t.appendChild(p);
            var f = this.createMergeNode(r, [r + "_drop_shadow_4", s]);
            t.appendChild(f);
          }
          extendPrototype([SVGComposableEffect], SVGDropShadowEffect);
          SVGDropShadowEffect.prototype.renderFrame = function (t) {
            if (t || this.filterManager._mdf) {
              (t || this.filterManager.effectElements[4].p._mdf) &&
                this.feGaussianBlur.setAttribute(
                  "stdDeviation",
                  this.filterManager.effectElements[4].p.v / 4
                );
              if (t || this.filterManager.effectElements[0].p._mdf) {
                var e = this.filterManager.effectElements[0].p.v;
                this.feFlood.setAttribute(
                  "flood-color",
                  rgbToHex(
                    Math.round(255 * e[0]),
                    Math.round(255 * e[1]),
                    Math.round(255 * e[2])
                  )
                );
              }
              (t || this.filterManager.effectElements[1].p._mdf) &&
                this.feFlood.setAttribute(
                  "flood-opacity",
                  this.filterManager.effectElements[1].p.v / 255
                );
              if (
                t ||
                this.filterManager.effectElements[2].p._mdf ||
                this.filterManager.effectElements[3].p._mdf
              ) {
                var i = this.filterManager.effectElements[3].p.v,
                  r =
                    (this.filterManager.effectElements[2].p.v - 90) * degToRads,
                  s = i * Math.cos(r),
                  a = i * Math.sin(r);
                this.feOffset.setAttribute("dx", s);
                this.feOffset.setAttribute("dy", a);
              }
            }
          };
          var _svgMatteSymbols = [];
          function SVGMatte3Effect(t, e, i) {
            this.initialized = !1;
            this.filterManager = e;
            this.filterElem = t;
            this.elem = i;
            i.matteElement = createNS("g");
            i.matteElement.appendChild(i.layerElement);
            i.matteElement.appendChild(i.transformedElement);
            i.baseElement = i.matteElement;
          }
          SVGMatte3Effect.prototype.findSymbol = function (t) {
            for (var e = 0, i = _svgMatteSymbols.length; e < i; ) {
              if (_svgMatteSymbols[e] === t) return _svgMatteSymbols[e];
              e += 1;
            }
            return null;
          };
          SVGMatte3Effect.prototype.replaceInParent = function (t, e) {
            var i = t.layerElement.parentNode;
            if (i) {
              for (
                var r, s = i.children, a = 0, n = s.length;
                a < n && s[a] !== t.layerElement;

              )
                a += 1;
              a <= n - 2 && (r = s[a + 1]);
              var o = createNS("use");
              o.setAttribute("href", "#" + e);
              r ? i.insertBefore(o, r) : i.appendChild(o);
            }
          };
          SVGMatte3Effect.prototype.setElementAsMask = function (t, e) {
            if (!this.findSymbol(e)) {
              var i = createElementID(),
                r = createNS("mask");
              r.setAttribute("id", e.layerId);
              r.setAttribute("mask-type", "alpha");
              _svgMatteSymbols.push(e);
              var s = t.globalData.defs;
              s.appendChild(r);
              var a = createNS("symbol");
              a.setAttribute("id", i);
              this.replaceInParent(e, i);
              a.appendChild(e.layerElement);
              s.appendChild(a);
              var n = createNS("use");
              n.setAttribute("href", "#" + i);
              r.appendChild(n);
              e.data.hd = !1;
              e.show();
            }
            t.setMatte(e.layerId);
          };
          SVGMatte3Effect.prototype.initialize = function () {
            for (
              var t = this.filterManager.effectElements[0].p.v,
                e = this.elem.comp.elements,
                i = 0,
                r = e.length;
              i < r;

            ) {
              e[i] &&
                e[i].data.ind === t &&
                this.setElementAsMask(this.elem, e[i]);
              i += 1;
            }
            this.initialized = !0;
          };
          SVGMatte3Effect.prototype.renderFrame = function () {
            this.initialized || this.initialize();
          };
          function SVGGaussianBlurEffect(t, e, i, r) {
            t.setAttribute("x", "-100%");
            t.setAttribute("y", "-100%");
            t.setAttribute("width", "300%");
            t.setAttribute("height", "300%");
            this.filterManager = e;
            var s = createNS("feGaussianBlur");
            s.setAttribute("result", r);
            t.appendChild(s);
            this.feGaussianBlur = s;
          }
          SVGGaussianBlurEffect.prototype.renderFrame = function (t) {
            if (t || this.filterManager._mdf) {
              var e = 0.3 * this.filterManager.effectElements[0].p.v,
                i = this.filterManager.effectElements[1].p.v,
                r = 3 == i ? 0 : e,
                s = 2 == i ? 0 : e;
              this.feGaussianBlur.setAttribute("stdDeviation", r + " " + s);
              var a =
                1 == this.filterManager.effectElements[2].p.v
                  ? "wrap"
                  : "duplicate";
              this.feGaussianBlur.setAttribute("edgeMode", a);
            }
          };
          registerRenderer("canvas", CanvasRenderer);
          registerRenderer("html", HybridRenderer);
          registerRenderer("svg", SVGRenderer);
          ShapeModifiers.registerModifier("tm", TrimModifier);
          ShapeModifiers.registerModifier("pb", PuckerAndBloatModifier);
          ShapeModifiers.registerModifier("rp", RepeaterModifier);
          ShapeModifiers.registerModifier("rd", RoundCornersModifier);
          setExpressionsPlugin(Expressions);
          initialize$1();
          initialize();
          registerEffect(20, SVGTintFilter, !0);
          registerEffect(21, SVGFillFilter, !0);
          registerEffect(22, SVGStrokeEffect, !1);
          registerEffect(23, SVGTritoneFilter, !0);
          registerEffect(24, SVGProLevelsFilter, !0);
          registerEffect(25, SVGDropShadowEffect, !0);
          registerEffect(28, SVGMatte3Effect, !1);
          registerEffect(29, SVGGaussianBlurEffect, !0);
          return lottie;
        }),
        (module.exports = factory()));
      var factory;
    },
  },
]);
//# sourceMappingURL=7cac7069e7c1e5dc8d0b.js.map
