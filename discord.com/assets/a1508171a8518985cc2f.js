"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  [32847],
  {
    858801: (t, e, n) => {
      n.d(e, { y: () => o });
      var r = n(173436);
      function o(t) {
        r.Z.dispatch({
          type: "DEVELOPER_OPTIONS_UPDATE_SETTINGS",
          settings: t,
        });
      }
    },
    891153: (t, e, n) => {
      n.d(e, { Z: () => r });
      const r = window.DiscordNative;
    },
    508590: (t, e, n) => {
      n.d(e, {
        Ps: () => f,
        dw: () => y,
        dT: () => p,
        Xo: () => d,
        k$: () => b,
        Ez: () => h,
      });
      var r = n(185253),
        o = n(506884);
      function i(t, e) {
        (null == e || e > t.length) && (e = t.length);
        for (var n = 0, r = new Array(e); n < e; n++) r[n] = t[n];
        return r;
      }
      function u(t, e, n) {
        e in t
          ? Object.defineProperty(t, e, {
              value: n,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            })
          : (t[e] = n);
        return t;
      }
      function c(t) {
        for (var e = 1; e < arguments.length; e++) {
          var n = null != arguments[e] ? arguments[e] : {},
            r = Object.keys(n);
          "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
              Object.getOwnPropertySymbols(n).filter(function (t) {
                return Object.getOwnPropertyDescriptor(n, t).enumerable;
              })
            ));
          r.forEach(function (e) {
            u(t, e, n[e]);
          });
        }
        return t;
      }
      function l(t) {
        return (
          (function (t) {
            if (Array.isArray(t)) return i(t);
          })(t) ||
          (function (t) {
            if (
              ("undefined" != typeof Symbol && null != t[Symbol.iterator]) ||
              null != t["@@iterator"]
            )
              return Array.from(t);
          })(t) ||
          (function (t, e) {
            if (!t) return;
            if ("string" == typeof t) return i(t, e);
            var n = Object.prototype.toString.call(t).slice(8, -1);
            "Object" === n && t.constructor && (n = t.constructor.name);
            if ("Map" === n || "Set" === n) return Array.from(n);
            if (
              "Arguments" === n ||
              /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
            )
              return i(t, e);
          })(t) ||
          (function () {
            throw new TypeError(
              "Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
            );
          })()
        );
      }
      var a = Object.freeze({ debugTrackedData: null, impressions: [] }),
        s = (0, r.Z)(function (t) {
          return a;
        }),
        f = function (t) {
          s.setState(function (e) {
            return { impressions: l(e.impressions).concat([t]) };
          });
        },
        y = function (t) {
          s.setState(function (e) {
            return {
              impressions: e.impressions.filter(function (e) {
                return e.sequenceId !== t.sequenceId;
              }),
            };
          });
        },
        p = function (t, e) {
          s.setState(function () {
            return {
              debugTrackedData: c({ name: t }, e),
            };
          });
        },
        d = s;
      function b() {
        var t = {};
        s.getState().impressions.forEach(function (e) {
          e.type === o.nv.PAGE ? (t.page = e.name) : (t.section = e.name);
        });
        return t;
      }
      function h() {
        return s.getState().impressions;
      }
    },
    528090: (t, e, n) => {
      n.r(e);
      n.d(e, { default: () => j });
      var r = n(681178),
        o = n(974119),
        i = n(791462),
        u = n(675860),
        c = n(444450),
        l = n(173436),
        a = n(858801),
        s = n(461061);
      function f(t, e) {
        if (!(t instanceof e))
          throw new TypeError("Cannot call a class as a function");
      }
      function y(t, e) {
        for (var n = 0; n < e.length; n++) {
          var r = e[n];
          r.enumerable = r.enumerable || !1;
          r.configurable = !0;
          "value" in r && (r.writable = !0);
          Object.defineProperty(t, r.key, r);
        }
      }
      function p(t, e, n) {
        e in t
          ? Object.defineProperty(t, e, {
              value: n,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            })
          : (t[e] = n);
        return t;
      }
      function d(t) {
        d = Object.setPrototypeOf
          ? Object.getPrototypeOf
          : function (t) {
              return t.__proto__ || Object.getPrototypeOf(t);
            };
        return d(t);
      }
      function b(t) {
        for (var e = 1; e < arguments.length; e++) {
          var n = null != arguments[e] ? arguments[e] : {},
            r = Object.keys(n);
          "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
              Object.getOwnPropertySymbols(n).filter(function (t) {
                return Object.getOwnPropertyDescriptor(n, t).enumerable;
              })
            ));
          r.forEach(function (e) {
            p(t, e, n[e]);
          });
        }
        return t;
      }
      function h(t, e) {
        return !e || ("object" !== E(e) && "function" != typeof e)
          ? (function (t) {
              if (void 0 === t)
                throw new ReferenceError(
                  "this hasn't been initialised - super() hasn't been called"
                );
              return t;
            })(t)
          : e;
      }
      function g(t, e) {
        g =
          Object.setPrototypeOf ||
          function (t, e) {
            t.__proto__ = e;
            return t;
          };
        return g(t, e);
      }
      var E = function (t) {
        return t && "undefined" != typeof Symbol && t.constructor === Symbol
          ? "symbol"
          : typeof t;
      };
      function v(t) {
        var e = (function () {
          if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
          if (Reflect.construct.sham) return !1;
          if ("function" == typeof Proxy) return !0;
          try {
            Boolean.prototype.valueOf.call(
              Reflect.construct(Boolean, [], function () {})
            );
            return !0;
          } catch (t) {
            return !1;
          }
        })();
        return function () {
          var n,
            r = d(t);
          if (e) {
            var o = d(this).constructor;
            n = Reflect.construct(r, arguments, o);
          } else n = r.apply(this, arguments);
          return h(this, n);
        };
      }
      var _,
        m,
        O,
        P,
        S =
          ((_ = ""
            .concat(location.protocol, "//")
            .concat(location.host, "/__development/source_maps")),
          (m = null),
          (O = new r.Z(5e3, 6e4, !0)),
          (P = function () {
            u.Z.put({
              url: _,
              headers: { Authorization: o.Z.getToken() },
              oldFormErrors: !0,
            }).then(
              function (t) {
                if (401 === t.status || 403 === t.status) {
                  m = null;
                  (0, a.y)({ sourceMapsEnabled: !1 });
                } else if (200 !== t.status) m = setTimeout(P, O.fail());
                else {
                  O.succeed();
                  m = setTimeout(
                    P,
                    1e3 * t.body.sourceMapCookieTTLSeconds * 0.75
                  );
                }
              },
              function () {
                m = setTimeout(P, O.fail());
              }
            );
          }),
          {
            set: function (t) {
              if (t !== (null != m))
                if (t) m = setTimeout(P, 0);
                else {
                  clearTimeout(m);
                  m = null;
                  u.Z.delete({
                    url: _,
                    headers: { Authorization: o.Z.getToken() },
                    oldFormErrors: !0,
                  });
                }
            },
          }),
        T = "DeveloperOptionsStore",
        A = {
          trace: !1,
          canary: !1,
          logGatewayEvents: !1,
          logOverlayEvents: !1,
          logAnalyticsEvents: !1,
          sourceMapsEnabled: !1,
          axeEnabled: !1,
          analyticsDebuggerEnabled: !1,
          bugReporterEnabled: !0,
          idleStatusIndicatorEnabled: !1,
        },
        w = b({}, A);
      function C(t) {
        w = b({}, A, w, t);
        S.set(w.sourceMapsEnabled);
        c.Z.set(T, w);
      }
      var I = (function (t) {
        !(function (t, e) {
          if ("function" != typeof e && null !== e)
            throw new TypeError(
              "Super expression must either be null or a function"
            );
          t.prototype = Object.create(e && e.prototype, {
            constructor: { value: t, writable: !0, configurable: !0 },
          });
          e && g(t, e);
        })(n, t);
        var e = v(n);
        function n() {
          f(this, n);
          return e.apply(this, arguments);
        }
        var r = n.prototype;
        r.initialize = function () {
          var t = c.Z.get(T);
          null != t && (w = b({}, A, t));
        };
        r.getDebugOptions = function () {
          var t = [];
          for (var e in w) w[e] && t.push(e);
          return t.join(",");
        };
        r.__getLocalVars = function () {
          return {
            sourceMapCookieRefresher: S,
            STORAGE_KEY: T,
            DEFAULT_OPTIONS: A,
            developerOptions: w,
          };
        };
        !(function (t, e, n) {
          e && y(t.prototype, e);
          n && y(t, n);
        })(n, [
          {
            key: "isTracingRequests",
            get: function () {
              return w.trace;
            },
          },
          {
            key: "isForcedCanary",
            get: function () {
              return w.canary;
            },
          },
          {
            key: "isLoggingGatewayEvents",
            get: function () {
              return w.logGatewayEvents;
            },
          },
          {
            key: "isLoggingOverlayEvents",
            get: function () {
              return w.logOverlayEvents;
            },
          },
          {
            key: "isLoggingAnalyticsEvents",
            get: function () {
              return w.logAnalyticsEvents;
            },
          },
          {
            key: "isAxeEnabled",
            get: function () {
              return w.axeEnabled;
            },
          },
          {
            key: "sourceMapsEnabled",
            get: function () {
              return w.sourceMapsEnabled;
            },
          },
          {
            key: "isAnalyticsDebuggerEnabled",
            get: function () {
              return w.analyticsDebuggerEnabled;
            },
          },
          {
            key: "isBugReporterEnabled",
            get: function () {
              return w.bugReporterEnabled;
            },
          },
          {
            key: "isIdleStatusIndicatorEnabled",
            get: function () {
              return w.idleStatusIndicatorEnabled;
            },
          },
        ]);
        return n;
      })(i.ZP.Store);
      I.displayName = "DeveloperOptionsStore";
      const j = new I(l.Z, {
        LOGOUT: function (t) {
          C(A);
        },
        CONNECTION_OPEN: function (t) {
          var e;
          ((null !== (e = t.user.flags) && void 0 !== e ? e : 0) &
            s.xW$.STAFF) ===
            s.xW$.STAFF && S.set(w.sourceMapsEnabled);
        },
        DEVELOPER_OPTIONS_UPDATE_SETTINGS: function (t) {
          C(t.settings);
        },
      });
    },
    932847: (t, e, n) => {
      n.r(e);
      n.d(e, {
        AnalyticEventConfigs: () => D,
        AnalyticsContext: () => O,
        AnalyticsSchema: () => r,
        addExtraAnalyticsDecorator: () => M,
        debugLogEvent: () => K,
        default: () => G,
        expandEventProperties: () => U,
        expandLocation: () => N,
        setUTMContext: () => k,
        trackNetworkAction: () => Z,
      });
      var r = {};
      n.r(r);
      var o = n(667294),
        i = n(506884),
        u = n(173436),
        c = n(508590),
        l = n(423336),
        a = n(528090),
        s = n(877158),
        f = n(461061),
        y = n(722571),
        p = n(959797);
      function d(t, e) {
        (null == e || e > t.length) && (e = t.length);
        for (var n = 0, r = new Array(e); n < e; n++) r[n] = t[n];
        return r;
      }
      function b(t, e, n) {
        e in t
          ? Object.defineProperty(t, e, {
              value: n,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            })
          : (t[e] = n);
        return t;
      }
      function h(t) {
        for (var e = 1; e < arguments.length; e++) {
          var n = null != arguments[e] ? arguments[e] : {},
            r = Object.keys(n);
          "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
              Object.getOwnPropertySymbols(n).filter(function (t) {
                return Object.getOwnPropertyDescriptor(n, t).enumerable;
              })
            ));
          r.forEach(function (e) {
            b(t, e, n[e]);
          });
        }
        return t;
      }
      function g(t, e) {
        if (null == t) return {};
        var n,
          r,
          o = (function (t, e) {
            if (null == t) return {};
            var n,
              r,
              o = {},
              i = Object.keys(t);
            for (r = 0; r < i.length; r++) {
              n = i[r];
              e.indexOf(n) >= 0 || (o[n] = t[n]);
            }
            return o;
          })(t, e);
        if (Object.getOwnPropertySymbols) {
          var i = Object.getOwnPropertySymbols(t);
          for (r = 0; r < i.length; r++) {
            n = i[r];
            e.indexOf(n) >= 0 ||
              (Object.prototype.propertyIsEnumerable.call(t, n) &&
                (o[n] = t[n]));
          }
        }
        return o;
      }
      function E(t) {
        return (
          (function (t) {
            if (Array.isArray(t)) return d(t);
          })(t) ||
          (function (t) {
            if (
              ("undefined" != typeof Symbol && null != t[Symbol.iterator]) ||
              null != t["@@iterator"]
            )
              return Array.from(t);
          })(t) ||
          (function (t, e) {
            if (!t) return;
            if ("string" == typeof t) return d(t, e);
            var n = Object.prototype.toString.call(t).slice(8, -1);
            "Object" === n && t.constructor && (n = t.constructor.name);
            if ("Map" === n || "Set" === n) return Array.from(n);
            if (
              "Arguments" === n ||
              /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
            )
              return d(t, e);
          })(t) ||
          (function () {
            throw new TypeError(
              "Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
            );
          })()
        );
      }
      var v,
        _,
        m = { location: {} },
        O = o.createContext(m),
        P = {},
        S = 6e4,
        T = 12e4,
        A = 3e5,
        w = 9e5,
        C = 36e5,
        I = 864e5,
        j = [];
      function M(t) {
        j.push(t);
      }
      var D =
        (b((_ = {}), f.rMx.APP_OPENED, {
          throttlePeriod: A,
          throttleKeys: function () {
            return [];
          },
        }),
        b(_, f.rMx.ACK_MESSAGES, {
          throttlePeriod: w,
          throttleKeys: function (t) {
            return [t.guild_id, t.location_section];
          },
        }),
        b(_, f.rMx.GUILD_VIEWED, {
          throttlePeriod: w,
          throttleKeys: function (t) {
            return [t.guild_id, t.is_pending];
          },
        }),
        b(_, f.rMx.FRIENDS_LIST_VIEWED, {
          throttlePeriod: w,
          throttleKeys: function (t) {
            return [t.tab_opened];
          },
        }),
        b(_, f.rMx.START_SPEAKING, {
          throttlePeriod: w,
          throttleKeys: function (t) {
            return [t.server];
          },
        }),
        b(_, f.rMx.START_LISTENING, {
          throttlePeriod: w,
          throttleKeys: function (t) {
            return [t.server];
          },
        }),
        b(_, f.rMx.ACTIVITY_UPDATED, {
          throttlePeriod: S,
          throttleKeys: function (t) {
            return [t.application_id];
          },
          deduplicate: !0,
        }),
        b(_, f.rMx.CHANNEL_OPENED, {
          throttlePeriod: w,
          throttleKeys: function (t) {
            return null != t.channel_static_route
              ? [t.guild_id, t.channel_static_route, t.channel_view]
              : [t.channel_id, t.channel_view];
          },
        }),
        b(_, f.rMx.TEXT_IN_VOICE_OPENED, {
          throttlePeriod: I,
          throttleKeys: function (t) {
            return [t.channel_id];
          },
        }),
        b(_, f.rMx.NOTIFICATION_VIEWED, {
          throttlePeriod: w,
          throttleKeys: function (t) {
            return [t.notif_type];
          },
        }),
        b(_, f.rMx.MEMBER_LIST_VIEWED, {
          throttlePeriod: w,
          throttleKeys: function (t) {
            return [t.channel_id];
          },
        }),
        b(_, f.rMx.DM_LIST_VIEWED, {
          throttlePeriod: w,
          throttleKeys: function (t) {
            return [t.channel_id];
          },
        }),
        b(_, f.rMx.NAV_DRAWER_OPENED, {
          throttlePeriod: w,
          throttleKeys: function () {
            return [];
          },
        }),
        b(_, f.rMx.KEYBOARD_SHORTCUT_USED, {
          throttlePeriod: T,
          throttleKeys: function (t) {
            return [t.shortcut_name, t.location_object].concat(
              E(null !== (v = t.source_class_list) && void 0 !== v ? v : [])
            );
          },
        }),
        b(_, f.rMx.QUICKSWITCHER_OPENED, {
          throttlePeriod: 1e4,
          throttleKeys: function () {
            return [];
          },
        }),
        b(_, f.rMx.CHAT_INPUT_COMPONENT_VIEWED, {
          throttlePeriod: w,
          throttleKeys: function (t) {
            return [t.type];
          },
        }),
        b(_, f.rMx.ROLE_PAGE_VIEWED, {
          throttlePeriod: T,
          throttleKeys: function (t) {
            return [t.role_id, t.tab_opened];
          },
        }),
        b(_, f.rMx.VIDEO_INPUT_INITIALIZED, {
          throttlePeriod: A,
          throttleKeys: function () {
            return [];
          },
        }),
        b(_, f.rMx.HUB_ONBOARDING_CAROUSEL_SCROLLED, {
          throttlePeriod: w,
          throttleKeys: function () {
            return [];
          },
        }),
        b(_, f.rMx.HUB_STUDENT_PROMPT_CLICKED, {
          throttlePeriod: w,
          throttleKeys: function () {
            return [];
          },
        }),
        b(_, f.rMx.RPC_SERVER_ERROR_CAUGHT, {
          throttlePeriod: I,
          throttleKeys: function () {
            return [];
          },
        }),
        b(_, f.rMx.CHANNEL_BANNER_VIEWED, {
          throttlePeriod: I,
          throttleKeys: function (t) {
            return [t.banner_type, t.channel_id];
          },
        }),
        b(_, f.rMx.PREMIUM_UPSELL_VIEWED, {
          throttlePeriod: S,
          throttleKeys: function (t) {
            return [t.type];
          },
        }),
        b(_, f.rMx.CHANNEL_HIGHLIGHTS_VIEWED, {
          throttlePeriod: C,
          throttleKeys: function (t) {
            return [t.guild_id, t.channel_id];
          },
        }),
        b(_, f.rMx.GUILD_CHANNEL_HIGHLIGHTS_LOADED, {
          throttlePeriod: C,
          throttleKeys: function (t) {
            return [t.guild_id];
          },
        }),
        b(_, f.rMx.FORUM_CHANNEL_SEARCHED, {
          throttlePeriod: S,
          throttleKeys: function (t) {
            return [t.guild_id, t.channel_id];
          },
        }),
        b(_, f.rMx.FORUM_CHANNEL_SCROLLED, {
          throttlePeriod: w,
          throttleKeys: function (t) {
            return [t.guild_id, t.channel_id];
          },
        }),
        b(_, f.rMx.DM_PROFILE_VIEWED, {
          throttlePeriod: C,
          throttleKeys: function (t) {
            return [t.viewed_profile_user_id];
          },
        }),
        b(_, f.rMx.MEDIA_VIEWER_SESSION_COMPLETED, { throttlePercent: 0.01 }),
        _);
      function N(t) {
        return "string" == typeof t
          ? { location: t }
          : {
              location: t.page,
              location_page: t.page,
              location_section: t.section,
              location_object: t.object,
              location_object_type: t.objectType,
            };
      }
      var R = function () {
        return y.Ek.NONE;
      };
      var x = (0, i.Gb)({
        analyticEventConfigs: D,
        dispatcher: u.Z,
        TRACK_ACTION_NAME: "TRACK",
      });
      function k(t) {
        return (P = t);
      }
      function U(t) {
        var e = t;
        e || (e = {});
        if (null != e.location) {
          var n = e.location,
            r = g(e, ["location"]);
          e = h({}, r, N(n));
        }
        if (null != e.source) {
          var o = e.source,
            i = g(e, ["source"]);
          e = h(
            {},
            i,
            (function (t) {
              return "string" == typeof t
                ? { source: t }
                : {
                    source_page: t.page,
                    source_section: t.section,
                    source_object: t.object,
                    source_object_type: t.objectType,
                    source_promotion_id: t.promotionId,
                  };
            })(o)
          );
        }
        e.client_performance_cpu = s.Z.getCurrentCPUUsagePercent();
        e.client_performance_memory = s.Z.getCurrentMemoryUsageKB();
        e.cpu_core_count = s.Z.getCPUCoreCount();
        e.accessibility_features = R();
        e.rendered_locale = p.Z.getLocale();
        var u,
          c,
          l,
          a,
          f = P.utmSource,
          y = P.utmMedium,
          d = P.utmCampaign,
          b = P.utmContent;
        e.utm_source = null !== (u = e.utm_source) && void 0 !== u ? u : f;
        e.utm_medium = null !== (c = e.utm_medium) && void 0 !== c ? c : y;
        e.utm_campaign = null !== (l = e.utm_campaign) && void 0 !== l ? l : d;
        e.utm_content = null !== (a = e.utm_content) && void 0 !== a ? a : b;
        j.forEach(function (t) {
          return t(e);
        });
        return e;
      }
      function K(t, e) {
        var n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        a.default.isLoggingAnalyticsEvents &&
          console.info("AnalyticsUtils.track(...):", t, e);
        n ? l.report("Analytics", t, e) : l.report("Analytics", t);
      }
      var L = (0, i.Gb)({
        analyticEventConfigs: D,
        dispatcher: u.Z,
        TRACK_ACTION_NAME: "TRACK",
      });
      function Z(t, e) {
        var n = U(h({ location: (0, c.k$)() }, e));
        (0, c.dT)(t, h({ type: "action" }, e));
        K(t, n);
        L(t, n);
      }
      const G = (function (t, e) {
        e = null != e ? e : {};
        Object.getOwnPropertyDescriptors
          ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(e))
          : (function (t, e) {
              var n = Object.keys(t);
              if (Object.getOwnPropertySymbols) {
                var r = Object.getOwnPropertySymbols(t);
                e &&
                  (r = r.filter(function (e) {
                    return Object.getOwnPropertyDescriptor(t, e).enumerable;
                  }));
                n.push.apply(n, r);
              }
              return n;
            })(Object(e)).forEach(function (n) {
              Object.defineProperty(
                t,
                n,
                Object.getOwnPropertyDescriptor(e, n)
              );
            });
        return t;
      })(h({}, i.ZP), {
        getCampaignParams: i.fU,
        setSystemAccessibilityFeatures: function (t) {
          R = t;
        },
        expandEventProperties: U,
        track: function (t, e) {
          var n =
              arguments.length > 2 && void 0 !== arguments[2]
                ? arguments[2]
                : {},
            r = U(e);
          K(t, r, n.logEventProperties);
          return x(t, r, { flush: n.flush, fingerprint: n.fingerprint });
        },
      });
    },
    877158: (t, e, n) => {
      n.d(e, { Z: () => y });
      var r = n(891153);
      var o = (function () {
          function t() {
            !(function (t, e) {
              if (!(t instanceof e))
                throw new TypeError("Cannot call a class as a function");
            })(this, t);
          }
          t.prototype.getCPUCoreCount = function () {
            return this.cpuCoreCount;
          };
          return t;
        })(),
        i = n(588641);
      function u(t) {
        u = Object.setPrototypeOf
          ? Object.getPrototypeOf
          : function (t) {
              return t.__proto__ || Object.getPrototypeOf(t);
            };
        return u(t);
      }
      function c(t, e) {
        return !e || ("object" !== a(e) && "function" != typeof e)
          ? (function (t) {
              if (void 0 === t)
                throw new ReferenceError(
                  "this hasn't been initialised - super() hasn't been called"
                );
              return t;
            })(t)
          : e;
      }
      function l(t, e) {
        l =
          Object.setPrototypeOf ||
          function (t, e) {
            t.__proto__ = e;
            return t;
          };
        return l(t, e);
      }
      var a = function (t) {
        return t && "undefined" != typeof Symbol && t.constructor === Symbol
          ? "symbol"
          : typeof t;
      };
      function s(t) {
        var e = (function () {
          if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
          if (Reflect.construct.sham) return !1;
          if ("function" == typeof Proxy) return !0;
          try {
            Boolean.prototype.valueOf.call(
              Reflect.construct(Boolean, [], function () {})
            );
            return !0;
          } catch (t) {
            return !1;
          }
        })();
        return function () {
          var n,
            r = u(t);
          if (e) {
            var o = u(this).constructor;
            n = Reflect.construct(r, arguments, o);
          } else n = r.apply(this, arguments);
          return c(this, n);
        };
      }
      var f = (function (t) {
        !(function (t, e) {
          if ("function" != typeof e && null !== e)
            throw new TypeError(
              "Super expression must either be null or a function"
            );
          t.prototype = Object.create(e && e.prototype, {
            constructor: { value: t, writable: !0, configurable: !0 },
          });
          e && l(t, e);
        })(n, t);
        var e = s(n);
        function n() {
          !(function (t, e) {
            if (!(t instanceof e))
              throw new TypeError("Cannot call a class as a function");
          })(this, n);
          var t, o, i;
          (t = e.call(this)).cpuCoreCount =
            null === r.Z ||
            void 0 === r.Z ||
            null === (o = r.Z.processUtils) ||
            void 0 === o ||
            null === (i = o.getCPUCoreCount) ||
            void 0 === i
              ? void 0
              : i.call(o);
          return t;
        }
        var o = n.prototype;
        o.getCurrentCPUUsagePercent = function () {
          var t, e;
          return null === r.Z ||
            void 0 === r.Z ||
            null === (t = r.Z.processUtils) ||
            void 0 === t ||
            null === (e = t.getCurrentCPUUsagePercent) ||
            void 0 === e
            ? void 0
            : e.call(t);
        };
        o.getCurrentMemoryUsageKB = function () {
          try {
            var t = i.default.getDiscordMemoryUsage();
            if (null == t) {
              var e, n;
              return null === r.Z ||
                void 0 === r.Z ||
                null === (e = r.Z.processUtils) ||
                void 0 === e ||
                null === (n = e.getCurrentMemoryUsageKB) ||
                void 0 === n
                ? void 0
                : n.call(e);
            }
            return (
              Object.values(t).reduce(function (t, e) {
                return t + e;
              }, 0) / 1024
            );
          } catch (t) {
            return 0;
          }
        };
        o.getMemoryUsageDetails = function () {
          return i.default.getDiscordMemoryUsage();
        };
        return n;
      })(o);
      const y = new f();
    },
    974119: (t, e, n) => {
      n.d(e, { Z: () => P });
      var r = n(444450),
        o = n(730367);
      function i(t, e) {
        (null == e || e > t.length) && (e = t.length);
        for (var n = 0, r = new Array(e); n < e; n++) r[n] = t[n];
        return r;
      }
      function u(t, e) {
        return (
          (function (t) {
            if (Array.isArray(t)) return t;
          })(t) ||
          (function (t, e) {
            var n =
              null == t
                ? null
                : ("undefined" != typeof Symbol && t[Symbol.iterator]) ||
                  t["@@iterator"];
            if (null != n) {
              var r,
                o,
                i = [],
                u = !0,
                c = !1;
              try {
                for (n = n.call(t); !(u = (r = n.next()).done); u = !0) {
                  i.push(r.value);
                  if (e && i.length === e) break;
                }
              } catch (t) {
                c = !0;
                o = t;
              } finally {
                try {
                  u || null == n.return || n.return();
                } finally {
                  if (c) throw o;
                }
              }
              return i;
            }
          })(t, e) ||
          l(t, e) ||
          (function () {
            throw new TypeError(
              "Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
            );
          })()
        );
      }
      function c(t) {
        return (
          (function (t) {
            if (Array.isArray(t)) return i(t);
          })(t) ||
          (function (t) {
            if (
              ("undefined" != typeof Symbol && null != t[Symbol.iterator]) ||
              null != t["@@iterator"]
            )
              return Array.from(t);
          })(t) ||
          l(t) ||
          (function () {
            throw new TypeError(
              "Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
            );
          })()
        );
      }
      function l(t, e) {
        if (t) {
          if ("string" == typeof t) return i(t, e);
          var n = Object.prototype.toString.call(t).slice(8, -1);
          "Object" === n && t.constructor && (n = t.constructor.name);
          return "Map" === n || "Set" === n
            ? Array.from(n)
            : "Arguments" === n ||
              /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
            ? i(t, e)
            : void 0;
        }
      }
      var a = "dQw4w9WgXcQ:";
      function s(t) {
        return c(t).reduce(function (t, e) {
          var n = u(e, 2),
            r = n[0],
            o = n[1];
          t[r] = o;
          return t;
        }, {});
      }
      var f = null,
        y = window.DiscordNative;
      null != y && (f = y.safeStorage);
      var p,
        d,
        b = !1,
        h = {},
        g = {},
        E = !1,
        v = !1;
      function _() {
        if (E) {
          r.Z.remove(o.B1);
          r.Z.remove(o.XM);
        } else {
          null != d ? r.Z.set(o.B1, d) : r.Z.remove(o.B1);
          r.Z.set(o.XM, g);
        }
      }
      function m(t) {
        return null == t || 0 === t.length
          ? { decryptedToken: null, wasEncrypted: !1 }
          : (null == f ? void 0 : f.isEncryptionAvailable()) && t.startsWith(a)
          ? {
              decryptedToken: f.decryptString(t.substring(a.length)),
              wasEncrypted: !0,
            }
          : { decryptedToken: t, wasEncrypted: !1 };
      }
      function O(t) {
        return (null == f ? void 0 : f.isEncryptionAvailable()) &&
          !t.startsWith(a)
          ? "".concat(a).concat(f.encryptString(t))
          : t;
      }
      const P = {
        init: function () {
          if (!v) {
            d = r.Z.get(o.B1);
            g = r.Z.get(o.XM) || {};
            var t = m(d),
              e = t.decryptedToken,
              n = t.wasEncrypted;
            b = n;
            p = e;
            h = s(
              Object.entries(g)
                .map(function (t) {
                  var e = u(t, 2),
                    n = e[0],
                    r = m(e[1]),
                    o = r.decryptedToken,
                    i = r.wasEncrypted;
                  b = i || b;
                  return [n, o];
                })
                .filter(function (t) {
                  var e = u(t, 2);
                  e[0];
                  return null != e[1];
                })
            );
            v = !0;
          }
        },
        getToken: function (t) {
          this.init();
          return null != t ? h[t] : p;
        },
        setToken: function (t, e) {
          if (null != t) {
            p = t;
            null != e && (h[e] = t);
            if (b) this.encryptAndStoreTokens();
            else {
              d = p;
              g = h;
              _();
            }
          } else this.removeToken(e);
        },
        hideToken: function () {
          if (!E) {
            E = !0;
            _();
          }
        },
        showToken: function () {
          if (E) {
            E = !1;
            _();
          }
        },
        removeToken: function (t) {
          var e = p;
          if (null != t) {
            e = h[t];
            delete h[t];
            delete g[t];
          }
          if (e === p) {
            p = null;
            d = null;
          }
          _();
        },
        encryptAndStoreTokens: function () {
          if (null == f ? void 0 : f.isEncryptionAvailable()) {
            null != p && (d = O(p));
            g = s(
              Object.entries(h).map(function (t) {
                var e = u(t, 2);
                return [e[0], O(e[1])];
              })
            );
            b = !0;
          } else {
            d = p;
            g = h;
          }
          _();
        },
      };
    },
  },
]);
//# sourceMappingURL=a1508171a8518985cc2f.js.map
