/** Chunk was on 81008 **/
/** chunk id: 572723, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  default: () => A
}), require("./228524.js"), require("./638769.js"), require("./896048.js"), require("./134528.js"), require("./947204.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk835245 = require("./835245.js"),
  Chunk621466 = require("./621466.js"),
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
let L = ["Android", "iOS", "Windows Mobile", "Windows", "Linux", "Mac OS X"].map(e => ({
  id: e,
  label: e,
  value: e
}));

function A(e) {
  var t, A, T, N;
  let {
    transitionState: I,
    onClose: D
  } = e, B = r.useRef(null), R = r.useRef(null), [M, V] = r.useState(""), [z, H] = r.useState(""), [W, Y] = r.useState(), [K, q] = r.useState(""), [U, F] = r.useState([]), [G, Z] = r.useState(), [J, X] = r.useState(), [Q, $] = r.useState(false), [ee, et] = r.useState(""), [en, ei] = r.useState(function(e) {
    switch (e) {
      case "windows":
        return "Windows";
      case "macos":
        return "Mac OS X";
      case "linux":
        return "Linux"
    }
    return ""
  }((0, O.getOS)())), [er, el] = r.useState(""), [ea, eo] = r.useState(""), [es, eu] = r.useState(""), [ec, ed] = r.useState(""), [em, ev] = r.useState(false), [ep, eh] = r.useState(false), [ef, ex] = r.useState(false), [eg, eb] = r.useState(null);
  r.useEffect(() => {
    let e = Math.random().toString(16).slice(2);
    s.Bo.get({
      url: "".concat(location.protocol, "//").concat(location.host).concat("/assets/", "version.").concat(window.GLOBAL_ENV.RELEASE_CHANNEL, ".json"),
      query: {
        cache: e
      },
      rejectWithError: true
    }).then(e => {
      if (null != e.body && "5e0b9fd41d046bbff2ac0cdeb6efc0ccc191cce9" !== e.body.hash) {
        let e = new Date("1769200046684"),
          t = new Date,
          n = (0, w.Tf)(t, e);
        n.hours > 6 && eb(n.hours)
      }
    })
  }, []);
  let ej = (0, o.bG)([y.default], () => {
      let e = y.default.getCurrentUser();
      return (null == e ? true : e.isStaff()) || (null == e ? true : e.isStaffPersonal())
    }),
    ey = (0, o.bG)([p.A], () => {
      var e;
      return null == (e = p.A.getCurrentBuildOverride().overrides) ? true : e.discord_web
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
    if (ex(false), "" === M || "" === z || null == W) return void ev(true);
    let r = null == G || null == (t = G.features) ? true : t.find(e => (0, S.wY)(e) === J);
    eh(true), ev(false);
    let l = (0, k.B)(U.map(e => {
        let {
          item: t
        } = e;
        return t
      })),
      a = await (0, S.zC)({
        name: M,
        description: z,
        priority: W,
        feature: r,
        url: K,
        buildOverride: null != (e = null == ey ? true : ey.id) ? e : null,
        experimentOverrides: eO
      }, true === Q ? {
        overridePlatformInformation: Q,
        device: ee,
        operatingSystem: en,
        operatingSystemVersion: er,
        clientVersion: ea,
        clientBuildNumber: es,
        locale: ec
      } : {
        overridePlatformInformation: Q
      }, l).catch(() => ex(true));
    eh(false), null != a && a.ok ? (ej && window.open(a.body.permalink_url, "_blank"), D(), (0, d.mMO)(async () => {
      let {
        default: e
      } = await n.e("71256").then(n.bind(n, 369323));
      return t => {
        var n, r;
        return (0, i.jsx)(e, (n = P({}, t), r = r = {
          asanaTask: a.body
        }, Object.getOwnPropertyDescriptors ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(r)) : (function(e, t) {
          var n = Object.keys(e);
          if (Object.getOwnPropertySymbols) {
            var i = Object.getOwnPropertySymbols(e);
            n.push.apply(n, i)
          }
          return n
        })(Object(r)).forEach(function(e) {
          Object.defineProperty(n, e, Object.getOwnPropertyDescriptor(r, e))
        }), n))
      }
    })) : ex(true)
  }
  return r.useEffect(() => {
    async function e() {
      Z(await (0, S.xt)())
    }
    ej && e()
  }, [ej]), r.useEffect(() => {
    if (U.length > 0) {
      var e;
      null == (e = R.current) || e.scrollIntoView({
        behavior: "smooth",
        block: "end"
      })
    }
  }, [U]), r.useEffect(() => {
    let e = e => {
      var t, n;
      let i = null == (t = e.clipboardData) ? true : t.files;
      if (null != i && i.length > 0) {
        let t = Array.from(i).filter(e => e.type.startsWith("image/"));
        if (t.length > 0) {
          e.preventDefault(), e.stopPropagation();
          let n = t.at(0);
          true !== n && F(e => e.some(e => {
            var t;
            return e.filename === n.name && (null == (t = e.item.file) ? true : t.size) === n.size
          }) ? e : [...e, new v.Ay({
            id: (0, l.A)(),
            file: n,
            platform: v.xz.WEB,
            origin: "clipboard"
          })])
        }
      }
      let r = document.activeElement;
      if (!((0, a.vq)(r, HTMLInputElement) || (0, a.vq)(r, HTMLTextAreaElement))) {
        let t = null == (n = e.clipboardData) ? true : n.getData("text");
        null != t && (e.preventDefault(), e.stopPropagation(), H(z.concat(t)))
      }
    };
    return document.addEventListener("paste", e, true), () => {
      document.removeEventListener("paste", e, true)
    }
  }, [z]), (0, i.jsx)(c.aFV, {
    size: "md",
    transitionState: I,
    "aria-label": E.intl.string(E.t.mCCdwi),
    title: E.intl.string(E.t["5LqopY"]),
    actions: [{
      variant: "secondary",
      text: E.intl.string(E.t["ETE/oC"]),
      onClick: D,
      autoFocus: false
    }, {
      variant: "primary",
      text: ej ? "Submit and Open Report" : "Submit Report",
      loading: ep,
      onClick: eS,
      autoFocus: false
    }],
    onClose: D,
    children: (0, i.jsxs)("div", {
      children: [(0, i.jsxs)(d.BJc, {
        gap: 8,
        children: [null != ey && (0, i.jsxs)(d.wx6, {
          type: "critical",
          children: [(0, i.jsx)(d.Heading, {
            variant: "heading-md/medium",
            children: E.intl.string(E.t["ZP/hEx"])
          }), (0, i.jsx)(d.Text, {
            variant: "text-sm/normal",
            children: E.intl.format(E.t["yY60+7"], {
              buildOverrideHook: () => (0, i.jsx)("b", {
                children: null == ey ? true : ey.id
              })
            })
          })]
        }), null == ey && null != eg && (0, i.jsxs)(d.wx6, {
          type: "critical",
          children: [(0, i.jsx)(d.Heading, {
            variant: "heading-md/medium",
            children: E.intl.formatToPlainString(E.t["ql2Q/e"], {
              hours: eg
            })
          }), (0, i.jsx)(d.Text, {
            variant: "text-sm/normal",
            children: E.intl.string(E.t.x18RUs)
          })]
        }), ej && Object.keys(eO).length > 0 && (0, i.jsxs)(d.wx6, {
          type: "critical",
          children: [(0, i.jsx)(d.Heading, {
            variant: "heading-md/medium",
            children: "You have the following experiments overridden:"
          }), (0, i.jsx)(d.Text, {
            variant: "text-sm/normal",
            children: eO.map(e => (0, i.jsxs)("div", {
              children: [e.experimentId, " (variant ", e.variantId, ")"]
            }, e.experimentId))
          })]
        })]
      }), (0, i.jsxs)(d.BJc, {
        gap: 24,
        padding: {
          top: 8,
          bottom: 8
        },
        children: [(0, i.jsx)(d.ksK, {
          label: E.intl.string(E.t.OZRgjw),
          error: em && "" === M ? E.intl.string(E.t.EkokLy) : null,
          placeholder: "Something is broken on this screen.",
          type: "text",
          value: M,
          maxLength: 100,
          onChange: V,
          autoFocus: true
        }), (0, i.jsx)(d.fs1, {
          label: E.intl.string(E.t["1SplH2"]),
          error: em && "" === z ? E.intl.string(E.t.EkokLy) : null,
          placeholder: "What did you expect to see?",
          value: z,
          onChange: H,
          description: ej ? "You can add additional information/media on the ticket after submitting" : true
        }), (0, i.jsx)(u.Te, {
          label: E.intl.string(E.t.xMXLda),
          errorMessage: em && true === W ? E.intl.string(E.t.EkokLy) : null,
          renderOptionLabel: e => {
            let t;
            return t = e.priority, (0, i.jsxs)("div", {
              className: C.jS,
              children: [(0, i.jsxs)("div", {
                className: C.Kt,
                children: [(0, i.jsx)("img", {
                  alt: "",
                  className: C.YN,
                  src: (0, _._O)({
                    id: t.emoji,
                    animated: true,
                    size: 48
                  })
                }), (0, i.jsx)(d.Text, {
                  color: "text-strong",
                  variant: "text-sm/semibold",
                  className: C.n8,
                  children: t.title
                })]
              }), (0, i.jsx)(d.Text, {
                color: "text-default",
                variant: "text-xs/normal",
                className: C.dP,
                children: t.description
              })]
            })
          },
          onChange: Y,
          options: (0, S.lx)().map(e => ({
            priority: e,
            value: e.value,
            label: e.title
          })),
          optionClassName: C.sI,
          value: W,
          maxVisibleItems: 4,
          closeOnSelect: true,
          "data-migration-pending": true
        }), ej && (0, i.jsx)(d.ZiE, {
          selectionMode: "single",
          label: E.intl.string(E.t["77VVd8"]),
          value: J,
          options: null != (t = null == G || null == (N = G.features) || null == (T = N.filter(e => "" !== (0, S.wY)(e))) || null == (A = T.map(e => {
            var t;
            return {
              id: (0, S.wY)(e),
              label: null != (t = e.name) ? t : "",
              value: (0, S.wY)(e)
            }
          })) ? true : A.sort((e, t) => e.label.localeCompare(t.label))) ? t : [],
          disabled: null == G,
          onSelectionChange: e => X(e)
        }), (0, i.jsx)(d.ksK, {
          label: E.intl.string(E.t["7p5pqh"]),
          placeholder: E.intl.string(E.t.HewMzo),
          type: "text",
          value: K,
          maxLength: 5e3,
          onChange: q
        }), (0, i.jsx)(d.Checkbox, {
          checked: Q,
          onChange: e => $(e),
          label: E.intl.string(E.t.ayhqiH)
        }), Q ? (0, i.jsxs)(i.Fragment, {
          children: [(0, i.jsx)(d.ksK, {
            label: E.intl.string(E.t.rrI4Tk),
            placeholder: "Device",
            value: ee,
            onChange: e => et(e)
          }), (0, i.jsx)(d.l6P, {
            label: E.intl.string(E.t.kcHxi6),
            value: en,
            options: L,
            onSelectionChange: ei,
            selectionMode: "single",
            fullWidth: true
          }), (0, i.jsx)(d.ksK, {
            label: E.intl.string(E.t.rEtxdg),
            placeholder: "Operating System Version",
            value: er,
            onChange: e => el(e)
          }), (0, i.jsx)(d.ksK, {
            label: E.intl.string(E.t["wy1M/t"]),
            placeholder: "Client Version",
            value: ea,
            onChange: e => eo(e)
          }), (0, i.jsx)(d.ksK, {
            label: E.intl.string(E.t.f7kbVu),
            placeholder: "Client Build Number",
            value: es,
            onChange: e => eu(e)
          }), (0, i.jsx)(d.ksK, {
            label: E.intl.string(E.t["4Z5+zg"]),
            placeholder: "Locale",
            value: ec,
            onChange: e => ed(e)
          })]
        }) : null, (0, i.jsx)(d.Button, {
          variant: "secondary",
          text: E.intl.string(E.t.HVxmOD),
          onClick: () => {
            var e;
            null == (e = B.current) || e.activateUploadDialogue()
          },
          fullWidth: true
        }), (0, i.jsx)("div", {
          className: C.Fg,
          children: (0, i.jsx)(m.A, {
            ref: B,
            onChange: e => {
              var t, n;
              (null == (n = e.currentTarget) || null == (t = n.files) ? true : t[0]) != null && F([...U, ...Array.from(e.currentTarget.files).map(e => new v.Ay({
                id: (0, l.A)(),
                file: e,
                platform: v.xz.WEB,
                origin: "file_picker"
              }))])
            },
            multiple: true
          })
        }), U.length > 0 ? (0, i.jsx)(d.D0$, {
          label: "Preview",
          children: (0, i.jsx)("div", {
            ref: R,
            className: C.ZO,
            children: U.length > 0 && U.map(e => (0, i.jsxs)("div", {
              className: C.oh,
              children: [(0, i.jsxs)("div", {
                children: [(0, i.jsx)(x.J, {
                  size: f.L.SMALL,
                  upload: e
                }), (0, i.jsx)("div", {
                  className: C.eA,
                  children: (0, i.jsx)(g.Ay, {
                    children: (0, i.jsx)(h.A, {
                      tooltip: E.intl.string(E.t.vN7REz),
                      onClick: () => {
                        var t;
                        return t = e.id, void F(U.filter(e => e.id !== t))
                      },
                      dangerous: true,
                      children: (0, i.jsx)(d.ucK, {
                        size: "md",
                        color: "currentColor"
                      })
                    })
                  })
                })]
              }), (0, i.jsx)(d.Text, {
                variant: "text-xxs/medium",
                color: "text-subtle",
                children: e.filename
              })]
            }, e.id))
          })
        }) : null, ef ? (0, i.jsx)(d.Text, {
          color: "text-feedback-critical",
          variant: "text-sm/normal",
          children: "Something went wrong, try again!"
        }) : null]
      })]
    })
  })
}