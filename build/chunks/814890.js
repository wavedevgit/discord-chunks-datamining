/** Chunk was on web.js **/
/** chunk id: 814890, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  ZV: () => R,
  c7: () => b,
  j2: () => N,
  kC: () => S,
  p4: () => O,
  so: () => C,
  wT: () => I,
  zv: () => E
}), require("./896048.js"), require("./457529.js"), require("./228524.js");
var Chunk835245 = require("./835245.js"),
  Chunk317097 = require("./317097.js"),
  Chunk155718 = require("./155718.js"),
  Chunk626584 = require("./626584.js"),
  Chunk337591 = require("./337591.js"),
  Chunk731068 = require("./731068.js"),
  Chunk486020 = require("./486020.js"),
  Chunk403362 = require("./403362.js"),
  Chunk661191 = require("./661191.js"),
  Chunk489414 = require("./489414.js"),
  Chunk630446 = require("./630446.js"),
  Chunk985018 = require("./985018.jsx");
let h = new Chunk626584.A("InteractionComponentUtils"),
  m = (e, t) => ({
    id: e.id,
    name: e.name,
    animated: e.animated,
    src: t && null != e.id ? c.Ay.getEmojiURL({
      id: e.id,
      animated: e.animated || false,
      size: 48
    }) : true
  }),
  g = e => (null == e ? true : e.errorCode) === 429 ? _.intl.string(_.t.fitPBS) : _.intl.string(_.t.VCsUJu),
  E = (e, t, n) => {
    let r = (null == e ? true : e.data.interactionType) === a.G4.MESSAGE_COMPONENT && (null == e ? true : e.state) === o.m.FAILED ? e.data.componentId : null;
    if (null != (null != r ? v(n, r) : null)) {
      var i;
      return null != (i = null == t ? true : t.interactionError) ? i : g(e)
    }
  };

function b(e) {
  var t;
  return null != (t = e.placeholder) ? t : _.intl.string(_.t.Otr6W2)
}
let y = e => {
  switch (e) {
    case a.I5.ACTION_ROW:
    case a.I5.BUTTON:
    case a.I5.STRING_SELECT:
    case a.I5.TEXT_INPUT:
    case a.I5.USER_SELECT:
    case a.I5.ROLE_SELECT:
    case a.I5.MENTIONABLE_SELECT:
    case a.I5.CHANNEL_SELECT:
    case a.I5.SECTION:
    case a.I5.TEXT_DISPLAY:
    case a.I5.THUMBNAIL:
    case a.I5.MEDIA_GALLERY:
    case a.I5.FILE:
    case a.I5.SEPARATOR:
    case a.I5.CONTAINER:
    case a.I5.LABEL:
    case a.I5.FILE_UPLOAD:
    case a.I5.CHECKPOINT_CARD:
    case a.I5.RADIO_GROUP:
    case a.I5.CHECKBOX_GROUP:
    case a.I5.CHECKBOX:
      returntrue;
    case a.I5.CONTENT_INVENTORY_ENTRY:
      return (0, p.yC)("canShowComponent");
    case a.I5.UNKNOWN:
    default:
      returnfalse
  }
};

function O(e) {
  let t = new Map;
  for (let n of e) A(t, n);
  return t
}

function A(e, t) {
  switch (e.set(t.id, t), t.type) {
    case a.I5.ACTION_ROW:
      t.components.forEach(t => A(e, t));
      break;
    case a.I5.SECTION:
      t.components.forEach(t => A(e, t)), A(e, t.accessory);
      break;
    case a.I5.CONTAINER:
      t.components.forEach(t => A(e, t))
  }
}

function v(e, t) {
  var n, r, i;
  switch (e.type) {
    case a.I5.ACTION_ROW:
      return null != (n = e.components.find(e => e.id === t)) ? n : null;
    case a.I5.SECTION:
      if (e.accessory.id === t) return e.accessory;
      return null != (r = e.components.find(e => e.id === t)) ? r : null;
    case a.I5.CONTAINER:
      return null != (i = e.components.find(e => e.id === t)) ? i : null
  }
}

function S(e) {
  let t = Array.from(O(e).values()).filter(e => e.type === a.I5.TEXT_DISPLAY).map(e => e.content).join("\n");
  return "" !== t ? t : null
}

function I(e, t) {
  function n(e) {
    let r = arguments.length > 1 && true !== arguments[1] ? arguments[1] : [];
    for (let i of e) {
      let e = T(i);
      if (e.some(e => e.id === t.id)) return [i, ...r];
      let a = n(e, [i, ...r]);
      if (null != a) return a
    }
    return null
  }
  return n(e)
}

function T(e) {
  switch (e.type) {
    case a.I5.ACTION_ROW:
      return e.components;
    case a.I5.SECTION:
      return [...e.components, e.accessory];
    case a.I5.CONTAINER:
      return e.components;
    case a.I5.LABEL:
      return [e.component];
    case a.I5.BUTTON:
    case a.I5.STRING_SELECT:
    case a.I5.TEXT_INPUT:
    case a.I5.USER_SELECT:
    case a.I5.ROLE_SELECT:
    case a.I5.MENTIONABLE_SELECT:
    case a.I5.CHANNEL_SELECT:
    case a.I5.TEXT_DISPLAY:
    case a.I5.THUMBNAIL:
    case a.I5.MEDIA_GALLERY:
    case a.I5.FILE:
    case a.I5.SEPARATOR:
    case a.I5.CONTENT_INVENTORY_ENTRY:
    case a.I5.FILE_UPLOAD:
    case a.I5.CHECKPOINT_CARD:
    case a.I5.RADIO_GROUP:
    case a.I5.CHECKBOX_GROUP:
    case a.I5.CHECKBOX:
      return [];
    default:
      return h.warn("getComponentChildren: Unknown component type", e.type), []
  }
}

function C(e) {
  var t, n, i;
  return JSON.stringify({
    type: "component-upload",
    containerId: e,
    uniqueId: null != (t = null == (n = (i = crypto).randomUUID) ? true : n.call(i)) ? t : (0, r.A)()
  })
}

function N(e) {
  try {
    let t = JSON.parse(e);
    if ((null == t ? true : t.type) !== "component-upload" || "string" != typeof t.containerId || "string" != typeof t.uniqueId) return null;
    return t
  } catch (e) {
    return null
  }
}

function R(e) {
  return e.map((e, t) => w(e, [t])).filter(e => null != e)
}

function w(e, t) {
  var n, r, s, o, c, p, _, g, E, b, O, A;
  if (!y(e.type)) return null;

  function v(e, n) {
    let r = w(e, [...t, n]);
    return null == r ? null : r
  }
  let S = false;
  switch (e.type) {
    case a.I5.ACTION_ROW: {
      let n = e.components.map((e, t) => v(e, t)).filter(u.Vq);
      return {
        type: a.I5.ACTION_ROW,
        id: P(t),
        components: n
      }
    }
    case a.I5.BUTTON: {
      let n = null != e.emoji ? m(e.emoji, S) : true;
      return {
        type: a.I5.BUTTON,
        id: P(t),
        customId: e.custom_id,
        style: e.style,
        disabled: e.disabled,
        url: e.url,
        label: e.label,
        emoji: n,
        skuId: e.sku_id
      }
    }
    case a.I5.STRING_SELECT:
      return {
        type: a.I5.STRING_SELECT, id: P(t), customId: e.custom_id, disabled: e.disabled, required: null != (n = e.required) && n, options: e.options.map(e => ({
          type: f.iw.STRING,
          label: e.label,
          value: e.value,
          default: e.default,
          description: e.description,
          emoji: null != e.emoji ? m(e.emoji, S) : true
        })), placeholder: e.placeholder, minValues: e.min_values, maxValues: e.max_values
      };
    case a.I5.TEXT_INPUT:
      return {
        type: e.type, id: P(t), style: e.style, customId: e.custom_id, label: e.label, value: e.value, placeholder: e.placeholder, disabled: e.disabled, required: null != (r = e.required) && r, minLength: e.min_length, maxLength: e.max_length
      };
    case a.I5.USER_SELECT:
      return {
        type: a.I5.USER_SELECT, id: P(t), customId: e.custom_id, disabled: e.disabled, required: null != (s = e.required) && s, placeholder: e.placeholder, minValues: e.min_values, maxValues: e.max_values, defaultValues: e.default_values
      };
    case a.I5.ROLE_SELECT:
      return {
        type: a.I5.ROLE_SELECT, id: P(t), customId: e.custom_id, disabled: e.disabled, required: null != (o = e.required) && o, placeholder: e.placeholder, minValues: e.min_values, maxValues: e.max_values, defaultValues: e.default_values
      };
    case a.I5.MENTIONABLE_SELECT:
      return {
        type: a.I5.MENTIONABLE_SELECT, id: P(t), customId: e.custom_id, disabled: e.disabled, required: null != (c = e.required) && c, placeholder: e.placeholder, minValues: e.min_values, maxValues: e.max_values, defaultValues: e.default_values
      };
    case a.I5.CHANNEL_SELECT:
      return {
        type: a.I5.CHANNEL_SELECT, id: P(t), customId: e.custom_id, disabled: e.disabled, required: null != (p = e.required) && p, placeholder: e.placeholder, minValues: e.min_values, maxValues: e.max_values, channelTypes: e.channel_types, defaultValues: e.default_values
      };
    case a.I5.SECTION: {
      let n = e.components.map((e, t) => v(e, t)).filter(u.Vq),
        r = v(e.accessory, n.length);
      if (0 === n.length || null == r) return null;
      return {
        type: a.I5.SECTION,
        id: P(t),
        components: n,
        accessory: r
      }
    }
    case a.I5.TEXT_DISPLAY:
      return {
        type: a.I5.TEXT_DISPLAY, id: P(t), content: e.content
      };
    case a.I5.THUMBNAIL:
      return {
        type: a.I5.THUMBNAIL, id: P(t), media: (0, l.Uv)(e.media), description: e.description, spoiler: e.spoiler
      };
    case a.I5.MEDIA_GALLERY:
      return {
        type: a.I5.MEDIA_GALLERY, id: P(t), items: e.items.map(e => ({
          media: (0, l.Uv)(e.media),
          description: e.description,
          spoiler: e.spoiler
        }))
      };
    case a.I5.FILE:
      return {
        type: a.I5.FILE, id: P(t), file: (0, l.Uv)(e.file), name: e.name, size: e.size, spoiler: e.spoiler
      };
    case a.I5.SEPARATOR:
      return {
        type: a.I5.SEPARATOR, id: P(t), divider: null == (_ = e.divider) || _, spacing: null != (g = e.spacing) ? g : a.C8.SMALL
      };
    case a.I5.CONTENT_INVENTORY_ENTRY:
      if (null == e.content_inventory_entry) return null;
      return {
        type: a.I5.CONTENT_INVENTORY_ENTRY, id: P(t), contentInventoryEntry: e.content_inventory_entry
      };
    case a.I5.CONTAINER: {
      let n = e.components.map((e, t) => v(e, t)).filter(u.Vq);
      return {
        type: a.I5.CONTAINER,
        id: P(t),
        accentColor: null != e.accent_color ? (0, i.$k)(e.accent_color, true) : true,
        spoiler: e.spoiler,
        components: n
      }
    }
    case a.I5.LABEL: {
      let n = v(e.component, 0);
      if (null == n) return null;
      return {
        type: a.I5.LABEL,
        id: P(t),
        label: e.label,
        description: e.description,
        component: n
      }
    }
    case a.I5.FILE_UPLOAD:
      return {
        type: e.type, id: P(t), customId: e.custom_id, disabled: e.disabled, required: null != (E = e.required) && E, minValues: e.min_values, maxValues: e.max_values
      };
    case a.I5.CHECKPOINT_CARD: {
      let n = e.checkpoint_data;
      return {
        type: e.type,
        id: P(t),
        checkpointData: {
          cardId: n.card_id,
          powerLevel: n.power_level,
          powerLevelPercentile: n.power_level_percentile,
          numMessagesSent: n.num_messages_sent,
          totalVoiceMinutes: n.total_voice_minutes,
          numEmojisSent: n.num_emojis_sent,
          topGuild: null != n.top_guild ? {
            guildId: n.top_guild.guild_id,
            guildName: n.top_guild.guild_name,
            guildIcon: n.top_guild.guild_icon
          } : true,
          topEmoji: null != n.top_emoji ? {
            emojiId: d.default.isProbablyAValidSnowflake(n.top_emoji.emoji_id) ? n.top_emoji.emoji_id : true,
            emojiName: null == (b = n.top_emoji) ? true : b.emoji_name
          } : true,
          topGame: null != n.top_game ? {
            applicationId: n.top_game.application_id,
            applicationName: n.top_game.application_name,
            applicationImageId: n.top_game.application_image_id
          } : true
        }
      }
    }
    case a.I5.RADIO_GROUP:
      return {
        type: e.type, id: P(t), customId: e.custom_id, options: e.options, required: null != (O = e.required) && O
      };
    case a.I5.CHECKBOX_GROUP:
      return {
        type: e.type, id: P(t), customId: e.custom_id, options: e.options, minValues: e.min_values, maxValues: e.max_values, required: null != (A = e.required) && A
      };
    case a.I5.CHECKBOX:
      return {
        type: e.type, id: P(t), customId: e.custom_id,
          default: e.default
      };
    default:
      return h.warn("transformComponent: Unknown component type", e.type), null
  }
}

function P(e) {
  return (0, f.X1)(e.join(","))
}