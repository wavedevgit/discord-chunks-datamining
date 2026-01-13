/** Chunk was on 83051 **/
/** chunk id: 115072, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  default: () => T
}), require("./953529.js"), require("./642613.js"), require("./388685.js"), require("./784620.js"), require("./973216.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk772848 = require("./772848.js"),
  Chunk442837 = require("./442837.js"),
  Chunk544891 = require("./544891.js"),
  Chunk668339 = require("./668339.jsx"),
  Chunk199849 = require("./199849.jsx"),
  Chunk159691 = require("./159691.js"),
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
  Chunk294698 = require("./294698.js");

function k(e) {
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
let D = ["Android", "iOS", "Windows Mobile", "Windows", "Linux", "Mac OS X"].map(e => ({
  label: e,
  value: e
}));

function T(e) {
  var t, T, L, I;
  let {
    transitionState: N,
    onClose: A
  } = e, M = r.useRef(null), R = r.useRef(null), [Z, W] = r.useState(""), [B, V] = r.useState(""), [H, q] = r.useState(), [z, G] = r.useState(""), [U, Y] = r.useState([]), [X, F] = r.useState(), [K, J] = r.useState(), [Q, $] = r.useState(false), [ee, et] = r.useState(""), [en, ei] = r.useState(function(e) {
    switch (e) {
      case "windows":
        return "Windows";
      case "macos":
        return "Mac OS X";
      case "linux":
        return "Linux"
    }
    return ""
  }((0, w.getOS)())), [er, ea] = r.useState(""), [el, eo] = r.useState(""), [es, eu] = r.useState(""), [ec, ed] = r.useState(""), [em, ef] = r.useState(false), [ep, ev] = r.useState(false), [eh, eg] = r.useState(false), [ex, eb] = r.useState(null);
  r.useEffect(() => {
    let e = Math.random().toString(16).slice(2);
    o.tn.get({
      url: "".concat(location.protocol, "//").concat(location.host).concat("/assets/", "version.").concat(window.GLOBAL_ENV.RELEASE_CHANNEL, ".json"),
      query: {
        cache: e
      },
      rejectWithError: true
    }).then(e => {
      if (null != e.body && "5e91cc3c79b9ea596312babb1d808daf43d1f51d" !== e.body.hash) {
        let e = new Date("1768261775969"),
          t = new Date,
          n = (0, S.TD)(t, e);
        n.hours > 6 && eb(n.hours)
      }
    })
  }, []);
  let ey = (0, l.e7)([j.default], () => {
      let e = j.default.getCurrentUser();
      return (null == e ? true : e.isStaff()) || (null == e ? true : e.isStaffPersonal())
    }),
    ej = (0, l.e7)([p.C], () => {
      var e;
      return null == (e = p.C.getCurrentBuildOverride().overrides) ? true : e.discord_web
    }),
    {
      overridesInfo: eO
    } = (0, y.sI)(),
    {
      overridesInfo: eS
    } = (0, b.Qb)(),
    ew = Object.entries(k({}, eO, eS)).map(e => {
      let [t, {
        variantId: n
      }] = e;
      return {
        experimentId: t,
        variantId: n
      }
    });
  async function eP() {
    var e, t;
    if (eg(false), "" === Z || "" === B || null == H) return void ef(true);
    let r = null == X || null == (e = X.features) ? true : e.find(e => (0, P.pD)(e) === K);
    ev(true), ef(false);
    let a = (0, _.D)(U.map(e => {
        let {
          item: t
        } = e;
        return t
      })),
      l = await (0, P.ZD)({
        name: Z,
        description: B,
        priority: H,
        feature: r,
        url: z,
        buildOverride: null != (t = null == ej ? true : ej.id) ? t : null,
        experimentOverrides: ew
      }, true === Q ? {
        overridePlatformInformation: Q,
        device: ee,
        operatingSystem: en,
        operatingSystemVersion: er,
        clientVersion: el,
        clientBuildNumber: es,
        locale: ec
      } : {
        overridePlatformInformation: Q
      }, a).catch(() => eg(true));
    ev(false), null != l && l.ok ? (ey && window.open(l.body.permalink_url, "_blank"), A(), (0, d.ZDy)(async () => {
      let {
        default: e
      } = await n.e("64648").then(n.bind(n, 81155));
      return t => {
        var n, r;
        return (0, i.jsx)(e, (n = k({}, t), r = r = {
          asanaTask: l.body
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
    })) : eg(true)
  }
  return r.useEffect(() => {
    async function e() {
      F(await (0, P.WG)())
    }
    ey && e()
  }, [ey]), r.useEffect(() => {
    if (U.length > 0) {
      var e;
      null == (e = R.current) || e.scrollIntoView({
        behavior: "smooth",
        block: "end"
      })
    }
  }, [U]), r.useEffect(() => {
    let e = e => {
      var t;
      let n = null == (t = e.clipboardData) ? true : t.files;
      if (null == n || 0 === n.length) return;
      let i = Array.from(n).filter(e => e.type.startsWith("image/"));
      if (0 === i.length) return;
      e.preventDefault(), e.stopPropagation();
      let r = i.at(0);
      true !== r && Y(e => e.some(e => {
        var t;
        return e.filename === r.name && (null == (t = e.item.file) ? true : t.size) === r.size
      }) ? e : [...e, new f.ZP({
        id: (0, a.Z)(),
        file: r,
        platform: f.ow.WEB,
        origin: "clipboard"
      })])
    };
    return document.addEventListener("paste", e, true), () => {
      document.removeEventListener("paste", e, true)
    }
  }, []), (0, i.jsx)(c.u_l, {
    size: "md",
    transitionState: N,
    "aria-label": C.intl.string(C.t.mCCdwi),
    title: C.intl.string(C.t["5LqopY"]),
    actions: [{
      variant: "secondary",
      text: C.intl.string(C.t["ETE/oC"]),
      onClick: A,
      autoFocus: false
    }, {
      variant: "primary",
      text: ey ? "Submit and Open Report" : "Submit Report",
      loading: ep,
      onClick: eP,
      autoFocus: false
    }],
    onClose: A,
    children: (0, i.jsxs)("div", {
      children: [(0, i.jsxs)(d.Kqy, {
        gap: 8,
        children: [null != ej && (0, i.jsxs)(d.M14, {
          type: "critical",
          children: [(0, i.jsx)(d.Heading, {
            variant: "heading-md/medium",
            children: C.intl.string(C.t["ZP/hEx"])
          }), (0, i.jsx)(d.Text, {
            variant: "text-sm/normal",
            children: C.intl.format(C.t["yY60+7"], {
              buildOverrideHook: () => (0, i.jsx)("b", {
                children: null == ej ? true : ej.id
              })
            })
          })]
        }), null == ej && null != ex && (0, i.jsxs)(d.M14, {
          type: "critical",
          children: [(0, i.jsx)(d.Heading, {
            variant: "heading-md/medium",
            children: C.intl.formatToPlainString(C.t["ql2Q/e"], {
              hours: ex
            })
          }), (0, i.jsx)(d.Text, {
            variant: "text-sm/normal",
            children: C.intl.string(C.t.x18RUs)
          })]
        }), ey && Object.keys(ew).length > 0 && (0, i.jsxs)(d.M14, {
          type: "critical",
          children: [(0, i.jsx)(d.Heading, {
            variant: "heading-md/medium",
            children: "You have the following experiments overridden:"
          }), (0, i.jsx)(d.Text, {
            variant: "text-sm/normal",
            children: ew.map(e => (0, i.jsxs)("div", {
              children: [e.experimentId, " (variant ", e.variantId, ")"]
            }, e.experimentId))
          })]
        })]
      }), (0, i.jsxs)(d.Kqy, {
        gap: 24,
        padding: {
          top: 8,
          bottom: 8
        },
        children: [(0, i.jsx)(d.oil, {
          label: C.intl.string(C.t.OZRgjw),
          error: em && "" === Z ? C.intl.string(C.t.EkokLy) : null,
          placeholder: "Something is broken on this screen.",
          type: "text",
          value: Z,
          maxLength: 100,
          onChange: W,
          autoFocus: true
        }), (0, i.jsx)(d.Kx8, {
          label: C.intl.string(C.t["1SplH2"]),
          error: em && "" === B ? C.intl.string(C.t.EkokLy) : null,
          placeholder: "What did you expect to see?",
          value: B,
          onChange: V,
          description: ey ? "You can add additional information/media on the ticket after submitting" : true
        }), (0, i.jsx)(u.y6, {
          label: C.intl.string(C.t.xMXLda),
          errorMessage: em && true === H ? C.intl.string(C.t.EkokLy) : null,
          renderOptionLabel: e => (function(e) {
            let t = e.priority;
            return (0, i.jsxs)("div", {
              className: E.formPriorityImageContainer,
              children: [(0, i.jsxs)("div", {
                className: E.formPriorityTitleContainer,
                children: [(0, i.jsx)("img", {
                  alt: "",
                  className: E.formPriorityImage,
                  src: (0, O.gT)({
                    id: t.emoji,
                    animated: true,
                    size: 48
                  })
                }), (0, i.jsx)(d.Text, {
                  color: "text-strong",
                  variant: "text-sm/semibold",
                  className: E.formPriorityTitle,
                  children: t.title
                })]
              }), (0, i.jsx)(d.Text, {
                color: "text-default",
                variant: "text-xs/normal",
                className: E.formPriorityDescription,
                children: t.description
              })]
            })
          })(e),
          onChange: q,
          options: (0, P.Tj)().map(e => ({
            priority: e,
            value: e.value,
            label: e.title
          })),
          optionClassName: E.formPriorityOption,
          value: H,
          maxVisibleItems: 4,
          closeOnSelect: true
        }), ey && (0, i.jsx)(s.d, {
          label: C.intl.string(C.t["77VVd8"]),
          value: K,
          options: null != (I = null == X || null == (L = X.features) || null == (T = L.filter(e => "" !== (0, P.pD)(e))) || null == (t = T.map(e => {
            var t;
            return {
              label: null != (t = e.name) ? t : "",
              value: (0, P.pD)(e)
            }
          })) ? true : t.sort((e, t) => e.label.localeCompare(t.label))) ? I : [],
          isDisabled: null == X,
          onChange: e => J(e)
        }), (0, i.jsx)(d.oil, {
          label: C.intl.string(C.t["7p5pqh"]),
          placeholder: C.intl.string(C.t.HewMzo),
          type: "text",
          value: z,
          maxLength: 5e3,
          onChange: G
        }), (0, i.jsx)(d.Checkbox, {
          checked: Q,
          onChange: e => $(e),
          label: C.intl.string(C.t.ayhqiH)
        }), Q ? (0, i.jsxs)(i.Fragment, {
          children: [(0, i.jsx)(d.oil, {
            label: C.intl.string(C.t.rrI4Tk),
            placeholder: "Device",
            value: ee,
            onChange: e => et(e)
          }), (0, i.jsx)(u.y6, {
            label: C.intl.string(C.t.kcHxi6),
            value: en,
            options: D,
            onChange: e => ei(e)
          }), (0, i.jsx)(d.oil, {
            label: C.intl.string(C.t.rEtxdg),
            placeholder: "Operating System Version",
            value: er,
            onChange: e => ea(e)
          }), (0, i.jsx)(d.oil, {
            label: C.intl.string(C.t["wy1M/t"]),
            placeholder: "Client Version",
            value: el,
            onChange: e => eo(e)
          }), (0, i.jsx)(d.oil, {
            label: C.intl.string(C.t.f7kbVu),
            placeholder: "Client Build Number",
            value: es,
            onChange: e => eu(e)
          }), (0, i.jsx)(d.oil, {
            label: C.intl.string(C.t["4Z5+zg"]),
            placeholder: "Locale",
            value: ec,
            onChange: e => ed(e)
          })]
        }) : null, (0, i.jsx)(d.Button, {
          variant: "secondary",
          text: C.intl.string(C.t.HVxmOD),
          onClick: () => {
            var e;
            null == (e = M.current) || e.activateUploadDialogue()
          },
          fullWidth: true
        }), (0, i.jsx)("div", {
          className: E.fileInput,
          children: (0, i.jsx)(m.Z, {
            ref: M,
            onChange: e => {
              var t, n;
              (null == (n = e.currentTarget) || null == (t = n.files) ? true : t[0]) != null && Y([...U, ...Array.from(e.currentTarget.files).map(e => new f.ZP({
                id: (0, a.Z)(),
                file: e,
                platform: f.ow.WEB,
                origin: "file_picker"
              }))])
            },
            multiple: true
          })
        }), U.length > 0 ? (0, i.jsx)(d.gNt, {
          label: "Preview",
          children: (0, i.jsx)("div", {
            ref: R,
            className: E.attachments,
            children: U.length > 0 && U.map(e => (0, i.jsxs)("div", {
              className: E.attachment,
              children: [(0, i.jsxs)("div", {
                children: [(0, i.jsx)(g.r, {
                  size: h.q.SMALL,
                  upload: e
                }), (0, i.jsx)("div", {
                  className: E.removeAttachment,
                  children: (0, i.jsx)(x.ZP, {
                    children: (0, i.jsx)(v.Z, {
                      tooltip: C.intl.string(C.t.vN7REz),
                      onClick: () => {
                        var t;
                        return t = e.id, void Y(U.filter(e => e.id !== t))
                      },
                      dangerous: true,
                      children: (0, i.jsx)(d.XHJ, {
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
        }) : null, eh ? (0, i.jsx)(d.Text, {
          color: "text-feedback-critical",
          variant: "text-sm/normal",
          children: "Something went wrong, try again!"
        }) : null]
      })]
    })
  })
}