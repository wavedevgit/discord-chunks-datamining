/** Chunk was on 76815 **/
/** chunk id: 336977, original params: t,e,n (module,exports,require) **/
require.d(exports, {
  default: () => b
}), require("./388685.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk399606 = require("./399606.js"),
  Chunk481060 = require("./481060.js"),
  Chunk607070 = require("./607070.js"),
  Chunk626135 = require("./626135.js"),
  Chunk832239 = require("./832239.js"),
  Chunk407383 = require("./407383.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.js"),
  Chunk383721 = require("./383721.js"),
  Chunk617921 = require("./617921.js");

function f(t) {
  let {
    onClose: e,
    source: f = u.I.INAPPROPRIATE_CONVERSATION
  } = t, b = (0, a.e7)([c.Z], () => c.Z.useReducedMotion), [m, g] = i.useState(false);
  i.useEffect(() => {
    let t = new Date;
    return s.default.track(d.rMx.VIBING_WUMPUS_VIEWED, {
      source: f
    }), (0, l.JO)(), () => {
      s.default.track(d.rMx.VIBING_WUMPUS_CLOSED, {
        duration_open_ms: new Date().getTime() - t.getTime(),
        source: f
      }), (0, l.zu)()
    }
  }, [f]);
  let N = () => {
    m ? ((0, l.JO)(), s.default.track(d.rMx.VIBING_WUMPUS_ACTION, {
      action: u.G.PLAY
    })) : ((0, l.hW)(), s.default.track(d.rMx.VIBING_WUMPUS_ACTION, {
      action: u.G.PAUSE
    })), g(!m)
  };
  async function I() {
    let {
      default: t
    } = await n.e("29641").then(n.t.bind(n, 937359, 19));
    return t
  }
  return <r.Fragment>{<div className={_.ringContainer}><img src={O} alt={""} className={_.__invalid_ringArt} /></div>}{<o.Fmz importData={I} shouldAnimate={!m && !b} className={_.wumpus} pauseAtFrame={b ? 200 : true} />}{<o.ua7 text={m ? p.intl.string(p.t.RscU7O) : p.intl.string(p.t.ZcgDJS)} position={"top"} aria-label={m ? p.intl.string(p.t.RscU7O) : p.intl.string(p.t.ZcgDJS)}>{t => {
        var e, n;
        return (0, r.jsx)(o.P3F, (e = function(t) {
          for (var e = 1; e < arguments.length; e++) {
            var n = null != arguments[e] ? arguments[e] : {},
              r = Object.keys(n);
            "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(t) {
              return Object.getOwnPropertyDescriptor(n, t).enumerable
            }))), r.forEach(function(e) {
              var r;
              r = n[e], e in t ? Object.defineProperty(t, e, {
                value: r,
                enumerable: true,
                configurable: true,
                writable: true
              }) : t[e] = r
            })
          }
          return t
        }({}, t), n = n = {
          onClick: N,
          className: _.iconButton,
          children: m ? (0, r.jsx)(o.o1U, {
            size: "xs",
            color: "currentColor",
            className: _.icon
          }) : (0, r.jsx)(o.fpf, {
            size: "xs",
            color: "currentColor",
            className: _.icon
          })
        }, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : (function(t, e) {
          var n = Object.keys(t);
          if (Object.getOwnPropertySymbols) {
            var r = Object.getOwnPropertySymbols(t);
            n.push.apply(n, r)
          }
          return n
        })(Object(n)).forEach(function(t) {
          Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
        }), e))
      }}</o.ua7>}{<o.hzk data-migration-pending={true} className={_.body}><div className={_.textContainer}>{<o.X6q variant={"heading-xl/semibold"} color={"header-primary"}>{p.intl.string(p.t.L4ifkZ)}</o.X6q>}{<o.Text variant={"text-md/normal"} color={"header-secondary"}>{p.intl.string(p.t.R8LCMT)}</o.Text>}</div></o.hzk>}{<o.mzw data-migration-pending={true}><div className={_.buttonContainer}><o.zxk variant={"primary"} text={p.intl.string(p.t["8eKkaW"])} fullWidth={true} onClick={() => {
            e(), s.default.track(d.rMx.VIBING_WUMPUS_ACTION, {
              action: u.G.BACK_TO_CONVERSATION
            })
          }} /></div></o.mzw>}</r.Fragment>
}
let b = t => {
  let {
    onClose: e,
    transitionState: n
  } = t;
  return <o.Y0X data-migration-pending={true} transitionState={n} parentComponent={"VibingWumpusModal"}><f onClose={e} /></o.Y0X>
}