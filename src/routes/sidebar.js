/** Icons are imported separately to reduce build time */
import BellIcon from '@heroicons/react/24/outline/BellIcon';
import DocumentTextIcon from '@heroicons/react/24/outline/DocumentTextIcon';
import Squares2X2Icon from '@heroicons/react/24/outline/Squares2X2Icon';
import TableCellsIcon from '@heroicons/react/24/outline/TableCellsIcon';
import WalletIcon from '@heroicons/react/24/outline/WalletIcon';
import CodeBracketSquareIcon from '@heroicons/react/24/outline/CodeBracketSquareIcon';
import DocumentIcon from '@heroicons/react/24/outline/DocumentIcon';
import ExclamationTriangleIcon from '@heroicons/react/24/outline/ExclamationTriangleIcon';
import CalendarDaysIcon from '@heroicons/react/24/outline/CalendarDaysIcon';
import ArrowRightOnRectangleIcon from '@heroicons/react/24/outline/ArrowRightOnRectangleIcon';
import UserIcon from '@heroicons/react/24/outline/UserIcon';
import Cog6ToothIcon from '@heroicons/react/24/outline/Cog6ToothIcon';
import BoltIcon from '@heroicons/react/24/outline/BoltIcon';
import ChartBarIcon from '@heroicons/react/24/outline/ChartBarIcon';
import CurrencyDollarIcon from '@heroicons/react/24/outline/CurrencyDollarIcon';
import InboxArrowDownIcon from '@heroicons/react/24/outline/InboxArrowDownIcon';
import UsersIcon from '@heroicons/react/24/outline/UsersIcon';
import KeyIcon from '@heroicons/react/24/outline/KeyIcon';
import DocumentDuplicateIcon from '@heroicons/react/24/outline/DocumentDuplicateIcon';

import { MdCampaign, MdCategory, MdProductionQuantityLimits } from 'react-icons/md';
import { VscGitPullRequestNewChanges, VscFeedback } from 'react-icons/vsc';
import { FaBookBookmark, FaAddressBook, FaEye, FaRegUser, FaUserAstronaut } from 'react-icons/fa';
import { RiChatPrivateFill } from 'react-icons/ri';
import { TbLetterMSmall } from 'react-icons/tb';
import { FcAbout } from "react-icons/fc";
const iconClasses = 'h-5 w-5'; // Adjusted icon size for consistency

// Define routes for the sidebar with paths, icons, and names
const routes = [
  {
    path: '/app/dashboard',
    icon: <Squares2X2Icon className={iconClasses} />,
    name: 'Dashboard',
  },
  
  {
    
    
    name: 'User Management',
  },
  
 
  {
    path: '/app/Users',
    icon: <FaUserAstronaut className={iconClasses} />,
    name: 'Users',
  },
  
];

export default routes;
