import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';

import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

export default function FAQ() {
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <Container
      id="faq"
      sx={{
        pt: { xs: 4, sm: 12 },
        pb: { xs: 8, sm: 16 },
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: { xs: 3, sm: 6 },
      }}
    >
      <Typography
        component="h2"
        variant="h4"
        color="text.primary"
        sx={{
          width: { sm: '100%', md: '60%' },
          textAlign: { sm: 'left', md: 'center' },
        }}
      >
        Frequently asked questions
      </Typography>
      <Typography
        component="h4"
        variant="h5"
        color="text.primary"
        sx={{
          width: { sm: '100%', md: '100%' },
          textAlign: { sm: 'left', md: 'left' },
        }}
      >
        General Information
      </Typography>
      <Box sx={{ width: '100%' }}>
        <Accordion
          expanded={expanded === 'panel1'}
          onChange={handleChange('panel1')}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1d-content"
            id="panel1d-header"
          >
            <Typography component="h3" variant="subtitle2">
              What is the price for a 1-month subscription to the node service?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography
              variant="body2"
              gutterBottom
              sx={{ maxWidth: { sm: '100%', md: '70%' } }}
            >
              The price for a 1-month subscription is $150.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion
          expanded={expanded === 'panel2'}
          onChange={handleChange('panel2')}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2d-content"
            id="panel2d-header"
          >
            <Typography component="h3" variant="subtitle2">
               Where is the node hosted?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography
              variant="body2"
              gutterBottom
              sx={{ maxWidth: { sm: '100%', md: '70%' } }}
            >
               The node is hosted in Germany, in the same Data Center as the VPS to reduce latency. It's located close to the Jito location to ensure fast response times.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion
          expanded={expanded === 'panel3'}
          onChange={handleChange('panel3')}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel3d-content"
            id="panel3d-header"
          >
            <Typography component="h3" variant="subtitle2">
              Who manages the node service?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography
              variant="body2"
              gutterBottom
              sx={{ maxWidth: { sm: '100%', md: '70%' } }}
            >
              The service is managed by a team. The team members listed as Admins, including @binary_gatsby, handle different aspects like networking and infrastructure.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion
          expanded={expanded === 'panel4'}
          onChange={handleChange('panel4')}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel4d-content"
            id="panel4d-header"
          >
            <Typography component="h3" variant="subtitle2">
              What kind of access do I get with the VPS?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography
              variant="body2"
              gutterBottom
              sx={{ maxWidth: { sm: '100%', md: '70%' } }}
            >
              You get dedicated node access through the VPS, including 20 proxies to prevent rate limiting by Jito.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion
          expanded={expanded === 'panel5'}
          onChange={handleChange('panel5')}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel5d-content"
            id="panel4d-header"
          >
            <Typography component="h3" variant="subtitle2">
            Is there a rate limit on the RPC calls?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography
              variant="body2"
              gutterBottom
              sx={{ maxWidth: { sm: '100%', md: '70%' } }}
            >
              Yes, the service rate limits RPC calls to 100 transactions per second (TPS), which is ample for most users.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion
          expanded={expanded === 'panel6'}
          onChange={handleChange('panel6')}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel6d-content"
            id="panel4d-header"
          >
            <Typography component="h3" variant="subtitle2">
            What kind of environment does the node operate on?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography
              variant="body2"
              gutterBottom
              sx={{ maxWidth: { sm: '100%', md: '70%' } }}
            >
              The node runs on a Linux KVM with Full Ubuntu. It includes a WebUI for managing the KVM, which requires 2FA setup on the first login for security.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion
          expanded={expanded === 'panel7'}
          onChange={handleChange('panel7')}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel7d-content"
            id="panel4d-header"
          >
            <Typography component="h3" variant="subtitle2">
              Does the node support Geyser?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography
              variant="body2"
              gutterBottom
              sx={{ maxWidth: { sm: '100%', md: '70%' } }}
            >
              Yes, the node supports Geyser, which provides a fast and efficient data streaming option.
            </Typography>
          </AccordionDetails>
        </Accordion>
      </Box>
      <Typography
        component="h4"
        variant="h5"
        color="text.primary"
        sx={{
          width: { sm: '100%', md: '100%' },
          textAlign: { sm: 'left', md: 'left' },
        }}
      >
        Performance and Testing
      </Typography>
      <Box sx={{ width: '100%' }}>
        <Accordion
          expanded={expanded === 'panel8'}
          onChange={handleChange('panel8')}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel8d-content"
            id="panel1d-header"
          >
            <Typography component="h3" variant="subtitle2">
              How fast are the transactions with this node?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography
              variant="body2"
              gutterBottom
              sx={{ maxWidth: { sm: '100%', md: '70%' } }}
            >
              Users have reported response times significantly faster than other services, like QuickNode, which charges $300/month. You can expect faster transaction times, especially with higher transaction tips.
            </Typography>
          </AccordionDetails>
        </Accordion> 

        <Accordion
          expanded={expanded === 'panel9'}
          onChange={handleChange('panel9')}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel9d-content"
            id="panel1d-header"
          >
            <Typography component="h3" variant="subtitle2">
            Can I test the service before committing to a full month?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography
              variant="body2"
              gutterBottom
              sx={{ maxWidth: { sm: '100%', md: '70%' } }}
            >
              Yes, you can test the service for one day for a cost of 0.1 SOL.
            </Typography>
          </AccordionDetails>
        </Accordion> 

         <Accordion
          expanded={expanded === 'panel10'}
          onChange={handleChange('panel10')}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel10d-content"
            id="panel1d-header"
          >
            <Typography component="h3" variant="subtitle2">
            How do I sign up for the service?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography
              variant="body2"
              gutterBottom
              sx={{ maxWidth: { sm: '100%', md: '70%' } }}
            >
              To sign up, send your payment to the specified wallet address: 86zS2NS4NtDsJoyFYqSemWVksUwk93varFCE5pViEmQX. Then, create a ticket confirming your name, wallet address, and email. Server details and relevant information will be sent to you via email within 24 hours.
            </Typography>
          </AccordionDetails>
        </Accordion> 
      </Box>
      <Typography
        component="h4"
        variant="h5"
        color="text.primary"
        sx={{
          width: { sm: '100%', md: '100%' },
          textAlign: { sm: 'left', md: 'left' },
        }}
      >
        Additional Features
      </Typography>
      <Box sx={{ width: '100%' }}>
        <Accordion
          expanded={expanded === 'panel11'}
          onChange={handleChange('panel11')}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel11d-content"
            id="panel1d-header"
          >
            <Typography component="h3" variant="subtitle2">
              What other tools and features are provided?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography
              variant="body2"
              gutterBottom
              sx={{ maxWidth: { sm: '100%', md: '70%' } }}
            >
              The service offers a gRPC endpoint if your bot supports it, which can be faster than Jito. There's also a web interface for easy file uploads and transaction logs for monitoring outbound transactions.
            </Typography>
          </AccordionDetails>
        </Accordion> 

        <Accordion
          expanded={expanded === 'panel12'}
          onChange={handleChange('panel12')}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel12d-content"
            id="panel1d-header"
          >
            <Typography component="h3" variant="subtitle2">
            How do I manage files and logs?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography
              variant="body2"
              gutterBottom
              sx={{ maxWidth: { sm: '100%', md: '70%' } }}
            >
              You can upload files through a drag-and-drop web interface that copies them to your desktop environment under /mnt/data. Transaction logs are located at /var/log/haproxy.log.
            </Typography>
          </AccordionDetails>
        </Accordion> 

         <Accordion
          expanded={expanded === 'panel13'}
          onChange={handleChange('panel13')}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel13d-content"
            id="panel1d-header"
          >
            <Typography component="h3" variant="subtitle2">
            What is the default password and security setup?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography
              variant="body2"
              gutterBottom
              sx={{ maxWidth: { sm: '100%', md: '70%' } }}
            >
              The default password for the environment is happyrpc!, but you will set up 2FA during your first login to secure the KVM.
            </Typography>
          </AccordionDetails>
        </Accordion> 
      </Box>
    </Container>
  );
}
