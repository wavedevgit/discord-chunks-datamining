/** Chunk was on 81008 **/
/** chunk id: 572723, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  default: () => L
}), require("./228524.js"), require("./638769.js"), require("./896048.js"), require("./134528.js"), require("./947204.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk835245 = require("./835245.js"),
  Chunk311907 = require("./311907.js"),
  Chunk562465 = require("./562465.js"),
  Chunk843282 = require("./843282.jsx"),
  Chunk732955 = require("./732955.js"),
  Chunk397927 = require("./397927.js"),
  Chunk817363 = require("./817363.jsx"),
  Chunk565150 = require("./565150.js"),
  Chunk521502 = require("./521502.js"),
  Chunk851023 = require("./851023.jsx"),
  Chunk349688 = require("./349688.jsx"),
  Chunk914905 = require("./914905.jsx"),
  Chunk176634 = require("./176634.js"),
  Chunk101555 = require("./101555.jsx"),
  Chunk386976 = require("./386976.js"),
  Chunk32523 = require("./32523.js"),
  Chunk287809 = require("./287809.js"),
  Chunk486020 = require("./486020.js"),
  Chunk405269 = require("./405269.js"),
  Chunk723702 = require("./723702.js"),
  Chunk256252 = require("./256252.js"),
  Chunk382913 = require("./382913.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk433963 = require("./433963.js");

function P(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      i = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (i = i.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), i.forEach(function(t) {
      var i;
      i = n[t], t in e ? Object.defineProperty(e, t, {
        value: i,
        enumerable: true,
        configurable: true,
        writable: true
      }) : e[t] = i
    })
  }
  return e
}
let A = ["Android", "iOS", "Windows Mobile", "Windows", "Linux", "Mac OS X"].map(e => ({
  id: e,
  label: e,
  value: e
}));

function L(e) {
  var t, L, N, T;
  let {
    transitionState: B,
    onClose: I
  } = e, D = l.useRef(null), R = l.useRef(null), [z, V] = l.useState(""), [M, W] = l.useState(""), [Y, H] = l.useState(), [K, F] = l.useState(""), [U, G] = l.useState([]), [q, Z] = l.useState(), [J, X] = l.useState(), [Q, $] = l.useState(false), [ee, et] = l.useState(""), [en, ei] = l.useState(function(e) {
    switch (e) {
      case "windows":
        return "Windows";
      case "macos":
        return "Mac OS X";
      case "linux":
        return "Linux"
    }
    return ""
  }((0, O.getOS)())), [el, er] = l.useState(""), [ea, eo] = l.useState(""), [es, eu] = l.useState(""), [ec, ed] = l.useState(""), [em, ev] = l.useState(false), [ep, eh] = l.useState(false), [ef, ex] = l.useState(false), [eg, eb] = l.useState(null);
  l.useEffect(() => {
    let e = Math.random().toString(16).slice(2);
    o.Bo.get({
      url: "".concat(location.protocol, "//").concat(location.host).concat("/assets/", "version.").concat(window.GLOBAL_ENV.RELEASE_CHANNEL, ".json"),
      query: {
        cache: e
      },
      rejectWithError: true
    }).then(e => {
      if (null != e.body && "9ca02b84af13c52e300dee71b2d630ed08ccbf83" !== e.body.hash) {
        let e = new Date("1770211315678"),
          t = new Date,
          n = (0, w.Tf)(t, e);
        n.hours > 6 && eb(n.hours)
      }
    })
  }, []);
  let ej = (0, a.bG)([y.default], () => {
      let e = y.default.getCurrentUser();
      return (null == e ? true : e.isStaff()) || (null == e ? true : e.isStaffPersonal())
    }),
    ey = (0, a.bG)([v.A], () => {
      var e;
      return null == (e = v.A.getCurrentBuildOverride().overrides) ? true : e.discord_web
    }),
    {
      overridesInfo: e_
    } = (0, j.hI)(),
    {
      overridesInfo: ew
    } = (0, b.op)(),
    eO = Object.entries(P({}, e_, ew)).map(e => {
      let [t, {
        variantId: n
      }] = e;
      return {
        experimentId: t,
        variantId: n
      }
    });
  async function eS() {
    var e, t;
    if (ex(false), "" === z || "" === M || null == Y) return void ev(true);
    let l = null == q || null == (t = q.features) ? true : t.find(e => (0, S.wY)(e) === J);
    eh(true), ev(false);
    let r = (0, k.B)(U.map(e => {
        let {
          item: t
        } = e;
        return t
      })),
      a = await (0, S.zC)({
        name: z,
        description: M,
        priority: Y,
        feature: l,
        url: K,
        buildOverride: null != (e = null == ey ? true : ey.id) ? e : null,
        experimentOverrides: eO
      }, true === Q ? {
        overridePlatformInformation: Q,
        device: ee,
        operatingSystem: en,
        operatingSystemVersion: el,
        clientVersion: ea,
        clientBuildNumber: es,
        locale: ec
      } : {
        overridePlatformInformation: Q
      }, r).catch(() => ex(true));
    eh(false), null != a && a.ok ? (ej && window.open(a.body.permalink_url, "_blank"), I(), (0, c.mMO)(async () => {
      let {
        default: e
      } = await n.e("71256").then(n.bind(n, 369323));
      return t => {
        var n, l;
        return (0, i.jsx)(e, (n = P({}, t), l = l = {
          asanaTask: a.body
        }, Object.getOwnPropertyDescriptors ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(l)) : (function(e, t) {
          var n = Object.keys(e);
          if (Object.getOwnPropertySymbols) {
            var i = Object.getOwnPropertySymbols(e);
            n.push.apply(n, i)
          }
          return n
        })(Object(l)).forEach(function(e) {
          Object.defineProperty(n, e, Object.getOwnPropertyDescriptor(l, e))
        }), n))
      }
    })) : ex(true)
  }
  return l.useEffect(() => {
    async function e() {
      Z(await (0, S.xt)())
    }
    ej && e()
  }, [ej]), l.useEffect(() => {
    if (U.length > 0) {
      var e;
      null == (e = R.current) || e.scrollIntoView({
        behavior: "smooth",
        block: "end"
      })
    }
  }, [U]), (0, x.A)({
    onPasteFiles: l.useCallback(e => {
      let t = Array.from(e).filter(e => e.type.startsWith("image/")).at(0);
      true !== t && G(e => e.some(e => {
        var n;
        return e.filename === t.name && (null == (n = e.item.file) ? true : n.size) === t.size
      }) ? e : [...e, new m.Ay({
        id: (0, r.A)(),
        file: t,
        platform: m.xz.WEB,
        origin: "clipboard"
      })])
    }, []),
    onPasteBackgroundText: l.useCallback(e => {
      W(t => t.concat(e))
    }, [])
  }), (0, i.jsx)(u.aFV, {
    size: "md",
    transitionState: B,
    "aria-label": C.intl.string(C.t.mCCdwi),
    title: C.intl.string(C.t["5LqopY"]),
    actions: [{
      variant: "secondary",
      text: C.intl.string(C.t["ETE/oC"]),
      onClick: I,
      autoFocus: false
    }, {
      variant: "primary",
      text: ej ? "Submit and Open Report" : "Submit Report",
      loading: ep,
      onClick: eS,
      autoFocus: false
    }],
    onClose: I,
    children: (0, i.jsxs)("div", {
      children: [(0, i.jsxs)(c.BJc, {
        gap: 8,
        children: [null != ey && (0, i.jsxs)(c.wx6, {
          type: "critical",
          children: [(0, i.jsx)(c.Heading, {
            variant: "heading-md/medium",
            children: C.intl.string(C.t["ZP/hEx"])
          }), (0, i.jsx)(c.Text, {
            variant: "text-sm/normal",
            children: C.intl.format(C.t["yY60+7"], {
              buildOverrideHook: () => (0, i.jsx)("b", {
                children: null == ey ? true : ey.id
              })
            })
          })]
        }), null == ey && null != eg && (0, i.jsxs)(c.wx6, {
          type: "critical",
          children: [(0, i.jsx)(c.Heading, {
            variant: "heading-md/medium",
            children: C.intl.formatToPlainString(C.t["ql2Q/e"], {
              hours: eg
            })
          }), (0, i.jsx)(c.Text, {
            variant: "text-sm/normal",
            children: C.intl.string(C.t.x18RUs)
          })]
        }), ej && Object.keys(eO).length > 0 && (0, i.jsxs)(c.wx6, {
          type: "critical",
          children: [(0, i.jsx)(c.Heading, {
            variant: "heading-md/medium",
            children: "You have the following experiments overridden:"
          }), (0, i.jsx)(c.Text, {
            variant: "text-sm/normal",
            children: eO.map(e => (0, i.jsxs)("div", {
              children: [e.experimentId, " (variant ", e.variantId, ")"]
            }, e.experimentId))
          })]
        })]
      }), (0, i.jsxs)(c.BJc, {
        gap: 24,
        padding: {
          top: 8,
          bottom: 8
        },
        children: [(0, i.jsx)(c.ksK, {
          label: C.intl.string(C.t.OZRgjw),
          error: em && "" === z ? C.intl.string(C.t.EkokLy) : null,
          placeholder: "Something is broken on this screen.",
          type: "text",
          value: z,
          maxLength: 100,
          onChange: V,
          autoFocus: true
        }), (0, i.jsx)(c.fs1, {
          label: C.intl.string(C.t["1SplH2"]),
          error: em && "" === M ? C.intl.string(C.t.EkokLy) : null,
          placeholder: "What did you expect to see?",
          value: M,
          onChange: W,
          description: ej ? "You can add additional information/media on the ticket after submitting" : true,
          autosize: true
        }), (0, i.jsx)(s.Te, {
          label: C.intl.string(C.t.xMXLda),
          errorMessage: em && true === Y ? C.intl.string(C.t.EkokLy) : null,
          renderOptionLabel: e => {
            let t;
            return t = e.priority, (0, i.jsxs)("div", {
              className: E.jS,
              children: [(0, i.jsxs)("div", {
                className: E.Kt,
                children: [(0, i.jsx)("img", {
                  alt: "",
                  className: E.YN,
                  src: (0, _._O)({
                    id: t.emoji,
                    animated: true,
                    size: 48
                  })
                }), (0, i.jsx)(c.Text, {
                  color: "text-strong",
                  variant: "text-sm/semibold",
                  className: E.n8,
                  children: t.title
                })]
              }), (0, i.jsx)(c.Text, {
                color: "text-default",
                variant: "text-xs/normal",
                className: E.dP,
                children: t.description
              })]
            })
          },
          onChange: H,
          options: (0, S.lx)().map(e => ({
            priority: e,
            value: e.value,
            label: e.title
          })),
          optionClassName: E.sI,
          value: Y,
          maxVisibleItems: 4,
          closeOnSelect: true,
          "data-migration-pending": true
        }), ej && (0, i.jsx)(c.ZiE, {
          selectionMode: "single",
          label: C.intl.string(C.t["77VVd8"]),
          value: J,
          options: null != (t = null == q || null == (T = q.features) || null == (N = T.filter(e => "" !== (0, S.wY)(e))) || null == (L = N.map(e => {
            var t;
            return {
              id: (0, S.wY)(e),
              label: null != (t = e.name) ? t : "",
              value: (0, S.wY)(e)
            }
          })) ? true : L.sort((e, t) => e.label.localeCompare(t.label))) ? t : [],
          disabled: null == q,
          onSelectionChange: e => X(e)
        }), (0, i.jsx)(c.ksK, {
          label: C.intl.string(C.t["7p5pqh"]),
          placeholder: C.intl.string(C.t.HewMzo),
          type: "text",
          value: K,
          maxLength: 5e3,
          onChange: F
        }), (0, i.jsx)(c.Checkbox, {
          checked: Q,
          onChange: e => $(e),
          label: C.intl.string(C.t.ayhqiH)
        }), Q ? (0, i.jsxs)(i.Fragment, {
          children: [(0, i.jsx)(c.ksK, {
            label: C.intl.string(C.t.rrI4Tk),
            placeholder: "Device",
            value: ee,
            onChange: e => et(e)
          }), (0, i.jsx)(c.l6P, {
            label: C.intl.string(C.t.kcHxi6),
            value: en,
            options: A,
            onSelectionChange: ei,
            selectionMode: "single",
            fullWidth: true
          }), (0, i.jsx)(c.ksK, {
            label: C.intl.string(C.t.rEtxdg),
            placeholder: "Operating System Version",
            value: el,
            onChange: e => er(e)
          }), (0, i.jsx)(c.ksK, {
            label: C.intl.string(C.t["wy1M/t"]),
            placeholder: "Client Version",
            value: ea,
            onChange: e => eo(e)
          }), (0, i.jsx)(c.ksK, {
            label: C.intl.string(C.t.f7kbVu),
            placeholder: "Client Build Number",
            value: es,
            onChange: e => eu(e)
          }), (0, i.jsx)(c.ksK, {
            label: C.intl.string(C.t["4Z5+zg"]),
            placeholder: "Locale",
            value: ec,
            onChange: e => ed(e)
          })]
        }) : null, (0, i.jsx)(c.Button, {
          variant: "secondary",
          text: C.intl.string(C.t.HVxmOD),
          onClick: () => {
            var e;
            null == (e = D.current) || e.activateUploadDialogue()
          },
          fullWidth: true
        }), (0, i.jsx)("div", {
          className: E.Fg,
          children: (0, i.jsx)(d.A, {
            ref: D,
            onChange: e => {
              var t, n;
              (null == (n = e.currentTarget) || null == (t = n.files) ? true : t[0]) != null && G([...U, ...Array.from(e.currentTarget.files).map(e => new m.Ay({
                id: (0, r.A)(),
                file: e,
                platform: m.xz.WEB,
                origin: "file_picker"
              }))])
            },
            multiple: true
          })
        }), U.length > 0 ? (0, i.jsx)(c.D0$, {
          label: "Preview",
          children: (0, i.jsx)("div", {
            ref: R,
            className: E.ZO,
            children: U.length > 0 && U.map(e => (0, i.jsxs)("div", {
              className: E.oh,
              children: [(0, i.jsxs)("div", {
                children: [(0, i.jsx)(f.J, {
                  size: h.L.SMALL,
                  upload: e
                }), (0, i.jsx)("div", {
                  className: E.eA,
                  children: (0, i.jsx)(g.Ay, {
                    children: (0, i.jsx)(p.A, {
                      tooltip: C.intl.string(C.t.vN7REz),
                      onClick: () => {
                        var t;
                        return t = e.id, void G(U.filter(e => e.id !== t))
                      },
                      dangerous: true,
                      children: (0, i.jsx)(c.ucK, {
                        size: "md",
                        color: "currentColor"
                      })
                    })
                  })
                })]
              }), (0, i.jsx)(c.Text, {
                variant: "text-xxs/medium",
                color: "text-subtle",
                children: e.filename
              })]
            }, e.id))
          })
        }) : null, ef ? (0, i.jsx)(c.Text, {
          color: "text-feedback-critical",
          variant: "text-sm/normal",
          children: "Something went wrong, try again!"
        }) : null]
      })]
    })
  })
}