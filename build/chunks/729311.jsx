/** Chunk was on 22988 **/
/** chunk id: 729311, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => R,
  j: () => Z
}), require("./388685.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk852860 = require("./852860.js"),
  Chunk111028 = require("./111028.jsx"),
  Chunk977258 = require("./977258.js"),
  Chunk45966 = require("./45966.js"),
  Chunk473403 = require("./473403.jsx"),
  Chunk454585 = require("./454585.js"),
  Chunk323502 = require("./323502.js"),
  Chunk958832 = require("./958832.js"),
  Chunk324067 = require("./324067.js"),
  Chunk984933 = require("./984933.js"),
  Chunk259580 = require("./259580.jsx"),
  Chunk999382 = require("./999382.js"),
  Chunk743475 = require("./743475.js"),
  Chunk889369 = require("./889369.js"),
  Chunk570961 = require("./570961.js"),
  Chunk208665 = require("./208665.js"),
  Chunk868814 = require("./868814.js"),
  Chunk974513 = require("./974513.js"),
  Chunk2348 = require("./2348.jsx"),
  Chunk353890 = require("./353890.jsx"),
  Chunk716130 = require("./716130.jsx"),
  Chunk388032 = require("./388032.jsx"),
  Chunk19567 = require("./19567.js"),
  Chunk73433 = require("./73433.js");

function w(e) {
  let {
    guild: t
  } = e, s = (0, l.e7)([d.Z], () => d.Z.getEnabled(t.id)), h = (0, l.e7)([p.Z], () => p.Z.hasFetched(t.id)), f = (0, y.Z)(t), b = (0, l.e7)([v.Z], () => v.Z.editedDefaultChannelIds), x = f.filter(e => !b.has(e.id)), [_, O] = i.useState(false);
  i.useEffect(() => {
    h || s || (0, g.S)(t.id)
  }, [t.id, h, s]);
  let C = e => {
    (0, a.ZDy)(async () => {
      let {
        default: i
      } = await n.e("35641").then(n.bind(n, 89216));
      return n => {
        var l, a;
        return <i{...l = function(e) {
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
          guildId: t.id,
          startingChannelId: e
        }, Object.getOwnPropertyDescriptors ? Object.defineProperties(l, Object.getOwnPropertyDescriptors(a)) : (function(e, t) {
          var n = Object.keys(e);
          if (Object.getOwnPropertySymbols) {
            var r = Object.getOwnPropertySymbols(e);
            n.push.apply(n, r)
          }
          return n
        })(Object(a)).forEach(function(e) {
          Object.defineProperty(l, e, Object.getOwnPropertyDescriptor(a, e))
        }), l} />
      }
    })
  };
  return _ || 0 === x.length ? null : <div className={T.recommendations}>{<a.Text variant={"text-md/medium"} color={"header-primary"}>{S.intl.string(S.t.NN7rDw)}</a.Text>}{<div className={T.recsSubheader}>{<a.Text variant={"text-xs/normal"} color={"text-muted"}>{S.intl.string(S.t["3Uuql5"])}</a.Text>}{<a.P3F className={T.dismissAll} onClick={() => O(true)}>{<a.dz2 size={"xxs"} color={"currentColor"} className={T.checkmark} />}{<a.Text className={T.dismissAllText} variant={"text-xs/medium"} color={"text-brand"}>{S.intl.string(S.t.ZC3PJy)}</a.Text>}</a.P3F>}</div>}{<div className={T.recommendedChannels}>{x.map((e, n) => (0, r.jsxs)(r.Fragment, {
        children: [(0, r.jsxs)("div", {
          className: T.channelRow,
          children: [(0, r.jsxs)("div", {
            className: T.channelInfo,
            children: [(0, r.jsxs)("div", {
              className: T.channelName,
              children: [(0, r.jsx)(u._W, {
                channel: e,
                guild: t
              }), (0, r.jsx)(o.Z, {
                className: T.__invalid_name,
                children: (0, r.jsx)(a.Text, {
                  className: T.__invalid_channelText,
                  variant: "text-md/medium",
                  lineClamp: 1,
                  color: "text-default",
                  children: e.name
                })
              })]
            }), null != e.topic && e.topic.length > 0 ? (0, r.jsx)(o.Z, {
              className: P.markup,
              children: (0, r.jsx)(a.Text, {
                className: T.topic,
                variant: "text-xs/normal",
                children: m.Z.parseTopic(e.topic, true, {
                  channelId: e.id
                })
              })
            }, "topic") : null]
          }), (0, c.s)(t.id, e.id) ? (0, r.jsx)(a.zxk, {
            size: "sm",
            variant: "primary",
            text: S.intl.string(S.t.OYkgVl),
            onClick: () => (0, j.pt)(e.id)
          }) : (0, r.jsx)(a.zxk, {
            size: "sm",
            variant: "secondary",
            text: S.intl.string(S.t.zA9d1N),
            icon: a.mBM,
            iconPosition: "start",
            onClick: () => C(e.id)
          })]
        }), n < x.length - 1 ? (0, r.jsx)("div", {
          className: T.separator
        }) : null]
      }))}</div>}{<div className={T.largeSeparator} />}</div>
}

function R(e) {
  let {
    saveOnClose: t = false
  } = e, n = (0, l.e7)([x.Z], () => x.Z.getGuild()), s = (0, l.e7)([d.Z], () => d.Z.isLoading()), o = (0, l.e7)([f.ZP], () => f.ZP.getChannels(null == n ? true : n.id)), c = (0, l.e7)([h.Z], () => h.Z.getCategories(null == n ? true : n.id)), u = (0, l.e7)([O.Z], () => O.Z.advancedMode), m = i.useRef(null), [g, p] = i.useState(false), v = i.useRef(n);
  return (i.useEffect(() => {
    v.current = n
  }), i.useEffect(() => {
    if (t) {
      let {
        current: e
      } = v;
      return () => {
        null != e && (0, j.DO)(e).then(() => {
          u && (0, _.rS)(e, {
            ignoreDefaultPrompt: true
          }).catch(() => {})
        }).catch(() => {})
      }
    }
  }, [t, u]), null == n) ? null : s ? <a.$jN /> : <div className={T.columns}>{<div className={T.channelBrowser}>{<a.P3F className={T.collapseButton} onClick={() => p(e => !e)}><b.Z direction={g ? b.Z.Directions.DOWN : b.Z.Directions.UP} height={16} width={16} /></a.P3F>}{<a.X6q className={T.header} variant={"heading-lg/extrabold"}>{S.intl.string(S.t["4GSygo"])}</a.X6q>}{<a.Text variant={"text-sm/normal"} color={"header-secondary"}>{S.intl.string(S.t.Kq7FAQ)}</a.Text>}{<C.Wu className={T.advancedModeToggle} guildId={n.id} />}{g ? null : <r.Fragment>{<w guild={n} />}{<N.Z className={T.channelBrowserOuter} guild={n} categories={c} channels={o} hasSidebar={false} />}</r.Fragment>}{u && <r.Fragment>{<div className={T.largeSeparator} />}{<a.X6q className={T.prejoinHeader} variant={"heading-lg/extrabold"}>{S.intl.string(S.t.g2Rnpa)}</a.X6q>}{<a.Text className={T.prejoinSubHeader} variant={"text-sm/normal"} color={"header-secondary"}>{S.intl.string(S.t.bLDQ1d)}</a.Text>}{<div ref={m} className={T.advancedModeQuestions}><E.Z guildId={n.id} prejoinOnly={true} includeCount={true} singleColumn={true} /></div>}</r.Fragment>}</div>}{<I.Z guild={n} scrollToQuestions={() => {
        null != m.current && m.current.scrollIntoView({
          behavior: "smooth"
        })
      }} />}</div>
}

function Z() {
  let e = (0, Chunk442837.e7)([Chunk999382.Z], () => Chunk999382.Z.getProps().guild),
    t = (0, Chunk442837.e7)([Chunk889369.Z], () => Chunk889369.Z.submitting),
    n = (0, Chunk442837.e7)([Chunk208665.Z], () => Chunk208665.Z.advancedMode);
  return null == module ? null : <Chunk852860.Z onSave={() => {
      (0, Chunk743475.DO)(module).then(() => {
        require && (0, Chunk570961.rS)(module, {
          ignoreDefaultPrompt: true
        }).catch(() => {})
      }).catch(() => {})
    }} onReset={Chunk743475.BG} submitting={exports} onSaveText={Chunk388032.intl.string(Chunk388032.t.R3BPHx)} />
}