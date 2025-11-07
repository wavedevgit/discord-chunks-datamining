/** Chunk was on 83051 **/
/** chunk id: 115072, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  default: () => E
}), require("./953529.js"), require("./642613.js"), require("./388685.js"), require("./784620.js"), require("./973216.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk772848 = require("./772848.js"),
  Chunk442837 = require("./442837.js"),
  Chunk544891 = require("./544891.js"),
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
  Chunk176059 = require("./176059.js");

function C(e) {
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
let k = ["Android", "iOS", "Windows Mobile", "Windows", "Linux", "Mac OS X"].map(e => ({
  label: e,
  value: e
}));

function E(e) {
  var t, E, D, T;
  let {
    transitionState: I,
    onClose: L
  } = e, N = r.useRef(null), A = r.useRef(null), [M, R] = r.useState(""), [W, Z] = r.useState(""), [V, B] = r.useState(), [H, q] = r.useState(""), [z, G] = r.useState([]), [U, Y] = r.useState(), [X, F] = r.useState(), [K, J] = r.useState(false), [Q, $] = r.useState(""), [ee, et] = r.useState(function(e) {
    switch (e) {
      case "windows":
        return "Windows";
      case "macos":
        return "Mac OS X";
      case "linux":
        return "Linux"
    }
    return ""
  }((0, _.getOS)())), [en, ei] = r.useState(""), [er, ea] = r.useState(""), [el, eo] = r.useState(""), [es, eu] = r.useState(""), [ec, ed] = r.useState(false), [em, ep] = r.useState(false), [ev, ef] = r.useState(false), [eh, eg] = r.useState(null);
  r.useEffect(() => {
    let e = Math.random().toString(16).slice(2);
    o.tn.get({
      url: "".concat(location.protocol, "//").concat(location.host).concat("/assets/", "version.").concat(window.GLOBAL_ENV.RELEASE_CHANNEL, ".json"),
      query: {
        cache: e
      },
      rejectWithError: true
    }).then(e => {
      if (null != e.body && "8c55567786a3de2aebe8f73ae4ff78059b3a0091" !== e.body.hash) {
        let e = new Date("1762528219698"),
          t = new Date,
          n = (0, j.TD)(t, e);
        n.hours > 6 && eg(n.hours)
      }
    })
  }, []);
  let ex = (0, l.e7)([b.default], () => {
      let e = b.default.getCurrentUser();
      return (null == e ? true : e.isStaff()) || (null == e ? true : e.isStaffPersonal())
    }),
    eb = (0, l.e7)([m.C], () => {
      var e;
      return null == (e = m.C.getCurrentBuildOverride().overrides) ? true : e.discord_web
    }),
    {
      overridesInfo: ey
    } = (0, x.sI)(),
    {
      overridesInfo: ej
    } = (0, g.Qb)(),
    e_ = Object.entries(C({}, ey, ej)).map(e => {
      let [t, {
        variantId: n
      }] = e;
      return {
        experimentId: t,
        variantId: n
      }
    });
  async function eO() {
    var e, t;
    if (ef(false), "" === M || "" === W || null == V) return void ed(true);
    let r = null == U || null == (e = U.features) ? true : e.find(e => (0, O.pD)(e) === X);
    ep(true), ed(false);
    let a = (0, S.D)(z.map(e => {
        let {
          item: t
        } = e;
        return t
      })),
      l = await (0, O.ZD)({
        name: M,
        description: W,
        priority: V,
        feature: r,
        url: H,
        buildOverride: null != (t = null == eb ? true : eb.id) ? t : null,
        experimentOverrides: e_
      }, true === K ? {
        overridePlatformInformation: K,
        device: Q,
        operatingSystem: ee,
        operatingSystemVersion: en,
        clientVersion: er,
        clientBuildNumber: el,
        locale: es
      } : {
        overridePlatformInformation: K
      }, a).catch(() => ef(true));
    ep(false), null != l && l.ok ? (ex && window.open(l.body.permalink_url, "_blank"), L(), (0, u.ZDy)(async () => {
      let {
        default: e
      } = await n.e("64648").then(n.bind(n, 81155));
      return t => {
        var n, r;
        return (0, i.jsx)(e, (n = C({}, t), r = r = {
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
    })) : ef(true)
  }
  r.useEffect(() => {
    async function e() {
      Y(await (0, O.WG)())
    }
    ex && e()
  }, [ex]), r.useEffect(() => {
    if (z.length > 0) {
      var e;
      null == (e = A.current) || e.scrollIntoView({
        behavior: "smooth",
        block: "end"
      })
    }
  }, [z]);
  let eS = r.useCallback(e => {
    let t = Array.from(e.clipboardData.files).filter(e => e.type.startsWith("image/")).at(0);
    true === t || z.some(e => {
      var n;
      return e.filename === t.name && (null == (n = e.item.file) ? true : n.size) === t.size
    }) || G([...z, new d.ZP({
      id: (0, a.Z)(),
      file: t,
      platform: d.ow.WEB,
      origin: "clipboard"
    })])
  }, [z]);
  return (0, i.jsx)(s.u_l, {
    size: "md",
    transitionState: I,
    "aria-label": w.intl.string(w.t.mCCdwi),
    title: w.intl.string(w.t["5LqopY"]),
    actions: [{
      variant: "secondary",
      text: w.intl.string(w.t["ETE/oC"]),
      onClick: L,
      autoFocus: false
    }, {
      variant: "primary",
      text: ex ? "Submit and Open Report" : "Submit Report",
      loading: em,
      onClick: eO,
      autoFocus: false
    }],
    onClose: L,
    children: (0, i.jsxs)("div", {
      onPaste: eS,
      children: [(0, i.jsxs)(u.Kqy, {
        gap: 8,
        children: [null != eb && (0, i.jsxs)(u.M14, {
          type: "critical",
          children: [(0, i.jsx)(u.Heading, {
            variant: "heading-md/medium",
            children: w.intl.string(w.t["ZP/hEx"])
          }), (0, i.jsx)(u.Text, {
            variant: "text-sm/normal",
            children: w.intl.format(w.t["yY60+7"], {
              buildOverrideHook: () => (0, i.jsx)("b", {
                children: null == eb ? true : eb.id
              })
            })
          })]
        }), null == eb && null != eh && (0, i.jsxs)(u.M14, {
          type: "critical",
          children: [(0, i.jsx)(u.Heading, {
            variant: "heading-md/medium",
            children: w.intl.formatToPlainString(w.t["ql2Q/e"], {
              hours: eh
            })
          }), (0, i.jsx)(u.Text, {
            variant: "text-sm/normal",
            children: w.intl.string(w.t.x18RUs)
          })]
        }), ex && Object.keys(e_).length > 0 && (0, i.jsxs)(u.M14, {
          type: "critical",
          children: [(0, i.jsx)(u.Heading, {
            variant: "heading-md/medium",
            children: "You have the following experiments overridden:"
          }), (0, i.jsx)(u.Text, {
            variant: "text-sm/normal",
            children: e_.map(e => (0, i.jsxs)("div", {
              children: [e.experimentId, " (variant ", e.variantId, ")"]
            }, e.experimentId))
          })]
        })]
      }), (0, i.jsxs)(u.Kqy, {
        gap: 24,
        padding: {
          top: 8,
          bottom: 8
        },
        children: [(0, i.jsx)(u.oil, {
          label: w.intl.string(w.t.OZRgjw),
          error: ec && "" === M ? w.intl.string(w.t.EkokLy) : null,
          placeholder: "Something is broken on this screen.",
          type: "text",
          value: M,
          maxLength: 100,
          onChange: R,
          autoFocus: true
        }), (0, i.jsx)(u.Kx8, {
          label: w.intl.string(w.t["1SplH2"]),
          error: ec && "" === W ? w.intl.string(w.t.EkokLy) : null,
          placeholder: "What did you expect to see?",
          value: W,
          onChange: Z,
          description: ex ? "You can add additional information/media on the ticket after submitting" : true
        }), (0, i.jsx)(u.q4e, {
          label: w.intl.string(w.t.xMXLda),
          errorMessage: ec && true === V ? w.intl.string(w.t.EkokLy) : null,
          renderOptionLabel: e => (function(e) {
            let t = e.priority;
            return (0, i.jsxs)("div", {
              className: P.formPriorityImageContainer,
              children: [(0, i.jsxs)("div", {
                className: P.formPriorityTitleContainer,
                children: [(0, i.jsx)("img", {
                  alt: "",
                  className: P.formPriorityImage,
                  src: (0, y.gT)({
                    id: t.emoji,
                    animated: true,
                    size: 48
                  })
                }), (0, i.jsx)(u.Text, {
                  color: "header-primary",
                  variant: "text-sm/semibold",
                  className: P.formPriorityTitle,
                  children: t.title
                })]
              }), (0, i.jsx)(u.Text, {
                color: "header-secondary",
                variant: "text-xs/normal",
                className: P.formPriorityDescription,
                children: t.description
              })]
            })
          })(e),
          onChange: B,
          options: (0, O.Tj)().map(e => ({
            priority: e,
            value: e.value,
            label: e.title
          })),
          optionClassName: P.formPriorityOption,
          value: V,
          maxVisibleItems: 4,
          closeOnSelect: true
        }), ex && (0, i.jsx)(u.VcW, {
          label: w.intl.string(w.t["77VVd8"]),
          value: X,
          options: null != (T = null == U || null == (D = U.features) || null == (E = D.filter(e => "" !== (0, O.pD)(e))) || null == (t = E.map(e => {
            var t;
            return {
              label: null != (t = e.name) ? t : "",
              value: (0, O.pD)(e)
            }
          })) ? true : t.sort((e, t) => e.label.localeCompare(t.label))) ? T : [],
          isDisabled: null == U,
          onChange: e => F(e)
        }), (0, i.jsx)(u.oil, {
          label: w.intl.string(w.t["7p5pqh"]),
          placeholder: w.intl.string(w.t.HewMzo),
          type: "text",
          value: H,
          maxLength: 5e3,
          onChange: q
        }), (0, i.jsx)(u.Checkbox, {
          checked: K,
          onChange: e => J(e),
          label: w.intl.string(w.t.ayhqiH)
        }), K ? (0, i.jsxs)(i.Fragment, {
          children: [(0, i.jsx)(u.oil, {
            label: w.intl.string(w.t.rrI4Tk),
            placeholder: "Device",
            value: Q,
            onChange: e => $(e)
          }), (0, i.jsx)(u.q4e, {
            label: w.intl.string(w.t.kcHxi6),
            value: ee,
            options: k,
            onChange: e => et(e)
          }), (0, i.jsx)(u.oil, {
            label: w.intl.string(w.t.rEtxdg),
            placeholder: "Operating System Version",
            value: en,
            onChange: e => ei(e)
          }), (0, i.jsx)(u.oil, {
            label: w.intl.string(w.t["wy1M/t"]),
            placeholder: "Client Version",
            value: er,
            onChange: e => ea(e)
          }), (0, i.jsx)(u.oil, {
            label: w.intl.string(w.t.f7kbVu),
            placeholder: "Client Build Number",
            value: el,
            onChange: e => eo(e)
          }), (0, i.jsx)(u.oil, {
            label: w.intl.string(w.t["4Z5+zg"]),
            placeholder: "Locale",
            value: es,
            onChange: e => eu(e)
          })]
        }) : null, (0, i.jsx)(u.Button, {
          variant: "secondary",
          text: w.intl.string(w.t.HVxmOD),
          onClick: () => {
            var e;
            null == (e = N.current) || e.activateUploadDialogue()
          },
          fullWidth: true
        }), (0, i.jsx)("div", {
          className: P.fileInput,
          children: (0, i.jsx)(c.Z, {
            ref: N,
            onChange: e => {
              var t, n;
              (null == (n = e.currentTarget) || null == (t = n.files) ? true : t[0]) != null && G([...z, ...Array.from(e.currentTarget.files).map(e => new d.ZP({
                id: (0, a.Z)(),
                file: e,
                platform: d.ow.WEB,
                origin: "file_picker"
              }))])
            },
            multiple: true
          })
        }), z.length > 0 ? (0, i.jsx)(u.gNt, {
          label: "Preview",
          children: (0, i.jsx)("div", {
            ref: A,
            className: P.attachments,
            children: z.length > 0 && z.map(e => (0, i.jsxs)("div", {
              className: P.attachment,
              children: [(0, i.jsxs)("div", {
                children: [(0, i.jsx)(f.r, {
                  size: v.q.SMALL,
                  upload: e
                }), (0, i.jsx)("div", {
                  className: P.removeAttachment,
                  children: (0, i.jsx)(h.ZP, {
                    children: (0, i.jsx)(p.Z, {
                      tooltip: w.intl.string(w.t.vN7REz),
                      onClick: () => {
                        var t;
                        return t = e.id, void G(z.filter(e => e.id !== t))
                      },
                      dangerous: true,
                      children: (0, i.jsx)(u.XHJ, {
                        size: "md",
                        color: "currentColor"
                      })
                    })
                  })
                })]
              }), (0, i.jsx)(u.Text, {
                variant: "text-xxs/medium",
                color: "text-secondary",
                children: e.filename
              })]
            }, e.id))
          })
        }) : null, ev ? (0, i.jsx)(u.Text, {
          color: "text-danger",
          variant: "text-sm/normal",
          children: "Something went wrong, try again!"
        }) : null]
      })]
    })
  })
}