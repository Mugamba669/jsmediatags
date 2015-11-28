/**
 * @flow
 */

var MediaFileReader = require('./MediaFileReader');

export type CallbackType = {
  onSuccess: (data: Object) => void,
  onError?: (error: Object) => void
};

export type LoadCallbackType = {
  onSuccess: () => void,
  onError?: (error: Object) => void
};

export type CharsetType =
  "utf-16" |
  "utf-16le" |
  "utf-16be" |
  "utf-8" |
  "iso-8859-1";

export type ChunkType = {
  offset: number,
  data: Array<number>
};

export type Byte = number;

export type ByteArray = Array<Byte>;

export type FrameReaderSignature = (
  offset: number,
  length: number,
  data: MediaFileReader,
  flags: ?Object,
  majorVersion?: string
) => any;

export type TagFrames = {[key: string]: TagFrame};

type TagFrame = {
  id: string,
  size: number,
  description: string,
  data: Object
};

export type TagFrameHeader = {
  id: string,
  size: number,
  headerSize: number,
  flags: ?TagFrameFlags
};

export type TagFrameFlags = {
  message: {
    tag_alter_preservation: boolean,
    file_alter_preservation: boolean,
    read_only: boolean
  },
  format: {
    grouping_identity: boolean,
    compression: boolean,
    encryption: boolean,
    unsynchronisation: boolean,
    data_length_indicator: boolean
  }
};

export type TagHeader = {
  version: string,
  major: number,
  revision: number,
  flags: TagHeaderFlags,
  size: number
};

export type TagHeaderFlags = {
  unsynchronisation: boolean,
  extended_header: boolean,
  experimental_indicator: boolean,
  footer_present: boolean
};
