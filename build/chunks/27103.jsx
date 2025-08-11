/** Chunk was on web.js **/
/** chunk id: 27103, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => h
});
var Chunk255367 = require("./255367.js");
require("./73800.js");
var Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk481060 = require("./481060.js"),
  Chunk385499 = require("./385499.js"),
  Chunk739566 = require("./739566.js"),
  Chunk464891 = require("./464891.js"),
  Chunk605568 = require("./605568.js"),
  Chunk834129 = require("./834129.js"),
  Chunk674563 = require("./674563.js"),
  Chunk388032 = require("./388032.js"),
  Chunk126759 = require("./126759.js");

function h(e) {
  let {
    message: t,
    compact: n,
    usernameHook: i
  } = e, h = (0, l.ZP)(t), m = i(h), {
    avatarSrc: g,
    eventHandlers: {
      onMouseEnter: E,
      onMouseLeave: b
    }
  } = (0, u.m)(true);
  return <div onMouseEnter={E} onMouseLeave={b}><d.Z className={o()(p.mainContainer, {
        [p.compact]: n
      })} iconNode={n ? null : (0, r.jsx)(u.S, {
        src: g
      })} iconContainerClassName={p.iconContainer} compact={n}><div className={o()(p.content, {
          [p.compact]: n
        })}>{<c.nD message={t} messageClassname={p.spanCorrection} className={o()(p.usernameContainer, p.spanCorrection, {
            [p.compact]: n
          })} username={(0, r.jsxs)("div", {
            className: p.spanCorrection,
            children: [(0, r.jsx)(a.Text, {
              variant: "text-md/normal",
              color: "text-brand",
              tag: "span",
              className: p.username,
              children: _.intl.string(_.t.hG1StL)
            }), (0, r.jsx)(s.Z, {
              type: f.Hb.SYSTEM_DM,
              className: p.systemTag
            })]
          })} compact={n} showTimestamp={true} />}{<div className={o()(p.__invalid_messageContent, {
            [p.compact]: n
          })}>{_.intl.format(_.t.qntXNT, {
            username: h.nick,
            usernameHook: m
          })}</div>}</div></d.Z></div>
}