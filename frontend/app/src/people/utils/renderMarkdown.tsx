import React, { useEffect } from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeRaw from 'rehype-raw';
import { colors } from '../../colors';

export function renderMarkdown(markdown) {
  const color = colors['light'];
  return (
    <ReactMarkdown
      children={markdown}
      remarkPlugins={[remarkGfm]}
      rehypePlugins={[rehypeRaw]}
      components={{
        code({ node, inline, className, children, ...props }) {
          return (
            <code className={className} {...props}>
              {children}
            </code>
          );
        },
        img({ className, ...props }) {
          return (
            <img
              className={className}
              style={{
                width: '100%',
                maxHeight: '100%',
                border: `1px solid ${color.black80}`,
                borderRadius: '4px'
              }}
              {...props}
            />
          );
        }
      }}
    />
  );
}
