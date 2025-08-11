/** Chunk was on 11776 **/
/** chunk id: 740628, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => v
}), require("./388685.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk442837 = require("./442837.js"),
  Chunk706898 = require("./706898.jsx"),
  Chunk481060 = require("./481060.js"),
  Chunk246946 = require("./246946.js"),
  Chunk785717 = require("./785717.js"),
  Chunk786366 = require("./786366.js"),
  Chunk323090 = require("./323090.jsx"),
  Chunk116906 = require("./116906.jsx"),
  Chunk384816 = require("./384816.jsx"),
  Chunk389190 = require("./389190.jsx"),
  Chunk428927 = require("./428927.jsx"),
  Chunk228168 = require("./228168.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk301150 = require("./301150.js"),
  Chunk923243 = require("./923243.js");

function y(e) {
  let {
    section: t,
    subsection: n,
    user: l,
    currentUser: i,
    displayProfile: o,
    guildId: a,
    channelId: c,
    onClose: s
  } = e;
  return t === b.oh.ACTIVITY ? <f.Z user={l} currentUser={i} displayProfile={o} guildId={a} onClose={s} /> : t === b.oh.MUTUAL_FRIENDS ? <p.Z user={l} guildId={a} channelId={c} onClose={s} /> : t === b.oh.MUTUAL_GUILDS ? <g.Z user={l} onClose={s} /> : t === b.oh.BOT_DATA_ACCESS ? <d.Z user={l} /> : t === b.oh.BOT_INFO ? <u.Z user={l} currentUser={i} displayProfile={o} guildId={a} subsection={n} onClose={s} /> : <m.Z user={l} currentUser={i} displayProfile={o} subsection={n} onClose={s} />
}

function v(e) {
  var t, n, d;
  let {
    user: u,
    currentUser: f,
    displayProfile: m,
    guildId: p,
    items: g,
    initialSection: v = b.oh.USER_INFO,
    initialSubsection: O,
    onClose: _
  } = e, {
    trackUserProfileAction: I
  } = (0, s.KZ)(), P = (0, i.e7)([c.Z], () => c.Z.hidePersonalInformation), [{
    section: Z,
    subsection: T
  }, N] = l.useState({
    section: null != (d = null == (t = g.find(e => {
      let {
        section: t
      } = e;
      return t === v
    })) ? true : t.section) ? d : null == (n = g[0]) ? true : n.section,
    subsection: O
  });
  l.useEffect(() => {
    null == g.find(e => e.section === Z) && N({
      section: g[0].section,
      subsection: true
    })
  }, [g, Z]);
  let E = l.useCallback(e => {
    I({
      action: "PRESS_SECTION",
      section: e
    }), N({
      section: e,
      subsection: true
    })
  }, [I, N]);
  return P ? <div className={x.container}><div className={h.empty}>{<div className={h.emptyIconStreamerMode} />}{<div className={h.emptyText}>{j.intl.string(j.t.Br1ls7)}</div>}</div></div> : <div className={x.container}>{<o.n className={x.tabBar} type={"top"} selectedItem={Z} onItemSelect={E}>{g.map(e => {
        let {
          section: t,
          text: n
        } = e;
        return (0, r.jsx)(o.n.Item, {
          className: x.tabBarItem,
          id: t,
          "aria-label": n,
          children: (0, r.jsx)(a.Text, {
            variant: "text-sm/normal",
            children: n
          })
        }, t)
      })}</o.n>}{<y items={g} section={Z} subsection={T} user={u} currentUser={f} displayProfile={m} guildId={p} onClose={_} />}</div>
}