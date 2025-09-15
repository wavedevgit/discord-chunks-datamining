/** Chunk was on 83051 **/
/** chunk id: 115072, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  default: () => w
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
  Chunk594174 = require("./594174.js"),
  Chunk768581 = require("./768581.js"),
  Chunk55935 = require("./55935.js"),
  Chunk358085 = require("./358085.js"),
  Chunk223356 = require("./223356.js"),
  Chunk225452 = require("./225452.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk176059 = require("./176059.js");
let P = ["Android", "iOS", "Windows Mobile", "Windows", "Linux", "Mac OS X"].map(e => ({
  label: e,
  value: e
}));

function w(e) {
  var t, w, C, E;
  let {
    transitionState: k,
    onClose: D
  } = e, T = i.useRef(null), N = i.useRef(null), [A, L] = i.useState(""), [R, I] = i.useState(""), [W, Z] = i.useState(), [q, z] = i.useState(""), [M, B] = i.useState([]), [V, G] = i.useState(), [H, U] = i.useState(), [X, J] = i.useState(false), [Y, K] = i.useState(""), [F, Q] = i.useState(function(e) {
    switch (e) {
      case "windows":
        return "Windows";
      case "macos":
        return "Mac OS X";
      case "linux":
        return "Linux"
    }
    return ""
  }((0, b.getOS)())), [$, ee] = i.useState(""), [et, en] = i.useState(""), [er, ei] = i.useState(""), [el, ea] = i.useState(""), [eo, es] = i.useState(false), [eu, ec] = i.useState(false), [ed, em] = i.useState(false), [ep, ef] = i.useState(null);
  i.useEffect(() => {
    let e = Math.random().toString(16).slice(2);
    o.tn.get({
      url: "".concat(location.protocol, "//").concat(location.host).concat("/assets/", "version.").concat(window.GLOBAL_ENV.RELEASE_CHANNEL, ".json"),
      query: {
        cache: e
      },
      rejectWithError: true
    }).then(e => {
      if (null != e.body && "0962ab5eb99a051568f79c08b522ebb57d020271" !== e.body.hash) {
        let e = new Date("1757974829099"),
          t = new Date,
          n = (0, y.TD)(t, e);
        n.hours > 6 && ef(n.hours)
      }
    })
  }, []);
  let eh = (0, a.e7)([x.default], () => {
      let e = x.default.getCurrentUser();
      return (null == e ? true : e.isStaff()) || (null == e ? true : e.isStaffPersonal())
    }),
    ev = (0, a.e7)([m.C], () => {
      var e;
      return null == (e = m.C.getCurrentBuildOverride().overrides) ? true : e.discord_web
    }),
    ex = () => {
      null == D || D()
    };
  async function eg() {
    var e, t;
    if (em(false), "" === A || "" === R || null == W) return void es(true);
    let i = null == V || null == (e = V.features) ? true : e.find(e => (0, j.pD)(e) === H);
    ec(true), es(false);
    let l = (0, O.D)(M.map(e => {
        let {
          item: t
        } = e;
        return t
      })),
      a = await (0, j.ZD)({
        name: A,
        description: R,
        priority: W,
        feature: i,
        url: q,
        buildOverride: null != (t = null == ev ? true : ev.id) ? t : null
      }, true === X ? {
        overridePlatformInformation: X,
        device: Y,
        operatingSystem: F,
        operatingSystemVersion: $,
        clientVersion: et,
        clientBuildNumber: er,
        locale: el
      } : {
        overridePlatformInformation: X
      }, l).catch(() => em(true));
    ec(false), null != a && a.ok ? (eh && window.open(a.body.permalink_url, "_blank"), ex(), (0, u.ZDy)(async () => {
      let {
        default: e
      } = await n.e("64648").then(n.bind(n, 81155));
      return t => {
        var n, i;
        return (0, r.jsx)(e, (n = function(e) {
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
        }({}, t), i = i = {
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
    })) : em(true)
  }
  i.useEffect(() => {
    async function e() {
      G(await (0, j.WG)())
    }
    eh && e()
  }, [eh]), i.useEffect(() => {
    if (M.length > 0) {
      var e;
      null == (e = N.current) || e.scrollIntoView({
        behavior: "smooth",
        block: "end"
      })
    }
  }, [M]);
  let ey = i.useCallback(e => {
    let t = Array.from(e.clipboardData.files).filter(e => e.type.startsWith("image/")).at(0);
    true === t || M.some(e => {
      var n;
      return e.filename === t.name && (null == (n = e.item.file) ? true : n.size) === t.size
    }) || B([...M, new d.ZP({
      id: (0, l.Z)(),
      file: t,
      platform: d.ow.WEB,
      origin: "clipboard"
    })])
  }, [M]);
  return (0, r.jsxs)(u.Y0X, {
    transitionState: k,
    "aria-label": _.intl.string(_.t.mCCdws),
    size: u.CgR.MEDIUM,
    parentComponent: "BugReporterModal",
    children: [(0, r.jsx)(u.xBx, {
      children: (0, r.jsx)(u.X6q, {
        variant: "heading-lg/semibold",
        children: (0, r.jsx)(u.H, {
          children: _.intl.string(_.t["5Lqopa"])
        })
      })
    }), (0, r.jsx)(u.hzk, {
      onPaste: ey,
      children: (0, r.jsxs)("form", {
        onSubmit: eg,
        children: [null != ev && (0, r.jsx)(u.ToO, {
          type: u.ToO.Types.DANGER,
          body: _.intl.format(_.t["yY60+/"], {
            buildOverrideHook: () => (0, r.jsx)("b", {
              children: null == ev ? true : ev.id
            })
          }),
          title: _.intl.string(_.t["ZP/hEx"])
        }), null == ev && null != ep && (0, r.jsx)(u.ToO, {
          type: u.ToO.Types.DANGER,
          title: _.intl.formatToPlainString(_.t["ql2Q/f"], {
            hours: ep
          }),
          body: _.intl.string(_.t.x18RUl)
        }), (0, r.jsxs)(u.Kqy, {
          gap: 24,
          padding: {
            top: 8,
            bottom: 8
          },
          children: [(0, r.jsx)(u.oil, {
            label: _.intl.string(_.t.OZRgj4),
            error: eo && "" === A ? _.intl.string(_.t.EkokLy) : null,
            placeholder: "Something is broken on this screen.",
            type: "text",
            value: A,
            maxLength: 100,
            onChange: L
          }), (0, r.jsxs)(u.xJW, {
            error: eo && "" === R ? _.intl.string(_.t.EkokLy) : null,
            title: _.intl.string(_.t["1SplHx"]),
            children: [(0, r.jsx)(u.Kx8, {
              placeholder: "What did you expect to see?",
              value: R,
              onChange: I
            }), eh && (0, r.jsx)(u.R94, {
              type: u.geA.DESCRIPTION,
              children: "You can add additional information/media on the ticket after submitting"
            })]
          }), (0, r.jsx)(u.xJW, {
            error: eo && true === W ? _.intl.string(_.t.EkokLy) : null,
            title: _.intl.string(_.t.xMXLdX),
            children: (0, r.jsx)(u.q4e, {
              renderOptionLabel: e => (function(e) {
                let t = e.priority;
                return (0, r.jsxs)("div", {
                  className: S.formPriorityImageContainer,
                  children: [(0, r.jsxs)("div", {
                    className: S.formPriorityTitleContainer,
                    children: [(0, r.jsx)("img", {
                      alt: "",
                      className: S.formPriorityImage,
                      src: (0, g.gT)({
                        id: t.emoji,
                        animated: true,
                        size: 48
                      })
                    }), (0, r.jsx)(u.Text, {
                      color: "header-primary",
                      variant: "text-sm/semibold",
                      className: S.formPriorityTitle,
                      children: t.title
                    })]
                  }), (0, r.jsx)(u.Text, {
                    color: "header-secondary",
                    variant: "text-xs/normal",
                    className: S.formPriorityDescription,
                    children: t.description
                  })]
                })
              })(e),
              onChange: Z,
              options: (0, j.Tj)().map(e => ({
                priority: e,
                value: e.value,
                label: e.title
              })),
              optionClassName: S.formPriorityOption,
              value: W,
              maxVisibleItems: 4,
              closeOnSelect: true
            })
          }), eh && (0, r.jsx)(u.xJW, {
            title: _.intl.string(_.t["77VVd3"]),
            children: (0, r.jsx)(u.VcW, {
              value: H,
              options: null != (E = null == V || null == (C = V.features) || null == (w = C.filter(e => "" !== (0, j.pD)(e))) || null == (t = w.map(e => {
                var t;
                return {
                  label: null != (t = e.name) ? t : "",
                  value: (0, j.pD)(e)
                }
              })) ? true : t.sort((e, t) => e.label.localeCompare(t.label))) ? E : [],
              isDisabled: null == V,
              onChange: e => U(e)
            })
          }), (0, r.jsx)(u.oil, {
            label: _.intl.string(_.t["7p5pqq"]),
            placeholder: _.intl.string(_.t.HewMzs),
            type: "text",
            value: q,
            maxLength: 5e3,
            onChange: z
          }), (0, r.jsx)(u.xJW, {
            children: (0, r.jsx)(s.$q, {
              value: X,
              onChange: (e, t) => J(t),
              children: _.intl.string(_.t.ayhqiI)
            })
          }), X ? (0, r.jsxs)(r.Fragment, {
            children: [(0, r.jsx)(u.oil, {
              label: _.intl.string(_.t.rrI4Tk),
              placeholder: "Device",
              value: Y,
              onChange: e => K(e)
            }), (0, r.jsx)(u.xJW, {
              title: _.intl.string(_.t.kcHxi4),
              children: (0, r.jsx)(u.q4e, {
                value: F,
                options: P,
                onChange: e => Q(e)
              })
            }), (0, r.jsx)(u.oil, {
              label: _.intl.string(_.t.rEtxdn),
              placeholder: "Operating System Version",
              value: $,
              onChange: e => ee(e)
            }), (0, r.jsx)(u.oil, {
              label: _.intl.string(_.t["wy1M/v"]),
              placeholder: "Client Version",
              value: et,
              onChange: e => en(e)
            }), (0, r.jsx)(u.oil, {
              label: _.intl.string(_.t.f7kbVl),
              placeholder: "Client Build Number",
              value: er,
              onChange: e => ei(e)
            }), (0, r.jsx)(u.oil, {
              label: _.intl.string(_.t["4Z5+zs"]),
              placeholder: "Locale",
              value: el,
              onChange: e => ea(e)
            })]
          }) : null, (0, r.jsxs)(s.zx, {
            color: s.zx.Colors.PRIMARY,
            children: [_.intl.string(_.t.HVxmOD), (0, r.jsx)(c.Z, {
              ref: T,
              onChange: e => {
                var t, n;
                (null == (n = e.currentTarget) || null == (t = n.files) ? true : t[0]) != null && B([...M, ...Array.from(e.currentTarget.files).map(e => new d.ZP({
                  id: (0, l.Z)(),
                  file: e,
                  platform: d.ow.WEB,
                  origin: "file_picker"
                }))])
              },
              multiple: true
            })]
          }), M.length > 0 ? (0, r.jsxs)(u.hjN, {
            children: [(0, r.jsx)(u.vwX, {
              children: "Preview"
            }), (0, r.jsx)("div", {
              ref: N,
              className: S.attachments,
              children: M.length > 0 && M.map(e => (0, r.jsxs)("div", {
                className: S.attachment,
                children: [(0, r.jsxs)("div", {
                  children: [(0, r.jsx)(h.r, {
                    size: f.q.SMALL,
                    upload: e
                  }), (0, r.jsx)("div", {
                    className: S.removeAttachment,
                    children: (0, r.jsx)(v.ZP, {
                      children: (0, r.jsx)(p.Z, {
                        tooltip: _.intl.string(_.t.vN7REx),
                        onClick: () => {
                          var t;
                          return t = e.id, void B(M.filter(e => e.id !== t))
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
          }) : null, ed ? (0, r.jsx)(u.Text, {
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
          text: eh ? "Submit and Open Report" : "Submit Report",
          loading: eu,
          onClick: eg
        }), (0, r.jsx)(u.zxk, {
          variant: "secondary",
          text: _.intl.string(_.t["ETE/oK"]),
          onClick: ex
        })]
      })
    })]
  })
}