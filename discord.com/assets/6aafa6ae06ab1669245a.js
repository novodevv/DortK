(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  [46197],
  {
    42792: (e) => {
      e.exports = (function () {
        function e(t, n, r) {
          function i(a, s) {
            if (!n[a]) {
              if (!t[a]) {
                if (o) return o(a, !0);
                var c = new Error("Cannot find module '" + a + "'");
                throw ((c.code = "MODULE_NOT_FOUND"), c);
              }
              var u = (n[a] = { exports: {} });
              t[a][0].call(
                u.exports,
                function (e) {
                  return i(t[a][1][e] || e);
                },
                u,
                u.exports,
                e,
                t,
                n,
                r
              );
            }
            return n[a].exports;
          }
          for (var o = void 0, a = 0; a < r.length; a++) i(r[a]);
          return i;
        }
        return e;
      })()(
        {
          1: [
            function (e, t, n) {
              "use strict";
              var r =
                (this && this.__importDefault) ||
                function (e) {
                  return e && e.__esModule ? e : { default: e };
                };
              Object.defineProperty(n, "__esModule", { value: !0 });
              n.PromiseGlobal = void 0;
              var i = r(e("promise-polyfill")),
                o = "undefined" != typeof Promise ? Promise : i.default;
              n.PromiseGlobal = o;
            },
            { "promise-polyfill": 71 },
          ],
          2: [
            function (e, t, n) {
              "use strict";
              var r = e("./lib/promise"),
                i = {};
              function o(e) {
                var t,
                  n = JSON.stringify(e);
                if (!e.forceScriptReload && (t = i[n])) return t;
                var o = document.createElement("script"),
                  a = e.dataAttributes || {},
                  s = e.container || document.head;
                o.src = e.src;
                o.id = e.id || "";
                o.async = !0;
                e.crossorigin &&
                  o.setAttribute("crossorigin", "" + e.crossorigin);
                Object.keys(a).forEach(function (e) {
                  o.setAttribute("data-" + e, "" + a[e]);
                });
                t = new r.PromiseGlobal(function (t, n) {
                  o.addEventListener("load", function () {
                    t(o);
                  });
                  o.addEventListener("error", function () {
                    n(new Error(e.src + " failed to load."));
                  });
                  o.addEventListener("abort", function () {
                    n(new Error(e.src + " has aborted."));
                  });
                  s.appendChild(o);
                });
                i[n] = t;
                return t;
              }
              o.clearCache = function () {
                i = {};
              };
              t.exports = o;
            },
            { "./lib/promise": 1 },
          ],
          3: [
            function (e, t, n) {
              t.exports = e("./dist/load-script");
            },
            { "./dist/load-script": 2 },
          ],
          4: [
            function (e, t, n) {
              "use strict";
              t.exports = function (e) {
                e = e || window.navigator.userAgent;
                return /Android/i.test(e);
              };
            },
            {},
          ],
          5: [
            function (e, t, n) {
              "use strict";
              t.exports = function (e) {
                e = e || window.navigator.userAgent;
                return /CrOS/i.test(e);
              };
            },
            {},
          ],
          6: [
            function (e, t, n) {
              "use strict";
              var r = e("./is-edge"),
                i = e("./is-samsung"),
                o = e("./is-duckduckgo"),
                a = e("./is-opera"),
                s = e("./is-silk");
              t.exports = function (e) {
                return !(
                  (-1 ===
                    (e = e || window.navigator.userAgent).indexOf("Chrome") &&
                    -1 === e.indexOf("CriOS")) ||
                  r(e) ||
                  i(e) ||
                  o(e) ||
                  a(e) ||
                  s(e)
                );
              };
            },
            {
              "./is-duckduckgo": 7,
              "./is-edge": 8,
              "./is-opera": 20,
              "./is-samsung": 21,
              "./is-silk": 22,
            },
          ],
          7: [
            function (e, t, n) {
              "use strict";
              t.exports = function (e) {
                return (
                  -1 !==
                  (e = e || window.navigator.userAgent).indexOf("DuckDuckGo/")
                );
              };
            },
            {},
          ],
          8: [
            function (e, t, n) {
              "use strict";
              t.exports = function (e) {
                return (
                  -1 !== (e = e || window.navigator.userAgent).indexOf("Edge/")
                );
              };
            },
            {},
          ],
          9: [
            function (e, t, n) {
              "use strict";
              t.exports = function (e) {
                e = e || window.navigator.userAgent;
                return /Firefox/i.test(e);
              };
            },
            {},
          ],
          10: [
            function (e, t, n) {
              "use strict";
              var r = e("./is-ie11");
              t.exports = function (e) {
                return (
                  -1 !==
                    (e = e || window.navigator.userAgent).indexOf("MSIE") ||
                  r(e)
                );
              };
            },
            { "./is-ie11": 12 },
          ],
          11: [
            function (e, t, n) {
              "use strict";
              t.exports = function (e) {
                return (
                  -1 !==
                  (e = e || window.navigator.userAgent).indexOf("MSIE 10")
                );
              };
            },
            {},
          ],
          12: [
            function (e, t, n) {
              "use strict";
              t.exports = function (e) {
                return (
                  -1 !==
                  (e = e || window.navigator.userAgent).indexOf("Trident/7")
                );
              };
            },
            {},
          ],
          13: [
            function (e, t, n) {
              "use strict";
              t.exports = function (e) {
                return (
                  -1 !== (e = e || window.navigator.userAgent).indexOf("MSIE 9")
                );
              };
            },
            {},
          ],
          14: [
            function (e, t, n) {
              "use strict";
              t.exports = function (e) {
                e = e || window.navigator.userAgent;
                return /FxiOS/i.test(e);
              };
            },
            {},
          ],
          15: [
            function (e, t, n) {
              "use strict";
              var r = e("./is-ios");
              function i(e) {
                return /\bGSA\b/.test(e);
              }
              t.exports = function (e) {
                e = e || window.navigator.userAgent;
                return r(e) && i(e);
              };
            },
            { "./is-ios": 19 },
          ],
          16: [
            function (e, t, n) {
              "use strict";
              var r = e("./is-ios"),
                i = e("./is-ios-firefox"),
                o = /webkit/i;
              function a(e) {
                return o.test(e);
              }
              function s(e) {
                return e.indexOf("CriOS") > -1;
              }
              function c(e) {
                return e.indexOf("FBAN") > -1;
              }
              t.exports = function (e) {
                e = e || window.navigator.userAgent;
                return r(e) && a(e) && !s(e) && !i(e) && !c(e);
              };
            },
            { "./is-ios": 19, "./is-ios-firefox": 14 },
          ],
          17: [
            function (e, t, n) {
              "use strict";
              var r = e("./is-ios"),
                i = e("./is-ios-google-search-app");
              t.exports = function (e) {
                e = e || window.navigator.userAgent;
                return (
                  !!r(e) && (!!i(e) || /.+AppleWebKit(?!.*Safari)/i.test(e))
                );
              };
            },
            { "./is-ios": 19, "./is-ios-google-search-app": 15 },
          ],
          18: [
            function (e, t, n) {
              "use strict";
              var r = e("./is-ios-webview");
              t.exports = function (e, t) {
                t = void 0 !== t ? t : window.statusbar.visible;
                return r(e) && t;
              };
            },
            { "./is-ios-webview": 17 },
          ],
          19: [
            function (e, t, n) {
              "use strict";
              t.exports = function (e) {
                e = e || window.navigator.userAgent;
                return /iPhone|iPod|iPad/i.test(e);
              };
            },
            {},
          ],
          20: [
            function (e, t, n) {
              "use strict";
              t.exports = function (e) {
                return (
                  -1 !==
                    (e = e || window.navigator.userAgent).indexOf("OPR/") ||
                  -1 !== e.indexOf("Opera/") ||
                  -1 !== e.indexOf("OPT/")
                );
              };
            },
            {},
          ],
          21: [
            function (e, t, n) {
              "use strict";
              t.exports = function (e) {
                e = e || window.navigator.userAgent;
                return /SamsungBrowser/i.test(e);
              };
            },
            {},
          ],
          22: [
            function (e, t, n) {
              "use strict";
              t.exports = function (e) {
                return (
                  -1 !== (e = e || window.navigator.userAgent).indexOf("Silk/")
                );
              };
            },
            {},
          ],
          23: [
            function (e, t, n) {
              "use strict";
              var r = 48,
                i = e("./is-android"),
                o = e("./is-ios-firefox"),
                a = e("./is-ios-webview"),
                s = e("./is-chrome"),
                c = e("./is-samsung"),
                u = e("./is-duckduckgo");
              function d(e) {
                var t = (e = e || window.navigator.userAgent).match(
                  /CriOS\/(\d+)\./
                );
                return !!t && parseInt(t[1], 10) < r;
              }
              function l(e) {
                return (
                  (e = e || window.navigator.userAgent).indexOf("Opera Mini") >
                  -1
                );
              }
              function p(e) {
                var t = /Version\/[\d.]+/i;
                e = e || window.navigator.userAgent;
                return !!i(e) && t.test(e) && !l(e) && !u(e);
              }
              function _(e) {
                return !s(e) && !c(e) && /samsung/i.test(e);
              }
              t.exports = function (e) {
                e = e || window.navigator.userAgent;
                return !(a(e) || o(e) || p(e) || l(e) || d(e) || _(e));
              };
            },
            {
              "./is-android": 4,
              "./is-chrome": 6,
              "./is-duckduckgo": 7,
              "./is-ios-firefox": 14,
              "./is-ios-webview": 17,
              "./is-samsung": 21,
            },
          ],
          24: [
            function (e, t, n) {
              t.exports = e("./dist/is-android");
            },
            { "./dist/is-android": 4 },
          ],
          25: [
            function (e, t, n) {
              t.exports = e("./dist/is-chrome-os");
            },
            { "./dist/is-chrome-os": 5 },
          ],
          26: [
            function (e, t, n) {
              t.exports = e("./dist/is-chrome");
            },
            { "./dist/is-chrome": 6 },
          ],
          27: [
            function (e, t, n) {
              t.exports = e("./dist/is-edge");
            },
            {
              "./dist/is-edge": 8,
            },
          ],
          28: [
            function (e, t, n) {
              t.exports = e("./dist/is-firefox");
            },
            { "./dist/is-firefox": 9 },
          ],
          29: [
            function (e, t, n) {
              t.exports = e("./dist/is-ie");
            },
            { "./dist/is-ie": 10 },
          ],
          30: [
            function (e, t, n) {
              t.exports = e("./dist/is-ie10");
            },
            { "./dist/is-ie10": 11 },
          ],
          31: [
            function (e, t, n) {
              t.exports = e("./dist/is-ie9");
            },
            { "./dist/is-ie9": 13 },
          ],
          32: [
            function (e, t, n) {
              t.exports = e("./dist/is-ios-safari");
            },
            { "./dist/is-ios-safari": 16 },
          ],
          33: [
            function (e, t, n) {
              t.exports = e("./dist/is-ios-webview");
            },
            { "./dist/is-ios-webview": 17 },
          ],
          34: [
            function (e, t, n) {
              t.exports = e("./dist/is-ios-wkwebview");
            },
            { "./dist/is-ios-wkwebview": 18 },
          ],
          35: [
            function (e, t, n) {
              t.exports = e("./dist/is-ios");
            },
            { "./dist/is-ios": 19 },
          ],
          36: [
            function (e, t, n) {
              t.exports = e("./dist/is-samsung");
            },
            { "./dist/is-samsung": 21 },
          ],
          37: [
            function (e, t, n) {
              t.exports = e("./dist/supports-popups");
            },
            { "./dist/supports-popups": 23 },
          ],
          38: [
            function (e, t, n) {
              "use strict";
              Object.defineProperty(n, "__esModule", { value: !0 });
              n.toggle = n.remove = n.add = void 0;
              function r(e) {
                return e.className.trim().split(/\s+/);
              }
              function i(e) {
                for (var t = [], n = 1; n < arguments.length; n++)
                  t[n - 1] = arguments[n];
                e.className = r(e)
                  .filter(function (e) {
                    return -1 === t.indexOf(e);
                  })
                  .concat(t)
                  .join(" ");
              }
              n.add = i;
              function o(e) {
                for (var t = [], n = 1; n < arguments.length; n++)
                  t[n - 1] = arguments[n];
                e.className = r(e)
                  .filter(function (e) {
                    return -1 === t.indexOf(e);
                  })
                  .join(" ");
              }
              n.remove = o;
              function a(e, t, n) {
                n ? i(e, t) : o(e, t);
              }
              n.toggle = a;
            },
            {},
          ],
          39: [
            function (e, t, n) {
              "use strict";
              var r = (function () {
                function e() {
                  this._events = {};
                }
                e.prototype.on = function (e, t) {
                  this._events[e]
                    ? this._events[e].push(t)
                    : (this._events[e] = [t]);
                };
                e.prototype.off = function (e, t) {
                  var n = this._events[e];
                  if (n) {
                    var r = n.indexOf(t);
                    n.splice(r, 1);
                  }
                };
                e.prototype._emit = function (e) {
                  for (var t = [], n = 1; n < arguments.length; n++)
                    t[n - 1] = arguments[n];
                  var r = this._events[e];
                  r &&
                    r.forEach(function (e) {
                      e.apply(void 0, t);
                    });
                };
                e.prototype.hasListener = function (e) {
                  var t = this._events[e];
                  return !!t && t.length > 0;
                };
                e.createChild = function (t) {
                  t.prototype = Object.create(e.prototype, { constructor: t });
                };
                return e;
              })();
              t.exports = r;
            },
            {},
          ],
          40: [
            function (e, t, n) {
              "use strict";
              var r = "undefined" != typeof Promise ? Promise : null,
                i = (function () {
                  function e(t) {
                    var n = this;
                    if ("function" != typeof t) {
                      this._promise = new e.Promise(function (e, t) {
                        n._resolveFunction = e;
                        n._rejectFunction = t;
                      });
                      t = t || {};
                      this._onResolve = t.onResolve || e.defaultOnResolve;
                      this._onReject = t.onReject || e.defaultOnReject;
                      e.shouldCatchExceptions(t) &&
                        this._promise.catch(function () {});
                      this._resetState();
                    } else this._promise = new e.Promise(t);
                  }
                  e.defaultOnResolve = function (t) {
                    return e.Promise.resolve(t);
                  };
                  e.defaultOnReject = function (t) {
                    return e.Promise.reject(t);
                  };
                  e.setPromise = function (t) {
                    e.Promise = t;
                  };
                  e.shouldCatchExceptions = function (t) {
                    return t.hasOwnProperty("suppressUnhandledPromiseMessage")
                      ? Boolean(t.suppressUnhandledPromiseMessage)
                      : Boolean(e.suppressUnhandledPromiseMessage);
                  };
                  e.all = function (t) {
                    return e.Promise.all(t);
                  };
                  e.allSettled = function (t) {
                    return e.Promise.allSettled(t);
                  };
                  e.race = function (t) {
                    return e.Promise.race(t);
                  };
                  e.reject = function (t) {
                    return e.Promise.reject(t);
                  };
                  e.resolve = function (t) {
                    return e.Promise.resolve(t);
                  };
                  e.prototype.then = function () {
                    for (var e, t = [], n = 0; n < arguments.length; n++)
                      t[n] = arguments[n];
                    return (e = this._promise).then.apply(e, t);
                  };
                  e.prototype.catch = function () {
                    for (var e, t = [], n = 0; n < arguments.length; n++)
                      t[n] = arguments[n];
                    return (e = this._promise).catch.apply(e, t);
                  };
                  e.prototype.resolve = function (t) {
                    var n = this;
                    if (this.isFulfilled) return this;
                    this._setResolved();
                    e.Promise.resolve()
                      .then(function () {
                        return n._onResolve(t);
                      })
                      .then(function (e) {
                        n._resolveFunction(e);
                      })
                      .catch(function (e) {
                        n._resetState();
                        n.reject(e);
                      });
                    return this;
                  };
                  e.prototype.reject = function (t) {
                    var n = this;
                    if (this.isFulfilled) return this;
                    this._setRejected();
                    e.Promise.resolve()
                      .then(function () {
                        return n._onReject(t);
                      })
                      .then(function (e) {
                        n._setResolved();
                        n._resolveFunction(e);
                      })
                      .catch(function (e) {
                        return n._rejectFunction(e);
                      });
                    return this;
                  };
                  e.prototype._resetState = function () {
                    this.isFulfilled = !1;
                    this.isResolved = !1;
                    this.isRejected = !1;
                  };
                  e.prototype._setResolved = function () {
                    this.isFulfilled = !0;
                    this.isResolved = !0;
                    this.isRejected = !1;
                  };
                  e.prototype._setRejected = function () {
                    this.isFulfilled = !0;
                    this.isResolved = !1;
                    this.isRejected = !0;
                  };
                  e.Promise = r;
                  return e;
                })();
              t.exports = i;
            },
            {},
          ],
          41: [
            function (e, t, n) {
              "use strict";
              var r = e("./lib/set-attributes"),
                i = e("./lib/default-attributes"),
                o = e("./lib/assign");
              t.exports = function (e) {
                void 0 === e && (e = {});
                var t = document.createElement("iframe"),
                  n = o.assign({}, i.defaultAttributes, e);
                if (n.style && "string" != typeof n.style) {
                  o.assign(t.style, n.style);
                  delete n.style;
                }
                r.setAttributes(t, n);
                t.getAttribute("id") || (t.id = t.name);
                return t;
              };
            },
            {
              "./lib/assign": 42,
              "./lib/default-attributes": 43,
              "./lib/set-attributes": 44,
            },
          ],
          42: [
            function (e, t, n) {
              "use strict";
              Object.defineProperty(n, "__esModule", { value: !0 });
              n.assign = void 0;
              function r(e) {
                for (var t = [], n = 1; n < arguments.length; n++)
                  t[n - 1] = arguments[n];
                t.forEach(function (t) {
                  "object" == typeof t &&
                    Object.keys(t).forEach(function (n) {
                      e[n] = t[n];
                    });
                });
                return e;
              }
              n.assign = r;
            },
            {},
          ],
          43: [
            function (e, t, n) {
              "use strict";
              Object.defineProperty(n, "__esModule", { value: !0 });
              n.defaultAttributes = void 0;
              n.defaultAttributes = {
                src: "about:blank",
                frameBorder: 0,
                allowtransparency: !0,
                scrolling: "no",
              };
            },
            {},
          ],
          44: [
            function (e, t, n) {
              "use strict";
              Object.defineProperty(n, "__esModule", { value: !0 });
              n.setAttributes = void 0;
              function r(e, t) {
                for (var n in t)
                  if (t.hasOwnProperty(n)) {
                    var r = t[n];
                    null == r ? e.removeAttribute(n) : e.setAttribute(n, r);
                  }
              }
              n.setAttributes = r;
            },
            {},
          ],
          45: [
            function (e, t, n) {
              "use strict";
              function r() {
                return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(
                  /[xy]/g,
                  function (e) {
                    var t = (16 * Math.random()) | 0;
                    return ("x" === e ? t : (3 & t) | 8).toString(16);
                  }
                );
              }
              t.exports = r;
            },
            {},
          ],
          46: [
            function (e, t, n) {
              "use strict";
              Object.defineProperty(n, "__esModule", { value: !0 });
              function r(e) {
                return function () {
                  for (var t = [], n = 0; n < arguments.length; n++)
                    t[n] = arguments[n];
                  setTimeout(function () {
                    try {
                      e.apply(void 0, t);
                    } catch (e) {
                      console.log("Error in callback function");
                      console.log(e);
                    }
                  }, 1);
                };
              }
              n.deferred = r;
            },
            {},
          ],
          47: [
            function (e, t, n) {
              "use strict";
              Object.defineProperty(n, "__esModule", {
                value: !0,
              });
              function r(e) {
                var t = !1;
                return function () {
                  for (var n = [], r = 0; r < arguments.length; r++)
                    n[r] = arguments[r];
                  if (!t) {
                    t = !0;
                    e.apply(void 0, n);
                  }
                };
              }
              n.once = r;
            },
            {},
          ],
          48: [
            function (e, t, n) {
              "use strict";
              Object.defineProperty(n, "__esModule", { value: !0 });
              function r(e, t) {
                if (!t) return e;
                e.then(function (e) {
                  return t(null, e);
                }).catch(function (e) {
                  return t(e);
                });
              }
              n.promiseOrCallback = r;
            },
            {},
          ],
          49: [
            function (e, t, n) {
              "use strict";
              var r = e("./lib/deferred"),
                i = e("./lib/once"),
                o = e("./lib/promise-or-callback");
              function a(e) {
                return function () {
                  for (var t, n = [], a = 0; a < arguments.length; a++)
                    n[a] = arguments[a];
                  if ("function" == typeof n[n.length - 1]) {
                    t = n.pop();
                    t = i.once(r.deferred(t));
                  }
                  return o.promiseOrCallback(e.apply(this, n), t);
                };
              }
              a.wrapPrototype = function (e, t) {
                void 0 === t && (t = {});
                var n = t.ignoreMethods || [],
                  r = !0 === t.transformPrivateMethods;
                Object.getOwnPropertyNames(e.prototype)
                  .filter(function (t) {
                    var i,
                      o =
                        "constructor" !== t &&
                        "function" == typeof e.prototype[t],
                      a = -1 === n.indexOf(t);
                    i = !!r || "_" !== t.charAt(0);
                    return o && i && a;
                  })
                  .forEach(function (t) {
                    var n = e.prototype[t];
                    e.prototype[t] = a(n);
                  });
                return e;
              };
              t.exports = a;
            },
            {
              "./lib/deferred": 46,
              "./lib/once": 47,
              "./lib/promise-or-callback": 48,
            },
          ],
          50: [
            function (e, t, n) {
              "use strict";
              var r =
                  (this && this.__assign) ||
                  function () {
                    r =
                      Object.assign ||
                      function (e) {
                        for (var t, n = 1, r = arguments.length; n < r; n++) {
                          t = arguments[n];
                          for (var i in t)
                            Object.prototype.hasOwnProperty.call(t, i) &&
                              (e[i] = t[i]);
                        }
                        return e;
                      };
                    return r.apply(this, arguments);
                  },
                i = e("./lib/card-types"),
                o = e("./lib/add-matching-cards-to-results"),
                a = e("./lib/is-valid-input-type"),
                s = e("./lib/find-best-match"),
                c = e("./lib/clone"),
                u = {},
                d = {
                  VISA: "visa",
                  MASTERCARD: "mastercard",
                  AMERICAN_EXPRESS: "american-express",
                  DINERS_CLUB: "diners-club",
                  DISCOVER: "discover",
                  JCB: "jcb",
                  UNIONPAY: "unionpay",
                  MAESTRO: "maestro",
                  ELO: "elo",
                  MIR: "mir",
                  HIPER: "hiper",
                  HIPERCARD: "hipercard",
                },
                l = [
                  d.VISA,
                  d.MASTERCARD,
                  d.AMERICAN_EXPRESS,
                  d.DINERS_CLUB,
                  d.DISCOVER,
                  d.JCB,
                  d.UNIONPAY,
                  d.MAESTRO,
                  d.ELO,
                  d.MIR,
                  d.HIPER,
                  d.HIPERCARD,
                ],
                p = c.clone(l);
              function _(e) {
                return u[e] || i[e];
              }
              function E() {
                return p.map(function (e) {
                  return c.clone(_(e));
                });
              }
              function h(e, t) {
                void 0 === t && (t = !1);
                var n = p.indexOf(e);
                if (!t && -1 === n)
                  throw new Error('"' + e + '" is not a supported card type.');
                return n;
              }
              function f(e) {
                var t = [];
                if (!a.isValidInputType(e)) return t;
                if (0 === e.length) return E();
                p.forEach(function (n) {
                  var r = _(n);
                  o.addMatchingCardsToResults(e, r, t);
                });
                var n = s.findBestMatch(t);
                return n ? [n] : t;
              }
              f.getTypeInfo = function (e) {
                return c.clone(_(e));
              };
              f.removeCard = function (e) {
                var t = h(e);
                p.splice(t, 1);
              };
              f.addCard = function (e) {
                var t = h(e.type, !0);
                u[e.type] = e;
                -1 === t && p.push(e.type);
              };
              f.updateCard = function (e, t) {
                var n = u[e] || i[e];
                if (!n)
                  throw new Error(
                    '"' +
                      e +
                      "\" is not a recognized type. Use `addCard` instead.'"
                  );
                if (t.type && n.type !== t.type)
                  throw new Error("Cannot overwrite type parameter.");
                var o = c.clone(n);
                o = r(r({}, o), t);
                u[o.type] = o;
              };
              f.changeOrder = function (e, t) {
                var n = h(e);
                p.splice(n, 1);
                p.splice(t, 0, e);
              };
              f.resetModifications = function () {
                p = c.clone(l);
                u = {};
              };
              f.types = d;
              t.exports = f;
            },
            {
              "./lib/add-matching-cards-to-results": 51,
              "./lib/card-types": 52,
              "./lib/clone": 53,
              "./lib/find-best-match": 54,
              "./lib/is-valid-input-type": 55,
            },
          ],
          51: [
            function (e, t, n) {
              "use strict";
              Object.defineProperty(n, "__esModule", { value: !0 });
              n.addMatchingCardsToResults = void 0;
              var r = e("./clone"),
                i = e("./matches");
              function o(e, t, n) {
                var o, a;
                for (o = 0; o < t.patterns.length; o++) {
                  var s = t.patterns[o];
                  if (i.matches(e, s)) {
                    var c = r.clone(t);
                    a = Array.isArray(s)
                      ? String(s[0]).length
                      : String(s).length;
                    e.length >= a && (c.matchStrength = a);
                    n.push(c);
                    break;
                  }
                }
              }
              n.addMatchingCardsToResults = o;
            },
            { "./clone": 53, "./matches": 56 },
          ],
          52: [
            function (e, t, n) {
              "use strict";
              var r = {
                visa: {
                  niceType: "Visa",
                  type: "visa",
                  patterns: [4],
                  gaps: [4, 8, 12],
                  lengths: [16, 18, 19],
                  code: { name: "CVV", size: 3 },
                },
                mastercard: {
                  niceType: "Mastercard",
                  type: "mastercard",
                  patterns: [
                    [51, 55],
                    [2221, 2229],
                    [223, 229],
                    [23, 26],
                    [270, 271],
                    2720,
                  ],
                  gaps: [4, 8, 12],
                  lengths: [16],
                  code: { name: "CVC", size: 3 },
                },
                "american-express": {
                  niceType: "American Express",
                  type: "american-express",
                  patterns: [34, 37],
                  gaps: [4, 10],
                  lengths: [15],
                  code: { name: "CID", size: 4 },
                },
                "diners-club": {
                  niceType: "Diners Club",
                  type: "diners-club",
                  patterns: [[300, 305], 36, 38, 39],
                  gaps: [4, 10],
                  lengths: [14, 16, 19],
                  code: { name: "CVV", size: 3 },
                },
                discover: {
                  niceType: "Discover",
                  type: "discover",
                  patterns: [6011, [644, 649], 65],
                  gaps: [4, 8, 12],
                  lengths: [16, 19],
                  code: { name: "CID", size: 3 },
                },
                jcb: {
                  niceType: "JCB",
                  type: "jcb",
                  patterns: [2131, 1800, [3528, 3589]],
                  gaps: [4, 8, 12],
                  lengths: [16, 17, 18, 19],
                  code: { name: "CVV", size: 3 },
                },
                unionpay: {
                  niceType: "UnionPay",
                  type: "unionpay",
                  patterns: [
                    620,
                    [624, 626],
                    [62100, 62182],
                    [62184, 62187],
                    [62185, 62197],
                    [62200, 62205],
                    [622010, 622999],
                    622018,
                    [622019, 622999],
                    [62207, 62209],
                    [622126, 622925],
                    [623, 626],
                    6270,
                    6272,
                    6276,
                    [627700, 627779],
                    [627781, 627799],
                    [6282, 6289],
                    6291,
                    6292,
                    810,
                    [8110, 8131],
                    [8132, 8151],
                    [8152, 8163],
                    [8164, 8171],
                  ],
                  gaps: [4, 8, 12],
                  lengths: [14, 15, 16, 17, 18, 19],
                  code: { name: "CVN", size: 3 },
                },
                maestro: {
                  niceType: "Maestro",
                  type: "maestro",
                  patterns: [
                    493698,
                    [5e5, 504174],
                    [504176, 506698],
                    [506779, 508999],
                    [56, 59],
                    63,
                    67,
                    6,
                  ],
                  gaps: [4, 8, 12],
                  lengths: [12, 13, 14, 15, 16, 17, 18, 19],
                  code: { name: "CVC", size: 3 },
                },
                elo: {
                  niceType: "Elo",
                  type: "elo",
                  patterns: [
                    401178,
                    401179,
                    438935,
                    457631,
                    457632,
                    431274,
                    451416,
                    457393,
                    504175,
                    [506699, 506778],
                    [509e3, 509999],
                    627780,
                    636297,
                    636368,
                    [650031, 650033],
                    [650035, 650051],
                    [650405, 650439],
                    [650485, 650538],
                    [650541, 650598],
                    [650700, 650718],
                    [650720, 650727],
                    [650901, 650978],
                    [651652, 651679],
                    [655e3, 655019],
                    [655021, 655058],
                  ],
                  gaps: [4, 8, 12],
                  lengths: [16],
                  code: { name: "CVE", size: 3 },
                },
                mir: {
                  niceType: "Mir",
                  type: "mir",
                  patterns: [[2200, 2204]],
                  gaps: [4, 8, 12],
                  lengths: [16, 17, 18, 19],
                  code: { name: "CVP2", size: 3 },
                },
                hiper: {
                  niceType: "Hiper",
                  type: "hiper",
                  patterns: [
                    637095, 63737423, 63743358, 637568, 637599, 637609, 637612,
                  ],
                  gaps: [4, 8, 12],
                  lengths: [16],
                  code: { name: "CVC", size: 3 },
                },
                hipercard: {
                  niceType: "Hipercard",
                  type: "hipercard",
                  patterns: [606282],
                  gaps: [4, 8, 12],
                  lengths: [16],
                  code: { name: "CVC", size: 3 },
                },
              };
              t.exports = r;
            },
            {},
          ],
          53: [
            function (e, t, n) {
              "use strict";
              Object.defineProperty(n, "__esModule", { value: !0 });
              n.clone = void 0;
              function r(e) {
                return e ? JSON.parse(JSON.stringify(e)) : null;
              }
              n.clone = r;
            },
            {},
          ],
          54: [
            function (e, t, n) {
              "use strict";
              Object.defineProperty(n, "__esModule", { value: !0 });
              n.findBestMatch = void 0;
              function r(e) {
                var t = e.filter(function (e) {
                  return e.matchStrength;
                }).length;
                return t > 0 && t === e.length;
              }
              function i(e) {
                return r(e)
                  ? e.reduce(function (e, t) {
                      return e
                        ? Number(e.matchStrength) < Number(t.matchStrength)
                          ? t
                          : e
                        : t;
                    })
                  : null;
              }
              n.findBestMatch = i;
            },
            {},
          ],
          55: [
            function (e, t, n) {
              "use strict";
              Object.defineProperty(n, "__esModule", { value: !0 });
              n.isValidInputType = void 0;
              function r(e) {
                return "string" == typeof e || e instanceof String;
              }
              n.isValidInputType = r;
            },
            {},
          ],
          56: [
            function (e, t, n) {
              "use strict";
              Object.defineProperty(n, "__esModule", { value: !0 });
              n.matches = void 0;
              function r(e, t, n) {
                var r = String(t).length,
                  i = e.substr(0, r),
                  o = parseInt(i, 10);
                t = parseInt(String(t).substr(0, i.length), 10);
                n = parseInt(String(n).substr(0, i.length), 10);
                return o >= t && o <= n;
              }
              function i(e, t) {
                return (
                  (t = String(t)).substring(0, e.length) ===
                  e.substring(0, t.length)
                );
              }
              function o(e, t) {
                return Array.isArray(t) ? r(e, t[0], t[1]) : i(e, t);
              }
              n.matches = o;
            },
            {},
          ],
          57: [
            function (e, t, n) {
              "use strict";
              Object.defineProperty(n, "__esModule", { value: !0 });
              n.Framebus = void 0;
              var r = e("./lib/is-not-string"),
                i = e("./lib/subscription-args-invalid"),
                o = e("./lib/broadcast"),
                a = e("./lib/package-payload"),
                s = e("./lib/constants"),
                c = "undefined" != typeof window && window.Promise,
                u = (function () {
                  function e(e) {
                    void 0 === e && (e = {});
                    this.origin = e.origin || "*";
                    this.channel = e.channel || "";
                    this.verifyDomain = e.verifyDomain;
                    this.isDestroyed = !1;
                    this.listeners = [];
                  }
                  e.setPromise = function (t) {
                    e.Promise = t;
                  };
                  e.target = function (t) {
                    return new e(t);
                  };
                  e.prototype.include = function (e) {
                    if (null == e) return !1;
                    if (null == e.Window) return !1;
                    if (e.constructor !== e.Window) return !1;
                    s.childWindows.push(e);
                    return !0;
                  };
                  e.prototype.target = function (t) {
                    return e.target(t);
                  };
                  e.prototype.emit = function (e, t, n) {
                    if (this.isDestroyed) return !1;
                    var i = this.origin;
                    e = this.namespaceEvent(e);
                    if (r.isntString(e)) return !1;
                    if (r.isntString(i)) return !1;
                    if ("function" == typeof t) {
                      n = t;
                      t = void 0;
                    }
                    var s = a.packagePayload(e, i, t, n);
                    if (!s) return !1;
                    o.broadcast(window.top || window.self, s, i);
                    return !0;
                  };
                  e.prototype.emitAsPromise = function (t, n) {
                    var r = this;
                    return new e.Promise(function (e, i) {
                      r.emit(t, n, function (t) {
                        e(t);
                      }) || i(new Error('Listener not added for "' + t + '"'));
                    });
                  };
                  e.prototype.on = function (e, t) {
                    if (this.isDestroyed) return !1;
                    var n = this,
                      r = this.origin,
                      o = t;
                    e = this.namespaceEvent(e);
                    if (i.subscriptionArgsInvalid(e, o, r)) return !1;
                    this.verifyDomain &&
                      (o = function () {
                        for (var e = [], r = 0; r < arguments.length; r++)
                          e[r] = arguments[r];
                        n.checkOrigin(this && this.origin) &&
                          t.apply(void 0, e);
                      });
                    this.listeners.push({
                      eventName: e,
                      handler: o,
                      originalHandler: t,
                    });
                    s.subscribers[r] = s.subscribers[r] || {};
                    s.subscribers[r][e] = s.subscribers[r][e] || [];
                    s.subscribers[r][e].push(o);
                    return !0;
                  };
                  e.prototype.off = function (e, t) {
                    var n = t;
                    if (this.isDestroyed) return !1;
                    if (this.verifyDomain)
                      for (var r = 0; r < this.listeners.length; r++) {
                        var o = this.listeners[r];
                        o.originalHandler === t && (n = o.handler);
                      }
                    e = this.namespaceEvent(e);
                    var a = this.origin;
                    if (i.subscriptionArgsInvalid(e, n, a)) return !1;
                    var c = s.subscribers[a] && s.subscribers[a][e];
                    if (!c) return !1;
                    for (r = 0; r < c.length; r++)
                      if (c[r] === n) {
                        c.splice(r, 1);
                        return !0;
                      }
                    return !1;
                  };
                  e.prototype.teardown = function () {
                    if (!this.isDestroyed) {
                      this.isDestroyed = !0;
                      for (var e = 0; e < this.listeners.length; e++) {
                        var t = this.listeners[e];
                        this.off(t.eventName, t.handler);
                      }
                      this.listeners.length = 0;
                    }
                  };
                  e.prototype.checkOrigin = function (e) {
                    var t,
                      n = document.createElement("a");
                    n.href = location.href;
                    t =
                      "https:" === n.protocol
                        ? n.host.replace(/:443$/, "")
                        : "http:" === n.protocol
                        ? n.host.replace(/:80$/, "")
                        : n.host;
                    return (
                      n.protocol + "//" + t === e ||
                      !this.verifyDomain ||
                      this.verifyDomain(e)
                    );
                  };
                  e.prototype.namespaceEvent = function (e) {
                    return this.channel ? this.channel + ":" + e : e;
                  };
                  e.Promise = c;
                  return e;
                })();
              n.Framebus = u;
            },
            {
              "./lib/broadcast": 61,
              "./lib/constants": 62,
              "./lib/is-not-string": 65,
              "./lib/package-payload": 67,
              "./lib/subscription-args-invalid": 69,
            },
          ],
          58: [
            function (e, t, n) {
              "use strict";
              var r = e("./lib/attach"),
                i = e("./framebus");
              r.attach();
              t.exports = i.Framebus;
            },
            { "./framebus": 57, "./lib/attach": 59 },
          ],
          59: [
            function (e, t, n) {
              "use strict";
              Object.defineProperty(n, "__esModule", { value: !0 });
              n.detach = n.attach = void 0;
              var r = e("./message"),
                i = !1;
              function o() {
                if (!i && "undefined" != typeof window) {
                  i = !0;
                  window.addEventListener("message", r.onmessage, !1);
                }
              }
              n.attach = o;
              function a() {
                i = !1;
                window.removeEventListener("message", r.onmessage, !1);
              }
              n.detach = a;
            },
            { "./message": 66 },
          ],
          60: [
            function (e, t, n) {
              "use strict";
              Object.defineProperty(n, "__esModule", { value: !0 });
              n.broadcastToChildWindows = void 0;
              var r = e("./broadcast"),
                i = e("./constants");
              function o(e, t, n) {
                for (var o = i.childWindows.length - 1; o >= 0; o--) {
                  var a = i.childWindows[o];
                  a.closed
                    ? i.childWindows.splice(o, 1)
                    : n !== a && r.broadcast(a.top, e, t);
                }
              }
              n.broadcastToChildWindows = o;
            },
            { "./broadcast": 61, "./constants": 62 },
          ],
          61: [
            function (e, t, n) {
              "use strict";
              Object.defineProperty(n, "__esModule", { value: !0 });
              n.broadcast = void 0;
              var r = e("./has-opener");
              function i(e, t, n) {
                var o,
                  a = 0;
                try {
                  e.postMessage(t, n);
                  r.hasOpener(e) &&
                    e.opener.top !== window.top &&
                    i(e.opener.top, t, n);
                  for (; (o = e.frames[a]); ) {
                    i(o, t, n);
                    a++;
                  }
                } catch (e) {}
              }
              n.broadcast = i;
            },
            {
              "./has-opener": 64,
            },
          ],
          62: [
            function (e, t, n) {
              "use strict";
              Object.defineProperty(n, "__esModule", { value: !0 });
              n.subscribers = n.childWindows = n.prefix = void 0;
              n.prefix = "/*framebus*/";
              n.childWindows = [];
              n.subscribers = {};
            },
            {},
          ],
          63: [
            function (e, t, n) {
              "use strict";
              Object.defineProperty(n, "__esModule", { value: !0 });
              n.dispatch = void 0;
              var r = e("./constants");
              function i(e, t, n, i, o) {
                if (r.subscribers[e] && r.subscribers[e][t]) {
                  var a = [];
                  n && a.push(n);
                  i && a.push(i);
                  for (var s = 0; s < r.subscribers[e][t].length; s++)
                    r.subscribers[e][t][s].apply(o, a);
                }
              }
              n.dispatch = i;
            },
            { "./constants": 62 },
          ],
          64: [
            function (e, t, n) {
              "use strict";
              Object.defineProperty(n, "__esModule", { value: !0 });
              n.hasOpener = void 0;
              function r(e) {
                return (
                  e.top === e &&
                  null != e.opener &&
                  e.opener !== e &&
                  !0 !== e.opener.closed
                );
              }
              n.hasOpener = r;
            },
            {},
          ],
          65: [
            function (e, t, n) {
              "use strict";
              Object.defineProperty(n, "__esModule", { value: !0 });
              n.isntString = void 0;
              function r(e) {
                return "string" != typeof e;
              }
              n.isntString = r;
            },
            {},
          ],
          66: [
            function (e, t, n) {
              "use strict";
              Object.defineProperty(n, "__esModule", { value: !0 });
              n.onmessage = void 0;
              var r = e("./is-not-string"),
                i = e("./unpack-payload"),
                o = e("./dispatch"),
                a = e("./broadcast-to-child-windows");
              function s(e) {
                if (!r.isntString(e.data)) {
                  var t = i.unpackPayload(e);
                  if (t) {
                    var n = t.eventData,
                      s = t.reply;
                    o.dispatch("*", t.event, n, s, e);
                    o.dispatch(e.origin, t.event, n, s, e);
                    a.broadcastToChildWindows(e.data, t.origin, e.source);
                  }
                }
              }
              n.onmessage = s;
            },
            {
              "./broadcast-to-child-windows": 60,
              "./dispatch": 63,
              "./is-not-string": 65,
              "./unpack-payload": 70,
            },
          ],
          67: [
            function (e, t, n) {
              "use strict";
              Object.defineProperty(n, "__esModule", { value: !0 });
              n.packagePayload = void 0;
              var r = e("./subscribe-replier"),
                i = e("./constants");
              function o(e, t, n, o) {
                var a,
                  s = { event: e, origin: t };
                "function" == typeof o && (s.reply = r.subscribeReplier(o, t));
                s.eventData = n;
                try {
                  a = i.prefix + JSON.stringify(s);
                } catch (e) {
                  throw new Error("Could not stringify event: " + e.message);
                }
                return a;
              }
              n.packagePayload = o;
            },
            { "./constants": 62, "./subscribe-replier": 68 },
          ],
          68: [
            function (e, t, n) {
              "use strict";
              var r =
                (this && this.__importDefault) ||
                function (e) {
                  return e && e.__esModule ? e : { default: e };
                };
              Object.defineProperty(n, "__esModule", { value: !0 });
              n.subscribeReplier = void 0;
              var i = e("../framebus"),
                o = r(e("@braintree/uuid"));
              function a(e, t) {
                var n = o.default();
                function r(o, a) {
                  e(o, a);
                  i.Framebus.target({ origin: t }).off(n, r);
                }
                i.Framebus.target({ origin: t }).on(n, r);
                return n;
              }
              n.subscribeReplier = a;
            },
            { "../framebus": 57, "@braintree/uuid": 45 },
          ],
          69: [
            function (e, t, n) {
              "use strict";
              Object.defineProperty(n, "__esModule", { value: !0 });
              n.subscriptionArgsInvalid = void 0;
              var r = e("./is-not-string");
              function i(e, t, n) {
                return (
                  !!r.isntString(e) || "function" != typeof t || r.isntString(n)
                );
              }
              n.subscriptionArgsInvalid = i;
            },
            { "./is-not-string": 65 },
          ],
          70: [
            function (e, t, n) {
              "use strict";
              Object.defineProperty(n, "__esModule", { value: !0 });
              n.unpackPayload = void 0;
              var r = e("./constants"),
                i = e("./package-payload");
              function o(e) {
                var t;
                if (e.data.slice(0, r.prefix.length) !== r.prefix) return !1;
                try {
                  t = JSON.parse(e.data.slice(r.prefix.length));
                } catch (e) {
                  return !1;
                }
                if (t.reply) {
                  var n = e.origin,
                    o = e.source,
                    a = t.reply;
                  t.reply = function (e) {
                    if (o) {
                      var t = i.packagePayload(a, n, e);
                      t && o.postMessage(t, n);
                    }
                  };
                }
                return t;
              }
              n.unpackPayload = o;
            },
            { "./constants": 62, "./package-payload": 67 },
          ],
          71: [
            function (e, t, n) {
              "use strict";
              function r(e) {
                var t = this.constructor;
                return this.then(
                  function (n) {
                    return t.resolve(e()).then(function () {
                      return n;
                    });
                  },
                  function (n) {
                    return t.resolve(e()).then(function () {
                      return t.reject(n);
                    });
                  }
                );
              }
              function i(e) {
                return new this(function (t, n) {
                  if (!e || void 0 === e.length)
                    return n(
                      new TypeError(
                        typeof e +
                          " " +
                          e +
                          " is not iterable(cannot read property Symbol(Symbol.iterator))"
                      )
                    );
                  var r = Array.prototype.slice.call(e);
                  if (0 === r.length) return t([]);
                  var i = r.length;
                  function o(e, n) {
                    if (n && ("object" == typeof n || "function" == typeof n)) {
                      var a = n.then;
                      if ("function" == typeof a) {
                        a.call(
                          n,
                          function (t) {
                            o(e, t);
                          },
                          function (n) {
                            r[e] = { status: "rejected", reason: n };
                            0 == --i && t(r);
                          }
                        );
                        return;
                      }
                    }
                    r[e] = { status: "fulfilled", value: n };
                    0 == --i && t(r);
                  }
                  for (var a = 0; a < r.length; a++) o(a, r[a]);
                });
              }
              var o = setTimeout;
              function a(e) {
                return Boolean(e && void 0 !== e.length);
              }
              function s() {}
              function c(e, t) {
                return function () {
                  e.apply(t, arguments);
                };
              }
              function u(e) {
                if (!(this instanceof u))
                  throw new TypeError("Promises must be constructed via new");
                if ("function" != typeof e)
                  throw new TypeError("not a function");
                this._state = 0;
                this._handled = !1;
                this._value = void 0;
                this._deferreds = [];
                h(e, this);
              }
              function d(e, t) {
                for (; 3 === e._state; ) e = e._value;
                if (0 !== e._state) {
                  e._handled = !0;
                  u._immediateFn(function () {
                    var n = 1 === e._state ? t.onFulfilled : t.onRejected;
                    if (null !== n) {
                      var r;
                      try {
                        r = n(e._value);
                      } catch (e) {
                        p(t.promise, e);
                        return;
                      }
                      l(t.promise, r);
                    } else (1 === e._state ? l : p)(t.promise, e._value);
                  });
                } else e._deferreds.push(t);
              }
              function l(e, t) {
                try {
                  if (t === e)
                    throw new TypeError(
                      "A promise cannot be resolved with itself."
                    );
                  if (t && ("object" == typeof t || "function" == typeof t)) {
                    var n = t.then;
                    if (t instanceof u) {
                      e._state = 3;
                      e._value = t;
                      _(e);
                      return;
                    }
                    if ("function" == typeof n) {
                      h(c(n, t), e);
                      return;
                    }
                  }
                  e._state = 1;
                  e._value = t;
                  _(e);
                } catch (t) {
                  p(e, t);
                }
              }
              function p(e, t) {
                e._state = 2;
                e._value = t;
                _(e);
              }
              function _(e) {
                2 === e._state &&
                  0 === e._deferreds.length &&
                  u._immediateFn(function () {
                    e._handled || u._unhandledRejectionFn(e._value);
                  });
                for (var t = 0, n = e._deferreds.length; t < n; t++)
                  d(e, e._deferreds[t]);
                e._deferreds = null;
              }
              function E(e, t, n) {
                this.onFulfilled = "function" == typeof e ? e : null;
                this.onRejected = "function" == typeof t ? t : null;
                this.promise = n;
              }
              function h(e, t) {
                var n = !1;
                try {
                  e(
                    function (e) {
                      if (!n) {
                        n = !0;
                        l(t, e);
                      }
                    },
                    function (e) {
                      if (!n) {
                        n = !0;
                        p(t, e);
                      }
                    }
                  );
                } catch (e) {
                  if (n) return;
                  n = !0;
                  p(t, e);
                }
              }
              u.prototype.catch = function (e) {
                return this.then(null, e);
              };
              u.prototype.then = function (e, t) {
                var n = new this.constructor(s);
                d(this, new E(e, t, n));
                return n;
              };
              u.prototype.finally = r;
              u.all = function (e) {
                return new u(function (t, n) {
                  if (!a(e))
                    return n(new TypeError("Promise.all accepts an array"));
                  var r = Array.prototype.slice.call(e);
                  if (0 === r.length) return t([]);
                  var i = r.length;
                  function o(e, a) {
                    try {
                      if (
                        a &&
                        ("object" == typeof a || "function" == typeof a)
                      ) {
                        var s = a.then;
                        if ("function" == typeof s) {
                          s.call(
                            a,
                            function (t) {
                              o(e, t);
                            },
                            n
                          );
                          return;
                        }
                      }
                      r[e] = a;
                      0 == --i && t(r);
                    } catch (e) {
                      n(e);
                    }
                  }
                  for (var s = 0; s < r.length; s++) o(s, r[s]);
                });
              };
              u.allSettled = i;
              u.resolve = function (e) {
                return e && "object" == typeof e && e.constructor === u
                  ? e
                  : new u(function (t) {
                      t(e);
                    });
              };
              u.reject = function (e) {
                return new u(function (t, n) {
                  n(e);
                });
              };
              u.race = function (e) {
                return new u(function (t, n) {
                  if (!a(e))
                    return n(new TypeError("Promise.race accepts an array"));
                  for (var r = 0, i = e.length; r < i; r++)
                    u.resolve(e[r]).then(t, n);
                });
              };
              u._immediateFn =
                ("function" == typeof setImmediate &&
                  function (e) {
                    setImmediate(e);
                  }) ||
                function (e) {
                  o(e, 0);
                };
              u._unhandledRejectionFn = function (e) {
                "undefined" != typeof console &&
                  console &&
                  console.warn("Possible Unhandled Promise Rejection:", e);
              };
              t.exports = u;
            },
            {},
          ],
          72: [
            function (e, t, n) {
              "use strict";
              Object.defineProperty(n, "__esModule", { value: !0 });
              n.isIos =
                n.isIE9 =
                n.isSamsungBrowser =
                n.isAndroidChrome =
                n.isKitKatWebview =
                  void 0;
              var r =
                  "undefined" != typeof window &&
                  window.navigator &&
                  window.navigator.userAgent,
                i = e("@braintree/browser-detection/is-android"),
                o = e("@braintree/browser-detection/is-chrome-os"),
                a = e("@braintree/browser-detection/is-chrome"),
                s = e("@braintree/browser-detection/is-ios");
              n.isIos = s;
              var c = e("@braintree/browser-detection/is-ie9");
              n.isIE9 = c;
              var u = /Version\/\d\.\d* Chrome\/\d*\.0\.0\.0/;
              function d(e) {
                return !a(e) && e.indexOf("Samsung") > -1;
              }
              function l(e) {
                void 0 === e && (e = r);
                return i(e) && u.test(e);
              }
              n.isKitKatWebview = l;
              function p(e) {
                void 0 === e && (e = r);
                return (i(e) || o(e)) && a(e);
              }
              n.isAndroidChrome = p;
              function _(e) {
                void 0 === e && (e = r);
                return /SamsungBrowser/.test(e) || d(e);
              }
              n.isSamsungBrowser = _;
            },
            {
              "@braintree/browser-detection/is-android": 24,
              "@braintree/browser-detection/is-chrome": 26,
              "@braintree/browser-detection/is-chrome-os": 25,
              "@braintree/browser-detection/is-ie9": 31,
              "@braintree/browser-detection/is-ios": 35,
            },
          ],
          73: [
            function (e, t, n) {
              "use strict";
              var r = e("./lib/device");
              t.exports = function () {
                return !(0, r.isSamsungBrowser)();
              };
            },
            { "./lib/device": 72 },
          ],
          74: [
            function (e, t, n) {
              t.exports = e("./dist/supports-input-formatting");
            },
            { "./dist/supports-input-formatting": 73 },
          ],
          75: [
            function (e, t, n) {
              "use strict";
              var r = e("../lib/braintree-error"),
                i = e("./errors"),
                o = e("../lib/assign").assign,
                a = e("../lib/promise"),
                s = e("../lib/methods"),
                c = e("../lib/convert-methods-to-error"),
                u = e("@braintree/wrap-promise");
              function d(e) {
                this._client = e.client;
              }
              d.prototype.getRewardsBalance = function (e) {
                var t,
                  n = e.nonce;
                if (!n)
                  return a.reject(
                    new r({
                      type: i.AMEX_NONCE_REQUIRED.type,
                      code: i.AMEX_NONCE_REQUIRED.code,
                      message: "getRewardsBalance must be called with a nonce.",
                    })
                  );
                delete (t = o(
                  {
                    _meta: { source: "american-express" },
                    paymentMethodNonce: n,
                  },
                  e
                )).nonce;
                return this._client
                  .request({
                    method: "get",
                    endpoint: "payment_methods/amex_rewards_balance",
                    data: t,
                  })
                  .catch(function (e) {
                    return a.reject(
                      new r({
                        type: i.AMEX_NETWORK_ERROR.type,
                        code: i.AMEX_NETWORK_ERROR.code,
                        message:
                          "A network error occurred when getting the American Express rewards balance.",
                        details: { originalError: e },
                      })
                    );
                  });
              };
              d.prototype.getExpressCheckoutProfile = function (e) {
                return e.nonce
                  ? this._client
                      .request({
                        method: "get",
                        endpoint:
                          "payment_methods/amex_express_checkout_cards/" +
                          e.nonce,
                        data: {
                          _meta: { source: "american-express" },
                          paymentMethodNonce: e.nonce,
                        },
                      })
                      .catch(function (e) {
                        return a.reject(
                          new r({
                            type: i.AMEX_NETWORK_ERROR.type,
                            code: i.AMEX_NETWORK_ERROR.code,
                            message:
                              "A network error occurred when getting the American Express Checkout nonce profile.",
                            details: { originalError: e },
                          })
                        );
                      })
                  : a.reject(
                      new r({
                        type: i.AMEX_NONCE_REQUIRED.type,
                        code: i.AMEX_NONCE_REQUIRED.code,
                        message:
                          "getExpressCheckoutProfile must be called with a nonce.",
                      })
                    );
              };
              d.prototype.teardown = function () {
                c(this, s(d.prototype));
                return a.resolve();
              };
              t.exports = u.wrapPrototype(d);
            },
            {
              "../lib/assign": 128,
              "../lib/braintree-error": 131,
              "../lib/convert-methods-to-error": 134,
              "../lib/methods": 162,
              "../lib/promise": 164,
              "./errors": 76,
              "@braintree/wrap-promise": 49,
            },
          ],
          76: [
            function (e, t, n) {
              "use strict";
              var r = e("../lib/braintree-error");
              t.exports = {
                AMEX_NONCE_REQUIRED: {
                  type: r.types.MERCHANT,
                  code: "AMEX_NONCE_REQUIRED",
                },
                AMEX_NETWORK_ERROR: {
                  type: r.types.NETWORK,
                  code: "AMEX_NETWORK_ERROR",
                },
              };
            },
            { "../lib/braintree-error": 131 },
          ],
          77: [
            function (e, t, n) {
              "use strict";
              var r = e("./american-express"),
                i = e("../lib/basic-component-verification"),
                o = e("../lib/create-deferred-client"),
                a = e("../lib/create-assets-url"),
                s = "3.85.5",
                c = e("@braintree/wrap-promise");
              function u(e) {
                var t = "American Express";
                return i
                  .verify({
                    name: t,
                    client: e.client,
                    authorization: e.authorization,
                  })
                  .then(function () {
                    return o.create({
                      authorization: e.authorization,
                      client: e.client,
                      debug: e.debug,
                      assetsUrl: a.create(e.authorization),
                      name: t,
                    });
                  })
                  .then(function (t) {
                    e.client = t;
                    return new r(e);
                  });
              }
              t.exports = { create: c(u), VERSION: s };
            },
            {
              "../lib/basic-component-verification": 129,
              "../lib/create-assets-url": 136,
              "../lib/create-deferred-client": 138,
              "./american-express": 75,
              "@braintree/wrap-promise": 49,
            },
          ],
          78: [
            function (e, t, n) {
              "use strict";
              var r = e("../lib/braintree-error"),
                i = e("../lib/analytics"),
                o = e("./errors"),
                a = e("../lib/promise"),
                s = e("../lib/methods"),
                c = e("../lib/convert-methods-to-error"),
                u = e("@braintree/wrap-promise");
              function d(e) {
                this._instantiatedWithClient = Boolean(!e.useDeferredClient);
                this._client = e.client;
                this._createPromise = e.createPromise;
                this._client && this._setMerchantIdentifier();
              }
              d.prototype._waitForClient = function () {
                return this._client
                  ? a.resolve()
                  : this._createPromise.then(
                      function (e) {
                        this._client = e;
                        this._setMerchantIdentifier();
                      }.bind(this)
                    );
              };
              d.prototype._setMerchantIdentifier = function () {
                var e =
                  this._client.getConfiguration().gatewayConfiguration
                    .applePayWeb;
                e &&
                  Object.defineProperty(this, "merchantIdentifier", {
                    value: e.merchantIdentifier,
                    configurable: !1,
                    writable: !1,
                  });
              };
              d.prototype.createPaymentRequest = function (e) {
                return this._instantiatedWithClient
                  ? this._createPaymentRequestSynchronously(e)
                  : this._waitForClient().then(
                      function () {
                        return this._createPaymentRequestSynchronously(e);
                      }.bind(this)
                    );
              };
              d.prototype._createPaymentRequestSynchronously = function (e) {
                var t =
                    this._client.getConfiguration().gatewayConfiguration
                      .applePayWeb,
                  n = {
                    countryCode: t.countryCode,
                    currencyCode: t.currencyCode,
                    merchantCapabilities: t.merchantCapabilities || [
                      "supports3DS",
                    ],
                    supportedNetworks: t.supportedNetworks.map(function (e) {
                      return "mastercard" === e ? "masterCard" : e;
                    }),
                  };
                return Object.assign({}, n, e);
              };
              d.prototype.performValidation = function (e) {
                var t = this;
                return e && e.validationURL
                  ? this._waitForClient()
                      .then(function () {
                        var n = {
                          validationUrl: e.validationURL,
                          domainName: e.domainName || window.location.hostname,
                          merchantIdentifier:
                            e.merchantIdentifier || t.merchantIdentifier,
                        };
                        null != e.displayName &&
                          (n.displayName = e.displayName);
                        return t._client.request({
                          method: "post",
                          endpoint: "apple_pay_web/sessions",
                          data: {
                            _meta: { source: "apple-pay" },
                            applePayWebSession: n,
                          },
                        });
                      })
                      .then(function (e) {
                        i.sendEvent(
                          t._client,
                          "applepay.performValidation.succeeded"
                        );
                        return a.resolve(e);
                      })
                      .catch(function (e) {
                        i.sendEvent(
                          t._client,
                          "applepay.performValidation.failed"
                        );
                        return "CLIENT_REQUEST_ERROR" === e.code
                          ? a.reject(
                              new r({
                                type: o.APPLE_PAY_MERCHANT_VALIDATION_FAILED
                                  .type,
                                code: o.APPLE_PAY_MERCHANT_VALIDATION_FAILED
                                  .code,
                                message:
                                  o.APPLE_PAY_MERCHANT_VALIDATION_FAILED
                                    .message,
                                details: {
                                  originalError: e.details.originalError,
                                },
                              })
                            )
                          : a.reject(
                              new r({
                                type: o.APPLE_PAY_MERCHANT_VALIDATION_NETWORK
                                  .type,
                                code: o.APPLE_PAY_MERCHANT_VALIDATION_NETWORK
                                  .code,
                                message:
                                  o.APPLE_PAY_MERCHANT_VALIDATION_NETWORK
                                    .message,
                                details: { originalError: e },
                              })
                            );
                      })
                  : a.reject(new r(o.APPLE_PAY_VALIDATION_URL_REQUIRED));
              };
              d.prototype.tokenize = function (e) {
                var t = this;
                return e.token
                  ? this._waitForClient()
                      .then(function () {
                        return t._client.request({
                          method: "post",
                          endpoint: "payment_methods/apple_payment_tokens",
                          data: {
                            _meta: { source: "apple-pay" },
                            applePaymentToken: Object.assign({}, e.token, {
                              paymentData: btoa(
                                JSON.stringify(e.token.paymentData)
                              ),
                            }),
                          },
                        });
                      })
                      .then(function (e) {
                        i.sendEvent(t._client, "applepay.tokenize.succeeded");
                        return a.resolve(e.applePayCards[0]);
                      })
                      .catch(function (e) {
                        i.sendEvent(t._client, "applepay.tokenize.failed");
                        return a.reject(
                          new r({
                            type: o.APPLE_PAY_TOKENIZATION.type,
                            code: o.APPLE_PAY_TOKENIZATION.code,
                            message: o.APPLE_PAY_TOKENIZATION.message,
                            details: { originalError: e },
                          })
                        );
                      })
                  : a.reject(new r(o.APPLE_PAY_PAYMENT_TOKEN_REQUIRED));
              };
              d.prototype.teardown = function () {
                c(this, s(d.prototype));
                return a.resolve();
              };
              t.exports = u.wrapPrototype(d);
            },
            {
              "../lib/analytics": 126,
              "../lib/braintree-error": 131,
              "../lib/convert-methods-to-error": 134,
              "../lib/methods": 162,
              "../lib/promise": 164,
              "./errors": 79,
              "@braintree/wrap-promise": 49,
            },
          ],
          79: [
            function (e, t, n) {
              "use strict";
              var r = e("../lib/braintree-error");
              t.exports = {
                APPLE_PAY_NOT_ENABLED: {
                  type: r.types.MERCHANT,
                  code: "APPLE_PAY_NOT_ENABLED",
                  message: "Apple Pay is not enabled for this merchant.",
                },
                APPLE_PAY_VALIDATION_URL_REQUIRED: {
                  type: r.types.MERCHANT,
                  code: "APPLE_PAY_VALIDATION_URL_REQUIRED",
                  message:
                    "performValidation must be called with a validationURL.",
                },
                APPLE_PAY_MERCHANT_VALIDATION_NETWORK: {
                  type: r.types.NETWORK,
                  code: "APPLE_PAY_MERCHANT_VALIDATION_NETWORK",
                  message:
                    "A network error occurred when validating the Apple Pay merchant.",
                },
                APPLE_PAY_MERCHANT_VALIDATION_FAILED: {
                  type: r.types.MERCHANT,
                  code: "APPLE_PAY_MERCHANT_VALIDATION_FAILED",
                  message:
                    "Make sure you have registered your domain name in the Braintree Control Panel.",
                },
                APPLE_PAY_PAYMENT_TOKEN_REQUIRED: {
                  type: r.types.MERCHANT,
                  code: "APPLE_PAY_PAYMENT_TOKEN_REQUIRED",
                  message: "tokenize must be called with a payment token.",
                },
                APPLE_PAY_TOKENIZATION: {
                  type: r.types.NETWORK,
                  code: "APPLE_PAY_TOKENIZATION",
                  message:
                    "A network error occurred when processing the Apple Pay payment.",
                },
              };
            },
            { "../lib/braintree-error": 131 },
          ],
          80: [
            function (e, t, n) {
              "use strict";
              var r = e("./apple-pay"),
                i = e("../lib/analytics"),
                o = e("../lib/braintree-error"),
                a = e("../lib/basic-component-verification"),
                s = e("../lib/create-assets-url"),
                c = e("../lib/create-deferred-client"),
                u = e("../lib/promise"),
                d = e("./errors"),
                l = "3.85.5",
                p = e("@braintree/wrap-promise");
              function _(e) {
                var t = "Apple Pay";
                return a
                  .verify({
                    name: t,
                    client: e.client,
                    authorization: e.authorization,
                  })
                  .then(function () {
                    var n,
                      a = c
                        .create({
                          authorization: e.authorization,
                          client: e.client,
                          debug: e.debug,
                          assetsUrl: s.create(e.authorization),
                          name: t,
                        })
                        .then(function (e) {
                          if (
                            !e.getConfiguration().gatewayConfiguration
                              .applePayWeb
                          )
                            return u.reject(new o(d.APPLE_PAY_NOT_ENABLED));
                          i.sendEvent(e, "applepay.initialized");
                          return e;
                        });
                    e.createPromise = a;
                    n = new r(e);
                    return e.useDeferredClient
                      ? n
                      : a.then(function (e) {
                          n._client = e;
                          return n;
                        });
                  });
              }
              t.exports = { create: p(_), VERSION: l };
            },
            {
              "../lib/analytics": 126,
              "../lib/basic-component-verification": 129,
              "../lib/braintree-error": 131,
              "../lib/create-assets-url": 136,
              "../lib/create-deferred-client": 138,
              "../lib/promise": 164,
              "./apple-pay": 78,
              "./errors": 79,
              "@braintree/wrap-promise": 49,
            },
          ],
          81: [
            function (e, t, n) {
              "use strict";
              var r = e("@braintree/browser-detection/is-ie"),
                i = e("@braintree/browser-detection/is-ie9");
              t.exports = { isIe: r, isIe9: i };
            },
            {
              "@braintree/browser-detection/is-ie": 29,
              "@braintree/browser-detection/is-ie9": 31,
            },
          ],
          82: [
            function (e, t, n) {
              "use strict";
              var r = e("./constants").BRAINTREE_VERSION,
                i = e("./request/graphql"),
                o = e("./request"),
                a = e("../lib/is-verified-domain"),
                s = e("../lib/braintree-error"),
                c = e("../lib/convert-to-braintree-error"),
                u = e("./get-configuration").getConfiguration,
                d = e("../lib/create-authorization-data"),
                l = e("../lib/add-metadata"),
                p = e("../lib/promise"),
                _ = e("@braintree/wrap-promise"),
                E = e("../lib/once"),
                h = e("../lib/deferred"),
                f = e("../lib/assign").assign,
                m = e("../lib/analytics"),
                y = e("./errors"),
                A = e("../lib/constants").VERSION,
                T = e("../lib/constants").GRAPHQL_URLS,
                I = e("../lib/methods"),
                N = e("../lib/convert-methods-to-error"),
                O = e("../lib/assets"),
                b = e("../lib/constants").FRAUDNET_FNCLS,
                g = e("../lib/constants").FRAUDNET_SOURCE,
                v = e("../lib/constants").FRAUDNET_URL,
                P = {};
              function C(e) {
                var t, n;
                e = e || {};
                t = JSON.stringify(e);
                if (!(n = e.gatewayConfiguration))
                  throw new s(y.CLIENT_MISSING_GATEWAY_CONFIGURATION);
                ["assetsUrl", "clientApiUrl", "configUrl"].forEach(function (
                  e
                ) {
                  if (e in n && !a(n[e]))
                    throw new s({
                      type: y.CLIENT_GATEWAY_CONFIGURATION_INVALID_DOMAIN.type,
                      code: y.CLIENT_GATEWAY_CONFIGURATION_INVALID_DOMAIN.code,
                      message: e + " property is on an invalid domain.",
                    });
                });
                this.getConfiguration = function () {
                  return JSON.parse(t);
                };
                this._request = o;
                this._configuration = this.getConfiguration();
                this._clientApiBaseUrl = n.clientApiUrl + "/v1/";
                n.graphQL && (this._graphQL = new i({ graphQL: n.graphQL }));
              }
              C.initialize = function (e) {
                var t,
                  n,
                  r = P[e.authorization];
                if (r) {
                  m.sendEvent(r, "custom.client.load.cached");
                  return r;
                }
                try {
                  n = d(e.authorization);
                } catch (e) {
                  return p.reject(new s(y.CLIENT_INVALID_AUTHORIZATION));
                }
                r = u(n).then(function (n) {
                  e.debug && (n.isDebug = !0);
                  n.authorization = e.authorization;
                  return (t = new C(n));
                });
                P[e.authorization] = r;
                m.sendEvent(r, "custom.client.load.initialized");
                return r
                  .then(function (e) {
                    m.sendEvent(t, "custom.client.load.succeeded");
                    return e;
                  })
                  .catch(function (t) {
                    delete P[e.authorization];
                    return p.reject(t);
                  });
              };
              C.clearCache = function () {
                P = {};
              };
              C.prototype._findOrCreateFraudnetJSON = function (e) {
                var t,
                  n,
                  r,
                  i,
                  o = document.querySelector('script[fncls="' + b + '"]');
                if (!o) {
                  (o = document.body.appendChild(
                    document.createElement("script")
                  )).type = "application/json";
                  o.setAttribute("fncls", b);
                }
                t = this.getConfiguration();
                n = {
                  rda_tenant: "bt_card",
                  mid: t.gatewayConfiguration.merchantId,
                };
                (r = t.authorizationFingerprint) &&
                  r.split("&").forEach(function (e) {
                    var t = e.split("=");
                    "customer_id" === t[0] && t.length > 1 && (n.cid = t[1]);
                  });
                i = { f: e.substr(0, 32), fp: n, bu: !1, s: g };
                o.text = JSON.stringify(i);
              };
              C.prototype.request = function (e, t) {
                var n = this,
                  r = new p(function (t, r) {
                    var i,
                      o,
                      a,
                      u,
                      d = Boolean(
                        "payment_methods/credit_cards" === e.endpoint &&
                          n.getConfiguration().gatewayConfiguration.creditCards
                            .collectDeviceData
                      );
                    "graphQLApi" !== e.api &&
                      (e.method
                        ? e.endpoint || (i = "options.endpoint")
                        : (i = "options.method"));
                    if (i)
                      throw new s({
                        type: y.CLIENT_OPTION_REQUIRED.type,
                        code: y.CLIENT_OPTION_REQUIRED.code,
                        message: i + " is required when making a request.",
                      });
                    o = "api" in e ? e.api : "clientApi";
                    u = {
                      method: e.method,
                      graphQL: n._graphQL,
                      timeout: e.timeout,
                      metadata: n._configuration.analyticsMetadata,
                    };
                    if ("clientApi" === o) {
                      a = n._clientApiBaseUrl;
                      u.data = l(n._configuration, e.data);
                    } else {
                      if ("graphQLApi" !== o)
                        throw new s({
                          type: y.CLIENT_OPTION_INVALID.type,
                          code: y.CLIENT_OPTION_INVALID.code,
                          message: "options.api is invalid.",
                        });
                      a = T[n._configuration.gatewayConfiguration.environment];
                      e.endpoint = "";
                      u.method = "post";
                      u.data = f(
                        {
                          clientSdkMetadata: {
                            platform:
                              n._configuration.analyticsMetadata.platform,
                            source: n._configuration.analyticsMetadata.source,
                            integration:
                              n._configuration.analyticsMetadata.integration,
                            sessionId:
                              n._configuration.analyticsMetadata.sessionId,
                            version: A,
                          },
                        },
                        e.data
                      );
                      u.headers = S(n._configuration);
                    }
                    u.url = a + e.endpoint;
                    u.sendAnalyticsEvent = function (e) {
                      m.sendEvent(n, e);
                    };
                    n._request(u, function (e, i, a) {
                      var s, u;
                      if ((u = R(a, e))) r(u);
                      else if ("graphQLApi" === o && i.errors)
                        r(
                          c(i.errors, {
                            type: y.CLIENT_GRAPHQL_REQUEST_ERROR.type,
                            code: y.CLIENT_GRAPHQL_REQUEST_ERROR.code,
                            message: y.CLIENT_GRAPHQL_REQUEST_ERROR.message,
                          })
                        );
                      else {
                        s = f({ _httpStatus: a }, i);
                        if (d && s.creditCards && s.creditCards.length > 0) {
                          n._findOrCreateFraudnetJSON(s.creditCards[0].nonce);
                          O.loadScript({ src: v, forceScriptReload: !0 });
                        }
                        t(s);
                      }
                    });
                  });
                if ("function" != typeof t) return r;
                t = E(h(t));
                r.then(function (e) {
                  t(null, e, e._httpStatus);
                }).catch(function (e) {
                  var n = e && e.details && e.details.httpStatus;
                  t(e, null, n);
                });
              };
              function R(e, t) {
                var n;
                -1 === e
                  ? (n = new s(y.CLIENT_REQUEST_TIMEOUT))
                  : 401 === e
                  ? (n = new s(y.CLIENT_AUTHORIZATION_INVALID))
                  : 403 === e
                  ? (n = new s(y.CLIENT_AUTHORIZATION_INSUFFICIENT))
                  : 429 === e
                  ? (n = new s(y.CLIENT_RATE_LIMITED))
                  : e >= 500
                  ? (n = new s(y.CLIENT_GATEWAY_NETWORK))
                  : (e < 200 || e >= 400) &&
                    (n = c(t, {
                      type: y.CLIENT_REQUEST_ERROR.type,
                      code: y.CLIENT_REQUEST_ERROR.code,
                      message: y.CLIENT_REQUEST_ERROR.message,
                    }));
                if (n) {
                  n.details = n.details || {};
                  n.details.httpStatus = e;
                  return n;
                }
              }
              C.prototype.toJSON = function () {
                return this.getConfiguration();
              };
              C.prototype.getVersion = function () {
                return A;
              };
              C.prototype.teardown = _(function () {
                var e = this;
                delete P[e.getConfiguration().authorization];
                N(e, I(C.prototype));
                return p.resolve();
              });
              function S(e) {
                return {
                  Authorization:
                    "Bearer " + (e.authorizationFingerprint || e.authorization),
                  "Braintree-Version": r,
                };
              }
              t.exports = C;
            },
            {
              "../lib/add-metadata": 125,
              "../lib/analytics": 126,
              "../lib/assets": 127,
              "../lib/assign": 128,
              "../lib/braintree-error": 131,
              "../lib/constants": 133,
              "../lib/convert-methods-to-error": 134,
              "../lib/convert-to-braintree-error": 135,
              "../lib/create-authorization-data": 137,
              "../lib/deferred": 139,
              "../lib/is-verified-domain": 160,
              "../lib/methods": 162,
              "../lib/once": 163,
              "../lib/promise": 164,
              "./constants": 83,
              "./errors": 84,
              "./get-configuration": 85,
              "./request": 97,
              "./request/graphql": 95,
              "@braintree/wrap-promise": 49,
            },
          ],
          83: [
            function (e, t, n) {
              "use strict";
              t.exports = { BRAINTREE_VERSION: "2018-05-10" };
            },
            {},
          ],
          84: [
            function (e, t, n) {
              "use strict";
              var r = e("../lib/braintree-error");
              t.exports = {
                CLIENT_GATEWAY_CONFIGURATION_INVALID_DOMAIN: {
                  type: r.types.MERCHANT,
                  code: "CLIENT_GATEWAY_CONFIGURATION_INVALID_DOMAIN",
                },
                CLIENT_OPTION_REQUIRED: {
                  type: r.types.MERCHANT,
                  code: "CLIENT_OPTION_REQUIRED",
                },
                CLIENT_OPTION_INVALID: {
                  type: r.types.MERCHANT,
                  code: "CLIENT_OPTION_INVALID",
                },
                CLIENT_MISSING_GATEWAY_CONFIGURATION: {
                  type: r.types.INTERNAL,
                  code: "CLIENT_MISSING_GATEWAY_CONFIGURATION",
                  message: "Missing gatewayConfiguration.",
                },
                CLIENT_INVALID_AUTHORIZATION: {
                  type: r.types.MERCHANT,
                  code: "CLIENT_INVALID_AUTHORIZATION",
                  message:
                    "Authorization is invalid. Make sure your client token or tokenization key is valid.",
                },
                CLIENT_GATEWAY_NETWORK: {
                  type: r.types.NETWORK,
                  code: "CLIENT_GATEWAY_NETWORK",
                  message: "Cannot contact the gateway at this time.",
                },
                CLIENT_REQUEST_TIMEOUT: {
                  type: r.types.NETWORK,
                  code: "CLIENT_REQUEST_TIMEOUT",
                  message: "Request timed out waiting for a reply.",
                },
                CLIENT_REQUEST_ERROR: {
                  type: r.types.NETWORK,
                  code: "CLIENT_REQUEST_ERROR",
                  message: "There was a problem with your request.",
                },
                CLIENT_GRAPHQL_REQUEST_ERROR: {
                  type: r.types.NETWORK,
                  code: "CLIENT_GRAPHQL_REQUEST_ERROR",
                  message: "There was a problem with your request.",
                },
                CLIENT_RATE_LIMITED: {
                  type: r.types.MERCHANT,
                  code: "CLIENT_RATE_LIMITED",
                  message:
                    "You are being rate-limited; please try again in a few minutes.",
                },
                CLIENT_AUTHORIZATION_INSUFFICIENT: {
                  type: r.types.MERCHANT,
                  code: "CLIENT_AUTHORIZATION_INSUFFICIENT",
                  message:
                    "The authorization used has insufficient privileges.",
                },
                CLIENT_AUTHORIZATION_INVALID: {
                  type: r.types.MERCHANT,
                  code: "CLIENT_AUTHORIZATION_INVALID",
                  message:
                    "Either the client token has expired and a new one should be generated or the tokenization key has been deactivated or deleted.",
                },
              };
            },
            { "../lib/braintree-error": 131 },
          ],
          85: [
            function (e, t, n) {
              "use strict";
              var r = e("../lib/braintree-error"),
                i = e("../lib/promise"),
                o = e("@braintree/wrap-promise"),
                a = e("./request"),
                s = e("@braintree/uuid"),
                c = e("../lib/constants"),
                u = e("./errors"),
                d = e("./request/graphql"),
                l = e("../lib/constants").GRAPHQL_URLS,
                p = e("../lib/is-date-string-before-or-on"),
                _ = e("./constants").BRAINTREE_VERSION;
              function E(e) {
                return new i(function (t, n) {
                  var i,
                    o,
                    E,
                    h,
                    f = s(),
                    m = {
                      merchantAppId: window.location.host,
                      platform: c.PLATFORM,
                      sdkVersion: c.VERSION,
                      source: c.SOURCE,
                      integration: c.INTEGRATION,
                      integrationType: c.INTEGRATION,
                      sessionId: f,
                    };
                  o = e.attrs;
                  E = e.configUrl;
                  o._meta = m;
                  o.braintreeLibraryVersion = c.BRAINTREE_LIBRARY_VERSION;
                  o.configVersion = "3";
                  h = { url: E, method: "GET", data: o };
                  if (o.authorizationFingerprint && e.graphQL) {
                    p(e.graphQL.date, _) &&
                      (h.graphQL = new d({
                        graphQL: {
                          url: e.graphQL.url,
                          features: ["configuration"],
                        },
                      }));
                    h.metadata = m;
                  } else if (o.tokenizationKey) {
                    h.graphQL = new d({
                      graphQL: {
                        url: l[e.environment],
                        features: ["configuration"],
                      },
                    });
                    h.metadata = m;
                  }
                  a(h, function (e, a, s) {
                    var c;
                    if (e) {
                      c =
                        403 === s
                          ? u.CLIENT_AUTHORIZATION_INSUFFICIENT
                          : 401 === s
                          ? u.CLIENT_AUTHORIZATION_INVALID
                          : u.CLIENT_GATEWAY_NETWORK;
                      n(
                        new r({
                          type: c.type,
                          code: c.code,
                          message: c.message,
                          details: { originalError: e },
                        })
                      );
                    } else {
                      i = {
                        authorizationType: o.tokenizationKey
                          ? "TOKENIZATION_KEY"
                          : "CLIENT_TOKEN",
                        authorizationFingerprint: o.authorizationFingerprint,
                        analyticsMetadata: m,
                        gatewayConfiguration: a,
                      };
                      t(i);
                    }
                  });
                });
              }
              t.exports = { getConfiguration: o(E) };
            },
            {
              "../lib/braintree-error": 131,
              "../lib/constants": 133,
              "../lib/is-date-string-before-or-on": 158,
              "../lib/promise": 164,
              "./constants": 83,
              "./errors": 84,
              "./request": 97,
              "./request/graphql": 95,
              "@braintree/uuid": 45,
              "@braintree/wrap-promise": 49,
            },
          ],
          86: [
            function (e, t, n) {
              "use strict";
              var r = e("../lib/braintree-error"),
                i = e("./client"),
                o = "3.85.5",
                a = e("../lib/promise"),
                s = e("@braintree/wrap-promise"),
                c = e("../lib/errors");
              function u(e) {
                return e.authorization
                  ? i.initialize(e)
                  : a.reject(
                      new r({
                        type: c.INSTANTIATION_OPTION_REQUIRED.type,
                        code: c.INSTANTIATION_OPTION_REQUIRED.code,
                        message:
                          "options.authorization is required when instantiating a client.",
                      })
                    );
              }
              t.exports = { create: s(u), VERSION: o };
            },
            {
              "../lib/braintree-error": 131,
              "../lib/errors": 142,
              "../lib/promise": 164,
              "./client": 82,
              "@braintree/wrap-promise": 49,
            },
          ],
          87: [
            function (e, t, n) {
              "use strict";
              var r = e("../../lib/querystring"),
                i = e("../../lib/assign").assign,
                o = e("./prep-body"),
                a = e("./parse-body"),
                s = e("./xhr"),
                c = s.isAvailable,
                u = e("./graphql/request"),
                d = e("./default-request"),
                l = 1,
                p = 408;
              function _(e) {
                return !e || e === p;
              }
              function E(e) {
                var t =
                  !e.data &&
                  e.errors &&
                  e.errors[0] &&
                  e.errors[0].extensions &&
                  e.errors[0].extensions.errorClass;
                return "UNKNOWN" === t || "INTERNAL" === t;
              }
              function h(e, t, n) {
                var p,
                  f,
                  m,
                  y,
                  A,
                  T,
                  I,
                  N = e.url,
                  O = e.graphQL,
                  b = e.timeout,
                  g = s.getRequestObject(),
                  v = n,
                  P = Boolean(O && O.isGraphQLRequest(N, e.data));
                e.headers = i(
                  { "Content-Type": "application/json" },
                  e.headers
                );
                N = (m = P ? new u(e) : new d(e)).getUrl();
                y = m.getBody();
                A = m.getMethod();
                T = m.getHeaders();
                if ("GET" === A) {
                  N = r.queryify(N, y);
                  y = null;
                }
                if (c)
                  g.onreadystatechange = function () {
                    if (4 === g.readyState)
                      if (0 === g.status && P) {
                        delete e.graphQL;
                        h(e, t, n);
                      } else {
                        I = a(g.responseText);
                        f = m.adaptResponseBody(I);
                        if (
                          (p = m.determineStatus(g.status, I)) >= 400 ||
                          p < 200
                        ) {
                          if (P && E(I)) {
                            delete e.graphQL;
                            h(e, t, n);
                            return;
                          }
                          if (t < l && _(p)) {
                            t++;
                            h(e, t, n);
                            return;
                          }
                          v(f || "error", null, p || 500);
                        } else v(null, f, p);
                      }
                  };
                else {
                  e.headers && (N = r.queryify(N, T));
                  g.onload = function () {
                    v(null, a(g.responseText), g.status);
                  };
                  g.onerror = function () {
                    v("error", null, 500);
                  };
                  g.onprogress = function () {};
                  g.ontimeout = function () {
                    v("timeout", null, -1);
                  };
                }
                try {
                  g.open(A, N, !0);
                } catch (r) {
                  if (!P) throw r;
                  delete e.graphQL;
                  h(e, t, n);
                  return;
                }
                g.timeout = b;
                c &&
                  Object.keys(T).forEach(function (e) {
                    g.setRequestHeader(e, T[e]);
                  });
                try {
                  g.send(o(A, y));
                } catch (e) {}
              }
              function f(e, t) {
                h(e, 0, t);
              }
              t.exports = { request: f };
            },
            {
              "../../lib/assign": 128,
              "../../lib/querystring": 165,
              "./default-request": 88,
              "./graphql/request": 96,
              "./parse-body": 100,
              "./prep-body": 101,
              "./xhr": 102,
            },
          ],
          88: [
            function (e, t, n) {
              "use strict";
              function r(e) {
                this._url = e.url;
                this._data = e.data;
                this._method = e.method;
                this._headers = e.headers;
              }
              r.prototype.getUrl = function () {
                return this._url;
              };
              r.prototype.getBody = function () {
                return this._data;
              };
              r.prototype.getMethod = function () {
                return this._method;
              };
              r.prototype.getHeaders = function () {
                return this._headers;
              };
              r.prototype.adaptResponseBody = function (e) {
                return e;
              };
              r.prototype.determineStatus = function (e) {
                return e;
              };
              t.exports = r;
            },
            {},
          ],
          89: [
            function (e, t, n) {
              "use strict";
              t.exports = function () {
                return window.navigator.userAgent;
              };
            },
            {},
          ],
          90: [
            function (e, t, n) {
              "use strict";
              var r = e("./error"),
                i = e("../../../../lib/assign").assign,
                o = {
                  creditCard: {
                    AMERICAN_EXPRESS: "American Express",
                    DISCOVER: "Discover",
                    INTERNATIONAL_MAESTRO: "Maestro",
                    JCB: "JCB",
                    MASTERCARD: "MasterCard",
                    SOLO: "Solo",
                    UK_MAESTRO: "UK Maestro",
                    UNION_PAY: "UnionPay",
                    VISA: "Visa",
                    ELO: "Elo",
                    HIPER: "Hiper",
                    HIPERCARD: "Hipercard",
                  },
                  applePayWeb: {
                    VISA: "visa",
                    MASTERCARD: "mastercard",
                    DISCOVER: "discover",
                    AMERICAN_EXPRESS: "amex",
                    INTERNATIONAL_MAESTRO: "maestro",
                    ELO: "elo",
                  },
                  visaCheckout: {
                    VISA: "Visa",
                    MASTERCARD: "MasterCard",
                    DISCOVER: "Discover",
                    AMERICAN_EXPRESS: "American Express",
                  },
                  googlePay: {
                    VISA: "visa",
                    MASTERCARD: "mastercard",
                    DISCOVER: "discover",
                    AMERICAN_EXPRESS: "amex",
                    INTERNATIONAL_MAESTRO: "maestro",
                    ELO: "elo",
                  },
                  masterpass: {
                    VISA: "visa",
                    MASTERCARD: "master",
                    DISCOVER: "discover",
                    AMERICAN_EXPRESS: "amex",
                    DINERS: "diners",
                    INTERNATIONAL_MAESTRO: "maestro",
                    JCB: "jcb",
                  },
                };
              function a(e, t) {
                return e.data && !e.errors ? s(e, t) : r(e);
              }
              function s(e, t) {
                var n,
                  r = e.data.clientConfiguration;
                n = {
                  environment: r.environment.toLowerCase(),
                  clientApiUrl: r.clientApiUrl,
                  assetsUrl: r.assetsUrl,
                  analytics: { url: r.analyticsUrl },
                  merchantId: r.merchantId,
                  venmo: "off",
                };
                r.supportedFeatures &&
                  (n.graphQL = {
                    url: t._graphQL._config.url,
                    features: r.supportedFeatures.map(function (e) {
                      return e.toLowerCase();
                    }),
                  });
                r.braintreeApi && (n.braintreeApi = r.braintreeApi);
                if (r.applePayWeb) {
                  n.applePayWeb = r.applePayWeb;
                  n.applePayWeb.supportedNetworks = c(
                    r.applePayWeb.supportedCardBrands,
                    o.applePayWeb
                  );
                  delete n.applePayWeb.supportedCardBrands;
                }
                r.ideal && (n.ideal = r.ideal);
                r.kount && (n.kount = { kountMerchantId: r.kount.merchantId });
                if (r.creditCard) {
                  n.challenges = r.creditCard.challenges.map(function (e) {
                    return e.toLowerCase();
                  });
                  n.creditCards = {
                    supportedCardTypes: c(
                      r.creditCard.supportedCardBrands,
                      o.creditCard
                    ),
                  };
                  n.threeDSecureEnabled = r.creditCard.threeDSecureEnabled;
                  n.threeDSecure = r.creditCard.threeDSecure;
                } else {
                  n.challenges = [];
                  n.creditCards = { supportedCardTypes: [] };
                  n.threeDSecureEnabled = !1;
                }
                r.googlePay &&
                  (n.androidPay = {
                    displayName: r.googlePay.displayName,
                    enabled: !0,
                    environment: r.googlePay.environment.toLowerCase(),
                    googleAuthorizationFingerprint:
                      r.googlePay.googleAuthorization,
                    paypalClientId: r.googlePay.paypalClientId,
                    supportedNetworks: c(
                      r.googlePay.supportedCardBrands,
                      o.googlePay
                    ),
                  });
                r.venmo &&
                  (n.payWithVenmo = {
                    merchantId: r.venmo.merchantId,
                    accessToken: r.venmo.accessToken,
                    environment: r.venmo.environment.toLowerCase(),
                  });
                if (r.paypal) {
                  n.paypalEnabled = !0;
                  n.paypal = i({}, r.paypal);
                  n.paypal.currencyIsoCode = n.paypal.currencyCode;
                  n.paypal.environment = n.paypal.environment.toLowerCase();
                  delete n.paypal.currencyCode;
                } else n.paypalEnabled = !1;
                r.unionPay &&
                  (n.unionPay = {
                    enabled: !0,
                    merchantAccountId: r.unionPay.merchantAccountId,
                  });
                r.visaCheckout &&
                  (n.visaCheckout = {
                    apikey: r.visaCheckout.apiKey,
                    encryptionKey: r.visaCheckout.encryptionKey,
                    externalClientId: r.visaCheckout.externalClientId,
                    supportedCardTypes: c(
                      r.visaCheckout.supportedCardBrands,
                      o.visaCheckout
                    ),
                  });
                r.masterpass &&
                  (n.masterpass = {
                    merchantCheckoutId: r.masterpass.merchantCheckoutId,
                    supportedNetworks: c(
                      r.masterpass.supportedCardBrands,
                      o.masterpass
                    ),
                  });
                r.usBankAccount &&
                  (n.usBankAccount = {
                    routeId: r.usBankAccount.routeId,
                    plaid: { publicKey: r.usBankAccount.plaidPublicKey },
                  });
                return n;
              }
              function c(e, t) {
                return e.reduce(function (e, n) {
                  return t.hasOwnProperty(n) ? e.concat(t[n]) : e;
                }, []);
              }
              t.exports = a;
            },
            { "../../../../lib/assign": 128, "./error": 92 },
          ],
          91: [
            function (e, t, n) {
              "use strict";
              var r = e("./error"),
                i = {
                  AMERICAN_EXPRESS: "American Express",
                  DINERS: "Discover",
                  DISCOVER: "Discover",
                  ELO: "Elo",
                  HIPER: "Hiper",
                  HIPERCARD: "Hipercard",
                  INTERNATIONAL_MAESTRO: "Maestro",
                  JCB: "JCB",
                  MASTERCARD: "MasterCard",
                  UK_MAESTRO: "Maestro",
                  UNION_PAY: "UnionPay",
                  VISA: "Visa",
                },
                o = { YES: "Yes", NO: "No", UNKNOWN: "Unknown" },
                a = { PSDTWO: "psd2" };
              function s(e) {
                return e.data && !e.errors ? c(e) : r(e);
              }
              function c(e) {
                var t,
                  n,
                  r = e.data.tokenizeCreditCard,
                  s = r.creditCard,
                  c = s.last4 ? s.last4.substr(2, 4) : "",
                  u = s.binData;
                if (u) {
                  [
                    "commercial",
                    "debit",
                    "durbinRegulated",
                    "healthcare",
                    "payroll",
                    "prepaid",
                  ].forEach(function (e) {
                    u[e] ? (u[e] = o[u[e]]) : (u[e] = "Unknown");
                  });
                  ["issuingBank", "countryOfIssuance", "productId"].forEach(
                    function (e) {
                      u[e] || (u[e] = "Unknown");
                    }
                  );
                }
                t = {
                  creditCards: [
                    {
                      binData: u,
                      consumed: !1,
                      description: c ? "ending in " + c : "",
                      nonce: r.token,
                      details: {
                        cardholderName: s.cardholderName,
                        expirationMonth: s.expirationMonth,
                        expirationYear: s.expirationYear,
                        bin: s.bin || "",
                        cardType: i[s.brandCode] || "Unknown",
                        lastFour: s.last4 || "",
                        lastTwo: c,
                      },
                      type: "CreditCard",
                      threeDSecureInfo: null,
                    },
                  ],
                };
                if (r.authenticationInsight) {
                  n =
                    r.authenticationInsight
                      .customerAuthenticationRegulationEnvironment;
                  t.creditCards[0].authenticationInsight = {
                    regulationEnvironment: a[n] || n.toLowerCase(),
                  };
                }
                return t;
              }
              t.exports = s;
            },
            { "./error": 92 },
          ],
          92: [
            function (e, t, n) {
              "use strict";
              function r(e) {
                var t =
                  e.errors &&
                  e.errors[0] &&
                  e.errors[0].extensions &&
                  e.errors[0].extensions.errorClass;
                return "VALIDATION" === t
                  ? o(e)
                  : t
                  ? i(e)
                  : {
                      error: {
                        message: "There was a problem serving your request",
                      },
                      fieldErrors: [],
                    };
              }
              function i(e) {
                return {
                  error: { message: e.errors[0].message },
                  fieldErrors: [],
                };
              }
              function o(e) {
                var t = a(e.errors);
                return 0 === t.length
                  ? { error: { message: e.errors[0].message } }
                  : { error: { message: c(t) }, fieldErrors: t };
              }
              function a(e) {
                var t = [];
                e.forEach(function (e) {
                  e.extensions &&
                    e.extensions.inputPath &&
                    s(e.extensions.inputPath.slice(1), e, t);
                });
                return t;
              }
              function s(e, t, n) {
                var r,
                  i = t.extensions.legacyCode,
                  o = e[0];
                if (1 !== e.length) {
                  n.forEach(function (e) {
                    e.field === o && (r = e);
                  });
                  if (!r) {
                    r = { field: o, fieldErrors: [] };
                    n.push(r);
                  }
                  s(e.slice(1), t, r.fieldErrors);
                } else n.push({ code: i, field: o, message: t.message });
              }
              function c(e) {
                return { creditCard: "Credit card is invalid" }[e[0].field];
              }
              t.exports = r;
            },
            {},
          ],
          93: [
            function (e, t, n) {
              "use strict";
              var r =
                "query ClientConfiguration {   clientConfiguration {     analyticsUrl     environment     merchantId     assetsUrl     clientApiUrl     creditCard {       supportedCardBrands       challenges       threeDSecureEnabled       threeDSecure {         cardinalAuthenticationJWT       }     }     applePayWeb {       countryCode       currencyCode       merchantIdentifier       supportedCardBrands     }     googlePay {       displayName       supportedCardBrands       environment       googleAuthorization       paypalClientId     }     ideal {       routeId       assetsUrl     }     kount {       merchantId     }     masterpass {       merchantCheckoutId       supportedCardBrands     }     paypal {       displayName       clientId       privacyUrl       userAgreementUrl       assetsUrl       environment       environmentNoNetwork       unvettedMerchant       braintreeClientId       billingAgreementsEnabled       merchantAccountId       currencyCode       payeeEmail     }     unionPay {       merchantAccountId     }     usBankAccount {       routeId       plaidPublicKey     }     venmo {       merchantId       accessToken       environment     }     visaCheckout {       apiKey       externalClientId       supportedCardBrands     }     braintreeApi {       accessToken       url     }     supportedFeatures   } }";
              function i() {
                return { query: r, operationName: "ClientConfiguration" };
              }
              t.exports = i;
            },
            {},
          ],
          94: [
            function (e, t, n) {
              "use strict";
              var r = e("../../../../lib/assign").assign;
              function i(e) {
                var t = e.hasAuthenticationInsight,
                  n =
                    "mutation TokenizeCreditCard($input: TokenizeCreditCardInput!";
                t &&
                  (n +=
                    ", $authenticationInsightInput: AuthenticationInsightInput!");
                n +=
                  ") {   tokenizeCreditCard(input: $input) {     token     creditCard {       bin       brandCode       last4       cardholderName       expirationMonth      expirationYear      binData {         prepaid         healthcare         debit         durbinRegulated         commercial         payroll         issuingBank         countryOfIssuance         productId       }     } ";
                t &&
                  (n +=
                    "    authenticationInsight(input: $authenticationInsightInput) {      customerAuthenticationRegulationEnvironment    }");
                return (n += "  } }");
              }
              function o(e, t) {
                var n = e.creditCard,
                  r = n && n.billingAddress,
                  i = n && n.expirationDate,
                  o = n && (n.expirationMonth || (i && i.split("/")[0].trim())),
                  s = n && (n.expirationYear || (i && i.split("/")[1].trim())),
                  c = {
                    input: {
                      creditCard: {
                        number: n && n.number,
                        expirationMonth: o,
                        expirationYear: s,
                        cvv: n && n.cvv,
                        cardholderName: n && n.cardholderName,
                      },
                      options: {},
                    },
                  };
                t.hasAuthenticationInsight &&
                  (c.authenticationInsightInput = {
                    merchantAccountId: e.merchantAccountId,
                  });
                r && (c.input.creditCard.billingAddress = r);
                c.input = a(e, c.input);
                return c;
              }
              function a(e, t) {
                var n;
                e.creditCard &&
                e.creditCard.options &&
                "boolean" == typeof e.creditCard.options.validate
                  ? (n = e.creditCard.options.validate)
                  : (e.authorizationFingerprint && e.tokenizationKey) ||
                    e.authorizationFingerprint
                  ? (n = !0)
                  : e.tokenizationKey && (n = !1);
                "boolean" == typeof n &&
                  (t.options = r({ validate: n }, t.options));
                return t;
              }
              function s(e) {
                var t = {
                  hasAuthenticationInsight: Boolean(
                    e.authenticationInsight && e.merchantAccountId
                  ),
                };
                return {
                  query: i(t),
                  variables: o(e, t),
                  operationName: "TokenizeCreditCard",
                };
              }
              t.exports = s;
            },
            { "../../../../lib/assign": 128 },
          ],
          95: [
            function (e, t, n) {
              "use strict";
              var r = e("../../browser-detection"),
                i = {
                  tokenize_credit_cards: "payment_methods/credit_cards",
                  configuration: "configuration",
                },
                o = ["creditCard.options.unionPayEnrollment"];
              function a(e) {
                this._config = e.graphQL;
              }
              a.prototype.getGraphQLEndpoint = function () {
                return this._config.url;
              };
              a.prototype.isGraphQLRequest = function (e, t) {
                var n,
                  o = this.getClientApiPath(e);
                if (!this._isGraphQLEnabled() || !o || r.isIe9()) return !1;
                n = this._config.features.some(function (e) {
                  return i[e] === o;
                });
                return !s(t) && n;
              };
              a.prototype.getClientApiPath = function (e) {
                var t,
                  n = "/client_api/v1/",
                  r = e.split(n);
                r.length > 1 && (t = r[1].split("?")[0]);
                return t;
              };
              a.prototype._isGraphQLEnabled = function () {
                return Boolean(this._config);
              };
              function s(e) {
                return o.some(function (t) {
                  return (
                    void 0 !==
                    t.split(".").reduce(function (e, t) {
                      return e && e[t];
                    }, e)
                  );
                });
              }
              t.exports = a;
            },
            { "../../browser-detection": 81 },
          ],
          96: [
            function (e, t, n) {
              "use strict";
              var r = e("../../constants").BRAINTREE_VERSION,
                i = e("../../../lib/assign").assign,
                o = e("./generators/credit-card-tokenization"),
                a = e("./adapters/credit-card-tokenization"),
                s = e("./generators/configuration"),
                c = e("./adapters/configuration"),
                u = { "payment_methods/credit_cards": o, configuration: s },
                d = { "payment_methods/credit_cards": a, configuration: c };
              function l(e) {
                var t = e.graphQL.getClientApiPath(e.url);
                this._graphQL = e.graphQL;
                this._data = e.data;
                this._method = e.method;
                this._headers = e.headers;
                this._clientSdkMetadata = {
                  source: e.metadata.source,
                  integration: e.metadata.integration,
                  sessionId: e.metadata.sessionId,
                };
                this._sendAnalyticsEvent =
                  e.sendAnalyticsEvent || Function.prototype;
                this._generator = u[t];
                this._adapter = d[t];
                this._sendAnalyticsEvent("graphql.init");
              }
              l.prototype.getUrl = function () {
                return this._graphQL.getGraphQLEndpoint();
              };
              l.prototype.getBody = function () {
                var e = E(this._data),
                  t = this._generator(e),
                  n = i({ clientSdkMetadata: this._clientSdkMetadata }, t);
                return JSON.stringify(n);
              };
              l.prototype.getMethod = function () {
                return "POST";
              };
              l.prototype.getHeaders = function () {
                var e, t;
                if (this._data.authorizationFingerprint) {
                  this._sendAnalyticsEvent("graphql.authorization-fingerprint");
                  e = this._data.authorizationFingerprint;
                } else {
                  this._sendAnalyticsEvent("graphql.tokenization-key");
                  e = this._data.tokenizationKey;
                }
                t = { Authorization: "Bearer " + e, "Braintree-Version": r };
                return i({}, this._headers, t);
              };
              l.prototype.adaptResponseBody = function (e) {
                return this._adapter(e, this);
              };
              l.prototype.determineStatus = function (e, t) {
                var n, r;
                if (200 === e) {
                  r =
                    t.errors &&
                    t.errors[0] &&
                    t.errors[0].extensions &&
                    t.errors[0].extensions.errorClass;
                  n =
                    t.data && !t.errors
                      ? 200
                      : "VALIDATION" === r
                      ? 422
                      : "AUTHORIZATION" === r
                      ? 403
                      : "AUTHENTICATION" === r
                      ? 401
                      : p(r, t)
                      ? 403
                      : 500;
                } else n = e || 500;
                this._sendAnalyticsEvent("graphql.status." + e);
                this._sendAnalyticsEvent("graphql.determinedStatus." + n);
                return n;
              };
              function p(e, t) {
                return !e && t.errors[0].message;
              }
              function _(e) {
                return -1 === e.indexOf("_")
                  ? e
                  : e.toLowerCase().replace(/(\_\w)/g, function (e) {
                      return e[1].toUpperCase();
                    });
              }
              function E(e) {
                var t = {};
                Object.keys(e).forEach(function (n) {
                  var r = _(n);
                  "object" == typeof e[n]
                    ? (t[r] = E(e[n]))
                    : "number" == typeof e[n]
                    ? (t[r] = String(e[n]))
                    : (t[r] = e[n]);
                });
                return t;
              }
              t.exports = l;
            },
            {
              "../../../lib/assign": 128,
              "../../constants": 83,
              "./adapters/configuration": 90,
              "./adapters/credit-card-tokenization": 91,
              "./generators/configuration": 93,
              "./generators/credit-card-tokenization": 94,
            },
          ],
          97: [
            function (e, t, n) {
              "use strict";
              var r,
                i = e("../../lib/once"),
                o = e("./jsonp-driver"),
                a = e("./ajax-driver"),
                s = e("./get-user-agent"),
                c = e("./is-http");
              function u() {
                null == r && (r = !(c() && /MSIE\s(8|9)/.test(s())));
                return r;
              }
              t.exports = function (e, t) {
                t = i(t || Function.prototype);
                e.method = (e.method || "GET").toUpperCase();
                e.timeout = null == e.timeout ? 6e4 : e.timeout;
                e.data = e.data || {};
                u() ? a.request(e, t) : o.request(e, t);
              };
            },
            {
              "../../lib/once": 163,
              "./ajax-driver": 87,
              "./get-user-agent": 89,
              "./is-http": 98,
              "./jsonp-driver": 99,
            },
          ],
          98: [
            function (e, t, n) {
              "use strict";
              t.exports = function () {
                return "http:" === window.location.protocol;
              };
            },
            {},
          ],
          99: [
            function (e, t, n) {
              "use strict";
              var r,
                i = e("@braintree/uuid"),
                o = e("../../lib/querystring"),
                a = {};
              function s(e) {
                e && e.parentNode && e.parentNode.removeChild(e);
              }
              function c(e, t) {
                var n = document.createElement("script"),
                  r = !1;
                n.src = e;
                n.async = !0;
                n.onerror = function () {
                  window[t]({ message: "error", status: 500 });
                };
                n.onload = n.onreadystatechange = function () {
                  if (
                    !(
                      r ||
                      (this.readyState &&
                        "loaded" !== this.readyState &&
                        "complete" !== this.readyState)
                    )
                  ) {
                    r = !0;
                    n.onload = n.onreadystatechange = null;
                  }
                };
                return n;
              }
              function u(e) {
                try {
                  delete window[e];
                } catch (t) {
                  window[e] = null;
                }
              }
              function d(e, t) {
                a[t] = setTimeout(function () {
                  a[t] = null;
                  window[t]({ error: "timeout", status: -1 });
                  window[t] = function () {
                    u(t);
                  };
                }, e);
              }
              function l(e, t, n) {
                window[n] = function (r) {
                  var i = r.status || 500,
                    o = null,
                    c = null;
                  delete r.status;
                  i >= 400 || i < 200 ? (o = r) : (c = r);
                  u(n);
                  s(e);
                  clearTimeout(a[n]);
                  t(o, c, i);
                };
              }
              function p(e, t) {
                var n,
                  a = "callback_json_" + i().replace(/-/g, ""),
                  s = e.url,
                  u = e.data,
                  p = e.method,
                  _ = e.timeout;
                s = o.queryify(s, u);
                l(
                  (n = c((s = o.queryify(s, { _method: p, callback: a })), a)),
                  t,
                  a
                );
                d(_, a);
                r || (r = document.getElementsByTagName("head")[0]);
                r.appendChild(n);
              }
              t.exports = { request: p };
            },
            { "../../lib/querystring": 165, "@braintree/uuid": 45 },
          ],
          100: [
            function (e, t, n) {
              "use strict";
              t.exports = function (e) {
                try {
                  e = JSON.parse(e);
                } catch (e) {}
                return e;
              };
            },
            {},
          ],
          101: [
            function (e, t, n) {
              "use strict";
              t.exports = function (e, t) {
                if ("string" != typeof e)
                  throw new Error("Method must be a string");
                "get" !== e.toLowerCase() &&
                  null != t &&
                  (t = "string" == typeof t ? t : JSON.stringify(t));
                return t;
              };
            },
            {},
          ],
          102: [
            function (e, t, n) {
              "use strict";
              var r =
                "undefined" != typeof window &&
                window.XMLHttpRequest &&
                "withCredentials" in new window.XMLHttpRequest();
              function i() {
                return r
                  ? new window.XMLHttpRequest()
                  : new window.XDomainRequest();
              }
              t.exports = { isAvailable: r, getRequestObject: i };
            },
            {},
          ],
          103: [
            function (e, t, n) {
              "use strict";
              var r = e("../lib/braintree-error");
              t.exports = {
                DATA_COLLECTOR_KOUNT_NOT_ENABLED: {
                  type: r.types.MERCHANT,
                  code: "DATA_COLLECTOR_KOUNT_NOT_ENABLED",
                  message: "Kount is not enabled for this merchant.",
                },
                DATA_COLLECTOR_KOUNT_ERROR: {
                  type: r.types.MERCHANT,
                  code: "DATA_COLLECTOR_KOUNT_ERROR",
                },
                DATA_COLLECTOR_REQUIRES_CREATE_OPTIONS: {
                  type: r.types.MERCHANT,
                  code: "DATA_COLLECTOR_REQUIRES_CREATE_OPTIONS",
                  message:
                    "Data Collector must be created with Kount and/or PayPal.",
                },
              };
            },
            { "../lib/braintree-error": 131 },
          ],
          104: [
            function (e, t, n) {
              "use strict";
              var r,
                i = e("../lib/constants").FRAUDNET_FNCLS,
                o = e("../lib/constants").FRAUDNET_SOURCE,
                a = e("../lib/constants").FRAUDNET_URL,
                s = e("../lib/assets").loadScript,
                c = e("../lib/promise");
              function u(e) {
                var t = new l();
                if (!(e = e || {}).sessionId && r) {
                  t.sessionId = r;
                  return c.resolve(t);
                }
                return t.initialize(e);
              }
              function d() {
                r = null;
              }
              function l() {}
              l.prototype.initialize = function (e) {
                var t = e.environment,
                  n = this;
                this.sessionId = e.sessionId || _();
                e.sessionId || (r = this.sessionId);
                this._beaconId = E(this.sessionId);
                this._parameterBlock = h(this.sessionId, this._beaconId, t);
                return s({ src: a })
                  .then(function (e) {
                    n._thirdPartyBlock = e;
                    return n;
                  })
                  .catch(function () {
                    return null;
                  });
              };
              l.prototype.teardown = function () {
                p(document.querySelector('iframe[title="ppfniframe"]'));
                p(document.querySelector('iframe[title="pbf"]'));
                p(this._parameterBlock);
                p(this._thirdPartyBlock);
              };
              function p(e) {
                e && e.parentNode && e.parentNode.removeChild(e);
              }
              function _() {
                var e,
                  t = "";
                for (e = 0; e < 32; e++)
                  t += Math.floor(16 * Math.random()).toString(16);
                return t;
              }
              function E(e) {
                return (
                  "https://b.stats.paypal.com/counter.cgi?i=127.0.0.1&p=" +
                  e +
                  "&t=" +
                  new Date().getTime() / 1e3 +
                  "&a=14"
                );
              }
              function h(e, t, n) {
                var r = document.body.appendChild(
                    document.createElement("script")
                  ),
                  a = { f: e, s: o, b: t };
                "production" !== n && (a.sandbox = !0);
                r.type = "application/json";
                r.setAttribute("fncls", i);
                r.text = JSON.stringify(a);
                return r;
              }
              t.exports = { setup: u, clearSessionIdCache: d };
            },
            {
              "../lib/assets": 127,
              "../lib/constants": 133,
              "../lib/promise": 164,
            },
          ],
          105: [
            function (e, t, n) {
              "use strict";
              var r = e("./kount"),
                i = e("./fraudnet"),
                o = e("../lib/braintree-error"),
                a = e("../lib/basic-component-verification"),
                s = e("../lib/create-deferred-client"),
                c = e("../lib/create-assets-url"),
                u = e("../lib/methods"),
                d = e("../lib/convert-methods-to-error"),
                l = "3.85.5",
                p = e("../lib/promise"),
                _ = e("@braintree/wrap-promise"),
                E = e("./errors");
              function h(e) {
                var t,
                  n = "Data Collector",
                  u = { _instances: [] };
                return a
                  .verify({
                    name: n,
                    client: e.client,
                    authorization: e.authorization,
                  })
                  .then(function () {
                    u._instantiatedWithAClient = !e.useDeferredClient;
                    u._createPromise = s
                      .create({
                        authorization: e.authorization,
                        client: e.client,
                        debug: e.debug,
                        assetsUrl: c.create(e.authorization),
                        name: n,
                      })
                      .then(function (n) {
                        var i,
                          a = n.getConfiguration();
                        if (!0 === e.kount && a.gatewayConfiguration.kount) {
                          try {
                            i = r.setup({
                              environment: a.gatewayConfiguration.environment,
                              merchantId:
                                a.gatewayConfiguration.kount.kountMerchantId,
                            });
                          } catch (e) {
                            return p.reject(
                              new o({
                                type: E.DATA_COLLECTOR_KOUNT_ERROR.type,
                                code: E.DATA_COLLECTOR_KOUNT_ERROR.code,
                                message: e.message,
                              })
                            );
                          }
                          t = i.deviceData;
                          u._instances.push(i);
                        } else t = {};
                        return p.resolve(n);
                      })
                      .then(function (n) {
                        return i
                          .setup({
                            sessionId:
                              e.riskCorrelationId ||
                              e.clientMetadataId ||
                              e.correlationId,
                            environment:
                              n.getConfiguration().gatewayConfiguration
                                .environment,
                          })
                          .then(function (e) {
                            if (e) {
                              t.correlation_id = e.sessionId;
                              u._instances.push(e);
                            }
                          });
                      })
                      .then(function () {
                        if (0 === u._instances.length)
                          return p.reject(
                            new o(E.DATA_COLLECTOR_REQUIRES_CREATE_OPTIONS)
                          );
                        u.deviceData = JSON.stringify(t);
                        u.rawDeviceData = t;
                        return u;
                      });
                    u.teardown = f(u);
                    u.getDeviceData = m(u);
                    return u._instantiatedWithAClient ? u._createPromise : u;
                  });
              }
              function f(e) {
                return _(function () {
                  return e._createPromise.then(function () {
                    e._instances.forEach(function (e) {
                      e && e.teardown();
                    });
                    d(e, u(e));
                  });
                });
              }
              function m(e) {
                return _(function (t) {
                  t = t || {};
                  return e._createPromise.then(function () {
                    return t.raw
                      ? p.resolve(e.rawDeviceData)
                      : p.resolve(e.deviceData);
                  });
                });
              }
              t.exports = { create: _(h), VERSION: l };
            },
            {
              "../lib/basic-component-verification": 129,
              "../lib/braintree-error": 131,
              "../lib/convert-methods-to-error": 134,
              "../lib/create-assets-url": 136,
              "../lib/create-deferred-client": 138,
              "../lib/methods": 162,
              "../lib/promise": 164,
              "./errors": 103,
              "./fraudnet": 104,
              "./kount": 106,
              "@braintree/wrap-promise": 49,
            },
          ],
          106: [
            function (e, t, n) {
              "use strict";
              var r = e("./vendor/sjcl"),
                i = e("../lib/camel-case-to-snake-case"),
                o = "https://assets.qa.braintreepayments.com/data",
                a = "braintreeDataFrame-",
                s = {
                  development: o,
                  qa: o,
                  sandbox: "https://assets.braintreegateway.com/sandbox/data",
                  production: "https://assets.braintreegateway.com/data",
                },
                c = {};
              function u(e) {
                return new d(null != e ? e : {});
              }
              function d(e) {
                var t = d.getCachedDeviceData(e.merchantId);
                if (t) {
                  this.deviceData = t;
                  this._isCached = !0;
                } else {
                  this._currentEnvironment = this._initializeEnvironment(e);
                  r.random.startCollectors();
                  this._deviceSessionId = this._generateDeviceSessionId();
                  this.deviceData = this._getDeviceData();
                  d.setCachedDeviceData(e.merchantId, this.deviceData);
                  this._iframe = this._setupIFrame();
                }
              }
              d.getCachedDeviceData = function (e) {
                return c[e];
              };
              d.setCachedDeviceData = function (e, t) {
                c[e] = t;
              };
              d.prototype.teardown = function () {
                if (!this._isCached) {
                  r.random.stopCollectors();
                  this._removeIframe();
                }
              };
              d.prototype._removeIframe = function () {
                this._iframe.parentNode.removeChild(this._iframe);
              };
              d.prototype._getDeviceData = function () {
                return i({
                  deviceSessionId: this._deviceSessionId,
                  fraudMerchantId: this._currentEnvironment.id,
                });
              };
              d.prototype._generateDeviceSessionId = function () {
                var e;
                e = r.random.randomWords(4, 0);
                return r.codec.hex.fromBits(e);
              };
              d.prototype._setupIFrame = function () {
                var e,
                  t,
                  n = this;
                e =
                  "?m=" +
                  this._currentEnvironment.id +
                  "&s=" +
                  this._deviceSessionId;
                (t = document.createElement("iframe")).width = 1;
                t.id = a + this._deviceSessionId;
                t.height = 1;
                t.frameBorder = 0;
                t.scrolling = "no";
                t.style.position = "fixed";
                t.style.left = "-999999px";
                t.style.top = "-999999px";
                t.title = "Braintree-Kount-iframe";
                t.setAttribute("aria-hidden", "true");
                document.body.appendChild(t);
                setTimeout(function () {
                  t.src = n._currentEnvironment.url + "/logo.htm" + e;
                  t.innerHTML =
                    '<img src="' +
                    n._currentEnvironment.url +
                    "/logo.gif" +
                    e +
                    '" alt="" />';
                }, 10);
                return t;
              };
              d.prototype._initializeEnvironment = function (e) {
                var t = s[e.environment];
                if (null == t)
                  throw new Error(
                    e.environment +
                      " is not a valid environment for kount.environment"
                  );
                return { url: t, name: e.environment, id: e.merchantId };
              };
              t.exports = { setup: u, Kount: d, environmentUrls: s };
            },
            { "../lib/camel-case-to-snake-case": 132, "./vendor/sjcl": 107 },
          ],
          107: [
            function (e, n, r) {
              "use strict";
              var i = {
                cipher: {},
                hash: {},
                keyexchange: {},
                mode: {},
                misc: {},
                codec: {},
                exception: {
                  corrupt: function (e) {
                    this.toString = function () {
                      return "CORRUPT: " + this.message;
                    };
                    this.message = e;
                  },
                  invalid: function (e) {
                    this.toString = function () {
                      return "INVALID: " + this.message;
                    };
                    this.message = e;
                  },
                  bug: function (e) {
                    this.toString = function () {
                      return "BUG: " + this.message;
                    };
                    this.message = e;
                  },
                  notReady: function (e) {
                    this.toString = function () {
                      return "NOT READY: " + this.message;
                    };
                    this.message = e;
                  },
                },
              };
              i.cipher.aes = function (e) {
                this.l[0][0][0] || this.G();
                var t,
                  n,
                  r,
                  o,
                  a = this.l[0][4],
                  s = this.l[1],
                  c = 1;
                if (4 !== (t = e.length) && 6 !== t && 8 !== t)
                  throw new i.exception.invalid("invalid aes key size");
                this.b = [(r = e.slice(0)), (o = [])];
                for (e = t; e < 4 * t + 28; e++) {
                  n = r[e - 1];
                  (0 == e % t || (8 === t && 4 == e % t)) &&
                    ((n =
                      (a[n >>> 24] << 24) ^
                      (a[(n >> 16) & 255] << 16) ^
                      (a[(n >> 8) & 255] << 8) ^
                      a[255 & n]),
                    0 == e % t &&
                      ((n = (n << 8) ^ (n >>> 24) ^ (c << 24)),
                      (c = (c << 1) ^ (283 * (c >> 7)))));
                  r[e] = r[e - t] ^ n;
                }
                for (t = 0; e; t++, e--)
                  (n = r[3 & t ? e : e - 4]),
                    (o[t] =
                      4 >= e || 4 > t
                        ? n
                        : s[0][a[n >>> 24]] ^
                          s[1][a[(n >> 16) & 255]] ^
                          s[2][a[(n >> 8) & 255]] ^
                          s[3][a[255 & n]]);
              };
              i.cipher.aes.prototype = {
                encrypt: function (e) {
                  return o(this, e, 0);
                },
                decrypt: function (e) {
                  return o(this, e, 1);
                },
                l: [
                  [[], [], [], [], []],
                  [[], [], [], [], []],
                ],
                G: function () {
                  var e,
                    t,
                    n,
                    r,
                    i,
                    o,
                    a,
                    s = this.l[0],
                    c = this.l[1],
                    u = s[4],
                    d = c[4],
                    l = [],
                    p = [];
                  for (e = 0; 256 > e; e++)
                    p[(l[e] = (e << 1) ^ (283 * (e >> 7))) ^ e] = e;
                  for (t = n = 0; !u[t]; t ^= r || 1, n = p[n] || 1)
                    for (
                      o =
                        ((o = n ^ (n << 1) ^ (n << 2) ^ (n << 3) ^ (n << 4)) >>
                          8) ^
                        (255 & o) ^
                        99,
                        u[t] = o,
                        d[o] = t,
                        a =
                          (16843009 * (i = l[(e = l[(r = l[t])])])) ^
                          (65537 * e) ^
                          (257 * r) ^
                          (16843008 * t),
                        i = (257 * l[o]) ^ (16843008 * o),
                        e = 0;
                      4 > e;
                      e++
                    )
                      (s[e][t] = i = (i << 24) ^ (i >>> 8)),
                        (c[e][o] = a = (a << 24) ^ (a >>> 8));
                  for (e = 0; 5 > e; e++)
                    (s[e] = s[e].slice(0)), (c[e] = c[e].slice(0));
                },
              };
              function o(e, t, n) {
                if (4 !== t.length)
                  throw new i.exception.invalid("invalid aes block size");
                var r = e.b[n],
                  o = t[0] ^ r[0],
                  a = t[n ? 3 : 1] ^ r[1],
                  s = t[2] ^ r[2];
                t = t[n ? 1 : 3] ^ r[3];
                var c,
                  u,
                  d,
                  l,
                  p = r.length / 4 - 2,
                  _ = 4,
                  E = [0, 0, 0, 0];
                e = (c = e.l[n])[0];
                var h = c[1],
                  f = c[2],
                  m = c[3],
                  y = c[4];
                for (l = 0; l < p; l++)
                  (c =
                    e[o >>> 24] ^
                    h[(a >> 16) & 255] ^
                    f[(s >> 8) & 255] ^
                    m[255 & t] ^
                    r[_]),
                    (u =
                      e[a >>> 24] ^
                      h[(s >> 16) & 255] ^
                      f[(t >> 8) & 255] ^
                      m[255 & o] ^
                      r[_ + 1]),
                    (d =
                      e[s >>> 24] ^
                      h[(t >> 16) & 255] ^
                      f[(o >> 8) & 255] ^
                      m[255 & a] ^
                      r[_ + 2]),
                    (t =
                      e[t >>> 24] ^
                      h[(o >> 16) & 255] ^
                      f[(a >> 8) & 255] ^
                      m[255 & s] ^
                      r[_ + 3]),
                    (_ += 4),
                    (o = c),
                    (a = u),
                    (s = d);
                for (l = 0; 4 > l; l++)
                  (E[n ? 3 & -l : l] =
                    (y[o >>> 24] << 24) ^
                    (y[(a >> 16) & 255] << 16) ^
                    (y[(s >> 8) & 255] << 8) ^
                    y[255 & t] ^
                    r[_++]),
                    (c = o),
                    (o = a),
                    (a = s),
                    (s = t),
                    (t = c);
                return E;
              }
              i.bitArray = {
                bitSlice: function (e, t, n) {
                  e = i.bitArray.M(e.slice(t / 32), 32 - (31 & t)).slice(1);
                  return void 0 === n ? e : i.bitArray.clamp(e, n - t);
                },
                extract: function (e, t, n) {
                  var r = Math.floor((-t - n) & 31);
                  return (
                    (-32 & ((t + n - 1) ^ t)
                      ? (e[(t / 32) | 0] << (32 - r)) ^
                        (e[(t / 32 + 1) | 0] >>> r)
                      : e[(t / 32) | 0] >>> r) &
                    ((1 << n) - 1)
                  );
                },
                concat: function (e, t) {
                  if (0 === e.length || 0 === t.length) return e.concat(t);
                  var n = e[e.length - 1],
                    r = i.bitArray.getPartial(n);
                  return 32 === r
                    ? e.concat(t)
                    : i.bitArray.M(t, r, 0 | n, e.slice(0, e.length - 1));
                },
                bitLength: function (e) {
                  var t = e.length;
                  return 0 === t
                    ? 0
                    : 32 * (t - 1) + i.bitArray.getPartial(e[t - 1]);
                },
                clamp: function (e, t) {
                  if (32 * e.length < t) return e;
                  var n = (e = e.slice(0, Math.ceil(t / 32))).length;
                  t &= 31;
                  0 < n &&
                    t &&
                    (e[n - 1] = i.bitArray.partial(
                      t,
                      e[n - 1] & (2147483648 >> (t - 1)),
                      1
                    ));
                  return e;
                },
                partial: function (e, t, n) {
                  return 32 === e
                    ? t
                    : (n ? 0 | t : t << (32 - e)) + 1099511627776 * e;
                },
                getPartial: function (e) {
                  return Math.round(e / 1099511627776) || 32;
                },
                equal: function (e, t) {
                  if (i.bitArray.bitLength(e) !== i.bitArray.bitLength(t))
                    return !1;
                  var n,
                    r = 0;
                  for (n = 0; n < e.length; n++) r |= e[n] ^ t[n];
                  return 0 === r;
                },
                M: function (e, t, n, r) {
                  var o;
                  o = 0;
                  for (void 0 === r && (r = []); 32 <= t; t -= 32)
                    r.push(n), (n = 0);
                  if (0 === t) return r.concat(e);
                  for (o = 0; o < e.length; o++)
                    r.push(n | (e[o] >>> t)), (n = e[o] << (32 - t));
                  o = e.length ? e[e.length - 1] : 0;
                  e = i.bitArray.getPartial(o);
                  r.push(
                    i.bitArray.partial(
                      (t + e) & 31,
                      32 < t + e ? n : r.pop(),
                      1
                    )
                  );
                  return r;
                },
                Y: function (e, t) {
                  return [e[0] ^ t[0], e[1] ^ t[1], e[2] ^ t[2], e[3] ^ t[3]];
                },
                byteswapM: function (e) {
                  var t, n;
                  for (t = 0; t < e.length; ++t)
                    (n = e[t]),
                      (e[t] =
                        (n >>> 24) |
                        ((n >>> 8) & 65280) |
                        ((65280 & n) << 8) |
                        (n << 24));
                  return e;
                },
              };
              i.codec.utf8String = {
                fromBits: function (e) {
                  var t,
                    n,
                    r = "",
                    o = i.bitArray.bitLength(e);
                  for (t = 0; t < o / 8; t++)
                    0 == (3 & t) && (n = e[t / 4]),
                      (r += String.fromCharCode(((n >>> 8) >>> 8) >>> 8)),
                      (n <<= 8);
                  return decodeURIComponent(escape(r));
                },
                toBits: function (e) {
                  e = unescape(encodeURIComponent(e));
                  var t,
                    n = [],
                    r = 0;
                  for (t = 0; t < e.length; t++)
                    (r = (r << 8) | e.charCodeAt(t)),
                      3 == (3 & t) && (n.push(r), (r = 0));
                  3 & t && n.push(i.bitArray.partial(8 * (3 & t), r));
                  return n;
                },
              };
              i.codec.hex = {
                fromBits: function (e) {
                  var t,
                    n = "";
                  for (t = 0; t < e.length; t++)
                    n += (0xf00000000000 + (0 | e[t])).toString(16).substr(4);
                  return n.substr(0, i.bitArray.bitLength(e) / 4);
                },
                toBits: function (e) {
                  var t,
                    n,
                    r = [];
                  n = (e = e.replace(/\s|0x/g, "")).length;
                  e += "00000000";
                  for (t = 0; t < e.length; t += 8)
                    r.push(0 ^ parseInt(e.substr(t, 8), 16));
                  return i.bitArray.clamp(r, 4 * n);
                },
              };
              i.hash.sha256 = function (e) {
                this.b[0] || this.G();
                e
                  ? ((this.u = e.u.slice(0)),
                    (this.o = e.o.slice(0)),
                    (this.h = e.h))
                  : this.reset();
              };
              i.hash.sha256.hash = function (e) {
                return new i.hash.sha256().update(e).finalize();
              };
              i.hash.sha256.prototype = {
                blockSize: 512,
                reset: function () {
                  this.u = this.K.slice(0);
                  this.o = [];
                  this.h = 0;
                  return this;
                },
                update: function (e) {
                  "string" == typeof e && (e = i.codec.utf8String.toBits(e));
                  var t,
                    n = (this.o = i.bitArray.concat(this.o, e));
                  t = this.h;
                  if (
                    9007199254740991 <
                    (e = this.h = t + i.bitArray.bitLength(e))
                  )
                    throw new i.exception.invalid(
                      "Cannot hash more than 2^53 - 1 bits"
                    );
                  if ("undefined" != typeof Uint32Array) {
                    var r = new Uint32Array(n),
                      o = 0;
                    for (t = 512 + t - ((512 + t) & 511); t <= e; t += 512)
                      a(this, r.subarray(16 * o, 16 * (o + 1))), (o += 1);
                    n.splice(0, 16 * o);
                  } else
                    for (t = 512 + t - ((512 + t) & 511); t <= e; t += 512)
                      a(this, n.splice(0, 16));
                  return this;
                },
                finalize: function () {
                  var e,
                    t = this.o,
                    n = this.u;
                  for (
                    e =
                      (t = i.bitArray.concat(t, [i.bitArray.partial(1, 1)]))
                        .length + 2;
                    15 & e;
                    e++
                  )
                    t.push(0);
                  t.push(Math.floor(this.h / 4294967296));
                  for (t.push(0 | this.h); t.length; ) a(this, t.splice(0, 16));
                  this.reset();
                  return n;
                },
                K: [],
                b: [],
                G: function () {
                  function e(e) {
                    return (4294967296 * (e - Math.floor(e))) | 0;
                  }
                  for (var t, n, r = 0, i = 2; 64 > r; i++) {
                    n = !0;
                    for (t = 2; t * t <= i; t++)
                      if (0 == i % t) {
                        n = !1;
                        break;
                      }
                    n &&
                      (8 > r && (this.K[r] = e(Math.pow(i, 0.5))),
                      (this.b[r] = e(Math.pow(i, 1 / 3))),
                      r++);
                  }
                },
              };
              function a(e, t) {
                var n,
                  r,
                  i,
                  o = e.u,
                  a = e.b,
                  s = o[0],
                  c = o[1],
                  u = o[2],
                  d = o[3],
                  l = o[4],
                  p = o[5],
                  _ = o[6],
                  E = o[7];
                for (n = 0; 64 > n; n++)
                  16 > n
                    ? (r = t[n])
                    : ((r = t[(n + 1) & 15]),
                      (i = t[(n + 14) & 15]),
                      (r = t[15 & n] =
                        (((r >>> 7) ^
                          (r >>> 18) ^
                          (r >>> 3) ^
                          (r << 25) ^
                          (r << 14)) +
                          ((i >>> 17) ^
                            (i >>> 19) ^
                            (i >>> 10) ^
                            (i << 15) ^
                            (i << 13)) +
                          t[15 & n] +
                          t[(n + 9) & 15]) |
                        0)),
                    (r =
                      r +
                      E +
                      ((l >>> 6) ^
                        (l >>> 11) ^
                        (l >>> 25) ^
                        (l << 26) ^
                        (l << 21) ^
                        (l << 7)) +
                      (_ ^ (l & (p ^ _))) +
                      a[n]),
                    (E = _),
                    (_ = p),
                    (p = l),
                    (l = (d + r) | 0),
                    (d = u),
                    (u = c),
                    (s =
                      (r +
                        (((c = s) & u) ^ (d & (c ^ u))) +
                        ((c >>> 2) ^
                          (c >>> 13) ^
                          (c >>> 22) ^
                          (c << 30) ^
                          (c << 19) ^
                          (c << 10))) |
                      0);
                o[0] = (o[0] + s) | 0;
                o[1] = (o[1] + c) | 0;
                o[2] = (o[2] + u) | 0;
                o[3] = (o[3] + d) | 0;
                o[4] = (o[4] + l) | 0;
                o[5] = (o[5] + p) | 0;
                o[6] = (o[6] + _) | 0;
                o[7] = (o[7] + E) | 0;
              }
              i.prng = function (e) {
                this.c = [new i.hash.sha256()];
                this.i = [0];
                this.H = 0;
                this.v = {};
                this.F = 0;
                this.J = {};
                this.L = this.f = this.j = this.T = 0;
                this.b = [0, 0, 0, 0, 0, 0, 0, 0];
                this.g = [0, 0, 0, 0];
                this.C = void 0;
                this.D = e;
                this.s = !1;
                this.B = { progress: {}, seeded: {} };
                this.m = this.S = 0;
                this.w = 1;
                this.A = 2;
                this.O = 65536;
                this.I = [0, 48, 64, 96, 128, 192, 256, 384, 512, 768, 1024];
                this.P = 3e4;
                this.N = 80;
              };
              i.prng.prototype = {
                randomWords: function (e, t) {
                  var n,
                    r,
                    o = [];
                  if ((n = this.isReady(t)) === this.m)
                    throw new i.exception.notReady("generator isn't seeded");
                  if (n & this.A) {
                    n = !(n & this.w);
                    r = [];
                    var a,
                      s = 0;
                    this.L = r[0] = new Date().valueOf() + this.P;
                    for (a = 0; 16 > a; a++)
                      r.push((4294967296 * Math.random()) | 0);
                    for (
                      a = 0;
                      a < this.c.length &&
                      ((r = r.concat(this.c[a].finalize())),
                      (s += this.i[a]),
                      (this.i[a] = 0),
                      n || !(this.H & (1 << a)));
                      a++
                    );
                    this.H >= 1 << this.c.length &&
                      (this.c.push(new i.hash.sha256()), this.i.push(0));
                    this.f -= s;
                    s > this.j && (this.j = s);
                    this.H++;
                    this.b = i.hash.sha256.hash(this.b.concat(r));
                    this.C = new i.cipher.aes(this.b);
                    for (
                      n = 0;
                      4 > n && ((this.g[n] = (this.g[n] + 1) | 0), !this.g[n]);
                      n++
                    );
                  }
                  for (n = 0; n < e; n += 4)
                    0 == (n + 1) % this.O && u(this),
                      (r = d(this)),
                      o.push(r[0], r[1], r[2], r[3]);
                  u(this);
                  return o.slice(0, e);
                },
                setDefaultParanoia: function (e, t) {
                  if (
                    0 === e &&
                    "Setting paranoia=0 will ruin your security; use it only for testing" !==
                      t
                  )
                    throw new i.exception.invalid(
                      "Setting paranoia=0 will ruin your security; use it only for testing"
                    );
                  this.D = e;
                },
                addEntropy: function (e, t, n) {
                  n = n || "user";
                  var r,
                    o,
                    a = new Date().valueOf(),
                    c = this.v[n],
                    u = this.isReady(),
                    d = 0;
                  void 0 === (r = this.J[n]) && (r = this.J[n] = this.T++);
                  void 0 === c && (c = this.v[n] = 0);
                  this.v[n] = (this.v[n] + 1) % this.c.length;
                  switch (typeof e) {
                    case "number":
                      void 0 === t && (t = 1);
                      this.c[c].update([r, this.F++, 1, t, a, 1, 0 | e]);
                      break;
                    case "object":
                      if (
                        "[object Uint32Array]" ===
                        (n = Object.prototype.toString.call(e))
                      ) {
                        o = [];
                        for (n = 0; n < e.length; n++) o.push(e[n]);
                        e = o;
                      } else
                        for (
                          "[object Array]" !== n && (d = 1), n = 0;
                          n < e.length && !d;
                          n++
                        )
                          "number" != typeof e[n] && (d = 1);
                      if (!d) {
                        if (void 0 === t)
                          for (n = t = 0; n < e.length; n++)
                            for (o = e[n]; 0 < o; ) t++, (o >>>= 1);
                        this.c[c].update(
                          [r, this.F++, 2, t, a, e.length].concat(e)
                        );
                      }
                      break;
                    case "string":
                      void 0 === t && (t = e.length);
                      this.c[c].update([r, this.F++, 3, t, a, e.length]);
                      this.c[c].update(e);
                      break;
                    default:
                      d = 1;
                  }
                  if (d)
                    throw new i.exception.bug(
                      "random: addEntropy only supports number, array of numbers or string"
                    );
                  this.i[c] += t;
                  this.f += t;
                  u === this.m &&
                    (this.isReady() !== this.m &&
                      s("seeded", Math.max(this.j, this.f)),
                    s("progress", this.getProgress()));
                },
                isReady: function (e) {
                  e = this.I[void 0 !== e ? e : this.D];
                  return this.j && this.j >= e
                    ? this.i[0] > this.N && new Date().valueOf() > this.L
                      ? this.A | this.w
                      : this.w
                    : this.f >= e
                    ? this.A | this.m
                    : this.m;
                },
                getProgress: function (e) {
                  e = this.I[e || this.D];
                  return this.j >= e || this.f > e ? 1 : this.f / e;
                },
                startCollectors: function () {
                  if (!this.s) {
                    this.a = {
                      loadTimeCollector: l(this, this.V),
                      mouseCollector: l(this, this.W),
                      keyboardCollector: l(this, this.U),
                      accelerometerCollector: l(this, this.R),
                      touchCollector: l(this, this.X),
                    };
                    if (window.addEventListener)
                      window.addEventListener(
                        "load",
                        this.a.loadTimeCollector,
                        !1
                      ),
                        window.addEventListener(
                          "mousemove",
                          this.a.mouseCollector,
                          !1
                        ),
                        window.addEventListener(
                          "keypress",
                          this.a.keyboardCollector,
                          !1
                        ),
                        window.addEventListener(
                          "devicemotion",
                          this.a.accelerometerCollector,
                          !1
                        ),
                        window.addEventListener(
                          "touchmove",
                          this.a.touchCollector,
                          !1
                        );
                    else {
                      if (!document.attachEvent)
                        throw new i.exception.bug("can't attach event");
                      document.attachEvent("onload", this.a.loadTimeCollector),
                        document.attachEvent(
                          "onmousemove",
                          this.a.mouseCollector
                        ),
                        document.attachEvent(
                          "keypress",
                          this.a.keyboardCollector
                        );
                    }
                    this.s = !0;
                  }
                },
                stopCollectors: function () {
                  this.s &&
                    (window.removeEventListener
                      ? (window.removeEventListener(
                          "load",
                          this.a.loadTimeCollector,
                          !1
                        ),
                        window.removeEventListener(
                          "mousemove",
                          this.a.mouseCollector,
                          !1
                        ),
                        window.removeEventListener(
                          "keypress",
                          this.a.keyboardCollector,
                          !1
                        ),
                        window.removeEventListener(
                          "devicemotion",
                          this.a.accelerometerCollector,
                          !1
                        ),
                        window.removeEventListener(
                          "touchmove",
                          this.a.touchCollector,
                          !1
                        ))
                      : document.detachEvent &&
                        (document.detachEvent(
                          "onload",
                          this.a.loadTimeCollector
                        ),
                        document.detachEvent(
                          "onmousemove",
                          this.a.mouseCollector
                        ),
                        document.detachEvent(
                          "keypress",
                          this.a.keyboardCollector
                        )),
                    (this.s = !1));
                },
                addEventListener: function (e, t) {
                  this.B[e][this.S++] = t;
                },
                removeEventListener: function (e, t) {
                  var n,
                    r,
                    i = this.B[e],
                    o = [];
                  for (r in i) i.hasOwnProperty(r) && i[r] === t && o.push(r);
                  for (n = 0; n < o.length; n++) delete i[(r = o[n])];
                },
                U: function () {
                  c(this, 1);
                },
                W: function (e) {
                  var t, n;
                  try {
                    (t = e.x || e.clientX || e.offsetX || 0),
                      (n = e.y || e.clientY || e.offsetY || 0);
                  } catch (e) {
                    n = t = 0;
                  }
                  0 != t && 0 != n && this.addEntropy([t, n], 2, "mouse");
                  c(this, 0);
                },
                X: function (e) {
                  e = e.touches[0] || e.changedTouches[0];
                  this.addEntropy(
                    [e.pageX || e.clientX, e.pageY || e.clientY],
                    1,
                    "touch"
                  );
                  c(this, 0);
                },
                V: function () {
                  c(this, 2);
                },
                R: function (e) {
                  e =
                    e.accelerationIncludingGravity.x ||
                    e.accelerationIncludingGravity.y ||
                    e.accelerationIncludingGravity.z;
                  if (window.orientation) {
                    var t = window.orientation;
                    "number" == typeof t &&
                      this.addEntropy(t, 1, "accelerometer");
                  }
                  e && this.addEntropy(e, 2, "accelerometer");
                  c(this, 0);
                },
              };
              function s(e, t) {
                var n,
                  r = i.random.B[e],
                  o = [];
                for (n in r) r.hasOwnProperty(n) && o.push(r[n]);
                for (n = 0; n < o.length; n++) o[n](t);
              }
              function c(e, t) {
                "undefined" != typeof window &&
                window.performance &&
                "function" == typeof window.performance.now
                  ? e.addEntropy(window.performance.now(), t, "loadtime")
                  : e.addEntropy(new Date().valueOf(), t, "loadtime");
              }
              function u(e) {
                e.b = d(e).concat(d(e));
                e.C = new i.cipher.aes(e.b);
              }
              function d(e) {
                for (
                  var t = 0;
                  4 > t && ((e.g[t] = (e.g[t] + 1) | 0), !e.g[t]);
                  t++
                );
                return e.C.encrypt(e.g);
              }
              function l(e, t) {
                return function () {
                  t.apply(e, arguments);
                };
              }
              i.random = new i.prng(6);
              e: try {
                var p, _, E, h;
                if ((h = void 0 !== n && n.exports)) {
                  var f;
                  try {
                    f = e("crypto");
                  } catch (e) {
                    f = null;
                  }
                  h = _ = f;
                }
                if (h && _.randomBytes)
                  (p = _.randomBytes(128)),
                    (p = new Uint32Array(new Uint8Array(p).buffer)),
                    i.random.addEntropy(p, 1024, "crypto['randomBytes']");
                else if (
                  "undefined" != typeof window &&
                  "undefined" != typeof Uint32Array
                ) {
                  E = new Uint32Array(32);
                  if (window.crypto && window.crypto.getRandomValues)
                    window.crypto.getRandomValues(E);
                  else {
                    if (!window.msCrypto || !window.msCrypto.getRandomValues)
                      break e;
                    window.msCrypto.getRandomValues(E);
                  }
                  i.random.addEntropy(E, 1024, "crypto['getRandomValues']");
                }
              } catch (e) {
                "undefined" != typeof window &&
                  window.console &&
                  (console.log(
                    "There was an error collecting entropy from the browser:"
                  ),
                  console.log(e));
              }
              void 0 !== n && n.exports && (n.exports = i);
              "function" == typeof t &&
                t([], function () {
                  return i;
                });
            },
            { crypto: void 0 },
          ],
          108: [
            function (e, t, n) {
              "use strict";
              var r = e("../lib/braintree-error");
              t.exports = {
                GOOGLE_PAYMENT_NOT_ENABLED: {
                  type: r.types.MERCHANT,
                  code: "GOOGLE_PAYMENT_NOT_ENABLED",
                  message: "Google Pay is not enabled for this merchant.",
                },
                GOOGLE_PAYMENT_GATEWAY_ERROR: {
                  code: "GOOGLE_PAYMENT_GATEWAY_ERROR",
                  message:
                    "There was an error when tokenizing the Google Pay payment method.",
                  type: r.types.UNKNOWN,
                },
                GOOGLE_PAYMENT_UNSUPPORTED_VERSION: {
                  code: "GOOGLE_PAYMENT_UNSUPPORTED_VERSION",
                  type: r.types.MERCHANT,
                },
              };
            },
            { "../lib/braintree-error": 131 },
          ],
          109: [
            function (e, t, n) {
              "use strict";
              var r = e("../lib/analytics"),
                i = e("../lib/assign").assign,
                o = e("../lib/convert-methods-to-error"),
                a = e("../lib/find"),
                s = e("../lib/generate-google-pay-configuration"),
                c = e("../lib/braintree-error"),
                u = e("./errors"),
                d = e("../lib/methods"),
                l = e("../lib/promise"),
                p = e("@braintree/wrap-promise"),
                _ = {
                  1: "_createV1PaymentDataRequest",
                  2: "_createV2PaymentDataRequest",
                };
              function E(e) {
                this._createPromise = e.createPromise;
                this._client = e.client;
                this._useDeferredClient = e.useDeferredClient;
                this._googlePayVersion = e.googlePayVersion || 1;
                this._googleMerchantId = e.googleMerchantId;
                if (this._isUnsupportedGooglePayAPIVersion())
                  throw new c({
                    code: u.GOOGLE_PAYMENT_UNSUPPORTED_VERSION.code,
                    message:
                      "The Braintree SDK does not support Google Pay version " +
                      this._googlePayVersion +
                      ". Please upgrade the version of your Braintree SDK and contact support if this error persists.",
                    type: u.GOOGLE_PAYMENT_UNSUPPORTED_VERSION.type,
                  });
              }
              E.prototype._waitForClient = function () {
                return this._client
                  ? l.resolve()
                  : this._createPromise.then(
                      function (e) {
                        this._client = e;
                      }.bind(this)
                    );
              };
              E.prototype._isUnsupportedGooglePayAPIVersion = function () {
                return !(this._googlePayVersion in _);
              };
              E.prototype._getDefaultConfig = function () {
                this._defaultConfig ||
                  (this._defaultConfig = s(
                    this._client.getConfiguration(),
                    this._googlePayVersion,
                    this._googleMerchantId
                  ));
                return this._defaultConfig;
              };
              E.prototype._createV1PaymentDataRequest = function (e) {
                var t = this._getDefaultConfig(),
                  n =
                    e.cardRequirements &&
                    e.cardRequirements.allowedCardNetworks,
                  r = t.cardRequirements.allowedCardNetworks,
                  o = n || r;
                (e = i({}, t, e)).cardRequirements.allowedCardNetworks = o;
                return e;
              };
              E.prototype._createV2PaymentDataRequest = function (e) {
                var t = this._getDefaultConfig();
                e.allowedPaymentMethods &&
                  e.allowedPaymentMethods.forEach(function (e) {
                    var n = a(t.allowedPaymentMethods, "type", e.type);
                    n && h(e, n);
                  });
                return (e = i({}, t, e));
              };
              E.prototype.createPaymentDataRequest = function (e) {
                return this._useDeferredClient
                  ? this._waitForClient().then(
                      function () {
                        return this._createPaymentDataRequestSyncronously(e);
                      }.bind(this)
                    )
                  : this._createPaymentDataRequestSyncronously(e);
              };
              E.prototype._createPaymentDataRequestSyncronously = function (e) {
                var t = i({}, e),
                  n = this._googlePayVersion,
                  o = _[n];
                r.sendEvent(
                  this._createPromise,
                  "google-payment.v" + n + ".createPaymentDataRequest"
                );
                return this[o](t);
              };
              E.prototype.parseResponse = function (e) {
                var t = this;
                return l
                  .resolve()
                  .then(function () {
                    var n,
                      i =
                        2 === e.apiVersion
                          ? e.paymentMethodData.tokenizationData.token
                          : e.paymentMethodToken.token,
                      o = JSON.parse(i),
                      a = o.error;
                    if (a) return l.reject(a);
                    r.sendEvent(
                      t._createPromise,
                      "google-payment.parseResponse.succeeded"
                    );
                    if (o.paypalAccounts) {
                      n = o.paypalAccounts[0];
                      r.sendEvent(
                        t._createPromise,
                        "google-payment.parseResponse.succeeded.paypal"
                      );
                      return l.resolve({
                        nonce: n.nonce,
                        type: n.type,
                        description: n.description,
                      });
                    }
                    n = o.androidPayCards[0];
                    r.sendEvent(
                      t._createPromise,
                      "google-payment.parseResponse.succeeded.google-payment"
                    );
                    return l.resolve({
                      nonce: n.nonce,
                      type: n.type,
                      description: n.description,
                      details: {
                        cardType: n.details.cardType,
                        lastFour: n.details.lastFour,
                        lastTwo: n.details.lastTwo,
                        isNetworkTokenized: n.details.isNetworkTokenized,
                        bin: n.details.bin,
                      },
                      binData: n.binData,
                    });
                  })
                  .catch(function (e) {
                    r.sendEvent(
                      t._createPromise,
                      "google-payment.parseResponse.failed"
                    );
                    return l.reject(
                      new c({
                        code: u.GOOGLE_PAYMENT_GATEWAY_ERROR.code,
                        message: u.GOOGLE_PAYMENT_GATEWAY_ERROR.message,
                        type: u.GOOGLE_PAYMENT_GATEWAY_ERROR.type,
                        details: { originalError: e },
                      })
                    );
                  });
              };
              E.prototype.teardown = function () {
                o(this, d(E.prototype));
                return l.resolve();
              };
              function h(e, t) {
                Object.keys(t).forEach(function (n) {
                  "object" == typeof t[n]
                    ? (e[n] = i({}, t[n], e[n]))
                    : (e[n] = e[n] || t[n]);
                });
              }
              t.exports = p.wrapPrototype(E);
            },
            {
              "../lib/analytics": 126,
              "../lib/assign": 128,
              "../lib/braintree-error": 131,
              "../lib/convert-methods-to-error": 134,
              "../lib/find": 144,
              "../lib/generate-google-pay-configuration": 156,
              "../lib/methods": 162,
              "../lib/promise": 164,
              "./errors": 108,
              "@braintree/wrap-promise": 49,
            },
          ],
          110: [
            function (e, t, n) {
              "use strict";
              var r = e("./google-payment"),
                i = e("../lib/braintree-error"),
                o = e("../lib/promise"),
                a = e("../lib/create-assets-url"),
                s = e("../lib/create-deferred-client"),
                c = e("../lib/basic-component-verification"),
                u = e("@braintree/wrap-promise"),
                d = "3.85.5",
                l = e("./errors");
              function p(e) {
                var t = "Google Pay";
                return c
                  .verify({
                    name: t,
                    client: e.client,
                    authorization: e.authorization,
                  })
                  .then(function () {
                    var n, c;
                    n = s
                      .create({
                        authorization: e.authorization,
                        client: e.client,
                        debug: e.debug,
                        assetsUrl: a.create(e.authorization),
                        name: t,
                      })
                      .then(function (t) {
                        var n = t.getConfiguration();
                        e.client = t;
                        return n.gatewayConfiguration.androidPay
                          ? t
                          : o.reject(new i(l.GOOGLE_PAYMENT_NOT_ENABLED));
                      });
                    e.createPromise = n;
                    c = new r(e);
                    return e.useDeferredClient
                      ? c
                      : n.then(function (e) {
                          c._client = e;
                          return c;
                        });
                  });
              }
              t.exports = { create: u(p), VERSION: d };
            },
            {
              "../lib/basic-component-verification": 129,
              "../lib/braintree-error": 131,
              "../lib/create-assets-url": 136,
              "../lib/create-deferred-client": 138,
              "../lib/promise": 164,
              "./errors": 108,
              "./google-payment": 109,
              "@braintree/wrap-promise": 49,
            },
          ],
          111: [
            function (e, t, n) {
              "use strict";
              var r = e("../../lib/braintree-error"),
                i = e("../shared/errors"),
                o = e("../shared/constants").allowedAttributes;
              function a(e, t) {
                var n;
                o.hasOwnProperty(e)
                  ? null == t ||
                    s(e, t) ||
                    (n = new r({
                      type: i.HOSTED_FIELDS_ATTRIBUTE_VALUE_NOT_ALLOWED.type,
                      code: i.HOSTED_FIELDS_ATTRIBUTE_VALUE_NOT_ALLOWED.code,
                      message:
                        'Value "' +
                        t +
                        '" is not allowed for "' +
                        e +
                        '" attribute.',
                    }))
                  : (n = new r({
                      type: i.HOSTED_FIELDS_ATTRIBUTE_NOT_SUPPORTED.type,
                      code: i.HOSTED_FIELDS_ATTRIBUTE_NOT_SUPPORTED.code,
                      message:
                        'The "' +
                        e +
                        '" attribute is not supported in Hosted Fields.',
                    }));
                return n;
              }
              function s(e, t) {
                return "string" === o[e]
                  ? "string" == typeof t || "number" == typeof t
                  : "boolean" === o[e] &&
                      ("true" === String(t) || "false" === String(t));
              }
              t.exports = a;
            },
            {
              "../../lib/braintree-error": 131,
              "../shared/constants": 119,
              "../shared/errors": 120,
            },
          ],
          112: [
            function (e, t, n) {
              "use strict";
              var r = e("../shared/constants"),
                i = e("../../lib/use-min");
              t.exports = function (e, t, n) {
                return (
                  e +
                  "/web/" +
                  r.VERSION +
                  "/html/hosted-fields-frame" +
                  i(n) +
                  ".html#" +
                  t
                );
              };
            },
            { "../../lib/use-min": 167, "../shared/constants": 119 },
          ],
          113: [
            function (e, t, n) {
              "use strict";
              var r = e("../shared/constants").navigationDirections,
                i = e("../shared/browser-detection"),
                o = e("../shared/focus-intercept"),
                a = e("../shared/find-parent-tags"),
                s = ["INPUT", "SELECT", "TEXTAREA"],
                c = [
                  "hidden",
                  "button",
                  "reset",
                  "submit",
                  "checkbox",
                  "radio",
                  "file",
                ];
              function u(e) {
                return i.hasSoftwareKeyboard()
                  ? s.indexOf(e.tagName) > -1 && c.indexOf(e.type) < 0
                  : "hidden" !== e.type;
              }
              function d(e, t) {
                switch (e) {
                  case r.BACK:
                    return {
                      checkIndexBounds: function (e) {
                        return e < 0;
                      },
                      indexChange: -1,
                    };
                  case r.FORWARD:
                    return {
                      checkIndexBounds: function (e) {
                        return e > t - 1;
                      },
                      indexChange: 1,
                    };
                }
                return {};
              }
              function l(e) {
                var t, n;
                for (t = 0; t < e.length; t++) if (u((n = e[t]))) return n;
                return null;
              }
              t.exports = {
                removeExtraFocusElements: function (e, t) {
                  var n = Array.prototype.slice.call(e.elements);
                  [l(n), l(n.reverse())].forEach(function (e) {
                    e &&
                      o.matchFocusElement(e.getAttribute("id")) &&
                      t(e.getAttribute("id"));
                  });
                },
                createFocusChangeHandler: function (e, t) {
                  return function (n) {
                    var r,
                      i,
                      s,
                      c,
                      l = document.getElementById(
                        "bt-" + n.field + "-" + n.direction + "-" + e
                      );
                    if (l) {
                      s = a(l, "form")[0];
                      if (document.forms.length < 1 || !s)
                        t.onRemoveFocusIntercepts();
                      else {
                        r = (s = [].slice.call(s.elements)).indexOf(l);
                        c = d(n.direction, s.length);
                        do {
                          r += c.indexChange;
                          if (c.checkIndexBounds(r)) return;
                          i = s[r];
                        } while (!u(i));
                        o.matchFocusElement(i.getAttribute("id"))
                          ? t.onTriggerInputFocus(
                              i.getAttribute("data-braintree-type")
                            )
                          : i.focus();
                      }
                    }
                  };
                },
              };
            },
            {
              "../shared/browser-detection": 118,
              "../shared/constants": 119,
              "../shared/find-parent-tags": 121,
              "../shared/focus-intercept": 122,
            },
          ],
          114: [
            function (e, t, n) {
              "use strict";
              var r = e("../shared/constants").allowedStyles;
              t.exports = function (e) {
                var t,
                  n = document.createElement("input"),
                  i = {};
                "." === e[0] && (e = e.substring(1));
                n.className = e;
                n.style.display = "none !important";
                n.style.position = "fixed !important";
                n.style.left = "-99999px !important";
                n.style.top = "-99999px !important";
                document.body.appendChild(n);
                t = window.getComputedStyle(n);
                r.forEach(function (e) {
                  var n = t[e];
                  n && (i[e] = n);
                });
                document.body.removeChild(n);
                return i;
              };
            },
            { "../shared/constants": 119 },
          ],
          115: [
            function (e, t, n) {
              "use strict";
              var r = e("../../lib/assign").assign,
                i = e("../../lib/create-assets-url"),
                o = e("../../lib/is-verified-domain"),
                a = e("../../lib/destructor"),
                s = e("@braintree/class-list"),
                c = e("@braintree/iframer"),
                u = e("framebus"),
                d = e("../../lib/create-deferred-client"),
                l = e("../../lib/braintree-error"),
                p = e("./compose-url"),
                _ = e("./get-styles-from-class"),
                E = e("../shared/constants"),
                h = e("../shared/errors"),
                f = e("../../lib/constants").INTEGRATION_TIMEOUT_MS,
                m = e("@braintree/uuid"),
                y = e("../shared/find-parent-tags"),
                A = e("../shared/browser-detection"),
                T = E.events,
                I = e("@braintree/event-emitter"),
                N = e("./inject-frame"),
                O = e("../../lib/analytics"),
                b = E.allowedFields,
                g = e("../../lib/methods"),
                v = e("../../lib/shadow"),
                P = e("../../lib/find-root-node"),
                C = e("../../lib/convert-methods-to-error"),
                R = e("../../lib/errors"),
                S = e("../shared/get-card-types"),
                D = e("./attribute-validation-error"),
                w = e("../../lib/promise"),
                L = e("@braintree/wrap-promise"),
                M = e("./focus-change"),
                U = e("../shared/focus-intercept").destroy,
                k = 5;
              function F(e) {
                return function (t) {
                  var n,
                    r = t.merchantPayload,
                    i = r.emittedBy,
                    o = e[i].containerElement;
                  Object.keys(r.fields).forEach(function (t) {
                    r.fields[t].container = e[t].containerElement;
                  });
                  n = r.fields[i];
                  s.toggle(o, E.externalClasses.FOCUSED, n.isFocused);
                  s.toggle(o, E.externalClasses.VALID, n.isValid);
                  s.toggle(o, E.externalClasses.INVALID, !n.isPotentiallyValid);
                  this._state = { cards: r.cards, fields: r.fields };
                  this._emit(t.type, r);
                };
              }
              function x(e) {
                var t = e.getBoundingClientRect(),
                  n = Math.floor(t.height / 2),
                  r = Math.floor(t.width / 2);
                return (
                  t.top <
                    (window.innerHeight - n ||
                      document.documentElement.clientHeight - n) &&
                  t.right > r &&
                  t.bottom > n &&
                  t.left <
                    (window.innerWidth - r ||
                      document.documentElement.clientWidth - r)
                );
              }
              function V(e) {
                var t,
                  n,
                  y,
                  b,
                  P,
                  D = this,
                  L = {},
                  k = {},
                  x = [],
                  Y = m();
                this._merchantConfigurationOptions = r({}, e);
                if (e.client) {
                  y = (n = e.client.getConfiguration()).gatewayConfiguration
                    .assetsUrl;
                  b = n.isDebug;
                } else {
                  y = i.create(e.authorization);
                  b = Boolean(e.isDebug);
                }
                this._clientPromise = d.create({
                  client: e.client,
                  authorization: e.authorization,
                  debug: b,
                  assetsUrl: y,
                  name: "Hosted Fields",
                });
                P = p(y, Y, b);
                if (!e.fields || 0 === Object.keys(e.fields).length)
                  throw new l({
                    type: R.INSTANTIATION_OPTION_REQUIRED.type,
                    code: R.INSTANTIATION_OPTION_REQUIRED.code,
                    message:
                      "options.fields is required when instantiating Hosted Fields.",
                  });
                I.call(this);
                this._injectedNodes = [];
                this._destructor = new a();
                this._fields = L;
                this._state = { fields: {}, cards: S("") };
                this._bus = new u({ channel: Y, verifyDomain: o });
                this._destructor.registerFunctionForTeardown(function () {
                  D._bus.teardown();
                });
                e.client
                  ? O.sendEvent(
                      this._clientPromise,
                      "custom.hosted-fields.initialized"
                    )
                  : O.sendEvent(
                      this._clientPromise,
                      "custom.hosted-fields.initialized.deferred-client"
                    );
                Object.keys(e.fields).forEach(
                  function (t) {
                    var n, r, i, o, a;
                    if (!E.allowedFields.hasOwnProperty(t))
                      throw new l({
                        type: h.HOSTED_FIELDS_INVALID_FIELD_KEY.type,
                        code: h.HOSTED_FIELDS_INVALID_FIELD_KEY.code,
                        message: '"' + t + '" is not a valid field.',
                      });
                    "string" ==
                      typeof (r = (n = e.fields[t]).container || n.selector) &&
                      (r = document.querySelector(r));
                    if (!r || 1 !== r.nodeType)
                      throw new l({
                        type: h.HOSTED_FIELDS_INVALID_FIELD_SELECTOR.type,
                        code: h.HOSTED_FIELDS_INVALID_FIELD_SELECTOR.code,
                        message: h.HOSTED_FIELDS_INVALID_FIELD_SELECTOR.message,
                        details: {
                          fieldSelector: n.selector,
                          fieldContainer: n.container,
                          fieldKey: t,
                        },
                      });
                    if (r.querySelector('iframe[name^="braintree-"]'))
                      throw new l({
                        type: h.HOSTED_FIELDS_FIELD_DUPLICATE_IFRAME.type,
                        code: h.HOSTED_FIELDS_FIELD_DUPLICATE_IFRAME.code,
                        message: h.HOSTED_FIELDS_FIELD_DUPLICATE_IFRAME.message,
                        details: {
                          fieldSelector: n.selector,
                          fieldContainer: n.container,
                          fieldKey: t,
                        },
                      });
                    i = r;
                    v.isShadowElement(i) &&
                      (i = v.transformToSlot(i, "height: 100%"));
                    if (n.maxlength && "number" != typeof n.maxlength)
                      throw new l({
                        type: h.HOSTED_FIELDS_FIELD_PROPERTY_INVALID.type,
                        code: h.HOSTED_FIELDS_FIELD_PROPERTY_INVALID.code,
                        message: "The value for maxlength must be a number.",
                        details: { fieldKey: t },
                      });
                    if (n.minlength && "number" != typeof n.minlength)
                      throw new l({
                        type: h.HOSTED_FIELDS_FIELD_PROPERTY_INVALID.type,
                        code: h.HOSTED_FIELDS_FIELD_PROPERTY_INVALID.code,
                        message: "The value for minlength must be a number.",
                        details: { fieldKey: t },
                      });
                    o = c({
                      type: t,
                      name: "braintree-hosted-field-" + t,
                      style: E.defaultIFrameStyle,
                      title:
                        n.iframeTitle ||
                        "Secure Credit Card Frame - " +
                          E.allowedFields[t].label,
                    });
                    this._injectedNodes.push.apply(
                      this._injectedNodes,
                      N(Y, o, i, function () {
                        D.focus(t);
                      })
                    );
                    this._setupLabelFocus(t, r);
                    L[t] = { frameElement: o, containerElement: r };
                    a = new w(function (e) {
                      k[t] = e;
                    });
                    x.push(a);
                    this._state.fields[t] = {
                      isEmpty: !0,
                      isValid: !1,
                      isPotentiallyValid: !0,
                      isFocused: !1,
                      container: r,
                    };
                    setTimeout(function () {
                      if (A.isIE() || A.isEdge()) {
                        o.src = "about:blank";
                        setTimeout(function () {
                          o.src = P;
                        }, 0);
                      } else o.src = P;
                    }, 0);
                  }.bind(this)
                );
                this._merchantConfigurationOptions.styles &&
                  Object.keys(
                    this._merchantConfigurationOptions.styles
                  ).forEach(function (e) {
                    var t = D._merchantConfigurationOptions.styles[e];
                    "string" == typeof t &&
                      (D._merchantConfigurationOptions.styles[e] = _(t));
                  });
                this._bus.on(T.REMOVE_FOCUS_INTERCEPTS, function (e) {
                  U(e && e.id);
                });
                this._bus.on(
                  T.TRIGGER_FOCUS_CHANGE,
                  M.createFocusChangeHandler(Y, {
                    onRemoveFocusIntercepts: function (e) {
                      D._bus.emit(T.REMOVE_FOCUS_INTERCEPTS, { id: e });
                    },
                    onTriggerInputFocus: function (e) {
                      D.focus(e);
                    },
                  })
                );
                this._bus.on(T.READY_FOR_CLIENT, function (e) {
                  D._clientPromise.then(function (t) {
                    e(t);
                  });
                });
                this._bus.on(T.CARD_FORM_ENTRY_HAS_BEGUN, function () {
                  O.sendEvent(D._clientPromise, "hosted-fields.input.started");
                });
                this._bus.on(T.BIN_AVAILABLE, function (e) {
                  D._emit("binAvailable", { bin: e });
                });
                t = setTimeout(function () {
                  O.sendEvent(
                    D._clientPromise,
                    "custom.hosted-fields.load.timed-out"
                  );
                  D._emit("timeout");
                }, f);
                w.all(x).then(function (e) {
                  var n = e[0];
                  clearTimeout(t);
                  n(H(D._merchantConfigurationOptions));
                  D._cleanUpFocusIntercepts();
                  D._emit("ready");
                });
                this._bus.on(T.FRAME_READY, function (e, t) {
                  k[e.field](t);
                });
                this._bus.on(T.INPUT_EVENT, F(L).bind(this));
                this._destructor.registerFunctionForTeardown(function () {
                  var e, t, n;
                  for (e = 0; e < D._injectedNodes.length; e++) {
                    (n = (t = D._injectedNodes[e]).parentNode).removeChild(t);
                    s.remove(
                      n,
                      E.externalClasses.FOCUSED,
                      E.externalClasses.INVALID,
                      E.externalClasses.VALID
                    );
                  }
                });
                this._destructor.registerFunctionForTeardown(function () {
                  U();
                });
                this._destructor.registerFunctionForTeardown(function () {
                  var e = g(V.prototype).concat(g(I.prototype));
                  C(D, e);
                });
              }
              I.createChild(V);
              V.prototype._setupLabelFocus = function (e, t) {
                var n,
                  r,
                  i = this,
                  o = P(t);
                if (null != t.id) {
                  n = Array.prototype.slice.call(
                    document.querySelectorAll('label[for="' + t.id + '"]')
                  );
                  o !== document &&
                    (n = n.concat(
                      Array.prototype.slice.call(
                        o.querySelectorAll('label[for="' + t.id + '"]')
                      )
                    ));
                  n = (n = n.concat(y(t, "label"))).filter(function (e, t, n) {
                    return n.indexOf(e) === t;
                  });
                  for (r = 0; r < n.length; r++)
                    n[r].addEventListener("click", a, !1);
                  this._destructor.registerFunctionForTeardown(function () {
                    for (r = 0; r < n.length; r++)
                      n[r].removeEventListener("click", a, !1);
                  });
                }
                function a() {
                  i.focus(e);
                }
              };
              V.prototype._getAnyFieldContainer = function () {
                var e = this;
                return Object.keys(this._fields).reduce(function (t, n) {
                  return t || e._fields[n].containerElement;
                }, null);
              };
              V.prototype._cleanUpFocusIntercepts = function () {
                var e, t;
                if (document.forms.length < 1)
                  this._bus.emit(T.REMOVE_FOCUS_INTERCEPTS);
                else {
                  e = this._getAnyFieldContainer();
                  (t = y(e, "form")[0])
                    ? M.removeExtraFocusElements(
                        t,
                        function (e) {
                          this._bus.emit(T.REMOVE_FOCUS_INTERCEPTS, { id: e });
                        }.bind(this)
                      )
                    : this._bus.emit(T.REMOVE_FOCUS_INTERCEPTS);
                }
              };
              V.prototype._attachInvalidFieldContainersToError = function (e) {
                if (
                  e.details &&
                  e.details.invalidFieldKeys &&
                  e.details.invalidFieldKeys.length > 0
                ) {
                  e.details.invalidFields = {};
                  e.details.invalidFieldKeys.forEach(
                    function (t) {
                      e.details.invalidFields[t] =
                        this._fields[t].containerElement;
                    }.bind(this)
                  );
                }
              };
              V.prototype.getChallenges = function () {
                return this._clientPromise.then(function (e) {
                  return e.getConfiguration().gatewayConfiguration.challenges;
                });
              };
              V.prototype.getSupportedCardTypes = function () {
                return this._clientPromise.then(function (e) {
                  return e
                    .getConfiguration()
                    .gatewayConfiguration.creditCards.supportedCardTypes.map(
                      function (e) {
                        return "MasterCard" === e ? "Mastercard" : e;
                      }
                    );
                });
              };
              V.prototype.teardown = function () {
                var e = this;
                return new w(function (t, n) {
                  e._destructor.teardown(function (r) {
                    O.sendEvent(
                      e._clientPromise,
                      "custom.hosted-fields.teardown-completed"
                    );
                    r ? n(r) : t();
                  });
                });
              };
              V.prototype.tokenize = function (e) {
                var t = this;
                e || (e = {});
                return new w(function (n, r) {
                  t._bus.emit(T.TOKENIZATION_REQUEST, e, function (e) {
                    var i = e[0],
                      o = e[1];
                    if (i) {
                      t._attachInvalidFieldContainersToError(i);
                      r(new l(i));
                    } else n(o);
                  });
                });
              };
              V.prototype.addClass = function (e, t) {
                var n;
                b.hasOwnProperty(e)
                  ? this._fields.hasOwnProperty(e)
                    ? this._bus.emit(T.ADD_CLASS, { field: e, classname: t })
                    : (n = new l({
                        type: h.HOSTED_FIELDS_FIELD_NOT_PRESENT.type,
                        code: h.HOSTED_FIELDS_FIELD_NOT_PRESENT.code,
                        message:
                          'Cannot add class to "' +
                          e +
                          '" field because it is not part of the current Hosted Fields options.',
                      }))
                  : (n = new l({
                      type: h.HOSTED_FIELDS_FIELD_INVALID.type,
                      code: h.HOSTED_FIELDS_FIELD_INVALID.code,
                      message:
                        '"' +
                        e +
                        '" is not a valid field. You must use a valid field option when adding a class.',
                    }));
                return n ? w.reject(n) : w.resolve();
              };
              V.prototype.removeClass = function (e, t) {
                var n;
                b.hasOwnProperty(e)
                  ? this._fields.hasOwnProperty(e)
                    ? this._bus.emit(T.REMOVE_CLASS, { field: e, classname: t })
                    : (n = new l({
                        type: h.HOSTED_FIELDS_FIELD_NOT_PRESENT.type,
                        code: h.HOSTED_FIELDS_FIELD_NOT_PRESENT.code,
                        message:
                          'Cannot remove class from "' +
                          e +
                          '" field because it is not part of the current Hosted Fields options.',
                      }))
                  : (n = new l({
                      type: h.HOSTED_FIELDS_FIELD_INVALID.type,
                      code: h.HOSTED_FIELDS_FIELD_INVALID.code,
                      message:
                        '"' +
                        e +
                        '" is not a valid field. You must use a valid field option when removing a class.',
                    }));
                return n ? w.reject(n) : w.resolve();
              };
              V.prototype.setAttribute = function (e) {
                var t, n;
                b.hasOwnProperty(e.field)
                  ? this._fields.hasOwnProperty(e.field)
                    ? (t = D(e.attribute, e.value))
                      ? (n = t)
                      : this._bus.emit(T.SET_ATTRIBUTE, {
                          field: e.field,
                          attribute: e.attribute,
                          value: e.value,
                        })
                    : (n = new l({
                        type: h.HOSTED_FIELDS_FIELD_NOT_PRESENT.type,
                        code: h.HOSTED_FIELDS_FIELD_NOT_PRESENT.code,
                        message:
                          'Cannot set attribute for "' +
                          e.field +
                          '" field because it is not part of the current Hosted Fields options.',
                      }))
                  : (n = new l({
                      type: h.HOSTED_FIELDS_FIELD_INVALID.type,
                      code: h.HOSTED_FIELDS_FIELD_INVALID.code,
                      message:
                        '"' +
                        e.field +
                        '" is not a valid field. You must use a valid field option when setting an attribute.',
                    }));
                return n ? w.reject(n) : w.resolve();
              };
              V.prototype.setMonthOptions = function (e) {
                var t,
                  n = this,
                  r = this._merchantConfigurationOptions.fields;
                r.expirationMonth
                  ? r.expirationMonth.select ||
                    (t = "Expiration month field must be a select element.")
                  : (t =
                      "Expiration month field must exist to use setMonthOptions.");
                return t
                  ? w.reject(
                      new l({
                        type: h.HOSTED_FIELDS_FIELD_PROPERTY_INVALID.type,
                        code: h.HOSTED_FIELDS_FIELD_PROPERTY_INVALID.code,
                        message: t,
                      })
                    )
                  : new w(function (t) {
                      n._bus.emit(T.SET_MONTH_OPTIONS, e, t);
                    });
              };
              V.prototype.setMessage = function (e) {
                this._bus.emit(T.SET_MESSAGE, {
                  field: e.field,
                  message: e.message,
                });
              };
              V.prototype.removeAttribute = function (e) {
                var t, n;
                b.hasOwnProperty(e.field)
                  ? this._fields.hasOwnProperty(e.field)
                    ? (t = D(e.attribute))
                      ? (n = t)
                      : this._bus.emit(T.REMOVE_ATTRIBUTE, {
                          field: e.field,
                          attribute: e.attribute,
                        })
                    : (n = new l({
                        type: h.HOSTED_FIELDS_FIELD_NOT_PRESENT.type,
                        code: h.HOSTED_FIELDS_FIELD_NOT_PRESENT.code,
                        message:
                          'Cannot remove attribute for "' +
                          e.field +
                          '" field because it is not part of the current Hosted Fields options.',
                      }))
                  : (n = new l({
                      type: h.HOSTED_FIELDS_FIELD_INVALID.type,
                      code: h.HOSTED_FIELDS_FIELD_INVALID.code,
                      message:
                        '"' +
                        e.field +
                        '" is not a valid field. You must use a valid field option when removing an attribute.',
                    }));
                return n ? w.reject(n) : w.resolve();
              };
              V.prototype.setPlaceholder = function (e, t) {
                return this.setAttribute({
                  field: e,
                  attribute: "placeholder",
                  value: t,
                });
              };
              V.prototype.clear = function (e) {
                var t;
                b.hasOwnProperty(e)
                  ? this._fields.hasOwnProperty(e)
                    ? this._bus.emit(T.CLEAR_FIELD, { field: e })
                    : (t = new l({
                        type: h.HOSTED_FIELDS_FIELD_NOT_PRESENT.type,
                        code: h.HOSTED_FIELDS_FIELD_NOT_PRESENT.code,
                        message:
                          'Cannot clear "' +
                          e +
                          '" field because it is not part of the current Hosted Fields options.',
                      }))
                  : (t = new l({
                      type: h.HOSTED_FIELDS_FIELD_INVALID.type,
                      code: h.HOSTED_FIELDS_FIELD_INVALID.code,
                      message:
                        '"' +
                        e +
                        '" is not a valid field. You must use a valid field option when clearing a field.',
                    }));
                return t ? w.reject(t) : w.resolve();
              };
              V.prototype.focus = function (e) {
                var t,
                  n = this._fields[e];
                if (b.hasOwnProperty(e))
                  if (this._fields.hasOwnProperty(e)) {
                    n.frameElement.focus();
                    this._bus.emit(T.TRIGGER_INPUT_FOCUS, { field: e });
                    A.isIos() &&
                      setTimeout(function () {
                        x(n.containerElement) ||
                          n.containerElement.scrollIntoView();
                      }, k);
                  } else
                    t = new l({
                      type: h.HOSTED_FIELDS_FIELD_NOT_PRESENT.type,
                      code: h.HOSTED_FIELDS_FIELD_NOT_PRESENT.code,
                      message:
                        'Cannot focus "' +
                        e +
                        '" field because it is not part of the current Hosted Fields options.',
                    });
                else
                  t = new l({
                    type: h.HOSTED_FIELDS_FIELD_INVALID.type,
                    code: h.HOSTED_FIELDS_FIELD_INVALID.code,
                    message:
                      '"' +
                      e +
                      '" is not a valid field. You must use a valid field option when focusing a field.',
                  });
                return t ? w.reject(t) : w.resolve();
              };
              V.prototype.getState = function () {
                return this._state;
              };
              function H(e) {
                var t = r({}, e);
                t.fields = r({}, t.fields);
                Object.keys(t.fields).forEach(function (e) {
                  t.fields[e] = r({}, t.fields[e]);
                  delete t.fields[e].container;
                });
                return t;
              }
              t.exports = L.wrapPrototype(V);
            },
            {
              "../../lib/analytics": 126,
              "../../lib/assign": 128,
              "../../lib/braintree-error": 131,
              "../../lib/constants": 133,
              "../../lib/convert-methods-to-error": 134,
              "../../lib/create-assets-url": 136,
              "../../lib/create-deferred-client": 138,
              "../../lib/destructor": 140,
              "../../lib/errors": 142,
              "../../lib/find-root-node": 143,
              "../../lib/is-verified-domain": 160,
              "../../lib/methods": 162,
              "../../lib/promise": 164,
              "../../lib/shadow": 166,
              "../shared/browser-detection": 118,
              "../shared/constants": 119,
              "../shared/errors": 120,
              "../shared/find-parent-tags": 121,
              "../shared/focus-intercept": 122,
              "../shared/get-card-types": 123,
              "./attribute-validation-error": 111,
              "./compose-url": 112,
              "./focus-change": 113,
              "./get-styles-from-class": 114,
              "./inject-frame": 116,
              "@braintree/class-list": 38,
              "@braintree/event-emitter": 39,
              "@braintree/iframer": 41,
              "@braintree/uuid": 45,
              "@braintree/wrap-promise": 49,
              framebus: 58,
            },
          ],
          116: [
            function (e, t, n) {
              "use strict";
              var r = e("../shared/focus-intercept"),
                i = e("../shared/constants").navigationDirections;
              t.exports = function (e, t, n, o) {
                var a = t.getAttribute("type"),
                  s = document.createElement("div"),
                  c = document.createDocumentFragment(),
                  u = r.generate(e, a, i.BACK, o),
                  d = r.generate(e, a, i.FORWARD, o);
                s.style.clear = "both";
                c.appendChild(u);
                c.appendChild(t);
                c.appendChild(d);
                c.appendChild(s);
                n.appendChild(c);
                return [t, s];
              };
            },
            { "../shared/constants": 119, "../shared/focus-intercept": 122 },
          ],
          117: [
            function (e, t, n) {
              "use strict";
              var r = e("./external/hosted-fields"),
                i = e("../lib/basic-component-verification"),
                o = e("./shared/errors"),
                a = e("restricted-input/supports-input-formatting"),
                s = e("@braintree/wrap-promise"),
                c = e("../lib/braintree-error"),
                u = e("../lib/promise"),
                d = "3.85.5";
              function l(e) {
                return i
                  .verify({
                    name: "Hosted Fields",
                    authorization: e.authorization,
                    client: e.client,
                  })
                  .then(function () {
                    var t = new r(e);
                    return new u(function (e, n) {
                      t.on("ready", function () {
                        e(t);
                      });
                      t.on("timeout", function () {
                        n(new c(o.HOSTED_FIELDS_TIMEOUT));
                      });
                    });
                  });
              }
              t.exports = {
                supportsInputFormatting: a,
                create: s(l),
                VERSION: d,
              };
            },
            {
              "../lib/basic-component-verification": 129,
              "../lib/braintree-error": 131,
              "../lib/promise": 164,
              "./external/hosted-fields": 115,
              "./shared/errors": 120,
              "@braintree/wrap-promise": 49,
              "restricted-input/supports-input-formatting": 74,
            },
          ],
          118: [
            function (e, t, n) {
              "use strict";
              var r = e("@braintree/browser-detection/is-android"),
                i = e("@braintree/browser-detection/is-chrome-os"),
                o = e("@braintree/browser-detection/is-ios"),
                a = e("@braintree/browser-detection/is-chrome");
              function s() {
                return r() || i() || o();
              }
              function c() {
                return a() && o();
              }
              t.exports = {
                isIE: e("@braintree/browser-detection/is-ie"),
                isEdge: e("@braintree/browser-detection/is-edge"),
                isIe9: e("@braintree/browser-detection/is-ie9"),
                isIe10: e("@braintree/browser-detection/is-ie10"),
                isAndroid: r,
                isChromeOS: i,
                isChromeIos: c,
                isFirefox: e("@braintree/browser-detection/is-firefox"),
                isIos: o,
                isIosWebview: e("@braintree/browser-detection/is-ios-webview"),
                hasSoftwareKeyboard: s,
              };
            },
            {
              "@braintree/browser-detection/is-android": 24,
              "@braintree/browser-detection/is-chrome": 26,
              "@braintree/browser-detection/is-chrome-os": 25,
              "@braintree/browser-detection/is-edge": 27,
              "@braintree/browser-detection/is-firefox": 28,
              "@braintree/browser-detection/is-ie": 29,
              "@braintree/browser-detection/is-ie10": 30,
              "@braintree/browser-detection/is-ie9": 31,
              "@braintree/browser-detection/is-ios": 35,
              "@braintree/browser-detection/is-ios-webview": 33,
            },
          ],
          119: [
            function (e, t, n) {
              "use strict";
              var r = e("../../lib/enumerate"),
                i = e("./errors"),
                o = {
                  VERSION: "3.85.5",
                  maxExpirationYearAge: 19,
                  externalEvents: {
                    FOCUS: "focus",
                    BLUR: "blur",
                    EMPTY: "empty",
                    NOT_EMPTY: "notEmpty",
                    VALIDITY_CHANGE: "validityChange",
                    CARD_TYPE_CHANGE: "cardTypeChange",
                  },
                  defaultMaxLengths: {
                    number: 19,
                    postalCode: 8,
                    expirationDate: 7,
                    expirationMonth: 2,
                    expirationYear: 4,
                    cvv: 3,
                  },
                  externalClasses: {
                    FOCUSED: "braintree-hosted-fields-focused",
                    INVALID: "braintree-hosted-fields-invalid",
                    VALID: "braintree-hosted-fields-valid",
                  },
                  navigationDirections: { BACK: "before", FORWARD: "after" },
                  defaultIFrameStyle: {
                    border: "none",
                    width: "100%",
                    height: "100%",
                    float: "left",
                  },
                  tokenizationErrorCodes: {
                    81724: i.HOSTED_FIELDS_TOKENIZATION_FAIL_ON_DUPLICATE,
                    81736: i.HOSTED_FIELDS_TOKENIZATION_CVV_VERIFICATION_FAILED,
                  },
                  allowedStyles: [
                    "-moz-appearance",
                    "-moz-box-shadow",
                    "-moz-osx-font-smoothing",
                    "-moz-tap-highlight-color",
                    "-moz-transition",
                    "-webkit-appearance",
                    "-webkit-box-shadow",
                    "-webkit-font-smoothing",
                    "-webkit-tap-highlight-color",
                    "-webkit-transition",
                    "appearance",
                    "box-shadow",
                    "color",
                    "direction",
                    "font",
                    "font-family",
                    "font-size",
                    "font-size-adjust",
                    "font-stretch",
                    "font-style",
                    "font-variant",
                    "font-variant-alternates",
                    "font-variant-caps",
                    "font-variant-east-asian",
                    "font-variant-ligatures",
                    "font-variant-numeric",
                    "font-weight",
                    "letter-spacing",
                    "line-height",
                    "margin",
                    "margin-top",
                    "margin-right",
                    "margin-bottom",
                    "margin-left",
                    "opacity",
                    "outline",
                    "padding",
                    "padding-top",
                    "padding-right",
                    "padding-bottom",
                    "padding-left",
                    "text-align",
                    "text-shadow",
                    "transition",
                  ],
                  allowedFields: {
                    cardholderName: {
                      name: "cardholder-name",
                      label: "Cardholder Name",
                    },
                    number: {
                      name: "credit-card-number",
                      label: "Credit Card Number",
                    },
                    cvv: { name: "cvv", label: "CVV" },
                    expirationDate: {
                      name: "expiration",
                      label: "Expiration Date",
                    },
                    expirationMonth: {
                      name: "expiration-month",
                      label: "Expiration Month",
                    },
                    expirationYear: {
                      name: "expiration-year",
                      label: "Expiration Year",
                    },
                    postalCode: { name: "postal-code", label: "Postal Code" },
                  },
                  allowedAttributes: {
                    "aria-invalid": "boolean",
                    "aria-required": "boolean",
                    disabled: "boolean",
                    placeholder: "string",
                  },
                  autocompleteMappings: {
                    "cardholder-name": "cc-name",
                    "credit-card-number": "cc-number",
                    expiration: "cc-exp",
                    "expiration-month": "cc-exp-month",
                    "expiration-year": "cc-exp-year",
                    cvv: "cc-csc",
                    "postal-code": "billing postal-code",
                  },
                };
              o.events = r(
                [
                  "ADD_CLASS",
                  "AUTOFILL_DATA_AVAILABLE",
                  "BIN_AVAILABLE",
                  "CARD_FORM_ENTRY_HAS_BEGUN",
                  "CLEAR_FIELD",
                  "CONFIGURATION",
                  "FRAME_READY",
                  "INPUT_EVENT",
                  "READY_FOR_CLIENT",
                  "REMOVE_ATTRIBUTE",
                  "REMOVE_CLASS",
                  "REMOVE_FOCUS_INTERCEPTS",
                  "SET_ATTRIBUTE",
                  "SET_MESSAGE",
                  "SET_MONTH_OPTIONS",
                  "TOKENIZATION_REQUEST",
                  "TRIGGER_FOCUS_CHANGE",
                  "TRIGGER_INPUT_FOCUS",
                  "VALIDATE_STRICT",
                ],
                "hosted-fields:"
              );
              t.exports = o;
            },
            { "../../lib/enumerate": 141, "./errors": 120 },
          ],
          120: [
            function (e, t, n) {
              "use strict";
              var r = e("../../lib/braintree-error");
              t.exports = {
                HOSTED_FIELDS_TIMEOUT: {
                  type: r.types.UNKNOWN,
                  code: "HOSTED_FIELDS_TIMEOUT",
                  message: "Hosted Fields timed out when attempting to set up.",
                },
                HOSTED_FIELDS_INVALID_FIELD_KEY: {
                  type: r.types.MERCHANT,
                  code: "HOSTED_FIELDS_INVALID_FIELD_KEY",
                },
                HOSTED_FIELDS_INVALID_FIELD_SELECTOR: {
                  type: r.types.MERCHANT,
                  code: "HOSTED_FIELDS_INVALID_FIELD_SELECTOR",
                  message: "Selector does not reference a valid DOM node.",
                },
                HOSTED_FIELDS_FIELD_DUPLICATE_IFRAME: {
                  type: r.types.MERCHANT,
                  code: "HOSTED_FIELDS_FIELD_DUPLICATE_IFRAME",
                  message: "Element already contains a Braintree iframe.",
                },
                HOSTED_FIELDS_FIELD_INVALID: {
                  type: r.types.MERCHANT,
                  code: "HOSTED_FIELDS_FIELD_INVALID",
                },
                HOSTED_FIELDS_FIELD_NOT_PRESENT: {
                  type: r.types.MERCHANT,
                  code: "HOSTED_FIELDS_FIELD_NOT_PRESENT",
                },
                HOSTED_FIELDS_TOKENIZATION_NETWORK_ERROR: {
                  type: r.types.NETWORK,
                  code: "HOSTED_FIELDS_TOKENIZATION_NETWORK_ERROR",
                  message: "A tokenization network error occurred.",
                },
                HOSTED_FIELDS_TOKENIZATION_FAIL_ON_DUPLICATE: {
                  type: r.types.CUSTOMER,
                  code: "HOSTED_FIELDS_TOKENIZATION_FAIL_ON_DUPLICATE",
                  message:
                    "This credit card already exists in the merchant's vault.",
                },
                HOSTED_FIELDS_TOKENIZATION_CVV_VERIFICATION_FAILED: {
                  type: r.types.CUSTOMER,
                  code: "HOSTED_FIELDS_TOKENIZATION_CVV_VERIFICATION_FAILED",
                  message: "CVV verification failed during tokenization.",
                },
                HOSTED_FIELDS_FAILED_TOKENIZATION: {
                  type: r.types.CUSTOMER,
                  code: "HOSTED_FIELDS_FAILED_TOKENIZATION",
                  message: "The supplied card data failed tokenization.",
                },
                HOSTED_FIELDS_FIELDS_EMPTY: {
                  type: r.types.CUSTOMER,
                  code: "HOSTED_FIELDS_FIELDS_EMPTY",
                  message:
                    "All fields are empty. Cannot tokenize empty card fields.",
                },
                HOSTED_FIELDS_FIELDS_INVALID: {
                  type: r.types.CUSTOMER,
                  code: "HOSTED_FIELDS_FIELDS_INVALID",
                  message:
                    "Some payment input fields are invalid. Cannot tokenize invalid card fields.",
                },
                HOSTED_FIELDS_ATTRIBUTE_NOT_SUPPORTED: {
                  type: r.types.MERCHANT,
                  code: "HOSTED_FIELDS_ATTRIBUTE_NOT_SUPPORTED",
                },
                HOSTED_FIELDS_ATTRIBUTE_VALUE_NOT_ALLOWED: {
                  type: r.types.MERCHANT,
                  code: "HOSTED_FIELDS_ATTRIBUTE_VALUE_NOT_ALLOWED",
                },
                HOSTED_FIELDS_FIELD_PROPERTY_INVALID: {
                  type: r.types.MERCHANT,
                  code: "HOSTED_FIELDS_FIELD_PROPERTY_INVALID",
                },
              };
            },
            { "../../lib/braintree-error": 131 },
          ],
          121: [
            function (e, t, n) {
              "use strict";
              function r(e, t) {
                for (var n = e.parentNode, r = []; null != n; ) {
                  null != n.tagName &&
                    n.tagName.toLowerCase() === t &&
                    r.push(n);
                  n = n.parentNode;
                }
                return r;
              }
              t.exports = r;
            },
            {},
          ],
          122: [
            function (e, t, n) {
              "use strict";
              var r = e("./browser-detection"),
                i = e("@braintree/class-list"),
                o = e("./constants"),
                a = Object.keys(o.allowedFields),
                s = o.navigationDirections,
                c = {
                  generate: function (e, t, n, o) {
                    var a = document.createElement("input"),
                      s = {
                        border: "none !important",
                        display: "block !important",
                        height: "1px !important",
                        left: "-1px !important",
                        opacity: "0 !important",
                        position: "absolute !important",
                        top: "-1px !important",
                        width: "1px !important",
                      };
                    if (!(r.hasSoftwareKeyboard() || r.isFirefox() || r.isIE()))
                      return document.createDocumentFragment();
                    a.setAttribute("aria-hidden", "true");
                    a.setAttribute("autocomplete", "off");
                    a.setAttribute("data-braintree-direction", n);
                    a.setAttribute("data-braintree-type", t);
                    a.setAttribute("id", "bt-" + t + "-" + n + "-" + e);
                    a.setAttribute(
                      "style",
                      JSON.stringify(s).replace(/[{}"]/g, "").replace(/,/g, ";")
                    );
                    i.add(a, "focus-intercept");
                    a.addEventListener("focus", function (e) {
                      o(e);
                      r.hasSoftwareKeyboard() || a.blur();
                    });
                    return a;
                  },
                  destroy: function (e) {
                    var t;
                    if (e) t = [document.getElementById(e)];
                    else {
                      t = document.querySelectorAll(
                        "[data-braintree-direction]"
                      );
                      t = [].slice.call(t);
                    }
                    t.forEach(function (e) {
                      e &&
                        1 === e.nodeType &&
                        c.matchFocusElement(e.getAttribute("id")) &&
                        e.parentNode.removeChild(e);
                    });
                  },
                  matchFocusElement: function (e) {
                    var t, n, r, i;
                    if (!e) return !1;
                    if ((t = e.split("-")).length < 4) return !1;
                    n = "bt" === t[0];
                    r = a.indexOf(t[1]) > -1;
                    i = t[2] === s.BACK || t[2] === s.FORWARD;
                    return Boolean(n && r && i);
                  },
                };
              t.exports = c;
            },
            {
              "./browser-detection": 118,
              "./constants": 119,
              "@braintree/class-list": 38,
            },
          ],
          123: [
            function (e, t, n) {
              "use strict";
              var r = e("credit-card-type");
              t.exports = function (e) {
                var t = r(e);
                t.forEach(function (e) {
                  "mastercard" === e.type && (e.type = "master-card");
                });
                return t;
              };
            },
            { "credit-card-type": 50 },
          ],
          124: [
            function (e, t, n) {
              "use strict";
              var r = e("./american-express"),
                i = e("./apple-pay"),
                o = e("./client"),
                a = e("./data-collector"),
                s = e("./hosted-fields"),
                c = e("./local-payment"),
                u = e("./masterpass"),
                d = e("./payment-request"),
                l = e("./paypal"),
                p = e("./paypal-checkout"),
                _ = e("./google-payment"),
                E = e("./three-d-secure"),
                h = e("./unionpay"),
                f = e("./us-bank-account"),
                m = e("./vault-manager"),
                y = e("./venmo"),
                A = e("./visa-checkout"),
                T = e("./preferred-payment-methods"),
                I = "3.85.5";
              t.exports = {
                americanExpress: r,
                applePay: i,
                client: o,
                dataCollector: a,
                hostedFields: s,
                localPayment: c,
                masterpass: u,
                googlePayment: _,
                paymentRequest: d,
                paypal: l,
                paypalCheckout: p,
                threeDSecure: E,
                unionpay: h,
                usBankAccount: f,
                vaultManager: m,
                venmo: y,
                visaCheckout: A,
                preferredPaymentMethods: T,
                VERSION: I,
              };
            },
            {
              "./american-express": 77,
              "./apple-pay": 80,
              "./client": 86,
              "./data-collector": 105,
              "./google-payment": 110,
              "./hosted-fields": 117,
              "./local-payment": 171,
              "./masterpass": 174,
              "./payment-request": 179,
              "./paypal": 186,
              "./paypal-checkout": 183,
              "./preferred-payment-methods": 189,
              "./three-d-secure": 199,
              "./unionpay": 203,
              "./us-bank-account": 209,
              "./vault-manager": 212,
              "./venmo": 217,
              "./visa-checkout": 225,
            },
          ],
          125: [
            function (e, t, n) {
              "use strict";
              var r = e("./create-authorization-data"),
                i = e("./json-clone"),
                o = e("./constants");
              function a(e, t) {
                var n,
                  a = t ? i(t) : {},
                  s = r(e.authorization).attrs,
                  c = i(e.analyticsMetadata);
                a.braintreeLibraryVersion = o.BRAINTREE_LIBRARY_VERSION;
                for (n in a._meta)
                  a._meta.hasOwnProperty(n) && (c[n] = a._meta[n]);
                a._meta = c;
                s.tokenizationKey
                  ? (a.tokenizationKey = s.tokenizationKey)
                  : (a.authorizationFingerprint = s.authorizationFingerprint);
                return a;
              }
              t.exports = a;
            },
            {
              "./constants": 133,
              "./create-authorization-data": 137,
              "./json-clone": 161,
            },
          ],
          126: [
            function (e, t, n) {
              "use strict";
              var r = e("./promise"),
                i = e("./constants"),
                o = e("./add-metadata");
              function a(e, t, n) {
                var a = Date.now();
                return r
                  .resolve(e)
                  .then(function (e) {
                    var r = Date.now(),
                      s = e.getConfiguration(),
                      c = e._request,
                      u = s.gatewayConfiguration.analytics.url,
                      d = {
                        analytics: [
                          {
                            kind: i.ANALYTICS_PREFIX + t,
                            isAsync:
                              Math.floor(r / 1e3) !== Math.floor(a / 1e3),
                            timestamp: a,
                          },
                        ],
                      };
                    c(
                      {
                        url: u,
                        method: "post",
                        data: o(s, d),
                        timeout: i.ANALYTICS_REQUEST_TIMEOUT_MS,
                      },
                      n
                    );
                  })
                  .catch(function (e) {
                    n && n(e);
                  });
              }
              t.exports = { sendEvent: a };
            },
            { "./add-metadata": 125, "./constants": 133, "./promise": 164 },
          ],
          127: [
            function (e, t, n) {
              "use strict";
              var r = e("@braintree/asset-loader/load-script");
              t.exports = { loadScript: r };
            },
            { "@braintree/asset-loader/load-script": 3 },
          ],
          128: [
            function (e, t, n) {
              "use strict";
              var r = "function" == typeof Object.assign ? Object.assign : i;
              function i(e) {
                var t, n, r;
                for (t = 1; t < arguments.length; t++) {
                  n = arguments[t];
                  for (r in n) n.hasOwnProperty(r) && (e[r] = n[r]);
                }
                return e;
              }
              t.exports = { assign: r, _assign: i };
            },
            {},
          ],
          129: [
            function (e, t, n) {
              "use strict";
              var r = e("./braintree-error"),
                i = e("./promise"),
                o = e("./errors"),
                a = "3.85.5";
              function s(e) {
                var t, n, s;
                if (!e)
                  return i.reject(
                    new r({
                      type: o.INVALID_USE_OF_INTERNAL_FUNCTION.type,
                      code: o.INVALID_USE_OF_INTERNAL_FUNCTION.code,
                      message:
                        "Options must be passed to basicComponentVerification function.",
                    })
                  );
                s = e.name;
                t = e.client;
                n = e.authorization;
                return t || n
                  ? n || t.getVersion() === a
                    ? i.resolve()
                    : i.reject(
                        new r({
                          type: o.INCOMPATIBLE_VERSIONS.type,
                          code: o.INCOMPATIBLE_VERSIONS.code,
                          message:
                            "Client (version " +
                            t.getVersion() +
                            ") and " +
                            s +
                            " (version " +
                            a +
                            ") components must be from the same SDK version.",
                        })
                      )
                  : i.reject(
                      new r({
                        type: o.INSTANTIATION_OPTION_REQUIRED.type,
                        code: o.INSTANTIATION_OPTION_REQUIRED.code,
                        message:
                          "options.client is required when instantiating " +
                          s +
                          ".",
                      })
                    );
              }
              t.exports = { verify: s };
            },
            { "./braintree-error": 131, "./errors": 142, "./promise": 164 },
          ],
          130: [
            function (e, t, n) {
              "use strict";
              var r = e("./once");
              function i(e, t) {
                if (0 === e.length) {
                  e();
                  t(null);
                } else e(t);
              }
              t.exports = function (e, t) {
                var n,
                  o = e.length,
                  a = o,
                  s = r(t);
                if (0 !== o) for (n = 0; n < o; n++) i(e[n], c);
                else s(null);
                function c(e) {
                  e ? s(e) : 0 == (a -= 1) && s(null);
                }
              };
            },
            { "./once": 163 },
          ],
          131: [
            function (e, t, n) {
              "use strict";
              var r = e("./enumerate");
              function i(e) {
                if (!i.types.hasOwnProperty(e.type))
                  throw new Error(e.type + " is not a valid type.");
                if (!e.code) throw new Error("Error code required.");
                if (!e.message) throw new Error("Error message required.");
                this.name = "BraintreeError";
                this.code = e.code;
                this.message = e.message;
                this.type = e.type;
                this.details = e.details;
              }
              i.prototype = Object.create(Error.prototype);
              i.prototype.constructor = i;
              i.types = r([
                "CUSTOMER",
                "MERCHANT",
                "NETWORK",
                "INTERNAL",
                "UNKNOWN",
              ]);
              i.findRootError = function (e) {
                return e instanceof i && e.details && e.details.originalError
                  ? i.findRootError(e.details.originalError)
                  : e;
              };
              t.exports = i;
            },
            { "./enumerate": 141 },
          ],
          132: [
            function (e, t, n) {
              "use strict";
              function r(e) {
                return e
                  .replace(/([a-z\d])([A-Z])/g, "$1_$2")
                  .replace(/([A-Z]+)([A-Z][a-z\d]+)/g, "$1_$2")
                  .toLowerCase();
              }
              t.exports = function (e) {
                return Object.keys(e).reduce(function (t, n) {
                  t[r(n)] = e[n];
                  return t;
                }, {});
              };
            },
            {},
          ],
          133: [
            function (e, t, n) {
              "use strict";
              var r = "3.85.5",
                i = "web",
                o = {
                  production: "https://api.braintreegateway.com:443",
                  sandbox: "https://api.sandbox.braintreegateway.com:443",
                },
                a = {
                  production: "https://assets.braintreegateway.com",
                  sandbox: "https://assets.braintreegateway.com",
                },
                s = {
                  production: "https://payments.braintree-api.com/graphql",
                  sandbox: "https://payments.sandbox.braintree-api.com/graphql",
                };
              t.exports = {
                ANALYTICS_PREFIX: i + ".",
                ANALYTICS_REQUEST_TIMEOUT_MS: 2e3,
                ASSETS_URLS: a,
                CLIENT_API_URLS: o,
                FRAUDNET_SOURCE: "BRAINTREE_SIGNIN",
                FRAUDNET_FNCLS: "fnparams-dede7cc5-15fd-4c75-a9f4-36c430ee3a99",
                FRAUDNET_URL: "https://c.paypal.com/da/r/fb.js",
                BUS_CONFIGURATION_REQUEST_EVENT: "BUS_CONFIGURATION_REQUEST",
                GRAPHQL_URLS: s,
                INTEGRATION_TIMEOUT_MS: 6e4,
                VERSION: r,
                INTEGRATION: "custom",
                SOURCE: "client",
                PLATFORM: i,
                BRAINTREE_LIBRARY_VERSION: "braintree/" + i + "/" + r,
              };
            },
            {},
          ],
          134: [
            function (e, t, n) {
              "use strict";
              var r = e("./braintree-error"),
                i = e("./errors");
              t.exports = function (e, t) {
                t.forEach(function (t) {
                  e[t] = function () {
                    throw new r({
                      type: i.METHOD_CALLED_AFTER_TEARDOWN.type,
                      code: i.METHOD_CALLED_AFTER_TEARDOWN.code,
                      message: t + " cannot be called after teardown.",
                    });
                  };
                });
              };
            },
            { "./braintree-error": 131, "./errors": 142 },
          ],
          135: [
            function (e, t, n) {
              "use strict";
              var r = e("./braintree-error");
              function i(e, t) {
                return e instanceof r
                  ? e
                  : new r({
                      type: t.type,
                      code: t.code,
                      message: t.message,
                      details: { originalError: e },
                    });
              }
              t.exports = i;
            },
            { "./braintree-error": 131 },
          ],
          136: [
            function (e, t, n) {
              "use strict";
              var r = e("./constants").ASSETS_URLS;
              function i(e) {
                return r.production;
              }
              t.exports = { create: i };
            },
            { "./constants": 133 },
          ],
          137: [
            function (e, t, n) {
              "use strict";
              var r = e("../lib/vendor/polyfill").atob,
                i = e("../lib/constants").CLIENT_API_URLS;
              function o(e) {
                return /^[a-zA-Z0-9]+_[a-zA-Z0-9]+_[a-zA-Z0-9_]+$/.test(e);
              }
              function a(e) {
                var t = e.split("_"),
                  n = t[0];
                return { merchantId: t.slice(2).join("_"), environment: n };
              }
              function s(e) {
                var t,
                  n,
                  s = { attrs: {}, configUrl: "" };
                if (o(e)) {
                  n = a(e);
                  s.environment = n.environment;
                  s.attrs.tokenizationKey = e;
                  s.configUrl =
                    i[n.environment] +
                    "/merchants/" +
                    n.merchantId +
                    "/client_api/v1/configuration";
                } else {
                  t = JSON.parse(r(e));
                  s.environment = t.environment;
                  s.attrs.authorizationFingerprint = t.authorizationFingerprint;
                  s.configUrl = t.configUrl;
                  s.graphQL = t.graphQL;
                }
                return s;
              }
              t.exports = s;
            },
            { "../lib/constants": 133, "../lib/vendor/polyfill": 168 },
          ],
          138: [
            function (e, t, n) {
              "use strict";
              var r = e("./braintree-error"),
                i = e("./promise"),
                o = e("./assets"),
                a = e("./errors"),
                s = "3.85.5";
              function c(e) {
                var t = i.resolve();
                if (e.client) return i.resolve(e.client);
                (window.braintree && window.braintree.client) ||
                  (t = o
                    .loadScript({
                      src: e.assetsUrl + "/web/" + s + "/js/client.min.js",
                    })
                    .catch(function (e) {
                      return i.reject(
                        new r({
                          type: a.CLIENT_SCRIPT_FAILED_TO_LOAD.type,
                          code: a.CLIENT_SCRIPT_FAILED_TO_LOAD.code,
                          message: a.CLIENT_SCRIPT_FAILED_TO_LOAD.message,
                          details: { originalError: e },
                        })
                      );
                    }));
                return t.then(function () {
                  return window.braintree.client.VERSION !== s
                    ? i.reject(
                        new r({
                          type: a.INCOMPATIBLE_VERSIONS.type,
                          code: a.INCOMPATIBLE_VERSIONS.code,
                          message:
                            "Client (version " +
                            window.braintree.client.VERSION +
                            ") and " +
                            e.name +
                            " (version " +
                            s +
                            ") components must be from the same SDK version.",
                        })
                      )
                    : window.braintree.client.create({
                        authorization: e.authorization,
                        debug: e.debug,
                      });
                });
              }
              t.exports = { create: c };
            },
            {
              "./assets": 127,
              "./braintree-error": 131,
              "./errors": 142,
              "./promise": 164,
            },
          ],
          139: [
            function (e, t, n) {
              "use strict";
              t.exports = function (e) {
                return function () {
                  var t = arguments;
                  setTimeout(function () {
                    e.apply(null, t);
                  }, 1);
                };
              };
            },
            {},
          ],
          140: [
            function (e, t, n) {
              "use strict";
              var r = e("./batch-execute-functions");
              function i() {
                this._teardownRegistry = [];
                this._isTearingDown = !1;
              }
              i.prototype.registerFunctionForTeardown = function (e) {
                "function" == typeof e && this._teardownRegistry.push(e);
              };
              i.prototype.teardown = function (e) {
                if (this._isTearingDown)
                  e(new Error("Destructor is already tearing down"));
                else {
                  this._isTearingDown = !0;
                  r(
                    this._teardownRegistry,
                    function (t) {
                      this._teardownRegistry = [];
                      this._isTearingDown = !1;
                      "function" == typeof e && e(t);
                    }.bind(this)
                  );
                }
              };
              t.exports = i;
            },
            { "./batch-execute-functions": 130 },
          ],
          141: [
            function (e, t, n) {
              "use strict";
              function r(e, t) {
                t = null == t ? "" : t;
                return e.reduce(function (e, n) {
                  e[n] = t + n;
                  return e;
                }, {});
              }
              t.exports = r;
            },
            {},
          ],
          142: [
            function (e, t, n) {
              "use strict";
              var r = e("./braintree-error");
              t.exports = {
                INVALID_USE_OF_INTERNAL_FUNCTION: {
                  type: r.types.INTERNAL,
                  code: "INVALID_USE_OF_INTERNAL_FUNCTION",
                },
                INSTANTIATION_OPTION_REQUIRED: {
                  type: r.types.MERCHANT,
                  code: "INSTANTIATION_OPTION_REQUIRED",
                },
                INCOMPATIBLE_VERSIONS: {
                  type: r.types.MERCHANT,
                  code: "INCOMPATIBLE_VERSIONS",
                },
                CLIENT_SCRIPT_FAILED_TO_LOAD: {
                  type: r.types.NETWORK,
                  code: "CLIENT_SCRIPT_FAILED_TO_LOAD",
                  message: "Braintree client script could not be loaded.",
                },
                METHOD_CALLED_AFTER_TEARDOWN: {
                  type: r.types.MERCHANT,
                  code: "METHOD_CALLED_AFTER_TEARDOWN",
                },
              };
            },
            { "./braintree-error": 131 },
          ],
          143: [
            function (e, t, n) {
              "use strict";
              t.exports = function (e) {
                for (; e.parentNode; ) e = e.parentNode;
                return e;
              };
            },
            {},
          ],
          144: [
            function (e, t, n) {
              "use strict";
              t.exports = function (e, t, n) {
                var r;
                for (r = 0; r < e.length; r++)
                  if (e[r].hasOwnProperty(t) && e[r][t] === n) return e[r];
                return null;
              };
            },
            {},
          ],
          145: [
            function (e, t, n) {
              "use strict";
              var r = e("./strategies/popup"),
                i = e("./strategies/popup-bridge"),
                o = e("./strategies/modal"),
                a = e("framebus"),
                s = e("../shared/events"),
                c = e("../shared/errors"),
                u = e("../shared/constants"),
                d = e("@braintree/uuid"),
                l = e("@braintree/iframer"),
                p = e("../../braintree-error"),
                _ = e("../shared/browser-detection"),
                E = e("../../is-https"),
                h = e("./../../assign").assign,
                f = e("../../constants").BUS_CONFIGURATION_REQUEST_EVENT,
                m = ["name", "dispatchFrameUrl", "openFrameUrl"];
              function y() {}
              function A(e) {
                if (!e) throw new Error("Valid configuration is required");
                m.forEach(function (t) {
                  if (!e.hasOwnProperty(t))
                    throw new Error("A valid frame " + t + " must be provided");
                });
                if (!/^[\w_]+$/.test(e.name))
                  throw new Error("A valid frame name must be provided");
              }
              function T(e) {
                A(e);
                this._serviceId = d().replace(/-/g, "");
                this._options = {
                  name: e.name + "_" + this._serviceId,
                  dispatchFrameUrl: e.dispatchFrameUrl,
                  openFrameUrl: e.openFrameUrl,
                  height: e.height,
                  width: e.width,
                  top: e.top,
                  left: e.left,
                };
                this.state = e.state || {};
                this._bus = new a({
                  channel: this._serviceId,
                });
                this._setBusEvents();
              }
              T.prototype.initialize = function (e) {
                var t = function () {
                  e();
                  this._bus.off(s.DISPATCH_FRAME_READY, t);
                }.bind(this);
                this._bus.on(s.DISPATCH_FRAME_READY, t);
                this._writeDispatchFrame();
              };
              T.prototype._writeDispatchFrame = function () {
                var e = u.DISPATCH_FRAME_NAME + "_" + this._serviceId,
                  t = this._options.dispatchFrameUrl;
                this._dispatchFrame = l({
                  "aria-hidden": !0,
                  name: e,
                  title: e,
                  src: t,
                  class: u.DISPATCH_FRAME_CLASS,
                  height: 0,
                  width: 0,
                  style: { position: "absolute", left: "-9999px" },
                });
                document.body.appendChild(this._dispatchFrame);
              };
              T.prototype._setBusEvents = function () {
                this._bus.on(
                  s.DISPATCH_FRAME_REPORT,
                  function (e, t) {
                    this._onCompleteCallback &&
                      this._onCompleteCallback.call(null, e.err, e.payload);
                    this._frame.close();
                    this._onCompleteCallback = null;
                    t && t();
                  }.bind(this)
                );
                this._bus.on(
                  f,
                  function (e) {
                    e(this.state);
                  }.bind(this)
                );
              };
              T.prototype.open = function (e, t) {
                e = e || {};
                this._frame = this._getFrameForEnvironment(e);
                this._frame.initialize(t);
                if (!(this._frame instanceof i)) {
                  h(this.state, e.state);
                  this._onCompleteCallback = t;
                  this._frame.open();
                  if (this.isFrameClosed()) {
                    this._cleanupFrame();
                    t &&
                      t(
                        _.isIE() && !E.isHTTPS()
                          ? new p(c.FRAME_SERVICE_FRAME_OPEN_FAILED_IE_BUG)
                          : new p(c.FRAME_SERVICE_FRAME_OPEN_FAILED)
                      );
                  } else this._pollForPopupClose();
                }
              };
              T.prototype.redirect = function (e) {
                this._frame && !this.isFrameClosed() && this._frame.redirect(e);
              };
              T.prototype.close = function () {
                this.isFrameClosed() || this._frame.close();
              };
              T.prototype.focus = function () {
                this.isFrameClosed() || this._frame.focus();
              };
              T.prototype.createHandler = function (e) {
                e = e || {};
                return {
                  close: function () {
                    e.beforeClose && e.beforeClose();
                    this.close();
                  }.bind(this),
                  focus: function () {
                    e.beforeFocus && e.beforeFocus();
                    this.focus();
                  }.bind(this),
                };
              };
              T.prototype.createNoopHandler = function () {
                return { close: y, focus: y };
              };
              T.prototype.teardown = function () {
                this.close();
                this._dispatchFrame.parentNode.removeChild(this._dispatchFrame);
                this._dispatchFrame = null;
                this._cleanupFrame();
              };
              T.prototype.isFrameClosed = function () {
                return null == this._frame || this._frame.isClosed();
              };
              T.prototype._cleanupFrame = function () {
                this._frame = null;
                clearInterval(this._popupInterval);
                this._popupInterval = null;
              };
              T.prototype._pollForPopupClose = function () {
                this._popupInterval = setInterval(
                  function () {
                    if (this.isFrameClosed()) {
                      this._cleanupFrame();
                      this._onCompleteCallback &&
                        this._onCompleteCallback(
                          new p(c.FRAME_SERVICE_FRAME_CLOSED)
                        );
                    }
                  }.bind(this),
                  u.POPUP_POLL_INTERVAL
                );
                return this._popupInterval;
              };
              T.prototype._getFrameForEnvironment = function (e) {
                var t = _.supportsPopups(),
                  n = Boolean(window.popupBridge),
                  a = h({}, this._options, e);
                return n ? new i(a) : t ? new r(a) : new o(a);
              };
              t.exports = T;
            },
            {
              "../../braintree-error": 131,
              "../../constants": 133,
              "../../is-https": 159,
              "../shared/browser-detection": 152,
              "../shared/constants": 153,
              "../shared/errors": 154,
              "../shared/events": 155,
              "./../../assign": 128,
              "./strategies/modal": 147,
              "./strategies/popup": 150,
              "./strategies/popup-bridge": 148,
              "@braintree/iframer": 41,
              "@braintree/uuid": 45,
              framebus: 58,
            },
          ],
          146: [
            function (e, t, n) {
              "use strict";
              var r = e("./frame-service");
              t.exports = {
                create: function (e, t) {
                  var n = new r(e);
                  n.initialize(function () {
                    t(n);
                  });
                },
              };
            },
            { "./frame-service": 145 },
          ],
          147: [
            function (e, t, n) {
              "use strict";
              var r = e("@braintree/iframer"),
                i = e("../../../assign").assign,
                o = e("../../shared/browser-detection"),
                a = {
                  position: "fixed",
                  top: 0,
                  left: 0,
                  bottom: 0,
                  padding: 0,
                  margin: 0,
                  border: 0,
                  outline: "none",
                  zIndex: 20001,
                  background: "#FFFFFF",
                };
              function s() {}
              function c(e) {
                this._closed = null;
                this._frame = null;
                this._options = e || {};
                this._container = this._options.container || document.body;
              }
              c.prototype.initialize = s;
              c.prototype.open = function () {
                var e = {
                  src: this._options.openFrameUrl,
                  name: this._options.name,
                  scrolling: "yes",
                  height: "100%",
                  width: "100%",
                  style: i({}, a),
                  title: "Lightbox Frame",
                };
                if (o.isIos()) {
                  if (o.isIosWKWebview()) {
                    this._lockScrolling();
                    e.style = {};
                  }
                  this._el = document.createElement("div");
                  i(this._el.style, a, {
                    height: "100%",
                    width: "100%",
                    overflow: "auto",
                    "-webkit-overflow-scrolling": "touch",
                  });
                  this._frame = r(e);
                  this._el.appendChild(this._frame);
                } else this._el = this._frame = r(e);
                this._closed = !1;
                this._container.appendChild(this._el);
              };
              c.prototype.focus = s;
              c.prototype.close = function () {
                this._container.removeChild(this._el);
                this._frame = null;
                this._closed = !0;
                o.isIosWKWebview() && this._unlockScrolling();
              };
              c.prototype.isClosed = function () {
                return Boolean(this._closed);
              };
              c.prototype.redirect = function (e) {
                this._frame.src = e;
              };
              c.prototype._unlockScrolling = function () {
                document.body.style.overflow =
                  this._savedBodyProperties.overflowStyle;
                document.body.style.position =
                  this._savedBodyProperties.positionStyle;
                window.scrollTo(
                  this._savedBodyProperties.left,
                  this._savedBodyProperties.top
                );
                delete this._savedBodyProperties;
              };
              c.prototype._lockScrolling = function () {
                var e = document.documentElement;
                this._savedBodyProperties = {
                  left:
                    (window.pageXOffset || e.scrollLeft) - (e.clientLeft || 0),
                  top: (window.pageYOffset || e.scrollTop) - (e.clientTop || 0),
                  overflowStyle: document.body.style.overflow,
                  positionStyle: document.body.style.position,
                };
                document.body.style.overflow = "hidden";
                document.body.style.position = "fixed";
                window.scrollTo(0, 0);
              };
              t.exports = c;
            },
            {
              "../../../assign": 128,
              "../../shared/browser-detection": 152,
              "@braintree/iframer": 41,
            },
          ],
          148: [
            function (e, t, n) {
              "use strict";
              var r = e("../../../braintree-error"),
                i = e("../../shared/errors");
              function o() {}
              function a(e) {
                this._closed = null;
                this._options = e;
              }
              a.prototype.initialize = function (e) {
                var t = this;
                window.popupBridge.onComplete = function (n, o) {
                  var a = !o && !n;
                  t._closed = !0;
                  n || a ? e(new r(i.FRAME_SERVICE_FRAME_CLOSED)) : e(null, o);
                };
              };
              a.prototype.open = function (e) {
                var t;
                t = (e = e || {}).openFrameUrl || this._options.openFrameUrl;
                this._closed = !1;
                window.popupBridge.open(t);
              };
              a.prototype.focus = o;
              a.prototype.close = o;
              a.prototype.isClosed = function () {
                return Boolean(this._closed);
              };
              a.prototype.redirect = function (e) {
                this.open({ openFrameUrl: e });
              };
              t.exports = a;
            },
            { "../../../braintree-error": 131, "../../shared/errors": 154 },
          ],
          149: [
            function (e, t, n) {
              "use strict";
              var r = e("../../../shared/constants"),
                i = e("./position");
              function o(e, t, n) {
                return void 0 !== t ? t : i[e](n);
              }
              t.exports = function (e) {
                var t = e.height || r.DEFAULT_POPUP_HEIGHT,
                  n = e.width || r.DEFAULT_POPUP_WIDTH,
                  i = o("top", e.top, t),
                  a = o("left", e.left, n);
                return [
                  r.POPUP_BASE_OPTIONS,
                  "height=" + t,
                  "width=" + n,
                  "top=" + i,
                  "left=" + a,
                ].join(",");
              };
            },
            { "../../../shared/constants": 153, "./position": 151 },
          ],
          150: [
            function (e, t, n) {
              "use strict";
              var r = e("./compose-options");
              function i() {}
              function o(e) {
                this._frame = null;
                this._options = e || {};
                this.open();
              }
              o.prototype.initialize = i;
              o.prototype.open = function () {
                this._frame = window.open(
                  this._options.openFrameUrl,
                  this._options.name,
                  r(this._options)
                );
              };
              o.prototype.focus = function () {
                this._frame.focus();
              };
              o.prototype.close = function () {
                this._frame.closed || this._frame.close();
              };
              o.prototype.isClosed = function () {
                return !this._frame || Boolean(this._frame.closed);
              };
              o.prototype.redirect = function (e) {
                this._frame.location.href = e;
              };
              t.exports = o;
            },
            { "./compose-options": 149 },
          ],
          151: [
            function (e, t, n) {
              "use strict";
              function r(e) {
                return o(
                  window.outerHeight || document.documentElement.clientHeight,
                  e,
                  null == window.screenY ? window.screenTop : window.screenY
                );
              }
              function i(e) {
                return o(
                  window.outerWidth || document.documentElement.clientWidth,
                  e,
                  null == window.screenX ? window.screenLeft : window.screenX
                );
              }
              function o(e, t, n) {
                return (e - t) / 2 + n;
              }
              t.exports = { top: r, left: i, center: o };
            },
            {},
          ],
          152: [
            function (e, t, n) {
              "use strict";
              t.exports = {
                isIos: e("@braintree/browser-detection/is-ios"),
                isIosWKWebview: e(
                  "@braintree/browser-detection/is-ios-wkwebview"
                ),
                isIE: e("@braintree/browser-detection/is-ie"),
                supportsPopups: e(
                  "@braintree/browser-detection/supports-popups"
                ),
              };
            },
            {
              "@braintree/browser-detection/is-ie": 29,
              "@braintree/browser-detection/is-ios": 35,
              "@braintree/browser-detection/is-ios-wkwebview": 34,
              "@braintree/browser-detection/supports-popups": 37,
            },
          ],
          153: [
            function (e, t, n) {
              "use strict";
              t.exports = {
                DISPATCH_FRAME_NAME: "dispatch",
                DISPATCH_FRAME_CLASS: "braintree-dispatch-frame",
                POPUP_BASE_OPTIONS: "resizable,scrollbars",
                DEFAULT_POPUP_WIDTH: 450,
                DEFAULT_POPUP_HEIGHT: 535,
                POPUP_POLL_INTERVAL: 100,
                POPUP_CLOSE_TIMEOUT: 100,
              };
            },
            {},
          ],
          154: [
            function (e, t, n) {
              "use strict";
              var r = e("../../braintree-error");
              t.exports = {
                FRAME_SERVICE_FRAME_CLOSED: {
                  type: r.types.INTERNAL,
                  code: "FRAME_SERVICE_FRAME_CLOSED",
                  message: "Frame closed before tokenization could occur.",
                },
                FRAME_SERVICE_FRAME_OPEN_FAILED: {
                  type: r.types.INTERNAL,
                  code: "FRAME_SERVICE_FRAME_OPEN_FAILED",
                  message: "Frame failed to open.",
                },
                FRAME_SERVICE_FRAME_OPEN_FAILED_IE_BUG: {
                  type: r.types.INTERNAL,
                  code: "FRAME_SERVICE_FRAME_OPEN_FAILED_IE_BUG",
                  message:
                    "Could not open frame. This may be due to a bug in IE browsers when attempting to open an HTTPS page from a HTTP page. https://developer.microsoft.com/en-us/microsoft-edge/platform/issues/11324352/",
                },
              };
            },
            { "../../braintree-error": 131 },
          ],
          155: [
            function (e, t, n) {
              "use strict";
              var r = e("../../enumerate");
              t.exports = r(
                ["DISPATCH_FRAME_READY", "DISPATCH_FRAME_REPORT"],
                "frameService:"
              );
            },
            { "../../enumerate": 141 },
          ],
          156: [
            function (e, t, n) {
              "use strict";
              var r = "3.85.5",
                i = e("./assign").assign;
              function o(e, t) {
                var n = e.analyticsMetadata,
                  o = {
                    gateway: "braintree",
                    "braintree:merchantId": e.gatewayConfiguration.merchantId,
                    "braintree:apiVersion": "v1",
                    "braintree:sdkVersion": r,
                    "braintree:metadata": JSON.stringify({
                      source: n.source,
                      integration: n.integration,
                      sessionId: n.sessionId,
                      version: r,
                      platform: n.platform,
                    }),
                  };
                return i({}, o, t);
              }
              t.exports = function (e, t, n) {
                var r,
                  i,
                  a = e.gatewayConfiguration.androidPay,
                  s =
                    "production" === e.gatewayConfiguration.environment
                      ? "PRODUCTION"
                      : "TEST";
                if (2 === t) {
                  r = {
                    apiVersion: 2,
                    apiVersionMinor: 0,
                    environment: s,
                    allowedPaymentMethods: [
                      {
                        type: "CARD",
                        parameters: {
                          allowedAuthMethods: ["PAN_ONLY", "CRYPTOGRAM_3DS"],
                          allowedCardNetworks: a.supportedNetworks.map(
                            function (e) {
                              return e.toUpperCase();
                            }
                          ),
                        },
                        tokenizationSpecification: {
                          type: "PAYMENT_GATEWAY",
                          parameters: o(e, {
                            "braintree:authorizationFingerprint":
                              a.googleAuthorizationFingerprint,
                          }),
                        },
                      },
                    ],
                  };
                  n && (r.merchantInfo = { merchantId: n });
                  if (a.paypalClientId) {
                    i = {
                      type: "PAYPAL",
                      parameters: {
                        purchase_context: {
                          purchase_units: [
                            {
                              payee: { client_id: a.paypalClientId },
                              recurring_payment: !0,
                            },
                          ],
                        },
                      },
                      tokenizationSpecification: {
                        type: "PAYMENT_GATEWAY",
                        parameters: o(e, {
                          "braintree:paypalClientId": a.paypalClientId,
                        }),
                      },
                    };
                    r.allowedPaymentMethods.push(i);
                  }
                } else {
                  r = {
                    environment: s,
                    allowedPaymentMethods: ["CARD", "TOKENIZED_CARD"],
                    paymentMethodTokenizationParameters: {
                      tokenizationType: "PAYMENT_GATEWAY",
                      parameters: o(e, {
                        "braintree:authorizationFingerprint":
                          a.googleAuthorizationFingerprint,
                      }),
                    },
                    cardRequirements: {
                      allowedCardNetworks: a.supportedNetworks.map(function (
                        e
                      ) {
                        return e.toUpperCase();
                      }),
                    },
                  };
                  "TOKENIZATION_KEY" === e.authorizationType &&
                    (r.paymentMethodTokenizationParameters.parameters[
                      "braintree:clientKey"
                    ] = e.authorization);
                  n && (r.merchantId = n);
                  t && (r.apiVersion = t);
                }
                return r;
              };
            },
            { "./assign": 128 },
          ],
          157: [
            function (e, t, n) {
              "use strict";
              t.exports = function (e) {
                e = e || window;
                try {
                  return e.self !== e.top;
                } catch (e) {
                  return !0;
                }
              };
            },
            {},
          ],
          158: [
            function (e, t, n) {
              "use strict";
              function r(e) {
                var t = e.split("-");
                return new Date(t[0], t[1], t[2]);
              }
              function i(e, t) {
                return r(e) <= r(t);
              }
              t.exports = i;
            },
            {},
          ],
          159: [
            function (e, t, n) {
              "use strict";
              function r(e) {
                return "https:" === (e = e || window.location.protocol);
              }
              t.exports = { isHTTPS: r };
            },
            {},
          ],
          160: [
            function (e, t, n) {
              "use strict";
              var r,
                i = {
                  "paypal.com": 1,
                  "braintreepayments.com": 1,
                  "braintreegateway.com": 1,
                  "braintree-api.com": 1,
                };
              function o(e) {
                return e.split(".").slice(-2).join(".");
              }
              function a(e) {
                var t;
                e = e.toLowerCase();
                if (!/^https:/.test(e)) return !1;
                (r = r || document.createElement("a")).href = e;
                t = o(r.hostname);
                return i.hasOwnProperty(t);
              }
              t.exports = a;
            },
            {},
          ],
          161: [
            function (e, t, n) {
              "use strict";
              t.exports = function (e) {
                return JSON.parse(JSON.stringify(e));
              };
            },
            {},
          ],
          162: [
            function (e, t, n) {
              "use strict";
              t.exports = function (e) {
                return Object.keys(e).filter(function (t) {
                  return "function" == typeof e[t];
                });
              };
            },
            {},
          ],
          163: [
            function (e, t, n) {
              "use strict";
              function r(e) {
                var t = !1;
                return function () {
                  if (!t) {
                    t = !0;
                    e.apply(null, arguments);
                  }
                };
              }
              t.exports = r;
            },
            {},
          ],
          164: [
            function (e, t, n) {
              "use strict";
              var r = e("promise-polyfill"),
                i = e("@braintree/extended-promise"),
                o = "undefined" != typeof Promise ? Promise : r;
              i.suppressUnhandledPromiseMessage = !0;
              i.setPromise(o);
              t.exports = o;
            },
            { "@braintree/extended-promise": 40, "promise-polyfill": 71 },
          ],
          165: [
            function (e, t, n) {
              "use strict";
              function r(e) {
                var t;
                for (t in e) if (e.hasOwnProperty(t)) return !0;
                return !1;
              }
              function i(e) {
                return (
                  (e &&
                    "object" == typeof e &&
                    "number" == typeof e.length &&
                    "[object Array]" === Object.prototype.toString.call(e)) ||
                  !1
                );
              }
              function o(e) {
                e = e || window.location.href;
                return /\?/.test(e);
              }
              function a(e) {
                return o((e = e || window.location.href))
                  ? (e.split("?")[1] || "")
                      .replace(/#.*$/, "")
                      .split("&")
                      .reduce(function (e, t) {
                        var n = t.split("="),
                          r = decodeURIComponent(n[0]),
                          i = decodeURIComponent(n[1]);
                        e[r] = i;
                        return e;
                      }, {})
                  : {};
              }
              function s(e, t) {
                var n,
                  r,
                  o,
                  a = [];
                for (o in e)
                  if (e.hasOwnProperty(o)) {
                    r = e[o];
                    n = t ? (i(e) ? t + "[]" : t + "[" + o + "]") : o;
                    "object" == typeof r
                      ? a.push(s(r, n))
                      : a.push(
                          encodeURIComponent(n) + "=" + encodeURIComponent(r)
                        );
                  }
                return a.join("&");
              }
              function c(e, t) {
                e = e || "";
                if (null != t && "object" == typeof t && r(t)) {
                  e += -1 === e.indexOf("?") ? "?" : "";
                  e += -1 !== e.indexOf("=") ? "&" : "";
                  e += s(t);
                }
                return e;
              }
              t.exports = {
                parse: a,
                stringify: s,
                queryify: c,
                hasQueryParams: o,
              };
            },
            {},
          ],
          166: [
            function (e, t, n) {
              "use strict";
              var r = e("@braintree/uuid"),
                i = e("./find-root-node");
              function o(e) {
                return "[object ShadowRoot]" === (e = i(e)).toString();
              }
              function a(e) {
                return o((e = i(e))) ? e.host : null;
              }
              function s(e, t) {
                var n = i(e).querySelector("style"),
                  c = a(e),
                  u = "shadow-slot-" + r(),
                  d = document.createElement("slot"),
                  l = document.createElement("div");
                d.setAttribute("name", u);
                e.appendChild(d);
                l.setAttribute("slot", u);
                c.appendChild(l);
                if (t) {
                  if (!n) {
                    n = document.createElement("style");
                    e.appendChild(n);
                  }
                  n.sheet.insertRule(
                    '::slotted([slot="' + u + '"]) { ' + t + " }"
                  );
                }
                return o(c) ? s(l, t) : l;
              }
              t.exports = {
                isShadowElement: o,
                getShadowHost: a,
                transformToSlot: s,
              };
            },
            { "./find-root-node": 143, "@braintree/uuid": 45 },
          ],
          167: [
            function (e, t, n) {
              "use strict";
              function r(e) {
                return e ? "" : ".min";
              }
              t.exports = r;
            },
            {},
          ],
          168: [
            function (e, t, n) {
              "use strict";
              var r = "function" == typeof atob ? atob : i;
              function i(e) {
                var t,
                  n,
                  r,
                  i,
                  o,
                  a,
                  s =
                    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
                  c = "";
                if (
                  !new RegExp(
                    "^(?:[A-Za-z0-9+/]{4})*(?:[A-Za-z0-9+/]{2}==|[A-Za-z0-9+/]{3}=|[A-Za-z0-9+/]{4})([=]{1,2})?$"
                  ).test(e)
                )
                  throw new Error(
                    "Non base64 encoded input passed to window.atob polyfill"
                  );
                a = 0;
                do {
                  t =
                    ((63 & s.indexOf(e.charAt(a++))) << 2) |
                    (((i = s.indexOf(e.charAt(a++))) >> 4) & 3);
                  n =
                    ((15 & i) << 4) |
                    (((o = s.indexOf(e.charAt(a++))) >> 2) & 15);
                  r = ((3 & o) << 6) | (63 & s.indexOf(e.charAt(a++)));
                  c +=
                    String.fromCharCode(t) +
                    (n ? String.fromCharCode(n) : "") +
                    (r ? String.fromCharCode(r) : "");
                } while (a < e.length);
                return c;
              }
              t.exports = {
                atob: function (e) {
                  return r.call(window, e);
                },
                _atob: i,
              };
            },
            {},
          ],
          169: [
            function (e, t, n) {
              "use strict";
              t.exports = {
                REQUIRED_OPTIONS_FOR_START_PAYMENT: [
                  "onPaymentStart",
                  "paymentType",
                  "amount",
                  "fallback",
                ],
              };
            },
            {},
          ],
          170: [
            function (e, t, n) {
              "use strict";
              var r = e("../../lib/frame-service/external"),
                i = e("../../lib/braintree-error"),
                o = e("../../lib/use-min"),
                a = "3.85.5",
                s = e("../../lib/constants").INTEGRATION_TIMEOUT_MS,
                c = e("../../lib/analytics"),
                u = e("../../lib/methods"),
                d = e("../../lib/convert-methods-to-error"),
                l = e("../../lib/convert-to-braintree-error"),
                p = e("../../lib/promise"),
                _ = e("@braintree/extended-promise"),
                E = e("../../lib/querystring"),
                h = e("@braintree/wrap-promise"),
                f = e("./constants"),
                m = e("../shared/errors"),
                y = 1282,
                A = 720;
              function T(e) {
                this._client = e.client;
                this._assetsUrl =
                  e.client.getConfiguration().gatewayConfiguration.assetsUrl +
                  "/web/" +
                  a;
                this._isDebug = e.client.getConfiguration().isDebug;
                this._loadingFrameUrl =
                  this._assetsUrl +
                  "/html/local-payment-landing-frame" +
                  o(this._isDebug) +
                  ".html";
                this._authorizationInProgress = !1;
                this._paymentType = "unknown";
                this._merchantAccountId = e.merchantAccountId;
              }
              T.prototype._initialize = function () {
                var e = this,
                  t = this._client,
                  n = setTimeout(function () {
                    c.sendEvent(t, "local-payment.load.timed-out");
                  }, s);
                return new p(function (i) {
                  r.create(
                    {
                      name: "localpaymentlandingpage",
                      dispatchFrameUrl:
                        e._assetsUrl +
                        "/html/dispatch-frame" +
                        o(e._isDebug) +
                        ".html",
                      openFrameUrl: e._loadingFrameUrl,
                    },
                    function (r) {
                      e._frameService = r;
                      clearTimeout(n);
                      c.sendEvent(t, "local-payment.load.succeeded");
                      i(e);
                    }
                  );
                });
              };
              T.prototype.startPayment = function (e) {
                var t,
                  n,
                  r,
                  a = this,
                  s = this._frameService._serviceId,
                  u = e.windowOptions || {};
                if (I(e))
                  return p.reject(
                    new i(m.LOCAL_PAYMENT_START_PAYMENT_MISSING_REQUIRED_OPTION)
                  );
                t = e.address || {};
                n = {
                  intent: "sale",
                  returnUrl: E.queryify(
                    a._assetsUrl +
                      "/html/local-payment-redirect-frame" +
                      o(a._isDebug) +
                      ".html",
                    { channel: s, r: e.fallback.url, t: e.fallback.buttonText }
                  ),
                  cancelUrl: E.queryify(
                    a._assetsUrl +
                      "/html/local-payment-redirect-frame" +
                      o(a._isDebug) +
                      ".html",
                    {
                      channel: s,
                      r: e.fallback.cancelUrl || e.fallback.url,
                      t: e.fallback.cancelButtonText || e.fallback.buttonText,
                      c: 1,
                    }
                  ),
                  experienceProfile: {
                    brandName: e.displayName,
                    noShipping: !e.shippingAddressRequired,
                  },
                  fundingSource: e.paymentType,
                  paymentTypeCountryCode: e.paymentTypeCountryCode,
                  amount: e.amount,
                  currencyIsoCode: e.currencyCode,
                  firstName: e.givenName,
                  lastName: e.surname,
                  payerEmail: e.email,
                  phone: e.phone,
                  line1: t.streetAddress,
                  line2: t.extendedAddress,
                  city: t.locality,
                  state: t.region,
                  postalCode: t.postalCode,
                  countryCode: t.countryCode,
                  merchantAccountId: a._merchantAccountId,
                  bic: e.bic,
                };
                a._paymentType = e.paymentType.toLowerCase();
                if (a._authorizationInProgress) {
                  c.sendEvent(
                    a._client,
                    a._paymentType +
                      ".local-payment.start-payment.error.already-opened"
                  );
                  return p.reject(new i(m.LOCAL_PAYMENT_ALREADY_IN_PROGRESS));
                }
                a._authorizationInProgress = !0;
                r = new _();
                a._startPaymentCallback = a._createStartPaymentCallback(
                  function (e) {
                    r.resolve(e);
                  },
                  function (e) {
                    r.reject(e);
                  }
                );
                a._frameService.open(
                  { width: u.width || y, height: u.height || A },
                  a._startPaymentCallback
                );
                a._client
                  .request({
                    method: "post",
                    endpoint: "local_payments/create",
                    data: n,
                  })
                  .then(function (t) {
                    c.sendEvent(
                      a._client,
                      a._paymentType + ".local-payment.start-payment.opened"
                    );
                    a._startPaymentOptions = e;
                    e.onPaymentStart(
                      { paymentId: t.paymentResource.paymentToken },
                      function () {
                        a._frameService.redirect(t.paymentResource.redirectUrl);
                      }
                    );
                  })
                  .catch(function (e) {
                    var t = e.details && e.details.httpStatus;
                    a._frameService.close();
                    a._authorizationInProgress = !1;
                    422 !== t
                      ? r.reject(
                          l(e, {
                            type: m.LOCAL_PAYMENT_START_PAYMENT_FAILED.type,
                            code: m.LOCAL_PAYMENT_START_PAYMENT_FAILED.code,
                            message:
                              m.LOCAL_PAYMENT_START_PAYMENT_FAILED.message,
                          })
                        )
                      : r.reject(
                          new i({
                            type: m.LOCAL_PAYMENT_INVALID_PAYMENT_OPTION.type,
                            code: m.LOCAL_PAYMENT_INVALID_PAYMENT_OPTION.code,
                            message:
                              m.LOCAL_PAYMENT_INVALID_PAYMENT_OPTION.message,
                            details: { originalError: e },
                          })
                        );
                  });
                return r;
              };
              T.prototype.tokenize = function (e) {
                var t = this,
                  n = this._client;
                return (e = e || E.parse()).c || e.wasCanceled
                  ? p.reject(
                      new i({
                        type: m.LOCAL_PAYMENT_CANCELED.type,
                        code: m.LOCAL_PAYMENT_CANCELED.code,
                        message: m.LOCAL_PAYMENT_CANCELED.message,
                        details: {
                          originalError: {
                            errorcode: e.errorcode,
                            token: e.btLpToken,
                          },
                        },
                      })
                    )
                  : e.errorcode
                  ? p.reject(
                      new i({
                        type: m.LOCAL_PAYMENT_START_PAYMENT_FAILED.type,
                        code: m.LOCAL_PAYMENT_START_PAYMENT_FAILED.code,
                        message: m.LOCAL_PAYMENT_START_PAYMENT_FAILED.message,
                        details: {
                          originalError: {
                            errorcode: e.errorcode,
                            token: e.btLpToken,
                          },
                        },
                      })
                    )
                  : n
                      .request({
                        endpoint: "payment_methods/paypal_accounts",
                        method: "post",
                        data: this._formatTokenizeData(e),
                      })
                      .then(function (e) {
                        var r = t._formatTokenizePayload(e);
                        window.popupBridge
                          ? c.sendEvent(
                              n,
                              t._paymentType +
                                ".local-payment.tokenization.success-popupbridge"
                            )
                          : c.sendEvent(
                              n,
                              t._paymentType +
                                ".local-payment.tokenization.success"
                            );
                        return r;
                      })
                      .catch(function (e) {
                        c.sendEvent(
                          n,
                          t._paymentType + ".local-payment.tokenization.failed"
                        );
                        return p.reject(
                          l(e, {
                            type: m.LOCAL_PAYMENT_TOKENIZATION_FAILED.type,
                            code: m.LOCAL_PAYMENT_TOKENIZATION_FAILED.code,
                            message:
                              m.LOCAL_PAYMENT_TOKENIZATION_FAILED.message,
                          })
                        );
                      });
              };
              T.prototype.closeWindow = function () {
                this._authoriztionInProgress &&
                  c.sendEvent(
                    this._client,
                    this._paymentType +
                      ".local-payment.start-payment.closed.by-merchant"
                  );
                this._frameService.close();
              };
              T.prototype.focusWindow = function () {
                this._frameService.focus();
              };
              T.prototype._createStartPaymentCallback = function (e, t) {
                var n = this,
                  r = this._client;
                return function (o, a) {
                  n._authorizationInProgress = !1;
                  if (o)
                    if ("FRAME_SERVICE_FRAME_CLOSED" === o.code) {
                      if (a && "processing_error" === a.errorcode) {
                        c.sendEvent(
                          r,
                          n._paymentType + ".local-payment.failed-in-window"
                        );
                        t(new i(m.LOCAL_PAYMENT_START_PAYMENT_FAILED));
                        return;
                      }
                      c.sendEvent(
                        r,
                        n._paymentType +
                          ".local-payment.tokenization.closed.by-user"
                      );
                      t(new i(m.LOCAL_PAYMENT_WINDOW_CLOSED));
                    } else
                      o.code &&
                        o.code.indexOf("FRAME_SERVICE_FRAME_OPEN_FAILED") >
                          -1 &&
                        t(
                          new i({
                            code: m.LOCAL_PAYMENT_WINDOW_OPEN_FAILED.code,
                            type: m.LOCAL_PAYMENT_WINDOW_OPEN_FAILED.type,
                            message: m.LOCAL_PAYMENT_WINDOW_OPEN_FAILED.message,
                            details: { originalError: o },
                          })
                        );
                  else if (a) {
                    window.popupBridge ||
                      n._frameService.redirect(n._loadingFrameUrl);
                    n.tokenize(a)
                      .then(e)
                      .catch(t)
                      .then(function () {
                        n._frameService.close();
                      });
                  }
                };
              };
              T.prototype._formatTokenizePayload = function (e) {
                var t,
                  n = {};
                e.paypalAccounts && (n = e.paypalAccounts[0]);
                t = { nonce: n.nonce, details: {}, type: n.type };
                if (n.details) {
                  n.details.payerInfo && (t.details = n.details.payerInfo);
                  n.details.correlationId &&
                    (t.correlationId = n.details.correlationId);
                }
                return t;
              };
              T.prototype.hasTokenizationParams = function () {
                var e = E.parse();
                return (
                  !!e.errorcode ||
                  Boolean(e.btLpToken && e.btLpPaymentId && e.btLpPayerId)
                );
              };
              T.prototype._formatTokenizeData = function (e) {
                var t = this._client.getConfiguration().gatewayConfiguration;
                return {
                  merchantAccountId: this._merchantAccountId,
                  paypalAccount: {
                    correlationId: e.btLpToken || e.token,
                    paymentToken: e.btLpPaymentId || e.paymentId,
                    payerId: e.btLpPayerId || e.PayerID,
                    unilateral: t.paypal.unvettedMerchant,
                    intent: "sale",
                  },
                };
              };
              function I(e) {
                var t, n;
                if (!e) return !0;
                for (
                  t = 0;
                  t < f.REQUIRED_OPTIONS_FOR_START_PAYMENT.length;
                  t++
                ) {
                  n = f.REQUIRED_OPTIONS_FOR_START_PAYMENT[t];
                  if (!e.hasOwnProperty(n)) return !0;
                }
                return !e.fallback.url || !e.fallback.buttonText;
              }
              T.prototype.teardown = function () {
                var e = this;
                e._frameService.teardown();
                d(e, u(T.prototype));
                c.sendEvent(e._client, "local-payment.teardown-completed");
                return p.resolve();
              };
              t.exports = h.wrapPrototype(T);
            },
            {
              "../../lib/analytics": 126,
              "../../lib/braintree-error": 131,
              "../../lib/constants": 133,
              "../../lib/convert-methods-to-error": 134,
              "../../lib/convert-to-braintree-error": 135,
              "../../lib/frame-service/external": 146,
              "../../lib/methods": 162,
              "../../lib/promise": 164,
              "../../lib/querystring": 165,
              "../../lib/use-min": 167,
              "../shared/errors": 172,
              "./constants": 169,
              "@braintree/extended-promise": 40,
              "@braintree/wrap-promise": 49,
            },
          ],
          171: [
            function (e, t, n) {
              "use strict";
              var r = e("../lib/analytics"),
                i = e("../lib/basic-component-verification"),
                o = e("../lib/create-deferred-client"),
                a = e("../lib/create-assets-url"),
                s = e("./external/local-payment"),
                c = "3.85.5",
                u = e("../lib/promise"),
                d = e("@braintree/wrap-promise"),
                l = e("../lib/braintree-error"),
                p = e("./shared/errors");
              function _(e) {
                var t = "Local Payment";
                return i
                  .verify({
                    name: t,
                    client: e.client,
                    authorization: e.authorization,
                  })
                  .then(function () {
                    return o.create({
                      authorization: e.authorization,
                      client: e.client,
                      debug: e.debug,
                      assetsUrl: a.create(e.authorization),
                      name: t,
                    });
                  })
                  .then(function (t) {
                    var n = t.getConfiguration();
                    e.client = t;
                    if (!0 !== n.gatewayConfiguration.paypalEnabled)
                      return u.reject(new l(p.LOCAL_PAYMENT_NOT_ENABLED));
                    r.sendEvent(t, "local-payment.initialized");
                    return new s(e)._initialize();
                  });
              }
              t.exports = { create: d(_), VERSION: c };
            },
            {
              "../lib/analytics": 126,
              "../lib/basic-component-verification": 129,
              "../lib/braintree-error": 131,
              "../lib/create-assets-url": 136,
              "../lib/create-deferred-client": 138,
              "../lib/promise": 164,
              "./external/local-payment": 170,
              "./shared/errors": 172,
              "@braintree/wrap-promise": 49,
            },
          ],
          172: [
            function (e, t, n) {
              "use strict";
              var r = e("../../lib/braintree-error");
              t.exports = {
                LOCAL_PAYMENT_NOT_ENABLED: {
                  type: r.types.MERCHANT,
                  code: "LOCAL_PAYMENT_NOT_ENABLED",
                  message: "LocalPayment is not enabled for this merchant.",
                },
                LOCAL_PAYMENT_ALREADY_IN_PROGRESS: {
                  type: r.types.MERCHANT,
                  code: "LOCAL_PAYMENT_ALREADY_IN_PROGRESS",
                  message: "LocalPayment payment is already in progress.",
                },
                LOCAL_PAYMENT_CANCELED: {
                  type: r.types.CUSTOMER,
                  code: "LOCAL_PAYMENT_CANCELED",
                  message:
                    "Customer canceled the LocalPayment before authorizing.",
                },
                LOCAL_PAYMENT_WINDOW_CLOSED: {
                  type: r.types.CUSTOMER,
                  code: "LOCAL_PAYMENT_WINDOW_CLOSED",
                  message:
                    "Customer closed LocalPayment window before authorizing.",
                },
                LOCAL_PAYMENT_WINDOW_OPEN_FAILED: {
                  type: r.types.MERCHANT,
                  code: "LOCAL_PAYMENT_WINDOW_OPEN_FAILED",
                  message:
                    "LocalPayment window failed to open; make sure startPayment was called in response to a user action.",
                },
                LOCAL_PAYMENT_START_PAYMENT_FAILED: {
                  type: r.types.NETWORK,
                  code: "LOCAL_PAYMENT_START_PAYMENT_FAILED",
                  message: "LocalPayment startPayment failed.",
                },
                LOCAL_PAYMENT_START_PAYMENT_MISSING_REQUIRED_OPTION: {
                  type: r.types.MERCHANT,
                  code: "LOCAL_PAYMENT_START_PAYMENT_MISSING_REQUIRED_OPTION",
                  message: "Missing required option for startPayment.",
                },
                LOCAL_PAYMENT_TOKENIZATION_FAILED: {
                  type: r.types.NETWORK,
                  code: "LOCAL_PAYMENT_TOKENIZATION_FAILED",
                  message: "Could not tokenize user's local payment method.",
                },
                LOCAL_PAYMENT_INVALID_PAYMENT_OPTION: {
                  type: r.types.MERCHANT,
                  code: "LOCAL_PAYMENT_INVALID_PAYMENT_OPTION",
                  message: "Local payment options are invalid.",
                },
              };
            },
            { "../../lib/braintree-error": 131 },
          ],
          173: [
            function (e, t, n) {
              "use strict";
              var r = e("../../lib/promise"),
                i = e("../../lib/frame-service/external"),
                o = e("../../lib/braintree-error"),
                a = e("../shared/errors"),
                s = "3.85.5",
                c = e("../../lib/methods"),
                u = e("@braintree/wrap-promise"),
                d = e("../../lib/analytics"),
                l = e("../../lib/convert-methods-to-error"),
                p = e("../../lib/convert-to-braintree-error"),
                _ = e("../shared/constants"),
                E = e("../../lib/constants").INTEGRATION_TIMEOUT_MS;
              function h(e) {
                var t = e.client.getConfiguration();
                this._client = e.client;
                this._assetsUrl =
                  t.gatewayConfiguration.assetsUrl + "/web/" + s;
                this._isDebug = t.isDebug;
                this._authInProgress = !1;
                window.popupBridge &&
                "function" == typeof window.popupBridge.getReturnUrlPrefix
                  ? (this._callbackUrl =
                      window.popupBridge.getReturnUrlPrefix() + "return")
                  : (this._callbackUrl =
                      this._assetsUrl +
                      "/html/redirect-frame" +
                      (this._isDebug ? "" : ".min") +
                      ".html");
              }
              h.prototype._initialize = function () {
                var e = this;
                return new r(function (t) {
                  var n = setTimeout(function () {
                    d.sendEvent(e._client, "masterpass.load.timed-out");
                  }, E);
                  i.create(
                    {
                      name: _.LANDING_FRAME_NAME,
                      height: _.POPUP_HEIGHT,
                      width: _.POPUP_WIDTH,
                      dispatchFrameUrl:
                        e._assetsUrl +
                        "/html/dispatch-frame" +
                        (e._isDebug ? "" : ".min") +
                        ".html",
                      openFrameUrl:
                        e._assetsUrl +
                        "/html/masterpass-landing-frame" +
                        (e._isDebug ? "" : ".min") +
                        ".html",
                    },
                    function (r) {
                      e._frameService = r;
                      clearTimeout(n);
                      d.sendEvent(e._client, "masterpass.load.succeeded");
                      t(e);
                    }
                  );
                });
              };
              h.prototype.tokenize = function (e) {
                var t = this;
                return !e || m(e)
                  ? r.reject(
                      new o(a.MASTERPASS_TOKENIZE_MISSING_REQUIRED_OPTION)
                    )
                  : t._authInProgress
                  ? r.reject(
                      new o(a.MASTERPASS_TOKENIZATION_ALREADY_IN_PROGRESS)
                    )
                  : new r(function (n, r) {
                      t._navigateFrameToLoadingPage(e).catch(r);
                      t._frameService.open(
                        e.frameOptions,
                        t._createFrameOpenHandler(n, r)
                      );
                    });
              };
              h.prototype._navigateFrameToLoadingPage = function (e) {
                var t = this;
                this._authInProgress = !0;
                return this._client
                  .request({
                    method: "post",
                    endpoint: "masterpass/request_token",
                    data: {
                      requestToken: {
                        originUrl:
                          window.location.protocol +
                          "//" +
                          window.location.hostname,
                        subtotal: e.subtotal,
                        currencyCode: e.currencyCode,
                        callbackUrl: this._callbackUrl,
                      },
                    },
                  })
                  .then(function (n) {
                    var r,
                      i =
                        t._assetsUrl +
                        "/html/masterpass-loading-frame" +
                        (t._isDebug ? "" : ".min") +
                        ".html?",
                      o = t._client.getConfiguration().gatewayConfiguration,
                      a = e.config || {};
                    r = {
                      environment: o.environment,
                      requestToken: n.requestToken,
                      callbackUrl: t._callbackUrl,
                      merchantCheckoutId: o.masterpass.merchantCheckoutId,
                      allowedCardTypes: o.masterpass.supportedNetworks,
                      version: _.MASTERPASS_VERSION,
                    };
                    Object.keys(a).forEach(function (e) {
                      "function" != typeof a[e] && (r[e] = a[e]);
                    });
                    i += Object.keys(r)
                      .map(function (e) {
                        return e + "=" + r[e];
                      })
                      .join("&");
                    t._frameService.redirect(i);
                  })
                  .catch(function (e) {
                    var n = e.details && e.details.httpStatus;
                    t._closeWindow();
                    return 422 === n
                      ? r.reject(p(e, a.MASTERPASS_INVALID_PAYMENT_OPTION))
                      : r.reject(p(e, a.MASTERPASS_FLOW_FAILED));
                  });
              };
              h.prototype._createFrameOpenHandler = function (e, t) {
                var n = this;
                return window.popupBridge
                  ? function (r, i) {
                      n._authInProgress = !1;
                      if (r) {
                        d.sendEvent(
                          n._client,
                          "masterpass.tokenization.closed-popupbridge.by-user"
                        );
                        t(p(r, a.MASTERPASS_POPUP_CLOSED));
                      } else if (i.queryItems)
                        n._tokenizeMasterpass(i.queryItems).then(e).catch(t);
                      else {
                        d.sendEvent(
                          n._client,
                          "masterpass.tokenization.failed-popupbridge"
                        );
                        t(new o(a.MASTERPASS_FLOW_FAILED));
                      }
                    }
                  : function (r, i) {
                      if (r) {
                        n._authInProgress = !1;
                        if ("FRAME_SERVICE_FRAME_CLOSED" === r.code) {
                          d.sendEvent(
                            n._client,
                            "masterpass.tokenization.closed.by-user"
                          );
                          t(new o(a.MASTERPASS_POPUP_CLOSED));
                          return;
                        }
                        if (
                          r.code &&
                          r.code.indexOf("FRAME_SERVICE_FRAME_OPEN_FAILED") > -1
                        ) {
                          d.sendEvent(
                            n._client,
                            "masterpass.tokenization.failed.to-open"
                          );
                          t(
                            new o({
                              code: a.MASTERPASS_POPUP_OPEN_FAILED.code,
                              type: a.MASTERPASS_POPUP_OPEN_FAILED.type,
                              message: a.MASTERPASS_POPUP_OPEN_FAILED.message,
                              details: { originalError: r },
                            })
                          );
                          return;
                        }
                        d.sendEvent(
                          n._client,
                          "masterpass.tokenization.failed"
                        );
                        n._closeWindow();
                        t(p(r, a.MASTERPASS_FLOW_FAILED));
                      } else n._tokenizeMasterpass(i).then(e).catch(t);
                    };
              };
              h.prototype._tokenizeMasterpass = function (e) {
                var t = this;
                if ("success" !== e.mpstatus) {
                  d.sendEvent(
                    t._client,
                    "masterpass.tokenization.closed.by-user"
                  );
                  t._closeWindow();
                  return r.reject(new o(a.MASTERPASS_POPUP_CLOSED));
                }
                if (f(e)) {
                  d.sendEvent(
                    t._client,
                    "masterpass.tokenization.closed.missing-payload"
                  );
                  t._closeWindow();
                  return r.reject(
                    new o(a.MASTERPASS_POPUP_MISSING_REQUIRED_PARAMETERS)
                  );
                }
                return t._client
                  .request({
                    endpoint: "payment_methods/masterpass_cards",
                    method: "post",
                    data: {
                      masterpassCard: {
                        checkoutResourceUrl: e.checkout_resource_url,
                        requestToken: e.oauth_token,
                        verifierToken: e.oauth_verifier,
                      },
                    },
                  })
                  .then(function (e) {
                    t._closeWindow();
                    window.popupBridge
                      ? d.sendEvent(
                          t._client,
                          "masterpass.tokenization.success-popupbridge"
                        )
                      : d.sendEvent(
                          t._client,
                          "masterpass.tokenization.success"
                        );
                    return e.masterpassCards[0];
                  })
                  .catch(function (e) {
                    t._closeWindow();
                    window.popupBridge
                      ? d.sendEvent(
                          t._client,
                          "masterpass.tokenization.failed-popupbridge"
                        )
                      : d.sendEvent(
                          t._client,
                          "masterpass.tokenization.failed"
                        );
                    return r.reject(
                      p(e, a.MASTERPASS_ACCOUNT_TOKENIZATION_FAILED)
                    );
                  });
              };
              function f(e) {
                return [
                  e.oauth_verifier,
                  e.oauth_token,
                  e.checkout_resource_url,
                ].some(function (e) {
                  return null == e || "null" === e;
                });
              }
              h.prototype._closeWindow = function () {
                this._authInProgress = !1;
                this._frameService.close();
              };
              h.prototype.teardown = function () {
                var e = this;
                return new r(function (t) {
                  e._frameService.teardown();
                  l(e, c(h.prototype));
                  d.sendEvent(e._client, "masterpass.teardown-completed");
                  t();
                });
              };
              function m(e) {
                var t, n;
                for (t = 0; t < _.REQUIRED_OPTIONS_FOR_TOKENIZE.length; t++) {
                  n = _.REQUIRED_OPTIONS_FOR_TOKENIZE[t];
                  if (!e.hasOwnProperty(n)) return !0;
                }
                return !1;
              }
              t.exports = u.wrapPrototype(h);
            },
            {
              "../../lib/analytics": 126,
              "../../lib/braintree-error": 131,
              "../../lib/constants": 133,
              "../../lib/convert-methods-to-error": 134,
              "../../lib/convert-to-braintree-error": 135,
              "../../lib/frame-service/external": 146,
              "../../lib/methods": 162,
              "../../lib/promise": 164,
              "../shared/constants": 176,
              "../shared/errors": 177,
              "@braintree/wrap-promise": 49,
            },
          ],
          174: [
            function (e, t, n) {
              "use strict";
              var r = e("../lib/braintree-error"),
                i = e("../lib/basic-component-verification"),
                o = e("./shared/browser-detection"),
                a = e("./external/masterpass"),
                s = e("../lib/create-deferred-client"),
                c = e("../lib/create-assets-url"),
                u = "3.85.5",
                d = e("./shared/errors"),
                l = e("../lib/promise"),
                p = e("@braintree/wrap-promise");
              function _(e) {
                var t = "Masterpass";
                return i
                  .verify({
                    name: t,
                    client: e.client,
                    authorization: e.authorization,
                  })
                  .then(function () {
                    return E()
                      ? l.resolve()
                      : l.reject(new r(d.MASTERPASS_BROWSER_NOT_SUPPORTED));
                  })
                  .then(function () {
                    return s.create({
                      authorization: e.authorization,
                      client: e.client,
                      debug: e.debug,
                      assetsUrl: c.create(e.authorization),
                      name: t,
                    });
                  })
                  .then(function (t) {
                    e.client = t;
                    return e.client.getConfiguration().gatewayConfiguration
                      .masterpass
                      ? new a(e)._initialize()
                      : l.reject(new r(d.MASTERPASS_NOT_ENABLED));
                  });
              }
              function E() {
                return Boolean(window.popupBridge || o.supportsPopups());
              }
              t.exports = { create: p(_), isSupported: E, VERSION: u };
            },
            {
              "../lib/basic-component-verification": 129,
              "../lib/braintree-error": 131,
              "../lib/create-assets-url": 136,
              "../lib/create-deferred-client": 138,
              "../lib/promise": 164,
              "./external/masterpass": 173,
              "./shared/browser-detection": 175,
              "./shared/errors": 177,
              "@braintree/wrap-promise": 49,
            },
          ],
          175: [
            function (e, t, n) {
              "use strict";
              t.exports = {
                supportsPopups: e(
                  "@braintree/browser-detection/supports-popups"
                ),
              };
            },
            { "@braintree/browser-detection/supports-popups": 37 },
          ],
          176: [
            function (e, t, n) {
              "use strict";
              t.exports = {
                LANDING_FRAME_NAME: "braintreemasterpasslanding",
                POPUP_WIDTH: 450,
                POPUP_HEIGHT: 660,
                MASTERPASS_VERSION: "v6",
                REQUIRED_OPTIONS_FOR_TOKENIZE: ["subtotal", "currencyCode"],
              };
            },
            {},
          ],
          177: [
            function (e, t, n) {
              "use strict";
              var r = e("../../lib/braintree-error");
              t.exports = {
                MASTERPASS_BROWSER_NOT_SUPPORTED: {
                  type: r.types.CUSTOMER,
                  code: "MASTERPASS_BROWSER_NOT_SUPPORTED",
                  message: "Browser is not supported.",
                },
                MASTERPASS_NOT_ENABLED: {
                  type: r.types.MERCHANT,
                  code: "MASTERPASS_NOT_ENABLED",
                  message: "Masterpass is not enabled for this merchant.",
                },
                MASTERPASS_TOKENIZE_MISSING_REQUIRED_OPTION: {
                  type: r.types.MERCHANT,
                  code: "MASTERPASS_TOKENIZE_MISSING_REQUIRED_OPTION",
                  message: "Missing required option for tokenize.",
                },
                MASTERPASS_TOKENIZATION_ALREADY_IN_PROGRESS: {
                  type: r.types.MERCHANT,
                  code: "MASTERPASS_TOKENIZATION_ALREADY_IN_PROGRESS",
                  message: "Masterpass tokenization is already in progress.",
                },
                MASTERPASS_ACCOUNT_TOKENIZATION_FAILED: {
                  type: r.types.NETWORK,
                  code: "MASTERPASS_ACCOUNT_TOKENIZATION_FAILED",
                  message: "Could not tokenize user's Masterpass account.",
                },
                MASTERPASS_POPUP_OPEN_FAILED: {
                  type: r.types.MERCHANT,
                  code: "MASTERPASS_POPUP_OPEN_FAILED",
                  message:
                    "Masterpass popup failed to open. Make sure to tokenize in response to a user action, such as a click.",
                },
                MASTERPASS_POPUP_MISSING_REQUIRED_PARAMETERS: {
                  type: r.types.MERCHANT,
                  code: "MASTERPASS_POPUP_MISSING_REQUIRED_PARAMETERS",
                  message:
                    "Masterpass popup failed to return all required parameters needed to continue tokenization.",
                },
                MASTERPASS_POPUP_CLOSED: {
                  type: r.types.CUSTOMER,
                  code: "MASTERPASS_POPUP_CLOSED",
                  message:
                    "Customer closed Masterpass popup before authorizing.",
                },
                MASTERPASS_INVALID_PAYMENT_OPTION: {
                  type: r.types.MERCHANT,
                  code: "MASTERPASS_INVALID_PAYMENT_OPTION",
                  message: "Masterpass payment options are invalid.",
                },
                MASTERPASS_FLOW_FAILED: {
                  type: r.types.NETWORK,
                  code: "MASTERPASS_FLOW_FAILED",
                  message: "Could not initialize Masterpass flow.",
                },
              };
            },
            { "../../lib/braintree-error": 131 },
          ],
          178: [
            function (e, t, n) {
              "use strict";
              var r = e("../../lib/analytics"),
                i = e("../../lib/assign").assign,
                o = e("framebus"),
                a = e("../../lib/convert-methods-to-error"),
                s = e("../../lib/generate-google-pay-configuration"),
                c = e("@braintree/iframer"),
                u = e("@braintree/uuid"),
                d = e("../../lib/use-min"),
                l = e("../../lib/methods"),
                p = e("../../lib/promise"),
                _ = e("@braintree/event-emitter"),
                E = e("../../lib/braintree-error"),
                h = "3.85.5",
                f = e("../shared/constants"),
                m = f.events,
                y = f.errors,
                A = e("@braintree/wrap-promise"),
                T = {
                  Visa: "visa",
                  MasterCard: "mastercard",
                  "American Express": "amex",
                  "Diners Club": "diners",
                  Discover: "discover",
                  JCB: "jcb",
                  UnionPay: "unionpay",
                  Maestro: "maestro",
                },
                I = "18278000977346790994";
              function N(e, t, n) {
                return (
                  e +
                  "/web/" +
                  h +
                  "/html/payment-request-frame" +
                  d(n) +
                  ".html#" +
                  t
                );
              }
              function O(e) {
                var t = e.enabledPaymentMethods || {};
                _.call(this);
                this._componentId = u();
                this._client = e.client;
                this._enabledPaymentMethods = {
                  basicCard: !1 !== t.basicCard,
                  googlePay: !1 !== t.googlePay,
                };
                this._googlePayVersion = 2 === e.googlePayVersion ? 2 : 1;
                this._googleMerchantId = I;
                this._supportedPaymentMethods =
                  this._constructDefaultSupportedPaymentMethods();
                this._defaultSupportedPaymentMethods = Object.keys(
                  this._supportedPaymentMethods
                ).map(
                  function (e) {
                    return this._supportedPaymentMethods[e];
                  }.bind(this)
                );
                this._bus = new o({ channel: this._componentId });
              }
              _.createChild(O);
              O.prototype._constructDefaultSupportedPaymentMethods =
                function () {
                  var e = this._client.getConfiguration(),
                    t = e.gatewayConfiguration.androidPay,
                    n = e.gatewayConfiguration.creditCards,
                    r = {};
                  this._enabledPaymentMethods.basicCard &&
                    n &&
                    n.supportedCardTypes.length > 0 &&
                    (r.basicCard = {
                      supportedMethods: "basic-card",
                      data: {
                        supportedNetworks: n.supportedCardTypes.reduce(
                          function (e, t) {
                            t in T && e.push(T[t]);
                            return e;
                          },
                          []
                        ),
                      },
                    });
                  this._enabledPaymentMethods.googlePay &&
                    t &&
                    t.enabled &&
                    (r.googlePay = {
                      supportedMethods: "https://google.com/pay",
                      data: s(
                        e,
                        this._googlePayVersion,
                        this._googleMerchantId
                      ),
                    });
                  return r;
                };
              O.prototype.initialize = function () {
                var e = this._client.getConfiguration(),
                  t = this;
                this._frame = c({
                  allowPaymentRequest: !0,
                  name: "braintree-payment-request-frame",
                  class: "braintree-payment-request-frame",
                  height: 0,
                  width: 0,
                  style: { position: "absolute", left: "-9999px" },
                  title: "Secure Payment Frame",
                });
                return 0 === this._defaultSupportedPaymentMethods.length
                  ? p.reject(
                      new E(
                        y.PAYMENT_REQUEST_NO_VALID_SUPPORTED_PAYMENT_METHODS
                      )
                    )
                  : new p(function (n) {
                      t._bus.on(m.FRAME_READY, function (e) {
                        e(t._client);
                      });
                      t._bus.on(m.FRAME_CAN_MAKE_REQUESTS, function () {
                        r.sendEvent(t._client, "payment-request.initialized");
                        t._bus.on(m.SHIPPING_ADDRESS_CHANGE, function (e) {
                          var n = {
                            target: { shippingAddress: e },
                            updateWith: function (e) {
                              t._bus.emit(m.UPDATE_SHIPPING_ADDRESS, e);
                            },
                          };
                          t._emit("shippingAddressChange", n);
                          t._emit("shippingaddresschange", n);
                        });
                        t._bus.on(m.SHIPPING_OPTION_CHANGE, function (e) {
                          var n = {
                            target: { shippingOption: e },
                            updateWith: function (e) {
                              t._bus.emit(m.UPDATE_SHIPPING_OPTION, e);
                            },
                          };
                          t._emit("shippingOptionChange", n);
                          t._emit("shippingoptionchange", n);
                        });
                        n(t);
                      });
                      t._frame.src = N(
                        e.gatewayConfiguration.assetsUrl,
                        t._componentId,
                        e.isDebug
                      );
                      document.body.appendChild(t._frame);
                    });
              };
              O.prototype.createSupportedPaymentMethodsConfiguration =
                function (e, t) {
                  var n;
                  if (!e)
                    throw new E(
                      y.PAYMENT_REQUEST_CREATE_SUPPORTED_PAYMENT_METHODS_CONFIGURATION_MUST_INCLUDE_TYPE
                    );
                  if (!this._enabledPaymentMethods[e])
                    throw new E(
                      y.PAYMENT_REQUEST_CREATE_SUPPORTED_PAYMENT_METHODS_CONFIGURATION_TYPE_NOT_ENABLED
                    );
                  (n = i({}, this._supportedPaymentMethods[e])).data = i(
                    {},
                    n.data,
                    t
                  );
                  return n;
                };
              O.prototype.tokenize = function (e) {
                var t = this;
                return new p(function (n, i) {
                  t._bus.emit(
                    m.PAYMENT_REQUEST_INITIALIZED,
                    {
                      supportedPaymentMethods:
                        e.supportedPaymentMethods ||
                        t._defaultSupportedPaymentMethods,
                      details: e.details,
                      options: e.options,
                    },
                    function (e) {
                      var o = e[0],
                        a = e[1];
                      if (o) i(t._formatTokenizationError(o));
                      else {
                        r.sendEvent(
                          t._client,
                          "payment-request.tokenize.succeeded"
                        );
                        n({
                          nonce: a.nonce,
                          type: a.type,
                          description: a.description,
                          details: {
                            rawPaymentResponse: a.details.rawPaymentResponse,
                            cardType: a.details.cardType,
                            lastFour: a.details.lastFour,
                            lastTwo: a.details.lastTwo,
                          },
                          binData: a.binData,
                        });
                      }
                    }
                  );
                });
              };
              O.prototype.canMakePayment = function (e) {
                var t,
                  n = this;
                if (!window.PaymentRequest) {
                  r.sendEvent(
                    n._client,
                    "payment-request.can-make-payment.not-available"
                  );
                  return p.resolve(!1);
                }
                if (e.supportedPaymentMethods) {
                  e.supportedPaymentMethods.forEach(function (e) {
                    var n = e.supportedMethods;
                    n in f.SUPPORTED_METHODS || (t = n);
                  });
                  if (t)
                    return p.reject(
                      new E({
                        type: y.PAYMENT_REQUEST_UNSUPPORTED_PAYMENT_METHOD.type,
                        code: y.PAYMENT_REQUEST_UNSUPPORTED_PAYMENT_METHOD.code,
                        message: t + " is not a supported payment method.",
                      })
                    );
                }
                return new p(function (t, i) {
                  n._bus.emit(
                    m.CAN_MAKE_PAYMENT,
                    {
                      supportedPaymentMethods:
                        e.supportedPaymentMethods ||
                        n._defaultSupportedPaymentMethods,
                      details: e.details,
                      options: e.options,
                    },
                    function (e) {
                      var o = e[0],
                        a = e[1];
                      if (o) i(n._formatCanMakePaymentError(o));
                      else {
                        r.sendEvent(
                          n._client,
                          "payment-request.can-make-payment." + a
                        );
                        t(a);
                      }
                    }
                  );
                });
              };
              O.prototype.teardown = function () {
                this._bus.teardown();
                this._frame.parentNode.removeChild(this._frame);
                a(this, l(O.prototype));
                r.sendEvent(this._client, "payment-request.teardown-completed");
                return p.resolve();
              };
              O.prototype._formatTokenizationError = function (e) {
                var t;
                switch (e.name) {
                  case "AbortError":
                    t = new E({
                      type: y.PAYMENT_REQUEST_CANCELED.type,
                      code: y.PAYMENT_REQUEST_CANCELED.code,
                      message: y.PAYMENT_REQUEST_CANCELED.message,
                      details: { originalError: e },
                    });
                    r.sendEvent(
                      this._client,
                      "payment-request.tokenize.canceled"
                    );
                    return t;
                  case "PAYMENT_REQUEST_INITIALIZATION_FAILED":
                    t = new E({
                      type: y.PAYMENT_REQUEST_INITIALIZATION_MISCONFIGURED.type,
                      code: y.PAYMENT_REQUEST_INITIALIZATION_MISCONFIGURED.code,
                      message:
                        y.PAYMENT_REQUEST_INITIALIZATION_MISCONFIGURED.message,
                      details: { originalError: e },
                    });
                    break;
                  case "BRAINTREE_GATEWAY_GOOGLE_PAYMENT_TOKENIZATION_ERROR":
                    t = new E({
                      type: y.PAYMENT_REQUEST_GOOGLE_PAYMENT_FAILED_TO_TOKENIZE
                        .type,
                      code: y.PAYMENT_REQUEST_GOOGLE_PAYMENT_FAILED_TO_TOKENIZE
                        .code,
                      message:
                        y.PAYMENT_REQUEST_GOOGLE_PAYMENT_FAILED_TO_TOKENIZE
                          .message,
                      details: { originalError: e },
                    });
                    break;
                  case "BRAINTREE_GATEWAY_GOOGLE_PAYMENT_PARSING_ERROR":
                    t = new E({
                      type: y.PAYMENT_REQUEST_GOOGLE_PAYMENT_PARSING_ERROR.type,
                      code: y.PAYMENT_REQUEST_GOOGLE_PAYMENT_PARSING_ERROR.code,
                      message:
                        y.PAYMENT_REQUEST_GOOGLE_PAYMENT_PARSING_ERROR.message,
                      details: { originalError: e },
                    });
                    break;
                  default:
                    t = new E({
                      code: y.PAYMENT_REQUEST_NOT_COMPLETED.code,
                      type: e.type || E.types.CUSTOMER,
                      message: y.PAYMENT_REQUEST_NOT_COMPLETED.message,
                      details: { originalError: e },
                    });
                }
                r.sendEvent(this._client, "payment-request.tokenize.failed");
                return t;
              };
              O.prototype._formatCanMakePaymentError = function (e) {
                var t;
                switch (e.name) {
                  case "PAYMENT_REQUEST_INITIALIZATION_FAILED":
                    t = new E({
                      type: y.PAYMENT_REQUEST_INITIALIZATION_MISCONFIGURED.type,
                      code: y.PAYMENT_REQUEST_INITIALIZATION_MISCONFIGURED.code,
                      message:
                        y.PAYMENT_REQUEST_INITIALIZATION_MISCONFIGURED.message,
                      details: { originalError: e },
                    });
                    break;
                  case "NotAllowedError":
                    t = new E({
                      type: y.PAYMENT_REQUEST_CAN_MAKE_PAYMENT_NOT_ALLOWED.type,
                      code: y.PAYMENT_REQUEST_CAN_MAKE_PAYMENT_NOT_ALLOWED.code,
                      message:
                        y.PAYMENT_REQUEST_CAN_MAKE_PAYMENT_NOT_ALLOWED.message,
                      details: { originalError: e },
                    });
                    break;
                  default:
                    t = new E({
                      code: y.PAYMENT_REQUEST_CAN_MAKE_PAYMENT_FAILED.code,
                      type: y.PAYMENT_REQUEST_CAN_MAKE_PAYMENT_FAILED.type,
                      message:
                        y.PAYMENT_REQUEST_CAN_MAKE_PAYMENT_FAILED.message,
                      details: { originalError: e },
                    });
                }
                r.sendEvent(
                  this._client,
                  "payment-request.can-make-payment.failed"
                );
                return t;
              };
              t.exports = A.wrapPrototype(O);
            },
            {
              "../../lib/analytics": 126,
              "../../lib/assign": 128,
              "../../lib/braintree-error": 131,
              "../../lib/convert-methods-to-error": 134,
              "../../lib/generate-google-pay-configuration": 156,
              "../../lib/methods": 162,
              "../../lib/promise": 164,
              "../../lib/use-min": 167,
              "../shared/constants": 180,
              "@braintree/event-emitter": 39,
              "@braintree/iframer": 41,
              "@braintree/uuid": 45,
              "@braintree/wrap-promise": 49,
              framebus: 58,
            },
          ],
          179: [
            function (e, t, n) {
              "use strict";
              var r = e("./external/payment-request"),
                i = e("../lib/basic-component-verification"),
                o = e("../lib/create-deferred-client"),
                a = e("../lib/create-assets-url"),
                s = e("@braintree/wrap-promise"),
                c = "3.85.5";
              function u(e) {
                var t = "Payment Request";
                return i
                  .verify({
                    name: t,
                    client: e.client,
                    authorization: e.authorization,
                  })
                  .then(function () {
                    return o.create({
                      authorization: e.authorization,
                      client: e.client,
                      debug: e.debug,
                      assetsUrl: a.create(e.authorization),
                      name: t,
                    });
                  })
                  .then(function (t) {
                    e.client = t;
                    return new r(e).initialize();
                  });
              }
              t.exports = { create: s(u), VERSION: c };
            },
            {
              "../lib/basic-component-verification": 129,
              "../lib/create-assets-url": 136,
              "../lib/create-deferred-client": 138,
              "./external/payment-request": 178,
              "@braintree/wrap-promise": 49,
            },
          ],
          180: [
            function (e, t, n) {
              "use strict";
              var r = e("../../lib/enumerate"),
                i = e("./errors"),
                o = {};
              o.events = r(
                [
                  "CAN_MAKE_PAYMENT",
                  "FRAME_READY",
                  "FRAME_CAN_MAKE_REQUESTS",
                  "PAYMENT_REQUEST_INITIALIZED",
                  "SHIPPING_ADDRESS_CHANGE",
                  "UPDATE_SHIPPING_ADDRESS",
                  "SHIPPING_OPTION_CHANGE",
                  "UPDATE_SHIPPING_OPTION",
                ],
                "payment-request:"
              );
              o.errors = i;
              o.SUPPORTED_METHODS = {
                "basic-card": !0,
                "https://google.com/pay": !0,
              };
              t.exports = o;
            },
            { "../../lib/enumerate": 141, "./errors": 181 },
          ],
          181: [
            function (e, t, n) {
              "use strict";
              var r = e("../../lib/braintree-error");
              t.exports = {
                PAYMENT_REQUEST_NO_VALID_SUPPORTED_PAYMENT_METHODS: {
                  type: r.types.MERCHANT,
                  code: "PAYMENT_REQUEST_NO_VALID_SUPPORTED_PAYMENT_METHODS",
                  message:
                    "There are no supported payment methods associated with this account.",
                },
                PAYMENT_REQUEST_CANCELED: {
                  type: r.types.CUSTOMER,
                  code: "PAYMENT_REQUEST_CANCELED",
                  message: "Payment request was canceled.",
                },
                PAYMENT_REQUEST_INITIALIZATION_MISCONFIGURED: {
                  type: r.types.MERCHANT,
                  code: "PAYMENT_REQUEST_INITIALIZATION_MISCONFIGURED",
                  message:
                    "Something went wrong when configuring the payment request.",
                },
                PAYMENT_REQUEST_CAN_MAKE_PAYMENT_FAILED: {
                  type: r.types.UNKNOWN,
                  code: "PAYMENT_REQUEST_CAN_MAKE_PAYMENT_FAILED",
                  message: "Something went wrong when calling `canMakePayment`",
                },
                PAYMENT_REQUEST_CAN_MAKE_PAYMENT_NOT_ALLOWED: {
                  type: r.types.MERCHANT,
                  code: "PAYMENT_REQUEST_CAN_MAKE_PAYMENT_NOT_ALLOWED",
                  message:
                    "Something went wrong when calling `canMakePayment`. Most likely, `canMakePayment` was called multiple times with different supportedMethods configurations.",
                },
                PAYMENT_REQUEST_UNSUPPORTED_PAYMENT_METHOD: {
                  type: r.types.MERCHANT,
                  code: "PAYMENT_REQUEST_UNSUPPORTED_PAYMENT_METHOD",
                },
                PAYMENT_REQUEST_GOOGLE_PAYMENT_FAILED_TO_TOKENIZE: {
                  type: r.types.MERCHANT,
                  code: "PAYMENT_REQUEST_GOOGLE_PAYMENT_FAILED_TO_TOKENIZE",
                  message:
                    "Something went wrong when tokenizing the Google Pay card.",
                },
                PAYMENT_REQUEST_GOOGLE_PAYMENT_PARSING_ERROR: {
                  type: r.types.UNKNOWN,
                  code: "PAYMENT_REQUEST_GOOGLE_PAYMENT_PARSING_ERROR",
                  message:
                    "Something went wrong when tokenizing the Google Pay card.",
                },
                PAYMENT_REQUEST_NOT_COMPLETED: {
                  code: "PAYMENT_REQUEST_NOT_COMPLETED",
                  message: "Payment request could not be completed.",
                },
                PAYMENT_REQUEST_CREATE_SUPPORTED_PAYMENT_METHODS_CONFIGURATION_MUST_INCLUDE_TYPE:
                  {
                    type: r.types.MERCHANT,
                    code: "PAYMENT_REQUEST_CREATE_SUPPORTED_PAYMENT_METHODS_CONFIGURATION_MUST_INCLUDE_TYPE",
                    message:
                      "createSupportedPaymentMethodsConfiguration must include a type parameter.",
                  },
                PAYMENT_REQUEST_CREATE_SUPPORTED_PAYMENT_METHODS_CONFIGURATION_TYPE_NOT_ENABLED:
                  {
                    type: r.types.MERCHANT,
                    code: "PAYMENT_REQUEST_CREATE_SUPPORTED_PAYMENT_METHODS_CONFIGURATION_TYPE_NOT_ENABLED",
                    message:
                      "createSupportedPaymentMethodsConfiguration type parameter must be valid or enabled.",
                  },
              };
            },
            { "../../lib/braintree-error": 131 },
          ],
          182: [
            function (e, t, n) {
              "use strict";
              var r = e("../lib/braintree-error");
              t.exports = {
                PAYPAL_NOT_ENABLED: {
                  type: r.types.MERCHANT,
                  code: "PAYPAL_NOT_ENABLED",
                  message: "PayPal is not enabled for this merchant.",
                },
                PAYPAL_SANDBOX_ACCOUNT_NOT_LINKED: {
                  type: r.types.MERCHANT,
                  code: "PAYPAL_SANDBOX_ACCOUNT_NOT_LINKED",
                  message:
                    "A linked PayPal Sandbox account is required to use PayPal Checkout in Sandbox. See https://developer.paypal.com/braintree/docs/guides/paypal/testing-go-live#linked-paypal-testing for details on linking your PayPal sandbox with Braintree.",
                },
                PAYPAL_ACCOUNT_TOKENIZATION_FAILED: {
                  type: r.types.NETWORK,
                  code: "PAYPAL_ACCOUNT_TOKENIZATION_FAILED",
                  message: "Could not tokenize user's PayPal account.",
                },
                PAYPAL_FLOW_FAILED: {
                  type: r.types.NETWORK,
                  code: "PAYPAL_FLOW_FAILED",
                  message: "Could not initialize PayPal flow.",
                },
                PAYPAL_FLOW_OPTION_REQUIRED: {
                  type: r.types.MERCHANT,
                  code: "PAYPAL_FLOW_OPTION_REQUIRED",
                  message: "PayPal flow property is invalid or missing.",
                },
                PAYPAL_START_VAULT_INITIATED_CHECKOUT_PARAM_REQUIRED: {
                  type: r.types.MERCHANT,
                  code: "PAYPAL_START_VAULT_INITIATED_CHECKOUT_PARAM_REQUIRED",
                },
                PAYPAL_START_VAULT_INITIATED_CHECKOUT_SETUP_FAILED: {
                  type: r.types.NETWORK,
                  code: "PAYPAL_START_VAULT_INITIATED_CHECKOUT_SETUP_FAILED",
                  message:
                    "Something went wrong when setting up the checkout workflow.",
                },
                PAYPAL_START_VAULT_INITIATED_CHECKOUT_POPUP_OPEN_FAILED: {
                  type: r.types.MERCHANT,
                  code: "PAYPAL_START_VAULT_INITIATED_CHECKOUT_POPUP_OPEN_FAILED",
                  message:
                    "PayPal popup failed to open, make sure to initiate the vault checkout in response to a user action.",
                },
                PAYPAL_START_VAULT_INITIATED_CHECKOUT_CANCELED: {
                  type: r.types.CUSTOMER,
                  code: "PAYPAL_START_VAULT_INITIATED_CHECKOUT_CANCELED",
                  message: "Customer closed PayPal popup before authorizing.",
                },
                PAYPAL_START_VAULT_INITIATED_CHECKOUT_IN_PROGRESS: {
                  type: r.types.MERCHANT,
                  code: "PAYPAL_START_VAULT_INITIATED_CHECKOUT_IN_PROGRESS",
                  message: "Vault initiated checkout already in progress.",
                },
                PAYPAL_INVALID_PAYMENT_OPTION: {
                  type: r.types.MERCHANT,
                  code: "PAYPAL_INVALID_PAYMENT_OPTION",
                  message: "PayPal payment options are invalid.",
                },
              };
            },
            { "../lib/braintree-error": 131 },
          ],
          183: [
            function (e, t, n) {
              "use strict";
              var r = e("../lib/basic-component-verification"),
                i = e("@braintree/wrap-promise"),
                o = e("./paypal-checkout"),
                a = "3.85.5";
              function s(e) {
                var t = "PayPal Checkout";
                return r
                  .verify({
                    name: t,
                    client: e.client,
                    authorization: e.authorization,
                  })
                  .then(function () {
                    return new o(e)._initialize(e);
                  });
              }
              function c() {
                return !0;
              }
              t.exports = { create: i(s), isSupported: c, VERSION: a };
            },
            {
              "../lib/basic-component-verification": 129,
              "./paypal-checkout": 184,
              "@braintree/wrap-promise": 49,
            },
          ],
          184: [
            function (e, t, n) {
              "use strict";
              var r = e("../lib/analytics"),
                i = e("../lib/assign").assign,
                o = e("../lib/create-deferred-client"),
                a = e("../lib/create-assets-url"),
                s = e("../lib/promise"),
                c = e("@braintree/extended-promise"),
                u = e("@braintree/wrap-promise"),
                d = e("../lib/braintree-error"),
                l = e("../lib/convert-to-braintree-error"),
                p = e("./errors"),
                _ = e("../paypal/shared/constants"),
                E = e("../lib/frame-service/external"),
                h = e("../lib/create-authorization-data"),
                f = e("../lib/methods"),
                m = e("../lib/use-min"),
                y = e("../lib/convert-methods-to-error"),
                A = e("../lib/querystring"),
                T = "3.85.5",
                I = e("../lib/constants").INTEGRATION_TIMEOUT_MS,
                N = [
                  "amount",
                  "currency",
                  "vaultInitiatedCheckoutPaymentMethodToken",
                ],
                O = "https://www.{ENV}paypal.com/smart/buttons/preload";
              function b(e) {
                this._merchantAccountId = e.merchantAccountId;
                this._autoSetDataUserIdToken = Boolean(
                  e.autoSetDataUserIdToken
                );
              }
              b.prototype._initialize = function (e) {
                var t;
                if (e.client) {
                  t = e.client.getConfiguration();
                  this._authorizationInformation = {
                    fingerprint: t.authorizationFingerprint,
                    environment: t.gatewayConfiguration.environment,
                  };
                } else {
                  t = h(e.authorization);
                  this._authorizationInformation = {
                    fingerprint: t.attrs.authorizationFingerprint,
                    environment: t.environment,
                  };
                }
                this._clientPromise = o
                  .create({
                    authorization: e.authorization,
                    client: e.client,
                    debug: e.debug,
                    assetsUrl: a.create(e.authorization),
                    name: "PayPal Checkout",
                  })
                  .then(
                    function (e) {
                      this._configuration = e.getConfiguration();
                      this._merchantAccountId ||
                        (this._configuration.gatewayConfiguration.paypalEnabled
                          ? !0 ===
                              this._configuration.gatewayConfiguration.paypal
                                .environmentNoNetwork &&
                            (this._setupError = new d(
                              p.PAYPAL_SANDBOX_ACCOUNT_NOT_LINKED
                            ))
                          : (this._setupError = new d(p.PAYPAL_NOT_ENABLED)));
                      if (this._setupError) return s.reject(this._setupError);
                      r.sendEvent(e, "paypal-checkout.initialized");
                      this._frameServicePromise = this._setupFrameService(e);
                      return e;
                    }.bind(this)
                  );
                return e.client
                  ? this._clientPromise.then(
                      function () {
                        return this;
                      }.bind(this)
                    )
                  : s.resolve(this);
              };
              b.prototype._setupFrameService = function (e) {
                var t = new c(),
                  n = e.getConfiguration(),
                  i = setTimeout(function () {
                    r.sendEvent(e, "paypal-checkout.frame-service.timed-out");
                    t.reject(
                      new d(
                        p.PAYPAL_START_VAULT_INITIATED_CHECKOUT_SETUP_FAILED
                      )
                    );
                  }, I);
                this._assetsUrl =
                  n.gatewayConfiguration.paypal.assetsUrl + "/web/" + T;
                this._isDebug = n.isDebug;
                this._loadingFrameUrl =
                  this._assetsUrl +
                  "/html/paypal-landing-frame" +
                  m(this._isDebug) +
                  ".html";
                E.create(
                  {
                    name: "braintreepaypallanding",
                    dispatchFrameUrl:
                      this._assetsUrl +
                      "/html/dispatch-frame" +
                      m(this._isDebug) +
                      ".html",
                    openFrameUrl: this._loadingFrameUrl,
                  },
                  function (e) {
                    this._frameService = e;
                    clearTimeout(i);
                    t.resolve();
                  }.bind(this)
                );
                return t;
              };
              b.prototype.createPayment = function (e) {
                if (!e || !_.FLOW_ENDPOINTS.hasOwnProperty(e.flow))
                  return s.reject(new d(p.PAYPAL_FLOW_OPTION_REQUIRED));
                r.sendEvent(
                  this._clientPromise,
                  "paypal-checkout.createPayment"
                );
                return this._createPaymentResource(e).then(function (t) {
                  return "checkout" === e.flow
                    ? t.paymentResource.redirectUrl.match(/EC-\w+/)[0]
                    : t.agreementSetup.tokenId;
                });
              };
              b.prototype._createPaymentResource = function (e, t) {
                var n = this,
                  i = "paypal_hermes/" + _.FLOW_ENDPOINTS[e.flow];
                delete this.intentFromCreatePayment;
                t = t || {};
                !0 === e.offerCredit &&
                  r.sendEvent(
                    this._clientPromise,
                    "paypal-checkout.credit.offered"
                  );
                return this._clientPromise
                  .then(function (r) {
                    return r
                      .request({
                        endpoint: i,
                        method: "post",
                        data: n._formatPaymentResourceData(e, t),
                      })
                      .then(function (t) {
                        n.intentFromCreatePayment = e.intent;
                        return t;
                      });
                  })
                  .catch(function (e) {
                    return n._setupError
                      ? s.reject(n._setupError)
                      : 422 === (e.details && e.details.httpStatus)
                      ? s.reject(
                          new d({
                            type: p.PAYPAL_INVALID_PAYMENT_OPTION.type,
                            code: p.PAYPAL_INVALID_PAYMENT_OPTION.code,
                            message: p.PAYPAL_INVALID_PAYMENT_OPTION.message,
                            details: { originalError: e },
                          })
                        )
                      : s.reject(
                          l(e, {
                            type: p.PAYPAL_FLOW_FAILED.type,
                            code: p.PAYPAL_FLOW_FAILED.code,
                            message: p.PAYPAL_FLOW_FAILED.message,
                          })
                        );
                  });
              };
              b.prototype.startVaultInitiatedCheckout = function (e) {
                var t,
                  n = this;
                if (this._vaultInitiatedCheckoutInProgress) {
                  r.sendEvent(
                    this._clientPromise,
                    "paypal-checkout.startVaultInitiatedCheckout.error.already-in-progress"
                  );
                  return s.reject(
                    new d(p.PAYPAL_START_VAULT_INITIATED_CHECKOUT_IN_PROGRESS)
                  );
                }
                N.forEach(function (n) {
                  e.hasOwnProperty(n) || (t = n);
                });
                if (t)
                  return s.reject(
                    new d({
                      type: p
                        .PAYPAL_START_VAULT_INITIATED_CHECKOUT_PARAM_REQUIRED
                        .type,
                      code: p
                        .PAYPAL_START_VAULT_INITIATED_CHECKOUT_PARAM_REQUIRED
                        .code,
                      message: "Required param " + t + " is missing.",
                    })
                  );
                this._vaultInitiatedCheckoutInProgress = !0;
                this._addModalBackdrop(e);
                e = i({}, e, { flow: "checkout" });
                r.sendEvent(
                  this._clientPromise,
                  "paypal-checkout.startVaultInitiatedCheckout.started"
                );
                return this._waitForVaultInitiatedCheckoutDependencies()
                  .then(function () {
                    var t = new c(),
                      r = n
                        ._createPaymentResource(e, {
                          returnUrl:
                            n._constructVaultCheckutUrl("redirect-frame"),
                          cancelUrl:
                            n._constructVaultCheckutUrl("cancel-frame"),
                        })
                        .then(function (e) {
                          var r = e.paymentResource.redirectUrl;
                          n._frameService.redirect(r);
                          return t;
                        });
                    n._frameService.open({}, n._createFrameServiceCallback(t));
                    return r;
                  })
                  .catch(function (e) {
                    n._vaultInitiatedCheckoutInProgress = !1;
                    n._removeModalBackdrop();
                    if ("FRAME_SERVICE_FRAME_CLOSED" === e.code) {
                      r.sendEvent(
                        n._clientPromise,
                        "paypal-checkout.startVaultInitiatedCheckout.canceled.by-customer"
                      );
                      return s.reject(
                        new d(p.PAYPAL_START_VAULT_INITIATED_CHECKOUT_CANCELED)
                      );
                    }
                    n._frameService && n._frameService.close();
                    if (
                      e.code &&
                      e.code.indexOf("FRAME_SERVICE_FRAME_OPEN_FAILED") > -1
                    ) {
                      r.sendEvent(
                        n._clientPromise,
                        "paypal-checkout.startVaultInitiatedCheckout.failed.popup-not-opened"
                      );
                      return s.reject(
                        new d({
                          code: p
                            .PAYPAL_START_VAULT_INITIATED_CHECKOUT_POPUP_OPEN_FAILED
                            .code,
                          type: p
                            .PAYPAL_START_VAULT_INITIATED_CHECKOUT_POPUP_OPEN_FAILED
                            .type,
                          message:
                            p
                              .PAYPAL_START_VAULT_INITIATED_CHECKOUT_POPUP_OPEN_FAILED
                              .message,
                          details: { originalError: e },
                        })
                      );
                    }
                    return s.reject(e);
                  })
                  .then(function (e) {
                    n._frameService.close();
                    n._vaultInitiatedCheckoutInProgress = !1;
                    n._removeModalBackdrop();
                    r.sendEvent(
                      n._clientPromise,
                      "paypal-checkout.startVaultInitiatedCheckout.succeeded"
                    );
                    return s.resolve(e);
                  });
              };
              b.prototype._addModalBackdrop = function (e) {
                if (!e.optOutOfModalBackdrop) {
                  if (!this._modalBackdrop) {
                    this._modalBackdrop = document.createElement("div");
                    this._modalBackdrop.setAttribute(
                      "data-braintree-paypal-vault-initiated-checkout-modal",
                      !0
                    );
                    this._modalBackdrop.style.position = "fixed";
                    this._modalBackdrop.style.top = 0;
                    this._modalBackdrop.style.bottom = 0;
                    this._modalBackdrop.style.left = 0;
                    this._modalBackdrop.style.right = 0;
                    this._modalBackdrop.style.zIndex = 9999;
                    this._modalBackdrop.style.background = "black";
                    this._modalBackdrop.style.opacity = "0.7";
                    this._modalBackdrop.addEventListener(
                      "click",
                      function () {
                        this.focusVaultInitiatedCheckoutWindow();
                      }.bind(this)
                    );
                  }
                  document.body.appendChild(this._modalBackdrop);
                }
              };
              b.prototype._removeModalBackdrop = function () {
                this._modalBackdrop &&
                  this._modalBackdrop.parentNode &&
                  this._modalBackdrop.parentNode.removeChild(
                    this._modalBackdrop
                  );
              };
              b.prototype.closeVaultInitiatedCheckoutWindow = function () {
                this._vaultInitiatedCheckoutInProgress &&
                  r.sendEvent(
                    this._clientPromise,
                    "paypal-checkout.startVaultInitiatedCheckout.canceled.by-merchant"
                  );
                return this._waitForVaultInitiatedCheckoutDependencies().then(
                  function () {
                    this._frameService.close();
                  }.bind(this)
                );
              };
              b.prototype.focusVaultInitiatedCheckoutWindow = function () {
                return this._waitForVaultInitiatedCheckoutDependencies().then(
                  function () {
                    this._frameService.focus();
                  }.bind(this)
                );
              };
              b.prototype._createFrameServiceCallback = function (e) {
                var t = this;
                return function (n, r) {
                  if (n) e.reject(n);
                  else if (r) {
                    t._frameService.redirect(t._loadingFrameUrl);
                    t.tokenizePayment({
                      paymentToken: r.token,
                      payerID: r.PayerID,
                      paymentID: r.paymentId,
                    })
                      .then(function (t) {
                        e.resolve(t);
                      })
                      .catch(function (t) {
                        e.reject(t);
                      });
                  }
                };
              };
              b.prototype._waitForVaultInitiatedCheckoutDependencies =
                function () {
                  var e = this;
                  return this._clientPromise.then(function () {
                    return e._frameServicePromise;
                  });
                };
              b.prototype._constructVaultCheckutUrl = function (e) {
                var t = this._frameService._serviceId;
                return (
                  this._assetsUrl +
                  "/html/" +
                  e +
                  m(this._isDebug) +
                  ".html?channel=" +
                  t
                );
              };
              b.prototype.tokenizePayment = function (e) {
                var t,
                  n = this,
                  i = !0,
                  o = {
                    flow: e.billingToken && !e.paymentID ? "vault" : "checkout",
                    intent: e.intent || this.intentFromCreatePayment,
                  },
                  a = {
                    ecToken: e.paymentToken,
                    billingToken: e.billingToken,
                    payerId: e.payerID,
                    paymentId: e.paymentID,
                    shippingOptionsId: e.shippingOptionsId,
                  };
                e.hasOwnProperty("vault") && (i = e.vault);
                o.vault = i;
                r.sendEvent(
                  this._clientPromise,
                  "paypal-checkout.tokenization.started"
                );
                return this._clientPromise
                  .then(function (e) {
                    return e.request({
                      endpoint: "payment_methods/paypal_accounts",
                      method: "post",
                      data: n._formatTokenizeData(o, a),
                    });
                  })
                  .then(function (e) {
                    t = n._formatTokenizePayload(e);
                    r.sendEvent(
                      n._clientPromise,
                      "paypal-checkout.tokenization.success"
                    );
                    t.creditFinancingOffered &&
                      r.sendEvent(
                        n._clientPromise,
                        "paypal-checkout.credit.accepted"
                      );
                    return t;
                  })
                  .catch(function (e) {
                    if (n._setupError) return s.reject(n._setupError);
                    r.sendEvent(
                      n._clientPromise,
                      "paypal-checkout.tokenization.failed"
                    );
                    return s.reject(
                      l(e, {
                        type: p.PAYPAL_ACCOUNT_TOKENIZATION_FAILED.type,
                        code: p.PAYPAL_ACCOUNT_TOKENIZATION_FAILED.code,
                        message: p.PAYPAL_ACCOUNT_TOKENIZATION_FAILED.message,
                      })
                    );
                  });
              };
              b.prototype.getClientId = function () {
                return this._clientPromise.then(function (e) {
                  return e.getConfiguration().gatewayConfiguration.paypal.clientId;
                });
              };
              b.prototype.loadPayPalSDK = function (e) {
                var t,
                  n = new c(),
                  r = (e && e.dataAttributes) || {},
                  o = r["user-id-token"] || r["data-user-id-token"];
                o ||
                  (o =
                    this._authorizationInformation.fingerprint &&
                    this._authorizationInformation.fingerprint.split("?")[0]);
                this._paypalScript = document.createElement("script");
                delete (e = i({}, { components: "buttons" }, e)).dataAttributes;
                if (e.vault) e.intent = e.intent || "tokenize";
                else {
                  e.intent = e.intent || "authorize";
                  e.currency = e.currency || "USD";
                }
                t = "https://www.paypal.com/sdk/js?";
                this._paypalScript.onload = function () {
                  n.resolve();
                };
                Object.keys(r).forEach(
                  function (e) {
                    this._paypalScript.setAttribute(
                      "data-" + e.replace(/^data\-/, ""),
                      r[e]
                    );
                  }.bind(this)
                );
                (e["client-id"]
                  ? s.resolve(e["client-id"])
                  : this.getClientId()
                ).then(
                  function (n) {
                    e["client-id"] = n;
                    if (this._autoSetDataUserIdToken && o) {
                      this._paypalScript.setAttribute("data-user-id-token", o);
                      this._attachPreloadPixel({
                        id: n,
                        userIdToken: o,
                        amount: r.amount,
                        currency: e.currency,
                        merchantId: e["merchant-id"],
                      });
                    }
                    this._paypalScript.src = A.queryify(t, e);
                    document.head.insertBefore(
                      this._paypalScript,
                      document.head.firstElementChild
                    );
                  }.bind(this)
                );
                return n.then(
                  function () {
                    return this;
                  }.bind(this)
                );
              };
              b.prototype._attachPreloadPixel = function (e) {
                var t,
                  n = e.id,
                  r = e.userIdToken,
                  i =
                    "production" === this._authorizationInformation.environment
                      ? ""
                      : "sandbox.",
                  o = O.replace("{ENV}", i),
                  a = { "client-id": n, "user-id-token": r };
                e.amount && (a.amount = e.amount);
                e.currency && (a.currency = e.currency);
                e.merchantId && (a["merchant-id"] = e.merchantId);
                (t = new XMLHttpRequest()).open("GET", A.queryify(o, a));
                t.send();
              };
              b.prototype._formatPaymentResourceData = function (e, t) {
                var n,
                  r = this._configuration.gatewayConfiguration,
                  i = e.intent,
                  o = {
                    returnUrl:
                      t.returnUrl || "https://www.paypal.com/checkoutnow/error",
                    cancelUrl:
                      t.cancelUrl || "https://www.paypal.com/checkoutnow/error",
                    offerPaypalCredit: !0 === e.offerCredit,
                    merchantAccountId: this._merchantAccountId,
                    experienceProfile: {
                      brandName: e.displayName || r.paypal.displayName,
                      localeCode: e.locale,
                      noShipping: (!e.enableShippingAddress).toString(),
                      addressOverride: !1 === e.shippingAddressEditable,
                      landingPageType: e.landingPageType,
                    },
                    shippingOptions: e.shippingOptions,
                  };
                if ("checkout" === e.flow) {
                  o.amount = e.amount;
                  o.currencyIsoCode = e.currency;
                  o.requestBillingAgreement = e.requestBillingAgreement;
                  if (i) {
                    "capture" === i && (i = "sale");
                    o.intent = i;
                  }
                  e.hasOwnProperty("lineItems") && (o.lineItems = e.lineItems);
                  e.hasOwnProperty(
                    "vaultInitiatedCheckoutPaymentMethodToken"
                  ) &&
                    (o.vaultInitiatedCheckoutPaymentMethodToken =
                      e.vaultInitiatedCheckoutPaymentMethodToken);
                  e.hasOwnProperty("shippingOptions") &&
                    (o.shippingOptions = e.shippingOptions);
                  for (n in e.shippingAddressOverride)
                    e.shippingAddressOverride.hasOwnProperty(n) &&
                      (o[n] = e.shippingAddressOverride[n]);
                  e.hasOwnProperty("billingAgreementDetails") &&
                    (o.billingAgreementDetails = e.billingAgreementDetails);
                } else {
                  o.shippingAddress = e.shippingAddressOverride;
                  e.billingAgreementDescription &&
                    (o.description = e.billingAgreementDescription);
                }
                this._riskCorrelationId = e.riskCorrelationId;
                e.riskCorrelationId &&
                  (o.correlationId = this._riskCorrelationId);
                return o;
              };
              b.prototype._formatTokenizeData = function (e, t) {
                var n = this._configuration,
                  r = n.gatewayConfiguration,
                  i = "TOKENIZATION_KEY" === n.authorizationType,
                  o = "vault" === e.flow,
                  a = {
                    paypalAccount: {
                      correlationId:
                        this._riskCorrelationId || t.billingToken || t.ecToken,
                      options: { validate: o && !i && e.vault },
                    },
                  };
                if (o) a.paypalAccount.billingAgreementToken = t.billingToken;
                else {
                  a.paypalAccount.paymentToken = t.paymentId;
                  a.paypalAccount.payerId = t.payerId;
                  a.paypalAccount.unilateral = r.paypal.unvettedMerchant;
                  e.intent && (a.paypalAccount.intent = e.intent);
                }
                this._merchantAccountId &&
                  (a.merchantAccountId = this._merchantAccountId);
                return a;
              };
              b.prototype._formatTokenizePayload = function (e) {
                var t,
                  n = {};
                e.paypalAccounts && (n = e.paypalAccounts[0]);
                t = { nonce: n.nonce, details: {}, type: n.type };
                n.details &&
                  n.details.payerInfo &&
                  (t.details = n.details.payerInfo);
                n.details &&
                  n.details.creditFinancingOffered &&
                  (t.creditFinancingOffered = n.details.creditFinancingOffered);
                n.details &&
                  n.details.shippingOptionId &&
                  (t.shippingOptionId = n.details.shippingOptionId);
                n.details &&
                  n.details.cobrandedCardLabel &&
                  (t.cobrandedCardLabel = n.details.cobrandedCardLabel);
                return t;
              };
              b.prototype.teardown = function () {
                var e = this;
                y(this, f(b.prototype));
                this._paypalScript &&
                  this._paypalScript.parentNode &&
                  this._paypalScript.parentNode.removeChild(this._paypalScript);
                return this._frameServicePromise
                  .catch(function () {})
                  .then(function () {
                    return e._frameService
                      ? e._frameService.teardown()
                      : s.resolve();
                  });
              };
              t.exports = u.wrapPrototype(b);
            },
            {
              "../lib/analytics": 126,
              "../lib/assign": 128,
              "../lib/braintree-error": 131,
              "../lib/constants": 133,
              "../lib/convert-methods-to-error": 134,
              "../lib/convert-to-braintree-error": 135,
              "../lib/create-assets-url": 136,
              "../lib/create-authorization-data": 137,
              "../lib/create-deferred-client": 138,
              "../lib/frame-service/external": 146,
              "../lib/methods": 162,
              "../lib/promise": 164,
              "../lib/querystring": 165,
              "../lib/use-min": 167,
              "../paypal/shared/constants": 187,
              "./errors": 182,
              "@braintree/extended-promise": 40,
              "@braintree/wrap-promise": 49,
            },
          ],
          185: [
            function (e, t, n) {
              "use strict";
              var r = e("../../lib/frame-service/external"),
                i = e("../../lib/braintree-error"),
                o = e("../../lib/convert-to-braintree-error"),
                a = e("../../lib/use-min"),
                s = e("../../lib/once"),
                c = "3.85.5",
                u = e("../shared/constants"),
                d = e("../../lib/constants").INTEGRATION_TIMEOUT_MS,
                l = e("../../lib/analytics"),
                p = e("../../lib/methods"),
                _ = e("../../lib/deferred"),
                E = e("../shared/errors"),
                h = e("../../lib/convert-methods-to-error"),
                f = e("../../lib/querystring"),
                m = e("../../lib/promise"),
                y = e("@braintree/wrap-promise");
              function A(e) {
                this._client = e.client;
                this._assetsUrl =
                  e.client.getConfiguration().gatewayConfiguration.paypal
                    .assetsUrl +
                  "/web/" +
                  c;
                this._isDebug = e.client.getConfiguration().isDebug;
                this._loadingFrameUrl =
                  this._assetsUrl +
                  "/html/paypal-landing-frame" +
                  a(this._isDebug) +
                  ".html";
                this._authorizationInProgress = !1;
              }
              A.prototype._initialize = function () {
                var e = this,
                  t = this._client,
                  n = setTimeout(function () {
                    l.sendEvent(t, "paypal.load.timed-out");
                  }, d);
                return new m(function (i) {
                  r.create(
                    {
                      name: u.LANDING_FRAME_NAME,
                      dispatchFrameUrl:
                        e._assetsUrl +
                        "/html/dispatch-frame" +
                        a(e._isDebug) +
                        ".html",
                      openFrameUrl: e._loadingFrameUrl,
                    },
                    function (r) {
                      e._frameService = r;
                      clearTimeout(n);
                      l.sendEvent(t, "paypal.load.succeeded");
                      i(e);
                    }
                  );
                });
              };
              A.prototype.tokenize = function (e, t) {
                var n,
                  r,
                  o = this,
                  a = this._client;
                t && (t = s(_(t)));
                if (!e || !u.FLOW_ENDPOINTS.hasOwnProperty(e.flow)) {
                  r = new i(E.PAYPAL_FLOW_OPTION_REQUIRED);
                  if (t) {
                    t(r);
                    return this._frameService.createNoopHandler();
                  }
                  return m.reject(r);
                }
                n = new m(function (t, n) {
                  if (o._authorizationInProgress) {
                    l.sendEvent(a, "paypal.tokenization.error.already-opened");
                    n(new i(E.PAYPAL_TOKENIZATION_REQUEST_ACTIVE));
                  } else {
                    o._authorizationInProgress = !0;
                    window.popupBridge ||
                      l.sendEvent(a, "paypal.tokenization.opened");
                    !0 === e.offerCredit &&
                      l.sendEvent(a, "paypal.credit.offered");
                    !0 === e.offerPayLater &&
                      l.sendEvent(a, "paypal.paylater.offered");
                    o._navigateFrameToAuth(e).catch(n);
                    o._frameService.open(
                      {},
                      o._createFrameServiceCallback(e, t, n)
                    );
                  }
                });
                if (t) {
                  n.then(function (e) {
                    t(null, e);
                  }).catch(t);
                  return this._frameService.createHandler({
                    beforeClose: function () {
                      l.sendEvent(a, "paypal.tokenization.closed.by-merchant");
                    },
                  });
                }
                return n;
              };
              A.prototype._createFrameServiceCallback = function (e, t, n) {
                var r = this,
                  o = this._client;
                return window.popupBridge
                  ? function (a, s) {
                      var c =
                        s && s.path && "/cancel" === s.path.substring(0, 7);
                      r._authorizationInProgress = !1;
                      if (a || c) {
                        l.sendEvent(
                          o,
                          "paypal.tokenization.closed-popupbridge.by-user"
                        );
                        n(new i(E.PAYPAL_POPUP_CLOSED));
                      } else
                        s &&
                          r._tokenizePayPal(e, s.queryItems).then(t).catch(n);
                    }
                  : function (a, s) {
                      r._authorizationInProgress = !1;
                      if (a)
                        if ("FRAME_SERVICE_FRAME_CLOSED" === a.code) {
                          l.sendEvent(o, "paypal.tokenization.closed.by-user");
                          n(new i(E.PAYPAL_POPUP_CLOSED));
                        } else
                          a.code &&
                            a.code.indexOf("FRAME_SERVICE_FRAME_OPEN_FAILED") >
                              -1 &&
                            n(
                              new i({
                                code: E.PAYPAL_POPUP_OPEN_FAILED.code,
                                type: E.PAYPAL_POPUP_OPEN_FAILED.type,
                                message: E.PAYPAL_POPUP_OPEN_FAILED.message,
                                details: { originalError: a },
                              })
                            );
                      else s && r._tokenizePayPal(e, s).then(t).catch(n);
                    };
              };
              A.prototype._tokenizePayPal = function (e, t) {
                var n = this,
                  r = this._client;
                window.popupBridge ||
                  this._frameService.redirect(this._loadingFrameUrl);
                return r
                  .request({
                    endpoint: "payment_methods/paypal_accounts",
                    method: "post",
                    data: this._formatTokenizeData(e, t),
                  })
                  .then(function (e) {
                    var t = n._formatTokenizePayload(e);
                    window.popupBridge
                      ? l.sendEvent(
                          r,
                          "paypal.tokenization.success-popupbridge"
                        )
                      : l.sendEvent(r, "paypal.tokenization.success");
                    t.creditFinancingOffered &&
                      l.sendEvent(r, "paypal.credit.accepted");
                    n._frameService.close();
                    return t;
                  })
                  .catch(function (e) {
                    window.popupBridge
                      ? l.sendEvent(r, "paypal.tokenization.failed-popupbridge")
                      : l.sendEvent(r, "paypal.tokenization.failed");
                    n._frameService.close();
                    return m.reject(
                      o(e, {
                        type: E.PAYPAL_ACCOUNT_TOKENIZATION_FAILED.type,
                        code: E.PAYPAL_ACCOUNT_TOKENIZATION_FAILED.code,
                        message: E.PAYPAL_ACCOUNT_TOKENIZATION_FAILED.message,
                      })
                    );
                  });
              };
              A.prototype._formatTokenizePayload = function (e) {
                var t,
                  n = {};
                e.paypalAccounts && (n = e.paypalAccounts[0]);
                t = { nonce: n.nonce, details: {}, type: n.type };
                n.details &&
                  n.details.payerInfo &&
                  (t.details = n.details.payerInfo);
                n.details &&
                  n.details.creditFinancingOffered &&
                  (t.creditFinancingOffered = n.details.creditFinancingOffered);
                return t;
              };
              A.prototype._formatTokenizeData = function (e, t) {
                var n = this._client.getConfiguration(),
                  r = n.gatewayConfiguration,
                  i = "TOKENIZATION_KEY" === n.authorizationType,
                  o = {
                    paypalAccount: {
                      correlationId: t.ba_token || t.token,
                      options: { validate: "vault" === e.flow && !i },
                    },
                  };
                if (t.ba_token)
                  o.paypalAccount.billingAgreementToken = t.ba_token;
                else {
                  o.paypalAccount.paymentToken = t.paymentId;
                  o.paypalAccount.payerId = t.PayerID;
                  o.paypalAccount.unilateral = r.paypal.unvettedMerchant;
                  e.hasOwnProperty("intent") &&
                    (o.paypalAccount.intent = e.intent);
                }
                return o;
              };
              A.prototype._navigateFrameToAuth = function (e) {
                var t = this,
                  n = this._client,
                  r = "paypal_hermes/" + u.FLOW_ENDPOINTS[e.flow];
                return n
                  .request({
                    endpoint: r,
                    method: "post",
                    data: this._formatPaymentResourceData(e),
                  })
                  .then(function (r) {
                    var i;
                    i =
                      "checkout" === e.flow
                        ? r.paymentResource.redirectUrl
                        : r.agreementSetup.approvalUrl;
                    "commit" === e.useraction &&
                      (i = f.queryify(i, { useraction: "commit" }));
                    window.popupBridge &&
                      l.sendEvent(n, "paypal.tokenization.opened-popupbridge");
                    t._frameService.redirect(i);
                  })
                  .catch(function (e) {
                    var n = e.details && e.details.httpStatus;
                    t._frameService.close();
                    t._authorizationInProgress = !1;
                    return 422 === n
                      ? m.reject(
                          new i({
                            type: E.PAYPAL_INVALID_PAYMENT_OPTION.type,
                            code: E.PAYPAL_INVALID_PAYMENT_OPTION.code,
                            message: E.PAYPAL_INVALID_PAYMENT_OPTION.message,
                            details: { originalError: e },
                          })
                        )
                      : m.reject(
                          o(e, {
                            type: E.PAYPAL_FLOW_FAILED.type,
                            code: E.PAYPAL_FLOW_FAILED.code,
                            message: E.PAYPAL_FLOW_FAILED.message,
                          })
                        );
                  });
              };
              A.prototype._formatPaymentResourceData = function (e) {
                var t,
                  n = this._client.getConfiguration().gatewayConfiguration,
                  r = this._frameService._serviceId,
                  i = {
                    returnUrl:
                      n.paypal.assetsUrl +
                      "/web/" +
                      c +
                      "/html/redirect-frame" +
                      a(this._isDebug) +
                      ".html?channel=" +
                      r,
                    cancelUrl:
                      n.paypal.assetsUrl +
                      "/web/" +
                      c +
                      "/html/cancel-frame" +
                      a(this._isDebug) +
                      ".html?channel=" +
                      r,
                    offerPaypalCredit: !0 === e.offerCredit,
                    offerPayLater: !0 === e.offerPayLater,
                    experienceProfile: {
                      brandName: e.displayName || n.paypal.displayName,
                      localeCode: e.locale,
                      noShipping: (!e.enableShippingAddress).toString(),
                      addressOverride: !1 === e.shippingAddressEditable,
                      landingPageType: e.landingPageType,
                    },
                  };
                if (
                  window.popupBridge &&
                  "function" == typeof window.popupBridge.getReturnUrlPrefix
                ) {
                  i.returnUrl =
                    window.popupBridge.getReturnUrlPrefix() + "return";
                  i.cancelUrl =
                    window.popupBridge.getReturnUrlPrefix() + "cancel";
                }
                if ("checkout" === e.flow) {
                  i.amount = e.amount;
                  i.currencyIsoCode = e.currency;
                  e.hasOwnProperty("intent") && (i.intent = e.intent);
                  for (t in e.shippingAddressOverride)
                    e.shippingAddressOverride.hasOwnProperty(t) &&
                      (i[t] = e.shippingAddressOverride[t]);
                } else {
                  i.shippingAddress = e.shippingAddressOverride;
                  e.billingAgreementDescription &&
                    (i.description = e.billingAgreementDescription);
                }
                return i;
              };
              A.prototype.closeWindow = function () {
                this._authorizationInProgress &&
                  l.sendEvent(
                    this._client,
                    "paypal.tokenize.closed.by-merchant"
                  );
                this._frameService.close();
              };
              A.prototype.focusWindow = function () {
                this._frameService.focus();
              };
              A.prototype.teardown = y(function () {
                var e = this;
                e._frameService.teardown();
                h(e, p(A.prototype));
                l.sendEvent(e._client, "paypal.teardown-completed");
                return m.resolve();
              });
              t.exports = A;
            },
            {
              "../../lib/analytics": 126,
              "../../lib/braintree-error": 131,
              "../../lib/constants": 133,
              "../../lib/convert-methods-to-error": 134,
              "../../lib/convert-to-braintree-error": 135,
              "../../lib/deferred": 139,
              "../../lib/frame-service/external": 146,
              "../../lib/methods": 162,
              "../../lib/once": 163,
              "../../lib/promise": 164,
              "../../lib/querystring": 165,
              "../../lib/use-min": 167,
              "../shared/constants": 187,
              "../shared/errors": 188,
              "@braintree/wrap-promise": 49,
            },
          ],
          186: [
            function (e, t, n) {
              "use strict";
              var r = e("../lib/analytics"),
                i = e("../lib/basic-component-verification"),
                o = e("../lib/create-deferred-client"),
                a = e("../lib/create-assets-url"),
                s = e("../lib/braintree-error"),
                c = e("./shared/errors"),
                u = e("./external/paypal"),
                d = "3.85.5",
                l = e("@braintree/wrap-promise"),
                p = e("../lib/promise");
              function _(e) {
                var t = "PayPal";
                return i
                  .verify({
                    name: t,
                    client: e.client,
                    authorization: e.authorization,
                  })
                  .then(function () {
                    return o.create({
                      authorization: e.authorization,
                      client: e.client,
                      debug: e.debug,
                      assetsUrl: a.create(e.authorization),
                      name: t,
                    });
                  })
                  .then(function (t) {
                    var n = t.getConfiguration();
                    e.client = t;
                    if (!0 !== n.gatewayConfiguration.paypalEnabled)
                      return p.reject(new s(c.PAYPAL_NOT_ENABLED));
                    r.sendEvent(e.client, "paypal.initialized");
                    return new u(e)._initialize();
                  });
              }
              function E() {
                return !0;
              }
              t.exports = { create: l(_), isSupported: E, VERSION: d };
            },
            {
              "../lib/analytics": 126,
              "../lib/basic-component-verification": 129,
              "../lib/braintree-error": 131,
              "../lib/create-assets-url": 136,
              "../lib/create-deferred-client": 138,
              "../lib/promise": 164,
              "./external/paypal": 185,
              "./shared/errors": 188,
              "@braintree/wrap-promise": 49,
            },
          ],
          187: [
            function (e, t, n) {
              "use strict";
              t.exports = {
                LANDING_FRAME_NAME: "braintreepaypallanding",
                FLOW_ENDPOINTS: {
                  checkout: "create_payment_resource",
                  vault: "setup_billing_agreement",
                },
              };
            },
            {},
          ],
          188: [
            function (e, t, n) {
              "use strict";
              var r = e("../../lib/braintree-error");
              t.exports = {
                PAYPAL_NOT_ENABLED: {
                  type: r.types.MERCHANT,
                  code: "PAYPAL_NOT_ENABLED",
                  message: "PayPal is not enabled for this merchant.",
                },
                PAYPAL_TOKENIZATION_REQUEST_ACTIVE: {
                  type: r.types.MERCHANT,
                  code: "PAYPAL_TOKENIZATION_REQUEST_ACTIVE",
                  message: "Another tokenization request is active.",
                },
                PAYPAL_ACCOUNT_TOKENIZATION_FAILED: {
                  type: r.types.NETWORK,
                  code: "PAYPAL_ACCOUNT_TOKENIZATION_FAILED",
                  message: "Could not tokenize user's PayPal account.",
                },
                PAYPAL_FLOW_FAILED: {
                  type: r.types.NETWORK,
                  code: "PAYPAL_FLOW_FAILED",
                  message: "Could not initialize PayPal flow.",
                },
                PAYPAL_FLOW_OPTION_REQUIRED: {
                  type: r.types.MERCHANT,
                  code: "PAYPAL_FLOW_OPTION_REQUIRED",
                  message: "PayPal flow property is invalid or missing.",
                },
                PAYPAL_POPUP_OPEN_FAILED: {
                  type: r.types.MERCHANT,
                  code: "PAYPAL_POPUP_OPEN_FAILED",
                  message:
                    "PayPal popup failed to open, make sure to tokenize in response to a user action.",
                },
                PAYPAL_POPUP_CLOSED: {
                  type: r.types.CUSTOMER,
                  code: "PAYPAL_POPUP_CLOSED",
                  message: "Customer closed PayPal popup before authorizing.",
                },
                PAYPAL_INVALID_PAYMENT_OPTION: {
                  type: r.types.MERCHANT,
                  code: "PAYPAL_INVALID_PAYMENT_OPTION",
                  message: "PayPal payment options are invalid.",
                },
              };
            },
            { "../../lib/braintree-error": 131 },
          ],
          189: [
            function (e, t, n) {
              "use strict";
              var r = e("@braintree/wrap-promise"),
                i = e("../lib/basic-component-verification"),
                o = e("./preferred-payment-methods"),
                a = "3.85.5";
              function s(e) {
                var t = "PreferredPaymentMethods";
                return i
                  .verify({
                    name: t,
                    client: e.client,
                    authorization: e.authorization,
                  })
                  .then(function () {
                    return new o().initialize(e);
                  });
              }
              t.exports = { create: r(s), VERSION: a };
            },
            {
              "../lib/basic-component-verification": 129,
              "./preferred-payment-methods": 190,
              "@braintree/wrap-promise": 49,
            },
          ],
          190: [
            function (e, t, n) {
              "use strict";
              var r = e("@braintree/wrap-promise"),
                i = e("../lib/analytics"),
                o = e("../lib/create-assets-url"),
                a = e("../lib/create-deferred-client"),
                s = e("../lib/promise");
              function c() {}
              c.prototype.initialize = function (e) {
                var t = this;
                this._clientPromise = a
                  .create({
                    authorization: e.authorization,
                    client: e.client,
                    debug: e.debug,
                    assetsUrl: o.create(e.authorization),
                    name: "PreferredPaymentMethods",
                  })
                  .catch(function (e) {
                    t._setupError = e;
                    return s.reject(e);
                  });
                i.sendEvent(
                  this._clientPromise,
                  "preferred-payment-methods.initialized"
                );
                return s.resolve(this);
              };
              c.prototype.fetchPreferredPaymentMethods = function () {
                var e,
                  t = this;
                return this._clientPromise
                  .then(function (t) {
                    return (e = t).request({
                      api: "graphQLApi",
                      data: {
                        query:
                          "query PreferredPaymentMethods { preferredPaymentMethods { paypalPreferred venmoPreferred } }",
                      },
                    });
                  })
                  .then(function (t) {
                    var n = t.data.preferredPaymentMethods.paypalPreferred,
                      r = t.data.preferredPaymentMethods.venmoPreferred;
                    i.sendEvent(
                      e,
                      "preferred-payment-methods.paypal.api-detected." + n
                    );
                    i.sendEvent(
                      e,
                      "preferred-payment-methods.venmo.api-detected." + r
                    );
                    return { paypalPreferred: n, venmoPreferred: r };
                  })
                  .catch(function () {
                    if (t._setupError) return s.reject(t._setupError);
                    i.sendEvent(e, "preferred-payment-methods.api-error");
                    return { paypalPreferred: !1, venmoPreferred: !1 };
                  });
              };
              t.exports = r.wrapPrototype(c);
            },
            {
              "../lib/analytics": 126,
              "../lib/create-assets-url": 136,
              "../lib/create-deferred-client": 138,
              "../lib/promise": 164,
              "@braintree/wrap-promise": 49,
            },
          ],
          191: [
            function (e, t, n) {
              "use strict";
              var r = e("../../../lib/assign").assign,
                i = e("../../../lib/analytics"),
                o = e("../../../lib/braintree-error"),
                a = e("../../../lib/promise"),
                s = e("../../../lib/is-verified-domain"),
                c = e("@braintree/extended-promise"),
                u = e("@braintree/event-emitter"),
                d = e("../../shared/errors"),
                l = e("@braintree/iframer"),
                p = e("framebus"),
                _ = e("../../shared/constants"),
                E = e("@braintree/uuid"),
                h = e("../../shared/events"),
                f = e("../../../lib/use-min"),
                m = e("../../../lib/constants").BUS_CONFIGURATION_REQUEST_EVENT,
                y = "3.85.5",
                A = 400,
                T = 400;
              function I(e) {
                u.call(this);
                this._client = e.client;
                this._createPromise = e.createPromise;
                this._createOptions = e;
                if (this._client) {
                  this._isDebug = this._client.getConfiguration().isDebug;
                  this._assetsUrl =
                    this._client.getConfiguration().gatewayConfiguration.assetsUrl;
                } else {
                  this._isDebug = Boolean(e.isDebug);
                  this._assetsUrl = e.assetsUrl;
                }
                this._assetsUrl = this._assetsUrl + "/web/" + y;
              }
              u.createChild(I);
              I.prototype._waitForClient = function () {
                return this._client
                  ? a.resolve()
                  : this._createPromise.then(
                      function (e) {
                        this._client = e;
                      }.bind(this)
                    );
              };
              I.prototype.setUpEventListeners = function () {
                throw new o(d.THREEDS_FRAMEWORK_METHOD_NOT_IMPLEMENTED);
              };
              I.prototype.verifyCard = function (e, t) {
                var n,
                  r,
                  o = this;
                t = t || {};
                if ((r = this._checkForVerifyCardError(e, t)))
                  return a.reject(r);
                this._verifyCardInProgress = !0;
                n = this._formatVerifyCardOptions(e);
                return this._formatLookupData(n)
                  .then(function (e) {
                    i.sendEvent(
                      o._createPromise,
                      "three-d-secure.verification-flow.started"
                    );
                    return o._performLookup(n.nonce, e);
                  })
                  .then(function (e) {
                    i.sendEvent(
                      o._createPromise,
                      "three-d-secure.verification-flow.3ds-version." +
                        e.lookup.threeDSecureVersion
                    );
                    return o._onLookupComplete(e, n);
                  })
                  .then(function (e) {
                    return o.initializeChallengeWithLookupResponse(e, n);
                  })
                  .then(function (e) {
                    o._resetVerificationState();
                    i.sendEvent(
                      o._createPromise,
                      "three-d-secure.verification-flow.completed"
                    );
                    return e;
                  })
                  .catch(function (e) {
                    o._resetVerificationState();
                    i.sendEvent(
                      o._createPromise,
                      "three-d-secure.verification-flow.failed"
                    );
                    return a.reject(e);
                  });
              };
              I.prototype._checkForFrameworkSpecificVerifyCardErrors =
                function () {
                  throw new o(d.THREEDS_FRAMEWORK_METHOD_NOT_IMPLEMENTED);
                };
              I.prototype._presentChallenge = function () {
                throw new o(d.THREEDS_FRAMEWORK_METHOD_NOT_IMPLEMENTED);
              };
              I.prototype.prepareLookup = function () {
                throw new o(d.THREEDS_FRAMEWORK_METHOD_NOT_IMPLEMENTED);
              };
              I.prototype._resetVerificationState = function () {
                this._verifyCardInProgress = !1;
                this._verifyCardPromisePlus = null;
              };
              I.prototype._performLookup = function (e, t) {
                var n = this,
                  r = "payment_methods/" + e + "/three_d_secure/lookup";
                return this._waitForClient().then(function () {
                  return n._client
                    .request({ endpoint: r, method: "post", data: t })
                    .catch(function (e) {
                      var t,
                        r = e && e.details && e.details.httpStatus,
                        s = "three-d-secure.verification-flow.lookup-failed";
                      if (404 === r) {
                        t = d.THREEDS_LOOKUP_TOKENIZED_CARD_NOT_FOUND_ERROR;
                        s += ".404";
                      } else if (422 === r) {
                        t = d.THREEDS_LOOKUP_VALIDATION_ERROR;
                        s += ".422";
                      } else t = d.THREEDS_LOOKUP_ERROR;
                      i.sendEvent(n._createPromise, s);
                      return a.reject(
                        new o({
                          type: t.type,
                          code: t.code,
                          message: t.message,
                          details: { originalError: e },
                        })
                      );
                    });
                });
              };
              I.prototype._checkForVerifyCardError = function (e, t) {
                var n;
                if (!0 === this._verifyCardInProgress)
                  return new o(d.THREEDS_AUTHENTICATION_IN_PROGRESS);
                e.nonce ? e.amount || (n = "an amount") : (n = "a nonce");
                n ||
                  (n = this._checkForFrameworkSpecificVerifyCardErrors(e, t));
                return n
                  ? new o({
                      type: d.THREEDS_MISSING_VERIFY_CARD_OPTION.type,
                      code: d.THREEDS_MISSING_VERIFY_CARD_OPTION.code,
                      message: "verifyCard options must include " + n + ".",
                    })
                  : null;
              };
              I.prototype.initializeChallengeWithLookupResponse = function (
                e,
                t
              ) {
                var n = this;
                t = t || {};
                this._lookupPaymentMethod = e.paymentMethod;
                n._verifyCardPromisePlus = n._verifyCardPromisePlus || new c();
                n._handleLookupResponse(e, t);
                return n._verifyCardPromisePlus.then(function (e) {
                  i.sendEvent(
                    n._createPromise,
                    "three-d-secure.verification-flow.liability-shifted." +
                      String(e.liabilityShifted)
                  );
                  i.sendEvent(
                    n._createPromise,
                    "three-d-secure.verification-flow.liability-shift-possible." +
                      String(e.liabilityShiftPossible)
                  );
                  return e;
                });
              };
              I.prototype._handleLookupResponse = function (e, t) {
                var n,
                  r = Boolean(e.lookup && e.lookup.acsUrl);
                i.sendEvent(
                  this._createPromise,
                  "three-d-secure.verification-flow.challenge-presented." +
                    String(r)
                );
                if (r) this._presentChallenge(e, t);
                else {
                  (n = this._formatAuthResponse(
                    e.paymentMethod,
                    e.threeDSecureInfo
                  )).verificationDetails = e.threeDSecureInfo;
                  this._verifyCardPromisePlus.resolve(n);
                }
              };
              I.prototype._onLookupComplete = function (e) {
                this._lookupPaymentMethod = e.paymentMethod;
                this._verifyCardPromisePlus = new c();
                return a.resolve(e);
              };
              I.prototype._formatAuthResponse = function (e, t) {
                return {
                  nonce: e.nonce,
                  type: e.type,
                  binData: e.binData,
                  details: e.details,
                  description:
                    e.description && e.description.replace(/\+/g, " "),
                  liabilityShifted: t && t.liabilityShifted,
                  liabilityShiftPossible: t && t.liabilityShiftPossible,
                  threeDSecureInfo: e.threeDSecureInfo,
                };
              };
              I.prototype._formatVerifyCardOptions = function (e) {
                return r({}, e);
              };
              I.prototype._formatLookupData = function (e) {
                var t = { amount: e.amount };
                return a.resolve(t);
              };
              I.prototype._handleV1AuthResponse = function (e) {
                var t = JSON.parse(e.auth_response);
                t.success
                  ? this._verifyCardPromisePlus.resolve(
                      this._formatAuthResponse(
                        t.paymentMethod,
                        t.threeDSecureInfo
                      )
                    )
                  : t.threeDSecureInfo &&
                    t.threeDSecureInfo.liabilityShiftPossible
                  ? this._verifyCardPromisePlus.resolve(
                      this._formatAuthResponse(
                        this._lookupPaymentMethod,
                        t.threeDSecureInfo
                      )
                    )
                  : this._verifyCardPromisePlus.reject(
                      new o({
                        type: o.types.UNKNOWN,
                        code: "UNKNOWN_AUTH_RESPONSE",
                        message: t.error.message,
                      })
                    );
              };
              I.prototype.cancelVerifyCard = function () {
                var e, t;
                this._verifyCardInProgress = !1;
                if (!this._lookupPaymentMethod)
                  return a.reject(new o(d.THREEDS_NO_VERIFICATION_PAYLOAD));
                t = this._lookupPaymentMethod.threeDSecureInfo;
                e = r({}, this._lookupPaymentMethod, {
                  liabilityShiftPossible: t && t.liabilityShiftPossible,
                  liabilityShifted: t && t.liabilityShifted,
                  verificationDetails: t && t.verificationDetails,
                });
                return a.resolve(e);
              };
              I.prototype._setupV1Bus = function (e) {
                var t = window.location.href.split("#")[0],
                  n = e.lookupResponse,
                  r = E(),
                  i = new p({
                    channel: r,
                    verifyDomain: s,
                  }),
                  o =
                    this._assetsUrl +
                    "/html/three-d-secure-authentication-complete-frame.html?channel=" +
                    encodeURIComponent(r) +
                    "&";
                i.on(m, function (e) {
                  e({
                    acsUrl: n.acsUrl,
                    pareq: n.pareq,
                    termUrl:
                      n.termUrl +
                      "&three_d_secure_version=" +
                      y +
                      "&authentication_complete_base_url=" +
                      encodeURIComponent(o),
                    md: n.md,
                    parentUrl: t,
                  });
                });
                i.on(h.AUTHENTICATION_COMPLETE, e.handleAuthResponse);
                return i;
              };
              I.prototype._setupV1Iframe = function (e) {
                var t =
                  this._assetsUrl +
                  "/html/three-d-secure-bank-frame" +
                  f(this._isDebug) +
                  ".html?showLoader=" +
                  e.showLoader;
                return l({
                  src: t,
                  height: A,
                  width: T,
                  name: _.LANDING_FRAME_NAME + "_" + this._v1Bus.channel,
                  title: "3D Secure Authorization Frame",
                });
              };
              I.prototype._setupV1Elements = function (e) {
                this._v1Bus = this._setupV1Bus(e);
                this._v1Iframe = this._setupV1Iframe(e);
              };
              I.prototype._teardownV1Elements = function () {
                if (this._v1Bus) {
                  this._v1Bus.teardown();
                  this._v1Bus = null;
                }
                if (this._v1Iframe && this._v1Iframe.parentNode) {
                  this._v1Iframe.parentNode.removeChild(this._v1Iframe);
                  this._v1Iframe = null;
                }
                if (this._onV1Keyup) {
                  document.removeEventListener("keyup", this._onV1Keyup);
                  this._onV1Keyup = null;
                }
              };
              I.prototype.teardown = function () {
                i.sendEvent(
                  this._createPromise,
                  "three-d-secure.teardown-completed"
                );
                this._teardownV1Elements();
                return a.resolve();
              };
              t.exports = I;
            },
            {
              "../../../lib/analytics": 126,
              "../../../lib/assign": 128,
              "../../../lib/braintree-error": 131,
              "../../../lib/constants": 133,
              "../../../lib/is-verified-domain": 160,
              "../../../lib/promise": 164,
              "../../../lib/use-min": 167,
              "../../shared/constants": 200,
              "../../shared/errors": 201,
              "../../shared/events": 202,
              "@braintree/event-emitter": 39,
              "@braintree/extended-promise": 40,
              "@braintree/iframer": 41,
              "@braintree/uuid": 45,
              framebus: 58,
            },
          ],
          192: [
            function (e, t, n) {
              "use strict";
              var r = e("./songbird");
              function i(e) {
                r.call(this, e);
              }
              i.prototype = Object.create(r.prototype, { constructor: r });
              i.prototype._createV1IframeModalElement = function (e) {
                var t = document.createElement("div");
                t.innerHTML =
                  '<div class="modal fade in" tabindex="-1" role="dialog" aria-labelledby="CCAFrameModal-label" aria-hidden="true" style="display: block;"><div class="modal-dialog" style="width:440px;z-index:999999;"><div class="modal-content"><div class="modal-body" data-braintree-v1-fallback-iframe-container><button type="button" data-braintree-v1-fallback-close-button class="close" data-dismiss="modal" aria-hidden="true">×</button></div></div></div><div data-braintree-v1-fallback-backdrop style="position: fixed;cursor: pointer;z-index: 999998;top: 0;left: 0;width: 100%;height: 100%;"></div></div>';
                t.querySelector(
                  "[data-braintree-v1-fallback-iframe-container]"
                ).appendChild(e);
                return t;
              };
              i.prototype._createCardinalConfigurationOptions = function (e) {
                var t = r.prototype._createCardinalConfigurationOptions.call(
                  this,
                  e
                );
                t.payment.framework = "bootstrap3";
                return t;
              };
              t.exports = i;
            },
            { "./songbird": 197 },
          ],
          193: [
            function (e, t, n) {
              "use strict";
              var r = e("./songbird");
              function i(e) {
                r.call(this, e);
              }
              i.prototype = Object.create(r.prototype, { constructor: r });
              i.prototype._createV1IframeModalElement = function (e) {
                var t = document.createElement("div"),
                  n = Boolean(
                    this._createOptions &&
                      this._createOptions.cardinalSDKConfig &&
                      this._createOptions.cardinalSDKConfig.payment &&
                      this._createOptions.cardinalSDKConfig.payment
                        .displayExitButton
                  );
                t.innerHTML =
                  '<div style="position: fixed;z-index: 999999;top: 50%;left: 50%;padding: 24px 20px;transform: translate(-50%,-50%);border-radius: 2px;background: #fff;max-width: 100%;overflow: auto;"><div><button data-braintree-v1-fallback-close-button style="font-family: Helvetica,Arial,sans-serif;font-size: 25px;line-height: 12px;position: absolute;top: 2px;right: 0px;cursor: pointer;color: #999;border: 0;outline: none;background: none;" onMouseOver="this.style.color=\'#000\'" onMouseOut="this.style.color=\'#999\'">×</button></div><div data-braintree-v1-fallback-iframe-container style="height: 400px;"></div></div><div data-braintree-v1-fallback-backdrop style="position: fixed;z-index: 999998;cursor: pointer;top: 0;left: 0;width: 100%;height: 100%;transition: opacity 1ms ease;background: rgba(0,0,0,.6);"></div>';
                n ||
                  (t.querySelector(
                    "[data-braintree-v1-fallback-close-button]"
                  ).style.display = "none");
                t.querySelector(
                  "[data-braintree-v1-fallback-iframe-container]"
                ).appendChild(e);
                return t;
              };
              t.exports = i;
            },
            { "./songbird": 197 },
          ],
          194: [
            function (e, t, n) {
              "use strict";
              var r = e("./legacy"),
                i = e("./cardinal-modal"),
                o = e("./bootstrap3-modal"),
                a = e("./inline-iframe");
              t.exports = {
                legacy: r,
                "cardinal-modal": i,
                "bootstrap3-modal": o,
                "inline-iframe": a,
              };
            },
            {
              "./bootstrap3-modal": 192,
              "./cardinal-modal": 193,
              "./inline-iframe": 195,
              "./legacy": 196,
            },
          ],
          195: [
            function (e, t, n) {
              "use strict";
              var r = e("./songbird"),
                i = e("../../../lib/braintree-error"),
                o = e("../../shared/errors"),
                a = e("../../../lib/enumerate");
              function s(e) {
                r.call(this, e);
              }
              s.prototype = Object.create(r.prototype, { constructor: r });
              s.events = a(
                ["AUTHENTICATION_IFRAME_AVAILABLE"],
                "inline-iframe-framework:"
              );
              s.prototype.setUpEventListeners = function (e) {
                r.prototype.setUpEventListeners.call(this, e);
                this.on(
                  s.events.AUTHENTICATION_IFRAME_AVAILABLE,
                  function (t, n) {
                    e("authentication-iframe-available", t, n);
                  }
                );
              };
              s.prototype._createCardinalConfigurationOptions = function (e) {
                var t = r.prototype._createCardinalConfigurationOptions.call(
                  this,
                  e
                );
                t.payment.framework = "inline";
                return t;
              };
              s.prototype._addV1IframeToPage = function () {
                this._emit(
                  s.events.AUTHENTICATION_IFRAME_AVAILABLE,
                  { element: this._v1Modal },
                  function () {}
                );
              };
              s.prototype._setupFrameworkSpecificListeners = function () {
                this.setCardinalListener(
                  "ui.inline.setup",
                  this._onInlineSetup.bind(this)
                );
              };
              s.prototype._onInlineSetup = function (e, t, n, r) {
                var a, c;
                e && t
                  ? ("CCA" !== t.paymentType ||
                      ("suppress" !== t.data.mode &&
                        "static" !== t.data.mode)) &&
                    (c = !0)
                  : (c = !0);
                if (c) r(new i(o.THREEDS_INLINE_IFRAME_DETAILS_INCORRECT));
                else {
                  (a = document.createElement("div")).innerHTML = e;
                  if ("suppress" === t.data.mode) {
                    a.style.display = "none";
                    document.body.appendChild(a);
                    n();
                  } else
                    "static" === t.data.mode &&
                      this._emit(
                        s.events.AUTHENTICATION_IFRAME_AVAILABLE,
                        { element: a },
                        function () {
                          n();
                        }
                      );
                }
              };
              t.exports = s;
            },
            {
              "../../../lib/braintree-error": 131,
              "../../../lib/enumerate": 141,
              "../../shared/errors": 201,
              "./songbird": 197,
            },
          ],
          196: [
            function (e, t, n) {
              "use strict";
              var r = e("./base"),
                i = e("../../../lib/deferred");
              function o(e) {
                r.call(this, e);
              }
              o.prototype = Object.create(r.prototype, {
                constructor: o,
              });
              o.prototype.setUpEventListeners = function () {};
              o.prototype.transformV1CustomerBillingAddress = function (e) {
                e.billingAddress.line1 = e.billingAddress.streetAddress;
                e.billingAddress.line2 = e.billingAddress.extendedAddress;
                e.billingAddress.city = e.billingAddress.locality;
                e.billingAddress.state = e.billingAddress.region;
                e.billingAddress.countryCode =
                  e.billingAddress.countryCodeAlpha2;
                delete e.billingAddress.streetAddress;
                delete e.billingAddress.extendedAddress;
                delete e.billingAddress.locality;
                delete e.billingAddress.region;
                delete e.billingAddress.countryCodeAlpha2;
                return e;
              };
              o.prototype._createIframe = function (e) {
                var t = this;
                this._setupV1Elements({
                  lookupResponse: e.lookupResponse,
                  showLoader: e.showLoader,
                  handleAuthResponse: function (n) {
                    t._handleAuthResponse(n, e);
                  },
                });
                return this._v1Iframe;
              };
              o.prototype._handleAuthResponse = function (e, t) {
                this._v1Bus.teardown();
                t.removeFrame();
                i(
                  function () {
                    this._handleV1AuthResponse(e);
                  }.bind(this)
                )();
              };
              o.prototype._checkForFrameworkSpecificVerifyCardErrors =
                function (e) {
                  var t;
                  "function" != typeof e.addFrame
                    ? (t = "an addFrame function")
                    : "function" != typeof e.removeFrame &&
                      (t = "a removeFrame function");
                  return t;
                };
              o.prototype._formatVerifyCardOptions = function (e) {
                var t = r.prototype._formatVerifyCardOptions.call(this, e);
                t.addFrame = i(e.addFrame);
                t.removeFrame = i(e.removeFrame);
                t.showLoader = !1 !== e.showLoader;
                return t;
              };
              o.prototype._formatLookupData = function (e) {
                var t = this;
                return r.prototype._formatLookupData
                  .call(this, e)
                  .then(function (n) {
                    e.customer &&
                      e.customer.billingAddress &&
                      (n.customer = t.transformV1CustomerBillingAddress(
                        e.customer
                      ));
                    return n;
                  });
              };
              o.prototype._presentChallenge = function (e, t) {
                t.addFrame(
                  null,
                  this._createIframe({
                    showLoader: t.showLoader,
                    lookupResponse: e.lookup,
                    removeFrame: t.removeFrame,
                  })
                );
              };
              t.exports = o;
            },
            { "../../../lib/deferred": 139, "./base": 191 },
          ],
          197: [
            function (e, t, n) {
              "use strict";
              var r = e("./base"),
                i = e("../../../lib/assign").assign,
                o = e("../../../lib/deferred"),
                a = e("../../../lib/braintree-error"),
                s = e("../../../lib/convert-to-braintree-error"),
                c = e("../../../lib/analytics"),
                u = e("../../../lib/assets"),
                d = e("../../shared/errors"),
                l = e("../../../lib/enumerate"),
                p = e("../../shared/constants"),
                _ = e("../../../lib/promise"),
                E = e("@braintree/extended-promise"),
                h = e("../../../lib/constants").INTEGRATION_TIMEOUT_MS,
                f = e("../../../lib/constants").PLATFORM,
                m = "3.85.5",
                y = "01",
                A = [
                  "ui.close",
                  "ui.render",
                  "ui.renderHidden",
                  "ui.loading.close",
                  "ui.loading.render",
                ];
              function T(e) {
                r.call(this, e);
                this._useV1Fallback = !1;
                this._clientMetadata = {
                  requestedThreeDSecureVersion: "2",
                  sdkVersion: f + "/" + m,
                };
                this._getDfReferenceIdPromisePlus = new E();
                this.setupSongbird(e);
                this._cardinalEvents = [];
              }
              T.prototype = Object.create(r.prototype, { constructor: T });
              T.events = l(
                [
                  "LOOKUP_COMPLETE",
                  "CUSTOMER_CANCELED",
                  "UI.CLOSE",
                  "UI.RENDER",
                  "UI.RENDERHIDDEN",
                  "UI.LOADING.CLOSE",
                  "UI.LOADING.RENDER",
                ],
                "songbird-framework:"
              );
              T.prototype.setUpEventListeners = function (e) {
                this.on(T.events.LOOKUP_COMPLETE, function (t, n) {
                  e("lookup-complete", t, n);
                });
                this.on(T.events.CUSTOMER_CANCELED, function () {
                  e("customer-canceled");
                });
                this.on(T.events["UI.CLOSE"], function () {
                  e("authentication-modal-close");
                });
                this.on(T.events["UI.RENDER"], function () {
                  e("authentication-modal-render");
                });
                this.on(T.events["UI.RENDERHIDDEN"], function () {
                  e("authentication-modal-render-hidden");
                });
                this.on(T.events["UI.LOADING.CLOSE"], function () {
                  e("authentication-modal-loader-close");
                });
                this.on(T.events["UI.LOADING.RENDER"], function () {
                  e("authentication-modal-loader-render");
                });
              };
              T.prototype.prepareLookup = function (e) {
                var t = i({}, e),
                  n = this;
                return this.getDfReferenceId()
                  .then(function (e) {
                    t.dfReferenceId = e;
                  })
                  .then(function () {
                    return n._triggerCardinalBinProcess(e.bin);
                  })
                  .catch(function () {})
                  .then(function () {
                    return n._waitForClient();
                  })
                  .then(function () {
                    t.clientMetadata = n._clientMetadata;
                    t.authorizationFingerprint =
                      n._client.getConfiguration().authorizationFingerprint;
                    t.braintreeLibraryVersion = "braintree/web/" + m;
                    return t;
                  });
              };
              T.prototype.initializeChallengeWithLookupResponse = function (
                e,
                t
              ) {
                return this.setupSongbird().then(
                  function () {
                    return r.prototype.initializeChallengeWithLookupResponse.call(
                      this,
                      e,
                      t
                    );
                  }.bind(this)
                );
              };
              T.prototype.initiateV1Fallback = function (e) {
                this._useV1Fallback = !0;
                this._removeSongbirdListeners();
                c.sendEvent(
                  this._createPromise,
                  "three-d-secure.v1-fallback." + e
                );
                this._songbirdPromise && this._songbirdPromise.resolve();
              };
              T.prototype._triggerCardinalBinProcess = function (e) {
                var t = this,
                  n = Date.now();
                return e
                  ? window.Cardinal.trigger("bin.process", e).then(function (
                      e
                    ) {
                      t._clientMetadata.issuerDeviceDataCollectionTimeElapsed =
                        Date.now() - n;
                      t._clientMetadata.issuerDeviceDataCollectionResult =
                        e && e.Status;
                    })
                  : _.resolve();
              };
              T.prototype.transformBillingAddress = function (e, t) {
                if (t) {
                  I(t, e, "billing");
                  e.billingPhoneNumber = t.phoneNumber;
                  e.billingGivenName = t.givenName;
                  e.billingSurname = t.surname;
                }
                return e;
              };
              T.prototype.transformShippingAddress = function (e) {
                var t = e.shippingAddress;
                if (t) {
                  I(t, e, "shipping");
                  delete e.shippingAddress;
                }
                return e;
              };
              T.prototype._createV1IframeModalElement = function (e) {
                var t = document.createElement("div");
                t.innerHTML =
                  '<div data-braintree-v1-fallback-iframe-container="true" style="height: 400px;"></div>';
                t.querySelector(
                  '[data-braintree-v1-fallback-iframe-container="true"]'
                ).appendChild(e);
                return t;
              };
              T.prototype._createV1IframeModal = function (e) {
                var t = this._createV1IframeModalElement(e),
                  n = t.querySelector(
                    "[data-braintree-v1-fallback-close-button]"
                  ),
                  r = t.querySelector("[data-braintree-v1-fallback-backdrop]"),
                  i = this;
                function o() {
                  t.parentNode.removeChild(t);
                  i.cancelVerifyCard(d.THREEDS_CARDINAL_SDK_CANCELED);
                  document.removeEventListener("keyup", i._onV1Keyup);
                  i._onV1Keyup = null;
                }
                this._onV1Keyup = function (e) {
                  "Escape" === e.key && t.parentNode && o();
                };
                n && n.addEventListener("click", o);
                r && r.addEventListener("click", o);
                document.addEventListener("keyup", this._onV1Keyup);
                return t;
              };
              T.prototype._addV1IframeToPage = function () {
                document.body.appendChild(this._v1Modal);
              };
              T.prototype._handleAuthResponseFromV1Fallback = function (e) {
                this._teardownV1Elements();
                this._v1Modal.parentNode.removeChild(this._v1Modal);
                this._handleV1AuthResponse(e);
              };
              T.prototype._presentChallengeWithV1Fallback = function (e) {
                var t = this;
                this._setupV1Elements({
                  lookupResponse: e,
                  showLoader: !0,
                  handleAuthResponse: function (e) {
                    t._handleAuthResponseFromV1Fallback(e);
                  },
                });
                this._v1Modal = this._createV1IframeModal(this._v1Iframe);
                this._addV1IframeToPage();
              };
              T.prototype.setupSongbird = function (e) {
                var t = this,
                  n = Date.now();
                if (this._songbirdPromise) return this._songbirdPromise;
                e = e || {};
                this._songbirdPromise = new E();
                this._v2SetupFailureReason = "reason-unknown";
                t._loadCardinalScript(e)
                  .then(function () {
                    if (!window.Cardinal) {
                      t._v2SetupFailureReason = "cardinal-global-unavailable";
                      return _.reject(
                        new a(d.THREEDS_CARDINAL_SDK_SETUP_FAILED)
                      );
                    }
                    return t._configureCardinalSdk({
                      setupOptions: e,
                      setupStartTime: n,
                    });
                  })
                  .catch(function (e) {
                    var n = s(e, {
                      type: d.THREEDS_CARDINAL_SDK_SETUP_FAILED.type,
                      code: d.THREEDS_CARDINAL_SDK_SETUP_FAILED.code,
                      message: d.THREEDS_CARDINAL_SDK_SETUP_FAILED.message,
                    });
                    t._getDfReferenceIdPromisePlus.reject(n);
                    window.clearTimeout(t._songbirdSetupTimeoutReference);
                    c.sendEvent(
                      t._client,
                      "three-d-secure.cardinal-sdk.init.setup-failed"
                    );
                    t.initiateV1Fallback(
                      "cardinal-sdk-setup-failed." + t._v2SetupFailureReason
                    );
                  });
                return this._songbirdPromise;
              };
              T.prototype._configureCardinalSdk = function (e) {
                var t = this;
                return this._waitForClient()
                  .then(function () {
                    return t._client.getConfiguration().gatewayConfiguration.threeDSecure;
                  })
                  .then(function (n) {
                    var r = n.cardinalAuthenticationJWT,
                      i = e.setupOptions,
                      o = e.setupStartTime,
                      a = t._createCardinalConfigurationOptions(i);
                    A.forEach(function (e) {
                      t.setCardinalListener(e, function () {
                        t._emit(T.events[e.toUpperCase()]);
                      });
                    });
                    t.setCardinalListener(
                      "payments.setupComplete",
                      t._createPaymentsSetupCompleteCallback()
                    );
                    t._setupFrameworkSpecificListeners();
                    window.Cardinal.configure(a);
                    window.Cardinal.setup("init", { jwt: r });
                    t._clientMetadata.cardinalDeviceDataCollectionTimeElapsed =
                      Date.now() - o;
                    t.setCardinalListener(
                      "payments.validated",
                      t._createPaymentsValidatedCallback()
                    );
                  })
                  .catch(function (e) {
                    t._v2SetupFailureReason =
                      "cardinal-configuration-threw-error";
                    return _.reject(e);
                  });
              };
              T.prototype.setCardinalListener = function (e, t) {
                this._cardinalEvents.push(e);
                window.Cardinal.on(e, t);
              };
              T.prototype._setupFrameworkSpecificListeners = function () {};
              T.prototype._createCardinalConfigurationOptions = function (e) {
                var t = e.cardinalSDKConfig || {},
                  n = t.payment || {};
                !t.logging &&
                  e.loggingEnabled &&
                  (t.logging = { level: "verbose" });
                t.payment = {};
                n.hasOwnProperty("displayLoading") &&
                  (t.payment.displayLoading = n.displayLoading);
                n.hasOwnProperty("displayExitButton") &&
                  (t.payment.displayExitButton = n.displayExitButton);
                return t;
              };
              T.prototype._loadCardinalScript = function (e) {
                var t = this,
                  n = p.CARDINAL_SCRIPT_SOURCE.sandbox;
                return this._waitForClient()
                  .then(function () {
                    var r =
                      "production" ===
                      t._client.getConfiguration().gatewayConfiguration
                        .environment;
                    t._songbirdSetupTimeoutReference = window.setTimeout(
                      function () {
                        c.sendEvent(
                          t._client,
                          "three-d-secure.cardinal-sdk.init.setup-timeout"
                        );
                        t.initiateV1Fallback("cardinal-sdk-setup-timeout");
                      },
                      e.timeout || h
                    );
                    r && (n = p.CARDINAL_SCRIPT_SOURCE.production);
                    return u.loadScript({ src: n });
                  })
                  .catch(function (e) {
                    t._v2SetupFailureReason = "songbird-js-failed-to-load";
                    return _.reject(
                      s(e, d.THREEDS_CARDINAL_SDK_SCRIPT_LOAD_FAILED)
                    );
                  });
              };
              T.prototype._createPaymentsSetupCompleteCallback = function () {
                var e = this;
                return function (t) {
                  e._getDfReferenceIdPromisePlus.resolve(t.sessionId);
                  window.clearTimeout(e._songbirdSetupTimeoutReference);
                  c.sendEvent(
                    e._createPromise,
                    "three-d-secure.cardinal-sdk.init.setup-completed"
                  );
                  e._songbirdPromise.resolve();
                };
              };
              T.prototype.getDfReferenceId = function () {
                return this._getDfReferenceIdPromisePlus;
              };
              T.prototype._performJWTValidation = function (e, t) {
                var n = this,
                  r = this._lookupPaymentMethod.nonce,
                  i =
                    "payment_methods/" +
                    r +
                    "/three_d_secure/authenticate_from_jwt",
                  o =
                    e &&
                    e.Payment &&
                    e.Payment.ExtendedData &&
                    e.Payment.ExtendedData.ChallengeCancel;
                if (o) {
                  c.sendEvent(
                    this._createPromise,
                    "three-d-secure.verification-flow.cardinal-sdk.cancel-code." +
                      o
                  );
                  o === y && this._emit(T.events.CUSTOMER_CANCELED);
                }
                c.sendEvent(
                  this._createPromise,
                  "three-d-secure.verification-flow.upgrade-payment-method.started"
                );
                return this._waitForClient()
                  .then(function () {
                    return n._client.request({
                      method: "post",
                      endpoint: i,
                      data: { jwt: t, paymentMethodNonce: r },
                    });
                  })
                  .then(function (t) {
                    var r = t.paymentMethod || n._lookupPaymentMethod,
                      i = n._formatAuthResponse(r, t.threeDSecureInfo);
                    i.rawCardinalSDKVerificationData = e;
                    c.sendEvent(
                      n._client,
                      "three-d-secure.verification-flow.upgrade-payment-method.succeeded"
                    );
                    return _.resolve(i);
                  })
                  .catch(function (e) {
                    var t = new a({
                      type: d.THREEDS_JWT_AUTHENTICATION_FAILED.type,
                      code: d.THREEDS_JWT_AUTHENTICATION_FAILED.code,
                      message: d.THREEDS_JWT_AUTHENTICATION_FAILED.message,
                      details: { originalError: e },
                    });
                    c.sendEvent(
                      n._client,
                      "three-d-secure.verification-flow.upgrade-payment-method.errored"
                    );
                    return _.reject(t);
                  });
              };
              T.prototype._createPaymentsValidatedCallback = function () {
                var e = this;
                return function (t, n) {
                  var r;
                  if (e._useV1Fallback)
                    c.sendEvent(
                      e._createPromise,
                      "three-d-secure.verification-flow.cardinal-sdk.payments-validated-callback-called-in-v1-fallback-flow"
                    );
                  else {
                    c.sendEvent(
                      e._createPromise,
                      "three-d-secure.verification-flow.cardinal-sdk.action-code." +
                        t.ActionCode.toLowerCase()
                    );
                    if (e._verifyCardPromisePlus)
                      switch (t.ActionCode) {
                        case "SUCCESS":
                        case "NOACTION":
                        case "FAILURE":
                          e._performJWTValidation(t, n)
                            .then(function (t) {
                              e._verifyCardPromisePlus.resolve(t);
                            })
                            .catch(function (t) {
                              e._verifyCardPromisePlus.reject(t);
                            });
                          break;
                        case "ERROR":
                          c.sendEvent(
                            e._createPromise,
                            "three-d-secure.verification-flow.cardinal-sdk-error." +
                              t.ErrorNumber
                          );
                          switch (t.ErrorNumber) {
                            case 10001:
                            case 10002:
                              r = new a(d.THREEDS_CARDINAL_SDK_SETUP_TIMEDOUT);
                              break;
                            case 10003:
                            case 10007:
                            case 10009:
                              r = new a(
                                d.THREEDS_CARDINAL_SDK_RESPONSE_TIMEDOUT
                              );
                              break;
                            case 10005:
                            case 10006:
                              r = new a(d.THREEDS_CARDINAL_SDK_BAD_CONFIG);
                              break;
                            case 10008:
                            case 10010:
                              r = new a(d.THREEDS_CARDINAL_SDK_BAD_JWT);
                              break;
                            case 10011:
                              c.sendEvent(
                                e._createPromise,
                                "three-d-secure.verification-flow.canceled"
                              );
                              r = new a(d.THREEDS_CARDINAL_SDK_CANCELED);
                              break;
                            default:
                              r = new a(d.THREEDS_CARDINAL_SDK_ERROR);
                          }
                          r.details = {
                            originalError: {
                              code: t.ErrorNumber,
                              description: t.ErrorDescription,
                            },
                          };
                          e._verifyCardPromisePlus.reject(r);
                      }
                    else
                      e.initiateV1Fallback(
                        "cardinal-sdk-setup-error.number-" + t.ErrorNumber
                      );
                  }
                };
              };
              T.prototype._checkForVerifyCardError = function (e, t) {
                return r.prototype._checkForVerifyCardError.call(this, e, t);
              };
              T.prototype._checkForFrameworkSpecificVerifyCardErrors =
                function (e, t) {
                  var n;
                  "function" == typeof e.onLookupComplete ||
                    t.ignoreOnLookupCompleteRequirement ||
                    (n = "an onLookupComplete function");
                  return n;
                };
              T.prototype._formatVerifyCardOptions = function (e) {
                var t = r.prototype._formatVerifyCardOptions.call(this, e),
                  n = t.additionalInformation || {};
                n = this.transformBillingAddress(n, e.billingAddress);
                n = this.transformShippingAddress(n);
                e.onLookupComplete &&
                  (t.onLookupComplete = o(e.onLookupComplete));
                e.email && (n.email = e.email);
                e.mobilePhoneNumber &&
                  (n.mobilePhoneNumber = e.mobilePhoneNumber);
                t.additionalInformation = n;
                return t;
              };
              T.prototype._onLookupComplete = function (e, t) {
                var n = this;
                return r.prototype._onLookupComplete
                  .call(this, e)
                  .then(function (e) {
                    return new _(function (r, i) {
                      e.requiresUserAuthentication = Boolean(
                        e.lookup && e.lookup.acsUrl
                      );
                      function o() {
                        r(e);
                      }
                      n._verifyCardPromisePlus.catch(i);
                      t.onLookupComplete
                        ? t.onLookupComplete(e, o)
                        : n._emit(T.events.LOOKUP_COMPLETE, e, o);
                    });
                  });
              };
              T.prototype._presentChallenge = function (e) {
                !this._useV1Fallback && e.lookup.transactionId
                  ? window.Cardinal.continue(
                      "cca",
                      { AcsUrl: e.lookup.acsUrl, Payload: e.lookup.pareq },
                      {
                        OrderDetails: { TransactionId: e.lookup.transactionId },
                      }
                    )
                  : this._presentChallengeWithV1Fallback(e.lookup);
              };
              T.prototype._formatLookupData = function (e) {
                var t = this;
                return r.prototype._formatLookupData
                  .call(this, e)
                  .then(function (n) {
                    n.additionalInfo = e.additionalInformation;
                    e.accountType && (n.accountType = e.accountType);
                    e.challengeRequested &&
                      (n.challengeRequested = e.challengeRequested);
                    e.dataOnlyRequested &&
                      (n.dataOnlyRequested = e.dataOnlyRequested);
                    e.exemptionRequested &&
                      (n.exemptionRequested = e.exemptionRequested);
                    e.bin && (n.bin = e.bin);
                    null != e.cardAdd && (n.cardAdd = e.cardAdd);
                    null != e.cardAddChallengeRequested &&
                      (n.cardAdd = e.cardAddChallengeRequested);
                    return t.prepareLookup(n);
                  });
              };
              T.prototype.cancelVerifyCard = function (e) {
                var t = this;
                return r.prototype.cancelVerifyCard
                  .call(this)
                  .then(function (n) {
                    if (t._verifyCardPromisePlus) {
                      e =
                        e || new a(d.THREEDS_VERIFY_CARD_CANCELED_BY_MERCHANT);
                      t._verifyCardPromisePlus.reject(e);
                    }
                    return n;
                  });
              };
              T.prototype._removeSongbirdListeners = function () {
                this._cardinalEvents.forEach(function (e) {
                  window.Cardinal.off(e);
                });
                this._cardinalEvents = [];
              };
              T.prototype.teardown = function () {
                window.Cardinal && this._removeSongbirdListeners();
                return r.prototype.teardown.call(this);
              };
              function I(e, t, n) {
                t[n + "Line1"] = e.streetAddress;
                t[n + "Line2"] = e.extendedAddress;
                t[n + "Line3"] = e.line3;
                t[n + "City"] = e.locality;
                t[n + "State"] = e.region;
                t[n + "PostalCode"] = e.postalCode;
                t[n + "CountryCode"] = e.countryCodeAlpha2;
              }
              t.exports = T;
            },
            {
              "../../../lib/analytics": 126,
              "../../../lib/assets": 127,
              "../../../lib/assign": 128,
              "../../../lib/braintree-error": 131,
              "../../../lib/constants": 133,
              "../../../lib/convert-to-braintree-error": 135,
              "../../../lib/deferred": 139,
              "../../../lib/enumerate": 141,
              "../../../lib/promise": 164,
              "../../shared/constants": 200,
              "../../shared/errors": 201,
              "./base": 191,
              "@braintree/extended-promise": 40,
            },
          ],
          198: [
            function (e, t, n) {
              "use strict";
              var r = e("@braintree/wrap-promise"),
                i = e("../../lib/methods"),
                o = e("../../lib/convert-methods-to-error"),
                a = e("@braintree/event-emitter"),
                s = e("./frameworks");
              function c(e) {
                var t = this,
                  n = s[e.framework];
                a.call(this);
                this._framework = new n(e);
                this._framework.setUpEventListeners(function () {
                  t._emit.apply(t, arguments);
                });
              }
              a.createChild(c);
              c.prototype.verifyCard = function (e) {
                var t;
                this.hasListener("lookup-complete") &&
                  (t = { ignoreOnLookupCompleteRequirement: !0 });
                return this._framework.verifyCard(e, t);
              };
              c.prototype.initializeChallengeWithLookupResponse = function (e) {
                "string" == typeof e && (e = JSON.parse(e));
                return this._framework.initializeChallengeWithLookupResponse(e);
              };
              c.prototype.prepareLookup = function (e) {
                return this._framework.prepareLookup(e).then(function (e) {
                  return JSON.stringify(e);
                });
              };
              c.prototype.cancelVerifyCard = function () {
                return this._framework.cancelVerifyCard();
              };
              c.prototype.teardown = function () {
                var e = i(c.prototype).concat(i(a.prototype));
                o(this, e);
                return this._framework.teardown();
              };
              t.exports = r.wrapPrototype(c);
            },
            {
              "../../lib/convert-methods-to-error": 134,
              "../../lib/methods": 162,
              "./frameworks": 194,
              "@braintree/event-emitter": 39,
              "@braintree/wrap-promise": 49,
            },
          ],
          199: [
            function (e, t, n) {
              "use strict";
              var r = e("./external/three-d-secure"),
                i = e("../lib/is-https").isHTTPS,
                o = e("../lib/basic-component-verification"),
                a = e("../lib/create-deferred-client"),
                s = e("../lib/create-assets-url"),
                c = e("../lib/braintree-error"),
                u = e("../lib/analytics"),
                d = e("./shared/errors"),
                l = "3.85.5",
                p = e("../lib/promise"),
                _ = e("@braintree/wrap-promise");
              function E(e) {
                var t = "3D Secure";
                return o
                  .verify({
                    name: t,
                    client: e.client,
                    authorization: e.authorization,
                  })
                  .then(function () {
                    var n = s.create(e.authorization),
                      o = h(e),
                      l = a
                        .create({
                          authorization: e.authorization,
                          client: e.client,
                          debug: e.debug,
                          assetsUrl: n,
                          name: t,
                        })
                        .then(function (t) {
                          var n,
                            r = t.getConfiguration(),
                            a = r.gatewayConfiguration;
                          e.client = t;
                          a.threeDSecureEnabled || (n = d.THREEDS_NOT_ENABLED);
                          "TOKENIZATION_KEY" === r.authorizationType &&
                            (n = d.THREEDS_CAN_NOT_USE_TOKENIZATION_KEY);
                          "production" === a.environment &&
                            !i() &&
                            (n = d.THREEDS_HTTPS_REQUIRED);
                          if (
                            !(
                              "legacy" === o ||
                              (a.threeDSecure &&
                                a.threeDSecure.cardinalAuthenticationJWT)
                            )
                          ) {
                            u.sendEvent(
                              e.client,
                              "three-d-secure.initialization.failed.missing-cardinalAuthenticationJWT"
                            );
                            n = d.THREEDS_NOT_ENABLED_FOR_V2;
                          }
                          if (n) return p.reject(new c(n));
                          u.sendEvent(e.client, "three-d-secure.initialized");
                          return t;
                        }),
                      _ = new r({
                        client: e.client,
                        assetsUrl: n,
                        createPromise: l,
                        loggingEnabled: e.loggingEnabled,
                        cardinalSDKConfig: e.cardinalSDKConfig,
                        framework: o,
                      });
                    return e.client
                      ? l.then(function () {
                          return _;
                        })
                      : _;
                  });
              }
              function h(e) {
                var t = String(e.version || "");
                if (!t || "1" === t) return "legacy";
                switch (t) {
                  case "2":
                  case "2-cardinal-modal":
                    return "cardinal-modal";
                  case "2-bootstrap3-modal":
                    return "bootstrap3-modal";
                  case "2-inline-iframe":
                    return "inline-iframe";
                  default:
                    throw new c({
                      code: d.THREEDS_UNRECOGNIZED_VERSION.code,
                      type: d.THREEDS_UNRECOGNIZED_VERSION.type,
                      message:
                        "Version `" +
                        e.version +
                        "` is not a recognized version. You may need to update the version of your Braintree SDK to support this version.",
                    });
                }
              }
              t.exports = { create: _(E), VERSION: l };
            },
            {
              "../lib/analytics": 126,
              "../lib/basic-component-verification": 129,
              "../lib/braintree-error": 131,
              "../lib/create-assets-url": 136,
              "../lib/create-deferred-client": 138,
              "../lib/is-https": 159,
              "../lib/promise": 164,
              "./external/three-d-secure": 198,
              "./shared/errors": 201,
              "@braintree/wrap-promise": 49,
            },
          ],
          200: [
            function (e, t, n) {
              "use strict";
              t.exports = {
                LANDING_FRAME_NAME: "braintreethreedsecurelanding",
                CARDINAL_SCRIPT_SOURCE: {
                  production:
                    "https://songbird.cardinalcommerce.com/edge/v1/songbird.js",
                  sandbox:
                    "https://songbirdstag.cardinalcommerce.com/edge/v1/songbird.js",
                },
              };
            },
            {},
          ],
          201: [
            function (e, t, n) {
              "use strict";
              var r = e("../../lib/braintree-error");
              t.exports = {
                THREEDS_NOT_ENABLED: {
                  type: r.types.MERCHANT,
                  code: "THREEDS_NOT_ENABLED",
                  message: "3D Secure is not enabled for this merchant.",
                },
                THREEDS_CAN_NOT_USE_TOKENIZATION_KEY: {
                  type: r.types.MERCHANT,
                  code: "THREEDS_CAN_NOT_USE_TOKENIZATION_KEY",
                  message:
                    "3D Secure can not use a tokenization key for authorization.",
                },
                THREEDS_HTTPS_REQUIRED: {
                  type: r.types.MERCHANT,
                  code: "THREEDS_HTTPS_REQUIRED",
                  message: "3D Secure requires HTTPS.",
                },
                THREEDS_NOT_ENABLED_FOR_V2: {
                  type: r.types.MERCHANT,
                  code: "THREEDS_NOT_ENABLED_FOR_V2",
                  message:
                    "3D Secure version 2 is not enabled for this merchant. Contact Braintree Support for assistance at https://help.braintreepayments.com/",
                },
                THREEDS_UNRECOGNIZED_VERSION: {
                  type: r.types.MERCHANT,
                  code: "THREEDS_UNRECOGNIZED_VERSION",
                },
                THREEDS_CARDINAL_SDK_SETUP_FAILED: {
                  type: r.types.UNKNOWN,
                  code: "THREEDS_CARDINAL_SDK_SETUP_FAILED",
                  message:
                    "Something went wrong setting up Cardinal's Songbird.js library.",
                },
                THREEDS_CARDINAL_SDK_SCRIPT_LOAD_FAILED: {
                  type: r.types.NETWORK,
                  code: "THREEDS_CARDINAL_SDK_SCRIPT_LOAD_FAILED",
                  message:
                    "Cardinal's Songbird.js library could not be loaded.",
                },
                THREEDS_CARDINAL_SDK_SETUP_TIMEDOUT: {
                  type: r.types.UNKNOWN,
                  code: "THREEDS_CARDINAL_SDK_SETUP_TIMEDOUT",
                  message: "Cardinal's Songbird.js took too long to setup.",
                },
                THREEDS_CARDINAL_SDK_RESPONSE_TIMEDOUT: {
                  type: r.types.UNKNOWN,
                  code: "THREEDS_CARDINAL_SDK_RESPONSE_TIMEDOUT",
                  message: "Cardinal's API took too long to respond.",
                },
                THREEDS_CARDINAL_SDK_BAD_CONFIG: {
                  type: r.types.MERCHANT,
                  code: "THREEDS_CARDINAL_SDK_BAD_CONFIG",
                  message:
                    "JWT or other required field missing. Please check your setup configuration.",
                },
                THREEDS_CARDINAL_SDK_BAD_JWT: {
                  type: r.types.MERCHANT,
                  code: "THREEDS_CARDINAL_SDK_BAD_JWT",
                  message:
                    "Cardinal JWT missing or malformed. Please check your setup configuration.",
                },
                THREEDS_CARDINAL_SDK_ERROR: {
                  type: r.types.UNKNOWN,
                  code: "THREEDS_CARDINAL_SDK_ERROR",
                  message:
                    "A general error has occurred with Cardinal. See description for more information.",
                },
                THREEDS_CARDINAL_SDK_CANCELED: {
                  type: r.types.CUSTOMER,
                  code: "THREEDS_CARDINAL_SDK_CANCELED",
                  message: "Canceled by user.",
                },
                THREEDS_VERIFY_CARD_CANCELED_BY_MERCHANT: {
                  type: r.types.MERCHANT,
                  code: "THREEDS_VERIFY_CARD_CANCELED_BY_MERCHANT",
                  message: "3D Secure verfication canceled by merchant.",
                },
                THREEDS_AUTHENTICATION_IN_PROGRESS: {
                  type: r.types.MERCHANT,
                  code: "THREEDS_AUTHENTICATION_IN_PROGRESS",
                  message:
                    "Cannot call verifyCard while existing authentication is in progress.",
                },
                THREEDS_MISSING_VERIFY_CARD_OPTION: {
                  type: r.types.MERCHANT,
                  code: "THREEDS_MISSING_VERIFY_CARD_OPTION",
                },
                THREEDS_JWT_AUTHENTICATION_FAILED: {
                  type: r.types.UNKNOWN,
                  code: "THREEDS_JWT_AUTHENTICATION_FAILED",
                  message:
                    "Something went wrong authenticating the JWT from Cardinal",
                },
                THREEDS_LOOKUP_TOKENIZED_CARD_NOT_FOUND_ERROR: {
                  type: r.types.MERCHANT,
                  code: "THREEDS_LOOKUP_TOKENIZED_CARD_NOT_FOUND_ERROR",
                  message:
                    "Either the payment method nonce passed to `verifyCard` does not exist, or it was already consumed",
                },
                THREEDS_LOOKUP_VALIDATION_ERROR: {
                  type: r.types.CUSTOMER,
                  code: "THREEDS_LOOKUP_VALIDATION_ERROR",
                  message:
                    "The data passed in `verifyCard` did not pass validation checks. See details for more info",
                },
                THREEDS_LOOKUP_ERROR: {
                  type: r.types.UNKNOWN,
                  code: "THREEDS_LOOKUP_ERROR",
                  message: "Something went wrong during the 3D Secure lookup",
                },
                THREEDS_INLINE_IFRAME_DETAILS_INCORRECT: {
                  type: r.types.UNKNOWN,
                  code: "THREEDS_INLINE_IFRAME_DETAILS_INCORRECT",
                  message:
                    "Something went wrong when attempting to add the authentication iframe to the page.",
                },
                THREEDS_NO_VERIFICATION_PAYLOAD: {
                  type: r.types.MERCHANT,
                  code: "THREEDS_NO_VERIFICATION_PAYLOAD",
                  message: "No verification payload available.",
                },
                THREEDS_TERM_URL_REQUIRES_BRAINTREE_DOMAIN: {
                  type: r.types.INTERNAL,
                  code: "THREEDS_TERM_URL_REQUIRES_BRAINTREE_DOMAIN",
                  message: "Term Url must be on a Braintree domain.",
                },
                THREEDS_FRAMEWORK_METHOD_NOT_IMPLEMENTED: {
                  type: r.types.INTERNAL,
                  code: "THREEDS_FRAMEWORK_METHOD_NOT_IMPLEMENTED",
                  message: "Method not implemented for this framework.",
                },
              };
            },
            { "../../lib/braintree-error": 131 },
          ],
          202: [
            function (e, t, n) {
              "use strict";
              var r = e("../../lib/enumerate");
              t.exports = r(["AUTHENTICATION_COMPLETE"], "threedsecure:");
            },
            { "../../lib/enumerate": 141 },
          ],
          203: [
            function (e, t, n) {
              "use strict";
              var r = e("./shared/unionpay"),
                i = e("../lib/basic-component-verification"),
                o = e("../lib/braintree-error"),
                a = e("../lib/create-deferred-client"),
                s = e("../lib/create-assets-url"),
                c = e("../lib/analytics"),
                u = e("./shared/errors"),
                d = "3.85.5",
                l = e("../lib/promise"),
                p = e("@braintree/wrap-promise");
              function _(e) {
                var t = "UnionPay";
                return i
                  .verify({
                    name: t,
                    client: e.client,
                    authorization: e.authorization,
                  })
                  .then(function () {
                    return a.create({
                      authorization: e.authorization,
                      client: e.client,
                      debug: e.debug,
                      assetsUrl: s.create(e.authorization),
                      name: t,
                    });
                  })
                  .then(function (t) {
                    var n = t.getConfiguration();
                    e.client = t;
                    if (
                      !n.gatewayConfiguration.unionPay ||
                      !0 !== n.gatewayConfiguration.unionPay.enabled
                    )
                      return l.reject(new o(u.UNIONPAY_NOT_ENABLED));
                    c.sendEvent(e.client, "unionpay.initialized");
                    return new r(e);
                  });
              }
              t.exports = { create: p(_), VERSION: d };
            },
            {
              "../lib/analytics": 126,
              "../lib/basic-component-verification": 129,
              "../lib/braintree-error": 131,
              "../lib/create-assets-url": 136,
              "../lib/create-deferred-client": 138,
              "../lib/promise": 164,
              "./shared/errors": 205,
              "./shared/unionpay": 206,
              "@braintree/wrap-promise": 49,
            },
          ],
          204: [
            function (e, t, n) {
              "use strict";
              var r = e("../../lib/enumerate");
              t.exports = {
                events: r(
                  [
                    "HOSTED_FIELDS_FETCH_CAPABILITIES",
                    "HOSTED_FIELDS_ENROLL",
                    "HOSTED_FIELDS_TOKENIZE",
                  ],
                  "union-pay:"
                ),
                HOSTED_FIELDS_FRAME_NAME: "braintreeunionpayhostedfields",
              };
            },
            { "../../lib/enumerate": 141 },
          ],
          205: [
            function (e, t, n) {
              "use strict";
              var r = e("../../lib/braintree-error");
              t.exports = {
                UNIONPAY_NOT_ENABLED: {
                  type: r.types.MERCHANT,
                  code: "UNIONPAY_NOT_ENABLED",
                  message: "UnionPay is not enabled for this merchant.",
                },
                UNIONPAY_HOSTED_FIELDS_INSTANCE_INVALID: {
                  type: r.types.MERCHANT,
                  code: "UNIONPAY_HOSTED_FIELDS_INSTANCE_INVALID",
                  message:
                    "Found an invalid Hosted Fields instance. Please use a valid Hosted Fields instance.",
                },
                UNIONPAY_HOSTED_FIELDS_INSTANCE_REQUIRED: {
                  type: r.types.MERCHANT,
                  code: "UNIONPAY_HOSTED_FIELDS_INSTANCE_REQUIRED",
                  message: "Could not find the Hosted Fields instance.",
                },
                UNIONPAY_CARD_OR_HOSTED_FIELDS_INSTANCE_REQUIRED: {
                  type: r.types.MERCHANT,
                  code: "UNIONPAY_CARD_OR_HOSTED_FIELDS_INSTANCE_REQUIRED",
                  message:
                    "A card or a Hosted Fields instance is required. Please supply a card or a Hosted Fields instance.",
                },
                UNIONPAY_CARD_AND_HOSTED_FIELDS_INSTANCES: {
                  type: r.types.MERCHANT,
                  code: "UNIONPAY_CARD_AND_HOSTED_FIELDS_INSTANCES",
                  message:
                    "Please supply either a card or a Hosted Fields instance, not both.",
                },
                UNIONPAY_EXPIRATION_DATE_INCOMPLETE: {
                  type: r.types.MERCHANT,
                  code: "UNIONPAY_EXPIRATION_DATE_INCOMPLETE",
                  message:
                    "You must supply expiration month and year or neither.",
                },
                UNIONPAY_ENROLLMENT_CUSTOMER_INPUT_INVALID: {
                  type: r.types.CUSTOMER,
                  code: "UNIONPAY_ENROLLMENT_CUSTOMER_INPUT_INVALID",
                  message: "Enrollment failed due to user input error.",
                },
                UNIONPAY_ENROLLMENT_NETWORK_ERROR: {
                  type: r.types.NETWORK,
                  code: "UNIONPAY_ENROLLMENT_NETWORK_ERROR",
                  message: "Could not enroll UnionPay card.",
                },
                UNIONPAY_FETCH_CAPABILITIES_NETWORK_ERROR: {
                  type: r.types.NETWORK,
                  code: "UNIONPAY_FETCH_CAPABILITIES_NETWORK_ERROR",
                  message: "Could not fetch card capabilities.",
                },
                UNIONPAY_TOKENIZATION_NETWORK_ERROR: {
                  type: r.types.NETWORK,
                  code: "UNIONPAY_TOKENIZATION_NETWORK_ERROR",
                  message: "A tokenization network error occurred.",
                },
                UNIONPAY_MISSING_MOBILE_PHONE_DATA: {
                  type: r.types.MERCHANT,
                  code: "UNIONPAY_MISSING_MOBILE_PHONE_DATA",
                  message:
                    "A `mobile` with `countryCode` and `number` is required.",
                },
                UNIONPAY_FAILED_TOKENIZATION: {
                  type: r.types.CUSTOMER,
                  code: "UNIONPAY_FAILED_TOKENIZATION",
                  message: "The supplied card data failed tokenization.",
                },
              };
            },
            { "../../lib/braintree-error": 131 },
          ],
          206: [
            function (e, t, n) {
              "use strict";
              var r = e("../../lib/analytics"),
                i = e("../../lib/braintree-error"),
                o = e("framebus"),
                a = e("./constants"),
                s = e("../../lib/is-verified-domain"),
                c = e("../../lib/use-min"),
                u = e("../../lib/convert-methods-to-error"),
                d = e("./errors"),
                l = a.events,
                p = e("@braintree/iframer"),
                _ = e("../../lib/methods"),
                E = "3.85.5",
                h = e("@braintree/uuid"),
                f = e("../../lib/promise"),
                m = e("@braintree/wrap-promise"),
                y = e("../../lib/constants").BUS_CONFIGURATION_REQUEST_EVENT;
              function A(e) {
                this._options = e;
              }
              A.prototype.fetchCapabilities = function (e) {
                var t = this,
                  n = this._options.client,
                  o = e.card ? e.card.number : null,
                  a = e.hostedFields;
                return o && a
                  ? f.reject(new i(d.UNIONPAY_CARD_AND_HOSTED_FIELDS_INSTANCES))
                  : o
                  ? n
                      .request({
                        method: "get",
                        endpoint: "payment_methods/credit_cards/capabilities",
                        data: {
                          _meta: { source: "unionpay" },
                          creditCard: { number: o },
                        },
                      })
                      .then(function (e) {
                        r.sendEvent(n, "unionpay.capabilities-received");
                        return e;
                      })
                      .catch(function (e) {
                        var t = e.details && e.details.httpStatus;
                        r.sendEvent(n, "unionpay.capabilities-failed");
                        return 403 === t
                          ? f.reject(e)
                          : f.reject(
                              new i({
                                type: d
                                  .UNIONPAY_FETCH_CAPABILITIES_NETWORK_ERROR
                                  .type,
                                code: d
                                  .UNIONPAY_FETCH_CAPABILITIES_NETWORK_ERROR
                                  .code,
                                message:
                                  d.UNIONPAY_FETCH_CAPABILITIES_NETWORK_ERROR
                                    .message,
                                details: { originalError: e },
                              })
                            );
                      })
                  : a
                  ? a._bus
                    ? t._initializeHostedFields().then(function () {
                        return new f(function (e, n) {
                          t._bus.emit(
                            l.HOSTED_FIELDS_FETCH_CAPABILITIES,
                            { hostedFields: a },
                            function (t) {
                              t.err ? n(new i(t.err)) : e(t.payload);
                            }
                          );
                        });
                      })
                    : f.reject(new i(d.UNIONPAY_HOSTED_FIELDS_INSTANCE_INVALID))
                  : f.reject(
                      new i(d.UNIONPAY_CARD_OR_HOSTED_FIELDS_INSTANCE_REQUIRED)
                    );
              };
              A.prototype.enroll = function (e) {
                var t,
                  n = this,
                  o = this._options.client,
                  a = e.card,
                  s = e.mobile,
                  c = e.hostedFields;
                if (!s)
                  return f.reject(new i(d.UNIONPAY_MISSING_MOBILE_PHONE_DATA));
                if (c)
                  return c._bus
                    ? a
                      ? f.reject(
                          new i(d.UNIONPAY_CARD_AND_HOSTED_FIELDS_INSTANCES)
                        )
                      : new f(function (e, t) {
                          n._initializeHostedFields().then(function () {
                            n._bus.emit(
                              l.HOSTED_FIELDS_ENROLL,
                              { hostedFields: c, mobile: s },
                              function (n) {
                                n.err ? t(new i(n.err)) : e(n.payload);
                              }
                            );
                          });
                        })
                    : f.reject(
                        new i(d.UNIONPAY_HOSTED_FIELDS_INSTANCE_INVALID)
                      );
                if (a && a.number) {
                  t = {
                    _meta: { source: "unionpay" },
                    unionPayEnrollment: {
                      number: a.number,
                      mobileCountryCode: s.countryCode,
                      mobileNumber: s.number,
                    },
                  };
                  if (a.expirationDate)
                    t.unionPayEnrollment.expirationDate = a.expirationDate;
                  else if (a.expirationMonth || a.expirationYear) {
                    if (!a.expirationMonth || !a.expirationYear)
                      return f.reject(
                        new i(d.UNIONPAY_EXPIRATION_DATE_INCOMPLETE)
                      );
                    t.unionPayEnrollment.expirationYear = a.expirationYear;
                    t.unionPayEnrollment.expirationMonth = a.expirationMonth;
                  }
                  return o
                    .request({
                      method: "post",
                      endpoint: "union_pay_enrollments",
                      data: t,
                    })
                    .then(function (e) {
                      r.sendEvent(o, "unionpay.enrollment-succeeded");
                      return {
                        enrollmentId: e.unionPayEnrollmentId,
                        smsCodeRequired: e.smsCodeRequired,
                      };
                    })
                    .catch(function (e) {
                      var t,
                        n = e.details && e.details.httpStatus;
                      403 === n
                        ? (t = e)
                        : n < 500
                        ? ((t = new i(
                            d.UNIONPAY_ENROLLMENT_CUSTOMER_INPUT_INVALID
                          )).details = { originalError: e })
                        : ((t = new i(
                            d.UNIONPAY_ENROLLMENT_NETWORK_ERROR
                          )).details = { originalError: e });
                      r.sendEvent(o, "unionpay.enrollment-failed");
                      return f.reject(t);
                    });
                }
                return f.reject(
                  new i(d.UNIONPAY_CARD_OR_HOSTED_FIELDS_INSTANCE_REQUIRED)
                );
              };
              A.prototype.tokenize = function (e) {
                var t,
                  n = this,
                  o = this._options.client,
                  a = e.card,
                  s = e.hostedFields;
                if (a && s)
                  return f.reject(
                    new i(d.UNIONPAY_CARD_AND_HOSTED_FIELDS_INSTANCES)
                  );
                if (a) {
                  t = {
                    _meta: { source: "unionpay" },
                    creditCard: {
                      number: e.card.number,
                      options: { unionPayEnrollment: { id: e.enrollmentId } },
                    },
                  };
                  e.smsCode &&
                    (t.creditCard.options.unionPayEnrollment.smsCode =
                      e.smsCode);
                  if (a.expirationDate)
                    t.creditCard.expirationDate = a.expirationDate;
                  else if (a.expirationMonth && a.expirationYear) {
                    t.creditCard.expirationYear = a.expirationYear;
                    t.creditCard.expirationMonth = a.expirationMonth;
                  }
                  e.card.cvv && (t.creditCard.cvv = e.card.cvv);
                  return o
                    .request({
                      method: "post",
                      endpoint: "payment_methods/credit_cards",
                      data: t,
                    })
                    .then(function (e) {
                      var t = e.creditCards[0];
                      delete t.consumed;
                      delete t.threeDSecureInfo;
                      r.sendEvent(o, "unionpay.nonce-received");
                      return t;
                    })
                    .catch(function (e) {
                      var t,
                        n = e.details && e.details.httpStatus;
                      r.sendEvent(o, "unionpay.nonce-failed");
                      403 === n
                        ? (t = e)
                        : n < 500
                        ? ((t = new i(d.UNIONPAY_FAILED_TOKENIZATION)).details =
                            { originalError: e })
                        : ((t = new i(
                            d.UNIONPAY_TOKENIZATION_NETWORK_ERROR
                          )).details = { originalError: e });
                      return f.reject(t);
                    });
                }
                return s
                  ? s._bus
                    ? new f(function (t, r) {
                        n._initializeHostedFields().then(function () {
                          n._bus.emit(
                            l.HOSTED_FIELDS_TOKENIZE,
                            e,
                            function (e) {
                              e.err ? r(new i(e.err)) : t(e.payload);
                            }
                          );
                        });
                      })
                    : f.reject(new i(d.UNIONPAY_HOSTED_FIELDS_INSTANCE_INVALID))
                  : f.reject(
                      new i(d.UNIONPAY_CARD_OR_HOSTED_FIELDS_INSTANCE_REQUIRED)
                    );
              };
              A.prototype.teardown = function () {
                if (this._bus) {
                  this._hostedFieldsFrame.parentNode.removeChild(
                    this._hostedFieldsFrame
                  );
                  this._bus.teardown();
                }
                u(this, _(A.prototype));
                return f.resolve();
              };
              A.prototype._initializeHostedFields = function () {
                var e,
                  t,
                  n = h(),
                  r = this;
                if (this._hostedFieldsInitializePromise)
                  return this._hostedFieldsInitializePromise;
                this._hostedFieldsInitializePromise = new f(function (i) {
                  e =
                    r._options.client.getConfiguration().gatewayConfiguration
                      .assetsUrl;
                  t = r._options.client.getConfiguration().isDebug;
                  r._bus = new o({ channel: n, verifyDomain: s });
                  r._hostedFieldsFrame = p({
                    name: a.HOSTED_FIELDS_FRAME_NAME + "_" + n,
                    src:
                      e +
                      "/web/" +
                      E +
                      "/html/unionpay-hosted-fields-frame" +
                      c(t) +
                      ".html",
                    height: 0,
                    width: 0,
                  });
                  r._bus.on(y, function (e) {
                    e(r._options.client);
                    i();
                  });
                  document.body.appendChild(r._hostedFieldsFrame);
                });
                return this._hostedFieldsInitializePromise;
              };
              t.exports = m.wrapPrototype(A);
            },
            {
              "../../lib/analytics": 126,
              "../../lib/braintree-error": 131,
              "../../lib/constants": 133,
              "../../lib/convert-methods-to-error": 134,
              "../../lib/is-verified-domain": 160,
              "../../lib/methods": 162,
              "../../lib/promise": 164,
              "../../lib/use-min": 167,
              "./constants": 204,
              "./errors": 205,
              "@braintree/iframer": 41,
              "@braintree/uuid": 45,
              "@braintree/wrap-promise": 49,
              framebus: 58,
            },
          ],
          207: [
            function (e, t, n) {
              "use strict";
              t.exports = {
                PLAID_LINK_JS:
                  "https://cdn.plaid.com/link/v2/stable/link-initialize.js",
              };
            },
            {},
          ],
          208: [
            function (e, t, n) {
              "use strict";
              var r = e("../lib/braintree-error");
              t.exports = {
                US_BANK_ACCOUNT_OPTION_REQUIRED: {
                  type: r.types.MERCHANT,
                  code: "US_BANK_ACCOUNT_OPTION_REQUIRED",
                },
                US_BANK_ACCOUNT_MUTUALLY_EXCLUSIVE_OPTIONS: {
                  type: r.types.MERCHANT,
                  code: "US_BANK_ACCOUNT_MUTUALLY_EXCLUSIVE_OPTIONS",
                },
                US_BANK_ACCOUNT_LOGIN_LOAD_FAILED: {
                  type: r.types.NETWORK,
                  code: "US_BANK_ACCOUNT_LOGIN_LOAD_FAILED",
                  message: "Bank login flow failed to load.",
                },
                US_BANK_ACCOUNT_LOGIN_CLOSED: {
                  type: r.types.CUSTOMER,
                  code: "US_BANK_ACCOUNT_LOGIN_CLOSED",
                  message:
                    "Customer closed bank login flow before authorizing.",
                },
                US_BANK_ACCOUNT_LOGIN_REQUEST_ACTIVE: {
                  type: r.types.MERCHANT,
                  code: "US_BANK_ACCOUNT_LOGIN_REQUEST_ACTIVE",
                  message: "Another bank login tokenization request is active.",
                },
                US_BANK_ACCOUNT_TOKENIZATION_NETWORK_ERROR: {
                  type: r.types.NETWORK,
                  code: "US_BANK_ACCOUNT_TOKENIZATION_NETWORK_ERROR",
                  message: "A tokenization network error occurred.",
                },
                US_BANK_ACCOUNT_FAILED_TOKENIZATION: {
                  type: r.types.CUSTOMER,
                  code: "US_BANK_ACCOUNT_FAILED_TOKENIZATION",
                  message: "The supplied data failed tokenization.",
                },
                US_BANK_ACCOUNT_NOT_ENABLED: {
                  type: r.types.MERCHANT,
                  code: "US_BANK_ACCOUNT_NOT_ENABLED",
                  message: "US bank account is not enabled.",
                },
                US_BANK_ACCOUNT_BANK_LOGIN_NOT_ENABLED: {
                  type: r.types.MERCHANT,
                  code: "US_BANK_ACCOUNT_BANK_LOGIN_NOT_ENABLED",
                  message: "Bank login is not enabled.",
                },
              };
            },
            { "../lib/braintree-error": 131 },
          ],
          209: [
            function (e, t, n) {
              "use strict";
              var r = e("../lib/basic-component-verification"),
                i = e("../lib/braintree-error"),
                o = e("../lib/create-deferred-client"),
                a = e("../lib/create-assets-url"),
                s = e("./errors"),
                c = e("./us-bank-account"),
                u = "3.85.5",
                d = e("../lib/promise"),
                l = e("@braintree/wrap-promise");
              function p(e) {
                var t = "US Bank Account";
                return r
                  .verify({
                    name: t,
                    client: e.client,
                    authorization: e.authorization,
                  })
                  .then(function () {
                    return o.create({
                      authorization: e.authorization,
                      client: e.client,
                      debug: e.debug,
                      assetsUrl: a.create(e.authorization),
                      name: t,
                    });
                  })
                  .then(function (t) {
                    e.client = t;
                    return e.client.getConfiguration().gatewayConfiguration
                      .usBankAccount
                      ? new c(e)
                      : d.reject(new i(s.US_BANK_ACCOUNT_NOT_ENABLED));
                  });
              }
              t.exports = { create: l(p), VERSION: u };
            },
            {
              "../lib/basic-component-verification": 129,
              "../lib/braintree-error": 131,
              "../lib/create-assets-url": 136,
              "../lib/create-deferred-client": 138,
              "../lib/promise": 164,
              "./errors": 208,
              "./us-bank-account": 210,
              "@braintree/wrap-promise": 49,
            },
          ],
          210: [
            function (e, t, n) {
              "use strict";
              var r = e("../lib/braintree-error"),
                i = e("./constants"),
                o = e("./errors"),
                a = e("../lib/errors"),
                s = e("../lib/analytics"),
                c = e("../lib/once"),
                u = e("../lib/convert-methods-to-error"),
                d = e("../lib/methods"),
                l = e("../lib/promise"),
                p = e("@braintree/wrap-promise"),
                _ = I("UsBankAccount"),
                E = I("UsBankLogin");
              function h(e) {
                this._client = e.client;
                this._isTokenizingBankLogin = !1;
                s.sendEvent(this._client, "usbankaccount.initialized");
              }
              h.prototype.tokenize = function (e) {
                return (e = e || {}).mandateText
                  ? e.bankDetails && e.bankLogin
                    ? l.reject(
                        new r({
                          type: o.US_BANK_ACCOUNT_MUTUALLY_EXCLUSIVE_OPTIONS
                            .type,
                          code: o.US_BANK_ACCOUNT_MUTUALLY_EXCLUSIVE_OPTIONS
                            .code,
                          message:
                            "tokenize must be called with bankDetails or bankLogin, not both.",
                        })
                      )
                    : e.bankDetails
                    ? this._tokenizeBankDetails(e)
                    : e.bankLogin
                    ? this._tokenizeBankLogin(e)
                    : l.reject(
                        new r({
                          type: o.US_BANK_ACCOUNT_OPTION_REQUIRED.type,
                          code: o.US_BANK_ACCOUNT_OPTION_REQUIRED.code,
                          message:
                            "tokenize must be called with bankDetails or bankLogin.",
                        })
                      )
                  : l.reject(
                      new r({
                        type: o.US_BANK_ACCOUNT_OPTION_REQUIRED.type,
                        code: o.US_BANK_ACCOUNT_OPTION_REQUIRED.code,
                        message: "mandateText property is required.",
                      })
                    );
              };
              h.prototype._tokenizeBankDetails = function (e) {
                var t = this._client,
                  n = e.bankDetails,
                  r = {
                    achMandate: e.mandateText,
                    routingNumber: n.routingNumber,
                    accountNumber: n.accountNumber,
                    accountType: n.accountType.toUpperCase(),
                    billingAddress: A(n.billingAddress || {}),
                  };
                T(r, n);
                return t
                  .request({
                    api: "graphQLApi",
                    data: {
                      query: _,
                      variables: { input: { usBankAccount: r } },
                    },
                  })
                  .then(function (e) {
                    s.sendEvent(
                      t,
                      "usbankaccount.bankdetails.tokenization.succeeded"
                    );
                    return l.resolve(m(e, "tokenizeUsBankAccount"));
                  })
                  .catch(function (e) {
                    var n = f(e);
                    s.sendEvent(
                      t,
                      "usbankaccount.bankdetails.tokenization.failed"
                    );
                    return l.reject(n);
                  });
              };
              h.prototype._tokenizeBankLogin = function (e) {
                var t = this,
                  n = this._client,
                  i = n.getConfiguration().gatewayConfiguration,
                  a = "production" === i.environment,
                  c = i.usBankAccount.plaid;
                if (!e.bankLogin.displayName)
                  return l.reject(
                    new r({
                      type: o.US_BANK_ACCOUNT_OPTION_REQUIRED.type,
                      code: o.US_BANK_ACCOUNT_OPTION_REQUIRED.code,
                      message:
                        "displayName property is required when using bankLogin.",
                    })
                  );
                if (!c)
                  return l.reject(
                    new r(o.US_BANK_ACCOUNT_BANK_LOGIN_NOT_ENABLED)
                  );
                if (this._isTokenizingBankLogin)
                  return l.reject(
                    new r(o.US_BANK_ACCOUNT_LOGIN_REQUEST_ACTIVE)
                  );
                this._isTokenizingBankLogin = !0;
                return new l(function (i, u) {
                  t._loadPlaid(function (d, l) {
                    if (d) u(d);
                    else {
                      l.create({
                        clientName: e.bankLogin.displayName,
                        apiVersion: "v2",
                        env: a ? "production" : "sandbox",
                        key: c.publicKey,
                        product: "auth",
                        selectAccount: !0,
                        onExit: function () {
                          t._isTokenizingBankLogin = !1;
                          s.sendEvent(
                            n,
                            "usbankaccount.banklogin.tokenization.closed.by-user"
                          );
                          u(new r(o.US_BANK_ACCOUNT_LOGIN_CLOSED));
                        },
                        onSuccess: function (r, o) {
                          var c = e.bankLogin,
                            d = {
                              publicToken: r,
                              accountId: a ? o.account_id : "plaid_account_id",
                              accountType: o.account.subtype.toUpperCase(),
                              achMandate: e.mandateText,
                              billingAddress: A(c.billingAddress || {}),
                            };
                          T(d, c);
                          n.request({
                            api: "graphQLApi",
                            data: {
                              query: E,
                              variables: { input: { usBankLogin: d } },
                            },
                          })
                            .then(function (e) {
                              t._isTokenizingBankLogin = !1;
                              s.sendEvent(
                                n,
                                "usbankaccount.banklogin.tokenization.succeeded"
                              );
                              i(m(e, "tokenizeUsBankLogin"));
                            })
                            .catch(function (e) {
                              var r;
                              t._isTokenizingBankLogin = !1;
                              r = f(e);
                              s.sendEvent(
                                n,
                                "usbankaccount.banklogin.tokenization.failed"
                              );
                              u(r);
                            });
                        },
                      }).open();
                      s.sendEvent(
                        n,
                        "usbankaccount.banklogin.tokenization.started"
                      );
                    }
                  });
                });
              };
              function f(e) {
                var t,
                  n = e.details && e.details.httpStatus;
                (t = new r(
                  401 === n
                    ? a.BRAINTREE_API_ACCESS_RESTRICTED
                    : n < 500
                    ? o.US_BANK_ACCOUNT_FAILED_TOKENIZATION
                    : o.US_BANK_ACCOUNT_TOKENIZATION_NETWORK_ERROR
                )).details = { originalError: e };
                return t;
              }
              function m(e, t) {
                var n = e.data[t].paymentMethod,
                  r = "US bank account ending in - " + n.details.last4;
                return {
                  nonce: n.id,
                  details: {},
                  description: r,
                  type: "us_bank_account",
                };
              }
              h.prototype._loadPlaid = function (e) {
                var t, n;
                e = c(e);
                if (window.Plaid) e(null, window.Plaid);
                else if (
                  (t = document.querySelector(
                    'script[src="' + i.PLAID_LINK_JS + '"]'
                  ))
                )
                  y(t, e);
                else {
                  (n = document.createElement("script")).src = i.PLAID_LINK_JS;
                  n.async = !0;
                  y(n, e);
                  document.body.appendChild(n);
                  this._plaidScript = n;
                }
              };
              function y(e, t) {
                function n() {
                  var e = this.readyState;
                  if (!e || "loaded" === e || "complete" === e) {
                    a();
                    t(null, window.Plaid);
                  }
                }
                function i() {
                  e.parentNode.removeChild(e);
                  t(new r(o.US_BANK_ACCOUNT_LOGIN_LOAD_FAILED));
                }
                function a() {
                  e.removeEventListener("error", i);
                  e.removeEventListener("load", n);
                  e.removeEventListener("readystatechange", n);
                }
                e.addEventListener("error", i);
                e.addEventListener("load", n);
                e.addEventListener("readystatechange", n);
              }
              function A(e) {
                return {
                  streetAddress: e.streetAddress,
                  extendedAddress: e.extendedAddress,
                  city: e.locality,
                  state: e.region,
                  zipCode: e.postalCode,
                };
              }
              function T(e, t) {
                "personal" === t.ownershipType
                  ? (e.individualOwner = {
                      firstName: t.firstName,
                      lastName: t.lastName,
                    })
                  : "business" === t.ownershipType &&
                    (e.businessOwner = { businessName: t.businessName });
              }
              function I(e) {
                return (
                  "mutation Tokenize" +
                  e +
                  "($input: Tokenize" +
                  e +
                  "Input!) {  tokenize" +
                  e +
                  "(input: $input) {    paymentMethod {      id      details {        ... on UsBankAccountDetails {          last4        }      }    }  }}"
                );
              }
              h.prototype.teardown = function () {
                this._plaidScript &&
                  document.body.removeChild(this._plaidScript);
                u(this, d(h.prototype));
                return l.resolve();
              };
              t.exports = p.wrapPrototype(h);
            },
            {
              "../lib/analytics": 126,
              "../lib/braintree-error": 131,
              "../lib/convert-methods-to-error": 134,
              "../lib/errors": 142,
              "../lib/methods": 162,
              "../lib/once": 163,
              "../lib/promise": 164,
              "./constants": 207,
              "./errors": 208,
              "@braintree/wrap-promise": 49,
            },
          ],
          211: [
            function (e, t, n) {
              "use strict";
              var r = e("../lib/braintree-error");
              t.exports = {
                VAULT_MANAGER_DELETE_PAYMENT_METHOD_NONCE_REQUIRES_CLIENT_TOKEN:
                  {
                    type: r.types.MERCHANT,
                    code: "VAULT_MANAGER_DELETE_PAYMENT_METHOD_NONCE_REQUIRES_CLIENT_TOKEN",
                    message:
                      "A client token with a customer id must be used to delete a payment method nonce.",
                  },
                VAULT_MANAGER_PAYMENT_METHOD_NONCE_NOT_FOUND: {
                  type: r.types.MERCHANT,
                  code: "VAULT_MANAGER_PAYMENT_METHOD_NONCE_NOT_FOUND",
                },
                VAULT_MANAGER_DELETE_PAYMENT_METHOD_UNKNOWN_ERROR: {
                  type: r.types.UNKNOWN,
                  code: "VAULT_MANAGER_DELETE_PAYMENT_METHOD_UNKNOWN_ERROR",
                },
              };
            },
            {
              "../lib/braintree-error": 131,
            },
          ],
          212: [
            function (e, t, n) {
              "use strict";
              var r = e("../lib/basic-component-verification"),
                i = e("../lib/create-deferred-client"),
                o = e("../lib/create-assets-url"),
                a = e("./vault-manager"),
                s = "3.85.5",
                c = e("@braintree/wrap-promise");
              function u(e) {
                var t = "Vault Manager";
                return r
                  .verify({
                    name: t,
                    client: e.client,
                    authorization: e.authorization,
                  })
                  .then(function () {
                    return new a({
                      createPromise: i.create({
                        authorization: e.authorization,
                        client: e.client,
                        debug: e.debug,
                        assetsUrl: o.create(e.authorization),
                        name: t,
                      }),
                    });
                  });
              }
              t.exports = { create: c(u), VERSION: s };
            },
            {
              "../lib/basic-component-verification": 129,
              "../lib/create-assets-url": 136,
              "../lib/create-deferred-client": 138,
              "./vault-manager": 213,
              "@braintree/wrap-promise": 49,
            },
          ],
          213: [
            function (e, t, n) {
              "use strict";
              var r = e("../lib/analytics"),
                i = e("../lib/braintree-error"),
                o = e("./errors"),
                a = e("../lib/convert-methods-to-error"),
                s = e("../lib/methods"),
                c = e("../lib/promise"),
                u = e("@braintree/wrap-promise"),
                d =
                  "mutation DeletePaymentMethodFromSingleUseToken($input: DeletePaymentMethodFromSingleUseTokenInput!) {  deletePaymentMethodFromSingleUseToken(input: $input) {    clientMutationId  }}";
              function l(e) {
                this._createPromise = e.createPromise;
              }
              l.prototype.fetchPaymentMethods = function (e) {
                var t;
                t = !0 === (e = e || {}).defaultFirst ? 1 : 0;
                return this._createPromise
                  .then(function (e) {
                    return e.request({
                      endpoint: "payment_methods",
                      method: "get",
                      data: { defaultFirst: t },
                    });
                  })
                  .then(
                    function (e) {
                      r.sendEvent(
                        this._createPromise,
                        "vault-manager.fetch-payment-methods.succeeded"
                      );
                      return e.paymentMethods.map(p);
                    }.bind(this)
                  );
              };
              l.prototype.deletePaymentMethod = function (e) {
                return this._createPromise.then(function (t) {
                  return "CLIENT_TOKEN" ===
                    t.getConfiguration().authorizationType
                    ? t
                        .request({
                          api: "graphQLApi",
                          data: {
                            query: d,
                            variables: {
                              input: {
                                singleUseTokenId: e,
                              },
                            },
                            operationName:
                              "DeletePaymentMethodFromSingleUseToken",
                          },
                        })
                        .then(function () {
                          r.sendEvent(
                            t,
                            "vault-manager.delete-payment-method.succeeded"
                          );
                        })
                        .catch(function (n) {
                          var a,
                            s = n.details.originalError;
                          r.sendEvent(
                            t,
                            "vault-manager.delete-payment-method.failed"
                          );
                          s[0] &&
                            "NOT_FOUND" === s[0].extensions.errorClass &&
                            (a = new i({
                              type: o
                                .VAULT_MANAGER_PAYMENT_METHOD_NONCE_NOT_FOUND
                                .type,
                              code: o
                                .VAULT_MANAGER_PAYMENT_METHOD_NONCE_NOT_FOUND
                                .code,
                              message:
                                "A payment method for payment method nonce `" +
                                e +
                                "` could not be found.",
                              details: { originalError: s },
                            }));
                          a ||
                            (a = new i({
                              type: o
                                .VAULT_MANAGER_DELETE_PAYMENT_METHOD_UNKNOWN_ERROR
                                .type,
                              code: o
                                .VAULT_MANAGER_DELETE_PAYMENT_METHOD_UNKNOWN_ERROR
                                .code,
                              message:
                                "An unknown error occured when attempting to delete the payment method assocaited with the payment method nonce `" +
                                e +
                                "`.",
                              details: { originalError: s },
                            }));
                          return c.reject(a);
                        })
                    : c.reject(
                        new i(
                          o.VAULT_MANAGER_DELETE_PAYMENT_METHOD_NONCE_REQUIRES_CLIENT_TOKEN
                        )
                      );
                });
              };
              function p(e) {
                var t = {
                  nonce: e.nonce,
                  default: e.default,
                  details: e.details,
                  hasSubscription: e.hasSubscription,
                  type: e.type,
                };
                e.description && (t.description = e.description);
                e.binData && (t.binData = e.binData);
                return t;
              }
              l.prototype.teardown = function () {
                a(this, s(l.prototype));
                return c.resolve();
              };
              t.exports = u.wrapPrototype(l);
            },
            {
              "../lib/analytics": 126,
              "../lib/braintree-error": 131,
              "../lib/convert-methods-to-error": 134,
              "../lib/methods": 162,
              "../lib/promise": 164,
              "./errors": 211,
              "@braintree/wrap-promise": 49,
            },
          ],
          214: [
            function (e, t, n) {
              "use strict";
              var r = (
                (this && this.__importDefault) ||
                function (e) {
                  return e && e.__esModule ? e : { default: e };
                }
              )(e("./venmo-desktop"));
              t.exports = function (e) {
                return new r.default(e).initialize();
              };
            },
            { "./venmo-desktop": 216 },
          ],
          215: [
            function (e, t, n) {
              "use strict";
              Object.defineProperty(n, "__esModule", { value: !0 });
              n.VENMO_PAYMENT_CONTEXT_STATUS_QUERY =
                n.LEGACY_VENMO_PAYMENT_CONTEXT_STATUS_QUERY =
                n.UPDATE_PAYMENT_CONTEXT_QUERY =
                n.LEGACY_UPDATE_PAYMENT_CONTEXT_QUERY =
                n.CREATE_PAYMENT_CONTEXT_QUERY =
                n.LEGACY_CREATE_PAYMENT_CONTEXT_QUERY =
                  void 0;
              n.LEGACY_CREATE_PAYMENT_CONTEXT_QUERY =
                "mutation CreateVenmoQRCodePaymentContext($input: CreateVenmoQRCodePaymentContextInput!) {\n  createVenmoQRCodePaymentContext(input: $input) {\n    clientMutationId\n    venmoQRCodePaymentContext {\n      id\n      merchantId\n      createdAt\n      expiresAt\n    }\n  }\n}";
              n.CREATE_PAYMENT_CONTEXT_QUERY =
                "mutation CreateVenmoPaymentContext($input: CreateVenmoPaymentContextInput!) {\n  createVenmoPaymentContext(input: $input) {\n    clientMutationId\n    venmoPaymentContext {\n      id\n      merchantId\n      createdAt\n      expiresAt\n    }\n  }\n}";
              n.LEGACY_UPDATE_PAYMENT_CONTEXT_QUERY =
                "mutation UpdateVenmoQRCodePaymentContext($input: UpdateVenmoQRCodePaymentContextInput!) {\n  updateVenmoQRCodePaymentContext(input: $input) {\n    clientMutationId\n  }\n}";
              n.UPDATE_PAYMENT_CONTEXT_QUERY =
                "mutation UpdateVenmoPaymentContextStatus($input: UpdateVenmoPaymentContextStatusInput!) {\n  updateVenmoPaymentContextStatus(input: $input) {\n    clientMutationId\n  }\n}";
              n.LEGACY_VENMO_PAYMENT_CONTEXT_STATUS_QUERY =
                "query PaymentContext($id: ID!) {\n  node(id: $id) {\n    ... on VenmoQRCodePaymentContext {\n      status\n      paymentMethodId\n      userName\n    }\n  }\n}";
              n.VENMO_PAYMENT_CONTEXT_STATUS_QUERY =
                "query PaymentContext($id: ID!) {\n  node(id: $id) {\n    ... on VenmoPaymentContext {\n      status\n      paymentMethodId\n      userName\n      payerInfo {\n        firstName\n        lastName\n        phoneNumber\n        email\n        externalId\n        userName\n      }\n    }\n  }\n}";
            },
            {},
          ],
          216: [
            function (e, t, n) {
              "use strict";
              var r =
                  (this && this.__assign) ||
                  function () {
                    r =
                      Object.assign ||
                      function (e) {
                        for (var t, n = 1, r = arguments.length; n < r; n++) {
                          t = arguments[n];
                          for (var i in t)
                            Object.prototype.hasOwnProperty.call(t, i) &&
                              (e[i] = t[i]);
                        }
                        return e;
                      };
                    return r.apply(this, arguments);
                  },
                i =
                  (this && this.__importDefault) ||
                  function (e) {
                    return e && e.__esModule ? e : { default: e };
                  };
              Object.defineProperty(n, "__esModule", { value: !0 });
              var o = i(e("framebus")),
                a = i(e("@braintree/iframer")),
                s = i(e("@braintree/uuid")),
                c = e("../shared/events"),
                u = e("./queries"),
                d = 1e3,
                l = 2e3,
                p = (function () {
                  function e(e) {
                    this.isHidden = !0;
                    this.env = e.environment;
                    this.id = s.default();
                    this.profileId = e.profileId;
                    this.displayName = e.displayName;
                    this.paymentMethodUsage = e.paymentMethodUsage;
                    this.shouldUseLegacyQRCodeMutation =
                      !this.paymentMethodUsage;
                    var t = e.url + "#" + this.env + "_" + this.id;
                    this.bus = new o.default({
                      channel: this.id,
                      verifyDomain: e.verifyDomain,
                    });
                    this.apiRequest = e.apiRequest;
                    this.sendEvent = e.sendEvent;
                    this.Promise = e.Promise;
                    this.alertBox = document.createElement("div");
                    this.alertBox.setAttribute(
                      "data-venmo-desktop-id",
                      this.id
                    );
                    this.alertBox.setAttribute("role", "alert");
                    this.alertBox.style.position = "fixed";
                    this.alertBox.style.display = "none";
                    this.alertBox.style.height = "1px";
                    this.alertBox.style.width = "1px";
                    this.alertBox.style.overflow = "hidden";
                    this.alertBox.style.zIndex = "0";
                    this.iframe = a.default({
                      src: t,
                      name: "venmo-desktop-iframe",
                      style: {
                        display: "none",
                        position: "fixed",
                        top: "0",
                        bottom: "0",
                        right: "0",
                        left: "0",
                        height: "100%",
                        width: "100%",
                        zIndex: "9999999",
                      },
                      title: "Venmo Desktop",
                    });
                  }
                  e.prototype.initialize = function () {
                    var e = this;
                    return new this.Promise(function (t) {
                      e.bus.on(c.VENMO_DESKTOP_IFRAME_READY, function () {
                        t(e);
                      });
                      e.bus.on(
                        c.VENMO_DESKTOP_REQUEST_NEW_QR_CODE,
                        function () {
                          e.sendEvent(
                            "venmo.tokenize.desktop.restarted-from-error-view"
                          );
                          e.startPolling();
                        }
                      );
                      document.body.appendChild(e.iframe);
                      document.body.appendChild(e.alertBox);
                    });
                  };
                  e.prototype.launchDesktopFlow = function () {
                    var e = this;
                    this.isHidden = !1;
                    var t = new this.Promise(function (t, n) {
                      e.launchDesktopPromiseRejectFunction = n;
                      var r = function () {
                          e.bus.off(c.VENMO_DESKTOP_CUSTOMER_CANCELED, o);
                          e.bus.off(c.VENMO_DESKTOP_AUTHORIZATION_COMPLETED, a);
                          e.bus.off(c.VENMO_DESKTOP_UNKNOWN_ERROR, i);
                        },
                        i = function (t) {
                          r();
                          e.sendEvent("venmo.tokenize.desktop.unknown-error");
                          n({
                            allowUIToHandleError: !1,
                            reason: "UNKNOWN_ERROR",
                            err: t,
                          });
                        },
                        o = function () {
                          r();
                          e.updateVenmoDesktopPaymentContext("CANCELED");
                          e.sendEvent(
                            "venmo.tokenize.desktop.status-change.canceled-from-modal"
                          );
                          n({
                            allowUIToHandleError: !1,
                            reason: "CUSTOMER_CANCELED",
                          });
                        },
                        a = function (e) {
                          r();
                          t(e);
                        };
                      e.bus.on(c.VENMO_DESKTOP_CUSTOMER_CANCELED, o);
                      e.bus.on(c.VENMO_DESKTOP_AUTHORIZATION_COMPLETED, a);
                      e.bus.on(c.VENMO_DESKTOP_UNKNOWN_ERROR, i);
                    });
                    this.iframe.style.display = "block";
                    this.setAlert(
                      "Generating a QR code, get your Venmo app ready"
                    );
                    this.iframe.focus();
                    this.startPolling();
                    return t
                      .then(function (t) {
                        delete e.venmoContextId;
                        delete e.launchDesktopPromiseRejectFunction;
                        return t;
                      })
                      .catch(function (t) {
                        delete e.venmoContextId;
                        delete e.launchDesktopPromiseRejectFunction;
                        return e.Promise.reject(t);
                      });
                  };
                  e.prototype.triggerCompleted = function (e) {
                    var t = this;
                    this.isHidden ||
                      setTimeout(function () {
                        t.bus.emit(c.VENMO_DESKTOP_AUTHORIZATION_COMPLETED, e);
                      }, l);
                  };
                  e.prototype.triggerRejected = function (e) {
                    this.launchDesktopPromiseRejectFunction &&
                      this.launchDesktopPromiseRejectFunction(e);
                  };
                  e.prototype.hideDesktopFlow = function () {
                    this.setAlert("");
                    this.iframe.style.display = "none";
                    this.bus.emit(c.VENMO_DESKTOP_CLOSED_FROM_PARENT);
                    this.isHidden = !0;
                  };
                  e.prototype.displayError = function (e) {
                    if (!this.isHidden) {
                      this.bus.emit(c.VENMO_DESKTOP_DISPLAY_ERROR, {
                        message: e,
                      });
                      this.setAlert(e);
                    }
                  };
                  e.prototype.displayQRCode = function (e, t) {
                    if (!this.isHidden) {
                      this.bus.emit(c.VENMO_DESKTOP_DISPLAY_QR_CODE, {
                        id: e,
                        merchantId: t,
                      });
                      this.setAlert("To scan the QR code, open your Venmo app");
                    }
                  };
                  e.prototype.authorize = function () {
                    if (!this.isHidden) {
                      this.bus.emit(c.VENMO_DESKTOP_AUTHORIZE);
                      this.setAlert("Venmo account authorized");
                    }
                  };
                  e.prototype.authorizing = function () {
                    if (!this.isHidden) {
                      this.bus.emit(c.VENMO_DESKTOP_AUTHORIZING);
                      this.setAlert("Authorize on your Venmo app");
                    }
                  };
                  e.prototype.startPolling = function () {
                    var e = this;
                    return this.createVenmoDesktopPaymentContext()
                      .then(function (t) {
                        var n =
                            new Date(t.expiresAt).getTime() -
                            new Date(t.createdAt).getTime(),
                          r = Date.now() + n;
                        e.displayQRCode(t.id, t.merchantId);
                        return e.pollForStatusChange(t.status, r);
                      })
                      .then(function (t) {
                        if (t) {
                          var n = t.userName || "";
                          n = "@" + n.replace("@", "");
                          e.triggerCompleted({
                            paymentMethodNonce: t.paymentMethodId,
                            username: n,
                            payerInfo: t.payerInfo,
                            id: e.venmoContextId || "",
                          });
                        }
                      })
                      .catch(function (t) {
                        if (!t.allowUIToHandleError) {
                          e.sendEvent("venmo.tokenize.desktop.unhandled-error");
                          e.triggerRejected(t);
                        }
                      });
                  };
                  e.prototype.pollForStatusChange = function (e, t) {
                    var n = this;
                    return this.venmoContextId
                      ? Date.now() > t
                        ? this.updateVenmoDesktopPaymentContext("EXPIRED").then(
                            function () {
                              n.displayError("Something went wrong");
                              n.sendEvent(
                                "venmo.tokenize.desktop.status-change.sdk-timeout"
                              );
                              return n.Promise.reject({
                                allowUIToHandleError: !0,
                                reason: "TIMEOUT",
                              });
                            }
                          )
                        : this.lookupVenmoDesktopPaymentContext().then(
                            function (r) {
                              if (!n.venmoContextId || !r)
                                return n.Promise.resolve();
                              var i = r.status;
                              if (i !== e) {
                                e = i;
                                n.sendEvent(
                                  "venmo.tokenize.desktop.status-change." +
                                    e.toLowerCase()
                                );
                                switch (e) {
                                  case "CREATED":
                                    break;
                                  case "EXPIRED":
                                  case "FAILED":
                                  case "CANCELED":
                                    var o =
                                      "CANCELED" === e
                                        ? "The authorization was canceled"
                                        : "Something went wrong";
                                    n.displayError(o);
                                    return n.Promise.reject({
                                      allowUIToHandleError: !0,
                                      reason: e,
                                    });
                                  case "SCANNED":
                                    n.authorizing();
                                    break;
                                  case "APPROVED":
                                    n.authorize();
                                    return n.Promise.resolve(r);
                                }
                              }
                              return new n.Promise(function (r, i) {
                                setTimeout(function () {
                                  n.pollForStatusChange(e, t).then(r).catch(i);
                                }, d);
                              });
                            }
                          )
                      : this.Promise.resolve();
                  };
                  e.prototype.teardown = function () {
                    this.bus.teardown();
                    this.iframe.parentNode &&
                      this.iframe.parentNode.removeChild(this.iframe);
                    this.alertBox.parentNode &&
                      this.alertBox.parentNode.removeChild(this.alertBox);
                  };
                  e.prototype.setAlert = function (e) {
                    this.alertBox.style.display = e ? "block" : "none";
                    this.alertBox.textContent = e;
                  };
                  e.prototype.createPaymentContextFromGraphqlLegacyQRCodeMutation =
                    function (e) {
                      return this.apiRequest(
                        u.LEGACY_CREATE_PAYMENT_CONTEXT_QUERY,
                        {
                          input: {
                            environment: this.env,
                            intent: e,
                          },
                        }
                      ).then(function (e) {
                        return e
                          .createVenmoQRCodePaymentContext.venmoQRCodePaymentContext;
                      });
                    };
                  e.prototype.createPaymentContextFromGraphQL = function (e) {
                    var t = {
                      intent: e,
                      paymentMethodUsage: this.paymentMethodUsage,
                      customerClient: "DESKTOP",
                    };
                    this.profileId && (t.merchantProfileId = this.profileId);
                    this.displayName && (t.displayName = this.displayName);
                    return this.apiRequest(u.CREATE_PAYMENT_CONTEXT_QUERY, {
                      input: t,
                    }).then(function (e) {
                      return e.createVenmoPaymentContext.venmoPaymentContext;
                    });
                  };
                  e.prototype.createVenmoDesktopPaymentContext = function () {
                    var e = this;
                    return (
                      this.shouldUseLegacyQRCodeMutation
                        ? this.createPaymentContextFromGraphqlLegacyQRCodeMutation(
                            "PAY_FROM_APP"
                          )
                        : this.createPaymentContextFromGraphQL("PAY_FROM_APP")
                    ).then(function (t) {
                      e.venmoContextId = t.id;
                      var n = e.profileId || t.merchantId;
                      return {
                        id: t.id,
                        status: t.status,
                        merchantId: n,
                        createdAt: t.createdAt,
                        expiresAt: t.expiresAt,
                      };
                    });
                  };
                  e.prototype.updateVenmoDesktopPaymentContext = function (
                    e,
                    t
                  ) {
                    void 0 === t && (t = {});
                    if (!this.venmoContextId) return this.Promise.resolve();
                    var n = {
                        input: r({ id: this.venmoContextId, status: e }, t),
                      },
                      i = this.shouldUseLegacyQRCodeMutation
                        ? u.LEGACY_UPDATE_PAYMENT_CONTEXT_QUERY
                        : u.UPDATE_PAYMENT_CONTEXT_QUERY;
                    return this.apiRequest(i, n).then(function () {});
                  };
                  e.prototype.lookupVenmoDesktopPaymentContext = function () {
                    if (!this.venmoContextId) return this.Promise.resolve();
                    var e = this.shouldUseLegacyQRCodeMutation
                      ? u.LEGACY_VENMO_PAYMENT_CONTEXT_STATUS_QUERY
                      : u.VENMO_PAYMENT_CONTEXT_STATUS_QUERY;
                    return this.apiRequest(e, { id: this.venmoContextId }).then(
                      function (e) {
                        return e.node;
                      }
                    );
                  };
                  return e;
                })();
              n.default = p;
            },
            {
              "../shared/events": 221,
              "./queries": 215,
              "@braintree/iframer": 41,
              "@braintree/uuid": 45,
              framebus: 58,
            },
          ],
          217: [
            function (e, t, n) {
              "use strict";
              var r = e("../lib/analytics"),
                i = e("../lib/basic-component-verification"),
                o = e("../lib/create-deferred-client"),
                a = e("../lib/create-assets-url"),
                s = e("./shared/errors"),
                c = e("@braintree/wrap-promise"),
                u = e("../lib/braintree-error"),
                d = e("./venmo"),
                l = e("../lib/promise"),
                p = e("./shared/supports-venmo"),
                _ = "3.85.5";
              function E(e) {
                var t = "Venmo";
                return i
                  .verify({
                    name: t,
                    client: e.client,
                    authorization: e.authorization,
                  })
                  .then(function () {
                    var n, i;
                    if (e.profileId && "string" != typeof e.profileId)
                      return l.reject(new u(s.VENMO_INVALID_PROFILE_ID));
                    if (
                      e.deepLinkReturnUrl &&
                      "string" != typeof e.deepLinkReturnUrl
                    )
                      return l.reject(
                        new u(s.VENMO_INVALID_DEEP_LINK_RETURN_URL)
                      );
                    n = o
                      .create({
                        authorization: e.authorization,
                        client: e.client,
                        debug: e.debug,
                        assetsUrl: a.create(e.authorization),
                        name: t,
                      })
                      .then(function (t) {
                        var n = t.getConfiguration();
                        e.client = t;
                        return n.gatewayConfiguration.payWithVenmo
                          ? t
                          : l.reject(new u(s.VENMO_NOT_ENABLED));
                      });
                    e.createPromise = n;
                    i = new d(e);
                    r.sendEvent(n, "venmo.initialized");
                    return n.then(function () {
                      return i;
                    });
                  });
              }
              function h(e) {
                return p.isBrowserSupported(e);
              }
              t.exports = { create: c(E), isBrowserSupported: h, VERSION: _ };
            },
            {
              "../lib/analytics": 126,
              "../lib/basic-component-verification": 129,
              "../lib/braintree-error": 131,
              "../lib/create-assets-url": 136,
              "../lib/create-deferred-client": 138,
              "../lib/promise": 164,
              "./shared/errors": 220,
              "./shared/supports-venmo": 222,
              "./venmo": 223,
              "@braintree/wrap-promise": 49,
            },
          ],
          218: [
            function (e, t, n) {
              "use strict";
              var r = e("@braintree/browser-detection/is-android"),
                i = e("@braintree/browser-detection/is-chrome"),
                o = e("@braintree/browser-detection/is-ios"),
                a = e("@braintree/browser-detection/is-ios-safari"),
                s = e("@braintree/browser-detection/is-ios-webview"),
                c = e("@braintree/browser-detection/is-samsung");
              function u() {
                return (
                  r() &&
                  window.navigator.userAgent.toLowerCase().indexOf("wv") > -1
                );
              }
              function d() {
                return !!o() && (s() || !a());
              }
              function l() {
                var e = window.navigator.userAgent.toLowerCase();
                return (
                  (e.indexOf("huawei") > -1 && e.indexOf("fban") > -1) ||
                  (!!r() &&
                    (e.indexOf("fb_iab") > -1 || e.indexOf("instagram") > -1))
                );
              }
              function p() {
                return o() && i();
              }
              t.exports = {
                isAndroid: r,
                isAndroidWebview: u,
                isChrome: i,
                isIos: o,
                isIosChrome: p,
                isSamsung: c,
                isIosSafari: a,
                isIosWebview: s,
                isFacebookOwnedBrowserOnAndroid: l,
                doesNotSupportWindowOpenInIos: d,
              };
            },
            {
              "@braintree/browser-detection/is-android": 24,
              "@braintree/browser-detection/is-chrome": 26,
              "@braintree/browser-detection/is-ios": 35,
              "@braintree/browser-detection/is-ios-safari": 32,
              "@braintree/browser-detection/is-ios-webview": 33,
              "@braintree/browser-detection/is-samsung": 36,
            },
          ],
          219: [
            function (e, t, n) {
              "use strict";
              t.exports = {
                DOCUMENT_VISIBILITY_CHANGE_EVENT_DELAY: 500,
                DEFAULT_PROCESS_RESULTS_DELAY: 1e3,
                VENMO_OPEN_URL: "https://venmo.com/braintree/checkout",
              };
            },
            {},
          ],
          220: [
            function (e, t, n) {
              "use strict";
              var r = e("../../lib/braintree-error");
              t.exports = {
                VENMO_NOT_ENABLED: {
                  type: r.types.MERCHANT,
                  code: "VENMO_NOT_ENABLED",
                  message: "Venmo is not enabled for this merchant.",
                },
                VENMO_TOKENIZATION_REQUEST_ACTIVE: {
                  type: r.types.MERCHANT,
                  code: "VENMO_TOKENIZATION_REQUEST_ACTIVE",
                  message: "Another tokenization request is active.",
                },
                VENMO_TOKENIZATION_REQUEST_NOT_ACTIVE: {
                  type: r.types.MERCHANT,
                  code: "VENMO_TOKENIZATION_REQUEST_NOT_ACTIVE",
                  message: "No tokenization in progress.",
                },
                VENMO_APP_FAILED: {
                  type: r.types.UNKNOWN,
                  code: "VENMO_APP_FAILED",
                  message: "Venmo app encountered a problem.",
                },
                VENMO_APP_CANCELED: {
                  type: r.types.CUSTOMER,
                  code: "VENMO_APP_CANCELED",
                  message: "Venmo app authorization was canceled.",
                },
                VENMO_CANCELED: {
                  type: r.types.CUSTOMER,
                  code: "VENMO_CANCELED",
                  message:
                    "User canceled Venmo authorization, or Venmo app is not available.",
                },
                VENMO_DESKTOP_CANCELED: {
                  type: r.types.CUSTOMER,
                  code: "VENMO_DESKTOP_CANCELED",
                  message:
                    "User canceled Venmo authorization by closing the Venmo Desktop modal.",
                },
                VENMO_TOKENIZATION_CANCELED_BY_MERCHANT: {
                  type: r.types.MERCHANT,
                  code: "VENMO_TOKENIZATION_CANCELED_BY_MERCHANT",
                  message:
                    "The Venmo tokenization was canceled by the merchant.",
                },
                VENMO_DESKTOP_UNKNOWN_ERROR: {
                  type: r.types.UNKNOWN,
                  code: "VENMO_DESKTOP_UNKNOWN_ERROR",
                  message: "Something went wrong with the Venmo Desktop flow.",
                },
                VENMO_MOBILE_PAYMENT_CONTEXT_SETUP_FAILED: {
                  type: r.types.NETWORK,
                  code: "VENMO_MOBILE_PAYMENT_CONTEXT_SETUP_FAILED",
                  message:
                    "Something went wrong creating the Venmo Payment Context.",
                },
                VENMO_MOBILE_POLLING_TOKENIZATION_NETWORK_ERROR: {
                  type: r.types.UNKNOWN,
                  code: "VENMO_MOBILE_POLLING_TOKENIZATION_NETWORK_ERROR",
                  message: "Something went wrong during mobile polling.",
                },
                VENMO_MOBILE_POLLING_TOKENIZATION_EXPIRED: {
                  type: r.types.CUSTOMER,
                  code: "VENMO_MOBILE_POLLING_TOKENIZATION_EXPIRED",
                  message: "The Venmo authorization request is expired.",
                },
                VENMO_MOBILE_POLLING_TOKENIZATION_CANCELED: {
                  type: r.types.CUSTOMER,
                  code: "VENMO_MOBILE_POLLING_TOKENIZATION_CANCELED",
                  message: "The Venmo authorization was canceled",
                },
                VENMO_MOBILE_POLLING_TOKENIZATION_TIMEOUT: {
                  type: r.types.CUSTOMER,
                  code: "VENMO_MOBILE_POLLING_TOKENIZATION_TIMEOUT",
                  message: "Customer took too long to authorize Venmo payment.",
                },
                VENMO_MOBILE_POLLING_TOKENIZATION_FAILED: {
                  type: r.types.UNKNOWN,
                  code: "VENMO_MOBILE_POLLING_TOKENIZATION_FAILED",
                  message: "The Venmo authorization failed.",
                },
                VENMO_INVALID_PROFILE_ID: {
                  type: r.types.MERCHANT,
                  code: "VENMO_INVALID_PROFILE_ID",
                  message: "Venmo profile ID is invalid.",
                },
                VENMO_INVALID_DEEP_LINK_RETURN_URL: {
                  type: r.types.MERCHANT,
                  code: "VENMO_INVALID_DEEP_LINK_RETURN_URL",
                  message: "Venmo deep link return URL is invalid.",
                },
              };
            },
            { "../../lib/braintree-error": 131 },
          ],
          221: [
            function (e, t, n) {
              "use strict";
              Object.defineProperty(n, "__esModule", { value: !0 });
              n.VENMO_DESKTOP_UNKNOWN_ERROR =
                n.VENMO_DESKTOP_REQUEST_NEW_QR_CODE =
                n.VENMO_DESKTOP_CLOSED_FROM_PARENT =
                n.VENMO_DESKTOP_IFRAME_READY =
                n.VENMO_DESKTOP_DISPLAY_QR_CODE =
                n.VENMO_DESKTOP_DISPLAY_ERROR =
                n.VENMO_DESKTOP_CUSTOMER_CANCELED =
                n.VENMO_DESKTOP_AUTHORIZATION_COMPLETED =
                n.VENMO_DESKTOP_AUTHORIZING =
                n.VENMO_DESKTOP_AUTHORIZE =
                n.VENMO_DESKTOP_AUTHORIZATION_TIMED_OUT =
                  void 0;
              n.VENMO_DESKTOP_AUTHORIZATION_TIMED_OUT =
                "VENMO_DESKTOP_AUTHORIZATION_TIMED_OUT";
              n.VENMO_DESKTOP_AUTHORIZE = "VENMO_DESKTOP_AUTHORIZE";
              n.VENMO_DESKTOP_AUTHORIZING = "VENMO_DESKTOP_AUTHORIZING";
              n.VENMO_DESKTOP_AUTHORIZATION_COMPLETED =
                "VENMO_DESKTOP_AUTHORIZATION_COMPLETED";
              n.VENMO_DESKTOP_CUSTOMER_CANCELED =
                "VENMO_DESKTOP_CUSTOMER_CANCELED";
              n.VENMO_DESKTOP_DISPLAY_ERROR = "VENMO_DESKTOP_DISPLAY_ERROR";
              n.VENMO_DESKTOP_DISPLAY_QR_CODE = "VENMO_DESKTOP_DISPLAY_QR_CODE";
              n.VENMO_DESKTOP_IFRAME_READY = "VENMO_DESKTOP_IFRAME_READY";
              n.VENMO_DESKTOP_CLOSED_FROM_PARENT =
                "VENMO_DESKTOP_CLOSED_FROM_PARENT";
              n.VENMO_DESKTOP_REQUEST_NEW_QR_CODE =
                "VENMO_DESKTOP_REQUEST_NEW_QR_CODE";
              n.VENMO_DESKTOP_UNKNOWN_ERROR = "VENMO_DESKTOP_UNKNOWN_ERROR";
            },
            {},
          ],
          222: [
            function (e, t, n) {
              "use strict";
              var r = e("./browser-detection");
              function i(e) {
                var t,
                  n,
                  i,
                  o = r.isAndroid(),
                  a = o || r.isIos(),
                  s = o && r.isChrome(),
                  c = r.isIosSafari() || s,
                  u =
                    r.isIosChrome() ||
                    r.isFacebookOwnedBrowserOnAndroid() ||
                    r.isSamsung();
                i = !0 === (e = e || {}).allowDesktop;
                t =
                  !e.hasOwnProperty("allowNewBrowserTab") ||
                  e.allowNewBrowserTab;
                n = !e.hasOwnProperty("allowWebviews") || e.allowWebviews;
                return (
                  !u &&
                  !(!n && (r.isAndroidWebview() || r.isIosWebview())) &&
                  (a ? (t ? a : c) : i)
                );
              }
              t.exports = { isBrowserSupported: i };
            },
            { "./browser-detection": 218 },
          ],
          223: [
            function (e, t, n) {
              "use strict";
              var r = e("../lib/analytics"),
                i = e("./shared/supports-venmo"),
                o = e("./shared/browser-detection"),
                a = e("./shared/constants"),
                s = e("./shared/errors"),
                c = e("../lib/querystring"),
                u = e("../lib/is-verified-domain"),
                d = e("../lib/methods"),
                l = e("../lib/convert-methods-to-error"),
                p = e("@braintree/wrap-promise"),
                _ = e("../lib/braintree-error"),
                E = e("../lib/in-iframe"),
                h = e("../lib/promise"),
                f = e("@braintree/extended-promise"),
                m = e("./external/"),
                y = e("./external/queries"),
                A = "3.85.5",
                T = 250,
                I = 3e5;
              function N(e) {
                var t = this;
                this._createPromise = e.createPromise;
                this._allowNewBrowserTab = !1 !== e.allowNewBrowserTab;
                this._allowWebviews = !1 !== e.allowWebviews;
                this._allowDesktop = !0 === e.allowDesktop;
                this._requireManualReturn = !0 === e.requireManualReturn;
                this._useRedirectForIOS = !0 === e.useRedirectForIOS;
                this._profileId = e.profileId;
                this._displayName = e.displayName;
                this._deepLinkReturnUrl = e.deepLinkReturnUrl;
                this._ignoreHistoryChanges = e.ignoreHistoryChanges;
                this._paymentMethodUsage = (
                  e.paymentMethodUsage || ""
                ).toUpperCase();
                this._shouldUseLegacyFlow = !this._paymentMethodUsage;
                this._useDesktopFlow = this._allowDesktop && this._isDesktop();
                this._cannotHaveReturnUrls = E() || this._requireManualReturn;
                this._shouldCreateVenmoPaymentContext =
                  this._cannotHaveReturnUrls || !this._shouldUseLegacyFlow;
                r.sendEvent(
                  this._createPromise,
                  "venmo.desktop-flow.configured." +
                    String(Boolean(this._allowDesktop))
                );
                if (this.hasTokenizationResult())
                  r.sendEvent(
                    this._createPromise,
                    "venmo.appswitch.return-in-new-tab"
                  );
                else if (this._useDesktopFlow)
                  this._createPromise = this._createPromise.then(function (e) {
                    var n = e.getConfiguration().gatewayConfiguration;
                    return m({
                      url:
                        n.assetsUrl +
                        "/web/" +
                        A +
                        "/html/venmo-desktop-frame.html",
                      environment:
                        "production" === n.environment
                          ? "PRODUCTION"
                          : "SANDBOX",
                      profileId: t._profileId || n.payWithVenmo.merchantId,
                      paymentMethodUsage: t._paymentMethodUsage,
                      displayName: t._displayName,
                      Promise: h,
                      apiRequest: function (t, n) {
                        return e
                          .request({
                            api: "graphQLApi",
                            data: { query: t, variables: n },
                          })
                          .then(function (e) {
                            return e.data;
                          });
                      },
                      sendEvent: function (e) {
                        r.sendEvent(t._createPromise, e);
                      },
                      verifyDomain: u,
                    })
                      .then(function (n) {
                        t._venmoDesktopInstance = n;
                        r.sendEvent(
                          t._createPromise,
                          "venmo.desktop-flow.presented"
                        );
                        return e;
                      })
                      .catch(function () {
                        r.sendEvent(
                          t._createPromise,
                          "venmo.desktop-flow.setup-failed"
                        );
                        t._useDesktopFlow = !1;
                        return e;
                      });
                  });
                else if (this._shouldCreateVenmoPaymentContext) {
                  this._mobilePollingInterval = T;
                  this._mobilePollingExpiresThreshold = I;
                  this._createPromise = this._createPromise.then(function (e) {
                    var n = t._cannotHaveReturnUrls
                        ? "manual-return"
                        : "mobile-payment-context",
                      i = e.getConfiguration().gatewayConfiguration;
                    t._mobilePollingContextEnvironment =
                      i.environment.toUpperCase();
                    return t
                      ._createVenmoPaymentContext(e)
                      .then(function () {
                        r.sendEvent(
                          t._createPromise,
                          "venmo." + n + ".presented"
                        );
                        return e;
                      })
                      .catch(function (e) {
                        r.sendEvent(
                          t._createPromise,
                          "venmo." + n + ".setup-failed"
                        );
                        return h.reject(
                          new _({
                            type: s.VENMO_MOBILE_PAYMENT_CONTEXT_SETUP_FAILED
                              .type,
                            code: s.VENMO_MOBILE_PAYMENT_CONTEXT_SETUP_FAILED
                              .code,
                            message:
                              s.VENMO_MOBILE_PAYMENT_CONTEXT_SETUP_FAILED
                                .message,
                            details: { originalError: e },
                          })
                        );
                      });
                  });
                }
              }
              N.prototype._createVenmoPaymentContext = function (e, t) {
                var n = this;
                return this._shouldCreateVenmoPaymentContext
                  ? (this._shouldUseLegacyFlow
                      ? e
                          .request({
                            api: "graphQLApi",
                            data: {
                              query: y.LEGACY_CREATE_PAYMENT_CONTEXT_QUERY,
                              variables: {
                                input: {
                                  environment:
                                    this._mobilePollingContextEnvironment,
                                  intent: "PAY_FROM_APP",
                                },
                              },
                            },
                          })
                          .then(function (e) {
                            return e
                              .data.createVenmoQRCodePaymentContext.venmoQRCodePaymentContext;
                          })
                      : e
                          .request({
                            api: "graphQLApi",
                            data: {
                              query: y.CREATE_PAYMENT_CONTEXT_QUERY,
                              variables: {
                                input: {
                                  paymentMethodUsage: this._paymentMethodUsage,
                                  intent: "CONTINUE",
                                  customerClient: "MOBILE_WEB",
                                  displayName: this._displayName,
                                },
                              },
                            },
                          })
                          .then(function (e) {
                            return e
                              .data.createVenmoPaymentContext.venmoPaymentContext;
                          })
                    ).then(function (r) {
                      var i =
                        0.6666 *
                        (new Date(r.expiresAt) - new Date(r.createdAt));
                      clearTimeout(n._refreshPaymentContextTimeout);
                      n._refreshPaymentContextTimeout = setTimeout(function () {
                        n._tokenizationInProgress ||
                          n._createVenmoPaymentContext(e, !0);
                      }, i);
                      if (!t || !n._tokenizationInProgress) {
                        n._venmoPaymentContextStatus = r.status;
                        n._venmoPaymentContextId = r.id;
                      }
                    })
                  : h.resolve();
              };
              N.prototype.appSwitch = function (e) {
                if (this._deepLinkReturnUrl)
                  if (P()) {
                    r.sendEvent(
                      this._createPromise,
                      "venmo.appswitch.start.ios-webview"
                    );
                    window.location.href = e;
                  } else if (
                    window.popupBridge &&
                    "function" == typeof window.popupBridge.open
                  ) {
                    r.sendEvent(
                      this._createPromise,
                      "venmo.appswitch.start.popup-bridge"
                    );
                    window.popupBridge.open(e);
                  } else {
                    r.sendEvent(
                      this._createPromise,
                      "venmo.appswitch.start.webview"
                    );
                    window.open(e);
                  }
                else {
                  r.sendEvent(
                    this._createPromise,
                    "venmo.appswitch.start.browser"
                  );
                  o.doesNotSupportWindowOpenInIos() ||
                  this._shouldUseRedirectStrategy()
                    ? (window.location.href = e)
                    : window.open(e);
                }
              };
              N.prototype.getUrl = function () {
                return this._createPromise.then(
                  function (e) {
                    var t = e.getConfiguration(),
                      n = {},
                      r =
                        this._deepLinkReturnUrl ||
                        window.location.href.replace(window.location.hash, ""),
                      i = t.gatewayConfiguration.payWithVenmo,
                      o = t.analyticsMetadata,
                      s = i.accessToken,
                      u = {
                        _meta: {
                          version: o.sdkVersion,
                          integration: o.integration,
                          platform: o.platform,
                          sessionId: o.sessionId,
                        },
                      };
                    r = r.replace(/#*$/, "");
                    this._venmoPaymentContextId &&
                      (this._shouldUseLegacyFlow
                        ? (s += "|pcid:" + this._venmoPaymentContextId)
                        : (n.resource_id = this._venmoPaymentContextId));
                    if (this._shouldIncludeReturnUrls()) {
                      n["x-success"] = r + "#venmoSuccess=1";
                      n["x-cancel"] = r + "#venmoCancel=1";
                      n["x-error"] = r + "#venmoError=1";
                    } else {
                      n["x-success"] = "NOOP";
                      n["x-cancel"] = "NOOP";
                      n["x-error"] = "NOOP";
                    }
                    n.ua = window.navigator.userAgent;
                    n.braintree_merchant_id = this._profileId || i.merchantId;
                    n.braintree_access_token = s;
                    n.braintree_environment = i.environment;
                    n.braintree_sdk_data = btoa(JSON.stringify(u));
                    return a.VENMO_OPEN_URL + "?" + c.stringify(n);
                  }.bind(this)
                );
              };
              N.prototype.isBrowserSupported = function () {
                return i.isBrowserSupported({
                  allowNewBrowserTab: this._allowNewBrowserTab,
                  allowWebviews: this._allowWebviews,
                  allowDesktop: this._allowDesktop,
                });
              };
              N.prototype.hasTokenizationResult = function () {
                return this._hasTokenizationResult();
              };
              N.prototype._hasTokenizationResult = function (e) {
                var t = O(e);
                return (
                  void 0 !== (t.venmoSuccess || t.venmoError || t.venmoCancel)
                );
              };
              N.prototype._shouldIncludeReturnUrls = function () {
                return !!this._deepLinkReturnUrl || !this._cannotHaveReturnUrls;
              };
              N.prototype._isDesktop = function () {
                return !(o.isIos() || o.isAndroid());
              };
              N.prototype.tokenize = function (e) {
                var t = this;
                e = e || {};
                if (!0 === this._tokenizationInProgress)
                  return h.reject(new _(s.VENMO_TOKENIZATION_REQUEST_ACTIVE));
                this._tokenizationInProgress = !0;
                return (
                  this._useDesktopFlow
                    ? this._tokenizeForDesktop(e)
                    : this._cannotHaveReturnUrls
                    ? this._tokenizeForMobileWithManualReturn()
                    : this._tokenizeForMobileWithHashChangeListeners(e)
                )
                  .then(function (e) {
                    return t._createPromise
                      .then(function (e) {
                        return t._createVenmoPaymentContext(e);
                      })
                      .then(function () {
                        t._tokenizationInProgress = !1;
                        return g(e);
                      });
                  })
                  .catch(function (e) {
                    return t._createPromise
                      .then(function (e) {
                        return t._createVenmoPaymentContext(e);
                      })
                      .then(function () {
                        t._tokenizationInProgress = !1;
                        return h.reject(e);
                      });
                  });
              };
              N.prototype.cancelTokenization = function () {
                if (!this._tokenizationInProgress)
                  return h.reject(
                    new _(s.VENMO_TOKENIZATION_REQUEST_NOT_ACTIVE)
                  );
                this._removeVisibilityEventListener();
                this._tokenizePromise &&
                  this._tokenizePromise.reject(
                    new _(s.VENMO_TOKENIZATION_CANCELED_BY_MERCHANT)
                  );
                return h.all([
                  this._cancelMobilePaymentContext(),
                  this._cancelVenmoDesktopContext(),
                ]);
              };
              N.prototype._queryPaymentContextStatus = function (e) {
                var t = this;
                return this._createPromise
                  .then(function (n) {
                    var r = t._shouldUseLegacyFlow
                      ? y.LEGACY_VENMO_PAYMENT_CONTEXT_STATUS_QUERY
                      : y.VENMO_PAYMENT_CONTEXT_STATUS_QUERY;
                    return n.request({
                      api: "graphQLApi",
                      data: { query: r, variables: { id: e } },
                    });
                  })
                  .then(function (e) {
                    return e.data.node;
                  });
              };
              N.prototype._pollForStatusChange = function () {
                var e = this;
                return Date.now() > e._mobilePollingContextExpiresIn
                  ? h.reject(new _(s.VENMO_MOBILE_POLLING_TOKENIZATION_TIMEOUT))
                  : this._queryPaymentContextStatus(this._venmoPaymentContextId)
                      .catch(function (e) {
                        return h.reject(
                          new _({
                            type: s
                              .VENMO_MOBILE_POLLING_TOKENIZATION_NETWORK_ERROR
                              .type,
                            code: s
                              .VENMO_MOBILE_POLLING_TOKENIZATION_NETWORK_ERROR
                              .code,
                            message:
                              s.VENMO_MOBILE_POLLING_TOKENIZATION_NETWORK_ERROR
                                .message,
                            details: { originalError: e },
                          })
                        );
                      })
                      .then(function (t) {
                        var n = t.status;
                        if (n !== e._venmoPaymentContextStatus) {
                          e._venmoPaymentContextStatus = n;
                          r.sendEvent(
                            e._createPromise,
                            "venmo.tokenize.manual-return.status-change." +
                              n.toLowerCase()
                          );
                          switch (n) {
                            case "EXPIRED":
                            case "FAILED":
                            case "CANCELED":
                              return h.reject(
                                new _(
                                  s["VENMO_MOBILE_POLLING_TOKENIZATION_" + n]
                                )
                              );
                            case "APPROVED":
                              return h.resolve(t);
                          }
                        }
                        return new h(function (t, n) {
                          setTimeout(function () {
                            e._pollForStatusChange().then(t).catch(n);
                          }, e._mobilePollingInterval);
                        });
                      });
              };
              N.prototype._tokenizeForMobileWithManualReturn = function () {
                var e = this;
                r.sendEvent(
                  this._createPromise,
                  "venmo.tokenize.manual-return.start"
                );
                this._mobilePollingContextExpiresIn =
                  Date.now() + this._mobilePollingExpiresThreshold;
                this._tokenizePromise = new f();
                this._pollForStatusChange()
                  .then(function (t) {
                    r.sendEvent(
                      e._createPromise,
                      "venmo.tokenize.manual-return.success"
                    );
                    e._tokenizePromise.resolve({
                      paymentMethodNonce: t.paymentMethodId,
                      username: t.userName,
                      payerInfo: t.payerInfo,
                      id: e._venmoPaymentContextId,
                    });
                  })
                  .catch(function (t) {
                    r.sendEvent(
                      e._createPromise,
                      "venmo.tokenize.manual-return.failure"
                    );
                    e._tokenizePromise.reject(t);
                  });
                return this.getUrl().then(function (t) {
                  e.appSwitch(t);
                  return e._tokenizePromise;
                });
              };
              N.prototype._shouldUseRedirectStrategy = function () {
                return !!o.isIos() && this._useRedirectForIOS;
              };
              N.prototype._tokenizeForMobileWithHashChangeListeners = function (
                e
              ) {
                var t,
                  n,
                  i = this;
                if (this.hasTokenizationResult())
                  return this.processResultsFromHash();
                r.sendEvent(this._createPromise, "venmo.tokenize.mobile.start");
                this._tokenizePromise = new f();
                this._previousHash = window.location.hash;
                function o(e) {
                  var t;
                  i.processResultsFromHash(e)
                    .catch(function (e) {
                      t = e;
                    })
                    .then(function (e) {
                      i._ignoreHistoryChanges ||
                        window.location.hash === i._previousHash ||
                        (window.location.hash = i._previousHash);
                      i._removeVisibilityEventListener();
                      t
                        ? i._tokenizePromise.reject(t)
                        : i._tokenizePromise.resolve(e);
                      delete i._tokenizePromise;
                    });
                }
                this._onHashChangeListener = function (e) {
                  var r = e.newURL.split("#")[1];
                  if (i._hasTokenizationResult(r)) {
                    t = !0;
                    clearTimeout(n);
                    o(r);
                  }
                };
                window.addEventListener(
                  "hashchange",
                  this._onHashChangeListener,
                  !1
                );
                this._visibilityChangeListener = function () {
                  var r =
                    e.processResultsDelay || a.DEFAULT_PROCESS_RESULTS_DELAY;
                  window.document.hidden || t || (n = setTimeout(o, r));
                };
                return this.getUrl().then(function (e) {
                  i.appSwitch(e);
                  setTimeout(function () {
                    window.document.addEventListener(
                      v(),
                      i._visibilityChangeListener
                    );
                  }, a.DOCUMENT_VISIBILITY_CHANGE_EVENT_DELAY);
                  return i._tokenizePromise;
                });
              };
              N.prototype._tokenizeForDesktop = function () {
                var e = this;
                r.sendEvent(
                  this._createPromise,
                  "venmo.tokenize.desktop.start"
                );
                this._tokenizePromise = new f();
                this._createPromise
                  .then(function () {
                    return e._venmoDesktopInstance.launchDesktopFlow();
                  })
                  .then(function (t) {
                    e._venmoDesktopInstance.hideDesktopFlow();
                    r.sendEvent(
                      e._createPromise,
                      "venmo.tokenize.desktop.success"
                    );
                    e._tokenizePromise.resolve(t);
                  })
                  .catch(function (t) {
                    r.sendEvent(
                      e._createPromise,
                      "venmo.tokenize.desktop.failure"
                    );
                    e._venmoDesktopInstance &&
                      e._venmoDesktopInstance.hideDesktopFlow();
                    t && "CUSTOMER_CANCELED" === t.reason
                      ? e._tokenizePromise.reject(
                          new _(s.VENMO_DESKTOP_CANCELED)
                        )
                      : e._tokenizePromise.reject(
                          new _({
                            type: s.VENMO_DESKTOP_UNKNOWN_ERROR.type,
                            code: s.VENMO_DESKTOP_UNKNOWN_ERROR.code,
                            message: s.VENMO_DESKTOP_UNKNOWN_ERROR.message,
                            details: { originalError: t },
                          })
                        );
                  });
                return this._tokenizePromise;
              };
              N.prototype._updateVenmoDesktopPaymentContext = function (e, t) {
                return this._venmoDesktopInstance.updateVenmoDesktopPaymentContext(
                  e,
                  t
                );
              };
              N.prototype._cancelMobilePaymentContext = function () {
                var e = this;
                return this._createPromise.then(function (t) {
                  var n;
                  if (e._venmoPaymentContextId) {
                    n = e._shouldUseLegacyFlow
                      ? y.LEGACY_UPDATE_PAYMENT_CONTEXT_QUERY
                      : y.UPDATE_PAYMENT_CONTEXT_QUERY;
                    return t.request({
                      api: "graphQLApi",
                      data: {
                        query: n,
                        variables: {
                          input: {
                            id: e._venmoPaymentContextId,
                            status: "CANCELED",
                          },
                        },
                      },
                    });
                  }
                  return h.resolve();
                });
              };
              N.prototype._cancelVenmoDesktopContext = function () {
                var e = this;
                return this._createPromise.then(function () {
                  e._venmoDesktopInstance &&
                    e._venmoDesktopInstance.updateVenmoDesktopPaymentContext(
                      "CANCELED"
                    );
                  return h.resolve();
                });
              };
              N.prototype.teardown = function () {
                var e = this;
                this._removeVisibilityEventListener();
                return this._createPromise.then(
                  function () {
                    e._venmoDesktopInstance &&
                      e._venmoDesktopInstance.teardown();
                    clearTimeout(e._refreshPaymentContextTimeout);
                    e._cancelMobilePaymentContext();
                    l(this, d(N.prototype));
                  }.bind(this)
                );
              };
              N.prototype._removeVisibilityEventListener = function () {
                window.removeEventListener(
                  "hashchange",
                  this._onHashChangeListener
                );
                window.document.removeEventListener(
                  v(),
                  this._visibilityChangeListener
                );
                delete this._visibilityChangeListener;
                delete this._onHashChangeListener;
              };
              N.prototype.processResultsFromHash = function (e) {
                var t = this,
                  n = O(e);
                return new h(function (e, i) {
                  if (n.venmoSuccess) {
                    r.sendEvent(
                      t._createPromise,
                      "venmo.appswitch.handle.success"
                    );
                    n.resource_id && !t._shouldUseLegacyFlow
                      ? t
                          ._queryPaymentContextStatus(n.resource_id)
                          .then(function (i) {
                            if ("APPROVED" === i.status)
                              e({
                                paymentMethodNonce: i.paymentMethodId,
                                username: i.userName,
                                payerInfo: i.payerInfo,
                                id: n.resource_id,
                              });
                            else {
                              r.sendEvent(
                                t._createPromise,
                                "venmo.process-results.unexpected-payment-context-status." +
                                  i.status.toLowerCase()
                              );
                              e(n);
                            }
                          })
                          .catch(function () {
                            r.sendEvent(
                              t._createPromise,
                              "venmo.process-results.payment-context-status-query-failed"
                            );
                            e(n);
                          })
                      : e(n);
                  } else if (n.venmoError) {
                    r.sendEvent(
                      t._createPromise,
                      "venmo.appswitch.handle.error"
                    );
                    i(
                      new _({
                        type: s.VENMO_APP_FAILED.type,
                        code: s.VENMO_APP_FAILED.code,
                        message: s.VENMO_APP_FAILED.message,
                        details: {
                          originalError: {
                            message: decodeURIComponent(n.errorMessage),
                            code: n.errorCode,
                          },
                        },
                      })
                    );
                  } else if (n.venmoCancel) {
                    r.sendEvent(
                      t._createPromise,
                      "venmo.appswitch.handle.cancel"
                    );
                    i(new _(s.VENMO_APP_CANCELED));
                  } else {
                    r.sendEvent(
                      t._createPromise,
                      "venmo.appswitch.cancel-or-unavailable"
                    );
                    i(new _(s.VENMO_CANCELED));
                  }
                  t._clearFragmentParameters();
                });
              };
              N.prototype._clearFragmentParameters = function () {
                this._ignoreHistoryChanges ||
                  ("function" == typeof window.history.replaceState &&
                    window.location.hash &&
                    history.pushState(
                      {},
                      "",
                      window.location.href.slice(
                        0,
                        window.location.href.indexOf("#")
                      )
                    ));
              };
              function O(e) {
                return (e || window.location.hash.substring(1))
                  .split("&")
                  .reduce(function (e, t) {
                    var n = t.split("="),
                      r = decodeURIComponent(n[0]).replace(/\W/g, ""),
                      i = decodeURIComponent(n[1]);
                    e[r] = i;
                    return e;
                  }, {});
              }
              function b(e) {
                return "@" + (e = e || "").replace("@", "");
              }
              function g(e) {
                var t = {
                  nonce: e.paymentMethodNonce,
                  type: "VenmoAccount",
                  details: { username: b(e.username), paymentContextId: e.id },
                };
                if (e.payerInfo) {
                  t.details.payerInfo = e.payerInfo;
                  t.details.payerInfo.userName = b(e.payerInfo.userName);
                }
                return t;
              }
              function v() {
                var e;
                void 0 !== window.document.hidden
                  ? (e = "visibilitychange")
                  : void 0 !== window.document.msHidden
                  ? (e = "msvisibilitychange")
                  : void 0 !== window.document.webkitHidden &&
                    (e = "webkitvisibilitychange");
                return e;
              }
              function P() {
                return (
                  window.navigator.platform &&
                  /iPhone|iPad|iPod/.test(window.navigator.platform)
                );
              }
              t.exports = p.wrapPrototype(N);
            },
            {
              "../lib/analytics": 126,
              "../lib/braintree-error": 131,
              "../lib/convert-methods-to-error": 134,
              "../lib/in-iframe": 157,
              "../lib/is-verified-domain": 160,
              "../lib/methods": 162,
              "../lib/promise": 164,
              "../lib/querystring": 165,
              "./external/": 214,
              "./external/queries": 215,
              "./shared/browser-detection": 218,
              "./shared/constants": 219,
              "./shared/errors": 220,
              "./shared/supports-venmo": 222,
              "@braintree/extended-promise": 40,
              "@braintree/wrap-promise": 49,
            },
          ],
          224: [
            function (e, t, n) {
              "use strict";
              var r = e("../lib/braintree-error");
              t.exports = {
                VISA_CHECKOUT_NOT_ENABLED: {
                  type: r.types.MERCHANT,
                  code: "VISA_CHECKOUT_NOT_ENABLED",
                  message: "Visa Checkout is not enabled for this merchant.",
                },
                VISA_CHECKOUT_INIT_OPTIONS_REQUIRED: {
                  type: r.types.MERCHANT,
                  code: "VISA_CHECKOUT_INIT_OPTIONS_REQUIRED",
                  message: "initOptions requires an object.",
                },
                VISA_CHECKOUT_PAYMENT_REQUIRED: {
                  type: r.types.MERCHANT,
                  code: "VISA_CHECKOUT_PAYMENT_REQUIRED",
                  message:
                    "tokenize requires callid, encKey, and encPaymentData.",
                },
                VISA_CHECKOUT_TOKENIZATION: {
                  type: r.types.NETWORK,
                  code: "VISA_CHECKOUT_TOKENIZATION",
                  message:
                    "A network error occurred when processing the Visa Checkout payment.",
                },
              };
            },
            { "../lib/braintree-error": 131 },
          ],
          225: [
            function (e, t, n) {
              "use strict";
              var r = e("../lib/basic-component-verification"),
                i = e("../lib/braintree-error"),
                o = e("../lib/create-deferred-client"),
                a = e("../lib/create-assets-url"),
                s = e("./visa-checkout"),
                c = e("../lib/analytics"),
                u = e("./errors"),
                d = "3.85.5",
                l = e("../lib/promise"),
                p = e("@braintree/wrap-promise");
              function _(e) {
                var t = "Visa Checkout";
                return r
                  .verify({
                    name: t,
                    client: e.client,
                    authorization: e.authorization,
                  })
                  .then(function () {
                    return o.create({
                      authorization: e.authorization,
                      client: e.client,
                      debug: e.debug,
                      assetsUrl: a.create(e.authorization),
                      name: t,
                    });
                  })
                  .then(function (t) {
                    e.client = t;
                    if (
                      !e.client.getConfiguration().gatewayConfiguration
                        .visaCheckout
                    )
                      return l.reject(new i(u.VISA_CHECKOUT_NOT_ENABLED));
                    c.sendEvent(e.client, "visacheckout.initialized");
                    return new s(e);
                  });
              }
              t.exports = { create: p(_), VERSION: d };
            },
            {
              "../lib/analytics": 126,
              "../lib/basic-component-verification": 129,
              "../lib/braintree-error": 131,
              "../lib/create-assets-url": 136,
              "../lib/create-deferred-client": 138,
              "../lib/promise": 164,
              "./errors": 224,
              "./visa-checkout": 226,
              "@braintree/wrap-promise": 49,
            },
          ],
          226: [
            function (e, t, n) {
              "use strict";
              var r = e("../lib/braintree-error"),
                i = e("../lib/analytics"),
                o = e("./errors"),
                a = e("../lib/json-clone"),
                s = e("../lib/methods"),
                c = e("../lib/convert-methods-to-error"),
                u = e("../lib/promise"),
                d = e("@braintree/wrap-promise"),
                l = {
                  Visa: "VISA",
                  MasterCard: "MASTERCARD",
                  Discover: "DISCOVER",
                  "American Express": "AMEX",
                };
              function p(e) {
                this._client = e.client;
              }
              function _(e) {
                return e.reduce(function (e, t) {
                  return l.hasOwnProperty(t) ? e.concat(l[t]) : e;
                }, []);
              }
              p.prototype.createInitOptions = function (e) {
                var t,
                  n = this._client.getConfiguration().gatewayConfiguration,
                  i = n.visaCheckout;
                if (!e) throw new r(o.VISA_CHECKOUT_INIT_OPTIONS_REQUIRED);
                (t = a(e)).apikey = t.apikey || i.apikey;
                t.encryptionKey = i.encryptionKey;
                t.externalClientId = t.externalClientId || i.externalClientId;
                t.settings = t.settings || {};
                t.settings.dataLevel = "FULL";
                t.settings.payment = t.settings.payment || {};
                t.settings.payment.cardBrands ||
                  (t.settings.payment.cardBrands = _(
                    n.visaCheckout.supportedCardTypes
                  ));
                return t;
              };
              p.prototype.tokenize = function (e) {
                var t = this;
                return e.callid && e.encKey && e.encPaymentData
                  ? this._client
                      .request({
                        method: "post",
                        endpoint: "payment_methods/visa_checkout_cards",
                        data: {
                          _meta: { source: "visa-checkout" },
                          visaCheckoutCard: {
                            callId: e.callid,
                            encryptedPaymentData: e.encPaymentData,
                            encryptedKey: e.encKey,
                          },
                        },
                      })
                      .then(function (e) {
                        i.sendEvent(
                          t._client,
                          "visacheckout.tokenize.succeeded"
                        );
                        return e.visaCheckoutCards[0];
                      })
                      .catch(function (e) {
                        i.sendEvent(t._client, "visacheckout.tokenize.failed");
                        return u.reject(
                          new r({
                            type: o.VISA_CHECKOUT_TOKENIZATION.type,
                            code: o.VISA_CHECKOUT_TOKENIZATION.code,
                            message: o.VISA_CHECKOUT_TOKENIZATION.message,
                            details: { originalError: e },
                          })
                        );
                      })
                  : u.reject(new r(o.VISA_CHECKOUT_PAYMENT_REQUIRED));
              };
              p.prototype.teardown = function () {
                c(this, s(p.prototype));
                return u.resolve();
              };
              t.exports = d.wrapPrototype(p);
            },
            {
              "../lib/analytics": 126,
              "../lib/braintree-error": 131,
              "../lib/convert-methods-to-error": 134,
              "../lib/json-clone": 161,
              "../lib/methods": 162,
              "../lib/promise": 164,
              "./errors": 224,
              "@braintree/wrap-promise": 49,
            },
          ],
        },
        {},
        [124]
      )(124);
      var t;
    },
  },
]);
//# sourceMappingURL=6aafa6ae06ab1669245a.js.map
