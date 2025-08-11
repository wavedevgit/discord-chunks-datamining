/** Chunk was on 58227 **/
/** chunk id: 721012, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  i: () => d
}), require("./388685.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js");
require("./120356.js");
var Chunk126663 = require("./126663.js"),
  Chunk481060 = require("./481060.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk73697 = require("./73697.js");

function c(e) {
  let {
    testimonial: t,
    className: n
  } = e, {
    message: i,
    profilePic: r,
    adminTitle: c,
    emphasisColor: d = "interactive-normal"
  } = t;
  return <div className={n}>{<s.Text variant={"text-sm/medium"} color={"header-secondary"}>{a.intl.format(i, {
        testimonialHook: (e, t) => (0, l.jsx)(s.Text, {
          tag: "span",
          variant: "text-sm/bold",
          color: d,
          children: e
        }, t)
      })}</s.Text>}{<div className={o.userContainer}>{<s.qEK src={r} size={s.EFr.SIZE_16} aria-hidden={true} />}{<s.Text variant={"text-sm/medium"} color={"header-secondary"}>{c}</s.Text>}</div>}</div>
}

function d(e) {
  let {
    testimonials: t
  } = e, [
    [n, r], c
  ] = i.useState([0, "right"]), d = i.useCallback(() => {
    c(e => {
      let [n] = e;
      return 0 === n ? [t.length - 1, "left"] : [n - 1, "left"]
    })
  }, [c, t.length]), m = i.useCallback(() => {
    c(e => {
      let [n] = e;
      return [(n + 1) % t.length, "right"]
    })
  }, [c, t.length]), h = t[n], I = i.useCallback((e, t, n, i) => <u item={t} state={n} cleanup={i} direction={r} />, [r]);
  return <div className={o.testimonialHeroContainer}>{<div className={o.animatedContainer}><s.W3x items={[h]} renderItem={I} getItemKey={e => e.adminTitle} /></div>}{<s.Text variant={"text-lg/bold"} className={o.heroQuotes}>{"“"}</s.Text>}{<div className={o.testimonialsControls}>{<s.hU size={"sm"} variant={"secondary"} icon={s.whL} onClick={d} aria-label={a.intl.string(a.t["13/7kZ"])} />}{<s.hU size={"sm"} variant={"secondary"} icon={s.ZSh} onClick={m} aria-label={a.intl.string(a.t.PDTjLC)} />}</div>}</div>
}

function u(e) {
  let {
    item: t,
    state: n,
    cleanup: i,
    direction: a
  } = e, [d] = (0, s.q_F)(() => {
    switch (n) {
      case s.pJH.ENTERED:
        return {
          from: {
            transform: "right" === a ? "translateX(150%)" : "translate(-150%)"
          }, to: {
            transform: "translateX(0%)"
          }
        };
      case s.pJH.YEETED:
        return {
          from: {
            transform: "translateX(0%)"
          }, to: {
            transform: "right" === a ? "translateX(-150%)" : "translate(150%)"
          }, onRest: i
        };
      default:
        return {}
    }
  }, "respect-motion-settings", [n]);
  return <r.animated.div style={d}><c className={o.testimonial} testimonial={t} /></r.animated.div>
}