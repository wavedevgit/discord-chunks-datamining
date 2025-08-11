/** Chunk was on 53512 **/
/** chunk id: 905987, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => b
}), require("./388685.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk340541 = require("./340541.js"),
  Chunk430824 = require("./430824.js"),
  Chunk771845 = require("./771845.js"),
  Chunk259580 = require("./259580.jsx"),
  Chunk186523 = require("./186523.jsx"),
  Chunk553826 = require("./553826.jsx"),
  Chunk388032 = require("./388032.jsx"),
  Chunk699343 = require("./699343.js"),
  Chunk949509 = require("./949509.js");

function b(e) {
  let {
    count: t
  } = e, [n, r] = s.useState("server");
  return <c.Ttm className={g.content}>{<div className={a()(g.header, _.header)}>{<c.owK size={"custom"} color={"currentColor"} width={40} height={40} />}{<c.X6q variant={"heading-xl/bold"} color={"header-primary"}>{j.intl.format(j.t.Wyk03t, {
          count: t
        })}</c.X6q>}{<c.Text className={g.__invalid_subtitle} variant={"text-md/medium"} color={"header-secondary"}>{j.intl.string(j.t["jr/rn5"])}</c.Text>}</div>}{<div className={_.tabs}>{<div className={_.tabBackground} style={{
          left: "server" === n ? 0 : "50%"
        }} />}{<c.P3F className={_.tab} onClick={() => r("server")}><c.Text variant={"text-sm/medium"} color={"server" === n ? "header-primary" : "text-muted"}>{j.intl.string(j.t.pS4WEh)}</c.Text></c.P3F>}{<c.P3F className={_.tab} onClick={() => r("channel")}><c.Text variant={"text-sm/medium"} color={"channel" === n ? "header-primary" : "text-muted"}>{j.intl.string(j.t.UVxi0d)}</c.Text></c.P3F>}</div>}{<div className={_.container}>{<v hidden={"channel" === n} />}{<f hidden={"server" === n} />}</div>}</c.Ttm>
}

function v(e) {
  let {
    hidden: t
  } = e, n = (0, l.e7)([d.Z, m.ZP], () => {
    var e;
    return null == (e = d.Z.getGuild(m.ZP.getFlattenedGuildIds()[0])) ? true : e.name
  }), [r, h] = s.useState(0);
  s.useEffect(() => {
    if (t) return;
    let e = 0,
      n = [1500, 1e3, 1e3, 500].map((t, n) => setTimeout(() => h(n + 1), e += t));
    return () => {
      n.forEach(e => clearTimeout(e)), setTimeout(() => h(0), 150)
    }
  }, [t]);
  let {
    entrypoints: u
  } = (0, o._k)({
    location: "tips_tab"
  });
  return <i.Fragment>{<div className={_.containerInner}><div className={a()(_.serversSection, {
          [_.hidden]: t,
          [_.showBigMenu]: r >= 1,
          [_.fadeChannels]: r >= 1,
          [_.showModal]: r >= 3
        })}>{<div className={_.channels}>{<div className={_.guildName}>{<c.Text variant={"text-md/medium"} color={"interactive-active"} lineClamp={1}>{null != n ? n : "Keyboard Nerds"}</c.Text>}{r >= 1 ? <c.Dio size={"md"} color={"currentColor"} className={_.icon} /> : <x.Z className={a()(_.__invalid_downCaret, _.icon)} width={24} height={24} />}</div>}{<p name={j.intl.string(j.t.jqWm9f)} />}{<p name={j.intl.string(j.t.WFejRk)} />}{<p grey={true} name={j.intl.string(j.t.p9z9Iy)} />}{<p grey={true} name={j.intl.string(j.t["2bdWDw"])} />}{<p grey={true} name={j.intl.string(j.t["Ci+Our"])} />}{<p nodot={true} name={j.intl.string(j.t["/7TEdn"])} />}{<p nodot={true} name={j.intl.string(j.t["Ime/t7"])} />}</div>}{<div className={_.bigMenu}>{<C text={u ? j.intl.string(j.t.Sd8Ix8) : j.intl.string(j.t.BN75l5)} icon={(0, i.jsx)(c.ejJ, {
              size: "sm",
              className: _.icon
            })} />}{<div className={_.divider} />}{<C active={r >= 2} text={j.intl.string(j.t.h850Sk)} icon={(0, i.jsx)(c.Dkj, {
              size: "sm",
              color: "currentColor",
              className: _.icon
            })} />}{<C text={j.intl.string(j.t.BayiAg)} icon={(0, i.jsx)(c.b7C, {
              size: "sm",
              color: "currentColor",
              className: _.icon
            })} />}{<C text={j.intl.string(j.t["154/bG"])} icon={(0, i.jsx)(c.ewm, {
              size: "sm",
              color: "currentColor",
              className: _.icon
            })} />}{<C text={j.intl.string(j.t.qyjZub)} icon={(0, i.jsx)(c.VZI, {
              size: "sm",
              color: "currentColor",
              className: _.icon
            })} />}</div>}{<div className={_.notifModal}>{<c.Text className={_.modalHeader} variant={"text-md/medium"} color={"interactive-active"}>{j.intl.string(j.t.h850Sk)}</c.Text>}{<div className={_.notifTabs}>{<div className={_.notifTab}>{<c.owK size={"md"} color={"currentColor"} />}{<c.Text variant={"text-xs/medium"} color={"text-muted"} lineClamp={1}>{j.intl.string(j.t.hZrr6u)}</c.Text>}</div>}{<div className={_.activeNotifTab}>{<c.lOy size={"md"} color={"currentColor"} />}{<c.Text variant={"text-xs/medium"} color={"interactive-active"} lineClamp={1}>{j.intl.string(j.t.y59NJi)}</c.Text>}</div>}{<div className={_.notifTab}>{<c.owu size={"md"} color={"currentColor"} />}{<c.Text variant={"text-xs/medium"} color={"text-muted"} lineClamp={1}>{j.intl.string(j.t["pGn/bG"])}</c.Text>}</div>}</div>}{<div className={_.controls}>{<div className={_.control}>{<div className={_.controlPlaceholder} />}{<div className={_.switchOn} />}</div>}{<div className={_.control}>{<div className={_.controlPlaceholder} />}{<div className={_.switchOff} />}</div>}</div>}</div>}</div></div>}{<N text={j.intl.string(j.t["C//fOz"])} className={_.tipServers2} hidden={t || r < 4} />}</i.Fragment>
}

function f(e) {
  let {
    hidden: t
  } = e, [n, r] = s.useState(0);
  return s.useEffect(() => {
    if (t) return;
    let e = 0,
      n = [1e3, 1e3, 1e3, 800, 800].map((t, n) => setTimeout(() => r(n + 1), e += t));
    return () => {
      n.forEach(e => clearTimeout(e)), setTimeout(() => r(0), 150)
    }
  }, [t]), <i.Fragment>{<div className={_.containerInner}><div className={a()(_.channelsSection, {
          [_.hidden]: t,
          [_.fadeOtherChannels]: n >= 2,
          [_.showLeftMenu]: n >= 2,
          [_.showRightMenu]: n >= 3
        })}>{<div className={_.channels}>{<p selected={n >= 1} grey={n >= 5} name={j.intl.string(j.t.jqWm9f)} />}{<p name={j.intl.string(j.t.WFejRk)} />}{<p grey={true} name={j.intl.string(j.t.p9z9Iy)} />}{<p grey={true} name={j.intl.string(j.t["2bdWDw"])} />}{<p grey={true} name={j.intl.string(j.t["Ci+Our"])} />}{<p nodot={true} name={j.intl.string(j.t["/7TEdn"])} />}{<p nodot={true} name={j.intl.string(j.t["Ime/t7"])} />}</div>}{<div className={a()(_.menu, _.leftMenu)}>{<C small={true} text={j.intl.string(j.t["w4m94+"])} icon={(0, i.jsx)(x.Z, {
              className: _.caret,
              width: 12,
              height: 12
            })} />}{<C small={true} text={j.intl.string(j.t.HcoRu7)} active={n >= 3} icon={(0, i.jsx)(x.Z, {
              className: _.caret,
              width: 12,
              height: 12
            })} />}</div>}{<div className={a()(_.menu, _.rightMenu)}>{<C small={true} text={j.intl.string(j.t.hZrr6u)} icon={n <= 4 ? (0, i.jsx)(u.Z, {
              className: _.icon,
              width: 12,
              height: 12
            }) : (0, i.jsx)(h.Z, {
              className: _.icon,
              width: 12,
              height: 12
            })} active={n <= 4} />}{<C small={true} text={j.intl.string(j.t.y59NJi)} icon={n >= 5 ? (0, i.jsx)(u.Z, {
              className: _.icon,
              width: 12,
              height: 12
            }) : (0, i.jsx)(h.Z, {
              className: _.icon,
              width: 12,
              height: 12
            })} active={n >= 5} />}{<C small={true} text={j.intl.string(j.t["pGn/bG"])} icon={(0, i.jsx)(h.Z, {
              className: _.icon,
              width: 12,
              height: 12
            })} />}{<C small={true} text={j.intl.string(j.t["32yow8"])} icon={(0, i.jsx)(h.Z, {
              className: _.icon,
              width: 12,
              height: 12
            })} />}</div>}</div></div>}{<N text={j.intl.string(j.t["5Il5fn"])} className={_.tipChannels1} hidden={t || n < 4} />}{<N text={j.intl.string(j.t["+ROcrq"])} className={_.tipChannels2} hidden={t || n < 4} />}</i.Fragment>
}

function N(e) {
  let {
    text: t,
    className: n,
    hidden: s
  } = e;
  return <div className={a()(n, _.tip, {
      [_.hidden]: s
    })}>{<c.Text className={_.__invalid_tipText} variant={"text-sm/normal"} color={"text-secondary"}>{t}</c.Text>}{<div className={_.tipLine} />}</div>
}

function p(e) {
  let {
    grey: t,
    nodot: n,
    selected: s,
    name: r
  } = e;
  return <div className={a()(_.channel, {
      [_.grey]: t || n,
      [_.nodot]: n,
      [_.selected]: s
    })}>{<c.VL1 size={"xs"} color={"currentColor"} className={_.channelIcon} />}{<c.Text variant={"text-md/medium"} className={_.channelName}>{r}</c.Text>}</div>
}

function C(e) {
  let {
    text: t,
    active: n,
    small: s,
    icon: r
  } = e;
  return <div className={a()(_.menuItem, {
      [_.active]: n
    })}>{<c.Text variant={s ? "text-xs/normal" : "text-sm/normal"} color={n ? "always-white" : "interactive-normal"}>{t}</c.Text>}{r}</div>
}