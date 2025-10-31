/** Chunk was on 88647 **/
/** chunk id: 268967, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => r
});
let r = Object.freeze({
  "voice-conversations": {
    popoutOffset: {
      x: 45,
      y: 0
    }
  },
  "writing-messages": {
    prerequisites: ["voice-conversations"],
    popoutOffset: {
      x: false,
      y: 0
    }
  },
  "direct-messages": {
    popoutOffset: {
      x: 50,
      y: 0
    }
  },
  "create-first-server": {
    popoutOffset: {
      x: 45,
      y: 0
    }
  },
  "organize-by-topic": {
    popoutOffset: {
      x: 50,
      y: 0
    }
  },
  "instant-invite": {
    prerequisites: ["organize-by-topic"],
    popoutOffset: {
      x: false,
      y: 0
    }
  },
  "whos-online": {
    prerequisites: ["instant-invite"],
    popoutOffset: {
      x: false,
      y: 0
    }
  },
  "server-settings": {
    prerequisites: ["instant-invite"],
    popoutOffset: {
      y: 32,
      x: 0
    }
  },
  "friends-list": {
    prerequisites: ["instant-invite"],
    popoutOffset: {
      x: 45,
      y: 0
    }
  },
  "create-more-servers": {
    prerequisites: ["server-settings"],
    popoutOffset: {
      x: 45,
      y: 0
    }
  }
})