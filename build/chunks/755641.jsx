/** Chunk was on 59256 **/
/** chunk id: 755641, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  g: () => h
}), require("./388685.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk657707 = require("./657707.js"),
  Chunk481060 = require("./481060.js"),
  Chunk510918 = require("./510918.jsx"),
  Chunk70086 = require("./70086.jsx"),
  Chunk131085 = require("./131085.js"),
  Chunk195196 = require("./195196.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk549405 = require("./549405.js"),
  Chunk602268 = require("./602268.js");

function g(e) {
  let {
    badge: t,
    locked: n = false,
    preview: o = false,
    selected: l = false,
    onClick: u
  } = e, g = a()(b.pickerItem, {
    [b.pickerItemSelected]: l,
    [m.lockedPickerItem]: n,
    [m.previewBadge]: o
  }), h = <r.Fragment>{<c.v badge={t.kind} width={d.Gg.SIZE_32} height={d.Gg.SIZE_32} className={m.guildBadge} />}{n && !o && <div className={m.lockIconOverlay}><s.mBM size={"md"} /></div>}</r.Fragment>;
  if (o) return <div className={g}>{h}</div>;
  if (n && null != t.packName && "" !== t.packName) {
    let e = f.intl.formatToPlainString(p.default.ECl8SU, {
      packName: t.packName
    });
    return <i.ua7 delay={100} text={e} aria-label={e}>{e => {
        var t, n;
        return (0, r.jsx)(i.P3F, (t = function(e) {
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
        }({}, e), n = n = {
          className: g,
          onClick: () => {
            var t;
            null == u || u(), null == (t = e.onClick) || t.call(e)
          },
          children: h
        }, Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : (function(e, t) {
          var n = Object.keys(e);
          if (Object.getOwnPropertySymbols) {
            var r = Object.getOwnPropertySymbols(e);
            n.push.apply(n, r)
          }
          return n
        })(Object(n)).forEach(function(e) {
          Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
        }), t))
      }}</i.ua7>
  }
  return <i.P3F className={g} onClick={u}>{h}</i.P3F>
}

function h(e) {
  let {
    badgeCollection: t,
    handleBoostUpsellClick: n,
    selectedBadge: l,
    onBadgeClicked: c
  } = e, [d, h] = o.useState(false), _ = !d && t.lockedBadges.length > 0;
  return <div>{<div className={b.pickerGrid}>{t.unlockedBadges.map(e => <g badge={e} selected={e.kind === l} onClick={() => c(e.kind)} />)}{d && <r.Fragment>{t.lockedBadges.map(e => (0, r.jsx)(g, {
          locked: true,
          badge: e,
          onClick: () => null == n ? true : n()
        }, e.kind))}</r.Fragment>}</div>}{_ && <div className={m.lockedPreviewContainer}>{<div className={b.pickerGrid}>{t.lockedBadges.slice(0, 5).map(e => (0, r.jsx)(g, {
          locked: true,
          preview: true,
          badge: e
        }, e.kind))}</div>}{<i.P3F className={a()(m.showAllBadges, m.showAllBadgesOverlay)} onClick={() => h(true)}>{<i.Text variant={"text-sm/semibold"} color={"text-secondary"}>{f.intl.string(p.default["2tkPDw"])}</i.Text>}{<s.CJ0 size={"sm"} />}</i.P3F>}</div>}{d && <r.Fragment>{null != n && <div className={m.badgesUpsellContainer}>{<i.Text variant={"text-sm/normal"} color={"text-default"} className={m.badgesUpsellText}>{f.intl.string(p.default.G3qiHh)}</i.Text>}{<u.P className={m.badgesUpsellButton} onClick={n} />}</div>}{<i.P3F className={m.hideAllBadges} onClick={() => h(false)}>{<i.Text variant={"text-sm/semibold"} color={"text-secondary"}>{f.intl.string(p.default.idxnf3)}</i.Text>}{<s.u04 size={"sm"} />}</i.P3F>}</r.Fragment>}</div>
}