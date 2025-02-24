/** Chunk was on 3908 **/
n.d(t, {
  Z: () => h,
  k: () => m
}), n(266796);
var r, a = n(200651);
n(192379);
var i = n(120356),
  o = n.n(i),
  l = n(481060),
  c = n(565138),
  s = n(372769),
  d = n(857395),
  u = n(131154),
  _ = n(38981),
  b = n(355738),
  m = ((r = {})[r.UNSPECIFIED = 0] = "UNSPECIFIED", r[r.TRENDING = 1] = "TRENDING", r[r.PERSONALIZED = 2] = "PERSONALIZED", r[r.USER_GUILDS = 3] = "USER_GUILDS", r[r.FRIENDS_GUILDS = 4] = "FRIENDS_GUILDS", r[r.INTRO_CARD = 5] = "INTRO_CARD", r[r.FEATURED = 6] = "FEATURED", r);

function h(e) {
  let {
    guild: t,
    stageInstance: n,
    showGuildPopout: r,
    setShowGuildPopout: i,
    handleGuildNameClick: m,
    source: h,
    speakers: g,
    speakerCount: p,
    audienceCount: f,
    channelName: x
  } = e, v = t.id;
  return (0, a.jsx)("div", {
    className: b.contentContainer,
    children: (0, a.jsxs)("div", {
      className: b.headerContainer,
      children: [(0, a.jsxs)("div", {
        className: b.guildInfoContainer,
        children: [(0, a.jsx)(d.Z, {
          guildId: v,
          shouldShow: r,
          onRequestClose: () => i(!1),
          children: () => (0, a.jsxs)(l.P3F, {
            className: b.flexContainerRow,
            onClick: m,
            children: [(0, a.jsx)(c.Z, {
              guild: t,
              size: c.Z.Sizes.MINI,
              className: b.guildIcon
            }), (0, a.jsxs)("div", {
              className: b.flexContainerRow,
              children: [(0, a.jsx)(l.Text, {
                color: "header-secondary",
                variant: "text-sm/normal",
                className: o()(b.guildName, {
                  [b.disabled]: null == m
                }),
                children: t.name
              }), (0, a.jsx)(s.Z, {
                guild: t
              })]
            })]
          })
        }), (0, a.jsxs)("div", {
          className: b.rightJustifiedContent,
          children: [6 === h && (0, a.jsx)("div", {
            className: b.featuredTag,
            children: (0, a.jsx)(l.Text, {
              variant: "text-sm/normal",
              className: b.featuredTagText,
              children: "Featured"
            })
          }), (0, a.jsx)(_.Z, {
            count: f,
            className: b.__invalid_audienceCount
          })]
        })]
      }), (0, a.jsx)(l.Text, {
        color: "header-primary",
        variant: "text-lg/semibold",
        className: b.topicText,
        children: n.topic
      }), (0, a.jsx)(l.Text, {
        color: "header-secondary",
        className: b.description,
        variant: "text-sm/normal",
        children: n.description
      }), (0, a.jsx)(u.Z, {
        guild: t,
        speakers: g,
        speakerCount: p,
        className: b.speakers
      }), null != x && (0, a.jsxs)(a.Fragment, {
        children: [(0, a.jsx)("hr", {
          className: b.divider
        }), (0, a.jsxs)("div", {
          className: b.footer,
          children: [(0, a.jsx)(l.ewx, {
            size: "custom",
            color: "currentColor",
            width: 20,
            height: 20,
            className: b.icon
          }), (0, a.jsx)(l.Text, {
            color: "header-secondary",
            className: b.__invalid_label,
            variant: "text-sm/normal",
            children: x
          })]
        })]
      })]
    })
  })
}