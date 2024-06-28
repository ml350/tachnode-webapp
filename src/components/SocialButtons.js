import * as React from 'react';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import TwitterIcon from '@mui/icons-material/Twitter';
import LanguageIcon from '@mui/icons-material/Language';

function SocialButtons() {
  return (
    <Box sx={{ display: 'flex', gap: 0.5 }}>
      <IconButton
        href="https://twitter.com/your_twitter_handle"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Twitter"
      >
        <TwitterIcon />
      </IconButton>
      <IconButton
        href="https://discord.gg/dFxnvkCdgq"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Discord"
      >
        <LanguageIcon />
      </IconButton>
    </Box>
  );
}

export default SocialButtons;