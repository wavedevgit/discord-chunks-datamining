/** Chunk was on 11776 **/
/** chunk id: 661462, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => p
}), require("./388685.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk481060 = require("./481060.js"),
  Chunk785717 = require("./785717.js"),
  Chunk128156 = require("./128156.jsx"),
  Chunk311044 = require("./311044.jsx"),
  Chunk408986 = require("./408986.jsx"),
  Chunk778414 = require("./778414.js"),
  Chunk228168 = require("./228168.js"),
  Chunk662776 = require("./662776.js");

function m(e) {
  let {
    user: t,
    currentUser: n,
    section: l,
    subsection: i,
    displayProfile: o,
    guildId: f,
    channelId: m,
    onClose: p
  } = e;
  return l === u.oh.ACTIVITY ? <a.Z user={t} currentUser={n} displayProfile={o} guildId={f} channelId={m} subsection={i} onClose={p} /> : l === u.oh.MUTUAL_FRIENDS ? <c.Z user={t} guildId={f} channelId={m} onClose={p} /> : l === u.oh.MUTUAL_GUILDS ? <s.Z user={t} onClose={p} /> : l === u.oh.WIDGETS ? <d.Z user={t} guildId={f} channelId={m} /> : null
}

function p(e) {
  var t, n, a;
  let {
    user: c,
    currentUser: s,
    displayProfile: d,
    guildId: u,
    channelId: p,
    items: g,
    initialSection: b,
    initialSubsection: j,
    onClose: h
  } = e, {
    trackUserProfileAction: x
  } = (0, o.KZ)(), [{
    section: y,
    subsection: v,
    text: O
  }, _] = l.useState((n = function(e) {
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
  }({}, null != (t = g.find(e => {
    let {
      section: t
    } = e;
    return t === b
  })) ? t : g[0]), a = a = {
    subsection: j
  }, Object.getOwnPropertyDescriptors ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(a)) : (function(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var r = Object.getOwnPropertySymbols(e);
      n.push.apply(n, r)
    }
    return n
  })(Object(a)).forEach(function(e) {
    Object.defineProperty(n, e, Object.getOwnPropertyDescriptor(a, e))
  }), n));
  return <div className={f.container}>{<i.Ttm orientation={"horizontal"} className={f.scroller} fade={true} paddingFix={false}><i.njP type={"top"} look={"custom"} selectedItem={y} onItemSelect={e => {
          x({
            action: "PRESS_SECTION",
            section: e
          }), _(t => {
            var n;
            return null != (n = g.find(t => t.section === e)) ? n : t
          })
        }}>{g.map(e => (0, r.jsx)(i.njP.Item, {
          className: f.tabBarItem,
          id: e.section,
          "aria-label": e.text,
          children: e.text
        }, e.section))}</i.njP></i.Ttm>}{<i.njP.Panel id={y} aria-label={O} className={f.tabBarPanel}><m user={c} currentUser={s} displayProfile={d} guildId={u} channelId={p} section={y} subsection={v} onClose={h} /></i.njP.Panel>}</div>
}