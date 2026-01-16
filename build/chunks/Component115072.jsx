/** Chunk was on 83051 **/
/** chunk id: 115072, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  default: () => L
}), require("./953529.js"), require("./642613.js"), require("./388685.js"), require("./784620.js"), require("./973216.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk772848 = require("./772848.js"),
  Chunk374470 = require("./374470.js"),
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

function D(e) {
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
let T = ["Android", "iOS", "Windows Mobile", "Windows", "Linux", "Mac OS X"].map(e => ({
  label: e,
  value: e
}));

function L(e) {
  var t, L, I, N;
  let {
    transitionState: A,
    onClose: M
  } = e, R = r.useRef(null), Z = r.useRef(null), [H, W] = r.useState(""), [B, V] = r.useState(""), [q, z] = r.useState(), [G, U] = r.useState(""), [Y, K] = r.useState([]), [X, F] = r.useState(), [J, Q] = r.useState(), [$, ee] = r.useState(false), [et, en] = r.useState(""), [ei, er] = r.useState(function(e) {
    switch (e) {
      case "windows":
        return "Windows";
      case "macos":
        return "Mac OS X";
      case "linux":
        return "Linux"
    }
    return ""
  }((0, P.getOS)())), [ea, el] = r.useState(""), [eo, es] = r.useState(""), [eu, ec] = r.useState(""), [ed, em] = r.useState(""), [ef, ep] = r.useState(false), [ev, eh] = r.useState(false), [eg, ex] = r.useState(false), [eb, ey] = r.useState(null);
  r.useEffect(() => {
    let e = Math.random().toString(16).slice(2);
    s.tn.get({
      url: "".concat(location.protocol, "//").concat(location.host).concat("/assets/", "version.").concat(window.GLOBAL_ENV.RELEASE_CHANNEL, ".json"),
      query: {
        cache: e
      },
      rejectWithError: true
    }).then(e => {
      if (null != e.body && "892f23f4a2e539b5cabccf4d3430db5816fced89" !== e.body.hash) {
        let e = new Date("1768529760447"),
          t = new Date,
          n = (0, w.TD)(t, e);
        n.hours > 6 && ey(n.hours)
      }
    })
  }, []);
  let ej = (0, o.e7)([O.default], () => {
      let e = O.default.getCurrentUser();
      return (null == e ? true : e.isStaff()) || (null == e ? true : e.isStaffPersonal())
    }),
    eO = (0, o.e7)([v.C], () => {
      var e;
      return null == (e = v.C.getCurrentBuildOverride().overrides) ? true : e.discord_web
    }),
    {
      overridesInfo: eS
    } = (0, j.sI)(),
    {
      overridesInfo: ew
    } = (0, y.Qb)(),
    eP = Object.entries(D({}, eS, ew)).map(e => {
      let [t, {
        variantId: n
      }] = e;
      return {
        experimentId: t,
        variantId: n
      }
    });
  async function e_() {
    var e, t;
    if (ex(false), "" === H || "" === B || null == q) return void ep(true);
    let r = null == X || null == (e = X.features) ? true : e.find(e => (0, _.pD)(e) === J);
    eh(true), ep(false);
    let a = (0, C.D)(Y.map(e => {
        let {
          item: t
        } = e;
        return t
      })),
      l = await (0, _.ZD)({
        name: H,
        description: B,
        priority: q,
        feature: r,
        url: G,
        buildOverride: null != (t = null == eO ? true : eO.id) ? t : null,
        experimentOverrides: eP
      }, true === $ ? {
        overridePlatformInformation: $,
        device: et,
        operatingSystem: ei,
        operatingSystemVersion: ea,
        clientVersion: eo,
        clientBuildNumber: eu,
        locale: ed
      } : {
        overridePlatformInformation: $
      }, a).catch(() => ex(true));
    eh(false), null != l && l.ok ? (ej && window.open(l.body.permalink_url, "_blank"), M(), (0, m.ZDy)(async () => {
      let {
        default: e
      } = await n.e("64648").then(n.bind(n, 81155));
      return t => {
        var n, r;
        return (0, i.jsx)(e, (n = D({}, t), r = r = {
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
    })) : ex(true)
  }
  return r.useEffect(() => {
    async function e() {
      F(await (0, _.WG)())
    }
    ej && e()
  }, [ej]), r.useEffect(() => {
    if (Y.length > 0) {
      var e;
      null == (e = Z.current) || e.scrollIntoView({
        behavior: "smooth",
        block: "end"
      })
    }
  }, [Y]), r.useEffect(() => {
    let e = e => {
      var t, n;
      let i = null == (t = e.clipboardData) ? true : t.files;
      if (null != i && i.length > 0) {
        let t = Array.from(i).filter(e => e.type.startsWith("image/"));
        if (t.length > 0) {
          e.preventDefault(), e.stopPropagation();
          let n = t.at(0);
          true !== n && K(e => e.some(e => {
            var t;
            return e.filename === n.name && (null == (t = e.item.file) ? true : t.size) === n.size
          }) ? e : [...e, new p.ZP({
            id: (0, a.Z)(),
            file: n,
            platform: p.ow.WEB,
            origin: "clipboard"
          })])
        }
      }
      let r = document.activeElement;
      if (!((0, l.kK)(r, HTMLInputElement) || (0, l.kK)(r, HTMLTextAreaElement))) {
        let t = null == (n = e.clipboardData) ? true : n.getData("text");
        null != t && (e.preventDefault(), e.stopPropagation(), V(B.concat(t)))
      }
    };
    return document.addEventListener("paste", e, true), () => {
      document.removeEventListener("paste", e, true)
    }
  }, [B]), (0, i.jsx)(d.u_l, {
    size: "md",
    transitionState: A,
    "aria-label": E.intl.string(E.t.mCCdwi),
    title: E.intl.string(E.t["5LqopY"]),
    actions: [{
      variant: "secondary",
      text: E.intl.string(E.t["ETE/oC"]),
      onClick: M,
      autoFocus: false
    }, {
      variant: "primary",
      text: ej ? "Submit and Open Report" : "Submit Report",
      loading: ev,
      onClick: e_,
      autoFocus: false
    }],
    onClose: M,
    children: (0, i.jsxs)("div", {
      children: [(0, i.jsxs)(m.Kqy, {
        gap: 8,
        children: [null != eO && (0, i.jsxs)(m.M14, {
          type: "critical",
          children: [(0, i.jsx)(m.Heading, {
            variant: "heading-md/medium",
            children: E.intl.string(E.t["ZP/hEx"])
          }), (0, i.jsx)(m.Text, {
            variant: "text-sm/normal",
            children: E.intl.format(E.t["yY60+7"], {
              buildOverrideHook: () => (0, i.jsx)("b", {
                children: null == eO ? true : eO.id
              })
            })
          })]
        }), null == eO && null != eb && (0, i.jsxs)(m.M14, {
          type: "critical",
          children: [(0, i.jsx)(m.Heading, {
            variant: "heading-md/medium",
            children: E.intl.formatToPlainString(E.t["ql2Q/e"], {
              hours: eb
            })
          }), (0, i.jsx)(m.Text, {
            variant: "text-sm/normal",
            children: E.intl.string(E.t.x18RUs)
          })]
        }), ej && Object.keys(eP).length > 0 && (0, i.jsxs)(m.M14, {
          type: "critical",
          children: [(0, i.jsx)(m.Heading, {
            variant: "heading-md/medium",
            children: "You have the following experiments overridden:"
          }), (0, i.jsx)(m.Text, {
            variant: "text-sm/normal",
            children: eP.map(e => (0, i.jsxs)("div", {
              children: [e.experimentId, " (variant ", e.variantId, ")"]
            }, e.experimentId))
          })]
        })]
      }), (0, i.jsxs)(m.Kqy, {
        gap: 24,
        padding: {
          top: 8,
          bottom: 8
        },
        children: [(0, i.jsx)(m.oil, {
          label: E.intl.string(E.t.OZRgjw),
          error: ef && "" === H ? E.intl.string(E.t.EkokLy) : null,
          placeholder: "Something is broken on this screen.",
          type: "text",
          value: H,
          maxLength: 100,
          onChange: W,
          autoFocus: true
        }), (0, i.jsx)(m.Kx8, {
          label: E.intl.string(E.t["1SplH2"]),
          error: ef && "" === B ? E.intl.string(E.t.EkokLy) : null,
          placeholder: "What did you expect to see?",
          value: B,
          onChange: V,
          description: ej ? "You can add additional information/media on the ticket after submitting" : true
        }), (0, i.jsx)(c.y6, {
          label: E.intl.string(E.t.xMXLda),
          errorMessage: ef && true === q ? E.intl.string(E.t.EkokLy) : null,
          renderOptionLabel: e => (function(e) {
            let t = e.priority;
            return (0, i.jsxs)("div", {
              className: k.formPriorityImageContainer,
              children: [(0, i.jsxs)("div", {
                className: k.formPriorityTitleContainer,
                children: [(0, i.jsx)("img", {
                  alt: "",
                  className: k.formPriorityImage,
                  src: (0, S.gT)({
                    id: t.emoji,
                    animated: true,
                    size: 48
                  })
                }), (0, i.jsx)(m.Text, {
                  color: "text-strong",
                  variant: "text-sm/semibold",
                  className: k.formPriorityTitle,
                  children: t.title
                })]
              }), (0, i.jsx)(m.Text, {
                color: "text-default",
                variant: "text-xs/normal",
                className: k.formPriorityDescription,
                children: t.description
              })]
            })
          })(e),
          onChange: z,
          options: (0, _.Tj)().map(e => ({
            priority: e,
            value: e.value,
            label: e.title
          })),
          optionClassName: k.formPriorityOption,
          value: q,
          maxVisibleItems: 4,
          closeOnSelect: true
        }), ej && (0, i.jsx)(u.d, {
          label: E.intl.string(E.t["77VVd8"]),
          value: J,
          options: null != (N = null == X || null == (I = X.features) || null == (L = I.filter(e => "" !== (0, _.pD)(e))) || null == (t = L.map(e => {
            var t;
            return {
              label: null != (t = e.name) ? t : "",
              value: (0, _.pD)(e)
            }
          })) ? true : t.sort((e, t) => e.label.localeCompare(t.label))) ? N : [],
          isDisabled: null == X,
          onChange: e => Q(e)
        }), (0, i.jsx)(m.oil, {
          label: E.intl.string(E.t["7p5pqh"]),
          placeholder: E.intl.string(E.t.HewMzo),
          type: "text",
          value: G,
          maxLength: 5e3,
          onChange: U
        }), (0, i.jsx)(m.Checkbox, {
          checked: $,
          onChange: e => ee(e),
          label: E.intl.string(E.t.ayhqiH)
        }), $ ? (0, i.jsxs)(i.Fragment, {
          children: [(0, i.jsx)(m.oil, {
            label: E.intl.string(E.t.rrI4Tk),
            placeholder: "Device",
            value: et,
            onChange: e => en(e)
          }), (0, i.jsx)(c.y6, {
            label: E.intl.string(E.t.kcHxi6),
            value: ei,
            options: T,
            onChange: e => er(e)
          }), (0, i.jsx)(m.oil, {
            label: E.intl.string(E.t.rEtxdg),
            placeholder: "Operating System Version",
            value: ea,
            onChange: e => el(e)
          }), (0, i.jsx)(m.oil, {
            label: E.intl.string(E.t["wy1M/t"]),
            placeholder: "Client Version",
            value: eo,
            onChange: e => es(e)
          }), (0, i.jsx)(m.oil, {
            label: E.intl.string(E.t.f7kbVu),
            placeholder: "Client Build Number",
            value: eu,
            onChange: e => ec(e)
          }), (0, i.jsx)(m.oil, {
            label: E.intl.string(E.t["4Z5+zg"]),
            placeholder: "Locale",
            value: ed,
            onChange: e => em(e)
          })]
        }) : null, (0, i.jsx)(m.Button, {
          variant: "secondary",
          text: E.intl.string(E.t.HVxmOD),
          onClick: () => {
            var e;
            null == (e = R.current) || e.activateUploadDialogue()
          },
          fullWidth: true
        }), (0, i.jsx)("div", {
          className: k.fileInput,
          children: (0, i.jsx)(f.Z, {
            ref: R,
            onChange: e => {
              var t, n;
              (null == (n = e.currentTarget) || null == (t = n.files) ? true : t[0]) != null && K([...Y, ...Array.from(e.currentTarget.files).map(e => new p.ZP({
                id: (0, a.Z)(),
                file: e,
                platform: p.ow.WEB,
                origin: "file_picker"
              }))])
            },
            multiple: true
          })
        }), Y.length > 0 ? (0, i.jsx)(m.gNt, {
          label: "Preview",
          children: (0, i.jsx)("div", {
            ref: Z,
            className: k.attachments,
            children: Y.length > 0 && Y.map(e => (0, i.jsxs)("div", {
              className: k.attachment,
              children: [(0, i.jsxs)("div", {
                children: [(0, i.jsx)(x.r, {
                  size: g.q.SMALL,
                  upload: e
                }), (0, i.jsx)("div", {
                  className: k.removeAttachment,
                  children: (0, i.jsx)(b.ZP, {
                    children: (0, i.jsx)(h.Z, {
                      tooltip: E.intl.string(E.t.vN7REz),
                      onClick: () => {
                        var t;
                        return t = e.id, void K(Y.filter(e => e.id !== t))
                      },
                      dangerous: true,
                      children: (0, i.jsx)(m.XHJ, {
                        size: "md",
                        color: "currentColor"
                      })
                    })
                  })
                })]
              }), (0, i.jsx)(m.Text, {
                variant: "text-xxs/medium",
                color: "text-subtle",
                children: e.filename
              })]
            }, e.id))
          })
        }) : null, eg ? (0, i.jsx)(m.Text, {
          color: "text-feedback-critical",
          variant: "text-sm/normal",
          children: "Something went wrong, try again!"
        }) : null]
      })]
    })
  })
}