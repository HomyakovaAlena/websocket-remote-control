!(function (e) {
  function t(t) {
    for (
      var n, s, l = t[0], u = t[1], i = t[2], d = 0, f = [];
      d < l.length;
      d++
    )
      (s = l[d]),
        Object.prototype.hasOwnProperty.call(a, s) && a[s] && f.push(a[s][0]),
        (a[s] = 0);
    for (n in u) Object.prototype.hasOwnProperty.call(u, n) && (e[n] = u[n]);
    for (c && c(t); f.length; ) f.shift()();
    return o.push.apply(o, i || []), r();
  }
  function r() {
    for (var e, t = 0; t < o.length; t++) {
      for (var r = o[t], n = !0, l = 1; l < r.length; l++) {
        var u = r[l];
        0 !== a[u] && (n = !1);
      }
      n && (o.splice(t--, 1), (e = s((s.s = r[0]))));
    }
    return e;
  }
  var n = {},
    a = { 0: 0 },
    o = [];
  function s(t) {
    if (n[t]) return n[t].exports;
    var r = (n[t] = { i: t, l: !1, exports: {} });
    return e[t].call(r.exports, r, r.exports, s), (r.l = !0), r.exports;
  }
  (s.m = e),
    (s.c = n),
    (s.d = function (e, t, r) {
      s.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: r });
    }),
    (s.r = function (e) {
      "undefined" != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(e, "__esModule", { value: !0 });
    }),
    (s.t = function (e, t) {
      if ((1 & t && (e = s(e)), 8 & t)) return e;
      if (4 & t && "object" == typeof e && e && e.__esModule) return e;
      var r = Object.create(null);
      if (
        (s.r(r),
        Object.defineProperty(r, "default", { enumerable: !0, value: e }),
        2 & t && "string" != typeof e)
      )
        for (var n in e)
          s.d(
            r,
            n,
            function (t) {
              return e[t];
            }.bind(null, n)
          );
      return r;
    }),
    (s.n = function (e) {
      var t =
        e && e.__esModule
          ? function () {
              return e.default;
            }
          : function () {
              return e;
            };
      return s.d(t, "a", t), t;
    }),
    (s.o = function (e, t) {
      return Object.prototype.hasOwnProperty.call(e, t);
    }),
    (s.p = "/");
  var l = (window.webpackJsonp = window.webpackJsonp || []),
    u = l.push.bind(l);
  (l.push = t), (l = l.slice());
  for (var i = 0; i < l.length; i++) t(l[i]);
  var c = u;
  o.push([207, 1]), r();
})({
  207: function (e, t, r) {
    "use strict";
    var n =
      (this && this.__importDefault) ||
      function (e) {
        return e && e.__esModule ? e : { default: e };
      };
    Object.defineProperty(t, "__esModule", { value: !0 });
    var a = n(r(0)),
      o = n(r(4)),
      s = r(323),
      l = n(r(216)),
      u = document.getElementById("root");
    (u.hasChildNodes() ? o.default.hydrate : o.default.render)(
      a.default.createElement(
        s.BrowserRouter,
        null,
        a.default.createElement(l.default, null)
      ),
      u
    );
  },
  216: function (e, t, r) {
    "use strict";
    var n,
      a =
        (this && this.__extends) ||
        ((n = function (e, t) {
          return (
            (n =
              Object.setPrototypeOf ||
              ({ __proto__: [] } instanceof Array &&
                function (e, t) {
                  e.__proto__ = t;
                }) ||
              function (e, t) {
                for (var r in t)
                  Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
              }),
            n(e, t)
          );
        }),
        function (e, t) {
          function r() {
            this.constructor = e;
          }
          n(e, t),
            (e.prototype =
              null === t
                ? Object.create(t)
                : ((r.prototype = t.prototype), new r()));
        }),
      o =
        (this && this.__importDefault) ||
        function (e) {
          return e && e.__esModule ? e : { default: e };
        };
    Object.defineProperty(t, "__esModule", { value: !0 });
    var s = o(r(0));
    r(217);
    var l = o(r(219)),
      u = o(r(315)),
      i = r(197),
      c = (function (e) {
        function t() {
          return (null !== e && e.apply(this, arguments)) || this;
        }
        return (
          a(t, e),
          (t.prototype.render = function () {
            return s.default.createElement(
              i.Space,
              {
                direction: "vertical",
                style: { display: "flex", width: "1024px" },
              },
              s.default.createElement(
                i.Card,
                null,
                " ",
                s.default.createElement(l.default, null)
              ),
              s.default.createElement(
                i.Card,
                null,
                " ",
                s.default.createElement(u.default, null)
              )
            );
          }),
          t
        );
      })(s.default.Component);
    t.default = c;
  },
  217: function (e, t, r) {
    var n = r(33),
      a = r(218);
    "string" == typeof (a = a.__esModule ? a.default : a) &&
      (a = [[e.i, a, ""]]);
    var o = { insert: "head", singleton: !1 };
    n(a, o);
    e.exports = a.locals || {};
  },
  218: function (e, t, r) {
    "use strict";
    r.r(t);
    var n = r(11),
      a = r.n(n),
      o = r(199),
      s = a()(!1);
    s.i(o.a), s.push([e.i, "", ""]), (t.default = s);
  },
  219: function (e, t, r) {
    "use strict";
    var n =
        (this && this.__createBinding) ||
        (Object.create
          ? function (e, t, r, n) {
              void 0 === n && (n = r),
                Object.defineProperty(e, n, {
                  enumerable: !0,
                  get: function () {
                    return t[r];
                  },
                });
            }
          : function (e, t, r, n) {
              void 0 === n && (n = r), (e[n] = t[r]);
            }),
      a =
        (this && this.__setModuleDefault) ||
        (Object.create
          ? function (e, t) {
              Object.defineProperty(e, "default", { enumerable: !0, value: t });
            }
          : function (e, t) {
              e.default = t;
            }),
      o =
        (this && this.__importStar) ||
        function (e) {
          if (e && e.__esModule) return e;
          var t = {};
          if (null != e)
            for (var r in e)
              "default" !== r &&
                Object.prototype.hasOwnProperty.call(e, r) &&
                n(t, e, r);
          return a(t, e), t;
        };
    Object.defineProperty(t, "__esModule", { value: !0 });
    var s = o(r(0)),
      l = o(r(220)),
      u = r(197);
    r(313),
      (t.default = function () {
        var e,
          t = s.useState("ws://localhost:8080"),
          r = t[0],
          n = t[1],
          a = s.useState([]),
          o = a[0],
          i = a[1],
          c = s.useState(10),
          d = c[0],
          f = c[1],
          p = s.useState({ x: 0, y: 0 }),
          m = p[0],
          b = p[1],
          h = s.useState(100),
          j = h[0],
          v = h[1],
          y = s.useState(100),
          g = y[0],
          w = y[1],
          k = u.Form.useForm()[0],
          x = l.default(r),
          _ = x.sendMessage,
          O = x.lastMessage,
          E = x.readyState;
        s.useEffect(
          function () {
            if (null !== O) {
              var e = O.data.split(" ");
              if ("mouse_position" === e[0]) {
                var t = e[1].split(",");
                b({ x: t[0], y: t[1] });
              } else if ("prnt_scrn" === e[0]) {
                var r = O.data.substring(10);
                console.log(r),
                  (document.getElementById("screen_wrapper").src =
                    "data:image/png;base64," + r);
              }
              i(function (e) {
                return e.concat(O);
              });
            }
          },
          [O, i]
        ),
          s.useEffect(
            function () {
              return (
                window.removeEventListener("keydown", S),
                window.addEventListener("keydown", S),
                function () {
                  window.removeEventListener("keydown", S);
                }
              );
            },
            [d, j, g]
          );
        var S = function (e) {
            switch (e.key) {
              case "ArrowLeft":
                e.preventDefault(), _("mouse_left " + d);
                break;
              case "ArrowRight":
                e.preventDefault(), _("mouse_right " + d);
                break;
              case "ArrowUp":
                e.preventDefault(), _("mouse_up " + d);
                break;
              case "ArrowDown":
                e.preventDefault(), _("mouse_down " + d);
                break;
              case "s":
                _("draw_square " + j);
                break;
              case "r":
                _("draw_rectangle " + j + " " + g);
                break;
              case "c":
                _("draw_circle " + j);
                break;
              case "p":
                e.ctrlKey
                  ? (e.preventDefault(), _("prnt_scrn"))
                  : _("mouse_position");
            }
          },
          C = s.useCallback(function (e) {
            n("ws://" + e.wsocketUrl);
          }, []),
          z = s.useCallback(function (e) {
            return f(e);
          }, []),
          B = s.useCallback(function (e) {
            return v(e);
          }, []),
          P = s.useCallback(function (e) {
            return w(e);
          }, []),
          M = ((e = {}),
          (e[l.ReadyState.CONNECTING] = "Connecting"),
          (e[l.ReadyState.OPEN] = "Open"),
          (e[l.ReadyState.CLOSING] = "Closing"),
          (e[l.ReadyState.CLOSED] = "Closed"),
          (e[l.ReadyState.UNINSTANTIATED] = "Uninstantiated"),
          e)[E];
        return s.default.createElement(
          "div",
          {
            style: {
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-around",
            },
          },
          s.default.createElement(
            u.Space,
            {
              direction: "vertical",
              size: "middle",
              style: { display: "flex", width: "520px" },
            },
            s.default.createElement(
              u.Card,
              { title: "Mouse control", size: "small" },
              s.default.createElement(
                "div",
                null,
                "You can send messages to the ws server with the help of the keyboard arrow buttons"
              ),
              s.default.createElement(
                "div",
                null,
                "Mouse control offset (px):",
                s.default.createElement(u.InputNumber, {
                  min: 10,
                  max: 1920,
                  defaultValue: 10,
                  style: { marginLeft: "5px" },
                  onChange: z,
                }),
                s.default.createElement("br", null),
                'Mouse position (keyboard "p" button) (px):',
                s.default.createElement("div", null, "x:", m.x, ", y:", m.y)
              )
            ),
            s.default.createElement(
              u.Card,
              { title: "Drawing", size: "small" },
              s.default.createElement(
                "div",
                null,
                'You can draw circle (keyboard "c" button), square (keyboard "s" button) and rectangular (keyboard "r" button)'
              ),
              s.default.createElement(
                "div",
                null,
                "Figure width or radius (px):",
                s.default.createElement(u.InputNumber, {
                  min: 1,
                  max: 1080,
                  defaultValue: 100,
                  style: { marginLeft: "5px" },
                  onChange: B,
                })
              ),
              s.default.createElement(
                "div",
                null,
                "Figure length (px):",
                s.default.createElement(u.InputNumber, {
                  min: 1,
                  max: 1080,
                  defaultValue: 100,
                  style: { marginLeft: "5px" },
                  onChange: P,
                })
              )
            ),
            s.default.createElement(
              u.Card,
              { title: "WebSocket", size: "small" },
              s.default.createElement(
                u.Form,
                {
                  form: k,
                  name: "control-hooks",
                  onFinish: C,
                  initialValues: { wsocketUrl: "localhost" },
                },
                s.default.createElement(
                  u.Form.Item,
                  { name: "wsocketUrl", label: "WebSocket URL" },
                  s.default.createElement(u.Input, { addonBefore: "ws://" })
                ),
                s.default.createElement(
                  u.Form.Item,
                  null,
                  s.default.createElement(
                    u.Button,
                    { type: "primary", htmlType: "submit" },
                    "Submit"
                  )
                )
              )
            )
          ),
          s.default.createElement(
            u.Space,
            { direction: "vertical", size: "middle" },
            s.default.createElement(
              "div",
              null,
              "You can get part of screen image",
              s.default.createElement("br", null),
              "with LCtrl+p keyboard buttons"
            ),
            s.default.createElement("img", {
              id: "screen_wrapper",
              style: { width: "200px", height: "200px" },
            }),
            s.default.createElement(
              u.Card,
              { title: "Status and history", size: "small" },
              s.default.createElement(
                "div",
                null,
                "The WebSocket is currently ",
                M
              ),
              s.default.createElement(
                "div",
                null,
                "Last command: ",
                O ? O.data.split(" ")[0] : null
              ),
              s.default.createElement(
                "div",
                { style: { height: "185px", overflow: "auto" } },
                o.reverse().map(function (e, t) {
                  return s.default.createElement(
                    "span",
                    { key: t },
                    e
                      ? s.default.createElement(
                          "div",
                          null,
                          e.data.split(" ")[0]
                        )
                      : null
                  );
                })
              )
            )
          )
        );
      });
  },
  228: function (e, t, r) {
    var n = {
      "./af": 47,
      "./af.js": 47,
      "./ar": 48,
      "./ar-dz": 49,
      "./ar-dz.js": 49,
      "./ar-kw": 50,
      "./ar-kw.js": 50,
      "./ar-ly": 51,
      "./ar-ly.js": 51,
      "./ar-ma": 52,
      "./ar-ma.js": 52,
      "./ar-sa": 53,
      "./ar-sa.js": 53,
      "./ar-tn": 54,
      "./ar-tn.js": 54,
      "./ar.js": 48,
      "./az": 55,
      "./az.js": 55,
      "./be": 56,
      "./be.js": 56,
      "./bg": 57,
      "./bg.js": 57,
      "./bm": 58,
      "./bm.js": 58,
      "./bn": 59,
      "./bn-bd": 60,
      "./bn-bd.js": 60,
      "./bn.js": 59,
      "./bo": 61,
      "./bo.js": 61,
      "./br": 62,
      "./br.js": 62,
      "./bs": 63,
      "./bs.js": 63,
      "./ca": 64,
      "./ca.js": 64,
      "./cs": 65,
      "./cs.js": 65,
      "./cv": 66,
      "./cv.js": 66,
      "./cy": 67,
      "./cy.js": 67,
      "./da": 68,
      "./da.js": 68,
      "./de": 69,
      "./de-at": 70,
      "./de-at.js": 70,
      "./de-ch": 71,
      "./de-ch.js": 71,
      "./de.js": 69,
      "./dv": 72,
      "./dv.js": 72,
      "./el": 73,
      "./el.js": 73,
      "./en-au": 74,
      "./en-au.js": 74,
      "./en-ca": 75,
      "./en-ca.js": 75,
      "./en-gb": 76,
      "./en-gb.js": 76,
      "./en-ie": 77,
      "./en-ie.js": 77,
      "./en-il": 78,
      "./en-il.js": 78,
      "./en-in": 79,
      "./en-in.js": 79,
      "./en-nz": 80,
      "./en-nz.js": 80,
      "./en-sg": 81,
      "./en-sg.js": 81,
      "./eo": 82,
      "./eo.js": 82,
      "./es": 83,
      "./es-do": 84,
      "./es-do.js": 84,
      "./es-mx": 85,
      "./es-mx.js": 85,
      "./es-us": 86,
      "./es-us.js": 86,
      "./es.js": 83,
      "./et": 87,
      "./et.js": 87,
      "./eu": 88,
      "./eu.js": 88,
      "./fa": 89,
      "./fa.js": 89,
      "./fi": 90,
      "./fi.js": 90,
      "./fil": 91,
      "./fil.js": 91,
      "./fo": 92,
      "./fo.js": 92,
      "./fr": 93,
      "./fr-ca": 94,
      "./fr-ca.js": 94,
      "./fr-ch": 95,
      "./fr-ch.js": 95,
      "./fr.js": 93,
      "./fy": 96,
      "./fy.js": 96,
      "./ga": 97,
      "./ga.js": 97,
      "./gd": 98,
      "./gd.js": 98,
      "./gl": 99,
      "./gl.js": 99,
      "./gom-deva": 100,
      "./gom-deva.js": 100,
      "./gom-latn": 101,
      "./gom-latn.js": 101,
      "./gu": 102,
      "./gu.js": 102,
      "./he": 103,
      "./he.js": 103,
      "./hi": 104,
      "./hi.js": 104,
      "./hr": 105,
      "./hr.js": 105,
      "./hu": 106,
      "./hu.js": 106,
      "./hy-am": 107,
      "./hy-am.js": 107,
      "./id": 108,
      "./id.js": 108,
      "./is": 109,
      "./is.js": 109,
      "./it": 110,
      "./it-ch": 111,
      "./it-ch.js": 111,
      "./it.js": 110,
      "./ja": 112,
      "./ja.js": 112,
      "./jv": 113,
      "./jv.js": 113,
      "./ka": 114,
      "./ka.js": 114,
      "./kk": 115,
      "./kk.js": 115,
      "./km": 116,
      "./km.js": 116,
      "./kn": 117,
      "./kn.js": 117,
      "./ko": 118,
      "./ko.js": 118,
      "./ku": 119,
      "./ku.js": 119,
      "./ky": 120,
      "./ky.js": 120,
      "./lb": 121,
      "./lb.js": 121,
      "./lo": 122,
      "./lo.js": 122,
      "./lt": 123,
      "./lt.js": 123,
      "./lv": 124,
      "./lv.js": 124,
      "./me": 125,
      "./me.js": 125,
      "./mi": 126,
      "./mi.js": 126,
      "./mk": 127,
      "./mk.js": 127,
      "./ml": 128,
      "./ml.js": 128,
      "./mn": 129,
      "./mn.js": 129,
      "./mr": 130,
      "./mr.js": 130,
      "./ms": 131,
      "./ms-my": 132,
      "./ms-my.js": 132,
      "./ms.js": 131,
      "./mt": 133,
      "./mt.js": 133,
      "./my": 134,
      "./my.js": 134,
      "./nb": 135,
      "./nb.js": 135,
      "./ne": 136,
      "./ne.js": 136,
      "./nl": 137,
      "./nl-be": 138,
      "./nl-be.js": 138,
      "./nl.js": 137,
      "./nn": 139,
      "./nn.js": 139,
      "./oc-lnc": 140,
      "./oc-lnc.js": 140,
      "./pa-in": 141,
      "./pa-in.js": 141,
      "./pl": 142,
      "./pl.js": 142,
      "./pt": 143,
      "./pt-br": 144,
      "./pt-br.js": 144,
      "./pt.js": 143,
      "./ro": 145,
      "./ro.js": 145,
      "./ru": 146,
      "./ru.js": 146,
      "./sd": 147,
      "./sd.js": 147,
      "./se": 148,
      "./se.js": 148,
      "./si": 149,
      "./si.js": 149,
      "./sk": 150,
      "./sk.js": 150,
      "./sl": 151,
      "./sl.js": 151,
      "./sq": 152,
      "./sq.js": 152,
      "./sr": 153,
      "./sr-cyrl": 154,
      "./sr-cyrl.js": 154,
      "./sr.js": 153,
      "./ss": 155,
      "./ss.js": 155,
      "./sv": 156,
      "./sv.js": 156,
      "./sw": 157,
      "./sw.js": 157,
      "./ta": 158,
      "./ta.js": 158,
      "./te": 159,
      "./te.js": 159,
      "./tet": 160,
      "./tet.js": 160,
      "./tg": 161,
      "./tg.js": 161,
      "./th": 162,
      "./th.js": 162,
      "./tk": 163,
      "./tk.js": 163,
      "./tl-ph": 164,
      "./tl-ph.js": 164,
      "./tlh": 165,
      "./tlh.js": 165,
      "./tr": 166,
      "./tr.js": 166,
      "./tzl": 167,
      "./tzl.js": 167,
      "./tzm": 168,
      "./tzm-latn": 169,
      "./tzm-latn.js": 169,
      "./tzm.js": 168,
      "./ug-cn": 170,
      "./ug-cn.js": 170,
      "./uk": 171,
      "./uk.js": 171,
      "./ur": 172,
      "./ur.js": 172,
      "./uz": 173,
      "./uz-latn": 174,
      "./uz-latn.js": 174,
      "./uz.js": 173,
      "./vi": 175,
      "./vi.js": 175,
      "./x-pseudo": 176,
      "./x-pseudo.js": 176,
      "./yo": 177,
      "./yo.js": 177,
      "./zh-cn": 178,
      "./zh-cn.js": 178,
      "./zh-hk": 179,
      "./zh-hk.js": 179,
      "./zh-mo": 180,
      "./zh-mo.js": 180,
      "./zh-tw": 181,
      "./zh-tw.js": 181,
    };
    function a(e) {
      var t = o(e);
      return r(t);
    }
    function o(e) {
      if (!r.o(n, e)) {
        var t = new Error("Cannot find module '" + e + "'");
        throw ((t.code = "MODULE_NOT_FOUND"), t);
      }
      return n[e];
    }
    (a.keys = function () {
      return Object.keys(n);
    }),
      (a.resolve = o),
      (e.exports = a),
      (a.id = 228);
  },
  313: function (e, t, r) {
    var n = r(33),
      a = r(314);
    "string" == typeof (a = a.__esModule ? a.default : a) &&
      (a = [[e.i, a, ""]]);
    var o = { insert: "head", singleton: !1 };
    n(a, o);
    e.exports = a.locals || {};
  },
  314: function (e, t, r) {
    "use strict";
    r.r(t);
    var n = r(11),
      a = r.n(n)()(!1);
    a.push([e.i, "", ""]), (t.default = a);
  },
  315: function (e, t, r) {
    "use strict";
    var n =
      (this && this.__importDefault) ||
      function (e) {
        return e && e.__esModule ? e : { default: e };
      };
    Object.defineProperty(t, "__esModule", { value: !0 });
    var a = n(r(0)),
      o = r(316),
      s = r(317),
      l = r(0),
      u = r(318),
      i = n(r(319)),
      c = n(r(320));
    r(321),
      (t.default = function () {
        var e = l.useRef(null),
          t = l.useState(o.brushSizes.Medium),
          r = t[0],
          n = t[1],
          d = l.useState(s.brushColors.Blue),
          f = d[0],
          p = d[1],
          m = !1,
          b = function (e) {
            m = !0;
            var t = e.currentTarget.getContext("2d"),
              n = u.getTouchPosition(e);
            t.beginPath(),
              t.moveTo.apply(t, n),
              (t.strokeStyle = f),
              (t.lineWidth = r);
          },
          h = function (e) {
            if ("mousemove" !== e.type || m) {
              var t = e.currentTarget.getContext("2d"),
                r = u.getTouchPosition(e);
              t.lineTo.apply(t, r),
                t.stroke(),
                t.closePath(),
                t.beginPath(),
                t.moveTo.apply(t, r);
            }
          },
          j = function (e) {
            (m = !1), e.currentTarget.getContext("2d").closePath();
          },
          v = function () {
            if (e.current) {
              var t = e.current;
              t.removeAttribute("width"),
                t.removeAttribute("height"),
                (t.width = t.offsetWidth),
                (t.height = t.offsetHeight);
              var r = t.getContext("2d");
              (r.lineJoin = "round"), (r.lineCap = "round");
              var n = getComputedStyle(document.body).getPropertyValue(
                "--canvas-background"
              );
              (r.fillStyle = n),
                r.fillRect(0, 0, t.width, t.height),
                (r.fillStyle = "transparent");
            }
          };
        return (
          l.useEffect(
            function () {
              return v();
            },
            [e]
          ),
          l.useEffect(function () {
            return (
              window.addEventListener("resize", v),
              function () {
                window.removeEventListener("resize", v);
              }
            );
          }, []),
          a.default.createElement(
            "div",
            { className: "Paint column fill" },
            a.default.createElement(
              "div",
              { className: "Toolbar row" },
              a.default.createElement(
                i.default,
                { title: "Painting" },
                a.default.createElement(
                  "button",
                  {
                    type: "button",
                    onClick: function () {
                      if (e.current) {
                        var t = e.current.toDataURL("image/png");
                        c.default(t, "painting.png");
                      }
                    },
                  },
                  "Save"
                ),
                a.default.createElement(
                  "button",
                  {
                    type: "button",
                    onClick: function () {
                      if (e.current) {
                        var t = e.current.getContext("2d");
                        t.clearRect(0, 0, t.canvas.width, t.canvas.height);
                      }
                    },
                  },
                  "Clear"
                )
              ),
              a.default.createElement(
                i.default,
                { title: "Brush size" },
                Object.entries(o.brushSizes).map(function (e) {
                  var t = e[0],
                    s = e[1];
                  return a.default.createElement(o.BrushSizeButton, {
                    key: t,
                    onClick: function () {
                      return n(s);
                    },
                    className: s === r ? "active" : "",
                    brushSize: t,
                  });
                })
              ),
              a.default.createElement(
                i.default,
                { title: "Brush color" },
                Object.entries(s.brushColors).map(function (e) {
                  var t = e[0],
                    r = e[1];
                  return a.default.createElement(s.BrushColorButton, {
                    key: t,
                    onClick: function () {
                      return p(r);
                    },
                    className: r === f ? "active" : "",
                    brushColor: t,
                  });
                })
              )
            ),
            a.default.createElement(
              "div",
              null,
              a.default.createElement("canvas", {
                ref: e,
                onMouseDown: b,
                onTouchStart: b,
                onMouseMove: h,
                onTouchMove: h,
                onMouseUp: j,
                onTouchEnd: j,
                className: "canvas-wrap",
              })
            )
          )
        );
      });
  },
  316: function (e, t, r) {
    "use strict";
    var n =
        (this && this.__assign) ||
        function () {
          return (
            (n =
              Object.assign ||
              function (e) {
                for (var t, r = 1, n = arguments.length; r < n; r++)
                  for (var a in (t = arguments[r]))
                    Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a]);
                return e;
              }),
            n.apply(this, arguments)
          );
        },
      a =
        (this && this.__rest) ||
        function (e, t) {
          var r = {};
          for (var n in e)
            Object.prototype.hasOwnProperty.call(e, n) &&
              t.indexOf(n) < 0 &&
              (r[n] = e[n]);
          if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
            var a = 0;
            for (n = Object.getOwnPropertySymbols(e); a < n.length; a++)
              t.indexOf(n[a]) < 0 &&
                Object.prototype.propertyIsEnumerable.call(e, n[a]) &&
                (r[n[a]] = e[n[a]]);
          }
          return r;
        },
      o =
        (this && this.__importDefault) ||
        function (e) {
          return e && e.__esModule ? e : { default: e };
        };
    Object.defineProperty(t, "__esModule", { value: !0 }),
      (t.BrushSizeButton = t.getSize = t.brushSizes = void 0);
    var s = o(r(0));
    function l(e) {
      return t.brushSizes[e];
    }
    function u(e) {
      var t = e.brushSize,
        r = e.className,
        o = a(e, ["brushSize", "className"]);
      return s.default.createElement(
        "button",
        n(
          {
            type: "button",
            title: t,
            className: "BrushSizeButton " + (null != r ? r : ""),
          },
          o
        ),
        s.default.createElement("span", { style: { width: l(t) + "px" } })
      );
    }
    (t.brushSizes = {
      "Ultra Small": 2,
      Small: 4,
      Medium: 6,
      Large: 8,
      "Extra Large": 10,
    }),
      (t.getSize = l),
      (t.BrushSizeButton = u),
      (t.default = u);
  },
  317: function (e, t, r) {
    "use strict";
    var n =
        (this && this.__assign) ||
        function () {
          return (
            (n =
              Object.assign ||
              function (e) {
                for (var t, r = 1, n = arguments.length; r < n; r++)
                  for (var a in (t = arguments[r]))
                    Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a]);
                return e;
              }),
            n.apply(this, arguments)
          );
        },
      a =
        (this && this.__rest) ||
        function (e, t) {
          var r = {};
          for (var n in e)
            Object.prototype.hasOwnProperty.call(e, n) &&
              t.indexOf(n) < 0 &&
              (r[n] = e[n]);
          if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
            var a = 0;
            for (n = Object.getOwnPropertySymbols(e); a < n.length; a++)
              t.indexOf(n[a]) < 0 &&
                Object.prototype.propertyIsEnumerable.call(e, n[a]) &&
                (r[n[a]] = e[n[a]]);
          }
          return r;
        },
      o =
        (this && this.__importDefault) ||
        function (e) {
          return e && e.__esModule ? e : { default: e };
        };
    Object.defineProperty(t, "__esModule", { value: !0 }),
      (t.BrushColorButton = t.getColor = t.brushColors = void 0);
    var s = o(r(0));
    function l(e) {
      return t.brushColors[e];
    }
    function u(e) {
      var t = e.brushColor,
        r = e.className,
        o = a(e, ["brushColor", "className"]);
      return s.default.createElement(
        "button",
        n(
          {
            type: "button",
            title: t,
            className: "BrushColorButton " + (null != r ? r : ""),
          },
          o
        ),
        s.default.createElement("span", { style: { backgroundColor: l(t) } })
      );
    }
    (t.brushColors = {
      Red: "#dd2a2a",
      Orange: "#ffa501",
      Yellow: "#ffd400",
      Green: "#129d12",
      "Light blue": "#80d8f5",
      Blue: "#2875d5",
      Purple: "#801ddb",
      Black: "#000",
      "Dark gray": "#333",
      Gray: "#777",
      "Light gray": "#ccc",
      White: "#fff",
    }),
      (t.getColor = l),
      (t.BrushColorButton = u),
      (t.default = u);
  },
  318: function (e, t, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 }),
      (t.getTouchPosition = void 0);
    var n = function (e) {
      return [e.clientX, e.clientY];
    };
    (t.getTouchPosition = function (e) {
      var t,
        r = e.currentTarget.getBoundingClientRect(),
        a = r.left,
        o = r.top;
      return [
        (t = e.type.startsWith("mouse")
          ? n((e = e))
          : n((e = e).touches[0]))[0] - a,
        t[1] - o,
      ];
    }),
      (t.default = t.getTouchPosition);
  },
  319: function (e, t, r) {
    "use strict";
    var n =
        (this && this.__assign) ||
        function () {
          return (
            (n =
              Object.assign ||
              function (e) {
                for (var t, r = 1, n = arguments.length; r < n; r++)
                  for (var a in (t = arguments[r]))
                    Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a]);
                return e;
              }),
            n.apply(this, arguments)
          );
        },
      a =
        (this && this.__rest) ||
        function (e, t) {
          var r = {};
          for (var n in e)
            Object.prototype.hasOwnProperty.call(e, n) &&
              t.indexOf(n) < 0 &&
              (r[n] = e[n]);
          if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
            var a = 0;
            for (n = Object.getOwnPropertySymbols(e); a < n.length; a++)
              t.indexOf(n[a]) < 0 &&
                Object.prototype.propertyIsEnumerable.call(e, n[a]) &&
                (r[n[a]] = e[n[a]]);
          }
          return r;
        },
      o =
        (this && this.__importDefault) ||
        function (e) {
          return e && e.__esModule ? e : { default: e };
        };
    Object.defineProperty(t, "__esModule", { value: !0 });
    var s = o(r(0));
    t.default = function (e) {
      var t = e.title,
        r = e.children,
        o = a(e, ["title", "children"]);
      return s.default.createElement(
        "section",
        n({ className: "ToolbarSection column fill" }, o),
        s.default.createElement("h2", null, t),
        s.default.createElement("div", { className: "row buttonWrapper" }, r)
      );
    };
  },
  320: function (e, t, r) {
    "use strict";
    function n(e, t) {
      var r = document.createElement("a");
      (r.download = t), (r.href = e), r.click();
    }
    Object.defineProperty(t, "__esModule", { value: !0 }),
      (t.downloadFile = void 0),
      (t.downloadFile = n),
      (t.default = n);
  },
  321: function (e, t, r) {
    var n = r(33),
      a = r(322);
    "string" == typeof (a = a.__esModule ? a.default : a) &&
      (a = [[e.i, a, ""]]);
    var o = { insert: "head", singleton: !1 };
    n(a, o);
    e.exports = a.locals || {};
  },
  322: function (e, t, r) {
    "use strict";
    r.r(t);
    var n = r(11),
      a = r.n(n)()(!1);
    a.push([
      e.i,
      "body{-ms-scroll-chaining:none;overscroll-behavior:none;--background: #eee;--foreground: #000;--canvas-background: #fff;--primary: #427ff0;--primary-darken: #296ceb;--shadow: #bbb}button{background-color:var(--primary);color:var(--background);-webkit-transition:background-color .2s;transition:background-color .2s;border-radius:5px;border:0;outline:0;font:inherit;cursor:pointer;padding:.25rem .5rem}button:focus,button:hover{background-color:var(--primary-darken)}.column,.row{display:-webkit-box;display:-ms-flexbox;display:flex}.column>*,.row>*{-webkit-box-flex:0;-ms-flex:0;flex:0}.column{-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column}.fill{-webkit-box-flex:1;-ms-flex:1;flex:1}.wrap{-ms-flex-wrap:wrap;flex-wrap:wrap}.canvas-wrap{width:100%;height:500px}.Paint{height:100%;-ms-flex-pack:distribute;justify-content:space-around}.Toolbar{-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;padding:1rem;padding-bottom:0;gap:1rem;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}@media (max-width:800px){.Toolbar{-webkit-box-pack:start;-ms-flex-pack:start;justify-content:flex-start;padding:1rem;overflow-x:scroll;-ms-flex-preferred-size:auto;flex-basis:auto;-webkit-box-sizing:border-box;box-sizing:border-box}}.BrushColorButton>span,canvas{display:block;border-radius:5px}.ToolbarSection,canvas{background-color:var(--canvas-background);-webkit-box-shadow:0 2px 5px var(--shadow);box-shadow:0 2px 5px var(--shadow)}canvas{max-width:calc(100% - 2rem);margin:1rem}.ToolbarSection{border-radius:5px;padding:1rem}.ToolbarSection h2{margin-bottom:.5rem}.ToolbarSection .buttonWrapper{gap:.5rem}.BrushColorButton,.BrushSizeButton{-webkit-transition:-webkit-box-shadow .2s;transition:box-shadow .2s;transition:box-shadow .2s,-webkit-box-shadow .2s}.BrushColorButton{background-color:transparent;padding:0}.BrushColorButton>span{width:1.5rem;height:1.5rem}.BrushSizeButton{background-color:transparent;padding:.25rem 0;width:1.5rem;-ms-flex-preferred-size:1.5rem;flex-basis:1.5rem;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center}.BrushSizeButton>span{display:block;height:1.5rem;border-radius:5px;background-color:var(--foreground)}.BrushColorButton.active,.BrushColorButton:focus,.BrushColorButton:hover,.BrushSizeButton.active,.BrushSizeButton:focus,.BrushSizeButton:hover{background-color:transparent;-webkit-box-shadow:0 3px 5px var(--shadow);box-shadow:0 3px 5px var(--shadow)}",
      "",
    ]),
      (t.default = a);
  },
});
