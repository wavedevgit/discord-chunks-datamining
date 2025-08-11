/** Chunk was on 83051 **/
/** chunk id: 115072, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  default: () => P
}), require("./953529.js"), require("./642613.js"), require("./388685.js"), require("./784620.js"), require("./973216.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk772848 = require("./772848.js"),
  Chunk442837 = require("./442837.js"),
  Chunk544891 = require("./544891.js"),
  Chunk755721 = require("./755721.js"),
  Chunk481060 = require("./481060.js"),
  Chunk53281 = require("./53281.jsx"),
  Chunk476326 = require("./476326.js"),
  Chunk304761 = require("./304761.js"),
  Chunk273031 = require("./273031.js"),
  Chunk859235 = require("./859235.js"),
  Chunk898463 = require("./898463.js"),
  Chunk951394 = require("./951394.js"),
  Chunk594174 = require("./594174.js"),
  Chunk768581 = require("./768581.js"),
  Chunk55935 = require("./55935.js"),
  Chunk358085 = require("./358085.js"),
  Chunk223356 = require("./223356.js"),
  Chunk225452 = require("./225452.js"),
  Chunk388032 = require("./388032.js"),
  Chunk606174 = require("./606174.js");
let w = ["Android", "iOS", "Windows Mobile", "Windows", "Linux", "Mac OS X"].map(e => ({
  label: e,
  value: e
}));

function P(e) {
  var t, P, C, E;
  let {
    transitionState: k,
    onClose: D
  } = e, T = r.useRef(null), W = r.useRef(null), [N, A] = r.useState(""), [R, L] = r.useState(""), [I, Z] = r.useState(), [z, J] = r.useState(""), [M, q] = r.useState([]), [B, V] = r.useState(), [G, H] = r.useState(), [X, U] = r.useState(false), [K, Y] = r.useState(""), [F, Q] = r.useState(function(e) {
    switch (e) {
      case "windows":
        return "Windows";
      case "macos":
        return "Mac OS X";
      case "linux":
        return "Linux"
    }
    return ""
  }((0, y.getOS)())), [$, ee] = r.useState(""), [et, en] = r.useState(""), [ei, er] = r.useState(""), [el, ea] = r.useState(""), [eo, es] = r.useState(false), [eu, ec] = r.useState(false), [ed, em] = r.useState(false), [eh, ef] = r.useState(null);
  r.useEffect(() => {
    let e = Math.random().toString(16).slice(2);
    o.tn.get({
      url: "".concat(location.protocol, "//").concat(location.host).concat("/assets/", "version.").concat(window.GLOBAL_ENV.RELEASE_CHANNEL, ".json"),
      query: {
        cache: e
      },
      rejectWithError: true
    }).then(e => {
      if (null != e.body && "82c72f3c50242c6562e3d08f3d2a4588bf958e62" !== e.body.hash) {
        let e = new Date("1754882941287"),
          t = new Date,
          n = (0, j.TD)(t, e);
        n.hours > 6 && ef(n.hours)
      }
    })
  }, []);
  let ep = (0, a.e7)([v.default], () => {
      let e = v.default.getCurrentUser();
      return (null == e ? true : e.isStaff()) || (null == e ? true : e.isStaffPersonal())
    }),
    ex = (0, a.e7)([m.C], () => {
      var e;
      return null == (e = m.C.getCurrentBuildOverride().overrides) ? true : e.discord_web
    }),
    ev = () => {
      null == D || D()
    },
    eg = e => {
      q(M.filter(t => t.id !== e))
    };
  async function ej() {
    var e, t;
    if (em(false), "" === N || "" === R || null == I) return void es(true);
    let r = null == B || null == (e = B.features) ? true : e.find(e => (0, b.pD)(e) === G);
    ec(true), es(false);
    let l = (0, O.D)(M.map(e => {
        let {
          item: t
        } = e;
        return t
      })),
      a = await (0, b.ZD)({
        name: N,
        description: R,
        priority: I,
        feature: r,
        url: z,
        buildOverride: null != (t = null == ex ? true : ex.id) ? t : null
      }, true === X ? {
        overridePlatformInformation: X,
        device: K,
        operatingSystem: F,
        operatingSystemVersion: $,
        clientVersion: et,
        clientBuildNumber: ei,
        locale: el
      } : {
        overridePlatformInformation: X
      }, l).catch(() => em(true));
    ec(false), null != a && a.ok ? (ep && window.open(a.body.permalink_url, "_blank"), ev(), (0, u.ZDy)(async () => {
      let {
        default: e
      } = await n.e("64648").then(n.bind(n, 81155));
      return t => {
        var n, r;
        return <e{...n = function(e) {
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
        }({}, t), r = r = {
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
        }), n} />
      }
    })) : em(true)
  }
  r.useEffect(() => {
    async function e() {
      V(await (0, b.WG)())
    }
    ep && e()
  }, [ep]), r.useEffect(() => {
    if (M.length > 0) {
      var e;
      null == (e = W.current) || e.scrollIntoView({
        behavior: "smooth",
        block: "end"
      })
    }
  }, [M]);
  let ey = r.useCallback(e => {
    let t = Array.from(e.clipboardData.files).filter(e => e.type.startsWith("image/")).at(0);
    true === t || M.some(e => {
      var n;
      return e.filename === t.name && (null == (n = e.item.file) ? true : n.size) === t.size
    }) || q([...M, new d.ZP({
      id: (0, l.Z)(),
      file: t,
      platform: d.ow.WEB,
      origin: "clipboard"
    })])
  }, [M]);
  return <u.Y0X transitionState={k} aria-label={S.intl.string(S.t.mCCdws)} size={u.CgR.MEDIUM} parentComponent={"BugReporterModal"}>{<u.xBx><u.X6q variant={"heading-lg/semibold"}><u.H>{S.intl.string(S.t["5Lqopa"])}</u.H></u.X6q></u.xBx>}{<u.hzk onPaste={ey}><form onSubmit={ej}>{null != ex && <u.ToO type={u.ToO.Types.DANGER} body={S.intl.format(S.t["yY60+/"], {
            buildOverrideHook: () => (0, i.jsx)("b", {
              children: null == ex ? true : ex.id
            })
          })} title={S.intl.string(S.t["ZP/hEx"])} />}{null == ex && null != eh && <u.ToO type={u.ToO.Types.DANGER} title={S.intl.formatToPlainString(S.t["ql2Q/f"], {
            hours: eh
          })} body={S.intl.string(S.t.x18RUl)} />}{<u.Kqy gap={24} padding={{
            top: 8,
            bottom: 8
          }}>{<u.xJW error={eo && "" === N ? S.intl.string(S.t.EkokLy) : null} title={S.intl.string(S.t.OZRgj4)}><u.oil placeholder={"Something is broken on this screen."} type={"text"} value={N} maxLength={100} onChange={A} /></u.xJW>}{<u.xJW error={eo && "" === R ? S.intl.string(S.t.EkokLy) : null} title={S.intl.string(S.t["1SplHx"])}>{<u.Kx8 placeholder={"What did you expect to see?"} value={R} onChange={L} />}{ep && <u.R94 type={u.geA.DESCRIPTION}>{"You can add additional information/media on the ticket after submitting"}</u.R94>}</u.xJW>}{<u.xJW error={eo && true === I ? S.intl.string(S.t.EkokLy) : null} title={S.intl.string(S.t.xMXLdX)}><u.q4e renderOptionLabel={e => (function(e) {
                let t = e.priority;
                return (0, i.jsxs)("div", {
                  className: _.formPriorityImageContainer,
                  children: [(0, i.jsxs)("div", {
                    className: _.formPriorityTitleContainer,
                    children: [(0, i.jsx)("img", {
                      alt: "",
                      className: _.formPriorityImage,
                      src: (0, g.gT)({
                        id: t.emoji,
                        animated: true,
                        size: 48
                      })
                    }), (0, i.jsx)(u.Text, {
                      color: "header-primary",
                      variant: "text-sm/semibold",
                      className: _.formPriorityTitle,
                      children: t.title
                    })]
                  }), (0, i.jsx)(u.Text, {
                    color: "header-secondary",
                    variant: "text-xs/normal",
                    className: _.formPriorityDescription,
                    children: t.description
                  })]
                })
              })(e)} onChange={Z} options={(0, b.Tj)().map(e => ({
                priority: e,
                value: e.value,
                label: e.title
              }))} value={I} maxVisibleItems={3} closeOnSelect={true} /></u.xJW>}{ep && <u.xJW title={S.intl.string(S.t["77VVd3"])}><u.VcW value={G} options={null != (E = null == B || null == (C = B.features) || null == (P = C.filter(e => "" !== (0, b.pD)(e))) || null == (t = P.map(e => {
                var t;
                return {
                  label: null != (t = e.name) ? t : "",
                  value: (0, b.pD)(e)
                }
              })) ? true : t.sort((e, t) => e.label.localeCompare(t.label))) ? E : []} isDisabled={null == B} onChange={e => H(e)} /></u.xJW>}{<u.xJW title={S.intl.string(S.t["7p5pqq"])}><u.oil placeholder={S.intl.string(S.t.HewMzs)} type={"text"} value={z} maxLength={5e3} onChange={J} /></u.xJW>}{<u.xJW><u.XZJ value={X} onChange={(e, t) => U(t)}>{S.intl.string(S.t.ayhqiI)}</u.XZJ></u.xJW>}{X ? <i.Fragment>{<u.xJW title={S.intl.string(S.t.rrI4Tk)}><u.oil placeholder={"Device"} value={K} onChange={e => Y(e)} /></u.xJW>}{<u.xJW title={S.intl.string(S.t.kcHxi4)}><u.q4e value={F} options={w} onChange={e => Q(e)} /></u.xJW>}{<u.xJW title={S.intl.string(S.t.rEtxdn)}><u.oil placeholder={"Operating System Version"} value={$} onChange={e => ee(e)} /></u.xJW>}{<u.xJW title={S.intl.string(S.t["wy1M/v"])}><u.oil placeholder={"Client Version"} value={et} onChange={e => en(e)} /></u.xJW>}{<u.xJW title={S.intl.string(S.t.f7kbVl)}><u.oil placeholder={"Client Build Number"} value={ei} onChange={e => er(e)} /></u.xJW>}{<u.xJW title={S.intl.string(S.t["4Z5+zs"])}><u.oil placeholder={"Locale"} value={el} onChange={e => ea(e)} /></u.xJW>}</i.Fragment> : null}{<s.zx color={s.zx.Colors.PRIMARY}>{S.intl.string(S.t.HVxmOD)}{<c.Z ref={T} onChange={e => {
                var t, n;
                (null == (n = e.currentTarget) || null == (t = n.files) ? true : t[0]) != null && q([...M, ...Array.from(e.currentTarget.files).map(e => new d.ZP({
                  id: (0, l.Z)(),
                  file: e,
                  platform: d.ow.WEB,
                  origin: "file_picker"
                }))])
              }} multiple={true} />}</s.zx>}{M.length > 0 ? <u.hjN>{<u.vwX>{"Preview"}</u.vwX>}{<div ref={W} className={_.attachments}>{M.length > 0 && M.map(e => (0, i.jsxs)("div", {
                className: _.attachment,
                children: [(0, i.jsxs)("div", {
                  children: [(0, i.jsx)(p.r, {
                    size: f.q.SMALL,
                    upload: e
                  }), (0, i.jsx)("div", {
                    className: _.removeAttachment,
                    children: (0, i.jsx)(x.ZP, {
                      children: (0, i.jsx)(h.Z, {
                        tooltip: S.intl.string(S.t.vN7REx),
                        onClick: () => eg(e.id),
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
              }, e.id))}</div>}</u.hjN> : null}{ed ? <u.Text color={"text-danger"} variant={"text-sm/normal"}>{"Something went wrong, try again!"}</u.Text> : null}</u.Kqy>}</form></u.hzk>}{<u.mzw><u.Kqy direction={"horizontal"} gap={8} justify={"end"}>{<u.zxk variant={"primary"} text={ep ? "Submit and Open Report" : "Submit Report"} loading={eu} onClick={ej} />}{<u.zxk variant={"secondary"} text={S.intl.string(S.t["ETE/oK"])} onClick={ev} />}</u.Kqy></u.mzw>}</u.Y0X>
}