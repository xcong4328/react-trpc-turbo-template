import type { SvgIconComponent } from '@mui/icons-material';
import type { LinkProps } from '@tanstack/react-router';

// import type { Feature } from 'database';
// import type { NavigationGroup, Page } from 'models';

export type To = LinkProps['to'];

export type RouteItemMeta = {
  type: 'item';
  path: string;
//   page: Page;
  Icon: SvgIconComponent;
  countHook: (() => number) | undefined;
//   features: [Feature, ...Feature[]] | undefined;
};

type RouteGroupMeta = {
  type: 'group';
  children: [RouteItemMeta, ...RouteItemMeta[]];
//   group: NavigationGroup;
  Icon: SvgIconComponent;
//   features: [Feature, ...Feature[]] | undefined;
};

export type RouteMeta = RouteItemMeta | RouteGroupMeta;
