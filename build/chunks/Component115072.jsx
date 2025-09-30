/** Chunk was on 83051 **/
/** chunk id: 115072, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  default: () => k
}), require("./953529.js"), require("./642613.js"), require("./388685.js"), require("./784620.js"), require("./973216.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk772848 = require("./772848.js"),
  Chunk442837 = require("./442837.js"),
  Chunk544891 = require("./544891.js"),
  Chunk755721 = require("./755721.js"),
  Chunk481060 = require("./481060.js"),
  Chunk53281 = require("./53281.jsx"),
  Chunk476326 = require("./476326.js"),
  Chunk304761 = require("./304761.js"),
  Chunk273031 = require("./273031.jsx"),
  Chunk859235 = require("./859235.jsx"),
  Chunk898463 = require("./898463.jsx"),
  Chunk951394 = require("./951394.jsx"),
  Chunk667344 = require("./667344.js"),
  Chunk493075 = require("./493075.js"),
  Chunk594174 = require("./594174.js"),
  Chunk768581 = require("./768581.js"),
  Chunk55935 = require("./55935.js"),
  Chunk358085 = require("./358085.js"),
  Chunk223356 = require("./223356.js"),
  Chunk225452 = require("./225452.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk833541 = require("./833541.js");

function C(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      var r;
      r = n[t], t in e ? Object.defineProperty(e, t, {
        value: r,
        enumerable: true,
        configurable: true,
        writable: true
      }) : e[t] = r
    })
  }
  return e
}
let E = ["Android", "iOS", "Windows Mobile", "Windows", "Linux", "Mac OS X"].map(e => ({
  label: e,
  value: e
}));

function k(e) {
  var t, k, T, D;
  let {
    transitionState: N,
    onClose: I
  } = e, A = i.useRef(null), L = i.useRef(null), [R, M] = i.useState(""), [Z, q] = i.useState(""), [z, B] = i.useState(), [V, W] = i.useState(""), [G, H] = i.useState([]), [U, X] = i.useState(), [Y, K] = i.useState(), [J, Q] = i.useState(false), [F, $] = i.useState(""), [ee, et] = i.useState(function(e) {
    switch (e) {
      case "windows":
        return "Windows";
      case "macos":
        return "Mac OS X";
      case "linux":
        return "Linux"
    }
    return ""
  }((0, O.getOS)())), [en, er] = i.useState(""), [ei, el] = i.useState(""), [ea, eo] = i.useState(""), [es, eu] = i.useState(""), [ec, ed] = i.useState(false), [em, ep] = i.useState(false), [ef, ev] = i.useState(false), [eh, ex] = i.useState(null);
  i.useEffect(() => {
    let e = Math.random().toString(16).slice(2);
    o.tn.get({
      url: "".concat(location.protocol, "//").concat(location.host).concat("/assets/", "version.").concat(window.GLOBAL_ENV.RELEASE_CHANNEL, ".json"),
      query: {
        cache: e
      },
      rejectWithError: true
    }).then(e => {
      if (null != e.body && "fdb284ddc1e1951c618baca60cf57f40477d7747" !== e.body.hash) {
        let e = new Date("1759192214306"),
          t = new Date,
          n = (0, j.TD)(t, e);
        n.hours > 6 && ex(n.hours)
      }
    })
  }, []);
  let eg = (0, a.e7)([y.default], () => {
      let e = y.default.getCurrentUser();
      return (null == e ? true : e.isStaff()) || (null == e ? true : e.isStaffPersonal())
    }),
    ey = (0, a.e7)([m.C], () => {
      var e;
      return null == (e = m.C.getCurrentBuildOverride().overrides) ? true : e.discord_web
    }),
    {
      overridesInfo: eb
    } = (0, g.s)(),
    {
      overridesInfo: ej
    } = (0, x.Q)(),
    eO = Object.entries(C({}, eb, ej)).map(e => {
      let [t, {
        variantId: n
      }] = e;
      return {
        experimentId: t,
        variantId: n
      }
    }),
    e_ = () => {
      null == I || I()
    };
  async function eS() {
    var e, t;
    if (ev(false), "" === R || "" === Z || null == z) return void ed(true);
    let i = null == U || null == (e = U.features) ? true : e.find(e => (0, _.pD)(e) === Y);
    ep(true), ed(false);
    let l = (0, S.D)(G.map(e => {
        let {
          item: t
        } = e;
        return t
      })),
      a = await (0, _.ZD)({
        name: R,
        description: Z,
        priority: z,
        feature: i,
        url: V,
        buildOverride: null != (t = null == ey ? true : ey.id) ? t : null,
        experimentOverrides: eO
      }, true === J ? {
        overridePlatformInformation: J,
        device: F,
        operatingSystem: ee,
        operatingSystemVersion: en,
        clientVersion: ei,
        clientBuildNumber: ea,
        locale: es
      } : {
        overridePlatformInformation: J
      }, l).catch(() => ev(true));
    ep(false), null != a && a.ok ? (eg && window.open(a.body.permalink_url, "_blank"), e_(), (0, u.ZDy)(async () => {
      let {
        default: e
      } = await n.e("64648").then(n.bind(n, 81155));
      return t => {
        var n, i;
        return (0, r.jsx)(e, (n = C({}, t), i = i = {
          asanaTask: a.body
        }, Object.getOwnPropertyDescriptors ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(i)) : (function(e, t) {
          var n = Object.keys(e);
          if (Object.getOwnPropertySymbols) {
            var r = Object.getOwnPropertySymbols(e);
            n.push.apply(n, r)
          }
          return n
        })(Object(i)).forEach(function(e) {
          Object.defineProperty(n, e, Object.getOwnPropertyDescriptor(i, e))
        }), n))
      }
    })) : ev(true)
  }
  i.useEffect(() => {
    async function e() {
      X(await (0, _.WG)())
    }
    eg && e()
  }, [eg]), i.useEffect(() => {
    if (G.length > 0) {
      var e;
      null == (e = L.current) || e.scrollIntoView({
        behavior: "smooth",
        block: "end"
      })
    }
  }, [G]);
  let ew = i.useCallback(e => {
    let t = Array.from(e.clipboardData.files).filter(e => e.type.startsWith("image/")).at(0);
    true === t || G.some(e => {
      var n;
      return e.filename === t.name && (null == (n = e.item.file) ? true : n.size) === t.size
    }) || H([...G, new d.ZP({
      id: (0, l.Z)(),
      file: t,
      platform: d.ow.WEB,
      origin: "clipboard"
    })])
  }, [G]);
  return (0, r.jsxs)(u.Y0X, {
    transitionState: N,
    "aria-label": w.intl.string(w.t.mCCdws),
    size: u.CgR.MEDIUM,
    parentComponent: "BugReporterModal",
    children: [(0, r.jsx)(u.xBx, {
      children: (0, r.jsx)(u.X6q, {
        variant: "heading-lg/semibold",
        children: (0, r.jsx)(u.H, {
          children: w.intl.string(w.t["5Lqopa"])
        })
      })
    }), (0, r.jsx)(u.hzk, {
      onPaste: ew,
      children: (0, r.jsxs)("form", {
        onSubmit: eS,
        children: [null != ey && (0, r.jsx)(u.ToO, {
          type: u.ToO.Types.DANGER,
          body: w.intl.format(w.t["yY60+/"], {
            buildOverrideHook: () => (0, r.jsx)("b", {
              children: null == ey ? true : ey.id
            })
          }),
          title: w.intl.string(w.t["ZP/hEx"])
        }), null == ey && null != eh && (0, r.jsx)(u.ToO, {
          type: u.ToO.Types.DANGER,
          title: w.intl.formatToPlainString(w.t["ql2Q/f"], {
            hours: eh
          }),
          body: w.intl.string(w.t.x18RUl)
        }), eg && Object.keys(eO).length > 0 && (0, r.jsx)(u.ToO, {
          type: u.ToO.Types.DANGER,
          title: "You have the following experiments overridden:",
          body: eO.map(e => (0, r.jsxs)("div", {
            children: [e.experimentId, " (variant ", e.variantId, ")"]
          }, e.experimentId))
        }), (0, r.jsxs)(u.Kqy, {
          gap: 24,
          padding: {
            top: 8,
            bottom: 8
          },
          children: [(0, r.jsx)(u.oil, {
            label: w.intl.string(w.t.OZRgj4),
            error: ec && "" === R ? w.intl.string(w.t.EkokLy) : null,
            placeholder: "Something is broken on this screen.",
            type: "text",
            value: R,
            maxLength: 100,
            onChange: M
          }), (0, r.jsx)(u.Kx8, {
            label: w.intl.string(w.t["1SplHx"]),
            error: ec && "" === Z ? w.intl.string(w.t.EkokLy) : null,
            placeholder: "What did you expect to see?",
            value: Z,
            onChange: q,
            description: eg ? "You can add additional information/media on the ticket after submitting" : true
          }), (0, r.jsx)(u.q4e, {
            label: w.intl.string(w.t.xMXLdX),
            errorMessage: ec && true === z ? w.intl.string(w.t.EkokLy) : null,
            renderOptionLabel: e => (function(e) {
              let t = e.priority;
              return (0, r.jsxs)("div", {
                className: P.formPriorityImageContainer,
                children: [(0, r.jsxs)("div", {
                  className: P.formPriorityTitleContainer,
                  children: [(0, r.jsx)("img", {
                    alt: "",
                    className: P.formPriorityImage,
                    src: (0, b.gT)({
                      id: t.emoji,
                      animated: true,
                      size: 48
                    })
                  }), (0, r.jsx)(u.Text, {
                    color: "header-primary",
                    variant: "text-sm/semibold",
                    className: P.formPriorityTitle,
                    children: t.title
                  })]
                }), (0, r.jsx)(u.Text, {
                  color: "header-secondary",
                  variant: "text-xs/normal",
                  className: P.formPriorityDescription,
                  children: t.description
                })]
              })
            })(e),
            onChange: B,
            options: (0, _.Tj)().map(e => ({
              priority: e,
              value: e.value,
              label: e.title
            })),
            optionClassName: P.formPriorityOption,
            value: z,
            maxVisibleItems: 4,
            closeOnSelect: true
          }), eg && (0, r.jsx)(u.VcW, {
            label: w.intl.string(w.t["77VVd3"]),
            value: Y,
            options: null != (D = null == U || null == (T = U.features) || null == (k = T.filter(e => "" !== (0, _.pD)(e))) || null == (t = k.map(e => {
              var t;
              return {
                label: null != (t = e.name) ? t : "",
                value: (0, _.pD)(e)
              }
            })) ? true : t.sort((e, t) => e.label.localeCompare(t.label))) ? D : [],
            isDisabled: null == U,
            onChange: e => K(e)
          }), (0, r.jsx)(u.oil, {
            label: w.intl.string(w.t["7p5pqq"]),
            placeholder: w.intl.string(w.t.HewMzs),
            type: "text",
            value: V,
            maxLength: 5e3,
            onChange: W
          }), (0, r.jsx)(s.$q, {
            value: J,
            onChange: (e, t) => Q(t),
            children: w.intl.string(w.t.ayhqiI)
          }), J ? (0, r.jsxs)(r.Fragment, {
            children: [(0, r.jsx)(u.oil, {
              label: w.intl.string(w.t.rrI4Tk),
              placeholder: "Device",
              value: F,
              onChange: e => $(e)
            }), (0, r.jsx)(u.q4e, {
              label: w.intl.string(w.t.kcHxi4),
              value: ee,
              options: E,
              onChange: e => et(e)
            }), (0, r.jsx)(u.oil, {
              label: w.intl.string(w.t.rEtxdn),
              placeholder: "Operating System Version",
              value: en,
              onChange: e => er(e)
            }), (0, r.jsx)(u.oil, {
              label: w.intl.string(w.t["wy1M/v"]),
              placeholder: "Client Version",
              value: ei,
              onChange: e => el(e)
            }), (0, r.jsx)(u.oil, {
              label: w.intl.string(w.t.f7kbVl),
              placeholder: "Client Build Number",
              value: ea,
              onChange: e => eo(e)
            }), (0, r.jsx)(u.oil, {
              label: w.intl.string(w.t["4Z5+zs"]),
              placeholder: "Locale",
              value: es,
              onChange: e => eu(e)
            })]
          }) : null, (0, r.jsxs)(s.zx, {
            color: s.zx.Colors.PRIMARY,
            children: [w.intl.string(w.t.HVxmOD), (0, r.jsx)(c.Z, {
              ref: A,
              onChange: e => {
                var t, n;
                (null == (n = e.currentTarget) || null == (t = n.files) ? true : t[0]) != null && H([...G, ...Array.from(e.currentTarget.files).map(e => new d.ZP({
                  id: (0, l.Z)(),
                  file: e,
                  platform: d.ow.WEB,
                  origin: "file_picker"
                }))])
              },
              multiple: true
            })]
          }), G.length > 0 ? (0, r.jsxs)(u.hjN, {
            children: [(0, r.jsx)(u.vwX, {
              children: "Preview"
            }), (0, r.jsx)("div", {
              ref: L,
              className: P.attachments,
              children: G.length > 0 && G.map(e => (0, r.jsxs)("div", {
                className: P.attachment,
                children: [(0, r.jsxs)("div", {
                  children: [(0, r.jsx)(v.r, {
                    size: f.q.SMALL,
                    upload: e
                  }), (0, r.jsx)("div", {
                    className: P.removeAttachment,
                    children: (0, r.jsx)(h.ZP, {
                      children: (0, r.jsx)(p.Z, {
                        tooltip: w.intl.string(w.t.vN7REx),
                        onClick: () => {
                          var t;
                          return t = e.id, void H(G.filter(e => e.id !== t))
                        },
                        dangerous: true,
                        children: (0, r.jsx)(u.XHJ, {
                          size: "md",
                          color: "currentColor"
                        })
                      })
                    })
                  })]
                }), (0, r.jsx)(u.Text, {
                  variant: "text-xxs/medium",
                  color: "text-secondary",
                  children: e.filename
                })]
              }, e.id))
            })]
          }) : null, ef ? (0, r.jsx)(u.Text, {
            color: "text-danger",
            variant: "text-sm/normal",
            children: "Something went wrong, try again!"
          }) : null]
        })]
      })
    }), (0, r.jsx)(u.mzw, {
      children: (0, r.jsxs)(u.Kqy, {
        direction: "horizontal",
        gap: 8,
        justify: "end",
        children: [(0, r.jsx)(u.zxk, {
          variant: "primary",
          text: eg ? "Submit and Open Report" : "Submit Report",
          loading: em,
          onClick: eS
        }), (0, r.jsx)(u.zxk, {
          variant: "secondary",
          text: w.intl.string(w.t["ETE/oK"]),
          onClick: e_
        })]
      })
    })]
  })
}