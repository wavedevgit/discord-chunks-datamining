/** Chunk was on 71879 **/
/** chunk id: 542581, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  Z: () => b
}), require("./388685.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk120356 = require("./120356.js"),
  l = require.n(Chunk120356),
  Chunk126663 = require("./126663.js"),
  Chunk94171 = require("./94171.js"),
  Chunk481060 = require("./481060.js"),
  Chunk787014 = require("./787014.js"),
  Chunk454585 = require("./454585.js"),
  Chunk456269 = require("./456269.js"),
  Chunk470623 = require("./470623.jsx"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk761852 = require("./761852.js"),
  Chunk73433 = require("./73433.js");
let b = Chunk73800.memo(function(e) {
  let {
    channel: t,
    onChange: a
  } = e, b = (0, h.AF)(), {
    guidelinesOpen: j
  } = (0, h.xH)(e => {
    let {
      guidelinesOpen: t
    } = e;
    return {
      guidelinesOpen: t
    }
  }, o.X), v = (0, m.r_)(t), [C, _] = i.useState(false), y = i.useCallback(e => {
    if (null == e) return;
    let t = e.clientHeight >= 220;
    t !== C && _(t)
  }, [C]);
  i.useLayoutEffect(() => {
    setTimeout(a, 350)
  }, [j, a]);
  let [O, w] = i.useState(!j), P = (0, c.q_F)({
    opacity: +!!j,
    maxHeight: 500 * !!j,
    config: {
      duration: 300
    },
    onRest: () => w(!j)
  });
  return null != t.topic && t.topic.length > 0 ? <s.animated.div style={P} className={O ? x.hiddenVisually : true}><div className={x.container}>{<div className={x.headerContainer}>{<c.X6q variant={"heading-lg/semibold"} className={x.guidelinesHeader}>{<c.snC size={"custom"} color={"currentColor"} width={20} height={20} />}{f.intl.string(f.t["4d4T4u"])}{v && <c.P3F onClick={() => {
              d.ZP.open(t.id, true, g.ZfP.TOPIC)
            }} tag={"span"} className={x.clickable}><c.vdY size={"xs"} color={"currentColor"} /></c.P3F>}</c.X6q>}{<c.P3F aria-label={f.intl.string(f.t.cpT0Cg)} className={x.clickable} onClick={() => {
            b.getState().setGuidelinesOpen(false)
          }}><c.Dio size={"xs"} color={"currentColor"} /></c.P3F>}</div>}{<div className={x.descriptionContainer}>{<c.Text selectable={true} variant={"text-sm/normal"} color={"header-secondary"} style={{
            maxHeight: 220
          }} className={l()(x.guidelines, p.markup)}><div ref={y}>{u.Z.parseForumPostGuidelines(t.topic, true, {
              channelId: t.id,
              allowHeading: true,
              allowList: true
            })}</div></c.Text>}{C && <div className={x.showMore}>{<div className={x.gradient} />}{<div className={x.linkContainer}><c.P3F className={x.showMoreLink} onClick={() => {
                (0, c.ZDy)(async () => {
                  let {
                    default: e
                  } = await n.e("78712").then(n.bind(n, 223164));
                  return n => {
                    var i, a;
                    return (0, r.jsx)(e, (i = function(e) {
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
                    }({}, n), a = a = {
                      channel: t
                    }, Object.getOwnPropertyDescriptors ? Object.defineProperties(i, Object.getOwnPropertyDescriptors(a)) : (function(e, t) {
                      var n = Object.keys(e);
                      if (Object.getOwnPropertySymbols) {
                        var r = Object.getOwnPropertySymbols(e);
                        n.push.apply(n, r)
                      }
                      return n
                    })(Object(a)).forEach(function(e) {
                      Object.defineProperty(i, e, Object.getOwnPropertyDescriptor(a, e))
                    }), i))
                  }
                })
              }}><c.Text variant={"text-sm/semibold"} color={"text-brand"} className={x.showMoreText}>{f.intl.string(f.t.Vu7odH)}{<c.bJT size={"xs"} color={"currentColor"} className={x.showMoreIcon} />}</c.Text></c.P3F></div>}</div>}</div>}</div></s.animated.div> : null
})