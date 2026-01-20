export interface StyleProps {
  // Colors
  color?: string;
  backgroundColor?: string;
  borderColor?: string;
  textColor?: string;

  // Spacing
  padding?: string;
  paddingTop?: string;
  paddingRight?: string;
  paddingBottom?: string;
  paddingLeft?: string;
  margin?: string;
  marginTop?: string;
  marginRight?: string;
  marginBottom?: string;
  marginLeft?: string;

  // Typography
  fontSize?: string;
  fontWeight?: string;
  fontFamily?: string;
  fontStyle?: string;
  lineHeight?: string;
  letterSpacing?: string;
  textAlign?: string;

  // Layout
  display?: string;
  flexDirection?: string;
  justifyContent?: string;
  alignItems?: string;
  gap?: string;
  width?: string;
  height?: string;
  minWidth?: string;
  maxWidth?: string;
  minHeight?: string;
  maxHeight?: string;

  // Border & Radius
  borderStyle?: string;
  borderWidth?: string;
  borderRadius?: string;

  // Effects
  opacity?: string;
  boxShadow?: string;
  filter?: string;
}

export interface BloomComponent {
  id: string;
  type: 'container' | 'button' | 'text' | 'card' | 'input' | 'image' | 'heading';
  label?: string;
  content?: string;
  children?: BloomComponent[];
  styles: StyleProps;
}

export interface BloomScreen {
  id: string;
  name: string;
  components: BloomComponent[];
  metadata?: {
    createdAt?: string;
    updatedAt?: string;
    description?: string;
  };
}

export interface EditorState {
  screen: BloomScreen;
  selectedComponentId: string | null;
  isDirty: boolean;
}
