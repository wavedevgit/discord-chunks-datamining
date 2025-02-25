/** Chunk was on 4910 **/
n.d(t, {
  Z: () => h,
  k: () => b
}), n(266796);
var r, a = n(200651);
n(192379);
var i = n(120356),
  l = n.n(i),
  o = n(481060),
  c = n(565138),
  s = n(372769),
  d = n(857395),
  u = n(131154),
  _ = n(38981),
  m = n(355738),
  b = ((r = {})[r.UNSPECIFIED = 0] = "UNSPECIFIED", r[r.TRENDING = 1] = "TRENDING", r[r.PERSONALIZED = 2] = "PERSONALIZED", r[r.USER_GUILDS = 3] = "USER_GUILDS", r[r.FRIENDS_GUILDS = 4] = "FRIENDS_GUILDS", r[r.INTRO_CARD = 5] = "INTRO_CARD", r[r.FEATURED = 6] = "FEATURED", r);

function h(e) {
  let {
    guild: t,
    stageInstance: n,
    showGuildPopout: r,
    setShowGuildPopout: i,
    handleGuildNameClick: b,
    source: h,
    speakers: g,
    speakerCount: x,
    audienceCount: p,
    channelName: f
  } = e, v = t.id;
  return (0, a.jsx)("div", {
    className: m.contentContainer,
    children: (0, a.jsxs)("div", {
      className: m.headerContainer,
      children: [(0, a.jsxs)("div", {
        className: m.guildInfoContainer,
        children: [(0, a.jsx)(d.Z, {
          guildId: v,
          shouldShow: r,
          onRequestClose: () => i(!1),
          children: () => (0, a.jsxs)(o.P3F, {
            className: m.flexContainerRow,
            onClick: b,
            children: [(0, a.jsx)(c.Z, {
              guild: t,
              size: c.Z.Sizes.MINI,
              className: m.guildIcon
            }), (0, a.jsxs)("div", {
              className: m.flexContainerRow,
              children: [(0, a.jsx)(o.Text, {
                color: "header-secondary",
                variant: "text-sm/normal",
                className: l()(m.guildName, {
                  [m.disabled]: null == b
                }),
                children: t.name
              }), (0, a.jsx)(s.Z, {
                guild: t
              })]
            })]
          })
        }), (0, a.jsxs)("div", {
          className: m.rightJustifiedContent,
          children: [6 === h && (0, a.jsx)("div", {
            className: m.featuredTag,
            children: (0, a.jsx)(o.Text, {
              variant: "text-sm/normal",
              className: m.featuredTagText,
              children: "Featured"
            })
          }), (0, a.jsx)(_.Z, {
            count: p,
            className: m.__invalid_audienceCount
          })]
        })]
      }), (0, a.jsx)(o.Text, {
        color: "header-primary",
        variant: "text-lg/semibold",
        className: m.topicText,
        children: n.topic
      }), (0, a.jsx)(o.Text, {
        color: "header-secondary",
        className: m.description,
        variant: "text-sm/normal",
        children: n.description
      }), (0, a.jsx)(u.Z, {
        guild: t,
        speakers: g,
        speakerCount: x,
        className: m.speakers
      }), null != f && (0, a.jsxs)(a.Fragment, {
        children: [(0, a.jsx)("hr", {
          className: m.divider
        }), (0, a.jsxs)("div", {
          className: m.footer,
          children: [(0, a.jsx)(o.ewx, {
            size: "custom",
            color: "currentColor",
            width: 20,
            height: 20,
            className: m.icon
          }), (0, a.jsx)(o.Text, {
            color: "header-secondary",
            className: m.__invalid_label,
            variant: "text-sm/normal",
            children: f
          })]
        })]
      })]
    })
  })
}