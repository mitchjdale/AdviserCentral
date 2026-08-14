import { useState } from 'react';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import {
  AppBar,
  Avatar,
  Box,
  Chip,
  Drawer,
  IconButton,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Stack,
  Toolbar,
  Typography,
  useMediaQuery,
} from '@mui/material';
import { useTheme } from '@mui/material/styles';
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import InsightsRoundedIcon from '@mui/icons-material/InsightsRounded';
import { navItems } from '../data/navigation';

const DRAWER_WIDTH = 268;

/** Application shell: fixed left navigation + top bar + routed content. */
export default function AppLayout() {
  const theme = useTheme();
  const navigate = useNavigate();
  const location = useLocation();
  const isDesktop = useMediaQuery(theme.breakpoints.up('md'));
  const [mobileOpen, setMobileOpen] = useState(false);

  const drawerContent = (
    <Box sx={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
      <Box sx={{ px: 3, py: 3 }}>
        <Stack direction="row" spacing={1.5} sx={{ alignItems: 'center' }}>
          <Avatar
            variant="rounded"
            sx={{
              bgcolor: 'primary.main',
              width: 40,
              height: 40,
              boxShadow: '0 6px 16px rgba(30,94,255,0.35)',
            }}
          >
            <InsightsRoundedIcon />
          </Avatar>
          <Box>
            <Typography variant="subtitle2" sx={{ fontWeight: 700, color: 'text.primary', lineHeight: 1.2 }}>
              Adviser Central
            </Typography>
            <Typography variant="caption" color="text.secondary">
              Practice Analytics
            </Typography>
          </Box>
        </Stack>
      </Box>

      <List sx={{ px: 2, flexGrow: 1 }}>
        {navItems.map((item) => {
          const selected = location.pathname === item.path;
          const Icon = item.icon;
          return (
            <ListItemButton
              key={item.path}
              selected={selected}
              onClick={() => {
                navigate(item.path);
                if (!isDesktop) setMobileOpen(false);
              }}
              sx={{
                borderRadius: 2,
                mb: 0.5,
                '&.Mui-selected': {
                  bgcolor: 'primary.main',
                  color: '#fff',
                  '& .MuiListItemIcon-root': { color: '#fff' },
                  '&:hover': { bgcolor: 'primary.dark' },
                },
              }}
            >
              <ListItemIcon sx={{ minWidth: 40, color: 'text.secondary' }}>
                <Icon />
              </ListItemIcon>
              <ListItemText
                primary={item.label}
                slotProps={{ primary: { variant: 'body2', sx: { fontWeight: selected ? 600 : 500 } } }}
              />
              {!item.implemented && (
                <Chip
                  label="Soon"
                  size="small"
                  sx={{
                    height: 20,
                    fontSize: 10,
                    fontWeight: 600,
                    bgcolor: selected ? 'rgba(255,255,255,0.2)' : 'background.default',
                    color: selected ? '#fff' : 'text.secondary',
                    border: selected ? 'none' : `1px solid ${theme.palette.divider}`,
                  }}
                />
              )}
            </ListItemButton>
          );
        })}
      </List>

      <Box sx={{ p: 2 }}>
        <Box
          sx={{
            p: 2,
            borderRadius: 2,
            bgcolor: 'background.default',
            border: `1px solid ${theme.palette.divider}`,
          }}
        >
          <Typography variant="caption" color="text.secondary">
            Version 1.0 · More KPIs are on the way. See the roadmap in the README.
          </Typography>
        </Box>
      </Box>
    </Box>
  );

  return (
    <Box sx={{ display: 'flex', minHeight: '100vh', bgcolor: 'background.default' }}>
      <AppBar
        position="fixed"
        elevation={0}
        sx={{
          width: { md: `calc(100% - ${DRAWER_WIDTH}px)` },
          ml: { md: `${DRAWER_WIDTH}px` },
          bgcolor: 'rgba(255,255,255,0.8)',
          backdropFilter: 'blur(8px)',
          borderBottom: `1px solid ${theme.palette.divider}`,
          color: 'text.primary',
        }}
      >
        <Toolbar>
          <IconButton
            edge="start"
            onClick={() => setMobileOpen(true)}
            sx={{ mr: 2, display: { md: 'none' } }}
          >
            <MenuRoundedIcon />
          </IconButton>
          <Typography variant="subtitle1" sx={{ color: 'text.primary', fontWeight: 600, flexGrow: 1 }}>
            {navItems.find((i) => i.path === location.pathname)?.label ?? 'Adviser Central'}
          </Typography>
          <Avatar sx={{ bgcolor: 'primary.light', width: 36, height: 36 }}>AC</Avatar>
        </Toolbar>
      </AppBar>

      <Box component="nav" sx={{ width: { md: DRAWER_WIDTH }, flexShrink: { md: 0 } }}>
        <Drawer
          variant="temporary"
          open={mobileOpen}
          onClose={() => setMobileOpen(false)}
          ModalProps={{ keepMounted: true }}
          sx={{
            display: { xs: 'block', md: 'none' },
            '& .MuiDrawer-paper': { width: DRAWER_WIDTH, borderRight: `1px solid ${theme.palette.divider}` },
          }}
        >
          {drawerContent}
        </Drawer>
        <Drawer
          variant="permanent"
          open
          sx={{
            display: { xs: 'none', md: 'block' },
            '& .MuiDrawer-paper': { width: DRAWER_WIDTH, borderRight: `1px solid ${theme.palette.divider}`, bgcolor: 'background.paper' },
          }}
        >
          {drawerContent}
        </Drawer>
      </Box>

      <Box
        component="main"
        sx={{
          flexGrow: 1,
          width: { md: `calc(100% - ${DRAWER_WIDTH}px)` },
          p: { xs: 2, sm: 3, md: 4 },
          mt: 8,
        }}
      >
        <Outlet />
      </Box>
    </Box>
  );
}
